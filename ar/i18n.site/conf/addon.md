# البرنامج المساعد

يمكن تكوين المكونات الإضافية في `.i18n/conf.yml`، مثل:

```yml
addon:
  - i18n.addon/toc
```

## البرنامج المساعد الرسمي

* `i18n.addon/toc` : الفهرس
  بناءً على `TOC`، يتم إنشاء فهرس الفهرس بتنسيق `json`، وهو مفعّل افتراضيًا

* `i18n.addon/mouse` : تأثيرات الفأرة

## تسمية الملفات

جميع المكونات الإضافية هي حزم `npm`.

الحزمة المقابلة لـ `i18n.addon/toc` هي [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc).

يستخدم البرنامج المساعد الإصدار الأحدث بشكل افتراضي ويقوم بالتحقق من التحديثات بشكل أسبوعي.

إذا كنت ترغب في تثبيت إصدار معين، يمكنك كتابة `i18n.addon/toc@0.1.3`.

يقوم أمر الترجمة `i18n.site` بتثبيت ملف الاتفاقية الخاص بالمكون الإضافي، ثم ينفذها.

تتمثل أسماء الملفات المتفق عليها فيما يلي

### htmIndex.js

سيتم حقن `htmIndex.js` في نهاية `.i18n/htm/index.js`.

حيث سيتم استبدال `__CONF__` باسم التكوين الحالي (مثل `dev` أو `ol`).

### afterTran.js

سيتم استدعاؤها بعد اكتمال الترجمة، وستكون المعلمات المقدمة كما يلي:

* `lang_li` : قائمة اللغات، اللغة الأولى هي لغة المصدر
* `changed` : الملفات المعدلة
* `root` : دليل الجذر للمشروع

القيمة الم�回رة هي قاموس، مثل

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` للملفات المصدرة، `path` للمسار، و `txt` للمحتوى.

## الدوال المدمجة

يعتمد وقت التشغيل `js` المدمج على تطوير ثانوي لـ [boa](https://github.com/boa-dev/boa)، والوظائف المضمنة كالتالي:

* `wPath(path, txt)` : كتابة في الملف
* `rTxt(path)` : قراءة ملف نصي
* `rBin(path)` : قراءة ملف ثنائي
* `rDir(dirpath)` : قراءة الدليل، وتكون القيمة الم�回رة مصفوفة: قائمة الدلائل، قائمة الملفات

## دليل التطوير

يمكن الرجوع إلى تطوير المكونات الإضافية على [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)