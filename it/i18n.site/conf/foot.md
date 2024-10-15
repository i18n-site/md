# Piè di pagina

Oltre a ciò, prendendo sempre come esempio il progetto dimostrativo, il file `.i18n/htm/foot.pug` nella directory `md` definisce il piè di pagina del sito.

![](https://p.3ti.site/1721286077.avif)

[`pug`](https://pugjs.org) è un linguaggio di template che genera `HTML`.

[➔ Clicca qui per imparare la sintassi di pug](https://pugjs.org)

**Non scrivere `css` e `js` in `foot.pug`**, altrimenti si verificano errori.

Consultare quanto segue: gli stili vanno scritti nei file `.css` corrispondenti, e l'interazione viene implementata creando componenti web.

## Stile del piè di pagina

Nel progetto dimostrativo, sotto `md/.i18n/htm` ci sono tre file `css`.

* `foot.css`: stili per il piè di pagina
* `import.css`: stili predefiniti per l'intero sito `i18n.site`
* `conf.css`: icone e font per il piè di pagina

### Icon font

L'icona del piè di pagina è generata tramite un font chiamato `F` creato su iconfont.cn ([versione inglese](https://www.iconfont.cn/?lang=en-us) / [versione cinese](https://www.iconfont.cn/?lang=zh)).

Crea il tuo icon font personalizzatosecondo le tue esigenze e sostituisci la seguente configurazione in `conf.css`:

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Componenti web

In `foot.pug` non è possibile scrivere `js`; se è necessaria interazione, crea componenti web personalizzati.

È possibile definire un [componente web](https://www.freecodecamp.org/news/build-your-first-web-component/) in `md/.i18n/htm/index.js` e poi utilizzarlo in `foot.pug`.

Creare un componente web è semplice, ad esempio il tag personalizzato `<x-img>`.

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

## Multilinguismo del piè di pagina

Il codice in `.i18n/htm/foot.pug` è il seguente:

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

`${I18N.C}` qui corrisponde a quanto definito in `en/i18n.yml`:

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Utilizzando una scrittura simile a `${I18N.xxx}`, combinata con `i18n.yml`, è possibile realizzare l'internazionalizzazione multilingue del piè di pagina.

Aggiungere `class="a"` al collegamento impedisce che il collegamento venga convertito in `MarkDown` Vedere :
 [➔ `YAML` : Come evitare che il collegamento `HTML` venga convertito in `Markdown`](/i18/qa#H2) .