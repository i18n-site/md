# الملاحة المخصصة

لنأخذ الموقع [i18n-demo.github.io](//i18n-demo.github.io) كمثال لشرح كيفية تخصيص التنقل.

![](https://p.3ti.site/1731036697.avif)

الملفات المقابلة للمناطق المرقمة في الشكل أعلاه هي كما يلي:

1. اليسار [`.i18n/htm/t1.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t1.pug)
2. حق [`.i18n/htm/t2.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t2.pug)

[`pug`](https://pugjs.org) هي لغة القالب التي تولد `HTML` .

[➔ انقر هنا لتتعلم قواعد اللغة pug](https://pugjs.org)

يتم استخدام سلسلة التنسيق `${I18N.sponsor}` في الملف لتنفيذ التدويل، وسيتم استبدال محتواها بالنص [i18n.yml](https://github.com/i18n-site/demo.i18n.site/blob/main/en/i18n.yml) في دليل اللغة المصدر.

**لا تكتب `css` و `js` في `pug`** ، وإلا فسيكون هناك خطأ.

تتم كتابة الأنماط في `css` ، ويتم التفاعل عن طريق إنشاء مكونات الويب.

هنا الملف المطابق لنمط شريط التنقل هو : [i18n/htm/topbar.css](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/topbar.css)