# I18N.SITE · ಗಡಿಗಳಿಲ್ಲದ ದಾಖಲೆಗಳು<img Src="//ok0.pw/5l" Style="float:right;width:42px;margin-Top:6px">

I18N.SITE, [133 ವಿವಿಧ ಭಾಷೆಗಳಿಗೆ](https://github.com/i18n-site/node/blob/main/lang/src/index.js) ಸ್ವಯಂಚಾಲಿತ ಅನುವಾದವನ್ನು ಬೆಂಬಲಿಸುವ ಸ್ಥಿರ ಸೈಟ್ ಜನರೇಟರ್.

<img src="https://i-01.eu.org/2023/09/O0Tee_m.webp" alt="" />

ಕೆಲವು ಜನರು ಕೇಳಲು ಬಯಸಬಹುದು, ಈಗ ಬ್ರೌಸರ್‌ಗಳು ಅಂತರ್ನಿರ್ಮಿತ ಅನುವಾದ ಕಾರ್ಯಗಳನ್ನು ಹೊಂದಿವೆ, ವೆಬ್‌ಸೈಟ್ ಅನ್ನು ಅಂತರರಾಷ್ಟ್ರೀಯಗೊಳಿಸುವುದು ಅನಗತ್ಯವೇ?

**ಸಂಪೂರ್ಣ ಸೈಟ್ ಅನ್ನು ಅಂತರರಾಷ್ಟ್ರೀಯಗೊಳಿಸುವುದರ ಮೂಲಕ ಮಾತ್ರ ನಾವು ಬಹು-ಭಾಷಾ ಇನ್-ಸೈಟ್ ಪೂರ್ಣ-ಪಠ್ಯ ಹುಡುಕಾಟ ಮತ್ತು ಹುಡುಕಾಟ ಎಂಜಿನ್ ಆಪ್ಟಿಮೈಸೇಶನ್ ಅನ್ನು ಬೆಂಬಲಿಸಬಹುದು ಎಂದು** ನಾನು ಹೇಳಲು ಬಯಸುತ್ತೇನೆ.

## ಟ್ಯುಟೋರಿಯಲ್

## ಕಾರ್ಯ ಪರಿಚಯ

### ಮಾರ್ಕ್‌ಡೌನ್ ಸ್ವರೂಪವನ್ನು ಇರಿಸಿ

### ಅನುವಾದವನ್ನು ಮಾರ್ಪಡಿಸಿ

ಅನುವಾದವನ್ನು ಮಾರ್ಪಡಿಸಿದ ನಂತರ, ಸಂಗ್ರಹವನ್ನು ನವೀಕರಿಸಲು ನೀವು `./i18n.sh` ಮರು-ರನ್ ಮಾಡಬೇಕಾಗುತ್ತದೆ.

### ಅನುವಾದ ಟಿಪ್ಪಣಿಗಳು

ಅನುವಾದ ಕಾಮೆಂಟ್‌ಗಳು \``` ನಂತರದ ಭಾಷೆಯನ್ನು ಸೂಚಿಸುವ ಅಗತ್ಯವಿದೆ, ಉದಾಹರಣೆಗೆ ` ```rust` .

ಪ್ರಸ್ತುತ ರಸ್ಟ್, ಸಿ, ಸಿಪಿಪಿ, ಜಾವಾ, ಜೆಎಸ್, ಕಾಫಿ, ಪೈಥಾನ್ ಮತ್ತು ಬ್ಯಾಷ್‌ಗಾಗಿ ಕಾಮೆಂಟ್ ಅನುವಾದವನ್ನು ಬೆಂಬಲಿಸುತ್ತದೆ.

ಹೆಚ್ಚಿನ ಭಾಷೆಗಳಲ್ಲಿ ಕಾಮೆಂಟ್‌ಗಳಿಗೆ ಅನುವಾದ ಬೆಂಬಲವನ್ನು ಸೇರಿಸಲು [tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) ಅನ್ನು ಸಂಪಾದಿಸಿ.

### ಪ್ರಾಕ್ಸಿಯನ್ನು ಕಾನ್ಫಿಗರ್ ಮಾಡಿ

ಕೆಳಗಿನ ಪರಿಸರ ವೇರಿಯಬಲ್‌ಗಳನ್ನು ಹೊಂದಿಸುವುದರಿಂದ Google Translate API ಕರೆಗಳು ಪ್ರಾಕ್ಸಿ ಮೂಲಕ ಹೋಗಲು ಅನುಮತಿಸುತ್ತದೆ.

```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
export https_proxy=http://127.0.0.1:7890
```

### ವೇರಿಯಬಲ್ ಎಂಬೆಡಿಂಗ್

```
test: 测试变量<br 0>嵌入
```

### ಸಂಗ್ರಹವನ್ನು ಖಾಲಿ ಮಾಡಿ

```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
rm -rf .i18n/.cache
```
