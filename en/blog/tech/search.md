# Pure Front-End Inverted Full-Text Search

## 序言

After several weeks of development, [i18n.site](//i18n.site) (a purely static markdown multilingual translation & website building tool) now supports pure front-end full-text search.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

This article will share the implementation details of `i18n.site`'s pure front-end full-text search technology. Visit [i18n.site](//i18n.site) to experience the search effect.

Code open source [search kernel](//github.com/i18n-site/ie/tree/main/qy) / [Interactive interface](//github.com/i18n-site/plugin/tree/main/qy)

## An Overview of Serverless Full-Text Search Solutions

For small websites such as documents/personal blogs that are purely static, it is undoubtedly too cumbersome to build a full-text search backend by oneself, and serverless full-text search is undoubtedly a better choice.

Existing serverless full-text search solutions can be divided into two main categories.

One is a third-party search service provider similar to [algolia.com](//algolia.com), which provides front-end full-text search components.

Such services require payment and are not available to users in mainland China due to website compliance issues.

It cannot be used offline or on the intranet, and has significant limitations. This article does not discuss this in detail.

The second is pure front-end full-text search.

The more well-known pure front-end full-text search methods include [lunrjs](https://lunrjs.com) and [ElasticLunr.js][https://github.com/weixsong/elasticlunr.js](基于`lunrjs`二次开发).

`lunrjs` has two index-building methods, but both have their own problems.

1. Pre-building index files

   Because the index contains words from all documents, it has a large volume.
   Whenever a document is added or modified, a new index file needs to be loaded.
   This will increase the user's waiting time and consume a large amount of bandwidth.

2. Loading documents and building indexes on the fly

   Building an index is a computationally intensive task. Rebuilding the index every time it is accessed will cause obvious lags and a poor user experience.

In addition to `lunrjs`, there are some other full-text search solutions, such as:

[fusejs](https://www.fusejs.io), which calculates the similarity between strings for searching.

The performance of this solution is extremely poor and cannot be used for full-text search (see [Fuse.js Long query takes more than 10 seconds, how to optimize?](https://stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries)).

[TinySearch](https://github.com/tinysearch/tinysearch), which uses a Bloom filter for searching, cannot be used for prefix search (for example, entering `goo`, searching for `good`, `google`), and cannot achieve a similar automatic completion effect.

Due to dissatisfaction with the shortcomings of existing solutions, `i18n.site` has developed a new pure front-end full-text search solution with the following characteristics:

1. Supports multi-language search and has a small volume. The size of the search kernel after packaging with `gzip` is `6.9KB` (for comparison, the size of `lunrjs` is `25KB`)
1. Builds an inverted index based on `indexedb`, which has less memory usage and is fast
1. When documents are added/modified, only the added or modified documents are re-indexed, reducing the amount of calculations
1. Supports prefix search and can display search results in real time while the user is typing
1. Available offline

Below, the technical implementation details of `i18n.site` will be introduced in detail.

## Multilingual word segmentation

Word segmentation uses the browser's native word segmentation `Intl.Segmenter`, and all mainstream browsers support this interface.

![](https://p.3ti.site/1727667759.avif)

The word segmentation `coffeescript` code is as follows:

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

in which:

* `/\p{P}/` is a regular expression pattern used to match punctuation marks. The specific symbols it matches include: `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _ ` { | } ~. `.</p><ul><li> `split('.')` is because `Firefox` browser word segmentation does not segment `.` .</li>


## Index Construction

An `IndexedDB` database contains 5 object storage tables:

* `word` : id - word
* `doc` : id - Document URL - Document version number
* `docWord` : Array of document id - word id
* `prefix` : Array of prefix - word id
* `rindex` : Word id - Document id : Array of line numbers

An array of document `url` and version number `ver` is passed in. The system searches for the document in the `doc` table. If the document does not exist, an inverted index is created. Concurrently, any inverted index for documents not included in the input is removed.

By doing so, incremental indexing is achieved, which in turn reduces the computational load.

In terms of front-end interaction, a progress bar indicating the loading of the index can be displayed to prevent lag during the initial load. Refer to "Progress Bar with Animation, Based on a Single progress + Pure css Implementation" [English](https://dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [Chinese](https://juejin.cn/post/7413586285954154522).

### High Concurrency Writing in IndexedDB

The project is developed using the asynchronous encapsulation of IndexedDB, based on the [idb](https://www.npmjs.com/package/idb) library.

IndexedDB operations, both reads and writes, are asynchronous. During index creation, documents are loaded concurrently to build the index.

In order to avoid partial data loss caused by competitive writing, one can refer to the following `coffeescript` code and add a `ing` cache between reading and writing to intercept competing writes.

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

## Prefix Real-Time Search

To achieve the display of search results while the user is inputting, for instance, when ` Wor` is entered, words like `words` and `work` prefixed with ` Wor` are shown.

![](https://p.3ti.site/1727684944.avif)

The search kernel will utilize the `prefix` table for the last word after word segmentation to find all words prefixed with it, and conduct searches sequentially.

The anti-shake function `debounce` is also employed in the front-end interaction (implemented as follows) to reduce the frequency of user input-triggered searches and the amount of computation.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Precision and Recall

The search will first perform word segmentation on the keywords entered by the user.

Suppose there are `N` words after word segmentation. When returning results, the results containing all the keywords will be returned first, and then the results containing `N-1`, `N-2`,..., `1` keyword will be returned.

The initially displayed search results ensure the accuracy of the query, and the subsequent loaded results (by clicking the load more button) ensure the recall rate.

![](https://p.3ti.site/1727684564.avif)

## Load on Demand

In order to enhance the response speed, the search employs the `yield` generator to implement on-demand loading, and returns once for every `limit` result queried.

Note that each time after `yield` and when searching again, a query transaction of `IndexedDB` needs to be reopened.

## Prefix Real-Time Search

To realize the display of search results while the user is inputting, for example, when ` Wor` is entered, words such as `words` and `work` prefixed with ` Wor` are displayed.

![](https://p.3ti.site/1727684944.avif)

The search kernel will make use of the `prefix` table for the last word after word segmentation to find all words prefixed with it, and search in sequence.

The anti-shake function `debounce` is also adopted in the front-end interaction (implemented as follows) to reduce the frequency of user input-triggered searches and the computational amount.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Available Offline

The index table does not store the original text but only the words, reducing the storage amount.

Highlighting the search results requires reloading the original text, and coordinating with `service worker` can avoid repeated network requests.

At the same time, because `service worker` caches all articles, once the user conducts a search, the entire website, including the search, is available offline.

## Display Optimization of MarkDown Documents

The pure front-end search solution of `i18n.site` is optimized for `MarkDown` documents.

When presenting the display of search results, the chapter name will be shown and it will be navigated to when clicked.

![](https://p.3ti.site/1727686552.avif)

## Summarize

An inverted full-text search implemented purely on the front end, with a fast response and no need for a server.

It is highly suitable for small and medium-sized websites such as documents and personal blogs.