# Рекомендации редактора

У каждого есть свои любимые редакторы, и здесь мы поделимся нашими лучшими практиками использования `Markdown`.

Мы пишем в [VS Code](https://code.visualstudio.com/) с использованием формата `Markdown`, а также устанавливаем плагин [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) для возможности реального времени просмотра результатов.

Как на рисунке ниже, можно щелкнуть правой кнопкой мыши в редакторе, чтобы открыть окно предварительного просмотра.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

Для открытия `Markdown` файла в `vscode` достаточно ввести команду `code xxx.md` в командной строке.

Для загрузки изображений мы используем [PicList](https://github.com/Kuingsmile/PicList), не забудьте настроить горячую клавишу для загрузки, чтобы после截图 можно было одним кликом загрузить изображение.

Он также поддерживает автоматическое копирование имени файла в формате `Markdown` после загрузки, что значительно ускоряет процесс.

Кроме того, вы можете参考下列 настройки, чтобы изменить файл и настроить автоматическое сжатие загружаемых файлов в формат `avif`, что поможет уменьшить размер изображений.

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