# ግርጌ

አሁንም የማሳያ ፕሮጄክቱን እንደ ምሳሌ በመውሰድ የድረ-ገጹ ግርጌ `md` ውስጥ `.i18n/htm/foot.pug` ።

<img alt="" src="https://p.3ti.site/1721286077.avif">

`HTML` የሚያመነጭ የአብነት ቋንቋ ነው [`pug`](https://pugjs.org)

[➔ ሰዋሰው ለማወቅ እዚህ ይጫኑ pug](https://pugjs.org)

**`foot.pug` `css` እና `js` አይጻፉ** ፣ አለበለዚያ ስህተቶች ሊኖሩ ይችላሉ።

እባክዎን የሚከተለውን ይመልከቱ፣ አጻጻፉ በተዛማጅ `.css` እና ግንኙነቱ የተገኘው የድር ክፍሎችን በመፍጠር ነው።

## የግርጌ ዘይቤ

`md/.i18n/htm` ፕሮጄክቱ ውስጥ ከታች 3 `css` ፋይሎች አሉ።

* : ስልት `foot.css`
* : ድረ- `i18n.site` `import.css`
* : አዶዎች እና ቅርጸ `conf.css` ቁምፊዎች

### አዶ ቅርጸ-ቁምፊ

`F` / [የመነጨው](https://www.iconfont.cn/?lang=zh) [በ](https://www.iconfont.cn/?lang=en-us) iconfont.cn

እባክዎ እንደ አስፈላጊነቱ የራስዎን አዶ ቅርጸ-ቁምፊ ይፍጠሩ እና : ውቅር በ ውስጥ ይተኩ `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## የድር አካላት

በውስጡ `js` መፃፍ `foot.pug` መስተጋብር የሚያስፈልግ ከሆነ እባክዎ የድረ-ገጹን አካል ያብጁ።

[የድር አካልን](https://www.freecodecamp.org/news/build-your-first-web-component/) በ `md/.i18n/htm/index.js` ውስጥ መግለፅ እና ክፍሉን በ `foot.pug` መጠቀም ይችላሉ።

እንደ ብጁ መለያዎች ያሉ የድር ክፍሎችን መፍጠር ቀላል ነው `<x-img>`

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

## ባለብዙ ቋንቋ ግርጌ

በውስጡ ያለው ኮድ እንደሚከተለው : `.i18n/htm/foot.pug`

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

እዚህ ጋር የሚዛመደው በ `en/i18n.yml` ውስጥ : `${I18N.C}`

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

ከዚህ የአጻጻፍ ዘዴ ጋር ተመሳሳይ በሆነ `${I18N.xxx}` ከ `i18n.yml` ጋር ተዳምሮ የግርጌውን ባለብዙ ቋንቋ አለማቀፋዊነትን ማሳካት ይችላሉ።

ሊንኩ : `MarkDown` እንዳይቀየር ጨምሩበት፣ ይመልከቱ `class="a"`
 [: የማገናኛው `HTML` ወደ `Markdown` እንዳይቀየር `YAML` መከላከል ይቻላል](/i18/qa#H2) ::