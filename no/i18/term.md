# Ordliste

Ordlistefil `.i18n/term.yml` kan opprettes. Følgende er et eksempel på en ordliste hvis kildespråk er kinesisk :

```yml
zh:
  快猫星云: Flashcat

zh>en:
  告警: alert
  故障: incident
```

Blant dem representerer `zh:` standard kinesisk ordliste for kildespråket : Det vil si at uansett hvilket språk det er oversatt til, er kinesisk `快猫星云` oversatt til `Flashcat` .

`zh>en:` betyr at når du oversetter fra kinesisk til engelsk, blir `告警` oversatt til `alert` og `故障` til `incident` .

Her kan flere målspråk skrives etter `zh>` , noe som kan forenkle konfigurasjonen av termer på lignende språk.

For eksempel betyr `zh>sk>cs` at når kinesisk oversettes til slovakisk og tsjekkisk, er denne terminologilisten delt.

> [!TIP]
> Ordlister med flere objektive terminologier og ordlister med enkeltobjekter støtter kombinert bruk. For eksempel kan tre terminologiordlister `zh>sk>cs` , `zh>sk` og `zh>cs` defineres samtidig.