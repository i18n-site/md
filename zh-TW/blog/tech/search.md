---

brief: |
  i18n.site 現已支持無服務的全文搜索。

  本文介紹了純前端全文搜索技術的實現，包括 IndexedDB 構建的倒排索引、前綴搜索、分詞優化及多語言支持。

  相比現有的方案，i18n.site 的純前端全文搜索體積小、速度快，適合文檔和博客等中小型網站，且離线可用。

---

# 純前端的倒排全文搜索

## 序

經過几周的開发，[i18n.site](//i18n.site)(純靜態的markdown多語言翻譯&建站工具)現在支持純前端全文搜索。

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

本文將分享`i18n.site`純前端全文搜索的技術實現，訪問[i18n.site](//i18n.site)可體驗搜索效果。

代碼開源 : [搜索內核](//github.com/i18n-site/ie/tree/main/qy) / [交互界面](//github.com/i18n-site/plugin/tree/main/qy)

## 無服務全文搜索解決方案綜述

對應文檔/個人博客等中小型純靜態網站而言，自建全文搜索后台太重，無服務全文搜索是更常見的選擇。

無服務全文搜索解決方案分兩大類:

其一，類似 [algolia.com](//algolia.com) 第三方搜索服務商，提供了全文搜索的前端組件。

此類服務需按搜索量付費，且常因網站合規性等問題，導致中國大陸用戶無法使用。

無法離线使用，無法在內網使用，局限性很大。 本文不多做討論。

其二，就是純前端的全文搜索。

当下常見純前端的全文搜索的有 [lunrjs](//lunrjs.com) 和 [ElasticLunr.js](//github.com/weixsong/elasticlunr.js)(基于`lunrjs`二次開发)。

`lunrjs`有兩種索引構建方式，又都有各自的問題。

1. 預構建索引文件

   因為索引包含了所有文檔的詞，體積大。
   每当文檔有增改，都要加載新的索引文件。
   會增加用戶的等待時間，并消耗大量帶寬。

2. 加載文檔并實時構建索引

   構建索引是計算密集型任務，每次訪問都重新構建索引會有明顯的卡頓，用戶體驗差。

---

除了`lunrjs`之外，還有一些其他的全文搜索方案，比如:

[fusejs](//www.fusejs.io)，計算字符串之間的相似度來搜索。

此方案性能極差，無法用于全文搜索(參見 [Fuse.js 長查詢耗時超過10秒，如何優化？](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries))。

[TinySearch](//github.com/tinysearch/tinysearch)，使用布隆過濾器來搜索，無法用于前綴搜索(比如輸入`goo`，搜索`good`、`google`)，無法實現類似自動補全效果。

因為現有方案各自的弊端，`i18n.site`自研了全新純前端全文搜索方案，具有以下特色:

1. 支持多語言搜索，體積小，搜索內核打包`gzip`后體積為`6.9KB`(作為對比，`lunrjs`體積為`25KB`)
1. 基于`indexedb`構建倒排索引，內存占用少，速度快
1. 当文檔有新增/改動的時候，只對增改的文檔重新索引，減少了計算量
1. 支持前綴搜索，可以在用戶輸入的同時實時展示搜索結果
1. 離线可用

下面，將詳細介紹`i18n.site`技術實現細節。

## 多語言分詞

分詞采用瀏覽器原生的分詞`Intl.Segmenter`，主流瀏覽器都支持此接口。

![](//p.3ti.site/1727667759.avif)

分詞`coffeescript`代碼如下

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

* `/\p{P}/`是匹配標點符號的正則表達式，具體匹配的符號包括：`! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _`{ | } ~ 。`。
* `split('.')`是因為`Firefox`瀏覽器分詞不切分`. `。


## 索引構建

`IndexedDB`中創建了5 個對象存儲表 :

* `word`: id - 詞
* `doc`: id - 文檔url - 文檔版本號
* `docWord`: 文檔id - 詞id的數組
* `prefix`: 前綴 - 詞id的數組
* `rindex`: 詞id - 文檔id : 行號的數組

傳入文檔的`url`和版本號`ver`的數組，在`doc`表中查找文檔是否存在，如果不存在，則創建倒排索引。同時，移除那些未傳入文檔的倒排索引。

如此就可以實現增量索引，降低了計算量。

前端交互上，可以顯示索引的加載進度條避免首次加載時的卡頓感，參見《帶動畫的進度條，基于單個 progress + 純css實現》[英文](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [中文](//juejin.cn/post/7413586285954154522)。

### IndexedDB 高并发寫入

項目基于 IndexedDB 的異步封裝 [idb](//www.npmjs.com/package/idb) 開发。

IndexedDB 讀取和寫入都是異步的。而創建索引的時候會并发地加載文檔創建索引。

為了避免競爭性寫入導致部分數據丟失，可以參考下面的`coffeescript`代碼，在讀寫之間加一個`ing`緩存攔截競爭性寫入。

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

## 准確率和查全率

搜索會先將用戶輸入的關鍵詞進行分詞。

假設有分詞之后有`N`個詞，返回結果的時候，會先返回包含所有關鍵詞的結果，然后再返回包含`N-1`、`N-2`、… 、`1`個關鍵詞的結果。

優先展示的搜索結果保证了查詢的准確率，后續加載的結果(點擊加載更多按鈕)保证了查全率。

![](//p.3ti.site/1727684564.avif)

## 按需加載

為了提高響應速度，搜索借助`yield`生成器實現了按需加載的方式，每查詢到`limit`個結果就返回一次。

注意，每次`yield`之后再次搜索時，需要重新打開一個`IndexedDB`的查詢事務。

## 前綴實時搜索

為了實現用戶輸入的同時展示搜索結果，比如輸入`wor`的時候，展示`words`和`work`等以`wor`為前綴的單詞。

![](//p.3ti.site/1727684944.avif)

搜索內核會對分詞后的最后一個詞借助`prefix`表，找到所有以它為前綴的詞，依次搜索。

前端交互中還采用了防抖函數`debounce`(實現如下)，降低用戶輸入觸发搜索的頻率減少計算量。

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## 離线可用

索引表沒有存儲原文，只存儲詞，減少了存儲量。

搜索結果高亮需要重新加載原文，配合`service worker`即可避免重复的網絡請求。

同時，因為`service worker`會緩存所有文章，所以用戶一旦進行過搜索，整個網站包含搜索在內都離线可用。

## 對 MarkDown 文檔的顯示優化

`i18n.site`的純前端搜索解決方案針對`MarkDown`文檔做了優化。

展示顯示搜索結果時，會顯示章節名稱，并在點擊時定位到該章節。

![](//p.3ti.site/1727686552.avif)

## 總結

純前端實現的倒排全文搜索，無需服務器。非常適合文檔、個人博客等中小型網站。

`i18n.site`開源的自研純前端搜索，體積小，響應快，解決了当前純前端全文搜索的種種弊端，提供了更好的用戶體驗。