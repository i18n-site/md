# संपादकाची शिफारस

प्रत्येकाचा स्वतःचा आवडता संपादक असतो `Markdown`

आम्ही `MarkDown` [vscode](https://code.visualstudio.com/) वापरतो आणि रीअल टाइममध्ये पूर्वावलोकन करण्यासाठी प्लग-इन [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) स्थापित करतो.

खाली दाखवल्याप्रमाणे, पूर्वावलोकन विंडो उघडण्यासाठी संपादकावर उजवे-क्लिक करा.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

फाईल `Markdown` उघडण्यासाठी `vscode` कॉल करण्यासाठी कमांड लाइनमध्ये `code xxx.md` प्रविष्ट करा.

चित्रे अपलोड करण्यासाठी [PicList](https://github.com/Kuingsmile/PicList) , अपलोड शॉर्टकट की सेट करणे लक्षात ठेवा आणि एका क्लिकने स्क्रीनशॉट अपलोड करा.

ते अपलोड केल्यानंतर फाइलचे नाव `Markdown` फॉरमॅटमध्ये आपोआप कॉपी करण्यास समर्थन देते, जे कार्यक्षमतेत मोठ्या प्रमाणात सुधारणा करते.

त्याच वेळी, तुम्ही खालील कॉन्फिगरेशनचा संदर्भ घेऊ शकता, फाइलमध्ये बदल करू शकता आणि अपलोड केलेली फाइल स्वयंचलितपणे `avif` वर संकुचित करण्यासाठी प्रतिमा आकार कमी करण्यासाठी कॉन्फिगर करू शकता.

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