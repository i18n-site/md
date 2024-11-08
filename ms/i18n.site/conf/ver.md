# Versi Projek

Ambil projek demo sebagai contoh:

`en/demo2/v` ialah nombor versi semasa projek, yang akan dipaparkan di sebelah kanan nama projek dalam garis besar bar sisi.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

Di sini `en/` ialah kod bahasa yang sepadan dengan bahasa sumber terjemahan yang dikonfigurasikan oleh `.i18n/conf.yml` .

Jika bahasa sumber anda bukan bahasa Inggeris, maka fail `v` harus diletakkan dalam direktori projek bahasa sumber anda.

Keupayaan untuk menyemak imbas versi sejarah dokumen sedang dibangunkan.

Adalah disyorkan untuk hanya mengubah suai nombor versi dokumen apabila kemas kini utama dikeluarkan (seperti `v1` , `v2` ) untuk mengelakkan terlalu banyak nombor versi menyebabkan kekacauan dalam halaman yang diindeks oleh enjin carian.

## Gunakan Fail `v` Kosong Untuk Memisahkan Indeks Fail Bagi Projek Yang Berbeza

Dalam projek demo, sebagai tambahan kepada `en/demo2/v` , anda juga boleh melihat bahawa terdapat `v` fail kosong dalam direktori `en/blog` dan `en/demo1` .

`v` kosong tidak akan dipaparkan dalam garis besar bar sisi, tetapi selagi terdapat `v` fail, indeks bebas akan dijana untuk fail dalam direktori dan subdirektori.

Dengan membahagikan indeks projek yang berbeza, anda boleh mengelakkan akses perlahan yang disebabkan oleh memuatkan indeks semua fail di seluruh tapak sekaligus.

Sebagai contoh, fail indeks yang sepadan dengan `blog` dalam projek demo ialah [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json) :