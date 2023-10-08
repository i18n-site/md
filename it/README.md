# I18N.SITE · Linguaggio Senza Frontiere<img Src="//ok0.pw/5l" Style="float:right;width:42px;margin-Top:6px">

I18N.SITE, un generatore di siti statici multilingue, può tradurre automaticamente Markdown in [più di cento lingue diverse](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n.lang.webp" alt="" />

Alcune persone potrebbero chiedersi, ora che i browser hanno funzioni di traduzione integrate, non è necessario internazionalizzare il sito web?

Voglio dire che **solo internazionalizzando l&#39;intero sito possiamo supportare la ricerca full-text multilingue nel sito e l&#39;ottimizzazione dei motori di ricerca** .

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
