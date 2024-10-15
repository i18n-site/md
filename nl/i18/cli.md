# Gedetailleerde uitleg van opdrachtregelparameters

## `-p` Opschonen van bestanden

`-p` of `--purge` verwijdert bestanden die aanwezig zijn in elke vertaalmap, maar niet in de map met de brontaal.

Omdat het schrijven van documenten vaak inhoudt dat Markdown-bestandsnamen worden aangepast, wat resulteert in veel verouderde en overtollige bestanden in de vertaalmappen.

Gebruik deze parameter om overtollige bestanden in andere taalmappen te verwijderen.

## `-d` Specificeer de vertaalmap

De standaard vertaalmap is de map waarin het huidige bestand zich bevindt.

`-d` of `--workdir` kan worden gebruikt om de vertaalmap te specificeren, bijvoorbeeld:

```
i18 -d ~/i18n/md
```

## `-h` Bekijk hulp

`-h` of `--help` om hulp bij de opdrachtregel te bekijken.