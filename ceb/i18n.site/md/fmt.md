# MarkDown Format Nga Kombensiyon

## Punto Sa Angkla

Tradisyonal `MarkDown` Ang mga anchor gihimo base sa sulod sa teksto Sa kaso sa multi-pinulongan, kini nga solusyon dili mahimo.

`i18n.site` `MarkDown` `<a rel=id href="#xxx" id="xxx"></a>`

`<a rel=id href="#xxx" id="xxx"></a>` , dinhi `rel=id` naghubit sa estilo sa panid sa anchor point, palihog ilisan `xxx` sa imong aktuwal nga anchor English abbreviation.

Ang mga anchor sagad idugang sa titulo, sama sa:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

Ang epekto sa pagpakita mao ang mosunod:

<img src="//p.3ti.site/1721381136.avif" width="350">

## Isulat `HTML` Sa `MarkDown`

`pug` `HTML` mahimong i-embed sa code.

Ang sulud sa sulod sa `<pre>` dili mahubad.

Ang paghiusa niining duha ka punto, dali nimong masulat `HTML` sa `MarkDown`

Mahimo nimong i-refer ang pagpatuman sa [github.com/i18n-site/md/en/README.md](https://raw.githubusercontent.com/i18n-site/md/main/en/README.md) ang code mao ang mosunod :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Timan-i nga ang `<style>` gihubit usab `<pre>` ibabaw.
