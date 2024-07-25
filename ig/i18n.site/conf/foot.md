# N'okpuru

Ka na-ewere ihe ngosi ngosi dị ka ihe atụ, `.i18n/htm/foot.pug` na-akọwa n'okpuru ebe nrụọrụ weebụ na ndekọ `md`

<img alt="" src="https://p.3ti.site/1721286077.avif">

[`pug`](https://pugjs.org) asụsụ ndebiri na-ewepụta `HTML` .

[➔ Pịa ebe a ka ịmụta ụtọ asụsụ nke pug](https://pugjs.org)

**Edela `css` na `js` `foot.pug`** , ma ọ bụghị ya, a ga-enwe njehie.

Biko rụtụ aka na ihe ndị a, a na-ede ụdị ahụ na nke kwekọrọ `.css` A na-enwetakwa mmekọrịta ahụ site na ịmepụta ihe ntanetịime weebụ.

## Ụdị Ụkwụ

N'ime ihe ngosi ngosi `md/.i18n/htm` enwere faịlụ `css` n'okpuru.

* `foot.css` :
* `import.css` : `i18n.site`
* Akara : `conf.css`

### Akara Ngosi Font

Emepụtara akara `F` [n'okpuru](https://www.iconfont.cn/?lang=zh) [site](https://www.iconfont.cn/?lang=en-us) / iconfont.cn

Biko mepụta font akara ngosi nke gị ka achọrọ wee dochie nhazi : a na `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Ngwa Weebụ

`foot.pug` ike ide `js` n'ime ya Ọ bụrụ na achọrọ mmekọrịta, biko hazie mpaghara ibe weebụ.

Ị nwere ike ịkọwa [akụkụ webụ](https://www.freecodecamp.org/news/build-your-first-web-component/) `foot.pug` `md/.i18n/htm/index.js`

Ọ dị mfe ịmepụta akụrụngwa webụ, dị ka mkpado omenala `<x-img>`

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

## Ụkwụ Ọtụtụ Asụsụ

Koodu dị na ya : nke a `.i18n/htm/foot.pug`

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Nke a : na `en/i18n.yml` `${I18N.C}`

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Iji `${I18N.xxx}` dị ka usoro ederede a, jikọtara ya na `i18n.yml` , ị nwere ike nweta ọtụtụ asụsụ mba ụwa.

`class="a"` na njikọ ahụ ka ị ghara ịgbanwe njikọ ahụ na `MarkDown` , lee :
 [: `YAML` esi egbochi `HTML` njikọ ahụ ka ọ bụrụ `Markdown`](/i18/qa#H2) .