# Препорука Уредника

Свако има свог омиљеног уредника. Хајде да поделимо наше најбоље праксе овде `Markdown`

Користимо [vscode](https://code.visualstudio.com/) и `MarkDown` додатак [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) за преглед у реалном времену!

Као што је приказано испод, кликните десним тастером миша на уређивач да бисте отворили прозор за преглед.

<img alt="" src="https://p.3ti.site/1720775216.avif">
<img alt="" src="https://p.3ti.site/1720775043.avif">

Унесите `code xxx.md` у командној линији да бисте позвали `vscode` отворену датотеку `Markdown` .

[PicList](https://github.com/Kuingsmile/PicList) за отпремање слика, не заборавите да подесите пречицу за отпремање и отпремите снимак екрана једним кликом.

Подржава аутоматско копирање формата имена `Markdown` након отпремања, што значајно побољшава ефикасност!

У исто време, можете да погледате следећу конфигурацију, измените датотеку и конфигуришете да се отпремљена датотека аутоматски компримује у `avif`

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
