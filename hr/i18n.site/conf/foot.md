# Podnožje

I dalje uzimajući demo projekt kao primjer, `.i18n/htm/foot.pug` u direktoriju `md` definira podnožje web stranice.

![](https://p.3ti.site/1721286077.avif)

[`pug`](https://pugjs.org) je jezik predloška koji generira `HTML` .

[➔ Kliknite ovdje da naučite gramatiku pug](https://pugjs.org)

**Nemojte pisati `css` i `js` u `foot.pug`** , inače će doći do pogreške.

Pogledajte sljedeće, stil je upisan u odgovarajuću `.css` , a interakcija se postiže stvaranjem web komponenti.

## Stil Podnožja

Postoje tri `css` datoteke ispod `md/.i18n/htm` u demo projektu.

* `foot.css` : Stil podnožja
* `import.css` : `i18n.site` stil za cijelu stranicu
* `conf.css` Ikone i fontovi : podnožju

### Font Ikone

Ikona podnožja generira se stvaranjem fonta pod nazivom `F` iconfont.cn ( [engleska verzija](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)).

Po potrebi izradite vlastiti font ikone i zamijenite sljedeću konfiguraciju u `conf.css` :

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

Nemojte izravno spominjati datoteku fonta iconfont.cn jer se ne može učitati u pregledniku safari.

## Web Komponente

Ne možete pisati `js` od `foot.pug` Ako je potrebna interakcija, prilagodite web komponentu.

[Web komponenta](https://www.freecodecamp.org/news/build-your-first-web-component/) se može definirati u `md/.i18n/htm/index.js` i zatim koristiti u `foot.pug` .

Lako je stvoriti web komponente, kao što su prilagođene `<x-img>` .

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

Korištenjem `${I18N.xxx}` slično ovoj metodi pisanja, u kombinaciji s `i18n.yml` , možete postići višejezičnu internacionalizaciju podnožja.

Dodavanje `class="a"` poveznici sprječava pretvaranje veze u `MarkDown` Pogledajte :
 [➔ `YAML` : Kako spriječiti da se link `HTML` pretvori u `Markdown`](/i18/qa#H2) .