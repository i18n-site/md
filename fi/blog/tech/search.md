---

brief: |
  i18n.site tukee nyt palvelimetonta kokotekstihakua.

  Tässä artikkelissa esitellään puhtaan käyttöliittymän kokotekstihakuteknologian käyttöönotto, mukaan lukien IndexedDB:n rakentama käänteinen indeksi, etuliitehaku, sanasegmentoinnin optimointi ja monikielinen tuki.

  Verrattuna olemassa oleviin ratkaisuihin, i18n.siten puhdas käyttöliittymän kokotekstihaku on pienikokoinen ja nopea, sopii pienille ja keskikokoisille verkkosivustoille, kuten asiakirjoille ja blogeille, ja on käytettävissä offline-tilassa.

---

# Puhdas Käyttöliittymän Käänteinen Kokotekstihaku

## Järjestys

Useiden viikkojen kehitystyön jälkeen [i18n.site](//i18n.site) (puhtaasti staattinen markdown monikielinen & rakennustyökalu) tukee nyt puhdasta käyttöliittymän kokotekstihakua.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Tässä artikkelissa [i18n.site](//i18n.site) `i18n.site` puhtaan käyttöliittymän täystekstihaun teknisestä toteutuksesta.

Koodi avoimen lähdekoodin : [ydin](//github.com/i18n-site/ie/tree/main/qy) / [interaktiivinen käyttöliittymä](//github.com/i18n-site/plugin/tree/main/qy)

## Yleiskatsaus Palvelimettomiin Kokotekstihakuratkaisuihin

Pienille ja keskikokoisille puhtaasti staattisille verkkosivustoille, kuten asiakirjoille/henkilökohtaisille blogeille, itse rakennetun kokotekstihaun taustaohjelman rakentaminen on liian raskasta, ja palveluvapaa kokotekstihaku on yleisempi valinta.

Palvelimettomat kokotekstihakuratkaisut jakautuvat kahteen laajaan luokkaan:

Ensinnäkin [algolia.com](//algolia.com) kolmannen osapuolen hakupalvelun tarjoajat tarjoavat käyttöliittymäkomponentteja koko tekstihakuun.

Tällaiset palvelut edellyttävät hakujen määrään perustuvaa maksua, eivätkä ne useinkaan ole Manner-Kiinan käyttäjien saatavilla esimerkiksi verkkosivuston vaatimustenmukaisuuden vuoksi.

Sitä ei voi käyttää offline-tilassa, sitä ei voi käyttää intranetissä, ja sillä on suuria rajoituksia. Tässä artikkelissa ei käsitellä paljon.

Toinen on puhdas käyttöliittymän kokotekstihaku.

Tällä hetkellä yleisiä puhtaita käyttöliittymän kokotekstihakuja ovat [lunrjs](//lunrjs.com) ja [ElasticLunr.js](//github.com/weixsong/elasticlunr.js) (perustuu `lunrjs` toissijaiseen kehitykseen).

`lunrjs`illa on kaksi eri tapaa rakentaa indeksejä, joilla molemmilla on omat ongelmansa.

1. Valmiiksi rakennetut hakemistotiedostot

   Koska hakemisto sisältää sanoja kaikista asiakirjoista, se on kooltaan suuri.
   Aina kun asiakirjaa lisätään tai sitä muutetaan, uusi hakemistotiedosto on ladattava.
   Se lisää käyttäjän odotusaikaa ja kuluttaa paljon kaistanleveyttä.

2. Lataa asiakirjoja ja luo indeksejä lennossa

   Indeksin luominen on laskennallisesti intensiivinen tehtävä Indeksin uudelleen rakentaminen joka kerta, kun käytät sitä, aiheuttaa ilmeisiä viiveitä ja huonon käyttökokemuksen.

---

Lisäksi `lunrjs`:n lisäksi on olemassa joitakin muita kokotekstihakuratkaisuja, kuten:

[fusejs](//www.fusejs.io) laske haettavien merkkijonojen välinen samankaltaisuus.

Tämän ratkaisun suorituskyky on erittäin heikko, eikä sitä voida käyttää kokotekstihakuun (katso [Fuse.js Pitkä kysely kestää yli 10 sekuntia, kuinka se optimoidaan?](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries) ).

[TinySearch](//github.com/tinysearch/tinysearch) käytä etsimiseen Bloom-suodatinta, sitä ei voi käyttää etuliitehakuun (esimerkiksi kirjoita `goo` , haku `good` , `google` ), eikä vastaavaa automaattista täydennystehoa voi saada.

Koska olemassa olevilla ratkaisuilla on omat haittansa, `i18n.site` kehitti kokonaan uuden, puhtaan käyttöliittymän kokotekstihakuratkaisun, joka sisältää seuraavat ominaisuudet:

1. Tukee monikielisen haun ja on pienikokoinen. Hakukeskuksen koko `gzip`-pakattuna on vain `6.9KB` (vertailun vuoksi, `lunrjs`-kirjaston koko on `25KB`)
1. Rakennettu `indexedb`:n pohjalta, käänteinen indeksi käyttää vähemmän muistia ja on nopea
1. Kun asiakirjoja lisätään/muokataan, vain lisätyt tai muokatut asiakirjat indeksoidaan uudelleen, mikä vähentää laskelmien määrää
1. Tukee etuliitehakua, joka voi näyttää hakutulokset reaaliajassa käyttäjän kirjoittaessa
1. Saatavilla Offline-Tilassa

Alla yksityiskohtaisesti `i18n.site`:n tekninen toteutus.

## Monikielinen Sanan Segmentointi

Sanasegmentointi käyttää selaimen alkuperäistä `Intl.Segmenter`-segmentointia, jota tukevat kaikki yleiset selaimet.

![](//p.3ti.site/1727667759.avif)

Sanan segmentointi `coffeescript` -koodi on seuraava

```coffee
SEG = new Intl.Segmenter 0, granularity: "word"

seg = (txt) =>
  r = []
  for {segment} from SEG.segment(txt)
    for i from segment.split('.')
      i = i.trim()
      if i and !'| `'.includes(i) and !/\p{P}/u.test(i)
        r.push i
  r

export default seg

export segqy = (q) =>
  seg q.toLocaleLowerCase()
```

in:

* `/\p{P}/` on säännöllinen lauseke, joka vastaa välimerkkejä. Erityisiä vastaavia symboleja ovat: `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _` { | } . `.</p><ul><li> `split('.')` johtuu siitä, että `Firefox` selainsanan segmentointi ei segmentoi `. ` .</li>


## Indeksirakennus

`IndexedDB`:ssä on luotu viisi objektin tallennustaulukkoa:

* `word`: id - sana
* `doc` : id - url - Asiakirjan versionumero
* `docWord`: asiakirjan id - sanan id
* `prefix`: etuliite - sanan id
* `rindex`: sanan id - asiakirjan id : rivinumerot

Anna asiakirjan `url` ja versionumeron `ver` joukko ja etsi, onko asiakirja olemassa taulukosta `doc` Jos sitä ei ole, luo käänteinen indeksi. Poista samalla käänteinen hakemisto niiltä asiakirjoilta, joita ei ole välitetty.

Tällä tavalla voidaan saavuttaa inkrementaalinen indeksointi ja laskennan määrää vähennetään.

Käyttöliittymän vuorovaikutuksessa indeksin latauksen etenemispalkki voidaan näyttää viiveen välttämiseksi ensimmäisen latauksen yhteydessä. Katso "Edistyspalkki animaatiolla, perustuu yhteen progress + Pure css Implementation" [English](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [Chinese](//juejin.cn/post/7413586285954154522) .

### IndexedDB Korkea Samanaikainen Kirjoitus

Projekti on [idb](//www.npmjs.com/package/idb) Asynkronisen IndexedDB

IndexedDB-luku ja kirjoitus ovat asynkronisia. Indeksiä luotaessa asiakirjat ladataan samanaikaisesti indeksin luomiseksi.

Kilpailevan kirjoittamisen aiheuttaman osittaisen tiedonhäviön välttämiseksi voit viitata alla olevaan `coffeescript` koodiin ja lisätä `ing` -välimuistin lukemisen ja kirjoittamisen väliin kilpailevien kirjoitusten sieppaamiseksi.

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

## Tarkkuus Ja Muistaminen

Haku segmentoi ensin käyttäjän kirjoittamat avainsanat.

Oletetaan, että sanasegmentoinnin jälkeen on `N` sanaa, palautetaan ensin kaikki avainsanat sisältävät tulokset, ja sitten palautetaan tulokset, jotka sisältävät `N-1`, `N-2`, ..., `1` avainsanaa.

Ensin näytettävät hakutulokset varmistavat kyselyn tarkkuuden, ja myöhemmin ladatut tulokset (napsauta Lataa lisää -painiketta) varmistavat hakunopeuden.

![](//p.3ti.site/1727684564.avif)

## Lataus Pyynnöstä

Vastausnopeuden parantamiseksi haku käyttää `yield` generaattoria toteuttamaan on-demand -latauksen ja palauttaa `limit` , kun tulosta kysytään.

Huomaa, että joka kerta `yield`-käytön jälkeen, uuden `IndexedDB`:n hakuvaunun avaus on tarpeen.

## Etuliite Reaaliaikainen Haku

Käyttäjän syötteen aikana hakutulosten näyttämiseksi esimerkiksi `wor` syötettäessä, näytetään `wor`-alkuiset sanat kuten `words` ja `work`.

![](//p.3ti.site/1727684944.avif)

Hakuydin käyttää `prefix` taulukkoa viimeisen sanan kohdalla sanan segmentoinnin jälkeen löytääkseen kaikki sanat, joiden etuliitteenä on, ja etsiäkseen järjestyksessä.

FRONTEND-kiinteistyksessä käytetään myös `debounce`-funktionaalisuutta (toteutus alla), joka vähentää käyttäjän syötteiden aiheuttamia hakuja ja vähentää laskennan määrää.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Saatavilla Offline-Tilassa

Hakemistotaulukko ei tallenna alkuperäistä tekstiä, vain sanat, mikä vähentää tallennustilan määrää.

Hakutulosten korostaminen edellyttää alkuperäisen tekstin lataamista uudelleen, ja vastaavuus `service worker` voi välttää toistuvat verkkopyynnöt.

Samaan aikaan, koska `service worker` tallentaa kaikki artikkelit välimuistiin, koko verkkosivusto, mukaan lukien haku, on käytettävissä offline-tilassa, kun käyttäjä tekee haun.

## MarkDown-Asiakirjojen Näytön Optimointi

`i18n.site`:n puhdas käyttöliittymähaku on optimoitu `Markdown`-asiakirjoille.

Hakutuloksia näytettäessä luvun nimi tulee näkyviin ja luvussa navigoidaan, kun sitä napsautetaan.

![](//p.3ti.site/1727686552.avif)

## Tee Yhteenveto

Käänteinen kokotekstihaku toteutettu puhtaasti käyttöliittymässä, palvelinta ei tarvita. Se sopii erittäin hyvin pienille ja keskikokoisille verkkosivustoille, kuten asiakirjoille ja henkilökohtaisille blogeille.

`i18n.site`:n avoimen lähdekoodin itsekehittämä puhdas käyttöliittymähaku on pienikokoinen, nopea ja ratkaisee nykyisten puhtaiden käyttöliittymähakujen puutteet, tarjoten paremman käyttökokemuksen.