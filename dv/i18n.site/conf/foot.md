# ފޫޓަރ އެވެ

އަދިވެސް ޑެމޯ ޕްރޮޖެކްޓް މިސާލެއްގެ ގޮތުން ނަގައިގެން ވެބްސައިޓްގެ ފޫޓަރ ޑެފިނިޝް `.i18n/htm/foot.pug` `md`

<img alt="" src="https://p.3ti.site/1721286077.avif">

[`pug`](https://pugjs.org) `HTML` އުފައްދާ ޓެމްޕްލޭޓް ބަހެކެވެ.

[➔ ގެ ޤަވާޢިދު ދަސްކުރުމަށް މިތަނަށް ފިތާލާށެވެ pug](https://pugjs.org)

**`css` އަދި `js` އިން `foot.pug`**

ތިރީގައިވާ ކަންކަމަށް ރިއާޔަތްކޮށް، ސްޓައިލް ލިޔެފައިވަނީ އެއަށް ގުޅޭ `.css` އަދި މުއާމަލާތް ހާސިލް ކުރެވެނީ ވެބް ކޮމްޕޯނެންޓްތައް އުފައްދައިގެންނެވެ.

## ފޫޓާ ސްޓައިލް އެވެ

`md/.i18n/htm` ޕްރޮޖެކްޓްގައި ތިރީގައި މިވަނީ 3 `css` ފައިލް އެވެ.

* `foot.css` :
* މުޅި ސައިޓަށް `i18n.site` : `import.css`
* `conf.css` :

### އައިކޮން ފޮންޓެވެ

ފޫޓަރ އައިކޮން އުފައްދަނީ iconfont.cn ( [އިނގިރޭސި ވަރޝަން](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) ގެ ނަމުގައި ފޮންޓެއް އުފެއްދުމުންނެވެ `F`

ބޭނުންވާ ގޮތަށް އަމިއްލައަށް އައިކޮން ފޮންޓެއް އުފައްދައި : ކޮންފިގްރޭޝަން ބަދަލުކުރައްވާ `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## ވެބް ކޮމްޕޯނެންޓްސް

`foot.pug` `js`

`md/.i18n/htm/index.js` [ވެބް ކޮމްޕޮނެންޓެއް](https://www.freecodecamp.org/news/build-your-first-web-component/) ޑެފިނިޝްކޮށްލުމަށްފަހު `foot.pug` ގައި ކޮމްޕޮނެންޓް ބޭނުން ކުރެވިދާނެއެވެ.

ކަސްޓަމް ޓެގް ފަދަ ވެބް ކޮމްޕޯނެންޓްތައް އުފެއްދުމަކީ ފަސޭހަ ކަމެކެވެ `<x-img>`

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

## މަލްޓިލިންގުއަލް ފޫޓަރ

`.i18n/htm/foot.pug` :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

މިތާނގައި އެއާ : އެއްޗަކީ `en/i18n.yml` `${I18N.C}`

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

މި ލިޔުމުގެ އުސޫލާ `i18n.yml` `${I18N.xxx}`

ލިންކް `MarkDown` އަށް ބަދަލު ނުވާނެހެން ލިންކަށް އިތުރުކުރުން , : `class="a"`
 [: ލިންކުގެ `HTML` `Markdown` އަށް ބަދަލު ނުކުރެވޭނެ `YAML`](/i18/qa#H2) .