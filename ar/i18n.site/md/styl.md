# قائمة الأنماط

[انقر هنا لتصفح الملف المصدر لهذه الصفحة](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/zh/i18n.site/md/styl.md) لمعرفة كيفية كتابة `MarkDown` في الأنماط التالية.

## كتلة مطوية

|+| ما هو ماركدوون؟

    MarkDown هي لغة ترميزية خفيفة الوزن تتيح للمستخدمين إنشاء مستندات منسقة بتنسيق نص عادي يسهل قراءته وكتابته.

    يشيع استخدامها لكتابة الوثائق، ومقالات المدونات، والكتب الإلكترونية، ومشاركات المنتديات، وما إلى ذلك.

    لديها المزايا التالية:

    1. من السهل التعلم
    1. قابلة للقراءة للغاية
    1. التحكم في الإصدار سهل

       نظرًا لأن `MarkDown` مستند بتنسيق نص عادي، فيمكن للمبرمجين دمجها بسهولة في أنظمة التحكم في الإصدار (مثل `git` ).

       وهذا يجعل تتبع التغييرات والتعاون أسهل بكثير، خاصة في تطوير الفريق.

|-| ما هو I18N؟

    "I18N" هو اختصار لكلمة "التدويل".

    نظرًا لأن كلمة "تدويل" تحتوي على 18 حرفًا بين "I" و"N"، يتم استخدام "I18N" لتبسيط التمثيل.

    في مصطلحات الشخص العادي، فهذا يعني دعم لغات متعددة.


الكتلة القابلة للطي عبارة عن صيغة موسعة من `i18n.site` إلى `MarkDown` ، مكتوبة على النحو التالي :

```
|+| TITLE
    MARKDOWN CONTENT
    YOUR CAN WRITE MULTI LINE CONTENT
```

مع `|+| `或`|-| السطر الذي يبدأ بـ ` سيولد كتلة قابلة للطي، ومحتوى الكتلة القابلة للطي هو الأسطر اللاحقة بنفس مستوى المسافة البادئة (يتم فصل الفقرات بأسطر فارغة).

تمرير `|-| `标记的折叠块默认展开，`|+| `يتم طي الكتل المطوية ذات العلامات بشكل افتراضي.

## ضع خط & & غامق

__ هو __~~ يتوسطه خط~~ ونص العرض **جريء** .

هو مكتوب على النحو التالي:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

قام المحلل اللغوي `MarkDown` لأداة إنشاء موقع الويب `i18n.site` بتحسين بناء الجملة الذي يتوسطه خط ونص عريض، ويمكن أن يصبح ساري المفعول بدون مسافات قبل العلامة وبعدها، مما يسهل كتابة المستندات بلغات مثل الصين واليابان وكوريا. لا تستخدم المسافات كفواصل.

