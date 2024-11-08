# i18n.site मार्कडाउन लेखन अधिवेशन

## अँकर पॉइंट

पारंपारिक `MarkDown` अँकर पॉइंट मजकूर सामग्रीवर आधारित तयार केले जातात, बहु-भाषेच्या बाबतीत, हे समाधान व्यवहार्य नाही.

पोझिशनिंग अँकर पॉइंट मॅन्युअली तयार करण्यासाठी `i18n.site` सह सहमत असलेला अँकर पॉइंट सोल्यूशन म्हणजे `<a rel=id href="#xxx" id="xxx"></a>` `MarkDown` मजकूर घालणे.

`<a rel=id href="#xxx" id="xxx"></a>` , येथे `rel=id` अँकर पॉइंटची पृष्ठ शैली परिभाषित करते, कृपया `xxx` तुमच्या वास्तविक अँकर इंग्रजी संक्षेपाने बदला.

अँकर सहसा शीर्षकामध्ये जोडले जातात, जसे की:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

प्रदर्शन प्रभाव खालीलप्रमाणे आहे:

<img src="//p.3ti.site/1721381136.avif" width="350">

## `MarkDown` मध्ये `HTML` लिहा

`HTML` `pug` कोडमध्ये एम्बेड केला जाऊ शकतो.

`<pre>` घटकांमधील सामग्रीचे भाषांतर केले जाणार नाही.

हे दोन बिंदू एकत्र करून, तुम्ही विविध डिस्प्ले इफेक्ट्स मिळवण्यासाठी `MarkDown` मध्ये `HTML` सहज लिहू शकता.

[HTML इथे क्लिक i18n.site](//raw.githubusercontent.com/i18n-site/md/main/zh/README.md) :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

लक्षात घ्या की वरील `<pre>` मध्ये `<style>` देखील परिभाषित केले आहे.