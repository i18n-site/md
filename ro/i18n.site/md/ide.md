# Recomandarea Editorului

Fiecare are propriul editor preferat Să împărtășim aici cele mai bune practici `Markdown`

Folosim [vscode](https://code.visualstudio.com/) Write `MarkDown` și instalăm plug-in-ul [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) pentru a previzualiza în timp real în timp ce scriem.

După cum se arată mai jos, faceți clic dreapta în editor pentru a deschide fereastra de previzualizare.

<img alt="" src="https://p.3ti.site/1720775216.avif">
<img alt="" src="https://p.3ti.site/1720775043.avif">

Introduceți `code xxx.md` pe linia de comandă pentru a apela `vscode` deschide fișierul `Markdown` .

Utilizați [PicList](https://github.com/Kuingsmile/PicList) pentru a încărca imagini, nu uitați să setați tasta de comandă rapidă de încărcare și să încărcați captura de ecran cu un singur clic.

Acceptă copierea automată a formatului numelui `Markdown` după încărcare, ceea ce îmbunătățește foarte mult eficiența.

În același timp, puteți să vă referiți la următoarea configurație, să modificați fișierul și să configurați fișierul încărcat să fie comprimat automat pentru `avif` reduce dimensiunea imaginii.

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
