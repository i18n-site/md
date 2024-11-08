# Pasgemaakte Navigasie

Kom ons neem die demo-werf as 'n voorbeeld om te verduidelik hoe om navigasie aan te pas [i18n-demo.github.io](//i18n-demo.github.io)

![](https://p.3ti.site/1731036697.avif)

Die lêers wat ooreenstem met die genommerde areas in die bostaande figuur is soos volg:

1. Links [`.i18n/htm/t1.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t1.pug)
2. Regs [`.i18n/htm/t2.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t2.pug)

[`pug`](https://pugjs.org) is 'n sjabloontaal wat `HTML` genereer.

[➔ Klik hier om die grammatika van pug](https://pugjs.org)

Die formaatstring `${I18N.sponsor}` word in die lêer gebruik om internasionalisering te implementeer, en die inhoud daarvan sal vervang word met die ooreenstemmende teks in die [i18n.yml](https://github.com/i18n-site/demo.i18n.site/blob/main/en/i18n.yml) .

**Moenie `css` en `js` in `pug` skryf nie** , anders sal daar 'n fout wees.

Style word in `css` geskryf, en interaksie word verkry deur webkomponente te skep.

Hier is die lêer wat ooreenstem met die styl van die [i18n/htm/topbar.css](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/topbar.css) :