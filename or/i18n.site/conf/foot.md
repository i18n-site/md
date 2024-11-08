# କଷ୍ଟୋମାଇଜ୍ ଫୁଟର୍ |

ତଥାପି ଡେମୋ ପ୍ରୋଜେକ୍ଟକୁ ଏକ ଉଦାହରଣ ଭାବରେ ଗ୍ରହଣ କରିବା, `md` ଡିରେକ୍ଟୋରୀରେ `.i18n/htm/foot.pug` ୱେବସାଇଟ୍ ର ଫୁଟର୍ କୁ ବ୍ୟାଖ୍ୟା କରେ |

![](https://p.3ti.site/1721286077.avif)

## ଫୁଟର୍ ଶ style ଳୀ |

ଡେମୋ ପ୍ରୋଜେକ୍ଟରେ `md/.i18n/htm` ରୁ `css` ଫାଇଲ୍ ଅଛି |

* `foot.css` ଫୁଟର୍ ଶ style ଳୀ :
* `import.css` ସମଗ୍ର ସାଇଟ୍ ପାଇଁ `i18n.site` style ଳୀ :
* `conf.css` ଫୁଟର୍ ଆଇକନ୍ ଏବଂ ଫଣ୍ଟ :

### ଆଇକନ୍ ଫଣ୍ଟ

`F` [ନାମକ](https://www.iconfont.cn/?lang=en-us) ଏକ [ଫଣ୍ଟ](https://www.iconfont.cn/?lang=zh) ସୃଷ୍ଟି କରି / ଆଇକନ୍ ସୃଷ୍ଟି ହୁଏ iconfont.cn

ଆବଶ୍ୟକ ଅନୁଯାୟୀ ଦୟାକରି ଆପଣଙ୍କର ନିଜର ଆଇକନ୍ ଫଣ୍ଟ ସୃଷ୍ଟି କରନ୍ତୁ ଏବଂ ନିମ୍ନଲିଖିତ ସଂରଚନାକୁ `conf.css` ରେ ବଦଳାନ୍ତୁ :

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

ଦୟାକରି iconfont.cn ର ଫଣ୍ଟ ଫାଇଲକୁ ସିଧାସଳଖ ରେଫର୍ କରନ୍ତୁ ନାହିଁ କାରଣ ଏହା ସଫାରି ବ୍ରାଉଜରରେ ଲୋଡ୍ ହୋଇପାରିବ ନାହିଁ |

## ୱେବ୍ ଉପାଦାନଗୁଡ଼ିକ |

ଆପଣ `foot.pug` ରେ `js` ଲେଖିପାରିବେ ନାହିଁ ଯଦି ପାରସ୍ପରିକ କ୍ରିୟା ଆବଶ୍ୟକ ହୁଏ, ଦୟାକରି ୱେବ୍ ଉପାଦାନକୁ କଷ୍ଟମାଇଜ୍ କରନ୍ତୁ |

[ଏକ ୱେବ୍ ଉପାଦାନକୁ](https://www.freecodecamp.org/news/build-your-first-web-component/) `md/.i18n/htm/index.js` ରେ ବ୍ୟାଖ୍ୟା କରାଯାଇପାରିବ ଏବଂ ତା’ପରେ `foot.pug` ରେ ବ୍ୟବହାର କରାଯାଇପାରିବ |

ୱେବ୍ ଉପାଦାନଗୁଡିକ ସୃଷ୍ଟି କରିବା ସହଜ, ଯେପରିକି କଷ୍ଟମ୍ `<x-img>` |

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

## ବହୁଭାଷୀ ଫୁଟର୍ |

`.i18n/htm/foot.pug` ରେ ଥିବା କୋଡ୍ ନିମ୍ନଲିଖିତ ଅଟେ :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

ଏଠାରେ `${I18N.C}` `en/i18n.yml` ଅନୁରୂପ ଅଟେ :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

ଏହି ଲେଖା ପଦ୍ଧତି ସହିତ `${I18N.xxx}` ସମାନ ବ୍ୟବହାର କରି, `i18n.yml` ସହିତ ମିଳିତ ହୋଇ, ଆପଣ ଫୁଟରର ବହୁ-ଭାଷା ଆନ୍ତର୍ଜାତୀୟକରଣ ହାସଲ କରିପାରିବେ |

ଲିଙ୍କରେ `class="a"` ଯୋଡିବା ହେଉଛି ଲିଙ୍କକୁ `MarkDown` ରେ ରୂପାନ୍ତର ନକରିବା | ଦେଖନ୍ତୁ :
 [➔ `YAML` କିପରି ଲିଙ୍କ୍ `HTML` `Markdown` ରେ ରୂପାନ୍ତରିତ ହେବ :](/i18/qa#H2) |