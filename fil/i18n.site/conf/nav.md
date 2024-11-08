# Customized Nabigasyon

Kunin natin ang demo site [i18n-demo.github.io](//i18n-demo.github.io) bilang isang halimbawa para ipaliwanag kung paano i-customize ang nabigasyon.

![](https://p.3ti.site/1731036697.avif)

Ang mga file na tumutugma sa mga may bilang na lugar sa figure sa itaas ay ang mga sumusunod:

1. Kaliwa [`.i18n/htm/t1.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t1.pug)
2. Tama [`.i18n/htm/t2.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t2.pug)

[`pug`](https://pugjs.org) ay isang template na wika na bumubuo ng `HTML` 's.

[➔ Mag-click dito para matutunan ang grammar ng pug](https://pugjs.org)

Ang format na string `${I18N.sponsor}` ay ginagamit sa file upang ipatupad ang internasyonalisasyon, at ang nilalaman nito ay papalitan ng kaukulang teksto sa [i18n.yml](https://github.com/i18n-site/demo.i18n.site/blob/main/en/i18n.yml)

**Huwag isulat `css` at `js` sa `pug`** , kung hindi, magkakaroon ng error.

Ang mga istilo ay isinusulat sa `css` , at ang pakikipag-ugnayan ay nakakamit sa pamamagitan ng paglikha ng mga bahagi ng web.

Dito, ang file na naaayon sa estilo ng navigation [i18n/htm/topbar.css](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/topbar.css) ay :