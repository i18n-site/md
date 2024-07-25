# Projektversion

Nehmen Sie als Beispiel das Demoprojekt:

`en/demo2/v` ist die aktuelle Versionsnummer des Projekts, die rechts neben dem Projektnamen in der Seitenleiste angezeigt wird.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

`en/` ist der Sprachcode, der der `.i18n/conf.yml` Übersetzungsausgangssprache entspricht.

Wenn Ihre Quellsprache nicht Englisch ist, sollte die `v` -Datei im Projektverzeichnis Ihrer Quellsprache abgelegt werden. 

Die Möglichkeit, historische Versionen von Dokumenten zu durchsuchen, befindet sich in der Entwicklung.

Es wird empfohlen, die Versionsnummer des Dokuments nur dann zu ändern, wenn größere Updates veröffentlicht werden (z. B. `v1` , `v2` ), um zu vermeiden, dass die von Suchmaschinen indizierten Seiten aufgrund zu vieler Versionsnummern überladen werden.

## Verwenden Sie Leere `v` -Dateien, Um Dateiindizes Für Verschiedene Projekte Aufzuteilen

Im Demoprojekt können Sie zusätzlich zu `en/demo2/v` auch sehen, dass der Inhalt `en/blog` und `en/demo1` leer ist `v` Dateien.

Empty `v` wird nicht in der Seitenleistenübersicht angezeigt, aber solange die `v` -Datei vorhanden ist, wird ein unabhängiger Index für die Dateien im Verzeichnis und in den Unterverzeichnissen generiert.

Durch die Aufteilung der Indizes verschiedener Projekte können Sie einen langsamen Zugriff vermeiden, der durch das gleichzeitige Laden des Index aller Dateien auf der gesamten Site verursacht wird.

Im Demoprojekt : die entsprechende Indexdatei [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json) `blog`

