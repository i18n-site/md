# Umutwe

Gufata umushinga wa demo nkurugero, `.i18n/htm/foot.pug` mububiko `md` busobanura munsi yurubuga.

![](https://p.3ti.site/1721286077.avif)

[`pug`](https://pugjs.org) ni inyandikorugero imvugo itanga `HTML` 's.

[Kanda hano wige ikibonezamvugo cya pug](https://pugjs.org)

**Ntukandike `css` na `js` muri `foot.pug`** , bitabaye ibyo hazabaho ikosa.

Nyamuneka reba kuri ibi bikurikira, imiterere yanditswe muri `.css` ihuye, kandi imikoranire igerwaho mugukora ibice byurubuga.

## Imiterere Yumutwe

Hano hari dosiye eshatu `css` munsi ya `md/.i18n/htm` mumushinga wa demo.

* `foot.css` Ikirenge :
* `import.css` : `i18n.site` kurubuga rwose!
* `conf.css` Ikirenge cyibishushanyo nimyandikire :

### Agashusho

Agashusho k'ibirenge kakozwe mugukora imyandikire `F` iconfont.cn [Icyongereza](https://www.iconfont.cn/?lang=en-us) /[中文 版](https://www.iconfont.cn/?lang=zh)).

Nyamuneka kora igishushanyo cyawe cyimyandikire nkuko bikenewe hanyuma usimbuze ibice bikurikira muri `conf.css` :

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Ibigize Urubuga

Ntushobora kwandika `js` kuri `foot.pug` Niba imikoranire isabwa, nyamuneka uhindure ibice byurubuga.

[Urubuga](https://www.freecodecamp.org/news/build-your-first-web-component/) rushobora gusobanurwa muri `md/.i18n/htm/index.js` hanyuma rugakoreshwa muri `foot.pug` .

Biroroshye gukora ibice byurubuga, nkibimenyetso `<x-img>` .

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

Ongeraho `class="a"` kumurongo ni ukubuza ihuriro guhinduka kuri `MarkDown` Reba :
 [➔ `YAML` : Nigute wabuza guhuza `HTML` guhinduka kuri `Markdown`](/i18/qa#H2) !