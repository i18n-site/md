---

brief: |
  Ti i18n.site ket mangsuporta itan iti serverless a naan-anay a teksto a panagbiruk.

  Daytoy nga artikulo ket mangiyam-ammo ti pannakaipatungpal ti puro a front-end a teknolohia ti panagbiruk ti naan-anay a teksto, a mairaman ti nabaliktad nga indeks a binangon babaen ti IndexedDB, panagbiruk ti pangrugian, panagoptimisar ti panagbingbingay ti balikas ken suporta ti adu a pagsasao.

  No idilig kadagiti agdama a solusion, ti puro a front-end full-text search ti i18n.site ket bassit ti kadakkelna ken napardas, maibagay kadagiti babassit ken kalalainganna ti kadakkelda a website a kas kadagiti dokumento ken blog, ken magun-od iti offline.

---

# Puro a Front-End a Nabaliktad a Naan-Anay a Teksto a Panagsapul

## Panagsasaruno

Kalpasan ti sumagmamano a lawas ti panagrang-ay, [i18n.site](//i18n.site) (maysa a puro nga estatiko markdown multilingualtranslation & a ramit ti panagbangon ti website) ket mangsuporta itan ti puro a front-end a naan-anay a teksto a panagbiruk.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Daytoy nga artikulo ket mangibinglay ti teknikal a pannakaipatungpal ti `i18n.site` a puro a front-end a naan-anay a teksto a panagbiruk tapno [i18n.site](//i18n.site) ti epekto ti panagbiruk.

Kodigo [ti](//github.com/i18n-site/ie/tree/main/qy) / [source](//github.com/i18n-site/plugin/tree/main/qy) :

## Ti Panangrepaso Kadagiti Serverless a Solusion Ti Panagbirok Iti Naan-Anay a Teksto

Para kadagiti babassit ken kalalainganna ti kadakkelda a puro nga estatiko a website a kas dagiti dokumento/personal a blog, ti panagbangon ti bukod a naibangon a naan-anay a teksto a panagbiruk a backend ket nadagsen unay, ken ti nawaya a serbisio a naan-anay a teksto a panagbiruk ket isu ti ad-adu a gagangay a pili.

Dagiti awan serbidor a solusion ti panagbiruk ti naan-anay a teksto ket mairaman iti dua a nalawa a kategoria:

Umuna, dagiti kapada [algolia.com](//algolia.com) Dagiti mangipapaay ti serbisio ti panagbiruk ti maikatlo a partido ket mangipaay kadagiti paset ti sango para iti panagbiruk ti naan-anay a teksto.

Dagiti kasta a serbisio ket kasapulan ti panagbayad a naibatay iti kaadu ti panagsapul, ken masansan a saan a magun-od dagiti agar-aramat iti kontinente ti Tsina gapu kadagiti isyu a kas ti panagtungpal ti website.

Saan a mausar dayta iti offline, saan a mausar iti intranet, ken dakkel ti limitasionna. Saan nga adu ti pagsasaritaan daytoy nga artikulo.

Ti maikadua ket puro a front-end full-text search.

Iti agdama, dagiti gagangay a puro a front-end a naan-anay a teksto a panagbiruk ket mairaman ti [lunrjs](//lunrjs.com) ken [ElasticLunr.js](//github.com/weixsong/elasticlunr.js) (naibasar iti `lunrjs` a sekondario a panagrang-ay).

`lunrjs` Adda dua a wagas a mangbangon kadagiti indeks, ken agpada nga addaan kadagiti bukodda a parikut.

1. Dagiti nasakbay a naibangon nga index file

   Gapu ta naglaon ti indeks kadagiti sasao manipud iti amin a dokumento, dakkel ti kadakkelna.
   Tunggal ti dokumento ket mainayon wenno mabaliwan, ti baro nga indeks a file ket masapul a maikarga.
   Paaduenna ti oras ti panaguray ti agus-usar ken mangbusbos iti adu a bandwidth.

2. Ikarga dagiti dokumento ken mangaramid kadagiti index iti tumatayab

   Ti panagbangon ti indeks ket maysa a nainget nga aramid ti panagkomputar Ti panagbangon manen ti indeks tunggal makastrekka iti daytoy ket mangpataud kadagiti nalawag a panagbayag ken nakapuy a padas ti agar-aramat.

---

Malaksid iti `lunrjs` , adda dagiti dadduma pay a solusion ti panagbiruk ti naan-anay a teksto, a kas ti :

[fusejs](//www.fusejs.io) , kalkularen ti panagpapada dagiti kuerdas a sapulen.

Ti panagaramid daytoy a solusion ket nakurapay unay ken saan a mausar para iti panagbiruk ti naan-anay a teksto (kitaen ti [Fuse.js Ti atiddog a panagsaludsod ket mangala ti nasurok a 10 a segundo, kasano a ma-optimize daytoy?](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries) ).

[TinySearch](//github.com/tinysearch/tinysearch) `goo` `good` `google`

Gapu kadagiti pagkurangan dagiti addan a solusion, `i18n.site` ket nangaramid ti baro a puro a front-end a full-text a solusion ti panagbiruk, nga addaan kadagiti sumaganad a pakabigbigan :

1. Suportaranna ti panagbiruk ti adu a pagsasao ken bassit ti kadakkelna Ti kadakkel ti kernel ti panagbiruk kalpasan ti panagempake `gzip` ket `6.9KB` (para iti panagidilig, ti kadakkel ti `lunrjs` ket `25KB` )
1. Mangbangon ti nabaliktad nga indeks a naibatay iti `indexedb` , a mangala iti basbassit a memoria ken napardas.
1. No dagiti dokumento ket mainayon/mabaliwan, dagiti laeng nainayon wenno nabaliwan a dokumento ti mai-index manen, a mangkissay iti kaadu dagiti kalkulasion.
1. Suportaranna ti panagbiruk ti pangrugian ken mabalinna nga ipakita dagiti resulta ti panagbiruk iti aktual nga oras bayat nga ag-type ti agar-aramat.
1. Mabalin nga usaren offline

Iti baba, `i18n.site` a detalye ti teknikal a pannakaipatungpal ti maipakaammo a detalyado.

## Multilingual a Panagbingbingay Ti Balikas

Ti panagbingbingay ti balikas ket agus-usar ti katutubo a panagbingbingay ti balikas ti browser `Intl.Segmenter` , ken amin dagiti kangrunaan a browser ket mangsuporta iti daytoy nga interface.

![](//p.3ti.site/1727667759.avif)

Ti kodigo ti word segmentation `coffeescript` ket kastoy

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

iti:

* `/\p{P}/` ket maysa a regular nga ebkas a maitunos kadagiti marka ti puntuasion Dagiti espesipiko a simbolo ti panagtunos ket mairaman ti: `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _` { | } ~. `.</p><ul><li> `split('.')` ket gapu ta `Firefox` a panagbingbingay ti balikas ti browser ket saan a mangbingbingay ti `. ` .</li>


## Panagbangon Ti Indeks

5 a lamisaan ti pagipempenan ti banag ti naparsua iti `IndexedDB` :

* `word` : id - balikas
* `doc` : id - Dokumento url - Numero ti bersion ti dokumento
* `docWord` : Array ti dokumento id - sao id
* `prefix` : Array ti pangrugian - sao id
* `rindex` : Word id - Dokumento id : Array dagiti numero ti linia

Ipasa ti array ti dokumento `url` ken bersion numero `ver` , ken sapulen no adda ti dokumento iti lamisaan `doc` No awan, mangpartuat ti nabaliktad nga indeks. Maigiddato iti dayta, ikkaten ti nabaliktad nga indeks para kadagidiay a dokumento a saan a naipasa.

Iti daytoy a wagas, ti incremental indexing ket mabalin a maragpat ken ti kaadu ti panagkuenta ket makissayan.

Iti panagtitinnulong ti sango a murdong, ti bara ti panagrang-ay ti panagkarga ti indeks ket mabalin a maiparang tapno maliklikan ti panagbayag no agkarga iti umuna a gundaway Kitaen ti "Bara ti Panagrang-ay nga addaan iti Animasion, Naibatay iti Maymaysa progress + Puro css Implementasion" [Ingles](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [Insik](//juejin.cn/post/7413586285954154522) .

### IndexedDB Nangato Nga Aggigiddan a Panagsurat

Ti proyekto ket [idb](//www.npmjs.com/package/idb) a naibatay iti asynchronous encapsulation ti IndexedDB

Dagiti panagbasa ken panagsurat ti IndexedDB ket asynchronous. No mangpartuat ti indeks, dagiti dokumento ket aggigiddan a maikarga tapno mangpartuat ti indeks.

Tapno maliklikan ti paset a pannakapukaw ti datos a gapuanan ti kompetitibo a panagsurat, mabalinmo a kitaen ti `coffeescript` a kodigo iti baba ken manginayon ti `ing` cache iti nagbaetan ti panagbasa ken panagsurat tapno malapdan dagiti agsasalisal a panagsurat.

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

## Eksakto Ken Pananglagip

Ti panagsapul ket umuna a mangsegment kadagiti keywords nga inserrek ti user.

Ipagarup nga adda dagiti `N` a balikas kalpasan ti panagbingbingay ti balikas No agsubli dagiti resulta, dagiti resulta a naglaon kadagiti amin a nasken a balikas ket maisubli nga umuna, ken kalpasanna dagiti resulta a naglaon ti `N-1` , `N-2` ,..., `1` a nasken a balikas ket maisubli.

Dagiti resulta ti panagbiruk a maiparang nga umuna ket mangsigurado ti kinaumiso ti panagsaludsod, ken dagiti resulta a naikarga kalpasanna (i-klik ti buton ti load more) ket mangsigurado ti rate ti panaglagip.

![](//p.3ti.site/1727684564.avif)

## Karga Ti Panagkasapulan

Tapno mapasayaat ti kapartak ti sungbat, ti panagbiruk ket agus-usar ti `yield` a generador tapno mangipatungpal ti on-demand a panagkarga, ken agsubli `limit` maysa a resulta ket masaludsod.

Imutektekanyo a tunggal agsapulka manen kalpasan ti `yield` , kasapulam a luktan manen ti maysa a transaksion ti panagsaludsod iti `IndexedDB` .

## Prefix Ti Aktual Nga Oras a Panagsapul

Tapno maipakita dagiti resulta ti panagsapul bayat nga ag-type ti agar-aramat, kas pagarigan, no maiserrek `wor` , maiparang dagiti balikas a nasaksakbay iti `wor` a kas iti `words` ken `work` .

![](//p.3ti.site/1727684944.avif)

Ti kernel ti panagbiruk ket agusarto ti `prefix` a lamisaan para iti maudi a balikas kalpasan ti panagbingbingay ti balikas tapno makasarak kadagiti amin a balikas a nairugi iti daytoy, ken agsapul nga agsasaruno.

Ti anti-shake function `debounce` ket maus-usar pay iti front-end a panagtitinnulong (naipatungpal a kas ti sumaganad) tapno mangkissay ti kasansan ti panagserrek ti agar-aramat a mangtignay kadagiti panagbiruk ken mangkissay ti kaadu ti panagkarkulo.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Mabalin Nga Usaren Offline

Ti lamisaan ti indeks ket saan a mangidulin ti orihinal a teksto, dagiti laeng balikas, a mangkissay ti kaadu ti panagidulin.

Ti panangitampok kadagiti resulta ti panagbiruk ket kasapulan ti panangikarga manen ti orihinal a teksto, ken ti panagtunos ti `service worker` ket mabalin a mangliklik kadagiti maulit-ulit a panagkiddaw ti network.

Iti isu met laeng a panawen, gapu ta `service worker` ket mangi-cache kadagiti amin nga artikulo, apaman a ti agar-aramat ket mangaramid ti panagbiruk, ti sibubukel a website, a mairaman ti panagbiruk, ket magun-od iti offline.

## Ipakita Ti Optimisasion Dagiti Dokumento Ti MarkDown

Ti puro a solusion ti panagbiruk ti front-end ti `i18n.site` ket nasayaat para iti `MarkDown` a dokumento.

No maipakita dagiti resulta ti panagbirok, maiparang ti nagan ti kapitulo ken ma-navigate ti kapitulo no mai-click.

![](//p.3ti.site/1727686552.avif)

## Gupgopen

Nabaliktad a panagbiruk ti naan-anay a teksto a naipatungpal a puro iti sango a murdong, awan ti kasapulan a serbidor. Maibagay unay daytoy kadagiti babassit ken kalalainganna ti kadakkelda a website kas kadagiti dokumento ken personal a blog.

`i18n.site` Ti open source a bukod a pinarang-ay a puro a front-end a panagbiruk, bassit ti kadakkelna ken napardas a sungbat, ket mangrisut kadagiti pagkurangan ti agdama a puro a front-end a naan-anay a teksto a panagbiruk ken mangipaay ti nasaysayaat a padas ti agar-aramat.