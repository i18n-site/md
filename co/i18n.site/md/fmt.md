# i18n.site MarkDown Cunvenzione Di Scrittura

## Puntu Di Ancora

I punti d'ancora tradiziunali `MarkDown` sò generati nantu à u cuntenutu di testu In u casu di multi-lingua, sta suluzione ùn hè micca fattibile.

A suluzione di u puntu d'ancora accunsentutu cù `i18n.site` hè di inserisce un testu simili à `<a rel=id href="#xxx" id="xxx"></a>` in `MarkDown` per creà manualmente u puntu d'ancora di posizionamentu.

`<a rel=id href="#xxx" id="xxx"></a>` , quì `rel=id` definisce u stilu di pagina di u puntu di l'ancora, per piacè rimpiazzà `xxx` cù a vostra abbreviazione inglese di l'ancora attuale.

L'ancore sò generalmente aghjuntu à u titulu, cum'è:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

L'effettu di a visualizazione hè u seguente:

<img src="//p.3ti.site/1721381136.avif" width="350">

## Scrivi `HTML` in `MarkDown`

`HTML` pò esse incrustatu in u codice `pug` .

U cuntenutu in `<pre>` elementi ùn serà micca traduttu.

Cumminendu sti dui punti, pudete scrive facilmente `HTML` in `MarkDown` per ottene diversi effetti di visualizazione.

[Cliccate quì per i18n.site A lista di codici di lingua in a pagina di casa HTML hè scrittu](//raw.githubusercontent.com/i18n-site/md/main/zh/README.md) , è u codice hè cusì :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Nota chì `<style>` hè ancu definitu in `<pre>` sopra.