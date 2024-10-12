---

brief: |
  i18n.site tukee nyt palveluetöntä kokotekstihakua.

  Tässä artikkelissa esitellään puhtaan käyttöliittymän kokotekstihakuteknologian toteutus, joka sisältää IndexedDB:n avulla rakennetun käänteisen indeksin, etuliitehaun, sanasegmentoinnin optimoinnin sekä monikielisen tuen.

  Verrattuna olemassa oleviin ratkaisuihin i18n.site:n puhtaan käyttöliittymän kokotekstihaku on pienikokoisempi ja nopeampi, sopii erinomaisesti pienille ja keskisuurille verkkosivustoille, kuten asiakirjoille ja blogeille, ja on käytettävissä offline-tilassa.

---

# Puhdas käyttöliittymän käänteinen kokotekstihaku

## Esipuhe

Useiden viikkojen kehitystyön jälkeen [i18n.site](//i18n.site) (puhtaasti staattinen markdown monikielinen ja verkkosivuston rakentamisen työkalu) tukee nyt puhdasta käyttöliittymän kokotekstihakua.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Tässä artikkelissa jaamme `i18n.site`-sivuston puhdasta käyttöliittymän kokotekstihakun teknisen toteutuksen. Käy kokeilemassa hakutoimintoa [i18n.site](//i18n.site).

Koodi on avoimen lähdekoodin: [Hakukärki](//github.com/i18n-site/ie/tree/main/qy) / [Käyttöliittymä](//github.com/i18n-site/plugin/tree/main/qy)

## Palvelimettömien kokotekstihakuratkaisujen yleiskatsaus

Pienille ja keskikokoisille puhtaasti staattisille verkkosivustoille, kuten asiakirjoille/henkilökohtaisille blogeille, itse rakennetun kokotekstihaun taustaohjelman rakentaminen on liian raskasta, ja palveluvapaa kokotekstihaku on yleisempi valinta.

Palvelimettömät kokotekstihakuratkaisut voidaan jakaa kahteen pääluokkaan:

Ensimmäinen on kolmannen osapuolen hakupalveluntarjoajien, kuten [algolia.com](//algolia.com) -palvelun, tarjoamat käyttöliittymäkomponentit kokotekstihakuun.

Tällaiset palvelut vaativat hakumäärään perustuvaa maksua, ja ne eivät useinkaan ole saatavilla Manner-Kiinan käyttäjille esimerkiksi verkkosivustojen vaatimustenmukaisuuden vuoksi.

Ne eivät ole saatavilla offline-tilassa eivätkä intranetissä, ja niillä on suuria rajoituksia. Tämä ei ole tässä artikkelissa käsiteltävää.

Toinen on puhtaan käyttöliittymän kokotekstihaku.

Tällä hetkellä yleisiä puhtaita käyttöliittymän kokotekstihakuja ovat [lunrjs](//lunrjs.com) ja [ElasticLunr.js](//github.com/weixsong/elasticlunr.js) (perustuu `lunrjs`-työkaluun).

`lunrjs` tarjoaa kaksi tapaa luoda indeksejä, ja molemmilla on omat haasteensa.

1. Ennalta rakennetut indeksitiedostot

   Koska indeksi sisältää kaikkien asiakirjojen sanat, sen koko on suuri.
   Kaikkiin asiakirjoihin liittyvät indeksitiedostot on ladattava uudelleen aina, kun asiakirjaa lisätään tai sitä muutetaan.
   Tämä lisää käyttäjän odotusaikaa ja kuluttaa paljon kaistanleveyttä.

2. Lataa asiakirjoja ja luo indeksejä reaaliajassa

   Indeksin luominen on laskennallisesti intensiivinen tehtävä, ja indeksin uudelleenrakentaminen joka kerta, kun sitä käytetään, aiheuttaa ilmeisiä viiveitä ja huonon käyttökokemuksen.

---

`lunrjs`:n lisäksi on olemassa joitakin muita kokotekstihakuratkaisuja, kuten:

[fusejs](//www.fusejs.io) laskee haettavien merkkijonojen välinen samankaltaisuus.

Tämän ratkaisun suorituskyky on erittäin heikko, eikä sitä voida käyttää kokotekstihakuun (katso [Fuse.js Pitkä kysely kestää yli 10 sekuntia, kuinka se optimoidaan?](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries)).

[TinySearch](//github.com/tinysearch/tinysearch) käyttää Bloom-suodatinta hakemiseen, sitä ei voi käyttää etuliitehakuun (esimerkiksi kirjoita `goo` , haku `good` , `google`), eikä vastaavaa automaattista täydennystehoa voi saada.

Olemassa olevien ratkaisujen puutteiden vuoksi `i18n.site` on kehittänyt uuden puhtaan käyttöliittymän kokotekstihakuratkaisun, jolla on seuraavat ominaisuudet:

1. Tukee monikielistä hakua ja on kooltaan pieni; hakuytimen koko pakkauksen `gzip`-pakattuna on vain `6.9KB` (vertailun vuoksi, `lunrjs`-työkalun koko on `25KB`)
1. Rakentaa käänteisen indeksin `indexedb`-tietokannan perusteella, mikä vie vähemmän muistia ja on nopea
1. Kun asiakirjoja lisätään/muokataan, vain lisätyt tai muokatut asiakirjat indeksoidaan uudelleen, mikä vähentää laskelmien määrää
1. Tukee etuliitehakua ja voi näyttää hakutuloksia reaaliajassa käyttäjän kirjoittaessa
1. Saatavilla offline-tilassa

Seuraavaksi selitetään yksityiskohtaisesti `i18n.site`-sivuston tekninen toteutus.

## Monikielinen sanasegmentointi

Sanasegmentointi käyttää selaimen alkuperäistä `Intl.Segmenter`-liittymää, ja kaikki yleiset selaimet tukevat tätä liittymää.

![](//p.3ti.site/1727667759.avif)

Sanasegmentoinnin `coffeescript`-koodi on seuraava:

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

in:

* `/\p{P}/` on säännöllinen lauseke, joka vastaa välimerkkejä. Erityisiä vastaavia symboleja ovat: `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _ ` { | } . `.</p><ul><li> `split('.')` johtuu siitä, että `Firefox` selainsanan segmentointi ei segmentoi `.` .</li>


## Indeksin rakentaminen

`IndexedDB`-tietokantaan luodaan viisi objektin tallennustaulukkoa:

* `word` sanaa : id -
* `doc` : id - URL - Dokumentin versio
* `docWord` asiakirja : id - sana id
* `prefix` : etuliite - sana id
* `rindex` sana id - : id : Riviinumerojen joukko

Anna asiakirjan `url` ja versionumeron `ver` joukko ja etsi, onko asiakirja olemassa taulukosta `doc` Jos sitä ei ole, luo käänteinen indeksi. Poista samalla käänteinen hakemisto niiltä asiakirjoilta, joita ei ole välitetty.

Tällä tavalla voidaan saavuttaa inkrementaalinen indeksointi ja vähentää laskentavälinettä.

Käyttöliittymän vuorovaikutuksessa voidaan näyttää indeksin latauksen etenemispalkki, jotta voidaan välttää viiveet ensimmäisen latauksen yhteydessä. Katso "Edistyspalkki animaatiolla, perustuu yhteen progress + Pure css Implementation" [English](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [Chinese](//juejin.cn/post/7413586285954154522).

### IndexedDB Korkea Samanaikainen Kirjoitus

Projekti on [idb](//www.npmjs.com/package/idb) Asynkronisen IndexedDB

IndexedDB-luku ja kirjoitus ovat asynkronisia. Indeksiä luotaessa asiakirjat ladataan samanaikaisesti indeksin luomiseksi.

Kilpailevan kirjoittamisen aiheuttaman osittaisen tiedonhäviön välttämiseksi voit viitata alla olevaan `coffeescript`-koodiin ja lisätä `ing`-välimuistin lukemisen ja kirjoittamisen väliin kilpailevien kirjoitusten sieppaamiseksi.

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

## Etuliite reaaliaikainen haku

Hakutulosten näyttämiseksi käyttäjän kirjoittaessa, esimerkiksi kun `wor` syötetään, näytetään sanat, joiden etuliitteenä on `wor`, kuten `words` ja `work`.

![](//p.3ti.site/1727684944.avif)

Hakuydin käyttää `prefix`-taulukkoa viimeisen sanan kohdalla sanasegmentoinnin jälkeen löytääkseen kaikki sanat, joiden etuliitteenä on, ja etsiäkseen järjestyksessä.

Anti-shake-toimintoa `debounce` käytetään myös etupään vuorovaikutuksessa (toteutettu seuraavasti) vähentämään käyttäjän syötteiden käynnistämistä hakuja ja vähentämään laskentavälinettä.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Tarkkuus ja muistaminen

Haku segmentoi ensin käyttäjän kirjoittamat avainsanat.

Oletetaan, että sanasegmentoinnin jälkeen on `N` sanaa. Palautettaessa palautetaan kaikki avainsanat sisältävät tulokset ja sitten palautetaan tulokset, jotka sisältävät `N-1`, `N-2`, ..., `1` avainsanaa.

Ensin näytettävät hakutulokset varmistavat kyselyn tarkkuuden, ja myöhemmin ladatut tulokset (napsauta "Lataa lisää"-painiketta) varmistavat hakunopeuden.

![](//p.3ti.site/1727684564.avif)

## Lataus pyynnöstä

Vastausnopeuden parantamiseksi haku käyttää `yield`-generaattoria toteuttamaan on-demand-latauksen ja palauttaa `limit`, kun tulosta kysytään.

Huomaa, että joka kerta kun haet uudelleen `yield`-jälkeen, sinun on avattava uudelleen kyselytapahtuma `IndexedDB`.

## Etuliite reaaliaikainen haku

Hakutulosten näyttämiseksi käyttäjän kirjoittaessa, esimerkiksi kun `wor` syötetään, näytetään sanat, joiden etuliitteenä on `wor`, kuten `words` ja `work`.

![](//p.3ti.site/1727684944.avif)

Hakuydin käyttää `prefix`-taulukkoa viimeisen sanan kohdalla sanasegmentoinnin jälkeen löytääkseen kaikki sanat, joiden etuliitteenä on, ja etsiäkseen järjestyksessä.

Anti-shake-toimintoa `debounce` käytetään myös etupään vuorovaikutuksessa (toteutettu seuraavasti) vähentämään käyttäjän syötteiden käynnistämistä hakuja ja vähentämään laskentavälinettä.

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

Hakemistotaulukko ei tallenna alkuperäistä tekstiä, vain sanoja, mikä vähentää tallennustilan määrää.

Hakutulosten korostaminen edellyttää alkuperäisen tekstin lataamista uudelleen, ja vastaavuus `service worker` voi välttää toistuvat verkkopyynnöt.

Samaan aikaan, koska `service worker` tallentaa kaikki artikkelit välimuistiin, koko verkkosivusto, mukaan lukien haku, on käytettävissä offline-tilassa, kun käyttäjä tekee haun.

## MarkDown-dokumenttien näytön optimointi

`i18n.site` :n puhdas etupään hakuratkaisu on optimoitu `MarkDown` asiakirjalle.

Hakutuloksia näytettäessä luvun nimi tulee näkyviin ja luvussa navigoidaan, kun sitä napsautetaan.

![](//p.3ti.site/1727686552.avif)

## Yhteenveto

Puhdas käyttöliittymän käänteinen kokotekstihaku ei vaadi palvelinta. Se sopii hyvin pienille ja keskikokoisille verkkosivustoille, kuten dokumenteille ja henkilökohtaisille blogeille.

`i18n.site`-sivuston avoimen lähdekoodin itsekehittämä puhdas käyttöliittymähaku on pienikokoinen ja nopea, ratkaisee nykyisen puhtaan käyttöliittymän täystekstihakun puutteet ja tarjoaa paremman käyttökokemuksen.