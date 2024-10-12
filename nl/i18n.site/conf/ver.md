# Projectversie

Neem bijvoorbeeld het demoproject als voorbeeld:

`en/demo2/v` bevat het huidige versienummer van het project, dat wordt weergegeven aan de rechterkant van de projectnaam in de zijbalk.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

Hier is `en/` de taalcode die corresponds met de brontaal die is geconfigureerd in `.i18n/conf.yml`.

Als uw brontaal niet Engels is, moet het `v`-bestand in de map van uw brontaal worden geplaatst.

De functionaliteit om door documenthistorie te bladeren wordt momenteel ontwikkeld.

Het wordt aanbevolen om het documentversienummer alleen bij belangrijke releases (zoals `v1`, `v2`) te wijzigen, om te voorkomen dat er te veel versies leiden tot een rommelige indexering door zoekmachines.

## Gebruik lege `v`-bestanden om de bestandsindexen van verschillende projecten te scheiden

In het demoproject zijn, naast `en/demo2/v`, ook lege `v`-bestanden te vinden in de directories `en/blog` en `en/demo1`.

Lichte `v`-bestanden worden niet weergegeven in de zijbalk, maar zolang een `v`-bestand aanwezig is, wordt er een aparte index gegenereerd voor de bestanden in die map en submappen.

Door de indexen van verschillende projecten te splitsen, kunt u vertragen van de toegang voorkomen die wordt veroorzaakt door het gelijktijdig laden van de index van alle bestanden op de hele site.

Bijvoorbeeld, het indexbestand dat hoort bij `blog` in het demoproject is: [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json)