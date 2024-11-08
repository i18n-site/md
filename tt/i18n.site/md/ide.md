# Редактор Тәкъдиме

Everyoneәркемнең үз яраткан редакторы бар Монда без `Markdown` иң яхшы тәҗрибә белән уртаклашабыз.

Без `MarkDown` язарга һәм плагинны [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) язганда реаль вакытта карау өчен кулланабыз [vscode](https://code.visualstudio.com/)

Түбәндә күрсәтелгәнчә, алдан карау тәрәзәсен ачу өчен редакторда уң төймәгә басыгыз.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

`Markdown` файлны ачу өчен `vscode` шалтырату өчен боерык сызыгына `code xxx.md` кертегез.

Рәсемнәрне йөкләү өчен [PicList](https://github.com/Kuingsmile/PicList) , йөкләү кыска төймәсен куярга онытмагыз һәм скриншотны бер басу белән йөкләгез!

Йөкләгәннән соң файл исемен `Markdown` форматка автоматик рәвештә күчерүне хуплый, бу эффективлыкны яхшырта.

Шул ук вакытта, сез түбәндәге конфигурациягә мөрәҗәгать итә аласыз, файлны үзгәртә аласыз һәм йөкләнгән файлны автоматик рәвештә кысылу өчен конфигурацияли аласыз `avif` рәсем күләмен киметү өчен.

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