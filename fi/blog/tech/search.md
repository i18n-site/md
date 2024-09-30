# Puhdas etupään käänteinen kokotekstihaku

## Järjestys

Useiden viikkojen kehitystyön jälkeen [i18n.site](//i18n.site) (puhtaasti staattinen markdown monikielinen & rakennustyökalu) tukee nyt puhdasta etupään kokotekstihakua.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Tämä artikkeli jakaa `i18n.site` puhdasta etupään kokotekstihakutekniikan toteutusta, ja voit kokeilla hakutehoa [i18n.site](//i18n.site).

Koodi on avoimen lähdekoodin [hakuydin](//github.com/i18n-site/ie/tree/main/qy) / [käyttöliittymä](//github.com/i18n-site/plugin/tree/main/qy)

## Yleiskatsaus palvelimettomiin kokotekstihakuratkaisuihin

Pienille verkkosivustoille, kuten asiakirjoille/henkilökohtaisille blogeille, jotka ovat puhtaasti staattisia, on epäilemättä liian raskasta rakentaa itse kokotekstihaun taustaohjelma, ja palvelimettomat kokotekstihaku on epäilemättä parempi vaihtoehto.

Nykyiset palvelimettomat kokotekstihakuratkaisut jakautuvat kahteen laajaan luokkaan.

Yksi on kolmannen osapuolen hakupalveluntarjoaja, kuten [algolia.com](//algolia.com), joka tarjoaa etupään kokotekstihakukomponentteja.

Tällaiset palvelut vaativat maksua, eivätkä ne ole Manner-Kiinan käyttäjien saatavilla verkkosivustojen yhteensopivuusongelmien vuoksi.

Ne eivät ole saatavilla offline-tilassa, eivätkä ne ole saatavilla intranetissä, ja niillä on suuria rajoituksia. Tässä artikkelissa ei käsitellä paljon.

Toinen on puhdas etupään kokotekstihaku.

Tunnetuimpia puhtaita käyttöliittymän kokotekstihakuja [lunrjs](/0) ja [ ElasticLunr.js ] [https://github.com/weixsong/elasticlunr.js](%E5%9F%BA%E4%BA%8E%60lunrjs%60%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91) .

`lunrjs` tarjoaa kaksi tapaa rakentaa indeksejä, mutta molemmissa on omat ongelmansa.

1. Valmiiksi rakennetut indeksitiedostot

   Koska indeksi sisältää kaikkien asiakirjojen sanat, se on kooltaan suuri.
   Aina kun asiakirjaa lisätään tai sitä muutetaan, uusi indeksitiedosto on ladattava.
   Se lisää käyttäjän odotusaikaa ja kuluttaa paljon kaistanleveyttä.

2. Lataa asiakirjoja ja luo indeksejä reaaliajassa

   Indeksin luominen on laskennallisesti intensiivinen tehtävä, ja indeksin uudelleen rakentaminen joka kerta, kun sitä käytetään, aiheuttaa ilmeisiä viiveitä ja huonon käyttökokemuksen.

`lunrjs`-lisäksi on olemassa joitain muita kokotekstihakuratkaisuja, kuten:

[fusejs](https://www.fusejs.io), joka laskee haettavien merkkijonojen välinen samankaltaisuus.

Tämän ratkaisun suorituskyky on erittäin heikko, eikä sitä voida käyttää kokotekstihakuun (katso [Fuse.js Pitkä kysely kestää yli 10 sekuntia, kuinka se optimoidaan?](https://stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries)).

[TinySearch](https://github.com/tinysearch/tinysearch), joka käyttää etsimiseen Bloom-suodatinta, sitä ei voi käyttää etuliitehakuun (esimerkiksi kirjoita `goo`, haku `good`, `google`), eikä vastaavaa automaattista täydennystehoa voi saada.

Tyytymättömyydestä olemassa olevien ratkaisujen puutteisiin `i18n.site` kehitti uuden puhtaan etupään kokotekstihakuratkaisun, jossa on seuraavat ominaisuudet:

1. Tukee monikielistä hakua, on kooltaan pieni, hakuytimen pakattu `gzip`-koko on `6.9KB` (vertailun vuoksi, `lunrjs`-koko on `25KB`)
1. Rakennettu `indexedb`-perusteella, joka vie vähemmän muistia ja on nopea
1. Kun asiakirjoja lisätään/muokataan, vain lisätyt tai muokatut asiakirjat indeksoidaan uudelleen, mikä vähentää laskelmien määrää
1. Tukee etuliitehakua, joka voi näyttää hakutulokset reaaliajassa käyttäjän kirjoittaessa
1. Saatavilla offline-tilassa

Tässä esitellään yksityiskohtaisesti `i18n.site` teknistä toteutusta.

## Monikielinen sanan segmentointi

Sanan segmentointi käyttää selaimen alkuperäistä sanasegmentointia `Intl.Segmenter`, ja kaikki yleiset selaimet tukevat tätä käyttöliittymää.

![](https://p.3ti.site/1727667759.avif)

Sanan segmentointi `coffeescript`-koodi on seuraava:

```coffee
SEG = new Intl.Segmenter 0, granularity: "word"

seg = (txt) =>
  r = []
  for {segment} from SEG.segment(txt)
    for i from segment.split('.')
      i = i.trim()
      if i and !'|`'.includes(i) and !/\p{P}/u.test(i)
        r.push i
  r

export default seg

export segqy = (q) =>
  seg q.toLocaleLowerCase()
```

Erityisesti:

* `/\p{P}/` on säännöllinen lauseke, joka vastaa välimerkkejä. Erityisiä vastaavia symboleja ovat: `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _ ` { | } ~. `.</p><ul><li> `split('.')` johtuu siitä, että `Firefox` selainsanan segmentointi ei segmentoi `.` .</li>


## Indeksin rakentaminen

`word`: id - sana

* `doc`: id - asiakirjan URL - asiakirjan versionumero
* `docWord`: asiakirjan id - sanan id
* `prefix`: etuliite - sanan id
* `rindex`: sanan id - asiakirjan id: rivinumeron joukko
* `rindex` : Sanaid - Dokumenttid : Rivinumeroiden joukko

Anna dokumentin `url` ja versio `ver` -joukko, etsi `doc`-taulukosta, onko dokumentti olemassa. Jos ei, luo käänteinen indeksi. Poista samalla käänteinen indeksi niiltä dokumenteilta, joita ei ole toimitettu.

Tällä tavalla voidaan toteuttaa inkrementaalinen indeksointi, mikä vähentää laskentaväsymystä.

Käyttöliittymässä voidaan näyttää indeksin latausprosentti, jotta voidaan vähentää viiveitä ensimmäisen latauksen yhteydessä. Katso "Animaatiolla varustettu edistyspalkki, joka perustuu progress + puhtaan CSS:n toteutukseen" [englanniksi](https://dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [kiinalaisessa](https://juejin.cn/post/7413586285954154522).

### IndexedDB:n korkea samanaikainen kirjoitus

Projekti on kehitetty [idb](https://www.npmjs.com/package/idb) -asynkronisen IndexedDB:n pohjalta.

IndexedDB:n luku ja kirjoitus ovat asynkronisia. Indeksiä luotaessa dokumentit ladataan samanaikaisesti indeksin luomiseksi.

Kilpailevan kirjoituksen aiheuttaman osittaisen tiedonmenetyksen välttämiseksi voit käyttää seuraavaa `coffeescript`-koodia ja lisätä `ing`-välimuistin lukemisen ja kirjoituksen väliin kilpailevien kirjoitusten estämiseksi.

```coffee
pusher = =>
  ing = new Map()
  (table, id, val)=>
    id_set = ing.get(id)
    if id_set
      id_set.add val
      return

    id_set = new Set([val])
    ing.set id, id_set
    pre = await table.get(id)
    li = pre?.li or []

    loop
      to_add = [...id_set]
      li.push(...to_add)
      await table.put({id,li})
      for i from to_add
        id_set.delete i
      if not id_set.size
        ing.delete id
        break
    return

rindexPush = pusher()
prefixPush = pusher()
```

## Etuliitteellä varustettu reaaliaikainen haku

Hakutulosten näyttämiseksi käyttäjän kirjoittaessa, esimerkiksi `wor`-syötteen yhteydessä, näytetään sanat, joiden etuliite on `wor`, kuten `words` ja `work`.

![](https://p.3ti.site/1727684944.avif)

Hakuydin käyttää `prefix`-taulukkoa viimeisen sanan kohdalla sanan segmentoinnin jälkeen löytääkseen kaikki etuliitteellä varustetut sanat ja etsiäkseen ne järjestyksessä.

Debouncetoiminnon `debounce` käyttö etupuolen vuorovaikutuksessa (toteutettu seuraavasti) vähentää käyttäjän syötteiden käynnistämisen frekvenssia ja vähentää laskentaväsymystä.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Haku segmentoi ensin käyttäjän kirjoittamat avainsanat

Haku segmentoi ensin käyttäjän syöttämät avainsanat.

Oletetaan, että sanan segmentoinnin jälkeen on `N` sanaa. Palautettaessa palautetaan ensin kaikki avainsanat sisältävät tulokset ja sitten tulokset, jotka sisältävät `N-1`, `N-2`, ..., `1` avainsanaa.

Ensisijaisesti näytettävät hakutulokset varmistavat kyselyn tarkkuuden, ja myöhemmin ladatut tulokset (napsauta "Lataa lisää"-painiketta) varmistavat hakunopeuden.

![](https://p.3ti.site/1727684564.avif)

## Lataus pyynnöstä

Huomaa, että joka kerta kun haet uudelleen `yield` jälkeen, sinun on avattava uudelleen kyselytapahtuma `IndexedDB`-tietokannassa.

Huomaa, että joka kerta kun haet uudelleen `yield`-jälkeen, sinun on avattava uudelleen `IndexedDB`-kyselytapahtuma.

## Etuliitteellä varustettu reaaliaikainen haku

Hakutulosten näyttämiseksi käyttäjän kirjoittaessa, esimerkiksi `wor`-syötteen yhteydessä, näytetään sanat, joiden etuliite on `wor`, kuten `words` ja `work`.

![](https://p.3ti.site/1727684944.avif)

Hakuydin käyttää `prefix`-taulukkoa viimeisen sanan kohdalla sanan segmentoinnin jälkeen löytääkseen kaikki etuliitteellä varustetut sanat ja etsiäkseen ne järjestyksessä.

Debouncetoiminnon `debounce` käyttö etupuolen vuorovaikutuksessa (toteutettu seuraavasti) vähentää käyttäjän syötteiden käynnistämisen frekvenssia ja vähentää laskentaväsymystä.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Saatavilla offline-tilassa

Indeksitaulukko ei tallenna alkuperäistä tekstiä, vaan vain sanoja, mikä vähentää tallennustilaa.

Samalla, koska `service worker` tallentaa kaikki artikkelit välimuistiin, koko verkkosivusto, mukaan lukien haku, on käytettävissä offline-tilassa, kun käyttäjä tekee haun.

Samaan aikaan, koska `service worker` tallentaa kaikki artikkelit välimuistiin, koko verkkosivusto, mukaan lukien haku, on käytettävissä offline-tilassa, kun käyttäjä tekee haun.

## MarkDown-asiakirjojen näytön optimointi

`i18n.site` :n puhdas etupään hakuratkaisu on optimoitu `MarkDown` asiakirjalle.

Yhteenveto

![](https://p.3ti.site/1727686552.avif)

## Tee yhteenveto

Se sopii erittäin hyvin pienille ja keskikokoisille verkkosivustoille, kuten asiakirjoille ja henkilökohtaisille blogeille.

Tämä ratkaisu sopii erittäin hyvin pienille ja keskikokoisille verkkosivustoille, kuten asiakirjoille ja henkilökohtaisille blogeille.