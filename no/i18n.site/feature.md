# Produktfunksjoner

## Integrasjon av `i18`-oversettelser

Programmet har innebygd `i18`-oversettelse; se [➔ `i18`-dokument](/i18) for spesifikke bruksområder.

## Automatisk tilpasning til nettleserspråk

Nettstedets standardspråk vil automatisk matches nettleserens språk.

Etter at brukeren manuelt bytter språk, vil brukerens valg bli husket.

Relatert kode: [github.com/i18n-site/18x/src/lang.coffee](https://github.com/i18n-site/18x/blob/main/src/lang.coffee).

## Mobiltilpasning

En optimal leseopplevelse også på mobil enheter.

<img src="//p.3ti.site/1721379497.avif" width="350px">

## <a rel=id href="#ha" id="ha"></a> Front-end tilgjengelighet

`i18n.site` publiserer som standard innholdet til `npmjs.com`, ved hjelp av [jsdelivr.com](//jsdelivr.com), [unpkg.com](//unpkg.com) og andre `CDN`-tjenester for å laste innhold fra `npm`.

På denne bakgrunn er det lagt til speilkilder for fastlands-Kina, noe som gir kinesiske brukere stabil tilgang og oppnår **høy front-end-tilgjengelighet**.

Prinsippet er: Bruk av [`service worker`](https://developer.mozilla.org/docs/Web/API/Service_Worker_API) for å fange opp forespørsler, og ved mislykkede forespørsler prøve på nytt på andre `CDN`, og adaptivt bruke den raskeste kilden som standard lastingskilde.

Relatert kode: [github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker).

## Enkeltsideapplikasjon med rask lasting

Nettstedet bruker en enkeltsideapplikasjonsarkitektur, som gir rask sidevisning uten behov for oppdatering.

## Optimert for leseopplevelse

### Enkel og elegant design

> Den rene skjønnheten er perfekt reflektert i designet av denne nettsiden.
> Den unngår overflødig pynt og presenterer innholdet i sin reneste form.
> Som et kort, men rørende dikt, berører den menneskers hjerter.

<p style="text-align:right">── I18N.SITE-forfatter</p>

[➔ Klikk her for å se en oversikt over stiler](/i18n.site/md/styl).

### 多语言 `RSS`-abonnement

![](//p.3ti.site/1725541085.avif)

Bilde ovenfor viser flerspråklig `RSS` fra `i18n.site`, abonnert via [inoreader.com](//inoreader.com).

### Lasting av nettfonter, støtte for kinesisk

Nettsiden bruker som standard [Alimama dual-axis variable rektangulære](https://www.iconfont.cn/fonts/detail?cnid=pOvFIr086ADR) fonter, [MiSans](https://hyperos.mi.com/font/zh/download/) og andre nettfonter for å gi en enhetlig leseopplevelse på tvers av ulike plattformer.

Samtidig er fonter delt opp basert på ordfrekvens for å forbedre lastingstiden.

Relatert kode: [github.com/i18n-site/font](https://github.com/i18n-site/font).

### Automatisk skjult toppnavigasjon

Når du ruller ned, skjules toppnavigasjonen automatisk.

Når du ruller opp, vises den skjulte navigasjonen igjen.

Når musen er inaktiv, vil navigasjonen tone ut.

I øvre høyre hjørne av navigasjonsfeltet er det en fullskjermknapp som gir en mer oppslukende leseopplevelse.

### Synkronisert fremheving av gjeldende kapittel i innholdsfortegnelsen

Når du ruller til høyre, vil innholdsfortegnelsen til venstre fremheve det kapittelet du leser.

## Cool detaljer

### Museeffekter

Hold musen over knappen på høyre side av toppnavigasjonen for å se kule effekter.

### Lite `404`-spøkelse

`404`-siden har en søt, flytende spøkelse som beveger øynene etter musen, [➔ Klikk her for å se](/404)

## Kode er åpen kildekode

[Koden er åpen kildekode](/i18n.site/src). Hvis du er interessert i å bidra til utviklingen, vennligst introduser deg selv på [e-postlisten](//groups.google.com/u/2/g/i18n-site).

Flere små, men viktige krav som ikke er presserende. Utviklingsteamet vil tildele oppgaver basert på dine tekniske ferdigheter og samtidig forbedre utviklingsdokumentasjonen ved behov.