# .i18n/conf.yml

Die Konfigurationsdatei für `i18n.site` ist `.i18n/conf.yml` und der Inhalt ist wie folgt :

```yaml
i18n:
  fromTo:
    en:
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
    use: Blog
addon:
  - i18n.addon/toc
```

Unter diesen bedeutet `upload` bis `ext:` Konfigurationselement, dass beim Veröffentlichen nur `.md` hochgeladen werden.

## Top-Navigation

`nav:` Konfigurationsoptionen, entsprechend dem Navigationsmenü oben auf der Homepage.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Dabei entspricht `i18n: home` `home: Home` zu `en/i18n.yml` (wobei `en` die Ausgangssprache der Projektübersetzung ist).

`en/i18n.yml` Inhalt ist der im Navigationsmenü angezeigte Text, der entsprechend `fromTo` in der Konfiguration übersetzt wird, beispielsweise übersetzt in `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Nachdem die Übersetzung abgeschlossen ist, können Sie den Wert von Übersetzung `yml` ändern, aber den Schlüssel von Übersetzung `yml` nicht hinzufügen oder löschen.

### `use: Toc` Dokumentvorlage Mit Gliederung

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` bedeutet Rendern mit einer `Toc` -Vorlage, was bedeutet, dass eine einzelne `Markdown` Vorlage gerendert wird.

`TOC` ist die Abkürzung für `Table of Contents` Wenn diese Vorlage gerendert wird, wird der Umriss dieser `Markdown` -Datei in der Seitenleiste angezeigt.

`url:` stellt den Dateipfad von `Markdown` dar ( `/` entspricht dem Stammverzeichnis `/README.md` , dieser Dateiname erfordert ein Präfix in Großbuchstaben und ein Suffix in Kleinbuchstaben).

### `use: Md` Dokumentvorlage Ohne Gliederung

Die `Md` Vorlage und die `Toc` Vorlage sind identisch und werden beide zum Rendern einer einzelnen `Markdown` Datei verwendet. Aber die Vorlage `Md` zeigt den Umriss nicht in der Seitenleiste an.

Sie können `use: Toc` in der obigen Konfiguration in `use: Md` ändern, `i18n.site` im Verzeichnis `md` erneut ausführen und dann die Entwicklungsvorschau-URL besuchen, um die Änderungen auf der Homepage zu beobachten.

### `use: Blog` Blog-Vorlagen

Die Blog-Vorlage zeigt eine Liste der Artikel (Titel und Abstracts) in der Reihenfolge ihrer Veröffentlichungszeit an.

[→ Klicken Sie hier, um mehr über die spezifische Konfiguration zu erfahren](/i18n.site/conf/blog)

### `use: Doc` Dateidokumentvorlagen

In der Konfigurationsdatei:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

Gibt an, dass `Doc` für das Rendern von Vorlagen verwendet wird.

`Doc` -Vorlage unterstützt die Integration mehrerer `MarkDown` um Dokumentgliederungen für einzelne oder mehrere Projekte zu erstellen.

#### Mehrere Projekte Und Mehrere Dateien

Die Konfiguration von `.i18n/conf.yml` in `i18n:doc` ist der Rendering-Modus für mehrere Projekte und mehrere Dateien.

Hier bedeutet `menu: NB demo1,demo2` , dass die Vorlage `NB` zum Rendern des Dropdown-Menüs verwendet wird.

<img src="//p.3ti.site/1721275191.avif" width="320px">

`NB` , die Abkürzung von `Name Breif` , bedeutet, dass im Dropdown-Menü der Name und der Slogan des Projekts angezeigt werden können.

Auf `NB` folgt der an ihn übergebene Parameter `demo1,demo2` .

Hinweis : ** Vor und nach dem Komma `,` in `demo1,demo2` dürfen keine ** stehen.

Die entsprechende Verzeichnisindexdatei für die oben genannten Parameter lautet:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Einzelnes Projekt, Mehrere Dateien

Wenn Sie nur ein Projekt haben, können Sie es wie folgt konfigurieren.

```
  - i18n: doc
    url: flashduty
    use: Doc
```

> [!WARN]
> Ein einzelnes Projekt mit mehreren Dateien unterstützt nicht die Konfiguration von `url` als Stammpfad `/`
> Wenn __conf.yml → nav:__ Kein Root-Pfad konfiguriert ist, wird beim Zugriff auf die Homepage der Website automatisch auf die erste URL unter der `nav:` Konfiguration umgeschrieben.
> Dieses Design dient der besseren Unterscheidung von Projektdokumenten, Blogs und anderen Inhalten durch Verzeichnisse.
> Es wird empfohlen, eine einzelne Datei und eine einzelne Seite als Startseite zu verwenden.

> [!TIP]
> Wenn nicht `url` geschrieben wird, wird `url` standardmäßig auf den Wert `i18n` gesetzt. Diese Regel gilt auch für andere Vorlagen.

