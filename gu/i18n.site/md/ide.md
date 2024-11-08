# સંપાદક ભલામણ

દરેક `Markdown` પોતાના મનપસંદ સંપાદક હોય છે.

અમે `MarkDown` લખવા માટે ઉપયોગ [vscode](https://code.visualstudio.com/) છીએ અને લખતી વખતે રીઅલ ટાઇમમાં પૂર્વાવલોકન કરવા માટે પ્લગ-ઇન [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) ઇન્સ્ટોલ કરીએ છીએ.

નીચે બતાવ્યા પ્રમાણે, પૂર્વાવલોકન વિંડો ખોલવા માટે સંપાદકમાં જમણું-ક્લિક કરો.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

ફાઇલ `Markdown` ખોલવા માટે `vscode` કૉલ કરવા માટે કમાન્ડ લાઇનમાં `code xxx.md` દાખલ કરો.

ચિત્રો અપલોડ કરવા માટે [PicList](https://github.com/Kuingsmile/PicList) કરો, અપલોડ શોર્ટકટ કી સેટ કરવાનું યાદ રાખો અને એક ક્લિક સાથે સ્ક્રીનશોટ અપલોડ કરો.

તે અપલોડ કર્યા પછી ફાઇલના નામને `Markdown` ફોર્મેટમાં આપમેળે કૉપિ કરવાનું સમર્થન કરે છે, જે કાર્યક્ષમતામાં ઘણો સુધારો કરે છે.

તે જ સમયે, તમે નીચેના રૂપરેખાંકનનો સંદર્ભ લઈ શકો છો, ફાઇલને સંશોધિત કરી શકો છો અને છબીનું કદ ઘટાડવા માટે અપલોડ કરેલી ફાઇલને આપમેળે `avif` પર સંકુચિત કરવા માટે ગોઠવી શકો છો.

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