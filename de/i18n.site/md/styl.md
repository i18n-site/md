# Stilliste

[Klicken Sie hier, um die Quelldatei dieser Seite zu durchsuchen](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/zh/i18n.site/md/styl.md) und zu sehen, wie Sie `MarkDown` in den folgenden Stilen schreiben.

## Gefalteter Block

|+| Was ist MarkDown?

    MarkDown ist eine leichte Auszeichnungssprache, die es Benutzern ermöglicht, formatierte Dokumente in einem einfachen Textformat zu erstellen, das leicht zu lesen und zu schreiben ist.

    Wird häufig zum Schreiben von Dokumentationen, Blogartikeln, E-Books, Forenbeiträgen usw. verwendet.

    Es hat folgende Vorteile:

    1. Leicht zu erlernen
    1. Sehr gut lesbar
    1. Versionskontrollfreundlich

       Da `MarkDown` Dokumente im Nur-Text-Format vorliegen, können Programmierer sie problemlos in Versionskontrollsysteme (wie `git` ) integrieren.

       Dies erleichtert die Nachverfolgung von Änderungen und die Zusammenarbeit erheblich, insbesondere in der Teamentwicklung.

|-| Was ist I18N?

    „I18N“ ist die Abkürzung für „Internationalisierung“.

    Da das Wort „Internationalisierung“ aus 18 Buchstaben zwischen „I“ und „N“ besteht, wird zur Vereinfachung der Darstellung „I18N“ verwendet.

    Laienhaft ausgedrückt bedeutet dies, dass mehrere Sprachen unterstützt werden.


Der Faltblock ist eine erweiterte Syntax von `i18n.site` bis `MarkDown` , die wie folgt geschrieben ist :

```
|+| TITLE
    MARKDOWN CONTENT
    YOUR CAN WRITE MULTI LINE CONTENT
```

mit `|+| `或`|-| Die Zeile, die mit „beginnt“, generiert einen Faltblock, und der Inhalt des Faltblocks sind die nachfolgenden Zeilen mit derselben Einrückung (Absätze werden durch Leerzeilen getrennt).

Pass`|-| `标记的折叠块默认展开，`|+| „Mit Tags versehene minimierte Blöcke sind standardmäßig minimiert.

## Unterstreichen & Durchgestrichen &

Das ist __ Unterstrich __ ,~~ durchgestrichen~~ und **fetter** Präsentationstext.

Es ist wie folgt geschrieben:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

Der `MarkDown` Parser des `i18n.site` Website-Erstellungstools verfügt über eine optimierte Syntax für Unterstreichungen, Durchstreichungen und Fettdruck. Er kann ohne Leerzeichen vor und nach der Markierung wirksam werden, was das Schreiben von Dokumenten in Sprachen wie China, Japan und Korea erleichtert Verwenden Sie keine Leerzeichen als Trennzeichen.

