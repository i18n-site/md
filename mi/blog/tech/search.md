# Rapu Kuputuhi-Katoa Kua Huri-Mua

## Raupapa

Whai muri i nga wiki maha o te whakawhanaketanga, [i18n.site](//i18n.site) (he taputapu hanga paetukutuku markdown & reo maha) e tautoko ana i te rapu kupu-katoa o mua.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Ka tohatohahia e tenei tuhinga te whakatinanatanga o `i18n.site` hangarau rapu kupu-katoa o mua-mua [i18n.site](//i18n.site) taea e koe te wheako i te paanga rapu.

Waehere atanga [rapu](//github.com/i18n-site/ie/tree/main/qy) puna [tuwhera](//github.com/i18n-site/plugin/tree/main/qy) /

## He Tirohanga Whanui Mo Nga Otinga Rapu Kupu-Katoa Kaore He Tūmau

Mo nga paetukutuku iti penei i nga tuhinga/purangi whaiaro e noho noa ana, he tino taumaha rawa ki te hanga i tetahi rapunga kupu-katoa i muri i a koe, a ko te rapu kupu-katoa kaore he ratonga he pai ake te taumaha.

Ka taka nga otinga rapu kupu-katoa kaore he tūmau o naianei ki nga waahanga whanui e rua.

Ko tetahi he kaiwhakarato ratonga rapu-tuatoru e rite ana ki te [algolia.com](//algolia.com) e whakarato ana i nga waahanga rapu kuputuhi-mua.

Ko enei ratonga me utu, kaore e waatea ki nga kaiwhakamahi i te tuawhenua o Haina na runga i nga take tautukunga o te paetukutuku.

Kaore e taea te whakamahi tuimotu, kaore e taea te whakamahi ki te ipurangiroto, he nui nga here. Kaore tenei tuhinga e korero nui.

Ko te tuarua ko te rapu kuputuhi-katoa o mua-mutunga.

Ko nga rapunga kupu-katoa o mua-mutunga ElasticLunr.js [https://github.com/weixsong/elasticlunr.js](%E5%9F%BA%E4%BA%8E%60lunrjs%60%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91) ko [lunrjs](https://lunrjs.com)

`lunrjs` E rua nga huarahi hei hanga taurangi, engari he raru ano to raua.

1. Ko nga konae taupū kua oti te hanga

   Na te mea kei roto i te taurangi nga kupu mai i nga tuhinga katoa, he nui te rahi.
   I nga wa ka taapirihia he tuhinga, ka whakarerekehia ranei, me utaina he konae taurangi hou.
   Ka piki ake te wa tatari o te kaiwhakamahi me te pau i te nui o te bandwidth.

2. Utaina nga tuhinga me te hanga taurangi i runga i te rere

   Ko te hanga i te taurangi he mahi tino kaha ki te hanga i te taurangi i nga wa katoa ka uru koe ka kitea he takamuri me te ngoikore o te wheako kaiwhakamahi.

I tua atu i `lunrjs` , tera ano etahi atu otinga rapu kupu-katoa, penei i te :

[fusejs](https://www.fusejs.io) , tātaihia te ōritenga o ngā aho ki te rapu.

He tino rawe te mahinga o tenei otinga, kaore e taea te whakamahi mo te rapu kupu-katoa (tirohia [Fuse.js Neke atu i 10 hēkona te roa o te uiui, me pehea te arotau?](https://stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries) ).

[TinySearch](https://github.com/tinysearch/tinysearch) , whakamahia te tātari Bloom ki te rapu, kaore e taea te whakamahi mo te rapu prefix (hei tauira, tomo `goo` , rapu `good` , `google` ), a kaore e taea te whakatutuki i te paanga whakaoti aunoa.

Na te kore i pai ki nga ngoikoretanga o nga otinga o naianei, i whakawhanakehia `i18n.site` tetahi otinga rapu kupu-katoa o mua parakore, kei a ia nga ahuatanga e whai ake nei :

1. Ka tautokohia te rapu reo-maha, he iti te rahi Ko te rahi o te kakano rapu i muri i te kohinga `gzip` he `6.9KB` (mo te whakataurite, ko te rahi o `lunrjs` he `25KB` ).
1. Hangaia he taupū hurihuri i runga i `indexedb` , he iti ake te mahara, he tere hoki.
1. Ina taapirihia nga tuhinga, ko nga tuhinga kua taapirihia, kua whakarerekehia ranei ka tohuhia ano, ka whakaitihia te nui o nga tatauranga.
1. Ka tautokohia te rapu prefix, ka taea te whakaatu i nga hua rapu i te waa tonu i te wa e pato ana te kaiwhakamahi.
1. Kei te waatea tuimotu

Kei raro iho nei, `i18n.site` nga korero mo te whakatinanatanga hangarau ka whakaatuhia.

## Wehewehenga Kupu Maha

Ka whakamahia e te wehenga kupu te wehewehenga kupu taketake o te kaitirotiro `Intl.Segmenter` , ka tautokohia e nga kaitirotiro auraki katoa tenei atanga.

![](https://p.3ti.site/1727667759.avif)

Ko te kupu wehewehe `coffeescript` waehere e whai ake nei

```coffee
SEG = new Intl.Segmenter 0, granularity: "word"

seg = (txt) =>
  r = []
  for {segment} from SEG.segment(txt)
    for i from segment.split('.')
      i = i.trim()
      if i and !'|`'.includes(i) and !/\p{P}/u.test(i)
        r.push i
  r

export default seg

export segqy = (q) =>
  seg q.toLocaleLowerCase()
```

i roto i:

* Ko `/\p{P}/` he korero auau e taurite ana ki nga tohu tohu tohu: `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _ ` { | } ~. `.</p><ul><li> Ko `split('.')` na te mea karekau te wehenga kupu tirotiro `Firefox` i te wahanga `.` .</li>


## Te Hanga Taurangi

5 nga ripanga rokiroki ahanoa i hangaia i te `IndexedDB` :

* `word` : id -
* `doc` : id - Tuhinga url - Tuhinga tau putanga
* `docWord` : te huinga o te tuhinga id - kupu id
* `prefix` : - id
* `rindex` : Kupu id - Tuhinga id : Huanga o nga tau raina

Whakauruhia te huinga o te tuhinga `url` me te putanga nama `ver` , ka rapu mena kei te ripanga `doc` te tuhinga. Mena karekau, hangahia he taurangi hurihuri. I taua wa ano, tango i te taurangi hurihuri mo aua tuhinga kaore i tukuna.

Ma tenei ara, ka taea te taurangi taapiri ka whakahekehia te nui o te tatauranga.

I roto i te tauwhitinga o mua, ka taea te whakaatu i te pae ahunga whakamua o te taupū ki te karo i te takamuri i te wa e uta ana mo te wa tuatahi Tirohia "Pae Whakatairanga me te Animation, I runga i te Kotahi progress + Pure css Whakatinana" [English](https://dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [Hainamana](https://juejin.cn/post/7413586285954154522) .

### IndexedDB Te Tuhi Warite Teitei

I [idb](https://www.npmjs.com/package/idb) te kaupapa i runga i te whakahiatotanga tukutahi o IndexedDB

Ko nga panui me te tuhi a IndexedDB he tukutahi. I te wa e hanga ana i te taurangi, ka utaina nga tuhinga i te wa kotahi hei hanga i te taurangi.

Hei karo i te ngaronga o nga raraunga i puta mai i te tuhi whakataetae, ka taea e koe te titiro ki te `coffeescript` waehere kei raro nei ka taapirihia he keteroki `ing` i waenga i te panui me te tuhi hei aukati i nga tuhi whakataetae.

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

## Tuhinga O Mua Rapu Wa-Tūturu

Hei whakaatu i nga hua rapu i te wa e patopato ana te kaiwhakamahi, hei tauira, ka kuhuhia `wor` , ka whakaatuhia nga kupu kua tohua ki te `wor` penei i te `words` me `work` .

![](https://p.3ti.site/1727684944.avif)

Ka whakamahia e te kakano rapu te ripanga `prefix` mo te kupu whakamutunga i muri i te wehewehenga kupu hei kimi i nga kupu katoa kua piri ki mua, me te rapu i te raupapa.

Ka whakamahia hoki te mahi anti-wiriwiri `debounce` i roto i te taunekeneke o mua-mutunga (whakamahia penei) hei whakaiti i te auau o te whakaurunga a te kaiwhakamahi ki nga rapunga me te whakaiti i te nui o te tatauranga.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Te Tika Me Te Maharahara

Ko te rapunga ka wehe i nga kupu matua i whakauruhia e te kaiwhakamahi.

Whakaarohia he `N` nga kupu i muri i te wahanga o te kupu I te whakahokinga mai o nga hua, ka whakahokia nga hua kei roto katoa nga kupumatua i te tuatahi, katahi ka whakahokia nga hua kei roto `N-1` , `N-2` ,..., `1` nga kupu matua.

Ko nga hua rapu ka whakaatuhia i te tuatahi ka whakarite i te tika o te patai, a ko nga hua ka utaina i muri mai (paohia te paatene uta atu) ka whakarite i te reeti maumahara.

![](https://p.3ti.site/1727684564.avif)

## Utaina I Runga I Te Tono

Hei whakapai ake i te tere whakautu, ka whakamahia e te rapunga te `yield` generator ki te whakatinana i runga i te tono uta, ka hoki mai i nga wa `limit` ka pataihia he hua.

Kia mahara ko ia wa ka rapu ano koe i muri i `yield` , me whakatuwhera ano koe i tetahi tauwhitinga patai mo `IndexedDB` .

## Tuhinga O Mua Rapu Wa-Tūturu

Hei whakaatu i nga hua rapu i te wa e patopato ana te kaiwhakamahi, hei tauira, ka kuhuhia `wor` , ka whakaatuhia nga kupu kua tohua ki te `wor` penei i te `words` me `work` .

![](https://p.3ti.site/1727684944.avif)

Ka whakamahia e te kakano rapu te ripanga `prefix` mo te kupu whakamutunga i muri i te wehewehenga kupu hei kimi i nga kupu katoa kua piri ki mua, me te rapu i te raupapa.

Ka whakamahia hoki te mahi anti-wiriwiri `debounce` i roto i te taunekeneke o mua-mutunga (whakamahia penei) hei whakaiti i te auau o te whakaurunga a te kaiwhakamahi ki nga rapunga me te whakaiti i te nui o te tatauranga.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Kei Te Waatea Tuimotu

Karekau te ripanga taupū e penapena i te tuhinga taketake, ko nga kupu anake, ka whakaiti i te nui o te rokiroki.

Ko te miramira i nga hua rapu me utaina ano te tuhinga taketake, me te `service worker` ka taea te karo i nga tono whatunga tukurua.

I te wa ano, na te mea ka huna `service worker` nga tuhinga katoa, i te wa e mahi ana te kaiwhakamahi i te rapunga, ko te paetukutuku katoa, tae atu ki te rapu, kei te waatea tuimotu.

## Whakaatuhia Te Arotautanga O Nga Tuhinga MarkDown

Ko te otinga rapu-mutunga parakore a `i18n.site` kua arotauhia mo nga tuhinga `MarkDown` .

I te wa e whakaatu ana i nga hua rapu, ka whakaatuhia te ingoa pene ka whakaterehia te upoko ina pawhiria.

![](https://p.3ti.site/1727686552.avif)

## Whakarāpopoto

Ko te rapu kuputuhi-katoa kua huri kua mahia ki te pito o mua, me te whakautu tere me te kore e hiahiatia he tūmau.

He mea tino pai mo nga paetukutuku iti me te reo-rahi penei i nga tuhinga me nga rangitaki whaiaro.