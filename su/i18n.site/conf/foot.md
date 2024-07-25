# Footer

Masih nyandak proyék demo sabagé conto, footer halaman wéb `.i18n/htm/foot.pug` dina diréktori `md`

<img alt="" src="https://p.3ti.site/1721286077.avif">

[`pug`](https://pugjs.org) nyaéta basa citakan anu ngahasilkeun `HTML` .

[➔ Klik di dieu pikeun diajar tata basa pug](https://pugjs.org)

**Entong nyerat `css` sareng `js` `foot.pug`** , upami henteu bakal aya kasalahan.

Mangga tingal di handap, gaya ditulis dina pakait `.css` sarta interaksi kahontal ku nyieun komponén web.

## Gaya Footer

Dina proyék demo `md/.i18n/htm` 3 `css` file di handap.

* `foot.css` :
* `import.css` : `i18n.site`
* `conf.css` :

### Ikon Font

Ikon footer dihasilkeun ku iconfont.cn ( [Vérsi Inggris](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) nyieun font ngaranna `F`

Punten jieun font ikon anjeun nyalira upami diperyogikeun sareng ganti : di handap ieu dina `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Komponén Wéb

`foot.pug` teu bisa nulis `js` di dinya.

Anjeun tiasa nangtukeun [komponén wéb](https://www.freecodecamp.org/news/build-your-first-web-component/) `foot.pug` `md/.i18n/htm/index.js`

Gampang nyieun komponén wéb, sapertos tag khusus `<x-img>`

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

Kodeu di jerona : `.i18n/htm/foot.pug`

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Ieu anu pakait aya : `en/i18n.yml` `${I18N.C}`

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Ngagunakeun `${I18N.xxx}` sarupa metoda nulis ieu, digabungkeun jeung `i18n.yml` , Anjeun bisa ngahontal multi-basa internasionalisasi footer.

Tambahkeun `class="a"` kana tautan pikeun nyegah tautan dirobih janten `MarkDown` , tingali :
 [: `YAML` nyegah `HTML` link tina dirobah jadi `Markdown`](/i18/qa#H2) .