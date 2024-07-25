# Produktmerkmale

`i18` ist ein Befehlszeilentool zum Übersetzen von Markdown & Yaml

## Kann Das Format Von Markdown Perfekt Beibehalten

Unterstützt die Übersetzung von Markdown-Tabellen, ohne das Format zu beschädigen. Wörter in mathematischen Formeln oder Links werden nicht übersetzt.

Unterstützt HTML Übersetzung von Markdown in HTML , `<pre>` und in `MarkDown` eingebettete `<code>` werden nicht übersetzt

## Kann Mathematische Formeln Erkennen Und Übersetzungen Überspringen

Mathematische Formeln werden erkannt und die Übersetzung wird übersprungen.

Informationen zum Schreiben mathematischer Formeln finden Sie unter [„ Github Über das Schreiben mathematischer Ausdrücke“](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions) .

## Möglichkeit, Kommentare in Codeausschnitten Zu Übersetzen

Inline-Code und Codeausschnitte werden nicht übersetzt, Kommentare im Code können jedoch übersetzt werden.

Bei Übersetzungskommentaren muss die Sprache angegeben werden ` ``` ` z. ` ```rust ` :

Unterstützt derzeit die Übersetzung von Kommentaren `toml` , `yaml` , `json5` , `go` , `rust` , `c` , `cpp` , `java` `js` `coffee` `python` , `bash` und `php` [Sprachen](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14) .

