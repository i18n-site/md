# Footer

Still using the demo project as an example, the file `.i18n/htm/foot.pug` in the `md` directory defines the website's footer.

![](https://p.3ti.site/1721286077.avif)

[`pug`](https://pugjs.org) is a template language used to generate `HTML`.

[➔ Click here to learn pug syntax](https://pugjs.org)

**Do not write `css` or `js` in `foot.pug`**, or errors will occur.

Refer to the following text: styles should be written in the corresponding `.css` files, and interactions should be implemented by creating web components.

## Footer Style

In the demo project, there are three `css` files under `md/.i18n/htm`.

* `foot.css`: styles for the footer
* `import.css`: default styles for the entire `i18n.site`
* `conf.css`: icons and fonts for the footer

### Icon Font

The footer icons are created using a font named `F` from iconfont.cn ([English version](https://www.iconfont.cn/?lang=en-us) / [Chinese version](https://www.iconfont.cn/?lang=zh)).

Please create your own icon font as needed and replace the following configuration in `conf.css`:

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

Please refrain from directly referencing the font file from iconfont.cn, as it fails to load in the Safari browser.

## Web Components

Do not write `js` in `foot.pug`; if interaction is needed, please define a custom web component.

You can define a [web component](https://www.freecodecamp.org/news/build-your-first-web-component/) in `md/.i18n/htm/index.js` and then use this component in `foot.pug`.

Creating a web component is simple, for instance, a custom tag `<x-img>`.

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

The code in `.i18n/htm/foot.pug` is as follows:

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Here, `${I18N.C}` corresponds to the content in `en/i18n.yml`:

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Using `${I18N.xxx}` in a similar manner, combined with `i18n.yml`, allows for the internationalization of the footer in multiple languages.

Adding `class="a"` to the link is to prevent the link from being converted to `MarkDown` See :
 [➔ `YAML` : How to prevent link `HTML` from being converted to `Markdown`](/i18/qa#H2) .