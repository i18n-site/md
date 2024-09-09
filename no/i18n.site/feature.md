# Produktfunksjoner

## Integrasjon av `i18`-oversettelser

Programmet inneholder `i18`-oversettelser; se [➔ `i18`-dokumentasjon](/i18) for spesifikke bruksområder.

## Automatisk tilpasning til nettleserspråk

Nettsidens standardspråk vil automatisk tilpasses nettleserens språk.

Etter at brukeren manuelt bytter språk, vil brukerens valg bli husket.

Relatert kode: [github.com/i18n-site/18x/src/lang.coffee](https://github.com/i18n-site/18x/blob/main/src/lang.coffee).

## Mobiltilpasning

Nettsiden gir en optimal leseopplevelse også på mobil enheter.

<img src="//p.3ti.site/1721379497.avif" width="350px">

## <a rel=id href="#ha" id="ha"></a> Front-end tilgjengelighet

`i18n.site` publiserer som standard innholdet til `npmjs.com`, og laster innhold via [jsdelivr.com](//jsdelivr.com), [unpkg.com](//unpkg.com) og andre `CDN`-tjenester for `npm`-innhold.

På denne bakgrunn er det lagt til speilkilder for fastlands-Kina, noe som gir kinesiske brukere stabil tilgang og oppnår **høy front-end tilgjengelighet**.

Prinsippet er: Bruk av [`service worker`](https://developer.mozilla.org/docs/Web/API/Service_Worker_API) for å fange opp forespørsler, og ved mislykkede forespørsler prøve på nytt på andre `CDN`, og automatisk bruke den raskeste kilde som standard lastingskilde.

Relatert kode: [github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker).

## Enkeltsideapplikasjon med rask lasting

Nettsiden bruker en enkeltsideapplikasjonsstruktur, som gir rask lasting uten sideoppdateringer ved sidebytte.

## Optimert for leseopplevelse

### Throughført design

> Enkelhetens skjønnhet er perfeksjonert i denne nettsidens design.
> Den unngår overflødig dekorasjon og presenterer innholdet i sin reneste form.
> Som et kort, men rørende dikt, berører det menneskers hjerter.

<p style="text-align:right">── I18N.SITE-forfatter</p>

[➔ Klikk her for å se en oversikt over stiler](/i18n.site/md/styl).

### 多语言 `RSS`-abonnement

![](//p.3ti.site/1725541085.avif)

Over er et eksempel på flerspråklig `RSS`-abonnement på `i18n.site` via [inoreader.com](//inoreader.com).

### Innlasting av nettfonter, støtte for kinesisk

Nettsiden bruker som standard [Alimama dual-axis variable rektangulære fonter](https://www.iconfont.cn/fonts/detail?cnid=pOvFIr086ADR) og [MiSans](https://hyperos.mi.com/font/zh/download/) blant andre nettfonter for å gi en enhetlig leseopplevelse på tvers av ulike plattformer.

Samtidig, for å forbedre lastingstiden, er skriftene delt opp basert på ordfrekvens.

Relatert kode: [github.com/i18n-site/font](https://github.com/i18n-site/font).

### Automatisk skjult toppnavigasjon

Når du ruller ned, skjules toppnavigasjonen automatisk.

Når du ruller opp, vises den skjulte navigasjonen igjen.

Når musen er stille, vil navigasjonen tone ut.

I øvre høyre hjørne av navigasjonsfeltet finnes en fullskjermknapp som gir en mer oppslukende leseopplevelse av dokumenter.

### Synkronisert fremheving av gjeldende kapittel i innholdsoversikten

Når du ruller til høyre i innholdet, vil innholdsoversikten til venstre samtidig fremheve det kapittelet du leser.

## Cool detaljer

### Museeffekter

Når du holder musen over knappen på høyre side av toppnavigasjonen, vil du se kule spesialeffekter.

### Lite `404`-spøkelse

`404`-siden har en søt liten flytende spøkelse, og øynene følger musen [➔ Klikk her for å se](/404)

## Kode er åpen kildekode

[Koden er åpen kildekode](/i18n.site/src). Hvis du er interessert i å delta i utviklingen, vennligst introduser deg selv på [e-postlisten](//groups.google.com/u/2/g/i18n-site).

Det finnes mange små, men viktige krav som ikke er presserende. Utviklingsteamet vil tildele oppgaver basert på din tekniske ekspertise, og samtidig forbedre utviklingsdokumentasjonen når kravene blir tildelt.