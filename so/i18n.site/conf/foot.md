# Cagta

Iyadoo weli loo qaadanayo mashruuca demo tusaale ahaan, cagtiisa mareegaha `.i18n/htm/foot.pug` lagu qeexay hagaha `md`

<img alt="" src="https://p.3ti.site/1721286077.avif">

[`pug`](https://pugjs.org) luqad qaabeysan oo dhalisa `HTML` .

[➔ Riix halkan si aad u barato naxwaha pug](https://pugjs.org)

**Ha ku qorin `css` `js` `foot.pug`** , haddii kale waxaa jiri doona khaladaad.

Fadlan tixraac kuwan soo socda, qaabku wuxuu ku qoran yahay u dhigma `.css` Isdhexgalkana waxaa lagu gaaraa iyada oo la abuurayo qaybaha shabakada.

## Habka Cagta

Mashruuca `md/.i18n/htm` waxaa jira 3 `css` fayl oo hoose.

* `foot.css` :
* `import.css` : `i18n.site` ee goobta oo dhan
* `conf.css` :

### Font Icon

Astaanta [cagta](https://www.iconfont.cn/?lang=en-us) [waxaa](https://www.iconfont.cn/?lang=zh) / `F` iconfont.cn

Fadlan samee farta summadaada sida loogu baahdo oo ku beddel : soo socota gudaha `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Qaybaha Shabakadda

`foot.pug` qori karo `js` haddii isdhexgalka loo baahan yahay, fadlan habee qaybta bogga.

Waxaad ku qeexi kartaa [qayb ka](https://www.freecodecamp.org/news/build-your-first-web-component/) `foot.pug` ah shabakada `md/.i18n/htm/index.js`

Way fududahay in la abuuro qaybaha shabakadda, sida summada gaarka ah `<x-img>`

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

## Luqadaha Badan Ee Cagta

Koodhka ku jira waa sidan soo : `.i18n/htm/foot.pug`

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

`${I18N.C}` midda u dhiganta ayaa ku jirta `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

`i18n.yml` isticmaalaya `${I18N.xxx}`

`class="a"` dar linkiga si aad uga fogaato in isku xidhka loo rogo `MarkDown` , eeg :
 [: `YAML` looga hortago `HTML` linkiga loo rogo `Markdown`](/i18/qa#H2) .