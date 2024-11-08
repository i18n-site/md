# Mukautettu Alatunniste

Edelleen esittelyprojektin esimerkkinä `.i18n/htm/foot.pug` `md` -hakemistossa määrittää verkkosivuston alatunnisteen.

![](https://p.3ti.site/1721286077.avif)

## Alatunnisteen Tyyli

Demoprojektissa on kolme `css` tiedostoa alle `md/.i18n/htm` .

* `foot.css` : tyyli
* `import.css` : sivuston `i18n.site`
* `conf.css` : ja fontit

### Kuvakkeen Fontti

Alatunnistekuvake luodaan luomalla fontti nimeltä iconfont.cn `F` [englanninkielinen versio](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)).

Ole hyvä ja luo oma kuvakefonttisi tarpeen mukaan ja vaihda seuraavat asetukset arvoon `conf.css` :

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

Älä viittaa suoraan iconfont.cn-kirjasintiedostoon, koska sitä ei voi ladata safari-selaimeen.

## Web-Komponentit

Et voi kirjoittaa `js` `foot.pug` Jos vuorovaikutusta tarvitaan, mukauta verkkokomponenttia.

[Rainakomponentti](https://www.freecodecamp.org/news/build-your-first-web-component/) voidaan määritellä arvossa `md/.i18n/htm/index.js` ja sitten käyttää kohdassa `foot.pug` .

Verkkokomponenttien, kuten mukautettujen `<x-img>` , luominen on helppoa.

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

## Monikielinen Alatunniste

Koodi numerossa `.i18n/htm/foot.pug` on seuraava :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Tässä `${I18N.C}` vastaa `en/i18n.yml` :tä :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Käyttämällä tätä kirjoitustapaa vastaavaa `${I18N.xxx}` :aa yhdistettynä `i18n.yml` een, voit saavuttaa alatunnisteen monikielisen kansainvälistymisen.

`class="a"` lisääminen linkkiin estää linkin muuntamisen `MarkDown` :ksi. Katso :
 [➔ `YAML` : estää linkin `HTML` muuntaminen `Markdown` :ksi](/i18/qa#H2) .