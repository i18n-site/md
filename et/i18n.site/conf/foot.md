# Kohandatud Jalus

Võttes endiselt näitena demoprojekti, määrab `.i18n/htm/foot.pug` kataloogis `md` veebisaidi jaluse.

![](https://p.3ti.site/1721286077.avif)

## Jaluse Stiil

Demoprojektis on kolm `css` faili alla `md/.i18n/htm` .

* `foot.css` : stiil
* `import.css` : `i18n.site` stiil kogu saidi jaoks
* `conf.css` : ikoonid ja fondid

### Ikooni Font

Jaluse ikoon genereeritakse, luues fondi nimega iconfont.cn `F` [ingliskeelne versioon](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)).

Looge vajadusel oma ikoonifont ja asendage järgmine konfiguratsioon väärtusega `conf.css` :

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

Ärge viidake otse faili iconfont.cn fondifailile, kuna seda ei saa Safari brauserisse laadida.

## Veebikomponendid

Te ei saa kirjutada `js` in `foot.pug` Kui on vaja interaktsiooni, kohandage veebikomponenti.

[Veebikomponenti](https://www.freecodecamp.org/news/build-your-first-web-component/) saab määratleda väärtusega `md/.i18n/htm/index.js` ja seejärel kasutada `foot.pug` .

Veebikomponente, näiteks kohandatud `<x-img>` , on lihtne luua.

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

## Mitmekeelne Jalus

Kood numbris `.i18n/htm/foot.pug` on järgmine :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Siin vastab `${I18N.C}` `en/i18n.yml` -le :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Selle kirjutamismeetodiga sarnase `${I18N.xxx}` kasutamine koos `i18n.yml` ga saate saavutada jaluse mitmekeelse rahvusvahelistumise.

Lingile `class="a"` lisamine takistab lingi teisendamist `MarkDown` ks. Vaata :
 [➔ `YAML` : vältida lingi `HTML` teisendamist `Markdown`](/i18/qa#H2) .