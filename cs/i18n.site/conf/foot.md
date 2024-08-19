# Zápatí

Přesto vezmu ukázkový projekt jako příklad, soubor `.i18n/htm/foot.pug` v adresáři `md` definuje zápatí webu.

![](https://p.3ti.site/1721286077.avif)

[`pug`](https://pugjs.org) je šablony jazyk, který generuje `HTML`.

[➔ Klikněte zde pro naučení gramatiky pug](https://pugjs.org)

**Nezapisujte `css` a `js` do `foot.pug`**, jinak dojde k chybě.

Prosím, odkazujte na následující text, styl je zapsán v odpovídajícím `.css` souboru a interakce je dosažena vytvořením webových komponent.

## Styl zápatí

V ukázkovém projektu jsou tři `css` soubory v adresáři `md/.i18n/htm`.

* `foot.css`: styl zápatí
* `import.css`: výchozí styl pro celý web `i18n.site`
* `conf.css`: ikony a písma zápatí

### Ikony písma

Ikony zápatí jsou vytvořeny pomocí generování písma `F` na iconfont.cn ([anglická verze](https://www.iconfont.cn/?lang=en-us) / [česká verze](https://www.iconfont.cn/?lang=zh)).

Podle potřeby si vytvořte vlastní ikonové písmo a nahraďte následující konfiguraci v `conf.css`:

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Webové komponenty

`foot.pug` neobsahuje `js`, pokud potřebujete interakci, vytvořte vlastní webovou komponentu.

[Webová komponenta](https://www.freecodecamp.org/news/build-your-first-web-component/) lze definovat v `md/.i18n/htm/index.js` a následně využít v `foot.pug`.

Vytvoření webové komponenty je snadné, například vlastní tag `<x-img>`.

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

## Vícejazyčné zápatí

Kód v `.i18n/htm/foot.pug` vypadá takto:

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Zde `${I18N.C}` odpovídá tomu, co je v `en/i18n.yml`:

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Použitím `${I18N.xxx}` podobným způsobem psaní, spolu s `i18n.yml`, můžete dosáhnout vícejazyčné internacionalizace zápatí.

Přidáním `class="a"` k odkazu se zabrání jeho převedení na formát `Markdown`. Viz:
 [➔ `YAML`: Jak zabránit převodu odkazu `HTML` na `Markdown`](/i18/qa#H2).