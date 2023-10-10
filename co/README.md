<h1 style="justify-content:space-between">3Ti.Site · Pensa senza frontiere<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, un generatore di siti statici multilingue, pò traduce automaticamente Markdown in [più di centu lingue diverse](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Qualchidunu pò vulete dumandà, avà chì i navigatori anu una funzione di traduzzione integrata, ùn hè micca necessariu d'internazionalizà u situ web?

Vogliu dì chì **solu per l&#39;internazionalizazione di u situ sanu pudemu sustene a ricerca multilingue in-situ in u testu pienu è l&#39;optimizazione di u mutore di ricerca** .

## Sequenza

"Bibbia · Genesi":

> L'antichi ùn distinguevanu trà e lingue. Sò nati cun orgogliu è vulianu custruisce una torre alta cù a cima chì ghjunghje sin'à u celu.
> <blockquote><p>Diu era dispiaciutu cù l&#39;arroganza di l&#39;omu, cusì hà spargugliatu tutti l&#39;esseri viventi in parechji lochi, incapaci di capiscenu.</p></blockquote>
> <blockquote><p>Da tandu, hè statu difficiule per l&#39;omu di cumunicà, i disputi anu cuntinuatu, è ùn ci hè micca Torre di Babele in u mondu.</p></blockquote>

U rumanzu di fantascienza &quot;Three-Body&quot; (pronuncia chinesa: `3Ti` ) fictionalizes una civilisazione straniera chì cumunica per mezu di onde elettromagnetiche, ùn hà micca barriere linguistiche, è hè tecnologicamente prusperu.

Spergu chì cù l'aiutu di stu strumentu, u populu di a terra serà cum'è persone di trè corpi, a cumunicazione ùn serà micca limitata da a lingua, è tutta l'umanità serà unita di novu.

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
