# Produktmerkmale

`i18` ist das Befehlszeilentool für die Übersetzung Markdown & Yaml

## Kann Das Format Von Markdown Perfekt Beibehalten

Unterstützt die Übersetzung von Markdown-Tabellen, ohne das Format zu beschädigen. Wörter in mathematischen Formeln oder Links werden nicht übersetzt.

Unterstützt die Übersetzung von gemischt HTML Markdown , der Inhalt in den in HTML `MarkDown` eingebetteten Tags `<pre>` und `<code>` wird nicht übersetzt

## Kann Mathematische Formeln Erkennen Und Übersetzungen Überspringen

Mathematische Formeln werden erkannt und die Übersetzung wird übersprungen.

Informationen zum Schreiben mathematischer Formeln finden Sie unter [„ Github Über das Schreiben mathematischer Ausdrücke“](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions) .

## Möglichkeit, Kommentare in Codeausschnitten Zu Übersetzen

Inline-Code und Codeausschnitte werden nicht übersetzt, Kommentare im Code können jedoch übersetzt werden.

Übersetzungskommentare müssen die Sprache nach ` ``` ` angeben, z ` ```rust ` B. :

Derzeit unterstützt es die Übersetzung von Anmerkungen in `toml` , `yaml` , `json5` , `go` , `rust` , `c` , `cpp` , `java` , `js` , `coffee` , `python` , `bash` , `php` [und anderen Sprachen](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14) .

