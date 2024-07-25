# تذييل

مع أخذ المشروع التجريبي كمثال، `.i18n/htm/foot.pug` تعريف تذييل موقع الويب في الدليل `md`

<img alt="" src="https://p.3ti.site/1721286077.avif">

[`pug`](https://pugjs.org) لغة القالب التي تولد `HTML` .

[➔ انقر هنا لتتعلم قواعد اللغة pug](https://pugjs.org)

**لا تكتب `css` و `js` في `foot.pug`** ، وإلا ستكون هناك أخطاء.

يرجى الرجوع إلى ما يلي، النمط مكتوب باللغة المقابلة `.css` ويتم التفاعل عن طريق إنشاء مكونات الويب.

## نمط التذييل

يوجد في `md/.i18n/htm` التجريبي 3 `css` ملفات أدناه.

* أسلوب : `foot.css`
* `import.css` : `i18n.site` للموقع بأكمله
* أيقونات : والخطوط `conf.css`

### خط الأيقونة

يتم إنشاء رمز التذييل بواسطة iconfont.cn ( [الإصدار الإنجليزي](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) من خلال إنشاء خط باسم `F`

الرجاء إنشاء خط الرمز الخاص بك حسب الحاجة واستبدال : التالي في `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## مكونات الويب

لا يمكن كتابة `js` فيه. إذا كان التفاعل مطلوبًا `foot.pug` فيرجى تخصيص مكون صفحة الويب.

يمكنك تحديد [مكون ويب](https://www.freecodecamp.org/news/build-your-first-web-component/) في `md/.i18n/htm/index.js` ثم استخدام المكون في `foot.pug` .

من السهل إنشاء مكونات الويب، مثل العلامات المخصصة `<x-img>`

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

## تذييل متعدد اللغات

الكود فيه : `.i18n/htm/foot.pug`

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

: المقابلة في `en/i18n.yml` `${I18N.C}`

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

`${I18N.xxx}` طريقة الكتابة هذه المشابهة لـ `i18n.yml` ، يمكنك تحقيق تدويل متعدد اللغات للتذييل.

أضف `class="a"` إلى الرابط لتجنب تحويل الرابط إلى `MarkDown` ، انظر :
 [: `YAML` منع تحويل `HTML` الرابط إلى `Markdown`](/i18/qa#H2) .