# Footer

Kaskasdi nga alaen ti proyekto ti demo a kas pagarigan, ti `.i18n/htm/foot.pug` iti `md` a direktorio ket mangikeddeng ti footer ti website.

![](https://p.3ti.site/1721286077.avif)

[`pug`](https://pugjs.org) ket maysa a pagsasao ti plantilia a mangpataud kadagiti `HTML` 's.

[➔ I-click ditoy tapno maammuan ti gramatika ti pug](https://pugjs.org)

**Dimo isurat `css` ken `js` iti `foot.pug`** , ta no saan, addanto biddut.

Pangngaasi a kitaen dagiti sumaganad, ti estilo ket naisurat iti maitunos a `.css` , ken ti panagtitinnulong ket maragpat babaen ti panagpartuat kadagiti paset ti web.

## Estilo Ti Footer

Adda tallo a `css` a file iti baba `md/.i18n/htm` iti proyekto ti demo.

* `foot.css` : Estilo ti footer
* `import.css` : `i18n.site` nga estilo para iti intero a site
* `conf.css` : Dagiti ikono ti footer ken dagiti letra

### Icon Ti Letra

Ti ikono ti footer ket napataud babaen ti panagpartuat ti letra a napanaganan iti `F` iconfont.cn ( [Ingles a bersion](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)).

Pangngaasi a mangpartuat ti bukodmo a letra ti ikono no kasapulan ken sukatam ti sumaganad a panagisaad iti `conf.css` :

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

Pangngaasi a saan a direkta a reperensiaan ti font file ti iconfont.cn gapu ta saan a maikarga iti safari browser.

## Dagiti Paset Ti Web

Dimo maisurat `js` iti `foot.pug` No kasapulan ti pannakilangen, pangngaasim nga i-customize ti paset ti web.

[Ti maysa a paset ti web](https://www.freecodecamp.org/news/build-your-first-web-component/) ket mabalin a maipalawag iti `md/.i18n/htm/index.js` ken kalpasanna mausar iti `foot.pug` .

Nalaka laeng ti mangpartuat kadagiti paset ti web, a kas dagiti kostumbre `<x-img>` .

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

Ti kodigo iti `.i18n/htm/foot.pug` ket kastoy :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Ditoy ti `${I18N.C}` ket katupag ti `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Babaen ti panagusar `${I18N.xxx}` a kapada daytoy a pamay-an ti panagsurat, a naitipon iti `i18n.yml` , mabalinmo a maragpat ti adu a pagsasao nga internasionalisasion ti footer.

Ti pananginayon `class="a"` iti silpo ket tapno malapdan ti silpo a mabaliwan iti `MarkDown` Kitaen ti :
 [: `YAML` Kasano a malapdan ti pannakabaliw ti link `HTML` iti `Markdown`](/i18/qa#H2) .