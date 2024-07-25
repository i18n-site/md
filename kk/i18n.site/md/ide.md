# Редактор Ұсынысы

Әркімнің өзінің сүйікті редакторы бар. Мұнда ең жақсы тәжірибелерімізді бөлісейік `Markdown`

`MarkDown` кезінде нақты уақытта алдын ала қарау үшін [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) плагинін қолданамыз [vscode](https://code.visualstudio.com/)

Төменде көрсетілгендей, алдын ала қарау терезесін ашу үшін өңдегіште тінтуірдің оң жақ түймешігін басыңыз.

<img alt="" src="https://p.3ti.site/1720775216.avif">
<img alt="" src="https://p.3ti.site/1720775043.avif">

`vscode` ашық `Markdown` файлына қоңырау шалу үшін пәрмен жолына `code xxx.md` .

Суреттерді жүктеп салу үшін [PicList](https://github.com/Kuingsmile/PicList) , жүктеп салу пернесін орнатуды ұмытпаңыз және скриншотты бір рет басу арқылы жүктеп салыңыз.

Ол жүктеуден кейін файл `Markdown` автоматты түрде көшіруді қолдайды, бұл тиімділікті айтарлықтай арттырады.

Сонымен бірге, сурет өлшемін азайту үшін келесі конфигурацияға сілтеме жасай аласыз, файлды өзгерте аласыз және жүктеп салынған файлды автоматты түрде қысатын `avif` конфигурациялай аласыз.

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
