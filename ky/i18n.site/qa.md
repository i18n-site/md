# Жалпы Көйгөй

## Кокустан `Npm` Кылынды `.i18n/V`

`npm` топтом чыгаруунун тарыхый версиясы сакталды `.i18n/v/ol/v.hash`

Эгер кокустан жок кылсаңыз `.i18n/v/ol` `npm` топтом жарыяланбайт.

Бул учурда, адегенде проектиңиздин акыркы версиясынын версия номерин табыңыз [npmjs.com](//npmjs.com) мисалы `0.1.9`

Андан кийин төмөнкү Файлды түзүү `bash`

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Бул жол менен оңдоо файл тарыхын жоготуп, кийинки релизди акырындык менен жаңыртуу мүмкүн болбой турганын жана бардык мазмун бир жолу таңгакталып, жүктөлөрүн эске алыңыз.

