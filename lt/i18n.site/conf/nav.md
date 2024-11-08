# Individualizuota Navigacija

Paimkime demonstracinę svetainę [i18n-demo.github.io](//i18n-demo.github.io) kad paaiškintume, kaip tinkinti naršymą.

![](https://p.3ti.site/1731036697.avif)

Failai, atitinkantys sunumeruotas sritis aukščiau esančiame paveikslėlyje, yra tokie:

1. Liko [`.i18n/htm/t1.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t1.pug)
2. Teisingai [`.i18n/htm/t2.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t2.pug)

[`pug`](https://pugjs.org) yra šablono kalba, kuri generuoja `HTML` .

[➔ Spustelėkite čia, kad išmoktumėte gramatiką pug](https://pugjs.org)

`${I18N.sponsor}` formato eilutė faile naudojama internacionalizavimui, o jos turinys bus pakeistas atitinkamu [i18n.yml](https://github.com/i18n-site/demo.i18n.site/blob/main/en/i18n.yml) šaltinio kalbos kataloge.

**Nerašykite `css` ir `js` į `pug`** , kitaip bus klaida.

Stiliai įrašomi į `css` , o sąveika pasiekiama kuriant žiniatinklio komponentus.

Čia failas, atitinkantis naršymo juostos stilių [i18n/htm/topbar.css](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/topbar.css) yra :