# Vaak Voorkomend Probleem

## Het Toevoegen of Verwijderen Van Regels in De Vertaling, Waardoor Verwarring in De Vertaling Ontstaat

Houd er rekening mee **dat het aantal regels in de vertaling moet overeenkomen met het aantal regels in de originele tekst** .

Dat wil zeggen: wanneer u de vertaling handmatig aanpast, **mag u geen regels aan de vertaling toevoegen of verwijderen** , anders wordt de mappingrelatie tussen de vertaling en de originele tekst verstoord.

Als u per ongeluk een regel toevoegt of verwijdert, waardoor verwarring ontstaat, herstel dan de vertaling naar de versie vóór de wijziging, voer de vertaling `i18` uit en plaats de juiste toewijzing opnieuw in de cache.

De mapping tussen de vertaling en de originele tekst is gebonden aan een nieuw token in [i18n.site/token](//i18n.site/token) , verwijder `.i18h/hash` en vertaal opnieuw om de verwarrende mapping te wissen (maar hierdoor gaan alle handmatige aanpassingen aan de vertaling verloren).

## : Voorkom Je `YAML` `HTML` Van De Link Wordt Omgezet Naar `Markdown`

De waarde van `YAML` wordt voor vertaling behandeld als `MarkDown` .

Soms is de conversie van `HTML` → `MarkDown` niet wat we willen, bijvoorbeeld als `<a href="/">Home</a>` wordt geconverteerd naar `[Home](/)` .

Voeg elk ander kenmerk dan `href` toe aan de `a` -tag, zoals `<a class="A" href="/">Home</a>` , om deze conversie te voorkomen.

## `./I18n/Hash` De Volgende Bestanden Conflicteren

Verwijder de conflicterende bestanden en voer Translate opnieuw uit `i18`
