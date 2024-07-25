# मार्कडाउन प्रारूप सम्मेलन

## ऐंकर बिंदु

`MarkDown` एंकर पाठ्य सामग्री के आधार पर उत्पन्न होते हैं, बहु-भाषा के मामले में, यह समाधान संभव नहीं है।

`i18n.site` सहमत एंकर समाधान मैन्युअल रूप से पोजिशनिंग एंकर बनाने के लिए `MarkDown` में `<a rel=id href="#xxx" id="xxx"></a>` के समान टेक्स्ट सम्मिलित करना है।

`<a rel=id href="#xxx" id="xxx"></a>` , यहां `rel=id` एंकर बिंदु की पृष्ठ शैली को परिभाषित करता है, कृपया `xxx` अपने वास्तविक एंकर अंग्रेजी संक्षिप्त नाम से बदलें।

एंकर आमतौर पर शीर्षक में जोड़े जाते हैं, जैसे:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

प्रदर्शन प्रभाव इस प्रकार है:

<img src="//p.3ti.site/1721381136.avif" width="350">

## में `HTML` `MarkDown`

`pug` `HTML` कोड में एम्बेड किया जा सकता है.

`<pre>` तत्व के भीतर की सामग्री का अनुवाद नहीं किया जाएगा।

इन दो बिंदुओं को मिलाकर, आप विभिन्न प्रदर्शन प्रभावों को प्राप्त करने के लिए आसानी से `HTML` लिख सकते हैं `MarkDown`

आप कार्यान्वयन का उल्लेख [github.com/i18n-site/md/en/README.md](https://raw.githubusercontent.com/i18n-site/md/main/en/README.md) कोड इस प्रकार है :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

ध्यान दें कि `<style>` ऊपर `<pre>` में भी परिभाषित किया गया है।
