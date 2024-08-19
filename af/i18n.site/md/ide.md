# Redakteur Aanbeveling

Almal het hul eie gunsteling redakteur Hier deel ons ons `Markdown` beste praktyke.

Ons gebruik [vscode](https://code.visualstudio.com/) om `MarkDown` te skryf en installeer die inprop [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) om intyds te kyk terwyl ons skryf.

Soos hieronder getoon, regskliek in die redigeerder om die voorskouvenster oop te maak.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

Voer `code xxx.md` in die opdragreël in om `vscode` te roep om lêer `Markdown` oop te maak.

Gebruik [PicList](https://github.com/Kuingsmile/PicList) om foto's op te laai, onthou om die oplaai-kortpadsleutel te stel en laai die skermskoot met een klik op.

Dit ondersteun die outomatiese kopiëring van die lêernaam na `Markdown` formaat na die oplaai, wat die doeltreffendheid aansienlik verbeter.

Terselfdertyd kan jy na die volgende konfigurasie verwys, die lêer wysig en die opgelaaide lêer instel om outomaties saamgepers te word na `avif` om die beeldgrootte te verminder.

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