# Troedyn

Gan ddal i gymryd y prosiect demo fel enghraifft, mae `.i18n/htm/foot.pug` yn y cyfeiriadur `md` yn diffinio troedyn y wefan.

![](https://p.3ti.site/1721286077.avif)

Mae [`pug`](https://pugjs.org) yn iaith dempled sy'n cynhyrchu `HTML` 's.

[➔ Cliciwch yma i ddysgu gramadeg pug](https://pugjs.org)

**Peidiwch ag ysgrifennu `css` a `js` mewn `foot.pug`** , fel arall bydd gwall.

Cyfeiriwch at y canlynol, mae'r arddull wedi'i ysgrifennu i'r `.css` cyfatebol, a chyflawnir y rhyngweithio trwy greu cydrannau gwe.

## Arddull Troedyn

Mae tair ffeil `css` o dan `md/.i18n/htm` yn y prosiect demo.

* `foot.css` :
* `import.css` : `i18n.site` ar gyfer y safle cyfan
* `conf.css` : Eiconau a ffontiau troedyn

### Ffont Eicon

Cynhyrchir eicon y troedyn trwy greu ffont o'r enw `F` iconfont.cn ( [Fersiwn Saesneg](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)).

Crëwch eich ffont eicon eich hun yn ôl yr angen a disodli'r ffurfweddiad canlynol yn `conf.css` :

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

Peidiwch â chyfeirio'n uniongyrchol at ffeil ffont iconfont.cn oherwydd ni ellir ei llwytho ar y porwr saffari.

## Cydrannau Gwe

Ni allwch ysgrifennu `js` mewn `foot.pug` Os oes angen rhyngweithio, addaswch y gydran gwe.

Gellir diffinio [cydran gwe](https://www.freecodecamp.org/news/build-your-first-web-component/) yn `md/.i18n/htm/index.js` ac yna ei defnyddio yn `foot.pug` .

Mae'n hawdd creu cydrannau gwe, fel `<x-img>` personol0 .

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

## Troedyn Amlieithog

Mae'r cod yn `.i18n/htm/foot.pug` fel a ganlyn :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Yma mae `${I18N.C}` yn cyfateb i `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Gan ddefnyddio `${I18N.xxx}` tebyg i'r dull ysgrifennu hwn, ynghyd ag `i18n.yml` , gallwch ryngwladoli'r troedyn aml-iaith.

Mae ychwanegu `class="a"` at y ddolen er mwyn atal y ddolen rhag cael ei throsi i `MarkDown` Gweler :
 [➔ `YAML` : Sut i atal dolen `HTML` rhag cael ei throsi i `Markdown`](/i18/qa#H2) .