# ብጁ ግርጌ

አሁንም የማሳያ ፕሮጄክቱን እንደ ምሳሌ በመውሰድ በ `md` ማውጫ ውስጥ `.i18n/htm/foot.pug` የድረ-ገጹን ግርጌ ይገልፃል።

![](https://p.3ti.site/1721286077.avif)

## የግርጌ ቅጥ

በማሳያ ፕሮጄክቱ ውስጥ ሶስት `css` ፋይሎች ከ `md/.i18n/htm` በታች አሉ።

* `foot.css` የግርጌ :
* `import.css` : ለመላው ጣቢያ `i18n.site` ዘይቤ
* `conf.css` የግርጌ : እና ቅርጸ-ቁምፊዎች

### አዶ ቅርጸ-ቁምፊ

የግርጌ አዶው የሚመነጨው iconfont.cn `F` ቅርጸ-ቁምፊ በመፍጠር ነው ( [የእንግሊዝኛ ቅጂ](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh))።

እባክዎ እንደ አስፈላጊነቱ የራስዎን አዶ ቅርጸ-ቁምፊ ይፍጠሩ እና የሚከተለውን ውቅር በ `conf.css` ይተኩ :

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

እባክዎ የ iconfont.cn ፎንት ፋይልን በቀጥታ አያጣቅሱ ምክንያቱም በ Safari አሳሽ ላይ መጫን አይቻልም።

## የድር አካላት

`js` በ `foot.pug` መፃፍ አይችሉም። መስተጋብር የሚያስፈልግ ከሆነ እባክዎን የድር ክፍሉን ያብጁ።

[የድር አካል](https://www.freecodecamp.org/news/build-your-first-web-component/) በ `md/.i18n/htm/index.js` ሊገለጽ ይችላል ከዚያም በ `foot.pug` ውስጥ ጥቅም ላይ ይውላል.

እንደ ብጁ `<x-img>` ያሉ የድር ክፍሎችን መፍጠር ቀላል ነው።

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

በ `.i18n/htm/foot.pug` ውስጥ ያለው ኮድ እንደሚከተለው ነው :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

እዚህ `${I18N.C}` ከ `en/i18n.yml` ጋር ይዛመዳል :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

ከዚህ የአጻጻፍ ዘዴ ጋር ተመሳሳይ የሆነ `${I18N.xxx}` በመጠቀም ከ `i18n.yml` ጋር ተዳምሮ የግርጌውን ባለብዙ ቋንቋ አለማቀፋዊነትን ማሳካት ይችላሉ።

ወደ ማገናኛ `class="a"` መጨመር ሊንኩ ወደ `MarkDown` እንዳይቀየር ለመከላከል ነው. ይመልከቱ :
 [➔ `YAML` : `HTML` ወደ `Markdown` እንዳይቀየር እንዴት መከላከል ይቻላል](/i18/qa#H2) ::