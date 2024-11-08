# Žodynėlis

Galima sukurti žodyno failą `.i18n/term.yml` Toliau pateikiamas žodyno, kurio šaltinio kalba yra kinų, pavyzdys :

```yml
zh:
  快猫星云: Flashcat

zh>en:
  告警: alert
  故障: incident
```

Tarp jų `zh:` reiškia numatytąjį šaltinio kalbos kinų žodyną : Tai yra, nesvarbu, į kokią kalbą jis išverstas, kinų `快猫星云` yra išverstas į `Flashcat` !

`zh>en:` reiškia, kad verčiant iš kinų kalbos į anglų kalbą, `告警` yra verčiamas į `alert` , o `故障` – į `incident` .

Čia po `zh>` galima parašyti kelias tikslines kalbas, o tai gali supaprastinti terminų konfigūravimą panašiomis kalbomis.

Pavyzdžiui, `zh>sk>cs` reiškia, kad išvertus kinų kalbą į slovakų ir čekų kalbą, šis terminų sąrašas bendrinamas.

> [!TIP]
> Kelių tikslų terminų žodynai ir vieno objekto terminų žodynai palaiko kombinuotą naudojimą. Pavyzdžiui, vienu metu galima apibrėžti tris terminų žodynus `zh>sk>cs` , `zh>sk` ir `zh>cs` .