# Versi Proyek

Ambil proyek demo sebagai contoh:

`en/demo2/v` adalah nomor versi proyek saat ini, yang akan ditampilkan di sebelah kanan nama proyek pada kerangka sidebar.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

Di sini `en/` adalah kode bahasa yang sesuai dengan bahasa sumber terjemahan yang dikonfigurasi oleh `.i18n/conf.yml` .

Jika bahasa sumber Anda bukan bahasa Inggris, maka file `v` harus ditempatkan di direktori proyek bahasa sumber Anda.

Kemampuan untuk menelusuri versi historis dokumen sedang dalam pengembangan.

Disarankan untuk hanya mengubah nomor versi dokumen ketika pembaruan besar dirilis (seperti `v1` , `v2` ) untuk menghindari terlalu banyak nomor versi yang menyebabkan kekacauan pada halaman yang diindeks oleh mesin pencari.

## Gunakan `v` File Kosong Untuk Membagi Indeks File Dari Proyek Yang Berbeda

Pada proyek demo, selain `en/demo2/v` , Anda juga dapat melihat ada `v` file kosong di direktori `en/blog` dan `en/demo1` .

Angka `v` yang kosong tidak akan ditampilkan di garis besar bilah sisi, tetapi selama ada file `v` , indeks independen akan dibuat untuk file di direktori dan subdirektori.

Dengan memisahkan indeks proyek yang berbeda, Anda dapat menghindari akses lambat yang disebabkan oleh memuat indeks semua file di seluruh situs sekaligus.

Misalnya, file indeks yang sesuai dengan `blog` di proyek demo adalah : [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json)