# Versi Projek

Ambil projek demo sebagai contoh:

`en/demo2/v` ialah nombor versi semasa projek, yang akan dipaparkan di sebelah kanan nama projek dalam garis besar bar sisi.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

Di sini `en/` ialah kod bahasa yang sepadan dengan bahasa sumber terjemahan yang `.i18n/conf.yml` .

Jika bahasa sumber anda bukan bahasa Inggeris, maka fail `v` harus diletakkan dalam direktori projek bahasa sumber anda. 

Keupayaan untuk menyemak imbas versi sejarah dokumen sedang dibangunkan.

Adalah disyorkan untuk mengubah suai nombor versi dokumen sahaja apabila mengeluarkan kemas kini utama (seperti `v1` , `v2` ) untuk mengelakkan halaman yang diindeks oleh enjin carian bersepah kerana terlalu banyak nombor versi.

## Gunakan `v` Kosong Untuk Memisahkan Indeks Fail Untuk Projek Yang Berbeza

Dalam projek demo, sebagai tambahan kepada `en/demo2/v` , anda juga boleh melihat bahawa kandungan direktori `en/blog` dan `en/demo1` adalah kosong `v` files.

Kosong `v` tidak akan dipaparkan dalam garis besar bar sisi, tetapi selagi fail `v` wujud, indeks bebas akan dijana untuk fail dalam direktori dan subdirektori.

Dengan membahagikan indeks projek yang berbeza, anda boleh mengelakkan akses perlahan yang disebabkan oleh memuatkan indeks semua fail di seluruh tapak sekaligus.

Sebagai : , dalam projek [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json) `blog`

