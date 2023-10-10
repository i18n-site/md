<h1 style="justify-content:space-between">3Ti.Site · Denken Sie an keine Grenzen<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, ein mehrsprachiger statischer Site-Generator, kann Markdown automatisch in [mehr als hundert verschiedene Sprachen](https://github.com/i18n-site/node/blob/main/lang/src/index.js) übersetzen.

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Einige Leute möchten vielleicht fragen, ob es unnötig ist, die Website zu internationalisieren, nachdem Browser über integrierte Übersetzungsfunktionen verfügen.

Ich möchte sagen, dass **wir nur durch die Internationalisierung der gesamten Website die mehrsprachige In-Site-Volltextsuche und Suchmaschinenoptimierung unterstützen können** .

## Reihenfolge

Bibel · Genesis :

> In der Antike, als die Sprachen noch eine Sprache waren, baute die Menschheit einen Turm, der bis zum Himmel reichte, ein Portal zum Reich Gottes, um die Macht der Menschheit zu verkünden.
>
> Gott erklärte: „Die Menschen vereinen sich als ein Stamm mit einer gemeinsamen Sprache, und dieser Turm ist nur ein Prolog. Jetzt erfüllen sie ihren Wunsch, und keine Ehrfurcht wird mehr übrig bleiben.“
>
> So kam Gott herab, zerstreute die Menschen in verschiedene Ecken und benutzte verschiedene Sprachen.
>
> Von da an wurde die menschliche Kommunikation zu einer Herausforderung, die Streitigkeiten endlos, und es gab keinen Turm mehr, der den Himmel berührte.

Der Science-Fiction-Roman „Three-Body“ (chinesische Aussprache: `3Ti` ) fiktionalisiert eine außerirdische Zivilisation, die über elektromagnetische Wellen kommuniziert, keine Sprachbarrieren kennt und technologisch erfolgreich ist.

Ich hoffe, ein Werkzeug zu schaffen, das es den Menschen auf der Erde ermöglicht, wie Drei-Körper-Menschen zu sein, ohne an Sprache gebunden zu sein und die gesamte Menschheit wieder zu vereinen.

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
