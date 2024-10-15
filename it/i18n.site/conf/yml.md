# .i18n/conf.yml

Il file di configurazione per `i18n.site` è `.i18n/conf.yml`, il cui contenuto è il seguente:

```yaml
i18n:
  fromTo:
    en:
upload:
  ext:
    - md
nav:
  - i18n: home
    use: Toc
    url: /
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
  - i18n: blog
    use: Blog
addon:
  - i18n.addon/toc
```

Tra questi, l'elemento di configurazione `upload` con `ext:` indica che durante la pubblicazione verranno caricati solo i file `.md`.

## Navigazione Superiore

L'opzione di configurazione `nav:` corrisponde al menu di navigazione situato nella parte superiore della pagina iniziale.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Tra questi, `i18n: home` corrisponde a `home: Home` nel file `en/i18n.yml` (dove `en` rappresenta la lingua sorgente delle traduzioni nel progetto).

Il contenuto di `en/i18n.yml` è il testo visualizzato nel menu di navigazione, che viene tradotto in base alla configurazione `fromTo`, ad esempio, tradotto in `zh/i18n.yml`.

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Dopo la traduzione, è possibile modificare i valori nei file `yml` di traduzione, ma non si devono aggiungere o rimuovere le chiavi dei file `yml` di traduzione.

### `use: Toc`, modello singolo con indice

Nella configurazione `nav`:

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` indica che si utilizza il modello `Toc` per il rendering, ovvero per il rendering di un singolo file `Markdown`.

`TOC` è l'abbreviazione di `Table of Contents`; questo modello, quando viene renderizzato, visualizza l'indice di questo file `Markdown` nella barra laterale.

`url:` indica il percorso del file `Markdown` (il `/` corrisponde alla directory radice `/README.md`, e il nome del file deve avere il prefisso maiuscolo e il suffisso minuscolo).

### `use: Md`, modello singolo senza indice

Il modello `Md` è simile al modello `Toc` e entrambi vengono utilizzati per il rendering di un singolo file `Markdown`, ma il modello `Md` non visualizza l'indice nella barra laterale.

È possibile modificare la configurazione `use: Toc` in `use: Md`, eseguire nuovamente `i18n.site` nella directory `md`, poi visitare l'URL di anteprima dello sviluppo per osservare le modifiche alla pagina iniziale.

### `use: Blog` - Modello per il blog

Il modello per blog visualizza un elenco di articoli (titoli e abstract) in ordine cronologico di pubblicazione.

[→ Clicca qui per informazioni dettagliate sulla configurazione](/i18n.site/conf/blog)

### `use: Doc`, modello per documentazione multifile

Nella configurazione del file:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

Indica l'uso di `Doc` per la renderizzazione del template.

Il modello `Doc` supporta l'integrazione di più file `Markdown` per generare un singolo o più documenti di progetto.

#### Più progetti e più file

La configurazione `.i18n/conf.yml` per `i18n:doc` è una modalità di rendering multiprogetto e multifile.

`menu: NB demo1,demo2` indica l'uso del modello `NB` per il rendering del menu a tendina.

<img src="//p.3ti.site/1721275191.avif" width="320px">

`NB` è l'abbreviazione di `Name Brief`, che significa che il menu a tendina può visualizzare il nome e lo slogan del progetto.

`NB` è seguito dai parametri `demo1,demo2` che gli vengono passati.

Nota: **Non ci devono essere spazi** prima e dopo la virgola `,` in `demo1,demo2`.

I parametri sopra menzionati corrispondono ai file di indice delle directory:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Progetto singolo con più file

Se si ha un solo progetto, si può configurare come segue.

```
  - i18n: xxx
    use: Doc
```

##### Quando l'URL È Vuoto, Il Valore Predefinito È i18n

Se non si specifica `url`, `url` assume il valore predefinito `i18n`; questa regola si applica anche agli altri modelli.

Il metodo di scrittura sopra è equivalente a `url: xxx`, e il file corrispondente è `en/xxx/TOC`.

#### Indice del Sommario

`i18n.site` esegue lo script `js` `.i18n/hook/after.tran/TOC.js` nel repository demo per leggere il file di indice `TOC` corrispondente alla configurazione del modello `doc` e generare la struttura del sommario in `json`.

Se si utilizza il modello `doc`, è necessario avere questo plugin.

Se si inizializza il progetto `i18n.site` da una cartella vuota, è necessario copiare il `.i18n` del progetto demo nella propria directory.

Il modello `Doc` utilizza il `json` generato per rendere la struttura del sommario.

##### Spiegazione dettagliata del contenuto

Il contenuto di `en/blog/TOC` è il seguente:

```
README.md

news/README.md
  news/begin.md
```

##### Usare il rientro per indicare i livelli

Il primo rigo di `en/blog/TOC`, `README.md`, corrisponde a `i18n.site` nell'immagine sottostante, ovvero il nome del progetto.

Gli altri due righe sono come mostrato nell'immagine sottostante.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` corrisponde a `News`
`news/begin.md` corrisponde a `Our Product is Online !`

Il file `TOC` utilizza rientri per indicare la gerarchia dei livelli nella struttura, supportando rientri multipli e righe di commento che iniziano con `#`.

##### Il livello principale deve scrivere solo il titolo, non il contenuto

Quando ci sono più livelli di rientro, il livello principale deve scrivere solo il titolo, non il contenuto, altrimenti la formattazione potrebbe essere disordinata.

##### Progetto README.md

Il progetto `README.md`, come `en/demo2/README.md`, può contenere del testo.

Tieni presente che il contenuto di questo file non mostra un sommario, quindi si consiglia di limitare la lunghezza e scrivere una breve introduzione.

###### Slogan del progetto

È possibile vedere che `Deme Two` ha lo slogan del progetto sotto il menu a tendina e il nome del progetto nella struttura del sommario `Your Project slogan`.

![](https://p.3ti.site/1721276842.avif)

Ciò corrisponde alla prima riga di `en/demo2/README.md`:

```
# Demo Two : Your Project slogan
```

Il contenuto dopo i due punti `:` del primo livello del titolo del progetto `README.md` viene considerato come slogan del progetto.

Gli utenti di Cina, Giappone e Corea devono notare che devono utilizzare i due punti `:` a metà larghezza, non quelli a larghezza intera.

##### Come spostare l'Indice del Sommario in blocco?

Il file `TOC` deve essere posizionato nella directory della lingua di origine.

Ad esempio, se la lingua di origine è il cinese, il `TOC` sarà `zh/blog/TOC`.

Se si modifica la lingua di origine, è necessario spostare in blocco i file `TOC` di una certa lingua in un'altra lingua del progetto.

Puoi fare riferimento ai seguenti comandi:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Modifica `en/` e `zh/` nel comando sopra con il codice della tua lingua.

### Caricamento predefinito senza percorso di configurazione

Per un percorso specifico, se il prefisso del percorso non è configurato in `nav:`, il file `Markdown` corrispondente al percorso viene caricato per impostazione predefinita e reso utilizzando il modello `Md`.

Ad esempio, se si accede a `/test` e la configurazione `nav:` non ha il prefisso per questo percorso e la lingua di navigazione corrente è inglese (codice `en`), viene caricato per impostazione predefinita `/en/test.md` e reso utilizzando il modello `Md`.

Se il file `/en/test.md` non esiste, viene visualizzata la pagina predefinita `404`.

<img src="//p.3ti.site/1721184299.avif" style="width:360px">