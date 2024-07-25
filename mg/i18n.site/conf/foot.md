# Footer

Mbola maka ny tetikasa demo ho ohatra, ny tongotry ny tranokala `.i18n/htm/foot.pug` voafaritra ao amin'ny lahatahiry `md`

<img alt="" src="https://p.3ti.site/1721286077.avif">

[`pug`](https://pugjs.org) dia fiteny môdely izay miteraka `HTML` .

[➔ Tsindrio eto raha te hianatra ny fitsipi-pitenenana pug](https://pugjs.org)

**Aza soratana `css` sy `js` in `foot.pug`**

Azafady, jereo ireto manaraka ireto, ny fomba dia voasoratra amin'ny mifanaraka amin'izany `.css` ary ny fifaneraserana dia vita amin'ny famoronana singa web.

## Style Footer

Ao amin'ny tetikasa `md/.i18n/htm` dia misy rakitra 3 `css` eto ambany.

* `foot.css` :
* `import.css` : `i18n.site`
* `conf.css` :

### Endri-Tsoratra Kisary

[Ny](https://www.iconfont.cn/?lang=en-us) kisary `F` / [noforonin'ny](https://www.iconfont.cn/?lang=zh) iconfont.cn

Mamorona endritsoratra kisary anao manokana raha ilaina ary soloy : `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Web Singa

`foot.pug` `js`

Azonao atao ny mamaritra [ny singa web](https://www.freecodecamp.org/news/build-your-first-web-component/) ao `foot.pug` `md/.i18n/htm/index.js`

Mora ny mamorona singa web, toy ny marika manokana `<x-img>`

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

## Footer Amin'ny Fiteny Maro

Toy izao ny code : anatiny `.i18n/htm/foot.pug`

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

Amin'ny fampiasana `${I18N.xxx}` mitovitovy amin'ity fomba fanoratana ity, miaraka amin'ny `i18n.yml` , dia azonao atao ny manatontosa iraisam-pirenena amin'ny fiteny maro ny footer.

Ampio `class="a"` amin'ny rohy mba tsy hivadika ho `MarkDown` , jereo :
 [: `YAML` hisorohana `HTML` amin'ny rohy tsy hiova ho `Markdown`](/i18/qa#H2) .