---

brief: |
  i18n.site yanzu yana goyan bayan binciken cikakken rubutu mara sabar.

  Wannan labarin yana gabatar da aiwatar da ingantaccen fasahar neman cikakken rubutu na gaba-gaba, gami da jujjuyawar fihirisar da IndexedDB ta gina, binciken prefix, haɓaka rarrabuwar kalmomi da tallafin harsuna da yawa.

  Idan aka kwatanta da mafita da ake da su, i18n.site tsantsar bincike na gaba-karshen cikakken rubutu yana da ƙanƙanta cikin girma da sauri, dacewa da ƙanana da matsakaitan gidajen yanar gizo kamar takardu da shafukan yanar gizo, kuma ana samun su ta layi.

---

# Neman Cikakken Rubutu Mai Tsaftataccen Gaba-Karshen Juyawa

## Jeri

Bayan makonni & yawa na ci gaba markdown [i18n.site](//i18n.site)

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Wannan labarin zai raba aikin fasaha na `i18n.site` mai cikakken bincike na gaba-gaba [i18n.site](//i18n.site) don sanin tasirin bincike.

Lambar : tushen [kernel](//github.com/i18n-site/ie/tree/main/qy) / [mai mu'amala](//github.com/i18n-site/plugin/tree/main/qy)

## Bita Na Mafitacin Neman Cikakken Rubutu Mara Sabar

Don ƙanana da matsakaita masu girman kai zalla tsayayyen gidajen yanar gizo kamar takardu/shafukan yanar gizo na sirri, gina bayanan bincike mai cikakken rubutu da kansa ya yi nauyi sosai, kuma binciken cikakken rubutu mara sabis shine zaɓi na gama gari.

Maganganun neman cikakken rubutu mara uwar garken sun faɗi cikin manyan rukunai biyu:

Na farko, irin wannan [algolia.com](//algolia.com)

Irin waɗannan sabis ɗin suna buƙatar biyan kuɗi bisa ƙarar bincike, kuma galibi ba su samuwa ga masu amfani a babban yankin China saboda batutuwa kamar yarda da gidan yanar gizo.

Ba za a iya amfani da shi a layi ba, ba za a iya amfani da shi akan intanet ba, kuma yana da iyakacin iyaka. Wannan labarin bai tattauna da yawa ba.

Na biyu shine bincike mai cikakken rubutu na gaba-karshen.

A halin yanzu, gama-gari na gama-gari cikakken bincike na rubutu sun haɗa da [lunrjs](//lunrjs.com) da [ElasticLunr.js](//github.com/weixsong/elasticlunr.js) (dangane da ci gaban sakandare na `lunrjs` ).

`lunrjs` Akwai hanyoyi guda biyu don gina fihirisa, kuma dukansu suna da nasu matsalolin.

1. Fayilolin fihirisa da aka riga aka gina

   Domin fihirisar ta ƙunshi kalmomi daga duk takardu, tana da girma cikin girma.
   Duk lokacin da aka ƙara ko gyara wani takarda, dole ne a loda sabon fayil ɗin fihirisa.
   Zai ƙara lokacin jiran mai amfani kuma yana cinye bandwidth mai yawa.

2. Load da takardu kuma gina fihirisa akan tashi

   Gina fihirisar aiki ne mai tsananin ƙima.

---

Baya ga `lunrjs` , akwai wasu cikakkun hanyoyin bincike na rubutu, kamar :

[fusejs](//www.fusejs.io) lissafta kamance tsakanin kirtani don bincika.

Ayyukan wannan maganin ba su da kyau sosai kuma ba za a iya amfani da su don neman cikakken rubutu ba (duba [Fuse.js Dogon tambaya yana ɗaukar fiye da daƙiƙa 10 , yadda za a inganta shi?](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries) ).

[TinySearch](//github.com/tinysearch/tinysearch) Yi amfani da tace Bloom don bincika, ba za a iya amfani da shi don binciken prefix ba (misali, shigar da `goo` , bincika `good` , `google` ), kuma ba za a iya cimma irin wannan sakamako ta atomatik ba.

Saboda gazawar hanyoyin da ake da su, `i18n.site` ya haɓaka sabon ingantaccen bayani na gaba-gaba mai cikakken rubutu, wanda ke da halaye masu zuwa :

1. Yana goyan bayan binciken yaruka da yawa kuma yana da ƙananan girman girman kernel ɗin bayan fakitin `gzip` shine `6.9KB` (don kwatanta, girman `lunrjs` shine `25KB` ).
1. Gina juzu'i mai jujjuyawa dangane da `indexedb` , wanda ke ɗaukar ƙarancin ƙwaƙwalwar ajiya kuma yana da sauri.
1. Lokacin da aka ƙara / gyaggyara takardu, kawai ƙara ko gyare-gyaren takaddun da aka sake tsarawa, rage adadin ƙididdiga.
1. Yana goyan bayan binciken prefix kuma yana iya nuna sakamakon bincike a ainihin lokacin yayin da mai amfani ke bugawa.
1. Akwai layi

A ƙasa, `i18n.site` za a gabatar da cikakkun bayanan aiwatar da fasaha daki-daki.

## Rarrabuwar Kalmomin Harsuna Da Yawa

Bangaren Kalma yana amfani da kalmar asali na mai lilo `Intl.Segmenter` , kuma duk manyan masu bincike suna goyan bayan wannan mahallin.

![](//p.3ti.site/1727667759.avif)

Kalmar Segmentation `coffeescript` code ita ce kamar haka

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

cikin:

* `/\p{P}/` magana ce ta yau da kullun wacce ta dace da alamomin ƙayyadaddun ƙayyadaddun alamomi sun haɗa da: `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _` { | } `.</p><ul><li> `split('.')` saboda `Firefox` kalmar mashigai ba ta kashi `. ` ba.</li>


## Index Gini

An ƙirƙiri teburin ajiya abubuwa 5 a cikin `IndexedDB` :

* `word` : id -
* `doc` : id - Takardu url - lambar sigar takarda
* `docWord` : Tsare-tsaren id - kalma id
* `prefix` : Prefix - kalma id
* `rindex` : Kalma id - Takardu id : Tsari na lambobi

Shiga cikin tsararrun daftarin aiki `url` da lambar sigar `ver` , kuma bincika ko takaddar tana cikin tebur `doc` Idan babu shi, ƙirƙirar fihirisar jujjuyawar. A lokaci guda, cire jujjuyar fihirisar waɗancan takaddun da ba a shigar dasu ba.

Ta wannan hanyar, ana iya samun ƙididdige yawan ƙididdiga kuma an rage adadin ƙididdiga.

A cikin hulɗar gaba-gaba, za a iya nuna ma'aunin ci gaba [na](//juejin.cn/post/7413586285954154522) ma'aunin [nauyi](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / guje css raguwa lokacin da ake yin lodi a karon progress + .

### IndexedDB Babban Rubutun Lokaci Guda

An [idb](//www.npmjs.com/package/idb) aikin bisa ga asynchronous encapsulation na IndexedDB

IndexedDB yana karantawa kuma ya rubuta ba a daidaita su ba. Lokacin ƙirƙirar fihirisar, za a loda takardu a lokaci guda don ƙirƙirar fihirisar.

Don guje wa ɓarna bayanan ɓangarori da ke haifar da gasa ta rubutu, zaku iya komawa zuwa lambar `coffeescript` da ke ƙasa kuma ku ƙara cache `ing` tsakanin karantawa da rubutu don kutse rubutun gasa.

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

## Daidaitawa Da Tunawa

Binciken zai fara raba mahimman kalmomin da mai amfani ya shigar.

A ɗauka cewa akwai kalmomi `N` bayan ɓangaren kalmar Lokacin dawo da sakamako, za a fara dawo da sakamakon da ke ɗauke da duk mahimman kalmomi, sa'an nan kuma za a dawo da sakamakon da ke dauke da `N-1` , `N-2` ,..., `1` keywords.

Sakamakon binciken da aka nuna da farko yana tabbatar da daidaiton tambayar, kuma sakamakon da aka ɗora daga baya (danna ƙarin maɓalli) yana tabbatar da ƙimar tunawa.

![](//p.3ti.site/1727684564.avif)

## Load Akan Buƙata

Domin inganta saurin amsawa, binciken yana amfani da janareta `yield` don aiwatar da lodin da ake buƙata, kuma yana dawowa `limit` lokacin da aka nemi sakamako.

Lura cewa duk lokacin da kuka sake bincika bayan `yield` , kuna buƙatar sake buɗe ma'amalar tambaya ta `IndexedDB` .

## Prefix Bincike Na Ainihin Lokaci

Domin nuna sakamakon bincike yayin da mai amfani ke bugawa, misali, lokacin da aka shigar da `wor` , ana nuna kalmomin da aka riga aka yi da `wor` kamar `words` da `work` .

![](//p.3ti.site/1727684944.avif)

Kwayar bincike za ta yi amfani da tebur `prefix` don kalma ta ƙarshe bayan rarrabuwar kalma don nemo duk kalmomin da aka riga aka kayyade tare da shi, kuma a bincika a jere.

Hakanan ana amfani da aikin Anti-shake `debounce` a cikin hulɗar gaba-gaba (an aiwatar da shi kamar haka) don rage yawan shigar da mai amfani yana haifar da bincike da rage adadin ƙididdiga.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Akwai Layi

Tebur mai ma'ana baya adana ainihin rubutun, kalmomi kawai, wanda ke rage adadin ajiya.

Haskaka sakamakon bincike yana buƙatar sake loda ainihin rubutun, kuma daidaita `service worker` na iya guje wa maimaita buƙatun cibiyar sadarwa.

A lokaci guda, saboda `service worker` yana adana duk labarin, da zarar mai amfani ya yi bincike, duk gidan yanar gizon, gami da binciken, ana samun su ta layi.

## Nuna Ingantaccen Takaddun MarkDown

`i18n.site` 's tsantsar bincike na gaba-gaba an inganta shi don takaddun `MarkDown` .

Lokacin nuna sakamakon bincike, za a nuna sunan babin kuma za a kewaya babin idan an danna.

![](//p.3ti.site/1727686552.avif)

## Takaita

Jujjuyawar binciken cikakken rubutu da aka aiwatar a ƙarshen gaba zalla, babu uwar garken da ake buƙata. Ya dace sosai ga ƙananan gidajen yanar gizon kanana da matsakaici kamar takardu da shafukan yanar gizo na sirri.

`i18n.site` Buɗe tushen bincike mai tsabta na gaba-gaba mai ƙima, ƙarami a cikin girma da amsa mai sauri, yana magance gazawar bincike mai cikakken rubutu na gaba-ƙarshen yanzu kuma yana ba da ingantaccen ƙwarewar mai amfani.