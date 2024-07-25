# Gedetailleerde Uitleg Van Opdrachtregelparameters

## `-P` Schone Bestanden

`-p` Of `--purge` ruimt bestanden op die in elke vertaalmap voorkomen, maar niet in de brontaalmap.

Omdat bij het schrijven van documenten de Markdown-bestandsnamen vaak worden aangepast, wat resulteert in veel oude en verlaten bestanden in de vertaaldirectory.

Gebruik deze parameter om bestanden op te ruimen die in andere taalmappen moeten worden verwijderd.

## `-D` Geef De Vertaaldirectory Op

De vertaalde map is standaard de map waar het huidige bestand zich bevindt.

`-d` Of `--workdir` kan de vertaaldirectory specificeren, zoals:

```
i18 -d ~/i18n/md
```

## `-H` Bekijk Hulp

`-h` Of `--help` kunt de hulp bij de opdrachtregel bekijken.