# Pye De Pye

Toujou pran pwojè Demo a kòm yon egzanp, pye a nan sit entènèt la `.i18n/htm/foot.pug` nan anyè `md` .

<img alt="" src="https://p.3ti.site/1721286077.avif">

[`pug`](https://pugjs.org) se yon lang modèl ki jenere `HTML` .

[➔ Klike la a pou aprann gramè pug](https://pugjs.org)

**Pa ekri `css` ak `js` `foot.pug`** , sinon pral gen erè.

Tanpri, al gade nan sa ki annapre yo, style la ekri nan korespondan an `.css` epi entèraksyon an reyalize pa kreye eleman entènèt.

## Style Footer

Nan pwojè Demo `md/.i18n/htm` gen 3 `css` fichye anba a.

* `foot.css` : footer
* `import.css` `i18n.site` : pou tout sit la
* Ikon : ak polis `conf.css`

### Font Icon

Ikòn pye a ki te pwodwi iconfont.cn ( [vèsyon angle](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) kreye yon font ki rele `F`

Tanpri kreye pwòp ikon ou jan sa nesesè epi ranplase konfigirasyon : nan `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Konpozan Entènèt

`foot.pug` Pa ka ekri `js` nan li si entèraksyon nesesè, tanpri pèsonalize eleman paj wèb la.

Ou ka defini [yon eleman entènèt](https://www.freecodecamp.org/news/build-your-first-web-component/) nan `md/.i18n/htm/index.js` epi itilize eleman nan `foot.pug` .

Li fasil pou kreye konpozan entènèt, tankou tags koutim `<x-img>`

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

`.i18n/htm/foot.pug` Kòd ki nan li se jan sa a :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Isit la `${I18N.C}` Korespondan an se nan `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Sèvi ak `${I18N.xxx}` menm jan ak metòd ekriti sa a, konbine avèk `i18n.yml` , ou ka reyalize plizyè lang entènasyonal nan pye a.

`class="a"` lyen an pou evite konvèti lyen an nan `MarkDown` , gade :
 [: `YAML` pou anpeche `HTML` lyen an konvèti nan `Markdown`](/i18/qa#H2) .