# FAQ

## Versehentlich `.i18n/v` gelöscht, waardoor het `npm`-Paket nicht veröffentlicht werden kann

Die Veröffentlichungsgeschichte des `npm`-Pakets wird in `.i18n/v/ol/v.hash` gespeichert.

Wenn Sie versehentlich `.i18n/v/ol` löschen, kann das `npm`-Paket nicht veröffentlicht werden.

Zu diesem Zeitpunkt sollten Sie zunächst die Versionsnummer der letzten Veröffentlichungsversion Ihres Projekts auf [npmjs.com](//npmjs.com) ermitteln, zum Beispiel `0.1.9`.

Dann beziehen Sie sich auf die folgende `bash`, um die Datei zu erstellen.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Beachten Sie, dass diese Methode zur Reparatur den Verlauf der Datei verliert, sodass keine inkrementelle Aktualisierung bei der nächsten Veröffentlichung möglich ist, und der gesamte Inhalt wird vollständig neu gepackt und hochgeladen.