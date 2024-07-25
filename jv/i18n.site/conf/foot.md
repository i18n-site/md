# Footer

Isih njupuk proyek demo minangka conto, footer situs web `.i18n/htm/foot.pug` ing direktori `md` .

<img alt="" src="https://p.3ti.site/1721286077.avif">

[`pug`](https://pugjs.org) yaiku basa cithakan sing ngasilake `HTML` .

[➔ Klik ing kene kanggo sinau tata basa pug](https://pugjs.org)

**Aja nulis `css` lan `js` `foot.pug`** , yen ora bakal ana kesalahan.

Mangga deleng ing ngisor iki, gaya ditulis ing cocog `.css` lan interaksi wis ngrambah dening nggawe komponen web.

## Gaya Footer

Ing proyek `md/.i18n/htm` ana 3 `css` file ing ngisor iki.

* `foot.css` :
* `import.css` : `i18n.site`
* `conf.css` :

### Font Lambang

Ikon footer digawe dening iconfont.cn ( [versi Inggris](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) nggawe font jenenge `F`

Gawe font lambang sampeyan dhewe yen perlu lan ganti : ing ngisor iki `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Komponen Web

`foot.pug` `js`

Sampeyan bisa nemtokake [komponen web](https://www.freecodecamp.org/news/build-your-first-web-component/) ing `md/.i18n/htm/index.js` banjur nggunakake komponen ing `foot.pug` .

Gampang nggawe komponen web, kaya tag khusus `<x-img>`

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

## Footer Multibasa

Kode ing ngisor : `.i18n/htm/foot.pug`

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

: kene sing cocog ana ing `en/i18n.yml` `${I18N.C}`

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Nggunakake `${I18N.xxx}` padha karo cara nulis iki, digabungake karo `i18n.yml` , sampeyan bisa entuk internasionalisasi multi-basa footer.

Tambah `class="a"` menyang link supaya link ora diowahi dadi `MarkDown` , deleng :
 [: `YAML` nyegah `HTML` link saka diowahi dadi `Markdown`](/i18/qa#H2) .