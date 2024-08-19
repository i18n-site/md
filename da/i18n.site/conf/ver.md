# Projektversion

Tag et demonstrationsprojekt som eksempel:

`en/demo2/v` indeholder projektets nuværende versionsnummer, som vil blive vist til højre for projektets navn i sidepanelens oversigt.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

HER er `en/` sprogkoden, der svarer til oversættelseskildesproget, som er konfigureret i `.i18n/conf.yml`.

Hvis dit kildesprog ikke er engelsk, bør `v`-filen placeres i katalogen for dit kildesprog.

Funktionen til at gennemse dokumenternes historiske versioner er under udvikling.

Det anbefales kun at ændre dokumentets versionsnummer ved store opdateringer (f.eks. `v1`, `v2`), for at undgå for mange versioner, som kan skabe rod i søgemaskinernes indekser.

## Brug tomme `v`-filer til at opdele forskellige projekters filindekser

I demonstrationsprojektet kan du udover `en/demo2/v` også se, at der findes tomme `v`-filer i mapperne `en/blog` og `en/demo1`.

Tomme `v`-filer vil ikke blive vist i sidepanelens oversigt, men så længe en `v`-fil eksisterer, vil der blive genereret et selvstændigt indeks for kataloget og dets underkataloger.

Ved at opdele forskellige projekters indekser kan man undgå langsom adgang, som kan opstå ved at indlæse alle webstedets filer på én gang.

Forexample er indeksfilen for `blog` i demonstrationsprojektet [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json)