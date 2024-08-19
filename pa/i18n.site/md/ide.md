# ਸੰਪਾਦਕ ਦੀ ਸਿਫਾਰਸ਼

ਹਰ ਕਿਸੇ ਦਾ ਆਪਣਾ ਮਨਪਸੰਦ ਸੰਪਾਦਕ ਹੈ ਇੱਥੇ ਅਸੀਂ ਆਪਣੇ `Markdown` ਵਧੀਆ ਅਭਿਆਸਾਂ ਨੂੰ ਸਾਂਝਾ ਕਰਦੇ ਹਾਂ।

ਅਸੀਂ `MarkDown` ਲਿਖਣ ਲਈ ਵਰਤਦੇ [vscode](https://code.visualstudio.com/) ਅਤੇ ਰੀਅਲ ਟਾਈਮ ਵਿੱਚ ਪੂਰਵਦਰਸ਼ਨ ਕਰਨ ਲਈ ਪਲੱਗ-ਇਨ [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) ਇੰਸਟਾਲ ਕਰਦੇ ਹਾਂ।

ਜਿਵੇਂ ਕਿ ਹੇਠਾਂ ਦਿਖਾਇਆ ਗਿਆ ਹੈ, ਪੂਰਵਦਰਸ਼ਨ ਵਿੰਡੋ ਨੂੰ ਖੋਲ੍ਹਣ ਲਈ ਸੰਪਾਦਕ ਵਿੱਚ ਸੱਜਾ-ਕਲਿੱਕ ਕਰੋ।

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

ਫਾਈਲ `Markdown` ਨੂੰ ਖੋਲ੍ਹਣ ਲਈ `vscode` ਕਾਲ ਕਰਨ ਲਈ ਕਮਾਂਡ ਲਾਈਨ ਵਿੱਚ `code xxx.md` ਦਰਜ ਕਰੋ।

ਤਸਵੀਰਾਂ ਅਪਲੋਡ ਕਰਨ ਲਈ [PicList](https://github.com/Kuingsmile/PicList) , ਅਪਲੋਡ ਸ਼ਾਰਟਕੱਟ ਕੁੰਜੀ ਨੂੰ ਸੈਟ ਕਰਨਾ ਯਾਦ ਰੱਖੋ, ਅਤੇ ਇੱਕ ਕਲਿੱਕ ਨਾਲ ਸਕ੍ਰੀਨਸ਼ੌਟ ਅਪਲੋਡ ਕਰੋ।

ਇਹ ਅਪਲੋਡ ਕਰਨ ਤੋਂ ਬਾਅਦ ਫਾਈਲ ਨਾਮ ਨੂੰ `Markdown` ਫਾਰਮੈਟ ਵਿੱਚ ਆਪਣੇ ਆਪ ਕਾਪੀ ਕਰਨ ਦਾ ਸਮਰਥਨ ਕਰਦਾ ਹੈ, ਜੋ ਕੁਸ਼ਲਤਾ ਵਿੱਚ ਬਹੁਤ ਸੁਧਾਰ ਕਰਦਾ ਹੈ।

ਉਸੇ ਸਮੇਂ, ਤੁਸੀਂ ਹੇਠਾਂ ਦਿੱਤੀ ਸੰਰਚਨਾ ਦਾ ਹਵਾਲਾ ਦੇ ਸਕਦੇ ਹੋ, ਫਾਈਲ ਨੂੰ ਸੰਸ਼ੋਧਿਤ ਕਰ ਸਕਦੇ ਹੋ, ਅਤੇ ਚਿੱਤਰ ਦੇ ਆਕਾਰ ਨੂੰ ਘਟਾਉਣ ਲਈ ਅਪਲੋਡ ਕੀਤੀ ਫਾਈਲ ਨੂੰ ਆਪਣੇ ਆਪ `avif` ਤੱਕ ਸੰਕੁਚਿਤ ਕਰਨ ਲਈ ਕੌਂਫਿਗਰ ਕਰ ਸਕਦੇ ਹੋ।

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