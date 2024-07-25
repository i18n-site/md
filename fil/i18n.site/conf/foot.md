# Footer

Kinukuha pa rin ang demo project bilang isang halimbawa, ang footer ng website `.i18n/htm/foot.pug` tinukoy sa `md`

<img alt="" src="https://p.3ti.site/1721286077.avif">

[`pug`](https://pugjs.org) ay isang template na wika na bumubuo ng `HTML` .

[➔ Mag-click dito para matutunan ang grammar ng pug](https://pugjs.org)

**Huwag isulat `css` at `js` sa `foot.pug`** , kung hindi, magkakaroon ng mga error.

Mangyaring sumangguni sa mga sumusunod, ang istilo ay nakasulat sa kaukulang `.css` at ang pakikipag-ugnayan ay nakakamit sa pamamagitan ng paglikha ng mga bahagi ng web.

## Estilo Ng Footer

Sa demo project `md/.i18n/htm` Mayroong 3 `css` file sa ibaba.

* `foot.css` :
* `import.css` `i18n.site` : istilo para sa buong site
* `conf.css` :

### Font Ng Icon

Ang icon ng footer ay nabuo sa pamamagitan ng iconfont.cn ( [English version](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) na lumilikha ng font na pinangalanang `F`

Mangyaring lumikha ng iyong sariling icon ng font kung kinakailangan at palitan : sumusunod na configuration sa `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Mga Bahagi Ng Web

`foot.pug` hindi maaaring magsulat `js` dito. Kung kinakailangan ang pakikipag-ugnayan, paki-customize ang bahagi ng web page.

Maaari mong tukuyin [ang isang bahagi ng web](https://www.freecodecamp.org/news/build-your-first-web-component/) sa `md/.i18n/htm/index.js` at pagkatapos ay gamitin ang bahagi sa `foot.pug` .

Madaling gumawa ng mga bahagi ng web, tulad ng mga custom na tag `<x-img>`

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

## Multilingual Na Footer

Ang code sa loob nito ay : mga sumusunod `.i18n/htm/foot.pug`

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

`${I18N.C}` ang katumbas ay nasa `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Gamit ang `${I18N.xxx}` katulad ng paraan ng pagsulat na ito, kasama ng `i18n.yml` , makakamit mo ang multi-language internationalization ng footer.

`class="a"` ang link upang maiwasan ang pag-convert sa link sa `MarkDown` , tingnan :
 [: `YAML` mapipigilan `HTML` ng link na ma-convert sa `Markdown`](/i18/qa#H2) .