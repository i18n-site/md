---

brief: |
  i18n.site sweswi yi seketela ku lavisisa ka matsalwa hinkwawo lama nga riki na sevha.

  Atikili leyi yi tivisa ku tirhisiwa ka thekinoloji yo lavisisa ya matsalwa hinkwawo ya le mahlweni yo basa, ku katsa na index leyi hundzuriweke leyi akiweke hi IndexedDB, ku lavisisa swirhangi, ku antswisiwa ka ku avanyisa marito na nseketelo wa tindzimi to tala.

  Loko ku pimanisiwa na swintshuxo leswi nga kona, ku lavisisa ka matsalwa lama heleleke ka le mahlweni loku tengeke ka i18n.site i kutsongo hi vukulu naswona ku hatlisa, ku faneleka eka tiwebsite letitsongo na ta le xikarhi to fana na matsalwa na ti-blog, naswona ku kumeka ehandle ka inthanete.

---

# Ku Lavisisa Ka Matsalwa Hinkwawo Loku Hundzuriweke Ka Le Mahlweni Loku Tengeke

## Xaxamela

Endzhaku ka mavhiki yo hlayanyana ya nhluvukiso, [i18n.site](//i18n.site) (xitirhisiwa xo aka webusayiti xa markdown multilingualtranslation & lexi nga cinciki ntsena) sweswi xi seketela ku lavisisa ka matsalwa hinkwawo ya le mahlweni lama tengeke.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Xihloko lexi xi ta [i18n.site](//i18n.site) ku tirhisiwa ka xithekiniki ka `i18n.site` pure front-end full-text Search !

Khodi xihlovo lexi pfulekeke : [Search kernel](//github.com/i18n-site/ie/tree/main/qy) / [interactive interface](//github.com/i18n-site/plugin/tree/main/qy)

## Ndzavisiso Wa Swintshuxo Swa Ku Lavisisa Matsalwa Hinkwawo Lama Nga Riki Na Sevha

Eka tiwebsite letitsongo na ta le xikarhi leti nga cinciki ntsena to fana na matsalwa/tiblog ta munhu hi xiyexe, ku aka backend yo lavisisa matsalwa hinkwawo leyi tiyimeleke swi tika ngopfu, naswona ku lavisisa matsalwa hinkwawo lama nga riki na vukorhokeri i nhlawulo lowu tolovelekeke swinene.

Switshuxo swa ku lavisisa matsalwa hinkwawo lama nga riki na sevha swi wela eka swiyenge swimbirhi swo anama:

Xo sungula, lava fanaka [algolia.com](//algolia.com) Vaphakeri va vukorhokeri bya ku lavisisa bya vanhu va vunharhu va nyika swiphemu swa le mahlweni swa ku lavisisa matsalwa hinkwawo.

Vukorhokeri byo tano byi lava ku hakeriwa hi ku ya hi vholumo ya ku lavisisa, naswona hakanyingi a byi kumeki eka vatirhisi etikweni-nkulu ra China hikwalaho ka timhaka to fana na ku landzelerisa ka webusayiti.

A yi nge tirhisiwi handle ka inthanete, a yi nge tirhisiwi eka intranet naswona yi ni swipimelo leswikulu. Xihloko lexi a xi vulavuli hi swo tala.

Xa vumbirhi i ku lavisisa matsalwa hinkwawo ya le mahlweni lama tengeke.

Sweswi, ku lavisisa loku tolovelekeke ka matsalwa ya le mahlweni yo basa ku katsa [lunrjs](//lunrjs.com) na [ElasticLunr.js](//github.com/weixsong/elasticlunr.js) (leswi sekeriweke eka `lunrjs` nhluvukiso wa vumbirhi).

`lunrjs` Kuna tindlela timbirhi to aka ti index, naswona havumbirhi bya tona ti na swiphiqo swa tona.

1. Tifayili ta index leti akiweke ka ha ri emahlweni

   Hikwalaho ka leswi xikombo xi nga ni marito lama humaka eka matsalwa hinkwawo, i xikulu hi vukulu.
   Nkarhi wun’wana na wun’wana loko tsalwa ri engeteriwa kumbe ku cinciwa, fayili leyintshwa ya index yi fanele ku layicha.
   Swi ta engetela nkarhi wo rindza wa mutirhisi naswona swi ta dya bandwidth yo tala.

2. Layicha matsalwa ivi u aka ti-index hi ku hatlisa

   Ku aka index i ntirho lowu lavaka xibalo Ku tlhela u aka index nkarhi wun’wana na wun’wana loko u yi nghena swi ta vanga ku hlwela loku nga erivaleni na ntokoto wo biha wa mutirhisi.

---

Ku engetela eka `lunrjs` , ku na swintshuxo swin’wana swo lavisisa matsalwa lama heleleke, swo tanihi :

[fusejs](//www.fusejs.io) , hlayela ku fana exikarhi ka tintambhu to lavisisa.

Matirhelo ya xitshunxo lexi ya bihile swinene naswona a ya nge tirhisiwi ku lavisisa matsalwa hinkwawo (vona [Fuse.js Xivutiso xo leha xi teka ku tlula 10 tisekoni, xana u nga xi antswisa njhani?](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries) ).

[TinySearch](//github.com/tinysearch/tinysearch) `goo` `good` `google`

Hikwalaho ka ku pfumaleka ka swintshuxo leswi nga kona, `i18n.site` u tumbuluxile xitshunxo lexintshwa xo lavisisa xa matsalwa hinkwawo xa le mahlweni lexi tengeke, lexi nga na swihlawulekisi leswi landzelaka :

1. Yi seketela ku lavisisa ka tindzimi to tala naswona i yitsongo hi vukulu Vukulu bya kernel yo lavisisa endzhaku ko paka `gzip` i `6.9KB` (ku pimanisa, vukulu bya `lunrjs` i `25KB` )
1. Aka index leyi hundzuriweke leyi sekeriweke eka `indexedb` , leyi tekaka memori yitsongo naswona yi hatlisaka.
1. Loko matsalwa ya engeteriwa/cinciwa, i matsalwa lama engeteriweke kumbe lama cinciweke ntsena lama tlhelaka ma endliwa index, leswi hungutaka nhlayo ya swibalo.
1. Yi seketela ku lavisisa ka swirhangi naswona yi nga kombisa mbuyelo wa ku lavisisa hi nkarhi wa xiviri loko mutirhisi a ri karhi a thayipa.
1. Yi kumeka ehandle ka inthanete

Laha hansi, vuxokoxoko `i18n.site` bya ku tirhisiwa ka xithekiniki byi ta nghenisiwa hi vuxokoxoko.

## Ku Avanyisa Marito Hi Tindzimi to Tala

Ku avanyisa marito ku tirhisa ku avanyisa marito ya ntumbuluko ya xihlamusela-marito `Intl.Segmenter` , naswona swihlamusela-marito hinkwaswo swa ntolovelo swi seketela xihlanganisi lexi.

![](//p.3ti.site/1727667759.avif)

Khodi ya ku avanyisa rito `coffeescript` yi le ka xiyimo lexi landzelaka

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

endzeni:

* `/\p{P}/` i xivulavulelo xa ntolovelo lexi fambelanaka na swikombiso swa mapeletelo Swikombiso swo karhi swo fambelanisa swi katsa: `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _` { | } ~. `.</p><ul><li> `split('.')` swi vangiwa hikuva `Firefox` ku avanyisa marito ya browser a ku avanyisi `. ` .</li>


## Ku Aka Ti-Index

5 wa matafula ya vuhlayiselo bya swilo ya endliwile eka `IndexedDB` :

* `word` marito : id -
* `doc` : id - Tsalwa url - Nomboro ya vuhundzuluxi bya tsalwa
* `docWord` : Array ya dokhumente id - rito id
* `prefix` : Nxaxamelo wa xirhangi - rito id
* `rindex` : Rito id - Tsalwa id : Nxaxamelo wa tinomboro ta mitila

Pfuxeta eka array ya document `url` na version number `ver` , kutani u lavisisa loko document yi ri kona eka tafula `doc` Loko yi nga ri kona, endla index leyi hundzuriweke. Hi nkarhi lowu fanaka, susa index leyi hundzuriweke ya matsalwa wolawo lama nga hundziseriwangiki.

Hi ndlela leyi, incremental indexing yinga fikeleriwa naswona nhlayo ya xibalo ya hunguteka.

Eka vuhlanganisi bya le mahlweni, barhi ya nhluvuko wa ku layicha ya index yi nga kombisiwa ku papalata ku hlwela loko u layicha ro sungula Vona "Barhi ya Nhluvuko na Animation, Based on a Single progress + Pure css Implementation" [Xitsonga](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [Xichayina](//juejin.cn/post/7413586285954154522) .

### IndexedDB Ku Tsala Ka Le Henhla Ka Nkarhi Wun’we

Phurojeke leyi yi [idb](//www.npmjs.com/package/idb) hi ku ya hi asynchronous encapsulation ya IndexedDB

IndexedDB ku hlaya na ku tsala i asynchronous. Loko ku endliwa index, matsalwa ya ta layicha hi nkarhi wun’we ku tumbuluxa index.

Leswaku u papalata ku lahlekeriwa hi xiphemu xa datha leswi vangiwaka hi ku tsala loku phikizanaka, u nga languta eka khodi ya `coffeescript` laha hansi ivi u engetela cache ya `ing` exikarhi ka ku hlaya na ku tsala ku kavanyeta ku tsala loku phikizanaka.

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

## Ku Languta Ni Ku Tsundzuka

Ku lavisisa ku ta rhanga hi ku avanyisa marito ya nkoka lama nghenisiweke hi mutirhisi.

Titekeli enhlokweni leswaku ku na marito ya `N` endzhaku ka ku avanyisa marito Loko ku vuyisa mimbuyelo, mimbuyelo leyi nga na marito ya nkoka hinkwawo yi ta tlheriseriwa ku sungula, ivi mimbuyelo leyi nga na `N-1` , `N-2` ,..., `1` wa marito ya nkoka yi ta vuyiseriwa.

Mimbuyelo ya ku lavisisa leyi kombisiweke ku sungula yi tiyisisa ku pakanisa ka xivutiso, naswona mimbuyelo leyi layichiweke endzhaku (yi tikhoma buti ya layicha swo tala) yi tiyisisa mpimo wa ku tsundzuka.

![](//p.3ti.site/1727684564.avif)

## Layicha Hi Ku Landza Xilaveko

Leswaku ku antswisiwa rivilo ra nhlamulo, ku lavisisa ku tirhisa jeneretara `yield` ku tirhisa ku layicha hi ku landza xilaveko, naswona ku vuya nkarhi `limit` loko mbuyelo wu vutisiwile.

Xiya leswaku nkarhi wun'wana na wun'wana loko u lavisisa nakambe endzhaku ka `yield` , u fanele ku pfula nakambe nxaviselano wa xivutiso wa `IndexedDB` .

## Xirhangi Xa Ku Lavisisa Ka Nkarhi Wa Xiviri

Leswaku ku kombisiwa mimbuyelo ya ku lavisisa loko mutirhisi a ri karhi a thayipa, xikombiso, loko ku nghenisiwa `wor` , ku kombisiwa marito lama nga si sungula hi `wor` yo fana na `words` na `work` .

![](//p.3ti.site/1727684944.avif)

Kernel yo lavisisa yi ta tirhisa tafula ra `prefix` ra rito ro hetelela endzhaku ka ku avanyisa rito ku kuma marito hinkwawo lama nga si sungula hi yona, na ku lavisisa hi ku landzelelana.

Ntirho wo lwisana na ku tsekatseka `debounce` wu tlhela wu tirhisiwa eka vuhlanganisi bya le mahlweni (lowu tirhisiweke hi ndlela leyi landzelaka) ku hunguta nhlayo ya ku nghenisa ka mutirhisi loku hlohlotelaka ku lavisisa na ku hunguta nhlayo ya xibalo.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Yi Kumeka Ehandle Ka Inthanete

Tafula ra index a ri hlayisi tsalwa ro sungula, marito ntsena, leswi hungutaka nhlayo ya vuhlayiselo.

Ku kandziyisa mimbuyelo ya ku lavisisa swi lava ku layicha nakambe tsalwa ro sungula, naswona ku fambisana na `service worker` swi nga papalata swikombelo swa netiweke leswi phindha-phindhiweke.

Hi nkarhi lowu fanaka, hikuva `service worker` yi hlayisa tiatikili hinkwato, loko mutirhisi a endla ku lavisisa, webusayiti hinkwayo, ku katsa na ku lavisisa, yi kumeka ehandle ka inthanete.

## Ku Antswisiwa Ka Nkombiso Wa Matsalwa Ya MarkDown

`i18n.site` 's pure front-end search solution yi antswisiwile eka `MarkDown` wa matsalwa.

Loko ku kombisiwa mimbuyelo ya ku lavisisa, vito ra ndzima ri ta kombisiwa naswona ndzima yi ta famba-famba loko yi tsindziyela.

![](//p.3ti.site/1727686552.avif)

## Pfuxeta

Ku lavisisa ka matsalwa hinkwawo loku hundzuriweke ku tirhisiwa ntsena eka makumu ya le mahlweni, a ku laveki sevha. Yi lulamerile swinene eka tiwebsite letintsongo na ta le xikarhi to fana na matsalwa na ti-blog ta munhu hi xiyexe.

`i18n.site` Ku lavisisa ka le mahlweni loku tengeke loku ti tumbuluxeke ka xihlovo lexi pfulekeke, lokutsongo hi vukulu na nhlamulo yo hatlisa, ku tlhantlha swihoxo swa ku lavisisa ka sweswi ka matsalwa yo basa ya le mahlweni yo basa naswona ku nyika ntokoto wo antswa wa mutirhisi.