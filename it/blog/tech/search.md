# Ricerca Full-Text Invertita Front-End Pura

## Sequenza

Dopo diverse settimane di sviluppo, [i18n.site](//i18n.site) (strumento di traduzione multilingue markdown e creazione di siti web puramente statici) ora supporta la ricerca full-text pura front-end.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Questo articolo condiverrà l'implementazione tecnica della ricerca full-text front-end su `i18n.site`. Visita [i18n.site](//i18n.site) per provare l'effetto di ricerca.

Il codice è open source: [motore di ricerca](//github.com/i18n-site/ie/tree/main/qy) / [interfaccia utente](//github.com/i18n-site/plugin/tree/main/qy)

## Una Panoramica Delle Soluzioni Di Ricerca Full-Text Serverless

Per i siti web puramente statici di piccole e medie dimensioni come documenti/blog personali, la creazione di un backend di ricerca full-text autocostruito è troppo pesante e la ricerca full-text senza servizi è la scelta più comune.

Lasoluzioni di ricerca full-text senza server si dividono in due grandi categorie:

La prima è rappresentata da fornitori di servizi di ricerca di terze parti come [algolia.com](//algolia.com), che offrono componenti front-end per la ricerca full-text.

Questi servizi richiedono un pagamento in base alla quantità di ricerche effettuate e spesso non sono accessibili agli utenti cinesi continentali a causa di problemi di conformità del sito.

Non possono essere utilizzati offline o in rete interna, con limitazioni significative. Questo articolo non li discuterà ulteriormente.

La seconda categoria è la ricerca full-text puramente front-end.

Al momento, le ricerche full-text puramente front-end più comuni sono [lunrjs](//lunrjs.com) e [ElasticLunr.js](//github.com/weixsong/elasticlunr.js) (sviluppato ulteriormente basato su `lunrjs`).

`lunrjs` offre due metodi per costruire gli indici, ma entrambi presentano problemi.

1. File indice predefiniti

   Poiché l'indice contiene tutte le parole dei documenti, è di grandi dimensioni.
   Ogni volta che un documento viene aggiunto o modificato, è necessario caricare un nuovo file indice.
   Questo aumenta il tempo di attesa dell'utente e consuma molta larghezza di banda.

2. Carica documenti e crea indici al volo

   La costruzione dell'indice è un'attività ad alta intensità di calcolo. La ricostruzione dell'indice ad ogni accesso causa ritardi evidenti e una scarsa esperienza utente.

---

Oltre a `lunrjs`, ci sono altre soluzioni di ricerca full-text, come:

[fusejs](//www.fusejs.io) calcola la somiglianza tra le stringhe per effettuare la ricerca.

Questa soluzione presenta prestazioni molto scarse e non è adatta per la ricerca full-text (vedi [Fuse.js: query lunghe richiedono più di 10 secondi, come ottimizzare?](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries)).

[TinySearch](//github.com/tinysearch/tinysearch) utilizza il filtro Bloom per la ricerca, ma non supporta la ricerca per prefisso (ad esempio, digitando `goo` non si può cercare `good` o `google`), né permette di ottenere un effetto di completamento automatico.

Poiché le soluzioni esistenti presentano vari svantaggi, `i18n.site` ha sviluppato una nuova soluzione di ricerca full-text front-end, con le seguenti caratteristiche:

1. Supporta la ricerca multilingue ed è di piccole dimensioni. La dimensione del kernel di ricerca dopo aver impacchettato `gzip` è `6.9KB` (per confronto, la dimensione di `lunrjs` è `25KB`)
1. Utilizza `IndexedDB` per costruire l'indice invertito, con basso consumo di memoria e alta velocità
1. Quando i documenti vengono aggiunti/modificati, solo i documenti aggiunti o modificati vengono reindicizzati, riducendo la quantità di calcoli
1. Supporta la ricerca del prefisso, mostrando i risultati della ricerca in tempo reale mentre l'utente digita
1. Disponibile Offline

Procederemo a descrivere in dettaglio l'implementazione tecnica di `i18n.site`.

## Segmentazione Delle Parole Multilingue

La segmentazione delle parole utilizza l'API `Intl.Segmenter` nativa del browser, supportata dai principali browser.

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

* `/\p{P}/` è un'espressione regolare che corrisponde ai segni di punteggiatura, inclusi: `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _ ` { | } `.</p><ul><li> `split('.')` è perché `Firefox` segmentazione delle parole del browser non segmenta `.` .</li>


## Costruzione Dell'indice

5 tabelle di archiviazione oggetti sono state create in `IndexedDB` :

* `word` : id - parole
* `word`: id - parola
* `doc`: id - URL del documento - versione del documento
* `docWord`: id del documento - array di id delle parole
* `prefix`: prefisso - array di id delle parole

Passa l'array del documento `url` e del numero di versione `ver` e cerca se il documento esiste nella tabella `doc` Se non esiste, crea un indice invertito. Allo stesso tempo, rimuovi l'indice invertito per i documenti che non sono stati trasmessi.

In questo modo è possibile ottenere un'indicizzazione incrementale e ridurre la quantità di calcoli.

Nell'interazione front-end, è possibile visualizzare una barra di avanzamento per il caricamento dell'indice, al fine di prevenire eventuali ritardi durante il primo caricamento. Si veda "Barra di avanzamento animata, realizzata con un singolo elemento progress e CSS puro" [Inglese](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [Cinese](//juejin.cn/post/7413586285954154522).

### Scrittura Simultanea Elevata Di IndexedDB

Il progetto è sviluppato basato sull'incapsulamento asincrono di IndexedDB, [idb](//www.npmjs.com/package/idb).

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

## Precisione E Richiamo

La ricerca segmenterà innanzitutto le parole chiave inserite dall'utente.

Supponiamo che ci siano `N` parole dopo la segmentazione delle parole. Quando si restituiscono i risultati, verranno restituiti prima i risultati contenenti tutte le parole chiave, quindi i risultati contenenti `N-1` , `N-2` ,..., `1` parole chiave.

I risultati della ricerca visualizzati per primi garantiscono l'accuratezza della query, mentre i risultati caricati successivamente (fare clic sul pulsante Carica altro) garantiscono il tasso di richiamo.

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

L'evidenziazione dei risultati della ricerca richiede il ricaricamento del testo originale; utilizzando `service worker` è possibile evitare richieste di rete ripetute.

## Ottimizzazione Della Visualizzazione Dei Documenti MarkDown

`i18n.site` è una soluzione di ricerca front-end pura ottimizzata per `MarkDown` documenti.

Quando si visualizzano i risultati della ricerca, verrà visualizzato il nome del capitolo e quando si fa clic si potrà navigare nel capitolo.

![](//p.3ti.site/1727686552.avif)

## Riassumere

Implementazione di una ricerca full-text invertita puramente front-end, senza la necessità di un server. Molto adatto per siti di piccole e medie dimensioni come documenti e blog personali.

La ricerca front-end pura sviluppata da `i18n.site` è open source, compatta e veloce, risolvendo i problemi delle attuali soluzioni di ricerca full-text front-end e offrendo una migliore esperienza utente.