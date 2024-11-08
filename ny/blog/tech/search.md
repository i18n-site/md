---

brief: |
  i18n.site tsopano imathandizira kusaka kwamalemba athunthu opanda seva.

  Nkhaniyi ikuwonetsa kukhazikitsidwa kwaukadaulo waukadaulo wamawu akutsogolo, kuphatikiza indexedDB yopangidwa ndi indexedDB, kusaka kwachiyambi, kukhathamiritsa kwa magawo a mawu komanso kuthandizira zilankhulo zambiri.

  Poyerekeza ndi mayankho omwe alipo, kusaka koyera kutsogolo kwa i18n.site ndikocheperako komanso mwachangu, koyenera mawebusayiti ang'onoang'ono ndi apakatikati monga zolemba ndi mabulogu, ndipo amapezeka popanda intaneti.

---

# Kusaka Kolondola Kwa Mawu Athunthu

## Ndandanda

& pa chitukuko cha masabata angapo markdown [i18n.site](//i18n.site)

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Nkhaniyi igawana zaukadaulo wa `i18n.site` kusaka kwathunthu-kumapeto [i18n.site](//i18n.site) kuti mumve zakusaka.

Khodi gwero : [fufuzani kernel](//github.com/i18n-site/ie/tree/main/qy) / [yolumikizirana](//github.com/i18n-site/plugin/tree/main/qy)

## Ndemanga Ya Mayankho Osakira Mawu Opanda Seva

Kwa mawebusayiti ang'onoang'ono ndi apakatikati omwe ali ngati zikalata / mabulogu anu, kupanga zolemba zodzipangira nokha ndizolemera kwambiri, ndipo kusaka mawu athunthu kopanda ntchito ndikomwe kofala.

Mayankho osakira mawu opanda seva amagwera m'magulu awiri:

Choyamba, ofanana [algolia.com](//algolia.com)

Ntchito zotere zimafunikira kulipira kutengera kuchuluka kwakusaka, ndipo nthawi zambiri sapezeka kwa ogwiritsa ntchito ku China chifukwa chazovuta monga kutsata tsamba lawebusayiti.

Sichingagwiritsidwe ntchito pa intaneti, sichingagwiritsidwe ntchito pa intaneti, ndipo chili ndi malire aakulu. Nkhaniyi sifotokoza zambiri.

Chachiwiri ndikufufuza mawu athunthu.

Pakadali pano, kusaka kodziwika [lunrjs](//lunrjs.com) komaliza kumaphatikizapo [ElasticLunr.js](//github.com/weixsong/elasticlunr.js) (kutengera chitukuko `lunrjs` ).

`lunrjs` Pali njira ziwiri zopangira ma index, ndipo onse ali ndi zovuta zawo.

1. Mafayilo opangidwa kale

   Chifukwa mlozerawu uli ndi mawu ochokera m'malemba onse, ndi wamkulu mu kukula kwake.
   Nthawi zonse chikalata chiwonjezedwa kapena kusinthidwa, fayilo yatsopano ya index iyenera kukwezedwa.
   Idzawonjezera nthawi yodikira ya wogwiritsa ntchito ndikuwononga bandwidth yambiri.

2. Kwezani zikalata ndi kupanga indexes pa ntchentche

   Kupanga index ndi ntchito yovuta kwambiri yomanganso index nthawi iliyonse mukafika kumapangitsa kuti pakhale kusakhazikika komanso kusazindikira bwino kwa ogwiritsa ntchito.

---

Kuphatikiza pa `lunrjs` , palinso mayankho ena athunthu, monga :

[fusejs](//www.fusejs.io) , werengerani kufanana pakati pa zingwe kuti mufufuze.

Magwiridwe a yankholi ndiwoyipa kwambiri ndipo sangathe kugwiritsidwa ntchito posaka mawu athunthu (onani [Fuse.js Kufunsa kwautali kumatenga kupitilira masekondi 10 , mungakulitsitse bwanji?](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries) ).

[TinySearch](//github.com/tinysearch/tinysearch) , gwiritsani ntchito fyuluta ya Bloom kuti mufufuze, siingagwiritsidwe ntchito pakusaka kwachiyambi (mwachitsanzo, lowetsani `goo` , fufuzani `good` , `google` ), ndipo simungathe kukwaniritsa zotsatira zofananazo.

Chifukwa cha zolakwika za mayankho omwe alipo, `i18n.site` adapanga njira yatsopano yosakira mawu, yomwe ili ndi zotsatirazi :

1. Imathandizira kusaka kwa zinenero zambiri ndipo ndi yaying'ono mu kukula kwa kernel yofufuzira pambuyo pa kulongedza `gzip` ndi `6.9KB` (poyerekeza, kukula kwa `lunrjs` ndi `25KB` )
1. Pangani index inverted yochokera ku `indexedb` , yomwe imatenga kukumbukira pang'ono komanso mwachangu.
1. Zolemba zikawonjezeredwa / kusinthidwa, zolemba zokha zowonjezera kapena zosinthidwa zimasinthidwanso, kuchepetsa kuchuluka kwa mawerengedwe.
1. Imathandizira kusaka kwachiyambi ndipo imatha kuwonetsa zotsatira zake munthawi yeniyeni pomwe wogwiritsa ntchito akulemba.
1. Ikupezeka popanda intaneti

Pansipa, `i18n.site` tsatanetsatane waukadaulo waukadaulo adzafotokozedwa mwatsatanetsatane.

## Kugawa Mawu Azilankhulo Zambiri

Kugawanika kwa mawu kumagwiritsa ntchito gawo la mawu a msakatuli `Intl.Segmenter` , ndipo asakatuli onse akuluakulu amathandizira mawonekedwe awa.

![](//p.3ti.site/1727667759.avif)

Mawu akuti segmentation `coffeescript` code ali motere

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

mu:

* `/\p{P}/` ndi mawu okhazikika omwe amafanana ndi zizindikiro zofananira ndi izi: `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _` { | } ```.</p><ul><li> `split('.')` ndi chifukwa `Firefox` msakatuli segmentation mawu alibe gawo `. ` .</li>


## Kupanga Index

Matebulo osungira zinthu 5 adapangidwa mu `IndexedDB` :

* mawu `word` : id -
* `doc` : id - Document url - Nambala ya mtundu wa Document
* `docWord` Mndandanda : id - mawu id
* `prefix` : Mndandanda wa mawu oyambira - id
* `rindex` : id - Document id : Mndandanda wa manambala a mzere

Pitani pamndandanda wa chikalata `url` ndi mtundu `ver` , ndipo fufuzani ngati chikalatacho chili patebulo `doc` Ngati sichipezeka, pangani index inverted. Nthawi yomweyo, chotsani index inverted ya zolemba zomwe sizinalowe.

Mwanjira iyi, kuwonjezereka kwa indexing kumatha kutheka ndipo kuchuluka kwa kuwerengera kumachepetsedwa.

Kumapeto kwakumapeto, cholozera cholozera [chikhoza](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) kuwonetsedwa kuti musachedwe progress + css kwa / yoyamba [.](//juejin.cn/post/7413586285954154522)

### IndexedDB Yolemba Kwambiri Nthawi Imodzi

Pulojekitiyi [idb](//www.npmjs.com/package/idb) kutengera kusungidwa kwa asynchronous kwa IndexedDB

IndexedDB amawerenga ndikulemba ndi asynchronous. Mukapanga index, zolemba zimayikidwa nthawi imodzi kuti mupange index.

Kuti mupewe kutayika pang'ono kwa data chifukwa cha kulemba kwapikisano, mutha kulozera ku code `coffeescript` pansipa ndikuwonjezera `ing` cache pakati pa kuwerenga ndi kulemba kuti mupewe zolemba zopikisana.

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

## Precision Ndi Kumbukirani

Kusakaku kudzakhala gawo loyamba la mawu osakira omwe alowetsedwa ndi wogwiritsa ntchito.

Tangoganizani kuti pali mawu `N` pambuyo pa gawo la mawu pobweretsa zotsatira, zotsatira zomwe zili ndi mawu osakira zidzabwezedwa koyamba, kenako zotsatira zomwe zili ndi `N-1` , `N-2` ,..., `1` mawu osakira.

Zotsatira zosaka zomwe zimawonetsedwa koyamba zimatsimikizira kulondola kwa funsolo, ndipo zotsatira zomwe zimayikidwa pambuyo pake (dinani batani lowonjezera) zitsimikizire kuchuluka kwa kukumbukira.

![](//p.3ti.site/1727684564.avif)

## Katundu Pakufunika

Pofuna kuwongolera liwiro la kuyankha, kusaka kumagwiritsa ntchito jenereta `yield` kuti akwaniritse zomwe akufuna, ndipo amabwerera nthawi `limit` zotsatira zikafunsidwa.

Dziwani kuti nthawi iliyonse mukasakanso pambuyo pa `yield` , muyenera kutsegulanso funso la `IndexedDB` .

## Kusaka Kwanthawi Yeniyeni

Kuti muwonetse zotsatira zakusaka pamene wogwiritsa ntchito akulemba, mwachitsanzo, `wor` akalowa, mawu omwe ali ndi `wor` monga `words` ndi `work` amawonetsedwa.

![](//p.3ti.site/1727684944.avif)

Kernel yofufuzira idzagwiritsa ntchito tebulo `prefix` pa liwu lomaliza pambuyo pa gawo la mawu kuti mupeze mawu onse omwe ali nawo, ndikufufuza motsatizana.

Ntchito yotsutsana ndi kugwedeza `debounce` imagwiritsidwanso ntchito pakugwirizanitsa kutsogolo (kukhazikitsidwa motere) kuti achepetse kuchuluka kwa zolowera zomwe zimayambitsa kusaka ndikuchepetsa kuchuluka kwa kuwerengera.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Ikupezeka Popanda Intaneti

Gome la ndondomeko silisunga malemba oyambirira, mawu okha, omwe amachepetsa kusungirako.

Kuwunikira zotsatira kumafuna kuti mutsitsenso mawu oyamba, ndipo kufananitsa `service worker` kungapewe kufunsidwa mobwerezabwereza.

Nthawi yomweyo, chifukwa `service worker` imasunga zolemba zonse, wogwiritsa ntchito akangofufuza, tsamba lonselo, kuphatikiza kusaka, limapezeka popanda intaneti.

## Onetsani Kukhathamiritsa Kwa Zolemba Za MarkDown

`i18n.site` 's pure-end-end search solution imakongoletsedwa ndi zolemba `MarkDown` .

Mukawonetsa zotsatira zakusaka, dzina lamutu lidzawonetsedwa ndipo mutuwo udzawunikidwa mukadina.

![](//p.3ti.site/1727686552.avif)

## Fotokozerani Mwachidule

Kusaka kwa mawu otembenuzidwa kumayendetsedwa kumapeto kwenikweni, palibe seva yofunikira. Ndizoyenera kwambiri mawebusayiti ang'onoang'ono komanso apakatikati monga zolemba ndi mabulogu anu.

`i18n.site` Kusaka kotseguka kodzipangira koyambirira, kocheperako kukula komanso kuyankha mwachangu, kumathetsa zophophonya zakusaka kwapamapeto akutsogolo komanso kumapereka chidziwitso cha ogwiritsa ntchito.