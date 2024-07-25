# Рекомендація Редактора

У кожного є свій улюблений редактор. Давайте поділимося найкращими практиками тут `Markdown`

Ми використовуємо [vscode](https://code.visualstudio.com/) Write `MarkDown` і встановлюємо плагін [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) для попереднього перегляду в реальному часі під час запису.

Як показано нижче, клацніть правою кнопкою миші в редакторі, щоб відкрити вікно попереднього перегляду.

<img alt="" src="https://p.3ti.site/1720775216.avif">
<img alt="" src="https://p.3ti.site/1720775043.avif">

Введіть `code xxx.md` у командному рядку, щоб викликати `vscode` open `Markdown` file.

Використовуйте [PicList](https://github.com/Kuingsmile/PicList) для завантаження зображень, не забудьте встановити клавішу швидкого доступу для завантаження та завантажте знімок екрана одним клацанням миші.

Він підтримує автоматичне копіювання формату назви `Markdown` після завантаження, що значно підвищує ефективність.

У той же час ви можете звернутися до наступної конфігурації, змінити файл і налаштувати завантажений файл на автоматичне стиснення до `avif` щоб зменшити розмір зображення.

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
