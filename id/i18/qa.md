# Pertanyaan Umum

## Menambah Atau Menghapus Baris Terjemahan, Sehingga Mengakibatkan Kebingungan Dalam Terjemahan

> [!WARN]
> Ingat, **jumlah baris pada terjemahan harus sesuai dengan baris pada teks aslinya** .
> Artinya, ketika menyesuaikan terjemahan secara manual, **jangan menambah atau menghapus baris terjemahan** , jika tidak, hubungan pemetaan antara terjemahan dan teks asli akan tidak teratur.

Jika Anda secara tidak sengaja menambah atau menghapus sebuah baris sehingga menyebabkan kebingungan, harap pulihkan terjemahan ke versi sebelum modifikasi, jalankan `i18` terjemahan lagi, dan simpan kembali pemetaan yang benar.

Pemetaan antara terjemahan dan teks asli terikat pada token. Buat token baru di [i18n.site/token](//i18n.site/token) hapus `.i18h/hash` , dan terjemahkan lagi untuk menghapus pemetaan yang membingungkan (tetapi ini akan menyebabkan semua penyesuaian manual pada terjemahan hilang).

## `YAML` : Bagaimana Menghindari Tautan `HTML` Diubah Menjadi `Markdown`

Nilai `YAML` diperlakukan sebagai `MarkDown` untuk terjemahan.

Terkadang konversi dari `HTML` → `MarkDown` tidak sesuai dengan keinginan kita, misalnya `<a href="/">Home</a>` diubah menjadi `[Home](/)` .

Menambahkan atribut apa pun selain `href` ke tag `a` , seperti `<a class="A" href="/">Home</a>` , dapat menghindari konversi ini.

## `./i18n/hash` Konflik File Di Bawah Ini

Hapus file konflik dan jalankan kembali `i18` terjemahan.