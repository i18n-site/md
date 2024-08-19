# ଫୁଟର୍

ତଥାପି ଡେମୋ ପ୍ରୋଜେକ୍ଟକୁ ଏକ ଉଦାହରଣ ଭାବରେ ଗ୍ରହଣ କରିବା, `md` ଡିରେକ୍ଟୋରୀରେ `.i18n/htm/foot.pug` ୱେବସାଇଟ୍ ର ଫୁଟର୍ କୁ ବ୍ୟାଖ୍ୟା କରେ |

![](https://p.3ti.site/1721286077.avif)

[`pug`](https://pugjs.org) ହେଉଛି ଏକ ଟେମ୍ପଲେଟ୍ ଭାଷା ଯାହା `HTML` ର ସୃଷ୍ଟି କରେ |

[ବ୍ୟାକରଣ ଜାଣିବା ପାଇଁ ଏଠାରେ କ୍ଲିକ୍ କରନ୍ତୁ pug](https://pugjs.org)

**`foot.pug` ରେ `css` ଏବଂ `js` ଲେଖନ୍ତୁ ନାହିଁ** , ନଚେତ୍ ଏକ ତ୍ରୁଟି ଆସିବ |

ଦୟାକରି ନିମ୍ନଲିଖିତକୁ ଅନୁସରଣ କରନ୍ତୁ, ଶ style ଳୀଟି ସମ୍ପୃକ୍ତ `.css` ରେ ଲେଖାଯାଇଛି, ଏବଂ ୱେବ୍ ଉପାଦାନଗୁଡିକ ସୃଷ୍ଟି କରି ପାରସ୍ପରିକ କ୍ରିୟା ହାସଲ ହୁଏ |

## ଫୁଟର୍ ଶ style ଳୀ |

ଡେମୋ ପ୍ରୋଜେକ୍ଟରେ `md/.i18n/htm` ରୁ `css` ଫାଇଲ୍ ଅଛି |

* `foot.css` ଫୁଟର୍ ଶ style ଳୀ :
* `import.css` ସମଗ୍ର ସାଇଟ୍ ପାଇଁ `i18n.site` style ଳୀ :
* `conf.css` ଫୁଟର୍ ଆଇକନ୍ ଏବଂ ଫଣ୍ଟ :

### ଆଇକନ୍ ଫଣ୍ଟ

iconfont.cn `F` ଏକ ଫଣ୍ଟ ସୃଷ୍ଟି କରି ଫୁଟର୍ ଆଇକନ୍ ସୃଷ୍ଟି ହୁଏ ( [ଇଂରାଜୀ ସଂସ୍କରଣ](https://www.iconfont.cn/?lang=en-us) /[中文](https://www.iconfont.cn/?lang=zh)!) |

ଆବଶ୍ୟକ ଅନୁଯାୟୀ ଦୟାକରି ଆପଣଙ୍କର ନିଜର ଆଇକନ୍ ଫଣ୍ଟ ସୃଷ୍ଟି କରନ୍ତୁ ଏବଂ ନିମ୍ନଲିଖିତ ସଂରଚନାକୁ `conf.css` ରେ ବଦଳାନ୍ତୁ :

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

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

ଲିଙ୍କରେ `class="a"` ଯୋଡିବା ହେଉଛି ଲିଙ୍କକୁ `MarkDown` ରେ ରୂପାନ୍ତରିତ ନହେବା ପାଇଁ :
 [➔ `YAML` କିପରି ଲିଙ୍କ୍ `HTML` `Markdown` ରେ ରୂପାନ୍ତରିତ ହେବ :](/i18/qa#H2) |