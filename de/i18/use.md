# Installations- und Verwendungshinweise

## Unter Windows Git Bash zuerst installieren

Unter Windows bitte [hier klicken, um `git bash` herunterzuladen und zu installieren](https://git-scm.com/download/win).

Führen Sie die nachfolgenden Aktionen in `git bash` aus.

## Installation

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Konfiguration des Übersetzungstokens

Besuchen Sie [i18n.site/token](//i18n.site/token) und klicken Sie, um das Token zu kopieren

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Erstellen Sie `~/.config/i18n.site.yml` und fügen Sie den kopierten Inhalt ein, wie folgt:

```
token: YOUR_API_TOKEN
```

Zusätzlich müssen Sie auf [i18n.site/payBill](//i18n.site/payBill) eine Kreditkarte für die Zahlung registrieren (keine Aufladung erforderlich, die Website bucht Gebühren automatisch basierend auf der Nutzung, [Preise siehe auf der Startseite](/#price)).

## Nutzung

### Demonstrationsprojekt

Bitte beziehen Sie sich auf das Demonstrationsprojekt [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18), um die Konfiguration der `i18`-Übersetzung zu erlernen.

China-Benutzer können [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)克隆

Nach dem Klonen navigieren Sie in das Verzeichnis und führen Sie `i18` aus, um die Übersetzung abzuschließen.

### Verzeichnisstruktur

Die Struktur des Vorlagenrepository-Verzeichnisses ist wie folgt:

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

Die Demo-Dateien im Verzeichnis `en` sind nur Beispiele und können gelöscht werden.

### Übersetzung ausführen

Navigieren Sie in das Verzeichnis und führen Sie `i18` aus, um die Übersetzung durchzuführen.

Das Programm generiert neben der Übersetzung auch den Ordner `.i18n/data`; fügen Sie diesen bitte dem Versionskontrollsystem hinzu.

Nach der Übersetzung neuer Dateien werden in diesem Verzeichnis neue Daten日期i generiert. Vergewissern Sie sich, `git add .` hinzuzufügen.

## Konfigurationsdatei

`.i18n/conf.yml` ist die Konfigurationsdatei für das `i18`-Befehlszeilen-Übersetzungstool

Der Inhalt ist wie folgt:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Quellsprache und Zielsprache

In der Konfigurationsdatei ist `fromTo` wie folgt:

`en` ist die Quellsprache, `zh ja ko de fr` sind die Zielsprachen.

Sprachcodes siehe [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE).

Wenn Sie z.B. Chinesisch in Englisch übersetzen möchten, schreiben Sie `zh: en`.

Wenn Sie in alle unterstützten Sprachen übersetzen möchten, lassen Sie nach dem `:` ein Leerfeld, z.B.:

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

In dieser Konfigurationstabelle ist die Quellsprache für das `blog`-Verzeichnis `zh`, und die Quellsprache für `blog/your_file_name.md` ist `ja`.

### Dateien ignorieren

Standardmäßig werden alle Dateien im Quellsprachenverzeichnis, die mit `.md` und `.yml` beginnen, übersetzt.

Wenn Sie bestimmte Dateien ignorieren möchten (z.B. unvollendete Entwürfe), können Sie dies mit dem `ignore`-Feld konfigurieren.

Das `ignore`-Feld verwendet die gleiche [globset](https://docs.rs/globset/latest/globset/#syntax)-Syntax wie `.gitignore`.

Beispielsweise bedeutet `_*` in der obigen Konfigurationsdatei, dass Dateien, die mit `_` beginnen, ignoriert werden.

## Übersetzungsregeln

### Übersetzungen sollten keine Zeilen hinzufügen oder löschen

Die Übersetzung kann bearbeitet werden. Wenn Sie den Originaltext ändern und erneut maschinell übersetzen, werden manuelle Änderungen an der Übersetzung nicht überschrieben (wenn der Originaltext nicht geändert wurde).

Bitte beachten Sie jedoch, dass die Zeilen der Übersetzung und des Originaltexts eins zu eins korrespondieren müssen. Das bedeutet, beim Bearbeiten der Übersetzung dürfen keine Zeilen hinzugefügt oder gelöscht werden, um Verwirrung im Übersetzungscache zu vermeiden.

Wenn es zu Problemen kommt, finden Sie Lösungen in den [FAQ](/i18/qa#H1)

### `YAML`-Übersetzungen

Das Befehlszeilentool findet alle Dateien, die im Quellsprachenverzeichnis mit `.yml` enden, und übersetzt sie.

* Beachten Sie, dass die Dateierweiterung `.yml` sein muss (nicht `.yaml`).

Das Tool übersetzt nur die Werte der Wörterbücher in `.yml`, nicht die Schlüssel.

Zum Beispiel wird `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

in `i18n/zh/i18n.yml` übersetzt

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Die `YAML`-Übersetzungen können ebenfalls manuell bearbeitet werden (aber keine Schlüssel oder Zeilen in der Übersetzung hinzufügen oder löschen).

Basierend auf `YAML` Übersetzung können Sie problemlos internationale Lösungen für verschiedene Programmiersprachen erstellen.

## Erweiterte Verwendung

### Übersetzung von Unterverzeichnissen

Solange `.i18n/conf.yml` erstellt wird, funktioniert `i18` ohne Probleme (es ist nicht erforderlich, jedes Mal mit der Demo-Projektvorlage zu beginnen).

Das Befehlszeilentool findet alle `.i18n/conf.yml`-Konfigurationen in den Unterverzeichnissen und übersetzt sie.

Projekte, die die [monorepo](//monorepo.tools)-Architektur verwenden, können Sprachdateien in Unterverzeichnisse aufteilen.

![](https://p.3ti.site/1719910016.avif)

### Benutzerdefiniertes Installationsverzeichnis

Es wird standardmäßig in `/usr/local/bin` installiert.

Wenn `/usr/local/bin` keine Schreibrechte hat, wird es in `~/.bin` installiert.

Durch das Setzen der Umgebungsvariablen `TO` können Sie das Installationsverzeichnis festlegen, zum Beispiel:

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```