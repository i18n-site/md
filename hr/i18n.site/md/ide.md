# Preporuka Urednika

Svatko ima svoj omiljeni uređivač. Ovdje dijelimo naše `Markdown` najboljih primjera iz prakse.

Koristimo [vscode](https://code.visualstudio.com/) write `MarkDown` i instaliramo dodatak [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) za pregled u stvarnom vremenu tijekom pisanja.

Kao što je prikazano u nastavku, desnom tipkom miša kliknite uređivač da biste otvorili prozor za pregled.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

Unesite `code xxx.md` u naredbeni redak za poziv `vscode` za otvaranje datoteke `Markdown` .

Upotrijebite [PicList](https://github.com/Kuingsmile/PicList) upload slike, ne zaboravite postaviti tipku prečaca za prijenos i prenesite snimak zaslona jednim klikom.

Podržava automatsko kopiranje naziva datoteke u format `Markdown` nakon učitavanja, što uvelike poboljšava učinkovitost.

U isto vrijeme, možete pogledati sljedeću konfiguraciju, izmijeniti datoteku i konfigurirati učitanu datoteku da se automatski komprimira na `avif` kako bi se smanjila veličina slike.

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