# Angepasste Navigation

Nehmen wir die Demoseite als Beispiel [i18n-demo.github.io](//i18n-demo.github.io) um zu erklären, wie die Navigation angepasst werden kann.

![](https://p.3ti.site/1731036697.avif)

Die Dateien, die den nummerierten Bereichen in der obigen Abbildung entsprechen, lauten wie folgt:

1. Links [`.i18n/htm/t1.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t1.pug)
2. Richtig [`.i18n/htm/t2.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t2.pug)

[`pug`](https://pugjs.org) ist eine Vorlagensprache, die `HTML` generiert.

[➔ Klicken Sie hier, um die Grammatik von zu lernen pug](https://pugjs.org)

Zur Implementierung der Internationalisierung wird in der Datei die Formatzeichenfolge `${I18N.sponsor}` verwendet und ihr Inhalt wird durch den entsprechenden Text in [i18n.yml](https://github.com/i18n-site/demo.i18n.site/blob/main/en/i18n.yml) im Quellsprachenverzeichnis ersetzt.

**Schreiben Sie nicht `css` und `js` in `pug`** , da sonst ein Fehler auftritt.

Stile werden in `css` geschrieben und die Interaktion wird durch die Erstellung von Webkomponenten erreicht.

Hier ist die dem Stil der [i18n/htm/topbar.css](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/topbar.css) entsprechende Datei :