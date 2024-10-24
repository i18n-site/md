# N'okpuru

Ka na-ewere ọrụ ngosi ngosi dị ka ihe atụ, `.i18n/htm/foot.pug` na ndekọ `md` na-akọwa n'okpuru ebe nrụọrụ weebụ.

![](https://p.3ti.site/1721286077.avif)

[`pug`](https://pugjs.org) bụ asụsụ ndebiri na-ewepụta `HTML` 's.

[➔ Pịa ebe a ka ịmụta ụtọ asụsụ nke pug](https://pugjs.org)

**Edela `css` na `js` na `foot.pug`** , ma ọ bụghị ya, a ga-enwe njehie.

Biko rụtụ aka na ihe ndị a, a na-ede ụdị ahụ n'ime `.css` kwekọrọ na ya, a na-enwetakwa mmekọrịta ahụ site na ịmepụta ihe ntanetịime weebụ.

## Ụdị Ụkwụ

Enwere faịlụ `css` atọ n'okpuru `md/.i18n/htm` na ọrụ ngosi.

* `foot.css` :
* `import.css` : `i18n.site` maka saịtị ahụ dum
* `conf.css` akara ngosi na :

### Akara Ngosi Font

Emepụtara akara ngosi n'okpuru site na ịmepụta mkpụrụedemede aha `F` iconfont.cn [ụdị Bekee](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)).

Biko mepụta font akara ngosi nke gị ka achọrọ wee dochie nhazi ndị a na `conf.css` :

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

Biko etinyela aka na faịlụ font iconfont.cn n'ihi na enweghị ike ibunye ya na ihe nchọgharị safari.

## Ngwa Weebụ

Ị nweghị ike ide `js` n'ime `foot.pug` Ọ bụrụ na achọrọ mmekọrịta, biko hazie mpaghara weebụ.

Enwere ike ịkọwa [akụkụ weebụ](https://www.freecodecamp.org/news/build-your-first-web-component/) na `md/.i18n/htm/index.js` wee jiri ya mee ihe na `foot.pug` .

Ọ dị mfe ịmepụta akụrụngwa webụ, dị ka `<x-img>` omenala0 .

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

Koodu dị na `.i18n/htm/foot.pug` bụ nke a :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Ebe a `${I18N.C}` kwekọrọ na `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Iji `${I18N.xxx}` yiri usoro ederede a, jikọtara ya na `i18n.yml` , ị nwere ike nweta ọtụtụ asụsụ mba ụwa nke ụkwụ.

Ịgbakwunye `class="a"` na njikọ ahụ bụ igbochi njikọ ahụ ka ọ bụrụ `MarkDown` Lee :
 [➔ `YAML` : esi egbochi njikọ `HTML` ka ọ bụrụ `Markdown`](/i18/qa#H2) .