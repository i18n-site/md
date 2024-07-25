# Piè Di Pagina

Sempre prendendo come esempio il progetto demo, il footer del sito web `.i18n/htm/foot.pug` definito nella directory `md` .

<img alt="" src="https://p.3ti.site/1721286077.avif">

[`pug`](https://pugjs.org) è un linguaggio modello che genera `HTML` .

[➔ Clicca qui per imparare la grammatica di pug](https://pugjs.org)

**Non scrivere `css` e `js` in `foot.pug`** , altrimenti si verificheranno errori.

Si prega di fare riferimento a quanto segue, lo stile è scritto nel corrispondente `.css` e l'interazione si ottiene creando componenti web.

## Stile Piè Di Pagina

Nel progetto `md/.i18n/htm` ci sono 3 `css` file qui sotto.

* `foot.css` : piè di pagina
* `import.css` : #Stile `i18n.site` per l'intero sito
* `conf.css` Icone e caratteri : piè di pagina

### Carattere Dell'icona

L'icona del piè di pagina è generata da iconfont.cn ( [versione inglese](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) creando un carattere denominato `F`

Crea il tuo carattere di icona secondo necessità e sostituisci : seguente configurazione in `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Componenti Web

`foot.pug` non è possibile scrivere `js` al suo interno. Se è richiesta l'interazione, personalizzare il componente della pagina Web.

È possibile definire [un componente Web](https://www.freecodecamp.org/news/build-your-first-web-component/) in `md/.i18n/htm/index.js` e quindi utilizzare il componente in `foot.pug` .

È facile creare componenti web, come tag personalizzati `<x-img>`

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

## Piè Di Pagina Multilingue

`.i18n/htm/foot.pug` Il codice in esso contenuto è il seguente :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Ecco `${I18N.C}` Quello corrispondente è in `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Utilizzando `${I18N.xxx}` simile a questo metodo di scrittura, combinato con `i18n.yml` , puoi ottenere l'internazionalizzazione multilingue del piè di pagina.

Aggiungi `class="a"` al collegamento per evitare che il collegamento venga convertito in `MarkDown` , vedi :
 [: `YAML` evitare che `HTML` del collegamento venga convertito in `Markdown`](/i18/qa#H2) .