# i18n.site MarkDown Writing Convention

## Punto Sa Angkla

Ang tradisyonal `MarkDown` nga mga punto sa anchor gihimo base sa sulud sa teksto Sa kaso sa daghang pinulongan, kini nga solusyon dili mahimo.

Ang solusyon sa anchor point nga giuyonan sa `i18n.site` mao ang pagsal-ot sa teksto nga susama sa `<a rel=id href="#xxx" id="xxx"></a>` sa `MarkDown` aron mano-mano ang paghimo sa positioning anchor point.

`<a rel=id href="#xxx" id="xxx"></a>` , dinhi `rel=id` naghubit sa estilo sa panid sa anchor point, palihog ilisan `xxx` sa imong aktuwal nga anchor English abbreviation.

Ang mga anchor sagad idugang sa titulo, sama sa:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

Ang epekto sa pagpakita mao ang mosunod:

<img src="//p.3ti.site/1721381136.avif" width="350">

## Pagsulat `HTML` Sa `MarkDown`

`HTML` mahimong ma-embed sa `pug` code.

Ang sulud sa `<pre>` nga mga elemento dili mahubad.

Sa paghiusa niining duha ka punto, dali ka makasulat og `HTML` sa `MarkDown` aron makab-ot ang lainlaing mga epekto sa pagpakita.

I-klik dinhi para : [HTML i18n.site](//raw.githubusercontent.com/i18n-site/md/main/zh/README.md)

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Timan-i nga `<style>` gihubit usab sa `<pre>` sa ibabaw.