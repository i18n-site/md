# Gedetailleerde uitleg van opdrachtregelparameters

## `-p` Opschonen van bestanden

`-p` of `--purge` verwijdert bestanden die aanwezig zijn in elke vertaaldirectory, maar niet in de brontaaldirectory.

Omdat het schrijven van documenten vaak inhoudt dat Markdown-bestandsnamen worden aangepast, wat resulteert in vele verouderde en overtollige bestanden in de vertaaldirectory's.

Met deze parameter kunnen overtollige bestanden in andere taalmaps worden opgeruimd.

## `-d` Specificeert de vertaalmap

De standaard vertaalmap is de map waarin het huidige bestand zich bevindt.

`-d` of `--workdir` kan worden gebruikt om de vertaalmap te specificeren, bijvoorbeeld:

```
i18 -d ~/i18n/md
```

## `-h` Bekijk hulp

`-h` of `--help` om hulp bij de opdrachtregel weer te geven.