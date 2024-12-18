# ކަސްޓަމައިޒް ކޮށްފައިވާ ފޫޓަރ

އަދިވެސް ޑެމޯ ޕްރޮޖެކްޓް މިސާލެއްގެ ގޮތުގައި ނަގައިގެން، `md` ޑައިރެކްޓަރީގައި `.i18n/htm/foot.pug` އިން ވެބްސައިޓްގެ ފުޓަރ ޑެފިނިޝް ކުރެއެވެ.

![](https://p.3ti.site/1721286077.avif)

## ފޫޓާ ސްޓައިލް އެވެ

ޑެމޯ ޕްރޮޖެކްޓްގައި `md/.i18n/htm` ދަށުން ތިން `css` ފައިލް ހުރެއެވެ.

* `foot.css` :
* `import.css` : 1މުޅި ސައިޓަށް `i18n.site` ސްޓައިލް
* `conf.css` : ފޫޓަރ އައިކޮންތަކާއި ފޮންޓްތައް

### އައިކޮން ފޮންޓެވެ

ފޫޓަރ އައިކޮން އުފައްދަނީ `F` iconfont.cn ( [އިނގިރޭސި ވަރޝަން](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) ގެ ނަމުގައި ފޮންޓެއް އުފައްދައިގެންނެވެ.

ބޭނުންވާ ގޮތަށް އަމިއްލައަށް އައިކޮން ފޮންޓެއް އުފައްދައި ތިރީގައިވާ ކޮންފިގްރޭޝަން `conf.css` ގައި ބަދަލުކުރައްވާ :

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

ސަފާރީ ބްރައުޒާއަށް ލޯޑް ނުކުރެވޭތީ iconfont.cn ގެ ފޮންޓް ފައިލް ސީދާ ރެފަރެންސް ނުކުރައްވާށެވެ.

## ވެބް ކޮމްޕޯނެންޓްސް

`foot.pug` އިން `js` ނުލިޔެވޭނެއެވެ.މުޢާމަލާތް ކުރަން ޖެހިއްޖެނަމަ ވެބް ކޮމްޕޮނެންޓް ކަސްޓަމައިޒް ކުރައްވާށެވެ.

[ވެބް ކޮމްޕޮނެންޓެއް](https://www.freecodecamp.org/news/build-your-first-web-component/) `md/.i18n/htm/index.js` ގައި ކަނޑައެޅިފައި އޭގެ ފަހުން `foot.pug` ގައި ބޭނުން ކުރެވިދާނެއެވެ .

ކަސްޓަމް `<x-img>` ފަދަ ވެބް ކޮމްޕޯނެންޓްތައް އުފެއްދުމަކީ ފަސޭހަ ކަމެކެވެ.

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

`.i18n/htm/foot.pug` ގައިވާ ކޯޑް ތިރީގައި މިވަނީ :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

މިތަނުގައި `${I18N.C}` ދިމާވަނީ `en/i18n.yml` އާ :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

މި ލިޔުމުގެ އުސޫލާ އެއްގޮތް `${I18N.xxx}` ބޭނުންކޮށްގެން، `i18n.yml` އާއި ގުޅިގެން، ފޫޓަރުގެ މަލްޓި ލެންގުއޭޖް އިންޓަނޭޝަނަލައިޒޭޝަން ހާސިލް ކުރެވޭނެއެވެ.

ލިންކަށް `class="a"` އިތުރުކުރުމަކީ ލިންކް `MarkDown` އަށް ބަދަލުވުން ހުއްޓުވުމެވެ.ބަލާށެވެ :
 [➔ `YAML` ލިންކް `HTML` `Markdown` އަށް ބަދަލުވުން ހުއްޓުވާނެ :](/i18/qa#H2) .