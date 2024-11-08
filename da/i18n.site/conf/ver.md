# Projektversion

Tag demoprojektet som et eksempel:

`en/demo2/v` er projektets aktuelle versionsnummer, som vil blive vist til højre for projektnavnet i sidebjælkens disposition.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

Her er `en/` den sprogkode, der svarer til oversættelseskildesproget konfigureret med `.i18n/conf.yml` .

Hvis dit kildesprog ikke er engelsk, skal `v` filen placeres i projektbiblioteket på dit kildesprog.

Muligheden for at gennemse historiske versioner af dokumenter er under udvikling.

Det anbefales kun at ændre dokumentets versionsnummer, når større opdateringer frigives (såsom `v1` , `v2` ) for at undgå for mange versionsnumre, der forårsager rod på siderne, der er indekseret af søgemaskiner.

## Brug Tomme `v` Filer Til at Opdele Filindeksene for Forskellige Projekter

I demoprojektet kan du udover `en/demo2/v` også se, at der er tomme `v` filer i mapperne `en/blog` og `en/demo1` .

Et tomt `v` vil ikke blive vist i sidebjælkens disposition, men så længe der er en `v` fil, vil der blive genereret et uafhængigt indeks for filerne i mappen og undermapper.

Ved at opdele indekserne for forskellige projekter kan du undgå langsom adgang forårsaget af at indlæse indekset for alle filer på hele webstedet på én gang.

For eksempel er indeksfilen, der svarer til `blog` i demoprojektet [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json) :