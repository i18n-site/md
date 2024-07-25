# मार्कडाउन प्रारूप सम्मेलन

## लंगर बिन्दु

पारम्परिक `MarkDown`

`i18n.site` `MarkDown` `<a rel=id href="#xxx" id="xxx"></a>`

`<a rel=id href="#xxx" id="xxx"></a>` `rel=id` `xxx`

आमतौर पर शीर्षक मे एंकर जोड़ल जाइत अछि, जेना:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

प्रदर्शन प्रभाव निम्नलिखित अछि :

<img src="//p.3ti.site/1721381136.avif" width="350">

## `HTML` में लिखें `MarkDown`

`pug` कोड मे एम्बेड `HTML` जा सकैत अछि.

तत्वक भीतरक सामग्रीक अनुवाद नहि कएल जाएत `<pre>`

एहि दुनू बिन्दु के मिला क अहाँ आसानी स `HTML` `MarkDown` लिखि सकैत छी जाहि स विभिन्न प्रदर्शन प्रभाव प्राप्त भ सकैत अछि |

अहाँ [github.com/i18n-site/md/en/README.md](https://raw.githubusercontent.com/i18n-site/md/main/en/README.md) कोड निम्नलिखित अछि :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

ध्यान राखू जे `<style>` ऊपर मे सेहो परिभाषित अछि `<pre>`
