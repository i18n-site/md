# Projektversion

Tag demoprojektet som et eksempel:

`en/demo2/v` er projektets aktuelle versionsnummer, som vil blive vist til højre for projektnavnet i sidebjælken.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

Her `en/` er sprogkoden, der svarer til det `.i18n/conf.yml` oversættelseskildesprog.

Hvis dit kildesprog ikke er engelsk, skal `v` -filen placeres i projektmappen på dit kildesprog. 

Muligheden for at gennemse historiske versioner af dokumenter er under udvikling.

Det anbefales kun at ændre dokumentets versionsnummer, når der udgives større opdateringer (såsom `v1` , `v2` ) for at undgå at rode på siderne, der er indekseret af søgemaskiner på grund af for mange versionsnumre.

## Brug Tomme `v` -Filer Til at Opdele Filindekser for Forskellige Projekter

I demoprojektet kan du ud `en/demo2/v` , også se, at indholdet af mapperne `en/blog` og `en/demo1` er tomme `v` filer.

Empty `v` vil ikke blive vist i sidebar-konturen, men så længe filen `v` eksisterer, vil der blive genereret et uafhængigt indeks for filerne i mappen og undermapper.

Ved at opdele indekserne for forskellige projekter kan du undgå langsom adgang forårsaget af at indlæse indekset for alle filer på hele webstedet på én gang.

For eksempel, i demoprojektet er [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json) tilsvarende indeksfil : `blog`

