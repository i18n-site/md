# संपादक अनुशंसा

सबहक अपन-अपन पसंदीदा संपादक अछि आउ अपन सर्वोत्तम प्रथा एतय साझा करी `Markdown`

`MarkDown` [vscode](https://code.visualstudio.com/) [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced)

जेना कि नीचाँ देखाओल गेल अछि, पूर्वावलोकन विंडो खोलबाक लेल संपादक मे राइट-क्लिक करू ।

<img alt="" src="https://p.3ti.site/1720775216.avif">
<img alt="" src="https://p.3ti.site/1720775043.avif">

`vscode` open `Markdown` फाइल केँ कॉल करबाक लेल कमांड लाइन पर `code xxx.md`

चित्र अपलोड करय लेल [PicList](https://github.com/Kuingsmile/PicList)

ई अपलोड करला के बाद फाइल नाम प्रारूप `Markdown` स्वचालित रूप स कॉपी करय के समर्थन करैत अछि, जे दक्षता में बहुत सुधार करैत अछि.

एकरऽ साथ ही, आप निम्नलिखित विन्यास क॑ संदर्भित करी सकै छियै, फाइल क॑ संशोधित करी सकै छियै, आरू अपलोड करलऽ गेलऽ फाइल क॑ स्वचालित रूप स॑ संकुचित करी सकै छियै ताकि छवि केरऽ आकार कम होय सक॑ `avif`

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
