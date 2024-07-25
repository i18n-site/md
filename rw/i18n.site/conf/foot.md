# Umutwe

Gufata demo umushinga nkurugero, urupapuro rwurubuga `.i18n/htm/foot.pug` mububiko `md`

<img alt="" src="https://p.3ti.site/1721286077.avif">

[`pug`](https://pugjs.org) ururimi rwicyitegererezo rutanga `HTML` .

[Kanda hano wige ikibonezamvugo cya pug](https://pugjs.org)

**Ntukandike `css` na `js` `foot.pug`** , bitabaye ibyo hazabaho amakosa.

Nyamuneka reba kuri ibi bikurikira, imiterere yanditswe muburyo bujyanye `.css` Kandi imikoranire igerwaho mugukora ibice byurubuga.

## Imiterere Yumutwe

Mumushinga wa demo `md/.i18n/htm` hari 3 `css` dosiye.

* Imiterere : Footer `foot.css`
* `import.css` `i18n.site` kurubuga rwose :
* : by'ibirenge `conf.css`

### Agashusho

Agashusho k'umutwe kakozwe iconfont.cn ( [verisiyo yicyongereza](https://www.iconfont.cn/?lang=en-us) /[中文 版](https://www.iconfont.cn/?lang=zh)) gukora imyandikire yitwa `F`

Nyamuneka kora igishushanyo cyawe cyimyandikire nkuko bikenewe hanyuma usimbuze : bikurikira `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Ibigize Urubuga

`foot.pug` kwandika `js` muriyo.

Urashobora gusobanura [igice cyurubuga](https://www.freecodecamp.org/news/build-your-first-web-component/) `md/.i18n/htm/index.js` hanyuma ugakoresha ibice muri `foot.pug` .

Biroroshye gukora ibice byurubuga, nkibimenyetso byihariye `<x-img>`

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

Kode : muri yo niyi ikurikira `.i18n/htm/foot.pug`

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Hano `${I18N.C}` Ijyanye nayo iri muri `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

`${I18N.xxx}` bisa nubu buryo bwo kwandika, uhujwe na `i18n.yml` , urashobora kugera ku ndimi nyinshi mpuzamahanga.

`class="a"` kumurongo kugirango wirinde guhuza guhinduka `MarkDown` , reba :
 [: `YAML` wabuza `HTML` ihuriro guhinduka `Markdown`](/i18/qa#H2) .