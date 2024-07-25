# Letlakala La Ka Tlase

E sa dutše e tšea porojeke ya demo bjalo ka mohlala, letlakala la ka tlase la weposaete `.i18n/htm/foot.pug` hlalošitšwe ka go `md`

<img alt="" src="https://p.3ti.site/1721286077.avif">

[`pug`](https://pugjs.org) polelo ya thempleite yeo e tšweletšago `HTML` .

[➔ Tobetsa mo go ithuta popopolelo ya pug](https://pugjs.org)

**O se ke wa ngwala `css` le `js` ka `foot.pug`** , go sego bjalo go tla ba le diphošo.

Hle lebelela tše di latelago, setaele se ngwadilwe ka `.css` gomme tirišano e fihlelelwa ka go hlama dikarolo tša wepe.

## Setaele Sa Letlakala La Ka Tlase

Ka porojeke e ne `md/.i18n/htm` Ho na le 3 `css` difaele ka tlase.

* `foot.css` :
* `import.css` : `i18n.site`
* `conf.css` Diaekhone : letlakala la ka tlase le difonte

### Fonte Ya Leswao

Letshwao la footer le tšweletšwa ke iconfont.cn ( [Seisemane phetolelo](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) go hlama fonte yeo e bitšwago `F`

Hle hlama fonte ya gago ya leswao ka moo go nyakegago gomme o tšeele peakanyo : e latelago legato ka go `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Dikarolo Tša Wepe

`foot.pug` `js`

O ka hlaloša [karolo ya wepe](https://www.freecodecamp.org/news/build-your-first-web-component/) ka `foot.pug` `md/.i18n/htm/index.js`

Go bonolo go hlama dikarolo tša wepe, go swana le dithegi tša tlwaelo `<x-img>`

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

## Letlakala La Ka Tlase La Maleme a Mantši

Khoutu yeo e lego go yona ke : e latelago `.i18n/htm/foot.pug`

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

Ka go šomiša `${I18N.xxx}` ye e swanago le mokgwa wo wa go ngwala, o kopantšwe le `i18n.yml` , o ka fihlelela boditšhabatšhaba bja maleme a mantši ga letlakala la ka fase.

Oketša `class="a"` go kgokagano go efoga gore kgokagano e fetošwe go `MarkDown` , bona :
 [: `YAML` ya go thibela `HTML` ya kgokagano go fetošetšwa go `Markdown`](/i18/qa#H2) .