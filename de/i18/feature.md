# Produktmerkmale

`i18` ist das Befehlszeilentool zur Übersetzung von Markdown und YAML.

## Es behält das Format von Markdown nahtlos bei

Es unterstützt die Übersetzung von Markdown-Tabellen, ohne das Format zu beeinträchtigen; Wörter in mathematischen Formeln und Links werden nicht übersetzt.

Unterstützt die Übersetzung von Mixed HTML Markdown , der Inhalt in den Tags `<pre>` und `<code>` von HTML eingebettet in `MarkDown` wird nicht übersetzt

## Es erkennt mathematische Formeln und überspringt deren Übersetzung

Mathematische Formeln werden erkannt und übersprungen.

Informationen zur Schreibweise mathematischer Formeln finden Sie unter [„Github – Über das Schreiben mathematischer Ausdrücke“](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions).

## Es ist möglich, Kommentare in Code-Snippets zu übersetzen

Inline-Code und Code-Snippets werden nicht übersetzt, aber Kommentare im Code können es sein.

Übersetzungskommentare müssen die Sprache nach ` ``` ` angeben, z.B. ` ```rust `.

Derzeit unterstützt es die Übersetzung von Anmerkungen in `toml` , `yaml` , `json5` , `go` , `rust` , `c` , `cpp` , `java` , `js` , `coffee` , `python` , `bash` , `php` [und anderen Sprachen](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14) .

