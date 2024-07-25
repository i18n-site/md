# Fusszeile

Nehmen wir immer noch das Demoprojekt als Beispiel: Die Fußzeile der Website `.i18n/htm/foot.pug` im Verzeichnis `md` definiert.

<img alt="" src="https://p.3ti.site/1721286077.avif">

[`pug`](https://pugjs.org) ist eine Vorlagensprache, die `HTML` generiert.

[➔ Klicken Sie hier, um die Grammatik von zu lernen pug](https://pugjs.org)

**Schreiben Sie nicht `css` und `js` `foot.pug`** , sonst kommt es zu Fehlern.

Bitte beachten Sie Folgendes: Der Stil wird im entsprechenden `.css` geschrieben und die Interaktion wird durch Erstellen von Webkomponenten erreicht.

## Fußzeilenstil

Im `md/.i18n/htm` gibt es unten 3 `css` Dateien.

* `foot.css` :
* `import.css` `i18n.site` für : gesamte Website
* `conf.css` Fußzeilensymbole : Schriftarten

### Symbolschriftart

Das Fußzeilensymbol wird durch iconfont.cn ( [englische Version](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) generiert, indem eine Schriftart mit dem Namen `F`

Bitte erstellen Sie nach Bedarf Ihre eigene Symbolschriftart und ersetzen Sie : folgende Konfiguration in `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Webkomponenten

`foot.pug` Darin kann kein `js` geschrieben werden. Wenn eine Interaktion erforderlich ist, passen Sie bitte die Webseitenkomponente an.

Sie können [eine Webkomponente](https://www.freecodecamp.org/news/build-your-first-web-component/) in `md/.i18n/htm/index.js` definieren und die Komponente dann in `foot.pug` verwenden.

Es ist ganz einfach, Webkomponenten wie benutzerdefinierte Tags zu erstellen `<x-img>`

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

`.i18n/htm/foot.pug` Der Code darin ist wie folgt :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Hier `${I18N.C}` Das entsprechende ist in `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Mit `${I18N.xxx}` können Sie ähnlich wie bei dieser Schreibweise in Kombination mit `i18n.yml` eine mehrsprachige Internationalisierung der Fußzeile erreichen.

Fügen Sie `class="a"` zum Link hinzu, um zu verhindern, dass der Link in `MarkDown` umgewandelt wird, siehe :
 [: `YAML` verhindern Sie, dass `HTML` des Links in `Markdown` umgewandelt wird](/i18/qa#H2) .