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

Tra questi, l'elemento di configurazione `upload` con `ext:` indica che durante la pubblicazione verranno caricati solo i file con estensione `.md`.

## Navigazione in Alto

L'opzione di configurazione `nav:` corrisponde al menu di navigazione situato nella parte superiore della pagina iniziale.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Tra questi, `i18n: home` corrisponde a `home: Home` nella sezione `en/i18n.yml` (dove `en` rappresenta la lingua di partenza delle traduzioni del progetto).

Il contenuto di `en/i18n.yml` è il testo visualizzato nel menu di navigazione, che viene tradotto in base alla configurazione `fromTo`, ad esempio, tradotto in `zh/i18n.yml`.

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Dopo aver completato la traduzione, è possibile modificare i valori nei file `yml` di traduzione, ma non si devono aggiungere o rimuovere le chiavi dei file `yml` di traduzione.

### `use: Toc`, modello singolo con indice

Nella configurazione `nav`:

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` significa utilizzare il modello `Toc` per il rendering, ovvero per il rendering di un singolo file `Markdown`.

`TOC` è l'abbreviazione di `Table of Contents`. Questo modello, quando viene renderizzato, visualizza l'indice del contenuto del file `Markdown` nella barra laterale.

`url:` indica il percorso del file `Markdown` (il `/` corrisponde alla directory radice `/README.md`, e il nome del file deve avere il prefisso maiuscolo e il suffisso minuscolo).

### `use: Md`, modello singolo senza indice

Il modello `Md` è simile al modello `Toc` e entrambi vengono utilizzati per il rendering di un singolo file `Markdown`. Tuttavia, il modello `Md` non visualizza l'indice nella barra laterale.

È possibile modificare `use: Toc` nella configurazione precedente in `use: Md`, quindi eseguire nuovamente `i18n.site` nella directory `md` e visitare l'URL di anteprima dello sviluppo per osservare le modifiche alla pagina iniziale.

### `use: Blog`, modello di blog

Il modello di blog visualizza un elenco di articoli (titoli e abstract) in ordine di data di pubblicazione.

[→ Clicca qui per conoscere la configurazione specifica](/i18n.site/conf/blog)

### `use: Doc`, modello di documentazione multifile

Nella configurazione del file:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

Indica l'uso di `Doc` per il rendering del modello.

Il modello `Doc` supporta l'integrazione di più file `Markdown` per generare un singolo o più documenti di progetto.

#### Multiprogetti e multifile

La configurazione di `.i18n/conf.yml` per `i18n:doc` è una modalità di rendering multifile per multiprogetti.

Quindi, `menu: NB demo1,demo2` indica l'uso del modello `NB` per il rendering del menu a tendina.

<img src="//p.3ti.site/1721275191.avif" width="320px">

`NB` è l'abbreviazione di `Name Brief`, che significa che il menu a tendina può visualizzare il nome e lo slogan del progetto.

`NB` è seguito dai parametri `demo1,demo2` che gli vengono passati.

Nota: **Non ci devono essere spazi** prima e dopo la virgola `,` in `demo1,demo2`.

I parametri sopra menzionati corrispondono ai file di indice delle directory:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Progetto singolo e multifile

Se hai un solo progetto, puoi configurarlo come segue.

```
  - i18n: xxx
    use: Doc
```

##### Quando l'URL È Vuoto, Il Valore Predefinito È i18n

Se non viene scritto `url` , `url` assume il valore predefinito `i18n` Questa regola ha effetto anche per altri modelli.

Il metodo di scrittura sopra è equivalente a `url: xxx`, e il file corrispondente è `en/xxx/TOC`.

#### Indice del Sommario

`i18n.site` esegue lo script `js` `.i18n/hook/after.tran/TOC.js` nel repository demo per leggere il file di indice delle directory `TOC` corrispondente alla configurazione del modello `doc` e generare l'indice del contenuto in formato `json`.

Se si utilizza il modello `doc`, è necessario avere questo script.

Se inizializzi il progetto `i18n.site` da una cartella vuota, ricorda di copiare la cartella `.i18n` dal repository demo nella tua directory.

Il modello `Doc` utilizza il `json` generato per rendere l'indice del sommario.

##### Spiegazione dettagliata del contenuto

Il contenuto di `en/blog/TOC` è il seguente:

```
README.md

news/README.md
  news/begin.md
```

##### Usare il rientro per indicare i livelli

Il primo rigo di `en/blog/TOC`, `README.md`, corrisponde a `i18n.site` nell'immagine sottostante, ovvero il nome del progetto.

Le due righe successive sono illustrate come nella seguente immagine.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` corrisponde a `News`
`news/begin.md` corrisponde a `Our Product is Online !`

Il file `TOC` utilizza il rientro per indicare la gerarchia della struttura, supporta il rientro multilivello e i commenti di riga che iniziano con `#`.

##### Il livello principale deve scrivere solo il titolo, non il contenuto

Quando ci sono più livelli di rientro, il livello principale deve scrivere solo il titolo, non il contenuto, altrimenti la formattazione potrebbe essere disordinata.

##### Progetto README.md

Il progetto `README.md`, ad esempio `en/demo2/README.md`, può contenere del testo.

Tieni presente che il contenuto di questo file non mostra l'indice del sommario, quindi si consiglia di limitare la lunghezza e scrivere una breve introduzione.

###### Slogan del progetto

Il `Deme Two` visualizzato nel menu a tendina e sotto il nome del progetto nella struttura del catalogo ha lo slogan del progetto `Your Project slogan`.

![](https://p.3ti.site/1721276842.avif)

Questo corrisponde alla prima riga di `en/demo2/README.md`:

```
# Demo Two : Your Project slogan
```

Il contenuto dopo i due punti `:` del primo livello del titolo del progetto `README.md` viene considerato come lo slogan del progetto.

Gli utenti di Cina, Giappone e Corea devono notare che devono utilizzare i due punti `:` a metà larghezza invece dei due punti a larghezza intera.

##### Come spostare l'Indice del Sommario in blocco?

Il file `TOC` deve essere collocato nella directory della lingua di origine.

Ad esempio, se la lingua di origine è il cinese, il `TOC` sarà `zh/blog/TOC`.

Se si modifica la lingua di origine, è necessario spostare in blocco i file `TOC` di una certa lingua in un'altra lingua del progetto.

Puoi fare riferimento ai seguenti comandi:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Modifica `en/` e `zh/` nel comando sopra con il codice della tua lingua.

### Caricamento predefinito senza percorso di configurazione

Per un percorso specifico di accesso, se il prefisso del percorso non è configurato in `nav:`, il file `Markdown` corrispondente al percorso viene caricato per impostazione predefinita e reso utilizzando il modello `Md`.

Ad esempio, se si accede a `/test` e la configurazione `nav:` non ha il prefisso per questo percorso e la lingua di navigazione corrente è inglese (codice `en`), `/en/test.md` viene caricato per impostazione predefinita e reso utilizzando il modello `Md`.

Se il file `/en/test.md` non esiste, viene visualizzata la pagina predefinita `404`.

<img src="//p.3ti.site/1721184299.avif" style="width:360px">