# تذييل

لا زال على سبيل المثال، ملف `.i18n/htm/foot.pug` في الدليل `md` يحدد تذييل الموقع.

![](https://p.3ti.site/1721286077.avif)

[`pug`](https://pugjs.org) هي لغة النماذج التي تنتج `HTML`.

[➔ انقر هنا لتتعلم قواعد pug](https://pugjs.org)

**لا تكتب `css` و `js` في `foot.pug`**، وإلا سيكون هناك خطأ.

يرجى الرجوع إلى ما يلي، النمط يُكتب في الملفات `.css` الم对应، والتفاعل يتم عن طريق إنشاء مكونات الويب.

## نمط التذييل

هناك ثلاثة ملفات `css` في الدليل `md/.i18n/htm` في المشروع التجريبي.

* `foot.css`: نمط التذييل
* `import.css`: نمط الافتراضي للموقع الكامل `i18n.site`
* `conf.css`: أيقونات التذييل، الخطوط

### خط الأيقونة

يتم إنشاء أيقونات التذييل عن طريق إنشاء خط باسم `F` على iconfont.cn ([الإصدار الإنجليزي](https://www.iconfont.cn/?lang=en-us) / [الإصدار الصيني](https://www.iconfont.cn/?lang=zh)).

يرجى إنشاء خط الأيقونات الخاص بك حسب الحاجة واستبدال التكوين التالي في `conf.css`:

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## مكونات الويب

لا يمكنك كتابة `js` في `foot.pug`، إذا كنت بحاجة إلى تفاعل، قم بتعريف مكونات الويب.

يمكنك تعريف [مكونات الويب](https://www.freecodecamp.org/news/build-your-first-web-component/) في `md/.i18n/htm/index.js`، ثم استخدامها في `foot.pug`.

إنشاء مكونات الويب بسيط جدًا، مثل العلامة المخصصة `<x-img>`.

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

## التذييل متعدد اللغات

يحتوي ملف `.i18n/htm/foot.pug` على الكود التالي:

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

هنا `${I18N.C}` يتوافق مع ما هو موجود في `en/i18n.yml`:

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

باستخدام `${I18N.xxx}` بهذه الطريقة، بالتزامن مع `i18n.yml`، يمكنك تحقيق التدويل متعدد اللغات للتذييل.

إضافة `class="a"` إلى الرابط هو لمنع تحويل الرابط إلى تنسيق `Markdown`، راجع:
 [➔ `YAML` : كيفية تجنب تحويل الروابط `HTML` إلى `Markdown`](/i18/qa#H2).