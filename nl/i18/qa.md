# Veelgestelde Vragen

## Het Toevoegen of Verwijderen Van Regels in De Vertaling, Waardoor Verwarring in De Vertaling Ontstaat

> [!WARN]
> Houd er rekening mee **dat het aantal regels in de vertaling moet overeenkomen met het aantal regels in de originele tekst** .
> Dat wil zeggen: wanneer u de vertaling handmatig aanpast, **mag u geen regels aan de vertaling toevoegen of verwijderen** , anders wordt de mappingrelatie tussen de vertaling en de originele tekst verstoord.

Als u per ongeluk een regel toevoegt of verwijdert, waardoor er verwarring ontstaat, herstel dan de vertaling naar de versie vóór de wijziging, voer opnieuw `i18` vertaling uit en plaats de juiste toewijzing opnieuw in de cache.

De mapping tussen de vertaling en de originele tekst is gebonden aan het token. Maak een nieuw token in [i18n.site/token](//i18n.site/token) verwijder `.i18h/hash` en vertaal opnieuw om de verwarrende mapping te wissen (maar hierdoor gaan alle handmatige aanpassingen aan de vertaling verloren).

## `YAML` : Hoe Voorkom Je Dat Link `HTML` Wordt Omgezet in `Markdown`

Een waarde van `YAML` wordt voor vertaling behandeld als `MarkDown` .

Soms is de conversie van `HTML` → `MarkDown` niet wat we willen, bijvoorbeeld als `<a href="/">Home</a>` wordt omgezet in `[Home](/)` .

Door een ander attribuut dan `href` toe te voegen aan de `a` -tag, zoals `<a class="A" href="/">Home</a>` , kan deze conversie worden voorkomen.

## `./i18n/hash` Bestandsconflicten Hieronder

Verwijder de conflicterende bestanden en voer `i18` vertaling opnieuw uit.