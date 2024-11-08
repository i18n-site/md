# Navigazione Personalizzata

Prendiamo come [i18n-demo.github.io](//i18n-demo.github.io) il sito demo per spiegare come personalizzare la navigazione.

![](https://p.3ti.site/1731036697.avif)

I file corrispondenti alle aree numerate nella figura sopra sono i seguenti:

1. A sinistra [`.i18n/htm/t1.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t1.pug)
2. Giusto [`.i18n/htm/t2.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t2.pug)

[`pug`](https://pugjs.org) è un linguaggio modello che genera `HTML` .

[➔ Clicca qui per imparare la grammatica di pug](https://pugjs.org)

La stringa di formato `${I18N.sponsor}` viene utilizzata nel file per implementare l'internazionalizzazione e il suo contenuto verrà sostituito con il testo corrispondente in [i18n.yml](https://github.com/i18n-site/demo.i18n.site/blob/main/en/i18n.yml) nella directory della lingua di origine.

**Non scrivere `css` e `js` in `pug`** , altrimenti si verificherà un errore.

Gli stili vengono scritti in `css` e l'interazione viene ottenuta creando componenti web.

Qui, il file corrispondente allo stile della barra di [i18n/htm/topbar.css](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/topbar.css) è :