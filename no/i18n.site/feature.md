# Produktfunksjoner

## `i18` Oversettelser Integrert

Programmet har innebygd `i18` oversettelse, se [➔ `i18` dokument](/i18) for spesifikk bruk.

## Tilpass Nettleserspråk Automatisk

Nettstedets standardspråk vil automatisk samsvare med nettleserens språk.

Etter at brukeren bytter språk manuelt, vil brukerens valg bli husket.

Relatert [github.com/i18n-site/18x/src/lang.coffee](https://github.com/i18n-site/18x/blob/main/src/lang.coffee) :

## Mobilterminaltilpasning

Det er også en perfekt leseopplevelse på mobilen.

<img src="//p.3ti.site/1721379497.avif" width="350px">

## <a rel=id href="#ha" id="ha"></a> Front-end høy tilgjengelighet

`i18n.site` vil publisere nettstedets innhold til `npmjs.com` som standard, ved hjelp av [jsdelivr.com](//jsdelivr.com) [unpkg.com](//unpkg.com) og annet `CDN` innhold lastet på `npm` .

På dette grunnlaget ble speilkilder fra fastlands-Kina lagt til for å la kinesiske brukere ha stabil tilgang og oppnå **høy front-end-tilgjengelighet** .

Prinsippet er: fange opp forespørsler med [`service worker`](https://developer.mozilla.org/docs/Web/API/Service_Worker_API) , prøv mislykkede forespørsler på nytt på andre `CDN` , og aktiver adaptivt det raskest reagerende opprinnelsesstedet som standard innlastingskilde.

Relatert [github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker) :

## Enkeltsideapplikasjon, Ekstremt Rask Lasting

Nettstedet tar i bruk en enkeltsides applikasjonsarkitektur, uten oppdatering når du bytter side og ekstremt rask lasting.

## Optimalisert for Leseopplevelse

### Godt Designet Stil

> Skjønnheten med enkelhet er perfekt tolket i webdesignet til denne nettsiden.
> Den forlater overflødig dekorasjon og presenterer innhold i sin reneste form.
> Som et vakkert dikt, selv om det er kort, berører det folks hjerter.

<p style="text-align:right">── I18N.SITE</p>

[➔ Klikk her for å se en liste over stiler](/i18n.site/md/styl) .

### `RSS`

![](//p.3ti.site/1725541085.avif)

Bildet ovenfor `i18n.site` flerspråklig `RSS` med abonnement [inoreader.com](//inoreader.com) .

### Last Inn Fonter På Nettet, Støtte Kinesisk

Som standard er [Alimama dual-axis variable rektangulære](https://www.iconfont.cn/fonts/detail?cnid=pOvFIr086ADR) fonter, [MiSans](https://hyperos.mi.com/font/zh/download/) og andre online fonter aktivert på nettsiden for å forene leseopplevelsen til brukere på forskjellige plattformer.

Samtidig, for å forbedre innlastingshastigheten, blir skriftene delt opp i henhold til ordfrekvensstatistikk.

Relatert [github.com/i18n-site/font](https://github.com/i18n-site/font) :

### Toppnavigering Automatisk Skjult

Rull ned og toppnavigasjonen skjules automatisk.

Rull opp og den skjulte navigasjonen vises igjen.

Den vil tone ut når musen ikke beveger seg.

Det er en fullskjermknapp i øvre høyre hjørne av navigasjonslinjen for å skape en oppslukende dokumentleseopplevelse.

### Synkronisert Konturutheving Av Gjeldende Kapittel

Når du ruller innholdet til høyre, vil omrisset til venstre samtidig fremheve kapittelet som leses.

## Kule Detaljer

### Museffekter

Hold musen over knappen på høyre side av toppnavigasjonen for å se kule spesialeffekter.

### `404` Lite Spøkelse

Det er et søtt lite flytende spøkelse på `404` siden, hvis øyne vil bevege seg med musen, [➔ Klikk her for å se](/404) ,

## Kode Åpen Kildekode

[Koden er åpen kildekode](/i18n.site/c/src) Hvis du er interessert i å delta i utviklingen, vennligst introduser deg selv for [e-postlisten](//groups.google.com/u/2/g/i18n-site) .

Det er mange små krav som er viktige, men som ikke haster. Utviklingsteamet vil tildele praktiske oppgaver basert på teknologiene du er god på, og forbedre utviklingsdokumentene samtidig som kravene tildeles.