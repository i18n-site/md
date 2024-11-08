---

brief: |
  i18n.site mprempren boa serverless full-text hwehwɛ.

  Saa asɛm yi de anim-akyi nsɛm nyinaa hwehwɛ mfiridwuma a ɛho tew a wɔde di dwuma no ba, a nea ɛka ho ne inverted index a IndexedDB akyekye, prefix hwehwɛ, nsɛmfua nkyekyɛmu a ɛyɛ papa ne kasa ahorow pii mmoa.

  Sɛ yɛde toto ano aduru a ɛwɔ hɔ dada ho a, i18n.site no anim-awieɛ kronkron a wɔakyerɛw nsɛm nyinaa hwehwɛ no sua na ɛyɛ ntɛmntɛm, ɛfata ma wɛbsaet nketewa ne akɛseɛ te sɛ nkrataa ne blog, na ɛwɔ offline.

---

# Pure Front-End Inverted Nsɛm Nyinaa Hwehwɛ

## Ntoasoɔ

Wɔ adapɛn pii nkɔso akyi no, [i18n.site](//i18n.site) (a ɛyɛ static markdown multilingualtranslation & wɛbsaet dan adwinnade) mprempren boa pure front-end full-text search.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Saa asɛm yi bɛkyɛ mfiridwuma mu dwumadie a ɛfa `i18n.site` pure front-end full-text search Nsrahwɛ [i18n.site](//i18n.site)

Kood bue : [Hwehwɛ kernel](//github.com/i18n-site/ie/tree/main/qy) / [nkitahodi interface](//github.com/i18n-site/plugin/tree/main/qy)

## Nhwehwɛmu a Ɛfa Serverless Full-Text Search Solutions Ho

Wɔ wɛbsaet nketewa ne akɛse a ɛnyɛ nea ɛkɔ so daa te sɛ nkrataa/ankorankoro blog ahorow fam no, sɛ wɔbɛkyekyere nsɛm nyinaa hwehwɛ akyi kwan a obi ankasa ayɛ no yɛ duru dodo, na nsɛm nyinaa hwehwɛ a ɔsom biara nni mu ne nea wɔtaa paw.

Serverless full-text search solutions no hyɛ akuw abien a ɛtrɛw mu:

Nea edi kan no, a ɛte saa ara [algolia.com](//algolia.com)

Nnwuma a ɛte saa no hwehwɛ sɛ wotua ka gyina dodow a wɔhwehwɛ so, na mpɛn pii no, wɔn a wɔde di dwuma wɔ China asasepɔn so no ntumi nyɛ adwuma esiane nsɛm te sɛ wɛbsaet no mmara sodi nti.

Wontumi mfa nni dwuma wɔ intanɛt so, wontumi mfa nni dwuma wɔ intranet so, na ɛwɔ anohyeto akɛse. Asɛm yi nka pii ho asɛm.

Nea ɛto so abien ne anim-awiei a ɛyɛ kronkron a wɔde hwehwɛ nsɛm nyinaa mu.

Mprempren, pure front-end full-text hwehwɛ a wɔtaa yɛ no bi ne [lunrjs](//lunrjs.com) ne [ElasticLunr.js](//github.com/weixsong/elasticlunr.js) (egyina `lunrjs` nkɔso a ɛto so abien so).

`lunrjs` Akwan mmienu na ɛwɔ hɔ a wɔfa so yɛ index, na abien no nyinaa wɔ wɔn ankasa haw.

1. Index fael ahorow a wɔadi kan ayɛ

   Esiane sɛ nsɛmfua a efi nkrataa nyinaa mu kura index no mu nti, ne kɛse yɛ kɛse.
   Bere biara a wɔde krataa bi bɛka ho anaa wɔbɛsesa no, ɛsɛ sɛ wɔde index fael foforo gu mu.
   Ɛbɛma bere a ɔde di dwuma no twɛn no akɔ soro na agye bandwidth pii.

2. Fa nkrataa gu mu na yɛ index ahorow wɔ nwansena so

   Index a wobɛkyekyere no yɛ adwuma a ɛyɛ den sɛ wobɛhyehyɛ index no bere biara a wobɛkɔ mu no bɛma woanya lags a ɛda adi pefee ne osuahu a enye a wode di dwuma.

---

Wɔ `lunrjs` akyi no, ano aduru afoforo bi wɔ hɔ a wɔde hwehwɛ nsɛm nyinaa mu, te sɛ :

[fusejs](//www.fusejs.io) , bu nsɛdi a ɛwɔ nhama a wobɛhwehwɛ mu no ho akontaa.

Saa ano aduru yi adwumayɛ nyɛ papa koraa na wontumi mfa nni dwuma mma nsɛm a wɔakyerɛw nyinaa hwehwɛ (hwɛ [Fuse.js Abisade tenten gye bɛboro 10 sikani, ɔkwan bɛn so na wobɛma ayɛ yiye?](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries) ).

[TinySearch](//github.com/tinysearch/tinysearch) `goo` `good` `google`

Esiane sintɔ ahorow a ɛwɔ ano aduru a ɛwɔ hɔ dedaw no mu nti, `i18n.site` yɛɛ ano aduru foforo a ɛho tew a ɛwɔ anim a wɔakyerɛw nsɛm nyinaa hwehwɛ, a ɛwɔ su ahorow a edidi so yi :

1. Ɛboa kasa ahodoɔ hwehwɛ na ɛyɛ ketewa wɔ ne kɛseɛ mu hwehwɛ kernel no kɛseɛ wɔ packaging `gzip` akyi yɛ `6.9KB` (sɛ yɛde toto ho a, `lunrjs` kɛseɛ yɛ `25KB` )
1. Yɛ index a wɔadan no a egyina `indexedb` so, a egye memory kakraa bi na ɛyɛ ntɛmntɛm.
1. Sɛ wɔde nkrataa ka ho/wɔsesa a, nkrataa a wɔde aka ho anaa wɔasesa no nkutoo na wɔsan de index yɛ, na ɛtew akontaabu dodow so.
1. Ɛboa prefix search na ɛtumi kyerɛ nhwehwɛmu aba wɔ berɛ ankasa mu berɛ a ɔdefoɔ no rekyerɛw.
1. Wobetumi anya bi wɔ offline

Wɔ aseɛ ha yi, wɔde mfiridwuma ho dwumadie ho nsɛm `i18n.site` bɛba kɔ akyiri.

## Nsɛmfua a Wɔkyekyɛ Mu Wɔ Kasa Horow Pii Mu

Asɛmfua nkyekyɛmu de brawsa no ankasa nsɛmfua nkyekyɛmu `Intl.Segmenter` di dwuma, na brawsa titiriw nyinaa boa saa nkitahodi yi.

![](//p.3ti.site/1727667759.avif)

Asɛmfua nkyekyɛmu `coffeescript` koodu no te sɛ nea edidi so yi

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

* `/\p{P}/` yɛ asɛmfua a wɔde di dwuma daa a ɛne nkyerɛwde agyiraehyɛde hyia Nsɛnkyerɛnne pɔtee a ɛne ne ho hyia no bi ne: `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _` { | } ~. `.</p><ul><li> `split('.')` ne sɛ `Firefox` browser nsɛmfua nkyekyɛmu nkyekyɛ `. ` .</li>


## Index Dan a Wɔde Si Dan

Wɔyɛɛ nneɛma akorae pon 5 wɔ `IndexedDB` mu :

* `word` nsɛmfua : id -
* `doc` : id - Nwoma url - Nwoma version nɔma
* `docWord` : Array of krataa id - asɛmfua id
* `prefix` : Array a ɛwɔ anim - asɛmfua id
* `rindex` : Asɛmfua id - Nwoma id : Nkyekyɛmu nɔma ahodoɔ

Fa krataa `url` ne version nɔma `ver` nhyehyɛe no mu, na hwehwɛ sɛ ebia krataa no wɔ table `doc` Sɛ enni hɔ a, yɛ index a wɔadan no. Bere koro no ara mu no, yi index a wɔadan no ma saa nkrataa a wɔamfa ankɔ mu no.

Saa kwan yi so no, wobetumi anya indexing a ɛkɔ soro na wɔatew akontaabu dodow so.

Wɔ anim-awieɛ nkitahodiɛ mu no, wɔbɛtumi akyerɛ loading progress bar a ɛwɔ index no mu de akwati lag bere a loading nea ɛdi kan Hwɛ "Progress Bar with Animation, Based on a Single progress + Pure css Implementation" [Twi](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [Chinese](//juejin.cn/post/7413586285954154522) .

### IndexedDB a Ɛkorɔn Bere Koro Mu Nkyerɛwee

[idb](//www.npmjs.com/package/idb) adwuma no gyina asynchronous encapsulation a ɛwɔ IndexedDB

IndexedDB akenkan ne akyerɛw yɛ asynchronous. Sɛ woreyɛ index a, wɔde nkrataa bɛhyɛ bere koro mu de ayɛ index no.

Sɛnea ɛbɛyɛ a wobɛkwati data fã bi a ɛbɛyera a akansi akyerɛw de ba no, wubetumi ahwɛ `coffeescript` koodu a ɛwɔ ase ha no na wode `ing` cache aka akenkan ne akyerɛw ntam de asiw akyerɛw a akansi wom no ano.

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

## Pɛpɛɛpɛ Ne Nkae

Hwehwɛ no bedi kan akyekyɛ nsɛmfua atitiriw a nea ɔde di dwuma no de ahyɛ mu no mu.

Fa no sɛ nsɛmfua `N` na ɛwɔ asɛmfua nkyekyɛmu no akyi Sɛ woresan aba a, wɔbɛsan de aba a nsɛmfua titiriw nyinaa wom aba, na afei wɔbɛsan de aba a nsɛmfua titiriw `N-1` , `N-2` ,..., `1` wom aba.

Nhwehwɛmu aba a wɔda no adi kan hwɛ hu sɛ asɛmmisa no yɛ pɛpɛɛpɛ, na nea efi mu ba a wɔde ahyɛ mu akyiri yi (klik load more button no so) hwɛ hu sɛ nkae dodow no.

![](//p.3ti.site/1727684564.avif)

## Adesoa Bere a Wɔhwehwɛ

Sɛnea ɛbɛyɛ a mmuae ahoɔhare no bɛtu mpɔn no, hwehwɛ no de `yield` generator no di dwuma de di dwuma de fa on-demand loading di dwuma, na ɛsan ba bere `limit` a wobebisa nea ebefi mu aba no.

Hyɛ no nsow sɛ bere biara a wobɛsan ahwehwɛ bio wɔ `yield` akyi no , ɛsɛ sɛ wosan bue asɛmmisa asɛm a ɛyɛ `IndexedDB` .

## Prefix Bere Ankasa Mu Hwehwɛ

Sɛnea ɛbɛyɛ a wobɛda nea wɔhwehwɛ no adi bere a nea ɔde di dwuma no rekyerɛw, sɛ nhwɛso no, sɛ wɔde `wor` hyɛ mu a, wɔda nsɛmfua a wɔde `wor` ahyɛ anim te sɛ `words` ne `work` adi.

![](//p.3ti.site/1727684944.avif)

Hwehwɛ kernel no de `prefix` pon no bedi dwuma ama asɛmfua a etwa to wɔ nsɛmfua nkyekyɛmu akyi de ahwehwɛ nsɛmfua a wɔde ahyɛ no anim nyinaa, na ahwehwɛ nnidiso nnidiso.

Wɔde anti-shake function `debounce` nso di dwuma wɔ front-end nkitahodi mu (wɔde di dwuma sɛnea edidi so yi) de tew mpɛn dodow a ɔdefo no nsɛm a ɛkanyan nhwehwɛmu no so na ɛtew akontaabu dodow so.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Wobetumi Anya Bi Wɔ Offline

Index table no nkora mfitiase nkyerɛwee no so, nsɛmfua no nkutoo, na ɛtew dodow a wɔde sie no so.

Sɛ wobɛtwe adwene asi nhwehwɛmu aba so a, ɛhwehwɛ sɛ wosan de mfitiase nkyerɛwee no gu mu, na sɛ wode `service worker` a ɛne no hyia a, ebetumi akwati ntwamutam abisade mpɛn pii.

Bere koro no ara mu no, esiane sɛ `service worker` de nsɛm nyinaa sie nti, sɛ nea ɔde di dwuma no yɛ nhwehwɛmu bi pɛ a, wɛbsaet no nyinaa, a hwehwɛ no ka ho, wɔ hɔ wɔ intanɛt so.

## Kyerɛ MarkDown Nkrataa a Wɔayɛ No Yiye

`i18n.site` 's pure front-end search solution no yɛ nea wɔayɛ no yiye ama nkrataa `MarkDown` .

Sɛ worekyerɛ nea wɔhwehwɛ no a, ti no din bɛda adi na bere a woakliki no akɔ ti no mu.

![](//p.3ti.site/1727686552.avif)

## Bobɔ No Mua

Inverted full-text search a wɔde dii dwuma wɔ anim no nkutoo, ɛho nhia sɛ server biara. Ɛfata yie ma wɛbsaet nketewa ne akɛseɛ te sɛ nkrataa ne ankorankoro blog.

`i18n.site` Open source ankasa ayɛ pure front-end search, ketewa wɔ ne kɛseɛ mu na ɛyɛ ntɛm, di mprempren pure front-end full-text search no sintɔ ahodoɔ ho dwuma na ɛma osuahu a ɛyɛ papa a ɔde di dwuma.