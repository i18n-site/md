# Glosārijs

Var izveidot glosārija failu `.i18n/term.yml` Šis ir glosārija piemērs, kura avota valoda ir ķīniešu :

```yml
zh:
  快猫星云: Flashcat

zh>en:
  告警: alert
  故障: incident
```

Starp tiem `zh:` apzīmē avota valodas noklusējuma ķīniešu glosāriju : Tas nozīmē, ka neatkarīgi no tā, kādā valodā tas ir tulkots, ķīniešu `快猫星云` tiek tulkots `Flashcat` .

`zh>en:` nozīmē, ka, tulkojot no ķīniešu valodas uz angļu valodu, `告警` tiek tulkots `alert` un `故障` tiek tulkots `incident` .

Šeit pēc `zh>` var rakstīt vairākas mērķa valodas, kas var vienkāršot terminu konfigurēšanu līdzīgās valodās.

Piemēram, `zh>sk>cs` nozīmē, ka tad, kad ķīniešu valoda tiek tulkota slovāku un čehu valodā, šis terminu saraksts tiek koplietots.

> [!TIP]
> Vairāku mērķu terminoloģijas glosāriji un viena objekta terminoloģijas glosāriji atbalsta kombinētu lietošanu, piemēram, vienlaikus var definēt trīs terminu glosārijus `zh>sk>cs` , `zh>sk` un `zh>cs` .