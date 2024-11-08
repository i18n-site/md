# Päta

Stále berúc ukážkový projekt ako príklad, `.i18n/htm/foot.pug` v adresári `md` definuje pätu webovej stránky.

![](https://p.3ti.site/1721286077.avif)

[`pug`](https://pugjs.org) je jazyk šablóny, ktorý generuje `HTML` .

[➔ Kliknite sem a naučte sa gramatiku pug](https://pugjs.org)

**Nepíšte `css` a `js` v `foot.pug`** , inak dôjde k chybe.

Prečítajte si nasledujúce informácie, štýl sa zapíše do zodpovedajúcej `.css` a interakcia sa dosiahne vytvorením webových komponentov.

## Štýl Päty

V demo projekte sú tri `css` súbory pod `md/.i18n/htm` .

* `foot.css` :
* `import.css` : `i18n.site` pre celú stránku
* `conf.css` : päty a písma

### Písmo Ikony

Ikona päty je vygenerovaná vytvorením písma `F` iconfont.cn [anglická verzia](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)).

Podľa potreby si vytvorte vlastné písmo ikony a nahraďte nasledujúcu konfiguráciu za `conf.css` :

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

Neodkazujte priamo na súbor písma iconfont.cn, pretože ho nemožno načítať do prehliadača safari.

## Web Komponenty

Nemôžete písať `js` ku `foot.pug` Ak je potrebná interakcia, prispôsobte webový komponent.

[Webový komponent](https://www.freecodecamp.org/news/build-your-first-web-component/) môže byť definovaný v `md/.i18n/htm/index.js` a potom použitý v `foot.pug` .

Vytváranie webových komponentov, ako sú napríklad vlastné `<x-img>` , je jednoduché.

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

## Viacjazyčná Päta

Kód v `.i18n/htm/foot.pug` je nasledovný :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Tu `${I18N.C}` zodpovedá `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Použitím `${I18N.xxx}` podobnej tejto metóde písania v kombinácii s `i18n.yml` môžete dosiahnuť internacionalizáciu päty vo viacerých jazykoch.

Pridaním `class="a"` k odkazu zabránite konverzii odkazu na `MarkDown` Pozri :
 [➔ `YAML` : zabrániť konverzii odkazu `HTML` na `Markdown`](/i18/qa#H2) .