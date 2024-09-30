# Puhdas etupään käänteinen kokotekstihaku

## Järjestys

Useiden viikkojen kehitystyön jälkeen [i18n.site](//i18n.site) (puhtaasti staattinen markdown monikielinen & rakennustyökalu) tukee nyt puhdasta etupään kokotekstihakua.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Artikkeli jakaa `i18n.site`-sivuston puhtaan front-endin täystekstihaun teknisen toteutuksen, ja voit kokeilla hakutoimintoa osoitteessa [i18n.site](//i18n.site).

Koodi on avoimen lähdekoodin: [hakukone](//github.com/i18n-site/ie/tree/main/qy) / [käyttöliittymä](//github.com/i18n-site/plugin/tree/main/qy)

## Yleiskatsaus palvelimettomiin kokotekstihakuratkaisuihin

Pienille ja keskikokoisille puhtaasti staattisille verkkosivustoille, kuten asiakirjoille/henkilökohtaisille blogeille, itse rakennetun kokotekstihaun taustaohjelman rakentaminen on liian raskasta, ja palveluvapaa kokotekstihaku on yleisempi valinta.

Palvelimettomat täystekstihaun ratkaisut jakautuvat kahteen pääluokkaan:

Ensimmäinen on, että kolmannen osapuolen palveluntarjoajat, kuten [algolia.com](//algolia.com), tarjoavat täystekstihaun front-end-komponentteja.

Tällaiset palvelut vaativat maksun hakujen määrän perusteella ja ne ovat usein saatavilla vain tietyin vaatimuksin, mikä tekee niistä käyttökelvottomia Kiinan manneralueen käyttäjille.

Ne eivät ole saatavilla offline-tilassa, eivätkä ne ole saatavilla intranetissä, ja niillä on suuria rajoituksia. Tässä artikkelissa ei käsitellä paljon.

Toinen on puhtaan front-endin täystekstihaku.

Tällä hetkellä yleisiä puhtaita käyttöliittymän kokotekstihakuja ovat [lunrjs](//lunrjs.com) ja [ElasticLunr.js](//github.com/weixsong/elasticlunr.js) (perustuu `lunrjs`-kirjastoon toissijaisella kehityksellä).

`lunrjs` tarjoaa kaksi tapaa luoda indeksejä, joilla on molemmilla omat ongelmansa.

1. Valmiiksi rakennetut indeksitiedostot

   Koska indeksi sisältää kaikkien asiakirjojen sanat, se on kooltaan suuri.
   Aina kun asiakirjaa lisätään tai sitä muutetaan, uusi indeksitiedosto on ladattava.
   Se lisää käyttäjän odotusaikaa ja kuluttaa paljon kaistanleveyttä.

2. Lataa asiakirjoja ja luo indeksejä reaaliajassa

   Indeksin luominen on laskennallisesti intensiivinen tehtävä, ja indeksin uudelleen rakentaminen joka kerta, kun sitä käytetään, aiheuttaa ilmeisiä viiveitä ja huonon käyttökokemuksen.

---

`lunrjs`-lisäksi on olemassa joitain muita kokotekstihakuratkaisuja, kuten:

[fusejs](//www.fusejs.io) laskee merkkijonojen välisen samankaltaisuuden ja sitä käytetään hakutoiminnoissa.

Tämän ratkaisun suorituskyky on erittäin heikko, eikä sitä voida käyttää kokotekstihakuun (katso [Fuse.js: Pitkä haku kestää yli 10 sekuntia, kuinka se optimoidaan?](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries)).

[TinySearch](//github.com/tinysearch/tinysearch) käyttää Bloom-suodatinta etsimiseen, mutta sitä ei voida käyttää etuliitehakuun (esim. kun haetaan `goo`, ei löydy `good` tai `google`), eikä se pysty tuottamaan automaattisen täydennyksen kaltaista toiminnallisuutta.

Koska nykyiset ratkaisut ovat puutteellisia, `i18n.site` on kehittänyt uuden puhtaan front-endin täystekstihaun ratkaisun, joka sisältää seuraavat ominaisuudet:

1. Tukee monikielistä hakua, on kooltaan pieni, hakuytimen pakattu `gzip`-koko on `6.9KB` (vertailun vuoksi, `lunrjs`-koko on `25KB`)
1. Rakennettu `indexedb`-perusteella, joka vie vähemmän muistia ja on nopea
1. Kun asiakirjoja lisätään/muokataan, vain lisätyt tai muokatut asiakirjat indeksoidaan uudelleen, mikä vähentää laskelmien määrää
1. Tukee etuliitehakua, joka voi näyttää hakutulokset reaaliajassa käyttäjän kirjoittaessa
1. Saatavilla offline-tilassa

Tässä esitellään yksityiskohtaisesti `i18n.site` teknistä toteutusta.

## Monikielinen sanan segmentointi

Sanan segmentointi käyttää selaimen alkuperäistä sanasegmentointia `Intl.Segmenter`, ja kaikki yleiset selaimet tukevat tätä käyttöliittymää.

![](//p.3ti.site/1727667759.avif)

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

Käyttöliittymän vuorovaikutuksessa voidaan näyttää indeksin latauksen etenemispalkki, jotta ensimmäisen latauksen aikainen viive voidaan vähentää. Katso "Animaatiolla varustettu edistyspalkki, joka perustuu progress-elementtiin ja puhtaan CSS:n toteutukseen" [Englanniksi](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [Kiinaksi](//juejin.cn/post/7413586285954154522).

### IndexedDB:n korkea samanaikainen kirjoitus

Projekti on kehitetty IndexedDB:n asynkronisen paketin [idb](//www.npmjs.com/package/idb) pohjalta.

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

![](//p.3ti.site/1727684944.avif)

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

![](//p.3ti.site/1727684564.avif)

## Lataus pyynnöstä

Huomaa, että joka kerta kun haet uudelleen `yield` jälkeen, sinun on avattava uudelleen kyselytapahtuma `IndexedDB`-tietokannassa.

Huomaa, että joka kerta kun haet uudelleen `yield`-jälkeen, sinun on avattava uudelleen `IndexedDB`-kyselytapahtuma.

## Etuliitteellä varustettu reaaliaikainen haku

Hakutulosten näyttämiseksi käyttäjän kirjoittaessa, esimerkiksi `wor`-syötteen yhteydessä, näytetään sanat, joiden etuliite on `wor`, kuten `words` ja `work`.

![](//p.3ti.site/1727684944.avif)

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

![](//p.3ti.site/1727686552.avif)

## Tee yhteenveto

Puhtaan front-endin toteuttama käänteinen täystekstihaku, joka ei vaadi palvelinta. Se sopii erinomaisesti pienille ja keskisuurille verkkosivustoille, kuten asiakirjoille ja henkilökohtaisille blogeille.

`i18n.site` tarjoaa avoimen lähdekoodin itsekehittämänsä puhtaan front-endin täystekstihaun, joka on pienikokoinen ja nopeasti vastaava, ratkaisee nykyisten puhtaiden front-endin täystekstihaun ongelmat ja tarjoaa paremman käyttökokemuksen.