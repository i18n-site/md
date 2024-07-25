# Installieren Und Verwenden

## windows Installiert Zuerst git bash

windows System, bitte [klicken Sie hier, um es zuerst herunterzuladen und zu installieren `git bash`](https://git-scm.com/download/win)

Führen Sie nachfolgende Vorgänge in aus `git bash`

## Installieren

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Übersetzungstoken Konfigurieren

Besuchen Sie [i18n.site/token](//i18n.site/token) Klicken Sie hier, um das Token zu kopieren

<img src="https://p.3ti.site/1719911689.avif" style="max-width:400px">

Erstellen Sie `~/.config/i18n.site.yml` fügen Sie den kopierten Inhalt ein. Der Inhalt lautet wie folgt:

```
token: YOUR_API_TOKEN
```

Darüber hinaus [i18n.site/payBill](//i18n.site/payBill) Sie eine Kreditkarte für die Zahlung binden (keine Aufladung erforderlich, die Website zieht die Gebühren automatisch entsprechend der Nutzung ab, [Preise finden Sie auf der Homepage](/#price) ).

## Verwenden

### Demoprojekt

Bitte sehen Sie sich das Demoprojekt an [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) um die Konfiguration der Übersetzung zu erfahren `i18`

Benutzer in China können klonen [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Geben Sie nach dem Klonen das Verzeichnis ein und führen Sie `i18` aus, um die Übersetzung abzuschließen.

### Verzeichnisaufbau

Die Struktur des Vorlagen-Warehouse-Verzeichnisses ist wie folgt

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

Das Verzeichnis `en` enthält die übersetzten Demodateien, die nur als Beispiel dienen und gelöscht werden können.

### Übersetzung Ausführen

Geben Sie das Verzeichnis ein und führen Sie `i18` aus, um zu übersetzen.

### Fügen Sie Dateien Zum Repository Hinzu

Zusätzlich zur Übersetzung generiert das Programm auch die folgenden Dateien. Bitte fügen Sie sie dem Repository hinzu.

```
.i18n/hash
.i18n/cache/.gitignore
```

Darunter ist der Inhalt : `.i18n/cache/.gitignore`

```
**/*
!**/.gitignore
```

Dies bedeutet, dass alle Dateien im `.i18n/cache/` -Verzeichnis ignoriert werden (außer `.i18n/cache/.gitignore` ).

Wenn Ihre Versionskontrollsoftware dies nicht tut `git` ignorieren Sie sie bitte entsprechend dieser Konfiguration.

## Konfigurationsdatei

`.i18n/conf.yml` Es handelt sich um die Konfigurationsdatei des `i18` Befehlszeilen-Übersetzungstools

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

In der Konfigurationsdatei sind die Untergeordneten von `fromTo`

`en` ist die Ausgangssprache, `zh ja ko de fr` ist die Zielsprache der Übersetzung.

Sprachcode siehe [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Wenn Sie beispielsweise Chinesisch ins Englische übersetzen möchten, schreiben Sie diese Zeile um `zh: en`

Wenn Sie in alle unterstützten Sprachen übersetzen möchten, lassen Sie das Feld hinterher bitte leer `:` Zum Beispiel

```
i18n:
  fromTo:
    en:
```

### Datei Ignorieren

Standardmäßig werden alle Dateien übersetzt, die mit `.md` und `.yml` im Quellsprachenverzeichnis beginnen.

Wenn Sie bestimmte Dateien ignorieren und nicht übersetzen möchten (z. B. unfertige Entwürfe), können Sie die Feldkonfiguration `ignore` verwenden.

`ignore` Verwendet eine ähnliche Syntax wie `.gitignore` [globset](https://docs.rs/globset/latest/globset/#syntax)

Beispielsweise bedeutet `_* ` in der obigen Konfigurationsdatei, dass Dateien, die mit `_` beginnen, nicht übersetzt werden.

## Übersetzungsregeln

### Übersetzungsredakteure Sollten Keine Zeilen Hinzufügen Oder Löschen

Die Übersetzung kann bearbeitet werden. Ändern Sie den Originaltext und übersetzen Sie ihn erneut maschinell. Die manuellen Änderungen an der Übersetzung werden nicht überschrieben (sofern dieser Absatz des Originaltexts nicht geändert wurde).

Bitte beachten Sie jedoch, dass die Zeilen der Übersetzung und des Originaltextes eins zu eins übereinstimmen müssen. Das heißt, beim Kompilieren der Übersetzung dürfen keine Zeilen hinzugefügt oder gelöscht werden. Andernfalls kommt es zu Verwirrung im Übersetzungsbearbeitungscache.

Wenn etwas schief geht, finden Sie [Lösungen in den FAQ.](/i18/qa#H1)

### `YAML` Übersetzen

Das Befehlszeilentool findet alle Dateien mit der Endung `.yml` im Dateiverzeichnis der Quellsprache und übersetzt sie.

* Beachten Sie, dass das Dateinamensuffix `.yml` sein muss (nicht `.yaml` ).

Das Tool übersetzt nur die Wörterbuchwerte `.yml` nicht die Wörterbuchschlüssel.

Zum Beispiel `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

wird übersetzt als `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Die Übersetzung von `YAML` kann auch manuell geändert werden (fügen Sie jedoch keine Schlüssel oder Zeilen in der Übersetzung hinzu oder löschen Sie sie).

Basierend auf `YAML` Translation können Sie problemlos internationale Lösungen für verschiedene Programmiersprachen erstellen.

## Erweiterte Nutzung

### Unterverzeichnis „Übersetzung“.

Solange Sie `.i18n/conf.yml` erstellen (Sie müssen nicht jedes Mal mit der Demo-Projektvorlage beginnen), funktioniert `i18` einwandfrei.

Das Befehlszeilentool findet die `.i18n/conf.yml` -Konfiguration in allen Unterverzeichnissen und übersetzt sie.

Projekte, die die [monorepo](//monorepo.tools) -Architektur verwenden, können Sprachdateien in Unterverzeichnisse aufteilen.

<img alt="" src="https://p.3ti.site/1719910016.avif">

### Benutzerdefiniertes Installationsverzeichnis

Es wird standardmäßig installiert `/usr/local/bin`

Wenn `/usr/local/bin` keine Schreibberechtigung hat, wird es in `~/.bin` installiert.

Umgebungsvariablen festlegen `TO` Sie können beispielsweise das Installationsverzeichnis definieren :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
