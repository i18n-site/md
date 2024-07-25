# Alatunniste

Edelleen esittelyprojektista huolimatta verkkosivuston alatunniste `.i18n/htm/foot.pug` määritelty `md` .

<img alt="" src="https://p.3ti.site/1721286077.avif">

on mallikieli [`pug`](https://pugjs.org) joka luo `HTML` .

[➔ Napsauta tästä oppiaksesi kieliopin pug](https://pugjs.org)

**Älä kirjoita `css` ja `js` `foot.pug`** , muuten tulee virheitä.

Katso seuraava, tyyli kirjoitetaan vastaavalla `.css` lla ja vuorovaikutus saavutetaan luomalla verkkokomponentteja.

## Alatunnisteen Tyyli

`md/.i18n/htm` on 3 `css` tiedostoa alla.

* : `foot.css`
* : `import.css` `i18n.site`
* Alatunnistekuvakkeet ja : `conf.css`

### Kuvakkeen Fontti

Alatunnistekuvake on iconfont.cn ( [englanninkielinen versio](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) luomalla fontin nimeltä `F`

Luo oma kuvakefonttisi tarpeen mukaan ja vaihda : asetukset `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Web-Komponentit

`foot.pug` voi `js` siihen.

Voit määrittää [verkkokomponentin](https://www.freecodecamp.org/news/build-your-first-web-component/) kohdassa `md/.i18n/htm/index.js` ja sitten käyttää komponenttia kohdassa `foot.pug` .

Verkkokomponenttien, kuten mukautettujen tunnisteiden, luominen on helppoa `<x-img>`

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

Siinä oleva koodi : seuraava `.i18n/htm/foot.pug`

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

: vastaava on `en/i18n.yml` `${I18N.C}`

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Käyttämällä samanlaista kirjoitusmenetelmää `${I18N.xxx}` yhdistettynä `i18n.yml` -kirjaimeen voit saavuttaa alatunnisteen monikielisen kansainvälistymisen.

`class="a"` linkkiin välttääksesi linkin muuntamisen muotoon `MarkDown` , katso :
 [: `YAML` `HTML` `Markdown`](/i18/qa#H2)