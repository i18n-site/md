# تثبيت &

## التثبيت

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## تكوين الرمز

`i18n.site` يحتوي على أداة الترجمة `i18` مدمجة، يرجى [النقر هنا للإشارة إلى مستند `i18` لتكوين رمز الوصول](/i18/use) .

## مشروع تجريبي

لنبدأ بمشروع عرضي لفهم كيفية استخدام `i18n.site` .

نبدأ بنسخ المستودع العرضي وتشغيل الأمر التالي:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

يمكن للمستخدمين في الصين الشعبية:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

يجب أن يكون اسم الدليل المستنسخ لقاعدة `demo.i18n.site` هو `md` لتسهيل المعاينة المحلية باستخدام `docker` .

### الترجمة

أولاً، انتقل إلى الدليل `md` وقم بتشغيل `i18n.site`، والذي سيترجمان `en` إلى `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

بعد التشغيل، سيتم إنشاء ملفات الترجمة وملفات التخزين المؤقت. يرجى التأكد من إضافة هذه إلى المستودع باستخدام `git add . ` في `md` .

### المعاينة المحلية

تثبيت وتشغيل `docker` (يُنصح المستخدمين على `MAC` باستخدام [orbstack](https://orbstack.dev) كوقت تشغيل `docker`).

ثم انتقل إلى الدليل `docker` وقم بتشغيل `./up.sh`، ثم اذهب إلى [https://127.0.0.1](https://127.0.0.1) للمعاينة المحلية.

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### نشر المحتوى

يستخدم `i18n.site` بنية [التطبيق من الصفحة الواحدة](https://developer.mozilla.org/docs/Glossary/SPA) ويتم نشر صفحة الدخول لموقع الويب ومحتوى الموقع بشكل مستقل.

بعد تشغيل الترجمة أعلاه، سيتم إنشاء مجلدي `htm` و `v` داخل دليل `md/out/dev` .

هنا، `dev` يعني أنه تم إنشاؤه بناءً على ملف التكوين `.i18n/htm/dev.yml` .

داخل `dev` الدليل:

يحتوي مجلد `htm` على صفحة الدخول لموقع الويب.

يحتوي مجلد `v` على محتوى الموقع مع أرقام الإصدارات.

لا تهتم المعاينة المحلية بأرقام الإصدارات وسيتم نسخ جميع الملفات إلى دليل `out/dev/v/0.1.0` .

بالنسبة للإصدار الرسمي، سيتم نسخ الملفات التي تم تعديلها إلى دليل رقم الإصدار الجديد.

#### استخدم `-c` لتحديد ملف التكوين

ستقوم ملفات التكوين المختلفة بإنشاء مجلدات مقابلة داخل دليل `out` .

على سبيل المثال، `.i18n/htm/ol.yml` ستقوم بإنشاء مجلد `out/ol` .

`dev.yml` و `ol.yml` هما التكوينات الافتراضية.

`dev` هو اختصار لـ `development`، مما يشير إلى بيئة التطوير المستخدمة للمعاينة المحلية، وهو أيضًا ملف التكوين الافتراضي.
`ol` هو اختصار لـ `online`، مما يشير إلى بيئة الإنترنت، ويتم استخدامها للإصدار الرسمي، وهو أيضًا ملف التكوين الافتراضي عند استخدام معلمات سطر الأوامر `-n` للإصدار إلى `npm`.

يمكنك أيضًا إنشاء ملفات تكوين أخرى باستخدام `--htm_conf` في سطر الأوامر لتعيين اسم ملف التكوين المراد استخدامه:

على سبيل المثال:
```
i18n.site --htm_conf yourConfig --save
```

هنا، `--save` يعني تحديث رقم إصدار الإصدار.

#### <a rel=id href="#npm" id="npm"></a> نشر المحتوى على npmjs.com

يعتبر نشر المحتوى على [npmjs.com](//npmjs.com) الحل الافتراضي الموصى به (انظر [الاستقرار العالي للواجهة الأمامية](/i18n.site/feature#ha)).

##### تسجيل الدخول إلى npm وتشغيل

تثبيت `nodejs` واستخدام `npm login` للدخول.

قم بتعديل ملف `md/.i18n/htm/ol.yml`، وقم بتغيير القيمة الخاصة بـ [`md:`](//github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/ol.yml#L7) من `YOUR_NPM_PACKAGE` إلى اسم حزمة `npm` الخاص بك. يمكنك اختيار أي اسم حزمة غير محجوز على [npmjs.com](//npmjs.com).

ثم قم بتعديل ملف `md/.i18n/htm/ol.package.json`

قم بتشغيل `i18n.site --npm` أو `i18n.site -n` في دليل `md` للترجمة والنشر.

إذا كنت تستخدم بيئة تكامل مستمر للنشر، فليست هناك حاجة لتثبيت `nodejs`، ما عليك سوى نسخ إذن تسجيل الدخول والنشر `~/.npmrc` إلى البيئة.

إذا قمت بتعديل اسم الحزمة `v:` في `ol.yml`، فيرجى **حذف `.i18n/v/ol` أولاً** ثم نشرها.

##### خادم الوكيل الخاص بنشر npm

إذا واجه المستخدمون في الصين الشعبية مشكلات في الشبكة ولم يتمكنوا من نشر `npm` الحزمة، يمكنهم تعيين متغير البيئة `https_proxy` لتكوين خادم الوكيل.

على افتراض أن منفذ خادم الوكيل الخاص بك هو `7890`، يمكنك كتابة:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### محتوى مستضاف ذاتيًا

إذا كنت ترغب في استضافة المحتوى ذاتيًا، قم أولاً بتحرير `md/.i18n/htm/ol.yml` وتعديل `v: //unpkg.com/i18n.site` إلى بادئة عنوان URL مثل `v: //i18n-v.xxx.com`.

