# Editor-Empfehlung

Jeder hat seinen bevorzugten Editor; hier teilen wir unsere Best Practices für `Markdown`.

Wir nutzen [vscode](https://code.visualstudio.com/), um `Markdown` zu schreiben, und haben das Plugin [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) installiert, um während des Schreibens eine Echtzeitvorschau anzuzeigen.

Wie im folgenden Bild gezeigt, können Sie mit der rechten Maustaste im Editor klicken, um das Vorschaufenster zu öffnen.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

Geben Sie `code xxx.md` im Terminal ein, um `vscode` zum Öffnen der `Markdown`-Datei aufzurufen.

Verwenden Sie [PicList](https://github.com/Kuingsmile/PicList) zum Hochladen von Bildern, und denken Sie daran, eine Upload-Tastenkombination festzulegen, um nach dem Screenshot sofort hochladen zu können.

Es unterstützt das automatische Kopieren des Dateinamens in das `Markdown`-Format nach dem Hochladen, was die Effizienz erheblich steigert.

Zugleich können Sie die nachstehende Konfiguration heranziehen, die Datei bearbeiten und die hochgeladenen Dateien so konfigurieren, dass sie automatisch in das Format `avif` komprimiert werden, um die Bildgröße zu reduzieren.

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