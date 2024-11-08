# Recomandarea Editorului

Fiecare are propriul editor preferat. Aici vă împărtășim `Markdown` mai bune practici.

Folosim [vscode](https://code.visualstudio.com/) pentru a scrie `MarkDown` și instalam plug-in-ul [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) pentru a previzualiza în timp real în timp ce scriem.

După cum se arată mai jos, faceți clic dreapta în editor pentru a deschide fereastra de previzualizare.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

Introduceți `code xxx.md` în linia de comandă pentru a apela `vscode` pentru a deschide fișierul `Markdown` .

Utilizați [PicList](https://github.com/Kuingsmile/PicList) pentru a încărca imagini, nu uitați să setați tasta de comandă rapidă de încărcare și să încărcați captura de ecran cu un singur clic.

Acceptă copierea automată a numelui fișierului în formatul `Markdown` după încărcare, ceea ce îmbunătățește foarte mult eficiența.

În același timp, puteți să vă referiți la următoarea configurație, să modificați fișierul și să configurați fișierul încărcat să fie comprimat automat la `avif` pentru a reduce dimensiunea imaginii.

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