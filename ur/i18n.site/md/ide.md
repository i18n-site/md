# ایڈیٹر کی سفارش

ہر ایک کا اپنا پسندیدہ ایڈیٹر ہے یہاں ہم اپنے `Markdown` بہترین طریقوں کا اشتراک کرتے ہیں۔

[vscode](https://code.visualstudio.com/) `MarkDown` لکھنے اور پلگ [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) انسٹال کرنے کے لیے استعمال کرتے ہیں تاکہ لکھتے وقت ریئل ٹائم میں پیش نظارہ کیا جا سکے۔

جیسا کہ ذیل میں دکھایا گیا ہے، پیش نظارہ ونڈو کھولنے کے لیے ایڈیٹر میں دائیں کلک کریں۔

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

فائل `Markdown` کھولنے کے لیے `vscode` کال کرنے کے لیے کمانڈ لائن میں `code xxx.md` درج کریں۔

تصاویر اپ لوڈ کرنے کے لیے استعمال [PicList](https://github.com/Kuingsmile/PicList) ، اپ لوڈ شارٹ کٹ کی سیٹ کرنا یاد رکھیں، اور ایک کلک کے ساتھ اسکرین شاٹ اپ لوڈ کریں۔

یہ اپ لوڈ کرنے کے بعد فائل کا نام `Markdown` فارمیٹ میں خود بخود کاپی کرنے کی حمایت کرتا ہے، جس سے کارکردگی بہت بہتر ہوتی ہے۔

ایک ہی وقت میں، آپ مندرجہ ذیل کنفیگریشن کا حوالہ دے سکتے ہیں، فائل میں ترمیم کر سکتے ہیں، اور تصویر کے سائز کو کم کرنے کے لیے اپ لوڈ کردہ فائل کو خود بخود `avif` پر کمپریس کرنے کے لیے ترتیب دے سکتے ہیں۔

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