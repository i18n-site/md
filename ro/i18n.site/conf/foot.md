# Subsol

Tot luând ca exemplu proiectul demo, subsolul site-ului `.i18n/htm/foot.pug` definit în directorul `md`

<img alt="" src="https://p.3ti.site/1721286077.avif">

[`pug`](https://pugjs.org) este un limbaj șablon care generează `HTML` .

[➔ Faceți clic aici pentru a afla gramatica lui pug](https://pugjs.org)

**Nu scrie `css` și `js` `foot.pug`** , altfel vor apărea erori.

Vă rugăm să consultați următoarele, stilul este scris în `.css` iar interacțiunea se realizează prin crearea de componente web.

## Stilul Subsol

În proiectul `md/.i18n/htm` sunt 3 `css` fișiere mai jos.

* `foot.css` : de subsol
* `import.css` `i18n.site` : întregul site
* `conf.css` Pictograme și fonturi :

### Fontul Pictogramei

Pictograma de subsol este generată de iconfont.cn ( [versiunea în engleză](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) crearea unui font numit `F`

Vă rugăm să creați propriul font pictogramă după cum este necesar și să înlocuiți : configurație în `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Componente Web

Nu `foot.pug` poate scrie `js` în el. Dacă este necesară interacțiunea, vă rugăm să personalizați componenta paginii web.

Puteți defini [o componentă web](https://www.freecodecamp.org/news/build-your-first-web-component/) în `md/.i18n/htm/index.js` și apoi utilizați componenta în `foot.pug` .

Este ușor să creați componente web, cum ar fi etichete personalizate `<x-img>`

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

`.i18n/htm/foot.pug` Codul din el este următorul :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Aici `${I18N.C}` Cel corespunzătoare este în `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Folosind `${I18N.xxx}` similar cu această metodă de scriere, combinată cu `i18n.yml` , puteți obține internaționalizarea subsolului în mai multe limbi.

Adăugați `class="a"` la link pentru a evita ca linkul să fie convertit în `MarkDown` , vezi :
 [: `YAML` să preveniți `HTML` linkului să fie convertit în `Markdown`](/i18/qa#H2) .