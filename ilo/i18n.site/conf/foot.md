# Footer

Kaskasdi nga alaen ti proyekto ti demo a kas pagarigan, ti footer ti website `.i18n/htm/foot.pug` naikeddeng iti `md` .

<img alt="" src="https://p.3ti.site/1721286077.avif">

Ti pagsasao a plantilia a mangpataud `HTML` [`pug`](https://pugjs.org)

[➔ I-click ditoy tapno maammuan ti gramatika ti pug](https://pugjs.org)

**Dimo isurat `css` ken `js` iti `foot.pug`**

Pangngaasi a kitaen dagiti sumaganad, ti estilo ket naisurat iti maitunos a `.css` ken ti panagtitinnulong ket maragpat babaen ti panagpartuat kadagiti paset ti web.

## Estilo Ti Footer

Iti demo `md/.i18n/htm` Adda 3 `css` files iti baba.

* `foot.css` :
* `import.css` `i18n.site` nga estilo para iti intero : site
* `conf.css` :

### Icon Ti Letra

Ti ikono ti footer ket napataud babaen ti iconfont.cn ( [Ingles a bersion](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) ti panagpartuat ti letra a napanaganan iti `F`

Pangngaasiyo ta mangpartuat ti bukodyo a letra ti ikono no kasapulan ken sukatan : sumaganad a panagisaad iti `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Dagiti Paset Ti Web

`foot.pug` `js`

Mabalinmo nga ikeddeng [ti maysa a paset ti web](https://www.freecodecamp.org/news/build-your-first-web-component/) `foot.pug` `md/.i18n/htm/index.js`

Nalaka laeng ti mangpartuat kadagiti paset ti web, kas kadagiti kostumbre nga etiketa `<x-img>`

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

## Multilingual a Footer

: kodigo iti dayta ket kastoy `.i18n/htm/foot.pug`

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

`${I18N.C}` ti katupagna ket adda iti `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Babaen ti panagusar `i18n.yml` `${I18N.xxx}`

`class="a"` ti silpo tapno maliklikan ti silpo a mabaliwan iti `MarkDown` , kitaen :
 [: `YAML` a malapdan `HTML` ti link a mabaliwan iti `Markdown`](/i18/qa#H2) .