# Jalus

Võttes siiski näitena demoprojekti, `.i18n/htm/foot.pug` veebisaidi jalus määratletud kataloogis `md`

<img alt="" src="https://p.3ti.site/1721286077.avif">

on mallikeel [`pug`](https://pugjs.org) mis genereerib `HTML` .

[➔ Keele grammatika õppimiseks klõpsake siin pug](https://pugjs.org)

**Ärge kirjutage `foot.pug` `css` ja `js`** , vastasel juhul tekivad vead.

Palun vaadake järgmist, stiil on kirjutatud vastavas `.css` -s ja interaktsioon saavutatakse veebikomponentide loomisega.

## Jaluse Stiil

`md/.i18n/htm` on allpool 3 `css` faili.

* : `foot.css`
* `import.css` : `i18n.site`
* `conf.css` ikoonid ja :

### Ikooni Font

Jaluse ikooni genereerib iconfont.cn ( [ingliskeelne versioon](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)), luues fondi nimega `F`

Looge vajadusel oma ikoonifont ja asendage : konfiguratsioon `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Veebikomponendid

Sellesse `foot.pug` saa kirjutada `js` Kui on vaja interaktsiooni, kohandage veebilehe komponenti.

Saate määratleda [veebikomponendi](https://www.freecodecamp.org/news/build-your-first-web-component/) `md/.i18n/htm/index.js` ja seejärel kasutada komponenti `foot.pug` .

Veebikomponente (nt kohandatud silte) on lihtne luua `<x-img>`

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

## Mitmekeelne Jalus

Selles olev kood : järgmine `.i18n/htm/foot.pug`

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Siin : vastav number `en/i18n.yml` `${I18N.C}`

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Sellele kirjutamismeetodile sarnase `${I18N.xxx}` kasutamisel koos `i18n.yml` ga saate jaluse mitmekeelseks rahvusvahelistumiseks.

Lisage lingile `class="a"` et vältida lingi teisendamist `MarkDown` -ks, vaadake :
 [: `YAML` vältida lingi `HTML` teisendamist `Markdown`](/i18/qa#H2) .