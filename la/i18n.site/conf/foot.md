# Footer

Adhuc demo project exemplum, `.i18n/htm/foot.pug` in `md` directorio definit footer of the website.

![](https://p.3ti.site/1721286077.avif)

[`pug`](https://pugjs.org) Formulae linguarum quae generat `HTML` lia.

[➔ Click here to learn grammaticas of pug](https://pugjs.org)

**Noli scribere `css` et `js` in `foot.pug`** , alioquin error erit.

Placere referri ad sequentia, stilus in correspondens `.css` scriptus est, et commercium interretiales creando fit.

## Footer Style

Tres `css` tabulae sub `md/.i18n/htm` in project demo.

* `foot.css` :
* `import.css` : `i18n.site`
* `conf.css` :

### Icon Font

`F` / generatur creando fontem [nominatum](https://www.iconfont.cn/?lang=zh) [0](https://www.iconfont.cn/?lang=en-us) iconfont.cn

Quaeso crea iconem proprium tuum ut opus fuerit ac sequentem configurationem in `conf.css` substitue :

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

Quaeso ne directe referat tabellam fontis iconfont.cn quia in navigatro safari onerari non potest.

## Web Components

Non potes scribere `js` in `foot.pug` Si commercium requiritur, quaeso interretialem componentis consuetudinem.

[Pars interretialis](https://www.freecodecamp.org/news/build-your-first-web-component/) definiri potest in `md/.i18n/htm/index.js` et dein in `foot.pug` adhibita.

Facile est creare interretiales, sicut consuetudo `<x-img>` .

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

Codex in `.i18n/htm/foot.pug` sic est :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Hic `${I18N.C}` respondet `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Utens `${I18N.xxx}` similis huic scripto methodo, cum `i18n.yml` coniuncto, multi-linguam internationalizationem pedis consequi potes.

Addens `class="a"` ad nexum est impedire nexum quominus convertatur ad `MarkDown` Vide :
 [`YAML` : `HTML` `Markdown`](/i18/qa#H2)