# Fußzeile

Nehmen wir weiterhin das Demonstrationsprojekt als Beispiel: Die Datei `.i18n/htm/foot.pug` im Verzeichnis `md` definiert die Fußzeile der Website.

![](https://p.3ti.site/1721286077.avif)

[`pug`](https://pugjs.org) ist eine Template-Sprache zur Generierung von `HTML`.

[➔ Klicken Sie hier, um die Syntax von pug zu erlernen](https://pugjs.org)

**Schreiben Sie kein `css` und `js` in `foot.pug`**, da dies zu Fehlern führt.

Bitte beziehen Sie sich auf die folgenden Hinweise: Stile werden in die entsprechenden `.css`-Dateien geschrieben, und Interaktionen werden durch die Erstellung von Webkomponenten realisiert.

## Fußzeilenstil

Im Demoprojekt befinden sich unter `md/.i18n/htm` drei `css`-Dateien.

* `foot.css`: Stil für die Fußzeile
* `import.css`: Standardstil für `i18n.site` auf der gesamten Website
* `conf.css`: Symbole und Schriftarten für die Fußzeile

### Symbolschriftart

Das Fußzeilensymbol wird durch die Erstellung einer Schriftart `F` auf iconfont.cn ( [Englische Version](https://www.iconfont.cn/?lang=en-us) / [Chinesische Version](https://www.iconfont.cn/?lang=zh) ) generiert.

Passen Sie bitte nach Bedarf Ihre eigene Symbolschriftart an und ersetzen Sie die folgenden Konfigurationen in `conf.css`:

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Webkomponenten

Schreiben Sie kein `js` in `foot.pug`. Bei Bedarf für Interaktionen erstellen Sie bitte eine benutzerdefinierte Webkomponente.

In `md/.i18n/htm/index.js` können Sie [Webkomponenten](https://www.freecodecamp.org/news/build-your-first-web-component/) definieren, die dann in `foot.pug` verwendet werden.

Die Erstellung von Webkomponenten ist einfach, zum Beispiel das benutzerdefinierte Tag `<x-img>`.

```js
customElements.define(
  'x-img',
  class extends HTMLElement {
    constructor() {
      super();
      var img = document.createElement('img');
      img.src = '//p.3ti.site/i18n.svg';
      img.style = "height:99px;width:99px;";
      this.append(img);
    }
  }
)
```

## Mehrsprachige Fußzeile

Der Code in `.i18n/htm/foot.pug` lautet wie folgt:

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Hier entspricht `${I18N.C}` dem Inhalt in `en/i18n.yml`:

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Durch die Verwendung von `${I18N.xxx}` in ähnlicher Schreibweise, kombiniert mit `i18n.yml`, können Sie die Internationalisierung der Fußzeile in mehrere Sprachen erreichen.

Das Hinzufügen von `class="a"` zum Link soll verhindern, dass der Link in `MarkDown` konvertiert wird. Siehe :
 [➔ `YAML`: Wie man verhindert, dass Link-`HTML` in `Markdown` umgewandelt wird](/i18/qa#H2)