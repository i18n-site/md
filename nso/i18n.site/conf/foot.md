# Letlakala La Ka Tlase

E sa dutše e tšea porojeke ya demo bjalo ka mohlala, `.i18n/htm/foot.pug` ka go `md` directory e hlaloša letlakala la ka tlase la weposaete.

![](https://p.3ti.site/1721286077.avif)

[`pug`](https://pugjs.org) ke polelo ya thempleite yeo e tšweletšago `HTML` 's.

[➔ Tobetsa mo go ithuta popopolelo ya pug](https://pugjs.org)

**O se ke wa ngwala `css` le `js` go `foot.pug`** , go sego bjalo go tla ba le phošo.

Hle lebelela tše di latelago, setaele se ngwadilwe ka gare ga `.css` ye e swanetšego, gomme tirišano e fihlelelwa ka go hlama dikarolo tša wepe.

## Setaele Sa Letlakala La Ka Tlase

Ho na le tse tharo `css` difaele tlas'a `md/.i18n/htm` ka demo porojeke e ne.

* `foot.css` : Setaele sa ka tlase ga mobu
* `import.css` : `i18n.site` sa sebaka ka moka
* `conf.css` : Diaekhone tša letlakala la ka tlase le difonte

### Fonte Ya Leswao

Letshwao la footer le tšweletšwa ka go hlama fonte yeo e bitšwago `F` iconfont.cn ( [Seisemane phetolelo](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)).

Hle hlama fonte ya gago ya leswao ka moo go nyakegago gomme o tšeele peakanyo ye e latelago legato ka `conf.css` :

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

Hle o se ke wa šupa ka go lebanya faele ya fonte ya iconfont.cn ka gobane e ka se laetšwe go sephephediši sa safari.

## Dikarolo Tša Wepe

O ka se ngwale `js` go `foot.pug` Ge e le gore tirišano e a nyakega, hle tlwaetša karolo ya wepe.

[Karolo ya wepe](https://www.freecodecamp.org/news/build-your-first-web-component/) e ka hlalošwa ka `md/.i18n/htm/index.js` gomme ya šomišwa go `foot.pug` .

Go bonolo go hlama dikarolo tša wepe, go swana le `<x-img>` tša tlwaelo0 .

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

Khoutu yeo e lego go `.i18n/htm/foot.pug` e ka tsela ye e latelago :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Mona `${I18N.C}` e sepelelana le `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Ka go šomiša `${I18N.xxx}` e swanago le mokgwa wo wa go ngwala, e kopantšwe le `i18n.yml` , o ka fihlelela boditšhabatšhaba bja maleme a mantši ga letlakala la ka tlase.

Go oketša `class="a"` go kgokagano ke go thibela kgokagano go fetošetšwa go `MarkDown` Bona :
 [➔ `YAML` Tsela : go thibela kgokagano `HTML` go fetošetšwa go `Markdown`](/i18/qa#H2) .