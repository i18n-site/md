# I18N.SITE · Sprache Ohne Grenzen<img Src="//i-01.eu.org/i18n/logo.svg" Style="float:right;width:42px;margin-Top:6px">

I18N.SITE, ein mehrsprachiger Generator für statische Websites, kann Markdown automatisch in [mehr als hundert verschiedene Sprachen](https://github.com/i18n-site/node/blob/main/lang/src/index.js) übersetzen.

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Einige Leute möchten vielleicht fragen, ob es unnötig ist, die Website zu internationalisieren, nachdem Browser über integrierte Übersetzungsfunktionen verfügen.

Ich möchte sagen, dass **wir nur durch die Internationalisierung der gesamten Website die mehrsprachige In-Site-Volltextsuche und Suchmaschinenoptimierung unterstützen können** .

## Lernprogramm

## Funktionseinführung

### Behalten Sie Das Markdown-Format Bei

### Übersetzung Ändern

Nachdem Sie die Übersetzung geändert haben, müssen Sie `./i18n.sh` erneut ausführen, um den Cache zu aktualisieren.

### Übersetzungshinweise

Übersetzungskommentare müssen nach „“ die Sprache angeben, z. B. ` ```rust` .

Unterstützt derzeit die Kommentarübersetzung für Rust, C, CPP, Java, JS, Coffee, Python und Bash.

Bearbeiten Sie [tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) , um Übersetzungsunterstützung für Kommentare in weiteren Sprachen hinzuzufügen.

### Proxy Konfigurieren

Durch das Festlegen der folgenden Umgebungsvariablen können Google Translate-API-Aufrufe über den Proxy erfolgen.

```bash
export https_proxy=http://127.0.0.1:7890
```

### Variable Einbettung

```
test: 测试变量<br 0>嵌入
```

### Leeren Sie Den Cache

```bash
rm -rf .i18n/.cache
```
