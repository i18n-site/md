# Pé De Páxina Personalizado

Aínda tomando o proxecto de demostración como exemplo, `.i18n/htm/foot.pug` no directorio `md` define o pé de páxina do sitio web.

![](https://p.3ti.site/1721286077.avif)

## Estilo De Pé De Páxina

Hai tres ficheiros `css` baixo `md/.i18n/htm` no proxecto de demostración.

* `foot.css` : Estilo de pé
* `import.css` : `i18n.site` para todo o sitio
* `conf.css` : Iconas e fontes de pé

### Fonte Da Icona

A icona do pé xérase ao crear unha fonte chamada iconfont.cn ( [versión en inglés](https://www.iconfont.cn/?lang=en-us) `F` /[版!](https://www.iconfont.cn/?lang=zh) ).

Crea a túa propia fonte de icona segundo sexa necesario e substitúe a seguinte configuración por `conf.css` :

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

Non faga referencia directamente ao ficheiro de fonte de iconfont.cn porque non se pode cargar no navegador Safari.

## Compoñentes Web

Non podes escribir `js` en `foot.pug` Se é necesaria a interacción, personaliza o compoñente web.

Pódese definir [un compoñente web](https://www.freecodecamp.org/news/build-your-first-web-component/) en `md/.i18n/htm/index.js` e logo usarse en `foot.pug` .

É doado crear compoñentes web, como `<x-img>` personalizadas0 .

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

O código en `.i18n/htm/foot.pug` é o seguinte :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Aquí `${I18N.C}` corresponde a `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Usando `${I18N.xxx}` semellante a este método de escritura, combinado con `i18n.yml` , podes conseguir a internacionalización multilingüe do pé.

Engadir `class="a"` á ligazón é evitar que a ligazón se converta en `MarkDown` Vexa :
 [➔ `YAML` : Como evitar que a ligazón `HTML` se converta en `Markdown`](/i18/qa#H2) .