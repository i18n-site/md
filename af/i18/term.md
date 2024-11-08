# Woordelys

Woordelyslêer `.i18n/term.yml` kan geskep word Die volgende is 'n voorbeeld van 'n woordelys waarvan die brontaal Chinees is :

```yml
zh:
  快猫星云: Flashcat

zh>en:
  告警: alert
  故障: incident
```

Onder hulle verteenwoordig `zh:` die standaard Chinese woordelys van die brontaal : Dit wil sê, maak nie saak in watter taal dit vertaal word nie, Chinees `快猫星云` word in `Flashcat` vertaal!

`zh>en:` beteken dat wanneer jy van Chinees na Engels vertaal, `告警` in `alert` vertaal word en `故障` in `incident` vertaal word.

Hier kan verskeie teikentale na `zh>` geskryf word, wat die konfigurasie van terme in soortgelyke tale kan vereenvoudig.

Byvoorbeeld, `zh>sk>cs` beteken dat wanneer Chinees in Slowaaks en Tsjeggies vertaal word, hierdie terminologielys gedeel word.

> [!TIP]
> Multi-objektiewe terminologie woordelyste en enkel-objek terminologie woordelyste ondersteun gekombineerde gebruik Byvoorbeeld, drie terminologie woordelyste `zh>sk>cs` , `zh>sk` en `zh>cs` kan op dieselfde tyd gedefinieer word.