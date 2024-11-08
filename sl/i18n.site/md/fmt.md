# i18n.site MarkDown Pisna Konvencija

## Sidrišče

Tradicionalne `MarkDown` sidrnih točk se ustvarijo na podlagi besedilne vsebine. V primeru večjezičnosti ta rešitev ni izvedljiva.

Rešitev sidrne točke, dogovorjena z `i18n.site` je vstavljanje besedila, podobnega `<a rel=id href="#xxx" id="xxx"></a>` v `MarkDown` za ročno ustvarjanje sidrne točke za pozicioniranje.

`<a rel=id href="#xxx" id="xxx"></a>` , tukaj `rel=id` določa slog strani sidrne točke, zamenjajte `xxx` s svojo dejansko sidrno angleško okrajšavo.

Sidra so običajno dodana naslovu, kot so:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

Učinek prikaza je naslednji:

<img src="//p.3ti.site/1721381136.avif" width="350">

## Napiši `HTML` v `MarkDown`

`HTML` je mogoče vdelati v kodo `pug` .

Vsebina v elementih `<pre>` ne bo prevedena.

Če združite ti dve točki, lahko preprosto napišete `HTML` v `MarkDown` , da dosežete različne učinke prikaza.

[Kliknite tukaj za referenco i18n.site Seznam jezikovnih kod na domači strani je napisan HTML](//raw.githubusercontent.com/i18n-site/md/main/zh/README.md) , koda pa je naslednja :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Upoštevajte, da je `<style>` definiran tudi v `<pre>` zgoraj.