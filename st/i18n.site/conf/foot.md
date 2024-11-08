# Botlaaseng Bo Ikhethileng

E ntse e nka morero oa demo e le mohlala, `.i18n/htm/foot.pug` bukeng ea `md` e hlalosa botlaaseng ba sebaka sa marang-rang.

![](https://p.3ti.site/1721286077.avif)

## Setaele Sa Maoto

Ho na le lifaele tse tharo `css` tlasa `md/.i18n/htm` morerong oa demo.

* `foot.css` :
* `import.css` : `i18n.site` sa sebaka sohle
* `conf.css` :

### Fonte Ea Setšoantšo

Letšoao la botlaaseng le hlahisoa ka ho theha mohala `F` iconfont.cn [mofuta oa Senyesemane](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)).

Ka kopo iketsetse fonte ea hau ea setšoantšo kamoo ho hlokahalang 'me u nkele tlhophiso e latelang ho `conf.css` :

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

Ka kopo u se ke ua bua ka ho toba faele ea fonte ea iconfont.cn hobane e ke ke ea kenngoa ho sebatli sa safari.

## Likarolo Tsa Webo

U ke ke ua ngola `js` ho `foot.pug` Haeba ho hlokahala tšebelisano, ka kopo itloaetse karolo ea tepo.

[Karolo ea tepo](https://www.freecodecamp.org/news/build-your-first-web-component/) e ka hlalosoa ho `md/.i18n/htm/index.js` ebe e sebelisoa ho `foot.pug` .

Ho bonolo ho etsa likarolo tsa tepo, joalo ka `<x-img>` tsa tloaelo0 .

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

## Botlaaseng Ba Lipuo Tse Ngata

Khoutu ho `.i18n/htm/foot.pug` e tjena :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Mona `${I18N.C}` e tsamaellana le `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

U sebelisa `${I18N.xxx}` e ts'oanang le mokhoa ona oa ho ngola, o kopantsoe le `i18n.yml` , o ka fihlella lipuo tse ngata tsa machaba tsa botlaaseng.

Ho eketsa `class="a"` ho sehokelo ke ho thibela sehokelo hore se fetohe ho `MarkDown` Bona :
 [➔ `YAML` : ka thibela joang hore sehokelo `HTML` se fetohe ho `Markdown`](/i18/qa#H2) .