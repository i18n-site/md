# Piè Di Pagina Personalizzato

Sempre prendendo come esempio il progetto demo, `.i18n/htm/foot.pug` nella directory `md` definisce il footer del sito web.

![](https://p.3ti.site/1721286077.avif)

## Stile Piè Di Pagina

Ci sono tre file `css` sotto `md/.i18n/htm` nel progetto demo.

* `foot.css` : Stile piè di pagina
* `import.css` : 1Stile `i18n.site` per l'intero sito
* `conf.css` : Icone e caratteri del piè di pagina

### Carattere Dell'icona

L'icona del piè di pagina viene generata creando un carattere denominato `F` iconfont.cn ( [versione inglese](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)).

Crea il tuo carattere di icona secondo necessità e sostituisci la seguente configurazione in `conf.css` :

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

Si prega di non fare riferimento direttamente al file del carattere di iconfont.cn perché non può essere caricato sul browser Safari.

## Componenti Web

Non è possibile scrivere `js` in `foot.pug` Se è richiesta l'interazione, personalizzare il componente web.

[Un componente web](https://www.freecodecamp.org/news/build-your-first-web-component/) può essere definito in `md/.i18n/htm/index.js` e quindi utilizzato in `foot.pug` .

È facile creare componenti Web, come `<x-img>` personalizzati0 .

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

Il codice in `.i18n/htm/foot.pug` è il seguente :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Qui `${I18N.C}` corrisponde a `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Utilizzando `${I18N.xxx}` simile a questo metodo di scrittura, combinato con `i18n.yml` , puoi ottenere l'internazionalizzazione multilingue del footer.

Aggiungere `class="a"` al collegamento impedisce che il collegamento venga convertito in `MarkDown` Vedere :
 [➔ `YAML` : Come evitare che il collegamento `HTML` venga convertito in `Markdown`](/i18/qa#H2) .