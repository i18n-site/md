# Produktfunksjoner

## Integrasjon av `i18`-oversettelser

Programmet inneholder `i18`-oversettelser; se [➔ `i18`-dokumentasjon](/i18) for spesifikke bruksområder.

## Automatisk tilpasning til nettleserspråk

Nettsidens standardspråk vil automatisk tilpasses nettleserens språk.

Brukerens språkvalg vil bli husket etter manuell endring.

Relatert kode: [github.com/i18n-site/18x/src/lang.coffee](https://github.com/i18n-site/18x/blob/main/src/lang.coffee).

## Mobiltilpasning

En optimal leseopplevelse på mobil enheter.

<img src="//p.3ti.site/1721379497.avif" width="350px">

## <a rel=id href="#ha" id="ha"></a> Høy tilgjengelighet på front-end

`i18n.site` vil publisere nettstedets innhold til `npmjs.com` som standard, ved hjelp av [jsdelivr.com](//jsdelivr.com) [unpkg.com](//unpkg.com) og annet `CDN` innhold lastet på `npm` .

Deretter er kinesiske speilservere lagt til for å gi kinesiske brukere stabil tilgang, noe som oppnår **høy front-end-tilgjengelighet**.

Prinsippet er: Bruk av [`service worker`](https://developer.mozilla.org/docs/Web/API/Service_Worker_API) for å fange opp forespørsler, og ved mislykkede forsøk, prøve på andre `CDN`-tjenester, og automatisk velge det raskeste responsstedet som standard kilde.

Relatert kode: [github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker).

## Enkeltsideapplikasjon med rask lasting

Nettsiden bruker en enkeltsideapplikasjonsstruktur, som laster sider øyeblikkelig uten å oppdatere.

## Optimert for leseopplevelse

### Stil som er godt designet

> Den enkle skjønnheten er perfekt reflektert i nettsidens design.
> Den unngår overflødig dekorasjon og presenterer innholdet i sin reneste form.
> Som et kort, men rørende dikt, berører den menneskers hjerter.

<p style="text-align:right">── I18N.SITE-forfatter</p>

[➔ Klikk her for å se en oversikt over stiler](/i18n.site/md/styl).

### Multilingual `RSS`-abonnement

![](//p.3ti.site/1725541085.avif)

Over er et bilde av et `RSS`-abonnement for `i18n.site` med [inoreader.com](//inoreader.com).

### Lasting av nettfonter, støtte for kinesisk

Nettsiden bruker som standard [Alimama dual-axis variable rektangulære](https://www.iconfont.cn/fonts/detail?cnid=pOvFIr086ADR) fonter, [MiSans](https://hyperos.mi.com/font/zh/download/) og andre nettfonter for å gi en enhetlig leseopplevelse på tvers av ulike plattformer.

Samtidig, for å forbedre lastingstiden, er skriftene delt opp basert på ordfrekvens.

Relatert kode: [github.com/i18n-site/font](https://github.com/i18n-site/font).

### Automatisk skjult toppnavigasjon

Når du ruller ned, skjules toppnavigasjonen automatisk.

Når du ruller opp, vises den skjulte navigasjonen igjen.

Navigasjonen vil tone ut når musen ikke beveger seg.

I øvre høyre hjørne av navigasjonsfeltet er det en fullskjermknapp som gir en mer oppslukende leseopplevelse.

### Synkronisert fremheving av gjeldende kapittel i innholdsoversikten

Når du ruller til høyre i innholdet, vil innholdsoversikten til venstre samtidig fremheve det nåværende kapittelet.

## Cool detaljer

### Museeffekter

Når du holder musen over knappen på høyre side av toppnavigasjonen, vil du se kule spesialeffekter.

### Lite `404`-spøkelse

`404`-siden har en søt, flytende spøkelse som beveger øynene etter musen, [➔ Klikk her for å se](/404)

## Kode er åpen kildekode

[Koden er åpen kildekode](/i18n.site/src). Hvis du er interessert i å delta i utviklingen, vennligst introduser deg selv på [e-postlisten](//groups.google.com/u/2/g/i18n-site).

Det er mange små, men viktige krav som ikke er presserende. Utviklingsteamet vil tildele oppgaver basert på dine tekniske ferdigheter og samtidig forbedre utviklingsdokumentasjonen ved tildeling av krav.