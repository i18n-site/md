# Prilagođeno Podnožje

Uzimajući za primjer demo projekat, `.i18n/htm/foot.pug` u direktoriju `md` definira podnožje web stranice.

![](https://p.3ti.site/1721286077.avif)

## Stil Podnožja

U demo projektu postoje tri `css` fajla ispod `md/.i18n/htm` .

* `foot.css` :
* `import.css` : `i18n.site` za cijelu stranicu
* `conf.css` ikone i fontovi : podnožju

### Font Ikone

Ikona podnožja je generisana kreiranjem fonta `F` iconfont.cn [engleska verzija](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)).

Po potrebi kreirajte vlastiti font ikone i zamijenite sljedeću konfiguraciju u `conf.css` :

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

Nemojte direktno upućivati na datoteku fonta iconfont.cn jer se ne može učitati u safari pretraživač.

## Web Komponente

Ne možete pisati `js` u `foot.pug` Ako je potrebna interakcija, prilagodite web komponentu.

[Web komponenta](https://www.freecodecamp.org/news/build-your-first-web-component/) se može definirati u `md/.i18n/htm/index.js` , a zatim koristiti u `foot.pug` .

Lako je kreirati web komponente, kao što su prilagođene `<x-img>` .

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

## Višejezično Podnožje

Kod u `.i18n/htm/foot.pug` je sljedeći :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Ovdje `${I18N.C}` odgovara `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Koristeći `${I18N.xxx}` sličan ovom metodu pisanja, u kombinaciji sa `i18n.yml` , možete postići višejezičnu internacionalizaciju podnožja.

Dodavanje `class="a"` linku je sprečavanje konvertovanja veze u `MarkDown` Pogledajte :
 [➔ `YAML` Kako spriječiti da se link `HTML` pretvori `Markdown` :](/i18/qa#H2) !