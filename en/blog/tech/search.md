---

brief: |
  i18n.site now supports serverless full-text search.

  This article introduces the implementation of a pure front-end full-text search technology, including the construction of an inverted index using IndexedDB, prefix search, word segmentation optimization, and multi-language support.

  Compared to existing solutions, i18n.site's pure front-end full-text search is compact and fast, suitable for small to medium-sized websites such as documentation and blogs, and is available offline.

---

# Pure Front-End Inverted Full-Text Search

## Sequence

After several weeks of development, [i18n.site](//i18n.site) (a purely static markdown multilingual translation & website building tool) now supports pure front-end full-text search.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

This article will share the technical implementation of `i18n.site`'s pure front-end full-text search. Visit [i18n.site](//i18n.site) to experience the search functionality.

Code is open-source: [Search kernel](//github.com/i18n-site/ie/tree/main/qy) / [Interactive interface](//github.com/i18n-site/plugin/tree/main/qy)

## An Overview of Serverless Full-Text Search Solutions

For small and medium-sized purely static websites such as documents/personal blogs, building a self-built full-text search backend is too heavy, and service-free full-text search is the more common choice.

Serverless full-text search solutions are divided into two main categories:

The first involves third-party search service providers like [algolia.com](//algolia.com) that offer front-end components for full-text search.

Such services require payment based on search volume and are often unavailable to users in mainland China due to compliance issues.

They cannot be used offline or on intranets, and have significant limitations. This article will not elaborate further.

The second category is pure front-end full-text search.

Currently, common pure front-end full-text search tools include [lunrjs](//lunrjs.com) and [ElasticLunr.js](//github.com/weixsong/elasticlunr.js) (a secondary development based on `lunrjs`).

`lunrjs` has two methods for index construction, each with its own set of issues.

1. Pre-built index files

   Because the index includes all the words from the documents, it is large in size.
   Every time a document is added or modified, a new index file must be loaded.
   This increases user waiting time and consumes a significant amount of bandwidth.

2. Loading documents and building indexes on the fly

   Building an index is a computationally intensive task, and rebuilding it with each access can cause noticeable delays, leading to a poor user experience.

---

In addition to `lunrjs`, there are other full-text search solutions available, such as:

[fusejs](//www.fusejs.io), which searches by calculating the similarity between strings.

This solution has poor performance and is not suitable for full-text search (refer to [Fuse.js Long query takes over 10 seconds, how to optimize?](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries)).

[TinySearch](//github.com/tinysearch/tinysearch), which uses a Bloom filter for searching, cannot perform prefix searches (e.g., entering `goo` to search for `good` or `google`) and cannot achieve an autocomplete effect.

Due to the drawbacks of existing solutions, `i18n.site` has independently developed a brand new pure front-end full-text search solution, offering the following features:

1. Supports multi-language search, compact in size, with the search kernel compressed to `6.9KB` using `gzip` (for comparison, `lunrjs` is `25KB` in size)
1. Constructs an inverted index based on `IndexedDB`, which consumes minimal memory and operates swiftly
1. When documents are added/modified, only the added or modified documents are re-indexed, reducing the amount of calculations
1. Supports prefix search, allowing real-time display of search results as the user types
1. Offline Availability

Hereinafter, the technical implementation details of `i18n.site` will be elaborated.

## Multilingual Word Segmentation

Word segmentation is achieved using the browser's native `Intl.Segmenter`, an interface supported by all mainstream browsers.

![](//p.3ti.site/1727667759.avif)

The `coffeescript` code for word segmentation is as follows:

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

Where:

* `/\p{P}/` is a regular expression that matches punctuation marks, including: `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _`{ | } ~. `.</p><ul><li> `split('.')` is because `Firefox` browser word segmentation does not segment `. ` .</li>


## Index Construction

Five object storage tables have been created in `IndexedDB`:

* `word`: id - term
* `doc`: id - document URL - document version number
* `docWord`: document id - array of term ids
* `prefix`: prefix - array of term ids
* `rindex`: term id - array of document ids and line numbers

By passing in an array of document `url` and version number `ver`, the `doc` table is checked for the document's existence. If it does not exist, an inverted index is created. Simultaneously, the inverted index for documents not passed in is removed.

This method allows for incremental indexing, reducing the computational load.

In the front-end interface, a progress bar for index loading can be displayed to avoid lag during the initial load. See "Animated Progress Bar, Based on a Single progress + Pure CSS Implementation" [English](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [Chinese](//juejin.cn/post/7413586285954154522).

### IndexedDB High Concurrent Writing

The project is developed based on the asynchronous encapsulation of IndexedDB, [idb](//www.npmjs.com/package/idb).

IndexedDB reads and writes are asynchronous. When creating an index, documents are loaded concurrently to build the index.

To avoid data loss due to concurrent writes, you can refer to the following `coffeescript` code, which adds a `ing` cache between reading and writing to intercept competitive writes.

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

Assuming there are `N` terms after segmentation, the results will first return those containing all keywords, followed by those containing `N-1`, `N-2`, ..., `1` keywords.

The search results displayed first ensure query precision, while subsequent loaded results (click the "Load More" button) ensure recall.

![](//p.3ti.site/1727684564.avif)

## On-Demand Loading

To improve response speed, the search uses the `yield` generator to implement on-demand loading, returning results after each `limit` query.

Note that after each `yield`, a new `IndexedDB` query transaction must be initiated for subsequent searches.

## Prefix Real-Time Search

To display search results as the user types, for instance, when typing `wor`, words prefixed with `wor` such as `words` and `work` are shown.

![](//p.3ti.site/1727684944.avif)

The search kernel uses the `prefix` table for the last word after segmentation to find all words with that prefix and search sequentially.

An anti-shake function, `debounce`, is also employed in the front-end interaction (as implemented below), to decrease the frequency of user input triggering searches and to minimize the computational load.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Offline Availability

The index table does not store the original text, only words, reducing storage space.

Highlighting search results requires reloading the original text, and using `service worker` can avoid repeated network requests.

Also, because `service worker` caches all articles, once a search is performed, the entire website, including search functionality, becomes offline available.

## Optimization for Displaying MarkDown Documents

The pure front-end search solution from `i18n.site` is optimized for `Markdown` documents.

When displaying search results, the chapter name is shown, and clicking navigates to that chapter.

![](//p.3ti.site/1727686552.avif)

## Summary

The pure front-end implementation of inverted full-text search, without the need for a server, is very suitable for small to medium-sized websites such as documents and personal blogs.

`i18n.site`'s open-source self-developed pure front-end search is compact, responsive, and addresses the various shortcomings of current pure front-end full-text search solutions, providing an enhanced user experience.