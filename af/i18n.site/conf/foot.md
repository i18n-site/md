# Voetskrif

Neem steeds die demo-projek as 'n voorbeeld, die voetskrif van die webwerf `.i18n/htm/foot.pug` in die `md` gedefinieer.

<img alt="" src="https://p.3ti.site/1721286077.avif">

[`pug`](https://pugjs.org) is 'n sjabloontaal wat `HTML` genereer.

[➔ Klik hier om die grammatika van pug](https://pugjs.org)

**Moenie `css` en `js` `foot.pug` skryf nie** , anders sal daar foute wees.

Verwys asseblief na die volgende, die styl is in die ooreenstemmende `.css` en die interaksie word verkry deur webkomponente te skep.

## Voetskrif Styl

In die demo `md/.i18n/htm` projek is daar 3 `css` lêers hieronder.

* `foot.css` Footer :
* `import.css` `i18n.site` vir : hele werf
* `conf.css` : ikone en lettertipes

### Ikoon Lettertipe

Die voetskrif-ikoon word gegenereer iconfont.cn ( [Engelse weergawe](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) die skep van 'n lettertipe met die naam `F`

Skep asseblief jou eie ikoonlettertipe soos nodig en vervang : volgende konfigurasie in `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Webkomponente

`foot.pug` kan nie `js` daarin skryf nie. Pas asseblief die webbladkomponent aan.

Jy kan ['n webkomponent](https://www.freecodecamp.org/news/build-your-first-web-component/) definieer `md/.i18n/htm/index.js` en dan die komponent in `foot.pug` !

Dit is maklik om webkomponente te skep, soos pasgemaakte etikette `<x-img>`

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

## Veeltalige Voetskrif

Die kode daarin is soos : `.i18n/htm/foot.pug`

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Hier is die ooreenstemmende een : `en/i18n.yml` `${I18N.C}`

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Deur `${I18N.xxx}` soortgelyk aan hierdie skryfmetode, gekombineer met `i18n.yml` , kan jy meertalige internasionalisering van die voetskrif bereik.

`class="a"` by die skakel om te verhoed dat die skakel na `MarkDown` omgeskakel word, sien :
 [: `YAML` om te verhoed dat `HTML` van die skakel na `Markdown` omgeskakel word](/i18/qa#H2) .