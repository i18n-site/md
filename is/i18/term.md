# Orðalisti

Hægt er að búa til orðalistaskrá `.i18n/term.yml` Eftirfarandi er dæmi um orðalista sem er kínverska :

```yml
zh:
  快猫星云: Flashcat

zh>en:
  告警: alert
  故障: incident
```

Meðal þeirra táknar `zh:` sjálfgefna kínverska orðalistann fyrir upprunamálið : Það er sama á hvaða tungumáli það er þýtt, kínverska `快猫星云` er þýtt yfir á `Flashcat` !

`zh>en:` þýðir að þegar þýtt er úr kínversku yfir á ensku er `告警` þýtt í `alert` og `故障` er þýtt í `incident` .

Hér er hægt að skrifa mörg markmál eftir `zh>` , sem getur einfaldað uppsetningu hugtaka á svipuðum tungumálum.

Til dæmis þýðir `zh>sk>cs` að þegar kínverska er þýtt yfir á slóvakísku og tékknesku er þessum hugtakalisti deilt.

> [!TIP]
> Orðalistar fyrir fjölmarka hugtök og hugtök með stakri andstöðu styðja sameinaða notkun. Til dæmis er hægt að skilgreina þrjá orðalista `zh>sk>cs` , `zh>sk` og `zh>cs` á sama tíma.