# i18n.site MarkDown Skryfkonvensie

## Ankerpunt

Tradisionele `MarkDown` ankerpunte word gegenereer op grond van teksinhoud In die geval van multi-taal is hierdie oplossing nie haalbaar nie.

Die ankerpuntoplossing wat met `i18n.site` ooreengekom is, is om teks soortgelyk aan `<a rel=id href="#xxx" id="xxx"></a>` in `MarkDown` in te voeg om die posisioneringsankerpunt handmatig te skep.

`<a rel=id href="#xxx" id="xxx"></a>` , hier definieer `rel=id` die bladsystyl van die ankerpunt, vervang asseblief `xxx` met jou werklike anker Engelse afkorting.

Ankers word gewoonlik by die titel gevoeg, soos:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

Die vertoningseffek is soos volg:

<img src="//p.3ti.site/1721381136.avif" width="350">

## Skryf `HTML` Uit `MarkDown`

`HTML` kan in `pug` kode ingebed word.

Inhoud in `<pre>` elemente sal nie vertaal word nie.

Deur hierdie twee punte te kombineer, kan jy maklik `HTML` in `MarkDown` skryf om verskeie vertooneffekte te verkry.

[Klik hier vir i18n.site Die taalkodelys op die tuisblad HTML is geskryf](//raw.githubusercontent.com/i18n-site/md/main/zh/README.md) , en die kode is soos volg :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Let daarop dat `<style>` ook in `<pre>` hierbo gedefinieer word.