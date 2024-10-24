# Stilliste

[Klicken Sie hier, um die Quelldatei dieser Seite zu durchsuchen](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/$LANG/i18n.site/md/styl.md) und zu sehen, wie Sie `MarkDown` in den folgenden Stilen schreiben.

## Unterstreichen & Durchgestrichen &

Das ist __ Unterstrich __ ,~~ durchgestrichen~~ und **fetter** Präsentationstext.

Es ist wie folgt geschrieben:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

Der `MarkDown` Parser des `i18n.site` Website-Erstellungstools hat die Unterstreichungs-, Durchstreichungs- und Fett-Syntax optimiert. Er kann ohne Leerzeichen vor und nach der Markierung wirksam werden, was das Schreiben von Dokumenten in Sprachen wie China, Japan und Korea erleichtert die keine Leerzeichen als Trennzeichen verwenden.

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
> your content
```

### Bemerkung `> [!NOTE]`

> [!NOTE]
> Was bedeutet es, wenn Sie mir eine Nachricht senden und ich sofort antworte?
> Das zeigt, dass ich es wirklich liebe, mit Mobiltelefonen zu spielen.


### Warnung `> [!WARN]`

> [!WARN]
> Bei einem wilden Abenteuer ist es wichtig, auf Nummer sicher zu gehen.
> Letzte Woche geriet eine Gruppe Bergsteiger auf halber Höhe des Berges in einen Sturm und musste evakuieren, weil sie die Wettervorhersage nicht überprüft hatten.
> Denken Sie daran, dass jede Outdoor-Aktivität eine angemessene Vorbereitung und Beachtung des Wetters erfordert.

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
    + Treffen zum Unternehmeraustausch
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