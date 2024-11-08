# सम्पादक सिफारिस

सबैको आफ्नै मनपर्ने सम्पादक छ यहाँ हामी हाम्रा `Markdown` उत्कृष्ट अभ्यासहरू साझा गर्छौं।

हामी `MarkDown` लेख्न र प्लग-इन [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) स्थापना गर्न प्रयोग [vscode](https://code.visualstudio.com/) ।

तल देखाइएको रूपमा, पूर्वावलोकन विन्डो खोल्न सम्पादकमा दायाँ क्लिक गर्नुहोस्।

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

फाइल `Markdown` खोल्न `vscode` कल गर्न आदेश लाइनमा `code xxx.md` प्रविष्ट गर्नुहोस्।

तस्बिरहरू अपलोड गर्न [PicList](https://github.com/Kuingsmile/PicList) गर्नुहोस्, अपलोड सर्टकट कुञ्जी सेट गर्न सम्झनुहोस्, र एक क्लिकमा स्क्रिनसट अपलोड गर्नुहोस्।

यसले फाइलको नामलाई अपलोड गरेपछि `Markdown` ढाँचामा स्वचालित रूपमा प्रतिलिपि गर्न समर्थन गर्दछ, जसले दक्षतामा धेरै सुधार गर्दछ।

एकै समयमा, तपाइँ निम्न कन्फिगरेसनलाई सन्दर्भ गर्न सक्नुहुन्छ, फाइल परिमार्जन गर्न सक्नुहुन्छ, र अपलोड गरिएको फाइललाई स्वचालित रूपमा `avif` मा संकुचित गर्न छवि आकार कम गर्न कन्फिगर गर्नुहोस्।

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