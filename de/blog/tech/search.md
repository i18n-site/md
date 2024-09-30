# Reine Frontend-Invertierte Volltextsuche

## Sequenz

Nach mehreren Wochen der Entwicklung unterstützt [i18n.site](//i18n.site) (ein rein statisches markdown-basiertes Mehrsprachen-Übersetzungs- und Website-Erstellungstool) jetzt die reine Frontend-Volltextsuche.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

In diesem Artikel wird die technische Implementierung der reinen Frontend-Volltextsuche von `i18n.site` vorgestellt. Besuchen Sie [i18n.site](//i18n.site), um die Suchfunktion auszuprobieren.

Der Code ist Open Source: [Suchkernel](//github.com/i18n-site/ie/tree/main/qy) / [Benutzeroberfläche](//github.com/i18n-site/plugin/tree/main/qy)

## Überblick über serverlose Volltextsuchlösungen

Für kleine und mittlere rein statische Websites wie Dokumente/persönliche Blogs ist der Aufbau eines selbst erstellten Backends für die Volltextsuche zu aufwendig, und die dienstoffreie Volltextsuche ist die häufigere Wahl.

Lösungen für serverlose Volltextsuche lassen sich in zwei Hauptkategorien einteilen:

Erstens, ähnlich wie [algolia.com](//algolia.com), bieten Drittanbieter für Suchdienste Frontend-Komponenten für die Volltextsuche an.

Diese Dienste erfordern eine Gebühr basierend auf der Suchmenge und sind oft aufgrund von Compliance-Problemen mit Websites für chinesische Benutzer auf dem Festland nicht verfügbar.

Sie können nicht offline oder im Intranet verwendet werden und haben daher erhebliche Einschränkungen. Diese Lösung wird hier nicht weiter diskutiert.

Zweitens gibt es die reine Frontend-Volltextsuche.

Zu den häufig verwendeten reinen Frontend-Volltextsuchen gehören [lunrjs](/0) und [ ElasticLunr.js ] [https://github.com/weixsong/elasticlunr.js](%E5%9F%BA%E4%BA%8E%60lunrjs%60%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91) .

`lunrjs` bietet zwei Methoden zur Indexerstellung, beide haben jedoch ihre eigenen Probleme.

1. Vorgefertigte Indexdateien

   Da der Index alle Wörter der Dokumente enthält, ist er groß.
   Bei jeder Änderung der Dokumente muss eine neue Indexdatei geladen werden, was die Wartezeit des Benutzers verlängert und viel Bandbreite verbraucht.
   Dokumente laden und Indizes im Handumdrehen erstellen

2. Dokumente laden und Indizes in Echtzeit erstellen

   Das Erstellen eines Indexes ist eine rechenintensive Aufgabe, und das ständige Neuerstellen des Indexes bei jedem Zugriff führt zu erheblichen Verzögerungen und einer schlechten Benutzererfahrung.

---

Neben `lunrjs` gibt es noch einige andere Volltextsuchlösungen, wie zum Beispiel:

[fusejs](https://www.fusejs.io), das Ähnlichkeiten zwischen Zeichenfolgen berechnet, um zu suchen.

Diese Lösung ist von extrem schlechter Leistung und kann nicht für die Volltextsuche verwendet werden (siehe [Fuse.js: Lange Abfragen dauern mehr als 10 Sekunden, wie optimiert man sie?](https://stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries)).

[TinySearch](https://github.com/tinysearch/tinysearch), das den Bloom-Filter zum Suchen verwendet, kann nicht für Präfixsuchen verwendet werden (z.B. bei Eingabe von `goo` werden `good` und `google` nicht gefunden) und kann keinen ähnlichen automatischen Vervollständigungseffekt erzielen.

Aufgrund der Nachteile bestehender Lösungen hat `i18n.site` eine neue, rein frontendbasierte Volltextsuchlösung entwickelt, die folgende Merkmale aufweist:

1. Unterstützt die mehrsprachige Suche und ist klein. Die Größe des Suchkerns nach dem Packen von `gzip` beträgt `6.9KB` (zum Vergleich: Die Größe von `lunrjs` beträgt `25KB` )
1. Basiert auf `indexedb` und erstellt einen invertierten Index, der weniger Speicherplatz beansprucht und schnell ist
1. Wenn Dokumente hinzugefügt/geändert werden, werden nur die hinzugefügten oder geänderten Dokumente neu indiziert, wodurch sich der Berechnungsaufwand verringert
1. Offline verfügbar
1. Offline verfügbar

Im Folgenden werden die technischen Implementierungsdetails von `i18n.site` im Detail vorgestellt.

## Mehrsprachige Wortsegmentierung

Der `coffeescript` Code für die Wortsegmentierung lautet wie folgt:

![](https://p.3ti.site/1727667759.avif)

Der Wortsegmentierungs `coffeescript` Code lautet wie folgt

```coffee
SEG = new Intl.Segmenter 0, granularity: "word"

seg = (txt) =>
  r = []
  for {segment} from SEG.segment(txt)
    for i from segment.split('.')
      i = i.trim()
      if i and !'|`'.includes(i) and !/\p{P}/u.test(i)
        r.push i
  r

export default seg

export segqy = (q) =>
  seg q.toLocaleLowerCase()
```

In:

* `/\p{P}/` ist ein regulärer Ausdruck, der mit Satzzeichen übereinstimmt: `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _ ` { | } ~. `.</p><ul><li> `split('.')` liegt daran, dass `Firefox` Browserwortsegmentierung `.` nicht segmentiert.</li>


## Indexerstellung

`word` : id - Wort

* `doc` : id - Dokument-URL - Dokumentversionsnummer
* `docWord` : Dokument-id - Array von Wort-id
* `prefix` : Präfix - Array von Wort-id
* `rindex` : Wort-id - Dokument-id : Array von Zeilennummern
* `rindex` : Wort-ID - Dokument-ID : Array von Zeilennummern

Übergeben Sie das Array von Dokument `url` und Versionsnummer `ver` und suchen Sie in Tabelle `doc` , ob das Dokument vorhanden ist. Wenn es nicht vorhanden ist, erstellen Sie einen invertierten Index. Entfernen Sie gleichzeitig den invertierten Index für die Dokumente, die nicht übergeben wurden.

So kann eine inkrementelle Indizierung erreicht werden, was den Berechnungsaufwand reduziert.

In der Frontend-Interaktion kann ein Fortschrittsbalken angezeigt werden, um Verzögerungen beim ersten Laden zu vermeiden. Siehe „Fortschrittsbalken mit Animation, basierend auf einer einzigen progress + Pure css -Implementierung“ [Englisch](https://dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [Chinesisch](https://juejin.cn/post/7413586285954154522).

### IndexedDB mit hoher Gleichzeitiger Schreibgeschwindigkeit

Das Projekt basiert auf der asynchronen Kapselung von IndexedDB durch [idb](https://www.npmjs.com/package/idb).

IndexedDB-Lese- und Schreibvorgänge sind asynchron. Beim Erstellen eines Indexes werden Dokumente gleichzeitig geladen, um den Index zu erstellen.

Um einen teilweisen Datenverlust durch konkurrierendes Schreiben zu vermeiden, können Sie sich auf den `coffeescript` Code unten beziehen und zwischen Lesen und Schreiben einen `ing` Cache hinzufügen, um konkurrierende Schreibvorgänge abzufangen.

```coffee
pusher = =>
  ing = new Map()
  (table, id, val)=>
    id_set = ing.get(id)
    if id_set
      id_set.add val
      return

    id_set = new Set([val])
    ing.set id, id_set
    pre = await table.get(id)
    li = pre?.li or []

    loop
      to_add = [...id_set]
      li.push(...to_add)
      await table.put({id,li})
      for i from to_add
        id_set.delete i
      if not id_set.size
        ing.delete id
        break
    return

rindexPush = pusher()
prefixPush = pusher()
```

## Präfix-Echtzeitsuche

Um Suchergebnisse anzuzeigen, während der Benutzer beispielsweise `wor` eingibt, werden Wörter mit dem Präfix `wor` wie `words` und `work` angezeigt.

![](https://p.3ti.site/1727684944.avif)

In der Frontend-Interaktion wird die Anti-Shake-Funktion `debounce` verwendet, um die Häufigkeit von Benutzereingaben zu reduzieren, die Suchen auslösen, und den Rechenaufwand zu reduzieren.

Die Anti-Shake-Funktion `debounce` wird auch in der Frontend-Interaktion verwendet (implementiert wie folgt), um die Häufigkeit von Benutzereingaben zu reduzieren, die Suchen auslösen, und den Rechenaufwand zu reduzieren.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Präzision und Vollständigkeit

Bei der Suche werden zunächst die vom Benutzer eingegebenen Schlüsselwörter segmentiert.

Gehen Sie davon aus, dass nach der Wortsegmentierung `N` Wörter vorhanden sind. Bei der Rückgabe der Ergebnisse werden zunächst Ergebnisse mit allen Schlüsselwörtern zurückgegeben, gefolgt von Ergebnissen mit `N-1`, `N-2`, ..., `1` Schlüsselworten.

Die zuerst angezeigten Ergebnisse stellen die Genauigkeit der Abfrage sicher, während die nachfolgend geladenen Ergebnisse (durch Klicken auf die Schaltfläche „Mehr laden“) die Vollständigkeit sicherstellen.

![](https://p.3ti.site/1727684564.avif)

## Bezugnahme auf Bedarf

Beachten Sie, dass Sie jedes Mal, wenn Sie erneut nach `yield` suchen, eine Abfragetransaktion von `IndexedDB` erneut öffnen müssen.

Beachten Sie, dass nach jedem `yield` eine neue Abfrageübersetzung von `IndexedDB` erforderlich ist.

## Präfix-Echtzeitsuche

Um Suchergebnisse anzuzeigen, während der Benutzer beispielsweise `wor` eingibt, werden Wörter mit dem Präfix `wor` wie `words` und `work` angezeigt.

![](https://p.3ti.site/1727684944.avif)

In der Frontend-Interaktion wird die Anti-Shake-Funktion `debounce` verwendet, um die Häufigkeit von Benutzereingaben zu reduzieren, die Suchen auslösen, und den Rechenaufwand zu reduzieren.

Die Anti-Shake-Funktion `debounce` wird auch in der Frontend-Interaktion verwendet (implementiert wie folgt), um die Häufigkeit von Benutzereingaben zu reduzieren, die Suchen auslösen, und den Rechenaufwand zu reduzieren.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Offline verfügbar

In der Indextabelle werden nicht der Originaltext, sondern nur die Wörter gespeichert, was den Speicherplatz verringert.

Zudem speichert der `service worker` alle Artikel, sodass die gesamte Website, einschließlich der Suche, offline verfügbar ist, sobald der Benutzer eine Suche durchgeführt hat.

Da `service worker` alle Artikel zwischenspeichert, ist die gesamte Website, einschließlich der Suche, offline verfügbar, sobald der Benutzer eine Suche durchführt.

## Optimierung der Darstellung für Markdown-Dokumente

Die reine Front-End-Suchlösung von `i18n.site` ist für `MarkDown` Dokumente optimiert.

Zusammenfassung

![](https://p.3ti.site/1727686552.avif)

## Zusammenfassung

Eine rein frontendbasierte invertierte Volltextsuche, die keinen Server erfordert. Sie ist besonders gut geeignet für Dokumente, persönliche Blogs und andere kleine bis mittlere Websites.

Die von `i18n.site` entwickelte und als Open Source veröffentlichte reine Frontend-Suche ist kompakt und reagiert schnell, behebt die bestehenden Nachteile der reinen Frontend-Volltextsuche und bietet eine bessere Benutzererfahrung.