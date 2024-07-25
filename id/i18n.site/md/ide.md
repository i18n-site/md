# Rekomendasi Redaksi

Setiap orang memiliki editor favoritnya masing-masing. Mari berbagi praktik terbaik kami di sini `Markdown`

Kami menggunakan [vscode](https://code.visualstudio.com/) Tulis `MarkDown` dan instal plugin [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) untuk melihat pratinjau secara real time saat menulis.

Seperti yang ditunjukkan di bawah ini, klik kanan di editor untuk membuka jendela pratinjau.

<img alt="" src="https://p.3ti.site/1720775216.avif">
<img alt="" src="https://p.3ti.site/1720775043.avif">

Masukkan `code xxx.md` pada baris perintah untuk memanggil `vscode` buka `Markdown` file.

Gunakan [PicList](https://github.com/Kuingsmile/PicList) untuk mengunggah gambar, ingatlah untuk mengatur tombol pintasan unggahan, dan unggah tangkapan layar dengan satu klik.

Ini mendukung penyalinan format nama `Markdown` secara otomatis setelah diunggah, yang sangat meningkatkan efisiensi.

Pada saat yang sama, Anda dapat merujuk ke konfigurasi berikut, memodifikasi file, dan mengonfigurasi file yang diunggah agar dikompresi secara otomatis menjadi `avif`

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
