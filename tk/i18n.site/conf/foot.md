# Custöriteleşdirilen Aşaky Sözbaşy

Henizem demo taslamasyny mysal hökmünde alyp, `md` bukjadaky `.i18n/htm/foot.pug` web sahypasynyň aşaky bölegini kesgitleýär.

![](https://p.3ti.site/1721286077.avif)

## Aşakdaky Stil

Demo taslamasynda `md/.i18n/htm` dan kiçi üç `css` faýl bar.

* `foot.css` Aýak stili :
* `import.css` : 1hli saýt üçin `i18n.site` stil!
* `conf.css` Aýakgap nyşanlary we şriftleri :

### Nyşan Şrifti

Aşakdaky nyşan iconfont.cn `F` atly şrift döretmek arkaly döredilýär ( [Iňlis wersiýasy](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)).

Zerur bolanda öz nyşan şriftiňizi dörediň we aşakdaky konfigurasiýany `conf.css` a çalyşyň :

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

Safari brauzerine ýükläp bolmaýandygy üçin iconfont.cn şrift faýlyna göni ýüz tutmaň.

## Web Komponentleri

`foot.pug` dan `js` ýazyp bilmersiňiz. Eger özara täsir etmek zerur bolsa, web komponentini düzüň.

[Web komponenti](https://www.freecodecamp.org/news/build-your-first-web-component/) `md/.i18n/htm/index.js` -da kesgitlenip, soňra `foot.pug` de ulanylyp bilner.

Customörite `<x-img>` ýaly web komponentlerini döretmek aňsat.

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

`.i18n/htm/foot.pug` -daky kod aşakdaky ýaly :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Bu ýerde `${I18N.C}` `en/i18n.yml` -e gabat gelýär :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Bu ýazuw usulyna meňzeş `${I18N.xxx}` ulanyp, `i18n.yml` bilen bilelikde, aşaky sözbaşynyň köp dilli halkaralaşmagyna ýetip bilersiňiz.

Baglanyşyga `class="a"` goşmak, baglanyşygyň `MarkDown` e öwrülmeginiň öňüni almakdyr. Serediň :
 [➔ `YAML` : `HTML` baglanyşygyň `Markdown` -e öwrülmeginiň öňüni nädip almaly](/i18/qa#H2) ?