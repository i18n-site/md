# Glosar

Datoteka glosarja `.i18n/term.yml` je primer glosarja, katerega izvorni jezik je kitajščina :

```yml
zh:
  快猫星云: Flashcat

zh>en:
  告警: alert
  故障: incident
```

Med njimi `zh:` predstavlja privzeti kitajski glosar izvornega jezika : To pomeni, da je kitajščina `快猫星云` prevedena v `Flashcat` , ne glede na to, v kateri jezik je preveden.

`zh>en:` pomeni, da se pri prevajanju iz kitajščine v angleščino `告警` prevede v `alert` in `故障` v `incident` .

Tukaj je več ciljnih jezikov mogoče zapisati za `zh>` , kar lahko poenostavi konfiguracijo izrazov v podobnih jezikih.

Na primer, `zh>sk>cs` pomeni, da je ta terminološki seznam deljen, ko je kitajščina prevedena v slovaščino in češčino.

> [!TIP]
> Večpredmetni terminološki glosarji in terminološki glosarji z enim ugovorom podpirajo kombinirano uporabo. Na primer, hkrati je mogoče definirati tri terminološke glosarje `zh>sk>cs` , `zh>sk` in `zh>cs` .