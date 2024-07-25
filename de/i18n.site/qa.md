# Häufiges Problem

## Versehentlich Gelöscht `.i18n/V` Dadurch Konnte Das `Npm` Paket Nicht Veröffentlicht Werden

`.i18n/v/ol/v.hash` Die historische Version von `npm` Paketversion ist gespeichert in !

Wenn Sie `.i18n/v/ol` wird das `npm` Paket nicht veröffentlicht.

Suchen Sie zu diesem Zeitpunkt zunächst die Versionsnummer der letzten Release-Version Ihres Projekts in [npmjs.com](//npmjs.com) `0.1.9`

Dann beziehen Sie sich auf die Datei `bash` Erstellen“ unten.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Beachten Sie, dass bei einer Reparatur auf diese Weise der Dateiverlauf verloren geht, sodass eine schrittweise Aktualisierung der nächsten Version nicht mehr möglich ist und der gesamte Inhalt einmal neu gepackt und hochgeladen wird.

