---

brief: |
  i18n.site tam sim no txhawb serverless nrhiav cov ntawv nyeem.

  Tsab ntawv xov xwm no qhia txog kev siv cov cuab yeej ua ntej-kawg tag nrho cov ntawv tshawb fawb, suav nrog cov ntaub ntawv inverted ua los ntawm IndexedDB, kev tshawb nrhiav ua ntej, lo lus segmentation optimization thiab txhawb ntau hom lus.

  Piv nrog rau cov kev daws teeb meem uas twb muaj lawm, i18n.site qhov kev tshawb nrhiav cov ntawv ntshiab hauv ntej yog qhov me me thiab nrawm, haum rau cov vev xaib me me thiab nruab nrab xws li cov ntaub ntawv thiab blogs, thiab muaj nyob hauv offline.

---

# Ntshiab Pem Hauv Ntej-Kawg Inverted Tag Nrho Cov Ntawv Nyeem

## Ib Ntus

Tom qab markdown peb lub lis piam ntawm txoj kev loj & , [i18n.site](//i18n.site)

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Tsab ntawv xov xwm no yuav qhia txog kev siv ntawm `i18n.site` ntshiab pem hauv ntej-kawg-cov ntawv nyeem tag nrho mus ntsib [i18n.site](//i18n.site)

Code [qhib](//github.com/i18n-site/plugin/tree/main/qy) / [chaw](//github.com/i18n-site/ie/tree/main/qy) :

## Kev Tshuaj Xyuas Ntawm Serverless Tag Nrho Cov Ntawv Tshawb Nrhiav Daws Teeb Meem

Rau cov vev xaib me me thiab nruab nrab ntawm cov vev xaib zoo li qub xws li cov ntaub ntawv / tus kheej blogs, kev tsim tus kheej tsim cov ntawv sau tag nrho cov ntaub ntawv rov qab yog qhov hnyav dhau, thiab kev pabcuam-dawb nrhiav cov ntawv nyeem yog qhov kev xaiv ntau dua.

Serverless full-text search solutions poob rau hauv ob pawg dav:

Ua ntej, zoo sib xws [algolia.com](//algolia.com)

Cov kev pabcuam zoo li no yuav tsum tau them nyiaj raws li kev tshawb fawb ntim, thiab feem ntau tsis muaj rau cov neeg siv hauv Suav teb loj vim muaj teeb meem xws li kev ua raws li lub vev xaib.

Nws tsis tuaj yeem siv offline, tsis tuaj yeem siv hauv intranet, thiab muaj kev txwv loj. Kab lus no tsis tham ntau ntau.

Qhov thib ob yog qhov ntshiab pem hauv ntej-kawg tag nrho cov ntawv tshawb nrhiav.

Tam sim no, kev tshawb nrhiav cov ntawv nyeem puv nkaus suav nrog [lunrjs](//lunrjs.com) thiab [ElasticLunr.js](//github.com/weixsong/elasticlunr.js) (raws li `lunrjs` qhov kev txhim kho thib ob).

`lunrjs` Muaj ob txoj hauv kev los tsim cov indexes, thiab ob leeg muaj lawv tus kheej cov teeb meem.

1. Pre-built index files

   Vim tias qhov ntsuas muaj cov lus los ntawm txhua cov ntaub ntawv, nws loj loj.
   Thaum twg ib daim ntawv ntxiv lossis hloov kho, cov ntaub ntawv ntsuas tshiab yuav tsum tau thauj khoom.
   Nws yuav ua rau tus neeg siv lub sijhawm tos thiab haus ntau bandwidth.

2. Thauj cov ntaub ntawv thiab tsim cov indexes ntawm ya

   Txhim kho qhov Performance index yog ib txoj hauj lwm uas siv computer ua kom rov tsim kho qhov Performance index txhua zaus koj nkag mus rau nws yuav ua rau pom kev lag luam thiab kev siv tsis zoo.

---

Ntxiv rau `lunrjs` , muaj qee qhov kev tshawb nrhiav cov ntawv nyeem tag nrho, xws li :

[fusejs](//www.fusejs.io) , xam qhov zoo sib xws ntawm cov hlua mus nrhiav.

Qhov kev ua tau zoo ntawm qhov kev daws teeb meem no yog qhov tsis zoo thiab tsis tuaj yeem siv rau kev tshawb nrhiav puv npo (saib [Fuse.js Cov lus nug ntev yuav siv sijhawm ntau dua 10 vib nas this, yuav ua li cas kho nws?](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries) ).

[TinySearch](//github.com/tinysearch/tinysearch) , siv Bloom lim los tshawb nrhiav, tsis tuaj yeem siv rau kev tshawb nrhiav ua ntej (piv txwv li, nkag mus `goo` , tshawb nrhiav `good` , `google` ), thiab tsis tuaj yeem ua tiav cov txiaj ntsig zoo li qub.

Vim yog qhov tsis txaus ntawm cov kev daws teeb meem uas twb muaj lawm, `i18n.site` tau tsim ib qho tshiab ntshiab pem hauv ntej-kawg tag nrho cov ntawv tshawb nrhiav, uas muaj cov yam ntxwv hauv qab no :

1. Txhawb kev tshawb nrhiav ntau hom lus thiab me me Qhov loj ntawm cov khoom tshawb nrhiav tom qab ntim `gzip` yog `6.9KB` (rau kev sib piv, qhov loj ntawm `lunrjs` yog `25KB` ).
1. Tsim ib qho inverted Performance index raws li `indexedb` , uas yuav siv sij hawm tsawg dua nco thiab ceev.
1. Thaum cov ntaub ntawv ntxiv / hloov kho, tsuas yog cov ntaub ntawv ntxiv lossis hloov kho cov ntaub ntawv rov qab ntsuas dua, txo cov nqi ntawm kev suav.
1. Txhawb kev tshawb nrhiav ua ntej thiab tuaj yeem tso saib cov txiaj ntsig tshawb fawb hauv lub sijhawm thaum tus neeg siv ntaus ntawv.
1. Muaj offline

Hauv qab no, `i18n.site` cov lus qhia txog kev siv cov txheej txheem yuav qhia kom meej.

## Multilingual Lo Lus Segmentation

Lo lus segmentation siv lub browser haiv neeg lo lus segmentation `Intl.Segmenter` , thiab tag nrho cov mainstream browsers txhawb no interface.

![](//p.3ti.site/1727667759.avif)

Lo lus segmentation `coffeescript` code yog raws li nram no

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

hauv:

* `/\p{P}/` yog ib qho kev qhia tsis tu ncua uas phim cov cim cim cim tshwj xeeb suav nrog: `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _` { | } ~. `.</p><ul><li> `split('.')` yog vim `Firefox` browser lo lus segmentation tsis segment `. ` .</li>


## Index Tsev

5 lub rooj cia khoom tau tsim hauv `IndexedDB` :

* `word` lus : id -
* `doc` : id - Document url - Document version number
* `docWord` : Array of document id - lo lus id
* `prefix` : Array of prefix - lo lus id
* `rindex` : Lo lus id - Document id : Array ntawm kab zauv

Hla nyob rau hauv cov array ntawm cov ntaub ntawv `url` thiab version number `ver` , thiab tshawb xyuas seb cov ntaub ntawv muaj nyob rau hauv lub rooj `doc` Yog hais tias nws tsis muaj, tsim ib tug inverted index. Nyob rau tib lub sijhawm, tshem tawm qhov inverted index rau cov ntaub ntawv uas tsis tau dhau mus.

Nyob rau hauv txoj kev no, incremental indexing tuaj yeem ua tiav thiab cov nqi ntawm kev suav raug txo.

Nyob rau hauv pem hauv ntej-kawg kev sib cuam tshuam, lub loading nce bar ntawm qhov Performance index tuaj yeem tso tawm kom tsis txhob muaj kev lag luam thaum thauj khoom thawj zaug Saib "Progress Bar nrog Animation, Raws li Ib Leeg progress + Pure css Implementation" [English](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [Suav](//juejin.cn/post/7413586285954154522) .

### IndexedDB Siab Concurrent Sau

Qhov project yog [idb](//www.npmjs.com/package/idb) los ntawm asynchronous encapsulation ntawm IndexedDB

IndexedDB nyeem thiab sau ntawv yog asynchronous. Thaum tsim ib qho index, cov ntaub ntawv yuav raug thauj khoom ib txhij los tsim qhov ntsuas.

Txhawm rau kom tsis txhob muaj cov ntaub ntawv ib nrab poob los ntawm kev sib tw sau ntawv, koj tuaj yeem xa mus rau `coffeescript` code hauv qab no thiab ntxiv `ing` cache ntawm kev nyeem ntawv thiab sau ntawv los cuam tshuam cov kev sib tw sau.

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

## Precision Thiab Rov Qab

Kev tshawb nrhiav yuav xub ntu cov ntsiab lus nkag los ntawm tus neeg siv.

Xav tias muaj `N` lo lus tom qab lo lus segmentation thaum rov qab cov txiaj ntsig, cov txiaj ntsig uas muaj tag nrho cov ntsiab lus yuav raug xa rov qab ua ntej, thiab tom qab ntawd cov txiaj ntsig uas muaj `N-1` , `N-2` , ... , `1` lo lus tseem ceeb yuav raug xa rov qab.

Cov txiaj ntsig kev tshawb fawb tau tshwm sim thawj zaug kom paub meej qhov tseeb ntawm cov lus nug, thiab cov txiaj ntsig tau thauj khoom tom qab (nias lub khawm ntxiv) kom ntseeg tau tias tus nqi rov qab.

![](//p.3ti.site/1727684564.avif)

## Load Raws Li Xav Tau

Txhawm rau txhim kho cov lus teb ceev, kev tshawb fawb siv lub tshuab hluav taws xob `yield` los ua raws li qhov xav tau ntawm kev thauj khoom, thiab xa rov qab `limit` zaus cov lus nug.

Nco ntsoov tias txhua zaus koj tshawb nrhiav dua tom qab `yield` , koj yuav tsum rov qhib cov lus nug ntawm `IndexedDB` .

## Prefix Tshawb Nrhiav Lub Sijhawm

Txhawm rau tso saib cov txiaj ntsig tshawb fawb thaum tus neeg siv ntaus ntawv, piv txwv li, thaum `wor` nkag mus, cov lus ua ntej nrog `wor` xws li `words` thiab `work` raug tso tawm.

![](//p.3ti.site/1727684944.avif)

Cov lus tshawb nrhiav yuav siv `prefix` lub rooj rau lo lus kawg tom qab lo lus segmentation kom pom tag nrho cov lus ua ntej nrog nws, thiab tshawb nrhiav hauv ntu.

Anti-shake muaj nuj nqi `debounce` kuj tseem siv nyob rau hauv pem hauv ntej-kawg kev sib cuam tshuam (ua raws li hauv qab no) kom txo tau qhov zaus ntawm cov neeg siv tswv yim ua rau kev tshawb nrhiav thiab txo cov nqi ntawm kev suav.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Muaj Offline

Lub rooj ntsuas ntsuas tsis khaws cov ntawv qub, tsuas yog cov lus, uas txo cov nqi cia.

Highlighting search results need reloading the original text, and matching `service worker` tuaj yeem zam tsis tau rov qab thov network.

Tib lub sijhawm, vim tias `service worker` caches tag nrho cov ntawv, thaum tus neeg siv ua kev tshawb fawb, tag nrho lub vev xaib, suav nrog kev tshawb nrhiav, muaj nyob offline.

## Tso Saib Optimization Ntawm MarkDown Cov Ntaub Ntawv

`i18n.site` 's ntshiab pem hauv ntej-kawg nrhiav kev daws teeb meem yog optimized rau `MarkDown` cov ntaub ntawv.

Thaum pom cov txiaj ntsig tshawb fawb, tshooj npe yuav tshwm sim thiab tshooj yuav raug xa mus thaum nias.

![](//p.3ti.site/1727686552.avif)

## Cov Ntsiab Lus

Inverted tag nrho cov ntawv tshawb nrhiav tau ua tiav ntawm lub hauv ntej kawg, tsis muaj server xav tau. Nws yog qhov tsim nyog rau cov vev xaib me me thiab nruab nrab xws li cov ntaub ntawv thiab cov blogs tus kheej.

`i18n.site` Qhib qhov chaw nws tus kheej tsim cov ntshiab pem hauv ntej-kawg tshawb nrhiav, me me thiab cov lus teb ceev ceev, daws qhov tsis txaus ntawm qhov tam sim no ntshiab pem hauv ntej-kawg nrhiav cov ntawv nyeem thiab muab kev paub zoo dua rau cov neeg siv.