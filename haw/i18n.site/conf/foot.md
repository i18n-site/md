# Footer

Ke lawe nei i ka papahana demo ma ke ʻano he laʻana, `.i18n/htm/foot.pug` wehewehe ʻia ka footer o ka pūnaewele ma ka papa kuhikuhi `md`

<img alt="" src="https://p.3ti.site/1721286077.avif">

[`pug`](https://pugjs.org) `HTML`

[➔ Kaomi ma aneʻi e aʻo i ka grammar o pug](https://pugjs.org)

**Mai kākau i `css` a me `js` i ka `foot.pug`**

E ʻoluʻolu e nānā i kēia mau mea, ua kākau ʻia ke ʻano ma ka pili `.css` a ua hoʻokō ʻia ka pilina ma ka hana ʻana i nā ʻāpana pūnaewele.

## Kāhua Wāwae

Ma ka papahana `md/.i18n/htm` He 3 `css` faila ma lalo.

* `foot.css` :
* `import.css` : `i18n.site`
* `conf.css` :

### Kiʻi Kikokikona

Hoʻokumu ʻia ka [ikona](https://www.iconfont.cn/?lang=zh) `F` / [ka](https://www.iconfont.cn/?lang=en-us) iconfont.cn

E ʻoluʻolu e hoʻokumu i kāu font icon ponoʻī e like me ka mea e pono ai a hoʻololi i : hoʻonohonoho ma lalo `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Nā ʻāpana Pūnaewele

`foot.pug` hiki ke kākau i `js` i loko o ia mea.

Hiki iā ʻoe ke wehewehe i [kahi ʻāpana pūnaewele](https://www.freecodecamp.org/news/build-your-first-web-component/) ma `foot.pug` `md/.i18n/htm/index.js`

He mea maʻalahi ka hana ʻana i nā ʻāpana pūnaewele, e like me nā hōʻailona maʻamau `<x-img>`

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

## Wāwae Wāwae ʻōlelo He Nui

Penei ke code ma : `.i18n/htm/foot.pug`

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

: ka mea pili ma `en/i18n.yml` `${I18N.C}`

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Ke hoʻohana nei i ka `${I18N.xxx}` e like me kēia ʻano kākau, hui pū ʻia me `i18n.yml` , hiki iā ʻoe ke hoʻokō i ka hoʻonui ʻia ʻana o ka footer.

`class="a"` hoʻohui i ka loulou i mea e hoʻohuli ʻia ai ka loulou i `MarkDown` , e ʻike :
 [: `YAML` `HTML` `Markdown`](/i18/qa#H2)