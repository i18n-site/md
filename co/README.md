<h1 style="justify-content:space-between">I18N.SITE · Lingua senza cunfini<img src="//i-01.eu.org/i18n/logo.svg" style="width:42px;margin-top:-1px"></h1>

I18N.SITE, un generatore di siti statici multilingue, pò traduce automaticamente Markdown in [più di centu lingue diverse](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Qualchidunu pò vulete dumandà, avà chì i navigatori anu una funzione di traduzzione integrata, ùn hè micca necessariu d'internazionalizà u situ web?

Vogliu dì chì **solu per l&#39;internazionalizazione di u situ sanu pudemu sustene a ricerca multilingue in-situ in u testu pienu è l&#39;optimizazione di u mutore di ricerca** .

## Tutorial

## Introduzione Di A Funzione

### Mantene U Formatu Markdown

### Mudificà A Traduzzione

Dopu avè mudificatu a traduzzione, avete bisognu di re-run `./i18n.sh` per aghjurnà a cache.

### Note Di Traduzzione

I cumenti di traduzzione anu da indicà a lingua dopu à \```, cum&#39;è ` ```rust` .

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
