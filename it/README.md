<h1 style="justify-content:space-between">3Ti.Site · Pensare Senza Frontiere<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, un generatore di siti statici, può tradurre automaticamente Markdown in [più di cento lingue diverse](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Alcune persone potrebbero chiedersi, ora che i browser hanno funzioni di traduzione integrate, non è più necessario internazionalizzare il sito web?

Voglio dire che **solo internazionalizzando l'intero sito possiamo supportare la ricerca full-text multilingue nel sito e l'ottimizzazione dei motori di ricerca** .

## Introduzione

Bibbia · Genesi :

> Nei tempi antichi, quando le lingue erano una sola, l'umanità costruì una torre che arrivava fino al cielo, un portale verso il dominio di Dio, proclamando la potenza dell'umanità.
>
> Dio dichiarò: "Gli uomini si uniscono come un'unica tribù, con una lingua condivisa, e questa torre non è che un prologo. Ora realizzano il loro desiderio e non ci sarà più paura".
>
> Pertanto, Dio discese, disperdendo le persone in angoli diversi, usando lingue diverse.
>
> Da allora in poi la comunicazione umana divenne impegnativa, le dispute infinite, e non esisteva più una torre che toccasse il cielo.

Il romanzo di fantascienza &quot;Three-Body&quot; (pronuncia cinese: `3Ti` ) immagina una civiltà aliena che comunica attraverso onde elettromagnetiche, non ha barriere linguistiche ed è tecnologicamente prospera.

Spero di creare uno strumento che consentirà alle persone della terra di essere come persone a tre corpi, comunicare senza essere vincolati dal linguaggio e unire nuovamente tutta l'umanità.

## Esercitazione

## Introduzione Alla Funzione

### Mantieni Il Formato Markdown

### Modifica Traduzione

Dopo aver modificato la traduzione, è necessario eseguire nuovamente `./i18n.sh` per aggiornare la cache.

### Note Di Traduzione

I commenti di traduzione devono indicare la lingua dopo \```, come ` ```rust` .

Attualmente supporta la traduzione dei commenti per ruggine, c, cpp, java, js, coffee, python e bash.

Modifica [tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) per aggiungere il supporto della traduzione per i commenti in più lingue.

### Configura Proxy

L'impostazione delle seguenti variabili di ambiente consente alle chiamate API di Google Translate di passare attraverso il proxy.

```bash
export https_proxy=http://127.0.0.1:7890
```

### Incorporamento Di Variabili

```
test: 测试变量<br 0>嵌入
```

### Svuotare La Cache

```bash
rm -rf .i18n/.cache
```
