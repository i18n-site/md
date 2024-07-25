# Konvencija O Formatu MarkDown

## Sidrišče

Tradicionalna `MarkDown` sidra so ustvarjena na podlagi besedilne vsebine. V primeru večjezičnosti ta rešitev ni izvedljiva.

Dogovorjena rešitev `i18n.site` sidro je vstavljanje besedila, podobnega `<a rel=id href="#xxx" id="xxx"></a>` , v `MarkDown` za ročno ustvarjanje sidra za pozicioniranje.

`<a rel=id href="#xxx" id="xxx"></a>` , tukaj `rel=id` določa slog strani sidrne točke, zamenjajte `xxx` s svojo dejansko sidrno angleško okrajšavo.

Sidra so običajno dodana naslovu, kot so:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

Učinek prikaza je naslednji:

<img src="//p.3ti.site/1721381136.avif" width="350">

## Piši `HTML` `MarkDown`

`pug` `HTML` je mogoče vdelati v kodo.

Vsebina znotraj elementa `<pre>` ne bo prevedena.

Če združite ti dve točki, lahko preprosto napišete `HTML` v `MarkDown`

Lahko se sklicujete na izvedbo v [github.com/i18n-site/md/en/README.md](https://raw.githubusercontent.com/i18n-site/md/main/en/README.md) koda je naslednja :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Upoštevajte, da je `<style>` definiran tudi v `<pre>`
