<h1 style="justify-content:space-between">3Ti.Site · Pensendu Senza Frontiere<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, un generatore di situ staticu, pò traduce automaticamente Markdown in [più di centu lingue diverse](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Qualchidunu pò dumandà, postu chì tutti i navigatori anu funzioni di traduzzione, ùn hè micca necessariu d'internazionalizà u situ web?

Vogliu dì chì **solu i siti web chì generanu traduzzioni statiche ponu supportà a ricerca multilingue in u situ full-text è l&#39;optimizazione di u mutore di ricerca** .

## Introduzione

Bibbia · Genesi :

> In i tempi antichi, quandu e lingue eranu una, l'umanità hà custruitu una torre chì ghjunghje sin'à u celu, un portale à u duminiu di Diu, pruclamendu a putenza di l'umanità.
>
> Diu hà dichjaratu: "L'omi s'uniscenu cum'è una tribù, cù una lingua cumuna, è sta torre hè solu un prologu. Avà ghjunghjenu u so desideriu, è ùn ci sarà più paura ".
>
> Cusì, Diu scendinu, sparghje a ghjente in diverse anguli, utilizate diverse lingue.
>
> Da tandu, a cumunicazione umana hè diventata sfida, disputi senza fine, è ùn ci era più una torra chì tocca u celu.

U rumanzu di fantascienza &quot;Three-Body&quot; (pronuncia chinesa: `3Ti` ) fictionalizes una civilisazione straniera chì cumunica per mezu di onde elettromagnetiche, ùn hà micca barriere linguistiche, è hè tecnologicamente prusperu.

Spergu di creà un strumentu chì permetterà à a ghjente di a terra di esse cum'è e persone di trè corpi, di cumunicà senza esse ligatu da a lingua, è unisce di novu tutta l'umanità.

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
