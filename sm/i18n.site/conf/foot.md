# Vae

O loʻo avea pea le faʻataʻitaʻiga faʻataʻitaʻiga e fai ma faʻataʻitaʻiga, `.i18n/htm/foot.pug` i le `md` directory o loʻo faʻamatalaina le vae o le upega tafaʻilagi.

![](https://p.3ti.site/1721286077.avif)

[`pug`](https://pugjs.org) ose gagana fa'ata'ita'i e fa'atupu `HTML` 's.

[➔ Kiliki iinei e aoao ai le kalama o pug](https://pugjs.org)

**Aua le tusia `css` ma `js` i `foot.pug`** , a leai o le ai ai se mea sese.

Fa'amolemole va'ai i mea o lo'o mulimuli mai, o le sitaili e tusia i totonu o le `.css` fetaui, ma le fegalegaleai e ausia e ala i le fatuina o vaega i luga ole laiga.

## Sitaili Vae

E tolu `css` faila i lalo ole `md/.i18n/htm` ile poloketi faʻataʻitaʻiga.

* `foot.css` :
* `import.css` : `i18n.site` Sitaili masani mo le saite atoa
* `conf.css` :

### Fa'ailoga Fa'ailoga

O le fa'ailoga vae e fa'atupuina e ala i le fa'atupuina o se vai papatisoga e [ta'ua](https://www.iconfont.cn/?lang=zh) `F` [le](https://www.iconfont.cn/?lang=en-us) / iconfont.cn

Fa'amolemole fai lau oe lava fa'amaufa'ailoga pe a mana'omia ma sui le fa'asologa o lo'o i lalo ile `conf.css` :

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

Fa'amolemole aua le fa'asino sa'o le faila faila o le iconfont.cn aua e le mafai ona utaina i luga ole su'esu'ega safari.

## Vaega I Luga Ole Laiga

E le mafai ona e tusia `js` i `foot.pug` Afai e mana'omia le fegalegaleai, fa'amolemole fa'avasega le vaega i luga ole laiga.

E mafai ona fa'amatalaina [se vaega i luga ole laiga](https://www.freecodecamp.org/news/build-your-first-web-component/) ile `md/.i18n/htm/index.js` ona fa'aaoga lea ile `foot.pug` .

E faigofie ona fai vaega i luga ole laiga, e pei o `<x-img>` masani0 .

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

## Fa'avaega Gagana

Ole fa'ailoga ile `.i18n/htm/foot.pug` e fa'apea :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

O le `${I18N.C}` e fetaui ma `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Faʻaaogaina `${I18N.xxx}` tutusa ma lenei metotia tusitusi, faʻatasi ma `i18n.yml` , e mafai ona e ausia le tele-gagana faʻavaomalo o le vae.

O le fa'aopoopoina o `class="a"` i le so'otaga o le taofia lea o le so'oga mai le liua i `MarkDown` Va'ai :
 [➔ `YAML` : E fa'afefea ona puipuia le sootaga `HTML` mai le liua i `Markdown`](/i18/qa#H2) .