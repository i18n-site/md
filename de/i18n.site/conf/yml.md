# .i18n/conf.yml

Das Profil für `i18n.site` ist `.i18n/conf.yml`.

Mit Ausnahme der Einstellungen [`i18`](/i18) , `ignore:` und `i18n:` lautet die Konfigurationsdatei wie folgt:

```yaml
upload:
  ext:
    - md
nav:
  - i18n: home
    use: Toc
    url: /
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
  - i18n: blog
    use: Doc
```

Dabei steht das `upload`-Element unter `ext:` für die Regelung, dass nur `.md`-Dateien bei der Veröffentlichung hochgeladen werden.

## Obere Navigation

Die Konfigurationsoptionen unter `nav:` entsprechen dem Navigationsmenü oben auf der Startseite.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Dabei entspricht `i18n: home` in `en/i18n.yml` `home: Home`.

`en/i18n.yml` wird in verschiedene Sprachen übersetzt, z.B. `zh/i18n.yml`.

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Nach Abschluss der Übersetzung können Sie den Wert der Übersetzungsdatei `yml` ändern, aber die Schlüssel der Übersetzungsdatei `yml` nicht hinzufügen oder löschen.

### `use: Toc`, Einzeldateivorlage (mit Inhaltsverzeichnis)

`nav`:

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` bedeutet, dass mit der `Toc`-Vorlage gerendert wird, was die Verwendung einer einzigen `Markdown`-Vorlage bedeutet.

`TOC` ist die Abkürzung für `Table of Contents`. Wenn diese Vorlage gerendert wird, wird der Inhaltsverzeichnisübersicht dieser `Markdown`-Datei in der Seitenleiste angezeigt.

`url:` gibt den Dateipfad der `Markdown`-Datei an (`/` entspricht dem Stammverzeichnis `/README.md`, der Dateiname muss großgeschrieben und kleingeschrieben sein).

### `use: Md`, Einzeldateivorlage (ohne Inhaltsverzeichnis)

Die `Md`-Vorlage ist wie die `Toc`-Vorlage und wird ebenfalls zur Rendrierung einer einzigen `Markdown`-Datei verwendet. Allerdings wird mit der `Md`-Vorlage kein Inhaltsverzeichnis in der Seitenleiste angezeigt.

Sie können `use: Toc` in der obigen Konfiguration durch `use: Md` ersetzen, `i18n.site` im Verzeichnis `md` erneut ausführen und dann die Entwicklungsvorschau-URL besuchen, um die Änderungen auf der Homepage zu beobachten.

### Standardmäßige Ladevorgänge ohne Konfigurationspfad

Wenn auf einen bestimmten Pfad zugegriffen wird und der Pfadpräfix nicht in `nav:` konfiguriert ist, wird standardmäßig die entsprechende `Markdown`-Datei geladen und mit der `Md`-Vorlage gerendert.

Beispielsweise wird bei Zugriff auf `/test` und fehlender Konfiguration dieses Pfades in `nav:` sowie einer englischen Sprache (Code `en`) standardmäßig `/en/test.md` geladen und mit der Vorlage `Md` gerendert.

Wenn `/en/test.md` diese Datei nicht existiert, wird die Standardseite `404` angezeigt.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc`, Vorlage für mehrere Dateien

In der Konfigurationsdatei:

```
  - i18n: blog
    use: Doc
```

Gibt an, dass die `Doc`-Vorlage für das Rendern verwendet wird.

Die `Doc`-Vorlage unterstützt die Integration mehrerer `Markdown`-Dateien, um Dokumentgliederungen für einzelne oder mehrere Projekte zu erstellen.

#### Einzelnes Projekt (mehrere Dateien)

`blog` oben ist der Einzelelementmodus der `Doc`-Vorlage.

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Wenn Die url Leer Ist, Wird Standardmäßig Der Wert i18n Verwendet

Wenn `url` nicht angegeben wird, wird `url` standardmäßig auf den Wert von `i18n` gesetzt. Diese Regel gilt ebenfalls für andere Vorlagen.

Die obige Schreibweise entspricht `url: blog`, und die entsprechende Datei ist `en/blog/TOC`.

