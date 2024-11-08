# Footer

Ke lawe mau nei i ka papahana demo ma ke ʻano he laʻana, `.i18n/htm/foot.pug` ma ka papa kuhikuhi `md` e wehewehe i ka wāwae o ka pūnaewele.

![](https://p.3ti.site/1721286077.avif)

ʻO [`pug`](https://pugjs.org) kahi ʻōlelo maʻamau e hoʻopuka ana i `HTML` 's.

[➔ Kaomi ma aneʻi e aʻo i ka grammar o pug](https://pugjs.org)

**Mai kākau i `css` a me `js` i `foot.pug`** , i ʻole e hewa.

E ʻoluʻolu e nānā i kēia mau mea, ua kākau ʻia ke ʻano i ka `.css` kūpono, a loaʻa ka pilina ma ka hana ʻana i nā ʻāpana pūnaewele.

## Kāhua Wāwae

Aia ʻekolu `css` faila ma lalo o `md/.i18n/htm` i ka papahana demo.

* `foot.css` :
* `import.css` : 1Kaila `i18n.site` no ka pūnaewele holoʻokoʻa
* `conf.css` :

### Kiʻi Kikokikona

Hoʻokumu ʻia ka ʻikona footer ma ka hana ʻana i kahi font i kapa ʻia `F` iconfont.cn [ka mana Pelekane](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)).

E ʻoluʻolu e hana i kāu font icon ponoʻī e like me ka mea e pono ai a hoʻololi i kēia hoʻonohonoho ma `conf.css` :

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

Mai kuhikuhi pololei i ka faila font o iconfont.cn no ka mea ʻaʻole hiki ke hoʻouka ʻia ma ka polokalamu Safari.

## Nā ʻāpana Pūnaewele

ʻAʻole hiki iā ʻoe ke kākau i `js` i `foot.pug` Inā pono ke kamaʻilio ʻana, e ʻoluʻolu e hoʻopilikino i ka ʻāpana pūnaewele.

Hiki ke wehewehe ʻia [kahi ʻāpana pūnaewele](https://www.freecodecamp.org/news/build-your-first-web-component/) ma `md/.i18n/htm/index.js` a laila hoʻohana ʻia ma `foot.pug` .

He mea maʻalahi ka hana ʻana i nā ʻāpana pūnaewele, e like me `<x-img>` maʻamau0 .

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

Penei ke code ma `.i18n/htm/foot.pug` :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Eia `${I18N.C}` pili me `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Ke hoʻohana nei i `${I18N.xxx}` e like me kēia ʻano kākau, i hui pū ʻia me `i18n.yml` , hiki iā ʻoe ke hoʻokō i ka internationalization multi-language o ka footer.

ʻO ka hoʻohui ʻana i `class="a"` i ka loulou i mea e pale ai i ka hoʻololi ʻana i ka loulou i `MarkDown` E nānā :
 [`HTML` `YAML` : `Markdown`](/i18/qa#H2)