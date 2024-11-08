# Glossarium

Woordenlijstbestand `.i18n/term.yml` kan worden aangemaakt. Hieronder volgt een voorbeeld van een woordenlijst waarvan de brontaal Chinees is :

```yml
zh:
  快猫星云: Flashcat

zh>en:
  告警: alert
  故障: incident
```

Onder hen vertegenwoordigt `zh:` de standaard Chinese woordenlijst van de brontaal : Dat wil zeggen, in welke taal het ook wordt vertaald, Chinees `快猫星云` wordt vertaald in `Flashcat` !

`zh>en:` betekent dat bij het vertalen van Chinees naar Engels, `告警` wordt vertaald in `alert` en `故障` wordt vertaald in `incident` .

Hier kunnen na `zh>` meerdere doeltalen worden geschreven, wat de configuratie van termen in vergelijkbare talen kan vereenvoudigen.

`zh>sk>cs` betekent bijvoorbeeld dat wanneer Chinees wordt vertaald naar het Slowaaks en Tsjechisch, deze terminologielijst wordt gedeeld.

> [!TIP]
> Terminologiewoordenlijsten met meerdere doelstellingen en terminologiewoordenlijsten met één bezwaar ondersteunen gecombineerd gebruik. Er kunnen bijvoorbeeld drie terminologiewoordenlijsten `zh>sk>cs` , `zh>sk` en `zh>cs` tegelijkertijd worden gedefinieerd.