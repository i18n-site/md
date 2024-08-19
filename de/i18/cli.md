# Detaillierte Erklärung der Befehlszeilenparameter

## `-p` zur Bereinigung von Dateien

`-p` oder `--purge` entfernt Dateien, die in den Übersetzungsverzeichnissen vorhanden sind, aber nicht im Verzeichnis der Originalsprache.

Denn beim Verfassen von Dokumenten werden oft Markdown-Dateinamen angepasst, was dazu führt, dass viele veraltete Dateien im Übersetzungsverzeichnis übrig bleiben.

Mit diesem Parameter können Sie Dateien bereinigen, die in anderen Sprachverzeichnissen gelöscht werden sollten.

## `-d` zum Festlegen des Übersetzungsverzeichnisses

Das Standard-Übersetzungsverzeichnis ist das Verzeichnis, in dem sich die aktuelle Datei befindet.

`-d` oder `--workdir` können verwendet werden, um das Übersetzungsverzeichnis anzugeben, zum Beispiel:

```
i18 -d ~/i18n/md
```

## `-h` zur Anzeige der Hilfe

`-h` oder `--help` zur Anzeige der Befehlszeilenhilfe.