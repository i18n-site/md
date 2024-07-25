# Footer

Adhuc, demo project exemplum, footer of the website `.i18n/htm/foot.pug` defined in `md` directory.

<img alt="" src="https://p.3ti.site/1721286077.avif">

[`pug`](https://pugjs.org) est Formulae linguae quae generat `HTML` .

[➔ Click here to learn grammaticas of pug](https://pugjs.org)

**Noli scribere `css` et `js` `foot.pug`** , alioquin errores erunt .

Placere referri ad sequentia, stilus in correspondente scriptus est `.css` et commercium interretiales conficiendo consequitur.

## Footer Style

In demo `css` `md/.i18n/htm`

* `foot.css` :
* `import.css` : `i18n.site`
* `conf.css` :

### Icon Font

`F` [footer](https://www.iconfont.cn/?lang=zh) [generatur](https://www.iconfont.cn/?lang=en-us) / iconfont.cn

Quaeso crea iconem proprium tuum ut opus fuerit ac sequentem : in repone `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Web Components

`foot.pug` `js` scribere non potest in eo.

Potes `foot.pug` [componentem](https://www.freecodecamp.org/news/build-your-first-web-component/) in definire `md/.i18n/htm/index.js`

Facile est creare interretiales, sicut consuetudo tags `<x-img>`

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

## Multilingual Footer

`.i18n/htm/foot.pug` :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

`en/i18n.yml` `${I18N.C}` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

`i18n.yml` `${I18N.xxx}`

`MarkDown` `class="a"` :
 [`YAML` : `HTML` `Markdown`](/i18/qa#H2)