# संपादकाची शिफारस

प्रत्येकाचे स्वतःचे आवडते संपादक आहेत चला आमच्या सर्वोत्तम पद्धती येथे सामायिक करूया `Markdown`

रिअल [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) पूर्वावलोकन करण्यासाठी आम्ही [vscode](https://code.visualstudio.com/) `MarkDown` स्थापित करतो.

खाली दाखवल्याप्रमाणे, पूर्वावलोकन विंडो उघडण्यासाठी संपादकावर उजवे-क्लिक करा.

<img alt="" src="https://p.3ti.site/1720775216.avif">
<img alt="" src="https://p.3ti.site/1720775043.avif">

`vscode` उघडा `Markdown` फाइल कॉल करण्यासाठी कमांड लाइनवर प्रविष्ट करा `code xxx.md`

चित्रे अपलोड करण्यासाठी [PicList](https://github.com/Kuingsmile/PicList) , अपलोड शॉर्टकट की सेट करणे लक्षात ठेवा आणि एका क्लिकने स्क्रीनशॉट अपलोड करा.

ते अपलोड केल्यानंतर फाइल नावाचे `Markdown` स्वयंचलितपणे कॉपी करण्यास समर्थन देते, जे कार्यक्षमतेत मोठ्या प्रमाणात सुधारणा करते.

त्याच वेळी, तुम्ही खालील कॉन्फिगरेशनचा संदर्भ घेऊ शकता, फाइलमध्ये बदल करू शकता आणि अपलोड केलेली फाइल स्वयंचलितपणे संकुचित करण्यासाठी कॉन्फिगर करू शकता `avif`

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
