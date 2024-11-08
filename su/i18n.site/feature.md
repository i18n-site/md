# Fitur Produk

## `i18` Tarjamahan Terpadu

Program ieu ngagaduhan `i18` tarjamahan, mangga tingali [➔ `i18` dokumén](/i18) pikeun panggunaan khusus.

## Sacara Otomatis Cocog Basa Browser

Basa standar situs wéb bakal otomatis cocog sareng basa browser.

Saatos pangguna sacara manual ngalihkeun basa, pilihan pangguna bakal diinget.

Kodeu patali : [github.com/i18n-site/18x/src/lang.coffee](https://github.com/i18n-site/18x/blob/main/src/lang.coffee)

## Adaptasi Terminal Mobile

Aya ogé pangalaman maca anu sampurna dina telepon sélulér.

<img src="//p.3ti.site/1721379497.avif" width="350px">

## <a rel=id href="#ha" id="ha"></a> Hareup-tungtung kasadiaan tinggi

`i18n.site` bakal nyebarkeun eusi situs ka `npmjs.com` sacara standar, kalayan bantuan [jsdelivr.com](//jsdelivr.com) [unpkg.com](//unpkg.com) sareng `CDN` eusi anu dimuat dina `npm` .

Dina dasar ieu, sumber eunteung ti daratan Cina ditambahkeun pikeun ngidinan pamaké Cina boga aksés stabil sarta ngahontal **kasadiaan hareup-tungtung tinggi** .

Prinsipna nyaéta: intercept requests kalawan [`service worker`](https://developer.mozilla.org/docs/Web/API/Service_Worker_API) , coba deui requests gagal dina `CDN` séjén , sarta adaptively ngaktipkeun situs asal panggancangna-ngarespon salaku sumber loading standar.

Kodeu patali : [github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker)

## Aplikasi Halaman Tunggal, Loading Pisan Gancang

Situs wéb nganggo arsitektur aplikasi halaman tunggal, tanpa refresh nalika gentos halaman sareng loading gancang pisan.

## Dioptimalkeun Pikeun Pangalaman Maca

### Gaya Dirancang Ogé

> Kaéndahan kesederhanaan sampurna diinterpretasi dina desain wéb wéb ieu.
> Éta ngantunkeun hiasan anu luar biasa sareng nampilkeun eusi dina bentuk anu paling murni.
> Jiga sajak anu éndah, sanajan pondok, matak nyentug haté jalma.

<p style="text-align:right">── I18N.SITE</p>

[➔ Klik di dieu pikeun ningali daptar gaya](/i18n.site/md/styl) .

### `RSS`

![](//p.3ti.site/1725541085.avif)

Gambar di luhur nunjukkeun multi-basa `RSS` nganggo [inoreader.com](//inoreader.com) `i18n.site` .

### Muat Fon Online, Ngadukung Basa Cina

Sacara standar [, Alimama dua-sumbu variabel fon rectangular](https://www.iconfont.cn/fonts/detail?cnid=pOvFIr086ADR) , [MiSans](https://hyperos.mi.com/font/zh/download/) jeung fon online sejenna diaktipkeun dina kaca web pikeun ngahijikeun pangalaman maca pamaké dina platform béda.

Dina waktos anu sami, pikeun ningkatkeun kagancangan ngamuat, fon diiris dumasar kana statistik frékuénsi kecap.

Kodeu patali : [github.com/i18n-site/font](https://github.com/i18n-site/font)

### Napigasi Luhur Otomatis Disumputkeun

Gulung ka handap sareng navigasi luhur bakal otomatis nyumput.

Gulung ka luhur sareng navigasi disumputkeun bakal muncul deui.

Bakal luntur nalika beurit teu gerak.

Aya tombol salayar di pojok katuhu luhur bar navigasi pikeun nyiptakeun pangalaman maca dokumén anu immersive.

### Nyingkronkeun Outline Panyorot Tina Bab Ayeuna

Nalika ngagulung eusi ka katuhu, outline di kénca sakaligus bakal nyorot bab anu ayeuna dibaca.

## Rinci Tiis

### Épék Mouse

Hover mouse anjeun dina tombol di sisi katuhu navigasi luhur pikeun nempo épék husus tiis.

### `404` Hantu Saeutik

Aya jurig ngambang leutik lucu dina kaca `404` , anu panonna bakal gerak jeung mouse, [➔ Klik di dieu pikeun nempo](/404) ,

## Kodeu Open Source

[Kodeu open source](/i18n.site/c/src) [.](//groups.google.com/u/2/g/i18n-site)

Aya loba syarat leutik nu penting tapi teu urgent.