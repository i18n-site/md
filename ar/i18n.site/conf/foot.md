# تذييل الصفحة

لاحقًا، باتخاذ مشروع العرض كمثال، ملف `.i18n/htm/foot.pug` في الدليل `md` يحدد تذييل الموقع.

![](https://p.3ti.site/1721286077.avif)

[`pug`](https://pugjs.org) هي لغة قوالب لتوليد `HTML`.

[➔ انقر هنا لتتعلم قواعد pug](https://pugjs.org)

**لا تكتب `css` و `js` في `foot.pug`**، فقد يؤدي ذلك إلى حدوث أخطاء.

يرجى الرجوع إلى ما يلي، حيث يُكتب النمط في الملفات `.css` الم对应، والتفاعل يتم من خلال إنشاء مكونات الويب.

## نمط التذييل

هناك ثلاثة ملفات `css` في الدليل `md/.i18n/htm` في المشروع العرضي.

* `foot.css`: نمط التذييل
* `import.css`: نمط الافتراضي لكل الموقع من `i18n.site`
* `conf.css`: أيقونات التذييل والخطوط

### خط الأيقونة

يتم إنشاء أيقونات التذييل باستخدام خط تم إنشاؤه باسم `F` على iconfont.cn ([الإصدار الإنجليزي](https://www.iconfont.cn/?lang=en-us) / [الإصدار الصيني](https://www.iconfont.cn/?lang=zh)).

يرجى إنشاء خط الأيقون الخاص بك حسب الحاجة واستبدال التكوين التالي في `conf.css`:

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## مكونات الويب

لا يمكنك كتابة `js` في `foot.pug`، إذا كنت بحاجة إلى تفاعل، قم بإنشاء مكونات الويب.

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

## تعدد اللغات في التذييل

الكود في `.i18n/htm/foot.pug` كالتالي:

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

هنا `${I18N.C}` ي odpowiada `en/i18n.yml`:

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

باستخدام `${I18N.xxx}` بهذه الطريقة، بالتزامن مع `i18n.yml`، يمكنك تحقيق تدويل متعدد اللغات للتذييل.

إضافة `class="a"` إلى الرابط هو لتجنب تحويل الرابط إلى تنسيق `Markdown`، راجع:
 [➔ `YAML`: كيفية تجنب تحويل الرابط `HTML` إلى `Markdown`](/i18/qa#H2).