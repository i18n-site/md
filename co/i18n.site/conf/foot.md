# Footer

Sempre pigliendu u prughjettu demo cum'è un esempiu, u footer di u situ web `.i18n/htm/foot.pug` definitu in u repertoriu `md`

<img alt="" src="https://p.3ti.site/1721286077.avif">

[`pug`](https://pugjs.org) hè un mudellu di lingua chì genera `HTML` .

[➔ Cliccate quì per amparà a grammatica di pug](https://pugjs.org)

**Ùn scrivite micca `css` è `js` `foot.pug`** , altrimenti ci saranu errori.

Per piacè riferite à i seguenti, u stilu hè scrittu in u currispundente `.css` è l'interazzione hè ottenuta creendu cumpunenti web.

## Stile Di Footer

In u prughjettu `md/.i18n/htm` Ci sò 3 `css` schedarii quì sottu.

* `foot.css` Stile : piè di pagina
* `import.css` : `i18n.site` per tuttu u situ
* `conf.css` Icone è fonti :

### Font D'icona

L'icona di u piè di pagina hè generata da iconfont.cn ( [versione inglese](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) creendu un font chjamatu `F`

Per piacè create u vostru propiu font di icona cum'è necessariu è rimpiazzate : cunfigurazione seguente in `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Cumpunenti Web

Ùn pò micca scrive `js` in questu interazzione, per piacè persunalizà u cumpunente di `foot.pug` pagina web.

Pudete definisce [un cumpunente web](https://www.freecodecamp.org/news/build-your-first-web-component/) `foot.pug` `md/.i18n/htm/index.js`

Hè faciule fà creà cumpunenti web, cum'è tags persunalizati `<x-img>`

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

`.i18n/htm/foot.pug` U codice in questu hè cusì :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

`${I18N.C}` u currispundente hè in `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Aduprendu `${I18N.xxx}` simile à stu metudu di scrittura, cumminatu cù `i18n.yml` , pudete ottene l'internazionalizazione multilingue di u footer.

`class="a"` à u ligame per evità chì u ligame sia cunvertitu in `MarkDown` , vede :
 [: `YAML` impedisce chì `HTML` di u ligame sia cunvertitu in `Markdown`](/i18/qa#H2) .