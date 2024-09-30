# 纯前端的倒排全文搜索

## 序

经过几周的开发，[i18n.site](//i18n.site)(纯静态的markdown多语言翻译&建站工具)现在支持纯前端全文搜索。

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

本文将分享`i18n.site`纯前端全文搜索技术实现，访问[i18n.site](//i18n.site)可体验搜索效果。

代码开源 [搜索内核](//github.com/i18n-site/ie/tree/main/qy) / [交互界面](//github.com/i18n-site/plugin/tree/main/qy)

## 无服务全文搜索解决方案综述

对应文档/个人博客等小型网站纯静态而言，自己搭建全文搜索后台无疑太重，无服务的全文搜索无疑是更好的权重。

现有的无服务全文搜索解决方案分两大类。

其一，是类似 [algolia.com](https://algolia.com) 的第三方搜索服务商，提供了前端全文搜索的组件。

但是此类服务需付费，并且因为网络的问题，中国大陆用户无法使用，这里就不多做讨论。

其二，是纯前端的全文搜索。

比较知名纯前端的全文搜索的有 [lunrjs](https://lunrjs.com) 和 [ElasticLunr.js][https://github.com/weixsong/elasticlunr.js](基于`lunrjs`二次开发)。

`lunrjs` 有两种索引构建方式，但是又都有各自的问题。

1. 预构建索引文件

   因为索引包含了所有文档的词，体积大。
   每当文档有增改，都要加载新的索引文件。
   会增加用户的等待时间，并消耗大量带宽。

2. 加载文档并实时构建索引

   构建索引是计算密集型任务，每次访问都重新构建索引会有明显的卡顿，用户体验差。

除了 `lunrjs` 之外，还有一些其他的全文搜索方案，比如:

[fusejs](https://www.fusejs.io)，计算字符串之间的相似度来搜索。

此方案性能极差，无法用于全文搜索(参见 [Fuse.js 长查询耗时超过10秒，如何优化？](https://stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries))。

[TinySearch](https://github.com/tinysearch/tinysearch)，使用布隆过滤器来搜索，无法用于前缀搜索(比如输入`goo`，搜索`good`、`google`)，无法实现类似自动补全效果。

出于对现有方案弊端的不满， `i18n.site` 自研了全新纯前端全文搜索方案，具有以下特色:

1. 支持多语言搜索，体积小，搜索内核打包`gzip`后体积为`6.9KB` (作为对比，`lunrjs` 体积为 `25KB`)
1. 基于 `indexedb` 构建倒排索引，内存占用少，速度快
1. 增量索引，当文档有新增/改动的时候，只对增改的文档重新索引，减少了计算量
1. 支持前缀搜索，可以在用户输入的同时实时展示搜索结果

下面，将详细介绍 `i18n.site` 技术实现细节。

## 多语言分词

分词采用浏览器原生的分词 `Intl.Segmenter`，主流浏览器都支持此接口。

![](https://p.3ti.site/1727667759.avif)

分词`coffeescript`代码如下

```coffee
SEG = new Intl.Segmenter 0, granularity: "word"

seg = (txt) =>
  r = []
  for i from SEG.segment(txt)
    i = i.segment.trim()
    if i and !'|`'.includes(i) and !/\p{P}/u.test(i)
      r.push i
  r

export default seg

export segqy = (q) =>
  seg q.toLocaleLowerCase()
```

其中 `/\p{P}/` 是匹配标点符号的正则表达式，具体匹配的符号包括：`! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _ ` { | } ~ 。`。

## 索引构建




文件索引

重新加载

实时索引

速度


indexedb


## 代码库

## 分词

## 倒排索引

### process 进度条

## 前缀搜索

## 按需加载搜索结果

### 全匹配

### 部分匹配

## IndexedDB 高并发写入

