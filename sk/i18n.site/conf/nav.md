# Vlastná Navigácia

Vezmime si ukážkovú stránku ako príklad na vysvetlenie [i18n-demo.github.io](//i18n-demo.github.io) ako prispôsobiť navigáciu.

![](https://p.3ti.site/1731036697.avif)

Súbory zodpovedajúce očíslovaným oblastiam na obrázku vyššie sú nasledovné:

1. Vľavo [`.i18n/htm/t1.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t1.pug)
2. Správne [`.i18n/htm/t2.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t2.pug)

[`pug`](https://pugjs.org) je jazyk šablóny, ktorý generuje `HTML` .

[➔ Kliknite sem a naučte sa gramatiku pug](https://pugjs.org)

Formátovací reťazec `${I18N.sponsor}` sa v súbore používa na implementáciu internacionalizácie a jeho obsah bude nahradený [i18n.yml](https://github.com/i18n-site/demo.i18n.site/blob/main/en/i18n.yml) textom v adresári zdrojového jazyka.

**Nepíšte `css` a `js` v `pug`** , inak dôjde k chybe.

Štýly sa zapisujú do `css` a interakcia sa dosiahne vytvorením webových komponentov.

Tu je súbor zodpovedajúci štýlu navigačného panela : [i18n/htm/topbar.css](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/topbar.css)