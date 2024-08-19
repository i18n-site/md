# Raccomandazione dell'editor

Ogniuno ha il proprio editor abituale; qui condividiamo le nostre migliori pratiche con `Markdown`.

Utilizziamo [vscode](https://code.visualstudio.com/) per scrivere `Markdown` e abbiamo installato l'estensione [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) per visualizzare un'anteprima in tempo reale mentre scriviamo.

Come illustrato nella figura sottostante, cliccare con il tasto destro nell'editor per aprire la finestra di anteprima.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

Digitare `code xxx.md` nel terminale per aprire il file `Markdown` con `vscode`.

Per il caricamento delle immagini utilizziamo [PicList](https://github.com/Kuingsmile/PicList); ricorda di impostare una scorciatoia per il caricamento, così da poter caricare uno screenshot con un singolo clic.

Essenziale è la sua capacità di copiare automaticamente il nome del file in formato `Markdown` dopo il caricamento, il che migliora significativamente l'efficienza.

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