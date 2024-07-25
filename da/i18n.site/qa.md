# Almindeligt Problem

## Slettet Ved Et Uheld `.i18n/V` Hvilket Medfører, at `Npm` -Pakken Ikke Bliver Offentliggjort

Den historiske version af `npm` pakkeudgivelse er gemt i `.i18n/v/ol/v.hash`

Hvis du ved et uheld sletter `.i18n/v/ol` vil `npm` -pakken ikke blive offentliggjort.

På dette tidspunkt skal du først finde versionsnummeret på den sidste udgivelsesversion af dit projekt i for eksempel [npmjs.com](//npmjs.com) `0.1.9`

Derefter henvises til `bash` Opret filen nedenfor.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Bemærk, at reparation på denne måde vil miste filhistorikken, hvilket gør det umuligt at opdatere den næste udgivelse trinvist, og alt indhold vil blive ompakket og uploadet én gang.

