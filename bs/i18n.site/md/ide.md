# Preporuka Urednika

Svako ima svog omiljenog uređivača Ovdje dijelimo naše `Markdown` najboljih praksi.

[vscode](https://code.visualstudio.com/) za pisanje `MarkDown` i instaliramo dodatak [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) za pregled u realnom vremenu tokom pisanja.

Kao što je prikazano ispod, kliknite desnim tasterom miša na uređivač da otvorite prozor za pregled.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

Unesite `code xxx.md` u komandnu liniju da pozovete `vscode` da otvorite fajl `Markdown` .

Koristite [PicList](https://github.com/Kuingsmile/PicList) za otpremanje slika, ne zaboravite da postavite prečicu za otpremanje i otpremite snimak ekrana jednim klikom.

Podržava automatsko kopiranje naziva datoteke u format `Markdown` nakon učitavanja, što uvelike poboljšava efikasnost.

Istovremeno, možete pogledati sljedeću konfiguraciju, izmijeniti datoteku i konfigurirati da se prenesena datoteka automatski komprimuje na `avif` kako biste smanjili veličinu slike.

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