# Footer

Mbola maka ny tetikasa demo ho ohatra, ny `.i18n/htm/foot.pug` amin'ny lahatahiry `md` dia mamaritra ny tongotry ny tranokala.

![](https://p.3ti.site/1721286077.avif)

[`pug`](https://pugjs.org) dia fiteny môdely izay miteraka `HTML` .

[➔ Tsindrio eto raha te hianatra ny fitsipi-pitenenana pug](https://pugjs.org)

**Aza manoratra `css` sy `js` amin'ny `foot.pug`** , raha tsy izany dia hisy hadisoana.

Azafady, jereo ity manaraka ity, nosoratana ao amin'ny `.css` mifanaraka amin'izany ny fomba, ary ny fifandraisana dia vita amin'ny famoronana singa web.

## Style Footer

Misy rakitra `css` telo eo ambanin'ny `md/.i18n/htm` ao amin'ny tetikasa demo.

* `foot.css` :
* `import.css` : 1 Fomba `i18n.site` ho an'ny tranokala manontolo
* `conf.css` :

### Endri-Tsoratra Kisary

Ny kisary footer dia noforonina tamin'ny famoronana endritsoratra antsoina `F` iconfont.cn [dikan-teny anglisy](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)).

Mamorona endritsoratra kisary anao manokana raha ilaina ary soloy amin'ny `conf.css` ity config manaraka ity :

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

Aza asiana reference mivantana amin'ny rakitra iconfont.cn satria tsy azo alaina amin'ny navigateur Safari.

## Web Singa

Tsy afaka manoratra `js` amin'ny `foot.pug` ianao. Raha ilaina ny fifampiraharahana dia amboary azafady ny singa web.

[Ny singa web](https://www.freecodecamp.org/news/build-your-first-web-component/) dia azo faritana amin'ny `md/.i18n/htm/index.js` ary avy eo ampiasaina amin'ny `foot.pug` .

Mora ny mamorona singa amin'ny tranonkala, toy ny custom `<x-img>` .

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

## Footer Amin'ny Fiteny Maro

Ny kaody ao amin'ny `.i18n/htm/foot.pug` dia toy izao manaraka izao :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Eto `${I18N.C}` dia mifanitsy amin'ny `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Amin'ny fampiasana `${I18N.xxx}` mitovitovy amin'ity fomba fanoratana ity, miaraka amin'ny `i18n.yml` , azonao atao ny manatratra ny iraisam-pirenena amin'ny fiteny maro ny footer.

Ny fampidirana `class="a"` amin'ny rohy dia ny hisakanana ny rohy tsy hiova ho `MarkDown` Jereo :
 [➔ `YAML` : Ahoana no hisorohana ny rohy `HTML` tsy hiova ho `Markdown`](/i18/qa#H2) .