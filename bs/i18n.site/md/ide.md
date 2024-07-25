# Preporuka Urednika

Svako ima svog omiljenog uređivača. Hajde da ovdje podijelimo naše najbolje prakse `Markdown`

[vscode](https://code.visualstudio.com/) `MarkDown` i instaliramo dodatak [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) za pregled u realnom vremenu!

Kao što je prikazano ispod, kliknite desnim tasterom miša na uređivač da otvorite prozor za pregled.

<img alt="" src="https://p.3ti.site/1720775216.avif">
<img alt="" src="https://p.3ti.site/1720775043.avif">

Unesite `code xxx.md` u komandnoj liniji da pozovete `vscode` open `Markdown` file.

Koristite [PicList](https://github.com/Kuingsmile/PicList) za otpremanje slika, ne zaboravite da postavite prečicu za otpremanje i otpremite snimak ekrana jednim klikom.

Podržava automatsko kopiranje formata naziva `Markdown` nakon učitavanja, što uvelike poboljšava efikasnost.

Istovremeno, možete pogledati sljedeću konfiguraciju, izmijeniti datoteku i konfigurirati da se prenesena datoteka automatski komprimuje u `avif`

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
