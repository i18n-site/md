<h1 style="justify-content:space-between">3Ti.Site · Pensate senza frontiere<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, un generatore di siti statici multilingue, pò traduce automaticamente Markdown in [più di centu lingue diverse](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Qualchidunu pò vulete dumandà, avà chì i navigatori anu una funzione di traduzzione integrata, ùn hè micca necessariu d'internazionalizà u situ web?

Vogliu dì chì **solu per l'internazionalizazione di u situ sanu pudemu sustene a ricerca multilingue in-situ in u testu pienu è l'optimizazione di u mutore di ricerca** .

## Sequenza

"Bibbia · Genesi":

> L'antichi ùn distinguevanu trà e lingue. Custruivanu turri chì ghjunghjenu à u celu per ghjunghje à a porta di Diu per prumove u prestigiu di a razza umana.
>
> U Diu hà dettu chì e persone sò una tribù propria, cù a listessa cultura è spezie. Custruì una torre hè solu un preludiu. Avà pudete fà ciò chì vulete, è ùn averete nunda da teme.
>
> Allora Diu hè ghjuntu è hà spargugliatu a ghjente in parechji lochi, incapaci di capiscenu.
>
> Da tandu, l'umanità hà luttatu per cumunicà, i cunflitti sò ghjunti senza fine, è u mondu ùn hà più vistu una torre chì ghjunghje sin'à u celu.

U rumanzu di fantascienza &quot;Three-Body&quot; (pronuncia chinesa: `3Ti` ) fictionalizes una civilisazione straniera chì cumunica per mezu di onde elettromagnetiche, ùn hà micca barriere linguistiche, è hè tecnologicamente prusperu.

Spergu chì cù l'aiutu di stu strumentu, u populu di a terra serà cum'è persone di trè corpi, a cumunicazione ùn serà micca limitata da a lingua, è tutta l'umanità serà unita di novu.

## Tutorial

## Introduzione Di A Funzione

### Mantene U Formatu Markdown

### Mudificà A Traduzzione

Dopu avè mudificatu a traduzzione, avete bisognu di re-run `./i18n.sh` per aghjurnà a cache.

### Note Di Traduzzione

I cumenti di traduzzione anu da indicà a lingua dopu à \```, cum'è ` ```rust` .

Attualmente supporta a traduzzione di cumenti per rust, c, cpp, java, js, coffee, python è bash.

Edite [tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) per aghjunghje supportu di traduzzione per i cumenti in più lingue.

### Configurate Proxy

L'impostazione di e seguenti variabili di l'ambiente permette à e chjama di l'API di Google Translate per passà per u proxy.

```bash
export https_proxy=http://127.0.0.1:7890
```

### Incrustazione Variabile

```
test: 测试变量<br 0>嵌入
```

### Svuotate U Cache

```bash
rm -rf .i18n/.cache
```
