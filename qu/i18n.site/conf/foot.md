# Sapanchasqa Chaki Qillqa

Hinallataqmi demo proyectota huk ejemplo hina hapispa, `.i18n/htm/foot.pug` `md` directoriopi web kitipa chaki qillqanta riqsichin.

![](https://p.3ti.site/1721286077.avif)

## Chakipi Kaq Estilo

Demo proyectopiqa kimsa `css` willañiqikunam `md/.i18n/htm` urapi kachkan.

* `foot.css` :
* `import.css` : 1Lliw sitiopaq `i18n.site` estilo
* `conf.css` : Chakipi kaq iconokuna hinaspa letrakuna

### Icono Nisqa Qillqa

[Chakipi](https://www.iconfont.cn/?lang=zh) / `F` [0](https://www.iconfont.cn/?lang=en-us) iconfont.cn

Ama hina kaspa, necesitasqaykiman hina kikiykipa icono letraykita ruway hinaspa kay qatiq ruwayta `conf.css` nisqapi tikray :

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

Ama hina kaspa, ama chiqapmanta iconfont.cn nisqap qillqap willañiqinta riqsichiychu, safari maskaqpi mana kargayta atisqanrayku.

## Web Componentes Nisqakuna

Mana `js` `foot.pug` kaqpi qillqayta atikunkichu.Sichus tinkinakuy mañasqa, ama hina kaspa web componenteta ruway.

[Huk web componenta](https://www.freecodecamp.org/news/build-your-first-web-component/) `md/.i18n/htm/index.js` kaqpi sut'inchasqa kanman chaymanta `foot.pug` kaqpi llamk'achiy atikun.

Web componentakuna ruwayqa sasan, ahinataq sapanchasqa `<x-img>` .

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

## Achka Simiyuq Chaki

`.i18n/htm/foot.pug` nisqapi kaq codigoqa kayhinam :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Kaypiqa `${I18N.C}` `en/i18n.yml` nisqawanmi tupan :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Kay qillqana ñanman rikchakuq `${I18N.xxx}` llamk'achispa, `i18n.yml` kaqwan kuskachasqa, chaki qillqap achka simipi internacionalización nisqaman chayayta atinki.

`class="a"` t'inkiman yapayqa t'inki `MarkDown` tikrasqa kananta hark'anapaqmi.Qhaway :
 [`HTML` `YAML` : `Markdown`](/i18/qa#H2)