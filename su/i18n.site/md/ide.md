# Rekomendasi Redaktur

Masing-masing gaduh pangropéa paporit sorangan Di dieu kami bagikeun `Markdown` prakték pangsaéna.

Urang make [vscode](https://code.visualstudio.com/) pikeun nulis `MarkDown` , sarta ogé masang plug-in [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) pikeun nilik sacara real waktu bari nulis.

Sapertos anu dipidangkeun di handap, klik katuhu dina éditor pikeun muka jandela tilik.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

Lebetkeun `code xxx.md` dina baris paréntah pikeun nelepon `vscode` pikeun muka file `Markdown` .

Anggo [PicList](https://github.com/Kuingsmile/PicList) pikeun ngamuat gambar, émut pikeun nyetél konci potong kompas unggah, sareng unggah layar nganggo hiji klik.

Éta ngadukung otomatis nyalin nami file kana format `Markdown` saatos unggah, anu ningkatkeun efisiensi.

Dina waktos anu sami, anjeun tiasa ngarujuk kana konfigurasi di handap ieu, ngarobih file, sareng ngonpigurasikeun file anu diunggah janten otomatis dikomprés kana `avif` pikeun ngirangan ukuran gambar.

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