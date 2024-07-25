# ଫୁଟର୍

ତଥାପି ଡେମୋ ପ୍ରୋଜେକ୍ଟକୁ ଏକ ଉଦାହରଣ ଭାବରେ ଗ୍ରହଣ କରି, ୱେବସାଇଟ୍ ର ଫୁଟର୍ ଡିରେକ୍ଟୋରୀରେ ବ୍ୟାଖ୍ୟା `.i18n/htm/foot.pug` `md`

<img alt="" src="https://p.3ti.site/1721286077.avif">

ଏକ ଟେମ୍ପଲେଟ୍ ଭାଷା ଯାହା `HTML` ସୃଷ୍ଟି କରେ [`pug`](https://pugjs.org)

[ବ୍ୟାକରଣ ଜାଣିବା ପାଇଁ ଏଠାରେ କ୍ଲିକ୍ କରନ୍ତୁ pug](https://pugjs.org)

**`css` ଏବଂ `js` ଲେଖନ୍ତୁ `foot.pug`** , ନଚେତ୍ ତ୍ରୁଟି ଆସିବ |

ଦୟାକରି ନିମ୍ନଲିଖିତକୁ ଅନୁସରଣ କରନ୍ତୁ, ଶ style ଳୀ ଅନୁରୂପ ଭାବରେ ଲେଖାଯାଇଛି `.css` ଏବଂ ୱେବ୍ ଉପାଦାନଗୁଡିକ ସୃଷ୍ଟି କରି ପାରସ୍ପରିକ କ୍ରିୟା ହାସଲ ହୁଏ |

## ଫୁଟର୍ ଷ୍ଟାଇଲ୍ |

ଡେମୋ ପ୍ରୋଜେକ୍ଟରେ ନିମ୍ନରେ 3 `css` ଫାଇଲ୍ ଅଛି `md/.i18n/htm`

* ଫୁଟର୍ ଶ style : `foot.css`
* ସମଗ୍ର ସାଇଟ୍ ପାଇଁ `i18n.site` : style ଳୀ `import.css`
* ଫୁଟର୍ ଆଇକନ୍ ଏବଂ : `conf.css`

### ଆଇକନ୍ ଫଣ୍ଟ

ଫୁଟର୍ ଆଇକନ୍ ( [ଇଂରାଜୀ ସଂସ୍କରଣ](https://www.iconfont.cn/?lang=en-us) /[版 版](https://www.iconfont.cn/?lang=zh)) `F` ଏକ ଫଣ୍ଟ ସୃଷ୍ଟି କରି ସୃଷ୍ଟି ହୋଇଥାଏ iconfont.cn

ଆବଶ୍ୟକ ଅନୁଯାୟୀ ଦୟାକରି ଆପଣଙ୍କର ନିଜର ଆଇକନ୍ ଫଣ୍ଟ ସୃଷ୍ଟି କରନ୍ତୁ ଏବଂ ନିମ୍ନଲିଖିତ : ବଦଳାନ୍ତୁ `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## ୱେବ୍ ଉପାଦାନଗୁଡ଼ିକ |

ଏଥିରେ `js` ଲେଖି ପାରିବେ `foot.pug` ଯଦି ପାରସ୍ପରିକ କ୍ରିୟା ଆବଶ୍ୟକ ହୁଏ, ଦୟାକରି ୱେବ୍ ପୃଷ୍ଠା ଉପାଦାନକୁ କଷ୍ଟମାଇଜ୍ କରନ୍ତୁ |

ଆପଣ [ଏକ ୱେବ୍ ଉପାଦାନକୁ](https://www.freecodecamp.org/news/build-your-first-web-component/) ବ୍ୟାଖ୍ୟା କରିପାରିବେ ଏବଂ ତାପରେ `foot.pug` ରେ ଉପାଦାନ ବ୍ୟବହାର କରନ୍ତୁ `md/.i18n/htm/index.js`

କଷ୍ଟମ୍ ଟ୍ୟାଗ୍ ପରି ୱେବ୍ ଉପାଦାନ ସୃଷ୍ଟି କରିବା ସହଜ `<x-img>`

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

ଏଥିରେ ଥିବା କୋଡ୍ ନିମ୍ନଲିଖିତ : `.i18n/htm/foot.pug`

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

ଏଠାରେ `${I18N.C}` ସଂପୃକ୍ତଟି `en/i18n.yml` ରେ ଅଛି :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

ଏହି ଲେଖା ପଦ୍ଧତି ସହିତ ସମାନ ବ୍ୟବହାର `${I18N.xxx}` , `i18n.yml` ସହିତ ମିଳିତ ହୋଇ, ଆପଣ ଫୁଟରର ବହୁ-ଭାଷା ଆନ୍ତର୍ଜାତୀୟକରଣ ହାସଲ କରିପାରିବେ |

ଲିଙ୍କ୍ : `MarkDown` ରେ ରୂପାନ୍ତରିତ ନହେବା ପାଇଁ ଲିଙ୍କରେ ଯୋଡନ୍ତୁ `class="a"`
 [: ଲିଙ୍କ୍ ର `HTML` କୁ ରୂପାନ୍ତରିତ ହେବାରୁ `YAML` `Markdown`](/i18/qa#H2) |