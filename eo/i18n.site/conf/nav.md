# Agordita Navigado

Ni prenu la [i18n-demo.github.io](//i18n-demo.github.io) retejon kiel ekzemplon por klarigi kiel personecigi navigadon.

![](https://p.3ti.site/1731036697.avif)

La dosieroj respondaj al la numeritaj areoj en la supra figuro estas kiel sekvas:

1. Maldekstre [`.i18n/htm/t1.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t1.pug)
2. Ĝuste [`.i18n/htm/t2.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t2.pug)

[`pug`](https://pugjs.org) estas ŝablono lingvo kiu generas `HTML` 's.

[➔ Klaku ĉi tie por lerni la gramatikon de pug](https://pugjs.org)

La formatĉeno `${I18N.sponsor}` estas uzata en la dosiero por efektivigi internaciigon, kaj ĝia enhavo estos anstataŭigita per la responda [i18n.yml](https://github.com/i18n-site/demo.i18n.site/blob/main/en/i18n.yml) en la fontlingva dosierujo.

**Ne skribu `css` kaj `js` en `pug`** , alie estos eraro.

Stiloj estas skribitaj en `css` , kaj interago estas atingita kreante retajn komponantojn.

Ĉi tie, la dosiero responda al la stilo de la navigado estas : [i18n/htm/topbar.css](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/topbar.css)