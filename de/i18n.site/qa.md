# Faq

## `.i18n/v` Wurde Versehentlich Gelöscht, Was Dazu Führte, Dass Paket `npm` Nicht Veröffentlicht Werden Konnte

Die von Paket `npm` veröffentlichte historische Version wird in `.i18n/v/ol/v.hash` gespeichert.

Wenn Sie versehentlich `.i18n/v/ol` wird Paket `npm` nicht freigegeben.

Suchen Sie zu diesem Zeitpunkt zunächst die Versionsnummer der letzten Release-Version Ihres Projekts in [npmjs.com](//npmjs.com) zum Beispiel `0.1.9` .

Beziehen Sie sich dann auf `bash` unten, um die Datei zu erstellen.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Beachten Sie, dass bei einer Reparatur auf diese Weise der Dateiverlauf verloren geht, sodass eine schrittweise Aktualisierung der nächsten Version nicht mehr möglich ist und der gesamte Inhalt einmal neu gepackt und hochgeladen wird.