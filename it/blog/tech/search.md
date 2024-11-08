---

brief: |
  i18n.site ora supporta la ricerca full-text serverless.

  Questo articolo introduce l'implementazione della pura tecnologia di ricerca full-text front-end, incluso l'indice invertito creato da IndexedDB, la ricerca del prefisso, l'ottimizzazione della segmentazione delle parole e il supporto multilingue.

  Rispetto alle soluzioni esistenti, la ricerca full-text front-end di i18n.site è di piccole dimensioni e veloce, adatta a siti Web di piccole e medie dimensioni come documenti e blog ed è disponibile offline.

---

# Ricerca Full-Text Invertita Front-End Pura

## Sequenza

Dopo diverse settimane di sviluppo, [i18n.site](//i18n.site) (uno strumento di creazione di siti Web & markdown traduzione multilingue puramente statico) ora supporta la ricerca full-text pura front-end.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Questo articolo condividerà l'implementazione tecnica della ricerca full-text front-end `i18n.site` . Visita [i18n.site](//i18n.site)

Codice open source : [Cerca kernel](//github.com/i18n-site/ie/tree/main/qy) / [interfaccia interattiva](//github.com/i18n-site/plugin/tree/main/qy)

## Una Revisione Delle Soluzioni Di Ricerca Full-Text Serverless

Per i siti web puramente statici di piccole e medie dimensioni, come documenti/blog personali, la creazione di un backend di ricerca full-text autocostruito è troppo pesante e la ricerca full-text senza servizi è la scelta più comune.

Le soluzioni di ricerca full-text serverless rientrano in due grandi categorie:

Innanzitutto [algolia.com](//algolia.com) i fornitori di servizi di ricerca di terze parti forniscono componenti front-end per la ricerca full-text.

Tali servizi richiedono un pagamento in base al volume di ricerca e spesso non sono disponibili per gli utenti nella Cina continentale a causa di problemi quali la conformità del sito web.

Non può essere utilizzato offline, non può essere utilizzato su Intranet e presenta grandi limitazioni. Questo articolo non parla molto.

La seconda è la pura ricerca full-text front-end.

Al momento, le ricerche comuni di testo completo front-end includono [lunrjs](//lunrjs.com) e [ElasticLunr.js](//github.com/weixsong/elasticlunr.js) (basate su `lunrjs` sviluppo secondario).

`lunrjs` Esistono due modi per creare indici ed entrambi presentano problemi.

1. File indice predefiniti

   Poiché l'indice contiene parole di tutti i documenti, è di grandi dimensioni.
   Ogni volta che un documento viene aggiunto o modificato, è necessario caricare un nuovo file indice.
   Aumenterà il tempo di attesa dell'utente e consumerà molta larghezza di banda.

2. Carica documenti e crea indici al volo

   La creazione di un indice è un'attività ad alta intensità di calcolo. La ricostruzione dell'indice ogni volta che si accede causerà ritardi evidenti e una scarsa esperienza utente.

---

Oltre a `lunrjs` , esistono altre soluzioni di ricerca full-text, come :

[fusejs](//www.fusejs.io) , calcola la somiglianza tra le stringhe da cercare.

Le prestazioni di questa soluzione sono estremamente scarse e non possono essere utilizzate per la ricerca full-text (vedere [Fuse.js Una query lunga richiede più di 10 secondi, come ottimizzarla?](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries) ).

[TinySearch](//github.com/tinysearch/tinysearch) , utilizza il filtro Bloom per la ricerca, non può essere utilizzato per la ricerca del prefisso (ad esempio, inserisci `goo` , cerca `good` , `google` ) e non può ottenere un effetto di completamento automatico simile.

A causa delle carenze delle soluzioni esistenti, `i18n.site` ha sviluppato una nuova soluzione di ricerca full-text front-end pura, che ha le seguenti caratteristiche :

1. Supporta la ricerca multilingue ed è di piccole dimensioni. La dimensione del kernel di ricerca dopo aver impacchettato `gzip` è `6.9KB` (per confronto, la dimensione di `lunrjs` è `25KB` ).
1. Costruisci un indice invertito basato su `indexedb` , che occupa meno memoria ed è veloce.
1. Quando i documenti vengono aggiunti/modificati, solo i documenti aggiunti o modificati vengono reindicizzati, riducendo la quantità di calcoli.
1. Supporta la ricerca del prefisso e può visualizzare i risultati della ricerca in tempo reale mentre l'utente digita.
1. Disponibile offline

Di seguito verranno introdotti in dettaglio `i18n.site` dettagli di implementazione tecnica.

## Segmentazione Delle Parole Multilingue

La segmentazione delle parole utilizza la segmentazione delle parole nativa del browser `Intl.Segmenter` e tutti i browser tradizionali supportano questa interfaccia.

![](//p.3ti.site/1727667759.avif)

Il codice di segmentazione delle parole `coffeescript` è il seguente

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

In:

* `/\p{P}/` è un'espressione regolare che corrisponde ai segni di punteggiatura. I simboli corrispondenti specifici includono: `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _` { | } `.</p><ul><li> `split('.')` è perché `Firefox` segmentazione delle parole del browser non segmenta `. ` .</li>


## Costruzione Dell'indice

5 tabelle di archiviazione oggetti sono state create in `IndexedDB` :

* `word` : id - parole
* `doc` : id - url - documento Numero di versione del documento
* `docWord` : Array del documento id - parola id
* `prefix` : Array del prefisso - parola id
* `rindex` : Parola id - Documento id : Matrice di numeri di riga

Passa l'array del documento `url` e del numero di versione `ver` e cerca se il documento esiste nella tabella `doc` Se non esiste, crea un indice invertito. Allo stesso tempo, rimuovi l'indice invertito per i documenti che non sono stati trasmessi.

In questo modo è possibile ottenere un'indicizzazione incrementale e ridurre la quantità di calcoli.

Nell'interazione front-end, è possibile visualizzare la barra di avanzamento del caricamento dell'indice per evitare ritardi durante il primo caricamento. Vedere "Barra di avanzamento con animazione, basata su un'unica progress + Pure css Implementazione" [Inglese](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [Cinese](//juejin.cn/post/7413586285954154522) .

### Scrittura Simultanea Elevata Di IndexedDB

Il progetto è [idb](//www.npmjs.com/package/idb) sulla base dell'incapsulamento asincrono di IndexedDB

Le letture e le scritture di IndexedDB sono asincrone. Quando si crea un indice, i documenti verranno caricati contemporaneamente per creare l'indice.

Per evitare la perdita parziale di dati causata dalla scrittura competitiva, puoi fare riferimento al codice `coffeescript` riportato di seguito e aggiungere una cache `ing` tra la lettura e la scrittura per intercettare le scritture concorrenti.

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

## Precisione E Richiamo

La ricerca segmenterà innanzitutto le parole chiave inserite dall'utente.

Supponiamo che ci siano `N` parole dopo la segmentazione delle parole. Quando si restituiscono i risultati, verranno restituiti prima i risultati contenenti tutte le parole chiave, quindi i risultati contenenti `N-1` , `N-2` ,..., `1` parole chiave.

I risultati della ricerca visualizzati per primi garantiscono l'accuratezza della query e i risultati caricati successivamente (fare clic sul pulsante Carica altro) garantiscono il tasso di richiamo.

![](//p.3ti.site/1727684564.avif)

## Caricamento Su Richiesta

Per migliorare la velocità di risposta, la ricerca utilizza il generatore `yield` per implementare il caricamento su richiesta e restituisce `limit` volta che viene richiesto un risultato.

Tieni presente che ogni volta che esegui una nuova ricerca dopo `yield` , devi riaprire una transazione di query di `IndexedDB` .

## Prefisso Ricerca in Tempo Reale

Per visualizzare i risultati della ricerca mentre l'utente digita, ad esempio, quando viene inserito `wor` , vengono visualizzate le parole con il prefisso `wor` come `words` e `work` .

![](//p.3ti.site/1727684944.avif)

Il kernel di ricerca utilizzerà la tabella `prefix` per l'ultima parola dopo la segmentazione delle parole per trovare tutte le parole con il prefisso e cercare in sequenza.

La funzione anti-shake `debounce` viene utilizzata anche nell'interazione front-end (implementata come segue) per ridurre la frequenza dell'input dell'utente che attiva le ricerche e ridurre la quantità di calcoli.

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

La tabella dell'indice non memorizza il testo originale, ma solo le parole, riducendo così la quantità di spazio di archiviazione.

L'evidenziazione dei risultati della ricerca richiede il ricaricamento del testo originale e la corrispondenza con `service worker` può evitare richieste di rete ripetute.

Allo stesso tempo, poiché `service worker` memorizza nella cache tutti gli articoli, una volta che l'utente esegue una ricerca, l'intero sito Web, inclusa la ricerca, è disponibile offline.

## Ottimizzazione Della Visualizzazione Dei Documenti MarkDown

`i18n.site` è una soluzione di ricerca front-end pura ottimizzata per `MarkDown` documenti.

Quando si visualizzano i risultati della ricerca, verrà visualizzato il nome del capitolo e quando si fa clic si potrà navigare nel capitolo.

![](//p.3ti.site/1727686552.avif)

## Riassumere

Ricerca full-text invertita implementata esclusivamente sul front-end, nessun server richiesto. È molto adatto per siti Web di piccole e medie dimensioni come documenti e blog personali.

`i18n.site` La ricerca front-end pura autosviluppata open source, di piccole dimensioni e con risposta rapida, risolve le carenze dell'attuale ricerca full-text front-end pura e offre un'esperienza utente migliore.