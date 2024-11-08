# የአርታዒ ምክር

ሁሉም ሰው የራሱ ተወዳጅ አርታዒ አለው እዚህ የኛን `Markdown` ምርጥ ልምዶች እናካፍላለን.

ስንጽፍ `MarkDown` [vscode](https://code.visualstudio.com/) እና ተሰኪውን [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) ለመጫን እንጠቀማለን ።

ከዚህ በታች እንደሚታየው የቅድመ እይታ መስኮቱን ለመክፈት በአርታዒው ላይ በቀኝ ጠቅ ያድርጉ።

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

ፋይል `Markdown` ለመክፈት `vscode` ለመደወል በትእዛዝ መስመር ውስጥ `code xxx.md` ያስገቡ።

ምስሎችን ለመስቀል [PicList](https://github.com/Kuingsmile/PicList) ፣ የሰቀላ አቋራጭ ቁልፉን ማዘጋጀቱን እና በአንድ ጠቅታ ቅጽበታዊ ገጽ እይታውን ለመስቀል አስታውስ።

ከተሰቀለ በኋላ የፋይሉን ስም ወደ `Markdown` ቅርጸት በራስ-ሰር መቅዳት ይደግፋል, ይህም ውጤታማነትን በእጅጉ ያሻሽላል.

በተመሳሳይ ጊዜ, የሚከተለውን ውቅር መመልከት, ፋይሉን ማሻሻል እና የተሰቀለውን ፋይል የምስሉን መጠን ለመቀነስ በራስ-ሰር ወደ `avif` እንዲጨመቅ ማዋቀር ይችላሉ.

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