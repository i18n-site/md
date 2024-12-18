# Բառարան

Բառարանի ֆայլը կարող է ստեղծվել `.i18n/term.yml` Ստորև բերված է բառարանի օրինակ, որի սկզբնական լեզուն չինարենն է :

```yml
zh:
  快猫星云: Flashcat

zh>en:
  告警: alert
  故障: incident
```

Դրանցից `zh:` `快猫星云` `Flashcat` սկզբնաղբյուր լեզվի լռելյայն չինարեն բառարանը :

`zh>en:` նշանակում է, որ չինարենից անգլերեն թարգմանելիս `告警` թարգմանվում է `alert` ի, իսկ `故障` ՝ `incident` ի:

Այստեղ մի քանի թիրախային լեզուներ կարող են գրվել `zh>` ից հետո, ինչը կարող է պարզեցնել նմանատիպ լեզուներով տերմինների կազմաձևումը:

Օրինակ, `zh>sk>cs` նշանակում է, որ երբ չինարենը թարգմանվում է սլովակերեն և չեխերեն, այս տերմինաբանական ցանկը համօգտագործվում է:

> [!TIP]
> Բազմօբյեկտիվ տերմինաբանության բառարանները և `zh>cs` առարկային տերմինաբանության բառարանները աջակցում են համակցված օգտագործմանը. Օրինակ, երեք տերմինաբանական `zh>sk` կարող են սահմանվել `zh>sk>cs` :