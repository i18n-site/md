# i18n.site मार्कडाउन लेखन सम्मेलन

## लंगर बिन्दु

परम्परागत `MarkDown` एङ्कर बिन्दुहरू पाठ सामग्रीको आधारमा उत्पन्न हुन्छन्, बहु-भाषाको अवस्थामा, यो समाधान सम्भव छैन।

`i18n.site` सँग सहमत भएको एन्कर पोइन्ट समाधान भनेको म्यानुअल रूपमा पोजिशनिङ एन्कर पोइन्ट सिर्जना गर्न `<a rel=id href="#xxx" id="xxx"></a>` मा `MarkDown` जस्तै पाठ घुसाउनु हो।

`<a rel=id href="#xxx" id="xxx"></a>` , यहाँ `rel=id` एन्कर पोइन्टको पृष्ठ शैली परिभाषित गर्दछ, कृपया `xxx` आफ्नो वास्तविक एंकर अंग्रेजी संक्षिप्त नामले बदल्नुहोस्।

एंकरहरू सामान्यतया शीर्षकमा थपिन्छन्, जस्तै:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

प्रदर्शन प्रभाव निम्नानुसार छ:

<img src="//p.3ti.site/1721381136.avif" width="350">

## `MarkDown` मा `HTML` लेख्नुहोस्

`HTML` `pug` कोडमा इम्बेड गर्न सकिन्छ।

`<pre>` तत्वहरूमा भएका सामग्री अनुवाद गरिने छैन।

यी दुई बिन्दुहरू संयोजन गर्दै, तपाईं सजिलैसँग विभिन्न प्रदर्शन प्रभावहरू प्राप्त गर्न `MarkDown` मा `HTML` लेख्न सक्नुहुन्छ।

[सन्दर्भको लागि यहाँ क्लिक गर्नुहोस् i18n.site होमपेजमा भाषा कोड सूची HTML लेखिएको छ](//raw.githubusercontent.com/i18n-site/md/main/zh/README.md) , र कोड : छ

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

नोट गर्नुहोस् कि `<style>` माथिको `<pre>` मा पनि परिभाषित गरिएको छ।