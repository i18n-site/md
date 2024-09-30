# 1	纯前端的倒排全文搜索

## Secvență

2	经过几周的开发，[i18n.site](//i18n.site)(纯静态的markdown多语言翻译&建站工具)现在支持纯前端全文搜索。

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Acest articol va prezenta implementarea tehnică a căutării front-end pentru `i18n.site`, pe care o puteți experimenta la [i18n.site](//i18n.site).

Codul este deschis: [ nucleul de căutare ](//github.com/i18n-site/ie/tree/main/qy) / [ interfața interactivă ](//github.com/i18n-site/plugin/tree/main/qy)

## 5	无服务全文搜索解决方案综述

Pentru site-urile web de dimensiuni mici și mijlocii pur statice, cum ar fi documentele/blogurile personale, construirea unui backend de căutare full-text auto-construit este prea grea, iar căutarea full-text fără servicii este alegerea mai comună.

Soluțiile de căutare full-text fără servicii se împart în două mari categorii:

Prima categorie include furnizori terți de servicii de căutare, cum ar fi [algolia.com](//algolia.com), care oferă componente front-end pentru căutarea full-text.

Acest tip de serviciu necesită plată în funcție de volumul de căutare și este adesea inaccesibil utilizatorilor din China continentală din cauza problemelor de conformitate ale site-urilor.

10	无法离线使用，无法在内网使用，局限性很大。 本文不多做讨论。

Cea de-a doua categorie este căutarea full-text pur front-end.

În prezent, căutările cu text integral纯 front-end includ [lunrjs](//lunrjs.com) și [ElasticLunr.js](//github.com/weixsong/elasticlunr.js) (dezvoltat pe baza `lunrjs`).

`lunrjs` are două metode de construire a indecsilor, ambele având propriile probleme.

1. 14	预构建索引文件

   15	因为索引包含了所有文档的词，体积大。
   16	每当文档有增改，都要加载新的索引文件。
   17	会增加用户的等待时间，并消耗大量带宽。

2. 18	加载文档并实时构建索引

   19	构建索引是计算密集型任务，每次访问都重新构建索引会有明显的卡顿，用户体验差。

---

20	除了 `lunrjs` 之外，还有一些其他的全文搜索方案，比如:

[fusejs](//www.fusejs.io) calculează similaritatea dintre șiruri de caractere pentru a efectua căutări.

Această soluție are o performanță foarte slabă și nu este potrivită pentru căutări cu text integral (vezi [Fuse.js: interogări lungi necesită mai mult de 10 secunde, cum să le optimizăm?](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries)).

[TinySearch](//github.com/tinysearch/tinysearch) utilizează un filtru Bloom pentru căutări, dar nu permite căutări cu prefix (de exemplu, tastând `goo`, nu va căuta `good` sau `google`), și nu poate realiza un efect de completare automată similar.

Din cauza dezavantajelor soluțiilor existente, `i18n.site` a dezvoltat o nouă soluție de căutare full-text pur front-end, care are următoarele caracteristici:

1. 25	支持多语言搜索，体积小，搜索内核打包`gzip`后体积为`6.9KB` (作为对比，`lunrjs` 体积为 `25KB`)
1. 26	基于 `indexedb` 构建倒排索引，内存占用少，速度快
1. 27	当文档有新增/改动的时候，只对增改的文档重新索引，减少了计算量
1. 28	支持前缀搜索，可以在用户输入的同时实时展示搜索结果
1. Disponibilitate offline

30	下面，将详细介绍 `i18n.site` 技术实现细节。

## 31	多语言分词

32	分词采用浏览器原生的分词 `Intl.Segmenter`，主流浏览器都支持此接口。

![](//p.3ti.site/1727667759.avif)

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

* 35	`/\p{P}/` 是匹配标点符号的正则表达式，具体匹配的符号包括:`! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _ ` { | } ~. `.</p><ul><li> `split('.')` se datorează faptului că segmentarea `Firefox` cuvânt din browser nu segmentează `.` .</li>


## Clădirea indexului

În `IndexedDB` au fost create 5 tabele de stocare a obiectelor:

* `word` : id - cuvânt
* 40	`word` : id - 词
* 41	`doc`: id - 文档url - 文档版本号
* 42	`docWord` : 文档id - 词id的数组
* 43	`prefix` : 前缀 - 词id的数组

Introduceți matricea documentului `url` și numărul versiunii `ver`, căutați dacă documentul există în tabelul `doc`. Dacă nu există, creați un index inversat. În același timp, eliminați indexul inversat pentru acele documente care nu au fost transmise.

În acest mod, se poate realiza indexarea incrementală, reducând astfel cantitatea de calcul necesar.

În interacțiunea front-end, poate fi afișată bara de progres pentru încărcarea indexului, pentru a evita întreruperea la prima încărcare. Vedeți de exemplu: „Bara de progres cu animație, bazată pe progress + CSS pur” [engleză](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [chineză](//juejin.cn/post/7413586285954154522).

### Scriere concurentă în IndexedDB

Proiectul este dezvoltat pe baza unei încapsulări asincrone a IndexedDB, [idb](//www.npmjs.com/package/idb).

Citirile și scrierile în IndexedDB sunt asincrone. La crearea unui index, documentele sunt încărcate simultan pentru a crea indexul.

Pentru a evita pierderea parțială a datelor din cauza scrierii concurente, vă rugăm să consultați codul `coffeescript` de mai jos și să adăugați un cache `ing` între citire și scriere pentru a intercepta scrierile concurente.

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

## Căutare cu prefix în timp real

Pentru a afișa rezultatele căutării în timp ce utilizatorul tastează, de exemplu, atunci când este introdus `wor`, sunt afișate cuvintele care încep cu `wor`, cum ar fi `words` și `work`.

![](//p.3ti.site/1727684944.avif)

Nucleul de căutare utilizează tabelul `prefix` pentru ultimul cuvânt după segmentare pentru a găsi toate cuvintele care încep cu acesta și a căuta în secvență.

Funcția anti-shake `debounce` este, de asemenea, utilizată în interacțiunea front-end (implementată după cum urmează) pentru a reduce frecvența declanșării căutării de la intrările utilizatorului și pentru a reduce cantitatea de calcul.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Precizie și acoperire

56	准确率和查全率

Să presupunem că există `N` cuvinte după segmentare. Când se returnează rezultatele, se vor întâmpina mai întâi rezultatele care conțin toate cuvintele cheie, urmate de rezultatele care conțin `N-1`, `N-2`, ..., `1` cuvinte cheie.

Rezultatele căutării afișate mai întâi asigură acuratețea interogării, iar rezultatele încărcate ulterior (printr-un clic pe butonul de încărcare mai mult) asigură acoperirea completă.

![](//p.3ti.site/1727684564.avif)

## Încărcare la cerere

Pentru a îmbunătăți viteza de răspuns, căutarea folosește generatorul `yield` pentru a implementa încărcarea la cerere, revenind cu `limit` rezultate fiecare dată când este interogat un rezultat.

61	为了提高响应速度，搜索借助`yield`生成器实现了按需加载的方式，每查询到`limit`个结果就返回一次。

## Căutare cu prefix în timp real

Pentru a afișa rezultatele căutării în timp ce utilizatorul tastează, de exemplu, atunci când este introdus `wor`, sunt afișate cuvintele care încep cu `wor`, cum ar fi `words` și `work`.

![](//p.3ti.site/1727684944.avif)

Nucleul de căutare utilizează tabelul `prefix` pentru ultimul cuvânt după segmentare pentru a găsi toate cuvintele care încep cu acesta și a căuta în secvență.

Funcția anti-shake `debounce` este, de asemenea, utilizată în interacțiunea front-end (implementată după cum urmează) pentru a reduce frecvența declanșării căutării de la intrările utilizatorului și pentru a reduce cantitatea de calcul.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Disponibilitate offline

67	离线可用

Evidențierea rezultatelor căutării necesită reîncărcarea textului original, iar utilizarea `service worker` poate evita solicitările repetate de rețea.

69	搜索结果高亮需要重新加载原文，配合`service worker`即可避免重复的网络请求。

## Optimizare afișare documente Markdown

Soluția de căutare frontală pură a lui `i18n.site` este optimizată pentru `MarkDown` documente.

Când se afișează rezultatele căutării, numele capitolului va fi afișat și capitolul va fi navigat atunci când se face clic pe el.

![](//p.3ti.site/1727686552.avif)

## Rezumat

Implementare de căutare full-text inversată pur front-end, fără a necesita server. Este foarte potrivită pentru site-uri web mici și mijlocii, cum ar fi documente și bloguri personale.

`i18n.site` oferă o soluție de căutare front-end pură, open-source, cu dimensiuni mici și răspuns rapid, rezolvând diversele probleme ale căutării full-text front-end și oferind o experiență îmbunătățită pentru utilizatori.