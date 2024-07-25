# അടിക്കുറിപ്പ്

ഇപ്പോഴും ഡെമോ പ്രോജക്‌റ്റ് ഒരു ഉദാഹരണമായി എടുക്കുമ്പോൾ, വെബ്‌സൈറ്റിൻ്റെ അടിക്കുറിപ്പ് `md` `.i18n/htm/foot.pug` .

<img alt="" src="https://p.3ti.site/1721286077.avif">

[`pug`](https://pugjs.org) എന്നത് `HTML` സൃഷ്ടിക്കുന്ന ഒരു ടെംപ്ലേറ്റ് ഭാഷയാണ്.

[➔ എന്നതിൻ്റെ വ്യാകരണം പഠിക്കാൻ ഇവിടെ ക്ലിക്ക് ചെയ്യുക pug](https://pugjs.org)

**`foot.pug` `css` , `js` എഴുതരുത്** , അല്ലാത്തപക്ഷം പിശകുകൾ ഉണ്ടാകും.

ദയവായി ഇനിപ്പറയുന്നവ റഫർ ചെയ്യുക, ശൈലി അനുബന്ധ `.css` കൂടാതെ വെബ് ഘടകങ്ങൾ സൃഷ്‌ടിക്കുന്നതിലൂടെ ഇടപെടൽ കൈവരിക്കാനാകും.

## അടിക്കുറിപ്പ് ശൈലി

ഡെമോ `md/.i18n/htm` 3 `css` ഫയലുകൾ താഴെയുണ്ട്.

* `foot.css` :
* `import.css` : `i18n.site`
* : ഫോണ്ടുകളും `conf.css`

### ഐക്കൺ ഫോണ്ട്

( [ഇംഗ്ലീഷ് പതിപ്പ്](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)`F` iconfont.cn

ആവശ്യാനുസരണം നിങ്ങളുടെ സ്വന്തം ഐക്കൺ ഫോണ്ട് സൃഷ്‌ടിക്കുകയും : കോൺഫിഗറേഷൻ എന്നതിൽ മാറ്റിസ്ഥാപിക്കുകയും ചെയ്യുക `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## വെബ് ഘടകങ്ങൾ

`foot.pug` ഇതിൽ `js` എഴുതാൻ കഴിയില്ല.

നിങ്ങൾക്ക് [ഒരു വെബ് ഘടകം](https://www.freecodecamp.org/news/build-your-first-web-component/) നിർവചിക്കാം `md/.i18n/htm/index.js` തുടർന്ന് `foot.pug` എന്നതിൽ ഘടകം ഉപയോഗിക്കാം.

ഇഷ്‌ടാനുസൃത ടാഗുകൾ പോലെ വെബ് ഘടകങ്ങൾ സൃഷ്‌ടിക്കുന്നത് എളുപ്പമാണ് `<x-img>`

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

## ബഹുഭാഷാ അടിക്കുറിപ്പ്

: കോഡ് ഇപ്രകാരമാണ് `.i18n/htm/foot.pug`

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

`en/i18n.yml` `${I18N.C}` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

ഈ എഴുത്ത് `${I18N.xxx}` സമാനമായത് ഉപയോഗിച്ച്, `i18n.yml` ഉപയോഗിച്ച്, നിങ്ങൾക്ക് അടിക്കുറിപ്പിൻ്റെ ബഹുഭാഷാ അന്തർദേശീയവൽക്കരണം നേടാനാകും.

ലിങ്ക് `MarkDown` ആയി പരിവർത്തനം ചെയ്യപ്പെടാതിരിക്കാൻ ലിങ്കിലേക്ക് `class="a"` , കാണുക :
 [: ലിങ്കിൻ്റെ `HTML` എന്നത് `Markdown` ആക്കി മാറ്റുന്നത് `YAML` തടയാം](/i18/qa#H2) .