# Fæti

Enn að taka kynningarverkefnið sem dæmi, fótur vefsíðunnar `.i18n/htm/foot.pug` skilgreindur í `md` .

<img alt="" src="https://p.3ti.site/1721286077.avif">

[`pug`](https://pugjs.org) er sniðmát tungumál sem býr til `HTML` .

[➔ Smelltu hér til að læra málfræði pug](https://pugjs.org)

**Ekki skrifa `css` og `js` `foot.pug`** , annars verða villur.

Vinsamlega skoðaðu eftirfarandi, stíllinn er skrifaður í samsvarandi `.css` og samspilið er náð með því að búa til vefhluta.

## Fótastíll

Í `md/.i18n/htm` eru 3 `css` skrár fyrir neðan.

* `foot.css` :
* `import.css` : `i18n.site` stíll fyrir alla síðuna
* `conf.css` Fótatákn : leturgerðir

### Tákn Leturgerð

Táknið fyrir neðan er búið til með því iconfont.cn ( [enska útgáfan](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) býr til leturgerð sem heitir `F`

Vinsamlegast búðu til þitt eigið táknleturgerð eftir þörfum og skiptu um : uppsetningu í `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Vefhlutir

`foot.pug` getur ekki skrifað `js` í það.

Þú getur skilgreint [vefhluta](https://www.freecodecamp.org/news/build-your-first-web-component/) `md/.i18n/htm/index.js` og ​​síðan notað íhlutinn í `foot.pug` .

Það er auðvelt að búa til vefhluta, eins og sérsniðin merki `<x-img>`

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

## Fjöltyngdur Fótur

Kóðinn í honum er sem hér : `.i18n/htm/foot.pug`

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Hér er samsvarandi : `en/i18n.yml` `${I18N.C}`

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Með því `${I18N.xxx}` nota svipað og þessa ritaðferð, ásamt `i18n.yml` , geturðu náð mörgum tungumálum alþjóðavæðingu fótsins.

`class="a"` við hlekkinn til að forðast að hlekknum sé breytt í `MarkDown` , sjá :
 [: `YAML` á að koma í veg fyrir að `HTML` tengilsins sé breytt í `Markdown`](/i18/qa#H2) .