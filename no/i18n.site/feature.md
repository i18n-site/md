# Egenskap Ved Produktet

## `I18` Oversettelse

Programmet har `i18` oversettelse, se [➔ `i18`](/i18) for spesifikk bruk.

## Tilpass Nettleserspråk Automatisk

Nettstedets standardspråk vil automatisk samsvare med nettleserens språk.

Etter at brukeren bytter språk manuelt, vil brukerens valg bli husket.

[github.com/i18n-site/18x/src/lang.coffee](https://github.com/i18n-site/18x/blob/main/src/lang.coffee) kode :

## Mobilterminaltilpasning

Det er også en perfekt leseopplevelse på mobilen.

<img src="//p.3ti.site/1721379497.avif" width="350px">

## <a rel=id href="#ha" id="ha"></a> Front-end høy tilgjengelighet

`i18n.site` Som standard vil nettstedets innhold bli publisert til `npmjs.com` , ved hjelp av [jsdelivr.com](//jsdelivr.com) [unpkg.com](//unpkg.com) og flere `CDN` -innhold lastet på `npm` .

På dette grunnlaget ble speilkilder fra fastlands-Kina lagt til for å la kinesiske brukere ha stabil tilgang og oppnå **høy front-end-tilgjengelighet** .

Prinsippet er: avskjær forespørselen ved hjelp av [`service worker`](https://developer.mozilla.org/docs/Web/API/Service_Worker_API) hvis forespørselen mislykkes, prøv den på nytt på andre `CDN` , og aktiver adaptivt den raskest reagerende opprinnelsesstasjonen som standard lastekilde.

[github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker) kode :

## Enkeltsideapplikasjon, Ekstremt Rask Lasting

Nettstedet tar i bruk en enkeltsides applikasjonsarkitektur, uten oppdatering når du bytter side og ekstremt rask lasting.

## Optimalisert for Leseopplevelse

### Godt Designet Stil

> Skjønnheten med enkelhet er perfekt tolket i webdesignet til denne nettsiden.
> Den forlater unødvendig dekorasjon og presenterer innhold i sin reneste form.
> Som et vakkert dikt, selv om det er kort, berører det folks hjerter.

<p style="text-align:right">── I18N.SITE</p>

[➔ Klikk her for å se en liste over stiler](/i18n.site/md/styl) .

### Last Inn Fonter På Nettet, Støtte Kinesisk

Som standard er [Alimama dual-axis variable rektangulære fonter](https://www.iconfont.cn/fonts/detail?cnid=pOvFIr086ADR) [MiSans](https://hyperos.mi.com/font/zh/download/) og andre online fonter aktivert på nettsiden for å forene leseopplevelsen til brukere på forskjellige plattformer.

Samtidig, for å forbedre innlastingshastigheten, blir skriftene delt opp i henhold til ordfrekvensstatistikk.

[github.com/i18n-site/font](https://github.com/i18n-site/font) kode :

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

### Det Lille `404`

Det er et søtt lite flytende spøkelse på siden `404` øynene vil bevege seg med musen, [➔ Klikk her for å se](/404) ,

## Kode Åpen Kildekode

[Koden er åpen kildekode](/i18n.site/src) Hvis du er interessert i å delta i utviklingen, vennligst introduser deg selv for [e-postlisten](//groups.google.com/u/2/g/i18n-site) .

Det er mange små krav som er viktige, men som ikke haster. Utviklingsteamet vil tildele praktiske oppgaver basert på teknologiene du er god på, og forbedre utviklingsdokumentene samtidig som kravene tildeles.

