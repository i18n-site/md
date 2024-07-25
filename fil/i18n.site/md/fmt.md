# MarkDown Format Convention

## Anchor Point

Ang mga tradisyunal na `MarkDown` Anchor ay nabuo batay sa nilalaman ng teksto Sa kaso ng maraming wika, ang solusyon na ito ay hindi magagawa.

`i18n.site` `MarkDown` `<a rel=id href="#xxx" id="xxx"></a>`

`<a rel=id href="#xxx" id="xxx"></a>` , dito ay tinutukoy `rel=id` ang istilo ng pahina ng anchor point, mangyaring palitan `xxx` ng iyong aktwal na anchor English abbreviation.

Ang mga anchor ay karaniwang idinaragdag sa pamagat, tulad ng:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

Ang epekto ng pagpapakita ay ang mga sumusunod:

<img src="//p.3ti.site/1721381136.avif" width="350">

## Sumulat `HTML` Sa `MarkDown`

`pug` `HTML` ay maaaring i-embed sa code.

Hindi isasalin ang nilalaman sa loob ng `<pre>`

Ang pagsasama-sama ng dalawang puntong ito, madali mong maisulat `HTML` sa `MarkDown`

Maaari kang sumangguni sa pagpapatupad sa [github.com/i18n-site/md/en/README.md](https://raw.githubusercontent.com/i18n-site/md/main/en/README.md) ang code ay ang sumusunod :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Tandaan na ang `<style>` ay tinukoy din sa `<pre>`
