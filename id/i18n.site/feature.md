# Fitur Produk

## Terintegrasi `I18` Terjemahan

Program ini memiliki terjemahan `i18` bawaan, silakan lihat [➔ `i18`](/i18) untuk penggunaan spesifik.

## Secara Otomatis Mencocokkan Bahasa Browser

Bahasa default website akan otomatis sesuai dengan bahasa browser.

Setelah pengguna mengganti bahasa secara manual, pilihan pengguna akan diingat.

Kode terkait : [github.com/i18n-site/18x/src/lang.coffee](https://github.com/i18n-site/18x/blob/main/src/lang.coffee) .

## Adaptasi Terminal Seluler

Ada juga pengalaman membaca yang sempurna di ponsel.

<img src="//p.3ti.site/1721379497.avif" width="350px">

## <a rel=id href="#ha" id="ha"></a> Ketersediaan tinggi di bagian depan

`i18n.site` Secara default, konten situs akan dipublikasikan ke `npmjs.com` , dengan bantuan [jsdelivr.com](//jsdelivr.com) , [unpkg.com](//unpkg.com) dan beberapa `CDN` konten dimuat di `npm` .

Atas dasar ini, sumber cermin dari Tiongkok daratan ditambahkan untuk memungkinkan pengguna Tiongkok memiliki akses yang stabil dan mencapai **ketersediaan front-end yang tinggi** .

Prinsipnya adalah: mencegat permintaan dengan bantuan [`service worker`](https://developer.mozilla.org/docs/Web/API/Service_Worker_API) , jika permintaan gagal, coba lagi di `CDN` lainnya, dan secara adaptif aktifkan stasiun asal yang merespons tercepat sebagai sumber pemuatan default.

Kode terkait : [github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker) .

## Aplikasi Satu Halaman, Memuat Sangat Cepat

Situs web ini mengadopsi arsitektur aplikasi satu halaman, tanpa penyegaran saat berpindah halaman dan pemuatan yang sangat cepat.

## Dioptimalkan Untuk Pengalaman Membaca

### Gaya Yang Dirancang Dengan Baik

> Keindahan kesederhanaan diinterpretasikan secara sempurna dalam desain web website ini.
> Ini meninggalkan dekorasi yang tidak perlu dan menyajikan konten dalam bentuknya yang paling murni.
> Ibarat puisi yang indah, meski pendek namun menyentuh hati orang.

<p style="text-align:right">── I18N.SITE Penulis</p>

[➔ Klik di sini untuk melihat daftar gaya](/i18n.site/md/styl) .

### Muat Font Online, Dukung Bahasa Mandarin

Secara default, [font persegi panjang variabel sumbu ganda Alimama](https://www.iconfont.cn/fonts/detail?cnid=pOvFIr086ADR) , [MiSans](https://hyperos.mi.com/font/zh/download/) dan font online lainnya diaktifkan di halaman web untuk menyatukan pengalaman membaca pengguna di berbagai platform.

Pada saat yang sama, untuk meningkatkan kecepatan pemuatan, font dipotong menurut statistik frekuensi kata.

Kode terkait : [github.com/i18n-site/font](https://github.com/i18n-site/font) .

### Navigasi Atas Otomatis Disembunyikan

Gulir ke bawah dan navigasi atas akan otomatis bersembunyi.

Gulir ke atas dan navigasi tersembunyi akan muncul lagi.

Ini akan memudar ketika mouse tidak bergerak.

Terdapat tombol layar penuh di sudut kanan atas bilah navigasi untuk menciptakan pengalaman membaca dokumen yang mendalam.

### Garis Besar Yang Disinkronkan Menyoroti Bab Saat Ini

Saat menggulir konten di sebelah kanan, garis besar di sebelah kiri akan menyorot bab yang sedang dibaca secara bersamaan.

## Detail Keren

### Efek Tikus

Arahkan mouse Anda ke tombol di sisi kanan navigasi atas untuk melihat efek khusus yang keren.

### `404` Hantu Kecil

`404` Ada hantu kecil mengambang yang lucu di halaman, matanya akan bergerak mengikuti mouse, [➔ Klik di sini untuk melihatnya](/404) ,

## Kode Sumber Terbuka

[Kodenya open source](/i18n.site/src) . Jika Anda tertarik untuk berpartisipasi dalam pengembangan, silakan perkenalkan diri Anda ke [milis](//groups.google.com/u/2/g/i18n-site) .

Ada banyak persyaratan kecil yang penting tetapi tidak mendesak. Tim pengembangan akan memberikan tugas latihan sesuai dengan teknologi yang Anda kuasai, dan menyempurnakan dokumen pengembangan sambil menetapkan persyaratan.