#### Index Des Inhaltsverzeichnisses Des Inhaltsverzeichnisses

Wenn Vorlage `use: Doc` in der Konfiguration aktiviert ist, aktivieren Sie bitte Plug-in `i18n.addon/toc` in `.i18n/conf.yml` Die Konfiguration ist wie folgt :

```yml
addon:
  - i18n.addon/toc
```

`i18n.site` installiert und führt dieses Plug-in automatisch aus, liest `TOC` die Verzeichnisindexdatei und generiert `json` die Verzeichnisgliederung.

Wenn es sich um ein einzelnes Projekt mit mehreren Dateien handelt, ist das Stammverzeichnis `TOC` das Verzeichnis, das `url:` im Quellsprachenverzeichnis entspricht. Wenn die Quellsprache beispielsweise Chinesisch ist: Die Datei, die `url: flashduty` entspricht, ist `zh/flashduty/TOC` .

Wenn es sich um mehrere Projekte und mehrere Dateien handelt, muss `url:` nicht konfiguriert werden. Das Stammverzeichnis von `TOC` ist das Verzeichnis, das dem Wert von `i18n` entspricht.

##### Detaillierte Inhaltserklärung

`en/blog/TOC` Inhalt ist wie folgt :

```
README.md

news/README.md
  news/begin.md
```

##### Verwenden Sie Einrückungen, Um Ebenen Anzuzeigen

`README.md` in der ersten Zeile von `en/blog/TOC` oben entspricht der `i18n.site` im Bild unten, dem Projektnamen.

Die nächsten beiden Zeilen sind wie im folgenden Screenshot dargestellt.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` entspricht `News` ,
`news/begin.md` entspricht `Our Product is Online !`

`TOC` Dateien werden eingerückt, um die hierarchische Beziehung der Gliederung anzuzeigen, mehrstufige Einrückungen zu unterstützen und Zeilenkommentare zu erstellen, die mit `# ` beginnen.

##### Die Übergeordnete Ebene Schreibt Nur Den Titel, Nicht Den Inhalt.

Bei mehreren Einrückungsebenen schreibt die übergeordnete Ebene nur den Titel und nicht den Inhalt. Andernfalls wird die Typografie durcheinander gebracht.

##### Projekt README.md

Der Inhalt kann in Element `README.md` geschrieben werden, beispielsweise `en/demo2/README.md` .

Beachten Sie, dass der Inhalt dieser Datei keine Gliederung des Inhaltsverzeichnisses aufweist. Daher wird empfohlen, die Länge zu begrenzen und eine kurze Einleitung zu schreiben.

###### Projektslogan

Sie können sehen, dass `Deme Two` seinen Projektslogan unter dem Dropdown-Menü und dem Katalogumriss des Projektnamens `Your Project slogan` hat :

![](https://p.3ti.site/1721276842.avif)

Dies entspricht der ersten Zeile von `en/demo2/README.md` :

```
# Demo Two : Your Project slogan
```

Der Inhalt nach dem ersten Doppelpunkt `:` des Titels der ersten Ebene von Projekt `README.md` wird als Projektslogan betrachtet.

Benutzer aus China, Japan und Korea beachten bitte, dass Sie den Doppelpunkt `:` in halber Breite anstelle eines Doppelpunkts in voller Breite verwenden sollten.

##### Wie Kann Ich TOC in Großen Mengen Verschieben?

`TOC` Dateien müssen im Verzeichnis der Quellsprache abgelegt werden.

Wenn die Ausgangssprache beispielsweise Chinesisch ist, ist `TOC` oben gleich `zh/blog/TOC` .

Wenn die Quellsprache geändert wird, müssen Sie die `TOC` Dateien einer bestimmten Sprache im Projekt stapelweise in eine andere Sprache verschieben.

Sie können sich auf die folgenden Befehle beziehen:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Bitte ändern Sie `en/` und `zh/` im obigen Befehl in Ihren Sprachcode.

### Standardladung Ohne Konfigurationspfad

Wenn für einen bestimmten Pfad, auf den zugegriffen wird, das Pfadpräfix nicht in `nav:` konfiguriert ist, wird standardmäßig die dem Pfad entsprechende `MarkDown` Datei geladen und mit der `Md` Vorlage gerendert.

Wenn beispielsweise auf `/test` zugegriffen wird und `nav:` ohne das Präfix dieses Pfads konfiguriert ist und die aktuelle Browsersprache Englisch ist (Code `en` ), wird `/en/test.md` standardmäßig geladen und mithilfe der Vorlage `Md` gerendert.

Wenn `/en/test.md` diese Datei nicht existiert, wird die Standardseite `404` angezeigt.

<img src="//p.3ti.site/1721184299.avif" style="width:360px">