# Редактор Сунушу

Ар бир адамдын өзүнүн сүйүктүү редактору бар. Бул жерде биз `Markdown` мыкты тажрыйбабыз менен бөлүшөбүз.

Биз `MarkDown` жазуу үчүн [vscode](https://code.visualstudio.com/) жана жазуу учурунда реалдуу убакытта алдын ала көрүү үчүн [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) плагинди орнотобуз.

Төмөндө көрсөтүлгөндөй, алдын ала көрүү терезесин ачуу үчүн редакторду оң баскыч менен чыкылдатыңыз.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

`Markdown` файлын ачуу үчүн `vscode` чакыруу үчүн буйрук сабына `code xxx.md` киргизиңиз.

Сүрөттөрдү жүктөө үчүн [PicList](https://github.com/Kuingsmile/PicList) , жүктөө кыска баскычын коюуну унутпаңыз жана скриншотту бир чыкылдатуу менен жүктөңүз.

Ал жүктөөдөн кийин файлдын атын `Markdown` форматка автоматтык түрдө көчүрүүнү колдойт, бул эффективдүүлүктү кыйла жакшыртат.

Ошол эле учурда, сиз төмөнкү конфигурацияга кайрыла аласыз, файлды өзгөртсөңүз жана жүктөлгөн файлды сүрөттүн өлчөмүн кичирейтүү үчүн автоматтык түрдө `avif` кысылышына конфигурациялай аласыз.

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