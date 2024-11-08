# Navigasi Khusus

Mari kita ambil situs demo [i18n-demo.github.io](//i18n-demo.github.io) sebagai contoh untuk menjelaskan cara menyesuaikan navigasi.

![](https://p.3ti.site/1731036697.avif)

File yang sesuai dengan area bernomor pada gambar di atas adalah sebagai berikut:

1. Kiri [`.i18n/htm/t1.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t1.pug)
2. Benar [`.i18n/htm/t2.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t2.pug)

[`pug`](https://pugjs.org) adalah bahasa templat yang menghasilkan `HTML` .

[➔ Klik di sini untuk mempelajari tata bahasa pug](https://pugjs.org)

Format string `${I18N.sponsor}` digunakan dalam file untuk mengimplementasikan internasionalisasi, dan isinya akan diganti dengan teks yang sesuai dalam [i18n.yml](https://github.com/i18n-site/demo.i18n.site/blob/main/en/i18n.yml) di direktori bahasa sumber.

**Jangan menulis `css` dan `js` di `pug`** , jika tidak maka akan terjadi kesalahan.

Gaya ditulis ke dalam `css` , dan interaksi dicapai dengan membuat komponen web.

Di sini, file yang sesuai dengan gaya bilah navigasi adalah : [i18n/htm/topbar.css](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/topbar.css)