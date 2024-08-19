# Produktegenskaber

## Integrerede `i18`-oversættelser

Programmet har indbygget `i18`-oversættelse; se venligst [➔ `i18`-dokument](/i18) for specifik brug.

## Automatisk browserlanguage matching

Webstedets standardsprog vil automatisk matche browserens sprog.

Efter at brugeren manuelt har skiftet sprog, vil valget blive husket.

Relevant kode: [github.com/i18n-site/18x/src/lang.coffee](https://github.com/i18n-site/18x/blob/main/src/lang.coffee).

## Mobiltilpasning

På mobiltelefoner er der også en perfekt læseoplevelse.

<img src="//p.3ti.site/1721379497.avif" width="350px">

## <a rel=id href="#ha" id="ha"></a> Frontend-høj tilgængelighed

`i18n.site` vil som standard publicere webstedets indhold på `npmjs.com`, ved hjælp af [jsdelivr.com](//jsdelivr.com), [unpkg.com](//unpkg.com) og andre `CDN` til at indlæse indhold fra `npm`.

Derudover er der tilføjet en kinesisk fastlandsspiegelkilde, så kinesiske brugere kan få stabil adgang, hvilket realiserer **høj frontend-tilgængelighed**.

Princippet er: Brug [`service worker`](https://developer.mozilla.org/docs/Web/API/Service_Worker_API) til at aflytte anmodninger, prøv mislykkede anmodninger igen på andre `CDN` og aktiver adaptivt den hurtigst reagerende kilde som standardindlæsningskilde.

Relevant kode: [github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker).

## Enkeltsideapplikation, ekstremt hurtig indlæsning

Webstedet anvender en enkeltsides applikationsarkitektur, som loader sider uden genindlæsning og ekstremt hurtigt.

## Optimeret til læseoplevelse

### veludformet stil

> Den enkle skønhed er perfekt fortolket i designet af denne hjemmeside.
> Den fraskriver sig unødvendige dekorationer og præsenterer indholdet i sin reneste form.
> Ligesom et smukt digt, kort men rørende.

<p style="text-align:right">── I18N.SITE Forfatter</p>

[➔ Klik her for at se en oversigt over stilarter](/i18n.site/md/styl).

### Indlæsning af online skrifttyper, understøtter kinesisk

Webstedet bruger som standard [Alimama 双轴可变方圆体](https://www.iconfont.cn/fonts/detail?cnid=pOvFIr086ADR), [MiSans](https://hyperos.mi.com/font/zh/download/) og andre online skrifttyper for at skabe en ensartet læseoplevelse på tværs af forskellige platforme.

Samtidig er skrifttyperne opdelt baseret på ordensfrekvens for at forbedre indlæsningshastigheden.

Relevant kode: [github.com/i18n-site/font](https://github.com/i18n-site/font).

### Topnavigation automatisk skjult

Når du ruller ned, skjules topnavigationen automatisk.

Når du ruller op, vises den skjulte navigation igen.

Når musen er stationær, vil den fade ud.

I øverste højre hjørne af navigationslinjen er der en fuldskærmsknap, der skaber en fordybende læseoplevelse af dokumenter.

### Synkroniseret fremhævning af det aktuelle kapitel i dispositionen

Når du ruller til højre i indholdet, vil dispositionen til venstre automatisk fremhæve det kapitel, du læser.

## K frække detaljer

### Museeffekter

Hold musen over knappen i højre side af topnavigationen for at se flotte effekter.

### Lille spøgelse på `404`-siden

`404`-siden har en sød svævende spøgelse, hvis øjne følger musen, [➔ Klik her for at se](/404)

## Kode er开源

[Koden er open source](/i18n.site/src). Hvis du er interesseret i at deltage i udviklingen, er du velkommen til at præsentere dig selv på [mailinglisten](//groups.google.com/u/2/g/i18n-site).

Der er mange små, men vigtige krav, som udviklingsteamet vil tildele øvelsesopgaver baseret på dine tekniske færdigheder og samtidig forbedre udviklingsdokumentationen, mens kravene becomes tildelt.