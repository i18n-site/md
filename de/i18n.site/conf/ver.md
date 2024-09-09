# Projektversion

Als Beispiel für das Demoprojekt:

`en/demo2/v` ist die aktuelle Versionsnummer des Projekts und wird rechts neben dem Namen des Projekts in der seitlichen Inhaltsübersicht angezeigt.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

Hierbei ist `en/` der Sprachcode, der der in `.i18n/conf.yml` konfigurierten Standardsprache entspricht.

Falls Ihre Standardsprache nicht Englisch ist, sollte die Datei `v` in das Verzeichnis Ihres Projekts in der Standardsprache verschoben werden.

Die Funktion zur Ansicht der Dokumentenversionen befindet sich in der Entwicklung.

Es wird empfohlen, die Versionsnummer der Dokumente nur bei bedeutenden Updates (wie `v1`, `v2`) zu ändern, um zu vermeiden, dass zu viele Versionen die Suchmaschinenindizes durcheinanderbringen.

## Verwenden Sie leere `v`-Dateien, um die Dateiindizes verschiedener Projekte zu trennen

In dem Demoprojekt sind neben `en/demo2/v` auch leere `v`-Dateien in den Verzeichnissen `en/blog` und `en/demo1` zu finden.

Eine leere `v` wird nicht in der Seitenleistenübersicht angezeigt, aber wenn eine `v`-Datei existiert, wird für das Verzeichnis und seine Unterverzeichnisse ein separater Index generiert.

Durch die Trennung der Indizes verschiedener Projekte kann verhindert werden, dass die Ladezeit verzögert wird, die durch das gleichzeitige Laden aller Dateiindizes der gesamten Website verursacht wird.

Beispielsweise ist die Indexdatei für den `blog` im Demoprojekt: [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json)