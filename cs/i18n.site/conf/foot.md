# Přizpůsobené Zápatí

Stále beru demo projekt jako příklad, `.i18n/htm/foot.pug` v adresáři `md` definuje zápatí webu.

![](https://p.3ti.site/1721286077.avif)

## Styl Zápatí

V demo projektu jsou tři `css` soubory pod `md/.i18n/htm` .

* `foot.css` :
* `import.css` : `i18n.site` styl pro celý web
* `conf.css` Ikony : a písma

### Písmo Ikony

Ikona zápatí je generována vytvořením písma `F` iconfont.cn [anglická verze](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)).

Podle potřeby si vytvořte vlastní písmo ikony a nahraďte následující konfiguraci za `conf.css` :

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

Neodkazujte prosím přímo na soubor písma iconfont.cn, protože jej nelze načíst v prohlížeči safari.

## Webové Komponenty

Nemůžete psát `js` ku `foot.pug` Pokud je vyžadována interakce, přizpůsobte webovou komponentu.

[Webová komponenta](https://www.freecodecamp.org/news/build-your-first-web-component/) může být definována v `md/.i18n/htm/index.js` a poté použita v `foot.pug` .

Je snadné vytvářet webové komponenty, jako jsou vlastní `<x-img>` .

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

Kód v `.i18n/htm/foot.pug` je následující :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Zde `${I18N.C}` odpovídá `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Použitím `${I18N.xxx}` podobné této metodě psaní v kombinaci s `i18n.yml` můžete dosáhnout vícejazyčné internacionalizace zápatí.

Přidáním `class="a"` k odkazu zabráníte převedení odkazu na `MarkDown` Viz :
 [➔ `YAML` : zabránit převodu odkazu `HTML` na `Markdown`](/i18/qa#H2) .