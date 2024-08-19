# Piè di pagina

Prendiamo ancora come esempio il progetto dimostrativo, il file `.i18n/htm/foot.pug` nella directory `md` definisce il piè di pagina del sito web.

![](https://p.3ti.site/1721286077.avif)

[`pug`](https://pugjs.org) è un linguaggio di template che genera `HTML`.

[➔ Clicca qui per studiare la sintassi di pug](https://pugjs.org)

**Non scrivere `css` e `js` in `foot.pug`**, altrimenti si verificano errori.

Fare riferimento alle seguenti linee, lo stile va scritto nei file `.css` corrispondenti, e l'interazione viene implementata creando componenti web.

## Stile del piè di pagina

Nel progetto dimostrativo, sotto `md/.i18n/htm` ci sono tre file `css`.

* `foot.css`: stili per il piè di pagina
* `import.css`: stili predefiniti per l'intero sito `i18n.site`
* `conf.css`: icone e font per il piè di pagina

### Icon font

Le icone del piè di pagina sono generate tramite un font chiamato `F` creato su iconfont.cn ([versione inglese](https://www.iconfont.cn/?lang=en-us) / [versione cinese](https://www.iconfont.cn/?lang=zh)).

Crea il tuo font icona secondo le tue esigenze e sostituisci la seguente configurazione in `conf.css`:

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Componenti web

Non è possibile scrivere `js` in `foot.pug`; se è necessaria interazione, personalizza i componenti web.

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

## Piè di pagina multilingue

Il codice in `.i18n/htm/foot.pug` è il seguente:

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Qui `${I18N.C}` corrisponde a quanto presente in `en/i18n.yml`:

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Utilizzando `${I18N.xxx}` in questo modo di scrittura, combinato con `i18n.yml`, è possibile ottenere l'internazionalizzazione multilingue del piè di pagina.

Aggiungere `class="a"` ai link per evitare che vengano convertiti in sintassi `Markdown`, vedere:
 [➔ `YAML`: Come evitare che i link `HTML` vengano convertiti in `Markdown`](/i18/qa#H2).