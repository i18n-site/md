# ಯೋಜನೆಯ ಆವೃತ್ತಿ

ಡೆಮೊ ಯೋಜನೆಯನ್ನು ಉದಾಹರಣೆಯಾಗಿ ತೆಗೆದುಕೊಳ್ಳಿ:

`en/demo2/v` ಎಂಬುದು ಪ್ರಾಜೆಕ್ಟ್‌ನ ಪ್ರಸ್ತುತ ಆವೃತ್ತಿಯ ಸಂಖ್ಯೆ, ಇದು ಸೈಡ್‌ಬಾರ್ ಔಟ್‌ಲೈನ್‌ನಲ್ಲಿ ಪ್ರಾಜೆಕ್ಟ್ ಹೆಸರಿನ ಬಲಭಾಗದಲ್ಲಿ ಪ್ರದರ್ಶಿಸಲ್ಪಡುತ್ತದೆ.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

`.i18n/conf.yml` ಕಾನ್ಫಿಗರ್ ಮಾಡಲಾದ ಅನುವಾದದ ಮೂಲ ಭಾಷೆಗೆ ಅನುಗುಣವಾದ ಭಾಷಾ ಕೋಡ್ ಇಲ್ಲಿದೆ `en/`

ನಿಮ್ಮ ಮೂಲ ಭಾಷೆ ಇಂಗ್ಲಿಷ್ ಅಲ್ಲದಿದ್ದರೆ, ನಿಮ್ಮ ಮೂಲ ಭಾಷೆಯ ಪ್ರಾಜೆಕ್ಟ್ ಡೈರೆಕ್ಟರಿಯಲ್ಲಿ `v` 

ದಾಖಲೆಗಳ ಐತಿಹಾಸಿಕ ಆವೃತ್ತಿಗಳನ್ನು ಬ್ರೌಸ್ ಮಾಡುವ ಸಾಮರ್ಥ್ಯವು ಅಭಿವೃದ್ಧಿ ಹಂತದಲ್ಲಿದೆ.

ಹಲವಾರು ಆವೃತ್ತಿ ಸಂಖ್ಯೆಗಳ ಕಾರಣ ಹುಡುಕಾಟ ಇಂಜಿನ್‌ಗಳಿಂದ ಸೂಚ್ಯಂಕಗೊಂಡ ಪುಟಗಳನ್ನು ಅಸ್ತವ್ಯಸ್ತಗೊಳಿಸುವುದನ್ನು ತಪ್ಪಿಸಲು ಪ್ರಮುಖ ನವೀಕರಣಗಳನ್ನು (ಉದಾಹರಣೆಗೆ `v1` , `v2` ) ಬಿಡುಗಡೆ ಮಾಡುವಾಗ ಡಾಕ್ಯುಮೆಂಟ್‌ನ ಆವೃತ್ತಿ ಸಂಖ್ಯೆಯನ್ನು ಮಾತ್ರ ಮಾರ್ಪಡಿಸಲು ಶಿಫಾರಸು ಮಾಡಲಾಗಿದೆ.

## ವಿವಿಧ ಯೋಜನೆಗಳಿಗೆ ಫೈಲ್ ಇಂಡೆಕ್ಸ್‌ಗಳನ್ನು ವಿಭಜಿಸಲು ಖಾಲಿ `v` ಬಳಸಿ

ಡೆಮೊ ಯೋಜನೆಯಲ್ಲಿ, `en/demo2/v` ಜೊತೆಗೆ, `en/blog` ಮತ್ತು `en/demo1` ಡೈರೆಕ್ಟರಿಗಳ ವಿಷಯಗಳು ಖಾಲಿಯಾಗಿರುವುದನ್ನು ನೀವು ನೋಡಬಹುದು `v` ಫೈಲ್‌ಗಳು.

`v` `v`

ವಿವಿಧ ಯೋಜನೆಗಳ ಸೂಚಿಕೆಗಳನ್ನು ವಿಭಜಿಸುವ ಮೂಲಕ, ಸಂಪೂರ್ಣ ಸೈಟ್‌ನಲ್ಲಿರುವ ಎಲ್ಲಾ ಫೈಲ್‌ಗಳ ಸೂಚಿಯನ್ನು ಏಕಕಾಲದಲ್ಲಿ ಲೋಡ್ ಮಾಡುವುದರಿಂದ ಉಂಟಾಗುವ ನಿಧಾನ ಪ್ರವೇಶವನ್ನು ನೀವು ತಪ್ಪಿಸಬಹುದು.

ಉದಾಹರಣೆಗೆ, ಡೆಮೊ ಯೋಜನೆಯಲ್ಲಿ ಅನುಗುಣವಾದ : [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json) `blog`

