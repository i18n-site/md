# Lêgerîna Tev-Nivîsê Ya Berevajîkirî Ya Paqij

## Dor

Piştî çend & pêşkeftinê markdown [i18n.site](//i18n.site)

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Ev gotar dê pêkanîna `i18n.site` teknolojiya lêgerîna tev-nivîsê ya paqij parve bike [i18n.site](//i18n.site) dikarin bandora lêgerînê biceribînin.

[Naveroka](//github.com/i18n-site/plugin/tree/main/qy) [lêgerîna](//github.com/i18n-site/ie/tree/main/qy) çavkaniya vekirî ya kodê /

## Awirek Li Ser Çareseriyên Lêgerîna Tev-Nivîsarê Yên Bê Server

Ji bo malperên piçûk ên wekî belgeyên / blogên kesane yên ku bi tenê statîk in, bê guman pir giran e ku hûn bi xwe paşnavek lêgerîna tevahî-text ava bikin, û lêgerîna tev-nivîsê bêyî karûbar bê guman giraniyek çêtir e.

Çareseriyên lêgerîna tev-nivîsarê yên bê server ên heyî di du kategoriyên berfireh de ne.

Yek pêşkêşkerek karûbarê lêgerînê ya sêyemîn e ku mîna [algolia.com](//algolia.com) ku hêmanên lêgerîna tev-nivîsê ya pêşîn peyda dike.

Karûbarên weha hewceyê dravdanê ne û ji ber pirsgirêkên lihevhatina malperê ji bikarhêneran re li axa Chinaînê peyda nabin.

Ew nekare offline were bikar anîn, nikare li ser intranetê were bikar anîn, û xwedan sînorên mezin e. Ev gotar zêde nîqaş nake.

Ya duyemîn lêgerîna tev-nivîsê ya pêşîn-paqij e.

Lêgerînên tam-nivîsarê [lunrjs](https://lunrjs.com) safî yên naskirî û [ ElasticLunr.js ] [https://github.com/weixsong/elasticlunr.js](%E5%9F%BA%E4%BA%8E%60lunrjs%60%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91) hene.

`lunrjs` Du awayên avakirina indexan hene, lê her du jî pirsgirêkên xwe hene.

1. Pelên indexê yên pêş-avakirî

   Ji ber ku index peyvên ji hemî belgeyan vedihewîne, ew bi mezinahî mezin e.
   Dema ku belgeyek tê zêdekirin an guheztin, pêdivî ye ku pelek navnîşek nû were barkirin.
   Ew ê dema bendewariya bikarhêner zêde bike û pir firehiya bandê dixwe.

2. Belgeyên barkirin û li ser firînê navnîşan ava bikin

   Avakirina îndeksek ji hêla jimartinê ve karekî zexm e. Her gava ku hûn bigihîjin wê ji nû ve avakirina pêvekê dê bibe sedema derengmayînên eşkere û ezmûna xirab a bikarhêner.

Ji bilî `lunrjs` , hin çareseriyên lêgerîna tev-nivîsê yên din jî hene, wek :

[fusejs](https://www.fusejs.io) wekheviya di navbera rêzikên lêgerînê de hesab bikin.

Performansa vê çareseriyê pir kêm e û nikare ji bo lêgerîna tev-nivîsê were bikar anîn (binêre [Fuse.js Pirsa dirêj ji 10 çirkeyan zêdetir digire, meriv wê çawa xweşbîn bike?](https://stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries) ).

[TinySearch](https://github.com/tinysearch/tinysearch) ji bo lêgerînê Parzûna Bloom bikar bînin, ji bo lêgerîna pêşgiran nayê bikar anîn (mînak, `goo` , lêgerîn `good` , `google` ), û nikare bandorek temamkirina otomatîkî ya wekhev bi dest bixe.

Ji ber nerazîbûna ji kêmasiyên çareseriyên heyî, `i18n.site` çareseriyek nû ya lêgerîna tev-nivîsê ya pêş-end-paqij a nû pêşxist, ku xwedan taybetmendiyên jêrîn e :

1. Piştgiriya lêgerîna pirzimanî dike û bi mezinahiyê piçûk e Mezinahiya kernelê piştî pakkirina `gzip` `6.9KB` e (ji bo berhevdanê, mezinahiya `lunrjs` `25KB` ye).
1. Indeksek berevajîkirî li ser bingeha `indexedb` ava bikin, ku kêmtir bîra digire û bilez e.
1. Dema ku belge têne zêdekirin/guherandin, tenê belgeyên zêdekirî an guheztin ji nû ve têne navnîş kirin, ku hêjmara hesaban kêm dike.
1. Piştgiriya lêgerîna pêşgiran dike, ku dikare encamên lêgerînê di demek rast de nîşan bide dema ku bikarhêner dinivîse.
1. Offline heye

Li jêr, `i18n.site` hûrguliyên pêkanîna teknîkî dê bi hûrgulî bêne destnîşan kirin.

## Dabeşkirina Peyva Pirzimanî

Parçekirina peyvan dabeşkirina peyva xwemalî ya gerokê `Intl.Segmenter` bikar tîne, û hemî gerokên sereke piştgirî didin vê navberê.

![](https://p.3ti.site/1727667759.avif)

Koda dabeşkirina peyva `coffeescript` wiha ye

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

li:

* `/\p{P}/` birêkûpêkek birêkûpêk e ku nîşaneyên xalbendiyê li hev dike: `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _ ` { | } . `.</p><ul><li> `split('.')` ji ber ku `Firefox` dabeşkirina peyva gerok `.` perçe nake.</li>


## Avahiya Indeks

5 tabloyên hilanîna tiştan di `IndexedDB` de hatin afirandin :

* `word` peyv : id -
* `doc` : id - url - Hejmara guhertoya belgeyê
* `docWord` : belgeya id - peyva id
* `prefix` Rêzeya pêşgira - id :
* `rindex` : id - id :

Di rêza belgeya `url` û guhertoya jimare `ver` de derbas bibin, û bigerin ka belge di tabloya `doc` de heye yan na. Heke ew tune be, pêdekek berevajî biafirînin. Di heman demê de, ji bo wan belgeyên ku di nav wan de derbas nebûne navnîşa berevajîkirî derxînin.

Bi vî rengî, îndekskirina zêdebûyî dikare were bidestxistin û hêjeya hesabkirinê kêm dibe.

Di danûstendina pêşîn de, bara pêşkeftinê ya barkirina îndeksê dikare were xuyang kirin ku gava yekem car tê barkirin dereng nemîne Binêre "Bara Pêşketinê bi Anîmasyon, Li ser Bingehînek Yeke progress + Pure css Pêkanîna" [English](https://dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [Chinese](https://juejin.cn/post/7413586285954154522) .

### IndexedDB Nivîsandina Hevdemî Ya Bilind

Proje li [idb](https://www.npmjs.com/package/idb) bingeha vegirtina asynchronous ya IndexedDB

IndexedDB xwendin û nivîsandin asynkron in. Dema ku navnîşek çêbikin, belge dê hevdem werin barkirin da ku indexê çêbikin.

Ji bo ku hûn ji windabûna daneya qismî ya ku ji hêla nivîsandina pêşbaziyê ve çêdibe dûr nekevin, hûn dikarin koda `coffeescript` a jêrîn binihêrin û `ing` cache di navbera xwendin û nivîsandinê de zêde bikin da ku nivîsên pêşbaziyê bişopînin.

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

## Pêşgir Lêgerîna Rast-Dem

Ji bo ku dema ku bikarhêner dinivîse encamên lêgerînê nîşan bide, wek nimûne, dema ku `wor` tête navnîş kirin, peyvên ku bi pêşgira `wor` wekî `words` û `work` têne xuyang kirin.

![](https://p.3ti.site/1727684944.avif)

Kernela lêgerînê dê tabloya `prefix` ji bo peyva paşîn piştî dabeşkirina peyvan bikar bîne da ku hemî peyvên pêvekirî bi xwe re bibîne, û li rêzê bigere.

Fonksiyona dijî-hejandinê `debounce` jî di danûstendina pêş-endê de tê bikar anîn (wekî jêrîn tête bicîh kirin) da ku frekansa lêgerînên ketina bikarhêner kêm bike û mîqdara hesabkirinê kêm bike.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Precision Û Recall

Lêgerîn dê pêşî peyvên sereke yên ku ji hêla bikarhêner ve hatî navnîş kirin parçe bike.

Bihesibînin ku piştî dabeşkirina peyvan `N` peyv hene Dema ku encaman vedigerin, dê pêşî encamên ku hemî peyvên sereke hene werin vegerandin, û paşê encamên ku tê de `N-1` , `N-2` ,..., `1` peyvên sereke hene.

Encamên lêgerînê yên ku pêşî têne xuyang kirin rastbûna pirsê piştrast dikin, û encamên ku paşê têne barkirin (bişkojka barkirina bêtir bikirtînin) rêjeya bibîrxistinê piştrast dikin.

![](https://p.3ti.site/1727684564.avif)

## Li Ser Daxwazê Barkirin

Ji bo baştirkirina leza bersivê, lêgerîn jeneratorê `yield` bikar tîne da ku barkirina li ser daxwazê bicîh bîne, û `limit` gava ku encamek tê pirsîn vedigere.

Bala xwe bidinê ku her gava ku hûn dîsa piştî `yield` digerin, hûn hewce ne ku vekirina danûstendinek pirsê ya `IndexedDB` ji nû ve vekin.

## Pêşgir Lêgerîna Rast-Dem

Ji bo ku dema ku bikarhêner dinivîse encamên lêgerînê nîşan bide, wek nimûne, dema ku `wor` tête navnîş kirin, peyvên ku bi pêşgira `wor` wekî `words` û `work` têne xuyang kirin.

![](https://p.3ti.site/1727684944.avif)

Kernela lêgerînê dê tabloya `prefix` ji bo peyva paşîn piştî dabeşkirina peyvan bikar bîne da ku hemî peyvên pêvekirî bi xwe re bibîne, û li rêzê bigere.

Fonksiyona dijî-hejandinê `debounce` jî di danûstendina pêş-endê de tê bikar anîn (wekî jêrîn tête bicîh kirin) da ku frekansa lêgerînên ketina bikarhêner kêm bike û mîqdara hesabkirinê kêm bike.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Offline Heye

Tabloya îndeksê nivîsa orîjînal nagire, tenê peyvan hilîne, ku mîqdara hilanînê kêm dike.

Girîngkirina encamên lêgerînê ji nû ve barkirina nivîsa orîjînal hewce dike, û berhevkirina `service worker` dikare ji daxwazên torê yên dubare dûr bixe.

Di heman demê de, ji ber ku `service worker` hemî gotaran vedişêre, gava ku bikarhêner lêgerînek pêk tîne, tevahiya malper, tevî lêgerînê, offline heye.

## Optimîzasyona Belgeyên MarkDown Nîşan Bidin

`i18n.site` 's çareseriya lêgerîna paşîn a paqij ji bo `MarkDown` belgeyan xweşbîn e.

Dema ku encamên lêgerînê têne xuyang kirin, navê beşê dê were xuyang kirin û gava ku were klîk kirin dê beş were rêve kirin.

![](https://p.3ti.site/1727686552.avif)

## Bihevrekirin

Lêgerîna tev-nivîsê ya berevajîkirî ku bi tenê li pêşiya pêşîn, bi bersivek bilez û bê hewcedariya serverek hatî bicîh kirin.

Ew ji bo malperên piçûk û navîn ên wekî belge û blogên kesane pir maqûl e.