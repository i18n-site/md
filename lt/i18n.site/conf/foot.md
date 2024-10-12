# Poraštė

Vis dar kaip pavyzdį imant demonstracinį projektą, `.i18n/htm/foot.pug` `md` kataloge apibrėžia svetainės poraštę.

![](https://p.3ti.site/1721286077.avif)

[`pug`](https://pugjs.org) yra šablono kalba, kuri generuoja `HTML` .

[➔ Spustelėkite čia, kad išmoktumėte gramatiką pug](https://pugjs.org)

**Nerašykite `css` ir `js` į `foot.pug`** , kitaip bus klaida.

Žr. toliau, stilius įrašomas į atitinkamą `.css` , o sąveika pasiekiama kuriant žiniatinklio komponentus.

## Poraštės Stilius

Demonstraciniame projekte yra trys `css` failai po `md/.i18n/htm` .

* `foot.css` poraštės :
* `import.css` : `i18n.site` svetainės stilius
* `conf.css` : piktogramos ir šriftai

### Piktogramos Šriftas

Poraštės piktograma sugeneruojama sukūrus šriftą pavadinimu iconfont.cn `F` [angliška versija](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)).

Jei reikia, sukurkite savo piktogramos šriftą ir pakeiskite šią konfigūraciją į `conf.css` :

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Žiniatinklio Komponentai

Negalite parašyti `js` iš `foot.pug` Jei reikia sąveikos, tinkinkite žiniatinklio komponentą.

[Žiniatinklio komponentas](https://www.freecodecamp.org/news/build-your-first-web-component/) gali būti apibrėžtas `md/.i18n/htm/index.js` ir naudoti `foot.pug` .

Nesunku sukurti žiniatinklio komponentus, pvz., tinkintas `<x-img>` .

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

Kodas `.i18n/htm/foot.pug` yra toks :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Čia `${I18N.C}` atitinka `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Naudodami `${I18N.xxx}` panašų į šį rašymo būdą, kartu su `i18n.yml` , galite pasiekti poraštės internacionalizavimą keliomis kalbomis.

Prie nuorodos pridėjus `class="a"` , neleisite nuorodos konvertuoti į `MarkDown` Žiūrėkite :
 [➔ `YAML` : neleisti `HTML` nuorodos konvertuoti į `Markdown`](/i18/qa#H2) .