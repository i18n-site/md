# Рекомендації редактора

У кожного є свої улюблені редактори, і ми хочемо поділитися нашими кращими практиками роботи з `Markdown`.

Ми використовуємо [vscode](https://code.visualstudio.com/) для написання `Markdown`, а також встановлюємо плагін [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) для перегляду в режимі реального часу під час написання.

Як на малюнку нижче, правою кнопкою миші в редакторі можна відкрити вікно попереднього перегляду.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

Введіть `code xxx.md` у командному рядку, щоб відкрити файл `Markdown` за допомогою `vscode`.

Для завантаження зображень використовуйте [PicList](https://github.com/Kuingsmile/PicList), і не забудьте налаштувати комбінацію клавіш для швидкого завантаження після截图у.

Він підтримує автоматичне копіювання імені файлу у форматі `Markdown` після завантаження, що значно підвищує продуктивність.

Також ви можете скористатися наступною конфігурацією, щоб змінити файл і налаштувати автоматичне стиснення завантажених файлів до формату `avif`, що дозволить зменшити розмір зображень.

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