# संपादक अनुशंसा

सबहक अपन पसंदीदा संपादक अछि एतय हम अपन `Markdown` सर्वोत्तम प्रथा साझा करैत छी।

`MarkDown` [vscode](https://code.visualstudio.com/) [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced)

जेना कि नीचाँ देखाओल गेल अछि, पूर्वावलोकन विंडो खोलबाक लेल संपादक मे राइट-क्लिक करू ।

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

फाइल `Markdown` खोलबाक लेल `vscode` कॉल करबाक लेल कमांड लाइन मे `code xxx.md` दर्ज करू .

चित्र अपलोड करय लेल [PicList](https://github.com/Kuingsmile/PicList)

इ अपलोड करला कें बाद फाइल कें नाम कें स्वचालित रूप सं `Markdown` प्रारूप मे कॉपी करय कें समर्थन करयत छै, जे दक्षता मे काफी सुधार करयत छै.

एकरऽ साथ ही, आप निम्नलिखित विन्यास क॑ संदर्भित करी सकै छियै, फाइल क॑ संशोधित करी सकै छियै, आरू अपलोड करलऽ गेलऽ फाइल क॑ कॉन्फ़िगर करी सकै छियै कि छवि आकार क॑ कम करै लेली स्वचालित रूप स॑ `avif` प॑ संकुचित करलऽ जाय ।

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