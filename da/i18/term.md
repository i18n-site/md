# Ordliste

Ordlistefil `.i18n/term.yml` kan oprettes. Det følgende er et eksempel på en ordliste, hvis kildesprog er kinesisk :

```yml
zh:
  快猫星云: Flashcat

zh>en:
  告警: alert
  故障: incident
```

Blandt dem repræsenterer `zh:` den kinesiske standardordliste for kildesproget : Det vil sige, uanset hvilket sprog det er oversat til, er kinesisk `快猫星云` oversat til `Flashcat` !

`zh>en:` betyder, at når man oversætter fra kinesisk til engelsk, bliver `告警` oversat til `alert` og `故障` til `incident` .

Her kan flere målsprog skrives efter `zh>` , hvilket kan forenkle konfigurationen af termer på lignende sprog.

For eksempel betyder `zh>sk>cs` , at når kinesisk oversættes til slovakisk og tjekkisk, er denne terminologiliste delt.

> [!TIP]
> Ordlister med flere objektive terminologier og ordlister med enkeltobjekter understøtter kombineret brug. For eksempel kan tre terminologiordlister `zh>sk>cs` , `zh>sk` og `zh>cs` defineres på samme tid.