# Skræddersyet Navigation

Lad os tage [i18n-demo.github.io](//i18n-demo.github.io) som et eksempel for at forklare, hvordan man tilpasser navigation.

![](https://p.3ti.site/1731036697.avif)

Filerne, der svarer til de nummererede områder i ovenstående figur, er som følger:

1. Venstre [`.i18n/htm/t1.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t1.pug)
2. Højre [`.i18n/htm/t2.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t2.pug)

[`pug`](https://pugjs.org) er et skabelonsprog, der genererer `HTML` .

[➔ Klik her for at lære grammatikken i pug](https://pugjs.org)

Formatstrengen `${I18N.sponsor}` bruges i filen til at implementere internationalisering, og dens indhold vil blive erstattet med den tilsvarende [i18n.yml](https://github.com/i18n-site/demo.i18n.site/blob/main/en/i18n.yml) i kildesprogsbiblioteket.

**Skriv ikke `css` og `js` i `pug`** , ellers vil der være en fejl.

Styles skrives til `css` , og interaktion opnås ved at skabe webkomponenter.

Her er filen, der svarer til navigationslinjens stil : [i18n/htm/topbar.css](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/topbar.css)