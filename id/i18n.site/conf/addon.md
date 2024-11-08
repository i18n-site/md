# Plugin

Plug-in dapat dikonfigurasi dalam `.i18n/conf.yml` , seperti:

```yml
addon:
  - i18n.addon/toc
```

## Plugin Resmi

* `i18n.addon/toc` : Indeks direktori
  Hasilkan indeks direktori `json` berdasarkan `TOC` , diaktifkan secara default

* `i18n.addon/mouse` : Efek tikus

## Konvensi Nama File

Plug-in semuanya `npm` paket.

Paket yang sesuai dengan `i18n.addon/toc` di atas adalah [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

Plugin ini menggunakan versi terbaru secara default dan memeriksa pembaruan setiap minggu.

Jika Anda ingin memperbaiki versinya, Anda dapat menulis `i18n.addon/toc@0.1.3` .

Terjemahan baris perintah `i18n.site` akan menginstal file konvensi paket plug-in dan kemudian menjalankannya.

Nama file yang disepakati adalah sebagai berikut

### htmIndex.js

`htmIndex.js` akan disuntikkan ke akhir `.i18n/htm/index.js` .

Dimana `__CONF__` akan diganti dengan nama konfigurasi saat ini (misalnya `dev` atau `ol` ).

### afterTran.js

Ini akan dipanggil setelah terjemahan selesai, dan parameter yang diteruskan adalah sebagai berikut.

* `lang_li` : Daftar bahasa, bahasa pertama adalah bahasa sumber
* `changed` : File yang dimodifikasi
* `root` : Direktori akar proyek

Nilai yang dikembalikan adalah kamus, seperti

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` adalah daftar file keluaran, `path` adalah jalur file, dan `txt` adalah konten file.

## Fungsi Bawaan

Runtime `js` bawaan didasarkan pada pengembangan sekunder [boa](https://github.com/boa-dev/boa) , dan fungsi bawaannya adalah sebagai berikut :

* `wPath(path, txt)` : Tulis ke file
* `rTxt(path)` : Baca file teks
* `rBin(path)` : Baca file biner
* `rDir(dirpath)` : Baca direktori, nilai yang dikembalikan adalah array : , daftar file

## Panduan Pengembangan

Pengembangan plug-in bisa menjadi referensi [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)