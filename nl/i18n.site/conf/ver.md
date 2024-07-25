# Projectversie

Neem het demoproject als voorbeeld:

`en/demo2/v` het huidige versienummer van het project, dat rechts van de projectnaam in het zijbalkoverzicht wordt weergegeven.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

`en/` is de taalcode die overeenkomt met de `.i18n/conf.yml` geconfigureerde brontaal voor vertalingen.

Als uw brontaal niet Engels is, moet het `v` -bestand in de projectmap van uw brontaal worden geplaatst. 

De mogelijkheid om door historische versies van documenten te bladeren is in ontwikkeling.

Het wordt aanbevolen om alleen het versienummer van het document te wijzigen bij het vrijgeven van grote updates (zoals `v1` , `v2` ) om te voorkomen dat de pagina's die door zoekmachines worden geïndexeerd vanwege te veel versienummers onoverzichtelijk worden.

## Gebruik Lege `v` -Bestanden Om Bestandsindexen Voor Verschillende Projecten Te Splitsen

In het demoproject kun je naast `en/demo2/v` ook zien dat de inhoud van `en/blog` en `en/demo1` leeg is `v` files.

Leeg `v` wordt niet weergegeven in de zijbalk, maar zolang het bestand `v` bestaat, wordt er een onafhankelijke index gegenereerd voor de bestanden in de map en submappen.

Door de indexen van verschillende projecten te splitsen, kunt u trage toegang vermijden die wordt veroorzaakt doordat de index van alle bestanden op de hele site in één keer wordt geladen.

In het demoproject is `blog` bijvoorbeeld [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json) :

