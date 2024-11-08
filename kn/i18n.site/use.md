# & ಸ್ಥಾಪಿಸಿ

## ಸ್ಥಾಪಿಸಿ

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## ಕಾನ್ಫಿಗರೇಶನ್ ಟೋಕನ್

`i18n.site` ಅಂತರ್ನಿರ್ಮಿತ `i18` ಅನುವಾದ ಪರಿಕರವನ್ನು ಹೊಂದಿದೆ [ಪ್ರವೇಶ ಟೋಕನ್ ಅನ್ನು ಕಾನ್ಫಿಗರ್ ಮಾಡಲು `i18` ಡಾಕ್ಯುಮೆಂಟ್ ಅನ್ನು ಉಲ್ಲೇಖಿಸಲು ದಯವಿಟ್ಟು ಇಲ್ಲಿ ಕ್ಲಿಕ್ ಮಾಡಿ](/i18/use) .

## ಡೆಮೊ ಯೋಜನೆ

`i18n.site` ಹೇಗೆ ಬಳಸುವುದು ಎಂದು ತಿಳಿಯಲು ಡೆಮೊ ಯೋಜನೆಯೊಂದಿಗೆ ಪ್ರಾರಂಭಿಸೋಣ.

ನಾವು ಮೊದಲು ಡೆಮೊ ರೆಪೊಸಿಟರಿಯನ್ನು ಕ್ಲೋನ್ ಮಾಡುತ್ತೇವೆ ಮತ್ತು ಈ ಕೆಳಗಿನಂತೆ ಆಜ್ಞೆಯನ್ನು ಚಲಾಯಿಸುತ್ತೇವೆ:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

ಚೀನಾದ ಮುಖ್ಯ ಭೂಭಾಗದಲ್ಲಿರುವ ಬಳಕೆದಾರರು ಹೀಗೆ ಮಾಡಬಹುದು:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

`docker` ನೊಂದಿಗೆ ಸ್ಥಳೀಯ ಪೂರ್ವವೀಕ್ಷಣೆಯನ್ನು ಸುಲಭಗೊಳಿಸಲು `demo.i18n.site` ಕೋಡ್ ಬೇಸ್ ಕ್ಲೋನ್ನ ಡೈರೆಕ್ಟರಿ ಹೆಸರು `md` ಆಗಿರಬೇಕು.

### ಅನುವಾದಿಸಿ

ಮೊದಲಿಗೆ, `md` ಡೈರೆಕ್ಟರಿಯನ್ನು ನಮೂದಿಸಿ ಮತ್ತು `i18n.site` ರನ್ ಮಾಡಿ, ಅದು `en` ರಿಂದ `zh` ಅನುವಾದಿಸುತ್ತದೆ.

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

ಚಾಲನೆಯಾದ ನಂತರ, ಅನುವಾದ ಮತ್ತು ಸಂಗ್ರಹ ಫೈಲ್ಗಳನ್ನು ರಚಿಸಲಾಗುತ್ತದೆ ದಯವಿಟ್ಟು ಅವುಗಳನ್ನು `md` `git add . ` ಸೇರಿಸಲು ಮರೆಯದಿರಿ.

### ಸ್ಥಳೀಯ ಪೂರ್ವವೀಕ್ಷಣೆ

`docker` ಸ್ಥಾಪಿಸಿ ಮತ್ತು ಪ್ರಾರಂಭಿಸಿ ( `MAC` ಬಳಕೆದಾರನು [orbstack](https://orbstack.dev) ಅನ್ನು `docker` ರ ರನ್ಟೈಮ್ ಆಗಿ ಬಳಸಲು ಶಿಫಾರಸು ಮಾಡುತ್ತಾರೆ).

ನಂತರ, `docker` ಡೈರೆಕ್ಟರಿಯನ್ನು ನಮೂದಿಸಿ ಮತ್ತು `./up.sh` ರನ್ ಮಾಡಿ, ತದನಂತರ ಸ್ಥಳೀಯವಾಗಿ ಪೂರ್ವವೀಕ್ಷಣೆ ಮಾಡಲು ಭೇಟಿ ನೀಡಿ [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">