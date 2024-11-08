# Ordlista

Ordlista fil `.i18n/term.yml` kan skapas. Följande är ett exempel på en ordlista vars källspråk är kinesiska :

```yml
zh:
  快猫星云: Flashcat

zh>en:
  告警: alert
  故障: incident
```

Bland dem representerar `zh:` den kinesiska standardordlistan för källspråket : Det vill säga, oavsett vilket språk det översätts till, är kinesiska `快猫星云` översatt till `Flashcat` !

`zh>en:` betyder att vid översättning från kinesiska till engelska översätts `告警` till `alert` och `故障` översätts till `incident` .

Här kan flera målspråk skrivas efter `zh>` , vilket kan förenkla konfigurationen av termer på liknande språk.

Till exempel betyder `zh>sk>cs` att när kinesiska översätts till slovakiska och tjeckiska, delas denna terminologilista.

> [!TIP]
> Ordlistor för flerobjektiva terminologier och ordlistor för enstaka invändningar stöder kombinerad användning. Till exempel kan tre terminologiordlistor `zh>sk>cs` , `zh>sk` och `zh>cs` definieras samtidigt.