# Pure Front-End Inverted Sɛbɛnni Dafalen Ɲinini

## Dasigi

Dɔgɔkun damadɔ yiriwali kɔfɛ, [i18n.site](//i18n.site) (a ye markdown kan caman baarakɛcogo & siti jɔli baarakɛminɛn ye min tɛ jɔ dɔrɔn) bɛ ɲɛfɛla dafalen ɲinini saniyalen dɛmɛ sisan.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Nin barokun in bɛna `i18n.site` pure front-end full-text ɲinini kɛcogo jira walasa ka ɲinini nɔ [i18n.site](//i18n.site) .

Kode : wulilen [kernel](//github.com/i18n-site/ie/tree/main/qy) / [Interactive interface](//github.com/i18n-site/plugin/tree/main/qy)

## Sɛbɛnni Dafalen Ɲinini Ɲɛnabɔcogo Minnu Tɛ Sèrwɛri Ye, Olu Lajɛlen

Siti misɛnninw ni cɛmancɛw kama minnu bɛ jɔ dɔrɔn i n’a fɔ sɛbɛnw/mɔgɔ yɛrɛ ka bulɔguw, sɛbɛnni dafalen ɲinini kɔkanna jɔli min bɛ kɛ a yɛrɛ ye, o ka gɛlɛn kojugu, wa sɛbɛnni dafalen ɲinini min tɛ baara kɛ, o de ye sugandili ye min ka ca.

Sɛbɛnni dafalen ɲinini ɲɛnabɔcogo minnu tɛ sèrwɛri ye, olu bɛ Dòn kulu fla la minnu ka bon:

A fɔlɔ, o ɲɔgɔnna [algolia.com](//algolia.com)

O baara suguw bɛ wari ɲini ka da ɲinini hakɛ kan, wa a ka c’a la, u tɛ sɔrɔ baarakɛlaw fɛ Sinuwa jamanaba kɔnɔ k’a sababu kɛ ko dɔw ye i n’a fɔ sitiw ka sariya labatoli.

A tɛ se ka baara kɛ ni a ye ɛntɛrinɛti kɔkan, a tɛ se ka kɛ ɛntɛrinɛti kan, wa dan bɛ a la kosɛbɛ. Nin barokun tɛ kuma caman kan.

Filanan ye ɲɛfɛla-sɛbɛn dafalen ɲinini saniyalen ye.

Ɲɛjirali saniyalen ElasticLunr.js bɛ kɛ ka caya, [https://github.com/weixsong/elasticlunr.js](%E5%9F%BA%E4%BA%8E%60lunrjs%60%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91) ye [lunrjs](https://lunrjs.com)

`lunrjs` Indexw jɔcogo fila bɛ yen, wa u fila bɛɛ n’u ka gɛlɛyaw don.

1. Index files minnu jɔra ka kɔn

   Ikomi daɲɛw bɛ sɔrɔ index kɔnɔ minnu bɔra sɛbɛnw bɛɛ la, a bonya ka bon.
   Tuma o tuma ni sɛbɛn dɔ farala a kan walima ni a b’a sɛmɛntiya, index file kura ka kan ka don a kɔnɔ.
   A bɛna dɔ fara baarakɛla ka makɔnɔni waati kan ani ka bandwidth caman ta.

2. Sɛbɛnw doni ani ka index (index)w jɔ ka taa a fɛ

   Index (index) jɔli ye baara ye min bɛ jatebɔ-ba Kɛ ni i ye index (yɔrɔ) jɔ kokura tuma o tuma n’i y’a Sɔrɔ o bɛna Kɛ sababu ye ka kɔtigɛ jɛlenw Kɛ ani baarakɛlaw ka dɔnniya jugu.

---

Ka fara `lunrjs` kan, sɛbɛnni dafalen ɲinini fɛɛrɛ wɛrɛw bɛ yen, i n’a fɔ :

[fusejs](https://www.fusejs.io)

Nin fura in baarakɛcogo man ɲi kosɛbɛ wa a tɛ se ka kɛ sɛbɛnni dafalen ɲinini na (aw ye sɛbɛn ɲɛ [Fuse.js Ɲininkali jan bɛ tɛmɛ segin 10 kan, a bɛ se ka ɲɛ cogo di?](https://stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries) ).

[TinySearch](https://github.com/tinysearch/tinysearch) `goo` `good` `google`

K’a sababu kɛ fura minnu bɛ yen, olu dɛsɛw kosɔn, `i18n.site` ye ɲɛfɛla saniyalen ɲinini fɛɛrɛ kura dɔ labɛn, min bɛ ni nin jogo ninnu ye :

1. A bɛ kan caman ɲinini dɛmɛ ani a bonya ka dɔgɔn ɲininikɛlan hakɛ min bɛ pake `gzip` kɔfɛ, o ye `6.9KB` ye (ka kɛɲɛ ni ɲɔgɔn ye, `lunrjs` bonya ye `25KB` ye).
1. Index inversé (yɔrɔ inversé) jɔ min sinsinnen bɛ `indexedb` kan, o min bɛ hakilijagabɔ dɔɔnin ta, wa a bɛ teliya.
1. Ni sɛbɛnw farala ɲɔgɔn kan/b’u sɛmɛntiya, sɛbɛn minnu farala ɲɔgɔn kan walima minnu sɛmɛntiyalen don, olu dɔrɔn de bɛ segin ka kɛ index ye, o bɛ dɔ bɔ jatebɔ hakɛ la.
1. A bɛ daminɛ ɲinini dɛmɛ, min bɛ se ka ɲinini jaabiw jira waati yɛrɛ la k’a sɔrɔ baarakɛla bɛ sɛbɛnni kɛ.
1. A Bɛ Sɔrɔ Ɛntɛrinɛti Kɔkan

Dugujukɔrɔ, fɛɛrɛko waleyali kunnafoni `i18n.site` bɛna jira ka ɲɛ.

## Daɲɛw Tila-Tilacogo Kan Caman Na

Daɲɛw tilatilali bɛ baara Kɛ ni navigatɔrɔn ka daɲɛ tilacogo yɛrɛ ye `Intl.Segmenter` , wa navigatɔrɔnba bɛɛ bɛ o dakun in Dɛmɛ.

![](https://p.3ti.site/1727667759.avif)

Daɲɛ tila-tilacogo `coffeescript` kode bɛ nin cogo in na

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

kɔnɔ:

* `/\p{P}/` ye kumasen basigilen ye min bɛ bɛn taamasiyɛnw ma minnu bɛ bɛn ɲɔgɔn ma, olu ye : `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _ ` { | } ~. `.</p><ul><li> `split('.')` bɛ kɛ bawo `Firefox` navigatɔrɔn daɲɛ tilacogo tɛ segin `.` ye .</li>


## Index (Index) Jɔli

fɛn marayɔrɔ tabali 5 dabɔra `IndexedDB` kɔnɔ :

* `word` daɲɛw : id -
* `doc` : id - Sɛbɛn url - Sɛbɛn bɔko nimɔrɔ
* `docWord` : Sɛbɛn id - daɲɛ id
* `prefix` : - id
* `rindex` : Daɲɛ id - Sɛbɛn id : Layini nimɔrɔw lajɛlen

Tɛmɛ sɛbɛn `url` ni version numéro `ver` ka sɛrɛkili kɔnɔ, ka ɲinini kɛ ni sɛbɛn bɛ tabali `doc` kɔnɔ.Ni a tɛ yen, i ka index inversé dɔ da. O waati kelen na, sɛbɛnw minnu ma tɛmɛn ka don, olu ka index inversé bɔ.

O cogo la, index incremental bɛ se ka sɔrɔ ani jatebɔ hakɛ bɛ dɔgɔya.

Front-end jɛɲɔgɔnya la, index ka doni ɲɛtaa taamasiyɛn bɛ se ka jira walasa ka i yɛrɛ tanga kɔfɛta ma ni doni bɛ kɛ siɲɛ fɔlɔ la Aw ye "Progress Bar with Animation, Based on a Single progress + Pure css Implementation" lajɛ [Angilɛkan](https://dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [Sinuwa](https://juejin.cn/post/7413586285954154522)

### IndexedDB Sanfɛ Sɛbɛnni Kɛcogo Kelen Na

Porozɛ [idb](https://www.npmjs.com/package/idb) ka da asynchrone encapsulation kan IndexedDB

IndexedDB kalanni ni sɛbɛnniw ye asynchrone ye. Ni index dɔ dabɔra, sɛbɛnw bɛna doni ɲɔgɔn fɛ walasa ka index da.

Walasa ka kunnafoni-falen-falen yɔrɔ dɔw bali min bɛ sɔrɔ sɛbɛnni ɲɔgɔndan fɛ, i bɛ se ka `coffeescript` kode lajɛ min bɛ duguma ani ka `ing` cache dɔ fara kalan ni sɛbɛnni cɛ walasa ka sɛbɛnni ɲɔgɔndanw minɛ.

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

## Prefix Ɲinini Waati Yɛrɛ La

Walasa ka ɲinini jaabiw jira k’a sɔrɔ baarakɛla bɛ sɛbɛnni kɛ, misali la, ni `wor` donna, daɲɛ minnu bɛ daminɛ ni `wor` ye i n’a fɔ `words` ani `work` , olu bɛ jira.

![](https://p.3ti.site/1727684944.avif)

Ɲini-yɔrɔ bɛna baara Kɛ ni `prefix` tabali ye daɲɛ laban na daɲɛ tilacogo kɔfɛ walasa ka daɲɛw bɛɛ Sɔrɔ minnu bɛ Da a ɲɛfɛ, ka ɲinini Kɛ ka tugu ɲɔgɔn na.

Anti-shake function `debounce` fana bɛ Kɛ ɲɛfɛla jɛɲɔgɔnya la (a bɛ Kɛ nin cogo in na) walasa ka baarakɛlaw ka dontaw cayalenba Dɔgɔya minnu bɛ ɲininiw Daminɛ ani ka jatebɔ hakɛ Dɔgɔya.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Tiɲɛni Ani Hakililajigin

Ɲini bɛna fɔlɔ ka daɲɛ kolomaw tila-tila, baarakɛla ye minnu don.

A ka c’a la, daɲɛ `N` bɛ daɲɛ tila-tila kɔfɛ Ni jaabiw seginna, daɲɛ kolomaw bɛɛ bɛ sɔrɔ minnu na, olu bɛ segin fɔlɔ, o kɔfɛ, daɲɛ kolomaw `N-1` , `N-2` ,..., `1` bɛ sɔrɔ minnu na, olu bɛ segin.

Ɲini jaabi minnu bɛ jira fɔlɔ, olu bɛ ɲininkali kɛcogo ɲuman sabati, wa jaabi minnu doni kɔfɛ (butɔn doni caman digi) olu bɛ hakilijigin hakɛ sabati.

![](https://p.3ti.site/1727684564.avif)

## Doni Doni Ka Kɛɲɛ Ni Ɲinini Ye

Walasa ka jaabi teliya ɲɛ, ɲinini bɛ baara kɛ ni `yield` jɛnɛrato ye walasa ka doni tali kɛ ka kɛɲɛ ni ɲinini ye, wa a bɛ segin `limit` tuma ni jaabi dɔ ɲininkali kɛra.

a kɔlɔsi ko tuma o tuma n' i ye ɲinini kɛ tugun `yield` kɔfɛ , i ka kan ka ɲininkali jago dɔ da wuli kokura min ye `IndexedDB` ye .

## Prefix Ɲinini Waati Yɛrɛ La

Walasa ka ɲinini jaabiw jira k’a sɔrɔ baarakɛla bɛ sɛbɛnni kɛ, misali la, ni `wor` donna, daɲɛ minnu bɛ daminɛ ni `wor` ye i n’a fɔ `words` ani `work` , olu bɛ jira.

![](https://p.3ti.site/1727684944.avif)

Ɲini-yɔrɔ bɛna baara Kɛ ni `prefix` tabali ye daɲɛ laban na daɲɛ tilacogo kɔfɛ walasa ka daɲɛw bɛɛ Sɔrɔ minnu bɛ Da a ɲɛfɛ, ka ɲinini Kɛ ka tugu ɲɔgɔn na.

Anti-shake function `debounce` fana bɛ Kɛ ɲɛfɛla jɛɲɔgɔnya la (a bɛ Kɛ nin cogo in na) walasa ka baarakɛlaw ka dontaw cayalenba Dɔgɔya minnu bɛ ɲininiw Daminɛ ani ka jatebɔ hakɛ Dɔgɔya.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## A Bɛ Sɔrɔ Ɛntɛrinɛti Kɔkan

Index tabali tɛ sɛbɛn fɔlɔ mara, daɲɛw dɔrɔn, o bɛ dɔ bɔ a marali hakɛ la.

Ɲini jaabiw jirali bɛ sɛbɛnni fɔlɔw doni kokura, wa ni `service worker` bɛ bɛn, o bɛ se ka kɛ sababu ye ka rezo ɲinini segin-seginw bali.

O waati kelen na, bari `service worker` bɛ barokun bɛɛ mara, ni baarakɛla ye ɲinini kɛ dɔrɔn, siti bɛɛ, ɲinini fana sen bɛ o la, o bɛ sɔrɔ ɛntɛrinɛti kɔkan.

## MarkDown Sɛbɛnw Ka Ɲɛtaa Jirali

`i18n.site` ka ɲɛfɛla ɲinini ɲɛnabɔcogo saniyalen bɛ ɲɛ sɛbɛn `MarkDown` kama.

Ni ɲinini jaabiw jiralen don, sapitiri tɔgɔ bɛna jira ani sapitiri bɛna taa ɲɛ ni a digilen don.

![](https://p.3ti.site/1727686552.avif)

## Kuma Surun Kɛ

Inverted full-text search (sɛbɛnni dafalen ɲinini) min bɛ waleya ɲɛfɛ dɔrɔn, sèrwɛri si ma wajibiya. A bɛnnen don kosɛbɛ siti misɛnninw ni cɛmancɛw ma i n’a fɔ sɛbɛnw ani mɔgɔ yɛrɛ ka bulɔguw.

`i18n.site` Open source yɛrɛ ka ɲɛfɛla saniyalen ɲinini, min ka dɔgɔn a bonya la ani a jaabi teliyalen don, o bɛ sisan ɲɛfɛla saniyalen ɲinini dafalenw dɛsɛw ɲɛnabɔ ani ka baarakɛlaw ka baarakɛcogo ɲuman di.