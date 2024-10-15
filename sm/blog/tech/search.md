---

brief: |
  Ua lagolagoina nei e le i18n.site le su'esu'eina o tusitusiga atoa e leai se server.

  O lenei tusiga o loʻo faʻaalia ai le faʻatinoina o tekinolosi suʻesuʻega atoatoa i luma pito i luma, e aofia ai faʻailoga faʻaliliu na fausia e IndexedDB, suʻesuʻega prefix, faʻavasegaina o upu ma le tele-gagana lagolago.

  Pe a fa'atusatusa i fofo o lo'o i ai nei, o le su'esu'ega o tusitusiga atoa i luma o le i18n.site e la'ititi ma vave, talafeagai mo 'upega tafa'ilagi laiti ma feololo e pei o pepa ma blogs, ma o lo'o avanoa i luga ole laiga.

---

# Mama'o Pito I Luma Fa'aliliu Fa'aliliuga Su'esu'ega Atoa

## Fa'asologa

I le mae'a ai o ni nai vaiaso o atina'e, [i18n.site](//i18n.site) (se fa'aliliuga fa'amama markdown gagana & fau 'upega tafa'ilagi mea faigaluega) o lo'o lagolagoina nei le su'esu'ega atoatoa i luma.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

O lenei tusiga o le a faʻasoaina le faʻatinoga faʻapitoa o le `i18n.site` suʻesuʻega faʻamaʻi pito i luma Asiasi [i18n.site](//i18n.site)

[Fa'ailoga](//github.com/i18n-site/ie/tree/main/qy) / [puna](//github.com/i18n-site/plugin/tree/main/qy) :

## Se Va'aiga Lautele Ole Serverless Full-Text Search Solutions

Mo 'upega tafaʻilagi faʻapitoa laiti ma feololo e pei o pepa / blogs a le tagata lava ia, o le fausiaina o se faʻataʻitaʻiga o suʻesuʻega atoa e fai e le tagata lava ia e mamafa tele, ma o le suʻesuʻeina o tusitusiga atoa e leai se tautua o le filifiliga sili lea ona taatele.

O fa'ai'uga su'esu'e fa'amaumauga atoa e leai ni 'au'aunaga e pa'u'ū i ni vaega lautele se lua:

Muamua, tutusa [algolia.com](//algolia.com) E tu'uina atu e 'au'aunaga su'esu'e vaega lona tolu vaega pito i luma mo su'esu'ega atoa.

O ia 'au'aunaga e mana'omia le totogiina e fa'atatau i le tele o su'esu'ega, ma e masani ona le maua e tagata fa'aoga i le atunu'u tele o Saina ona o fa'afitauli e pei o le tausisia o le upega tafa'ilagi.

E le mafai ona fa'aoga tuusao, e le mafai ona fa'aoga i luga ole initaneti, ma e tele ni tapula'a. E lē tele ni tala e talanoaina i lenei mataupu.

O le lona lua ole su'esu'ega atoa i luma pito i luma.

I le taimi nei, [ElasticLunr.js](//github.com/weixsong/elasticlunr.js) su'esu'ega `lunrjs` pito i luma e aofia ai [lunrjs](//lunrjs.com)

`lunrjs` E lua auala e fausia ai fa'asino igoa, ma e iai uma fa'afitauli.

1. faila fa'asinomaga na muai fausia

   Ona o le faasinoupu o lo'o i ai upu mai pepa uma, e lapo'a tele.
   Soo se taimi lava e faaopoopo pe suia ai se pepa, e tatau ona utaina se faila faasinoupu fou.
   O le a faʻateleina le taimi faʻatali a le tagata faʻaoga ma faʻaaogaina le tele o bandwidth.

2. U'u pepa ma fausia fa'asino igoa ile lele

   Fausiaina o se fa'asinomaga ose galuega fa'akomupiuta O le toe fausia o le fa'asino i taimi uma e te maua ai o le a mafua ai le fa'aletonu ma le le lelei o le fa'aoga.

---

I le faaopoopo atu i `lunrjs` , o loʻo i ai nisi faʻamatalaga suʻesuʻega atoa, pei ole :

[fusejs](//www.fusejs.io) , fuafua le tutusa i le va o manoa e su'e.

O le fa'atinoga o lenei fofo e matua leaga lava ma e le mafai ona fa'aogaina mo su'esu'ega atoa (va'ai [Fuse.js Ole fesili umi e sili atu nai lo 10 sekone, fa'afefea ona fa'amalieina?](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries) ).

[TinySearch](//github.com/tinysearch/tinysearch) , fa'aoga Bloom filter e su'e ai, e le mafai ona fa'aoga mo su'esu'ega muamua (mo se fa'ata'ita'iga, ulufale i `goo` , su'esu'e `good` , `google` ), ma e le mafai ona maua fa'apena fa'amae'a fa'amae'a.

Ona o le faaletonu o fofo o loʻo i ai nei, ua fausia ai e `i18n.site` se fofo fou suʻesuʻe pito i luma, o loʻo i ai uiga nei :

1. Lagolago su'esu'ega tele-gagana ma e la'ititi le lapopo'a Ole lapo'a ole su'esu'ega pe a uma ona afifi `gzip` ole `6.9KB` (mo fa'atusatusaga, ole lapo'a ole `lunrjs` ole `25KB` ).
1. Fausia se fa'ailoga fa'aliliu e fa'atatau i `indexedb` , lea e fa'aitiitia ai le manatua ma e vave.
1. Pe a faʻaopoopoina / faʻaleleia pepa, naʻo pepa faʻaopoopo pe suia e toe faʻasinoina, faʻaitiitia ai le aofaʻi o faʻatusatusaga.
1. Lagolago su'esu'ega prefix, lea e mafai ona fa'aalia ai fa'ai'uga o su'esu'ega i le taimi moni a'o lomi le tagata fa'aoga.
1. Avanoa Tuimotu

I lalo, `i18n.site` faʻamatalaga faʻatinoga faʻapitoa o le a faʻaalia i auiliiliga.

## Vaevaega O Upu E Tele Gagana

E fa'aogaina e le fa'avasegaga o upu le upu fa'aleaganu'u a le su'esu'ega `Intl.Segmenter` , ma o lo'o lagolagoina e tagata su'esu'e fa'apitoa uma lenei fa'aoga.

![](//p.3ti.site/1727667759.avif)

O le upu segmentation `coffeescript` code e fa'apea

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

i:

* `/\p{P}/` o se fa'aaliga masani e fetaui ma fa'ailoga fa'atusa fa'apitoa e aofia ai: `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _` { | } ~. .</p><ul><li> `split('.')` e mafua ona o `Firefox` browser word segmentation e le o se vaega `. ` .</li>


## Fausia O Fa'asinomaga

5 laulau teu oloa na faia i `IndexedDB` :

* `word` : id - upu
* `doc` : id - Pepa url - Fa'amaumauga numera
* `docWord` : Fa'asologa o pepa id - upu id
* `prefix` : Fa'asologa o prefix - upu id
* `rindex` : Upu id - Pepa id : Fa'asologa o numera laina

Pasi i le fa'asologa o pepa `url` ma le numera numera `ver` , ma su'e pe o iai le pepa i le laulau `doc` Afai e leai, fai se fa'ailoga fa'aliliu. I le taimi lava e tasi, aveese le fa'ailoga fa'aliliu mo na pepa e le'i pasia i totonu.

I lenei auala, e mafai ona ausia le fa'asologa fa'aopoopo ma fa'aitiitia le aofa'i o fa'atatau.

I fegalegaleaiga pito i luma, e mafai [ona](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) faʻaalia le faʻapipiʻiina o le faʻasologa o le faʻailoga / aloese ai mai le tuai pe a faʻauluina css [le](//juejin.cn/post/7413586285954154522) taimi progress + .

### IndexedDB Tusitusi Fa'atasi Maualuga

O le poloketi ua [idb](//www.npmjs.com/package/idb) e faʻavae i luga o le asynchronous encapsulation o IndexedDB

IndexedDB faitau ma tusitusi e asynchronous. Pe a fatuina se faasino igoa, o le a utaina faʻatasi faʻamaumauga e fatu ai le faasino igoa.

Ina ia aloese mai le leiloa o faʻamatalaga faʻapitoa e mafua mai i tusitusiga faʻatauva, e mafai ona e vaʻai i le `coffeescript` code o loʻo i lalo ma faʻaopopo se `ing` cache i le va o le faitau ma le tusitusi e faʻalavelave ai tusitusiga tauva.

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

## Sa'o Ma Manatu

Ole su'esu'ega ole a fa'avasega muamua upu fa'aulu ole tagata fa'aoga.

Fa'apea o lo'o i ai `N` upu pe a mae'a le upu vaega Pe a toe fa'afo'i fa'ai'uga, o le a toe fa'afo'i muamua fa'ai'uga o lo'o i ai upu autu, ona toe fa'afo'i mai lea o fa'ai'uga e iai `N-1` , `N-2` ,..., `1` .

O fa'ai'uga o su'esu'ega e fa'aalia muamua e fa'amautinoa ai le sa'o o le fesili, ma fa'ai'uga e uta mulimuli ane (kiliki le fa'amau fa'aopoopo) fa'amautinoa le fua faatatau o le toe manatua.

![](//p.3ti.site/1727684564.avif)

## Uta I Luga Ole Manaoga

Ina ia faʻaleleia le saoasaoa o le tali, o le suʻesuʻega e faʻaogaina ai le `yield` generator e faʻatino ai le utaina i luga ole manaʻoga, ma toe foʻi mai i taimi `limit` e fesiligia ai se iʻuga.

Manatua o taimi uma e te toe suʻesuʻe ai pe a uma `yield` , e manaʻomia lou toe tatalaina o se fefaʻatauaʻiga fesili o `IndexedDB` .

## Prefix Su'esu'e Taimi Moni

Ina ia mafai ona faʻaalia iʻuga suʻesuʻe aʻo lomi le tagata faʻaoga, mo se faʻataʻitaʻiga, pe a tuʻuina `wor` , o loʻo faʻaalia upu faʻapipiʻi i `wor` pei o `words` ma `work` .

![](//p.3ti.site/1727684944.avif)

O le fatu su'esu'e o le a fa'aogaina le laulau `prefix` mo le upu mulimuli pe a uma le vaeluaga o upu e su'e ai upu uma o lo'o fa'atasi ma ia, ma su'e i le fa'asologa.

E fa'aaogaina foi le galuega fa'aanti-lulu `debounce` i fegalegaleaiga pito i luma (fa'atinoina e pei ona taua i lalo) e fa'aitiitia ai le tele o taimi o fa'aoga fa'aoga fa'aoso su'esu'ega ma fa'aitiitia le aofa'i o fa'atatau.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Avanoa Tuimotu

E le teuina e le laulau fa'asino le ulua'i tusitusiga, na'o upu, e fa'aitiitia ai le tele o le teuina.

O le fa'ailogaina o fa'ai'uga o su'esu'ega e mana'omia ai le toe utaina o le ulua'i tusitusiga, ma fa'afetaui `service worker` e mafai ona 'alo'ese ai fa'atonuga o feso'otaiga.

I le taimi lava e tasi, ona o `service worker` e faʻapipiʻi uma tala, pe a faia e le tagata faʻaoga se suʻesuʻega, o le upega tafaʻilagi atoa, e aofia ai le sailiga, o loʻo avanoa tuusao.

## Fa'aali Le Fa'ata'ita'iga O Fa'amaumauga a MarkDown

`i18n.site` 's fofo su'esu'e pito i luma mama ua sili ona lelei mo `MarkDown` pepa.

A fa'aalia i'uga su'esu'e, o le a fa'aalia le igoa o le mataupu ma o le a fa'atautaia le mataupu pe a kiliki.

![](//p.3ti.site/1727686552.avif)

## Aotele

Su'esu'ega fa'aliliuga atoa na fa'atinoina ile pito i luma, e leai se server e mana'omia. E fetaui lelei mo 'upega tafaʻilagi laiti ma feololo e pei o pepa ma blogs patino.

`i18n.site` Open source suʻesuʻe pito i luma mama e faʻavaeina e le tagata lava ia, laʻititi i le lapopoa ma le tali vave, foia faʻaletonu o le suʻesuʻega atoa o loʻo i ai nei i luma ma maua ai se poto masani faʻaoga.