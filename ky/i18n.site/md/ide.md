# Редактор Сунушу

Ар бир адамдын өзүнүн жакшы көргөн редактору бар `Markdown`

Жазып `MarkDown` реалдуу убакытта алдын ала көрүү үчүн [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) плагинди колдонобуз [vscode](https://code.visualstudio.com/)

Төмөндө көрсөтүлгөндөй, алдын ала көрүү терезесин ачуу үчүн редакторду оң баскыч менен чыкылдатыңыз.

<img alt="" src="https://p.3ti.site/1720775216.avif">
<img alt="" src="https://p.3ti.site/1720775043.avif">

`vscode` Open `Markdown` файлын чакыруу үчүн буйрук сабына `code xxx.md` .

Сүрөттөрдү жүктөө үчүн [PicList](https://github.com/Kuingsmile/PicList) , жүктөө кыска баскычын коюуну унутпаңыз жана бир чыкылдатуу менен скриншотту жүктөп бериңиз.

Ал жүктөөдөн кийин файлдын атын автоматтык түрдө көчүрүүнү колдойт, бул натыйжалуулукту бир топ жакшыртат `Markdown`

Ошол эле учурда, сиз төмөнкү конфигурацияга кайрыла аласыз, файлды өзгөртүп, сүрөттүн өлчөмүн кичирейтүү үчүн жүктөлгөн файлды автоматтык түрдө кысуу `avif` конфигурациялай аласыз.

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
