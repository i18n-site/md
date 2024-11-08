# संपादक के सिफारिश कइल गइल बा

हर आदमी के आपन पसंदीदा संपादक होला इहाँ हमनी के आपन `Markdown` बेहतरीन तरीका साझा करत बानी जा।

[Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) `MarkDown` [vscode](https://code.visualstudio.com/)

जइसे कि नीचे देखावल गइल बा, पूर्वावलोकन विंडो खोले खातिर संपादक में राइट क्लिक करीं।

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

फाइल `Markdown` खोले खातिर `vscode` कॉल करे खातिर कमांड लाइन में `code xxx.md` दर्ज करीं .

तस्वीर अपलोड करे खातिर [PicList](https://github.com/Kuingsmile/PicList)

ई अपलोड कइला के बाद फाइल के नाँव के स्वचालित रूप से `Markdown` फॉर्मेट में कॉपी करे के सपोर्ट करे ला, जेकरा से दक्षता में बहुत सुधार होला।

एकरे साथ ही, रउआँ निम्नलिखित कॉन्फ़िगरेशन के संदर्भ दे सकत बानी, फाइल के संशोधित क सकत बानी आ अपलोड कइल फाइल के कॉन्फ़िगर क सकत बानी कि छवि के आकार कम करे खातिर स्वचालित रूप से `avif` पर संकुचित हो सके।

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