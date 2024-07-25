# Kayu Ch’akhanaka

Wali proyecto demostración ukax mä uñacht’äwiwa, sitio web ukan `.i18n/htm/foot.pug` directorio `md`

<img alt="" src="https://p.3ti.site/1721286077.avif">

Mä plantilla aru ukax `HTML` [`pug`](https://pugjs.org)

[➔ Aka tuqir ch’iqt’am, pug](https://pugjs.org)

**Janiw `css` ukat `js` ukx `foot.pug`**

Uñakipt’apxañani, estilo ukax correspondiente `.css` ukat mayacht’asiwix componentes web lurañampiw phuqhasi.

## Chaki Ch’akhanaka Estilo

`md/.i18n/htm` Proyecto demostración ukanx 3 `css` archivonakaw utji.

* `foot.css` :
* `import.css` : `i18n.site`
* `conf.css` :

### Icono Ukax Mä Font Ukhamawa

Uka chimpux iconfont.cn ( [Inglés versión](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) ukan luratawa `F`

Ukhamaraki, juma pachpaw icono font uñstayañama kunjamatix wakiski ukhamarjama ukat : configuración ukar mayjt’ayañamawa `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Web Ukan Componentes Ukanaka

`foot.pug` `js`

[Mä componente web](https://www.freecodecamp.org/news/build-your-first-web-component/) `md/.i18n/htm/index.js` uñt’ayañax wakisiwa ukatx `foot.pug` .

Componentes web ukanakax lurañax jasakiwa, etiquetas personalizadas ukanakar uñtasita `<x-img>`

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

## Walja Arunak Parlir Ch’akhanaka

`.i18n/htm/foot.pug` Ukan utjki uka codigox akhamawa :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Akax `${I18N.C}` Ukax correspondiente ukax `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Aka qillqañ `i18n.yml` uñtasit `${I18N.xxx}`

`class="a"` `MarkDown` :
 [: `YAML` `HTML` link ukax `Markdown` ukar jaqukipata](/i18/qa#H2) .