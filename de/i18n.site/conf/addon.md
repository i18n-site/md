# Plug-In

Plug-Ins können in `.i18n/conf.yml` konfiguriert werden, wie zum Beispiel:

```yml
addon:
  - i18n.addon/toc
```

## Offizielles Plug-In

* `i18n.addon/toc` : Verzeichnisindex
  Verzeichnisindex `json` basierend auf `TOC` generieren, standardmäßig aktiviert

* `i18n.addon/mouse` : Mauseffekte

## Konvention Für Dateinamen

Plug-Ins sind alle `npm` Pakete.

Das Paket, das oben `i18n.addon/toc` entspricht, ist [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

Das Plugin verwendet standardmäßig die neueste Version und sucht wöchentlich nach Updates.

Wenn Sie die Version reparieren möchten, können Sie `i18n.addon/toc@0.1.3` schreiben.

Die Übersetzungsbefehlszeile `i18n.site` installiert die Konventionsdatei des Plug-in-Pakets und führt sie dann aus.

Die vereinbarten Dateinamen lauten wie folgt

### htmIndex.js

`htmIndex.js` wird am Ende von `.i18n/htm/index.js` eingefügt.

Dabei wird `__CONF__` durch den Namen der aktuellen Konfiguration ersetzt (z. B. `dev` oder `ol` ).

### afterTran.js

Es wird nach Abschluss der Übersetzung aufgerufen und die übergebenen Parameter lauten wie folgt.

* `lang_li` : Sprachenliste, die erste Sprache ist die Ausgangssprache
* `changed` : Geänderte Dateien
* `root` : Projektstammverzeichnis

Der Rückgabewert ist ein Wörterbuch, z

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` ist die Ausgabedateiliste, `path` ist der Dateipfad und `txt` ist der Dateiinhalt.

## Integrierte Funktionen

Die integrierte `js` Laufzeit basiert auf der Sekundärentwicklung von [boa](https://github.com/boa-dev/boa) und die integrierten Funktionen sind wie folgt :

* `wPath(path, txt)` : In Datei schreiben
* `rTxt(path)` : Textdatei lesen
* `rBin(path)` : Binärdatei lesen
* `rDir(dirpath)` : Liest das Verzeichnis, der Rückgabewert ist ein Array : , Dateiliste

## Entwicklungshandbuch

Die Plug-in-Entwicklung kann eine Referenz sein [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)