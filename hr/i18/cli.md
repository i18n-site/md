# Detaljno Objašnjenje Parametara Naredbenog Retka

## `-P` Očistite Datoteke

`-p` Ili `--purge` će očistiti datoteke koje postoje u svakom direktoriju prijevoda, ali ne postoje u direktoriju izvornog jezika.

Budući da se prilikom pisanja dokumenata Markdown nazivi datoteka često prilagođavaju, što rezultira mnogim starim i napuštenim datotekama u direktoriju prijevoda.

Koristite ovaj parametar za čišćenje datoteka koje bi se trebale izbrisati u direktorijima drugih jezika.

## `-D` Navedite Imenik Prijevoda

Prevedeni direktorij zadano je direktorij u kojem se nalazi trenutna datoteka.

`-d` Ili `--workdir` može odrediti direktorij prijevoda, kao što je:

```
i18 -d ~/i18n/md
```

## `-H` Pogledajte Pomoć

`-h` `--help` Možete pogledati pomoć naredbenog retka.