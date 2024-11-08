# Pasang &

## Pasang

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Token Konfigurasi

`i18n.site` mempunyai alat terjemahan `i18` terbina dalam Sila [klik di sini untuk merujuk kepada `i18` dokumen untuk mengkonfigurasi token akses](/i18/use) .

## Projek Demo

Mari kita mulakan dengan projek demo untuk mempelajari cara menggunakan `i18n.site` .

Kami mula-mula mengklon repositori demo dan menjalankan arahan seperti berikut:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Pengguna di tanah besar China boleh:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

Nama direktori bagi klon asas kod `demo.i18n.site` mestilah `md` untuk memudahkan pratonton setempat dengan `docker` .

### Menterjemah

Mula-mula, masukkan direktori `md` dan jalankan `i18n.site` , yang akan menterjemahkan `en` kepada `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Selepas berjalan, fail terjemahan dan cache akan dijana Sila ingat untuk menambahkannya ke repositori dalam `git add . ` `md` .

### Pratonton Tempatan

Pasang dan mulakan `docker` ( `MAC` pengguna mengesyorkan menggunakan [orbstack](https://orbstack.dev) sebagai masa jalan untuk `docker` ).

Kemudian, masukkan direktori `docker` dan jalankan `./up.sh` , dan kemudian lawati [https://127.0.0.1](https://127.0.0.1) untuk pratonton secara setempat.

<img src="//p.3ti.site/1721104238.avif" style="width:360px">