# Pie De Página

Siguiendo con el proyecto de demostración como ejemplo, el pie de página del sitio web `.i18n/htm/foot.pug` define en `md` directorio.

<img alt="" src="https://p.3ti.site/1721286077.avif">

[`pug`](https://pugjs.org) es un lenguaje de plantilla que genera `HTML` .

[➔ Haga clic aquí para aprender la gramática de pug](https://pugjs.org)

**¡No escriba `css` y `js` en `foot.pug`** , de lo contrario habrá errores.

Consulte lo siguiente, el estilo está escrito en el correspondiente `.css` Y la interacción se logra mediante la creación de componentes web.

## Estilo De Pie De Página

En el proyecto de `md/.i18n/htm` hay 3 `css` archivos a continuación.

* `foot.css` Estilo : pie de página
* `import.css` : `i18n.site` para todo el sitio
* `conf.css` Iconos : pie de página y fuentes

### Fuente De Icono

El icono de pie de página se genera mediante iconfont.cn ( [versión en inglés](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) creando una fuente llamada `F`

¡Cree su propia fuente de icono según sea necesario y reemplace : siguiente configuración en `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Componentes Web

`foot.pug` No puedo escribir `js` en él. Si se requiere interacción, personalice el componente de la página web.

Puede definir [un componente web](https://www.freecodecamp.org/news/build-your-first-web-component/) en `md/.i18n/htm/index.js` y luego usar el componente en `foot.pug` .

¡Es fácil crear componentes web, como etiquetas personalizadas `<x-img>`

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

## Pie De Página Multilingüe

`.i18n/htm/foot.pug` El código que contiene es el siguiente :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Aquí `${I18N.C}` El correspondiente está en `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Usando `${I18N.xxx}` similar a este método de escritura, combinado con `i18n.yml` , puede lograr la internacionalización del pie de página en varios idiomas.

Agregue `class="a"` al enlace para evitar que el enlace se convierta en `MarkDown` , ¡vea :
 [: `YAML` evitar que `HTML` del enlace se convierta a `Markdown`](/i18/qa#H2) .