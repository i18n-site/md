---

brief: |
  i18n.urubuga ubu rushyigikira seriveri idafite ubushakashatsi bwuzuye.

  Iyi ngingo itangiza ishyirwa mubikorwa ryambere-ryuzuye ryuzuye ryubushakashatsi bwikoranabuhanga, harimo indangagaciro ihindagurika yubatswe na IndexedDB, gushakisha imbanzirizamushinga, gutezimbere ijambo hamwe no gushyigikira indimi nyinshi.

  Ugereranije nibisubizo bihari, i18n.urubuga rwiza rwimbere-impera yuzuye-ishakisha ni nto mubunini kandi byihuse, ibereye kurubuga ruto kandi ruciriritse nkinyandiko na blog, kandi iraboneka kumurongo.

---

# Isuku Yimbere-Iherezo Ihinduye Inyandiko-Yuzuye Ishakisha

## Urukurikirane

& yibyumweru byinshi byiterambere markdown [i18n.site](//i18n.site)

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Iyi [i18n.site](//i18n.site) izagabana ishyirwa mubikorwa rya tekiniki ya `i18n.site` yuzuye-ishakisha ryuzuye-Gusura.

Kode ifungura : [Shakisha intangiriro](//github.com/i18n-site/ie/tree/main/qy) / [interineti](//github.com/i18n-site/plugin/tree/main/qy)

## Isubiramo Rya Seriveri Idafite Inyandiko Yuzuye Ishakisha Ibisubizo

Kurubuga ruto kandi ruciriritse gusa ruhagaze neza nkurubuga nkinyandiko / blog bwite, kubaka wenyine-wongeyeho inyandiko-yuzuye ishakisha inyuma biraremereye cyane, kandi serivisi-yubusa-yuzuye-ishakisha ryuzuye ni amahitamo menshi.

Serverless yuzuye-ibisubizo byubushakashatsi biri mubice bibiri bigari:

[algolia.com](//algolia.com) mbere, bisa nagatatu-gatanga serivisi zishakisha zitanga ibice byanyuma-gushakisha inyandiko-yuzuye.

Serivisi nkizo zisaba kwishura zishingiye ku bwinshi bw’ishakisha, kandi akenshi ntizishobora kuboneka ku bakoresha ku mugabane w’Ubushinwa kubera ibibazo nko kubahiriza urubuga.

Ntishobora gukoreshwa kumurongo, ntishobora gukoreshwa kuri intranet, kandi ifite aho igarukira. Iyi ngingo ntabwo ivuga byinshi.

Iya kabiri ni isuku imbere-iherezo ryuzuye-ishakisha.

Kugeza ubu, gushakisha imbere-kurangiza kwuzuye-gushakisha harimo na [ElasticLunr.js](//github.com/weixsong/elasticlunr.js) (bishingiye ku iterambere [lunrjs](//lunrjs.com) `lunrjs` ).

`lunrjs` Hariho inzira ebyiri zo kubaka indangagaciro, kandi zombi zifite ibibazo byazo.

1. Imbere yububiko bwa dosiye

   Kuberako indangagaciro ikubiyemo amagambo avuye mu nyandiko zose, ni nini mu bunini.
   Igihe cyose inyandiko yongeweho cyangwa yahinduwe, dosiye nshya yerekana igomba gutwarwa.
   Bizongera umukoresha igihe cyo gutegereza kandi bitwara umurongo mwinshi.

2. Fungura inyandiko hanyuma wubake indangagaciro

   Kubaka indangagaciro ni umurimo wo kubara cyane.

---

Usibye `lunrjs` , hari ibindi bisobanuro byuzuye-byashakishijwe ibisubizo, nka :

[fusejs](//www.fusejs.io) kubara, guhuza imirongo yo gushakisha!

Imikorere yiki gisubizo irakennye cyane kandi ntishobora gukoreshwa mubushakashatsi bwuzuye (reba [Fuse.js Ikibazo kirekire gifata amasegonda arenga 10 amasegonda, nigute wabikora neza?](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries) ).

[TinySearch](//github.com/tinysearch/tinysearch) `goo` `good` `google`

Kubera ibitagenda neza kubisubizo bihari, `i18n.site` yateje imbere shyashya imbere-iherezo ryuzuye-ishakisha igisubizo, gifite ibimenyetso bikurikira :

1. Shyigikira indimi nyinshi kandi ni nto mubunini. Ingano yintangiriro yishakisha nyuma yo gupakira `gzip` ni `6.9KB` (kubigereranya, ubunini bwa `lunrjs` ni `25KB` )
1. Kubaka indangagaciro ihindagurika ishingiye kuri `indexedb` , ifata kwibuka bike kandi byihuse.
1. Iyo inyandiko zongeweho / zahinduwe, gusa inyandiko zongeweho cyangwa zahinduwe zongeye gushyirwaho, kugabanya umubare wabazwe.
1. Shyigikira prefix ishakisha kandi irashobora kwerekana ibisubizo byubushakashatsi mugihe nyacyo mugihe uyikoresha yandika.
1. Kuboneka kumurongo

Hasi, `i18n.site` tekiniki yo gushyira mubikorwa tekinike izatangizwa muburyo burambuye.

## Indimi Nyinshi

Igice cyijambo gikoresha mushakisha ijambo kavukire `Intl.Segmenter` , kandi mushakisha zose zingenzi zishyigikira iyi interface.

![](//p.3ti.site/1727667759.avif)

Ijambo segmentation `coffeescript` code nkiyi ikurikira

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

muri:

* `/\p{P}/` ni imvugo isanzwe ihuye nibimenyetso byerekana ibimenyetso byihariye: `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _` { | } ! `.</p><ul><li> `split('.')` ni ukubera ko `Firefox` mushakisha ijambo gutandukanya ntabwo ari igice cya `. ` .</li>


## Kubaka Urutonde

Imbonerahamwe 5 yo kubika ibintu yashizweho muri `IndexedDB` :

* `word` amagambo : id -
* `doc` : id - url - Umubare winyandiko
* `docWord` : Array yinyandiko id - ijambo id
* `prefix` : Array ya prefix - ijambo id
* `rindex` Ijambo Ijambo id - Inyandiko id : Array yimibare yumurongo :

Genda mumurongo winyandiko `url` na verisiyo numero `ver` , hanyuma ushakishe niba inyandiko ibaho mumeza `doc` Niba idahari, kora indangagaciro ihindagurika. Mugihe kimwe, kura indangagaciro ihindagurika kuri izo nyandiko zitanyuze.

Muri ubu buryo, indangagaciro ziyongera zishobora kugerwaho kandi umubare wo kubara uragabanuka.

Mubikorwa byimbere-impera, imizigo yiterambere yikigereranyo irashobora kwerekanwa kugirango wirinde gutinda mugihe cyo gupakira bwa mbere. Reba "Iterambere ryimbere hamwe na Animation, rishingiye kumurongo umwe progress + Pure css Gushyira mubikorwa" [Icyongereza](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [Igishinwa](//juejin.cn/post/7413586285954154522) .

### IrondereroDB Ryanditse Hamwe

Umushinga [idb](//www.npmjs.com/package/idb) ushingiye kuri encapsulation ya asinchronous ya IndexedDB

IndexedDB isoma kandi yandika ntisanzwe. Mugihe cyo gukora indangagaciro, inyandiko zizapakirwa icyarimwe kugirango zikore urutonde.

Kugirango wirinde gutakaza amakuru igice cyatewe no kwandika kurushanwa, urashobora kwifashisha kode `coffeescript` hepfo hanyuma ukongeramo cache `ing` hagati yo gusoma no kwandika kugirango uhagarike inyandiko zipiganwa.

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

## Icyitonderwa Kandi Wibuke

Gushakisha bizabanza gutandukanya ijambo ryibanze ryinjijwe numukoresha.

Dufate ko hari amagambo `N` nyuma yijambo segmentation Mugihe ugarutse ibisubizo, ibisubizo bikubiyemo ijambo ryibanze byose bizasubizwa mbere, hanyuma ibisubizo birimo `N-1` , `N-2` , ..., `1` byingenzi.

Ibisubizo by'ishakisha byerekanwe mbere byemeza neza ikibazo, kandi ibisubizo byapimwe nyuma (kanda umutwaro urenze buto) byemeza igipimo cyo kwibuka.

![](//p.3ti.site/1727684564.avif)

## Umutwaro Kubisabwa

Kugirango tunoze igisubizo cyibisubizo, ishakisha rikoresha `yield` generator kugirango ishyire mubikorwa ibisabwa, kandi igaruka `limit` gihe ibisubizo byabajijwe.

Menya ko burigihe burigihe ushakisha nyuma ya `yield` , ugomba gufungura ikibazo cyikibazo cya `IndexedDB` .

## Shyira Mugushakisha Igihe Nyacyo

Kugirango ugaragaze ibisubizo by'ishakisha mugihe uyikoresha yandika, kurugero, iyo `wor` yinjiye, amagambo abanziriza `wor` nka `words` na `work` arerekanwa.

![](//p.3ti.site/1727684944.avif)

Gushakisha intangiriro izakoresha imbonerahamwe `prefix` kumagambo yanyuma nyuma yijambo ryamagambo kugirango ubone amagambo yose yabanjirijwe nayo, hanyuma ushakishe muburyo bukurikiranye.

Imikorere yo kurwanya shake `debounce` nayo ikoreshwa mubikorwa byimbere-byanyuma (bishyirwa mubikorwa kuburyo bukurikira) kugirango ugabanye inshuro zabakoresha binjiza gushakisha no kugabanya umubare wabazwe.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Kuboneka Kumurongo

Imbonerahamwe yerekana ntabwo ibika inyandiko yumwimerere, gusa amagambo, agabanya ingano yububiko.

Kugaragaza ibisubizo byubushakashatsi bisaba gusubiramo inyandiko yumwimerere, kandi guhuza `service worker` birashobora kwirinda ibyifuzo byurusobe.

Igihe kimwe, kubera ko `service worker` cashe ingingo zose, iyo umukoresha amaze gukora ubushakashatsi, urubuga rwose, harimo nishakisha, ruraboneka kumurongo.

## Erekana Uburyo Bwiza Bwa MarkDown

`i18n.site` 'isuku yimbere-iherezo ryishakisha ryateguwe neza kubwinyandiko `MarkDown` .

Mugihe werekana ibisubizo byubushakashatsi, izina ryigice rizerekanwa kandi igice kizayoborwa iyo ukanze.

![](//p.3ti.site/1727686552.avif)

## Vuga Muri Make

Guhindura inyandiko-yuzuye ishakisha yashyizwe mubikorwa gusa imbere, nta seriveri isabwa. Birakwiriye cyane kurubuga ruto kandi ruciriritse nkinyandiko na blog bwite.

`i18n.site` Gufungura isoko yonyine-yateje imbere ishakisha ryimbere-ntoya, ntoya mubunini no gusubiza byihuse, ikemura ibitagenda neza byubu byimbere-byuzuye byuzuye-ishakisha kandi itanga uburambe bwabakoresha.