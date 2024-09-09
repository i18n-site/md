# .i18n/conf.yml

Das Konfigurationsfile für `i18n.site` ist `.i18n/conf.yml`.

Ausgenommen von den Einstellungen [`i18`](/i18), `ignore:` und `i18n:` sieht die Konfigurationsdatei wie folgt aus:

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
addon:
  - i18n.addon/toc
```

Dort bedeutet die `upload`-Konfiguration mit `ext:`, dass beim Veröffentlichen nur `.md`-Dateien hochgeladen werden.

## Oberste Navigation

Die Konfigurationsoptionen für `nav:` entsprechen der Navigationsleiste oben auf der Startseite.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Dort entspricht `i18n: home` dem Eintrag `home: Home` in `en/i18n.yml`.

`en/i18n.yml` wird in mehrere Sprachen übersetzt, zum Beispiel `zh/i18n.yml`.

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Nach Abschluss der Übersetzung können die Werte der Übersetzungsdatei `yml` geändert werden, aber die Schlüssel der Übersetzungsdatei `yml` nicht hinzugefügt oder gelöscht werden.

### `use: Toc`, Einzeldateivorlage (mit Inhaltsverzeichnis)

Im `nav`-Bereich:

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` bedeutet, dass die `Toc`-Vorlage verwendet wird, um eine einzelne `Markdown`-Datei zu rendern.

`TOC` ist die Abkürzung für `Table of Contents`. Diese Vorlage rendert eine Inhaltsübersicht der `Markdown`-Datei in der Seitenleiste.

`url:` gibt den `Markdown`-Dateipfad an ( `/` entspricht dem Stammverzeichnis `/README.md`, dieser Dateiname sollte ein Großbuchstaben-Präfix und ein Kleinbuchstaben-Suffix haben).

### `use: Md`, Einzeldateivorlage (ohne Inhaltsverzeichnis)

Die `Md`-Vorlage ist wie die `Toc`-Vorlage zum Rendern einer einzelnen `Markdown`-Datei, aber die `Md`-Vorlage zeigt kein Inhaltsverzeichnis in der Seitenleiste an.

Sie können `use: Toc` in der obigen Konfiguration in `use: Md` ändern, `i18n.site` im `md`-Verzeichnis erneut ausführen und dann die Entwicklungsvorschau-URL besuchen, um die Änderungen auf der Startseite zu beobachten.

### Keine Konfigurationspfad-Standardladung

Wenn auf einen bestimmten Pfad zugegriffen wird und sein Pfadpräfix nicht in `nav:` konfiguriert ist, wird standardmäßig die dem Pfad entsprechende `Markdown`-Datei geladen und mit der `Md`-Vorlage gerendert.

Zum Beispiel, wenn auf `/test` zugegriffen wird und `nav:` für diesen Pfad nicht konfiguriert ist und die Seitensprache Englisch ist (Code `en`), wird `/en/test.md` standardmäßig geladen und mit der `Md`-Vorlage gerendert.

Wenn `/en/test.md` nicht existiert, wird die Standard-`404`-Seite angezeigt.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc`, Mehrdateivorlage

In der Konfigurationsdatei:

```
  - i18n: blog
    use: Doc
