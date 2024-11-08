# Pertsonalizatutako Orri-Oina

Demo proiektua adibide gisa hartuta, `md` direktorioko `.i18n/htm/foot.pug` webgunearen oina definitzen du.

![](https://p.3ti.site/1721286077.avif)

## Oinaren Estiloa

Demo proiektuan hiru `css` fitxategi daude `md/.i18n/htm` azpian.

* `foot.css` : Oinaren estiloa
* `import.css` : 1Gune osorako estilo `i18n.site`
* `conf.css` : Oinaren ikonoak eta letra-tipoak

### Ikonoaren Letra-Tipoa

Oinaren ikonoa iconfont.cn izeneko letra `F` tipoa sortuz ( [ingelesezko bertsioa](https://www.iconfont.cn/?lang=en-us) /[中文版 !](https://www.iconfont.cn/?lang=zh) ).

Mesedez, sortu zure ikonoaren letra-tipoa behar den moduan eta ordezkatu hurrengo konfigurazioa `conf.css` -n :

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

Mesedez, ez ezazu zuzenean erreferentzia iconfont.cn letra-fitxategia safari arakatzailean kargatu ezin delako.

## Web Osagaiak

Ezin duzu `js` `foot.pug` idatzi. Elkarreragina beharrezkoa bada, pertsonalizatu web osagaia.

[Web-osagai bat](https://www.freecodecamp.org/news/build-your-first-web-component/) `md/.i18n/htm/index.js` -n defini daiteke eta gero `foot.pug` -ean erabil daiteke.

Erraza da web osagaiak sortzea, adibidez, `<x-img>` pertsonalizatuak0 .

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

`.i18n/htm/foot.pug` ko kodea honako hau da :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Hemen `${I18N.C}` `en/i18n.yml` dagokio :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Idazteko metodo honen antzeko `${I18N.xxx}` erabiliz, `i18n.yml` konbinatuta, oinaren hizkuntza anitzeko nazioartekotzea lor dezakezu.

Estekari `class="a"` gehitzea esteka `MarkDown` bihurtzea ekiditeko da. Ikus :
 [➔ `YAML` : Nola saihestu `HTML` lotura `Markdown` bihurtzea](/i18/qa#H2) .