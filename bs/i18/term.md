# Glossary

Datoteka pojmovnika `.i18n/term.yml` može se kreirati. Sljedeći je primjer pojmovnika čiji je izvorni jezik kineski :

```yml
zh:
  快猫星云: Flashcat

zh>en:
  告警: alert
  故障: incident
```

Među njima, `zh:` predstavlja podrazumevani kineski pojmovnik izvornog jezika : To jest, bez obzira na koji jezik je preveden, kineski `快猫星云` je preveden na `Flashcat` !

`zh>en:` znači da kada se prevodi sa kineskog na engleski, `告警` se prevodi u `alert` , a `故障` se prevodi u `incident` .

Ovdje se nakon `zh>` može napisati više ciljnih jezika, što može pojednostaviti konfiguraciju pojmova na sličnim jezicima.

Na primjer, `zh>sk>cs` znači da kada se kineski prevodi na slovački i češki, ova terminološka lista se dijeli.

> [!TIP]
> Rečnik terminologije sa više ciljeva i terminološki glosari sa jednim prigovorom podržavaju kombinovanu upotrebu Na primer, tri terminološka rečnika `zh>sk>cs` , `zh>sk` i `zh>cs` mogu se definisati u isto vreme.