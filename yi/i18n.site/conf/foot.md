# פוטער

נאָך גענומען די דעמאָ פּרויעקט ווי אַ בייַשפּיל, די פוטער פון די וועבזייטל `.i18n/htm/foot.pug` דיפיינד אין די `md` .

<img alt="" src="https://p.3ti.site/1721286077.avif">

[`pug`](https://pugjs.org) איז אַ מוסטער שפּראַך וואָס דזשענערייץ `HTML` .

[➔ דריקט דאָ צו לערנען די גראַמאַטיק פון pug](https://pugjs.org)

**שרייב נישט `css` און `js` `foot.pug`** , אַנדערש עס וועט זיין ערראָרס.

ביטע אָפּשיקן צו די פאלגענדע, דער נוסח איז געשריבן אין די קאָראַספּאַנדינג `.css` און די ינטעראַקשאַן איז אַטשיווד דורך קריייטינג וועב קאַמפּאָונאַנץ.

## פוטער נוסח

אין די דעמאָ `md/.i18n/htm` עס זענען 3 `css` טעקעס אונטן.

* `foot.css` :
* : `i18n.site` פֿאַר `import.css` גאנצע פּלאַץ
* `conf.css` : ייקאַנז און פאַנץ

### בילדל שריפֿט

/ `F` ייקאַן [איז](https://www.iconfont.cn/?lang=zh) דזשענערייטאַד [דורך](https://www.iconfont.cn/?lang=en-us) iconfont.cn

ביטע שאַפֿן דיין אייגענע ייקאַן שריפֿט ווי דארף און פאַרבייַטן : פאלגענדע קאַנפיגיעריישאַן אין `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## וועב קאַמפּאָונאַנץ

`foot.pug` קען נישט שרייַבן `js` אין עס.

איר קענען דעפינירן [אַ וועב קאָמפּאָנענט](https://www.freecodecamp.org/news/build-your-first-web-component/) `md/.i18n/htm/index.js` און דעמאָלט נוצן די קאָמפּאָנענט אין `foot.pug` !

עס איז גרינג צו שאַפֿן וועב קאַמפּאָונאַנץ, ווי מנהג טאַגס `<x-img>`

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

דער קאָד אין עס איז ווי : `.i18n/htm/foot.pug`

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

`${I18N.C}` די קארעספאנדענט איז אין `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

ניצן `${I18N.xxx}` ענלעך צו דעם שרייבן אופֿן, קאַמביינד מיט `i18n.yml` , איר קענען דערגרייכן מאַלטי-שפּראַך ינטערנאַשאַנאַליזיישאַן פון די פוטער.

`class="a"` צו דעם לינק צו ויסמיידן אַז די לינק איז קאָנווערטעד צו `MarkDown` , זען :
 [: `YAML` `HTML` `Markdown`](/i18/qa#H2)