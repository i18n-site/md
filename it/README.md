<h1 style="justify-content:space-between">3Ti.Site · Pensa senza confini<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, un generatore di siti statici multilingue, può tradurre automaticamente Markdown in [più di cento lingue diverse](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Alcune persone potrebbero chiedersi, ora che i browser hanno funzioni di traduzione integrate, non è necessario internazionalizzare il sito web?

Voglio dire che **solo internazionalizzando l'intero sito possiamo supportare la ricerca full-text multilingue nel sito e l'ottimizzazione dei motori di ricerca** .

## Sequenza

"Bibbia·Genesi":

> Nell'antichità, quando la lingua era una, l'umanità nasceva orgogliosa. Cercavano di costruire un edificio imponente, una torre che toccasse il cielo.
>
> Tuttavia, il Divino, scontento della loro arroganza, fece sì che le persone si disperdessero sulla terra, rendendo le loro lingue incomprensibili l'una all'altra.
>
> Da quel momento in poi, l’umanità fece fatica a comunicare, i conflitti sorsero senza fine e il mondo non vide più una torre che raggiungesse il cielo.

Il romanzo di fantascienza &quot;Three-Body&quot; (pronuncia cinese: `3Ti` ) immagina una civiltà aliena che comunica attraverso onde elettromagnetiche, non ha barriere linguistiche ed è tecnologicamente prospera.

Spero che con l'aiuto di questo strumento, le persone della terra saranno come persone a tre corpi, la comunicazione non sarà limitata dalla lingua e tutta l'umanità sarà di nuovo unita.

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
