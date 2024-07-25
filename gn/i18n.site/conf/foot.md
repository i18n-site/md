# Pype

Ojegueraha gueteri techapyrãramo pe proyecto demostración rehegua, pe página web `.i18n/htm/foot.pug` oñemboheko `md`

<img alt="" src="https://p.3ti.site/1721286077.avif">

ha'e peteĩ ñe'ẽ plantilla omoheñóiva `HTML` [`pug`](https://pugjs.org)

[➔ Emboguejy ko’ápe reikuaa haĝua ñe’ẽtekuaa pug](https://pugjs.org)

**Ani rehai `css` ha `js` in `foot.pug`** , ndaupéichairamo oĩta jejavy.

Ehechamína ko’ãva, estilo ojehai `.css` ha pe joaju ojehupyty ojejapo rupi componente web.

## Estilo Pyti’a Rehegua

Pe proyecto demostración `md/.i18n/htm` pe Oĩ 3 `css` archivo iguýpe.

* `foot.css` :
* `import.css` : `i18n.site` opaite tendápe g̃uarã
* `conf.css` :

### Icono Fuente Rehegua

Pe icono pie rehegua ojejapo iconfont.cn ( [versión inglés](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) omoheñóivo peteĩ tai hérava `F`

Ejapo nde jeheguiete ikóna ryru oñeikotevẽháicha ha emyengovia : ñemboheko `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Umi Componente Web Rehegua

`foot.pug` ndaikatúi ohai `js` ipype.Oñeikotevẽramo joaju, emohenda porã componente página web.

Ikatu emohenda [peteĩ componente web](https://www.freecodecamp.org/news/build-your-first-web-component/) `md/.i18n/htm/index.js` -pe ha upéi eipuru componente `foot.pug` -pe.

Ndahasýi ojejapo hag̃ua componente web rehegua, etiqueta personalizada-icha `<x-img>`

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

## Py’a ​​Py’a Heta Ñe’ẽme

`.i18n/htm/foot.pug` Pe código oĩva ipype ha'e kóicha :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Ko'ápe `${I18N.C}` Pe okorrespondéva oĩ `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

`${I18N.xxx}` `i18n.yml`

`class="a"` pe enlace-pe ani hag̃ua oñekonverti pe enlace `MarkDown` -pe, ehecha :
 [: `YAML` ikatu ojejoko `HTML` enlace rehegua ani haguã oñembohasa `Markdown` -pe](/i18/qa#H2) .