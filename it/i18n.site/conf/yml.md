# .i18n/conf.yml

Il file di configurazione per `i18n.site` è `.i18n/conf.yml`.

Ad eccezione delle impostazioni [`i18`](/i18) , `ignore:` e `i18n:` , il file di configurazione è il seguente:

```yaml
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
    use: Doc
addon:
  - i18n.addon/toc
```

tra cui, l'elemento di configurazione `upload` di `ext:` indica che durante la pubblicazione saranno caricati solo i file con estensione `.md`.

## Navigazione in alto

Lle opzioni di configurazione `nav:` corrispondono al menu di navigazione in alto nella pagina iniziale.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Tra cui, `i18n: home` corrisponde a `home: Home` in `en/i18n.yml`.

Il file `en/i18n.yml` sarà tradotto in più lingue, come `zh/i18n.yml`.

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Dopo la traduzione, è possibile modificare i valori delle chiavi `yml` di traduzione, ma non si devono aggiungere o rimuovere chiavi `yml` di traduzione.

### `use: Toc`, template singolo di file (con sommario)

Nella configurazione `nav`:

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` indica che si utilizzerà il template `Toc` per il rendering, ovvero il rendering di un singolo template `Markdown`.

`TOC` è l'abbreviazione di `Table of Contents`. Questo template, una volta renderizzato, visualizzerà nella barra laterale la struttura del file `Markdown`.

`url:` indica il percorso del file `Markdown` (il `/` corrisponde alla directory radice `/README.md`, il nome del file deve avere il prefisso maiuscolo e il suffisso minuscolo).

### `use: Md`, template singolo di file (senza sommario)

Il template `Md` è simile al template `Toc` e entrambi vengono utilizzati per il rendering di un singolo file `Markdown`. Ma il template `Md` non visualizza il sommario nella barra laterale.

Puoi modificare `use: Toc` nella configurazione precedente in `use: Md`, eseguire nuovamente `i18n.site` nella directory `md`, e poi visitare l'URL di anteprima dello sviluppo per osservare le modifiche nella pagina iniziale.

### Caricamento predefinito senza percorso di configurazione

Se si accede a un percorso specifico e il suo prefisso non è configurato in `nav:`, il file `Markdown` corrispondente al percorso verrà caricato per impostazione predefinita e renderizzato utilizzando il template `Md`.

Ad esempio, se si accede a `/test` e la configurazione `nav:` non include questo percorso e la lingua della pagina è inglese (codice `en`), verrà caricato per impostazione predefinita `/en/test.md` e renderizzato utilizzando il template `Md`.

Se il file `/en/test.md` non esiste, verrà visualizzata la pagina predefinita `404`.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc`, template multi-file

Nella configurazione del file:

```
  - i18n: blog
    use: Doc
```

indica l'uso di `Doc` per il rendering del template.

Il template `Doc` supporta l'integrazione di più file `Markdown` per generare sommari di documenti per progetti singoli o multipli.

#### Progetto singolo (più file)

Il `blog` menzionato sopra è la modalità a progetto singolo di `Doc`.

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Quando l'URL È Vuoto, Il Valore Predefinito È i18n

Se non viene specificato `url`, `url` assume il valore predefinito `i18n`. Questa regola si applica anche agli altri template.

Il metodo di scrittura sopra è equivalente a `url: blog`, e il file corrispondente è `en/blog/TOC`.

#### Multiprogetti

La configurazione `i18n:doc` in `.i18n/conf.yml` è in modalità multiprogetto.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Quindi, `menu: NB demo1,demo2` indica che si utilizzerà il template `NB` per il rendering del menu a tendina.

`NB` è l'abbreviazione di `Name Brief`, che significa che il menu a tendina può visualizzare il nome e lo slogan del progetto.

`NB` è seguito dai parametri `demo1,demo2` che gli vengono passati.
Nota: **Non ci devono essere spazi** prima e dopo la virgola `,` in `demo1,demo2`.

I parametri sopra menzionati corrispondono al file di indice della directory:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Indice del sommario del catalogo

`i18n.site` eseguirà lo script `js` `.i18n/hook/after.tran/TOC.js` nel repository demo per leggere il file di indice del catalogo `TOC` corrispondente alla configurazione del template `doc` per generare la struttura del sommario in `json`.

Se si utilizza il template `doc`, è necessario avere questo plugin.

Se inizializzi il progetto `i18n.site` da una cartella vuota, ricorda di copiare il repository demo `.i18n` nella tua directory.

Il template `Doc` renderizzerà la struttura del sommario in base al `json` generato.

##### Spiegazione dettagliata del contenuto

Il contenuto di `en/blog/TOC` è il seguente:

```
README.md

news/README.md
  news/begin.md
```

##### Usare il rientro per indicare i livelli

`README.md` nella prima riga di `en/blog/TOC` corrisponde a `i18n.site` nell'immagine sottostante, che rappresenta il nome del progetto.

Le due righe successive sono illustrate nella seguente immagine.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` corrisponde a `News`
`news/begin.md` corrisponde a `Our Product is Online !`

Il file `TOC` utilizza il rientro per indicare la relazione gerarchica della struttura, supporta il rientro su più livelli e i commenti di riga che iniziano con `#`.

##### Il livello principale scrive solo il titolo, non il contenuto

Nel caso di più livelli di rientro, il livello principale scrive solo il titolo e non il contenuto, altrimenti la formattazione potrebbe essere disordinata.

##### Progetto README.md

Il contenuto può essere scritto nel file `README.md` del progetto, ad esempio `en/demo2/README.md`.

Tieni presente che il contenuto di questo file non mostra una struttura del sommario, quindi si consiglia di limitare la lunghezza e scrivere una breve introduzione.

###### Slogan del progetto

Puoi vedere che `Deme Two` ha lo slogan del progetto sotto il menu a tendina e il nome del progetto nella struttura del catalogo `Your Project slogan`.

![](https://p.3ti.site/1721276842.avif)

Ciò corrisponde alla prima riga di `en/demo2/README.md`:

```
# Demo Two : Your Project slogan
```

Il contenuto dopo i due punti `:` del primo livello del titolo del progetto `README.md` viene considerato come slogan del progetto.

Gli utenti di Cina, Giappone e Corea devono notare che devono utilizzare i due punti `:` a metà larghezza invece dei due punti a larghezza intera.

##### Come procedere per spostare il TOC in blocco?

Il file `TOC` deve essere posizionato nella directory della lingua di origine.

Ad esempio, se la lingua di origine è il cinese, il `TOC` sopra sarà `zh/blog/TOC`.

Se la lingua di origine viene modificata, è necessario spostare in blocco i file `TOC` di una determinata lingua in un'altra lingua del progetto.

Puoi fare riferimento ai seguenti comandi:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Modifica `en/` e `zh/` nel comando precedente con il codice della tua lingua.