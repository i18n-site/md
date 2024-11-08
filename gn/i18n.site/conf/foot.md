# Pype

Ojegueraha gueteri techapyrãramo proyecto demostración rehegua, `.i18n/htm/foot.pug` directorio `md` -pe odefini página web ryru.

![](https://p.3ti.site/1721286077.avif)

[`pug`](https://pugjs.org) haꞌehína peteĩ ñeꞌepykuaa plantilla rehegua omoheñóiva `HTML` .

[➔ Emboguejy ko’ápe reikuaa haĝua ñe’ẽtekuaa pug](https://pugjs.org)

**Ani rehai `css` ha `js` `foot.pug` -pe** , ndaupéichairamo ojejavýta.

Ehechamína ko’ãva, estilo ojehai `.css` ojoajúvape, ha pe joaju ojehupyty ojejapo rupi componente web.

## Estilo Pyti’a Rehegua

Oĩ mbohapy `css` archivo `md/.i18n/htm` guýpe proyecto demostración-pe.

* `foot.css` :
* `import.css` : 1Estilo `i18n.site` opaite tendápe g̃uarã
* `conf.css` : Umi icono ha fuente de pie

### Icono Fuente Rehegua

Pe icono pie rehegua ojejapo ojejapo rupi peteĩ tai hérava `F` iconfont.cn ( [versión inglés](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)).

Ejapo nde jeheguiete ikóna ryru oñeikotevẽháicha ha emyengovia ko’ã ñemboheko `conf.css` -pe :

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

Ani eñe’ẽ directamente iconfont.cn rembiapokue vore rehe ndaikatúigui ojekarga safari kundahárape.

## Umi Componente Web Rehegua

Ndaikatúi rehai `js` `foot.pug` gui.Oñeikotevẽramo joaju, emohenda componente web.

[Peteĩ componente web](https://www.freecodecamp.org/news/build-your-first-web-component/) ikatu oñemboheko `md/.i18n/htm/index.js` pe ha upéi ojepuru `foot.pug` -pe.

Ndahasýi ojejapo hag̃ua componente web rehegua, haꞌeháicha `<x-img>` personalizada0 .

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

## Py’a Py’a Heta Ñe’ẽ Rehegua

Pe código oĩva `.i18n/htm/foot.pug` pe ha'e kóicha :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Ko'ápe `${I18N.C}` okorresponde `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Oipurúvo `${I18N.xxx}` ojoguáva ko jehai rape, oñembojoajúva `i18n.yml` ndive, ikatu ojehupyty internacionalización heta ñe’ẽme pe pie de página rehegua.

Oñemoĩvo `class="a"` pe enlace-pe haꞌehína ani hag̃ua oñembohasa pe enlace `MarkDown` Ehecha :
 [➔ `YAML` : Mba'éichapa ikatu ojejoko enlace `HTML` oñembohasa haguã `Markdown` pe](/i18/qa#H2) .