# i18n.site MarkDown Writing Convention

## Anchor Point

Ang tradisyonal `MarkDown` anchor point ay nabuo batay sa nilalaman ng teksto Sa kaso ng maraming wika, ang solusyon na ito ay hindi magagawa.

Ang anchor point solution na sumang-ayon sa `i18n.site` ay ang pagpasok ng text na katulad ng `<a rel=id href="#xxx" id="xxx"></a>` in `MarkDown` upang manu-manong gawin ang positioning anchor point.

`<a rel=id href="#xxx" id="xxx"></a>` , dito `rel=id` ay tumutukoy sa estilo ng pahina ng anchor point, mangyaring palitan `xxx` ng iyong aktwal na anchor English abbreviation.

Karaniwang idinaragdag ang mga anchor sa pamagat, gaya ng:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

Ang epekto ng pagpapakita ay ang mga sumusunod:

<img src="//p.3ti.site/1721381136.avif" width="350">

## Sumulat `HTML` Sa `MarkDown`

`HTML` ay maaaring i-embed sa `pug` code.

Ang nilalaman sa `<pre>` elemento ay hindi isasalin.

Ang pagsasama-sama ng dalawang puntong ito, madali mong masusulat `HTML` sa `MarkDown` upang makamit ang iba't ibang mga epekto sa pagpapakita.

[Mag-click dito para sa i18n.site Ang listahan ng code ng wika sa homepage HTML ay nakasulat](//raw.githubusercontent.com/i18n-site/md/main/zh/README.md) , at ang code ay ang sumusunod :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Tandaan na ang `<style>` ay tinukoy din sa `<pre>` sa itaas.