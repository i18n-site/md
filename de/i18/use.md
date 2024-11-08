# Installieren Und Verwenden

## windows Installiert Zuerst git bash

windows System, bitte [klicken Sie hier, um `git bash` zuerst herunterzuladen und zu installieren](https://git-scm.com/download/win) .

Führen Sie nachfolgende Vorgänge in `git bash` aus.

## Installieren

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Übersetzungstoken Konfigurieren

Besuchen Sie [i18n.site/token](//i18n.site/token) Klicken Sie hier, um das Token zu kopieren

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Erstellen Sie `~/.config/i18n.site.yml` , fügen Sie den kopierten Inhalt ein. Der Inhalt lautet wie folgt:

```
token: YOUR_API_TOKEN
```

Darüber [i18n.site/payBill](//i18n.site/payBill) müssen Sie eine Zahlungskreditkarte binden (keine Aufladung erforderlich, die Website erhebt automatisch Gebühren entsprechend der Nutzung, [Preise finden Sie auf der Homepage](/#price) ).

## Verwenden

### Demoprojekt

Bitte sehen Sie sich das Demoprojekt an [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) um die Konfiguration der `i18` Übersetzung zu erfahren.

Benutzer in China können klonen [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Geben Sie nach dem Klonen das Verzeichnis ein und führen Sie `i18` aus, um die Übersetzung abzuschließen.

### Verzeichnisstruktur

Die Struktur des Vorlagen-Warehouse-Verzeichnisses ist wie folgt

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

Die übersetzten Demodateien im Verzeichnis `en` dienen nur als Beispiel und können gelöscht werden.

### Übersetzung Ausführen

Geben Sie das Verzeichnis ein und führen Sie `i18` zum Übersetzen aus.

Zusätzlich zur Übersetzung generiert das Programm auch den Ordner `.i18n/data` , bitte fügen Sie ihn dem Repository hinzu.

Nach der Übersetzung der neuen Datei wird in diesem Verzeichnis eine neue Datendatei generiert. Denken Sie daran, `git add . ` anzuhängen.

## Konfigurationsdatei

`.i18n/conf.yml` ist die Konfigurationsdatei des `i18` Befehlszeilen-Übersetzungstools

Der Inhalt ist wie folgt:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Ausgangssprache & Übersetzungssprache

In der Konfigurationsdatei ist der Untergeordnete `fromTo` :

`en` ist die Ausgangssprache, `zh ja ko de fr` ist die Zielsprache der Übersetzung.

Sprachcode siehe [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Wenn Sie beispielsweise Chinesisch ins Englische übersetzen möchten, schreiben Sie diese Zeile um `zh: en` .

Wenn Sie in alle unterstützten Sprachen übersetzen möchten, lassen Sie nach `:` bitte das Feld leer. Zum Beispiel

```
i18n:
  fromTo:
    en:
```

Sie können unterschiedliche `fromTo` für verschiedene Unterverzeichnisse konfigurieren / Eine Demonstration ist wie folgt geschrieben :

```
i18n:
  fromTo:
    en:
  path:
    blog:
      fromTo:
        zh:
    blog/your_file_name.md:
      fromTo:
        ja:
```

In dieser Konfigurationstabelle ist die Quellsprache der Übersetzung von Katalog `blog` `zh` und die Quellsprache der Übersetzung von Katalog `blog/your_file_name.md` ist `ja` .

### Mehrsprachige Bilder/Links

Wenn die URLs in den Bildern und Links in `replace:` und `MarkDown` (und die `src` und `href` Attribute von eingebettet `HTML` ) mit diesem Präfix in `.i18n/conf.yml` konfiguriert sind, wird der Quellsprachencode in der URL durch den Sprachcode der Übersetzung ( [Sprache)](/i18/LANG_CODE) ersetzt [Codeliste](/i18/LANG_CODE) ).

Ihre Konfiguration sieht beispielsweise wie folgt aus:

```yml
i18n:
  fromTo:
    fr: ko de en zh zh-TW uk ru ja
  replace:
    https://fcdoc.github.io/img/ : ko de uk>ru zh-TW>zh >en
```

`replace: ` ist ein Wörterbuch, der Schlüssel ist das zu ersetzende URL-Präfix und der Wert ist die Ersetzungsregel.

Die Bedeutung des Ersetzens von Regel `ko de uk>ru zh-TW>zh >en` oben besteht darin, dass `ko de` das Bild ihres eigenen Sprachcodes verwendet, `zh-TW` und `zh` das Bild von `zh` verwenden, `uk` das Bild von `ru` verwendet und andere Sprachen (z. B. `ja` ) das Bild verwenden standardmäßig `en` .

Die französische ( `fr` ) Quelldatei von `MarkDown` lautet beispielsweise wie folgt :

```md
![xx](https://i18n-img.github.io/fr/1.avif)
<video src="https://i18n-img.github.io/fr/1.mp4"></video>
[xx](https://i18n-img.github.io/fr/README.md)
<a style="color:red" href="https://i18n-img.github.io/fr/i18n.site.gz">xx</a>
```

Die übersetzte und generierte englische ( `en` ) Datei lautet wie folgt :

```md
![xx](https://i18n-img.github.io/en/1.avif)
<video src="https://i18n-img.github.io/en/1.mp4"></video>
[xx](https://i18n-img.github.io/en/README.md)
<a style="color:red" href="https://i18n-img.github.io/en/i18n.site.gz">xx</a>
```

Dabei werden `/en/` im Code der Quellsprache durch `/zh/` in der Zielsprache ersetzt.

Hinweis : Vor und nach dem Sprachcode des ersetzten Textes muss in der URL eine `/` stehen.

> [!TIP]
> Wenn `- /` in `url:` konfiguriert ist, werden nur relative Pfade abgeglichen, URLs, die mit `//` beginnen, werden jedoch nicht abgeglichen.
>
> Wenn einige Links eines Domainnamens ersetzt werden sollen und andere nicht, können Sie zur Unterscheidung unterschiedliche Präfixe wie `[x](//x.com/en/)` und `[x](https://x.com/en/)` verwenden.

### Datei Ignorieren

Standardmäßig werden alle Dateien übersetzt, die im Quellsprachenverzeichnis mit `.md` und `.yml` beginnen.

Wenn Sie bestimmte Dateien ignorieren und nicht übersetzen möchten (z. B. unfertige Entwürfe), können Sie dies mit dem Feld `ignore` konfigurieren.

`ignore` verwendet die gleiche [globset](https://docs.rs/globset/latest/globset/#syntax) -Syntax wie die `.gitignore` Datei.

Beispielsweise bedeutet `_* ` in der obigen Konfigurationsdatei, dass Dateien, die mit `_` beginnen, nicht übersetzt werden.

## Übersetzungsregeln

### Übersetzungsredakteure Sollten Keine Zeilen Hinzufügen Oder Löschen

Die Übersetzung kann bearbeitet werden. Ändern Sie den Originaltext und übersetzen Sie ihn erneut maschinell. Die manuellen Änderungen an der Übersetzung werden nicht überschrieben (sofern dieser Absatz des Originaltexts nicht geändert wurde).

> [!WARN]
> Es muss eine Eins-zu-eins-Übereinstimmung zwischen den Zeilen der Übersetzung und dem Originaltext bestehen. Das heißt, beim Kompilieren der Übersetzung dürfen keine Zeilen hinzugefügt oder gelöscht werden. Andernfalls kommt es zu Verwirrung im Übersetzungsbearbeitungscache.

Wenn etwas schief geht, finden Sie [Lösungen in den FAQ.](/i18/qa#H1)

### `YAML` Übersetzungen

Das Befehlszeilentool findet alle Dateien, die mit `.yml` enden, im Dateiverzeichnis der Quellsprache und übersetzt sie.

* Beachten Sie, dass das Dateinamensuffix `.yml` sein muss (nicht `.yaml` ).

Das Tool übersetzt nur die Wörterbuchwerte in `.yml` , nicht die Wörterbuchschlüssel.

Zum Beispiel `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

wird als `i18n/zh/i18n.yml` übersetzt

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Die Übersetzung von `YAML` kann auch manuell geändert werden (fügen Sie jedoch keine Schlüssel oder Zeilen in der Übersetzung hinzu oder löschen Sie sie).

Basierend auf `YAML` Übersetzung können Sie problemlos internationale Lösungen für verschiedene Programmiersprachen erstellen.

## Erweiterte Nutzung

### Unterverzeichnis „Übersetzung“.

Solange `.i18n/conf.yml` erstellt wird (Sie müssen nicht jedes Mal mit der Demo-Projektvorlage beginnen), funktioniert `i18` einwandfrei.

Das Befehlszeilentool findet `.i18n/conf.yml` Konfigurationen in allen Unterverzeichnissen und übersetzt sie.

Projekte, die die [monorepo](//monorepo.tools) -Architektur verwenden, können Sprachdateien in Unterverzeichnisse aufteilen.

![](https://p.3ti.site/1719910016.avif)

### Benutzerdefiniertes Installationsverzeichnis

Es wird standardmäßig auf `/usr/local/bin` installiert.

Wenn `/usr/local/bin` keine Schreibberechtigung hat, wird es auf `~/.bin` installiert.

Durch Festlegen der Umgebungsvariablen `TO` kann beispielsweise das Installationsverzeichnis definiert werden :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```