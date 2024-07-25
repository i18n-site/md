# Xihloko Xa Le Hansi

Hambi swi ri tano hi ku teka phurojeke ya demo tanihi xikombiso, xiphemu xa le hansi xa webusayiti `.i18n/htm/foot.pug` hlamuseriwile eka `md`

<img alt="" src="https://p.3ti.site/1721286077.avif">

i ririmi ra xifaniso lexi humesaka `HTML` [`pug`](https://pugjs.org)

[➔ Click laha ku dyondza ririmi ra pug](https://pugjs.org)

**U nga tsali `css` na `js` eka `foot.pug`**

Hi kombela u languta eka leswi landzelaka, xitayili xi tsariwile hi `.css` naswona ku tirhisana ku fikeleriwa hi ku tumbuluxa swiphemu swa webu.

## Xitayili Xa Le Hansi

Eka demo `md/.i18n/htm` Ku na 3 `css` tifayela laha hansi.

* `foot.css` :
* `import.css` Xitayili : `i18n.site` xa sayiti hinkwayo
* `conf.css` : swa le hansi na tifonto

### Fonto Ya Xifaniso

Xifaniso xa le hansi xi endliwa hi iconfont.cn ( [English version](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) ku tumbuluxa fonto leyi thyiweke `F`

Hi kombela u tiendlela fonto ya wena ya xifaniso tanihilaha swi lavekaka hakona ivi u siva xivumbeko : landzelaka eka `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Swiphemu Swa Webu

`foot.pug` `js`

U nga hlamusela [xiphemu xa webu](https://www.freecodecamp.org/news/build-your-first-web-component/) `foot.pug` `md/.i18n/htm/index.js`

Swi olova ku tumbuluxa swiphemu swa webu, ku fana na tithegi ta ntolovelo `<x-img>`

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

`.i18n/htm/foot.pug` Khodi leyi nga eka yona yi le ka xiyimo lexi landzelaka :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

`en/i18n.yml` `${I18N.C}` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Hi ku tirhisa `${I18N.xxx}` yo fana na ndlela leyi yo tsala, yi hlanganisiwile na `i18n.yml` , u nga fikelela ku endliwa ka tindzimi to tala ta matiko ya misava ka footer.

`class="a"` eka link ku papalata link ku hundzuriwa eka `MarkDown` , vona :
 [: `YAML` yo sivela `HTML` ya link ku hundzuriwa eka `Markdown`](/i18/qa#H2) .