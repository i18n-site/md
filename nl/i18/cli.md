# Gedetailleerde uitleg van opdrachtregelparameters

## `-p` Opschonen van bestanden

`-p` of `--purge` verwijdert bestanden die aanwezig zijn in elke vertaalmap, maar niet in de bronmap.

Omdat het schrijven van documenten vaak inhoudt dat Markdown-bestandsnamen worden aangepast, wat leidt tot veel verouderde en overtollige bestanden in de vertaalmappen.

Met deze parameter kunnen overtollige bestanden in andere taalmappen worden opgeschoond.

## `-d` Specificeer de vertaalmap

De standaard vertaalmap is de map waarin het huidige bestand zich bevindt.

`-d` of `--workdir` kan worden gebruikt om de vertaalmap te specificeren, bijvoorbeeld:

```
i18 -d ~/i18n/md
```

## `-h` Bekijk hulp

`-h` of `--help` biedt toegang tot de hjelppagina van de opdrachtregel.