# ಸಂಪಾದಕರ ಶಿಫಾರಸು

ಪ್ರತಿಯೊಬ್ಬರೂ ತಮ್ಮ ನೆಚ್ಚಿನ ಸಂಪಾದಕರನ್ನು ಹೊಂದಿದ್ದಾರೆ, ನಮ್ಮ ಉತ್ತಮ ಅಭ್ಯಾಸಗಳನ್ನು ಇಲ್ಲಿ ಹಂಚಿಕೊಳ್ಳೋಣ `Markdown`

ಬರೆಯುವಾಗ ನೈಜ [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) ಪೂರ್ವವೀಕ್ಷಣೆ ಮಾಡಲು `MarkDown` [vscode](https://code.visualstudio.com/)

ಕೆಳಗೆ ತೋರಿಸಿರುವಂತೆ, ಪೂರ್ವವೀಕ್ಷಣೆ ವಿಂಡೋವನ್ನು ತೆರೆಯಲು ಸಂಪಾದಕದಲ್ಲಿ ಬಲ ಕ್ಲಿಕ್ ಮಾಡಿ.

<img alt="" src="https://p.3ti.site/1720775216.avif">
<img alt="" src="https://p.3ti.site/1720775043.avif">

`vscode` ಓಪನ್ `Markdown` ಫೈಲ್ ಅನ್ನು ಕರೆ ಮಾಡಲು ಆಜ್ಞಾ ಸಾಲಿನಲ್ಲಿ `code xxx.md` .

ಚಿತ್ರಗಳನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಲು, ಅಪ್‌ಲೋಡ್ ಶಾರ್ಟ್‌ಕಟ್ ಕೀಲಿಯನ್ನು ಹೊಂದಿಸಲು [PicList](https://github.com/Kuingsmile/PicList) ಮತ್ತು ಒಂದೇ ಕ್ಲಿಕ್‌ನಲ್ಲಿ ಸ್ಕ್ರೀನ್‌ಶಾಟ್ ಅನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ.

ಅಪ್‌ಲೋಡ್ ಮಾಡಿದ ನಂತರ ಫೈಲ್ `Markdown` ಸ್ವಯಂಚಾಲಿತವಾಗಿ ನಕಲಿಸುವುದನ್ನು ಇದು ಬೆಂಬಲಿಸುತ್ತದೆ, ಇದು ದಕ್ಷತೆಯನ್ನು ಹೆಚ್ಚು ಸುಧಾರಿಸುತ್ತದೆ.

ಅದೇ ಸಮಯದಲ್ಲಿ, ನೀವು ಈ ಕೆಳಗಿನ ಕಾನ್ಫಿಗರೇಶನ್ ಅನ್ನು ಉಲ್ಲೇಖಿಸಬಹುದು, ಫೈಲ್ ಅನ್ನು ಮಾರ್ಪಡಿಸಬಹುದು ಮತ್ತು ಚಿತ್ರದ ಗಾತ್ರವನ್ನು ಕಡಿಮೆ `avif` ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಸಂಕುಚಿತಗೊಳ್ಳಲು ಅಪ್‌ಲೋಡ್ ಮಾಡಿದ ಫೈಲ್ ಅನ್ನು ಕಾನ್ಫಿಗರ್ ಮಾಡಬಹುದು.

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
