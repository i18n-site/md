# ഇഷ്ടാനുസൃതമാക്കിയ അടിക്കുറിപ്പ്

ഇപ്പോഴും ഡെമോ പ്രോജക്റ്റ് ഒരു ഉദാഹരണമായി എടുക്കുന്നു, `md` ഡയറക്ടറിയിലെ `.i18n/htm/foot.pug` വെബ്സൈറ്റിൻ്റെ അടിക്കുറിപ്പ് നിർവചിക്കുന്നു.

![](https://p.3ti.site/1721286077.avif)

## അടിക്കുറിപ്പ് ശൈലി

ഡെമോ പ്രോജക്റ്റിൽ `md/.i18n/htm` താഴെ മൂന്ന് `css` ഫയലുകളുണ്ട്.

* `foot.css` :
* `import.css` : 1 മുഴുവൻ സൈറ്റിനും `i18n.site` ശൈലി
* `conf.css` : അടിക്കുറിപ്പ് ഐക്കണുകളും ഫോണ്ടുകളും

### ഐക്കൺ ഫോണ്ട്

iconfont.cn `F` പേരിലുള്ള ഒരു ഫോണ്ട് സൃഷ്ടിച്ചാണ് അടിക്കുറിപ്പ് ഐക്കൺ സൃഷ്ടിക്കുന്നത് ( [ഇംഗ്ലീഷ് പതിപ്പ്](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)).

ആവശ്യാനുസരണം നിങ്ങളുടെ സ്വന്തം ഐക്കൺ ഫോണ്ട് സൃഷ്ടിക്കുകയും ഇനിപ്പറയുന്ന കോൺഫിഗറേഷൻ `conf.css` -ൽ മാറ്റിസ്ഥാപിക്കുകയും ചെയ്യുക :

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

iconfont.cn-ൻ്റെ ഫോണ്ട് ഫയൽ നേരിട്ട് പരാമർശിക്കരുത്, കാരണം അത് സഫാരി ബ്രൗസറിൽ ലോഡുചെയ്യാൻ കഴിയില്ല.

## വെബ് ഘടകങ്ങൾ

നിങ്ങൾക്ക് `foot.pug` -ൽ `js` എഴുതാൻ കഴിയില്ല. ഇടപെടൽ ആവശ്യമാണെങ്കിൽ, ദയവായി വെബ് ഘടകം ഇഷ്ടാനുസൃതമാക്കുക.

[ഒരു വെബ് ഘടകം](https://www.freecodecamp.org/news/build-your-first-web-component/) `md/.i18n/htm/index.js` -ൽ നിർവചിക്കുകയും പിന്നീട് `foot.pug` -ൽ ഉപയോഗിക്കുകയും ചെയ്യാം.

ഇഷ്ടാനുസൃത `<x-img>` പോലുള്ള വെബ് ഘടകങ്ങൾ സൃഷ്ടിക്കുന്നത് എളുപ്പമാണ്.

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

`.i18n/htm/foot.pug` ലെ കോഡ് ഇപ്രകാരമാണ് :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

ഇവിടെ `${I18N.C}` `en/i18n.yml` ന് തുല്യമാണ് :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

ഈ എഴുത്ത് രീതിക്ക് സമാനമായ `${I18N.xxx}` ഉപയോഗിച്ച്, `i18n.yml` മായി സംയോജിപ്പിച്ച്, നിങ്ങൾക്ക് അടിക്കുറിപ്പിൻ്റെ ബഹുഭാഷാ അന്തർദേശീയവൽക്കരണം നേടാനാകും.

ലിങ്കിൽ `class="a"` ചേർക്കുന്നത് ലിങ്ക് `MarkDown` ആയി പരിവർത്തനം ചെയ്യുന്നത് തടയാനാണ്. കാണുക :
 [➔ `YAML` : ലിങ്ക് `HTML` `Markdown` ആയി മാറ്റുന്നത് എങ്ങനെ തടയാം](/i18/qa#H2)