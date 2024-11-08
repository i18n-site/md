# تثبيت &

## ثَبَّتَ

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## رمز التكوين

`i18n.site` يحتوي على أداة ترجمة `i18` مدمجة، يرجى [النقر هنا للإشارة إلى المستند `i18` لتكوين رمز الوصول](/i18/use) .

## مشروع تجريبي

لنبدأ بمشروع تجريبي لمعرفة كيفية استخدام `i18n.site` .

نقوم أولاً باستنساخ المستودع التجريبي وتشغيل الأمر كما يلي:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

يمكن للمستخدمين في الصين القارية:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

يجب أن يكون اسم الدليل للاستنساخ الأساسي للكود `demo.i18n.site` هو `md` لتسهيل المعاينة المحلية باستخدام `docker` .

### يترجم

أولاً، أدخل الدليل `md` وقم بتشغيل `i18n.site` ، والذي سيترجم `en` إلى `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

بعد التشغيل، سيتم إنشاء ملفات الترجمة وذاكرة التخزين المؤقت. يرجى تذكر إضافتها إلى المستودع في `git add . ` `md` .

### المعاينة المحلية

تثبيت وبدء `docker` (يوصي `MAC` المستخدمين باستخدام [orbstack](https://orbstack.dev) كوقت تشغيل لـ `docker` ).

ثم أدخل الدليل `docker` وقم بتشغيل `./up.sh` ، ثم قم بزيارة [https://127.0.0.1](https://127.0.0.1) للمعاينة محليًا.

<img src="//p.3ti.site/1721104238.avif" style="width:360px">