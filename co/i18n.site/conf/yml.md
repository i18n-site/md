# .i18n/conf.yml

U schedariu di cunfigurazione per `i18n.site` hè `.i18n/conf.yml` è u cuntenutu hè u seguitu :

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

Frà elli, l'elementu di cunfigurazione `upload` à `ext:` significa chì solu `.md` seranu caricati durante a publicazione.

## Navigazione in Cima

`nav:` opzioni di cunfigurazione, chì currispondenu à u menu di navigazione in cima di a pagina iniziale.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Frà elli, `i18n: home` currisponde à `home: Home` in `en/i18n.yml` (induve `en` hè a lingua fonte di a traduzzione di u prugettu).

U cuntenutu `en/i18n.yml` hè u testu affissatu in u menu di navigazione, chì serà traduttu secondu `fromTo` in a cunfigurazione, per esempiu, traduttu à `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Dopu chì a traduzzione hè finita, pudete mudificà u valore di a traduzzione `yml` , ma ùn aghjunghje micca o sguassate a chjave di a traduzzione `yml` .

### `use: Toc` , Mudellu Di Schedariu Unicu Cù Schema

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` significa rendering cù un mudellu `Toc` , chì rende un unicu mudellu `Markdown` .

`TOC` hè l'abbreviazione di `Table of Contents` Quandu stu mudellu hè resu, u schema di stu schedariu `Markdown` serà visualizatu in a barra laterale.

`url:` rapprisenta u percorsu di u schedariu di `Markdown` ( `/` currisponde à u repertoriu radicali `/README.md` , stu nome di u schedariu richiede un prefissu maiuscule è un suffissu minuscule).

### `use: Md` , Mudellu Di Schedariu Unicu Senza Schema

U mudellu `Md` è u mudellu `Toc` sò listessi è i dui sò usati per rende un unicu schedariu `Markdown` . Ma u mudellu `Md` ùn mostra micca u schema in a barra laterale.

Pudete mudificà `use: Toc` in a cunfigurazione sopra à `use: Md` , eseguite `i18n.site` in u repertoriu `md` di novu, è dopu visitate l'URL di previsione di sviluppu per osservà i cambiamenti nantu à a homepage.

### `use: Blog` Mudelli Di Blog

U mudellu di blog mostra una lista di articuli (tituli è abstracts) in ordine di u tempu di publicazione.

[→ Cliccate quì per amparà nantu à a cunfigurazione specifica](/i18n.site/conf/blog)

### `use: Doc` , Mudellu Di Documentu Multi-File

In u schedariu di cunfigurazione:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

Indica l'usu di `Doc` per a rendering di mudelli.

U mudellu `Doc` supporta l'integrazione di più `MarkDown` per generà schemi di documentu per prughjetti unichi o multiplici.

#### Prughjetti Multipli È Schedarii Multiplici

A cunfigurazione di `.i18n/conf.yml` in `i18n:doc` hè u modu di rendering multi-project multi-file.

Quì, `menu: NB demo1,demo2` , significa aduprà u mudellu `NB` per rende u menù drop-down.

<img src="//p.3ti.site/1721275191.avif" width="320px">

`NB` , chì hè l'abbreviazione di `Name Breif` , significa chì u menù drop-down pò vede u nome è u slogan di u prugettu.

`NB` hè seguita da u paràmetru `demo1,demo2` passatu à ellu.

Nota : ** Ùn deve esse micca spazii ** prima è dopu à a virgola `,` in `demo1,demo2` .

Per i paràmetri sopra, u schedariu d'indici di u repertoriu currispundente hè:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Singulu Prughjettu Parechji Schedari

Sè vo avete solu un prughjettu, pudete cunfigurà cum'è seguita.

```
  - i18n: xxx
    use: Doc
```

##### Quandu L'url Hè Viotu, U Valore Predeterminatu Di i18n

Se `url` ùn hè micca scrittu, `url` predeterminatu à u valore di `i18n` Questa regula hè ancu efficace per altri mudelli.

