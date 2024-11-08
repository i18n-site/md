---

brief: |
  i18n.site kounye a sipòte rechèch tèks konplè san sèvè.

  Atik sa a entwodui aplikasyon pi bon kalite teknoloji rechèch plen tèks devan, ki gen ladan endèks Envèse ki te konstwi pa IndexedDB, rechèch prefiks, optimize segmentasyon mo ak sipò milti-lang.

  Konpare ak solisyon ki egziste deja yo, rechèch pi devan i18n.site nan tèks konplè se ti gwosè ak vit, apwopriye pou sit entènèt ti ak mwayen gwosè tankou dokiman ak blog, epi li disponib offline.

---

# Pi Devan-End Envèse Rechèch Plen Tèks

## Sekans

Apre plizyè semèn nan devlopman [i18n.site](//i18n.site) (yon zouti pou kreye sitwèb markdown & miltiling ki piman estatik) kounye a sipòte rechèch tèks konplè.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Atik sa a pral pataje aplikasyon teknik `i18n.site` pi bon kalite rechèch plen tèks [i18n.site](//i18n.site) fè eksperyans efè rechèch la.

Kòd louvri : [rechèch kernel](//github.com/i18n-site/ie/tree/main/qy) / [entèaktif](//github.com/i18n-site/plugin/tree/main/qy)

## Yon Revizyon Solisyon Rechèch Plen Tèks San Sèvè

Pou ti ak mwayen gwosè sit entènèt piman estatik tankou dokiman/blog pèsonèl, bati yon backend rechèch plen tèks pwòp tèt ou twò lou, ak rechèch konplè tèks gratis se chwa ki pi komen.

Solisyon rechèch plen tèks san sèvè yo tonbe nan de gwo kategori:

Premyèman, menm jan an [algolia.com](//algolia.com) Founisè sèvis rechèch twazyèm pati yo bay eleman front-end pou rechèch tèks konplè.

Sèvis sa yo mande pou peman ki baze sou volim rechèch, epi yo souvan pa disponib pou itilizatè yo nan tè pwensipal Lachin akòz pwoblèm tankou konfòmite sit entènèt.

Li pa ka itilize offline, pa ka itilize sou intranet la, epi li gen gwo limit. Atik sa a pa pale anpil.

Dezyèm lan se pi bon kalite rechèch plen tèks.

Kounye a, rechèch pi komen nan tèks konplè gen ladan [lunrjs](//lunrjs.com) ak [ElasticLunr.js](//github.com/weixsong/elasticlunr.js) (ki baze sou `lunrjs` devlopman segondè).

`lunrjs` Gen de fason pou konstwi endis, epi tou de gen pwoblèm pwòp yo.

1. Fichye endèks pre-bati

   Paske endèks la gen mo ki soti nan tout dokiman, li se gwo nan gwosè.
   Chak fwa yo ajoute oswa modifye yon dokiman, yo dwe chaje yon nouvo fichye endèks.
   Li pral ogmante tan ap tann itilizatè a ak konsome yon anpil nan Pleasant.

2. Chaje dokiman yo ak bati endis sou vole

   Konstwi yon endèks se yon travay entansif enfòmatik.

---

Anplis `lunrjs` , gen kèk lòt solisyon rechèch plen tèks, tankou :

[fusejs](//www.fusejs.io) , kalkile resanblans ki genyen ant fisèl pou chèche.

Pèfòmans solisyon sa a se ekstrèmman pòv epi yo pa ka itilize pou rechèch tèks konplè (gade [Fuse.js Rekèt long pran plis pase 10 segonn, ki jan yo optimize li?](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries) ).

[TinySearch](//github.com/tinysearch/tinysearch) sèvi ak Bloom filtre pou fè rechèch, pa ka itilize pou rechèch prefiks (pa egzanp, antre `goo` , rechèch `good` , `google` ), epi yo pa ka reyalize menm efè fini otomatik.

Akòz enpèfeksyon yo nan solisyon yo ki deja egziste, `i18n.site` devlope yon nouvo pi bon kalite solisyon rechèch plen-tèks devan, ki gen karakteristik sa yo :

1. Sipòte rechèch milti-lang epi li se ti gwosè a nan nwayo rechèch la apre anbalaj `gzip` se `6.9KB` (pou konparezon, gwosè a nan `lunrjs` se `25KB` ).
1. Bati yon endèks Envèse ki baze sou `indexedb` , ki pran mwens memwa epi li rapid.
1. Lè dokiman yo ajoute/modifye, se sèlman dokiman ki ajoute oswa modifye yo re-endèks, sa ki diminye kantite kalkil yo.
1. Sipòte rechèch prefiks epi li ka montre rezilta rechèch an tan reyèl pandan itilizatè a ap tape.
1. Disponib offline

Anba a, `i18n.site` detay aplikasyon teknik yo pral prezante an detay.

## Segmantasyon Mo Plizyè Lang

Segmantasyon mo itilize segmantasyon mo natif natal navigatè a `Intl.Segmenter` , epi tout navigatè endikap yo sipòte koòdone sa a.

![](//p.3ti.site/1727667759.avif)

Segmantasyon mo `coffeescript` kòd la se jan sa a

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

nan:

* `/\p{P}/` se yon ekspresyon { ki matche ak siy `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _` . | } ~. `.</p><ul><li> `split('.')` se paske `Firefox` segman mo navigatè a pa segman `. ` .</li>


## Bilding Endèks

5 tab depo objè yo te kreye nan `IndexedDB` :

* `word` : id -
* `doc` : id - Dokiman url - Nimewo vèsyon dokiman an
* `docWord` : Etalaj dokiman id - mo id
* `prefix` : Etalaj prefiks - mo id
* `rindex` : id - Dokiman id : Etalaj nimewo liy

Pase nan etalaj la nan dokiman `url` ak nimewo vèsyon `ver` , epi chèche si dokiman an egziste nan tablo `doc` Si li pa egziste, kreye yon endèks Envèse. An menm tan an, retire endèks la envèse pou dokiman sa yo ki pa te pase nan.

Nan fason sa a, incrémentielle Indexing ka reyalize ak kantite lajan an nan kalkil redwi.

Nan entèraksyon front-end, ba loading pwogrè nan endèks la ka parèt pou evite lag la lè chaje pou premye fwa Gade "Bawo Pwogrè ak Animasyon, ki baze sou yon sèl progress + Pi css Aplikasyon" [angle](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [Chinwa](//juejin.cn/post/7413586285954154522) .

### IndexedDB Segondè Ekri Konkouran

Pwojè a [idb](//www.npmjs.com/package/idb) baze sou enkapsulasyon asynchrone nan IndexedDB

IndexedDB lekti ak ekri yo asynchrone. Lè w ap kreye yon endèks, dokiman yo pral chaje ansanm pou kreye endèks la.

Pou evite pèt done pasyèl ki te koze pa ekriti konpetitif, ou ka refere a kòd `coffeescript` ki anba a epi ajoute yon kachèt `ing` ant lekti ak ekriti pou entèsepte ekriti konpetisyon.

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

## Presizyon Ak Rapèl

Rechèch la pral premye segman mo kle itilizatè a antre.

Sipoze ke gen `N` mo apre segmantasyon mo a Lè w ap retounen rezilta yo, yo pral retounen rezilta ki genyen tout mo kle yo dabò, epi apre sa yo pral retounen rezilta ki genyen `N-1` , `N-2` ,..., `1` mo kle yo.

Rezilta rechèch yo parèt an premye asire presizyon rechèch la, epi rezilta yo chaje apre (klike sou bouton an chaj plis) asire pousantaj rapèl la.

![](//p.3ti.site/1727684564.avif)

## Chaj Sou Demann

Pou amelyore vitès repons lan, rechèch la sèvi ak dèlko `yield` pou aplike chajman sou demann, epi retounen `limit` fwa yo mande yon rezilta.

Remake byen ke chak fwa ou fè rechèch ankò apre `yield` , ou bezwen relouvri yon tranzaksyon rechèch nan `IndexedDB` .

## Prefiks Rechèch an Tan Reyèl

Pou yo ka montre rezilta rechèch la pandan itilizatè a ap tape, pou egzanp, lè yo antre `wor` , mo yo prefiks ak `wor` tankou `words` ak `work` yo parèt.

![](//p.3ti.site/1727684944.avif)

Nwayo rechèch la pral sèvi ak tablo `prefix` a pou dènye mo a apre segmantasyon mo a pou jwenn tout mo ki gen prefiks ak li, epi chèche nan sekans.

Fonksyon anti-souke `debounce` tou yo itilize nan entèraksyon front-end (aplike jan sa a) diminye frekans nan opinyon itilizatè deklanche rechèch ak diminye kantite lajan an nan kalkil.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Disponib Offline

Tablo endèks la pa estoke tèks orijinal la, sèlman mo yo, ki diminye kantite depo.

Mete aksan sou rezilta rechèch yo mande pou rechaje tèks orijinal la, epi matche `service worker` ka evite demann rezo repete.

An menm tan an, paske `service worker` kachèt tout atik yo, yon fwa itilizatè a fè yon rechèch, tout sit entènèt la, ki gen ladan rechèch la, disponib offline.

## Montre Optimize Dokiman MarkDown

Pi bon kalite solisyon rechèch front-end `i18n.site` a optimize pou `MarkDown` dokiman.

Lè w ap montre rezilta rechèch la, yo pral montre non chapit la epi yo pral navige sou chapit la lè w klike sou.

![](//p.3ti.site/1727686552.avif)

## Rezime

Envèse rechèch konplè tèks aplike piman sou fen devan an, pa gen okenn sèvè obligatwa. Li trè apwopriye pou sit entènèt ti ak mwayen gwosè tankou dokiman ak blog pèsonèl.

`i18n.site` Sous louvri pwòp tèt-devlope pi bon kalite rechèch devan-end, ti nan gwosè ak repons rapid, rezoud enpèfeksyon yo nan rechèch aktyèl la pi devan-fen plen tèks epi li bay yon pi bon eksperyans itilizatè.