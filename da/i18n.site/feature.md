# Produktegenskaber

## `i18` Integrerede Oversættelser

Programmet har indbygget `i18` oversættelse, se venligst [➔ `i18` dokument](/i18) for specifik brug.

## Match Automatisk Browsersprog

Webstedets standardsprog vil automatisk matche browserens sprog.

Når brugeren manuelt skifter sprog, vil brugerens valg blive husket.

Relateret [github.com/i18n-site/18x/src/lang.coffee](https://github.com/i18n-site/18x/blob/main/src/lang.coffee) :

## Mobilterminal Tilpasning

Der er også en perfekt læseoplevelse på mobiltelefonen.

<img src="//p.3ti.site/1721379497.avif" width="350px">

## <a rel=id href="#ha" id="ha"></a> Front-end høj tilgængelighed

`i18n.site` vil som standard udgive webstedets indhold til `npmjs.com` ved hjælp af [jsdelivr.com](//jsdelivr.com) [unpkg.com](//unpkg.com) og andet `CDN` indhold indlæst på `npm` .

På dette grundlag blev der tilføjet spejlkilder fra det kinesiske fastland for at give kinesiske brugere mulighed for at få stabil adgang og opnå **høj frontend-tilgængelighed** .

Princippet er: aflyt anmodninger med [`service worker`](https://developer.mozilla.org/docs/Web/API/Service_Worker_API) , prøv mislykkede anmodninger igen på andre `CDN` og aktiver adaptivt det hurtigst reagerende oprindelsessted som standardindlæsningskilde.

Relateret [github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker) :

## Enkeltsideapplikation, Ekstrem Hurtig Indlæsning

Hjemmesiden anvender en enkeltsides applikationsarkitektur uden opdatering ved sideskift og ekstrem hurtig indlæsning.

## Optimeret Til Læseoplevelse

### Godt Designet Stil

> Skønheden ved enkelhed er perfekt fortolket i webdesignet på denne hjemmeside.
> Den forlader overflødig dekoration og præsenterer indhold i sin reneste form.
> Som et smukt digt, selv om det er kort, rører det folks hjerter.

<p style="text-align:right">── I18N.SITE</p>

[➔ Klik her for at se en liste over stilarter](/i18n.site/md/styl) .

### `RSS`

![](//p.3ti.site/1725541085.avif)

Billedet ovenfor viser flersproget `RSS` [inoreader.com](//inoreader.com) hjælp af abonnement `i18n.site` .

### Indlæs Online Skrifttyper, Understøtter Kinesisk

Som standard er [Alimama dual-axis variable rektangulære](https://www.iconfont.cn/fonts/detail?cnid=pOvFIr086ADR) skrifttyper, [MiSans](https://hyperos.mi.com/font/zh/download/) og andre online skrifttyper aktiveret på websiden for at forene læseoplevelsen for brugere på forskellige platforme.

På samme tid, for at forbedre indlæsningshastigheden, opdeles skrifttyper i henhold til ordfrekvensstatistikker.

Relateret [github.com/i18n-site/font](https://github.com/i18n-site/font) :

### Topnavigation Automatisk Skjult

Rul ned, og den øverste navigation skjuler sig automatisk.

Rul op, og den skjulte navigation vises igen.

Det vil tone ud, når musen ikke bevæger sig.

Der er en fuldskærmsknap i øverste højre hjørne af navigationslinjen for at skabe en fordybende dokumentlæsningsoplevelse.

### Synkroniseret Konturfremhævning Af Det Aktuelle Kapitel

Når du ruller i indholdet til højre, vil omridset til venstre samtidig fremhæve det kapitel, der læses i øjeblikket.

## Fede Detaljer

### Mus Effekter

Hold musen over knappen i højre side af den øverste navigation for at se fede specialeffekter.

### `404` Lille Spøgelse

Der er et sødt lille flydende spøgelse på `404` siden, hvis øjne vil bevæge sig med musen, [➔ Klik her for at se](/404) ,

## Kode Open Source

[Koden er open source](/i18n.site/c/src) . Hvis du er interesseret i at deltage i udviklingen, bedes du præsentere dig selv for [mailinglisten](//groups.google.com/u/2/g/i18n-site) .

Der er mange små krav, der er vigtige, men ikke presserende. Udviklingsteamet vil tildele praktiske opgaver baseret på de teknologier, du er god til, og forbedre udviklingsdokumenterne, mens kravene tildeles.