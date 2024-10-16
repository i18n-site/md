# التثبيت والاستخدام

## Windows يجب أولاً تثبيت Git Bash

الرجاء [الضغط هنا لتحميل وتثبيت `git bash` أولا](https://git-scm.com/download/win) على نظام Windows.

شغّل العمليات التالية داخل `git bash`.

## التثبيت

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### تهيئة رمز الترجمة

زيارة [i18n.site/token](//i18n.site/token) انقر للنسخ الرمز المميز

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

أنشئ ملف `~/.config/i18n.site.yml`، و粘贴 المحتوى المنسوخ فيه، المحتوى كالتالي:

```
token: YOUR_API_TOKEN
```

بالإضافة إلى ذلك، يجب عليك ربط بطاقة الائتمان في [i18n.site/payBill](//i18n.site/payBill) (لا تحتاج إلى إعادة الشحن، سيتم خصم الرسوم تلقائيًا بناءً على الاستخدام، [انظر الصفحة الرئيسية للاطلاع على الأسعار](/#price)).

## الاستخدام

### مشروع تجريبي

يرجى الرجوع إلى [مشروع github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) لفهم تكوين الترجمة باستخدام `i18`.

يمكن للمستخدمين في الصين استنساخ [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

بعد استنساخ المشروع، انتقل إلى الدليل وابدأ بتشغيل `i18` لإنهاء عملية الترجمة.

### هيكل الدليل

هيكل دليل مستودع القالب كالتالي

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

تعتبر الملفات التجريبية المترجمة في دليل `en` مجرد أمثلة يمكن حذفها.

### تشغيل الترجمة

انتقل إلى الدليل وابدأ بتشغيل `i18` للبدء في الترجمة.

بالإضافة إلى الترجمة، سيقوم البرنامج بإنشاء مجلد `.i18n/data`، يرجى إضافته إلى المستودع.

بعد ترجمة ملف جديد، سيتم إنشاء ملف بيانات جديد في هذا الدليل، تذكر استخدام `git add .`.

## ملف التكوين

`.i18n/conf.yml` هو ملف التكوين الخاص بأداة الترجمة السطرية `i18`

المحتوى كالتالي:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### لغة المصدر وترجمة اللغة

في ملف التكوين، `fromTo` كالتالي:

`en` هي لغة المصدر، و `zh ja ko de fr` هي لغات الترجمة المستهدفة.

رموز اللغات راجع [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE).

على سبيل المثال، إذا كنت ترغب في ترجمة الصينية إلى الإنجليزية، قم بكتابة السطر `zh: en`.

إذا كنت ترغب في الترجمة إلى جميع اللغات المدعومة، اترك الحقل فارغًا بعد `:`

```
i18n:
  fromTo:
    en:
```

يمكنك تكوين `fromTo` المختلفة للدلائل الفرعية/الملفات

```
i18n:
  fromTo:
    en:
  path:
    blog:
      fromTo:
        zh:
    blog/your_file_name.md:
      fromTo:
        ja:
```

في هذا جدول التكوين، لغة المصدر لترجمة الدليل `blog` هي `zh`، ولغة المصدر لترجمة ملف `blog/your_file_name.md` هي `ja`.

### تجاهل الملفات

افتراضيًا، سيتم ترجمة جميع الملفات التي تنتهي بـ `.md` و `.yml` في دليل لغة المصدر.

إذا كنت ترغب في تجاهل بعض الملفات وعدم ترجمتها (مثل المسودات غير المكتملة)، يمكنك تكوين حقل `ignore`.

`ignore` يستخدم بناءً مشابهًا لبنية ملف `.gitignore` [globset](https://docs.rs/globset/latest/globset/#syntax).

على سبيل المثال، `_*` في ملف التكوين يعني أن الملفات التي تبدأ بـ `_` لن تتم ترجمتها.

## قواعد الترجمة

### لا ينبغي لمحرري الترجمة إضافة أو حذف الأسطر

الترجمة قابلة للتعديل. إذا قمت بتعديل النص الأصلي وترجمته مرة أخرى، فإن التعديلات اليدوية على الترجمة لن تُمحى (إذا لم يتم تعديل هذا الجزء من النص الأصلي).

لكن يرجى ملاحظة أن سطور الترجمة والنص الأصلي يجب أن يتطابقوا خطوة بخطوة. لا تضيف أو احذف أسطرًا عند تحرير الترجمة، وإلا سيؤدي ذلك إلى فساد ذاكرة التخزين المؤقت للترجمة.

إذا حدث أي خطأ، راجع [الحلول في الأسئلة الشائعة](/i18/qa#H1)

### ترجمة `YAML`

أداة سطر الأوامر ستجد جميع الملفات التي تنتهي بـ `.yml` في دليل لغة المصدر وترجمتها.

* لاحظ أن لاحقة اسم الملف يجب أن تكون `.yml` (لا `.yaml`).

الأداة تترجم فقط قيم القاموس في `.yml`، وليس مفاتيح القاموس.

على سبيل المثال، `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

سيتم ترجمتها إلى `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

يمكن تعديل ترجمة `YAML` يدويًا (لكن لا تقم بإضافة أو حذف مفاتيح أو أسطر).

باستخدام ترجمة `YAML`، يمكنك بسهولة إنشاء حلول لتحقيق التوطين لدى لغات البرمجة المختلفة.

## الاستخدام المتقدم

### ترجمة الدلائل الفرعية

只要 قمت بإنشاء `.i18n/conf.yml` (بدون الحاجة إلى بدء قالب المشروع التجريبي في كل مرة)، `i18` سيعمل بشكل جيد.

أداة سطر الأوامر ستجد تكوينات `.i18n/conf.yml` في جميع الدلائل الفرعية وترجمتها.

للمشاريع التي تعتمد على بنية [monorepo](//monorepo.tools)، يمكنك تقسيم ملفات اللغة إلى مجلدات فرعية.

![](https://p.3ti.site/1719910016.avif)

### دليل التثبيت المخصص

سيتم تثبيت الأداة في `/usr/local/bin` بشكل افتراضي.

إذا لم يكن لديك إذن الكتابة في `/usr/local/bin`، سيتم تثبيت الأداة في `~/.bin`.

يمكنك تعيين متغير البيئة `TO` لتحديد دليل التثبيت، على سبيل المثال:

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```