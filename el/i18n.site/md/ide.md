# Σύσταση Συντάκτη

Ο καθένας έχει τον δικό του αγαπημένο συντάκτη, ας μοιραστούμε τις καλύτερες πρακτικές μας εδώ `Markdown`

Χρησιμοποιούμε `MarkDown` [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) [vscode](https://code.visualstudio.com/)

Όπως φαίνεται παρακάτω, κάντε δεξί κλικ στο πρόγραμμα επεξεργασίας για να ανοίξετε το παράθυρο προεπισκόπησης.

<img alt="" src="https://p.3ti.site/1720775216.avif">
<img alt="" src="https://p.3ti.site/1720775043.avif">

`code xxx.md` στη γραμμή εντολών για να καλέσετε `vscode` open `Markdown` file.

Χρησιμοποιήστε το [PicList](https://github.com/Kuingsmile/PicList) για να ανεβάσετε φωτογραφίες, θυμηθείτε να ρυθμίσετε το πλήκτρο συντόμευσης και μεταφορτώστε το στιγμιότυπο οθόνης με ένα κλικ.

Υποστηρίζει την αυτόματη αντιγραφή του ονόματος `Markdown` μετά τη μεταφόρτωση, γεγονός που βελτιώνει σημαντικά την αποτελεσματικότητα.

Ταυτόχρονα, μπορείτε να ανατρέξετε στην ακόλουθη διαμόρφωση, να τροποποιήσετε το αρχείο και να ρυθμίσετε τις παραμέτρους του μεταφορτωμένου αρχείου ώστε να συμπιέζεται αυτόματα σε `avif`

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
