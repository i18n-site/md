---

brief: |
  i18n.site ora supporta la ricerca full-text senza server.

  Questo articolo introduce l'implementazione della tecnologia di ricerca full-text puramente front-end, inclusi l'indice inverso costruito con IndexedDB, la ricerca a prefisso, l'ottimizzazione della segmentazione delle parole e il supporto multilingue.

  Rispetto alle soluzioni esistenti, la ricerca full-text puramente front-end di i18n.site è più leggera e veloce, adatta ai siti Web di piccole e medie dimensioni come documenti e blog, e disponibile anche offline.

---

# Ricerca full-text invertita puramente front-end

## Precedenza

Dopo settimane di sviluppo, [i18n.site](//i18n.site) (strumento di creazione di siti Web e traduzione multilingue markdown puramente statico) supporta ora la ricerca full-text puramente front-end.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Questo articolo condividerà l'implementazione tecnica della ricerca full-text puramente front-end di `i18n.site`. Visita [i18n.site](//i18n.site) per sperimentare l'effetto della ricerca.

Codice open source: [Cerca kernel](//github.com/i18n-site/ie/tree/main/qy) / [interfaccia interattiva](//github.com/i18n-site/plugin/tree/main/qy)

## Panoramica delle soluzioni di ricerca full-text senza server

Per i siti web puramente statici di piccole e medie dimensioni come documenti/blog personali, la creazione di un backend di ricerca full-text autocostruito è troppo pesante e la ricerca full-text senza servizi è la scelta più comune.

Le soluzioni di ricerca full-text senza server si distinguono in due grandi categorie:

Prima di tutto, [algolia.com](//algolia.com) offre componenti front-end per la ricerca full-text da fornitori di servizi di ricerca di terze parti.

Questi servizi prevedono un pagamento in base al volume di ricerca e spesso non sono accessibili agli utenti in Cina continentale a causa di problemi di conformità del sito web.

Non può essere utilizzato offline e non può essere utilizzato in rete interna, presentando grandi limitazioni. Questo articolo non discute ampiamente questo argomento.

La seconda categoria è la ricerca full-text puramente front-end.

Al momento, le soluzioni di ricerca full-text front-end più comuni includono [lunrjs](//lunrjs.com) e [ElasticLunr.js](//github.com/weixsong/elasticlunr.js) (sviluppate su base `lunrjs`).

`lunrjs` ha due metodi di costruzione degli indici, e entrambi presentano problemi.

1. Indici predefiniti

   Poiché l'indice contiene tutte le parole dei documenti, è di grandi dimensioni.
   Ogni volta che un documento viene aggiunto o modificato, è necessario caricare un nuovo file di indice.
   Questo aumenterà il tempo di attesa dell'utente e consumerà molta larghezza di banda.

2. Carica documenti e crea indici in tempo reale

   La creazione dell'indice è un'attività computazionalmente intensiva. La ricostruzione dell'indice ogni volta che si accede causerà ritardi evidenti e una scarsa esperienza utente.

---

Oltre a `lunrjs`, esistono altre soluzioni di ricerca full-text, come:

[fusejs](//www.fusejs.io), che calcola la somiglianza tra le stringhe da cercare.

Questa soluzione ha prestazioni estremamente scarse e non può essere utilizzata per la ricerca full-text (vedi [Fuse.js Una query lunga richiede più di 10 secondi, come ottimizzarla?](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries)).

[TinySearch](//github.com/tinysearch/tinysearch), che utilizza il filtro Bloom per la ricerca, non può essere utilizzato per la ricerca a prefisso (ad esempio, inserisci `goo`, cerca `good`, `google`) e non può ottenere un effetto di completamento automatico simile.

Poiché le soluzioni esistenti presentano ciascuna i propri svantaggi, `i18n.site` ha sviluppato una nuova soluzione di ricerca full-text front-end, completamente autonoma, con le seguenti caratteristiche:

1. Supporta la ricerca multilingue, ha una dimensione ridotta e il nucleo di ricerca compresso con `gzip` pesa `6.9KB` (a confronto, `lunrjs` pesa `25KB`)
1. Utilizza `indexedb` per costruire un indice invertito, con basso consumo di memoria e alta velocità
1. Quando i documenti vengono aggiunti/modificati, solo i documenti aggiunti o modificati vengono reindicizzati, riducendo la quantità di calcoli
1. Supporta la ricerca a prefisso, che può visualizzare i risultati della ricerca in tempo reale mentre l'utente digita
1. Disponibile offline

Di seguito verranno descritti in dettaglio i dettagli tecnici di implementazione di `i18n.site`.

## Segmentazione delle parole multilingue

La segmentazione delle parole utilizza il `Intl.Segmenter` nativo del browser, un'interfaccia supportata dai principali browser.

![](//p.3ti.site/1727667759.avif)

Il codice di segmentazione delle parole in `coffeescript` è il seguente:

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

* `/\p{P}/` è un'espressione regolare che abbraccia i segni di punteggiatura. I simboli specificamente corrispondenti includono: `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _` { | } `.</p><ul><li> `split('.')` è perché `Firefox` segmentazione delle parole del browser non segmenta `. ` .</li>


## Costruzione dell'indice

In `IndexedDB` sono state create cinque tabelle di oggetti di archiviazione:

* `word`: id - parola
* `doc` : id - url - versione del documento
* `docWord`: id documento - array di id parole
* `prefix`: prefisso - array di id parole
* `rindex`: id parola - array di id documento : numeri di riga

Passa un array contenente l'`url` del documento e il numero di versione `ver`, cercando se il documento esiste nella tabella `doc`. Se non esiste, crea un indice invertito. Allo stesso tempo, rimuove l'indice invertito per i documenti non inclusi nell'array.

In questo modo è possibile ottenere un'indicizzazione incrementale e ridurre la quantità di calcoli.

Nell'interazione front-end, è possibile visualizzare la barra di avanzamento del caricamento dell'indice per evitare ritardi durante il primo caricamento. Vedere "Barra di avanzamento con animazione, basata su un'unica progress + Pure css Implementazione" [Inglese](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [Cinese](//juejin.cn/post/7413586285954154522).

### Scrittura concorrente in IndexedDB

Il progetto è stato sviluppato basandosi su un'incapsulazione asincrona di IndexedDB, utilizzando [idb](//www.npmjs.com/package/idb).

Le operazioni di lettura e scrittura su IndexedDB sono asincrone. Durante la creazione dell'indice, i documenti vengono caricati contemporaneamente per la creazione dell'indice.

Per evitare la perdita parziale di dati causata dalla scrittura concorrente, è possibile fare riferimento al codice `coffeescript` riportato di seguito e aggiungere una cache `ing` tra la lettura e la scrittura per intercettare le scritture concorrenti.

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

## Precisione e recall

La ricerca segmenta prima le parole chiave inserite dall'utente.

Se ci sono `N` parole dopo la segmentazione, i risultati vengono restituiti iniziando da quelli che contengono tutte le parole chiave, poi quelli con `N-1`, `N-2`, ..., `1` parole chiave.

I risultati della ricerca visualizzati per primi garantiscono l'accuratezza della query e i risultati caricati successivamente (fai clic sul pulsante "Carica altro") garantiscono il recall.

![](//p.3ti.site/1727684564.avif)

## Caricamento su richiesta

Per migliorare la velocità di risposta, la ricerca utilizza il generatore `yield` per implementare il caricamento su richiesta e restituisce `limit` risultati ogni volta che viene richiesto un risultato.

Attenzione, dopo ogni `yield` è necessario aprire una nuova transazione di query in `IndexedDB`.

## Ricerca a prefisso in tempo reale

Per visualizzare i risultati della ricerca in tempo reale mentre l'utente digita, ad esempio, digitando `wor` vengono mostrate le parole che iniziano con `wor` come `words` e `work`.

![](//p.3ti.site/1727684944.avif)

Il kernel di ricerca utilizza la tabella `prefix` per trovare tutte le parole con il prefisso dell'ultima parola dopo la segmentazione delle parole e cerca in sequenza.

La funzione di debostramento `debounce` è impiegata anche nell'interazione front-end (come illustrato di seguito) per mitigare la frequenza di attivazione delle ricerche a seguito dell'input utente e ridurre il carico computazionale.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Disponibile offline

La tabella dell'indice non memorizza il testo originale, ma solo le parole, riducendo così la quantità di spazio di archiviazione.

L'evidenziazione dei risultati della ricerca richiede il ricaricamento del testo originale e la corrispondenza con `service worker` può evitare richieste di rete ripetute.

Allo stesso tempo, poiché `service worker` memorizza nella cache tutti gli articoli, una volta che l'utente esegue una ricerca, l'intero sito Web, inclusa la ricerca, è disponibile offline.

## Ottimizzazione della visualizzazione dei documenti Markdown

La soluzione di ricerca front-end completamente autonoma di `i18n.site` è ottimizzata per i documenti `MarkDown`.

Quando si visualizzano i risultati della ricerca, viene visualizzato il nome del capitolo e, quando si fa clic, è possibile navigare al capitolo.

![](//p.3ti.site/1727686552.avif)

## Conclusione

La ricerca full-text invertita implementata esclusivamente sul front-end non richiede un server. È particolarmente adatta ai siti Web di piccole e medie dimensioni come documenti e blog personali.

La ricerca front-end completamente autonoma sviluppata da `i18n.site` è open source, ha una dimensione ridotta e una risposta rapida, risolvendo i vari problemi della ricerca full-text front-end esistente e offrendo una migliore esperienza utente.