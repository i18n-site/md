---

brief: |
  i18n.site now supports serverless full-text search.

  This article presents the implementation of pure front-end full-text search technology, encompassing the inverted index constructed by IndexedDB, prefix search, word segmentation optimization, and multi-language support.

  In comparison with existing solutions, the pure front-end full-text search of i18n.site is small in size and fast, being suitable for small and medium-sized websites such as documents and blogs, and is available offline.

---

# Pure Front-End Inverted Full-Text Search

## Sequence

After several weeks of development, [i18n.site](//i18n.site) (a purely static markdown multilingual translation & website building tool) now supports pure front-end full-text search.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

This article will share the technical implementation of `i18n.site`'s pure front-end full-text search. Visit [i18n.site](//i18n.site) to experience the search effect.

Code open source: [Search kernel](//github.com/i18n-site/ie/tree/main/qy) / [Interactive interface](//github.com/i18n-site/plugin/tree/main/qy)

## A Review of Serverless Full-Text Search Solutions

For small and medium-sized purely static websites such as documents/personal blogs, building a self-built full-text search backend is too cumbersome, and serverless full-text search is a more common choice.

Serverless full-text search solutions can be divided into two broad categories:

Firstly, similar to [algolia.com](//algolia.com) third-party search service providers, which provide front-end components for full-text search.

Such services require payment according to the search volume, and are often unavailable to users in mainland China due to issues such as website compliance.

It cannot be used offline or on the intranet, and has great limitations. This article does not discuss it much.

The second is pure front-end full-text search.

At present, common pure front-end full-text searches include [lunrjs](//lunrjs.com) and [ElasticLunr.js](//github.com/weixsong/elasticlunr.js) (based on the secondary development of `lunrjs`).

There are two ways to build indexes in `lunrjs`, and both have their own problems.

1. Pre-built index files

   Because the index contains words from all documents, it is bulky.
   Whenever a document is added or modified, a new index file must be loaded.
   This will increase the user's waiting time and consume a large amount of bandwidth.

2. Load documents and build indexes on the fly

   Building an index is a computationally intensive task. Rebuilding the index every time you access it will cause obvious lags and a poor user experience.

---

In addition to `lunrjs`, there are some other full-text search solutions, such as:

[fusejs](//www.fusejs.io), which calculates the similarity between strings for search.

The performance of this solution is extremely poor and cannot be used for full-text search (see [Fuse.js Long query takes more than 10 seconds, how to optimize?](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries)).

[TinySearch](//github.com/tinysearch/tinysearch), which uses a Bloom filter to search, cannot be used for prefix search (for example, enter `goo`, search for `good`, `google`), and cannot achieve a similar automatic completion effect.

Because of the shortcomings of the existing solutions, `i18n.site` has developed a new pure front-end full-text search solution with the following characteristics:

1. Supports multi-language search and is compact in size. The size of the search kernel after packaging with `gzip` is `6.9KB` (for comparison, the size of `lunrjs` is `25KB`)
1. Builds an inverted index based on `indexedb`, which takes up less memory and is fast
1. When documents are added/modified, only the added or modified documents are re-indexed, reducing the amount of calculations
1. Supports prefix search, which can display search results in real time while the user is typing
1. Available Offline

Below, the technical implementation details of `i18n.site` will be introduced in detail.

## Multilingual Word Segmentation

The word segmentation uses the native word segmentation `Intl.Segmenter` of the browser, and all mainstream browsers support this interface.

![](//p.3ti.site/1727667759.avif)

The word segmentation `coffeescript` code is as follows

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

Pass an array of document `url` and version number `ver`, and check if the document exists in the `doc` table. If it does not exist, create an inverted index. Concurrently, remove the inverted index entries for documents that are not included in the input.

By doing so, incremental indexing is achieved, which in turn reduces the computational load.

In terms of front-end interaction, a progress bar for indexing can be displayed to prevent lag during the initial load. Refer to "Progress Bar with Animation: A Single progress + Pure css Implementation" [English](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [Chinese](//juejin.cn/post/7413586285954154522).

### IndexedDB High Concurrency Writing

The project is developed based on the asynchronous encapsulation of IndexedDB using the [idb](//www.npmjs.com/package/idb) library.

IndexedDB operations, both reads and writes, are asynchronous. During index creation, documents are loaded concurrently to build the index.

To prevent data loss due to competitive writes, refer to the following `coffeescript` code. Implement a caching mechanism with an `ing` prefix between read and write operations to intercept concurrent writes.

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

In order to present the search results simultaneously while the user is inputting. For instance, when ` Wor` is entered, words like `words` and `work` that are prefixed with ` Wor` will be displayed.

![](//p.3ti.site/1727684944.avif)

The search kernel will utilize the `prefix` table for the last word after word segmentation to find all the words prefixed with it, and conduct sequential searching.

An anti-shake function `debounce` is also employed in the front-end interaction (implemented as follows) to reduce the frequency of user input triggering searches and the amount of computation.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Precision and Recall Rate

The search will first perform word segmentation on the keywords entered by the user.

Suppose there are `N` words after word segmentation. When returning results, the results containing all the keywords will be returned first, and then the results containing `N-1`, `N-2`,..., `1` keyword will be returned.

The search results displayed preferentially ensure the accuracy of the query, and the subsequent loaded results (by clicking the "load more" button) ensure the recall rate.

![](//p.3ti.site/1727684564.avif)

## Load on Demand

In order to enhance the response speed, the search employs the `yield` generator to implement on-demand loading, and returns once for every `limit` number of results queried.

Note that each time after `yield` and when searching again, it is necessary to reopen a query transaction of `IndexedDB`.

## Prefix Real-Time Search

In order to present the search results simultaneously while the user is inputting. For instance, when ` Wor` is entered, words like `words` and `work` that are prefixed with ` Wor` will be displayed.

![](//p.3ti.site/1727684944.avif)

The search kernel will utilize the `prefix` table for the last word after word segmentation to find all the words prefixed with it, and conduct sequential searching.

An anti-shake function `debounce` is also employed in the front-end interaction (implemented as follows) to reduce the frequency of user input triggering searches and the amount of computation.

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

The index table does not store the original text but only the words, reducing the amount of storage.

Highlighting the search results requires reloading the original text, and coordinating with the `service worker` can avoid repeated network requests.

At the same time, because the `service worker` caches all articles, once the user has conducted a search, the entire website, including the search, is available offline.

## Display Optimization of MarkDown Documents

The pure front-end search solution of `i18n.site` is optimized for `MarkDown` documents.

When presenting the display of search results, the chapter name will be shown and it will navigate to that chapter when clicked.

![](//p.3ti.site/1727686552.avif)

## Summarize

An inverted full-text search implemented purely on the front end, without the need for a server. It is highly suitable for small and medium-sized websites such as documents and personal blogs.

The open source self-developed pure front-end search of `i18n.site`, with a small size and a fast response, resolves the various drawbacks of the current pure front-end full-text search and provides a better user experience.