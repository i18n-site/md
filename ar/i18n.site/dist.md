# النشر وعلى الانترنت

`i18n.site` يعتمد بنية [تطبيق من صفحة واحدة](https://developer.mozilla.org/docs/Glossary/SPA) ، ويتم نشر صفحة دخول موقع الويب ومحتوى موقع الويب بشكل مستقل.

بعد تشغيل الترجمة أعلاه، سيتم إنشاء المجلدين `htm` و `v` ضمن الدليل `md/out/dev` .

هنا، `dev` يعني أنه تم إنشاؤه بناءً على ملف التكوين `.i18n/htm/dev.yml` .

`dev` الدليل :

الدليل `htm` هو صفحة دخول موقع الويب.

يحتوي الدليل `v` على محتوى موقع الويب مع أرقام الإصدارات.

لا تهتم المعاينة المحلية برقم الإصدار وستنسخ جميع الملفات إلى الدليل `out/dev/v/0.1.0` .

بالنسبة للإصدار الرسمي، سيتم نسخ الملفات التي تم تغييرها إلى دليل رقم الإصدار الجديد.

## حدد ملف التكوين بـ `-c`

ستقوم ملفات التكوين المختلفة بإنشاء الدلائل المقابلة في الدليل `out` .

على سبيل المثال، `.i18n/htm/main.yml` سيقوم بإنشاء الدليل `out/main` .

`dev.yml` و `main.yml` هي التكوينات الافتراضية.

`dev` هو اختصار `development` ، مما يشير إلى بيئة التطوير، ويستخدم للمعاينة المحلية، وهو أيضًا ملف التكوين الافتراضي.
`ol` هو اختصار `online` ، للإشارة إلى البيئة عبر الإنترنت، والتي يتم استخدامها للإصدار الرسمي، وهو أيضًا ملف التكوين الافتراضي عند استخدام معلمات سطر الأوامر `-n` إلى `npm` للإصدار.

يمكنك أيضًا إنشاء ملفات تكوين أخرى استخدم `--htm_conf` في سطر الأوامر لتحديد اسم ملف التكوين المراد استخدامه:

على سبيل المثال:
```
i18n.site --htm_conf dist --save
```

هنا يمثل `--save` رقم إصدار إصدار التحديث.

## <a rel=id href="#npm" id="npm"></a> نشر المحتوى على npmjs.com

يعد نشر المحتوى على [npmjs.com](//npmjs.com) هو الحل الافتراضي الموصى به (راجع [التوفر العالي للواجهة الأمامية](/i18n.site/feature#ha) ).

### تسجيل npm & مشاركة

تثبيت `nodejs` ، تسجيل الدخول مع `npm login` .

قم بتحرير `md/.i18n/htm/main.yml` وقم بتغيير القيمة من [`md:`](//github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/main.yml#L7) `YOUR_NPM_PACKAGE` كاسم الحزمة `npm` الخاص بك. أي اسم حزمة غير مشغول سيفي [npmjs.com](//npmjs.com) .

ثم قم بتعديل `md/.i18n/htm/main.package.json`

قم بتشغيل `i18n.site --npm` أو `i18n.site -n` في الدليل `md` للترجمة والنشر.

إذا كنت تستخدم بيئة تكامل مستمر للنشر، فلن تكون هناك حاجة لتثبيت `nodejs` ما عليك سوى نسخ أذونات تسجيل الدخول والنشر `~/.npmrc` إلى البيئة.

إذا قمت بتعديل اسم الحزمة `v:` في `main.yml` ، فيرجى **التأكد من حذف `.i18n/v/main` أولاً** ثم نشرها.

#### تم نشر الخادم الوكيل بواسطة npm

إذا واجه المستخدمون في الصين القارية مشكلات في الشبكة ولم يتمكنوا من نشر `npm` حزمة، فيمكنهم تعيين متغير البيئة `https_proxy` لتكوين الخادم الوكيل.

على افتراض أن منفذ الخادم الوكيل الخاص بك هو `7890` ، يمكنك كتابة:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

## محتوى مستضاف ذاتيًا

إذا كنت تريد استضافة المحتوى ذاتيًا، فقم أولاً بتحرير `md/.i18n/htm/main.yml` وتغيير `v: //unpkg.com/i18n.site` إلى بادئة عنوان URL، مثل `v: //i18n-v.xxx.com` .

أدخل الدليل `md` وتشغيله

```
i18n.site --htm_conf ol --save
```

أو اختصار

```
i18n.site -c ol -s
```

ثم قم بتكوين المحتوى في الدليل `md/out/main/v` إلى مسار بادئة URL المعين في `v:` .

أخيرًا، **قم بتكوين وقت ذاكرة التخزين المؤقت للمسار المنتهي بـ `/.v` إلى `1s`** ، وإلا فلن يمكن الوصول إلى المحتوى الذي تم إصداره حديثًا على الفور.

يمكن ضبط وقت التخزين المؤقت للمسارات الأخرى على سنة واحدة أو أكثر لتقليل الطلبات غير الضرورية.

## استضافة المحتوى إلى s3

لاستضافة المحتوى ذاتيًا، بالإضافة إلى استخدام خادمك الخاص، هناك خيار شائع `CDN` وهو استخدام `S3` +

يمكنك استخدام [rclone](https://rclone.org) لتسجيل الدخول إلى الخادم `S3` ، ثم الرجوع إلى البرنامج النصي التالي وتعديله، ونسخ التغييرات المتزايدة فقط إلى `S3` لكل إصدار.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/main/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/main/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/main/v/.v "$s3:/$bucket/"
```

تذكر تكوين `CDN` بحيث يكون وقت ذاكرة التخزين المؤقت للمسار المنتهي بـ `/.v` هو `1s` ، وإلا فلن يمكن الوصول إلى المحتوى الذي تم إصداره حديثًا على الفور.

## نشر الموقع

يمكن نشر موقع الويب في أي مكان [github page](https://pages.github.com) و [cloudflare page](https://pages.cloudflare.com) خياران جيدان.

نظرًا لأن موقع الويب يستخدم بنية [تطبيق من صفحة واحدة](https://developer.mozilla.org/docs/Glossary/SPA) ، تذكر إعادة كتابة مسارات URL التي لا تحتوي على `. ` إلى `index.html` .

يجب نشر صفحة إدخال موقع الويب مرة واحدة فقط، وليست هناك حاجة لإعادة نشر صفحة إدخال موقع الويب لتحديثات المحتوى اللاحقة.

### نشر على صفحة جيثب

[انقر هنا أولاً لإنشاء github](https://github.com/account/organizations/new?plan=free) . اسم المنظمة التالي هو `i18n-demo` كمثال.

ثم قم بإنشاء المستودع `i18n-demo.github.io` ضمن هذه المؤسسة (يُرجى استبدال `i18n-demo` باسم المؤسسة التي قمت بإنشائها):

![](https://p.3ti.site/1721098657.avif)

عند نشر محتوى المقالة السابقة، تم إنشاء `out/main/htm` ، الرجاء إدخال هذا الدليل وتشغيله :

```
ln -s index.html 404.html
```


نظرًا لأن `github page` لا يدعم إعادة كتابة مسار URL، يتم استخدام `404.html` بدلاً من ذلك.

ثم قم بتشغيل الأمر التالي في الدليل `htm` (تذكر استبدال `i18n-demo/i18n-demo.github.io.git` بعنوان المستودع الخاص بك) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

بعد دفع الكود، انتظر حتى يتم تشغيل نشر `github page` بنجاح (كما هو موضح أدناه) قبل أن تتمكن من الوصول إليه.

<img src="//p.3ti.site/1721116586.avif" width="350px">

للحصول على الصفحة التجريبية يرجى الاطلاع على:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

### نشر على صفحة cloudflare

بالمقارنة مع `github page` [cloudflare page](//pages.cloudflare.com) فإنه يوفر إعادة كتابة المسار وهو أكثر ملاءمة لبر الصين الرئيسي ويوصى باستخدامه.

يعتمد نشر `cloudflare page` عادةً على نشر `github page` أعلاه.

قم بإنشاء مشروع وربط المستودع `i18n-demo.github.io` أعلاه.

تظهر العملية في الشكل أدناه:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

الرجاء النقر فوق `Add Account` لمنح حق الوصول إلى المؤسسة `i18n-demo` .

إذا قمت بربط مستودع مؤسسة أخرى، فقد تحتاج إلى النقر فوق `Add Account` مرتين للتفويض مرتين قبل عرض المؤسسة الجديدة.

![](https://p.3ti.site/1721118306.avif)

بعد ذلك، حدد المستودع `i18n-demo.github.io` ، ثم انقر فوق `Begin setup` ، واستخدم القيم الافتراضية للخطوات اللاحقة.

![](https://p.3ti.site/1721118490.avif)

بعد الربط لأول مرة، عليك الانتظار بضع دقائق قبل أن تتمكن من الوصول إليه.

بعد النشر، يمكنك ربط اسم مجال مخصص.

![](https://p.3ti.site/1721119459.avif)

بعد ربط اسم المجال المخصص، يرجى الانتقال إلى اسم المجال لتكوين إعادة كتابة المسار لتطبيق الصفحة الواحدة، كما هو موضح أدناه:

![](https://p.3ti.site/1721119320.avif)

القواعد الموجودة في الصورة أعلاه هي كما يلي، يرجى استبدال `i18n.site` في السطر الأول أدناه باسم النطاق الذي قمت بربطه.

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

بالإضافة إلى ذلك، يرجى تكوين قواعد ذاكرة التخزين المؤقت، كما هو موضح أدناه، وتعيين مدة ذاكرة التخزين المؤقت إلى شهر واحد.

![](https://p.3ti.site/1721125111.avif)

يرجى تغيير اسم النطاق المطابق في الخطوة الثانية في الصورة أعلاه إلى اسم النطاق الذي ربطته.

### تحسين نشر موقع الويب في الصين القارية

إذا كنت ترغب في الحصول على أداء أفضل لإمكانية الوصول في بيئة الشبكة في الصين القارية، فيرجى [تسجيل اسم المجال](//beian.aliyun.com) أولاً.

ثم استخدم تخزين الكائنات الخاص ببائعي السحابة في + القارية `CDN` انشر المحتوى التالي `out/main/htm` .

يمكنك استخدام حوسبة الحافة لإعادة كتابة المسار للتكيف مع تطبيقات الصفحة الواحدة، على سبيل المثال، يمكن تكوين [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) على النحو التالي:

```js
const uri = r.uri, p = uri.lastIndexOf(".");
if (
  p < 0 ||
  !"|js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest|".includes(
    "|" + uri.slice(p + 1) + "|",
  )
) {
  const ua = r.headersIn["User-Agent"].toLowerCase()
  if (/facebookexternalhit|slurp|bot|spider|curl/.test(ua)) {
    r.return(
      302,
      (/baidu|yisou|sogou|360|byte/.test(ua) ? "/zh" : "/en") + r.uri + ".htm",
    )
  } else {
    r.uri = "/index.html"
  }
}

r.respHeader(() => {
  const t = [], out = r.headersOut;
  ["Content-MD5", "Age", "Expires", "Last-Modified"].forEach(
    i => delete out[i]
  )
  r.rawHeadersOut.forEach(i => {
    const key = i[0].toLowerCase()
    if (key.startsWith("x-") || key.startsWith("ohc-")) {
      delete out[key]
    }
  })
  out["Cache-Control"] = "max-age=" + 9e5
  // يمكنك ضبط رأس الاستجابة لتصحيح أخطاء الإخراج، مثل out.XXX = 'MSG';
})
```

![](https://p.3ti.site/1721121273.avif)

نظرًا لأنه لا يمكن التواجد بين السجل `MX` والسجل `CNAME` ، إذا كنت ترغب في تلقي رسائل البريد الإلكتروني الخاصة باسم المجال في نفس الوقت، فستحتاج إلى التعاون مع البرنامج [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) للوصول إلى المستوى `CNAME` في السجل `A` .

بالإضافة إلى ذلك، نظرًا لأن رسوم حركة المرور الخارجية لموردي الخدمات السحابية في البر الرئيسي للصين باهظة الثمن نسبيًا، إذا كنت ترغب في تحسين التكاليف، فيمكنك استخدام [DNS الجغرافية المجانية لـ Huawei Cloud](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) واسم النطاق المخصص [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (كما هو موضح أدناه) لتحقيق ذلك تحويل حركة المرور──توجيه حركة المرور في البر الرئيسي للصين Baidu Cloud `CDN` ، حركة المرور الدولية تذهب cloudflare .

![](https://p.3ti.site/1721119788.avif)

تعد حلول تحسين النشر هذه أكثر تعقيدًا وسيتم تقديمها في فصول منفصلة في المستقبل.

### إعادة توجيه اسم المجال العام

إذا كنت تستخدم `i18n.site` لإنشاء موقع ويب باعتباره موقع الويب الرئيسي الخاص بك، فستحتاج عادةً إلى تكوين إعادة توجيه النطاق الشامل، أي إعادة توجيه الوصول إلى `*.xxx.com` (بما في ذلك `www.xxx.com` ) إلى `xxx.com` .

يمكن تحقيق هذا المطلب بمساعدة Alibaba Cloud `CDN` `EdgeScript` ( [مستند باللغة الإنجليزية](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [مستند صيني](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

أضف اسم المجال في [Alibaba Cloud CDN](https://cdn.console.aliyun.com/domain/list) وأشر إلى اسم المجال `*.xxx.com` `CNAME` في Alibaba Cloud `CDN` .

![](https://p.3ti.site/1721122000.avif)

على سبيل المثال، تكوين إعادة توجيه اسم النطاق الشامل بقيمة `*.i18n.site` في الصورة أعلاه هو كما يلي:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

### النشر باستخدام nginx

الرجاء إضافة تكوين مشابه لما يلي في الفقرة `server` من nginx يرجى تغيير `/root/i18n/md/out/main/htm` إلى مسار مشروعك `out/main/htm` :

```
location / {
  root  /root/i18n/md/out/main/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

## على أساس `github action` التكامل المستمر

يمكنك الرجوع إلى ما يلي لتكوين `github action` الخاص بك:

```
name: i18n.site

on:
  workflow_dispatch:
  push:
    branches:
      - main
      - dist

jobs:
  i18n:

    permissions:
      repository-projects: write
      contents: write

    runs-on: ubuntu-latest

    steps:
      - name: checkout
        uses: actions/checkout@v4

      - name: https://i18n.site
        uses: i18n-site/github-action-i18n.site@main
        with:
          I18N_SITE_TOKEN: ${{ secrets.I18N_SITE_TOKEN }}
          NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
```

كما يمكن رؤيته في التكوين، يتم تشغيل سير العمل هذا عند الضغط على الفرع `main` والفرع `dist` .

سيستخدم سير العمل ملف التكوين المطابق لاسم الفرع لنشر المستند. هنا، سيتم استخدام `.i18n/htm/main.yml` و `.i18n/htm/dist.yml` كتكوين النشر على التوالي.

نوصي بأفضل الممارسات التالية لعملية إصدار المستندات:

عندما يتم دفع التغييرات إلى الفرع `main` ، يتم تشغيل المستند ليتم إنشاؤه ونشره في محطة المعاينة (محطة المعاينة متاحة [github page](//pages.github.com) ).

بعد التأكد من صحة المستند في موقع المعاينة، سيتم دمج الكود ودفعه إلى الفرع `dist` ، وسيتم إجراء البناء والنشر الرسمي عبر الإنترنت.

بالطبع، يتطلب تنفيذ العملية المذكورة أعلاه كتابة المزيد من التكوينات.

يمكنك الرجوع إلى المشروع الفعلي للبرمجة النصية لسير العمل [github.com/fcdoc/doc](//github.com/fcdoc/doc/blob/main/.github/workflows/i18n.site.yml)

يتطلب `secrets.I18N_SITE_TOKEN` و `secrets.NPM_TOKEN` في التكوين تكوين المتغيرات السرية في قاعدة التعليمات البرمجية.

![](//p.3ti.site/1730970199.avif)

`I18N_SITE_TOKEN` [i18n.site/token](//i18n.site/token)

`NPM_TOKEN` هو رمز النشر للحزمة `npm` في التكوين. قم بزيارة [npmjs.com](//npmjs.com) وقم بإنشاء رمز مميز بأذونات النشر (كما هو موضح أدناه).

![](//p.3ti.site/1730969906.avif)


## هيكل الدليل

### `public`

الملفات الثابتة للموقع، مثل `favicon.ico` ، `robots.txt` ، إلخ.

يمكن إنشاء ملفات الأيقونات هنا بامتداد [realfavicongenerator.net](https://realfavicongenerator.net)

### `.i18n`

تحت الدليل `.i18n` توجد ملفات التكوين وذاكرة التخزين المؤقت للترجمة وما إلى ذلك لـ `i18n.site` راجع الفصل التالي ["التكوين"](/i18n.site/conf) للحصول على التفاصيل.

### `en`

دليل اللغة المصدر، المطابق لملف التكوين `en` من `fromTo` في `.i18n/conf.yml`

```yaml
i18n:
  fromTo:
    en: zh
```

يرجى الرجوع إلى تكوين الترجمة [i18](/i18/use)