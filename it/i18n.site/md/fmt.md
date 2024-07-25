# Convenzione Del Formato MarkDown

## Punto Di Ancoraggio

Tradizionale `MarkDown` Le ancore vengono generate in base al contenuto testuale. Nel caso del multilingua questa soluzione non è fattibile.

`i18n.site` La soluzione di ancoraggio concordata è quella di inserire un testo simile a `<a rel=id href="#xxx" id="xxx"></a>` in `MarkDown` per creare manualmente l'ancora di posizionamento.

`<a rel=id href="#xxx" id="xxx"></a>` , qui `rel=id` definisce lo stile della pagina del punto di ancoraggio, sostituisci `xxx` con l'abbreviazione inglese dell'ancora effettiva.

Solitamente vengono aggiunte delle ancore al titolo, ad esempio:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

L'effetto di visualizzazione è il seguente:

<img src="//p.3ti.site/1721381136.avif" width="350">

## Scrivi `HTML` `MarkDown`

`pug` `HTML` può essere incorporato nel codice.

Il contenuto all'interno dell'elemento `<pre>` non verrà tradotto.

Combinando questi due punti, puoi facilmente scrivere `HTML` in `MarkDown` per ottenere vari effetti di visualizzazione.

Puoi fare riferimento all'implementazione in [github.com/i18n-site/md/en/README.md](https://raw.githubusercontent.com/i18n-site/md/main/en/README.md) il codice è il seguente :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Si noti che `<style>` è definito anche in `<pre>`
