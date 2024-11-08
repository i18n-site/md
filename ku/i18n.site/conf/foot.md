# Fotera Xwerû

Dîsa jî projeya demo wekî mînak digire, `.i18n/htm/foot.pug` di pelrêça `md` de pêpeloka malperê diyar dike.

![](https://p.3ti.site/1721286077.avif)

## Style Footer

Di projeya demo de sê `css` pelên di bin `md/.i18n/htm` de hene.

* `foot.css` :
* `import.css` : Şêweya `i18n.site` ji bo tevahiya malperê
* `conf.css` îkon û tîpên :

### Fontê Îkonê

Ikona jêr bi afirandina tîpek `F` iconfont.cn çêkirin ( [guhertoya îngilîzî](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)).

Ji kerema xwe li gorî hewcedarî tîpa îkonê ya xwe biafirînin û veavakirina jêrîn di `conf.css` de biguhezînin :

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

Ji kerema xwe rasterast referansa pelê fontê ya iconfont.cn nekin ji ber ku ew li ser geroka safari nayê barkirin.

## Pêkhateyên Webê

Tu nikarî `js` di `foot.pug` de binivîsî. Ger pêwendiyek pêwîst be, ji kerema xwe beşa webê xweş bike.

[Parçeyek malperê](https://www.freecodecamp.org/news/build-your-first-web-component/) dikare di `md/.i18n/htm/index.js` de were destnîşankirin û dûv re di `foot.pug` de were bikar anîn.

Afirandina hêmanên malperê, wek `<x-img>` xwerû0, hêsan e.

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

Koda di `.i18n/htm/foot.pug` de wiha ye :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Li vir `${I18N.C}` bi `en/i18n.yml` re têkildar e :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Bi karanîna `${I18N.xxx}` mîna vê rêbazê nivîsandinê, bi `i18n.yml` re hevgirtî, hûn dikarin navneteweyîbûna pirzimanî ya jêrîn bigihîjin.

Zêdekirina `class="a"` li ser lînkê ew e ku pêşî li veguhertina lînka `MarkDown` bigire. Binêre :
 [➔ `YAML` : çawa pêşî li guherandina girêdana `Markdown` `HTML` digire](/i18/qa#H2) .