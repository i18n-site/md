# 1	纯前端的倒排全文搜索

## Sıra

2	经过几周的开发，[i18n.site](//i18n.site)(纯静态的markdown多语言翻译&建站工具)现在支持纯前端全文搜索。

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Bu makale, `i18n.site` adresindeki saf ön uç tam metin arama teknolojisinin uygulamasını paylaşacaktır; [i18n.site](//i18n.site) adresini ziyaret ederek arama efekti deneyebilirsiniz.

Kod açık kaynaklıdır: [Arama Çekirdeği](//github.com/i18n-site/ie/tree/main/qy) / [İnteraktif Arayüz](//github.com/i18n-site/plugin/tree/main/qy)

## 5	无服务全文搜索解决方案综述

Belgeler/kişisel bloglar gibi küçük ve orta ölçekli tamamen statik web siteleri için, kendi kendine oluşturulmuş bir tam metin arama arka ucu oluşturmak çok ağırdır ve hizmet gerektirmeyen tam metin araması daha yaygın bir seçimdir.

Sunucusuz tam metin arama çözümleri iki ana gruba ayrılır:

Birincisi, [algolia.com](//algolia.com) gibi üçüncü taraf arama hizmet sağlayıcılarıdır, bu sağlayıcılar tam metin araması için ön uç bileşenleri sunar.

Bu tür hizmetler, arama hacmine göre ücretlendirilir ve web sitesi uyumluluk gibi nedenlerle Çin anakarasındaki kullanıcılar tarafından genellikle kullanılamaz.

10	无法离线使用，无法在内网使用，局限性很大。 本文不多做讨论。

Ikincisi, saf ön uç tam metin aramasıdır.

Yaygın olarak kullanılan saf ön uç tam metin aramaları arasında [lunrjs](https://lunrjs.com) ve [ElasticLunr.js][https://github.com/weixsong/elasticlunr.js](基于`lunrjs`二次开发) bulunur.

`lunrjs`, iki farklı dizin oluşturma yöntemine sahiptir ve her ikisinin de kendi sorunları vardır.

1. 14	预构建索引文件

   15	因为索引包含了所有文档的词，体积大。
   16	每当文档有增改，都要加载新的索引文件。
   17	会增加用户的等待时间，并消耗大量带宽。

2. 18	加载文档并实时构建索引

   19	构建索引是计算密集型任务，每次访问都重新构建索引会有明显的卡顿，用户体验差。

---

20	除了 `lunrjs` 之外，还有一些其他的全文搜索方案，比如:

21	[fusejs](https://www.fusejs.io)，计算字符串之间的相似度来搜索。

22	此方案性能极差，无法用于全文搜索(参见 [Fuse.js 长查询耗时超过10秒，如何优化？](https://stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries))。

23	[TinySearch](https://github.com/tinysearch/tinysearch)，使用布隆过滤器来搜索，无法用于前缀搜索(比如输入`goo`，搜索`good`、`google`)，无法实现类似自动补全效果。

Mevcut çözümlerin dezavantajları nedeniyle `i18n.site`, aşağıdaki özelliklere sahip yeni bir saf ön uç tam metin arama çözümü geliştirmiştir:

1. 25	支持多语言搜索，体积小，搜索内核打包`gzip`后体积为`6.9KB` (作为对比，`lunrjs` 体积为 `25KB`)
1. 26	基于 `indexedb` 构建倒排索引，内存占用少，速度快
1. 27	当文档有新增/改动的时候，只对增改的文档重新索引，减少了计算量
1. 28	支持前缀搜索，可以在用户输入的同时实时展示搜索结果
1. 66	离线可用

30	下面，将详细介绍 `i18n.site` 技术实现细节。

## 31	多语言分词

32	分词采用浏览器原生的分词 `Intl.Segmenter`，主流浏览器都支持此接口。

![](https://p.3ti.site/1727667759.avif)

33	分词`coffeescript`代码如下

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

34	其中:

* 35	`/\p{P}/` 是匹配标点符号的正则表达式，具体匹配的符号包括:`! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _ ` { | } . '.</p><ul><li> `split('.')` `Firefox` tarayıcı sözcüğü bölümlemesinin `.` bölümlememesidir.</li>


## 37	索引构建

38	`IndexedDB` 中创建了5 个对象存储表 :

* 39	`word` : id - 词
* 40	`doc`: id - 文档url - 文档版本号
* 41	`docWord` : 文档id - 词id的数组
* 42	`prefix` : 前缀 - 词id的数组
* 43	`rindex` : 词id - 文档id : 行号的数组

44	传入文档的`url`和版本号`ver`的数组，在`doc`表中查找文档是否存在，如果不存在，则创建倒排索引。同时，移除那些未传入文档的倒排索引。

45	如此就可以实现增量索引，降低了计算量。

46	前端交互上，可以显示索引的加载进度条避免首次加载时的卡顿感，参见《带动画的进度条，基于单个 progress + 纯css实现》[英文](https://dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [中文](https://juejin.cn/post/7413586285954154522)。

### 47	IndexedDB 高并发写入

48	项目基于 IndexedDB 的异步封装 [idb](https://www.npmjs.com/package/idb) 开发。

49	IndexedDB 读取和写入都是异步的。而创建索引的时候会并发地加载文档创建索引。

50	为了避免竞争性写入导致部分数据丢失，可以参考下面的`coffeescript`代码，在读写之间加一个`ing`缓存拦截竞争性写入。

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

## 62	前缀实时搜索

63	为了实现用户输入的同时展示搜索结果，比如输入 `wor` 的时候，展示 `words` 和 `work` 等以 `wor` 为前缀的单词。

![](https://p.3ti.site/1727684944.avif)

64	搜索内核会对分词后的最后一个词借助`prefix`表，找到所有以它为前缀的词，依次搜索。

65	前端交互中还采用了防抖函数 `debounce`(实现如下)，降低用户输入触发搜索的频率减少计算量。

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## 55	准确率和查全率

56	搜索会先将用户输入的关键词进行分词。

57	假设有分词之后有`N`个词，返回结果的时候，会先返回包含所有关键词的结果，然后再返回包含 `N-1`、`N-2`、… 、`1` 个关键词的结果。

58	优先展示的搜索结果保证了查询的准确率，后续加载的结果(点击加载更多按钮)保证了查全率。

![](https://p.3ti.site/1727684564.avif)

## 59	按需加载

60	为了提高响应速度，搜索借助`yield`生成器实现了按需加载的方式，每查询到`limit`个结果就返回一次。

61	注意，每次 `yield` 之后再次搜索时，需要重新打开一个 `IndexedDB` 的查询事务。

## 62	前缀实时搜索

63	为了实现用户输入的同时展示搜索结果，比如输入 `wor` 的时候，展示 `words` 和 `work` 等以 `wor` 为前缀的单词。

![](https://p.3ti.site/1727684944.avif)

64	搜索内核会对分词后的最后一个词借助`prefix`表，找到所有以它为前缀的词，依次搜索。

65	前端交互中还采用了防抖函数 `debounce`(实现如下)，降低用户输入触发搜索的频率减少计算量。

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## 66	离线可用

67	索引表没有存储原文，只存储词，减少了存储量。

68	搜索结果高亮需要重新加载原文，配合`service worker`即可避免重复的网络请求。

69	同时，因为`service worker`会缓存所有文章，所以用户一旦进行过搜索，整个网站包含搜索在内都离线可用。

## 70	对 MarkDown 文档的显示优化

71	`i18n.site` 的纯前端搜索解决方案针对 `MarkDown` 文档做了优化。

72	展示显示搜索结果时，会显示章节名称，并在点击时定位到该章节。

![](https://p.3ti.site/1727686552.avif)

## 73	总结

Pure front-end gerçekleştirilmiş tersine çevrilmiş tam metin araması, sunucuya ihtiyaç duymaz. Dokümanlar ve kişisel bloglar gibi orta ve küçük ölçekli web siteleri için非常适合tir.

`i18n.site` tarafından geliştirilen açık kaynaklı saf ön uç arama, küçük boyutlu ve hızlı yanıt süreleriyle mevcut saf ön uç tam metin arama çözümlerinin eksikliklerini gidermiş ve daha iyi bir kullanıcı deneyimi sunmuştur.