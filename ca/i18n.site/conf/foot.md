# Peu De Pàgina

Encara prenent el projecte de demostració com a exemple, `.i18n/htm/foot.pug` al directori `md` defineix el peu de pàgina del lloc web.

![](https://p.3ti.site/1721286077.avif)

[`pug`](https://pugjs.org) és un llenguatge de plantilla que genera `HTML` .

[➔ Feu clic aquí per aprendre la gramàtica de pug](https://pugjs.org)

**No escriviu `css` i `js` en `foot.pug`** , en cas contrari hi haurà un error.

Consulteu el següent, l'estil s'escriu al `.css` corresponent i la interacció s'aconsegueix creant components web.

## Estil Peu De Pàgina

Hi ha tres fitxers `css` sota `md/.i18n/htm` al projecte de demostració.

* `foot.css` : Estil de peu de pàgina
* `import.css` : 1Estil `i18n.site` per a tot el lloc
* `conf.css` : Icones i tipus de lletra de peu

### Font D'icona

La icona de peu de pàgina es genera creant un tipus de lletra anomenat iconfont.cn ( [versió en anglès](https://www.iconfont.cn/?lang=en-us) `F` /[版](https://www.iconfont.cn/?lang=zh)).

Si us plau, creeu el vostre propi tipus de lletra d'icona segons sigui necessari i substituïu la configuració següent per `conf.css` :

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

Si us plau, no feu referència directament al fitxer de tipus de lletra de iconfont.cn perquè no es pot carregar al navegador Safari.

## Components Web

No podeu escriure `js` en `foot.pug` Si cal interacció, personalitzeu el component web.

[Un component web](https://www.freecodecamp.org/news/build-your-first-web-component/) es pot definir en `md/.i18n/htm/index.js` i després utilitzar-lo en `foot.pug` .

És fàcil crear components web, com ara `<x-img>` personalitzades0 .

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

El codi en `.i18n/htm/foot.pug` és el següent :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Aquí `${I18N.C}` correspon a `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Utilitzant `${I18N.xxx}` similar a aquest mètode d'escriptura, combinat amb `i18n.yml` , podeu aconseguir la internacionalització del peu de pàgina en diversos idiomes.

Afegir `class="a"` a l'enllaç és evitar que l'enllaç es converteixi a `MarkDown` Vegeu :
 [➔ `YAML` : Com evitar que l'enllaç `HTML` es converteixi en `Markdown`](/i18/qa#H2) .