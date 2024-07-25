# मार्कडाउन ढाँचा सम्मेलन

## लंगर बिन्दु

`MarkDown` एङ्करहरू पाठ सामग्रीको आधारमा उत्पन्न हुन्छन्, यो समाधान सम्भव छैन।

सहमत एंकर समाधान म्यानुअल रूपमा स्थिति एंकर सिर्जना गर्न `<a rel=id href="#xxx" id="xxx"></a>` in `MarkDown` जस्तै पाठ सम्मिलित गर्नु हो `i18n.site`

`<a rel=id href="#xxx" id="xxx"></a>` , यहाँ `rel=id` एंकर बिन्दुको पृष्ठ शैली परिभाषित गर्दछ, कृपया `xxx` लाई तपाईंको वास्तविक एंकर अंग्रेजी संक्षिप्त नामले बदल्नुहोस्।

एंकरहरू सामान्यतया शीर्षकमा थपिन्छन्, जस्तै:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

प्रदर्शन प्रभाव निम्नानुसार छ:

<img src="//p.3ti.site/1721381136.avif" width="350">

## `HTML` `MarkDown`

`HTML` कोडमा इम्बेड गर्न सकिन्छ `pug`

`<pre>` भित्रको सामग्री अनुवाद गरिने छैन।

यी दुई बिन्दुहरू संयोजन गर्दै, तपाईं `MarkDown` विभिन्न प्रदर्शन प्रभावहरू प्राप्त गर्न `HTML` ।

तपाईले कार्यान्वयनलाई सन्दर्भ गर्न सक्नुहुन्छ [github.com/i18n-site/md/en/README.md](https://raw.githubusercontent.com/i18n-site/md/main/en/README.md) कोड निम्नानुसार छ :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

ध्यान दिनुहोस् कि `<style>` माथि पनि परिभाषित गरिएको छ `<pre>`
