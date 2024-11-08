# Glossaire

Le fichier de glossaire `.i18n/term.yml` peut être créé. Voici un exemple de glossaire dont la langue source est le chinois :

```yml
zh:
  快猫星云: Flashcat

zh>en:
  告警: alert
  故障: incident
```

Parmi eux, `zh:` représente le glossaire chinois par défaut de la langue source : Autrement dit, quelle que soit la langue dans laquelle il est traduit, le chinois `快猫星云` est traduit en `Flashcat` .

`zh>en:` signifie que lors de la traduction du chinois vers l'anglais, `告警` est traduit en `alert` et `故障` est traduit en `incident` .

Ici, plusieurs langues cibles peuvent être écrites après `zh>` , ce qui peut simplifier la configuration des termes dans des langues similaires.

Par exemple, `zh>sk>cs` signifie que lorsque le chinois est traduit en slovaque et en tchèque, cette liste terminologique est partagée.

> [!TIP]
> Les glossaires terminologiques multi-objectifs et les glossaires terminologiques à objection unique prennent en charge une utilisation combinée. Par exemple, trois glossaires terminologiques `zh>sk>cs` , `zh>sk` et `zh>cs` peuvent être définis en même temps.