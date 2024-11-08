# Napigasi Ngaropéa

Hayu urang nyandak situs [i18n-demo.github.io](//i18n-demo.github.io) salaku conto pikeun ngajelaskeun kumaha carana ngaluyukeun navigasi.

![](https://p.3ti.site/1731036697.avif)

Koropak anu cocog sareng daérah wilangan dina gambar di luhur nyaéta kieu:

1. Kénca [`.i18n/htm/t1.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t1.pug)
2. Katuhu [`.i18n/htm/t2.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t2.pug)

[`pug`](https://pugjs.org) nyaéta basa citakan anu ngahasilkeun `HTML` 's.

[➔ Klik di dieu pikeun diajar tata basa pug](https://pugjs.org)

Format string `${I18N.sponsor}` dipaké dina file pikeun nerapkeun internasionalisasi, sarta eusina bakal diganti ku téks [i18n.yml](https://github.com/i18n-site/demo.i18n.site/blob/main/en/i18n.yml) dina diréktori basa sumber.

**Entong nyerat `css` sareng `js` dina `pug`** , upami henteu bakal aya kasalahan.

Gaya ditulis kana `css` , sareng interaksi dihontal ku nyiptakeun komponén wéb.

Di dieu, file anu cocog sareng gaya bar navigasi [i18n/htm/topbar.css](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/topbar.css) :