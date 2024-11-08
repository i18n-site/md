# Sérsniðin Leiðsögn

Tökum [i18n-demo.github.io](//i18n-demo.github.io) sem dæmi til að útskýra hvernig á að sérsníða leiðsögn.

![](https://p.3ti.site/1731036697.avif)

Skrárnar sem samsvara númeruðu svæðum á myndinni hér að ofan eru sem hér segir:

1. Vinstri [`.i18n/htm/t1.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t1.pug)
2. Rétt [`.i18n/htm/t2.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t2.pug)

[`pug`](https://pugjs.org) er sniðmát tungumál sem býr til `HTML` .

[➔ Smelltu hér til að læra málfræði pug](https://pugjs.org)

Sniðstrengurinn `${I18N.sponsor}` er notaður í skránni til að innleiða alþjóðavæðingu, og innihald hennar verður skipt út fyrir samsvarandi texta í frummálsskránni [i18n.yml](https://github.com/i18n-site/demo.i18n.site/blob/main/en/i18n.yml)

**Ekki skrifa `css` og `js` í `pug`** , annars verður villa.

Stílar eru skrifaðir í `css` , og víxlverkun er náð með því að búa til vefhluta.

Hér er skráin sem samsvarar stíl [i18n/htm/topbar.css](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/topbar.css) :