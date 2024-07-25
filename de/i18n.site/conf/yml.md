# .i18n/conf.yml

`i18n.site` Die Konfigurationsdatei ist `.i18n/conf.yml` .

Mit Ausnahme `ignore:` und `i18n:` -Einstellungen von [`i18`](/i18) lautet die Konfigurationsdatei wie folgt:

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

Unter `upload` bedeutet das Konfigurationselement `ext:` , dass beim Veröffentlichen nur `.md` hochgeladen wird.

## Top-Navigation

`nav:` Konfigurationsoptionen, entsprechend dem Navigationsmenü oben auf der Homepage.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Unter ihnen entspricht `i18n: home` `en/i18n.yml`中`home: Home` .

`en/i18n.yml` wird in mehrere Sprachen übersetzt, z. B. `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Nachdem die Übersetzung abgeschlossen ist, können Sie den Wert von `yml` in der Übersetzung ändern, aber den Schlüssel der Übersetzung `yml` nicht hinzufügen oder löschen.

### `use: Toc` , Einzeldateivorlage (Mit Gliederung)

`nav` Konfigurieren :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` bedeutet die Verwendung von `Toc` Rendering, bei dem eine einzelne `Markdown` -Vorlage gerendert wird.

`TOC` ist die Abkürzung für `Table of Contents` . Wenn diese Vorlage gerendert wird, wird der Umriss dieser `Markdown` -Datei in der Seitenleiste angezeigt.

`url:` stellt den Dateipfad von `Markdown` dar ( `/` entspricht dem Stammverzeichnis `/README.md` , dieser Dateiname erfordert ein Präfix in Großbuchstaben und ein Suffix in Kleinbuchstaben).

### `use: Md` , Einzelne Dateivorlage (Keine Gliederung)

`Md` Template ist dasselbe wie `Toc` , beide werden zum Rendern einer einzelnen `Markdown` -Datei verwendet. `Md` zeigt die Vorlage den Umriss nicht in der Seitenleiste an.

Sie können `use: Toc` in der obigen Konfiguration in `use: Md` ändern, `i18n.site` erneut im `md` -Verzeichnis ausführen und dann die Entwicklungsvorschau-URL besuchen, um die Änderungen auf der Homepage zu beobachten.

### Standardladung Ohne Konfigurationspfad

Wenn das Pfadpräfix eines bestimmten Pfads, auf den zugegriffen wird, nicht in `nav:` wird die dem Pfad entsprechende `MarkDown` -Datei standardmäßig geladen und mit `Md` -Vorlage gerendert.

Wenn Sie beispielsweise `/test` besuchen und `nav:` ohne diesen Pfad konfiguriert ist und die Seitensprache Englisch ist (Code `en` ), wird die Vorlage standardmäßig geladen `/en/test.md` und mit gerendert `Md` .

`/en/test.md` diese Datei nicht existiert, wird die Standardseite `404` angezeigt.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Vorlage Für Mehrere Dateien

In der Konfigurationsdatei:

```
  - i18n: blog
    use: Doc
```

Zeigt die Verwendung von `Doc` für das Rendern von Vorlagen an.

`Doc` Die Vorlage unterstützt die Integration mehrerer `MarkDown` , um Dokumentgliederungen für einzelne oder mehrere Projekte zu erstellen.

#### Einzelnes Projekt (Mehrere Dateien)

