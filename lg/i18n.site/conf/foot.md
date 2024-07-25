# Wansi

Nga tukyatwala pulojekiti ya demo ng’ekyokulabirako, wansi w’omukutu guno `.i18n/htm/foot.pug` mu `md`

<img alt="" src="https://p.3ti.site/1721286077.avif">

Lulimi lwa template oluzaala `HTML` [`pug`](https://pugjs.org)

[➔ Nyiga wano oyige grammar ya pug](https://pugjs.org)

**Towandiika `css` ne `js` mu `foot.pug`**

Nsaba otunuulire bino wammanga, sitayiro ewandiikiddwa mu `.css` era enkolagana etuukibwako nga tukola ebitundu by'omukutu.

## Omusono Gw’okuwanirira Wansi

Mu pulojekiti ya demo `md/.i18n/htm` Waliwo `css` fayiro 3 wansi.

* `foot.css` :
* : `i18n.site` ku mukutu `import.css`
* `conf.css` :

### Fonti Y'akabonero

Akabonero ka footer kakolebwa nga iconfont.cn ( [English version](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) okukola efonti eyitibwa `F`

Nsaba okole efonti yo ey'akabonero nga bwe kyetaagisa era okyuse ensengeka : wammanga mu `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Ebitundu By’omukutu Gwa Yintaneeti

`foot.pug` `js`

Osobola okunnyonnyola [ekitundu kya web](https://www.freecodecamp.org/news/build-your-first-web-component/) `foot.pug` `md/.i18n/htm/index.js`

Kyangu okukola ebitundu by'omukutu, nga custom tags `<x-img>`

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

## Wansi W’ennimi Nnyingi

`.i18n/htm/foot.pug` Koodi eri mu yo eri bweti :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

`${I18N.C}` Ekwatagana nayo eri mu `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Ng’okozesa `${I18N.xxx}` efaananako n’enkola eno ey’okuwandiika, ng’ogasseeko `i18n.yml` , osobola okutuuka ku kuyingiza ennimi nnyingi ez’ensi yonna ez’ekiwandiiko.

`class="a"` ku link okwewala link okukyusibwa okudda mu `MarkDown` , laba :
 [: Okuziyiza `YAML` `HTML` ya link okukyusibwa okudda mu `Markdown`](/i18/qa#H2) .