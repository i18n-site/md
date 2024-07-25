# Footer

Dîsa jî projeya demo wekî mînak digire, pêlava malperê `.i18n/htm/foot.pug` pelrêça `md`

<img alt="" src="https://p.3ti.site/1721286077.avif">

[`pug`](https://pugjs.org) şablonê ye ku `HTML` diafirîne.

[➔ Ji bo fêrbûna rêzimanê li vir bikirtînin pug](https://pugjs.org)

**Di `foot.pug` de `css` û `js` nenivîsin** , wekî din dê xeletî hebin.

Ji kerema xwe li jêrîn binihêrin, şêwaz li gorî hev hatî nivîsandin `.css` û têkilî bi afirandina pêkhateyên malperê pêk tê.

## Style Footer

Di projeya `md/.i18n/htm` de 3 `css` pelên li jêr hene.

* `foot.css` :
* Ji bo `i18n.site` malperê : `import.css`
* Îkon û tîpên : `conf.css`

### Fontê Îkonê

`F` / [ji](https://www.iconfont.cn/?lang=zh) [hêla](https://www.iconfont.cn/?lang=en-us) iconfont.cn

Ji kerema xwe li gorî hewcedariyê tîpa îkonê ya xwe biafirînin û veavakirina : biguhezînin `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Pêkhateyên Web

`foot.pug` tê de `js` binivîse.

Hûn dikarin [beşek webê](https://www.freecodecamp.org/news/build-your-first-web-component/) di nav `md/.i18n/htm/index.js` diyar bikin û dûv re jî beşê di `foot.pug` de bikar bînin.

Afirandina hêmanên malperê, mîna etîketên xwerû, hêsan e `<x-img>`

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

## Fotera Pirzimanî

Koda tê de wiha : `.i18n/htm/foot.pug`

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Li vir ya têkildar di `en/i18n.yml` : ye `${I18N.C}`

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

`${I18N.xxx}` karanîna vê rêbaza nivîsandinê, bi `i18n.yml` re, hûn dikarin navneteweyîbûna pirzimanî ya jêrîn bi dest bixin.

Zêde `class="a"` lînkê da ku zencîre neguhere `MarkDown` , binêre :
 [: `YAML` rê `HTML` ya lînka `Markdown` digire](/i18/qa#H2) .