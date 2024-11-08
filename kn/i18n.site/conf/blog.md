# ಬ್ಲಾಗ್ ಟೆಂಪ್ಲೇಟ್

`use: Blog` ರಲ್ಲಿ `i18n/conf.yml` ಎಂದರೆ ರೆಂಡರಿಂಗ್ಗಾಗಿ ಬ್ಲಾಗ್ ಟೆಂಪ್ಲೇಟ್ ಅನ್ನು ಬಳಸುವುದು.

ಬ್ಲಾಗ್ ಪೋಸ್ಟ್ನ `markdown` ಫೈಲ್ ಮೆಟಾ ಮಾಹಿತಿಯನ್ನು ಕಾನ್ಫಿಗರ್ ಮಾಡುವ ಅಗತ್ಯವಿದೆ.

ಮೆಟಾ ಮಾಹಿತಿಯು ಫೈಲ್ನ ಪ್ರಾರಂಭದಲ್ಲಿರಬೇಕು, `---` ರಿಂದ ಪ್ರಾರಂಭವಾಗಿ `---` ರಿಂದ ಕೊನೆಗೊಳ್ಳಬೇಕು. ಮಧ್ಯದಲ್ಲಿರುವ ಕಾನ್ಫಿಗರೇಶನ್ ಮಾಹಿತಿಯ ಸ್ವರೂಪವು `YAML` ಆಗಿದೆ.

ಡೆಮೊ ಫೈಲ್ನ ಸಂರಚನೆಯು ಈ ಕೆಳಗಿನಂತಿರುತ್ತದೆ:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` ವಿಷಯ ಸಾರಾಂಶವನ್ನು ಸೂಚಿಸುತ್ತದೆ, ಅದನ್ನು ಬ್ಲಾಗ್ ಸೂಚ್ಯಂಕ ಪುಟದಲ್ಲಿ ಪ್ರದರ್ಶಿಸಲಾಗುತ್ತದೆ.

`YMAL` ' ಸಹಾಯದಿಂದ | `ಸಿಂಟ್ಯಾಕ್ಸ್, ನೀವು ಬಹು ಸಾಲಿನ ಸಾರಾಂಶಗಳನ್ನು ಬರೆಯಬಹುದು.

ಬ್ಲಾಗ್ನ ಬಲಭಾಗದಲ್ಲಿರುವ ಡೈರೆಕ್ಟರಿ ಟ್ರೀ ಕಾನ್ಫಿಗರೇಶನ್ ಕೂಡ `TOC` ಫೈಲ್ಗಳು (ಹಿಂದಿನ ಅಧ್ಯಾಯವನ್ನು ನೋಡಿ `TOC` ರಲ್ಲಿ ಪಟ್ಟಿ ಮಾಡಲಾದ ಲೇಖನಗಳು ಮಾತ್ರ ಬ್ಲಾಗ್ ಮುಖಪುಟ ಸೂಚ್ಯಂಕದಲ್ಲಿ ಗೋಚರಿಸುತ್ತವೆ.

ಮೆಟಾ ಮಾಹಿತಿಯನ್ನು ಹೊಂದಿರದ ಲೇಖನಗಳು ಬ್ಲಾಗ್ ಮುಖಪುಟದಲ್ಲಿ ಕಾಣಿಸುವುದಿಲ್ಲ, ಆದರೆ ಬಲಭಾಗದಲ್ಲಿರುವ ಡೈರೆಕ್ಟರಿ ಟ್ರೀಯಲ್ಲಿ ಕಾಣಿಸಿಕೊಳ್ಳಬಹುದು.

## ಲೇಖಕರ ಮಾಹಿತಿ

ಲೇಖಕರ ಮಾಹಿತಿಯನ್ನು ಲೇಖನದ ಮೆಟಾ ಮಾಹಿತಿಯಲ್ಲಿ ಬರೆಯಬಹುದು, ಉದಾಹರಣೆಗೆ:

```yml
author: marlowe
```

ನಂತರ ಮೂಲ ಭಾಷೆಯ ಡೈರೆಕ್ಟರಿಯಲ್ಲಿ `author.yml` ಸಂಪಾದಿಸಿ ಮತ್ತು ಲೇಖಕರ ಮಾಹಿತಿಯನ್ನು ಸೇರಿಸಿ, ಉದಾಹರಣೆಗೆ :

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

`name` , `url` ಮತ್ತು `title` ಎಲ್ಲವೂ ಐಚ್ಛಿಕ. `name` ಹೊಂದಿಸದಿದ್ದರೆ, ಪ್ರಮುಖ ಹೆಸರನ್ನು (ಇಲ್ಲಿ `marlowe` ) `name` ನಂತೆ ಬಳಸಲಾಗುತ್ತದೆ.

ಡೆಮೊ ಪ್ರಾಜೆಕ್ಟ್ [`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1) ಮತ್ತು [`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml) ಅನ್ನು ನೋಡಿ

## ಪಿನ್ ಮಾಡಿದ ಲೇಖನ

ನೀವು ಲೇಖನವನ್ನು ಮೇಲಕ್ಕೆ ಪಿನ್ ಮಾಡಬೇಕಾದರೆ, ದಯವಿಟ್ಟು `i18n.site` ರನ್ ಮಾಡಿ ಮತ್ತು `.i18n/data/blog` ಕೆಳಗಿನ `xxx.yml` ಫೈಲ್ಗಳನ್ನು ಎಡಿಟ್ ಮಾಡಿ ಮತ್ತು ಟೈಮ್ಸ್ಟ್ಯಾಂಪ್ ಅನ್ನು ಋಣಾತ್ಮಕ ಸಂಖ್ಯೆಗೆ ಬದಲಾಯಿಸಿ (ಬಹು ಋಣಾತ್ಮಕ ಸಂಖ್ಯೆಗಳನ್ನು ದೊಡ್ಡದರಿಂದ ಚಿಕ್ಕದಕ್ಕೆ ವಿಂಗಡಿಸಲಾಗುತ್ತದೆ).