# التعليمات

## - إضافة أو حذف أسطر من الترجمة مما يؤدي إلى حدوث ارتباك في الترجمة

> [!WARN]
> تذكر أن **عدد الأسطر في الترجمة يجب أن يتوافق مع الأسطر الموجودة في النص الأصلي** .
> وهذا يعني أنه عند ضبط الترجمة يدويًا، **لا تقم بإضافة أو حذف أسطر من الترجمة** ، وإلا سيتم اضطراب علاقة التعيين بين الترجمة والنص الأصلي.

إذا قمت بإضافة سطر أو حذفه عن طريق الخطأ، مما تسبب في حدوث ارتباك، فيرجى استعادة الترجمة إلى الإصدار قبل التعديل، وتشغيل `i18` ترجمة مرة أخرى، وإعادة التعيين الصحيح في ذاكرة التخزين المؤقت.

يرتبط التعيين بين الترجمة والنص الأصلي بالرمز المميز. أنشئ رمزًا مميزًا جديدًا [i18n.site/token](//i18n.site/token) واحذف `.i18h/hash` ، ثم ترجم مرة أخرى لمسح التعيين المربك (ولكن هذا سيؤدي إلى فقدان جميع التعديلات اليدوية على الترجمة).

## `YAML` : كيفية تجنب تحويل الرابط `HTML` إلى `Markdown`

يتم التعامل مع القيمة `YAML` على أنها `MarkDown` للترجمة.

في بعض الأحيان لا يكون التحويل من `HTML` → `MarkDown` هو ما نريده، مثل تحويل `<a href="/">Home</a>` إلى `[Home](/)` .

يمكن أن تؤدي إضافة أي سمة غير `href` إلى العلامة `a` ، مثل `<a class="A" href="/">Home</a>` ، إلى تجنب هذا التحويل.

## `./i18n/hash` تعارضات الملفات أدناه

احذف الملفات المتعارضة وأعد تشغيل `i18` ترجمة.