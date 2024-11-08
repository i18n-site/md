---

brief: |
  i18n.site toetab nüüd serverita täistekstiotsingut.

  See artikkel tutvustab puhta esiotsa täistekstiotsingu tehnoloogia rakendamist, sealhulgas IndexedDB loodud ümberpööratud indeksit, eesliidete otsingut, sõnade segmenteerimise optimeerimist ja mitmekeelset tuge.

  Võrreldes olemasolevate lahendustega on i18n.site puhas esiotsa täistekstiotsing väikese suurusega ja kiire, sobib väikestele ja keskmise suurusega veebisaitidele, nagu dokumendid ja ajaveebid, ning on saadaval võrguühenduseta.

---

# Puhas Esiotsa Ümberpööratud Täistekstiotsing

## Järjestus

Pärast mitmenädalast arendust toetab [i18n.site](//i18n.site) (puhtalt staatiline markdown mitmekeelsetõlke & veebisaidi loomise tööriist) nüüd puhast esiotsa täistekstiotsingut.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

See artikkel jagab `i18n.site` puhta esiotsa täistekstiotsingu tehnilist rakendamist Külastage [i18n.site](//i18n.site)

Kood avatud : [Otsi kernelist](//github.com/i18n-site/ie/tree/main/qy) / [interaktiivne liides](//github.com/i18n-site/plugin/tree/main/qy)

## Ülevaade Serverita Täistekstiotsingu Lahendustest

Väikeste ja keskmise suurusega puhtalt staatiliste veebisaitide (nt dokumendid/isiklikud ajaveebid) jaoks on iseehitatud täistekstiotsingu taustaprogrammi loomine liiga raske ja teenusevaba täistekstiotsing on levinum valik.

Serverita täistekstiotsingu lahendused jagunevad kahte suurde kategooriasse:

Esiteks pakuvad [algolia.com](//algolia.com) kolmanda osapoole otsinguteenuse pakkujad täistekstiotsingu jaoks esiotsa komponente.

Sellised teenused nõuavad otsingumahul põhinevat tasu ja sageli ei ole need Mandri-Hiina kasutajatele saadaval selliste probleemide tõttu nagu veebisaitide järgimine.

Seda ei saa kasutada võrguühenduseta, seda ei saa kasutada sisevõrgus ja sellel on suured piirangud. See artikkel ei käsitle palju.

Teine on puhas esiotsa täistekstiotsing.

Praegu [ElasticLunr.js](//github.com/weixsong/elasticlunr.js) tavalised puhtad `lunrjs` täistekstiotsingud [lunrjs](//lunrjs.com)

`lunrjs` Indeksite koostamiseks on kaks võimalust ja mõlemal on oma probleemid.

1. Eelehitatud indeksfailid

   Kuna register sisaldab sõnu kõigist dokumentidest, on see suur.
   Iga kord, kui dokumenti lisatakse või muudetakse, tuleb laadida uus registrifail.
   See suurendab kasutaja ooteaega ja kulutab palju ribalaiust.

2. Laadige dokumente ja koostage indekseid käigult

   Indeksi koostamine on arvutuslikult intensiivne ülesanne. Indeksi uuesti ülesehitamine iga kord, kui sellele juurde pääsete, põhjustab ilmseid viivitusi ja kehva kasutuskogemust.

---

Lisaks `lunrjs` -le on veel mõned täistekstiotsingu lahendused, näiteks :

[fusejs](//www.fusejs.io) arvutage otsitavate stringide sarnasus.

Selle lahenduse jõudlus on äärmiselt halb ja seda ei saa kasutada täistekstiotsinguks (vt [Fuse.js Pikk päring võtab rohkem kui 10 sekundit, kuidas seda optimeerida?](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries) ).

[TinySearch](//github.com/tinysearch/tinysearch) kasutage otsimiseks Bloomi filtrit, seda ei saa kasutada eesliidete otsimiseks (näiteks sisestage `goo` , otsige `good` , `google` ) ega saa saavutada sarnast automaatse lõpetamise efekti.

Olemasolevate lahenduste puuduste tõttu töötas `i18n.site` välja uue puhta esiotsa täistekstiotsingu lahenduse, millel on järgmised omadused :

1. Toetab mitmekeelset otsingut ja on väikese suurusega. Otsingutuuma suurus pärast pakkimist `gzip` on `6.9KB` (võrdluseks: `lunrjs` suurus on `25KB` ).
1. Koostage `indexedb` põhinev ümberpööratud indeks, mis võtab vähem mälu ja on kiire.
1. Dokumentide lisamisel/muutmisel indekseeritakse uuesti ainult lisatud või muudetud dokumendid, vähendades arvutuste mahtu.
1. Toetab eesliidete otsingut ja kuvab otsingutulemusi reaalajas, kui kasutaja sisestab.
1. Saadaval võrguühenduseta

Allpool tutvustatakse üksikasjalikult `i18n.site` tehnilist teostuse üksikasju.

## Mitmekeelne Sõnade Segmenteerimine

Sõnade segmenteerimine kasutab brauseri natiivset sõna segmenteerimist `Intl.Segmenter` ja kõik tavabrauserid toetavad seda liidest.

![](//p.3ti.site/1727667759.avif)

Sõna segmenteerimise `coffeescript` kood on järgmine

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

sisse:

* `/\p{P}/` on regulaaravaldis, mis vastab kirjavahemärkidele. Konkreetsed sobitussümbolid on järgmised: `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _` { | } . `.</p><ul><li> `split('.')` tuleneb sellest, et `Firefox` brauseri sõna segmentimine ei segmenteeri `. ` .</li>


## Indeksi Hoone

Aastal `IndexedDB` loodi 5 objektide salvestustabelit :

* `word` sõna : id -
* `doc` : id - url - Dokumendi versiooni number
* `docWord` Dokumendi : id - sõna id
* `prefix` : - sõna id
* `rindex` : id - Dokument id : Reanumbrite massiiv

Sisestage dokumendi `url` massiiv ja versiooni number `ver` ning otsige, kas dokument on tabelis `doc` olemas. Kui seda pole, looge pöördregister. Samal ajal eemaldage nende dokumentide ümberpööratud register, mida ei edastatud.

Sel viisil on võimalik saavutada järkjärguline indekseerimine ja arvutuste maht väheneb.

Esiotsa interaktsioonis saab kuvada indeksi laadimise edenemisriba, et vältida viivitust esmakordsel laadimisel Vt "Edemisriba koos animatsiooniga, põhineb ühel progress + Puhas css rakendamine" [Inglise](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [Hiina](//juejin.cn/post/7413586285954154522) .

### IndexedDB Kõrge Samaaegne Kirjutamine

Projekt on [idb](//www.npmjs.com/package/idb) IndexedDB

IndexedDB lugemine ja kirjutamine on asünkroonsed. Indeksi loomisel laaditakse dokumendid indeksi loomiseks samaaegselt.

Võistlevast kirjutamisest põhjustatud osalise andmekao vältimiseks võite viidata allolevale `coffeescript` koodile ja lisada lugemise ja kirjutamise vahele vahemälu `ing` , et konkureerivaid kirjutisi pealt kuulata.

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

## Täpsus Ja Meeldejätmine

Otsing segmenteerib esmalt kasutaja sisestatud märksõnad.

Oletame, et sõna segmenteerimise järel on `N` sõna. Tulemuste tagastamisel tagastatakse esmalt kõiki märksõnu sisaldavad tulemused ja seejärel `N-1` , `N-2` ,..., `1` märksõna sisaldavad tulemused.

Esmalt kuvatavad otsingutulemused tagavad päringu täpsuse ja hiljem laaditud tulemused (klõpsake nuppu Laadi rohkem) tagavad tagasikutsumise määra.

![](//p.3ti.site/1727684564.avif)

## Koormus Nõudmisel

Reageerimiskiiruse parandamiseks kasutab otsing `yield` generaatorit nõudmisel laadimise rakendamiseks ja tagastab `limit` kord, kui tulemust küsitakse.

Pange tähele, et iga kord, kui otsite uuesti pärast `yield` , peate uuesti avama päringutehingu väärtusega `IndexedDB` .

## Eesliide Reaalajas Otsing

Otsingutulemuste kuvamiseks kasutaja tippimise ajal, näiteks kui sisestatakse `wor` , kuvatakse sõnad, mille eesliide on `wor` näiteks `words` ja `work` .

![](//p.3ti.site/1727684944.avif)

Otsingutuum kasutab `prefix` tabelit viimase sõna jaoks pärast sõna segmenteerimist, et leida kõik selle eesliitega sõnad ja otsida järjest.

Raputamisvastast funktsiooni `debounce` kasutatakse ka esiotsa interaktsioonis (rakendatud järgmiselt), et vähendada otsinguid käivitavate kasutajasisendi sagedust ja arvutusmahtu.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Saadaval Võrguühenduseta

Indekstabel ei salvesta originaalteksti, vaid ainult sõnu, mis vähendab salvestusruumi mahtu.

Otsingutulemuste esiletõstmine nõuab algse teksti uuesti laadimist ja `service worker` sobitamine võib vältida korduvaid võrgupäringuid.

Samal ajal, kuna `service worker` salvestab kõik artiklid vahemällu, on pärast kasutaja otsingu sooritamist kogu veebisait, sealhulgas otsing, võrguühenduseta saadaval.

## MarkDowni Dokumentide Kuva Optimeerimine

`i18n.site` puhas esiotsingu lahendus on optimeeritud `MarkDown` dokumendi jaoks.

Otsingutulemuste kuvamisel kuvatakse peatüki nimi ja klõpsamisel navigeeritakse peatükis.

![](//p.3ti.site/1727686552.avif)

## Tehke Kokkuvõte

Pööratud täistekstiotsing on rakendatud puhtalt esiotsas, serverit pole vaja. See sobib väga hästi väikeste ja keskmise suurusega veebisaitidele, nagu dokumendid ja isiklikud ajaveebid.

`i18n.site` Avatud lähtekoodiga isearendatud puhas esiotsing, väikese suurusega ja kiire reageerimine, lahendab praeguse puhta esiotsa täistekstiotsingu puudused ja pakub paremat kasutuskogemust.