# Convenzione di scrittura per Markdown su i18n.site

## Punto di ancoraggio

I punti di ancoraggio tradizionali di `Markdown` si basano sul contenuto testuale, ma questa soluzione non è applicabile in contesti multilingue.

La convenzione dei punti di ancoraggio di `i18n.site` prevede l'inserimento di testi simili a `<a rel=id href="#xxx" id="xxx"></a>` in `Markdown` per creare manualmente punti di ancoraggio di navigazione.

`<a rel=id href="#xxx" id="xxx"></a>`, qui `rel=id` specifica lo stile della pagina per il punto di ancoraggio, sostituisci `xxx` con l'abbreviazione inglese del punto di ancoraggio effettivo.

I punti di ancoraggio vengono solitamente aggiunti ai titoli, come ad esempio:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

L'effetto visivo sarà il seguente:

<img src="//p.3ti.site/1721381136.avif" width="350">

## Scrivere `HTML` in `Markdown`

Il codice `pug` può integrare `HTML`.

Il contenuto degli elementi `<pre>` non verrà tradotto.

Combinate questi due punti, è possibile scrivere agevolmente `HTML` in `Markdown` per ottenere vari effetti di visualizzazione.

Puoi fare riferimento all'implementazione in [github.com/i18n-site/md/en/README.md](https://raw.githubusercontent.com/i18n-site/md/main/en/README.md), il codice è il seguente:

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Nota che nel `<pre>` sopra è definito anche `<style>`.


## Immagini/Video/Collegamenti multilingue

Dopo la conversione di `Markdown` in `HTML`, il simbolo `$LANG` presente negli attributi `src` e `href` sarà sostituito con il [codice della lingua](/i18/LANG_CODE) attualmente in uso.

Grazie a questa variabile, è possibile realizzare la multi lingualità per immagini/video/collegamenti.