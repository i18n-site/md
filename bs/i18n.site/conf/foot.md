# Footer

Uzimajući za primjer demo projekat, podnožje web stranice `.i18n/htm/foot.pug` definirano u direktoriju `md`

<img alt="" src="https://p.3ti.site/1721286077.avif">

[`pug`](https://pugjs.org) je jezik šablona koji generiše `HTML` !

[➔ Kliknite ovdje da naučite gramatiku pug](https://pugjs.org)

**Nemojte pisati `css` i `js` `foot.pug`** , inače će biti grešaka.

Molimo pogledajte sljedeće, stil je napisan u odgovarajućem `.css` a interakcija se postiže kreiranjem web komponenti.

## Stil Podnožja

U demo `md/.i18n/htm` postoje 3 `css` fajla ispod.

* `foot.css` :
* `i18n.site` style za : stranicu `import.css`
* Ikone i fontovi : podnožju `conf.css`

### Font Ikone

Ikona podnožja je iconfont.cn ( [engleska verzija](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) kreiranjem fonta pod nazivom `F`

Po potrebi kreirajte vlastiti font ikone i zamijenite : konfiguraciju u `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Web Komponente

Ne `foot.pug` upisati `js` ako je potrebna interakcija, prilagodite komponentu web stranice.

Možete definirati [web komponentu](https://www.freecodecamp.org/news/build-your-first-web-component/) u `md/.i18n/htm/index.js` a zatim koristiti komponentu u `foot.pug` .

Lako je kreirati web komponente, poput prilagođenih oznaka `<x-img>`

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

Kod u njemu : sljedeći `.i18n/htm/foot.pug`

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

`${I18N.C}` je odgovarajući u `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Koristeći `${I18N.xxx}` sličan ovom metodu pisanja, u kombinaciji sa `i18n.yml` , možete postići višejezičnu internacionalizaciju podnožja.

`class="a"` linku da biste izbjegli pretvaranje veze u `MarkDown` , pogledajte :
 [: `YAML` spriječiti da se `HTML` linka pretvori u `Markdown`](/i18/qa#H2) .