# .i18n/conf.yml

Il file di configurazione per `i18n.site` è `.i18n/conf.yml` e il contenuto è il seguente :

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

Tra questi, `upload` a `ext:` elemento di configurazione significa che solo `.md` verranno caricati durante la pubblicazione.

## Navigazione in Alto

`nav:` opzioni di configurazione, corrispondenti al menu di navigazione nella parte superiore della home page.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Tra questi, `i18n: home` corrisponde a `home: Home` in `en/i18n.yml` (dove `en` è la lingua di partenza della traduzione del progetto).

`en/i18n.yml` contenuto è il testo visualizzato nel menu di navigazione, che verrà tradotto secondo `fromTo` nella configurazione, ad esempio, tradotto in `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Una volta completata la traduzione, è possibile modificare il valore di translation `yml` , ma non aggiungere o eliminare la chiave di translation `yml` .

### `use: Toc` Di Documento Singolo Con Contorno

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` significa eseguire il rendering utilizzando un modello `Toc` , ovvero il rendering di un singolo modello `Markdown` .

`TOC` è l'abbreviazione di `Table of Contents` Una volta eseguito il rendering di questo modello, la struttura di questo file `Markdown` verrà visualizzata nella barra laterale.

`url:` rappresenta il percorso del file `Markdown` ( `/` corrisponde alla directory root `/README.md` , questo nome file richiede un prefisso maiuscolo e un suffisso minuscolo).

### `use: Md` Di Documento Singolo Senza Contorno

Il modello `Md` e il modello `Toc` sono uguali ed entrambi vengono utilizzati per eseguire il rendering di un singolo file `Markdown` . Ma il modello `Md` non mostra il contorno nella barra laterale.

Puoi modificare `use: Toc` nella configurazione precedente in `use: Md` , eseguire nuovamente `i18n.site` nella directory `md` e quindi visitare l'URL di anteprima dello sviluppo per osservare le modifiche sulla home page.

### `use: Blog` Modelli Di Blog

Il modello di blog visualizza un elenco di articoli (titoli e abstract) in ordine di data di pubblicazione.

[→ Fare clic qui per conoscere la configurazione specifica](/i18n.site/conf/blog)

### `use: Doc`

Nel file di configurazione:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

Indica l'utilizzo di `Doc` per il rendering del modello.

`Doc` supporta l'integrazione di più `MarkDown` per generare strutture di documenti per progetti singoli o multipli.

#### Più Progetti E Più File

La configurazione di `.i18n/conf.yml` in `i18n:doc` è la modalità di rendering multi-file multiprogetto.

Qui, `menu: NB demo1,demo2` , significa utilizzare il modello `NB` per eseguire il rendering del menu a discesa.

<img src="//p.3ti.site/1721275191.avif" width="320px">

`NB` , che è l'abbreviazione di `Name Breif` , significa che il menu a tendina può visualizzare il nome e lo slogan del progetto.

`NB` è seguito dal parametro `demo1,demo2` che gli viene passato.

Nota : ** Non dovrebbero esserci spazi ** prima e dopo la virgola `,` in `demo1,demo2` .

Il file di indice della directory corrispondente per i parametri di cui sopra è:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Singolo Progetto Più File

Se hai un solo progetto, puoi configurarlo come segue.

```
  - i18n: doc
    url: flashduty
    use: Doc
```

> [!WARN]
> Un singolo progetto con più file non supporta la configurazione `url` come percorso root `/`
> Se __conf.yml → nav:__ Non è configurato alcun percorso root, quando si accede alla home page del sito Web, verrà automaticamente riscritto al primo URL nella configurazione `nav:` .
> Questo design serve a distinguere meglio documenti di progetto, blog e altri contenuti attraverso le directory.
> Si consiglia di utilizzare un singolo file e una singola pagina come home page.

> [!TIP]
> Se non viene scritto `url` , `url` assume il valore predefinito `i18n` Questa regola ha effetto anche per altri modelli.