U metudu di scrittura sopra hè equivalente à `url: xxx` , è u so schedariu currispundenti hè `en/xxx/TOC` .

#### TOC Table of Contents Index

`i18n.site` eseguirà `js` plug-in `.i18n/hook/after.tran/TOC.js` in u magazzinu demo per leghje u schedariu d'indexu di u cartulare `TOC` chì currisponde à a cunfigurazione di u mudellu `doc` per generà u schema di u cartulare `json` .

Se aduprate u mudellu `doc` , duvete avè stu plug-in.

Se inizializzate u prughjettu `i18n.site` da un cartulare viotu, ricordate di copià u prughjettu demo `.i18n` in u vostru cartulare.

U mudellu `Doc` renderà a tabella di cuntenutu basatu annantu à l' `json` generatu.

##### Spiegazione Dettagliata Di U Cuntenutu

`en/blog/TOC` cuntenutu hè u seguitu :

```
README.md

news/README.md
  news/begin.md
```

##### Aduprà Indentazione Per Indicà I Livelli

`README.md` in a prima fila di `en/blog/TOC` sopra currisponde à `i18n.site` in a stampa sottu, chì hè u nome di u prugettu.

I prossimi dui linii sò cum'è mostra in a screenshot sottu.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` currisponde à `News` ,
`news/begin.md` currisponde à `Our Product is Online !`

I schedarii `TOC` sò indentati per indicà a relazione gerarchica di u contornu, sustene l'indentazione multi-livellu, è i cumenti di linea chì cumincianu cù `# ` .

##### U Livellu Parenti Scrive Solu U Titulu, Micca U Cuntenutu.

Quandu ci sò parechji livelli di indentazione, u nivellu parente scrive solu u titulu è micca u cuntenutu. Altrimenti, a tipografia serà scherzata.

##### Prughjettu README.md

U cuntenutu pò esse scrittu in l'elementu `README.md` , cum'è `en/demo2/README.md` .

Nota chì u cuntenutu di stu schedariu ùn mostra micca una tabella di cuntenutu, per quessa, hè cunsigliatu per limità a durata è scrive una breve introduzione.

###### Slogan Di Prughjettu

Pudete vede chì `Deme Two` hà u so slogan di u `Your Project slogan` :

![](https://p.3ti.site/1721276842.avif)

Questu currisponde à a prima fila di `en/demo2/README.md` :

```
# Demo Two : Your Project slogan
```

U cuntenutu dopu à u primu colon `:` di u titulu di primu livellu di u prughjettu `README.md` serà cunsideratu cum'è u slogan di u prugettu.

Utenti da a Cina, u Giappone è a Corea, per piacè nutate chì duvete aduprà u colon `:` à a mità di larghezza invece di u colon à larghezza completa.

##### Cumu Si Move TOC in Massa?

`TOC` i schedarii deve esse piazzati in u cartulare di a lingua fonte.

Per esempiu, se a lingua fonte hè cinese, allora `TOC` sopra hè `zh/blog/TOC` .

Se a lingua surghjente hè mudificata, avete bisognu di batch move i schedari `TOC` di una certa lingua in u prugettu à una altra lingua.

Pudete riferite à i seguenti cumandamenti:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Per piacè mudificà `en/` è `zh/` in u cumandimu sopra à u vostru codice di lingua.

### Carica Predeterminata Senza Percorsu Di Cunfigurazione

Per un certu percorsu accede, se u prefissu di u percorsu ùn hè micca cunfiguratu in `nav:` , u schedariu `MarkDown` chì currisponde à u percorsu serà caricatu per difettu è resu cù u mudellu `Md` .

Per esempiu, se `/test` hè accessu, è `nav:` hè cunfiguratu senza u prefissu di sta strada, è a lingua di navigazione attuale hè l'inglese (codice `en` ), `/en/test.md` serà caricatu per difettu è rende cù u mudellu `Md` .

Se `/en/test.md` stu schedariu ùn esiste micca, a pagina `404` predeterminata serà visualizata.

<img src="//p.3ti.site/1721184299.avif" style="width:360px">