---

brief: |
  i18n.site 现已支持无服务的全文搜索。

  本文介绍了纯前端全文搜索技术的实现，包括 IndexedDB 构建的倒排索引、前缀搜索、分词优化及多语言支持。

  相比现有的方案，i18n.site 的纯前端全文搜索体积小、速度快，适合文档和博客等中小型网站，且离线可用。

---

# 纯前端的倒排全文搜索

## 序

经过几周的开发，[i18n.site](//i18n.site)(纯静态的markdown多语言翻译&建站工具)现在支持纯前端全文搜索。

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

本文将分享`i18n.site`纯前端全文搜索的技术实现，访问[i18n.site](//i18n.site)可体验搜索效果。

代码开源 : [搜索内核](//github.com/i18n-site/ie/tree/main/qy) / [交互界面](//github.com/i18n-site/plugin/tree/main/qy)

## 无服务全文搜索解决方案综述

对应文档/个人博客等中小型纯静态网站而言，自建全文搜索后台太重，无服务全文搜索是更常见的选择。

无服务全文搜索解决方案分两大类:

其一，类似 [algolia.com](//algolia.com) 第三方搜索服务商，提供了全文搜索的前端组件。

此类服务需按搜索量付费，且常因网站合规性等问题，导致中国大陆用户无法使用。

无法离线使用，无法在内网使用，局限性很大。 本文不多做讨论。

其二，就是纯前端的全文搜索。

当下常见纯前端的全文搜索的有 [lunrjs](//lunrjs.com) 和 [ElasticLunr.js](//github.com/weixsong/elasticlunr.js)(基于`lunrjs`二次开发)。

`lunrjs`有两种索引构建方式，又都有各自的问题。

1. 预构建索引文件

   因为索引包含了所有文档的词，体积大。
   每当文档有增改，都要加载新的索引文件。
   会增加用户的等待时间，并消耗大量带宽。

2. 加载文档并实时构建索引

   构建索引是计算密集型任务，每次访问都重新构建索引会有明显的卡顿，用户体验差。

---

除了`lunrjs`之外，还有一些其他的全文搜索方案，比如:

[fusejs](//www.fusejs.io)，计算字符串之间的相似度来搜索。

此方案性能极差，无法用于全文搜索(参见 [Fuse.js 长查询耗时超过10秒，如何优化？](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries))。

[TinySearch](//github.com/tinysearch/tinysearch)，使用布隆过滤器来搜索，无法用于前缀搜索(比如输入`goo`，搜索`good`、`google`)，无法实现类似自动补全效果。

因为现有方案各自的弊端，`i18n.site`自研了全新纯前端全文搜索方案，具有以下特色:

1. 支持多语言搜索，体积小，搜索内核打包`gzip`后体积为`6.9KB`(作为对比，`lunrjs`体积为`25KB`)
1. 基于`indexedb`构建倒排索引，内存占用少，速度快
1. 当文档有新增/改动的时候，只对增改的文档重新索引，减少了计算量
1. 支持前缀搜索，可以在用户输入的同时实时展示搜索结果
1. 离线可用

下面，将详细介绍`i18n.site`技术实现细节。

## 多语言分词

分词采用浏览器原生的分词`Intl.Segmenter`，主流浏览器都支持此接口。

![](//p.3ti.site/1727667759.avif)

分词`coffeescript`代码如下

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

其中:

* `/\p{P}/`是匹配标点符号的正则表达式，具体匹配的符号包括：`! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _`{ | } ~ 。`。
* `split('.')`是因为`Firefox`浏览器分词不切分`. `。


## 索引构建

`IndexedDB`中创建了5 个对象存储表 :

* `word`: id - 词
* `doc`: id - 文档url - 文档版本号
* `docWord`: 文档id - 词id的数组
* `prefix`: 前缀 - 词id的数组
* `rindex`: 词id - 文档id : 行号的数组

传入文档的`url`和版本号`ver`的数组，在`doc`表中查找文档是否存在，如果不存在，则创建倒排索引。同时，移除那些未传入文档的倒排索引。

如此就可以实现增量索引，降低了计算量。

前端交互上，可以显示索引的加载进度条避免首次加载时的卡顿感，参见《带动画的进度条，基于单个 progress + 纯css实现》[英文](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [中文](//juejin.cn/post/7413586285954154522)。

### IndexedDB 高并发写入

项目基于 IndexedDB 的异步封装 [idb](//www.npmjs.com/package/idb) 开发。

IndexedDB 读取和写入都是异步的。而创建索引的时候会并发地加载文档创建索引。

为了避免竞争性写入导致部分数据丢失，可以参考下面的`coffeescript`代码，在读写之间加一个`ing`缓存拦截竞争性写入。

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

## 准确率和查全率

搜索会先将用户输入的关键词进行分词。

假设有分词之后有`N`个词，返回结果的时候，会先返回包含所有关键词的结果，然后再返回包含`N-1`、`N-2`、… 、`1`个关键词的结果。

优先展示的搜索结果保证了查询的准确率，后续加载的结果(点击加载更多按钮)保证了查全率。

![](//p.3ti.site/1727684564.avif)

## 按需加载

为了提高响应速度，搜索借助`yield`生成器实现了按需加载的方式，每查询到`limit`个结果就返回一次。

注意，每次`yield`之后再次搜索时，需要重新打开一个`IndexedDB`的查询事务。

## 前缀实时搜索

为了实现用户输入的同时展示搜索结果，比如输入`wor`的时候，展示`words`和`work`等以`wor`为前缀的单词。

![](//p.3ti.site/1727684944.avif)

搜索内核会对分词后的最后一个词借助`prefix`表，找到所有以它为前缀的词，依次搜索。

前端交互中还采用了防抖函数`debounce`(实现如下)，降低用户输入触发搜索的频率减少计算量。

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## 离线可用

索引表没有存储原文，只存储词，减少了存储量。

搜索结果高亮需要重新加载原文，配合`service worker`即可避免重复的网络请求。

同时，因为`service worker`会缓存所有文章，所以用户一旦进行过搜索，整个网站包含搜索在内都离线可用。

## 对 MarkDown 文档的显示优化

`i18n.site`的纯前端搜索解决方案针对`MarkDown`文档做了优化。

展示显示搜索结果时，会显示章节名称，并在点击时定位到该章节。

![](//p.3ti.site/1727686552.avif)

## 总结

纯前端实现的倒排全文搜索，无需服务器。非常适合文档、个人博客等中小型网站。

`i18n.site`开源的自研纯前端搜索，体积小，响应快，解决了当前纯前端全文搜索的种种弊端，提供了更好的用户体验。
