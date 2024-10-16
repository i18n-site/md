# نسخة المشروع

خذ المشروع التجريبي كمثال:

`en/demo2/v` هو رقم الإصدار الحالي للمشروع، سيُعرض إلى جانب اسم المشروع في الشريط الجانبي.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

هنا `en/` هو رمز اللغة الذي ي odpasowuje się do لغة المصدر المحددة في ملف `.i18n/conf.yml`.

إذا لم تكن لغة المصدر إنجليزية، يجب وضع ملف `v` في مسار المشروع الخاص بلغة المصدر.

ميزة تصفح إصدارات المستندات التاريخية قيد التطوير.

یُ推荐仅在发布重大更新 (مثل `v1`، `v2`) فقط تعديل رقم إصدار المستند، لتجنب تضارب كبير في أرقام الإصدارات التي قد تربك محركات البحث.

## استخدم ملفات `v` الفارغة لفصل فهارس مشاريع مختلفة

في المشروع التجريبي، بجانب `en/demo2/v`، يمكنك أيضًا رؤية ملفات `v` الفارغة في مجلدات `en/blog` و `en/demo1`.

ملفات `v` الفارغة لن تظهر في الشريط الجانبي، ولكن بوجود ملف `v`، سيتم إنشاء فهرس مستقل للملفات في ذلك الدليل及其 الفروع.

بفصل فهارس المشاريع المختلفة، يمكن تجنب تأخيرات الوصول الناتجة عن تحميل فهرس جميع الملفات في الموقع دفعة واحدة.

على سبيل المثال، ملف الفهرس الخاص بمجلد `blog` في المشروع التجريبي هو [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json)