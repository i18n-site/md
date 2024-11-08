# Pandhu Arah Sing Disesuaikan

Ayo njupuk situs [i18n-demo.github.io](//i18n-demo.github.io) minangka conto kanggo nerangake carane ngatur navigasi.

![](https://p.3ti.site/1731036697.avif)

File-file sing cocog karo area nomer ing gambar ing ndhuwur yaiku:

1. Ngiwa [`.i18n/htm/t1.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t1.pug)
2. Kanan [`.i18n/htm/t2.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t2.pug)

[`pug`](https://pugjs.org) minangka basa cithakan sing ngasilake `HTML` .

[➔ Klik ing kene kanggo sinau tata basa pug](https://pugjs.org)

String format `${I18N.sponsor}` digunakake ing file kanggo ngleksanakake internasionalisasi, lan isine bakal diganti karo teks sing [i18n.yml](https://github.com/i18n-site/demo.i18n.site/blob/main/en/i18n.yml) ing direktori basa sumber.

**Aja nulis `css` lan `js` ing `pug`** , yen ora bakal ana kesalahan.

Gaya ditulis dadi `css` , lan interaksi digayuh kanthi nggawe komponen web.

Ing kene, file sing cocog karo gaya garis navigasi [i18n/htm/topbar.css](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/topbar.css) :