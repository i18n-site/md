---

brief: |
  i18n.site now supports serverless full-text search.

  This article introduces the implementation of pure front-end full-text search technology, including the inverted index built using IndexedDB, prefix search, word segmentation optimization, and multi-language support.

  Compared with existing solutions, i18n.site's pure front-end full-text search is compact and fast, making it suitable for small and medium-sized websites such as documentation and blogs, and it is available offline.

---

# Pure Front-End Inverted Full-Text Search

## Introduction

After several weeks of development, [i18n.site](//i18n.site) (a purely static markdown multilingual translation and website building tool) now supports pure front-end full-text search.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

This article will share the technical implementation of `i18n.site`'s pure front-end full-text search. Visit [i18n.site](//i18n.site) to experience the search effect.

Code open source: [Search kernel](//github.com/i18n-site/ie/tree/main/qy) / [Interactive interface](//github.com/i18n-site/plugin/tree/main/qy)

## Overview of Serverless Full-Text Search Solutions

For small and medium-sized purely static websites such as documents/personal blogs, building a self-built full-text search backend is too heavy, and service-free full-text search is the more common choice.

Serverless full-text search solutions fall into two main categories:

The first category includes third-party search service providers like [algolia.com](//algolia.com), which offer front-end components for full-text search.

Such services require payment based on search volume and are often unavailable to users in mainland China due to issues such as website compliance.

They cannot be used offline or on intranets, which limits their applicability. This article will not delve into these solutions.

The second category is pure front-end full-text search.

Common pure front-end full-text search solutions include [lunrjs](//lunrjs.com) and [ElasticLunr.js](//github.com/weixsong/elasticlunr.js) (a secondary development based on `lunrjs`).

`lunrjs` has two methods for building indexes, each with its own issues.

1. Pre-built index files

   Because the index contains all the words from the documents, it is large in size.
   Whenever a document is added or modified, a new index file must be loaded.
   This increases the user's waiting time and consumes a lot of bandwidth.

2. Loading documents and building indexes on the fly

   Building an index is a computationally intensive task. Rebuilding the index every time a user accesses it can cause noticeable lag and poor user experience.

---

In addition to `lunrjs`, there are other full-text search solutions, such as:

[fusejs](//www.fusejs.io), which calculates the similarity between strings to search.

The performance of this solution is extremely poor and is not suitable for full-text search (see [Fuse.js Long query takes more than 10 seconds, how to optimize it?](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries)).

[TinySearch](//github.com/tinysearch/tinysearch), which uses a Bloom filter to search. It cannot be used for prefix search (e.g., entering `goo` to search for `good` or `google`) and cannot achieve an auto-complete effect.

Due to the shortcomings of existing solutions, `i18n.site` has developed a new pure front-end full-text search solution with the following features:

1. Supports multi-language search and is small in size. The search kernel, after being packaged with `gzip`, is only `6.9KB` (for comparison, `lunrjs` is `25KB`)
1. Builds an inverted index using `IndexedDB`, which takes up less memory and is fast
1. When documents are added/modified, only the added or modified documents are re-indexed, reducing the amount of calculations
1. Supports prefix search and can display search results in real-time as the user types
1. Available offline

Below, we will detail the technical implementation of `i18n.site`.

## Multilingual Word Segmentation

Word segmentation uses the browser's native `Intl.Segmenter`, which is supported by all major browsers.

![](//p.3ti.site/1727667759.avif)

The word segmentation `coffeescript` code is as follows:

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

in:

* `/\p{P}/` is a regular expression that matches punctuation marks. Specific matching symbols include: `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _` { | } ~. `.</p><ul><li> `split('.')` is because `Firefox` browser word segmentation does not segment `. ` .</li>


## Index Building

Five object storage tables were created in `IndexedDB`:

* `word`: id - word
* `doc`: id - document URL - document version number
* `docWord`: document id - array of word ids
* `prefix`: prefix - array of word ids
* `rindex`: word id - document id : array of line numbers

An array of document `url` and version number `ver` is passed in, and the `doc` table is checked to see if the document exists. If it does not, an inverted index is created. At the same time, the inverted index for documents that were not passed in is removed.

This approach enables incremental indexing, reducing the amount of computation.

In terms of front-end interaction, a loading progress bar can be displayed to avoid lag during the first load. See "Progress Bar with Animation, Based on a Single progress + Pure CSS Implementation" [English](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [Chinese](//juejin.cn/post/7413586285954154522).

### IndexedDB High-Concurrency Writing

The project is based on the asynchronous encapsulation of IndexedDB, [idb](//www.npmjs.com/package/idb).

IndexedDB reads and writes are asynchronous. When creating an index, documents are loaded concurrently to build the index.

To avoid data loss caused by concurrent writes, a `ing` cache can be added between reads and writes to intercept competing writes. Refer to the following `coffeescript` code.

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

## Precision and Recall

The search first segments the keywords entered by the user.

Assume that there are `N` words after segmentation. When returning results, the search first returns results containing all keywords, followed by results containing `N-1`, `N-2`, ..., `1` keyword.

The initial search results ensure query accuracy, while subsequent results (loaded by clicking the "load more" button) ensure recall.

![](//p.3ti.site/1727684564.avif)

## Load on Demand

To improve response speed, the search uses a `yield` generator to implement on-demand loading, returning results in batches of `limit`.

Note that each time a search is performed after a `yield`, a new `IndexedDB` query transaction must be opened.

## Prefix Real-Time Search

To display search results while the user is typing, for example, when `wor` is entered, words prefixed with `wor` such as `words` and `work` are displayed.

![](//p.3ti.site/1727684944.avif)

The search kernel uses the `prefix` table to find all words prefixed with the last word after segmentation and searches them in sequence.

The front-end interaction also uses a debounce function `debounce` (implemented as follows) to reduce the frequency of user input triggering searches and to reduce computational load.

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

The index table does not store the original text, only the words, which reduces storage requirements.

Highlighting search results requires reloading the original text, and using a `service worker` can avoid repeated network requests.

Since the `service worker` caches all articles, once a user performs a search, the entire website, including the search functionality, is available offline.

## Display Optimization for MarkDown Documents

`i18n.site`'s pure front-end search solution is optimized for `MarkDown` documents.

When displaying search results, the chapter name is shown, and clicking on it navigates to the corresponding chapter.

![](//p.3ti.site/1727686552.avif)

## Summary

The pure front-end inverted full-text search, which does not require a server, is very suitable for small and medium-sized websites such as documentation and personal blogs.

`i18n.site`'s open-source, self-developed pure front-end search is compact and fast, addressing the shortcomings of current pure front-end full-text search solutions and providing a better user experience.