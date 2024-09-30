# Chwiliad Testun Llawn Gwrthdro Pen Blaen Pur

## Dilyniant

Ar ôl sawl wythnos o ddatblygiad, [i18n.site](//i18n.site) (offeryn adeiladu gwefan cwbl statig markdown multilingualtranslation & ) bellach yn cefnogi chwiliad testun llawn pen blaen pur.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Bydd yr erthygl hon yn rhannu gweithrediad `i18n.site` technoleg chwilio testun llawn pen blaen Ymwelwch [i18n.site](//i18n.site)

Cod [cnewyllyn](//github.com/i18n-site/plugin/tree/main/qy) [chwilio](//github.com/i18n-site/ie/tree/main/qy) ffynhonnell agored /

## Trosolwg O Atebion Chwilio Testun Llawn Heb Weinydd

Ar gyfer gwefannau bach fel dogfennau / blogiau personol sy'n hollol statig, heb os, mae'n rhy drwm adeiladu ôl-len chwiliad testun llawn ar eich pen eich hun, ac mae chwilio testun llawn heb wasanaethau yn sicr yn bwysau gwell.

Mae datrysiadau chwilio testun llawn heb weinydd yn perthyn i ddau gategori eang.

Mae un yn ddarparwr gwasanaeth chwilio trydydd parti tebyg i [algolia.com](//algolia.com) sy'n darparu cydrannau chwilio testun llawn pen blaen.

Mae angen talu am wasanaethau o'r fath ac nid ydynt ar gael i ddefnyddwyr ar dir mawr Tsieina oherwydd materion cydymffurfio â'r wefan.

Ni ellir ei ddefnyddio all-lein, ni ellir ei ddefnyddio ar y fewnrwyd, ac mae ganddo gyfyngiadau mawr. Nid yw'r erthygl hon yn trafod llawer.

Yr ail yw chwiliad testun llawn pen blaen pur.

Mae'r chwiliadau testun llawn pen blaen pur mwy adnabyddus yn cynnwys [lunrjs](https://lunrjs.com) a [ ElasticLunr.js ] [https://github.com/weixsong/elasticlunr.js](%E5%9F%BA%E4%BA%8E%60lunrjs%60%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91) .

`lunrjs` Mae dwy ffordd i adeiladu mynegeion, ond mae gan y ddau eu problemau eu hunain.

1. Ffeiliau mynegai a adeiladwyd ymlaen llaw

   Gan fod y mynegai yn cynnwys geiriau o bob dogfen, mae'n fawr o ran maint.
   Pryd bynnag y caiff dogfen ei hychwanegu neu ei haddasu, rhaid llwytho ffeil fynegai newydd.
   Bydd yn cynyddu amser aros y defnyddiwr ac yn defnyddio llawer o led band.

2. Llwytho dogfennau ac adeiladu mynegeion ar y hedfan

   Mae adeiladu mynegai yn dasg gyfrifiadurol ddwys.

Yn ogystal â `lunrjs` , mae rhai datrysiadau chwilio testun llawn eraill, megis :

[fusejs](https://www.fusejs.io) , cyfrifwch y tebygrwydd rhwng llinynnau i chwilio.

Mae perfformiad y datrysiad hwn yn eithriadol o wael ac ni ellir ei ddefnyddio ar gyfer chwiliad testun llawn (gweler [Fuse.js Mae ymholiad hir yn cymryd mwy na 10 eiliad, sut i'w optimeiddio?](https://stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries) ).

[TinySearch](https://github.com/tinysearch/tinysearch) , defnyddiwch hidlydd Bloom i chwilio, ni ellir ei ddefnyddio ar gyfer chwiliad rhagddodiad (er enghraifft, rhowch `goo` , chwiliwch `good` , `google` ), ac ni all gyflawni effaith cwblhau awtomatig tebyg.

Allan o anfodlonrwydd â diffygion yr atebion presennol, datblygodd `i18n.site` ddatrysiad chwilio testun llawn pen blaen pur newydd, sydd â'r nodweddion canlynol :

1. Yn cefnogi chwiliad aml-iaith ac mae'n fach o ran maint Maint y cnewyllyn chwilio ar ôl pecynnu `gzip` yw `6.9KB` (er mwyn cymharu, maint `lunrjs` yw `25KB` ).
1. Adeiladwch fynegai gwrthdro yn seiliedig ar `indexedb` , sy'n cymryd llai o gof ac sy'n gyflym.
1. Pan fydd dogfennau'n cael eu hychwanegu/addasu, dim ond y dogfennau sydd wedi'u hychwanegu neu eu haddasu sy'n cael eu hail-fynegeio, gan leihau nifer y cyfrifiadau.
1. Yn cefnogi chwiliad rhagddodiad, a all ddangos canlyniadau chwilio mewn amser real tra bod y defnyddiwr yn teipio.
1. Ar gael all-lein

Isod, cyflwynir manylion gweithredu technegol `i18n.site` yn fanwl.

## Segmentu Geiriau Amlieithog

Mae segmentu geiriau yn defnyddio segmentiad geiriau brodorol y porwr `Intl.Segmenter` , ac mae pob porwr prif ffrwd yn cefnogi'r rhyngwyneb hwn.

![](https://p.3ti.site/1727667759.avif)

Mae'r gair segmentu cod `coffeescript` fel a ganlyn

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

yn:

* Mae `/\p{P}/` yn fynegiad rheolaidd sy'n cyfateb i farciau atalnodi Mae symbolau paru penodol yn cynnwys: `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _ ` { | } ~. `.</p><ul><li> `split('.')` yw nad yw segmentiad gair `Firefox` porwr yn segmentu `.` .</li>


## Adeilad Mynegai

Crëwyd 5 bwrdd storio gwrthrych mewn `IndexedDB` :

* `word` : id -
* `doc` : id - Dogfen url - Rhif fersiwn y ddogfen
* `docWord` : Arae o ddogfen id - gair id
* `prefix` : Arae o rhagddodiad - gair id
* `rindex` : Word id - Dogfen id : Arae o rifau llinell

Pasiwch yr arae o ddogfen `url` a rhif fersiwn `ver` , a chwiliwch a yw'r ddogfen yn bodoli yn nhabl `doc` Os nad yw'n bodoli, crëwch fynegai gwrthdro. Ar yr un pryd, tynnwch y mynegai gwrthdro ar gyfer y dogfennau hynny na chawsant eu trosglwyddo.

Yn y modd hwn, gellir cyflawni mynegeio cynyddrannol a lleihau swm y cyfrifiad.

Mewn rhyngweithiad pen blaen, gellir arddangos bar cynnydd llwytho'r mynegai er mwyn osgoi'r oedi wrth lwytho am y tro cyntaf. Gweler "Bar Cynnydd gydag Animeiddiad, Yn Seiliedig ar Sengl progress + Pur css Gweithredu" [Saesneg](https://dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [Chinese](https://juejin.cn/post/7413586285954154522) .

### IndexedDB Ysgrifennu Cydamserol Uchel

Mae'r prosiect yn [idb](https://www.npmjs.com/package/idb) yn seiliedig ar amgáu asyncronaidd o IndexedDB

Mae IndexedDB yn darllen ac yn ysgrifennu yn asyncronig. Wrth greu mynegai, bydd dogfennau'n cael eu llwytho ar yr un pryd i greu'r mynegai.

Er mwyn osgoi colli data yn rhannol a achosir gan ysgrifennu cystadleuol, gallwch gyfeirio at y cod `coffeescript` isod ac ychwanegu storfa `ing` rhwng darllen ac ysgrifennu i ryng-gipio ysgrifennu cystadleuol.

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

## Rhagddodiad Chwiliad Amser Real

Er mwyn dangos canlyniadau chwilio tra bod y defnyddiwr yn teipio, er enghraifft, pan fydd `wor` yn cael ei fewnbynnu, mae geiriau sydd wedi'u rhagddodi â `wor` megis `words` a `work` yn cael eu harddangos.

![](https://p.3ti.site/1727684944.avif)

Bydd y cnewyllyn chwilio yn defnyddio'r tabl `prefix` ar gyfer y gair olaf ar ôl segmentu geiriau i ddod o hyd i'r holl eiriau sydd wedi'u rhagddodi ag ef, a chwilio yn eu trefn.

Defnyddir swyddogaeth gwrth-ysgwyd `debounce` hefyd mewn rhyngweithio pen blaen (a weithredir fel a ganlyn) i leihau amlder mewnbwn defnyddwyr sbarduno chwiliadau a lleihau faint o gyfrifo.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Manwl a Dwyn I Gof

Bydd y chwiliad yn segmentu'r allweddeiriau a roddwyd gan y defnyddiwr yn gyntaf.

Tybiwch fod `N` gair ar ôl y segmentiad geiriau Wrth ddychwelyd canlyniadau, bydd canlyniadau sy'n cynnwys yr holl eiriau allweddol yn cael eu dychwelyd yn gyntaf, ac yna bydd canlyniadau sy'n cynnwys `N-1` , `N-2` ,..., `1` allweddair yn cael eu dychwelyd.

Mae'r canlyniadau chwilio a ddangosir yn gyntaf yn sicrhau cywirdeb yr ymholiad, ac mae'r canlyniadau a lwythir wedyn (cliciwch ar y botwm llwyth mwy) yn sicrhau'r gyfradd adalw.

![](https://p.3ti.site/1727684564.avif)

## Llwyth Ar Alw

Er mwyn gwella'r cyflymder ymateb, mae'r chwiliad yn defnyddio'r generadur `yield` i weithredu llwytho ar-alw, ac yn dychwelyd `limit` tro y cwestiynir canlyniad.

Sylwch bob tro y byddwch yn chwilio eto ar ôl `yield` , mae angen ichi ailagor trafodiad ymholiad o `IndexedDB` .

## Rhagddodiad Chwiliad Amser Real

Er mwyn dangos canlyniadau chwilio tra bod y defnyddiwr yn teipio, er enghraifft, pan fydd `wor` yn cael ei fewnbynnu, mae geiriau sydd wedi'u rhagddodi â `wor` megis `words` a `work` yn cael eu harddangos.

![](https://p.3ti.site/1727684944.avif)

Bydd y cnewyllyn chwilio yn defnyddio'r tabl `prefix` ar gyfer y gair olaf ar ôl segmentu geiriau i ddod o hyd i'r holl eiriau sydd wedi'u rhagddodi ag ef, a chwilio yn eu trefn.

Defnyddir swyddogaeth gwrth-ysgwyd `debounce` hefyd mewn rhyngweithio pen blaen (a weithredir fel a ganlyn) i leihau amlder mewnbwn defnyddwyr sbarduno chwiliadau a lleihau faint o gyfrifo.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Ar Gael All-Lein

Nid yw'r tabl mynegai yn storio'r testun gwreiddiol, dim ond y geiriau, sy'n lleihau faint o storio.

Mae amlygu canlyniadau chwilio yn gofyn am ail-lwytho'r testun gwreiddiol, a gall paru `service worker` osgoi ceisiadau rhwydwaith mynych.

Ar yr un pryd, oherwydd bod `service worker` yn storio pob erthygl, unwaith y bydd y defnyddiwr yn gwneud chwiliad, mae'r wefan gyfan, gan gynnwys y chwiliad, ar gael all-lein.

## Arddangos Optimeiddio Dogfennau MarkDown

Mae datrysiad chwilio pen blaen pur `i18n.site` wedi'i optimeiddio ar gyfer `MarkDown` dogfen.

Wrth ddangos canlyniadau chwilio, bydd enw'r bennod yn cael ei arddangos a bydd y bennod yn cael ei llywio pan glicir arni.

![](https://p.3ti.site/1727686552.avif)

## Crynhoi

Chwiliad testun llawn gwrthdro wedi'i weithredu ar y pen blaen yn unig, gydag ymateb cyflym a dim angen gweinydd.

Mae'n addas iawn ar gyfer gwefannau bach a chanolig fel dogfennau a blogiau personol.