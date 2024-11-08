# i18n.site MarkDown Ýazuw Konwensiýasy

## Labyr Nokady

Adaty `MarkDown` labyr nokatlary tekst mazmunyna esaslanýar. Köp dilli bolsa, bu çözgüt mümkin däl.

`i18n.site` bilen ylalaşylan labyr nokady çözgüdi, ýerleşýän labyr nokadyny el bilen döretmek üçin `MarkDown` -den `<a rel=id href="#xxx" id="xxx"></a>` -e meňzeş tekst girizmekdir.

`<a rel=id href="#xxx" id="xxx"></a>` , bu ýerde `rel=id` labyr nokadynyň sahypa stilini kesgitleýär, `xxx` hakyky labyr iňlisçe gysgaltmasy bilen çalyşyň.

Adatça labyrlar goşulýar, meselem:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

Ekranyň täsiri aşakdaky ýaly:

<img src="//p.3ti.site/1721381136.avif" width="350">

## `MarkDown` Dan `HTML` Ýazyň

`HTML` `pug` girizip bolýar.

`<pre>` elementdäki mazmun terjime edilmez.

Bu iki nokady birleşdirip, dürli görkeziş effektlerine ýetmek üçin aňsatlyk bilen `MarkDown` -dan `HTML` ýazyp bilersiňiz.

[i18n.site üçin şu ýere basyň HTML Baş sahypadaky dil kody sanawy ýazylýar](//raw.githubusercontent.com/i18n-site/md/main/zh/README.md) we kod aşakdaky :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

`<style>` ýokardaky `<pre>` -da kesgitlenendigine üns beriň.