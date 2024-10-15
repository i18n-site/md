# Detaljno Objašnjenje Parametara Naredbenog Retka

## `-p`

`-p` ili `--purge` će izbrisati datoteke koje postoje u svakom direktoriju prijevoda, ali ne postoje u direktoriju izvornog jezika.

Budući da se prilikom pisanja dokumenata Markdown nazivi datoteka često prilagođavaju, što dovodi do mnogih starih i napuštenih datoteka u direktoriju prijevoda.

Koristite ovaj parametar za čišćenje datoteka koje bi se trebale izbrisati u direktorijima drugih jezika.

## `-d` Navodi Direktorij Prijevoda

Prevedeni direktorij zadano je direktorij u kojem se nalazi trenutna datoteka.

`-d` ili `--workdir` može odrediti direktorij prijevoda, kao što je:

```
i18 -d ~/i18n/md
```

## `-h` Pogledajte Pomoć

`-h` ili `--help` za pregled pomoći za naredbeni redak.