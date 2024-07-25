# .i18n/conf.yml

`i18n.site` Il file di configurazione è `.i18n/conf.yml` .

Ad eccezione `ignore:` e `i18n:` di [`i18`](/i18) , il file di configurazione è il seguente:

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

Tra questi, l'elemento di configurazione `ext:` di `upload` significa che solo `.md` verranno caricati durante la pubblicazione.

## Navigazione in Alto

`nav:` opzioni di configurazione, corrispondenti al menu di navigazione nella parte superiore della home page.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Tra questi, `i18n: home` corrisponde a `en/i18n.yml`中`home: Home` .

`en/i18n.yml` sarà tradotto in più lingue, come `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Una volta completata la traduzione, è possibile modificare il valore di `yml` nella traduzione, ma non aggiungere o eliminare la chiave della traduzione `yml` .

### `use: Toc` , Modello Di File Singolo (Con Contorno)

: `nav`

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` significa utilizzare il rendering `Toc` , che esegue il rendering di un singolo `Markdown` template.

`TOC` è l'abbreviazione di `Table of Contents` Quando viene eseguito il rendering di questo modello, la struttura di questo file `Markdown` verrà visualizzata nella barra laterale.

`url:` rappresenta il percorso del file `Markdown` ( `/` corrisponde alla directory principale `/README.md` , questo nome file richiede un prefisso maiuscolo e un suffisso minuscolo).

### `use: Md` , Modello Di File Singolo (Senza Contorno)

`Md` Template è uguale a `Toc` , entrambi vengono utilizzati per eseguire il rendering di un singolo file `Markdown` . Tuttavia `Md` il modello non mostra il contorno nella barra laterale.

È possibile modificare `use: Toc` nella configurazione precedente in `use: Md` , eseguire nuovamente `i18n.site` nella directory `md` e quindi visitare l'URL di anteprima dello sviluppo per osservare le modifiche sulla home page.

### Caricamento Predefinito Senza Percorso Di Configurazione

Se il prefisso di un determinato percorso a cui si accede non è configurato in `nav:` il file `MarkDown` corrispondente al percorso verrà caricato per impostazione predefinita e reso utilizzando `Md` template.

Ad esempio, se visiti `/test` e `nav:` è configurato senza questo percorso e la lingua della pagina è l'inglese (codice `en` ), il modello verrà caricato `/en/test.md` e reso utilizzando `Md` per impostazione predefinita.

Se `/en/test.md` questo file non esiste, verrà visualizzata la pagina `404` predefinita.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Modello Multifile

Nel file di configurazione:

```
  - i18n: blog
    use: Doc
```

Indica l'utilizzo di `Doc` per il rendering del modello.

`Doc` Il modello supporta l'integrazione di più `MarkDown` per generare strutture di documenti per progetti singoli o multipli.

#### Progetto Singolo (Più File)

`blog` in alto è la modalità a progetto singolo di `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Quando l'URL È Vuoto, Il Valore Predefinito È i18n

Se non scrivi `url` , `url` il valore `i18n` . Questa regola ha effetto anche per altri modelli.

Il metodo di scrittura sopra equivale ad avere `url: blog` e il file corrispondente è `en/blog/TOC` .

#### Molteplici Progetti

`.i18n/conf.yml` La configurazione in `i18n:doc` è in modalità multiprogetto.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Qui `menu: NB demo1,demo2` significa usare `NB` per visualizzare il menu a discesa.

`NB` , è l'abbreviazione di `Name Breif` , che indica che il menu a tendina può visualizzare il nome e lo slogan del progetto.

`NB` è seguito dal parametro `demo1,demo2` che gli è stato passato.
Nota che non dovrebbero esserci spazi ** prima `demo1,demo2` dopo la virgola `,` in : **

Per i parametri di cui sopra, il file di indice della directory corrispondente è:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Indice Del Sommario Del Sommario

`i18n.site` Eseguirà il `js` plugin `.i18n/hook/after.tran/TOC.js` nel demo warehouse per leggere il file di indice della directory `doc` corrispondente alla configurazione del modello `TOC` per generare `json` del profilo della directory.

Se usi il modello `doc` , devi avere questo plug-in.

Se inizializzi il progetto `i18n.site` da una cartella vuota, ricorda di copiare `.i18n` nel progetto demo nella tua directory.

`Doc` Il modello renderà la struttura del sommario in base al `json` generato.

##### Spiegazione Dettagliata Del Contenuto

`en/blog/TOC` Il contenuto è il seguente :

```
README.md

news/README.md
  news/begin.md
```

##### Utilizzare Il Rientro Per Indicare I Livelli

Sopra `en/blog/TOC` `README.md` nella prima riga corrisponde al `i18n.site` nell'immagine qui sotto, che è il nome del progetto.

Le due righe successive sono come mostrate nello screenshot qui sotto.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` corrisponde a `News` ,
`news/begin.md` corrisponde a `Our Product is Online !`

`TOC` Il file è rientrato per indicare la relazione gerarchica della struttura e supporta il rientro a più livelli.

##### Il Livello Principale Scrive Solo Il Titolo, Non Il Contenuto.

Quando sono presenti più livelli di rientro, il livello principale scrive solo il titolo e non il contenuto. Altrimenti, la tipografia sarà incasinata.

##### Progetto README.md 

`README.md` del progetto, ad esempio, puoi scrivere il contenuto in `en/demo2/README.md` .

Tieni presente che il contenuto di questo file non mostra uno schema del sommario, quindi si consiglia di limitare la lunghezza e scrivere una breve introduzione.

###### Slogan Del Progetto

Come puoi vedere `Deme Two` sotto il menu a discesa e il nome del progetto della struttura del catalogo, c'è `Your Project slogan` slogan del progetto :

<img alt="" src="https://p.3ti.site/1721276842.avif">

: corrisponde alla prima riga `en/demo2/README.md`

```
# Demo Two : Your Project slogan
```

Progetto `README.md` Il contenuto dopo i primi due punti `:` nel titolo di primo livello verrà considerato come lo slogan del progetto.

Utenti provenienti da Cina, Giappone e Corea, tieni presente che devi utilizzare i due punti a metà larghezza invece dei due punti a larghezza intera `:`

##### Come Spostare TOC in Blocco?

`TOC` Il file deve essere inserito nella directory della lingua di origine.

Ad esempio, se la lingua di origine è il cinese, `TOC` sopra sarà `zh/blog/TOC` .

Se la lingua di origine viene modificata, è necessario spostare in batch `TOC` in una determinata lingua nel progetto in un'altra lingua.

Puoi fare riferimento ai seguenti comandi:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Modificare `en/` e `zh/` nel comando precedente con il codice della lingua.


