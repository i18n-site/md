---

brief: |
  i18n.site supporta avà a ricerca di testu pienu senza server.

  Questu articulu presenta l'implementazione di a tecnulugia di ricerca di testu integrale di front-end pura, cumpresu l'indici invertitu custruitu da IndexedDB, a ricerca di prefissi, l'ottimisazione di a segmentazione di e parolle è u supportu multilingua.

  In cunfrontu cù e soluzioni esistenti, a ricerca di testu integrale di front-end pura di i18n.site hè chjuca è veloce, adatta per i siti web chjuchi è mediani cum'è documenti è blog, è hè dispunibule offline.

---

# Ricerca Di Testu Integrale Invertita Pura Front-End

## Sequenza

Dopu à parechje settimane di sviluppu, [i18n.site](//i18n.site) (un strumentu puramente staticu markdown multilingualtranslation & per a creazione di siti web) supporta avà a ricerca di testu full-end pura.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Questu articulu hà da sparte l'implementazione tecnicu di `i18n.site` pura ricerca di testu in u front-end [i18n.site](//i18n.site) per sperimentà l'effettu di ricerca.

Code open : [Ricerca kernel](//github.com/i18n-site/ie/tree/main/qy) / [interfaccia interattiva](//github.com/i18n-site/plugin/tree/main/qy)

## Una Rivista Di E Soluzioni Di Ricerca Di Testu Integrale Senza Server

Per i siti web puramente statici chjuchi è mediani, cum'è documenti / blogs persunali, a custruzzione di un backend di ricerca full-text autocustruita hè troppu pesante, è a ricerca di testu cumpletu senza serviziu hè a scelta più cumuna.

Soluzioni di ricerca di testu pienu senza server sò in duie categorie larghe:

Prima, simili [algolia.com](//algolia.com) i fornitori di servizii di ricerca di terze parti furniscenu cumpunenti front-end per a ricerca full-text.

Tali servizii necessitanu pagamentu basatu nantu à u voluminu di ricerca, è sò spessu indisponibili per l'utilizatori in Cina continentale per prublemi cum'è a conformità di u situ web.

Ùn pò micca esse usatu offline, ùn pò micca esse usatu in l'intranet, è hà grandi limitazioni. Questu articulu ùn parla micca assai.

U sicondu hè pura ricerca full-text front-end.

Attualmente, e ricerche di testu cumpletu puri cumuni includenu [lunrjs](//lunrjs.com) è [ElasticLunr.js](//github.com/weixsong/elasticlunr.js) (basatu nantu à u sviluppu secundariu `lunrjs` ).

`lunrjs` Ci hè duie manere di custruisce indici, è tutti dui anu i so prublemi.

1. File d'indexu pre-custruiti

   Perchè l'indici cuntene parolle da tutti i documenti, hè grande in grandezza.
   Ogni volta chì un documentu hè aghjuntu o mudificatu, un novu schedariu d'indici deve esse caricatu.
   Aumenterà u tempu d'attesa di l'utilizatori è cunsuma assai larghezza di banda.

2. Caricà i ducumenti è custruisce indici nantu à a mosca

   Custruì un indexu hè un compitu intensivu di calculu A ricustruisce l'indici ogni volta chì accede à ellu pruvucarà ritardi evidenti è una povera sperienza d'utilizatore.

---

In più di `lunrjs` , ci sò altre soluzioni di ricerca di testu pienu, cum'è :

[fusejs](//www.fusejs.io) , calculate a similarità trà e stringhe per circà.

A prestazione di sta suluzione hè estremamente povera è ùn pò micca esse usata per a ricerca full-text (vede [Fuse.js A longa dumanda dura più di 10 seconde, cumu ottimisimu ?](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries) ).

[TinySearch](//github.com/tinysearch/tinysearch) Aduprate u filtru Bloom per circà, ùn pò micca esse usatu per a ricerca di prefissu (per esempiu, entre `goo` , ricerca `good` , `google` ), è ùn pò micca ottene un effettu di cumpletu automaticu simili.

A causa di i difetti di e suluzioni esistenti, `i18n.site` hà sviluppatu una nova suluzione pura di ricerca di testu in front-end, chì hà e seguenti caratteristiche :

1. Supporta a ricerca multilingua è hè chjuca in grandezza A dimensione di u kernel di ricerca dopu l'imballu `gzip` hè `6.9KB` (per paragunà, a dimensione di `lunrjs` hè `25KB` ).
1. Custruisce un indice inversu basatu annantu à `indexedb` , chì occupa menu memoria è hè veloce.
1. Quandu i ducumenti sò aghjuntu / mudificati, solu i documenti aghjunti o mudificati sò re-indexati, riducendu a quantità di calculi.
1. Supporta a ricerca di prefissi è ponu vede i risultati di ricerca in tempu reale mentre l'utilizatore scrive.
1. Disponibile offline

Sottu, `i18n.site` dettagli di implementazione tecnica seranu presentati in dettagliu.

## Segmentazione Di Parole Multilingue

A segmentazione di e parolle usa a segmentazione di parola nativa di u navigatore `Intl.Segmenter` , è tutti i navigatori mainstream supportanu sta interfaccia.

![](//p.3ti.site/1727667759.avif)

U codice di segmentazione di a parolla `coffeescript` hè a siguenti

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

* `/\p{P}/` hè una espressione { chì currisponde à i segni di `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _` . | } ~. `.</p><ul><li> `split('.')` hè perchè a segmentazione di a parolla di u navigatore `Firefox` ùn segmenta micca `. ` .</li>


## Custruzzione Di L'indice

5 tabelle di almacenamentu d'ughjettu sò state create in `IndexedDB` :

* `word` : id -
* `doc` : id - Document url - Numero di versione di u documentu
* `docWord` : Array di document id - word id
* `prefix` : Array di prefissu - word id
* `rindex` : id - Documentu id : Array di numeri di linea

Passa in l'array di u documentu `url` è u numeru di versione `ver` , è cercate s'ellu esiste u documentu in a tavula `doc` S'ellu ùn esiste micca, crea un indice invertitu. À u listessu tempu, sguassate l'indici invertitu per quelli documenti chì ùn sò micca stati trasmessi.

In questu modu, l'indexazione incrementale pò esse ottenuta è a quantità di calculu hè ridutta.

In l'interazzione front-end, a barra di prugressu di carica di l'indici pò esse affissata per evità u ritardu quandu si carica per a prima volta Vede "Barra di prugressu cù Animazione, Basata nantu à una progress + implementazione css Pura" [English](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [Chinese](//juejin.cn/post/7413586285954154522) .

### IndexedDB Alta Scrittura Simultanea

U prugettu hè [idb](//www.npmjs.com/package/idb) basatu annantu à l'incapsulazione asincrona di IndexedDB

IndexedDB leghje è scrive sò asincroni. Quandu creanu un indice, i ducumenti seranu caricati simultaneamente per creà l'indici.

Per evitari a perdita di dati parziale causata da scrittura cumpetitiva, pudete riferite à u codice `coffeescript` quì sottu è aghjunghje una cache `ing` trà lettura è scrittura per intercepte i scritturi cuncurrenti.

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

## Precisione È Richiamata

A ricerca prima segmenterà e parole chjave inserite da l'utilizatore.

Assumimu chì ci sò `N` parolle dopu à a segmentazione di a parolla Quandu i risultati sò tornati, i risultati chì cuntenenu tutte e parole chjave seranu tornati prima, è dopu i risultati chì cuntenenu `N-1` , `N-2` ,..., `1` parole chjave.

I risultati di ricerca affissati prima assicuranu l'accuratezza di a dumanda, è i risultati caricati in seguitu (cliccate u buttone di carica più) assicuranu a freccia di ricurdà.

![](//p.3ti.site/1727684564.avif)

## Carica Nantu À Dumanda

Per migliurà a veloce di risposta, a ricerca usa u generatore `yield` per implementà a carica nantu à a dumanda, è torna `limit` volta chì un risultatu hè dumandatu.

Nota chì ogni volta chì cercate di novu dopu à `yield` , avete bisognu di riapertura una transazzione di dumanda di `IndexedDB` .

## Prefissu Di Ricerca in Tempu Reale

Per vede i risultati di ricerca mentre l'utilizatore scrive, per esempiu, quandu `wor` hè inseritu, e parolle prefissate cù `wor` cum'è `words` è `work` sò visualizate.

![](//p.3ti.site/1727684944.avif)

U kernel di ricerca utilizerà a tavola `prefix` per l'ultima parola dopu a segmentazione di a parolla per truvà tutte e parolle prefissate cun ella, è cercate in sequenza.

A funzione anti-shake `debounce` hè ancu aduprata in l'interazzione front-end (implementata cum'è seguita) per riduce a freccia di l'input di l'utilizatori chì attivanu e ricerche è riduce a quantità di calculu.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Disponibile Offline

A tavula d'indici ùn guarda micca u testu originale, solu e parolle, chì riduce a quantità di almacenamiento.

Evidenzià i risultati di ricerca richiede di ricaricà u testu uriginale, è l'abbinamentu di `service worker` pò evità e dumande di rete ripetute.

À u listessu tempu, perchè `service worker` cache tutti l'articuli, una volta chì l'utilizatore effettua una ricerca, tuttu u situ web, cumprese a ricerca, hè dispunibule offline.

## Ottimisazione Di Visualizazione Di I Ducumenti MarkDown

A suluzione pura di ricerca front-end di `i18n.site` hè ottimizzata per `MarkDown` documenti.

Quandu si vede i risultati di ricerca, u nome di u capitulu serà affissatu è u capitulu serà navigatu quandu cliccate.

![](//p.3ti.site/1727686552.avif)

## Riassume

A ricerca di testu integrale invertita implementata solu in u front-end, ùn hè micca necessariu un servitore. Hè assai adattatu per i siti web chjuchi è mediani cum'è documenti è blog persunali.

`i18n.site` A ricerca di front-end pura auto-sviluppata open source, chjuca in dimensione è risposta rapida, risolve i difetti di l'attuale ricerca di testu integrale di front-end pura è furnisce una sperienza d'utilizatore megliu.