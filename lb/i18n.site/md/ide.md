# Editor Empfehlung

Jiddereen huet säin eegene Liiblingseditor Hei deele mir eis `Markdown` bescht Praktiken.

Mir [vscode](https://code.visualstudio.com/) fir `MarkDown` ze schreiwen an de Plug-in [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) z'installéieren fir an Echtzäit ze kucken beim Schreiwen.

Wéi hei ënnendrënner, klickt riets am Editor fir d'Virschaufenster opzemaachen.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

Gitt `code xxx.md` an der Kommandozeil fir `vscode` ze ruffen fir Datei `Markdown` opzemaachen.

Benotzt [PicList](https://github.com/Kuingsmile/PicList) fir Biller eropzelueden, erënnert un d'Ofkierzungsschlëssel ze setzen an de Screenshot mat engem Klick eropzelueden.

Et ënnerstëtzt automatesch Kopie vum Dateinumm op `Markdown` Format nom Eroplueden, wat d'Effizienz staark verbessert.

Zur selwechter Zäit kënnt Dir op déi folgend Konfiguratioun referenzéieren, d'Datei änneren an déi eropgeluede Datei konfiguréieren fir automatesch op `avif` kompriméiert ze ginn fir d'Bildgréisst ze reduzéieren.

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