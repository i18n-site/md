# Produktfunksjoner

## `i18`-oversettelser integrert

Programmet har innebygd `i18`-oversettelse; se [➔ `i18`-dokument](/i18) for spesifikk bruk.

## Tilpasser nettleserspråk automatisk

Nettstedets standardspråk vil automatisk tilpasses nettleserens språk.

Etter at brukeren manuelt bytter språk, vil brukerens valg bli husket.

Kode: [github.com/i18n-site/18x/src/lang.coffee](https://github.com/i18n-site/18x/blob/main/src/lang.coffee).

## Mobiltilpasning

En perfekt leseopplevelse på mobiltelefoner.

<img src="//p.3ti.site/1721379497.avif" width="350px">

## <a rel=id href="#ha" id="ha"></a> Front-end høy tilgjengelighet

`i18n.site` publiserer som standard nettstedets innhold til `npmjs.com`, ved hjelp av [jsdelivr.com](//jsdelivr.com), [unpkg.com](//unpkg.com) og andre `CDN` for å laste innhold fra `npm`.

På dette grunnlaget er det lagt til speilkilder for fastlands-Kina, slik at kinesiske brukere kan ha stabil tilgang, og dermed oppnås **høy front-end-tilgjengelighet**.

Prinsippet er: Bruk [`service worker`](https://developer.mozilla.org/docs/Web/API/Service_Worker_API) til å fange opp forespørsler, og ved mislykkede forespørsler prøve på nytt på andre `CDN`, og adaptivt bruke det raskeste responsstedet som standard lastekilde.

Kode: [github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker).

## Enkeltsideapplikasjon, rask lasting

Nettstedet bruker en enkeltsideapplikasjonsarkitektur, som laster sider uten å oppdatere og er ekstremt rask.

## Optimert for leseopplevelse

### Brukeren er fornøyd med stilen

> Den enkle skjønnheten er perfekt reflektert i designet av denne nettsiden.
> Den unngår unødvendige dekorer og presenterer innholdet i sin reneste form.
> Lik et vakkert dikt, kort men rørende.

<p style="text-align:right">── I18N.SITE-forfatter</p>

[➔ Klikk her for å se en oversikt over stiler](/i18n.site/md/styl).

### Last inn nettfonter, støtter kinesisk

Nettsiden bruker som standard [Alimama dual-axis variable rounded fonts](https://www.iconfont.cn/fonts/detail?cnid=pOvFIr086ADR), [MiSans](https://hyperos.mi.com/font/zh/download/) og andre nettfonter for å gi en ensartet leseopplevelse for brukere på forskjellige plattformer.

Samtidig, for å forbedre lastingstiden, er skrifttypene delt opp basert på ordfrekvens.

Kode: [github.com/i18n-site/font](https://github.com/i18n-site/font).

### Toppnavigasjon skjules automatisk

Når du ruller ned, skjules toppnavigasjonen automatisk.

Når du ruller opp, vises den skjulte navigasjonen igjen.

Når musen er i ro, vil den fade ut.

I øvre høyre hjørne av navigasjonsfeltet er det en fullskjermknapp som gir en oppslukende leseopplevelse av dokumenter.

### Synkronisert fremheving av gjeldende kapittel i innholdsoversikten

Når du ruller til høyre i innholdet, vil innholdsoversikten til venstre samtidig fremheve det kapittelet du leser.

## Kule detaljer

### Museffekter

Hold musen over knappen på høyre side av toppnavigasjonen for å se kule effekter.

### Liten `404`-spøkelse

`404`-siden har en søt liten flytende spøkelse, hvis øyne følger musen [➔ Klikk her for å se](/404)

## Kode er åpen kildekode

[Koden er åpen kildekode](/i18n.site/src). Hvis du er interessert i å bidra til utviklingen, er du velkommen til å introdusere deg selv på [e-postlisten](//groups.google.com/u/2/g/i18n-site).

Flere små, men viktige krav som ikke er presserende. Utviklingsteamet vil tildele oppgaver basert på din tekniske ferdigheter, og forbedre utviklingsdokumentasjonen samtidig som kravene blir tildelt.