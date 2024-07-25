# Peu De Pàgina

Encara prenent com a exemple el projecte de demostració, el peu de pàgina del lloc web `.i18n/htm/foot.pug` defineix al directori `md`

<img alt="" src="https://p.3ti.site/1721286077.avif">

[`pug`](https://pugjs.org) és un llenguatge de plantilla que genera `HTML` .

[➔ Feu clic aquí per aprendre la gramàtica de pug](https://pugjs.org)

**No escriviu `css` `js` `foot.pug`** , en cas contrari hi haurà errors.

Si us plau, consulteu el següent, l'estil s'escriu en el corresponent `.css` i la interacció s'aconsegueix creant components web.

## Estil Peu De Pàgina

Al projecte de `md/.i18n/htm` hi ha 3 `css` fitxers a continuació.

* `foot.css` Estil : peu de pàgina
* `import.css` : `i18n.site` per a tot el lloc
* `conf.css` Icones i tipus de lletra :

### Font D'icona

La icona de peu de pàgina es genera mitjançant iconfont.cn ( [versió en anglès](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) creant un tipus de lletra anomenat `F`

Si us plau, creeu el vostre propi tipus de lletra d'icona segons sigui necessari i substituïu : configuració següent a `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Components Web

`foot.pug` hi podeu escriure `js` . Si cal interaccionar, personalitzeu el component de la pàgina web.

Podeu definir [un component web](https://www.freecodecamp.org/news/build-your-first-web-component/) a `md/.i18n/htm/index.js` i després utilitzar el component a `foot.pug` .

És fàcil crear components web, com ara etiquetes personalitzades `<x-img>`

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

## Peu De Pàgina Multilingüe

`.i18n/htm/foot.pug` El codi que hi ha és el següent :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

`${I18N.C}` el corresponent és a `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Utilitzant `${I18N.xxx}` similar a aquest mètode d'escriptura, combinat amb `i18n.yml` , podeu aconseguir la internacionalització del peu de pàgina en diversos idiomes.

Afegiu `class="a"` a l'enllaç per evitar que l'enllaç es converteixi a `MarkDown` , mireu :
 [: `YAML` evitar que `HTML` de l'enllaç es converteixi a `Markdown`](/i18/qa#H2) .