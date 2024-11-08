# Angepasste Fußzeile

Nehmen wir immer noch das Demoprojekt als Beispiel: `.i18n/htm/foot.pug` im Verzeichnis `md` definiert die Fußzeile der Website.

![](https://p.3ti.site/1721286077.avif)

## Fußzeilenstil

Im Demoprojekt gibt es drei `css` Dateien unter `md/.i18n/htm` .

* `foot.css` : Fußzeilenstil
* `import.css` : `i18n.site` für die gesamte Site
* `conf.css` : Fußzeilensymbole und Schriftarten

### Symbolschriftart

Das Fußzeilensymbol wird durch Erstellen einer Schriftart mit dem Namen iconfont.cn generiert `F` [englische Version](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)).

Bitte erstellen Sie nach Bedarf Ihre eigene Symbolschriftart und ersetzen Sie die folgende Konfiguration in `conf.css` :

```
@font-face {
  font-family: "F";
  src: url(//p.3ti.site/ico1.woff2) format("woff2");
}

#Ft>b>a.site {
  background: url("//p.3ti.site/i18n.svg") 0 0 / cover;
  display: block;
  height: 24px;
  opacity: 0.8;
  width: 115px;
  flex-shrink: 0;
}
```

Bitte verweisen Sie nicht direkt auf die Schriftartdatei von iconfont.cn, da diese nicht in den Safari-Browser geladen werden kann.

## Webkomponenten

Sie können nicht `js` in `foot.pug` schreiben. Wenn eine Interaktion erforderlich ist, passen Sie bitte die Webkomponente an.

[Eine Webkomponente](https://www.freecodecamp.org/news/build-your-first-web-component/) kann in `md/.i18n/htm/index.js` definiert und dann in `foot.pug` verwendet werden.

Es ist einfach, Webkomponenten zu erstellen, z. B. benutzerdefinierte `<x-img>` .

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

Der Code in `.i18n/htm/foot.pug` ist wie folgt :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Hier entspricht `${I18N.C}` `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Durch die Verwendung `${I18N.xxx}` ähnlich dieser Schreibweise in Kombination mit `i18n.yml` können Sie eine mehrsprachige Internationalisierung der Fußzeile erreichen.

Das Hinzufügen von `class="a"` zum Link soll verhindern, dass der Link in `MarkDown` konvertiert wird. Siehe :
 [➔ `YAML` : So verhindern Sie, dass Link `HTML` in `Markdown` umgewandelt wird](/i18/qa#H2) .