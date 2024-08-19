# Препоръка на редактора

Всеки има свои навици към редакторите. Ето нашите най-добри практики с `Markdown`.

Използваме [vscode](https://code.visualstudio.com/) за писане на `Markdown` и инсталираме приставката [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced), за да имаме реално预习ление.

Както е показано на figure, с десен клик в редактора може да отворите прозореца за预习ление.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

Въведете `code xxx.md` в командния ред, за да отворите файла `Markdown` с `vscode`.

Използвайте [PicList](https://github.com/Kuingsmile/PicList) за качване на изображения, не забравяйте да зададете клавиш за бързо качване след screenshoot.

Той поддържа автоматично копиране на името на файла в формат `Markdown` след качване, което значително повишава ефективността.

Можете също така да се позовете на следната конфигурация, за да промените файла и да зададете автоматично компресиране на качените файлове към `avif`, за да намалите размера на изображенията.

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