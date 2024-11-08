# Detaljno Objašnjenje Parametara Komandne Linije

## `-p` Fajlove

`-p` ili `--purge` će izbrisati datoteke koje postoje u svakom prijevodnom direktoriju, ali ne postoje u direktoriju izvornog jezika.

Zato što se prilikom pisanja dokumenata često prilagođavaju nazivi Markdown datoteka, što dovodi do mnogih starih i napuštenih datoteka u prijevodnom direktoriju.

Koristite ovaj parametar za čišćenje datoteka koje treba izbrisati u direktorijima drugih jezika.

## `-d` Specificira Prijevodni Direktorij

Prevedeni direktorij je po defaultu direktorij u kojem se nalazi trenutna datoteka.

`-d` ili `--workdir` može specificirati prijevodni direktorij, kao što je:

```
i18 -d ~/i18n/md
```

## `-h` Pogledajte Pomoć

`-h` ili `--help` da vidite pomoć komandne linije.