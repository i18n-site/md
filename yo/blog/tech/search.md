# Iwaju-Opin Mimọ Ti O Yipada Ni Kikun Wiwa Ọrọ

## Ọkọọkan

Lẹhin markdown ọsẹ pupọ & idagbasoke, [i18n.site](//i18n.site)

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Nkan yii yoo pin imuse ti `i18n.site` mimọ iwaju-opin imọ-ẹrọ wiwa ni kikun Ibẹwo [i18n.site](//i18n.site)

[Ekuro](//github.com/i18n-site/plugin/tree/main/qy) [wiwa](//github.com/i18n-site/ie/tree/main/qy) orisun ṣiṣi koodu /

## Akopọ Ti Awọn Solusan Wiwa Ọrọ Kikun Ti Ko Ni Olupin

Fun awọn oju opo wẹẹbu kekere gẹgẹbi awọn iwe aṣẹ/awọn bulọọgi ti ara ẹni ti o jẹ aimi, laiseaniani o wuwo pupọ lati kọ ẹhin wiwa ọrọ-kikun nipasẹ ararẹ, ati wiwa ọrọ kikun laisi awọn iṣẹ jẹ laiseaniani iwuwo to dara julọ.

Awọn ojutu wiwa ọrọ kikun ti ko ni olupin ti o wa tẹlẹ ṣubu si awọn ẹka gbooro meji.

Ọkan jẹ olupese iṣẹ wiwa ẹni-kẹta ti o jọra si [algolia.com](//algolia.com) eyiti o pese awọn paati wiwa ọrọ-kikun iwaju-opin.

Iru awọn iṣẹ bẹ nilo isanwo ati pe ko si fun awọn olumulo ni Ilu China nitori awọn ọran ibamu oju opo wẹẹbu.

Ko ṣee lo ni aisinipo, ko ṣee lo lori intranet, o si ni awọn idiwọn nla. Nkan yii ko jiroro pupọ.

Awọn keji jẹ funfun iwaju-opin wiwa ọrọ ni kikun.

Awọn wiwa-ọrọ ni kikun ti ElasticLunr.js mọ ni iwaju- [https://github.com/weixsong/elasticlunr.js](%E5%9F%BA%E4%BA%8E%60lunrjs%60%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91) pẹlu [lunrjs](https://lunrjs.com)

`lunrjs` Awọn ọna meji lo wa lati kọ awọn atọka, ṣugbọn awọn mejeeji ni awọn iṣoro tiwọn.

1. Awọn faili atọka ti a ti kọ tẹlẹ

   Nitori atọka naa ni awọn ọrọ lati gbogbo awọn iwe aṣẹ, o tobi ni iwọn.
   Nigbakugba ti iwe ba wa ni afikun tabi tunṣe, faili atọka titun gbọdọ wa ni kojọpọ.
   Yoo mu akoko idaduro olumulo pọ si ati jẹ ọpọlọpọ bandiwidi.

2. Gbe awọn iwe aṣẹ ati kọ awọn atọka lori fo

   Ṣiṣeto atọka jẹ iṣẹ-ṣiṣe aladanla oniṣiro ni gbogbo igba ti o wọle si yoo fa lags ti o han gedegbe ati iriri olumulo ti ko dara.

Ni afikun si `lunrjs` , awọn ojutu wiwa ọrọ-kikun miiran wa, bii :

[fusejs](https://www.fusejs.io) , ṣe iṣiro ibajọra laarin awọn okun lati wa.

Iṣe ti ojutu yii ko dara pupọ ati pe a ko le lo fun wiwa ọrọ-kikun (wo [Fuse.js Ibeere gigun gba diẹ sii ju 10 iṣẹju-aaya, bawo ni o ṣe le mu dara si?](https://stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries) ).

[TinySearch](https://github.com/tinysearch/tinysearch) lo Bloom àlẹmọ lati wa, ko le ṣee lo fun ìpele àwárí (fun apẹẹrẹ, tẹ `goo` , àwárí `good` , `google` ), ati ki o ko ba le se aseyori iru laifọwọyi Ipari ipa.

Ninu ainitẹlọrun pẹlu awọn ailagbara ti awọn solusan ti o wa tẹlẹ, `i18n.site` ṣe agbekalẹ ojuutu wiwa iwaju-ipari kikun-ọrọ mimọ tuntun, eyiti o ni awọn ẹya wọnyi :

1. Ṣe `lunrjs` wiwa ede-pupọ ati pe `gzip` jẹ `6.9KB` ni iwọn `25KB`
1. Kọ itọka inverted ti o da lori `indexedb` , eyiti o gba iranti kere si ati iyara.
1. Nigbati awọn iwe ba ti wa ni afikun / títúnṣe, nikan ni afikun tabi títúnṣe awọn iwe aṣẹ ti wa ni tun atọka, atehinwa iye ti isiro.
1. Ṣe atilẹyin wiwa iṣaaju, eyiti o le ṣafihan awọn abajade wiwa ni akoko gidi lakoko ti olumulo n tẹ.
1. Wa ni aisinipo

Ni isalẹ, awọn alaye imuse imọ-ẹrọ `i18n.site` yoo ṣafihan ni awọn alaye.

## Multilingual Ọrọ Ipin

Pipin ọrọ nlo ọrọ abinibi ti aṣawakiri naa ipin `Intl.Segmenter` , ati gbogbo awọn aṣawakiri akọkọ ṣe atilẹyin ni wiwo yii.

![](https://p.3ti.site/1727667759.avif)

Ọrọ ipin koodu `coffeescript` jẹ bi atẹle

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

ninu:

* `/\p{P}/` jẹ ikosile deede ti o baamu awọn aami ifamisi pato pẹlu: `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _ ` { | } `.</p><ul><li> `split('.')` jẹ nitori pe `Firefox` ọrọ aṣawakiri ipin ko ni apakan `.` .</li>


## Ilé Atọka

Awọn tabili ibi ipamọ ohun 5 ni a ṣẹda ni `IndexedDB` :

* `word` : id -
* `doc` : id - url - Nọmba ikede iwe
* `docWord` : iwe id - ọrọ id
* `prefix` : - id
* `rindex` : Ọrọ id - Iwe id : Awọn nọmba ila

Kọja ni titobi iwe-ipamọ `url` ati nọmba ẹya `ver` , ki o wa boya iwe-ipamọ naa wa ni tabili `doc` Ti ko ba si, ṣẹda atọka inverted. Ni akoko kanna, yọkuro atọka inverted fun awọn iwe aṣẹ wọnyẹn ti a ko gba wọle.

Ni ọna yii, titọka afikun le ṣee ṣe ati pe iye iṣiro ti dinku.

Ni ibaraenisepo iwaju-ipari, igi [ilọsiwaju](https://dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) ikojọpọ css atọka le ṣe afihan lati yago fun aisun nigba ikojọpọ fun / progress + [.](https://juejin.cn/post/7413586285954154522)

### IndexedDB Kikọ Nigbakanna Giga

Ise agbese na [idb](https://www.npmjs.com/package/idb) da lori asynchronous encapsulation ti IndexedDB

IndexedDB kika ati kikọ jẹ asynchronous. Nigbati o ba ṣẹda atọka, awọn iwe aṣẹ yoo kojọpọ nigbakanna lati ṣẹda atọka naa.

Lati yago fun ipadanu data apakan ti o fa nipasẹ kikọ ifigagbaga, o le tọka si koodu `coffeescript` ni isalẹ ki o ṣafikun kaṣe `ing` kan laarin kika ati kikọ lati ṣe idiwọ awọn kikọ idije.

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

## Ṣaju Iṣaaju Wiwa Akoko Gidi

Lati le ṣe afihan awọn abajade wiwa lakoko ti olumulo n tẹ, fun apẹẹrẹ, nigbati `wor` ba ti wa ni titẹ sii, awọn ọrọ ti a ṣaju pẹlu `wor` gẹgẹbi `words` ati `work` yoo han.

![](https://p.3ti.site/1727684944.avif)

Ekuro wiwa yoo lo tabili `prefix` fun ọrọ ti o kẹhin lẹhin ipin ọrọ lati wa gbogbo awọn ọrọ ti a ṣaju pẹlu rẹ, ati ṣewadii ni ọkọọkan.

Iṣẹ Anti-shake `debounce` tun lo ni ibaraenisepo iwaju-ipari (ti ṣe imuse bi atẹle) lati dinku igbohunsafẹfẹ ti titẹ sii olumulo ti nfa awọn wiwa ati dinku iye iṣiro.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Konge Ati ÌRÁNTÍ

Wiwa naa yoo kọkọ pin awọn koko-ọrọ ti olumulo wọle si.

Ro pe awọn ọrọ `N` wa lẹhin ipin ọrọ Nigbati o ba da awọn abajade pada, awọn abajade ti o ni gbogbo awọn koko-ọrọ yoo pada ni akọkọ, lẹhinna awọn abajade ti o ni awọn koko-ọrọ `N-1` , `N-2` ,..., `1` yoo pada.

Awọn abajade wiwa ti o han ni akọkọ rii daju pe deede ti ibeere naa, ati awọn abajade ti kojọpọ lẹhinna (tẹ bọtini fifuye diẹ sii) rii daju oṣuwọn iranti.

![](https://p.3ti.site/1727684564.avif)

## Fifuye Lori Eletan

Lati le ni ilọsiwaju iyara esi, wiwa naa nlo monomono `yield` lati ṣe imuse ikojọpọ ibeere, ati pada `limit` igba ti abajade kan ba beere.

Ṣe akiyesi pe nigbakugba ti o ba wa lẹẹkansi lẹhin `yield` , o nilo lati tun ṣi iṣowo ibeere ti `IndexedDB` .

## Ṣaju Iṣaaju Wiwa Akoko Gidi

Lati le ṣe afihan awọn abajade wiwa lakoko ti olumulo n tẹ, fun apẹẹrẹ, nigbati `wor` ba ti wa ni titẹ sii, awọn ọrọ ti a ṣaju pẹlu `wor` gẹgẹbi `words` ati `work` yoo han.

![](https://p.3ti.site/1727684944.avif)

Ekuro wiwa yoo lo tabili `prefix` fun ọrọ ti o kẹhin lẹhin ipin ọrọ lati wa gbogbo awọn ọrọ ti a ṣaju pẹlu rẹ, ati ṣewadii ni ọkọọkan.

Iṣẹ Anti-shake `debounce` tun lo ni ibaraenisepo iwaju-ipari (ti ṣe imuse bi atẹle) lati dinku igbohunsafẹfẹ ti titẹ sii olumulo ti nfa awọn wiwa ati dinku iye iṣiro.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Wa Ni Aisinipo

Tabili atọka ko tọju ọrọ atilẹba, awọn ọrọ nikan, eyiti o dinku iye ibi ipamọ.

Ṣiṣafihan awọn abajade wiwa nilo atunko ọrọ atilẹba, ati pe `service worker` ti o baamu le yago fun awọn ibeere netiwọki atunwi.

Ni akoko kanna, nitori `service worker` ṣafipamọ gbogbo awọn nkan, ni kete ti olumulo ba ṣe wiwa, gbogbo oju opo wẹẹbu, pẹlu wiwa, wa ni aisinipo.

## Ṣe Afihan Iṣapeye Ti Awọn Iwe Aṣẹ MarkDown

Ojutu wiwa iwaju-opin mimọ `i18n.site` jẹ iṣapeye fun awọn iwe aṣẹ `MarkDown` .

Nigbati o ba n ṣafihan awọn abajade wiwa, orukọ ipin naa yoo han ati ipin naa yoo wa ni lilọ kiri nigbati o ba tẹ.

![](https://p.3ti.site/1727686552.avif)

## Ṣe Akopọ

Ṣiṣawari ọrọ-kikun ti a ṣe iyipada ti a ṣe imuse ni iha iwaju, pẹlu idahun iyara ati pe ko si iwulo fun olupin kan.

O dara pupọ fun awọn oju opo wẹẹbu kekere ati alabọde bii awọn iwe aṣẹ ati awọn bulọọgi ti ara ẹni.