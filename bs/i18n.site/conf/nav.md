# Prilagođena Navigacija

Uzmimo demo stranicu kao primjer da objasnimo kako prilagoditi navigaciju [i18n-demo.github.io](//i18n-demo.github.io)

![](https://p.3ti.site/1731036697.avif)

Fajlovi koji odgovaraju numerisanim područjima na gornjoj slici su sljedeći:

1. Lijevo [`.i18n/htm/t1.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t1.pug)
2. Desno [`.i18n/htm/t2.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t2.pug)

[`pug`](https://pugjs.org) je jezik šablona koji generiše `HTML` .

[➔ Kliknite ovdje da naučite gramatiku pug](https://pugjs.org)

Niz formata `${I18N.sponsor}` se koristi u datoteci za implementaciju internacionalizacije, a njen sadržaj će biti zamijenjen [i18n.yml](https://github.com/i18n-site/demo.i18n.site/blob/main/en/i18n.yml) tekstom u direktoriju izvornog jezika.

**Nemojte pisati `css` i `js` u `pug`** , inače će doći do greške.

Stilovi su upisani u `css` , a interakcija se postiže kreiranjem web komponenti.

Ovdje je datoteka koja odgovara stilu navigacijske [i18n/htm/topbar.css](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/topbar.css) :