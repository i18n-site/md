# Vae

O loʻo faʻaaogaina pea le poloketi faʻataʻitaʻiga e fai ma faʻataʻitaʻiga, o le vae o le upega tafaʻilagi `.i18n/htm/foot.pug` faʻamatalaina i le `md`

<img alt="" src="https://p.3ti.site/1721286077.avif">

[`pug`](https://pugjs.org) o se gagana fa'ata'ita'i e fa'atupuina ai `HTML` .

[➔ Kiliki iinei e aoao ai le kalama o pug](https://pugjs.org)

**Aua le tusia `css` ma `js` i totonu `foot.pug`** , a leai o le ai ai ni mea sese.

Fa'amolemole va'ai i mea nei, o le sitaili o lo'o tusia i le fetaui `.css` ma o le fegalegaleaiga e ausia e ala i le fatuina o vaega i luga ole laiga.

## Sitaili Vae

I le poloketi faʻataʻitaʻiga `md/.i18n/htm` E 3 `css` faila i lalo.

* `foot.css` :
* `import.css` : `i18n.site`
* `conf.css` :

### Fa'ailoga Fa'ailoga

/ le fa'ailoga [vae](https://www.iconfont.cn/?lang=zh) e `F` e [le](https://www.iconfont.cn/?lang=en-us) iconfont.cn

Fa'amolemole fai lau oe lava fa'amaufa'ailoga icon pe'ā mana'omia ma sui : fa'atulagaga o lo'o i lalo `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Vaega I Luga Ole Laiga

`foot.pug` e le mafai ona tusia ai `js` i totonu.

E mafai ona e fa'amatalaina [se vaega i luga ole laiga](https://www.freecodecamp.org/news/build-your-first-web-component/) `foot.pug` `md/.i18n/htm/index.js`

E faigofie ona fai vaega ole upegatafa'ilagi, pei o pine masani `<x-img>`

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

`.i18n/htm/foot.pug` :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

: `en/i18n.yml` `${I18N.C}`

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Fa'aoga `${I18N.xxx}` e tutusa ma lenei faiga tusitusia, fa'atasi ma `i18n.yml` , e mafai ona e ausia le tele o gagana fa'ava-o-malo o le vae.

`MarkDown` `class="a"` :
 [: `YAML` ona puipuia `HTML` o le so'otaga mai le liua i `Markdown`](/i18/qa#H2) .