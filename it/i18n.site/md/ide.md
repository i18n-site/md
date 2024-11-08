# Raccomandazione Dell'editore

Ognuno ha il proprio editor preferito Qui condividiamo le nostre `Markdown` migliori pratiche.

Usiamo [vscode](https://code.visualstudio.com/) per scrivere `MarkDown` e installiamo il plug-in [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) per visualizzare l'anteprima in tempo reale durante la scrittura.

Come mostrato di seguito, fare clic con il pulsante destro del mouse nell'editor per aprire la finestra di anteprima.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

Immettere `code xxx.md` nella riga di comando per chiamare `vscode` per aprire il file `Markdown` .

Utilizza [PicList](https://github.com/Kuingsmile/PicList) per caricare le immagini, ricorda di impostare il tasto di scelta rapida per il caricamento e carica lo screenshot con un clic.

Supporta la copia automatica del nome del file nel formato `Markdown` dopo il caricamento, il che migliora notevolmente l'efficienza.

Allo stesso tempo, puoi fare riferimento alla seguente configurazione, modificare il file e configurare il file caricato in modo che venga compresso automaticamente a `avif` per ridurre la dimensione dell'immagine.

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