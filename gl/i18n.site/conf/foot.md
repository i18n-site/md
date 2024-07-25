# Pé De Páxina

Aínda tomando o proxecto de demostración como exemplo, o pé do sitio web `.i18n/htm/foot.pug` definido no directorio `md`

<img alt="" src="https://p.3ti.site/1721286077.avif">

[`pug`](https://pugjs.org) é unha linguaxe de modelo que xera `HTML` .

[➔ Fai clic aquí para aprender a gramática de pug](https://pugjs.org)

**Non escriba `css` e `js` `foot.pug`** , se non, haberá erros.

Consulte o seguinte, o estilo está escrito no correspondente `.css` e a interacción conséguese creando compoñentes web.

## Estilo De Pé De Páxina

No proxecto de `md/.i18n/htm` hai 3 `css` ficheiros a continuación.

* `foot.css` Estilo : pé de páxina
* `import.css` Estilo : `i18n.site` para todo o sitio
* `conf.css` Iconas e fontes de :

### Fonte Da Icona

A icona do pé de páxina é xerada por iconfont.cn ( [versión en inglés](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) creando unha fonte chamada `F`

Crea a túa propia fonte de icona segundo sexa necesario e substitúe : seguinte configuración en `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Compoñentes Web

`foot.pug` pode escribir `js` nela. Se é necesaria a interacción, personaliza o compoñente da páxina web.

Podes definir [un compoñente web](https://www.freecodecamp.org/news/build-your-first-web-component/) en `md/.i18n/htm/index.js` e despois usar o compoñente en `foot.pug` .

É doado crear compoñentes web, como etiquetas personalizadas `<x-img>`

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

## Pé De Páxina Multilingüe

`.i18n/htm/foot.pug` O código nel é o seguinte :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

`${I18N.C}` o correspondente está en `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Usando `${I18N.xxx}` similar a este método de escritura, combinado con `i18n.yml` , pode conseguir a internacionalización multilingüe do pé.

Engade `class="a"` á ligazón para evitar que se converta a `MarkDown` , mira :
 [: `YAML` evitar que `HTML` da ligazón se converta a `Markdown`](/i18/qa#H2) .