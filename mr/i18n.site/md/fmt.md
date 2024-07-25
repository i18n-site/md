# मार्कडाउन फॉरमॅट कन्व्हेन्शन

## अँकर पॉइंट

पारंपारिक `MarkDown` मजकूर सामग्रीवर आधारित अँकर तयार केले जातात, हे समाधान शक्य नाही.

स्वहस्ते पोझिशनिंग अँकर तयार करण्यासाठी `<a rel=id href="#xxx" id="xxx"></a>` in `MarkDown` सारखा मजकूर टाकणे हे मान्य अँकर उपाय आहे `i18n.site`

`<a rel=id href="#xxx" id="xxx"></a>` , येथे `rel=id` अँकर पॉइंटची पृष्ठ शैली परिभाषित करते, कृपया `xxx` आपल्या वास्तविक अँकर इंग्रजी संक्षेपाने बदला.

अँकर सहसा शीर्षकामध्ये जोडले जातात, जसे की:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

प्रदर्शन प्रभाव खालीलप्रमाणे आहे:

<img src="//p.3ti.site/1721381136.avif" width="350">

## `HTML` मध्ये लिहा `MarkDown`

`pug` `HTML` एम्बेड केले जाऊ शकते.

`<pre>` सामग्री भाषांतरित केली जाणार नाही.

हे दोन बिंदू एकत्र करून, तुम्ही विविध डिस्प्ले इफेक्ट्स मिळवण्यासाठी `HTML` in `MarkDown`

तुम्ही अंमलबजावणीचा संदर्भ घेऊ शकता [github.com/i18n-site/md/en/README.md](https://raw.githubusercontent.com/i18n-site/md/main/en/README.md) कोड खालीलप्रमाणे आहे :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

लक्षात घ्या की `<style>` वर देखील परिभाषित `<pre>` आहे.
