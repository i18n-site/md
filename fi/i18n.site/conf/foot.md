# Alatunniste

Tai esimerkiksi esittelyprojektissa `md`-kansiossa `.i18n/htm/foot.pug` määrittää verkkosivuston alatunnisteen.

![](https://p.3ti.site/1721286077.avif)

[`pug`](https://pugjs.org) on mallikieli, joka luo `HTML`-koodia.

[➔ Klikkaa tästä oppiaksesi pugin syntaksin](https://pugjs.org)

**Älä kirjoita `css`- ja `js`-koodia `foot.pug`-tiedostoon**, muuten se aiheuttaa virheen.

Katso alla oleva, tyyli kirjoitetaan vastaavaan `.css`-tiedostoon ja vuorovaikutus toteutetaan verkkokomponenttien avulla.

## Alatunnisteen tyyli

Demoprojektissa `md/.i18n/htm`-kansiossa on kolme `css`-tiedostoa.

* `foot.css`: alatunnisteen tyyli
* `import.css`: `i18n.site`-sivuston oletustyylit
* `conf.css`: alatunnisteen ikonit ja fontit

### Ikoniefontti

Alatunnistekuvakkeet luodaan iconfont.cn:llä ( [englanninkielinen versio](https://www.iconfont.cn/?lang=en-us) / [kiinalainen versio](https://www.iconfont.cn/?lang=zh) ) luodulla `F`-nimisellä fontilla.

Ole hyvä ja luo tarpeidesi mukaan oma ikoniefonttisi ja korvaa seuraavat asetukset `conf.css`-tiedostossa:

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Verkkokomponentit

`foot.pug`-tiedostoon ei voida kirjoittaa `js`-koodia, jos vuorovaikutusta tarvitaan, mukauta verkkokomponentti.

[Sivukomponentit](https://www.freecodecamp.org/news/build-your-first-web-component/) määritellään tiedostossa `md/.i18n/htm/index.js`, ja ne voidaan käyttää `foot.pug`-tiedostossa.

Verkkokomponenttien luominen on yksinkertaista, esimerkiksi mukautettu `<x-img>`-elementti.

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

## Alatunnisteen monikielisyys

`.i18n/htm/foot.pug`-tiedostossa on seuraava koodi:

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Tässä `${I18N.C}` vastaa `en/i18n.yml`-tiedostossa olevaa:

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Käyttämällä `${I18N.xxx}`-muotoa ja `i18n.yml`-tiedostoa voit saavuttaa alatunnisteen monikielisen kansainvälistämisen.

`class="a"` lisääminen linkkiin estää linkin muuntamisen `MarkDown` :ksi. Katso :
 [➔ `YAML` : estää linkin `HTML` muuntaminen `Markdown` :ksi](/i18/qa#H2) .