# Projektversion

Nehmen Sie als Beispiel das Demoprojekt:

`en/demo2/v` ist die aktuelle Versionsnummer des Projekts, die rechts neben dem Projektnamen in der Seitenleistenübersicht angezeigt wird.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

Hier ist `en/` der Sprachcode, der der durch `.i18n/conf.yml` konfigurierten Übersetzungsausgangssprache entspricht.

Wenn Ihre Quellsprache nicht Englisch ist, sollte die `v` Datei im Projektverzeichnis Ihrer Quellsprache abgelegt werden.

Die Möglichkeit, historische Versionen von Dokumenten zu durchsuchen, befindet sich in der Entwicklung.

Es wird empfohlen, die Versionsnummer des Dokuments nur zu ändern, wenn größere Updates veröffentlicht werden (z. B. `v1` , `v2` ), um zu vermeiden, dass zu viele Versionsnummern zu Unordnung auf den von Suchmaschinen indizierten Seiten führen.

## Verwenden Sie Leere `v` Dateien, Um Die Dateiindizes Verschiedener Projekte Aufzuteilen

Im Demoprojekt können Sie neben `en/demo2/v` auch sehen, dass sich in den Verzeichnissen `en/blog` und `en/demo1` noch `v` leere Dateien befinden.

Eine leere `v` wird in der Seitenleistengliederung nicht angezeigt, aber solange eine `v` Datei vorhanden ist, wird ein unabhängiger Index für die Dateien im Verzeichnis und in den Unterverzeichnissen generiert.

Durch die Aufteilung der Indizes verschiedener Projekte können Sie einen langsamen Zugriff vermeiden, der durch das gleichzeitige Laden des Index aller Dateien auf der gesamten Site verursacht wird.

Die Indexdatei, die im Demoprojekt `blog` entspricht, [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json) beispielsweise :