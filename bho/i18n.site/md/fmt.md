# मार्कडाउन प्रारूप के कन्वेंशन के बा

## लंगर बिंदु के बा

पारंपरिक `MarkDown`

`i18n.site` `MarkDown` `<a rel=id href="#xxx" id="xxx"></a>`

`<a rel=id href="#xxx" id="xxx"></a>` `rel=id` `xxx`

आमतौर पर टाइटिल में एंकर जोड़ल जाला, जइसे कि:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

डिस्प्ले इफेक्ट निम्नलिखित बा:

<img src="//p.3ti.site/1721381136.avif" width="350">

## `HTML` में लिखे के बा `MarkDown`

`pug` `HTML` कोड में एम्बेड कइल जा सकेला।

तत्व के भीतर `<pre>` सामग्री के अनुवाद ना कइल जाई।

एह दुनो बिंदु के मिला के रउआ आसानी से `HTML` `MarkDown` लिख के विभिन्न डिस्प्ले इफेक्ट हासिल कर सकेनी।

रउआँ [github.com/i18n-site/md/en/README.md](https://raw.githubusercontent.com/i18n-site/md/main/en/README.md) कोड निम्नलिखित बा :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

ध्यान रहे कि `<style>` के भी ऊपर परिभाषित कइल गइल बा `<pre>`
