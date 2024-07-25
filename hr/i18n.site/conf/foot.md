# Podnožje

I dalje uzimajući demo projekt kao primjer, podnožje web stranice definirano `.i18n/htm/foot.pug` u direktoriju `md`

<img alt="" src="https://p.3ti.site/1721286077.avif">

[`pug`](https://pugjs.org) je jezik predloška koji generira `HTML` .

[➔ Kliknite ovdje da naučite gramatiku pug](https://pugjs.org)

**Nemojte pisati `css` i `js` `foot.pug`** , inače će biti grešaka.

Molimo pogledajte sljedeće, stil je napisan u odgovarajućem `.css` a interakcija se postiže stvaranjem web komponenti.

## Stil Podnožja

U demo `md/.i18n/htm` su 3 `css` datoteke ispod.

* `foot.css` : podnožja
* `import.css` `i18n.site` : za cijelu stranicu
* Ikone i fontovi `conf.css` :

### Font Ikone

Ikona podnožja generirana je iconfont.cn ( [engleska verzija](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) stvaranjem fonta pod nazivom `F`

Po potrebi izradite vlastiti font ikone i zamijenite : konfiguraciju u `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Web Komponente

`foot.pug` ne može pisati `js` ako je potrebna interakcija, prilagodite komponentu web stranice.

Možete definirati [web komponentu](https://www.freecodecamp.org/news/build-your-first-web-component/) u `md/.i18n/htm/index.js` , a zatim koristiti komponentu u `foot.pug` .

Jednostavno je izraditi web komponente, poput prilagođenih oznaka `<x-img>`

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

`${I18N.C}` odgovarajućeg je u `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Korištenjem `${I18N.xxx}` slično ovoj metodi pisanja, u kombinaciji s `i18n.yml` , možete postići višejezičnu internacionalizaciju podnožja.

Dodajte `class="a"` na vezu kako biste izbjegli pretvaranje veze u `MarkDown` , pogledajte :
 [: `YAML` spriječiti da se `HTML` veze pretvori u `Markdown`](/i18/qa#H2) .