# Kafa

Har yanzu ɗaukar aikin demo azaman misali, `.i18n/htm/foot.pug` ayyana ƙafar gidan yanar gizon a cikin kundin adireshin `md`

<img alt="" src="https://p.3ti.site/1721286077.avif">

Yaren samfuri [`pug`](https://pugjs.org) wanda ke haifar da `HTML` .

[➔ Danna nan don koyon nahawun pug](https://pugjs.org)

**Kar a rubuta `css` da `js` `foot.pug`** , in ba haka ba za a sami kurakurai.

Da fatan za a koma zuwa masu zuwa, an rubuta salon a cikin daidaitaccen `.css` kuma ana samun hulɗar ta hanyar ƙirƙirar abubuwan yanar gizo.

## Salon Kafa

A cikin aikin `md/.i18n/htm` akwai `css` fayiloli 3 a ƙasa.

* : kafa `foot.css`
* `import.css` : `i18n.site`
* `conf.css` :

### Ikon Font

[An](https://www.iconfont.cn/?lang=en-us) ƙirƙira `F` [ƙafa](https://www.iconfont.cn/?lang=zh) / iconfont.cn

Da fatan za a ƙirƙiri rubutun gunkin ku kamar yadda ake buƙata kuma ku maye gurbin : mai zuwa a cikin `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Abubuwan Haɗin Yanar Gizo

`foot.pug` `js`

Kuna iya ayyana [sashin yanar gizo](https://www.freecodecamp.org/news/build-your-first-web-component/) a `md/.i18n/htm/index.js` sannan ku yi amfani da bangaren a `foot.pug` .

Yana da sauƙi don ƙirƙirar abubuwan haɗin yanar gizo, kamar alamun al'ada `<x-img>`

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

## Ƙafafun Harsuna Da Yawa

Lambar : ke cikinta kamar haka `.i18n/htm/foot.pug`

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Anan madaidaicin yana : `en/i18n.yml` `${I18N.C}`

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Yin amfani `i18n.yml` `${I18N.xxx}`

`class="a"` zuwa mahaɗin don guje wa canza hanyar haɗi zuwa `MarkDown` , duba :
 [: `YAML` ake hana `HTML` hanyar haɗin yanar gizo zuwa `Markdown`](/i18/qa#H2) .