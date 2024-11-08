# Препорука Уредника

Свако има свог омиљеног уредника Овде делимо наше `Markdown` најбољих пракси.

[vscode](https://code.visualstudio.com/) за писање `MarkDown` и инсталирамо додатак [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) за преглед у реалном времену током писања.

Као што је приказано испод, кликните десним тастером миша на уређивач да бисте отворили прозор за преглед.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

Унесите `code xxx.md` у командну линију да бисте позвали `vscode` да бисте отворили датотеку `Markdown` .

[PicList](https://github.com/Kuingsmile/PicList) за отпремање слика, не заборавите да подесите пречицу за отпремање и отпремите снимак екрана једним кликом.

Подржава аутоматско копирање назива датотеке у формат `Markdown` након отпремања, што увелико побољшава ефикасност.

У исто време, можете да погледате следећу конфигурацију, измените датотеку и конфигуришете да се отпремљена датотека аутоматски компримује на `avif` да бисте смањили величину слике.

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