# Empfehlung Des Herausgebers

Jeder hat seinen eigenen Lieblingseditor. Hier teilen wir unsere `Markdown` Best Practices.

Wir verwenden [vscode](https://code.visualstudio.com/) um `MarkDown` zu schreiben und das Plug-in [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) zu installieren, um während des Schreibens eine Vorschau anzuzeigen.

Klicken Sie wie unten gezeigt mit der rechten Maustaste in den Editor, um das Vorschaufenster zu öffnen.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

Geben Sie `code xxx.md` in die Befehlszeile ein, um `vscode` zum Öffnen der Datei `Markdown` aufzurufen.

Verwenden Sie [PicList](https://github.com/Kuingsmile/PicList) um Bilder hochzuladen, denken Sie daran, die Upload-Tastenkombination festzulegen und den Screenshot mit einem Klick hochzuladen.

Es unterstützt das automatische Kopieren des Dateinamens in das `Markdown` Format nach dem Hochladen, was die Effizienz erheblich verbessert.

Gleichzeitig können Sie auf die folgende Konfiguration verweisen, die Datei ändern und die hochgeladene Datei so konfigurieren, dass sie automatisch auf `avif` komprimiert wird, um die Bildgröße zu reduzieren.

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