# Elenco Stili

[Clicca qui per sfogliare il file sorgente di questa pagina](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/zh/i18n.site/md/styl.md) per vedere come scrivere `MarkDown` nei seguenti stili.

## Blocco Piegato

|+| Cos'è MarkDown?

    MarkDown è un linguaggio di markup leggero che consente agli utenti di creare documenti formattati in un formato di testo semplice facile da leggere e scrivere.

    Comunemente utilizzato per scrivere documentazione, articoli di blog, e-book, post di forum, ecc.

    Presenta i seguenti vantaggi:

    1. Facile da imparare
    1. Altamente leggibile
    1. Facile controllo della versione

       Poiché i documenti `MarkDown` sono in formato testo semplice, i programmatori possono facilmente incorporarli nei sistemi di controllo della versione (come `git` ).

       Ciò rende il monitoraggio delle modifiche e la collaborazione molto più semplice, soprattutto nello sviluppo del team.

|-| Cos'è l'I18N?

    "I18N" è l'abbreviazione di "Internazionalizzazione".

    Poiché la parola "Internazionalizzazione" ha 18 lettere tra la "I" e la "N", per semplificare la rappresentazione si utilizza "I18N".

    In parole povere, significa supportare più lingue.


Il blocco pieghevole è una sintassi estesa da `i18n.site` a `MarkDown` , scritta come segue :

```
|+| TITLE
    MARKDOWN CONTENT
    YOUR CAN WRITE MULTI LINE CONTENT
```

con `|+| `或`|-| La riga che inizia con ` genererà un blocco di piegatura e il contenuto del blocco di piegatura saranno le righe successive con lo stesso livello di rientro (i paragrafi sono separati da righe vuote).