Sollte die von Ihnen benötigte Programmiersprache nicht verfügbar sein, [kontaktieren Sie uns](https://groups.google.com/g/i18n-site) bitte.

## It is command-line friendly

Es stehen viele [starke Tools](https://www.capterra.com/translation-management-software) zur Verfügung, um Übersetzungsdokumente zu verwalten.

Für Programmierer, die mit `git`, `vim` und `vscode` vertraut sind, erhöht die Verwendung dieser Tools zur Dokumentbearbeitung und Versionsverwaltung zweifellos die Lernkosten.

Bei den Anhängern des `KISS`-Prinzips (`Keep It Simple, Stupid`) sind Unternehmenslösungen oft Synonym für umständlich, ineffizient und schwer zu bedienen.

Die Übersetzung sollte durch die Eingabe von Befehlen und einen Klick abgeschlossen werden, ohne komplexe Umgebungsabhängigkeiten.

Keine Entitäten hinzufügen, es sei denn, es ist erforderlich.

## Keine Änderung, keine Übersetzung

Es gibt auch einige Befehlszeilentools für die Übersetzung, wie [translate-shell](https://github.com/soimort/translate-shell).

Doch unterstützen sie nicht die Erkennung von Dateiänderungen und übersetzen nur geänderte Dateien, um Kosten zu senken und die Effizienz zu steigern.

## Die Übersetzung kann bearbeitet werden, und die maschinelle Übersetzung überschreibt keine vorhandenen Änderungen

Die Übersetzung kann bearbeitet werden.

Wenn der Originaltext geändert wird und erneut maschinell übersetzt wird, werden die manuellen Änderungen an der Übersetzung nicht überschrieben (sofern dieser Abschnitt des Originaltexts nicht geändert wurde).

## Unsere maschinelle Übersetzung ist der Qualitätsstandard

Wir haben eine neue Generation von Übersetzungstechnologien entwickelt, die die Vorteile traditioneller maschineller Übersetzungsmodelle und großer Sprachmodelle integrieren, um präzise, flüssige und elegante Übersetzungen zu gewährleisten.

Blindtests zeigen, dass unsere Übersetzungsqualität im Vergleich zu ähnlichen Diensten erheblich besser ist.

Um die gleiche Qualität zu erreichen, ist der manuelle Bearbeitungsaufwand für Google Translate und `ChatGPT` `2.67`-mal und `3.15`-mal höher als bei uns.

## <a rel=id href="#price" id="price"></a> Sehr wettbewerbsfähige Preise

|                                                                                   | USD/Million Wörter |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[Klicken Sie hier, um github zu autorisieren und automatisch zu i18n.site](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) und **Bonus- $50 zu erhalten** .

Hinweis: Die Anzahl der abrechenbaren Zeichen = [die Anzahl der unicode](https://en.wikipedia.org/wiki/Unicode) in der Quelldatei × die Anzahl der Sprachen in der Übersetzung

## Unterstützen Sie Die Übersetzung `YAML`

Das Tool übersetzt nur die Wörterbuchwerte in `YAML` , nicht die Wörterbuchschlüssel.

Basierend auf `YAML` Übersetzung können Sie problemlos internationale Lösungen für verschiedene Programmiersprachen erstellen.

## Unterstützt Die Header-Konfiguration Der Übersetzung `HOGO`

Es unterstützt die Übersetzung der Header-Konfiguration für statische Blogs vom Typ [HOGO](https://github.com/gohugoio/hugo), wobei nur die Felder `title`, `summary` und `description` übersetzt werden.

## Variablennamen werden nicht übersetzt

`Markdown` wird als E-Mail-Vorlage verwendet, `YAML` wird als Sprachdateikonfiguration verwendet und es gibt variable Parameter (zum Beispiel: Aufladung `${amount}` wurde empfangen).

Variablennamen wie `${varname}` werden nicht als englische Übersetzungen betrachtet.

## Übersetzungsoptimierung für China, Japan und Korea

### Bei Der Übersetzung Ins Englische Wird Der Erste Buchstabe Des Titels Automatisch Großgeschrieben

In China, Japan und Korea gibt es keine Groß- und Kleinbuchstaben, bei englischen Titeln jedoch die Konvention, den ersten Buchstaben groß zu schreiben.

`i18` kann den Titel in `MarkDown` erkennen und schreibt bei der Übersetzung in eine Sprache, bei der die Groß-/Kleinschreibung beachtet wird, automatisch den ersten Buchstaben groß.

Beispielsweise wird `为阅读体验而优化` in `Optimized for Reading Experience` übersetzt.

### Englische Begriffe in chinesischen, japanischen und koreanischen Dokumenten werden nicht übersetzt

Dokumente aus China, Japan und Korea enthalten oft viele englische Begriffe.

Die maschinelle Übersetzung der chinesischen, japanischen und koreanischen Sprachen zu nicht-englischen Sprachen übersetzt oft auch Begriffe, wie zum Beispiel der folgende chinesische Satz:

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

Wenn Sie Google oder DeepL verwenden, übersetzen beide englische Begriffe falsch, die im Original bleiben sollten (nehmen Sie Japanisch und Französisch als Beispiele).

### Google Translate

Übersetzt ins Japanische: `ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす`

![](//p.3ti.site/1720199391.avif)

Übersetzt ins Französische: `Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique`

`Falcon` wird als `faucon` und `Llama` als `lama` übersetzt. Als Eigennamen sollten sie nicht übersetzt werden.

![](//p.3ti.site/1720199451.avif)

### DeepL-Übersetzung

Übersetzt ins Japanische: `ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す`

![](//p.3ti.site/1720199550.avif)

DeepL übersetzt den obigen Text ins Französische (auch mit Anpassung der Eigennamen und Hinzufügung von ungeraden `... `):

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

![](//p.3ti.site/1720199603.avif)

### i18n.site-Übersetzung

Die Übersetzung von `i18` erkennt englische Begriffe in chinesischen, japanischen und koreanischen Dokumenten und lässt sie intakt.

Das obige japanische Übersetzungsergebnis lautet beispielsweise:

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

Die französische Übersetzung lautet:

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

Nur wenn zwischen dem englischen Wort und dem chinesischen, japanischen und koreanischen Text ein Leerzeichen steht oder die englische Länge größer als 1 ist, wird das Wort als Begriff betrachtet.

Beispiel: `C罗` wird als `Cristiano Ronaldo` übersetzt.

## Kann mit mehr als `i18n.site` Sprachen kombiniert werden, um eine Website zu erstellen

`i18` ist in das Befehlszeilentool für mehrsprachige Websites [`i18n.site`](/i18n.site) integriert.

Weitere Informationen finden Sie in der Dokumentation von [`i18n.site`](/i18n.site).

## Open Source Code

Der Client ist vollständig Open Source und 90% des Codes der Serverseite sind Open Source. [Klicken Sie hier, um den Quellcode anzuzeigen](/i18n.site/src).

Wir suchen Freiwillige, die sich an der Entwicklung von Open-Source-Code und dem Korrekturlesen übersetzter Texte beteiligen.

Wenn Sie interessiert sind, [→ Klicken Sie hier, um Ihr Profil auszufüllen](https://ggl.link/i18n) und sich dann [der Mailingliste](https://groups.google.com/u/2/g/i18n-site) zur Kommunikation anzuschließen.

## Den Kontakt halten

<button onclick="mailsub()">Klicken Sie bitte auf diese E-Mail, um Produktaktualisierungen zu abonnieren</button> und <button onclick="webpush()">den Browser-Push zu aktivieren</button>. Wir benachrichtigen Sie, wenn Produktaktualisierungen vorgenommen werden.

Folgen Sie auch gerne unseren sozialen Konten [X.COM: @i18nSite](https://x.com/i18nSite) / [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social).