# MarkDown Formāta Konvencija

## Enkura Punkts

`MarkDown` enkuri tiek ģenerēti, pamatojoties uz teksta saturu. Vairāku valodu gadījumā šis risinājums nav iespējams.

Saskaņotais enkura risinājums ir ievietot tekstu, kas līdzīgs `<a rel=id href="#xxx" id="xxx"></a>` `i18n.site` lai `MarkDown` izveidotu pozicionēšanas enkuru.

`<a rel=id href="#xxx" id="xxx"></a>` šeit `rel=id` nosaka enkura punkta lapas stilu, lūdzu, aizstājiet `xxx` ar savu enkura saīsinājumu angļu valodā.

Nosaukumam parasti tiek pievienoti enkuri, piemēram:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

Displeja efekts ir šāds:

<img src="//p.3ti.site/1721381136.avif" width="350">

## `HTML` `MarkDown`

Kodā `HTML` iegult `pug`

Elementa `<pre>` saturs netiks tulkots.

Apvienojot šos divus punktus, varat viegli ierakstīt `HTML` `MarkDown` lai iegūtu dažādus displeja efektus.

Varat atsaukties uz ieviešanu [github.com/i18n-site/md/en/README.md](https://raw.githubusercontent.com/i18n-site/md/main/en/README.md) kods ir šāds :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Ņemiet vērā, ka `<style>` ir definēts arī iepriekš `<pre>`