`blog` oben ist der Einzelprojektmodus von `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Wenn Die url Leer Ist, Wird Standardmäßig Der Wert i18n Verwendet

Wenn Sie nicht schreiben `url` `url` auf den Wert `i18n` gesetzt. Diese Regel gilt auch für andere Vorlagen.

Die obige Schreibmethode entspricht der von `url: blog` und die entsprechende Datei ist `en/blog/TOC` .

#### Mehrere Projekte

`.i18n/conf.yml` Die Konfiguration in `i18n:doc` ist Multiprojektmodus.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Hier bedeutet `menu: NB demo1,demo2` die Verwendung von `NB` zum Rendern des Dropdown-Menüs.

`NB` ist die Abkürzung von `Name Breif` und gibt an, dass im Dropdown-Menü der Name und der Slogan des Projekts angezeigt werden können.

Auf `NB` folgt der übergebene Parameter `demo1,demo2` .
Beachten Sie `demo1,demo2` dass vor und nach dem Komma `,` ** Leerzeichen stehen dürfen : **

Für die oben genannten Parameter lautet die entsprechende Verzeichnisindexdatei:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Index Des Inhaltsverzeichnisses Des Inhaltsverzeichnisses

`i18n.site` Führt das `js` Plugin `.i18n/hook/after.tran/TOC.js` im Demo-Warehouse aus, um die Verzeichnisindexdatei `doc` entsprechend der Vorlagenkonfiguration `TOC` zu lesen und `json` der Verzeichnisgliederung zu generieren.

Wenn Sie die `doc` -Vorlage verwenden, müssen Sie über dieses Plug-in verfügen.

Wenn Sie das `i18n.site` -Projekt aus einem leeren Ordner initialisieren, denken Sie daran, `.i18n` im Demo-Projekt in Ihr Verzeichnis zu kopieren.

`Doc` Die Vorlage stellt die Gliederung des Inhaltsverzeichnisses basierend auf der generierten `json` dar.

##### Detaillierte Inhaltserklärung

`en/blog/TOC` Der Inhalt ist wie folgt :

```
README.md

news/README.md
  news/begin.md
```

##### Verwenden Sie Einrückungen, Um Ebenen Anzuzeigen

Oben `en/blog/TOC` `README.md` in der ersten Zeile entspricht `i18n.site` im Bild unten, dem Projektnamen.

Die nächsten beiden Zeilen sind wie im folgenden Screenshot dargestellt.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` entspricht `News` ,
`news/begin.md` entspricht `Our Product is Online !`

`TOC` Die Datei ist eingerückt, um die hierarchische Beziehung der Gliederung anzuzeigen, und unterstützt die mehrstufige Einrückung.

##### Die Übergeordnete Ebene Schreibt Nur Den Titel, Nicht Den Inhalt.

Bei mehreren Einrückungsebenen schreibt die übergeordnete Ebene nur den Titel und nicht den Inhalt. Andernfalls wird die Typografie durcheinander gebracht.

##### Projekt README.md 

`README.md` des Projekts können Sie beispielsweise Inhalte in `en/demo2/README.md` schreiben.

Beachten Sie, dass der Inhalt dieser Datei keine Gliederung des Inhaltsverzeichnisses aufweist. Daher wird empfohlen, die Länge zu begrenzen und eine kurze Einleitung zu schreiben.

###### Projektslogan

Wie Sie sehen können `Deme Two` befindet sich unter dem Dropdown-Menü und der Katalogübersicht `Your Project slogan` Projektslogan :

<img alt="" src="https://p.3ti.site/1721276842.avif">

: entspricht der ersten Zeile `en/demo2/README.md`

```
# Demo Two : Your Project slogan
```

Projekt `README.md` Der Inhalt nach dem ersten Doppelpunkt `:` im Titel der ersten Ebene wird als Projektslogan betrachtet.

Benutzer aus China, Japan und Korea beachten bitte, dass Sie einen Doppelpunkt in halber Breite anstelle eines Doppelpunkts in voller Breite verwenden müssen `:`

##### Wie Kann Ich TOC in Großen Mengen Verschieben?

`TOC` Die Datei muss im Verzeichnis der Quellsprache abgelegt werden.

Wenn die Ausgangssprache beispielsweise Chinesisch ist, lautet `TOC` oben `zh/blog/TOC` .

Wenn die Quellsprache geändert wird, müssen Sie `TOC` in einer bestimmten Sprache im Projekt stapelweise in eine andere Sprache verschieben.

Sie können sich auf die folgenden Befehle beziehen:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Bitte ändern Sie `en/` und `zh/` im obigen Befehl in Ihren Sprachcode.


