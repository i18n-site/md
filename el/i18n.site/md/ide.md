# Σύσταση Επεξεργάτη

Όλοι έχουν τη δική τους συνήθεια σε επεξεργαστές, εδώ μοιράζομαστε τις καλύτερες πρακτικές μας για το `Markdown`.

[Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) `MarkDown` [vscode](https://code.visualstudio.com/)

Ωστόσο, όπως φαίνεται στην εικόνα παρακάτω, μπορείτε να κάνετε δεξί κλικ μέσα στον επεξεργαστή για να ανοίξετε το παράθυρο προεπισκόπησης.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

Στη γραμμή εντολών, πληκτρολογήστε `code xxx.md` για να καλέσετε το `vscode` και να ανοίξετε το αρχείο `Markdown`.

Για την ανέβασμα εικόνων, χρησιμοποιήστε το [PicList](https://github.com/Kuingsmile/PicList), και θυμηθείτε να ρυθμίσετε τη συντόμευση για την ανέβασμα, ώστε μετά από ένα στιγμιότυπο οθόνης να ανεβάζετε με ένα κλικ.

Υποστηρίζει την αυτόματη αντιγραφή του ονόματος του αρχείου σε μορφή `Markdown` μετά την ανέβασμα, βελτιώνοντας σημαντικά την αποδοτικότητα.

Ταυτόχρονα, μπορείτε να ανατρέξετε στις παρακάτω ρυθμίσεις, να τροποποιήσετε το αρχείο, και να ρυθμίσετε ώστε το ανεβασμένο αρχείο να συμπιέζεται αυτόματα σε `avif` για να μειώσετε το μέγεθος της εικόνας.

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