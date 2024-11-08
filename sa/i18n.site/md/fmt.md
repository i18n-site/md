# i18n.site MarkDown लेखन सम्मेलन

## लंगर बिन्दु

पारम्परिकाः `MarkDown` लंगरबिन्दवः पाठसामग्रीणाम् आधारेण उत्पद्यन्ते बहुभाषायाः सन्दर्भे एतत् समाधानं सम्भवं नास्ति ।

`i18n.site` सह सहमतं लंगरबिन्दुसमाधानं `MarkDown` मध्ये `<a rel=id href="#xxx" id="xxx"></a>` सदृशं पाठं सम्मिलितं कृत्वा स्थितिनिर्धारणं लंगरबिन्दुं मैन्युअल् रूपेण निर्मातुं भवति ।

`<a rel=id href="#xxx" id="xxx"></a>` , अत्र `rel=id` एंकर बिन्दुस्य पृष्ठशैलीं परिभाषयति, कृपया `xxx` स्थाने स्वस्य वास्तविकं एंकर आङ्ग्लसंक्षेपं स्थापयन्तु ।

प्रायः शीर्षके लंगराः योजिताः भवन्ति, यथा-

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

प्रदर्शनप्रभावः निम्नलिखितरूपेण भवति ।

<img src="//p.3ti.site/1721381136.avif" width="350">

## `MarkDown` मध्ये `HTML` लिखत

`HTML` `pug` कोड् मध्ये एम्बेड् कर्तुं शक्यते ।

`<pre>` तत्त्वेषु सामग्री अनुवादिता न भविष्यति ।

एतयोः बिन्दुयोः संयोजनेन भवान् विविधप्रदर्शनप्रभावं प्राप्तुं `MarkDown` मध्ये `HTML` सहजतया लिखितुं शक्नोति ।

[सन्दर्भार्थं अत्र क्लिक् i18n.site मुखपृष्ठे भाषासङ्केतसूची HTML लिखिता अस्ति](//raw.githubusercontent.com/i18n-site/md/main/zh/README.md) , सङ्केतः च निम्नलिखितरूपेण : अस्ति

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

उपरि `<pre>` इत्यत्र अपि `<style>` परिभाषितम् इति ध्यानं कुर्वन्तु ।