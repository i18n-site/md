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

`YMAL` ' ಸಹಾಯದಿಂದ|`ಸಿಂಟ್ಯಾಕ್ಸ್, ನೀವು ಬಹು ಸಾಲಿನ ಸಾರಾಂಶಗಳನ್ನು ಬರೆಯಬಹುದು.

ಬ್ಲಾಗ್ನ ಬಲಭಾಗದಲ್ಲಿರುವ ಡೈರೆಕ್ಟರಿ ಟ್ರೀ ಕಾನ್ಫಿಗರೇಶನ್ ಕೂಡ `TOC` ಫೈಲ್ಗಳು (ಹಿಂದಿನ ಅಧ್ಯಾಯವನ್ನು ನೋಡಿ `TOC` ರಲ್ಲಿ ಪಟ್ಟಿ ಮಾಡಲಾದ ಲೇಖನಗಳು ಮಾತ್ರ ಬ್ಲಾಗ್ ಮುಖಪುಟ ಸೂಚ್ಯಂಕದಲ್ಲಿ ಗೋಚರಿಸುತ್ತವೆ.

ಮೆಟಾ ಮಾಹಿತಿಯನ್ನು ಹೊಂದಿರದ ಲೇಖನಗಳು ಬ್ಲಾಗ್ ಮುಖಪುಟದಲ್ಲಿ ಕಾಣಿಸುವುದಿಲ್ಲ, ಆದರೆ ಬಲಭಾಗದಲ್ಲಿರುವ ಡೈರೆಕ್ಟರಿ ಟ್ರೀಯಲ್ಲಿ ಕಾಣಿಸಿಕೊಳ್ಳಬಹುದು.

ನೀವು ಲೇಖನವನ್ನು ಮೇಲಕ್ಕೆ ಪಿನ್ ಮಾಡಬೇಕಾದರೆ, ದಯವಿಟ್ಟು `i18n.site` ರನ್ ಮಾಡಿ ಮತ್ತು `.i18n/data/blog` ಕೆಳಗಿನ `xxx.yml` ಫೈಲ್ಗಳನ್ನು ಎಡಿಟ್ ಮಾಡಿ ಮತ್ತು ಟೈಮ್ಸ್ಟ್ಯಾಂಪ್ ಅನ್ನು ಋಣಾತ್ಮಕ ಸಂಖ್ಯೆಗೆ ಬದಲಾಯಿಸಿ (ಬಹು ಋಣಾತ್ಮಕ ಸಂಖ್ಯೆಗಳನ್ನು ಸಂಪೂರ್ಣ ಮೌಲ್ಯದಲ್ಲಿ ಚಿಕ್ಕದರಿಂದ ದೊಡ್ಡದಕ್ಕೆ ವಿಂಗಡಿಸಲಾಗುತ್ತದೆ).