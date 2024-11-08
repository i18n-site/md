# Sérsniðinn Fótur

Enn að taka kynningarverkefnið sem dæmi, `.i18n/htm/foot.pug` í `md` skránni skilgreinir fótinn á vefsíðunni.

![](https://p.3ti.site/1721286077.avif)

## Fótastíll

Það eru þrjár `css` skrár undir `md/.i18n/htm` í kynningarverkefninu.

* `foot.css` : Fótastíll
* `import.css` : `i18n.site` stíll fyrir alla síðuna
* `conf.css` : Fót tákn og leturgerðir

### Tákn Leturgerð

Fótatáknið er búið til með því að búa til leturgerð `F` iconfont.cn [Ensk útgáfa](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)).

Vinsamlegast búðu til þitt eigið táknleturgerð eftir þörfum og skiptu um eftirfarandi uppsetningu í `conf.css` :

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

Vinsamlegast vísaðu ekki beint í leturgerðina á iconfont.cn vegna þess að það er ekki hægt að hlaða henni í Safari vafranum.

## Vefhlutir

Þú getur ekki skrifað `js` á móti `foot.pug` Ef þörf er á samskiptum, vinsamlegast sérsniðið vefhlutann.

Hægt er að skilgreina [vefhluta](https://www.freecodecamp.org/news/build-your-first-web-component/) í `md/.i18n/htm/index.js` og síðan nota í `foot.pug` .

Það er auðvelt að búa til vefhluta, eins og sérsniðin `<x-img>` .

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

Kóðinn í `.i18n/htm/foot.pug` er sem hér segir :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Hér samsvarar `${I18N.C}` `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Með því að nota `${I18N.xxx}` svipað þessari ritunaraðferð, ásamt `i18n.yml` , geturðu náð mörgum tungumálum alþjóðavæðingu fótsins.

Að bæta `class="a"` við hlekkinn er til að koma í veg fyrir að hlekknum sé breytt í `MarkDown` Sjá :
 [➔ `YAML` Hvernig á að koma í veg fyrir : hlekk `HTML` sé breytt í `Markdown`](/i18/qa#H2) .