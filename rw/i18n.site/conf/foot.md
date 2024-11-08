# Umutwe Wihariye

Gufata umushinga wa demo nkurugero, `.i18n/htm/foot.pug` mububiko `md` busobanura munsi yurubuga.

![](https://p.3ti.site/1721286077.avif)

## Imiterere Yumutwe

Hano hari dosiye eshatu `css` munsi ya `md/.i18n/htm` mumushinga wa demo.

* `foot.css` Ikirenge :
* `import.css` : `i18n.site` kurubuga rwose!
* `conf.css` Ikirenge cyibishushanyo nimyandikire :

### Agashusho

Agashusho k'umutwe kakozwe mugukora imyandikire `F` iconfont.cn [verisiyo yicyongereza](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh))!

Nyamuneka kora igishushanyo cyawe cyimyandikire nkuko bikenewe hanyuma usimbuze ibice bikurikira muri `conf.css` :

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

Nyamuneka ntukereke neza dosiye yimyandikire ya iconfont.cn kuko idashobora gutwarwa kuri mushakisha ya safari.

## Ibigize Urubuga

Ntushobora kwandika `js` kuri `foot.pug` Niba hakenewe imikoranire, nyamuneka uhindure urubuga.

[Urubuga](https://www.freecodecamp.org/news/build-your-first-web-component/) rushobora gusobanurwa muri `md/.i18n/htm/index.js` hanyuma rugakoreshwa muri `foot.pug` .

Biroroshye gukora ibice byurubuga, `<x-img>` byihariye0.

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

## Indimi Nyinshi

Kode muri `.i18n/htm/foot.pug` niyi ikurikira :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Hano `${I18N.C}` ihuye na `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Ukoresheje `${I18N.xxx}` isa nubu buryo bwo kwandika, uhujwe na `i18n.yml` , urashobora kugera ku ndimi nyinshi mpuzamahanga mumahanga.

Ongeraho `class="a"` kumurongo ni ukubuza guhuza guhinduka kuri `MarkDown` Reba :
 [➔ `YAML` : Nigute wabuza guhuza `HTML` guhinduka kuri `Markdown`](/i18/qa#H2) !