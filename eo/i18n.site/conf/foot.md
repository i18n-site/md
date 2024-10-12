# Piedlinio

Ankoraŭ prenante la demo-projekton kiel ekzemplon, `.i18n/htm/foot.pug` en la `md` dosierujo difinas la piedlinion de la retejo.

![](https://p.3ti.site/1721286077.avif)

[`pug`](https://pugjs.org) estas ŝablono lingvo kiu generas `HTML` 's.

[➔ Klaku ĉi tie por lerni la gramatikon de pug](https://pugjs.org)

**Ne skribu `css` kaj `js` en `foot.pug`** , alie estos eraro.

Bonvolu raporti al la sekvanta, la stilo estas skribita en la respondan `.css` , kaj la interago estas atingita kreante retajn komponantojn.

## Stilo De Piedpiedo

Estas tri `css` dosieroj sub `md/.i18n/htm` en la demo-projekto.

* `foot.css` : Pieda stilo
* `import.css` : `i18n.site` stilo por la tuta retejo
* `conf.css` : Piedlinioj kaj tiparoj

### Ikono Tiparo

La piedpiedikono estas generita kreante tiparon nomitan iconfont.cn ( [angla versio](https://www.iconfont.cn/?lang=en-us) `F` /[版 !](https://www.iconfont.cn/?lang=zh) ).

Bonvolu krei vian propran ikontiparo laŭbezone kaj anstataŭigi la sekvan agordon per `conf.css` :

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Retaj Komponantoj

Vi ne povas skribi `js` en `foot.pug` Se interago necesas, bonvolu personecigi la TTT-komponenton.

[TTT-komponento](https://www.freecodecamp.org/news/build-your-first-web-component/) povas esti difinita en `md/.i18n/htm/index.js` kaj tiam uzata en `foot.pug` .

Estas facile krei retajn komponantojn, kiel kutimajn `<x-img>` .

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

## Plurlingva Piedlinio

La kodo en `.i18n/htm/foot.pug` estas jena :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Ĉi tie `${I18N.C}` respondas al `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Uzante `${I18N.xxx}` similan al ĉi tiu skribmetodo, kombinita kun `i18n.yml` , vi povas atingi plurlingvan internaciigon de la piedlinio.

Aldoni `class="a"` al la ligilo estas malhelpi la ligilon esti konvertita al `MarkDown` Vidu :
 [➔ `YAML` : malhelpi ligilon `HTML` esti konvertita al `Markdown`](/i18/qa#H2) .