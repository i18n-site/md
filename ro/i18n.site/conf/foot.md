# Subsol

Totuși, luând exemplul unui proiect de demonstrație, fișierul `.i18n/htm/foot.pug` din directorul `md` definește subsolul site-ului.

![](https://p.3ti.site/1721286077.avif)

[`pug`](https://pugjs.org) este un limbaj de șabloane care generează `HTML`.

[➔ Faceți clic aici pentru a învăța gramatica pug](https://pugjs.org)

**Nu scrieți `css` și `js` în `foot.pug`**, altfel vor apărea erori.

Consultați următoarele, stilurile sunt scrise în fișierele `.css` corespunzătoare, iar interacțiunile sunt implementate prin crearea de componente web.

## Stilul subsolului

În proiectul de demonstrație, există trei fișiere `css` în directorul `md/.i18n/htm`.

* `foot.css`: stilul subsolului
* `import.css`: stilurile implicite pentru întregul site `i18n.site`
* `conf.css`: iconuri și fonturi pentru subsol

### Iconuri de font

Iconurile din subsol sunt generate prin crearea unui font numit `F` pe iconfont.cn ([versiunea în engleză](https://www.iconfont.cn/?lang=en-us) / [versiunea în chineză](https://www.iconfont.cn/?lang=zh)).

Creați-vă propriile iconuri de font după cum este necesar și înlocuiți următoarele configurări în `conf.css`:

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Componente web

`foot.pug` nu permite scrierea de `js`; dacă aveți nevoie de interacțiune, personalizați componente web.

Definiți [componente web](https://www.freecodecamp.org/news/build-your-first-web-component/) în `md/.i18n/htm/index.js` și folosiți-le apoi în `foot.pug`.

Crearea componentelor web este simplă, de exemplu, eticheta personalizată `<x-img>`.

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

## Subsolul în mai multe limbi

Codul din `.i18n/htm/foot.pug` este următorul:

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Aici `${I18N.C}` corespunde cu ceea ce este în `en/i18n.yml`:

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Folosind `${I18N.xxx}` în acest mod de scriere, combinat cu `i18n.yml`, puteți realiza internaționalizarea subsolului în mai multe limbi.

Adăugarea de `class="a"` la linkuri este pentru a preveni conversia linkurilor în format `Markdown`; consultați:
 [➔ `YAML`: Cum să preveniți conversia linkurilor `HTML` în `Markdown`](/i18/qa#H2).