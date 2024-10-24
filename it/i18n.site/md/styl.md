# Elenco di stili

[Clicca qui per visualizzare il file originale di questa pagina](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/$LANG/i18n.site/md/styl.md) per comprendere come redigere il `Markdown` seguendo questi stili.

## Sottolineato & Barrato & Grassetto

Questo è un testo di dimostrazione con __linea tratteggiata__, ~~linea tratteggiata~~ e **testo in grassetto**.

La scrittura è la seguente:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

Il parser `Markdown` dello strumento di creazione del sito `i18n.site` ha ottimizzato la gestione dei trattini, delle barrature e del grassetto, rendendo possibile l'uso di questi senza spazi prima e dopo i segni, facilitando così la scrittura di documenti in lingue come il cinese, il giapponese e il coreano, che non utilizzano spazi come separatori.

Lettura complementare: [Perché a volte la sintassi di grassetto (`**…**`) in Markdown su Juejin non funziona?](//juejin.cn/post/7064565848421171213)

## Citazione

### Citazione su singola riga

> Nella mia natura, il mio talento avrà sicuramente una sua utilità, e tornerò anche dopo aver speso tutte le mie migliaia di monete.
<p style="text-align:right">─ Li Bai</p>

### Citazione su più righe

> Un altro vantaggio unico della fantascienza è la sua visione estremamente ampia.
> "Guerra e Pace", con milioni di caratteri, descrive solo la storia di una regione in poche decadi;
> Mentre romanzi di fantascienza come "L'Ultima Risposta" di Asimov, in poche migliaia di parole, descrivono vividamente la storia di miliardi di anni dell'intero universo, inclusi gli esseri umani.
> Questa capacità di contenere e il coraggio sono irraggiungibili per la letteratura tradizionale.
<p style="text-align:right">── Liu Cixin</p>

### Suggerimento `> [!TIP]`

> [!TIP]
> Ricordati di controllare la validità del tuo passaporto e del visto; documenti scaduti non permettono l'ingresso o l'uscita dal paese.

Formulazione come segue

```
> [!TIP]
> YOUR CONTENT
```

### Nota `> [!NOTE]`

> [!NOTE]
> Se mi invii un messaggio e ricevi una risposta immediata, cosa significa?
> Questo significa che adoro veramente usare il mio cellulare.


### Avvertenza `> [!WARN]`

> [!WARN]
> Durante le escursioni in ambiente selvaggio, è fondamentale prestare attenzione alla sicurezza.
> La scorsa settimana, un gruppo di alpinisti si è trovato in una tempesta a metà della montagna perché non avevano controllato le previsioni del tempo, e hanno dovuto evacuare d'urgenza.
> Ricorda, ogni attività all'aperto richiede una preparazione adeguata e una costante attenzione alle condizioni meteorologiche.

## Elenco delle cose da fare

- [x] Progettare un prototipo di prodotto e un elenco di funzionalità
- [ ] Definire lo stack tecnologico e gli strumenti di sviluppo
- [ ] Stabilire un calendario di sviluppo del prodotto e里程碑

## Elenco

### Elenco ordinato

1. Running
   1. Tre volte a settimana, 5 chilometri ogni volta
   1. Partecipare a una mezza maratona
1. Allenamento in palestra
   1. Due volte a settimana, un'ora ogni volta
   1. Focalizzarsi sull'allenamento dei muscoli del core

### Elenco non ordinato

* Attività sociali
  - Partecipare a eventi di scambio nel settore
    + Sessioni di condivisione tecnologica
    + Incontri di scambio per startup
  - Organizzare riunioni tra amici
    + Barbecue all'aperto
    + Serata al cinema

## Tabella

| Pensatori       | Contributi principali                           |
|--------------|------------------------------------|
| Confucio         | Fondatore della scuola confuciana |
| Socrate     | Padre della filosofia occidentale  |
| Nietzsche         | Filosofia dell'Übermensch, che critica la morale e la religione tradizionali       |
| Marx       | Comunismo |

## Codice

### Codice inline

Nel vasto mondo dei linguaggi di programmazione, `Rust`, `Python`, `JavaScript` e `Go` occupano ciascuno una posizione unica.

### Codice su più righe

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```