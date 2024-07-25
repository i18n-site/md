# Preporuka Urednika

Svatko ima svog omiljenog urednika. Podijelimo naše najbolje primjere iz prakse `Markdown`

Koristimo [vscode](https://code.visualstudio.com/) Write `MarkDown` i instaliramo dodatak [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) za pregled u stvarnom vremenu tijekom pisanja.

Kao što je prikazano u nastavku, desnom tipkom miša kliknite uređivač da biste otvorili prozor za pregled.

<img alt="" src="https://p.3ti.site/1720775216.avif">
<img alt="" src="https://p.3ti.site/1720775043.avif">

Unesite `code xxx.md` u naredbeni redak za poziv `vscode` open `Markdown` file.

Upotrijebite [PicList](https://github.com/Kuingsmile/PicList) upload slike, ne zaboravite postaviti tipku prečaca za prijenos i prenesite snimak zaslona jednim klikom.

Podržava automatsko kopiranje formata naziva `Markdown` nakon učitavanja, što uvelike poboljšava učinkovitost.

U isto vrijeme možete se obratiti na sljedeću konfiguraciju, izmijeniti datoteku i konfigurirati učitanu datoteku da bude automatski komprimirana u `avif` kako biste smanjili veličinu slike.

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
