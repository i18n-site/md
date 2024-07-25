# Päta

Aj keď ako príklad použijeme demo projekt, päta webovej stránky `.i18n/htm/foot.pug` definovaná v adresári `md`

<img alt="" src="https://p.3ti.site/1721286077.avif">

[`pug`](https://pugjs.org) je jazyk šablóny, ktorý generuje `HTML` .

[➔ Kliknite sem a naučte sa gramatiku pug](https://pugjs.org)

**Nepíšte `css` `js` `foot.pug`** , inak sa vyskytnú chyby.

Pozrite si prosím nasledovné, štýl je napísaný v zodpovedajúcom `.css` a interakcia sa dosiahne vytvorením webových komponentov.

## Štýl Päty

V demo `md/.i18n/htm` sú nižšie 3 `css` súbory.

* Štýl : `foot.css`
* `import.css` : `i18n.site` štýl pre celú stránku
* Ikony päty a : `conf.css`

### Písmo Ikony

Ikona päty je vygenerovaná iconfont.cn ( [anglická verzia](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) vytvorením písma s názvom `F`

Podľa potreby si vytvorte vlastné písmo ikony a nahraďte : konfiguráciu v `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Web Komponenty

`foot.pug` nemôže napísať `js` Ak je potrebná interakcia, prispôsobte komponent webovej stránky.

Môžete definovať [webový komponent](https://www.freecodecamp.org/news/build-your-first-web-component/) v `md/.i18n/htm/index.js` a potom použiť komponent v `foot.pug` .

Je ľahké vytvárať webové komponenty, ako sú vlastné značky `<x-img>`

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

Kód v ňom je : `.i18n/htm/foot.pug`

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Zodpovedajúci : v `en/i18n.yml` `${I18N.C}`

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Použitím `${I18N.xxx}` podobnej tejto metóde písania v kombinácii s `i18n.yml` môžete dosiahnuť internacionalizáciu päty vo viacerých jazykoch.

Pridajte `class="a"` k odkazu, aby ste zabránili konverzii odkazu na `MarkDown` , :
 [: `YAML` zabrániť konverzii `HTML` odkazu na `Markdown`](/i18/qa#H2) .