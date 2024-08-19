# Редактор Ұсынысы

Әркімнің өзінің сүйікті редакторы бар. Мұнда біз `Markdown` жақсы тәжірибемізбен бөлісеміз.

Біз `MarkDown` жазу үшін [vscode](https://code.visualstudio.com/) және жазу кезінде нақты уақытта алдын ала қарау үшін [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) плагинін орнатамыз.

Төменде көрсетілгендей, алдын ала қарау терезесін ашу үшін өңдегіште тінтуірдің оң жақ түймешігін басыңыз.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

`Markdown` файлын ашу үшін `vscode` қоңырау шалу үшін пәрмен жолына `code xxx.md` енгізіңіз.

Суреттерді жүктеп салу үшін [PicList](https://github.com/Kuingsmile/PicList) , жүктеп салу пернесін орнатуды ұмытпаңыз және бір рет басу арқылы скриншотты жүктеп салыңыз.

Ол жүктеуден кейін файл атауын `Markdown` пішіміне автоматты түрде көшіруді қолдайды, бұл тиімділікті айтарлықтай арттырады.

Бұл ретте сурет өлшемін азайту үшін келесі конфигурацияға сілтеме жасай аласыз, файлды өзгерте аласыз және жүктеп салынған файлды автоматты түрде `avif` ге дейін қысылатын етіп конфигурациялай аласыз.

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