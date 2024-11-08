# i18n.site MarkDown Rakstīšanas Konvencija

## Enkura Punkts

Tradicionālie `MarkDown` enkura punkti tiek ģenerēti, pamatojoties uz teksta saturu. Vairāku valodu gadījumā šis risinājums nav iespējams.

Enkura punkta risinājums, kas saskaņots ar `i18n.site` ir ievietot tekstu, kas līdzīgs `<a rel=id href="#xxx" id="xxx"></a>` `MarkDown` lai manuāli izveidotu pozicionēšanas enkura punktu.

`<a rel=id href="#xxx" id="xxx"></a>` , šeit `rel=id` nosaka enkurpunkta lapas stilu, lūdzu, aizstājiet `xxx` ar savu faktisko enkura saīsinājumu angļu valodā.

Nosaukumam parasti tiek pievienoti enkuri, piemēram:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

Displeja efekts ir šāds:

<img src="//p.3ti.site/1721381136.avif" width="350">

## Rakstiet `HTML` No `MarkDown`

`HTML` var iegult `pug` kodā.

`<pre>` elementu saturs netiks tulkots.

Apvienojot šos divus punktus, varat viegli ierakstīt `HTML` pret `MarkDown` lai iegūtu dažādus displeja efektus.

[Noklikšķiniet šeit, lai iegūtu atsauci i18n.site Valodu kodu saraksts mājaslapā ir rakstīts HTML](//raw.githubusercontent.com/i18n-site/md/main/zh/README.md) , un kods ir šāds: :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Ņemiet vērā, ka `<style>` ir definēts arī `<pre>` iepriekš.