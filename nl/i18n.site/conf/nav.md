# Aangepaste Navigatie

Laten [i18n-demo.github.io](//i18n-demo.github.io) de demosite als voorbeeld nemen om uit te leggen hoe u de navigatie kunt aanpassen.

![](https://p.3ti.site/1731036697.avif)

De bestanden die overeenkomen met de genummerde gebieden in de bovenstaande afbeelding zijn als volgt:

1. Links [`.i18n/htm/t1.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t1.pug)
2. Rechts [`.i18n/htm/t2.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t2.pug)

[`pug`](https://pugjs.org) is een sjabloontaal die `HTML` -en genereert.

[➔ Klik hier om de grammatica van te leren pug](https://pugjs.org)

De formatstring `${I18N.sponsor}` wordt in het bestand gebruikt om internationalisering te implementeren, en de inhoud ervan wordt vervangen door de overeenkomstige tekst in de [i18n.yml](https://github.com/i18n-site/demo.i18n.site/blob/main/en/i18n.yml) .

**Schrijf niet `css` en `js` in `pug`** , anders treedt er een fout op.

Stijlen worden in `css` geschreven en interactie wordt bereikt door webcomponenten te maken.

[i18n/htm/topbar.css](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/topbar.css) is het bestand dat overeenkomt met de stijl van de navigatiebalk :