# Argymhelliad Y Golygydd

Mae gan bawb eu hoff olygydd eu hunain Yma rydym yn rhannu ein `Markdown` arferion gorau.

Rydym yn defnyddio [vscode](https://code.visualstudio.com/) i ysgrifennu `MarkDown` a gosod y plug-in [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) i gael rhagolwg mewn amser real wrth ysgrifennu.

Fel y dangosir isod, de-gliciwch yn y golygydd i agor y ffenestr rhagolwg.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

Rhowch `code xxx.md` yn y llinell orchymyn i ffonio `vscode` i agor ffeil `Markdown` .

Defnyddiwch [PicList](https://github.com/Kuingsmile/PicList) i uwchlwytho lluniau, cofiwch osod y llwybr byr llwytho i fyny, a llwytho'r sgrinlun gydag un clic.

Mae'n cefnogi copïo enw'r ffeil yn awtomatig i fformat `Markdown` ar ôl ei uwchlwytho, sy'n gwella effeithlonrwydd yn fawr.

Ar yr un pryd, gallwch gyfeirio at y ffurfweddiad canlynol, addasu'r ffeil, a ffurfweddu'r ffeil wedi'i llwytho i fyny i gael ei chywasgu'n awtomatig i `avif` i leihau maint y ddelwedd.

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