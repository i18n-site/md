# Рекомендация Редактора

У каждого есть свой любимый редактор. Давайте поделимся здесь нашими лучшими практиками `Markdown`

Мы используем [vscode](https://code.visualstudio.com/) Write `MarkDown` и устанавливаем плагин [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) для предварительного просмотра в реальном времени во время написания.

Как показано ниже, щелкните правой кнопкой мыши в редакторе, чтобы открыть окно предварительного просмотра.

<img alt="" src="https://p.3ti.site/1720775216.avif">
<img alt="" src="https://p.3ti.site/1720775043.avif">

Введите `code xxx.md` в командной строке, чтобы вызвать `vscode` open `Markdown` file.

Используйте [PicList](https://github.com/Kuingsmile/PicList) для загрузки изображений, не забудьте установить горячую клавишу для загрузки и загрузите снимок экрана одним щелчком мыши.

Он поддерживает автоматическое копирование формата имени файла `Markdown` после загрузки, что значительно повышает эффективность.

В то же время вы можете обратиться к следующей конфигурации, изменить файл и настроить автоматическое сжатие загруженного файла в формат `avif` чтобы уменьшить размер изображения.

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
