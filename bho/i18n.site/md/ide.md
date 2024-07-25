# संपादक के सिफारिश कइल गइल बा

हर आदमी के आपन पसंदीदा संपादक होला आईं हमनी के बेहतरीन तरीका इहाँ साझा कइल जाव `Markdown`

हमनी [vscode](https://code.visualstudio.com/) लिखत घरी रियल टाइम में पूर्वावलोकन [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) खातिर `MarkDown`

जइसे कि नीचे देखावल गइल बा, पूर्वावलोकन विंडो खोले खातिर संपादक में राइट क्लिक करीं।

<img alt="" src="https://p.3ti.site/1720775216.avif">
<img alt="" src="https://p.3ti.site/1720775043.avif">

`vscode` open `Markdown` फाइल के कॉल करे खातिर कमांड लाइन पर `code xxx.md`

तस्वीर अपलोड करे खातिर [PicList](https://github.com/Kuingsmile/PicList)

ई अपलोड कइला के बाद फाइल के नाम `Markdown` फॉर्मेट के स्वचालित रूप से कॉपी करे के सपोर्ट करेला, जवना से दक्षता में बहुत सुधार होला।

एकरे साथ ही, रउआँ निम्नलिखित कॉन्फ़िगरेशन के संदर्भ दे सकत बानी, फाइल के संशोधित क सकत बानी, आ अपलोड कइल फाइल के कॉन्फ़िगर क सकत बानी कि ऊ स्वचालित रूप से संकुचित हो सके ताकि छवि के आकार कम हो सके `avif`

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
