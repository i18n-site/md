# Alatunniste

Tarkemmin ottaen esimerkiksi esittelyprojektissa `md`-kansiossa `.i18n/htm/foot.pug` määrittää verkkosivuston alatunnisteen.

![](https://p.3ti.site/1721286077.avif)

[`pug`](https://pugjs.org) on mallikieli, joka luo `HTML` :n.

[➔ Klikkaa tästä oppiaksesi pugin syntaksin](https://pugjs.org)

**Älä kirjoita `css`- ja `js`-koodia `foot.pug`-tiedostoon**, muuten tapahtuu virhe.

Viitathan seuraavaan, tyyli kirjoitetaan vastaavaan `.css`-tiedostoon ja vuorovaikutus toteutetaan verkkokomponenttien luomisen kautta.

## Alatunnisteen tyyli

Esittelyprojektissa `md/.i18n/htm`-kansiossa on kolme `css`-tiedostoa.

* `foot.css`: alatunnisteen tyyli
* `import.css`: `i18n.site`-sivuston oletustyylit
* `conf.css`: alatunnisteen ikonit ja fontit

### Ikoniefontti

Alatunnistekuvakkeet luodaan iconfont.cn-sivustolla nimetyllä `F`-fontilla ([enganninkielinen versio](https://www.iconfont.cn/?lang=en-us) / [kiinalainen versio](https://www.iconfont.cn/?lang=zh)).

Olkaa hyvä ja luokaa oma ikoniefonttinne tarpeen mukaan ja korvaa `conf.css`-tiedostossa seuraavat asetukset:

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

Älkää viitattko suoraan iconfont.cn:n fonttitiedostoon, koska sitä ei voida ladata Safarissa.

## Verkkokomponentit

`foot.pug`-tiedostoon ei voida kirjoittaa `js`-koodia, jos vuorovaikutusta tarvitaan, mukauta verkkokomponentti.

[Rainakomponentti](https://www.freecodecamp.org/news/build-your-first-web-component/) voidaan määritellä arvossa `md/.i18n/htm/index.js` ja sitten käyttää kohdassa `foot.pug` .

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

Käyttämällä tätä muotoa `${I18N.xxx}` ja yhdistämällä `i18n.yml`, voit saavuttaa alatunnisteen monikielisen kansainvälistymisen.

`class="a"` lisääminen linkkiin estää linkin muuntamisen `MarkDown` :ksi. Katso :
 [➔ `YAML` : estää linkin `HTML` muuntaminen `Markdown` :ksi](/i18/qa#H2) .