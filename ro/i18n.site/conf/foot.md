# Subsol Personalizat

Luând în continuare proiectul demo ca exemplu, `.i18n/htm/foot.pug` din directorul `md` definește subsolul site-ului.

![](https://p.3ti.site/1721286077.avif)

## Stilul Subsol

Există trei fișiere `css` sub `md/.i18n/htm` în proiectul demo.

* `foot.css` : Stilul subsol
* `import.css` : 1Stil `i18n.site` pentru întregul site
* `conf.css` : Pictograme și fonturi de subsol

### Fontul Pictogramei

Pictograma subsol este generată prin crearea unui font numit iconfont.cn ( [versiunea în limba engleză](https://www.iconfont.cn/?lang=en-us) `F` /[版!](https://www.iconfont.cn/?lang=zh) ).

Vă rugăm să creați propriul font pictogramă după cum este necesar și să înlocuiți următoarea configurație cu `conf.css` :

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

Vă rugăm să nu faceți referire directă la fișierul font al iconfont.cn, deoarece nu poate fi încărcat în browserul safari.

## Componente Web

Nu puteți scrie `js` în `foot.pug` Dacă este necesară interacțiunea, vă rugăm să personalizați componenta web.

[O componentă web](https://www.freecodecamp.org/news/build-your-first-web-component/) poate fi definită în `md/.i18n/htm/index.js` și apoi utilizată în `foot.pug` .

Este ușor să creați componente web, cum ar fi `<x-img>` personalizate0 .

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

## Subsol Multilingv

Codul din `.i18n/htm/foot.pug` este următorul :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Aici `${I18N.C}` corespunde cu `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Folosind `${I18N.xxx}` similar cu această metodă de scriere, combinat cu `i18n.yml` , puteți obține internaționalizarea în mai multe limbi a subsolului.

Adăugarea de `class="a"` la link înseamnă a preveni convertirea linkului la `MarkDown` Vezi :
 [➔ `YAML` : Cum să împiedici convertirea linkului `HTML` în `Markdown`](/i18/qa#H2) .