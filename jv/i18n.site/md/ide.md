# Rekomendasi Editor

Saben uwong duwe editor favorit dhewe Ayo nuduhake praktik paling apik ing kene `Markdown`

Kita nggunakake Tulis [vscode](https://code.visualstudio.com/) `MarkDown` nginstal plug-in [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) kanggo pratinjau ing wektu nyata nalika nulis.

Kaya sing dituduhake ing ngisor iki, klik-tengen ing editor kanggo mbukak jendhela pratinjau.

<img alt="" src="https://p.3ti.site/1720775216.avif">
<img alt="" src="https://p.3ti.site/1720775043.avif">

Ketik `code xxx.md` ing baris printah kanggo nelpon `vscode` mbukak `Markdown` file.

Gunakake [PicList](https://github.com/Kuingsmile/PicList) kanggo ngunggah gambar, elinga nyetel tombol trabasan unggahan, lan upload gambar kanthi siji klik.

Ndhukung nyalin jeneng `Markdown` kanthi otomatis sawise diunggah, sing ningkatake efisiensi.

Ing wektu sing padha, sampeyan bisa ngrujuk menyang konfigurasi ing ngisor iki, ngowahi file, lan ngatur file sing diunggah supaya dikompres kanthi otomatis kanggo `avif` ukuran gambar.

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
