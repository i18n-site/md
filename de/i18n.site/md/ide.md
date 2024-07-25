# Empfehlung Des Herausgebers

Jeder hat seinen eigenen Lieblingseditor. Lassen Sie uns hier unsere Best Practices teilen `Markdown`

Wir verwenden [vscode](https://code.visualstudio.com/) Write `MarkDown` und installieren das Plug-in [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) , um beim Schreiben eine Vorschau anzuzeigen.

Klicken Sie wie unten gezeigt mit der rechten Maustaste in den Editor, um das Vorschaufenster zu öffnen.

<img alt="" src="https://p.3ti.site/1720775216.avif">
<img alt="" src="https://p.3ti.site/1720775043.avif">

Geben Sie `code xxx.md` in der Befehlszeile ein, um `vscode` open `Markdown` file aufzurufen.

Verwenden Sie [PicList](https://github.com/Kuingsmile/PicList) um Bilder hochzuladen, denken Sie daran, die Upload-Tastenkombination festzulegen und den Screenshot mit einem Klick hochzuladen.

Es unterstützt das automatische Kopieren des `Markdown` nach dem Hochladen, was die Effizienz erheblich verbessert.

Gleichzeitig können Sie auf die folgende Konfiguration zurückgreifen, die Datei ändern und die hochgeladene Datei so konfigurieren, dass sie automatisch auf `avif` komprimiert wird, um die Bildgröße zu reduzieren.

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
