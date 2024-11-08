# Cadangan Editor

Setiap orang mempunyai editor kegemaran mereka sendiri Di sini kami berkongsi `Markdown` amalan terbaik kami.

Kami menggunakan [vscode](https://code.visualstudio.com/) untuk menulis `MarkDown` dan memasang pemalam [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) untuk pratonton dalam masa nyata semasa menulis.

Seperti yang ditunjukkan di bawah, klik kanan dalam editor untuk membuka tetingkap pratonton.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

Masukkan `code xxx.md` dalam baris arahan untuk memanggil `vscode` untuk membuka fail `Markdown` .

Gunakan [PicList](https://github.com/Kuingsmile/PicList) untuk memuat naik gambar, ingat untuk menetapkan kekunci pintasan muat naik, dan muat naik tangkapan skrin dengan satu klik.

Ia menyokong penyalinan nama fail secara automatik ke format `Markdown` selepas memuat naik, yang meningkatkan kecekapan.

Pada masa yang sama, anda boleh merujuk kepada konfigurasi berikut, mengubah suai fail dan mengkonfigurasi fail yang dimuat naik untuk dimampatkan secara automatik kepada `avif` untuk mengurangkan saiz imej.

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