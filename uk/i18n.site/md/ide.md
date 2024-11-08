# Рекомендація Редактора

У кожного є свій улюблений редактор. Тут ми ділимося `Markdown` найкращими практиками.

Ми використовуємо [vscode](https://code.visualstudio.com/) write `MarkDown` і встановлюємо плагін [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) для попереднього перегляду під час запису.

Як показано нижче, клацніть правою кнопкою миші в редакторі, щоб відкрити вікно попереднього перегляду.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

Введіть `code xxx.md` у командному рядку, щоб викликати `vscode` , щоб відкрити файл `Markdown` .

Використовуйте [PicList](https://github.com/Kuingsmile/PicList) для завантаження зображень, не забудьте встановити клавішу швидкого доступу для завантаження та завантажте знімок екрана одним клацанням миші.

Він підтримує автоматичне копіювання імені файлу у форматі `Markdown` після завантаження, що значно підвищує ефективність.

Водночас ви можете звернутися до наступної конфігурації, змінити файл і налаштувати автоматичне стиснення завантаженого файлу до `avif` щоб зменшити розмір зображення.

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