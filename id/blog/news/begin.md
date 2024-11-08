---

brief: |
  Saat ini, dua alat baris perintah sumber terbuka telah diterapkan: i18 (alat terjemahan baris perintah MarkDown) dan i18n.site (pembuat situs dokumen statis multi-bahasa)

---


# i18n.site · Alat Penerjemahan Penurunan Harga Dan Pembuatan Situs Web Kini Online!

Setelah lebih dari setengah tahun pengembangan, [https://i18n.site](//i18n.site) sudah online.

Saat ini, dua alat baris perintah sumber terbuka diimplementasikan:

* `i18` : MarkDown Alat terjemahan baris perintah
* `i18n.site` : Generator situs dokumen statis multi-bahasa, **dioptimalkan untuk pengalaman membaca**

Terjemahan dapat mempertahankan format `Markdown` dengan sempurna. Dapat mengidentifikasi modifikasi file dan hanya menerjemahkan file dengan perubahan.

Terjemahan dapat diedit; jika Anda memodifikasi teks asli dan menerjemahkannya lagi dengan mesin, modifikasi manual pada terjemahan tidak akan ditimpa (jika paragraf teks asli ini belum diubah).

[➤ Klik di sini untuk mengotorisasi dan secara otomatis i18n.site Perpustakaan github](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) dan **menerima bonus $50** .

## Asal

Di era Internet, seluruh dunia adalah pasar, dan multibahasa serta lokalisasi adalah keterampilan dasar.

Alat manajemen terjemahan yang ada terlalu berat. Bagi programmer yang mengandalkan manajemen versi `git` , mereka masih lebih memilih baris perintah.

Jadi, saya mengembangkan alat terjemahan `i18` dan membangun generator situs statis multi-bahasa `i18n.site` berdasarkan alat terjemahan.

![](https://p.3ti.site/1723777556.avif)

Ini baru permulaan, masih banyak yang harus dilakukan.

Misalnya, dengan menghubungkan situs dokumen statis dengan media sosial dan langganan email, pengguna dapat dihubungi tepat waktu ketika pembaruan dirilis.

Misalnya, forum multi-bahasa dan sistem perintah kerja dapat disematkan di halaman web mana pun, memungkinkan pengguna berkomunikasi tanpa hambatan.

## Sumber Terbuka

[Kode front-end, back-end, dan baris perintah semuanya open source](https://i18n.site/i18n.site/c/src) (model terjemahannya belum open source).

Tumpukan teknologi yang digunakan adalah sebagai berikut:

Bagian depan [svelte](https://svelte.dev) , [stylus](https://stylus-lang.com) , [pug](https://github.com/pugjs/pug) , [vite](https://github.com/vitejs/vite)

Baris perintah dan backend dikembangkan berdasarkan karat.

bagian belakang [axum](https://github.com/tokio-rs/axum) [tower-http](https://github.com/tower-rs/tower-http/releases) .

Baris perintah [tertanam js Mesin boa_engine](https://docs.rs/boa_engine) , [basis data tertanam fjall](https://github.com/fjall-rs/fjall) .

pelayan VPS [contabo](https://my.contabo.com)

basis data [kvrocks](https://kvrocks.apache.org) [mariadb](https://mariadb.org) .

Kirim email ke buatan sendiri SMTP [chasquid](https://github.com/albertito/chasquid) .

## Hubungi Kami

Ketika produk baru diluncurkan, permasalahan tidak bisa dihindari.

Jangan ragu untuk menghubungi kami melalui Forum Google : [groups.google.com/u/2/g/i18n-site](https://groups.google.com/u/2/g/i18n-site)