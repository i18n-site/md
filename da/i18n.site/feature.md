# Produktegenskaber

## Integrerede `i18`-oversættelser

Programmet har indbygget `i18`-oversættelse; se specifik brug i [➔ `i18`-dokumentet](/i18).

## Automatisk browserlanguage matching

Webstedets standardsprog matcher automatisk browserens sprog.

Når brugeren manuelt ændrer sprog, huskes valget.

Relevant kode: [github.com/i18n-site/18x/src/lang.coffee](https://github.com/i18n-site/18x/blob/main/src/lang.coffee).

## Mobiltilpasning

En perfekt læseoplevelse på mobiltelefoner.

<img src="//p.3ti.site/1721379497.avif" width="350px">

## <a rel=id href="#ha" id="ha"></a> Front-end høj tilgængelighed

`i18n.site` publicerer som standard indhold til `npmjs.com`, ved hjælp af [jsdelivr.com](//jsdelivr.com), [unpkg.com](//unpkg.com) og andre `CDN` til at indlæse indhold fra `npm`.

Derudover er der tilføjet en kinesisk fastlandsspiegel, hvilket muliggør stabil adgang for kinesiske brugere og opnår **høj front-end tilgængelighed**.

Princippet er: Brug [`service worker`](https://developer.mozilla.org/docs/Web/API/Service_Worker_API) til at aflytte anmodninger, og ved mislykkede anmodninger forsøg igen på andre `CDN`, og brug adaptivt den hurtigst reagerende kilde som standardindlæsningskilde.

Relevant kode: [github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker).

## Enkeltsideapplikation, lynhurtig indlæsning

Webstedet bruger en enkeltsideapplikationsarkitektur, som loader sider uden genindlæsning og er lynhurtig.

## Optimeret til læseoplevelse

### Gennemtænkt design

> Den enkle skønhed findes i webstedets design, hvor indholdet præsenteres i sin reneste form.
> Ligesom et kort, men smukt digt, rører det ved hjertet.
> Som et smukt digt, selv om det er kort, rører det folks hjerter.

<p style="text-align:right">── I18N.SITE</p>

[➔ Klik her for at se en liste over stilarter](/i18n.site/md/styl) .

### `RSS`

![](//p.3ti.site/1725541085.avif)

Billedet ovenfor viser flersproget `RSS` ved hjælp [inoreader.com](//inoreader.com) abonnement `i18n.site` .

### Indlæs Online Skrifttyper, Understøtter Kinesisk

Som standard er [Alimama dual-axis variable rektangulære skrifttyper](https://www.iconfont.cn/fonts/detail?cnid=pOvFIr086ADR) , [MiSans](https://hyperos.mi.com/font/zh/download/) og andre online skrifttyper aktiveret på websiden for at forene læseoplevelsen for brugere på forskellige platforme.

På samme tid, for at forbedre indlæsningshastigheden, opdeles skrifttyper i henhold til ordfrekvensstatistikker.

[github.com/i18n-site/font](https://github.com/i18n-site/font) kode :

### Når du ruller ned, skjules topnavigationen automatisk

Når du ruller op, vises den skjulte navigation igen.

Når musen er stationær, vil navigationen fade ud.

Det vil tone ud, når musen ikke bevæger sig.

Synkroniseret fremhævning af det aktuelle kapitel

### Når du ruller til højre i indholdet, fremhæves det aktuelle kapitel i venstre side automatisk

Cool detaljer

## Museeffekter

### Mus Effekter

Hold musen over knappen i højre side af den øverste navigation for at se fede specialeffekter.

### `404` Lille Spøgelse

Der er et sødt lille flydende spøgelse på `404` siden, hvis øjne vil bevæge sig med musen, [➔ Klik her for at se](/404) ,

## Kode Open Source

[Koden er open source](/i18n.site/src) . Hvis du er interesseret i at deltage i udviklingen, bedes du præsentere dig selv for [mailinglisten](//groups.google.com/u/2/g/i18n-site) .

Der er mange små krav, der er vigtige, men ikke presserende. Udviklingsteamet vil tildele praktiske opgaver baseret på de teknologier, du er god til, og forbedre udviklingsdokumenterne, mens kravene tildeles.