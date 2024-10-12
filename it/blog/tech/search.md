---

brief: |
  i18n.site ora supporta la ricerca full-text senza server.

  Articolo introduttivo sulla realizzazione della tecnologia di ricerca full-text front-end pura, inclusi l'indice invertito costruito con IndexedDB, la ricerca per prefisso, l'ottimizzazione della segmentazione delle parole e il supporto multilingue.

  Comparato alle soluzioni esistenti, la ricerca full-text front-end di i18n.site è di dimensioni ridotte e veloce, adatta a siti web di piccole e medie dimensioni come documenti e blog, e disponibile anche offline.

---

# Ricerca full-text invertita puramente front-end

## Indice

Dopo alcune settimane di sviluppo, [i18n.site](//i18n.site) (strumento di traduzione e creazione di siti web multilingue basato su markdown puramente statico) ora supporta la ricerca full-text puramente front-end.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Questo articolo condividerà l'implementazione tecnica della ricerca full-text front-end di `i18n.site`. Visita [i18n.site](//i18n.site) per provare l'effetto di ricerca.

Codice open source: [kernel di ricerca](//github.com/i18n-site/ie/tree/main/qy) / [interfaccia utente](//github.com/i18n-site/plugin/tree/main/qy)

## Overview delle soluzioni di ricerca full-text senza server

Per i siti web puramente statici di piccole e medie dimensioni come documenti/blog personali, la creazione di un backend di ricerca full-text autocostruito è troppo pesante e la ricerca full-text senza servizi è la scelta più comune.

Le soluzioni di ricerca full-text senza server si dividono in due categorie principali:

In primo luogo, servizi di ricerca di terze parti come [algolia.com](//algolia.com) che forniscono componenti front-end per la ricerca full-text.

Tali servizi richiedono un pagamento in base al volume di ricerca e spesso non sono disponibili per gli utenti in Cina continentale a causa di problemi di conformità del sito web.

Non possono essere utilizzati offline o in rete interna, con molte limitazioni. Questo articolo non li discuterà ulteriormente.

In secondo luogo, la ricerca full-text puramente front-end.

Le soluzioni di ricerca full-text front-end più comuni attualmente sono [lunrjs](//lunrjs.com) e [ElasticLunr.js](//github.com/weixsong/elasticlunr.js) (sviluppato su `lunrjs`).

`lunrjs` ha due metodi di costruzione dell'indice, entrambi con problemi specifici.

1. Indice pre-costruito

   Poiché l'indice contiene tutte le parole dei documenti, è di grandi dimensioni.
   Ogni volta che un documento viene aggiunto o modificato, è necessario caricare un nuovo file indice.
   Incrementa il tempo di attesa dell'utente e consuma molta larghezza di banda.

2. Caricamento dei documenti e costruzione dell'indice in tempo reale

   La costruzione dell'indice è un'attività ad alta intensità di calcolo. Ricostruire l'indice ogni volta che si accede causerà ritardi evidenti e una scarsa esperienza utente.

---

Oltre a `lunrjs`, ci sono altre soluzioni di ricerca full-text, come:

[fusejs](//www.fusejs.io), che ricerca calcolando la somiglianza tra le stringhe.

Questa soluzione ha prestazioni molto scarse e non può essere utilizzata per la ricerca full-text (vedi [Fuse.js Query lunghe richiedono più di 10 secondi, come ottimizzare?](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries)).

[TinySearch](//github.com/tinysearch/tinysearch), che utilizza il filtro Bloom per la ricerca, non supporta la ricerca per prefisso (ad esempio, digitare `goo` per cercare `good`, `google`) e non può implementare funzionalità di completamento automatico simili.

A causa dei problemi delle soluzioni esistenti, `i18n.site` ha sviluppato una nuova soluzione di ricerca full-text front-end pura con le seguenti caratteristiche:

1. Supporta la ricerca multilingue, con dimensioni ridotte. Il kernel di ricerca compresso con `gzip` ha una dimensione di `6.9KB` (a confronto, `lunrjs` ha una dimensione di `25KB`)
1. Costruzione dell'indice invertito basato su `IndexedDB`, con basso utilizzo di memoria e alta velocità
1. Quando i documenti vengono aggiunti/modificati, solo i documenti aggiunti o modificati vengono reindicizzati, riducendo la quantità di calcoli
1. Supporta la ricerca per prefisso, mostrando i risultati della ricerca in tempo reale mentre l'utente digita
1. Disponibile offline

Di seguito, dettagliamo l'implementazione tecnica di `i18n.site`.

## Segmentazione delle parole multilingue

La segmentazione delle parole utilizza `Intl.Segmenter` nativo del browser, supportato dai principali browser.

![](//p.3ti.site/1727667759.avif)

Il codice di segmentazione delle parole in `coffeescript` è il seguente:

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

In cui:

* `/\p{P}/` è un'espressione regolare per i segni di punteggiatura, che corrisponde a: `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _ ` { | } `.</p><ul><li> `split('.')` è perché `Firefox` segmentazione delle parole del browser non segmenta `.` .</li>


## Costruzione dell'indice

In `IndexedDB` sono stati creati 5 oggetti di archiviazione:

* `word`: id - parola
* `doc`: id - URL del documento - versione del documento
* `docWord`: id del documento - array di id delle parole
* `prefix`: prefisso - array di id delle parole
* `rindex`: id della parola - array di id del documento: numeri di riga

Passando un array di `url` e `ver` del documento, si verifica se il documento esiste nella tabella `doc`. Se non esiste, si crea l'indice invertito. Allo stesso tempo, si rimuovono gli indici invertiti per i documenti non trasmessi.

In questo modo si ottiene un'indicizzazione incrementale, riducendo la quantità di calcoli.

Nell'interfaccia utente front-end, è possibile visualizzare la barra di avanzamento del caricamento dell'indice per evitare ritardi durante il primo caricamento. Vedere "Barra di avanzamento con animazione, basata su un'unica progress + Pure css Implementazione" [inglese](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [cinese](//juejin.cn/post/7413586285954154522).

### Scrittura asincrona elevata di IndexedDB

Il progetto è sviluppato su [idb](//www.npmjs.com/package/idb), un'incapsulamento asincrono di IndexedDB.

Le operazioni di lettura e scrittura di IndexedDB sono asincrone. Durante la creazione dell'indice, i documenti vengono caricati contemporaneamente per creare l'indice.

Per evitare la perdita di dati causata dalla scrittura concorrente, si può fare riferimento al codice `coffeescript` riportato di seguito, aggiungendo una cache `ing` tra la lettura e la scrittura per intercettare le scritture concorrenti.

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

## Ricerca in tempo reale per prefisso

Per visualizzare i risultati della ricerca mentre l'utente digita, ad esempio, quando si inserisce `wor`, vengono visualizzate le parole con il prefisso `wor` come `words` e `work`.

![](//p.3ti.site/1727684944.avif)

Il kernel di ricerca utilizza la tabella `prefix` per l'ultima parola dopo la segmentazione delle parole per trovare tutte le parole con quel prefisso e cercare in sequenza.

Nell'interfaccia utente front-end, viene utilizzata la funzione `debounce` (implementata come segue) per ridurre la frequenza delle ricerche attivate dall'input dell'utente e ridurre la quantità di calcoli.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Precisione e recall

La ricerca segmenta prima le parole chiave inserite dall'utente.

Supponiamo che ci siano `N` parole dopo la segmentazione delle parole. Quando si restituiscono i risultati, vengono restituiti prima i risultati che contengono tutte le parole chiave, poi quelli che contengono `N-1`, `N-2`, ..., `1` parole chiave.

I risultati della ricerca visualizzati per primi garantiscono la precisione della query, mentre i risultati caricati successivamente (cliccando sul pulsante "Carica altro") garantiscono il recall.

![](//p.3ti.site/1727684564.avif)

## Caricamento su richiesta

Per migliorare la velocità di risposta, la ricerca utilizza il generatore `yield` per implementare il caricamento su richiesta, restituendo i risultati ogni volta che si raggiunge `limit`.

Tieni presente che ogni volta che si esegue una nuova ricerca dopo `yield`, è necessario riaprire una transazione di query di `IndexedDB`.

## Ricerca in tempo reale per prefisso

Per visualizzare i risultati della ricerca mentre l'utente digita, ad esempio, quando si inserisce `wor`, vengono visualizzate le parole con il prefisso `wor` come `words` e `work`.

![](//p.3ti.site/1727684944.avif)

Il kernel di ricerca utilizza la tabella `prefix` per l'ultima parola dopo la segmentazione delle parole per trovare tutte le parole con quel prefisso e cercare in sequenza.

Nell'interfaccia utente front-end, viene utilizzata la funzione `debounce` (implementata come segue) per ridurre la frequenza delle ricerche attivate dall'input dell'utente e ridurre la quantità di calcoli.

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

L'evidenziazione dei risultati della ricerca richiede il ricaricamento del testo originale, e la combinazione con `service worker` può evitare richieste di rete ripetute.

Allo stesso tempo, poiché `service worker` memorizza nella cache tutti gli articoli, una volta che l'utente esegue una ricerca, l'intero sito web, inclusa la ricerca, è disponibile offline.

## Ottimizzazione della visualizzazione dei documenti Markdown

La soluzione di ricerca front-end pura di `i18n.site` è ottimizzata specificamente per i documenti `Markdown`.

Quando si visualizzano i risultati della ricerca, viene visualizzato il nome del capitolo e, cliccandoci, si naviga direttamente al capitolo.

![](//p.3ti.site/1727686552.avif)

## Sintesi

La ricerca full-text invertita implementata esclusivamente sul front-end, senza server, è molto adatta per siti web di piccole e medie dimensioni come documenti e blog personali.

La ricerca full-text front-end pura sviluppata e resa open source da `i18n.site` è di piccole dimensioni, con risposta rapida, risolvendo i problemi delle soluzioni esistenti e offrendo una migliore esperienza utente.