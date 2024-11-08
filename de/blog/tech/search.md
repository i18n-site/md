---

brief: |
  i18n.site unterstützt jetzt die serverlose Volltextsuche.

  In diesem Artikel wird die Implementierung der reinen Front-End-Volltextsuchtechnologie vorgestellt, einschließlich des von IndexedDB erstellten invertierten Indexes, der Präfixsuche, der Optimierung der Wortsegmentierung und der Unterstützung mehrerer Sprachen.

  Im Vergleich zu bestehenden Lösungen ist die reine Front-End-Volltextsuche von i18n.site klein und schnell, eignet sich für kleine und mittlere Websites wie Dokumente und Blogs und ist offline verfügbar.

---

# Reine Invertierte Front-End-Volltextsuche

## Sequenz

Nach mehreren Wochen der Entwicklung unterstützt [i18n.site](//i18n.site) (ein rein statisches markdown multilingualtranslation & -Tool zum Erstellen von Websites) jetzt die reine Front-End-Volltextsuche.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

In diesem Artikel wird die technische Implementierung der `i18n.site` reinen Front-End-Volltextsuche vorgestellt, um den Sucheffekt zu [i18n.site](//i18n.site) .

Code Open Source : Suchen Sie nach der / [Kernel](//github.com/i18n-site/ie/tree/main/qy) [-Schnittstelle](//github.com/i18n-site/plugin/tree/main/qy)

## Ein Überblick Über Serverlose Volltextsuchlösungen

Für kleine und mittlere rein statische Websites wie Dokumente/persönliche Blogs ist der Aufbau eines selbst erstellten Backends für die Volltextsuche zu aufwändig und die dienstfreie Volltextsuche ist die häufigere Wahl.

Lösungen für die serverlose Volltextsuche lassen sich in zwei große Kategorien einteilen:

Erstens, ähnlich [algolia.com](//algolia.com) Drittanbieter von Suchdiensten stellen Frontend-Komponenten für die Volltextsuche bereit.

Solche Dienste erfordern eine Bezahlung basierend auf dem Suchvolumen und sind für Benutzer auf dem chinesischen Festland häufig aufgrund von Problemen wie der Einhaltung der Website-Compliance nicht verfügbar.

Es kann nicht offline verwendet werden, kann nicht im Intranet verwendet werden und unterliegt großen Einschränkungen. In diesem Artikel wird nicht viel besprochen.

Die zweite ist die reine Front-End-Volltextsuche.

Derzeit gehören zu den gängigen reinen Front-End-Volltextsuchen [lunrjs](//lunrjs.com) und [ElasticLunr.js](//github.com/weixsong/elasticlunr.js) (basierend auf `lunrjs` Sekundärentwicklung).

`lunrjs` Es gibt zwei Möglichkeiten, Indizes zu erstellen, und beide haben ihre eigenen Probleme.

1. Vorgefertigte Indexdateien

   Da der Index Wörter aus allen Dokumenten enthält, ist er groß.
   Immer wenn ein Dokument hinzugefügt oder geändert wird, muss eine neue Indexdatei geladen werden.
   Dies erhöht die Wartezeit des Benutzers und verbraucht viel Bandbreite.

2. Laden Sie Dokumente und erstellen Sie Indizes im Handumdrehen

   Das Erstellen eines Index ist eine rechenintensive Aufgabe. Die Neuerstellung des Index bei jedem Zugriff führt zu offensichtlichen Verzögerungen und einer schlechten Benutzererfahrung.

---

Neben `lunrjs` gibt es noch einige andere Volltextsuchlösungen, wie zum Beispiel :

[fusejs](//www.fusejs.io) , Berechnen Sie die Ähnlichkeit zwischen den zu suchenden Zeichenfolgen.

Die Leistung dieser Lösung ist äußerst schlecht und kann nicht für die Volltextsuche verwendet werden (siehe [Fuse.js Lange Abfrage dauert mehr als 10 Sekunden, wie optimiert man sie?](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries) ).

[TinySearch](//github.com/tinysearch/tinysearch) , verwenden Sie den Bloom-Filter zum Suchen, können nicht für die Präfixsuche verwendet werden (geben Sie beispielsweise `goo` ein, suchen Sie `good` , `google` ) und können keinen ähnlichen automatischen Vervollständigungseffekt erzielen.

Aufgrund der Mängel bestehender Lösungen hat `i18n.site` eine neue reine Front-End-Volltextsuchlösung entwickelt, die die folgenden Merkmale aufweist :

1. Unterstützt die mehrsprachige Suche und ist klein. Die Größe des Suchkerns nach dem Packen von `gzip` beträgt `6.9KB` (zum Vergleich: Die Größe von `lunrjs` beträgt `25KB` ).
1. Erstellen Sie einen invertierten Index basierend auf `indexedb` , der weniger Speicher benötigt und schnell ist.
1. Wenn Dokumente hinzugefügt/geändert werden, werden nur die hinzugefügten oder geänderten Dokumente neu indiziert, wodurch sich der Berechnungsaufwand verringert.
1. Unterstützt die Präfixsuche und kann Suchergebnisse in Echtzeit anzeigen, während der Benutzer tippt.
1. Offline verfügbar

Im Folgenden werden `i18n.site` technische Implementierungsdetails im Detail vorgestellt.

## Mehrsprachige Wortsegmentierung

Die Wortsegmentierung verwendet die native Wortsegmentierung `Intl.Segmenter` des Browsers, und alle gängigen Browser unterstützen diese Schnittstelle.

![](//p.3ti.site/1727667759.avif)

Der Wortsegmentierungs `coffeescript` Code lautet wie folgt

```coffee
SEG = new Intl.Segmenter 0, granularity: "word"

seg = (txt) =>
  r = []
  for {segment} from SEG.segment(txt)
    for i from segment.split('.')
      i = i.trim()
      if i and !'| `'.includes(i) and !/\p{P}/u.test(i)
        r.push i
  r

export default seg

export segqy = (q) =>
  seg q.toLocaleLowerCase()
```

In:

* `/\p{P}/` ist ein regulärer Ausdruck, der mit Satzzeichen übereinstimmt: `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _` { | } ~. `.</p><ul><li> `split('.')` liegt daran, dass `Firefox` Browserwortsegmentierung `. ` nicht segmentiert.</li>


## Indexerstellung

5 Objektspeichertabellen wurden im Jahr `IndexedDB` erstellt :

* `word` : id - Wörter
* `doc` : id - Dokument url - Dokumentversionsnummer
* `docWord` : Array von Dokument id - Wort id
* `prefix` : Array von Präfix - Wort id
* `rindex` : Wort id - Dokument id : Array von Zeilennummern

Übergeben Sie das Array von Dokument `url` und Versionsnummer `ver` und suchen Sie in Tabelle `doc` , ob das Dokument vorhanden ist. Wenn es nicht vorhanden ist, erstellen Sie einen invertierten Index. Entfernen Sie gleichzeitig den invertierten Index für die Dokumente, die nicht übergeben wurden.

Auf diese Weise kann eine inkrementelle Indizierung erreicht und der Rechenaufwand reduziert werden.

In der Front-End-Interaktion kann der Ladefortschrittsbalken des Index angezeigt werden, um Verzögerungen beim ersten Laden zu vermeiden. Siehe „Fortschrittsbalken mit Animation, basierend auf einer einzelnen progress + Pure css -Implementierung“ [Englisch](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [Chinesisch](//juejin.cn/post/7413586285954154522) .

### IndexedDB Mit Hoher Gleichzeitiger Schreibgeschwindigkeit

Das Projekt [idb](//www.npmjs.com/package/idb) auf der asynchronen Kapselung von IndexedDB

IndexedDB-Lese- und Schreibvorgänge erfolgen asynchron. Beim Erstellen eines Index werden Dokumente gleichzeitig geladen, um den Index zu erstellen.

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

## Präzision Und Rückruf

Bei der Suche werden zunächst die vom Benutzer eingegebenen Schlüsselwörter segmentiert.

Gehen Sie davon aus, dass nach der Wortsegmentierung `N` Wörter vorhanden sind. Bei der Rückgabe von Ergebnissen werden zuerst Ergebnisse zurückgegeben, die alle Schlüsselwörter enthalten, und dann werden Ergebnisse zurückgegeben, `N-1` , `N-2` , ..., `1` Schlüsselwörter enthalten.

Die zuerst angezeigten Suchergebnisse stellen die Genauigkeit der Abfrage sicher, und die anschließend geladenen Ergebnisse (klicken Sie auf die Schaltfläche „Mehr laden“) stellen die Rückrufrate sicher.

![](//p.3ti.site/1727684564.avif)

## Laden Nach Bedarf

Um die Antwortgeschwindigkeit zu verbessern, verwendet die Suche den `yield` Generator, um das Laden bei Bedarf zu implementieren, und gibt `limit` Mal zurück, wenn ein Ergebnis abgefragt wird.

Beachten Sie, dass Sie jedes Mal, wenn Sie erneut nach `yield` suchen, eine Abfragetransaktion von `IndexedDB` erneut öffnen müssen.

## Präfix-Echtzeitsuche

Um Suchergebnisse anzuzeigen, während der Benutzer beispielsweise `wor` eingibt, werden Wörter mit dem Präfix `wor` wie `words` und `work` angezeigt.

![](//p.3ti.site/1727684944.avif)

Der Suchkernel verwendet die `prefix` Tabelle für das letzte Wort nach der Wortsegmentierung, um alle Wörter mit diesem Präfix zu finden und der Reihe nach zu suchen.

Die Anti-Shake-Funktion `debounce` wird auch in der Front-End-Interaktion verwendet (implementiert wie folgt), um die Häufigkeit von Benutzereingaben zu reduzieren, die Suchen auslösen, und den Rechenaufwand zu reduzieren.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Offline Verfügbar

In der Indextabelle wird nicht der Originaltext, sondern nur die Wörter gespeichert, wodurch sich der Speicherplatz verringert.

Das Hervorheben von Suchergebnissen erfordert das erneute Laden des Originaltexts. Durch die Übereinstimmung mit `service worker` können wiederholte Netzwerkanfragen vermieden werden.

Da `service worker` alle Artikel zwischenspeichert, ist gleichzeitig die gesamte Website, einschließlich der Suche, offline verfügbar, sobald der Benutzer eine Suche durchführt.

## Darstellungsoptimierung Von MarkDown-Dokumenten

Die reine Front-End-Suchlösung von `i18n.site` ist für `MarkDown` Dokumente optimiert.

Bei der Anzeige von Suchergebnissen wird der Kapitelname angezeigt und beim Anklicken wird durch das Kapitel navigiert.

![](//p.3ti.site/1727686552.avif)

## Zusammenfassen

Invertierte Volltextsuche, rein im Frontend implementiert, kein Server erforderlich. Es eignet sich sehr gut für kleine und mittelgroße Websites wie Dokumente und persönliche Blogs.

`i18n.site` Die von Open Source selbst entwickelte reine Front-End-Suche mit geringer Größe und schneller Reaktion behebt die Mängel der aktuellen reinen Front-End-Volltextsuche und bietet eine bessere Benutzererfahrung.