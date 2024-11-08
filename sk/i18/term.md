# Slovník Pojmov

Je možné vytvoriť súbor slovníka `.i18n/term.yml` Nasleduje príklad slovníka, ktorého zdrojovým jazykom je čínština :

```yml
zh:
  快猫星云: Flashcat

zh>en:
  告警: alert
  故障: incident
```

Medzi nimi `zh:` predstavuje predvolený čínsky slovník zdrojového jazyka : to znamená, že bez ohľadu na to, do akého jazyka je preložený, čínština `快猫星云` je preložená do `Flashcat` .

`zh>en:` znamená, že pri preklade z čínštiny do angličtiny sa `告警` preloží do `alert` a `故障` sa preloží do `incident` .

Tu je možné zapísať viacero cieľových jazykov po `zh>` , čo môže zjednodušiť konfiguráciu výrazov v podobných jazykoch.

Napríklad `zh>sk>cs` znamená, že pri preklade čínštiny do slovenčiny a češtiny sa tento zoznam terminológie zdieľa.

> [!TIP]
> Slovníky terminológie s viacerými cieľmi a slovníky terminológie s jedným objektom podporujú kombinované použitie. Napríklad je možné definovať tri terminologické slovníky `zh>sk>cs` , `zh>sk` a `zh>cs` súčasne.