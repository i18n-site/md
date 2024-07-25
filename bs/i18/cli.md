# Detaljno Objašnjenje Parametara Komandne Linije

## Očistite `-P`

Ili će `--purge` očistiti datoteke koje postoje u svakom prijevodnom direktoriju `-p` ali ne postoje u direktoriju izvornog jezika.

Zato što se prilikom pisanja dokumenata često prilagođavaju nazivi Markdown datoteka, što rezultira mnogim starim i napuštenim datotekama u prijevodnom direktoriju.

Koristite ovaj parametar za čišćenje datoteka koje treba izbrisati u direktorijima drugih jezika.

## `-D`

Prevedeni direktorij je po defaultu direktorij u kojem se nalazi trenutna datoteka.

`-d` `--workdir` može specificirati prijevodni direktorij, kao što su:

```
i18 -d ~/i18n/md
```

## `-H`

`-h` Ili `--help` Možete pogledati pomoć komandne linije.