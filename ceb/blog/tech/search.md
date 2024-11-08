---

brief: |
  Gisuportahan na karon sa i18n.site ang serverless full-text search.

  Kini nga artikulo nagpaila sa pagpatuman sa lunsay nga front-end nga full-text nga teknolohiya sa pagpangita, lakip ang inverted index nga gitukod sa IndexedDB, prefix search, word segmentation optimization ug multi-language support.

  Kon itandi sa kasamtangan nga mga solusyon, ang puro nga front-end nga full-text nga pagpangita sa i18n.site gamay ra ang gidak-on ug paspas, angay alang sa gagmay ug medium nga gidak-on nga mga website sama sa mga dokumento ug blog, ug anaa sa offline.

---

# Pure Front-End Inverted Full-Text Search

## Pagkasunodsunod

Human sa pipila ka semana nga pag-uswag, [i18n.site](//i18n.site) (usa ka static nga markdown multilingual nga paghubad & himan sa pagtukod sa website) karon nagsuporta sa lunsay nga front-end full-text nga pagpangita.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Kini nga [i18n.site](//i18n.site) magpaambit sa teknikal nga pagpatuman sa `i18n.site` puro front-end full-text nga pagpangita.

Code open source : [Pangitaa ang kernel](//github.com/i18n-site/ie/tree/main/qy) / [interactive nga interface](//github.com/i18n-site/plugin/tree/main/qy)

## Usa Ka Pagrepaso Sa Serverless Full-Text Nga Mga Solusyon Sa Pagpangita

Alang sa gagmay ug medium-kadako nga puro static nga mga website sama sa mga dokumento/personal nga mga blog, ang paghimo sa usa ka self-built full-text search backend bug-at kaayo, ug ang walay serbisyo nga full-text nga pagpangita mao ang mas komon nga pagpili.

Ang walay server nga full-text nga mga solusyon sa pagpangita nahulog sa duha ka halapad nga mga kategorya:

Una, parehas nga [algolia.com](//algolia.com) Ang mga tighatag sa serbisyo sa pagpangita sa ikatulo nga partido naghatag mga sangkap sa unahan alang sa pagpangita sa tibuuk nga teksto.

Ang ingon nga mga serbisyo nanginahanglan bayad base sa gidaghanon sa pagpangita, ug kasagaran dili magamit sa mga tiggamit sa mainland China tungod sa mga isyu sama sa pagsunod sa website.

Dili kini magamit sa offline, dili magamit sa intranet, ug adunay daghang mga limitasyon. Kini nga artikulo wala kaayo maghisgot.

Ang ikaduha kay puro front-end full-text search.

Sa pagkakaron, ang kasagarang puro front-end full-text nga pagpangita naglakip sa [lunrjs](//lunrjs.com) ug [ElasticLunr.js](//github.com/weixsong/elasticlunr.js) (base sa `lunrjs` secondary development).

`lunrjs` Adunay duha ka paagi sa paghimo og mga indeks, ug ang duha adunay kaugalingon nga mga problema.

1. Pre-built index files

   Tungod kay ang indeks adunay mga pulong gikan sa tanan nga mga dokumento, kini dako ang gidak-on.
   Sa matag higayon nga ang usa ka dokumento idugang o usbon, usa ka bag-ong index file kinahanglan nga ikarga.
   Makadugang kini sa oras sa paghulat sa tiggamit ug makaut-ot sa daghang bandwidth.

2. Pag-load sa mga dokumento ug paghimo og mga indeks sa langaw

   Ang pagtukod og index kay usa ka computationally intensive nga buluhaton.

---

Dugang sa `lunrjs` , adunay uban pang mga full-text nga mga solusyon sa pagpangita, sama sa :

[fusejs](//www.fusejs.io) , kuwentaha ang pagkaparehas sa mga kuwerdas nga pangitaon.

Ang pasundayag niini nga solusyon hilabihan ka kabus ug dili magamit alang sa tibuok nga teksto nga pagpangita (tan-awa [Fuse.js Ang taas nga pangutana nagkinahanglan ug labaw sa 10 segundos, unsaon kini pag-optimize?](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries) ).

[TinySearch](//github.com/tinysearch/tinysearch) , gamita ang Bloom filter sa pagpangita, dili magamit para sa prefix search (pananglitan, enter `goo` , search `good` , `google` ), ug dili makab-ot ang susama nga awtomatikong pagkompleto nga epekto.

Tungod sa mga kakulangan sa kasamtangan nga mga solusyon, `i18n.site` nakamugna og bag-ong puro front-end full-text nga solusyon sa pagpangita, nga adunay mosunod nga mga kinaiya :

1. Nagsuporta sa multi-language search ug gamay ang gidak-on Ang gidak-on sa search kernel human sa packaging `gzip` mao ang `6.9KB` (alang sa pagtandi, ang gidak-on sa `lunrjs` kay `25KB` ).
1. Paghimo ug balit-ad nga index base sa `indexedb` , nga gamay ra ang memorya ug paspas.
1. Kung ang mga dokumento gidugang/gibag-o, ang gidugang o giusab nga mga dokumento lamang ang ma-indeks pag-usab, nga makapakunhod sa gidaghanon sa mga kalkulasyon.
1. Nagsuporta sa pagpangita sa prefix ug mahimong magpakita sa mga resulta sa pagpangita sa tinuod nga panahon samtang ang user nag-type.
1. Anaa offline

Sa ubos, `i18n.site` nga mga detalye sa teknikal nga pagpatuman ang ipaila sa detalye.

## Multilinggwal Nga Pulong Segmentation

Ang pagbahin sa pulong naggamit sa lumad nga pulong nga segmentation sa browser `Intl.Segmenter` , ug ang tanang mainstream nga mga browser nagsuporta niini nga interface.

![](//p.3ti.site/1727667759.avif)

Ang pulong segmentation `coffeescript` code mao ang mosunod

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

sa:

* Ang `/\p{P}/` usa ka regular nga ekspresyon nga motakdo sa mga punctuation mark Ang piho nga mga simbolo sa pagpares naglakip sa: `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _` { | } ~. `.</p><ul><li> `split('.')` tungod kay `Firefox` nga pagbahin sa pulong sa browser dili bahin `. ` .</li>


## Pagtukod Sa Indeks

5 nga mga lamesa sa pagtipig sa butang gihimo sa `IndexedDB` :

* `word` : id - pulong
* `doc` : id - Dokumento url - Numero sa bersyon sa dokumento
* `docWord` : Array sa dokumento id - pulong id
* `prefix` : Array sa prefix - pulong id
* `rindex` : Pulong id - Dokumento id : Array sa mga numero sa linya

Ipasa ang han-ay sa dokumento `url` ug bersyon numero `ver` , ug pangitaa kon ang dokumento anaa sa lamesa `doc` Kung wala kini, paghimo ug balit-ad nga indeks. Sa samang higayon, kuhaa ang balit-ad nga indeks para sa mga dokumento nga wala gipasa.

Niining paagiha, ang incremental indexing mahimong makab-ot ug ang kantidad sa kalkulasyon maminusan.

Sa front-end nga interaksyon, ang loading progress bar sa index mahimong ipakita aron malikayan ang lag sa pagkarga sa unang higayon Tan-awa ang "Progress Bar with Animation, Based on a Single progress + Pure css Implementation" [English](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [Chinese](//juejin.cn/post/7413586285954154522) .

### Ang IndexedDB Taas Nga Dungan Nga Pagsulat

Ang proyekto [idb](//www.npmjs.com/package/idb) base sa asynchronous encapsulation sa IndexedDB

Asynchronous ang pagbasa ug pagsulat sa IndexedDB. Kung maghimo usa ka indeks, ang mga dokumento dungan nga ikarga aron mahimo ang indeks.

Aron malikayan ang partial data loss tungod sa kompetisyon nga pagsulat, mahimo nimong i-refer ang `coffeescript` code sa ubos ug magdugang og `ing` cache tali sa pagbasa ug pagsulat aron mabalda ang mga nagkompetensya nga pagsulat.

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

## Katukma Ug Paghinumdom

Ang pagpangita una nga bahin sa mga keyword nga gisulod sa tiggamit.

Hunahunaa nga adunay `N` nga mga pulong pagkahuman sa pulong nga pagbahin Kung nagbalik sa mga resulta, ang mga resulta nga adunay tanan nga mga keyword ibalik una, ug unya ang mga resulta nga adunay `N-1` , `N-2` ,..., `1` nga mga keyword ibalik.

Ang mga resulta sa pagpangita nga gipakita una nagsiguro sa katukma sa pangutana, ug ang mga resulta gikarga sunod (i-klik ang load more button) pagsiguro sa recall rate.

![](//p.3ti.site/1727684564.avif)

## Load on Demand

Aron mapausbaw ang katulin sa pagtubag, ang pagpangita naggamit sa `yield` generator aron ipatuman ang on-demand loading, ug mobalik `limit` higayon nga ang resulta gipangutana.

Timan-i nga sa matag higayon nga mangita ka pag-usab pagkahuman sa `yield` , kinahanglan nimo nga ablihan ang usa ka transaksyon sa pangutana nga `IndexedDB` .

## Prefix Real-Time Nga Pagpangita

Aron mapakita ang mga resulta sa pagpangita samtang ang tiggamit nag-type, pananglitan, kung `wor` gisulod, ang mga pulong nga prefix sa `wor` sama sa `words` ug `work` gipakita.

![](//p.3ti.site/1727684944.avif)

Ang search kernel mogamit sa `prefix` nga lamesa alang sa katapusan nga pulong pagkahuman sa pagbahin sa pulong aron makit-an ang tanan nga mga pulong nga prefix niini, ug pagpangita sa pagkasunod-sunod.

Ang anti-shake function `debounce` gigamit usab sa front-end nga interaksyon (gipatuman ingon sa mosunod) aron makunhuran ang frequency sa input sa user nga maka-trigger sa mga pagpangita ug makunhuran ang gidaghanon sa kalkulasyon.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Anaa Offline

Ang indeks nga lamesa wala magtipig sa orihinal nga teksto, ang mga pulong lamang, nga makapamenos sa gidaghanon sa pagtipig.

Ang pag-highlight sa mga resulta sa pagpangita nagkinahanglan og pag-reload sa orihinal nga teksto, ug ang pagpares sa `service worker` makalikay sa balikbalik nga mga hangyo sa network.

Sa samang higayon, tungod kay `service worker` nag-cache sa tanan nga mga artikulo, sa higayon nga ang user naghimo sa usa ka pagpangita, ang tibuok nga website, lakip ang pagpangita, anaa sa offline.

## Ipakita Ang Pag-Optimize Sa Mga Dokumento Sa MarkDown

Ang lunsay nga solusyon sa pagpangita sa `i18n.site` sa unahan gi-optimize alang sa `MarkDown` nga mga dokumento.

Kung ipakita ang mga resulta sa pagpangita, ang ngalan sa kapitulo ipakita ug ang kapitulo ma-navigate kung gi-klik.

![](//p.3ti.site/1727686552.avif)

## I-Summarize

Ang balit-ad nga full-text nga pagpangita nga gipatuman lunsay sa atubangan nga tumoy, walay server nga gikinahanglan. Haom kaayo kini alang sa gagmay ug medium-kadako nga mga website sama sa mga dokumento ug personal nga mga blog.

`i18n.site` Ang open source nga gimugna sa kaugalingon nga puro front-end search, gamay ang gidak-on ug paspas nga tubag, nagsulbad sa mga kakulangan sa kasamtangan nga puro front-end full-text nga pagpangita ug naghatag og mas maayong kasinatian sa user.