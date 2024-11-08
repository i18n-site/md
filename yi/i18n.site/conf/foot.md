# קאַסטאַמייזד פוטער

נאָך גענומען די דעמאָ פּרויעקט ווי אַ בייַשפּיל, `.i18n/htm/foot.pug` אין די `md` וועגווייַזער דיפיינז די פוטער פון די וועבזייטל.

![](https://p.3ti.site/1721286077.avif)

## פוטער נוסח

עס זענען דריי `css` טעקעס אונטער `md/.i18n/htm` אין די דעמאָ פּרויעקט.

* `foot.css` :
* `import.css` : `i18n.site` נוסח פֿאַר די גאנצע פּלאַץ
* `conf.css` פוטער ייקאַנז און :

### בילדל שריפֿט

די פוטער ייקאַן איז דזשענערייטאַד דורך קריייטינג אַ שריפֿט `F` iconfont.cn [ענגליש ווערסיע](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)).

ביטע שאַפֿן דיין אייגענע ייקאַן שריפֿט ווי דארף און פאַרבייַטן די פאלגענדע קאַנפיגיעריישאַן אין `conf.css` :

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

ביטע טאָן ניט גלייך דערמאָנען די שריפֿט טעקע פון iconfont.cn ווייַל עס קענען ניט זיין לאָודיד אויף די סאַפאַרי בלעטערער.

## וועב קאַמפּאָונאַנץ

איר קענען נישט שרייַבן `js` אין `foot.pug` אויב ינטעראַקשאַן איז פארלאנגט, ביטע קאַסטאַמייז די וועב קאָמפּאָנענט.

[א וועב קאָמפּאָנענט](https://www.freecodecamp.org/news/build-your-first-web-component/) קענען זיין דיפיינד אין `md/.i18n/htm/index.js` און דעמאָלט געניצט אין `foot.pug` .

עס איז גרינג צו שאַפֿן וועב קאַמפּאָונאַנץ, אַזאַ ווי מנהג `<x-img>` .

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

## מאַלטיילינגוואַל פוטער

די קאָד אין `.i18n/htm/foot.pug` איז ווי גייט :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

דאָ `${I18N.C}` קאָראַספּאַנדז צו `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

ניצן `${I18N.xxx}` ענלעך צו דעם שרייבן אופֿן, קאַמביינד מיט `i18n.yml` , איר קענען דערגרייכן מאַלטי-שפּראַך ינטערנאַשאַנאַליזיישאַן פון די פוטער.

אַדינג `class="a"` צו די לינק איז צו פאַרמייַדן די לינק פון קאָנווערטעד צו `MarkDown` זען :
 [➔ `YAML` ווי : פאַרמייַדן לינק `HTML` פון קאָנווערטעד צו `Markdown`](/i18/qa#H2) .