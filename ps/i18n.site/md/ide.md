# د مدیر سپارښتنه

هرڅوک خپل د خوښې مدیر لري دلته موږ خپل `Markdown` غوره تمرینونه شریکوو.

موږ `MarkDown` لیکلو لپاره [vscode](https://code.visualstudio.com/) او د لیکلو پرمهال په ریښتیني وخت کې د لیدو لپاره پلگ ان [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) نصب کوو.

لکه څنګه چې لاندې ښودل شوي، د مخکتنې کړکۍ پرانیستلو لپاره په مدیر کې ښي کلیک وکړئ.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

د فایل `Markdown` خلاصولو لپاره `vscode` زنګ وهلو لپاره `code xxx.md` کمانډ لاین کې دننه کړئ.

د عکسونو اپلوډ کولو لپاره وکاروئ [PicList](https://github.com/Kuingsmile/PicList) د اپلوډ شارټ کټ کیلي تنظیم کړئ ، او په یو کلیک سره سکرین شاټ اپلوډ کړئ.

دا د اپلوډ کولو وروسته په اتوماتيک ډول د فایل نوم `Markdown` formatه ته کاپي کولو ملاتړ کوي ، کوم چې موثریت خورا ښه کوي.

په ورته وخت کې، تاسو کولی شئ لاندې ترتیب ته مراجعه وکړئ، فایل بدل کړئ، او اپلوډ شوی فایل ترتیب کړئ ترڅو د عکس اندازه کمولو لپاره په اوتومات ډول `avif` ته فشار ورکړل شي.

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