#### Mehere Projekte

Die Konfiguration `i18n:doc` in `.i18n/conf.yml` ist der Multiprojektmodus.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Hier bedeutet `menu: NB demo1,demo2`, dass die Vorlage `NB` zum Rendern des Dropdown-Menüs verwendet wird.

`NB`, Abkürzung für `Name Brief`, bedeutet, dass der Name und der Slogan des Projekts im Dropdown-Menü angezeigt werden können.

`NB` folgt den übergebenen Parametern `demo1,demo2`.
Hinweis: **Es dürfen keine Leerzeichen vor und nach dem Komma `,` in `demo1,demo2` geben**.

Die entsprechende Verzeichnisindexdatei für die oben genannten Parameter ist:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Inhaltsverzeichnisindex

`i18n.site` führt `js` Plug-in `.i18n/hook/after.tran/TOC.js` im Demo-Warehouse aus, um die `doc` Verzeichnis-Indexdatei entsprechend der `TOC` Vorlagenkonfiguration zu lesen und die `json` Verzeichnis-Gliederung zu generieren.

Wenn die `doc`-Vorlage verwendet wird, muss dieses Plugin vorhanden sein.

Wenn `i18n.site` aus einem leeren Ordner initialisiert wird, denken Sie daran, das Demoprojekt `.i18n` in Ihr Verzeichnis zu kopieren.

Die `Doc`-Vorlage rendert die Inhaltsverzeichnis Gliederung basierend auf der generierten `json`.

##### Detailierte Inhaltserklärung

Der Inhalt von `en/blog/TOC` ist wie folgt:

```
README.md

news/README.md
  news/begin.md
```

##### Verwenden Sie Einrückungen, um Ebenen anzuzeigen

Die `README.md` in der ersten Zeile von `en/blog/TOC` entspricht der `i18n.site` im Bild unten, dem Projektnamen.

Die nächsten beiden Zeilen sind wie im folgenden Screenshot dargestellt.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` entspricht `News`,
`news/begin.md` entspricht `Our Product is Online !`

Die `TOC`-Dateien werden durch Einrückungen dargestellt, um die hierarchische Beziehung der Gliederung anzuzeigen und mehrfache Einrückungen zu unterstützen.

##### Bei mehreren Einrückungsebenen wird nur der Titel der übergeordneten Ebene geschrieben, ohne Inhalt

Wird bei mehreren Einrückungsebenen der Inhalt der übergeordneten Ebene geschrieben, wird die Typografie durcheinandergebracht.

##### Projekt README.md

In der `README.md` des Projekts, z.B. `en/demo2/README.md`, kann der Inhalt geschrieben werden.

Beachten Sie, dass der Inhalt dieser Datei kein Inhaltsverzeichnis hat. Daher wird empfohlen, die Länge zu begrenzen und eine kurze Einleitung zu schreiben.

###### Projektslogan

`Deme Two` hat unter dem Dropdown-Menü und dem Projektname im Inhaltsverzeichnis seinen Projektslogan `Your Project slogan`.

![](https://p.3ti.site/1721276842.avif)

Dies entspricht der ersten Zeile in `en/demo2/README.md`:

```
# Demo Two : Your Project slogan
```

Der Inhalt nach dem ersten Doppelpunkt `:` des Titels der ersten Ebene in der `README.md` des Projekts wird als Projektslogan betrachtet.

Benutzer aus China, Japan und Korea beachten bitte, dass Sie den Doppelpunkt `:` in halber Breite anstelle des Doppelpunkts in voller Breite verwenden sollten.

##### Wie kann ich TOC in Massen verschieben?

`TOC`-Dateien müssen im Verzeichnis der Quellsprache abgelegt werden.

Wenn die Ausgangssprache beispielsweise Chinesisch ist, ist `TOC` oben gleich `zh/blog/TOC`.

Wenn die Quellsprache geändert wird, müssen die `TOC`-Dateien einer bestimmten Sprache im Projekt in eine andere Sprache verschoben werden.

Sie können sich auf die folgenden Befehle beziehen:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Bitte ändern Sie `en/` und `zh/` im obigen Befehl in Ihren Sprachcode.