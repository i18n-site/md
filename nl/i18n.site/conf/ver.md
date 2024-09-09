# Projectversie

Neem bijvoorbeeld het demoproject als voorbeeld:

`en/demo2/v` is het huidige versienummer van het project, dat wordt weergegeven aan de rechterkant van de naam van het project in de zijbalk van de inhoudsopgave.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

Hier is `en/` de taalcode die corresponds met de brontaal die in `.i18n/conf.yml` is geconfigureerd.

Als uw brontaal geen Engels is, moet het `v`-bestand in de map van uw brontaal worden geplaatst.

De functionaliteit om door documenthistorie te bladeren wordt momenteel ontwikkeld.

Het wordt aanbevolen om het documentversienummer alleen bij belangrijke updates (zoals `v1`, `v2`) te wijzigen, om te voorkomen dat er te veel versies leiden tot een rommelige indexering door zoekmachines.

## Gebruik lege `v`-bestanden om de bestandsindexen van verschillende projecten te splitsen

In het demoproject zijn er, naast `en/demo2/v`, ook lege `v`-bestanden in de mappen `en/blog` en `en/demo1`.

Lichte `v`-bestanden worden niet weergegeven in de zijbalk, maar zolang er een `v`-bestand aanwezig is, wordt er een aparte index gegenereerd voor de bestanden in de betreffende map en submappen.

Door de indexen van verschillende projecten te splitsen, kunt u vertragen van de toegang voorkomen die ontstaat door het in één keer laden van de index van alle bestanden op de hele site.

Bijvoorbeeld, het indexbestand dat overeenkomt met `blog` in het demoproject is: [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json)