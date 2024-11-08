# Projectversie

Neem het demoproject als voorbeeld:

`en/demo2/v` is het huidige versienummer van het project, dat rechts van de projectnaam in het zijbalkoverzicht wordt weergegeven.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

Hier is `en/` de taalcode die overeenkomt met de vertalingsbrontaal geconfigureerd door `.i18n/conf.yml` .

Als uw brontaal niet Engels is, moet het `v` bestand in de projectmap van uw brontaal worden geplaatst.

De mogelijkheid om door historische versies van documenten te bladeren is in ontwikkeling.

Het wordt aanbevolen om het versienummer van het document alleen te wijzigen wanneer er belangrijke updates worden uitgebracht (zoals `v1` , `v2` ) om te voorkomen dat te veel versienummers rommeligheid veroorzaken op de pagina's die door zoekmachines worden geïndexeerd.

## Gebruik Lege `v` Bestanden Om De Bestandsindexen Van Verschillende Projecten Te Splitsen

In het demoproject kun je naast `en/demo2/v` ook zien dat er lege `v` bestanden zijn in de mappen `en/blog` en `en/demo1` .

Er wordt geen lege `v` weergegeven in de zijbalk, maar zolang er een `v` bestand is, wordt er een onafhankelijke index gegenereerd voor de bestanden in de map en submappen.

Door de indexen van verschillende projecten te splitsen, kunt u trage toegang vermijden die wordt veroorzaakt doordat de index van alle bestanden op de hele site in één keer wordt geladen.

Het indexbestand dat overeenkomt met `blog` in het demoproject is bijvoorbeeld [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json) :