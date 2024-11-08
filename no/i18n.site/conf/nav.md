# Tilpasset Navigasjon

La oss ta [i18n-demo.github.io](//i18n-demo.github.io) som et eksempel for å forklare hvordan du tilpasser navigasjonen.

![](https://p.3ti.site/1731036697.avif)

Filene som tilsvarer de nummererte områdene i figuren ovenfor er som følger:

1. Venstre [`.i18n/htm/t1.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t1.pug)
2. Høyre [`.i18n/htm/t2.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t2.pug)

[`pug`](https://pugjs.org) er et malspråk som genererer `HTML` -er.

[➔ Klikk her for å lære grammatikken til pug](https://pugjs.org)

Formatstrengen `${I18N.sponsor}` brukes i filen for å implementere internasjonalisering, og innholdet vil bli erstattet med den tilsvarende [i18n.yml](https://github.com/i18n-site/demo.i18n.site/blob/main/en/i18n.yml) i kildespråkkatalogen.

**Ikke skriv `css` og `js` i `pug`** , ellers vil det oppstå en feil.

Stiler skrives inn i `css` , og interaksjon oppnås ved å lage webkomponenter.

[i18n/htm/topbar.css](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/topbar.css) er filen som tilsvarer stilen til navigasjonslinjen :