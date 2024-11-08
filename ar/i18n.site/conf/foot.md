# تذييل مخصص

مع الاستمرار في أخذ المشروع التجريبي كمثال، يحدد `.i18n/htm/foot.pug` في الدليل `md` تذييل موقع الويب.

![](https://p.3ti.site/1721286077.avif)

## نمط التذييل

هناك ثلاثة ملفات `css` تحت `md/.i18n/htm` في المشروع التجريبي.

* `foot.css` نمط :
* `import.css` : 1 النمط `i18n.site` للموقع بأكمله
* `conf.css` أيقونات :

### خط الأيقونة

يتم إنشاء رمز التذييل عن طريق إنشاء خط اسمه `F` iconfont.cn ( [الإصدار الإنجليزي](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)).

الرجاء إنشاء خط الرمز الخاص بك حسب الحاجة واستبدال التكوين التالي في `conf.css` :

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

يرجى عدم الإشارة مباشرة إلى ملف الخط الخاص بـ iconfont.cn لأنه لا يمكن تحميله على متصفح Safari.

## مكونات الويب

لا يمكنك كتابة `js` في `foot.pug` إذا كان التفاعل مطلوبًا، فيرجى تخصيص مكون الويب.

يمكن تعريف [مكون الويب](https://www.freecodecamp.org/news/build-your-first-web-component/) في `md/.i18n/htm/index.js` ثم استخدامه في `foot.pug` .

من السهل إنشاء مكونات الويب، مثل `<x-img>` المخصصة0 .

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

الكود في `.i18n/htm/foot.pug` هو كما يلي :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

هنا `${I18N.C}` يتوافق مع `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

باستخدام `${I18N.xxx}` مشابه لطريقة الكتابة هذه، مع `i18n.yml` ، يمكنك تحقيق تدويل متعدد اللغات للتذييل.

إن إضافة `class="a"` إلى الارتباط هو منع تحويل الارتباط إلى `MarkDown` انظر :
 [➔ `YAML` : كيفية منع تحويل الرابط `HTML` إلى `Markdown`](/i18/qa#H2) .