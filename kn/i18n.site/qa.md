# ಸಾಮಾನ್ಯ ಸಮಸ್ಯೆ

## ಆಕಸ್ಮಿಕವಾಗಿ ಅಳಿಸಲಾಗಿದೆ `.i18n/v` `npm` ಪ್ಯಾಕೇಜ್ ಅನ್ನು ಪ್ರಕಟಿಸಲು ವಿಫಲವಾಗಿದೆ

`npm` ಪ್ಯಾಕೇಜ್ ಬಿಡುಗಡೆಯ ಐತಿಹಾಸಿಕ ಆವೃತ್ತಿಯನ್ನು ಉಳಿಸಲಾಗಿದೆ `.i18n/v/ol/v.hash`

ನೀವು ಆಕಸ್ಮಿಕವಾಗಿ ಅಳಿಸಿದರೆ `.i18n/v/ol` `npm` ಪ್ಯಾಕೇಜ್ ಅನ್ನು ಪ್ರಕಟಿಸಲಾಗುವುದಿಲ್ಲ.

ಈ ಸಮಯದಲ್ಲಿ, ನಿಮ್ಮ ಪ್ರಾಜೆಕ್ಟ್‌ನ ಕೊನೆಯ ಬಿಡುಗಡೆಯ ಆವೃತ್ತಿಯ ಸಂಖ್ಯೆಯನ್ನು ಮೊದಲು ಕಂಡುಹಿಡಿಯಿರಿ [npmjs.com](//npmjs.com) ಉದಾಹರಣೆಗೆ `0.1.9`

ನಂತರ ಕೆಳಗೆ ರಚಿಸಿದ ಫೈಲ್ `bash` ನೋಡಿ.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

ಈ ರೀತಿ ರಿಪೇರಿ ಮಾಡುವುದರಿಂದ ಫೈಲ್ ಇತಿಹಾಸವನ್ನು ಕಳೆದುಕೊಳ್ಳುತ್ತದೆ, ಮುಂದಿನ ಬಿಡುಗಡೆಯನ್ನು ಹೆಚ್ಚೆಚ್ಚು ಅಪ್‌ಡೇಟ್ ಮಾಡಲು ಅಸಾಧ್ಯವಾಗುತ್ತದೆ ಮತ್ತು ಎಲ್ಲಾ ವಿಷಯವನ್ನು ಒಮ್ಮೆ ಮರುಪ್ಯಾಕೇಜ್ ಮಾಡಲಾಗುತ್ತದೆ ಮತ್ತು ಅಪ್‌ಲೋಡ್ ಮಾಡಲಾಗುತ್ತದೆ.

