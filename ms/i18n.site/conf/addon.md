# Pemalam

Pemalam boleh dikonfigurasikan dalam `.i18n/conf.yml` , seperti:

```yml
addon:
  - i18n.addon/toc
```

## Pemalam Rasmi

* `i18n.addon/toc` :
  Hasilkan indeks direktori `json` berdasarkan `TOC` , didayakan secara lalai

* `i18n.addon/mouse` : Kesan tetikus

## Konvensyen Nama Fail

Pemalam adalah semua `npm` pakej.

Pakej yang sepadan dengan `i18n.addon/toc` di atas ialah [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

Pemalam menggunakan versi terkini secara lalai dan menyemak kemas kini setiap minggu.

Jika anda ingin membetulkan versi, anda boleh menulis `i18n.addon/toc@0.1.3` .

Baris arahan terjemahan `i18n.site` akan memasang fail konvensyen pakej pemalam dan kemudian melaksanakannya.

Nama fail yang dipersetujui adalah seperti berikut

### htmIndex.js

`htmIndex.js` akan disuntik hingga akhir `.i18n/htm/index.js` .

Di mana `__CONF__` akan digantikan dengan nama konfigurasi semasa (seperti `dev` atau `ol` ).

### afterTran.js

Ia akan dipanggil selepas terjemahan selesai, dan parameter yang diluluskan adalah seperti berikut.

* `lang_li` : Senarai bahasa, bahasa pertama ialah bahasa sumber
* `changed` :
* `root` : Direktori akar projek

Nilai pulangan ialah kamus, seperti

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` ialah senarai fail output, `path` ialah laluan fail, dan `txt` ialah kandungan fail.

## Fungsi Terbina Dalam

Masa jalan `js` terbina dalam adalah berdasarkan pembangunan sekunder [boa](https://github.com/boa-dev/boa) dan fungsi terbina dalam adalah seperti berikut :

* `wPath(path, txt)` : Tulis ke fail
* `rTxt(path)` : Baca fail teks
* `rBin(path)` : Baca fail binari
* `rDir(dirpath)` : Baca direktori, nilai pulangan ialah senarai : tatasusunan, senarai fail

## Panduan Pembangunan

Pembangunan plug-in boleh menjadi rujukan [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)