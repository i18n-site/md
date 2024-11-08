---

brief: |
  حاليًا، تم تنفيذ أداتين لسطر الأوامر مفتوحة المصدر: i18 (أداة ترجمة سطر الأوامر MarkDown) وi18n.site (مولد موقع المستندات الثابتة متعدد اللغات)

---


# i18n.site · أداة MarkDown للترجمة وبناء مواقع الويب متاحة الآن على الإنترنت!

بعد أكثر من نصف عام من التطوير، أصبح متاحًا على الإنترنت [https://i18n.site](//i18n.site)

حاليًا، يتم تنفيذ أداتين لسطر الأوامر مفتوحة المصدر:

* `i18` أداة ترجمة سطر : MarkDown
* `i18n.site` : مولد موقع مستند ثابت متعدد اللغات، **الأمثل لتجربة القراءة**

يمكن للترجمة أن تحافظ بشكل مثالي على تنسيق `Markdown` . يمكنه التعرف على تعديلات الملفات وترجمة الملفات التي تحتوي على تغييرات فقط.

الترجمة قابلة للتحرير؛ إذا قمت بتعديل النص الأصلي وترجمته آليًا مرة أخرى، فلن يتم استبدال التعديلات اليدوية على الترجمة (إذا لم يتم تعديل هذه الفقرة من النص الأصلي).

[➤ انقر هنا للتفويض والمتابعة التلقائية github i18n.site](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) **والحصول على المكافأة $50** .

## أصل

في عصر الإنترنت، أصبح العالم كله سوقًا، والتعددية اللغوية والتوطين هي مهارات أساسية.

أدوات إدارة الترجمة الحالية ثقيلة جدًا بالنسبة للمبرمجين الذين يعتمدون على إدارة الإصدار `git` ، فإنهم ما زالوا يفضلون سطر الأوامر.

لذلك، قمت بتطوير أداة ترجمة `i18` وقمت بإنشاء منشئ موقع ثابت متعدد اللغات `i18n.site` استنادًا إلى أداة الترجمة.

![](https://p.3ti.site/1723777556.avif)

هذه مجرد البداية، وهناك الكثير للقيام به.

على سبيل المثال، من خلال ربط موقع المستند الثابت بوسائل التواصل الاجتماعي واشتراكات البريد الإلكتروني، يمكن الوصول إلى المستخدمين في الوقت المناسب عند إصدار التحديثات.

على سبيل المثال، يمكن تضمين المنتديات متعددة اللغات وأنظمة أوامر العمل في أي صفحة ويب، مما يسمح للمستخدمين بالتواصل دون عوائق.

## مفتوح المصدر

[تعد رموز الواجهة الأمامية والخلفية وسطر الأوامر كلها مفتوحة المصدر](https://i18n.site/i18n.site/c/src) (نموذج الترجمة ليس مفتوح المصدر بعد).

مكدس التكنولوجيا المستخدم هو كما يلي:

الواجهة [svelte](https://svelte.dev) , [stylus](https://stylus-lang.com) , [pug](https://github.com/pugjs/pug) , [vite](https://github.com/vitejs/vite)

تم تطوير سطر الأوامر والواجهة الخلفية على أساس الصدأ.

نهاية الطريق [axum](https://github.com/tokio-rs/axum) ، [tower-http](https://github.com/tower-rs/tower-http/releases) .

سطر الأوامر [مضمن js المحرك boa_engine](https://docs.rs/boa_engine) ، [قاعدة البيانات المضمنة fjall](https://github.com/fjall-rs/fjall) .

[contabo](https://my.contabo.com) VPS

قاعدة البيانات، [mariadb](https://mariadb.org) [kvrocks](https://kvrocks.apache.org)

إرسال البريد [chasquid](https://github.com/albertito/chasquid) SMTP

## اتصل بنا

عندما يتم إطلاق منتجات جديدة، تصبح المشاكل أمراً لا مفر منه.

لا تتردد في الاتصال بنا عبر منتدى جوجل [groups.google.com/u/2/g/i18n-site](https://groups.google.com/u/2/g/i18n-site) :