#### Indice Del Sommario Del Sommario

Se il modello `use: Doc` è abilitato nella configurazione, abilitare il plug-in `i18n.addon/toc` in `.i18n/conf.yml` La configurazione è la seguente :

```yml
addon:
  - i18n.addon/toc
```

`i18n.site` installerà ed eseguirà automaticamente questo plug-in, leggerà `TOC` il file di indice della directory e genererà `json` la struttura della directory.

Se si tratta di un singolo progetto con più file, la directory root `TOC` è la directory corrispondente a `url:` nella directory della lingua di origine. Ad esempio, se la lingua di origine è il cinese: il file corrispondente a `url: flashduty` è `zh/flashduty/TOC` .

Se si tratta di più progetti e più file, non è necessario configurare `url:` La directory root di `TOC` è la directory corrispondente al valore di `i18n` .

##### Spiegazione Dettagliata Del Contenuto

`en/blog/TOC` contenuto è il seguente :

```
README.md

news/README.md
  news/begin.md
```

##### Utilizzare Il Rientro Per Indicare I Livelli

`README.md` nella prima riga dello `en/blog/TOC` sopra corrisponde al `i18n.site` nell'immagine sotto, che è il nome del progetto.

Le due righe successive sono come mostrate nello screenshot qui sotto.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` corrisponde a `News` ,
`news/begin.md` corrisponde a `Our Product is Online !`

`TOC` file sono rientrati per indicare la relazione gerarchica della struttura, supportano il rientro multilivello e i commenti di riga che iniziano con `# ` .

##### Il Livello Principale Scrive Solo Il Titolo, Non Il Contenuto.

Quando sono presenti più livelli di rientro, il livello principale scrive solo il titolo e non il contenuto. Altrimenti, la tipografia sarà incasinata.

##### Progetto README.md

Il contenuto può essere scritto nell'elemento `README.md` , ad esempio `en/demo2/README.md` .

Tieni presente che il contenuto di questo file non mostra uno schema del sommario, quindi si consiglia di limitare la lunghezza e scrivere una breve introduzione.

###### Slogan Del Progetto

Puoi vedere che `Deme Two` ha lo slogan del progetto sotto il menu a discesa e il nome del progetto della struttura del catalogo `Your Project slogan` :

![](https://p.3ti.site/1721276842.avif)

Ciò corrisponde alla prima riga di `en/demo2/README.md` :

```
# Demo Two : Your Project slogan
```

Il contenuto dopo i primi due punti `:` del titolo di primo livello del progetto `README.md` verrà considerato come slogan del progetto.

Per gli utenti provenienti da Cina, Giappone e Corea, tieni presente che dovresti utilizzare i due punti `:` a metà larghezza anziché i due punti a larghezza intera.

##### Come Spostare TOC in Blocco?

`TOC` file devono essere inseriti nella directory della lingua di origine.

Ad esempio, se la lingua di origine è il cinese, `TOC` sopra sarà `zh/blog/TOC` .

Se la lingua di origine viene modificata, è necessario spostare in batch i file `TOC` di una determinata lingua nel progetto in un'altra lingua.

Puoi fare riferimento ai seguenti comandi:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Modifica `en/` e `zh/` nel comando precedente nel codice della tua lingua.

### Caricamento Predefinito Senza Percorso Di Configurazione

Per un determinato percorso a cui si accede, se il prefisso del percorso non è configurato in `nav:` , il file `MarkDown` corrispondente al percorso verrà caricato per impostazione predefinita e reso utilizzando il modello `Md` .

Ad esempio, se si accede `/test` e `nav:` è configurato senza il prefisso di questo percorso e la lingua di navigazione corrente è l'inglese (codice `en` ), `/en/test.md` verrà caricato per impostazione predefinita e reso utilizzando il modello `Md` .

Se `/en/test.md` questo file non esiste, verrà visualizzata la pagina predefinita `404` .

<img src="//p.3ti.site/1721184299.avif" style="width:360px">