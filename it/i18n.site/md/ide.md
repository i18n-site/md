# Raccomandazione dell'editor

Ogniuno ha il proprio editor abituale; qui condividiamo le nostre migliori pratiche con `Markdown`.

Utilizziamo [vscode](https://code.visualstudio.com/) per scrivere `Markdown` e abbiamo installato anche il plugin [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) peranteprima in tempo reale durante la scrittura.

Come illustrato nella figura sottostante, cliccare con il tasto destro nell'editor per aprire la finestra di anteprima.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

Digitare `code xxx.md` nel terminale per aprire il file `Markdown` con `vscode`.

Utilizziamo [PicList](https://github.com/Kuingsmile/PicList) per il caricamento delle immagini; ricorda di impostare una scorciatoia per il caricamento, così da caricare le schermate con un singolo clic.

Offre la possibilità di copiare automaticamente il nome del file in formato `Markdown` dopo il caricamento, migliorando così notevolmente l'efficienza.

Allo stesso tempo, puoi fare riferimento alla seguente configurazione per modificare il file e impostare la compressione automatica dei file caricati in `avif`, riducendo così le dimensioni delle immagini.

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