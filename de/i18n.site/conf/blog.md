# Blog-Vorlage

`i18n/conf.yml` von `use: Blog` bedeutet, dass die Blog-Vorlage zum Rendern verwendet wird.

Die `markdown` Datei des Blog-Beitrags muss Metainformationen konfigurieren.

Metainformationen müssen am Anfang der Datei stehen, beginnend mit `---` und endend mit `---` Das Format der Konfigurationsinformationen in der Mitte ist `YAML` .

Die Konfiguration einer Demodatei ist wie folgt:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` gibt die Inhaltszusammenfassung an, die auf der Blog-Indexseite angezeigt wird.

Mit Hilfe von `YMAL` ‘ | „Syntax, Sie können mehrzeilige Zusammenfassungen schreiben.“

Die Konfiguration des Verzeichnisbaums auf der rechten Seite des Blogs umfasst ebenfalls `TOC` Dateien (siehe vorheriges Kapitel). Nur die in `TOC` aufgeführten Artikel werden im Blog-Homepage-Index angezeigt.

Artikel, die keine Metainformationen enthalten, werden nicht auf der Blog-Startseite angezeigt, können aber im Verzeichnisbaum auf der rechten Seite erscheinen.

## Informationen Zum Autor

Autoreninformationen können in die Metainformationen des Artikels geschrieben werden, wie zum Beispiel:

```yml
author: marlowe
```

Bearbeiten Sie dann `author.yml` im Quellsprachenverzeichnis und fügen Sie Autoreninformationen hinzu, z. B. :

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

`name` , `url` und `title` sind alle optional. Wenn `name` nicht gesetzt ist, wird der Schlüsselname (hier `marlowe` ) als `name` verwendet.

Siehe Demoprojekt [`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1) und [`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml)

## Angepinnter Artikel

Wenn Sie den Artikel oben anheften müssen, führen Sie bitte `i18n.site` aus, bearbeiten Sie die `xxx.yml` Dateien unter `.i18n/data/blog` und ändern Sie den Zeitstempel in eine negative Zahl (mehrere negative Zahlen werden vom größten zum kleinsten sortiert).