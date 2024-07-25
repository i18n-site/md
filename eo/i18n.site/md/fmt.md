# MarkDown-Forma Konvencio

## Ankropunkto

Tradiciaj `MarkDown` Ankroj estas generitaj sur tekstenhavo En la kazo de plurlingva, ĉi tiu solvo ne estas farebla.

`i18n.site` interkonsentita ankrosolvo estas enigi tekston similan al `<a rel=id href="#xxx" id="xxx"></a>` en `MarkDown` por permane krei la pozician ankron.

`<a rel=id href="#xxx" id="xxx"></a>` ĉi tie `rel=id` difinas la paĝstilon de la ankropunkto, bonvolu anstataŭigi `xxx` per via reala ankra angla mallongigo.

Ankroj estas kutime aldonitaj al la titolo, kiel ekzemple:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

La ekrana efiko estas kiel sekvas:

<img src="//p.3ti.site/1721381136.avif" width="350">

## Skribu `HTML` en `MarkDown`

`pug` `HTML` povas esti enigita en la kodon.

Enhavo en la elemento `<pre>` ne estos tradukita.

Kombinante ĉi tiujn du punktojn, vi povas `MarkDown` skribi `HTML` por atingi diversajn ekranefikojn.

Vi povas rilati al la efektivigo en [github.com/i18n-site/md/en/README.md](https://raw.githubusercontent.com/i18n-site/md/main/en/README.md) la kodo estas jena :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Notu ke `<style>` ankaŭ estas difinita en `<pre>`
