# Piedlinio

Ankoraŭ prenante la demo-projekton kiel ekzemplon, la piedlinio de la retejo `.i18n/htm/foot.pug` difinita en la dosierujo `md`

<img alt="" src="https://p.3ti.site/1721286077.avif">

[`pug`](https://pugjs.org) estas ŝablono lingvo kiu generas `HTML` .

[➔ Klaku ĉi tie por lerni la gramatikon de pug](https://pugjs.org)

**Ne skribu `css` kaj `js` `foot.pug`** , alie estos eraroj !

Bonvolu raporti al la sekvanta, la stilo estas skribita en la responda `.css` kaj la interago estas atingita kreante retajn komponantojn.

## Stilo De Piedpiedo

En la demo- `md/.i18n/htm` Estas 3 `css` dosieroj sube.

* `foot.css` Piedo :
* `import.css` : `i18n.site` stilo por la tuta retejo
* `conf.css` Piedlinioj : tiparoj

### Ikono Tiparo

La piedpido / piktogramo [estas](https://www.iconfont.cn/?lang=zh) `F` [per](https://www.iconfont.cn/?lang=en-us) iconfont.cn

Bonvolu krei vian propran ikon tiparon laŭbezone kaj anstataŭigi : sekvan agordon en `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Retaj Komponantoj

`foot.pug` povas skribi `js` en ĝi.

Vi povas difini [TTT-komponenton](https://www.freecodecamp.org/news/build-your-first-web-component/) `md/.i18n/htm/index.js` kaj poste uzi la komponenton en `foot.pug` .

Estas facile krei retajn komponantojn, kiel kutimajn etikedojn `<x-img>`

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

`.i18n/htm/foot.pug` La kodo en ĝi estas jena :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Jen `${I18N.C}` La responda estas en `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Uzante `${I18N.xxx}` simile al ĉi tiu skribmetodo, kombinita kun `i18n.yml` , vi povas atingi plurlingvan internaciigon de la piedlinio.

`class="a"` al la ligilo por eviti ke la ligilo estu konvertita al `MarkDown` , vidu :
 [: `YAML` malhelpi `HTML` de la ligo esti konvertita al `Markdown`](/i18/qa#H2) .