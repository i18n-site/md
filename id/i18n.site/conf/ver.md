# Versi Proyek

Ambil proyek demo sebagai contoh:

`en/demo2/v` adalah nomor versi proyek saat ini, yang akan ditampilkan di sebelah kanan nama proyek pada kerangka sidebar.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

Ini `en/` adalah kode bahasa yang sesuai dengan #bahasa sumber terjemahan `.i18n/conf.yml` .

Jika bahasa sumber Anda bukan bahasa Inggris, maka file `v` harus ditempatkan di direktori proyek bahasa sumber Anda. 

Kemampuan untuk menelusuri versi historis dokumen sedang dalam pengembangan.

Disarankan untuk hanya mengubah nomor versi dokumen saat merilis pembaruan besar (seperti `v1` , `v2` ) untuk menghindari kekacauan halaman yang diindeks oleh mesin pencari karena terlalu banyak nomor versi.

## Gunakan File `v` Yang Kosong Untuk Membagi Indeks File Untuk Proyek Yang Berbeda

Dalam proyek demo, selain `en/demo2/v` , Anda juga dapat melihat bahwa isi direktori `en/blog` dan `en/demo1` kosong `v` files.

Kosong `v` tidak akan ditampilkan di garis besar sidebar, tetapi selama file `v` ada, indeks independen akan dibuat untuk file di direktori dan subdirektori.

Dengan memisahkan indeks proyek yang berbeda, Anda dapat menghindari akses lambat yang disebabkan oleh memuat indeks semua file di seluruh situs sekaligus.

Misalnya, dalam proyek demo `blog` file indeks yang sesuai adalah : [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json)

