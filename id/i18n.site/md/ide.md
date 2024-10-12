# Rekomendasi Redaksi

Setiap orang memiliki editor favoritnya masing-masing. Di sini kami membagikan `Markdown` praktik terbaik kami.

Kami menggunakan [vscode](https://code.visualstudio.com/) untuk menulis `MarkDown` dan menginstal plugin [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) untuk melihat pratinjau secara real time saat menulis.

Seperti yang ditunjukkan di bawah ini, klik kanan di editor untuk membuka jendela pratinjau.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

Masukkan `code xxx.md` di baris perintah untuk memanggil `vscode` untuk membuka file `Markdown` .

Gunakan [PicList](https://github.com/Kuingsmile/PicList) untuk mengunggah gambar, ingatlah untuk mengatur tombol pintasan unggahan, dan unggah tangkapan layar dengan satu klik.

Ini mendukung penyalinan nama file secara otomatis ke format `Markdown` setelah diunggah, yang sangat meningkatkan efisiensi.

Pada saat yang sama, Anda dapat merujuk ke konfigurasi berikut, memodifikasi file, dan mengonfigurasi file yang diunggah agar secara otomatis dikompresi ke `avif` untuk mengurangi ukuran gambar.

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