Passa`|-| `标记的折叠块默认展开，`|+| "I blocchi compressi contrassegnati sono compressi per impostazione predefinita.

## Sottolineato & Barrato &

__ è __~~ barrato~~ e testo di presentazione **in grassetto** .

È scritto come segue:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

Il parser `MarkDown` dello strumento di creazione di siti Web `i18n.site` ha ottimizzato la sottolineatura, il barrato e la sintassi in grassetto. Può avere effetto senza spazi prima e dopo il segno, rendendo più semplice la scrittura di documenti in lingue come Cina, Giappone e Corea. non utilizzare spazi come separatori.

Lettura estesa : [Perché la sintassi Markdown ( `**……**` ) dei Nuggets a volte non ha effetto?](//juejin.cn/post/7064565848421171213)

## Citazione

### Citazione a Riga Singola

> È nella mia natura che i miei talenti siano utili e tornerò dopo che tutti i miei soldi saranno stati spesi.
<p style="text-align:right">─ Li Bai</p>

### Virgolette Su Più Righe

> Un altro vantaggio unico della fantascienza è la sua portata estremamente ampia.
> Una "Guerra e Pace", con un milione di parole, descrive solo la storia di una regione per diversi decenni;
> E i romanzi di fantascienza come "La risposta finale" di Asimov descrivono vividamente i miliardi di anni di storia dell'intero universo, compresi gli esseri umani, in poche migliaia di parole.
> Tale inclusività e audacia sono impossibili da raggiungere nella letteratura tradizionale.
<p style="text-align:right">── Liu Cixin</p>

### Suggerimento `> [!TIP]`

> [!TIP]
> Ricordati di verificare la validità del tuo passaporto e del visto. I documenti scaduti non possono entrare né uscire dal Paese.

È scritto come segue

```
> [!TIP]
> YOUR CONTENT
```

### Osservazione `> [!NOTE]`

> [!NOTE]
> Se mi invii un messaggio e io rispondo immediatamente, cosa significa?
> Ciò dimostra che mi piace davvero giocare con i telefoni cellulari.


### Avvertimento `> [!WARN]`

> [!WARN]
> Quando si intraprende un'avventura selvaggia, è importante stare al sicuro. Ecco alcuni suggerimenti chiave per la sicurezza:
>
> - **Controllare le previsioni del tempo** : La settimana scorsa, un gruppo di alpinisti si è imbattuto in un temporale a metà montagna perché non avevano controllato le previsioni del tempo e hanno dovuto evacuare urgentemente.
> - **Porta con te l'attrezzatura necessaria** : assicurati di portare abbastanza cibo, acqua e forniture di pronto soccorso.
> - **Comprendere il terreno** : familiarizzare in anticipo con il terreno e i percorsi dell'area avventura per evitare di perdersi.
> - **Rimani connesso** : rimani connesso al mondo esterno e assicurati che tutti possano tornare in sicurezza.
>
> Ricorda, la sicurezza viene sempre prima di tutto!

## Lista Delle Cose Da Fare

- [x] Progettare il prototipo del prodotto e l'elenco delle caratteristiche
- [ ] Determinare lo stack tecnologico e gli strumenti di sviluppo
- [ ] Sviluppare scadenze e traguardi di sviluppo del prodotto

## Lista

### Elenco Ordinato

1. corsa
   1. Tre volte a settimana, 5 chilometri ogni volta
   1. Corri una mezza maratona
1. allenamento in palestra
   1. Due volte a settimana, 1 ora ogni volta
   1. Concentrati sui muscoli centrali

### Elenco Non Ordinato

* eventi sociali
  - Partecipare agli incontri di scambio di settore
    + Sessione di condivisione tecnologica
    + Incontro di scambio imprenditoriale
  - Organizza un incontro tra amici
    + Barbecue all'aperto
    + serata al cinema

## Foglio

| pensatore       | Principali contributi                           |
|--------------|------------------------------------|
| Confucio         | Fondatore del confucianesimo |
| Socrate     | padre della filosofia occidentale  |
| Nietzsche         | Filosofia di Superman, che critica la moralità e la religione tradizionali       |
| Marx       | comunismo |

### Ottimizzazione Della Visualizzazione Di Tabelle Di Grandi Dimensioni

Per tabelle relativamente grandi, è possibile utilizzare i seguenti metodi per ottimizzare l'effetto di visualizzazione:

1. Utilizza un carattere più piccolo

   Ad esempio, avvolgi la tabella tra `<div style="font-size:14px">` e `</div>` .

   Tieni presente che il tag `div` deve occupare una propria riga e lasciare righe vuote prima e dopo di essa.
1. Per testo più lungo in una cella, inserisci `<br>` per mandare a capo la riga
1. Se una colonna è troppo corta, puoi aggiungere `<div style="width:100px">xxx</div>` all'intestazione per espanderne la larghezza e puoi anche aggiungere [`<wbr>` all'intestazione](//developer.mozilla.org/docs/Web/HTML/Element/wbr) per controllare la posizione dell'interruzione di riga.

Un esempio dimostrativo è il seguente:

<div style="font-size:14px">

| nazione       | <div style="width:70px;margin:auto">nome del pensatore</div> | Epoca | Principali contributi ideologici                                                       |
|------------|------------------------------------------------|-----------------|--------------------------------------------------------------------|
| Cina       | Confucio                                           | 551-479 a.C   | Il fondatore del confucianesimo propose concetti fondamentali come "benevolenza" e "correttezza" e enfatizzò la coltivazione morale e l'ordine sociale. |
| grecia antica     | Socrate                                       | 469-399 a.C   | Esplorare la verità attraverso il dialogo e la dialettica propone il "conosci te stesso" e sottolinea il pensiero razionale         |
| Francia       | Voltaire                                         | 1694-1778       | Figure rappresentative dell'Illuminismo sostenevano la razionalità, la libertà e l'uguaglianza e criticavano la superstizione religiosa e il governo autoritario.   |
| Germania       | Kant                                           | 1724-1804       | Presentare la "Critica della ragion pura"<br> Esplora i fondamenti della moralità, della libertà e della conoscenza, sottolineando la ragione pratica     |

</div>

Lo pseudocodice per l'esempio precedente è il seguente:

```md

<div style="font-size:14px">

| xx | <div style="width:70px;margin:auto">xx<wbr>xx</div> | xx | xx |
|----|----|-----------|----|
| xx | xx | xx<br>xxx | xx |

</div>

```

## Codice

### Codice in Linea

Nel vasto mondo dei linguaggi di programmazione, `Rust` , `Python` , `JavaScript` e `Go` occupano ciascuno una posizione unica.

### Più Righe Di Codice

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```

## Interruzione Di Riga All'interno Del Paragrafo

È possibile ottenere interruzioni di riga all'interno dei paragrafi senza aggiungere righe vuote tra le righe.
La spaziatura tra le interruzioni di riga all'interno dei paragrafi è inferiore alla spaziatura tra i paragrafi.

Per esempio:

> Vivi come una grande persona,
> Anche la morte è un eroe fantasma.
> Mi manca ancora Xiang Yu,
> Riluttante ad attraversare Jiangdong.
>
> Li Qingzhao ha utilizzato la tragica storia di Xiang Yu per alludere all'incompetenza della dinastia Song.
> Esprimere insoddisfazione nei confronti della corte imperiale per essersi arresa senza combattere.