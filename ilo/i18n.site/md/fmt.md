# i18n.site MarkDown Kombension Ti Panagsurat

## Punto Ti Angkla

Dagiti tradisional `MarkDown` a puntos ti angkla ket napataud a naibatay iti linaon ti teksto Iti kaso ti adu a pagsasao, daytoy a solusion ket saan a maaramid.

Ti solusion ti puntos ti angkla a napagnunumuan iti `i18n.site` ket ti panangikabil ti teksto a kapada ti `<a rel=id href="#xxx" id="xxx"></a>` iti `MarkDown` tapno manual a mangpartuat ti puntos ti angkla ti panagposision.

`<a rel=id href="#xxx" id="xxx"></a>` , ditoy ti `rel=id` ket mangikeddeng ti estilo ti panid ti puntos ti angkla, pangngaasi a sukatam `xxx` iti aktual nga ababa nga Ingles ti angklamo.

Dagiti angkla ket kadawyan a mainayon iti paulo, a kas ti:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

Ti epekto ti display ket kastoy:

<img src="//p.3ti.site/1721381136.avif" width="350">

## Isurat `HTML` Iti `MarkDown`

`HTML` ti mabalin nga i-embed iti `pug` a kodigo.

Saan a maipatarus ti linaon iti `<pre>` nga elemento.

No pagtitiponen dagitoy dua a punto, nalaka laeng nga isuratmo `HTML` iti `MarkDown` tapno magun-odmo ti nadumaduma nga epekto ti display.

[I-klik ditoy para HTML i18n.site](//raw.githubusercontent.com/i18n-site/md/main/zh/README.md) :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Panunoten a ti `<style>` ket naikeddeng met iti `<pre>` iti ngato.