Wenn Sie alle nicht-englischen Zeichen im Code übersetzen möchten, markieren Sie das Codesegment mit ` ```i18n ` .

Sollte die von Ihnen benötigte Programmiersprache nicht verfügbar sein, [kontaktieren Sie uns](https://groups.google.com/g/i18n-site) bitte.

## Befehlszeilenfreundlich

Für die Verwaltung von Übersetzungsdokumenten stehen viele [leistungsstarke Tools](https://www.capterra.com/translation-management-software) zur Verfügung.

Für Programmierer, die mit `git` , `vim` und `vscode` vertraut sind, erhöht die Verwendung dieser Tools zum Bearbeiten von Dokumenten und Verwalten von Versionen zweifellos die Lernkosten.

`KISS` ( `Keep It Simple, Stupid` ) Unternehmenslösungen gelten unter Grundsatzgläubigen als Synonym dafür, dass sie umständlich, ineffizient und schwierig zu verwenden sind.

Die Übersetzung sollte durch die Eingabe von Befehlen und deren Abschluss mit einem Klick erfolgen. Es sollten keine komplexen Umgebungsabhängigkeiten bestehen.

Fügen Sie keine Entitäten hinzu, es sei denn, dies ist erforderlich.

## Keine Änderung, Keine Übersetzung

Es gibt auch einige Befehlszeilen-Übersetzungstools, wie zum Beispiel [translate-shell](https://github.com/soimort/translate-shell)

Sie unterstützen jedoch nicht die Identifizierung von Dateiänderungen und übersetzen nur geänderte Dateien, um Kosten zu senken und die Effizienz zu steigern.

## Die Übersetzung Kann Bearbeitet Werden Und Die Maschinelle Übersetzung Überschreibt Keine Vorhandenen Änderungen.

Die Übersetzung kann bearbeitet werden.

Ändern Sie den Originaltext und übersetzen Sie ihn erneut maschinell. Die manuellen Änderungen an der Übersetzung werden nicht überschrieben (sofern dieser Absatz des Originaltexts nicht geändert wurde).

## Maschinelle Übersetzung in Bester Qualität

Wir haben eine neue Generation von Übersetzungstechnologien entwickelt, die die technischen Vorteile traditioneller maschineller Übersetzungsmodelle und großer Sprachmodelle kombiniert, um Übersetzungen präzise, reibungslos und elegant zu gestalten.

Blindtests zeigen, dass unsere Übersetzungsqualität im Vergleich zu ähnlichen Diensten deutlich besser ist.

Um die gleiche Qualität zu erreichen, ist der manuelle Bearbeitungsaufwand für Google Translate und `ChatGPT` `2.67` -mal bzw. `3.15` mal so hoch wie bei uns.

## <a rel=id href="#price" id="price"></a> Äußerst wettbewerbsfähige Preise

|                                                                                   | USD/Million Wörter |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazonas](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[➤ Klicken Sie hier, um github Bibliothek zu autorisieren, i18n.site automatisch zu folgen](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) und **Bonus- $50 zu erhalten** .

Hinweis: Die Anzahl der abrechenbaren Zeichen = [die Anzahl der unicode](https://en.wikipedia.org/wiki/Unicode) in der Quelldatei × die Anzahl der Sprachen in der Übersetzung

## Unterstützen Sie Die Übersetzung `YAML`

Das Tool übersetzt nur die Wörterbuchwerte in `YAML` , nicht die Wörterbuchschlüssel.

Basierend auf `YAML` Übersetzung können Sie problemlos internationale Lösungen für verschiedene Programmiersprachen erstellen.

## Unterstützt Die Header-Konfiguration Der Übersetzung `HOGO`

Unterstützt die Header-Konfiguration eines statischen Blogs vom Typ [HOGO](https://github.com/gohugoio/hugo) und übersetzt nur die Felder `title` , `summary` , `brief` und `description` .

## Variablennamen Nicht Übersetzen

`Markdown` wird als E-Mail-Vorlage verwendet, `YAML` wird als Sprachdateikonfiguration verwendet und es gibt variable Parameter (zum Beispiel: Aufladung `${amount}` wurde empfangen).

Variablennamen wie `${varname}` werden nicht als englische Übersetzungen betrachtet.

## Übersetzungsoptimierung Für China, Japan Und Korea

### Bei Der Übersetzung Ins Englische Wird Der Erste Buchstabe Des Titels Automatisch Großgeschrieben.

In China, Japan und Korea gibt es keine Groß- und Kleinbuchstaben, aber die Konvention für englische Titel besteht darin, den ersten Buchstaben groß zu schreiben.

`i18` kann den Titel in `MarkDown` erkennen und schreibt bei der Übersetzung in eine Sprache, bei der die Groß-/Kleinschreibung beachtet wird, automatisch den ersten Buchstaben groß.

Beispielsweise wird `为阅读体验而优化` in `Optimized for Reading Experience` übersetzt.

### Englische Begriffe in Chinesisch, Japanisch, Koreanisch Und Chinesisch Werden Nicht Übersetzt

Dokumente aus China, Japan und Korea enthalten oft viele englische Begriffe.

Die maschinelle Übersetzung der chinesischen, japanischen und koreanischen Sprachen ist zu einer nicht-englischen Sprache geworden, und Begriffe werden oft zusammen übersetzt, wie zum Beispiel der folgende chinesische Satz:

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

Wenn Sie Google oder DeepL verwenden, übersetzen beide englische Begriffe falsch, die im Original bleiben sollten (nehmen Sie Japanisch und Französisch als Beispiele).

### Google Translate

`ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす` Japanische übersetzt :

![](//p.3ti.site/1720199391.avif)

`Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique` Französische übersetzt :

`Falcon` wird als `faucon` übersetzt und `Llama` wird als `lama` übersetzt. Als Eigennamen sollten sie nicht übersetzt werden.

![](//p.3ti.site/1720199451.avif)

### DeepL-Übersetzung

`ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す` Japanische übersetzt :

![](//p.3ti.site/1720199550.avif)

DeepL Übersetzung des Obigen ins Französische (auch Umschreiben der Eigennamen und Hinzufügen der ungeraden `... ` ):

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

![](//p.3ti.site/1720199603.avif)

### i18n.site-Übersetzung

Die Übersetzung von `i18` erkennt englische Begriffe in chinesischen, japanischen und koreanischen Dokumenten und lässt die Begriffe intakt.

Das obige japanische Übersetzungsergebnis lautet beispielsweise:

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

Die französische Übersetzung lautet:

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

Nur wenn zwischen dem englischen Wort und dem chinesischen, japanischen und koreanischen Text ein Leerzeichen steht oder die englische Länge größer als 1 ist, wird das Wort als Begriff betrachtet.

Beispiel: `C罗` wird als `Cristiano Ronaldo` übersetzt.

## Kann Mit Mehr Als `i18n.site` Sprachen Kombiniert Werden, Um Eine Website Zu Erstellen

`i18` ist in das Befehlszeilentool [`i18n.site`](/i18n.site) zum Erstellen mehrsprachiger Websites integriert.

Weitere Informationen finden Sie in der Dokumentation von [`i18n.site`](/i18n.site) .

## Open-Source-Code

Der Client ist vollständig Open Source und die Serverseite ist Open Source 90 [Klicken Sie hier, um den Quellcode anzuzeigen](/i18n.site/c/src) .

Wir suchen Freiwillige, die sich an der Entwicklung von Open-Source-Code und dem Korrekturlesen übersetzter Texte beteiligen.

Wenn Sie interessiert sind, [→ Klicken Sie hier, um Ihr Profil auszufüllen](https://ggl.link/i18n) und sich dann [der Mailingliste](https://groups.google.com/u/2/g/i18n-site) zur Kommunikation anzuschließen.

## Den Kontakt Halten

<button onclick="mailsub()">Klicken Sie bitte auf diese E-Mail, um Produktaktualisierungen zu abonnieren</button> und <button onclick="webpush()">den Browser-Push zu aktivieren</button> . Wir benachrichtigen Sie, wenn Produktaktualisierungen vorgenommen werden.

Folgen Sie auch gerne unseren sozialen Konten / [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social) [X.COM: @i18nSite](https://x.com/i18nSite)