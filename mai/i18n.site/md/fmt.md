# i18n.site मार्कडाउन लेखन सम्मेलन

## लंगर बिन्दु

पारंपरिक `MarkDown` एंकर बिंदु पाठ सामग्री कें आधार पर उत्पन्न कैल जायत छै बहु-भाषा कें मामला मे, इ समाधान संभव नहि छै.

`i18n.site` स॑ सहमत एंकर पॉइंट समाधान `MarkDown` म॑ `<a rel=id href="#xxx" id="xxx"></a>` के समान पाठ डालना छै ताकि मैन्युअल रूप स॑ पोजीशनिंग एंकर बिन्दु बनाबै के काम करलऽ जाय सक॑ ।

`<a rel=id href="#xxx" id="xxx"></a>` , यहाँ `rel=id` एंकर बिन्दु के पृष्ठ शैली परिभाषित करता है, कृपया `xxx` अपने वास्तविक एंकर अंग्रेजी संक्षिप्त नाम से बदलें |

आमतौर पर शीर्षक मे एंकर जोड़ल जाइत अछि, जेना:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

प्रदर्शन प्रभाव निम्नलिखित अछि :

<img src="//p.3ti.site/1721381136.avif" width="350">

## `MarkDown` में `HTML` लिखें

`HTML` `pug` कोड मे एम्बेड कएल जा सकैत अछि।

`<pre>` तत्व मे सामग्रीक अनुवाद नहि कएल जाएत.

एहि दुनू बिन्दु केँ मिला कए अहाँ `MarkDown` मे `HTML` आसानी सँ लिखि सकैत छी जाहि सँ विभिन्न प्रदर्शन प्रभाव प्राप्त कयल जा सकय ।

[i18n.site के लेल एतय क्लिक करू मुखपृष्ठ पर भाषा कोड सूची HTML लिखल गेल अछि](//raw.githubusercontent.com/i18n-site/md/main/zh/README.md) , आ कोड निम्नलिखित अछि :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

ध्यान राखू जे `<style>` सेहो ऊपर `<pre>` मे परिभाषित अछि।