# Afɔti

Ne míegatsɔ wɔwɔfiadɔa nye kpɔɖeŋu la, `.i18n/htm/foot.pug` nyatakakadzraɖoƒea ƒe afɔti gɔme le `md`

<img alt="" src="https://p.3ti.site/1721286077.avif">

nye gbegbɔgblɔ si wotsɔ wɔa nɔnɔmetatae si naa `HTML` [`pug`](https://pugjs.org)

[➔ Zi afisia dzi be nàsrɔ̃ gbeŋutise si le pug](https://pugjs.org)

**Mègaŋlɔ `css` kple `js` ɖe `foot.pug`**

Taflatse kpɔ nusiwo gbɔna, woŋlɔ atsyã la ɖe `.css` eye wowɔa kadodoa to web ƒe akpawo wɔwɔ me.

## Afɔti Ƒe Atsyã

Le demo project la `md/.i18n/htm` `css` file 3 ye le ete.

* `foot.css` :
* : `i18n.site` na nyatakakadzraɖoƒe `import.css`
* `conf.css` :

### Icon Ƒe Nuŋɔŋlɔ

Wowɔa afɔti ƒe dzesi to iconfont.cn ( [Eŋlisigbe me tɔ](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) wɔwɔ me ŋɔŋlɔdzesi si ŋkɔe nye `F`

Taflatse wɔ wò ŋutɔ wò dzesi ƒe nuŋɔŋlɔ abe alesi wòhiã ene eye nàɖɔli : si gbɔna le `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Nyatakakadzraɖoƒe Ƒe Akpa Aɖewo

`foot.pug` `js`

Àteŋu aɖe [web ƒe akpa aɖe](https://www.freecodecamp.org/news/build-your-first-web-component/) gɔme `foot.pug` `md/.i18n/htm/index.js`

Ele bɔbɔe be woawɔ web ƒe akpawo, abe custom tags ene `<x-img>`

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

## Gbegbɔgblɔ Geɖe Ƒe Afɔti

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

`i18n.yml` èzã `${I18N.xxx}`

Tsɔe kpe ɖe kadodoa ŋu be woaƒo asa na kadodoa ƒe tɔtrɔ ɖe `MarkDown` : kpɔ `class="a"`
 [: `YAML` woawɔ axe mɔ `HTML` si le kadodoa me be woagatrɔe wòazu `Markdown`](/i18/qa#H2) .