# संपादक की सिफ़ारिश

हर किसी का अपना पसंदीदा संपादक होता है। यहां हम अपनी `Markdown` सर्वोत्तम प्रथाएं साझा करते हैं।

हम `MarkDown` लिखने के लिए [vscode](https://code.visualstudio.com/) का उपयोग करते हैं और लिखते समय वास्तविक समय में पूर्वावलोकन करने के लिए प्लग-इन [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) स्थापित करते हैं।

जैसा कि नीचे दिखाया गया है, पूर्वावलोकन विंडो खोलने के लिए संपादक में राइट-क्लिक करें।

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

फ़ाइल `Markdown` खोलने के लिए `vscode` कॉल करने के लिए कमांड लाइन में `code xxx.md` दर्ज करें।

चित्र अपलोड करने के लिए [PicList](https://github.com/Kuingsmile/PicList) का उपयोग करें, अपलोड शॉर्टकट कुंजी सेट करना याद रखें और एक क्लिक से स्क्रीनशॉट अपलोड करें।

यह अपलोड करने के बाद फ़ाइल नाम को स्वचालित रूप से `Markdown` प्रारूप में कॉपी करने का समर्थन करता है, जिससे दक्षता में काफी सुधार होता है।

साथ ही, आप निम्न कॉन्फ़िगरेशन का संदर्भ ले सकते हैं, फ़ाइल को संशोधित कर सकते हैं, और छवि आकार को कम करने के लिए अपलोड की गई फ़ाइल को स्वचालित रूप से `avif` पर संपीड़ित करने के लिए कॉन्फ़िगर कर सकते हैं।

```json
"buildIn": {
  "compress": {
    "quality": 99,
    "isConvert": true,
    "convertFormat": "avif",
    "isReSize": false,
    "reSizeWidth": 0,
    "reSizeHeight": 0,
    "skipReSizeOfSmallImg": false,
    "isReSizeByPercent": false,
    "reSizePercent": 50,
    "isRotate": false,
    "rotateDegree": 0,
    "isRemoveExif": true,
    "isFlip": false,
    "isFlop": false,
    "formatConvertObj": {}
  },
  … …
```