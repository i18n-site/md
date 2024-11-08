# ఎడిటర్ సిఫార్సు

ప్రతి ఒక్కరికి వారి స్వంత ఇష్టమైన ఎడిటర్ ఉంది, ఇక్కడ మేము మా `Markdown` ఉత్తమ అభ్యాసాలను పంచుకుంటాము.

మేము `MarkDown` వ్రాయడానికి మరియు వ్రాస్తున్నప్పుడు నిజ సమయంలో ప్రివ్యూ చేయడానికి ప్లగ్-ఇన్ [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) ని ఇన్స్టాల్ చేయడానికి [vscode](https://code.visualstudio.com/) .

దిగువ చూపిన విధంగా, ప్రివ్యూ విండోను తెరవడానికి ఎడిటర్పై కుడి-క్లిక్ చేయండి.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

ఫైల్ `Markdown` ని తెరవడానికి `vscode` కి కాల్ చేయడానికి కమాండ్ లైన్లో `code xxx.md` నమోదు చేయండి.

చిత్రాలను అప్లోడ్ చేయడానికి, అప్లోడ్ షార్ట్కట్ కీని సెట్ చేయడానికి మరియు స్క్రీన్షాట్ను ఒకే క్లిక్తో అప్లోడ్ చేయడానికి [PicList](https://github.com/Kuingsmile/PicList)

అప్లోడ్ చేసిన తర్వాత ఫైల్ పేరును స్వయంచాలకంగా `Markdown` ఫార్మాట్కి కాపీ చేయడానికి ఇది మద్దతు ఇస్తుంది, ఇది సామర్థ్యాన్ని బాగా మెరుగుపరుస్తుంది.

అదే సమయంలో, మీరు క్రింది కాన్ఫిగరేషన్ని సూచించవచ్చు, ఫైల్ను సవరించవచ్చు మరియు ఇమేజ్ పరిమాణాన్ని తగ్గించడానికి అప్లోడ్ చేసిన ఫైల్ను స్వయంచాలకంగా `avif` కి కుదించబడేలా కాన్ఫిగర్ చేయవచ్చు.

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