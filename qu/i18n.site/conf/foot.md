# Chaki Qillqa

Hinallataqmi demo proyectota huk ejemplo hina hapispa, web `.i18n/htm/foot.pug` chaki qillqan `md`

<img alt="" src="https://p.3ti.site/1721286077.avif">

[`pug`](https://pugjs.org) `HTML`

[➔ Kaypi ñit'iy pug](https://pugjs.org)

**Ama `css` , `js` nisqatapas `foot.pug` nisqapi qillqay** , mana chayqa pantaykuna kanqa.

Ama hina kaspa `.css`

## Chakipi Kaq Estilo

Proyecto demostración `md/.i18n/htm` 3 `css` archivokunam kachkan.

* `foot.css` :
* `import.css` : `i18n.site` tukuy sitiopaq
* `conf.css` :

### Icono Nisqa Qillqa

Chakipi kaq siq'iqa iconfont.cn ( [Inglés simipi](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) nisqawanmi paqarichisqa kachkan `F`

Ama hina kaspa, necesitasqaykiman hina kikiykipa icono letraykita ruway hinaspa : qatiq ruwayta `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Web Componentes Nisqakuna

`foot.pug` `js`

[Huk web componente](https://www.freecodecamp.org/news/build-your-first-web-component/) `foot.pug` `md/.i18n/htm/index.js`

Web componentes ruwayqa facilmi, etiquetakuna ruwasqa hina `<x-img>`

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

`.i18n/htm/foot.pug` Chaypi kaq códigoqa kayhinam :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Kaypi `${I18N.C}` Chay tupaqninmi `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Kay qillqana `i18n.yml` rikchakuq `${I18N.xxx}`

`class="a"` T'inkiman yapay mana t'inki `MarkDown` nisqaman tikrasqa kananpaq, qhaway :
 [: `YAML` hark'ana `HTML` t'inki `Markdown` nisqaman tikrakunanpaq](/i18/qa#H2) .