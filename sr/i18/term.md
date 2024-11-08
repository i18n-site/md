# Глоссари

Датотека речника `.i18n/term.yml` се може креирати. Следи пример речника чији је изворни језик кинески :

```yml
zh:
  快猫星云: Flashcat

zh>en:
  告警: alert
  故障: incident
```

Међу њима, `zh:` представља подразумевани кинески појмовник изворног језика : То јест, без обзира на који језик је преведен, кинески `快猫星云` је преведен на `Flashcat` !

`zh>en:` значи да када се преводи са кинеског на енглески, `告警` се преводи у `alert` , а `故障` се преводи у `incident` .

Овде се после `zh>` може написати више циљних језика, што може да поједностави конфигурацију термина на сличним језицима.

На пример, `zh>sk>cs` значи да када се кинески преводи на словачки и чешки, ова терминолошка листа се дели.

> [!TIP]
> Речник терминологије са више циљева и терминолошки глосари са једним примедбом подржавају комбиновану употребу На пример, три терминолошка речника `zh>sk>cs` , `zh>sk` и `zh>cs` могу се дефинисати у исто време.