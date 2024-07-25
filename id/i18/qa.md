# Masalah Umum

## Menambah Atau Menghapus Baris Terjemahan, Sehingga Mengakibatkan Kebingungan Dalam Terjemahan

Ingat, **jumlah baris pada terjemahan harus sesuai dengan baris pada teks aslinya** .

Artinya, ketika menyesuaikan terjemahan secara manual, **jangan menambah atau menghapus baris terjemahan** , jika tidak, hubungan pemetaan antara terjemahan dan teks asli akan tidak teratur.

Jika Anda secara tidak sengaja menambah atau menghapus sebuah baris sehingga menyebabkan kebingungan, harap pulihkan terjemahan ke versi sebelum modifikasi, jalankan terjemahan `i18` , dan simpan kembali pemetaan yang benar dalam cache.

Pemetaan antara terjemahan dan teks asli terikat pada token. Buat token baru di [i18n.site/token](//i18n.site/token) , hapus `.i18h/hash` dan terjemahkan lagi untuk menghapus pemetaan yang membingungkan (tetapi ini akan menyebabkan semua penyesuaian manual pada terjemahan hilang).

## `YAML` : Mencegah `HTML` Tautan Dikonversi Menjadi `Markdown`

Nilai `YAML` akan diperlakukan sebagai `MarkDown` untuk terjemahan.

Terkadang konversi `HTML` → `MarkDown` tidak sesuai dengan keinginan kita, misalnya `<a href="/">Home</a>` dikonversi menjadi `[Home](/)` .

Tambahkan atribut apa pun selain `href` ke tag `a` , seperti `<a class="A" href="/">Home</a>` , untuk menghindari konversi ini.

## `./I18n/Hash` File Berikut Ini Konflik

Hapus file konflik dan jalankan kembali `i18`