```

Es wird angegeben, dass `Doc` für das Rendern der Vorlage verwendet wird.

Die `Doc`-Vorlage unterstützt die Integration mehrerer `Markdown`-Dateien zur Erstellung von Dokumentgliederungen für einzelne oder mehrere Projekte.

#### Einzelpjekt (mehrere Dateien)

`blog` oben ist der Einzelpjektmodus von `Doc`.

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Wenn die URL leer ist, wird standardmäßig der Wert von i18n verwendet

Wenn `url` nicht angegeben wird, wird `url` standardmäßig auf den Wert `i18n` gesetzt. Diese Regel gilt auch für andere Vorlagen.

Die obige Schreibweise entspricht `url: blog`, und die entsprechende Datei ist `en/blog/TOC`.

#### Mehrere Projekte

Die Konfiguration `i18n:doc` in `.i18n/conf.yml` ist der Multiprojektmodus.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Hier bedeutet `menu: NB demo1,demo2`, dass die Vorlage `NB` zum Rendern des Dropdown-Menüs verwendet wird.

`NB` ist die Abkürzung für `Name Brief`, was bedeutet, dass das Dropdown-Menü den Namen und den Slogan des Projekts anzeigen kann.

`NB` folgt den an ihn übergebenen Parameter `demo1,demo2`.
Achtung: ** Vor und nach dem Komma `,` in `demo1,demo2` dürfen keine Leerzeichen sein **.

Für die oben genannten Parameter lautet die entsprechende Verzeichnisindexdatei:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Inhaltsverzeichnis-Verzeichnisindex

`i18n.site` führt das `js`-Plugin `.i18n/hook/after.tran/TOC.js` im Demo-Repository aus, um die `doc`-Verzeichnisindexdatei entsprechend der `TOC`-Vorlagenkonfiguration zu lesen und eine Inhaltsverzeichnis-`json` zu generieren.

Wenn Sie die `Doc`-Vorlage verwenden, müssen Sie über dieses Plugin verfügen.

Wenn Sie das `i18n.site`-Projekt aus einem leeren Ordner initialisieren, denken Sie daran, das `.i18n`-Verzeichnis des Demoprojekts in Ihr Verzeichnis zu kopieren.

Die `Doc`-Vorlage rendert die Inhaltsverzeichnis-Gliederung basierend auf der generierten `json`.

##### Detaillierte Inhaltsbeschreibung

Der Inhalt von `en/blog/TOC` lautet wie folgt:

```
README.md

news/README.md
  news/begin.md
```

##### Verwenden Sie Einrückungen, um Ebenen anzuzeigen

Die erste Zeile von `en/blog/TOC`, `README.md`, entspricht der `i18n.site` im folgenden Bild, dem Projektnamen.

Die nächsten beiden Zeilen sind wie im folgenden Screenshot dargestellt.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` entspricht `News`
`news/begin.md` entspricht `Our Product is Online !`

`TOC`-Dateien verwenden Einrückungen, um die Gliederungshierarchie anzuzeigen, unterstützen mehrere Einrückungsebenen und verwenden Zeilenkommentare, die mit `#` beginnen.

##### Obergeordnete Ebenen geben nur den Titel an, nicht den Inhalt

Bei mehreren Einrückungsebenen geben die obergeordneten Ebenen nur den Titel und nicht den Inhalt an, um ein Durcheinander in der Formatierung zu vermeiden.

##### Projekt-README.md

Der Inhalt kann im Projekt-`README.md` geschrieben werden, zum Beispiel in `en/demo2/README.md`.

Beachten Sie, dass der Inhalt dieser Datei kein Inhaltsverzeichnis enthält. Es wird daher empfohlen, die Länge zu begrenzen und eine kurze Einführung zu schreiben.

###### Projektslogan

Man kann sehen, dass `Your Project slogan` unter dem Dropdown-Menü und der Projektnamen-Übersicht `Deme Two` seinen Projektslogan hat.

![](https://p.3ti.site/1721276842.avif)

Dies entspricht der ersten Zeile von `en/demo2/README.md`:

```
# Demo Two : Your Project slogan
```

Der Inhalt nach dem ersten Doppelpunkt `:` im Titel der ersten Ebene des Projekt-`README.md` wird als Projektslogan betrachtet.

Benutzer aus China, Japan und Korea beachten bitte, dass sie den halben Doppelpunkt `:` anstelle des vollen Doppelpunkts verwenden sollten.

##### Wie kann man das Inhaltsverzeichnis in großen Mengen verschieben?

`TOC`-Dateien müssen im Verzeichnis der Quellsprache gespeichert werden.

Wenn die Ausgangssprache beispielsweise Chinesisch ist, ist das `TOC` oben gleich `zh/blog/TOC`.

Wenn die Ausgangssprache geändert wird, müssen die `TOC`-Dateien einer bestimmten Sprache im Projekt stapelweise in eine andere Sprache verschoben werden.

Sie können sich auf die folgenden Befehle beziehen:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Bitte ersetzen Sie `en/` und `zh/` im obigen Befehl durch Ihren Sprachcode.