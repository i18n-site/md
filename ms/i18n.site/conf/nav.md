# Navigasi Tersuai

Mari kita ambil tapak [i18n-demo.github.io](//i18n-demo.github.io) sebagai contoh untuk menerangkan cara menyesuaikan navigasi.

![](https://p.3ti.site/1731036697.avif)

Fail yang sepadan dengan kawasan bernombor dalam rajah di atas adalah seperti berikut:

1. Kiri [`.i18n/htm/t1.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t1.pug)
2. Betul [`.i18n/htm/t2.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t2.pug)

[`pug`](https://pugjs.org) ialah bahasa templat yang menjana `HTML` 's.

[➔ Klik di sini untuk mempelajari tatabahasa pug](https://pugjs.org)

Rentetan format `${I18N.sponsor}` digunakan dalam fail untuk melaksanakan pengantarabangsaan, dan kandungannya akan digantikan dengan teks yang [i18n.yml](https://github.com/i18n-site/demo.i18n.site/blob/main/en/i18n.yml) dalam direktori bahasa sumber.

**Jangan tulis `css` dan `js` dalam `pug`** , jika tidak akan berlaku ralat.

Gaya ditulis ke dalam `css` , dan interaksi dicapai dengan mencipta komponen web.

Di sini, fail yang sepadan dengan gaya bar navigasi [i18n/htm/topbar.css](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/topbar.css) :