# ಕಸ್ಟಮೈಸ್ ಮಾಡಿದ ನ್ಯಾವಿಗೇಷನ್

ನ್ಯಾವಿಗೇಶನ್ ಅನ್ನು ಹೇಗೆ ಕಸ್ಟಮೈಸ್ ಮಾಡುವುದು ಎಂಬುದನ್ನು ವಿವರಿಸಲು ಡೆಮೊ ಸೈಟ್ ಅನ್ನು ತೆಗೆದುಕೊಳ್ಳೋಣ [i18n-demo.github.io](//i18n-demo.github.io)

![](https://p.3ti.site/1731036697.avif)

ಮೇಲಿನ ಚಿತ್ರದಲ್ಲಿ ಸಂಖ್ಯೆಯ ಪ್ರದೇಶಗಳಿಗೆ ಅನುಗುಣವಾದ ಫೈಲ್ಗಳು ಈ ಕೆಳಗಿನಂತಿವೆ:

1. ಎಡ [`.i18n/htm/t1.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t1.pug)
2. ಬಲ [`.i18n/htm/t2.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t2.pug)

[`pug`](https://pugjs.org) ಎಂಬುದು `HTML` ಗಳನ್ನು ಉತ್ಪಾದಿಸುವ ಟೆಂಪ್ಲೇಟ್ ಭಾಷೆಯಾಗಿದೆ.

[➔ ವ್ಯಾಕರಣವನ್ನು ಕಲಿಯಲು ಇಲ್ಲಿ ಕ್ಲಿಕ್ ಮಾಡಿ pug](https://pugjs.org)

ಅಂತರಾಷ್ಟ್ರೀಯೀಕರಣವನ್ನು ಕಾರ್ಯಗತಗೊಳಿಸಲು ಸ್ಟ್ರಿಂಗ್ `${I18N.sponsor}` ಫೈಲ್ನಲ್ಲಿ ಬಳಸಲಾಗುತ್ತದೆ ಮತ್ತು ಅದರ ವಿಷಯವನ್ನು ಮೂಲ ಭಾಷೆಯ ಡೈರೆಕ್ಟರಿಯಲ್ಲಿ [i18n.yml](https://github.com/i18n-site/demo.i18n.site/blob/main/en/i18n.yml) ಪಠ್ಯದೊಂದಿಗೆ ಬದಲಾಯಿಸಲಾಗುತ್ತದೆ.

**`pug` ರಲ್ಲಿ `css` ಮತ್ತು `js` ಬರೆಯಬೇಡಿ** , ಇಲ್ಲದಿದ್ದರೆ ದೋಷವಿರುತ್ತದೆ.

ಶೈಲಿಗಳನ್ನು `css` ಗೆ ಬರೆಯಲಾಗುತ್ತದೆ ಮತ್ತು ವೆಬ್ ಘಟಕಗಳನ್ನು ರಚಿಸುವ ಮೂಲಕ ಪರಸ್ಪರ ಕ್ರಿಯೆಯನ್ನು ಸಾಧಿಸಲಾಗುತ್ತದೆ.

[i18n/htm/topbar.css](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/topbar.css) , ನ್ಯಾವಿಗೇಷನ್ ಬಾರ್ನ ಶೈಲಿಗೆ ಅನುಗುಣವಾದ ಫೈಲ್ :