# Cunsigliu Di L'editore

Ognunu hà u so propiu editore preferitu `Markdown`

Avemu [vscode](https://code.visualstudio.com/) per scrive `MarkDown` è installate u plug-in [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) per previsualizà in tempu reale mentre scrive.

Comu mostra quì sottu, fate un clic right in l'editore per apre a finestra di vista previa.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

Inserite `code xxx.md` in a linea di cummanda per chjamà `vscode` per apre u schedariu `Markdown` .

[PicList](https://github.com/Kuingsmile/PicList) per caricate e foto, ricordate di stabilisce a chjave di a scelta rapida di carica, è caricate a screenshot cun un clic.

Supporta a copia in autumàticu di u nome di u schedariu in u furmatu `Markdown` dopu a carica, chì migliurà assai l'efficienza.

À u listessu tempu, pudete riferite à a cunfigurazione seguente, mudificà u schedariu, è cunfigurà u schedariu uploaded per esse automaticamente cumpressu à `avif` per riduce a dimensione di l'imaghjini.

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