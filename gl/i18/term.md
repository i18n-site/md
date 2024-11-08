# Glosario

Pódese crear o ficheiro de glosario `.i18n/term.yml` O seguinte é un exemplo dun glosario cuxa lingua de orixe é o chinés :

```yml
zh:
  快猫星云: Flashcat

zh>en:
  告警: alert
  故障: incident
```

Entre eles `快猫星云` `zh:` representa o glosario de chinés predeterminado da lingua `Flashcat` orixe :

`zh>en:` significa que ao traducir do chinés ao inglés, `告警` tradúcese en `alert` e `故障` tradúcese en `incident` .

Aquí pódense escribir varias linguas de destino despois de `zh>` , o que pode simplificar a configuración de termos en linguas similares.

Por exemplo, `zh>sk>cs` significa que cando se traduce o chinés ao eslovaco e ao checo, esta lista terminolóxica compártese.

> [!TIP]
> Os glosarios de terminoloxía multiobxectivo e os glosarios de terminoloxía de obxección única admiten o uso combinado. Por exemplo, pódense definir tres glosarios terminolóxicos `zh>sk>cs` , `zh>sk` e `zh>cs` ao mesmo tempo.