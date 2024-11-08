# Footer

Toujou pran pwojè Demo a kòm yon egzanp, `.i18n/htm/foot.pug` nan anyè a `md` defini pye a nan sit entènèt la.

![](https://p.3ti.site/1721286077.avif)

[`pug`](https://pugjs.org) se yon lang modèl ki jenere `HTML` 's.

[➔ Klike la a pou aprann gramè pug](https://pugjs.org)

**Pa ekri `css` ak `js` nan `foot.pug`** , sinon pral gen yon erè.

Tanpri gade sa ki annapre yo, style la ekri nan `.css` ki koresponn lan, epi entèraksyon an reyalize pa kreye konpozan entènèt.

## Style Footer

Gen twa `css` fichye anba `md/.i18n/htm` nan pwojè Demo a.

* `foot.css` :
* `import.css` : `i18n.site` style pou tout sit la
* `conf.css` : Ikon ak polis yo

### Font Icon

Ikòn pye a se kreye yon polis `F` iconfont.cn [vèsyon angle](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)!).

Tanpri kreye pwòp ikon ou jan sa nesesè epi ranplase konfigirasyon sa a nan `conf.css` :

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

Tanpri pa fè referans dirèkteman fichye font iconfont.cn paske li pa ka chaje sou navigatè safari a.

## Konpozan Web

Ou pa ka ekri `js` nan `foot.pug` Si entèraksyon nesesè, tanpri Customize eleman entènèt la.

[Yon eleman entènèt](https://www.freecodecamp.org/news/build-your-first-web-component/) ka defini nan `md/.i18n/htm/index.js` ak Lè sa a, itilize nan `foot.pug` .

Li fasil pou kreye konpozan entènèt, tankou `<x-img>` koutim0 .

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

## Plizyè Lang Pye

Kòd la nan `.i18n/htm/foot.pug` se jan sa a :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Isit la `${I18N.C}` koresponn ak `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Sèvi ak `${I18N.xxx}` menm jan ak metòd ekriti sa a, konbine avèk `i18n.yml` , ou ka reyalize entènasyonalizasyon plizyè lang nan pye a.

Ajoute `class="a"` nan lyen an se anpeche lyen an konvèti nan `MarkDown` Gade :
 [➔ `YAML` Kijan : anpeche lyen `HTML` konvèti nan `Markdown`](/i18/qa#H2) .