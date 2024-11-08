# Instal & Pratinjau

## Memasang

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Token Konfigurasi

`i18n.site` memiliki `i18` alat terjemahan bawaan. Silakan [klik di sini untuk merujuk ke `i18` dokumen untuk mengonfigurasi token akses](/i18/use) .

## Proyek Demo

Mari kita mulai dengan proyek demo untuk mempelajari cara menggunakan `i18n.site` .

Kami pertama-tama mengkloning repositori demo dan menjalankan perintah sebagai berikut:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Pengguna di Tiongkok daratan dapat:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

Nama direktori klon basis kode `demo.i18n.site` harus `md` untuk memfasilitasi pratinjau lokal dengan `docker` .

### Menerjemahkan

Pertama, masuk ke direktori `md` dan jalankan `i18n.site` , yang akan menerjemahkan `en` menjadi `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Setelah berjalan, file terjemahan dan cache akan dibuat. Harap ingat untuk menambahkannya ke repositori di `git add . ` `md` .

### Pratinjau Lokal

Instal dan mulai `docker` ( `MAC` pengguna merekomendasikan penggunaan [orbstack](https://orbstack.dev) sebagai runtime untuk `docker` ).

Lalu, masuk ke direktori `docker` dan jalankan `./up.sh` , lalu kunjungi [https://127.0.0.1](https://127.0.0.1) untuk melihat pratinjau secara lokal.

<img src="//p.3ti.site/1721104238.avif" style="width:360px">