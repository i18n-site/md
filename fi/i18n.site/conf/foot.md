# 1. Alatunniste

2. Edelleen esimerkkinä esittelyprojektista, `md`-kansiossa oleva `.i18n/htm/foot.pug` määrittää verkkosivuston alatunnisteen.

![](https://p.3ti.site/1721286077.avif)

[`pug`](https://pugjs.org) on mallikieli, joka luo `HTML`-koodia.

4. [➔ Klikkaa tästä oppiaksesi pugin syntaksin](https://pugjs.org)

5. **Älä kirjoita `css`- tai `js`-koodia `foot.pug`-tiedostoon**, muuten tapahtuu virhe.

6. Katso alla olevasta tekstistä, tyyli kirjoitetaan vastaavaan `.css`-tiedostoon, ja vuorovaikutus toteutetaan luomalla verkkosivukomponentteja.

## 7. Alatunnisteen tyyli

8. Esittelyprojektissa `md/.i18n/htm`-kansiossa on kolme `css`-tiedostoa.

* 9. `foot.css`: alatunnisteen tyyli
* 10. `import.css`: koko sivuston `i18n.site`-oletusstyle
* 11. `conf.css`: alatunnisteen ikonit ja fontit

### 12. Ikonifontti

13. Alatunnistekuvakkeet luodaan iconfont.cn-sivustolla ( [englanninkielinen versio](https://www.iconfont.cn/?lang=en-us) / [kiinalainen versio](https://www.iconfont.cn/?lang=zh) ) luodulla `F`-fontilla.

14. Luo tarpeen mukaan oma ikonifonttisi ja korvaa seuraavat asetukset `conf.css`-tiedostossa:

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## 15. Verkkosivukomponentit

16. `foot.pug`-tiedostoon ei saa kirjoittaa `js`-koodia, jos tarvitset vuorovaikutusta, määritä oma verkkosivukomponentti.

[Rainakomponentti](https://www.freecodecamp.org/news/build-your-first-web-component/) määritellään tiedostossa `md/.i18n/htm/index.js`, ja sitä käytetään komponenttina `foot.pug`-tiedostossa.

18. Verkkosivukomponenttien luominen on yksinkertaista, esimerkiksi mukautettu `<x-img>`-elementti.

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

## 19. Alatunnisteen monikielisyys

20. `.i18n/htm/foot.pug`-tiedostossa on seuraava koodi:

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

21. Tässä `${I18N.C}` vastaa `en/i18n.yml`-tiedostossa olevaa:

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

22. Käyttämällä `${I18N.xxx}`-muotoa ja yhdistämällä se `i18n.yml`-tiedostoon, voit toteuttaa alatunnisteen monikielisen kansainvälistämisen.

`class="a"` lisääminen linkkiin estää linkin muuntamisen `MarkDown` ksi. Katso :
 [➔ `YAML` Kuinka estää linkin `HTML` muuntaminen `Markdown` : ksi](/i18/qa#H2) .