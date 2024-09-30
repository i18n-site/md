# Huli Kikokikona Piha Mua-Hope Maʻemaʻe

## Kaʻina

Ma hope o kekahi mau pule & ka hoʻomohala ʻana, kākoʻo markdown [i18n.site](//i18n.site)

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

E kaʻana [i18n.site](//i18n.site) kēia ʻatikala i ka hoʻokō ʻana i `i18n.site` ʻenehana hulina mua-hopena.

[Hoʻokaʻawale](//github.com/i18n-site/plugin/tree/main/qy) ʻia ke kumu [hulina kernel](//github.com/i18n-site/ie/tree/main/qy) /

## He Hiʻohiʻona O Nā Hāʻina Huli Kikokikona ʻole Serverless

No nā pūnaewele liʻiliʻi e like me nā palapala / moʻomanaʻo pilikino maʻemaʻe, ʻaʻohe mea kānalua ke kūkulu ʻana i kahi hulina holoʻokoʻa piha ma hope o ʻoe iho, a ʻo ka ʻimi kikokikona piha me ka ʻole o nā lawelawe he mea ʻoi aku ka maikaʻi.

Loaʻa nā hāʻina hulina kikokikona ʻole server i loko o ʻelua mau ʻāpana ākea.

ʻO kekahi he mea lawelawe ʻimi ʻaoʻao ʻekolu e like me [algolia.com](//algolia.com) e hāʻawi ana i nā mea huli kikokikona piha mua.

Pono ia mau lawelawe i ka uku a ʻaʻole i loaʻa i nā mea hoʻohana ma ka ʻāina nui o Kina ma muli o nā pilikia hoʻokō pūnaewele.

ʻAʻole hiki ke hoʻohana ʻia ma waho, ʻaʻole hiki ke hoʻohana ʻia ma ka intranet, a he nui nā palena. ʻAʻole kūkākūkā nui kēia ʻatikala.

ʻO ka lua, ʻo ia ka ʻimi kikokikona piha mua.

ʻO nā ʻimi kikokikona piha mua maʻemaʻe ʻoi aku ka maikaʻi [https://github.com/weixsong/elasticlunr.js](%E5%9F%BA%E4%BA%8E%60lunrjs%60%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91) pili ana i ElasticLunr.js [lunrjs](https://lunrjs.com)

`lunrjs` ʻElua mau ala e kūkulu ai i nā kuhikuhi, akā loaʻa iā lāua nā pilikia ponoʻī.

1. Nā waihona kuhikuhi i kūkulu mua ʻia

   No ka mea aia i loko o ka papa kuhikuhi nā huaʻōlelo mai nā palapala a pau, ua nui ka nui.
   Ke hoʻohui ʻia a hoʻololi ʻia paha kahi palapala, pono e hoʻouka ʻia kahi faila kuhikuhi hou.
   E hoʻonui ia i ka manawa kali o ka mea hoʻohana a hoʻopau i ka nui o ka bandwidth.

2. Hoʻouka i nā palapala a kūkulu i nā kuhikuhi ma ka lele

   ʻO ke kūkulu ʻana i kahi papa kuhikuhi he hana koʻikoʻi ka helu ʻana ʻo ke kūkulu hou ʻana i ka ʻōlelo kuhikuhi i kēlā me kēia manawa āu e komo ai e hōʻike ʻia nā lag a me ka maikaʻi ʻole o ka mea hoʻohana.

Ma waho aʻe o `lunrjs` , aia kekahi mau ʻōlelo hoʻoponopono ʻimi kikokikona piha, e like me :

[fusejs](https://www.fusejs.io) , e helu i ka like ana o na kaula e huli ai.

ʻAʻole hiki ke hoʻohana ʻia no ka huli kikokikona piha (e ʻike [Fuse.js ʻOi aku ka lōʻihi o ka huli ʻana ma mua o 10 kekona, pehea e hoʻonui ai?](https://stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries) ).

[TinySearch](https://github.com/tinysearch/tinysearch) , hoʻohana i ka kānana Bloom no ka huli ʻana, ʻaʻole hiki ke hoʻohana ʻia no ka ʻimi prefix (no ka laʻana, hoʻokomo i `goo` , huli `good` , `google` ), a ʻaʻole hiki ke loaʻa i ka hopena hoʻopau ʻakomi like.

Ma muli o ka ʻoluʻolu ʻole i nā hemahema o nā hāʻina i loaʻa, ua hoʻomohala ʻo `i18n.site` i kahi hoʻonā ʻimi huaʻōlelo piha mua maʻemaʻe, nona nā hiʻohiʻona aʻe :

1. Kākoʻo i ka ʻimi ʻōlelo lehulehu a liʻiliʻi ka nui ʻO ka nui o ka pahu huli ma hope o ka hoʻopili ʻana `gzip` he `6.9KB` (no ka hoʻohālikelike ʻana, ʻo ka nui o `lunrjs` he `25KB` ).
1. E kūkulu i ka papa kuhikuhi inverted e pili ana i `indexedb` , ka mea e emi iho ka hoʻomanaʻo a me ka wikiwiki.
1. Ke hoʻohui ʻia a hoʻololi ʻia nā palapala, ʻo nā palapala i hoʻohui ʻia a i hoʻololi ʻia wale nō ke kuhikuhi hou ʻia, e hōʻemi ana i ka nui o nā helu.
1. Kākoʻo i ka ʻimi prefix, hiki ke hōʻike i nā hualoaʻa i ka manawa maoli i ka wā e paʻi ana ka mea hoʻohana.
1. Loaʻa ma waho

Ma lalo iho nei, e hōʻike ʻia nā kikoʻī hoʻokō ʻenehana `i18n.site` .

## Ka Māhele ʻōlelo ʻōlelo ʻōlelo

Hoʻohana ka ʻāpana huaʻōlelo i ka māhele huaʻōlelo ʻōiwi o ka polokalamu kele pūnaewele `Intl.Segmenter` , a kākoʻo nā mākaʻikaʻi koʻikoʻi āpau i kēia interface.

![](https://p.3ti.site/1727667759.avif)

Penei ke code segmentation `coffeescript`

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

i:

* He ʻōlelo maʻamau `/\p{P}/` e pili ana i nā kaha `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _ ` { | } ~. `.</p><ul><li> `split('.')` no ka mea ʻaʻole ʻo ka ʻāpana huaʻōlelo ʻo `Firefox` ka māhele `.` .</li>


## Hale Kuhikuhi

Ua hana ʻia he 5 mau papa waihona mea ma `IndexedDB` :

* `word` : id -
* `doc` : id - url -
* `docWord` : id - id
* `prefix` : - id
* `rindex` : Huaolelo id - Palapala id : Laina helu laina

E hoʻokomo i ka pūʻulu o ka palapala `url` a me ka helu helu `ver` , a e ʻimi inā aia ka palapala ma ka pākaukau `doc` Inā ʻaʻole i loaʻa, e hana i kahi kuhikuhi kuhikuhi. I ka manawa like, e wehe i ka kuhikuhi kuhikuhi no kēlā mau palapala i hoʻokomo ʻole ʻia.

Ma kēia ala, hiki ke hoʻokō ʻia ka helu helu hoʻonui a hoʻemi ʻia ka nui o ka helu ʻana.

Ma ka pilina mua, hiki ke hōʻike ʻia ka papa kuhikuhi hoʻouka holomua e pale aku i ka lag i ka wā e hoʻouka ai no ka manawa mua e ʻike i ka "Progress Bar with Animation, Based on a Single progress + Pure css Implementation" [English](https://dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [Chinese](https://juejin.cn/post/7413586285954154522) .

### IndexedDB Kākau Hoʻokahi Kiʻekiʻe

[idb](https://www.npmjs.com/package/idb) ka papahana ma muli o ka encapsulation asynchronous o IndexedDB

He asynchronous ka heluhelu a kākau ʻana o IndexedDB. I ka hana ʻana i kahi papa kuhikuhi, e hoʻouka ʻia nā palapala i ka manawa like e hana i ka index.

I mea e pale aku ai i ka nalo ʻana o ka ʻikepili ma muli o ke kākau hoʻokūkū, hiki iā ʻoe ke nānā i ke code `coffeescript` ma lalo nei a hoʻohui i kahi huna `ing` ma waena o ka heluhelu ʻana a me ke kākau ʻana e hoʻopaʻa i nā kākau hoʻokūkū.

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

## Prefix Huli Manawa Maoli

I mea e hōʻike ai i nā hualoaʻa i ka wā e paʻi ana ka mea hoʻohana, no ka laʻana, ke hoʻokomo ʻia `wor` , hōʻike ʻia nā huaʻōlelo i kau mua ʻia me `wor` e like me `words` a me `work` .

![](https://p.3ti.site/1727684944.avif)

E hoʻohana ka kernel huli i ka papa `prefix` no ka huaʻōlelo hope ma hope o ka ʻāpana huaʻōlelo e ʻimi i nā huaʻōlelo a pau i kau mua ʻia me ia, a huli ma ke kaʻina.

Hoʻohana pū ʻia ka hana anti-shake `debounce` i ka pilina mua (hoʻokō ʻia e like me kēia) e hōʻemi i ke alapine o ka hoʻokomo ʻana o ka mea hoʻohana i nā hulina a hoʻemi i ka nui o ka helu.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Ka Pololei a Me Ka Hoʻomanaʻo

E hoʻokaʻawale mua ka ʻimi i nā huaʻōlelo i hoʻokomo ʻia e ka mea hoʻohana.

Manaʻo ʻia he `N` mau huaʻōlelo ma hope o ka ʻāpana huaʻōlelo Ke hoʻihoʻi ʻia nā hualoaʻa, e hoʻihoʻi mua ʻia nā hopena i loaʻa nā huaʻōlelo āpau, a laila e hoʻihoʻi ʻia nā huaʻōlelo i loaʻa nā huaʻōlelo `N-1` , `N-2` ,..., `1` .

ʻO nā hualoaʻa i hōʻike mua ʻia e hōʻoia i ka pololei o ka nīnau, a ua hoʻouka ʻia nā hopena ma hope (e kaomi i ke pihi hoʻouka hou aku) e hōʻoia i ka helu hoʻomanaʻo.

![](https://p.3ti.site/1727684564.avif)

## Hoʻouka Ma Ke Koi

I mea e hoʻomaikaʻi ai i ka wikiwiki o ka pane, hoʻohana ka ʻimi i ka generator `yield` e hoʻokō i ka hoʻouka ʻana ma ke koi, a hoʻi mai `limit` manawa i nīnau ʻia kahi hopena.

E hoʻomanaʻo i kēlā me kēia manawa āu e ʻimi hou ai ma hope o `yield` , pono ʻoe e wehe hou i kahi nīnau nīnau o `IndexedDB` .

## Prefix Huli Manawa Maoli

I mea e hōʻike ai i nā hualoaʻa i ka wā e paʻi ana ka mea hoʻohana, no ka laʻana, ke hoʻokomo ʻia `wor` , hōʻike ʻia nā huaʻōlelo i kau mua ʻia me `wor` e like me `words` a me `work` .

![](https://p.3ti.site/1727684944.avif)

E hoʻohana ka kernel huli i ka papa `prefix` no ka huaʻōlelo hope ma hope o ka ʻāpana huaʻōlelo e ʻimi i nā huaʻōlelo a pau i kau mua ʻia me ia, a huli ma ke kaʻina.

Hoʻohana pū ʻia ka hana anti-shake `debounce` i ka pilina mua (hoʻokō ʻia e like me kēia) e hōʻemi i ke alapine o ka hoʻokomo ʻana o ka mea hoʻohana i nā hulina a hoʻemi i ka nui o ka helu.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Loaʻa Ma Waho

ʻAʻole mālama ka papa kuhikuhi i ka kikokikona kumu, nā huaʻōlelo wale nō, e hōʻemi ana i ka nui o ka waiho ʻana.

ʻO ka hōʻike ʻana i nā hualoaʻa e pono ai ka hoʻouka hou ʻana i ka kikokikona kumu, a hiki i ka hoʻohālikelike ʻana i `service worker` ke pale aku i nā noi pūnaewele.

I ka manawa like, no ka mea e hūnā ʻo `service worker` i nā ʻatikala a pau, i ka manawa e hana ai ka mea hoʻohana i kahi hulina, loaʻa ka pūnaewele holoʻokoʻa, me ka huli ʻana, ma waho o ka pūnaewele.

## Hōʻike I Ka Loiloi O Nā Palapala MarkDown

ʻO ka hoʻonā ʻimi mua-hope maʻemaʻe o `i18n.site` i hoʻopaʻa ʻia no nā palapala `MarkDown` .

Ke hōʻike ʻia nā hopena hulina, e hōʻike ʻia ka inoa mokuna a e hoʻokele ʻia ka mokuna ke kaomi ʻia.

![](https://p.3ti.site/1727686552.avif)

## Hōʻuluʻulu

Hoʻokomo ʻia ka ʻimi kikokikona piha i hoʻohuli ʻia ma ka ʻaoʻao mua, me ka pane wikiwiki a ʻaʻohe pono no kahi kikowaena.

He kūpono loa ia no nā pūnaewele liʻiliʻi a me ka liʻiliʻi e like me nā palapala a me nā blog pilikino.