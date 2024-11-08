# i18n.site मार्कडाउन लेखन सम्मेलन के बा

## लंगर बिंदु के बा

पारंपरिक `MarkDown` एंकर बिंदु पाठ सामग्री के आधार पर पैदा कइल जाला बहु-भाषा के मामला में, ई समाधान संभव नइखे।

`i18n.site` से सहमत एंकर बिंदु समाधान ई बा कि पोजीशनिंग एंकर बिंदु के मैन्युअल रूप से बनावे खातिर `MarkDown` में `<a rel=id href="#xxx" id="xxx"></a>` के समान पाठ डालल जाय।

`<a rel=id href="#xxx" id="xxx"></a>` , इहाँ `rel=id` एंकर बिंदु के पन्ना शैली के परिभाषित करे ला, कृपया `xxx` आपन वास्तविक एंकर अंगरेजी संक्षिप्त रूप से बदल दीं।

आमतौर पर टाइटिल में एंकर जोड़ल जाला, जइसे कि:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

डिस्प्ले इफेक्ट निम्नलिखित बा:

<img src="//p.3ti.site/1721381136.avif" width="350">

## `MarkDown` में `HTML` लिखे के बा

`HTML` `pug` कोड में एम्बेड कइल जा सकेला।

`<pre>` तत्व में सामग्री के अनुवाद ना कइल जाई।

एह दुनो बिंदु के मिला के रउआ आसानी से `MarkDown` में `HTML` लिख के विभिन्न डिस्प्ले इफेक्ट हासिल कर सकेनी।

[i18n.site खातिर इहाँ क्लिक करीं होमपेज पर भाषा कोड सूची HTML लिखल बा](//raw.githubusercontent.com/i18n-site/md/main/zh/README.md) , आ कोड निम्नलिखित बा :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

ध्यान रहे कि `<style>` भी ऊपर `<pre>` में परिभाषित कइल गइल बा।