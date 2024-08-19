# Pie de página

Siguiendo el ejemplo del proyecto de demostración, el archivo `.i18n/htm/foot.pug` en el directorio `md` define el pie de página del sitio web.

![](https://p.3ti.site/1721286077.avif)

[`pug`](https://pugjs.org) es un lenguaje de plantillas que genera `HTML`.

[➔ Haga clic aquí para aprender la sintaxis de pug](https://pugjs.org)

**No incluya `css` y `js` en `foot.pug`**, de lo contrario, habrá errores.

Consulte lo siguiente: los estilos se escriben en el archivo `.css` correspondiente, y la interacción se realiza mediante la creación de componentes web.

## Estilos del pie de página

En el proyecto de demostración, bajo `md/.i18n/htm`, hay tres archivos `css`.

* `foot.css`: Estilos del pie de página
* `import.css`: Estilos predeterminados para todo el sitio `i18n.site`
* `conf.css`: Iconos y fuentes del pie de página

### Fuente de iconos

Los iconos del pie de página se crean mediante una fuente llamada `F` en iconfont.cn ([versión en inglés](https://www.iconfont.cn/?lang=en-us) / [versión en chino](https://www.iconfont.cn/?lang=zh)).

Cree su propia fuente de iconos según sea necesario y reemplace la configuración siguiente en `conf.css`:

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Componentes web

No debe escribir `js` en `foot.pug`; si necesita interacción, personalice un componente web.

Puede definir un [componente web](https://www.freecodecamp.org/news/build-your-first-web-component/) en `md/.i18n/htm/index.js` y luego usar ese componente en `foot.pug`.

Crear componentes web es sencillo, por ejemplo, el etiquetado personalizado `<x-img>`.

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

## Pie de página multilingüe

En `.i18n/htm/foot.pug` se encuentra el siguiente código:

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Aquí, `${I18N.C}` corresponde a lo definido en `en/i18n.yml`:

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Usando `${I18N.xxx}` de manera similar, combinado con `i18n.yml`, se puede lograr la internacionalización multilingüe del pie de página.

Agregar `class="a"` a los enlaces es para evitar que se conviertan en formato `Markdown`. Véase:
 [➔ `YAML`: Cómo impedir que el enlace `HTML` se transforme en `Markdown`](/i18/qa#H2).