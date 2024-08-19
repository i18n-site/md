# Footer

Masih nyandak proyék demo salaku conto, `.i18n/htm/foot.pug` dina diréktori `md` ngahartikeun footer halaman wéb.

![](https://p.3ti.site/1721286077.avif)

[`pug`](https://pugjs.org) nyaéta basa citakan anu ngahasilkeun `HTML` 's.

[➔ Klik di dieu pikeun diajar tata basa pug](https://pugjs.org)

**Entong nyerat `css` sareng `js` dina `foot.pug`** , upami henteu bakal aya kasalahan.

Mangga tingal di handap, gaya ditulis dina `.css` pakait, sarta interaksi kahontal ku nyieun komponén web.

## Gaya Footer

Aya tilu file `css` handapeun `md/.i18n/htm` dina proyék demo.

* `foot.css` : gaya footer
* `import.css` : 1Gaya `i18n.site` pikeun sakabéh situs
* `conf.css` : Ikon footer sareng font

### Ikon Font

Ikon footer dihasilkeun ku `F` iconfont.cn [versi Inggris](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)).

Punten jieun font ikon anjeun nyalira upami diperyogikeun sareng ganti konfigurasi di handap ieu dina `conf.css` :

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Komponén Wéb

Anjeun teu bisa nulis `js` dina `foot.pug` Lamun interaksi diperlukeun, mangga ngaropéa komponén web.

[Komponén wéb](https://www.freecodecamp.org/news/build-your-first-web-component/) tiasa dihartikeun dina `md/.i18n/htm/index.js` teras dianggo dina `foot.pug` .

Gampang nyieun komponén wéb, sapertos `<x-img>` custom0 .

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

Kodeu dina `.i18n/htm/foot.pug` nyaéta kieu :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Di dieu `${I18N.C}` pakait jeung `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Ngagunakeun `${I18N.xxx}` sarupa metoda tulisan ieu, digabungkeun jeung `i18n.yml` , Anjeun bisa ngahontal internationalization multi-basa footer nu.

Nambihan `class="a"` kana tautan nyaéta pikeun nyegah tautan dirobih janten `MarkDown` Tingali :
 [➔ `YAML` : Kumaha carana nyegah link `HTML` dirobah jadi `Markdown`](/i18/qa#H2) .