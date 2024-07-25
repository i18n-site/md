# Poraštė

Vis dėlto, kaip pavyzdį, demonstracinį projektą, svetainės poraštė `.i18n/htm/foot.pug` apibrėžta kataloge `md`

<img alt="" src="https://p.3ti.site/1721286077.avif">

[`pug`](https://pugjs.org) yra šablono kalba, kuri generuoja `HTML` .

[➔ Spustelėkite čia, kad išmoktumėte gramatiką pug](https://pugjs.org)

**Nerašykite `css` ir `js` `foot.pug`** , kitaip bus klaidų.

Žiūrėkite toliau, stilius parašytas atitinkamu `.css` o sąveika pasiekiama kuriant žiniatinklio komponentus.

## Poraštės Stilius

Demonstraciniame `md/.i18n/htm` yra 3 `css` failai.

* : `foot.css`
* `import.css` `i18n.site` :
* `conf.css` piktogramos ir :

### Piktogramos Šriftas

Poraštės piktogramą sukuria iconfont.cn ( [angliška versija](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) sukuriant šriftą pavadinimu `F`

Jei reikia, sukurkite savo piktogramos šriftą ir pakeiskite : konfigūraciją `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Žiniatinklio Komponentai

`foot.pug` įrašyti `js` Jei reikia sąveikos, tinkinkite tinklalapio komponentą.

Galite apibrėžti `md/.i18n/htm/index.js` [komponentą](https://www.freecodecamp.org/news/build-your-first-web-component/) ir naudoti komponentą `foot.pug` .

Lengva kurti žiniatinklio komponentus, pvz., tinkintas žymas `<x-img>`

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

## Daugiakalbė Poraštė

Jame esantis kodas yra : `.i18n/htm/foot.pug`

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Atitinkamas : `en/i18n.yml` `${I18N.C}`

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

`${I18N.xxx}` panašų į šį rašymo metodą, kartu su `i18n.yml` , galite pasiekti poraštės internacionalizavimą keliomis kalbomis.

`class="a"` prie nuorodos , kad nuoroda nebūtų konvertuojama į `MarkDown` , žr :
 [: `YAML` neleisti nuorodos `HTML` konvertuoti į `Markdown`](/i18/qa#H2) .