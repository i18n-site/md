# Konbension Ti Pormat Ti MarkDown

## Punto Ti Angkla

Dagiti tradisional `MarkDown`

`i18n.site` Ti napagnunumuan a solusion ti angkla ket ti panangikabil ti teksto a kapada ti `<a rel=id href="#xxx" id="xxx"></a>` iti `MarkDown` tapno manual a mangpartuat ti angkla ti panagposision.

`<a rel=id href="#xxx" id="xxx"></a>` `rel=id` `xxx`

Dagiti angkla ket kadawyan a mainayon iti paulo, a kas ti:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

Ti epekto ti display ket kastoy:

<img src="//p.3ti.site/1721381136.avif" width="350">

## Isurat Ti `HTML` Iti `MarkDown`

`pug` `HTML` mabalin nga i-embed iti kodigo.

Saan a maipatarus ti linaon iti uneg ti `<pre>`

No pagtitiponen dagitoy dua a punto, nalaka laeng nga isurat `HTML` in `MarkDown`

Mabalinmo a kitaen ti implementasion iti [github.com/i18n-site/md/en/README.md](https://raw.githubusercontent.com/i18n-site/md/main/en/README.md) ti kodigo ket kastoy :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Panunoten a ti `<style>` ket naikeddeng met iti `<pre>`
