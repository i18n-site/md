# Detaillierte Erläuterung Der Befehlszeilenparameter

## 0Dateien `-p`

`-p` oder `--purge` löscht Dateien, die in jedem Übersetzungsverzeichnis, aber nicht im Quellsprachenverzeichnis vorhanden sind.

Denn beim Schreiben von Dokumenten werden Markdown-Dateinamen oft angepasst, was zu vielen alten und verlassenen Dateien im Übersetzungsverzeichnis führt.

Verwenden Sie diesen Parameter, um Dateien zu bereinigen, die in anderen Sprachverzeichnissen gelöscht werden sollen.

## `-d` Gibt Das Übersetzungsverzeichnis An

Das übersetzte Verzeichnis ist standardmäßig das Verzeichnis, in dem sich die aktuelle Datei befindet.

`-d` oder `--workdir` können das Übersetzungsverzeichnis angeben, z. B.:

```
i18 -d ~/i18n/md
```

## `-h` Hilfe Anzeigen

`-h` oder `--help` um die Befehlszeilenhilfe anzuzeigen.