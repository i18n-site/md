<h1 style="justify-content:space-between">3Ti.Site · Denken Sie an keine Grenzen<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, ein mehrsprachiger statischer Site-Generator, kann Markdown automatisch in [mehr als hundert verschiedene Sprachen](https://github.com/i18n-site/node/blob/main/lang/src/index.js) übersetzen.

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Einige Leute möchten vielleicht fragen, ob es unnötig ist, die Website zu internationalisieren, nachdem Browser über integrierte Übersetzungsfunktionen verfügen.

Ich möchte sagen, dass **wir nur durch die Internationalisierung der gesamten Website die mehrsprachige In-Site-Volltextsuche und Suchmaschinenoptimierung unterstützen können** .

## Reihenfolge

„Bibel·Genesis“:

> In der Antike, als die Sprache noch eine war, wurde die Menschheit stolz geboren. Sie wollten ein gewaltiges Gebäude errichten, einen Turm, der den Himmel berührte.
>
> Das Göttliche war jedoch mit ihrer Arroganz unzufrieden und veranlasste die Menschen, sich über die ganze Erde zu zerstreuen, wodurch ihre Zungen füreinander unverständlich wurden.
>
> Von da an kämpfte die Menschheit um Kommunikation, es kam zu endlosen Konflikten und die Welt sah keinen Turm mehr, der bis in den Himmel reichte.

Der Science-Fiction-Roman „Three-Body“ (chinesische Aussprache: `3Ti` ) fiktionalisiert eine außerirdische Zivilisation, die über elektromagnetische Wellen kommuniziert, keine Sprachbarrieren kennt und technologisch erfolgreich ist.

Ich hoffe, dass mit Hilfe dieses Tools die Menschen auf der Erde wie Drei-Körper-Menschen werden, die Kommunikation nicht durch die Sprache eingeschränkt wird und die gesamte Menschheit wieder vereint wird.

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
