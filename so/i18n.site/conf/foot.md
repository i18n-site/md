# Cagta

Wali qaadashada mashruuca demo tusaale ahaan, `.i18n/htm/foot.pug` ee tusaha `md` ayaa qeexaya cagta ee mareegaha.

![](https://p.3ti.site/1721286077.avif)

[`pug`](https://pugjs.org) waa luqad qaabaysan oo dhalisa `HTML` 's.

[➔ Riix halkan si aad u barato naxwaha pug](https://pugjs.org)

**Ha ku qorin `css` iyo `js` ee `foot.pug`** , haddii kale waxaa jiri doona qalad.

Fadlan tixraac kuwan soo socda, qaabku wuxuu ku qoran yahay `.css` u dhigma, isdhexgalka waxaa lagu gaaraa iyada oo la abuurayo qaybaha shabakada.

## Habka Cagta

Waxaa jira saddex `css` fayl oo ka hooseeya `md/.i18n/htm` mashruuca demo.

* `foot.css` :
* `import.css` : `i18n.site` ee goobta oo dhan
* `conf.css` :

### Font Icon

Astaanta cagta ayaa la sameeyay iyadoo la abuurayo far magaceedu `F` iconfont.cn [nooca Ingiriisi](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)).

Fadlan samee farta summadaada sida loogu baahdo oo ku beddel qaabeynta soo socota `conf.css` :

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

Fadlan si toos ah ha u tixraacin faylka font ee iconfont.cn sababtoo ah laguma shuban karo browserka safari.

## Qaybaha Shabakadda

Ma qori kartid `js` in `foot.pug` Haddii isdhexgalka loo baahan yahay, fadlan habee qaybta shabakada.

[Qaybta shabakada](https://www.freecodecamp.org/news/build-your-first-web-component/) waxaa lagu qeexi karaa `md/.i18n/htm/index.js` ka dibna loo isticmaali karaa `foot.pug` .

Way fududahay in la abuuro qaybaha shabakada, sida `<x-img>` custom0 .

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

Koodhka ku jira `.i18n/htm/foot.pug` waa sida soo socota :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Halkan `${I18N.C}` waxay u dhigantaa `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Adigoo isticmaalaya `${I18N.xxx}` la mid ah habkan qoraalka, oo lagu daray `i18n.yml` , waxaad ku guuleysan kartaa caalimiyaynta luqadaha badan ee cagta.

Ku darista `class="a"` ee isku xidhka waa in laga hortago in isku xidhka loo rogo `MarkDown` Eeg :
 [➔ `YAML` : looga hortago in link `HTML` loo rogo `Markdown`](/i18/qa#H2) .