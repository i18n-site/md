# ايڊيٽر جي سفارش

هر ڪنهن جو پنهنجو پسنديده ايڊيٽر آهي هتي اسان پنهنجا `Markdown` بهترين طريقا شيئر ڪندا آهيون.

اسان استعمال ڪريون [vscode](https://code.visualstudio.com/) `MarkDown` لکڻ لاءِ، ۽ پڻ انسٽال ڪريون ٿا پلگ ان [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) کي اصل وقت ۾ ڏسڻ لاءِ لکڻ دوران.

جيئن هيٺ ڏيکاريل آهي، پريويو ونڊو کولڻ لاءِ ايڊيٽر ۾ ساڄي ڪلڪ ڪريو.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

فائل `Markdown` کولڻ لاءِ `vscode` ڪال ڪرڻ لاءِ ڪمانڊ لائن ۾ `code xxx.md` داخل ڪريو.

تصويرون اپلوڊ ڪرڻ لاءِ [PicList](https://github.com/Kuingsmile/PicList) ڪريو، اپلوڊ شارٽ ڪٽ کي سيٽ ڪرڻ لاءِ ياد رکو، ۽ هڪ ڪلڪ سان اسڪرين شاٽ اپلوڊ ڪريو.

اهو اپلوڊ ڪرڻ کان پوءِ فائل جو نالو `Markdown` فارميٽ ۾ خودڪار طور تي نقل ڪرڻ جي حمايت ڪري ٿو، جيڪو ڪارڪردگي کي بهتر بڻائي ٿو.

ساڳي ئي وقت، توھان ھيٺ ڏنل ترتيب ڏانھن رجوع ڪري سگھوٿا، فائل کي تبديل ڪريو، ۽ اپلوڊ ٿيل فائل کي ترتيب ڏئي سگھوٿا تصوير جي سائيز کي گھٽائڻ لاءِ `avif` تي پاڻمرادو ڪمپريس ڪيو وڃي.

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