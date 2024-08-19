# .i18n/conf.yml

Il profilo di configurazione per `i18n.site` è `.i18n/conf.yml`.

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
```

tra cui, l'opzione di configurazione `upload` a `ext:` indica che durante la pubblicazione verranno caricati solo i file `.md`.

## Navigazione in Alto

Le opzioni di configurazione `nav:` corrispondono al menu di navigazione nella parte superiore della pagina iniziale.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

tra cui, `i18n: home` corrisponde a `home: Home` nel file `en/i18n.yml`.

Il file `en/i18n.yml` verrà tradotto in altre lingue, ad esempio `zh/i18n.yml`.

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Una volta completata la traduzione, è possibile modificare il valore del file `yml` di traduzione, ma non aggiungere o eliminare le chiavi del file `yml` di traduzione.

### `use: Toc`, Modello di File Singolo (Con Indice)

`nav`:

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` significa utilizzare il modello `Toc` per il rendering, ossia il rendering di un singolo modello `Markdown`.

`TOC` è l'abbreviazione di `Table of Contents`. Una volta eseguito il rendering di questo modello, la struttura del file `Markdown` verrà visualizzata nella barra laterale.

`url:` rappresenta il percorso del file `Markdown` ( `/` corrisponde alla directory root `/README.md`, questo nome file deve avere un prefisso maiuscolo e un suffisso minuscolo).

### `use: Md`, Modello di File Singolo (Senza Indice)

Il modello `Md` è identico al modello `Toc` e entrambi vengono utilizzati per il rendering di un singolo file `Markdown`. Tuttavia, il modello `Md` non mostra l'indice nella barra laterale.

Puoi modificare `use: Toc` nella configurazione precedente in `use: Md`, eseguire di nuovo `i18n.site` nella directory `md` e poi visitare l'URL di anteprima di sviluppo per osservare le modifiche nella pagina iniziale.

### Caricamento Predefinito Senza Percorso di Configurazione

Se si accede a un determinato percorso e il suo prefisso non è configurato in `nav:`, il file `Markdown` corrispondente al percorso verrà caricato per impostazione predefinita e reso utilizzando il modello `Md`.

Ad esempio, se si accede a `/test` e `nav:` non è configurato per questo percorso e la lingua della pagina è inglese (codice `en`), verrà caricato per impostazione predefinita `/en/test.md` e reso utilizzando il modello `Md`.

Se il file `/en/test.md` non esiste, verrà visualizzata la pagina predefinita `404`.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc`, Modello Multi-File

Nel file di configurazione:

```
  - i18n: blog
    use: Doc
```

Indica l'uso del modello `Doc` per il rendering.

Il modello `Doc` supporta l'integrazione di più file `Markdown` per generare la struttura dei documenti per progetti singoli o multipli.

#### Progetto Singolo (Più File)

`blog` in precedenza è la modalità a progetto singolo del modello `Doc`.

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Quando l'URL È Vuoto, Il Valore Predefinito È i18n

Se non viene specificato `url`, `url` assume il valore predefinito `i18n`. Questa regola si applica anche agli altri modelli.

Il metodo di scrittura sopra è equivalente a `url: blog` e il file corrispondente è `en/blog/TOC`.

#### Molteplici Progetti

La configurazione `i18n:doc` nel file `.i18n/conf.yml` è in modalità multiprogetto.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

qui, `menu: NB demo1,demo2` indica l'uso del modello `NB` per il rendering del menu a discesa.

`NB`, che sta per `Name Brief`, significa che il menu a tendina può visualizzare il nome e lo slogan del progetto.

`NB` è seguito dai parametri `demo1,demo2` passati a lui.
Nota: **non ci devono essere spazi** prima e dopo la virgola `,` in `demo1,demo2`.

Il file di indice della directory corrispondente per i parametri di cui sopra è:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Indice del Sommario del Sommario

`i18n.site` eseguirà il plugin `js` `.i18n/hook/after.tran/TOC.js` nel repository demo per leggere il file di indice `TOC` della directory corrispondente alla configurazione del modello `doc` per generare la struttura del file `json` della directory.

Se si utilizza il modello `doc`, è necessario disporre di questo plugin.

Se si inizializza il progetto `i18n.site` da una cartella vuota, ricordare di copiare il progetto demo `.i18n` nella propria directory.

Il modello `Doc` renderà la struttura del sommario in base al file `json` generato.

##### Spiegazione Dettagliata del Contenuto

Il contenuto del file `en/blog/TOC` è il seguente:

```
README.md

news/README.md
  news/begin.md
```

##### Utilizzare il Rientro per Indicare i Livelli

Il file `README.md` nella prima riga di `en/blog/TOC` corrisponde a `i18n.site` nell'immagine sottostante, che è il nome del progetto.

Le due righe successive sono come mostrate nello screenshot qui sotto.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

Il file `news/README.md` corrisponde a `News`,
e `news/begin.md` corrisponde a `Our Product is Online !`

Il file `TOC` utilizza il rientro per indicare la relazione gerarchica della struttura e supporta il rientro a più livelli.

##### Il Livello Principale Scrive Solo il Titolo, Senza il Contenuto

Quando ci sono più livelli di rientro, il livello principale deve scrivere solo il titolo e non il contenuto. Altrimenti, la tipografia potrebbe essere disturbata.

##### Progetto README.md

Il contenuto può essere scritto nel file `README.md` del progetto, ad esempio `en/demo2/README.md`.

Tieni presente che il contenuto di questo file non viene visualizzato nell'indice del sommario, quindi si consiglia di limitare la lunghezza e scrivere una breve introduzione.

###### Slogan del Progetto

Puoi vedere che `Deme Two` ha lo slogan del progetto sotto il menu a discesa e il nome del progetto nella struttura del catalogo `Your Project slogan`.

![](https://p.3ti.site/1721276842.avif)

Ciò corrisponde alla prima riga di `en/demo2/README.md`:

```
# Demo Two : Your Project slogan
```

Il contenuto dopo i primi due punti `:` del titolo di primo livello del file `README.md` del progetto viene considerato come slogan del progetto.

Per gli utenti provenienti dalla Cina, Giappone e Corea, tieni presente che è necessario utilizzare i due punti `:` di metà larghezza anziché i due punti a larghezza intera.

##### Come Spostare TOC in Blocco?

Il file `TOC` deve essere inserito nella directory della lingua di origine.

Ad esempio, se la lingua di origine è il cinese, il file `TOC` sarà `zh/blog/TOC`.

Se la lingua di origine viene modificata, è necessario spostare in blocco i file `TOC` di una determinata lingua nel progetto a un'altra lingua.

Puoi fare riferimento ai seguenti comandi:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Modifica `en/` e `zh/` nel comando precedente nel codice della tua lingua.