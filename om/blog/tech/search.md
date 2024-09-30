# Barbaacha Barreeffama Guutuu Garagalfame Qulqulluu Fuulduraa

## Tartiiba

Torban hedduu booda, [i18n.site](//i18n.site) (meeshaa ijaarsa weebsaayitii markdown hiikkaa afaanota hedduu & qulqulluu ta'e) amma barbaacha barreeffama guutuu fuulduraa qulqulluu deeggara.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Barreeffamni kun hojiirra oolmaa teeknooloojii barbaacha barreeffama fuulduraa qulqulluu `i18n.site` ni qooddata Daawwannaa [i18n.site](//i18n.site)

Koodii madda [banaa](//github.com/i18n-site/plugin/tree/main/qy) barbaacha [kernel Walqunnamtii](//github.com/i18n-site/ie/tree/main/qy) /

## Haala Waliigalaa Furmaata Barbaacha Barreeffama Guutuu Sarvarii Hin Qabne

Weebsaayitoota xixiqqoo kan akka sanadoota/biloogii dhuunfaa kanneen qulqulluu ta’aniif, ofuma keetiin duubbee barbaacha barreeffama guutuu ijaaruun baay’ee ulfaataa ta’uun isaa hin shakkisiisu, akkasumas barbaacha barreeffama guutuu tajaajila malee ulfaatina fooyya’aa ta’uun isaa hin shakkisiisu.

Furmaatni barbaacha barreeffama guutuu sarvarii hin qabne jiran gosoota bal’aa lamatti qoodamu.

Tokko dhiyeessaa tajaajila barbaacha qaama sadaffaa [algolia.com](//algolia.com) kan qaamolee barbaacha barreeffama guutuu fuulduraa kan kennudha.

Tajaajiloonni akkanaa kaffaltii kan barbaadan yoo ta’u, dhimma walsimannaa weebsaayitii irraa kan ka’e fayyadamtoota Chaayinaa guddittii keessa jiraniif hin argaman.

Toora ala fayyadamuu hin danda'u, intranet irratti fayyadamuu hin danda'u, daangaa guddaa qaba. Barreeffamni kun waan baay’ee irratti hin mari’atu.

Inni lammaffaan barbaacha barreeffama guutuu fuulduraa qulqulluudha.

Barbaachawwan barreeffama guutuu fuulduraa qulqulluu caalaatti beekaman [lunrjs](https://lunrjs.com) fi [ ElasticLunr.js ] [https://github.com/weixsong/elasticlunr.js](%E5%9F%BA%E4%BA%8E%60lunrjs%60%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91) of keessatti qabatu.

`lunrjs` Indeeksii ijaaruuf karaan lama jira, garuu lamaan isaanii rakkoo mataa isaanii qabu.

1. Faayilota indeeksii dursanii ijaaraman

   Indeeksii jechoota galmee hunda irraa waan of keessaa qabuuf, guddinaan guddaadha.
   Yeroo galmeen dabalamu ykn fooyya'u hunda, faayilii indeksii haaraan fe'amuu qaba.
   Yeroo eegaa fayyadamaa ni dabala, baandii baay'ee ni fayyadama.

2. Sanadoota fe'uu fi indeeksii balali'aa irratti ijaaruu

   Indeeksii ijaaruun hojii shallaggii cimaadha yeroo hunda indeeksii irra deebitee ijaaruun duubatti hafummaa ifa ta'ee fi muuxannoo fayyadamaa gadhee fida.

`lunrjs` malees, furmaata barbaacha barreeffama guutuu biroo tokko tokko jiru, kan akka :

[fusejs](https://www.fusejs.io) , walfakkeenya dhangiiwwan gidduu jiru shallagi.

Gahumsi furmaata kanaa garmalee gadhee waan ta'eef barbaacha barreeffama guutuuf fayyadamuu hin danda'u (ilaali [Fuse.js Gaaffiin dheeraan 10 sekondii ol fudhata, akkamitti fooyyessa?](https://stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries) ).

[TinySearch](https://github.com/tinysearch/tinysearch) `goo` `good` `google`

Hanqina furmaata jiruun quufa dhabuu irraa kan ka'e, `i18n.site` furmaata barbaacha barreeffama guutuu fuulduraa qulqulluu haaraa, kan amaloota armaan gadii qabu hojjete :

1. Barbaacha `25KB` hedduu kan `lunrjs` `gzip` `6.9KB` , guddinaan xiqqaadha.
1. Indeeksii garagalfame `indexedb` irratti hundaa'e ijaari, kunis yaadannoo xiqqaa kan fudhatuu fi saffisaa dha.
1. Yeroo sanadoonni dabalaman/foyya’an, sanadoota dabalaman ykn fooyya’an qofatu irra deebi’amee indeksii ta’a, kunis hamma shallaggii hir’isa.
1. Barbaacha durtii ni deeggara, kunis bu'aa barbaacha yeroo qabatamaa keessatti yeroo fayyadamaan barreessu agarsiisuu danda'a.
1. Toora irraa ala ni argama

Armaan gaditti ibsi raawwii teeknikaa `i18n.site` bal’inaan ni dhiyaata.

## Qoqqoodinsa Jechootaa Afaan Hedduu

Qoodinsi jechootaa qoqqoodinsa jechootaa dhalootaa biraawzari fayyadama `Intl.Segmenter` , fi biraawzaroonni ijoo hundi walqunnamtii kana ni deeggaru.

![](https://p.3ti.site/1727667759.avif)

Koodiin jecha qoqqoodinsa `coffeescript` akka armaan gadiitti argama

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

keessa:

* `/\p{P}/` ibsa idilee kan mallattoolee addaan kutuu walsimsiisu Mallattoolee walsimsiisaa addaa kanneen akka: `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _ ` { | } ~. `.</p><ul><li> `split('.')` kan ta'eef sababni isaas `Firefox` qoqqoodinsi jechoota biraawzari `.` hin qoodu .</li>


## Ijaarsa Indeeksii

Gabateewwan kuusaa wantaa 5 `IndexedDB` keessatti uumamaniiru :

* `word` jechoota : id -
* `doc` : id - Sanada url - Lakkoofsa version sanada
* `docWord` : Array galmee id - jecha id
* `prefix` : Array durtii - jecha id
* `rindex` : Jecha id - Galmee id : Tarree lakkoofsota sararaa

Tarree galmee `url` fi lakkoofsa gosa `ver` keessa darbi, fi galmeen gabatee `doc` keessatti jiraachuu fi dhiisuu isaa barbaadi.Yoo hin jirre, indeeksii garagalfame uumi. Kanuma waliin, sanadoota hin darbamne sanaaf indeeksii garagalfame haqi.

Haala kanaan indeeksii dabalataa galma gahuun hammi shallaggii hir’achuu danda’a.

Walqunnamtii fuulduraa keessatti, barruu adeemsa fe'iinsaa indeeksii yeroo jalqabaaf fe'amu duubatti hafummaa hambisuuf agarsiifamuu danda'a "Barruu Adeemsa Sochii wajjin, Tokko progress + Hojiirra css qulqulluu irratti hundaa'e" [Ingiliffa](https://dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [Chaayinaa](https://juejin.cn/post/7413586285954154522) ilaali.

### IndexedDB Barreeffama Walfakkaatu Ol'aanaa

Pirojektichi kan [idb](https://www.npmjs.com/package/idb) asynchronous encapsulation of IndexedDB

IndexedDB dubbisuu fi barreessuun walsimsiisaa dha. Yeroo indeksii uumtu, galmeewwan indeeksii uumuuf yeroo tokkotti fe'amu.

Barreeffama dorgommiitiin dhufu gartokkoon deetaa akka hin badneef, koodii `coffeescript` armaan gadii ilaaluu fi barreeffamoota dorgoman addaan kutuuf dubbisuu fi barreessuu gidduutti kaachota `ing` dabaluu dandeessa.

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

## Durtii Barbaacha Yeroo Dhugaa

Bu'aa barbaacha yeroo fayyadamaan barreessu agarsiisuuf, fakkeenyaaf, yeroo `wor` galfamu, jechoonni `wor` dursanii kan akka `words` fi `work` ni mul'atu.

![](https://p.3ti.site/1727684944.avif)

Keerliin barbaacha jechoota isa duraan durfaman hunda argachuuf jecha isa dhumaatiif gabatee `prefix` fayyadama.

Faankishiniin farra raafama `debounce` walqunnamtii fuulduraa keessattis fayyadama (akka armaan gadiitti hojiirra oola) irra deddeebiin galtee fayyadamaa barbaacha kakaasu hir'isuu fi hamma shallaggii hir'isuuf.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Sirrummaa Fi Yaadannoo

Barbaacha jalqaba jechoota ijoo fayyadamaan galche ni qooda.

Jechoonni qoqqoodinsa jechootaa booda jechootni `N` akka jiran haa fudhannu Yeroo bu'aa deebistu, bu'aan jechoota furtuu hunda of keessaa qabu dursee ni deebi'a, sana booda bu'aan jechoota furtuu `N-1` , `N-2` ,..., `1` of keessaa qabu ni deebi'a.

Bu'aan barbaacha jalqaba agarsiifame sirrii ta'uu gaaffii mirkaneessa, fi bu'aan booda fe'ame (qaree dabalataa fe'i cuqaasi) saffisa yaadannoo mirkaneessa.

![](https://p.3ti.site/1727684564.avif)

## Fe’iinsa Gaaffii Irratti

Saffisa deebii fooyyessuuf, barbaacha fe'iinsa fedhii irratti hojiirra oolchuuf jenereetarii `yield` fayyadama, fi yeroo bu'aan gaafatamu `limit` deebi'a.

Hubadhu yeroo hunda `yield` booda irra deebitee barbaaddu , daldala gaaffii `IndexedDB` irra deebitee banuun si barbaachisa .

## Durtii Barbaacha Yeroo Dhugaa

Bu'aa barbaacha yeroo fayyadamaan barreessu agarsiisuuf, fakkeenyaaf, yeroo `wor` galfamu, jechoonni `wor` dursanii kan akka `words` fi `work` ni mul'atu.

![](https://p.3ti.site/1727684944.avif)

Keerliin barbaacha jechoota isa duraan durfaman hunda argachuuf jecha isa dhumaatiif gabatee `prefix` fayyadama.

Faankishiniin farra raafama `debounce` walqunnamtii fuulduraa keessattis fayyadama (akka armaan gadiitti hojiirra oola) irra deddeebiin galtee fayyadamaa barbaacha kakaasu hir'isuu fi hamma shallaggii hir'isuuf.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Toora Irraa Ala Ni Argama

Gabatee indeeksii barruu jalqabaa hin kuusu, jechoota qofa, kunis hamma kuusaa hir'isa.

Bu'aa barbaacha calaqqisiisuun barruu jalqabaa irra deebi'anii fe'uu barbaada, fi `service worker` walsimsiisuun gaaffii networkii irra deddeebi'amee dhufu hambisuu danda'a.

Kanuma waliin, barruulee hunda `service worker` waan kuusuuf, fayyadamaan erga barbaacha raawwatee booda, barbaacha dabalatee marsariitiin guutuun sarara ala ni argama.

## Agarsiisi Fooyya'iinsa Galmeewwan MarkDown

Furmaanni barbaacha fuulduraa qulqulluu `i18n.site` 's galmeewwan `MarkDown` kan mijatedha.

Yeroo bu'aa barbaacha agarsiisu, maqaan boqonnaa ni mul'ata, boqonnaan immoo yeroo cuqaafamu ni qajeela.

![](https://p.3ti.site/1727686552.avif)

## Cuunfaa

Barbaacha barreeffama guutuu garagalfame kan hojiirra oole qulqulluu fuulduraa irratti, deebii saffisaa fi sarvarii hin barbaachisu.

Marsariitiiwwan xixiqqaa fi giddu galeessaa kanneen akka sanadootaa fi biloogii dhuunfaatiif baay’ee mijataadha.