---

brief: |
  i18n.site stipet no serverless folsleine-tekstsykjen.

  Dit artikel yntrodusearret de ymplemintaasje fan pure front-end folsleine-tekst syktechnology, ynklusyf inverted index boud troch IndexedDB, prefix sykje, wurd segmentation optimisaasje en meartalige stipe.

  Yn ferliking mei besteande oplossingen, i18n.site syn suver front-end folsleine-tekst sykopdracht is lyts yn grutte en fluch, geskikt foar lytse en middelgrutte websiden lykas dokuminten en blogs, en is beskikber offline.

---

# Pure Front-End Omkearde Folsleine Tekstsykjen

## Folchoarder

Nei ferskate wiken fan ûntwikkeling, stipet [i18n.site](//i18n.site) (in puur statyske markdown meartalige oersetting & website building tool) no suver front-end full-text sykopdracht.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Dit artikel sil de technyske ymplemintaasje diele fan `i18n.site` pure front-end-sykjen [i18n.site](//i18n.site) om it sykeffekt te belibjen.

Koade iepen : [Sykje kernel](//github.com/i18n-site/ie/tree/main/qy) / [ynteraktive interface](//github.com/i18n-site/plugin/tree/main/qy)

## In Resinsje Fan Serverless Folsleine-Tekst Sykoplossingen

Foar lytse en middelgrutte suver statyske websiden lykas dokuminten/persoanlike blogs, is it bouwen fan in selsboude folsleine-tekst sykbackend te swier, en tsjinstfrij folsleine-tekstsykjen is de meast foarkommende kar.

Serverless folsleine-tekst sykoplossingen falle yn twa brede kategoryen:

As earste, [algolia.com](//algolia.com) syktsjinstproviders fan tredden leverje front-end-komponinten foar sykjen yn folsleine tekst.

Sokke tsjinsten fereaskje betelling basearre op sykfolume, en binne faak net beskikber foar brûkers op it fêstelân fan Sina fanwege problemen lykas webside neilibjen.

It kin net offline brûkt wurde, kin net brûkt wurde op it yntranet, en hat grutte beheiningen. Dit artikel besprekt net folle.

De twadde is suver front-end full-text sykopdracht.

Op it stuit omfetsje mienskiplike pure sykopdrachten foar folsleine tekst [lunrjs](//lunrjs.com) en [ElasticLunr.js](//github.com/weixsong/elasticlunr.js) (basearre op `lunrjs` sekundêre ûntwikkeling).

`lunrjs` D'r binne twa manieren om yndeksen te bouwen, en beide hawwe har eigen problemen.

1. Pre-boud yndeks triemmen

   Om't de yndeks wurden út alle dokuminten befettet, is it grut fan formaat.
   Wannear't in dokumint wurdt tafoege of wizige, moat in nij yndeks triem wurde laden.
   It sil de wachttiid fan 'e brûker ferheegje en in protte bânbreedte ferbrûke.

2. Laad dokuminten en bouwe yndeksen op 'e flecht

   It bouwen fan in yndeks is in berekkening yntinsive taak It opbouwen fan de yndeks eltse kear as jo tagong ta it sil foar de hân lizzende lags en minne brûkersûnderfining.

---

Neist `lunrjs` binne d'r wat oare oplossingen foar folsleine tekstsykjen, lykas :

[fusejs](//www.fusejs.io) , berekkenje de oerienkomst tusken strings om te sykjen.

De prestaasjes fan dizze oplossing binne ekstreem min en kinne net brûkt wurde foar folsleine-tekstsykjen (sjoch [Fuse.js Lange query duorret mear as 10 sekonden, hoe optimalisearjen?](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries) ).

[TinySearch](//github.com/tinysearch/tinysearch) brûke Bloom-filter om te sykjen, kin net brûkt wurde foar prefix-sykjen (fiere bygelyks `goo` , sykje `good` , `google` ), en kin gjin ferlykber automatysk foltôgingseffekt berikke.

Fanwegen de tekortkomingen fan 'e besteande oplossingen ûntwikkele `i18n.site` in nije suvere front-end folsleine-tekst-sykoplossing, dy't de folgjende skaaimerken hat :

1. Unterstützt sykjen yn mear talen en is `6.9KB` `gzip` `25KB` `lunrjs`
1. Bou in omkearde yndeks basearre op `indexedb` , dy't minder ûnthâld nimt en fluch is.
1. As dokuminten wurde tafoege/wizige, wurde allinich de tafoege of wizige dokuminten opnij yndeksearre, wat it oantal berekkeningen ferminderje.
1. Unterstützt sykjen nei foarheaksels en kin sykresultaten yn realtime werjaan wylst de brûker oan it typen is.
1. Offline beskikber

Hjirûnder sille `i18n.site` technyske ymplemintaasjedetails yn detail wurde yntrodusearre.

## Meartalige Wurdsegmentaasje

Wurdsegmentaasje brûkt de native wurdsegmentaasje `Intl.Segmenter` fan 'e browser, en alle mainstreambrowsers stypje dizze ynterface.

![](//p.3ti.site/1727667759.avif)

De wurdsegmentaasje `coffeescript` koade is as folget

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

yn:

* `/\p{P}/` is in reguliere útdrukking dy't oerienkomt mei ynterpunksjetekens. Spesifike oerienkommende symboalen binne: `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _` { | } ~. `.</p><ul><li> `split('.')` is om't `Firefox` browserwurdsegmentaasje net `. ` segmentearret.</li>


## Yndeks Gebou

5 tabellen foar opslach foar objekten binne makke yn `IndexedDB` :

* `word` : id -
* `doc` : id - Dokumint url - Dokumintferzjenûmer
* `docWord` : Array fan dokumint id - wurd id
* `prefix` : Array fan prefix - wurd id
* `rindex` : id - id :

Trochjaan yn de rige fan dokumint `url` en ferzje nûmer `ver` , en sykje oft it dokumint bestiet yn tabel `doc` As it net bestiet, meitsje in omkearde yndeks. Ferwiderje tagelyk de omkearde yndeks foar dy dokuminten dy't net binne trochjûn.

Op dizze manier kin inkrementele yndeksearring wurde berikt en it bedrach fan berekkening wurdt fermindere.

Yn front-end ynteraksje kin de laden foarútgongsbalke fan 'e yndeks werjûn wurde om de efterstân te foarkommen by it laden foar de earste kear Sjoch "Foargongsbalke mei animaasje, basearre op in single progress + Pure css Implementation" [Ingelsk](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [Sineesk](//juejin.cn/post/7413586285954154522) .

### IndexedDB Hege Tagelyk Skriuwen

It projekt is [idb](//www.npmjs.com/package/idb) op basis fan de asynchrone ynkapseling fan IndexedDB

IndexedDB lêzen en skriuwt is asynchrone. By it meitsjen fan in yndeks wurde dokuminten tagelyk laden om de yndeks te meitsjen.

Om foar in part gegevensferlies feroarsake troch kompetitive skriuwen te foarkommen, kinne jo ferwize nei de `coffeescript` koade hjirûnder en in `ing` cache tafoegje tusken lêzen en skriuwen om konkurrearjende skriuwen te ûnderskeppen.

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

## Precision en Recall

De sykopdracht sil earst de troch de brûker ynfierde kaaiwurden segmentearje.

Stel dat der `N` `1` binne nei de `N-1` `N-2`

De werjûne sykresultaten soargje earst foar de krektens fan 'e query, en de resultaten dy't dêrnei laden wurde (klikje op de knop mear laden) soargje foar it weromroppersintaazje.

![](//p.3ti.site/1727684564.avif)

## Laden Op Oanfraach

Om de antwurdsnelheid te ferbetterjen, brûkt de sykopdracht de `yield` generator om laden op oanfraach út te fieren, en komt `limit` kear werom as in resultaat wurdt frege.

Tink derom dat elke kear as jo opnij sykje nei `yield` , jo in querytransaksje fan `IndexedDB` opnij iepenje moatte.

## Prefix Realtime Sykjen

Om sykresultaten wer te jaan wylst de brûker typt, bygelyks as `wor` ynfierd wurdt, wurde wurden werjûn mei `wor` foarôf, lykas `words` en `work` .

![](//p.3ti.site/1727684944.avif)

De sykkernel sil de `prefix` tabel brûke foar it lêste wurd nei wurdsegmentaasje om alle wurden te finen dy't dêrmei foarheakke binne, en sykje yn folchoarder.

Anti-shake funksje `debounce` wurdt ek brûkt yn front-end ynteraksje (implementearre as folget) te ferminderjen de frekwinsje fan brûkersynput trigger sykopdrachten en ferminderjen it bedrach fan berekkening.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Offline Beskikber

De yndeksetabel bewarret de oarspronklike tekst net, allinich de wurden, wat de hoemannichte opslach ferminderet.

It markearjen fan sykresultaten fereasket it opnij laden fan de orizjinele tekst, en oerienkommende `service worker` kin werhelle netwurkoanfragen foarkomme.

Tagelyk, om't `service worker` alle artikels yn 't cache hâldt, as de brûker ienris in sykopdracht útfiert, is de heule webside, ynklusyf it sykjen, offline beskikber.

## Displayoptimalisaasje Fan MarkDown-Dokuminten

`i18n.site` 's suvere front-end sykoplossing is optimalisearre foar `MarkDown` dokuminten.

By it werjaan fan sykresultaten sil de haadstiknamme wurde werjûn en it haadstik sil navigearre wurde as jo klikke.

![](//p.3ti.site/1727686552.avif)

## Gearfetsje

Omkearde sykopdracht yn folsleine tekst ymplementearre puur op 'e foarkant, gjin server nedich. It is tige geskikt foar lytse en middelgrutte websiden lykas dokuminten en persoanlike blogs.

`i18n.site` Iepen boarne sels-ûntwikkele suvere front-end-sykjen, lyts yn grutte en rappe reaksje, lost de tekortkomingen op fan 'e hjoeddeistige pure front-end folsleine-tekstsykjen en leveret in bettere brûkersûnderfining.