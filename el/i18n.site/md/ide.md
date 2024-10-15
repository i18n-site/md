# Σύσταση Συντάκτη

Ο καθένας έχει το δικό του αγαπημένο πρόγραμμα επεξεργασίας Εδώ μοιραζόμαστε τις `Markdown` καλύτερες πρακτικές μας.

[Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) `MarkDown` [vscode](https://code.visualstudio.com/)

Όπως φαίνεται παρακάτω, κάντε δεξί κλικ στο πρόγραμμα επεξεργασίας για να ανοίξετε το παράθυρο προεπισκόπησης.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

Εισαγάγετε `code xxx.md` στη γραμμή εντολών για να καλέσετε `vscode` για να ανοίξετε το αρχείο `Markdown` .

Χρησιμοποιήστε το [PicList](https://github.com/Kuingsmile/PicList) για να ανεβάσετε φωτογραφίες, θυμηθείτε να ρυθμίσετε το πλήκτρο συντόμευσης και μεταφορτώστε το στιγμιότυπο οθόνης με ένα κλικ.

Υποστηρίζει την αυτόματη αντιγραφή του ονόματος αρχείου σε μορφή `Markdown` μετά τη μεταφόρτωση, γεγονός που βελτιώνει σημαντικά την αποτελεσματικότητα.

Ταυτόχρονα, μπορείτε να ανατρέξετε στην ακόλουθη διαμόρφωση, να τροποποιήσετε το αρχείο και να ρυθμίσετε τις παραμέτρους του μεταφορτωμένου αρχείου ώστε να συμπιέζεται αυτόματα στο `avif` για να μειώσετε το μέγεθος της εικόνας.

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