---

brief: |
  i18n.site kati ewagira okunoonya ebiwandiiko ebijjuvu awatali seva.

  Ekiwandiiko kino kyanjula okussa mu nkola tekinologiya w’okunoonya ebiwandiiko ebijjuvu mu maaso omulongoofu, omuli omuwendo ogukyusiddwa ogwazimbibwa IndexedDB, okunoonya entandikwa, okulongoosa okugabanya ebigambo n’okuwagira ennimi nnyingi.

  Bw’ogeraageranya n’ebigonjoola ebiriwo, okunoonya kwa i18n.site okulongoofu okw’ebiwandiiko ebijjuvu mu maaso kutono mu sayizi era kwa mangu, kusaanira emikutu emitono n’egya wakati ng’ebiwandiiko ne buloogu, era esangibwa nga tolina mukutu.

---

# Pure Front-End Inverted Okunoonya Ebiwandiiko Ebijjuvu

## Olunyiriri

Oluvannyuma lwa wiiki eziwerako ez'okukulaakulanya, [i18n.site](//i18n.site) (ekintu ekitali kikyukakyuka markdown multilingualtranslation & okuzimba omukutu gwa yintaneeti) kati kiwagira okunoonya ebiwandiiko byonna eby'omu maaso ebirongoofu.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Ekiwandiiko kino kijja kugabana ku nkola ey'ekikugu ey'okunoonya `i18n.site` pure front-end full-text Visit [i18n.site](//i18n.site)

Koodi ensibuko enzigule : [Search kernel](//github.com/i18n-site/ie/tree/main/qy) / [interactive interface](//github.com/i18n-site/plugin/tree/main/qy)

## Okwekenenya Eby'okugonjoola Ebizibu By'okunoonya Ebiwandiiko Ebijjuvu Ebitaliiko Seva

Ku mikutu emitono n’egya wakati egy’obutakyukakyuka nga ebiwandiiko/buloogu ez’obuntu, okuzimba backend y’okunoonya ebiwandiiko ebijjuvu eyeezimbye kizitowa nnyo, era okunoonya ebiwandiiko ebijjuvu okutaliimu mpeereza kye kisinga okulondebwa.

Ebigonjoola eby’okunoonya ebiwandiiko ebijjuvu ebitaliiko seva bigwa mu biti bibiri ebigazi:

Ekisooka, okufaananako [algolia.com](//algolia.com)

Empeereza nga zino zeetaaga okusasula okusinziira ku bungi bw’okunoonya, era zitera obutafunibwa bakozesa ku lukalu lwa China olw’ensonga ng’okugoberera omukutu gwa yintaneeti.

Tesobola kukozesebwa offline, tesobola kukozesebwa ku intranet, era erina obuzibu bungi. Ekitundu kino tekiyogera ku bingi.

Ekyokubiri kwe kunoonya ebiwandiiko byonna mu maaso okulongoofu.

Mu kiseera kino, okunoonya okwa bulijjo okwa pure front-end full-text mulimu [lunrjs](//lunrjs.com) ne [ElasticLunr.js](//github.com/weixsong/elasticlunr.js) (okusinziira ku `lunrjs` secondary development).

`lunrjs` Waliwo engeri bbiri ez’okuzimba indexes, era zombi zirina ebizibu byazo.

1. Fayiro za index ezizimbibwa nga tezinnabaawo

   Olw’okuba index erimu ebigambo okuva mu biwandiiko byonna, munene mu bunene.
   Buli ekiwandiiko lwe kyongerwako oba okukyusibwa, fayiro empya ey'omuko erina okutikkibwa.
   Kijja kwongera ku budde bw’omukozesa okulinda n’okutwala bandwidth nnyingi.

2. Tikka ebiwandiiko era ozimbe index ku nnyonyi

   Okuzimba index mulimu gwa kubala nnyo Okuddamu okuzimba index buli lw’ogiyingira kijja kuleeta okuddirira okweyoleka n’obumanyirivu obubi obw’omukozesa.

---

Ng’oggyeeko `lunrjs` , waliwo ebirala eby’okunoonya ebiwandiiko ebijjuvu, gamba nga :

[fusejs](//www.fusejs.io) , bala okufaanagana wakati w'ennyiriri okunoonya.

Enkola y’okugonjoola kino mbi nnyo era tesobola kukozesebwa kunoonya biwandiiko byonna (laba [Fuse.js Okubuuza okuwanvu kutwala sekondi ezisukka mu 10 , oyinza otya okukilongoosa?](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries) ).

[TinySearch](//github.com/tinysearch/tinysearch) `goo` `good` `google`

Olw’obusobozi obutono obw’ebigonjoola ebiriwo, `i18n.site` yakola eky’okunoonya ekipya ekirongoofu eky’okunoonya ebiwandiiko ebijjuvu mu maaso, ekirina engeri zino wammanga :

1. Ewagira okunoonya mu nnimi nnyingi era ntono mu sayizi Enkula ya kernel y'okunoonya oluvannyuma lw'okupakinga `gzip` eri `6.9KB` (okugeraageranya, obunene bwa `lunrjs` buli `25KB` )
1. Zimba index ekyusiddwa nga osinziira ku `indexedb` , etwala memory entono ate nga ya mangu.
1. Ebiwandiiko bwe byongerwako/ebikyusiddwa, ebiwandiiko byokka ebyongerwako oba ebikyusiddwa bye biddamu okuteekebwako omuko, ekikendeeza ku bungi bw’okubalirira.
1. Ewagira okunoonya entandikwa era esobola okulaga ebivudde mu kunoonya mu kiseera ekituufu ng’omukozesa awandiika.
1. Esangibwa ku mukutu gwa yintaneeti

Wansi, ebikwata ku nkola y’ebyekikugu `i18n.site` bijja kwanjulwa mu bujjuvu.

## Okugabanya Ebigambo Mu Nnimi Nnyingi

Okugabanya ebigambo kukozesa okugabanya ebigambo enzaaliranwa ya browser `Intl.Segmenter` , era browser zonna enkulu ziwagira interface eno.

![](//p.3ti.site/1727667759.avif)

Koodi y’okugabanya ebigambo `coffeescript` eri bweti

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

* `/\p{P}/` kigambo kya bulijjo ekikwatagana n’obubonero bw’obubonero obw’enjawulo obukwatagana mulimu: `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _` { | } ~. `.</p><ul><li> `split('.')` kiri bwe kityo kubanga `Firefox` okugabanya ebigambo bya browser tekutula `. ` .</li>


## Okuzimba Index

Emmeeza 5 ez'okutereka ebintu zatondebwa mu `IndexedDB` :

* `word` ebigambo : id -
* `doc` : id - Ekiwandiiko url - Ennamba y'enkyusa y'ekiwandiiko
* `docWord` : Ensengekera y'ekiwandiiko id - ekigambo id
* `prefix` : Ensengekera y'entandikwa - ekigambo id
* `rindex` : Ekigambo id - Ekiwandiiko id : Ensengeka y'ennamba z'ennyiriri

Yita mu nsengeka y’ekiwandiiko `url` n’enkyusa nnamba `ver` , era onoonye oba ekiwandiiko kiri mu kipande `doc` Bwe kiba nga tekiriiwo, tonda omuwendo ogukyusiddwa. Mu kiseera kye kimu, ggyawo omuwendo ogukyusiddwa ogw’ebiwandiiko ebyo ebitaayisibwamu.

Mu ngeri eno, okuwandiika omuwendo (incremental indexing) kuyinza okutuukibwako era omuwendo gw’okubalirira gukendeezebwa.

Mu nkolagana y'omu maaso, ebbaala y'enkulaakulana y'okutikka ey'omuko esobola okulagibwa okwewala okuddirira nga otikka omulundi ogusooka Laba "Ebbaala y'Enkulaakulana n'Ebifaananyi Ebiramu, Okusinziira ku Single progress + Pure css Implementation" [Luganda](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [Chinese](//juejin.cn/post/7413586285954154522) .

### IndexedDB Waggulu Okuwandiika Mu Kiseera Kye Kimu

Pulojekiti eno [idb](//www.npmjs.com/package/idb) okusinziira ku asynchronous encapsulation ya IndexedDB

IndexedDB esoma n'okuwandiika tezikwatagana. Nga okola index, ebiwandiiko bijja kutikkibwa mu kiseera kye kimu okukola index.

Okusobola okwewala okufiirwa data ekitundu ekiva ku kuwandiika okuvuganya, osobola okutunuulira koodi `coffeescript` wansi n’oyongerako `ing` cache wakati w’okusoma n’okuwandiika okukwata okuwandiika okuvuganya.

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

## Obutuufu n’Okujjukira

Okunoonya kujja kusooka kugabanyaamu bigambo ebikulu ebiyingiziddwa omukozesa.

Kitwale nti waliwo ebigambo `N` oluvannyuma lw’okugabanya ebigambo Nga ozzaayo ebivuddemu, ebivuddemu ebirimu ebigambo ebikulu byonna bijja kusooka kuddizibwa, olwo ebivuddemu ebirimu ebigambo `1` `N-1` , `N-2` ,..., bijja kuddizibwa.

Ebivudde mu kunoonyereza ebiragiddwa bisooka kukakasa butuufu bw’okubuuza, era ebivuddemu ebitikkiddwa oluvannyuma (nyiga ku bbaatuuni ya load more) bikakasa omuwendo gw’okujjukira.

![](//p.3ti.site/1727684564.avif)

## Omutikka Ku Bwetaavu

Okusobola okulongoosa sipiidi y’okuddamu, okunoonya kukozesa jenereta `yield` okussa mu nkola okutikka ku bwetaavu, era kudda `limit` lwe kibuuzibwa ekivaamu.

Weetegereze nti buli lw'oddamu okunoonya oluvannyuma lwa `yield` , olina okuddamu okuggulawo enkolagana y'okubuuza eya `IndexedDB` .

## Prefix Okunoonya Mu Kiseera Ekituufu

Okusobola okulaga ebivudde mu kunoonyereza ng’omukozesa awandiika, okugeza, `wor` bw’ayingizibwa, ebigambo ebisookerwako `wor` nga `words` ne `work` biragibwa.

![](//p.3ti.site/1727684944.avif)

Kernel y’okunoonya ejja kukozesa emmeeza `prefix` ku kigambo ekisembayo oluvannyuma lw’okugabanya ebigambo okuzuula ebigambo byonna ebigisoose, n’okunoonya mu mutendera.

Omulimu oguziyiza okukankana `debounce` era gukozesebwa mu nkolagana y’omu maaso (eteekebwa mu nkola nga bwe guti) okukendeeza ku mirundi gy’okuyingiza kw’abakozesa okutandika okunoonya n’okukendeeza ku bungi bw’okubalirira.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Esangibwa Ku Mukutu Gwa Yintaneeti

Emmeeza ya index tetereka biwandiiko bya kusooka, ebigambo byokka, ekikendeeza ku bungi bw’okutereka.

Okulaga ebivudde mu kunoonya kyetaagisa okuddamu okutikka ebiwandiiko eby'olubereberye, era okukwataganya `service worker` kuyinza okwewala okusaba kw'omukutu okuddiŋŋana.

Mu kiseera kye kimu, olw’okuba `service worker` etereka ebiwandiiko byonna, omukozesa bw’amala okukola okunoonya, omukutu gwonna, omuli n’okunoonya, gubeera nga tegulii ku mukutu.

## Laga Okulongoosa Ebiwandiiko Bya MarkDown

`i18n.site` 's pure front-end search solution erongooseddwa ku biwandiiko `MarkDown` .

Bw’oba olaga ebivudde mu kunoonyereza, erinnya ly’essuula lijja kulagibwa era essuula ejja kutambulirako ng’onyigiddwa.

![](//p.3ti.site/1727686552.avif)

## Mu Bufunze

Okunoonya ebiwandiiko ebijjuvu okukyusiddwa okuteekebwa mu nkola ku nkomerero y’omu maaso yokka, tekyetaagisa seva. Esaanira nnyo emikutu emitono n’egya wakati nga ebiwandiiko ne blogs ez’obuntu.

`i18n.site`