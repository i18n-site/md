# Препорака Од Уредникот

Секој има свој омилен уредник Овде ги споделуваме нашите `Markdown` најдобри практики.

[Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) го `MarkDown` [vscode](https://code.visualstudio.com/)

Како што е прикажано подолу, кликнете со десното копче во уредникот за да го отворите прозорецот за преглед.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

Внесете `code xxx.md` во командната линија за да повикате `vscode` за да ја отворите датотеката `Markdown` .

Користете го [PicList](https://github.com/Kuingsmile/PicList)

Поддржува автоматско копирање на името на датотеката во формат `Markdown` по поставувањето, што значително ја подобрува ефикасноста.

Во исто време, можете да се повикате на следната конфигурација, да ја измените датотеката и да ја конфигурирате поставената датотека автоматски да се компресира на `avif` за да ја намалите големината на сликата.

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