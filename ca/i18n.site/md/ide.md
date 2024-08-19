# Recomanació De L'editor

Cadascú té el seu propi editor favorit. Aquí compartim `Markdown` nostres millors pràctiques.

Utilitzem [vscode](https://code.visualstudio.com/) per escriure `MarkDown` i instal·lar el connector [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) per previsualitzar en temps real mentre escrivim.

Com es mostra a continuació, feu clic amb el botó dret a l'editor per obrir la finestra de vista prèvia.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

Introduïu `code xxx.md` a la línia d'ordres per trucar `vscode` per obrir el fitxer `Markdown` .

Utilitzeu [PicList](https://github.com/Kuingsmile/PicList) per pujar imatges, recordeu configurar la tecla de drecera de càrrega i penjar la captura de pantalla amb un sol clic.

Admet la còpia automàtica del nom del fitxer al format `Markdown` després de la càrrega, la qual cosa millora molt l'eficiència.

Al mateix temps, podeu consultar la configuració següent, modificar el fitxer i configurar el fitxer penjat perquè es comprimirà automàticament a `avif` per reduir la mida de la imatge.

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