# ایڈیٹر کی سفارش

ہر ایک کا اپنا پسندیدہ ایڈیٹر ہے آئیے یہاں اپنے بہترین طریقوں کا اشتراک کریں `Markdown`

ہم [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) `MarkDown` [vscode](https://code.visualstudio.com/)

جیسا کہ ذیل میں دکھایا گیا ہے، پیش نظارہ ونڈو کھولنے کے لیے ایڈیٹر میں دائیں کلک کریں۔

<img alt="" src="https://p.3ti.site/1720775216.avif">
<img alt="" src="https://p.3ti.site/1720775043.avif">

`vscode` اوپن `Markdown` فائل کو کال کرنے کے لیے کمانڈ لائن پر درج کریں `code xxx.md`

تصاویر اپ لوڈ کرنے کے لیے استعمال [PicList](https://github.com/Kuingsmile/PicList) ، اپ لوڈ شارٹ کٹ کی سیٹ کرنا یاد رکھیں، اور ایک کلک کے ساتھ اسکرین شاٹ اپ لوڈ کریں۔

یہ اپ لوڈ کرنے کے بعد فائل کا نام خود بخود کاپی کرنے کی حمایت کرتا ہے `Markdown` جس سے کارکردگی بہت بہتر ہوتی ہے۔

ایک ہی وقت میں، آپ مندرجہ ذیل کنفیگریشن کا حوالہ دے سکتے ہیں، فائل میں ترمیم کر سکتے ہیں، اور تصویر کے سائز کو کم کرنے کے لیے اپ لوڈ کردہ فائل کو خود بخود کمپریس کر سکتے ہیں `avif`

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
