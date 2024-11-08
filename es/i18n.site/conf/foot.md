# Pie De Página Personalizado

Siguiendo con el proyecto de demostración como ejemplo, `.i18n/htm/foot.pug` en el directorio `md` define el pie de página del sitio web.

![](https://p.3ti.site/1721286077.avif)

## Estilo De Pie De Página

Hay tres archivos `css` bajo `md/.i18n/htm` en el proyecto de demostración.

* `foot.css` : Estilo de pie de página
* `import.css` : `i18n.site` para todo el sitio
* `conf.css` : Iconos y fuentes del pie de página

### Fuente De Icono

El icono de pie de página se genera creando una fuente llamada iconfont.cn ( [versión en inglés](https://www.iconfont.cn/?lang=en-us) `F` /[版](https://www.iconfont.cn/?lang=zh)).

¡Cree su propia fuente de icono según sea necesario y reemplace la siguiente configuración en `conf.css` :

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

No haga referencia directamente al archivo de fuente iconfont.cn porque no se puede cargar en el navegador Safari.

## Componentes Web

No puede escribir `js` en `foot.pug` Si se requiere interacción, personalice el componente web.

[Un componente web](https://www.freecodecamp.org/news/build-your-first-web-component/) se puede definir en `md/.i18n/htm/index.js` y luego usarlo en `foot.pug` .

Es fácil crear componentes web, como `<x-img>` personalizadas0.

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

¡El código en `.i18n/htm/foot.pug` es el siguiente :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

¡Aquí `${I18N.C}` corresponde a `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Usando `${I18N.xxx}` similar a este método de escritura, combinado con `i18n.yml` , puede lograr la internacionalización del pie de página en varios idiomas.

Agregar `class="a"` al enlace es para evitar que el enlace se convierta en `MarkDown` ¡Mira :
 [➔ `YAML` : Cómo evitar que el enlace `HTML` se convierta en `Markdown`](/i18/qa#H2) .