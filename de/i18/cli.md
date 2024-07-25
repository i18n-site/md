# Detaillierte Erläuterung Der Befehlszeilenparameter

## `-P` Saubere Dateien

`-p` Oder `--purge` bereinigt Dateien, die in jedem Übersetzungsverzeichnis, aber nicht im Quellsprachenverzeichnis vorhanden sind.

Denn beim Schreiben von Dokumenten werden Markdown-Dateinamen häufig angepasst, was dazu führt, dass sich viele alte und aufgegebene Dateien im Übersetzungsverzeichnis befinden.

Verwenden Sie diesen Parameter, um Dateien zu bereinigen, die in anderen Sprachverzeichnissen gelöscht werden sollen.

## `-D` Übersetzungsverzeichnis Angeben

Das übersetzte Verzeichnis ist standardmäßig das Verzeichnis, in dem sich die aktuelle Datei befindet.

`-d` Oder `--workdir` kann das Übersetzungsverzeichnis angeben, wie zum Beispiel:

```
i18 -d ~/i18n/md
```

## `-H` Hilfe Anzeigen

`-h` Oder `--help` können die Befehlszeilenhilfe anzeigen.