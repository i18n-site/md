# Sõnastik

Sõnastikfaili `.i18n/term.yml` saab luua. Järgnevalt on toodud näide sõnastikust, mille lähtekeel on hiina :

```yml
zh:
  快猫星云: Flashcat

zh>en:
  告警: alert
  故障: incident
```

Nende hulgas tähistab `zh:` lähtekeele hiina vaikimisi sõnastikku : See tähendab, et olenemata sellest, millisesse keelde see on tõlgitud, tõlgitakse hiina `快猫星云` `Flashcat` .

`zh>en:` tähendab, et hiina keelest inglise keelde tõlkides `告警` tõlgitakse `alert` ja `故障` `incident` ks.

Siin saab pärast `zh>` kirjutada mitu sihtkeelt, mis võib sarnastes keeltes terminite konfigureerimist lihtsustada.

Näiteks `zh>sk>cs` tähendab, et kui hiina keel tõlgitakse slovaki ja tšehhi keelde, jagatakse seda terminite loendit.

> [!TIP]
> Mitme eesmärgiga terminoloogiasõnastikud ja ühe objektiga terminoloogiasõnastikud toetavad kombineeritud kasutamist. Näiteks saab korraga määratleda kolm terminoloogiasõnastikku `zh>sk>cs` , `zh>sk` ja `zh>cs` .