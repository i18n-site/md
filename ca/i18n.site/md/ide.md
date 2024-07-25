# Recomanació De L'editor

Cadascú té el seu propi editor preferit. Compartim les nostres pràctiques recomanades aquí `Markdown`

Utilitzem [vscode](https://code.visualstudio.com/) Write `MarkDown` i instal·lem el connector [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) per obtenir una vista prèvia en temps real.

Com es mostra a continuació, feu clic amb el botó dret a l'editor per obrir la finestra de vista prèvia.

<img alt="" src="https://p.3ti.site/1720775216.avif">
<img alt="" src="https://p.3ti.site/1720775043.avif">

Introduïu `code xxx.md` a la línia d'ordres per cridar `vscode` obrir el fitxer `Markdown` .

Utilitzeu [PicList](https://github.com/Kuingsmile/PicList) per pujar imatges, recordeu configurar la tecla de drecera de càrrega i penjar la captura de pantalla amb un sol clic.

Admet la còpia automàtica del format del nom `Markdown` fitxer després de la càrrega, cosa que millora molt l'eficiència.

Al mateix temps, podeu fer referència a la configuració següent, modificar el fitxer i configurar el fitxer penjat perquè `avif` comprimirà automàticament per reduir la mida de la imatge.

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