Erweiterte Lektüre : [Warum wird die Markdown -Syntax ( `**……**` ) von Nuggets manchmal nicht wirksam?](//juejin.cn/post/7064565848421171213)

## Zitat

### Einzeiliges Zitat

> Es liegt in meiner Natur, dass meine Talente nützlich sein werden, und ich werde zurückkommen, nachdem mein ganzes Geld ausgegeben wurde.
<p style="text-align:right">─ Li Bai</p>

### Mehrzeilige Anführungszeichen

> Ein weiterer einzigartiger Vorteil der Science-Fiction ist ihr extrem breiter Umfang.
> Ein „Krieg und Frieden“ beschreibt mit einer Million Worten nur die Geschichte einer Region über mehrere Jahrzehnte;
> Und Science-Fiction-Romane wie Asimovs „The Final Answer“ beschreiben anschaulich in nur wenigen tausend Worten die Milliarden Jahre alte Geschichte des gesamten Universums, einschließlich der Menschheit.
> Eine solche Inklusivität und Kühnheit ist in der traditionellen Literatur nicht zu erreichen.
<p style="text-align:right">── Liu Cixin</p>

### Tipp `> [!TIP]`

> [!TIP]
> Denken Sie daran, die Gültigkeit Ihres Reisepasses und Visums zu überprüfen. Abgelaufene Dokumente können nicht in das Land ein- oder ausreisen.

Es ist wie folgt geschrieben

```
> [!TIP]
> YOUR CONTENT
```

### Bemerkung `> [!NOTE]`

> [!NOTE]
> Was bedeutet es, wenn Sie mir eine Nachricht senden und ich sofort antworte?
> Das zeigt, dass ich es wirklich liebe, mit Mobiltelefonen zu spielen.


### Warnung `> [!WARN]`

> [!WARN]
> Bei einem wilden Abenteuer ist es wichtig, auf Nummer sicher zu gehen. Hier sind einige wichtige Sicherheitstipps:
>
> - **Überprüfen Sie die Wettervorhersage** : Letzte Woche geriet eine Gruppe von Bergsteigern auf halber Höhe des Berges in einen Sturm, weil sie die Wettervorhersage nicht überprüften und dringend evakuiert werden mussten.
> - **Notwendige Ausrüstung mitnehmen** : Stellen Sie sicher, dass Sie ausreichend Essen, Wasser und Erste-Hilfe-Material mitbringen.
> - **Machen Sie sich mit dem Gelände vertraut** : Machen Sie sich im Voraus mit dem Gelände und den Routen des Abenteuergebiets vertraut, um sich nicht zu verlaufen.
> - **Bleiben Sie in Verbindung** : Bleiben Sie mit der Außenwelt in Verbindung und stellen Sie sicher, dass alle sicher zurückkehren können.
>
> Denken Sie daran: Sicherheit geht immer vor!

## To-Do-Liste

- [x] Entwerfen Sie einen Produktprototyp und eine Funktionsliste
- [ ] Bestimmen Sie den Technologie-Stack und die Entwicklungstools
- [ ] Entwickeln Sie Zeitpläne und Meilensteine für die Produktentwicklung

## Liste

### Geordnete Liste

1. läuft
   1. Dreimal pro Woche, jeweils 5 Kilometer
   1. Laufen Sie einen Halbmarathon
1. Training im Fitnessstudio
   1. Zweimal pro Woche, jeweils 1 Stunde
   1. Konzentrieren Sie sich auf die Rumpfmuskulatur

### Ungeordnete Liste

* gesellschaftliche Veranstaltungen
  - Nehmen Sie an Branchenaustauschtreffen teil
    + Sitzung zum Technologieaustausch
    + Unternehmeraustauschtreffen
  - Organisieren Sie ein Treffen mit Freunden
    + Grill im Freien
    + Filmabend

## Blatt

| Denker       | Hauptbeiträge                           |
|--------------|------------------------------------|
| Konfuzius         | Begründer des Konfuzianismus |
| Sokrates     | Vater der westlichen Philosophie  |
| Nietzsche         | Superman-Philosophie, die traditionelle Moral und Religion kritisiert       |
| Marx       | Kommunismus |

### Optimierung Der Anzeige Großer Tische

Bei relativ großen Tabellen können folgende Methoden genutzt werden, um den Anzeigeeffekt zu optimieren:

1. Verwenden Sie eine kleinere Schriftart

   Umschließen Sie die Tabelle beispielsweise mit `<div style="font-size:14px">` und `</div>` .

   Beachten Sie, dass das `div` Tag eine eigene Zeile belegen muss und davor und danach Leerzeilen lassen muss.
1. Für längeren Text in einer Zelle geben Sie `<br>` ein, um die Zeile umzubrechen
1. Wenn eine Spalte zu kurz gestaucht ist, können Sie `<div style="width:100px">xxx</div>` zur Kopfzeile hinzufügen, um die Breite zu vergrößern, und Sie können auch [`<wbr>` zur Kopfzeile](//developer.mozilla.org/docs/Web/HTML/Element/wbr) hinzufügen, um die Position des Zeilenumbruchs zu steuern.

Ein Demonstrationsbeispiel sieht wie folgt aus:

<div style="font-size:14px">

| Nation       | <div style="width:70px;margin:auto">Denkername</div> | Epoche | Wichtigste ideologische Beiträge                                                       |
|------------|------------------------------------------------|-----------------|--------------------------------------------------------------------|
| China       | Konfuzius                                           | 551-479 v. Chr   | Der Begründer des Konfuzianismus schlug Kernkonzepte wie „Wohlwollen“ und „Anstand“ vor und betonte die moralische Kultivierung und die soziale Ordnung. |
| antikes griechenland     | Sokrates                                       | 469-399 v. Chr   | Die Erforschung der Wahrheit durch Dialog und Dialektik schlägt vor, „sich selbst zu kennen“ und betont rationales Denken         |
| Frankreich       | Voltaire                                         | 1694-1778       | Repräsentative Persönlichkeiten der Aufklärung traten für Rationalität, Freiheit und Gleichheit ein und kritisierten religiösen Aberglauben und autoritäre Herrschaft.   |
| Deutschland       | Kant                                           | 1724-1804       | Bringen Sie die „Kritik der reinen Vernunft“ vor<br> Erforscht die Grundlagen von Moral, Freiheit und Wissen und betont dabei die praktische Vernunft     |

</div>

Der Pseudocode für das obige Beispiel lautet wie folgt:

```md

<div style="font-size:14px">

| xx | <div style="width:70px;margin:auto">xx<wbr>xx</div> | xx | xx |
|----|----|-----------|----|
| xx | xx | xx<br>xxx | xx |

</div>

```

## Code

### Inline-Code

In der riesigen Welt der Programmiersprachen nehmen `Rust` , `Python` , `JavaScript` und `Go` jeweils eine einzigartige Stellung ein.

### Mehrere Zeilen Code

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```

## Zeilenumbruch Innerhalb Des Absatzes

Zeilenumbrüche innerhalb von Absätzen können erreicht werden, ohne dass zwischen den Zeilen Leerzeilen eingefügt werden müssen.
Der Abstand zwischen Zeilenumbrüchen innerhalb von Absätzen ist kleiner als der Abstand zwischen Absätzen.

Zum Beispiel:

> Lebe als großartiger Mensch,
> Der Tod ist auch ein Geisterheld.
> Ich vermisse Xiang Yu immer noch,
> Zögern Sie, Jiangdong zu überqueren.
>
> Li Qingzhao nutzte Xiang Yus tragische Geschichte, um auf die Inkompetenz der Song-Dynastie hinzuweisen.
> Ausdruck seiner Unzufriedenheit darüber, dass der kaiserliche Hof sich kampflos ergeben hat.