Sollte die von Ihnen benötigte Programmiersprache nicht verfügbar sein, [kontaktieren Sie uns](https://groups.google.com/g/i18n-site) bitte.

## Befehlszeilenfreundlich

Für die Verwaltung von Übersetzungsdokumenten stehen viele [leistungsstarke Tools](https://www.capterra.com/translation-management-software) zur Verfügung.

Für Programmierer, die mit `git` , `vim` , `vscode` vertraut sind, wird die Verwendung dieser Tools zum Bearbeiten von Dokumenten und zum Verwalten von Versionen zweifellos die Lernkosten erhöhen.

`KISS` ( `Keep It Simple, Stupid` ) Unter Anhängern dieses Prinzips sind Lösungen auf Unternehmensebene ein Synonym dafür, dass sie umständlich, ineffizient und schwierig zu verwenden sind.

Die Übersetzung sollte durch die Eingabe von Befehlen und deren Abschluss mit einem Klick erfolgen. Es sollten keine komplexen Umgebungsabhängigkeiten bestehen.

Fügen Sie keine Entitäten hinzu, es sei denn, dies ist erforderlich.

## Keine Änderung, Keine Übersetzung

Es gibt auch einige Befehlszeilen-Übersetzungstools, wie zum Beispiel [translate-shell](https://github.com/soimort/translate-shell)

Sie unterstützen jedoch nicht die Identifizierung von Dateiänderungen und übersetzen nur geänderte Dateien, um Kosten zu senken und die Effizienz zu steigern.

## Die Übersetzung Kann Bearbeitet Werden Und Die Maschinelle Übersetzung Überschreibt Keine Vorhandenen Änderungen.

Die Übersetzung kann bearbeitet werden.

Ändern Sie den Originaltext und übersetzen Sie ihn erneut maschinell. Die manuellen Änderungen an der Übersetzung werden nicht überschrieben (sofern dieser Absatz des Originaltexts nicht geändert wurde).

## Xindayas Hochwertige Übersetzung

Wir haben eine neue Generation von Übersetzungstechnologien entwickelt, die die technischen Vorteile traditioneller maschineller Übersetzungsmodelle und großer Sprachmodelle integrieren, um Übersetzungen präzise, reibungslos und elegant zu gestalten.

Blindtests zeigen, dass unsere Übersetzungsqualität im Vergleich zu ähnlichen Diensten deutlich besser ist.

Um die gleiche Qualität zu erreichen, beträgt der manuelle Bearbeitungsaufwand für Google Translate und `ChatGPT` das `2.67` -fache bzw. `3.15` -fache.

## <a rel=id href="#price" id="price"></a> Äußerst wettbewerbsfähige Preise

|                                                                                   | USD/Million Wörter |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazonas](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

Hinweis: Die Anzahl der abrechenbaren Zeichen = [die Anzahl der unicode](https://en.wikipedia.org/wiki/Unicode) in der Quelldatei × die Anzahl der Sprachen in der Übersetzung

## Unterstützen Sie Die Übersetzung `YAML`

Das Tool übersetzt nur die Wörterbuchwerte `YAML` nicht die Wörterbuchschlüssel.

Basierend auf `YAML` Translation können Sie problemlos internationale Lösungen für verschiedene Programmiersprachen erstellen.

## Unterstützen Sie Die Übersetzung `HOGO`

Unterstützt die Header-Konfiguration eines statischen Blogs vom Typ [HOGO](https://github.com/gohugoio/hugo) , nur die Felder `title` , `summary` und `description` .

## Variablennamen Nicht Übersetzen

`Markdown` Als E-Mail-Vorlage verwendet, `YAML` als Sprachdateikonfiguration, es gibt variable Parameter (zum Beispiel: Aufladung `${amount}` wurde empfangen).

`${varname}` Diese Art von Variablennamen wird nicht als englische Übersetzung betrachtet.

## Übersetzungsoptimierung Für China, Japan Und Korea

### Bei Der Übersetzung Ins Englische Wird Der Erste Buchstabe Des Titels Automatisch Großgeschrieben.

In China, Japan und Korea gibt es weder Groß- noch Kleinbuchstaben, englische Titel schreiben jedoch im Allgemeinen den ersten Buchstaben groß.

`i18` kann Titel in `MarkDown` erkennen und schreibt bei der Übersetzung in eine Sprache, bei der die Groß-/Kleinschreibung beachtet wird, automatisch den ersten Buchstaben.

Beispielsweise wird `为阅读体验而优化` als `Optimized for Reading Experience` übersetzt.

### Englische Begriffe in Chinesisch, Japanisch, Koreanisch Und Chinesisch Werden Nicht Übersetzt

Dokumente aus China, Japan und Korea enthalten oft viele englische Begriffe.

Die maschinelle Übersetzung der chinesischen, japanischen und koreanischen Sprachen ist zu einer nicht-englischen Sprache geworden, und Begriffe werden oft zusammen übersetzt, wie zum Beispiel der folgende chinesische Satz:

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

Wenn Sie Google oder DeepL verwenden, übersetzen beide englische Begriffe falsch, die im Original bleiben sollten (nehmen Sie Japanisch und Französisch als Beispiele).

### Google Übersetzer

Ins `ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす` übersetzt :

<img alt="" src="//p.3ti.site/1720199391.avif">

Ins `Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique` übersetzt :

`Falcon` wird als `faucon` und `Llama` übersetzt als `lama` . Als Eigennamen sollten sie nicht übersetzt werden.

<img alt="" src="//p.3ti.site/1720199451.avif">

### DeepL-Übersetzung

Ins `ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す` übersetzt :

<img alt="" src="//p.3ti.site/1720199550.avif">

DeepL Übersetzung des Obigen ins Französische (auch die Eigennamen umschreiben und das ungerade hinzufügen `... ` ):

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

<img alt="" src="//p.3ti.site/1720199603.avif">

### i18n.site-Übersetzung

Die Übersetzung von `i18` erkennt englische Begriffe in chinesischen, japanischen und koreanischen Dokumenten und lässt die Begriffe intakt.

Das obige japanische Übersetzungsergebnis lautet beispielsweise:

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

Die französische Übersetzung lautet:

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

Nur wenn zwischen dem englischen Wort und dem chinesischen, japanischen und koreanischen Text ein Leerzeichen steht oder die englische Länge größer als 1 ist, wird das Wort als Begriff betrachtet.

Beispiel: `C罗` wird als `Cristiano Ronaldo` übersetzt.

## Kombinierbar `i18n.site` Mehrsprachige Website-Erstellung

`i18` Ist in das Befehlszeilentool zur mehrsprachigen Website-Erstellung integriert [`i18n.site`](/i18n.site) .

Weitere Informationen finden Sie in der Dokumentation von [`i18n.site`](/i18n.site)

## Open-Source-Code

Der Client ist vollständig Open Source und die Serverseite ist Open Source 90 [Klicken Sie hier, um den Quellcode anzuzeigen](/i18n.site/src) .

Wir suchen Freiwillige, die sich an der Entwicklung von Open-Source-Code und dem Korrekturlesen übersetzter Texte beteiligen.

Wenn Sie interessiert sind, [→ Klicken Sie hier, um Ihr Profil auszufüllen](https://ggl.link/i18n) und sich dann [der Mailingliste](https://groups.google.com/u/2/g/i18n-site) für die Kommunikation anzuschließen.

## Den Kontakt Halten

<button onclick="mailsub()">Klicken Sie bitte auf diese E-Mail, um Produktaktualisierungen zu abonnieren</button> und <button onclick="webpush()">den Browser-Push zu aktivieren</button> . Wir benachrichtigen Sie, wenn Produktaktualisierungen vorgenommen werden.

Folgen Sie auch gerne unseren sozialen Konten / [X.COM: @i18nSite](https://x.com/i18nSite) [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social)
