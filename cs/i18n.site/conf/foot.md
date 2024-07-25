# Zápatí

Stále jako příklad uvádíme ukázkový projekt, zápatí webu `.i18n/htm/foot.pug` definováno v adresáři `md`

<img alt="" src="https://p.3ti.site/1721286077.avif">

[`pug`](https://pugjs.org) je jazyk šablon, který generuje `HTML` .

[➔ Kliknutím sem se naučíte gramatiku pug](https://pugjs.org)

**Nepište `css` a `js` `foot.pug`** , jinak dojde k chybám.

Přečtěte si prosím následující, styl je napsán v odpovídajícím `.css` a interakce je dosaženo vytvořením webových komponent.

## Styl Zápatí

V demo `md/.i18n/htm` jsou níže 3 `css` soubory.

* `foot.css` :
* `import.css` : `i18n.site` styl pro celý web
* : `conf.css` a písma

### Písmo Ikony

Ikona zápatí je generována iconfont.cn ( [anglická verze](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) vytvořením písma s názvem `F`

Podle potřeby si vytvořte vlastní písmo ikony a nahraďte : konfiguraci v `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Webové Komponenty

`foot.pug` nelze do něj napsat `js` Pokud je vyžadována interakce, upravte prosím komponentu webové stránky.

Můžete definovat [webovou komponentu](https://www.freecodecamp.org/news/build-your-first-web-component/) v `md/.i18n/htm/index.js` a pak použít komponentu v `foot.pug` .

Je snadné vytvářet webové komponenty, jako jsou vlastní značky `<x-img>`

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

## Vícejazyčné Zápatí

Kód v něm : následující `.i18n/htm/foot.pug`

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

: odpovídající je v `en/i18n.yml` `${I18N.C}`

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Pomocí `${I18N.xxx}` podobného této metodě psaní v kombinaci s `i18n.yml` můžete dosáhnout vícejazyčné internacionalizace zápatí.

: k `MarkDown` `class="a"`
 [: `YAML` zabránit převedení `HTML` odkazu na `Markdown`](/i18/qa#H2) .