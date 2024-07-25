# Fousszeilen

Nach ëmmer den Demo-Projet als Beispill, de Fousszeil vun der Websäit `.i18n/htm/foot.pug` am `md` definéiert.

<img alt="" src="https://p.3ti.site/1721286077.avif">

[`pug`](https://pugjs.org) ass eng Schabloun Sprooch déi `HTML` generéiert.

[➔ Klickt hei fir d'Grammatik vun pug](https://pugjs.org)

**Schreift net `css` an `js` `foot.pug`** , soss ginn et Feeler.

Gitt w.e.g. op déi folgend, de Stil ass an der entspriechender `.css` an d'Interaktioun gëtt erreecht andeems Dir Webkomponenten erstallt.

## Fousszeilen Stil

Am Demo- `md/.i18n/htm` ginn et 3 `css` Dateien hei drënner.

* `foot.css` :
* `import.css` `i18n.site` fir de ganze Site :
* `conf.css` : Symboler a Schrëften

### Icon Schrëft

D'Footer Ikon gëtt generéiert iconfont.cn ( [Englesch Versioun](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) eng Schrëft mam Numm `F`

Erstellt w.e.g. Är eege Ikon Schrëft wéi néideg an ersetzt : folgend Konfiguratioun an `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Web Komponenten

`foot.pug` kann net `js` an et schreiwen.

Dir kënnt [e Webkomponent](https://www.freecodecamp.org/news/build-your-first-web-component/) definéieren `md/.i18n/htm/index.js` dann de Komponent an `foot.pug` benotzen.

Et ass einfach Web Komponenten ze kreéieren, wéi personaliséiert Tags `<x-img>`

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

## Méisproocheg Fousszeilen

`.i18n/htm/foot.pug` De Code dran ass wéi follegt :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Hei : deen entspriechend am `en/i18n.yml` `${I18N.C}`

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Mat `${I18N.xxx}` ähnlech wéi dës Schreifmethod, kombinéiert mat `i18n.yml` , kënnt Dir Multi-Sprooch Internationaliséierung vum Fousszeilen erreechen.

`class="a"` un de Link fir ze vermeiden datt de Link op `MarkDown` ëmgewandelt gëtt, kuckt :
 [: `YAML` `HTML` `Markdown`](/i18/qa#H2)