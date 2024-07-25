# .i18n/conf.yml

`i18n.site` U schedariu di cunfigurazione hè `.i18n/conf.yml` .

Eccettu per `ignore:` è `i18n:` di [`i18`](/i18) u schedariu di cunfigurazione hè cusì:

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

Frà elli, l'elementu di cunfigurazione `ext:` `upload` chì solu `.md` serà caricatu quandu publicate.

## Navigazione Superiore nav

Opzioni di `nav:` , currispondenu à u menu di navigazione in cima di a pagina iniziale.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Frà elli `i18n: home` currisponde à `en/i18n.yml`中`home: Home` .

`en/i18n.yml` traduttu in parechje lingue, cum'è `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Dopu chì a traduzzione hè finita, pudete mudificà u valore di `yml` in a traduzzione, ma ùn aghjunghje micca o sguassate a chjave di traduzzione `yml` .

### `use: Toc` Mudellu Di Schedariu Unicu (Cù U Schema)

`nav` Configurazione :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` usà u rendering `Toc` , chì rende un unicu mudellu `Markdown` .

Hè l'abbreviazione `Markdown` `Table of Contents` `TOC`

`url:` u percorsu di u schedariu di `Markdown` ( `/` currisponde à u cartulare radicale `/README.md` , stu nome di u schedariu richiede un prefissu maiuscule è un suffissu minuscule).

### `use: Md` Mudellu Di Schedariu Unicu (Senza Schema)

`Md` hè u listessu cum'è `Toc` , i dui sò usati per rende un solu `Markdown` file. Tuttavia `Md` u mudellu ùn mostra micca u contornu in a barra laterale.

Pudete `use: Toc` in a cunfigurazione sopra à `use: Md` , run `i18n.site` in u cartulare `md` di novu, è dopu visitate l'URL di preview di sviluppu per osservà i cambiamenti in a pagina iniziale.

### Carica Predeterminata Senza Percorsu Di Cunfigurazione

Se u prefissu di u percorsu di un certu percorsu accede ùn hè micca cunfiguratu in `nav:` u schedariu `MarkDown` chì currisponde à u percorsu serà caricatu per difettu è resu cù `Md` template.

Per esempiu, se visitate `/test` è `nav:` hè cunfiguratu senza stu percorsu, è a lingua di a pagina hè l'inglese (codice `en` ), u mudellu serà caricatu `/en/test.md` è renditu cù `Md` per difettu.

Se `/en/test.md` stu schedariu ùn esiste micca, a pagina predeterminata `404` serà visualizata.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Mudellu Multi-File

In u schedariu di cunfigurazione:

```
  - i18n: blog
    use: Doc
```

Indica l'usu di `Doc`

`Doc` Template supporta l'integrazione di parechje `MarkDown` per generà schemi di documentu per prughjetti unichi o multipli.

#### Prughjettu Unicu (Multipli File)

`blog` in u sopra hè u modu di prughjettu unicu di `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Quandu L'url Hè Viotu, U Valore Predeterminatu Di i18n

Se ùn scrivite micca `url` `url` à u valore di `i18n` Questa regula hè ancu valida per altri mudelli.

U metudu di scrittura sopra hè equivalente à avè `url: blog` è u so schedariu currispundenti hè `en/blog/TOC` .

#### Parechji Prughjetti

`.i18n/conf.yml` A cunfigurazione in `i18n:doc` hè u modu multi-prughjettu.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Quì `menu: NB demo1,demo2` significa aduprà `NB` per renderà u menu a tendina.

`NB` hè l'abbreviazione di `Name Breif` , chì indica chì u menù drop-down pò vede u nome è u slogan di u prugettu.

`NB` hè seguita da u paràmetru `demo1,demo2` passatu à ellu.
`demo1,demo2` chì ùn deve esse micca spazii ** prima è dopu a virgola `,` in : **

Per i paràmetri sopra, u schedariu d'indexu di u repertoriu currispundente hè:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC Table of Contents Index

Eseguirà u `js` plugin `.i18n/hook/after.tran/TOC.js` in u magazzinu demo per leghje u schedariu d'indexu di u cartulare `doc` currispondente à a cunfigurazione di u mudellu `TOC` per generà `json` di u cartulare di `i18n.site` cartulare.

Se aduprate `doc` mudellu, duvete avè stu plug-in.

Se inizializzate u prughjettu `i18n.site` da un cartulare viotu, ricordate di copià `.i18n` in u prughjettu demo in u vostru cartulare.

U `Doc` rende u schema di u cuntenutu basatu annantu à u `json` generatu.

##### Spiegazione Dettagliata Di U Cuntenutu

`en/blog/TOC` U cuntenutu hè u seguitu :

```
README.md

news/README.md
  news/begin.md
```

##### Aduprà Indentazione Per Indicà I Livelli

Sopra `en/blog/TOC` `README.md` in a prima linea currisponde à `i18n.site` in a stampa sottu, chì hè u nome di u prughjettu.

I seguenti dui linii sò cum'è mostra in a screenshot sottu.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` currisponde à `News` ,
`news/begin.md` currisponde à `Our Product is Online !`

`TOC` U schedariu hè indentatu per indicà a relazione gerarchica di u contornu è sustene l'indentazione multi-livellu.

##### U Livellu Parenti Scrive Solu U Titulu, Micca U Cuntenutu.

Quandu ci sò parechji livelli di indentazione, u nivellu parente scrive solu u titulu è micca u cuntenutu. Altrimenti, a tipografia serà miss up.

##### Prughjettu README.md 

di u prugettu, per esempiu `README.md` pudete scrive u cuntenutu in `en/demo2/README.md` .

Nota chì u cuntenutu di stu schedariu ùn mostra micca una tabella di cuntenutu, per quessa, hè cunsigliatu per limità a durata è scrive una breve introduzione.

###### Slogan Di Prughjettu

Comu pudete vede `Deme Two` Sottu u menù di `Your Project slogan` :

<img alt="" src="https://p.3ti.site/1721276842.avif">

: currisponde à a prima linea `en/demo2/README.md`

```
# Demo Two : Your Project slogan
```

Prughjettu `README.md` U cuntenutu dopu à u primu colon `:` in u titulu di primu livellu serà cunsideratu cum'è u slogan di u prugettu.

Utenti da a Cina, u Giappone è a Corea, per piacè nutate chì duvete aduprà dui punti di larghezza invece di dui punti di larghezza `:`

##### Cumu Si Move TOC in Massa?

`TOC` U schedariu deve esse piazzatu in u cartulare di a lingua fonte.

Per esempiu, se a lingua surghjente hè cinese, `TOC` sopra hè `zh/blog/TOC` .

Se a lingua surghjente hè mudificata, avete bisognu di batch move `TOC` in una certa lingua in u prugettu à una altra lingua.

Pudete riferite à i seguenti cumandamenti:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Per piacè mudificà `en/` è `zh/` in u cumandimu sopra à u vostru codice di lingua.


