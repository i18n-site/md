# Naka-Customize Na Footer

Kinukuha pa rin ang demo project bilang isang halimbawa, `.i18n/htm/foot.pug` sa `md` na direktoryo ang tumutukoy sa footer ng website.

![](https://p.3ti.site/1721286077.avif)

## Estilo Ng Footer

May tatlong `css` file sa ilalim ng `md/.i18n/htm` sa demo project.

* `foot.css` : Estilo ng footer
* `import.css` : `i18n.site` na istilo para sa buong site
* `conf.css` : Mga icon at font ng footer

### Font Ng Icon

Ang icon `F` iconfont.cn [Ingles na bersyon](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)).

Mangyaring lumikha ng iyong sariling font ng icon kung kinakailangan at palitan ang sumusunod na configuration sa `conf.css` :

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

Mangyaring huwag direktang sumangguni sa font file ng iconfont.cn dahil hindi ito ma-load sa safari browser.

## Mga Bahagi Ng Web

Hindi ka maaaring magsulat `js` sa `foot.pug` Kung kinakailangan ang pakikipag-ugnayan, mangyaring i-customize ang bahagi ng web.

[Ang isang web component](https://www.freecodecamp.org/news/build-your-first-web-component/) ay maaaring tukuyin sa `md/.i18n/htm/index.js` at pagkatapos ay gamitin sa `foot.pug` .

Madaling gumawa ng mga bahagi ng web, gaya ng mga custom `<x-img>` .

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

Ang code sa `.i18n/htm/foot.pug` ay ang mga sumusunod :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Narito `${I18N.C}` ay tumutugma sa `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Gamit ang `${I18N.xxx}` na katulad ng paraan ng pagsulat na ito, kasama ng `i18n.yml` , makakamit mo ang multi-language internationalization ng footer.

Ang pagdaragdag `class="a"` sa link ay upang pigilan ang link na ma-convert sa `MarkDown` Tingnan :
 [➔ `YAML` : Paano mapipigilan ang link `HTML` na ma-convert sa `Markdown`](/i18/qa#H2) .