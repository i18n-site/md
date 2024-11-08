# Glosar

Sljedeći je primjer pojmovnika `.i18n/term.yml` je izvorni jezik kineski :

```yml
zh:
  快猫星云: Flashcat

zh>en:
  告警: alert
  故障: incident
```

Među njima, `zh:` predstavlja zadani kineski rječnik izvornog jezika : To jest, bez obzira na koji se jezik prevodi, kineski `快猫星云` se prevodi u `Flashcat` .

`zh>en:` znači da se kod prevođenja s kineskog na engleski `告警` prevodi u `alert` , a `故障` u `incident` .

Ovdje se nakon `zh>` može napisati više ciljnih jezika, što može pojednostaviti konfiguraciju pojmova u sličnim jezicima.

Na primjer, `zh>sk>cs` znači da se ovaj terminološki popis dijeli kada se kineski prevodi na slovački i češki.

> [!TIP]
> Terminološki pojmovnici s više ciljeva i pojmovnici s jednim prigovorom podržavaju kombiniranu upotrebu, na primjer, tri terminološka pojmovnika `zh>sk>cs` , `zh>sk` i `zh>cs` mogu se definirati u isto vrijeme.