انضم إلى الدليل `md` وتشغيله

```
i18n.site --htm_conf ol --save
```

أو اختصار

```
i18n.site -c ol -s
```

ثم قم بتكوين المحتوى في دليل `md/out/ol/v` إلى مسار بادئة URL المعين في `v:`.

في النهاية، **تأكد من تكوين وقت التخزين المؤقت للمسار المنتهي بـ `/.v` إلى `1s`**، وإلا لن يمكن الوصول إلى المحتوى الذي تم إصداره حديثًا على الفور.

يمكن ضبط وقت التخزين المؤقت للمسارات الأخرى إلى سنة واحدة أو أكثر لتقليل الطلبات غير الضرورية.

##### استضافة المحتوى على S3

بالإضافة إلى استخدام خادمك الخاص، يعد استخدام `S3` + `CDN` خيارًا شائعًا لاستضافة المحتوى.

يمكنك استخدام [rclone](https://rclone.org) للدخول إلى خادم `S3`، ثم الرجوع إلى البرنامج النصي التالي وتعديله، ونسخ التغييرات المتزايدة فقط إلى `S3` لكل إصدار.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

تذكر تكوين `CDN` بحيث يكون وقت التخزين المؤقت للمسار المنتهي بـ `/.v` هو `1s`، وإلا لن يمكن الوصول إلى المحتوى الذي تم إصداره حديثًا على الفور.

### نشر الموقع

يمكن نشر الموقع على أي مكان [github page](https://pages.github.com) و [cloudflare page](https://pages.cloudflare.com) كخيارات جيدة.

بما أن الموقع يستخدم بنية [التطبيق من الصفحة الواحدة](https://developer.mozilla.org/docs/Glossary/SPA)، تأكد من إعادة كتابة مسارات URL التي لا تحتوي على `. ` إلى `index.html`.

يجب نشر صفحة الدخول لموقع الويب مرة واحدة فقط، وليس هناك حاجة لإعادة نشر صفحة الدخول لمحتوى التحديثات اللاحقة.

#### نشر على صفحة GitHub

[انقر هنا أولاً لإنشاء GitHub](https://github.com/account/organizations/new?plan=free). اسم المنظمة التالي هو `i18n-demo` كمثال.

ثم قم بإنشاء مستودع `i18n-demo.github.io` داخل هذه المنظمة (يُرجى استبدال `i18n-demo` باسم المنظمة التي قمت بإنشائها):

![](https://p.3ti.site/1721098657.avif)

عند نشر محتوى المقالة السابقة، تم إنشاء `out/ol/htm`، يرجى الدخول إلى هذا الدليل وتشغيله:

```
ln -s index.html 404.html
```


بما أن `github page` لا يدعم إعادة كتابة مسار URL، يتم استخدام `404.html` كالبديل.

ثم قم بتشغيل الأمر التالي في دليل `htm` (تذكر استبدال `i18n-demo/i18n-demo.github.io.git` بعنوان المستودع الخاص بك):

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

بعد دفع الكود، انتظر حتى يتم تشغيل نشر `github page` بنجاح (كما هو موضح أدناه) قبل أن تتمكن من الوصول إليه.

<img src="//p.3ti.site/1721116586.avif" width="350px">

للحصول على الصفحة العرضية، يرجى الاطلاع على:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### نشر على صفحة Cloudflare

على عكس `github page`، يقدم [cloudflare page](//pages.cloudflare.com) إعادة كتابة المسار وهو أكثر ملاءمة للبر الرئيسي للصين ويُنصح باستخدامه.

يتم نشر `cloudflare page` عادةً بناءً على نشر `github page` أعلاه.

قم بإنشاء مشروع وربط مستودع `i18n-demo.github.io` أعلاه.

تظهر العملية في الشكل أدناه:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

الرجاء النقر على `Add Account` لإعطاء الحقوق للوصول إلى منظمة `i18n-demo`.

إذا قمت بربط مستودع منظمة أخرى، قد تحتاج إلى النقر على `Add Account` مرتين للتفويض مرتين قبل عرض المنظمة الجديدة.

![](https://p.3ti.site/1721118306.avif)

بعد ذلك، حدد مستودع `i18n-demo.github.io`، ثم انقر على `Begin setup`، واستخدم القيم الافتراضية للخطوات اللاحقة.

![](https://p.3ti.site/1721118490.avif)

بعد الربط لأول مرة، عليك الانتظار بضع دقائق قبل أن تتمكن من الوصول إليه.

بعد النشر، يمكنك ربط اسم نطاق مخصص.

![](https://p.3ti.site/1721119459.avif)

بعد ربط اسم النطاق المخصص، يرجى الانتقال إلى اسم النطاق لتكوين إعادة كتابة المسار لتطبيق الصفحة الواحدة، كما هو موضح أدناه:

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

#### تحسين نشر الموقع في البر الرئيسي للصين

إذا كنت ترغب في الحصول على أداء أفضل لإمكانية الوصول في بيئة الشبكة في البر الرئيسي للصين، فيرجى [تسجيل اسم المجال](//beian.aliyun.com) أولاً.

ثم استخدم تخزين الكائنات الخاص ببائعي السحابة في البر الرئيسي للصين + `CDN` لنشر المحتوى التالي `out/ol/htm`.

يمكنك استخدام حوسبة الحافة لإعادة كتابة المسار للتكيف مع تطبيقات الصفحة الواحدة، على سبيل المثال، يمكن تكوين [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) على النحو التالي:

```js
var uri=r.uri,p=uri.lastIndexOf('.');
if(
  p<0 || !'|avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml|'.includes('|'+uri.slice(p+1)+'|')
){
  r.uri='/index.html'
}
r.respHeader(()=>{
var t = [];
r.rawHeadersOut.forEach((i)=>{
    var out = r.headersOut;
    var key = i[0].toLowerCase();
    if(key.startsWith('x-')||key.startsWith('ohc-')){
        delete out[key]
    }
    out['Cache-Control']='max-age='+9e5;
    ['Content-MD5','Age','Expires','Last-Modified'].forEach((i)=>delete out[i])
})
})
```
![](https://p.3ti.site/1721121273.avif)

نظرًا لأنه لا يمكن التواجد بين السجل `MX` والسجل `CNAME`، إذا كنت ترغب في تلقي رسائل البريد الإلكتروني الخاصة باسم المجال في نفس الوقت، فستحتاج إلى التعاون مع البرنامج [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) للوصول إلى المستوى `CNAME` في السجل `A`.

بالإضافة إلى ذلك، نظرًا لأن رسوم حركة المرور الخارجية لموردي الخدمات السحابية في البر الرئيسي للصين باهظة الثمن نسبيًا، إذا كنت ترغب في تحسين التكاليف، فيمكنك استخدام [DNS الجغرافية المجانية لـ Huawei Cloud](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) واسم النطاق المخصص [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (كما هو موضح أدناه) لتحقيق ذلك تحويل حركة المرور──حركة المرور في البر الرئيسي للصين Baidu Cloud `CDN`، حركة المرور الدولية تذهب cloudflare.

![](https://p.3ti.site/1721119788.avif)

تعد حلول تحسين النشر هذه أكثر تعقيدًا وسيتم تقديمها في فصول منفصلة في المستقبل.

#### إعادة توجيه اسم المجال العام

إذا كنت تستخدم `i18n.site` لإنشاء موقع ويب باعتباره موقع الويب الرئيسي الخاص بك، فستحتاج عادةً إلى تكوين إعادة توجيه اسم المجال العام، أي إعادة توجيه الوصول إلى `*.xxx.com` (بما في ذلك `www.xxx.com`) إلى `xxx.com`.

يمكن تنفيذ هذا الطلب بمساعدة `EdgeScript` لـ `CDN` من Alibaba Cloud ( [مستند باللغة الإنجليزية](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [مستند باللغة الصينية](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

أضف اسم المجال في [Alibaba Cloud CDN](https://cdn.console.aliyun.com/domain/list) وأشر إلى اسم المجال `*.xxx.com` `CNAME` في Alibaba Cloud `CDN` .

![](https://p.3ti.site/1721122000.avif)

على سبيل المثال، تكوين إعادة توجيه اسم النطاق الشامل `*.i18n.site` في الصورة أعلاه هو كما يلي:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

#### النشر باستخدام nginx

الرجاء إضافة تكوين مشابه لما يلي في جزء `server` من nginx، يرجى تعديل `/root/i18n/md/out/ol/htm` إلى مسار مشروعك الخاص `out/ol/htm` :

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### هيكل الدليل

#### `public`

ملفات الموقع الثابتة مثل `favicon.ico` و`robots.txt` وما إلى ذلك.

يمكن إنشاء ملفات الأيقونات هنا باستخدام [مولد RealFaviconGenerator](https://realfavicongenerator.net)

#### `.i18n`

تحت دليل `.i18n` توجد ملفات التكوين وذاكرة التخزين المؤقت للترجمات وما إلى ذلك لـ `i18n.site`، راجع الفصل التالي ["التكوين"](/i18n.site/conf) للحصول على التفاصيل.

#### `en`

دليل اللغة المصدر، الذي يطابق `en` في ملف التكوين `fromTo` في `.i18n/conf.yml`

```yaml
i18n:
  fromTo:
    en: zh
```

يرجى الرجوع إلى تكوين الترجمة في [i18](/i18/use)