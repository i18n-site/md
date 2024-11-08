# Oanpaste Navigaasje

Litte wy de demo-side as foarbyld nimme om út te [i18n-demo.github.io](//i18n-demo.github.io) hoe't jo de navigaasje kinne oanpasse.

![](https://p.3ti.site/1731036697.avif)

De bestannen dy't oerienkomme mei de nûmere gebieten yn 'e boppesteande figuer binne as folget:

1. lofts [`.i18n/htm/t1.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t1.pug)
2. rjochts [`.i18n/htm/t2.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t2.pug)

[`pug`](https://pugjs.org) is in sjabloantaal dy't `HTML` 's genereart.

[➔ Klik hjir om de grammatika fan te learen pug](https://pugjs.org)

De opmaakstring `${I18N.sponsor}` wurdt brûkt yn it bestân om ynternasjonalisaasje út te fieren, en de ynhâld dêrfan wurdt ferfongen troch de korrespondearjende tekst yn 'e [i18n.yml](https://github.com/i18n-site/demo.i18n.site/blob/main/en/i18n.yml) .

**Skriuw gjin `css` en `js` yn `pug`** , oars komt der in flater.

Stilen wurde skreaun yn `css` , en ynteraksje wurdt berikt troch it meitsjen fan webkomponinten.

Hjir is it bestân dat oerienkomt mei de styl fan 'e navigaasjebalke : [i18n/htm/topbar.css](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/topbar.css)