# پێشنیاری سەرنوسەر

هەر کەسێک مۆنتاژکەری دڵخوازی خۆی هەیە لێرەدا `Markdown` باشترین پراکتیزەکانمان باس دەکەین.

ئێمە [vscode](https://code.visualstudio.com/) بەکاردەهێنین بۆ نووسینی `MarkDown` و دامەزراندنی پێوەکراوەکەی [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) بۆ پێشبینیکردن لە کاتی ڕاستەقینەدا لەکاتی نووسیندا.

وەک لە خوارەوە دیارە لە دەستکاریکەرەکەدا کلیکی ڕاست بکە بۆ کردنەوەی پەنجەرەی پێشبینی.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

لە هێڵی فەرمانەکەدا `code xxx.md` داخڵ بکە بۆ بانگکردنی `vscode` بۆ کردنەوەی فایل `Markdown` .

بۆ بارکردنی وێنەکان [PicList](https://github.com/Kuingsmile/PicList)

پشتگیری لە کۆپیکردنی ئۆتۆماتیکی ناوی فایلەکە دەکات بۆ فۆرمات `Markdown` دوای بارکردن، ئەمەش کارایی زۆر باشتر دەکات.

لە هەمان کاتدا دەتوانیت ئاماژە بەم ڕێکخستنەی خوارەوە بکەیت و دەستکاری پەڕگەکە بکەیت و پەڕگەی بارکراو ڕێکبخەیت بۆ ئەوەی بە شێوەیەکی ئۆتۆماتیکی پاڵپێوەنانی بۆ `avif` بکرێت بۆ کەمکردنەوەی قەبارەی وێنەکە.

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