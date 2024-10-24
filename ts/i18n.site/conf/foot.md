# Xihloko Xa Le Hansi

Still taking the demo project as a example, `.i18n/htm/foot.pug` eka `md` directory yi hlamusela xiphemu xa le hansi xa webusayiti.

![](https://p.3ti.site/1721286077.avif)

[`pug`](https://pugjs.org) i ririmi ra xifaniso lexi humesaka `HTML` 's.

[➔ Click laha ku dyondza ririmi ra pug](https://pugjs.org)

**U nga tsali `css` na `js` eka `foot.pug`** , handle ka sweswo ku ta va na xihoxo.

Hi kombela u languta eka leswi landzelaka, xitayili xi tsariwile eka `.css` leyi fambelanaka, naswona ku tirhisana ku fikeleriwa hi ku tumbuluxa swiphemu swa webu.

## Xitayili Xa Le Hansi

Kuna tifayela tinharhu `css` ehansi ka `md/.i18n/htm` eka phurojeke ya demo.

* `foot.css` : Xitayili xa le hansi
* `import.css` : `i18n.site` xa sayiti hinkwayo
* `conf.css` : Swifaniso swa le hansi na tifonto

### Fonto Ya Xifaniso

Xifaniso xa le hansi xi endliwa hi ku tumbuluxa fonto leyi vuriwaka `F` iconfont.cn ( [English version](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)).

Hi kombela u tiendlela fonto ya wena ya xifaniso tanihilaha swi lavekaka hakona ivi u siva xivumbeko lexi landzelaka hi `conf.css` :

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

Hi kombela u nga kombeteli hi ku kongoma eka fayili ya fonto ya iconfont.cn hikuva a yi nge layichiwi eka browser ya safari.

## Swiphemu Swa Webu

A wu nge tsali `js` eka `foot.pug` Loko ku laveka ku tirhisana, hi kombela u lulamisa xiphemu xa webu.

[Xiphemu xa webu](https://www.freecodecamp.org/news/build-your-first-web-component/) xi nga hlamuseriwa eka `md/.i18n/htm/index.js` ivi xi tirhisiwa eka `foot.pug` .

Swi olova ku tumbuluxa swiphemu swa webu, ku fana na `<x-img>` ta ntolovelo0 .

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

## Xiphemu Xa Le Hansi Xa Tindzimi to Tala

Khodi leyi nga eka `.i18n/htm/foot.pug` yi le ka xiyimo lexi landzelaka :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Laha `${I18N.C}` yi fambelana na `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Hi ku tirhisa `${I18N.xxx}` leyi fanaka na ndlela leyi yo tsala, yi hlanganisiwile na `i18n.yml` , u nga fikelela ku endliwa ka tindzimi to tala ta matiko ya misava ka xiphemu xa le hansi.

Ku engetela `class="a"` eka link i ku sivela link ku hundzuriwa eka `MarkDown` Vona :
 [➔ `YAML` Ndlela : sivela link `HTML` ku hundzuriwa yi va `Markdown`](/i18/qa#H2) .