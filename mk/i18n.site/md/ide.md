# Препорака Од Уредникот

Секој има свој омилен уредник Ајде да ги споделиме нашите најдобри практики овде `Markdown`

Ние [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) користиме `MarkDown` [vscode](https://code.visualstudio.com/)

Како што е прикажано подолу, кликнете со десното копче во уредникот за да го отворите прозорецот за преглед.

<img alt="" src="https://p.3ti.site/1720775216.avif">
<img alt="" src="https://p.3ti.site/1720775043.avif">

`code xxx.md` во командната линија за да повикате `vscode` open `Markdown` датотека.

Користете го [PicList](https://github.com/Kuingsmile/PicList)

Поддржува автоматско копирање на форматот `Markdown` датотеката по поставувањето, што значително ја подобрува ефикасноста.

Во исто време, можете да се повикате на следнава конфигурација, да ја измените датотеката и да ја конфигурирате поставената датотека автоматски да се компресира за да `avif` намалите големината на сликата.

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