قراءة موسعة : [لماذا لا يصبح بناء الجملة Markdown ( `**……**` ) لـ Nuggets ساري المفعول في بعض الأحيان؟](//juejin.cn/post/7064565848421171213)

## يقتبس

### اقتباس سطر واحد

> من طبيعتي أن تكون مواهبي مفيدة، وسأعود بعد أن أنفقت كل أموالي.
<p style="text-align:right" style=";text-align:right;direction:rtl">─ لي باي</p>

### اقتباسات متعددة الأسطر

> ميزة فريدة أخرى للخيال العلمي هي نطاقه الواسع للغاية.
> "الحرب والسلام"، بمليون كلمة، لا تصف إلا تاريخ منطقة ما لعدة عقود من الزمن؛
> وتصف روايات الخيال العلمي، مثل رواية "الإجابة النهائية" لأسيموف، بوضوح مليارات السنين من تاريخ الكون بأكمله، بما في ذلك البشر، في بضعة آلاف من الكلمات فقط.
> من المستحيل تحقيق مثل هذه الشمولية والجرأة في الأدب التقليدي.
<p style="text-align:right" style=";text-align:right;direction:rtl">── ليو سيكسين</p>

### نصيحة `> [!TIP]`

> [!TIP]
> تذكر أن تتحقق من صلاحية جواز السفر والتأشيرة الخاصة بك، ولا يمكن للمستندات منتهية الصلاحية الدخول إلى البلاد أو الخروج منها.

هو مكتوب على النحو التالي

```
> [!TIP]
> YOUR CONTENT
```

### ملاحظة `> [!NOTE]`

> [!NOTE]
> إذا أرسلت لي رسالة وأجبت على الفور، ماذا يعني ذلك؟
> وهذا يدل على أنني أحب اللعب بالهواتف المحمولة حقًا.


### تحذير `> [!WARN]`

> [!WARN]
> عند الذهاب في مغامرة برية، من المهم أن تظل آمنًا. فيما يلي بعض نصائح السلامة الرئيسية:
>
> - **تحقق من توقعات الطقس** : في الأسبوع الماضي، واجهت مجموعة من المتسلقين عاصفة في منتصف الطريق إلى أعلى الجبل لأنهم لم يتحققوا من توقعات الطقس واضطروا إلى الإخلاء بشكل عاجل.
> - **احمل المعدات اللازمة** : تأكد من إحضار ما يكفي من الطعام والماء ومستلزمات الإسعافات الأولية.
> - **فهم التضاريس** : تعرف على تضاريس ومسارات منطقة المغامرة مسبقًا لتجنب الضياع.
> - **ابق على اتصال** : ابق على اتصال بالعالم الخارجي وتأكد من قدرة الجميع على العودة بأمان.
>
> تذكر أن السلامة تأتي دائمًا في المقام الأول!

## قائمة المهام

- [x] تصميم النموذج الأولي للمنتج وقائمة الميزات
- [ ] تحديد مكدس التكنولوجيا وأدوات التطوير
- [ ] تطوير الجداول الزمنية والمعالم الرئيسية لتطوير المنتج

## قائمة

### قائمة مرتبة

1. جري
   1. ثلاث مرات في الأسبوع، مسافة 5 كيلومترات في كل مرة
   1. تشغيل نصف الماراثون
1. التدريب في صالة الألعاب الرياضية
   1. مرتين في الأسبوع، ساعة واحدة في كل مرة
   1. التركيز على العضلات الأساسية

### قائمة غير مرتبة

* المناسبات الاجتماعية
  - المشاركة في اجتماعات تبادل الصناعة
    + جلسة تبادل التكنولوجيا
    + لقاء تبادل ريادة الأعمال
  - تنظيم تجمع للأصدقاء
    + شواء خارجي
    + ليلة الفيلم

## ملزمة

| مفكر       | المساهمات الرئيسية                           |
|--------------|------------------------------------|
| كونفوشيوس         | مؤسس الكونفوشيوسية |
| سقراط     | أبو الفلسفة الغربية  |
| نيتشه         | فلسفة سوبرمان، تنتقد الأخلاق التقليدية والدين       |
| ماركس       | شيوعية |

### تحسين عرض الجدول الكبير

بالنسبة للجداول الكبيرة نسبيًا، يمكن استخدام الطرق التالية لتحسين تأثير العرض:

1. استخدم خطًا أصغر

   على سبيل المثال، قم بلف الجدول `<div style="font-size:14px">` `</div>` .

   لاحظ أن العلامة `div` يجب أن تشغل سطرًا خاصًا بها، وتترك أسطرًا فارغة قبلها وبعدها.
1. للحصول على نص أطول في خلية، قم بإدراج `<br>` لالتفاف السطر
1. إذا تم ضغط العمود بشكل قصير جدًا، فيمكنك إضافة `<div style="width:100px">xxx</div>` إلى الرأس لتوسيع العرض، ويمكنك أيضًا إضافة [`<wbr>` إلى الرأس](//developer.mozilla.org/docs/Web/HTML/Element/wbr) للتحكم في موضع فاصل الأسطر.

مثال توضيحي هو كما يلي:

<div style="font-size:14px">

| أمة       | <div style="width:70px;margin:auto" style=";text-align:right;direction:rtl">اسم المفكر</div> | عصر | المساهمات الأيديولوجية الرئيسية                                                       |
|------------|------------------------------------------------|-----------------|--------------------------------------------------------------------|
| الصين       | كونفوشيوس                                           | 551-479 ق.م   | اقترح مؤسس الكونفوشيوسية مفاهيم أساسية مثل "الخير" و"اللياقة" وشدد على التربية الأخلاقية والنظام الاجتماعي. |
| اليونان القديمة     | سقراط                                       | 469-399 ق.م   | إن استكشاف الحقيقة من خلال الحوار والجدل يقترح "اعرف نفسك" ويؤكد على التفكير العقلاني         |
| فرنسا       | فولتير                                         | 1694-1778       | دعت الشخصيات التمثيلية لعصر التنوير إلى العقلانية والحرية والمساواة، وانتقدت الخرافات الدينية والحكم الاستبدادي.   |
| ألمانيا       | كانط                                           | 1724-1804       | طرح "نقد العقل الخالص"<br> يستكشف أسس الأخلاق والحرية والمعرفة، مع التركيز على العقل العملي     |

</div>

الكود الزائف للمثال أعلاه هو كما يلي:

```md

<div style="font-size:14px">

| xx | <div style="width:70px;margin:auto">xx<wbr>xx</div> | xx | xx |
|----|----|-----------|----|
| xx | xx | xx<br>xxx | xx |

</div>

```

## شفرة

### رمز مضمن

في عالم لغات البرمجة الواسع، يحتل كل من الأرقام `Rust` و `Python` و `JavaScript` و `Go` موقعًا فريدًا.

### أسطر متعددة من التعليمات البرمجية

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```

## فاصل أسطر داخل الفقرة

يمكن تحقيق فواصل الأسطر داخل الفقرات دون إضافة أسطر فارغة بين الأسطر.
التباعد بين فواصل الأسطر داخل الفقرات أصغر من التباعد بين الفقرات.

على سبيل المثال:

> يعيش كشخص عظيم،
> الموت هو أيضا بطل شبح.
> ما زلت أفتقد شيانغ يو،
> مترددة في عبور جيانجدونج.
>
> استخدم Li Qingzhao قصة Xiang Yu المأساوية للتلميح إلى عدم كفاءة أسرة سونغ.
> التعبير عن عدم الرضا عن البلاط الإمبراطوري لاستسلامه دون قتال.