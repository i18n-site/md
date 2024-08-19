# Recomandări editor

Fiecare are editorul său obișnuit; iată câteva dintre cele mai bune practici `Markdown`.

Folosim [vscode](https://code.visualstudio.com/) pentru a scrie `Markdown` și am instalat plug-inul [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) pentru a previzualiza în timp real în timp ce scriem.

Cum se poate vedea în imaginea de mai jos, faceți clic dreapta în editor pentru a deschide fereastra de previzualizare.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

În linia de comandă, tastați `code xxx.md` pentru a deschide fișierul `Markdown` cu `vscode`.

Pentru încărcarea imaginilor, folosiți [PicList](https://github.com/Kuingsmile/PicList); nu uitați să setați o tastă rapidă pentru încărcare, astfel încât să puteți încărca o captură de ecran cu un singur clic.

Acceptă copierea automată a numelui fișierului în format `Markdown` după încărcare, ceea ce crește semnificativ eficiența.

În același timp, puteți consulta următoarea configurație pentru a modifica fișierul și a seta comprimarea automată a fișierelor încărcate la format `avif`, reducând astfel dimensiunea imaginilor.

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