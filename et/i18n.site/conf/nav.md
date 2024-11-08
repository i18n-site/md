# Kohandatud Navigeerimine

Võtame näitena demo saidi [i18n-demo.github.io](//i18n-demo.github.io) et selgitada, kuidas navigeerimist kohandada.

![](https://p.3ti.site/1731036697.avif)

Ülaloleval joonisel nummerdatud aladele vastavad failid on järgmised:

1. [`.i18n/htm/t1.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t1.pug)
2. Õige [`.i18n/htm/t2.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t2.pug)

[`pug`](https://pugjs.org) on mallikeel, mis genereerib `HTML` -sid.

[➔ Keele grammatika õppimiseks klõpsake siin pug](https://pugjs.org)

Failis kasutatakse rahvusvahelistumise realiseerimiseks vormingustringi `${I18N.sponsor}` ja selle sisu asendatakse [i18n.yml](https://github.com/i18n-site/demo.i18n.site/blob/main/en/i18n.yml) kataloogis vastava tekstiga.

**Ärge kirjutage `css` ja `js` `pug` -sse** , vastasel juhul tekib viga.

Stiilid kirjutatakse `css` -sse ja suhtlus saavutatakse veebikomponentide loomisega.

Siin on navigeerimisriba stiilile vastav fail : [i18n/htm/topbar.css](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/topbar.css)