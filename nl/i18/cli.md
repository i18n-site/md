# Gedetailleerde Uitleg Van Opdrachtregelparameters

## `-p` Bestanden

`-p` of `--purge` worden bestanden gewist die in elke vertaaldirectory aanwezig zijn, maar niet in de brontaaldirectory.

Omdat bij het schrijven van documenten de Markdown-bestandsnamen vaak worden aangepast, wat leidt tot veel oude en verlaten bestanden in de vertaaldirectory.

Gebruik deze parameter om bestanden op te ruimen die in andere taalmappen moeten worden verwijderd.

## `-d` Specificeert De Vertaalmap

De vertaalde map is standaard de map waar het huidige bestand zich bevindt.

`-d` of `--workdir` kan de vertaaldirectory specificeren, zoals:

```
i18 -d ~/i18n/md
```

## `-h` Hulp Bekijken

`-h` of `--help` om hulp bij de opdrachtregel te bekijken.