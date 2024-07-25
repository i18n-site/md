# Aşaky Sözbaşy

Henizem demo taslamasyny mysal hökmünde alyp, web sahypasynyň aşaky bölümi katalogda `.i18n/htm/foot.pug` `md`

<img alt="" src="https://p.3ti.site/1721286077.avif">

`HTML` döredýän şablon dilidir [`pug`](https://pugjs.org)

[The grammatikasyny öwrenmek üçin şu ýere basyň pug](https://pugjs.org)

**`css` We `js` `foot.pug`** , ýogsam ýalňyşlyklar bolar.

Aşakdakylara ýüz tutmagyňyzy haýyş edýäris, stil degişli görnüşde ýazylýar `.css` özara täsir web komponentlerini döretmek arkaly gazanylýar.

## Aşakdaky Stil

`md/.i18n/htm` taslamasynda aşakda 3 `css` faýl bar.

* : stili `foot.css`
* Tutuş sahypa üçin `i18n.site` : `import.css`
* Aşakdaky nyşanlaryň we : `conf.css`

### Nyşan Şrifti

Aşakdaky şekiljik ( [iňlis dilindäki wersiýa](https://www.iconfont.cn/?lang=en-us) /[中文 版](https://www.iconfont.cn/?lang=zh)) `F` şrift döredýär iconfont.cn

Zerur bolanda öz nyşan şriftiňizi dörediň we : konfigurasiýany çalşyň `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Web Komponentleri

`foot.pug` `js` ýazyp bilemok.

[Web komponentini](https://www.freecodecamp.org/news/build-your-first-web-component/) kesgitläp bilersiňiz `md/.i18n/htm/index.js` soňra bolsa komponenti `foot.pug` ulanyp bilersiňiz.

Customörite bellikler ýaly web komponentlerini döretmek aňsat `<x-img>`

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

## Köp Dilli Aşaky Sözbaşy

Ondaky kod aşakdaky : `.i18n/htm/foot.pug`

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Ine `${I18N.C}` degişli biri `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Bu ýazuw usulyna `${I18N.xxx}` , `i18n.yml` bilen bilelikde ulanyp, aşaky sözbaşynyň köp dilli halkaralaşmagyna ýetip bilersiňiz.

Baglanyşygyň `MarkDown` öwrülmezligi : baglanyşyga goşuň `class="a"`
 [: baglanyşygyň `HTML` `Markdown` öwrülmeginiň öňüni `YAML` almaly](/i18/qa#H2) .