# Препоръка На Редактора

Всеки има свой собствен любим редактор. Нека споделим нашите най-добри практики тук `Markdown`

Ние използваме [vscode](https://code.visualstudio.com/) Write `MarkDown` и инсталираме приставката [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) за преглед в реално време, докато пишете.

Както е показано по-долу, щракнете с десния бутон в редактора, за да отворите прозореца за визуализация.

<img alt="" src="https://p.3ti.site/1720775216.avif">
<img alt="" src="https://p.3ti.site/1720775043.avif">

Въведете `code xxx.md` в командния ред, за да извикате `vscode` open `Markdown` file.

Използвайте [PicList](https://github.com/Kuingsmile/PicList) за качване на снимки, не забравяйте да зададете клавиша за бърз достъп и качете екранната снимка с едно щракване.

Поддържа автоматично копиране на формата на името `Markdown` файла след качване, което значително подобрява ефективността.

В същото време можете да се обърнете към следната конфигурация, да промените файла и да конфигурирате качения файл да бъде автоматично компресиран до `avif` , за да намалите размера на изображението.

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
