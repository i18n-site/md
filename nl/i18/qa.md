# Veelgestelde Vragen

## Het toevoegen of verwijderen van regels in de vertaling, wat leidt tot een verwarding in de vertaling

Houd er rekening mee dat **de regels van de vertaling één op één moeten overeenkomen met de regels van de oorspronkelijke tekst**

Dit betekent dat bij handmatige aanpassing van de vertaling, **geen regels toegevoegd of verwijderd mogen worden**, anders raakt de overeenkomst tussen vertaling en oorspronkelijke tekst in de war

Als u per ongeluk een regel toevoegt of verwijdert, wat verwarring veroorzaakt, herstel dan de vertaling naar de versie vóór de wijziging, voer opnieuw `i18` uit en cache opnieuw de correcte mapping

De mapping tussen vertaling en oorspronkelijke tekst is gekoppeld aan het token. Maak een nieuw token aan op [i18n.site/token](//i18n.site/token), verwijder `.i18h/hash` en vertaal opnieuw om de verwarden mapping te wissen (maar dit resulteert in het verlies van alle handmatige aanpassingen aan de vertaling)

## `YAML`: Hoe kun je voorkomen dat een `HTML`-link wordt omgezet in `Markdown`?

De waarde van `YAML` wordt voor vertaling beschouwd als `Markdown`

Soms is de conversie van `HTML` naar `Markdown` niet wat we willen, bijvoorbeeld als `<a href="/">Home</a>` wordt omgezet in `[Home](/)`

Voeg een willekeurig attribuut toe aan de `a`-tag behalve `href`, zoals `<a class="A" href="/">Home</a>`, om deze conversie te voorkomen

## Bestandsconflicten onder `./i18n/hash`

Verwijder de conflicterende bestanden en voer opnieuw `i18` uit