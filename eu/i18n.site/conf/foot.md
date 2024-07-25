# Oina

Demo-proiektua adibide gisa hartuta, webgunearen orri-oina `md` zehaztuta `.i18n/htm/foot.pug` .

<img alt="" src="https://p.3ti.site/1721286077.avif">

[`pug`](https://pugjs.org) `HTML` sortzen duen txantiloi-lengoaia da.

[➔ Egin klik hemen gramatika ikasteko pug](https://pugjs.org)

**Ez idatzi `css` `js` `foot.pug`** , bestela akatsak egongo dira.

Mesedez, ikusi honako hau, estiloa dagokion `.css` -an idatzita dago eta interakzioa web osagaiak sortuz lortzen da.

## Oinaren Estiloa

Demo `md/.i18n/htm` 3 `css` fitxategi daude azpian.

* `foot.css` Oinaren :
* `import.css` : `i18n.site` gune osorako
* `conf.css` Oinaren ikonoak eta letra : tipoak

### Ikonoaren Letra-Tipoa

Oinaren ikonoa iconfont.cn ( [ingelesezko bertsioa](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) izeneko letra-tipoa sortu da `F`

Mesedez, sortu zure ikonoaren letra-tipoa behar den moduan eta ordezkatu : konfigurazioa hemen `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Web Osagaiak

`foot.pug` Ezin da `js` idatzi bertan interakzioa beharrezkoa bada, pertsonalizatu web-orriko osagaia.

Web `md/.i18n/htm/index.js` [osagai bat](https://www.freecodecamp.org/news/build-your-first-web-component/) defini dezakezu eta ondoren osagaia `foot.pug` -n erabili.

Erraza da web osagaiak sortzea, etiketa pertsonalizatuak adibidez `<x-img>`

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

## Oin Eleanitza

`.i18n/htm/foot.pug` Bertan dagoen kodea honakoa da :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Hemen dago dagokiona `en/i18n.yml` : `${I18N.C}`

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Idazteko `${I18N.xxx}` honen antzekoa erabiliz, `i18n.yml` -rekin konbinatuta, oinaren hizkuntza anitzeko nazioartekotzea lor dezakezu.

Gehitu `class="a"` estekan esteka `MarkDown` bihurtzea saihesteko , ikusi :
 [: `YAML` saihestu estekaren `HTML` `Markdown` -ra bihurtzea](/i18/qa#H2) .