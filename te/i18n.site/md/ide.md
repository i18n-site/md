# ఎడిటర్ సిఫార్సు

ప్రతి ఒక్కరికీ వారి స్వంత ఇష్టమైన ఎడిటర్‌లు ఉన్నారు, ఇక్కడ మా ఉత్తమ అభ్యాసాలను పంచుకుందాం `Markdown`

[vscode](https://code.visualstudio.com/) వ్రాసేటప్పుడు రియల్ [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) ప్రివ్యూ చేయడానికి `MarkDown`

దిగువ చూపిన విధంగా, ప్రివ్యూ విండోను తెరవడానికి ఎడిటర్‌పై కుడి-క్లిక్ చేయండి.

<img alt="" src="https://p.3ti.site/1720775216.avif">
<img alt="" src="https://p.3ti.site/1720775043.avif">

`vscode` ఓపెన్ `Markdown` ఫైల్‌కి కాల్ చేయడానికి కమాండ్ లైన్‌లో `code xxx.md`

చిత్రాలను అప్‌లోడ్ చేయడానికి, అప్‌లోడ్ షార్ట్‌కట్ కీని సెట్ చేయడానికి మరియు స్క్రీన్‌షాట్‌ను ఒకే క్లిక్‌తో అప్‌లోడ్ చేయడానికి [PicList](https://github.com/Kuingsmile/PicList)

అప్‌లోడ్ చేసిన తర్వాత ఫైల్ పేరును స్వయంచాలకంగా కాపీ చేయడానికి ఇది మద్దతు ఇస్తుంది `Markdown` ఇది సామర్థ్యాన్ని బాగా మెరుగుపరుస్తుంది.

అదే సమయంలో, మీరు క్రింది కాన్ఫిగరేషన్‌ను సూచించవచ్చు, ఫైల్‌ను సవరించవచ్చు మరియు ఇమేజ్ పరిమాణాన్ని తగ్గించడానికి అప్‌లోడ్ చేసిన ఫైల్‌ను స్వయంచాలకంగా `avif` .

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
