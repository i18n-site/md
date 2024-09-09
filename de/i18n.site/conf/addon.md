# Plug-In

Plugins können in `.i18n/conf.yml` konfiguriert werden, wie folgt:

```yml
addon:
  - i18n.addon/toc
```

## Offizielles Plugin

* `i18n.addon/toc` : Inhaltsverzeichnis-Index
  Inhaltsverzeichnis-Index `json` basierend auf `TOC` erstellen, standardmäßig aktiviert

* `i18n.addon/mouse` : Maus-Effekte

## Dateinamenkonvention

Plugins sind alle `npm`-Pakete.

Das oben genannte Paket `i18n.addon/toc` entspricht [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc).

Plugins verwenden standardmäßig die neueste Version und überprüfen wöchentlich auf Updates.

Wenn eine feste Version verwendet werden soll, kann `i18n.addon/toc@0.1.3` geschrieben werden.

Die Übersetzungskommandozeile `i18n.site` installiert die Konventiondatei des Plug-in-Pakets und führt sie anschließend aus.

Die vereinbarten Dateinamen sind wie folgt

### htmIndex.js

`htmIndex.js` wird am Ende von `.i18n/htm/index.js` eingebettet.

Dabei wird `__CONF__` durch den Namen der aktuellen Konfiguration ersetzt (beispielsweise `dev` oder `ol`).

### afterTran.js

Dies wird nach Abschluss der Übersetzung aufgerufen und die übergebenen Parameter sind wie folgt.

* `lang_li` : Sprachenliste, die erste Sprache ist die Quellsprache
* `changed` : Geänderte Dateien
* `root` : Stammverzeichnis des Projekts

Der Rückgabewert ist ein Dictionary, zum Beispiel

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` ist die Liste der Ausgabedateien, `path` ist der Dateipfad und `txt` ist der Inhalt der Datei.

## Integrierte Funktionen

Die integrierte `js`-Laufzeit basiert auf einer Weiterentwicklung von [Boa](https://github.com/boa-dev/boa) und die eingebauten Funktionen sind wie folgt:

* `wPath(path, txt)` : In Datei schreiben
* `rTxt(path)` : Textdatei lesen
* `rBin(path)` : Binärdatei lesen
* `rDir(dirpath)` : Verzeichnis lesen, der Rückgabewert ist ein Array: Verzeichnisliste, Dateiliste

## Entwicklungsleitfaden

Die Plug-in-Entwicklung kann sich auf [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon) beziehen