# تثبيت &

## رمز التكوين

تم تضمين أداة الترجمة `i18` `i18n.site` يرجى [النقر هنا للإشارة إلى مستند `i18` لتكوين رمز الوصول](/i18/use) .

## ثَبَّتَ

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## مشروع تجريبي

لنبدأ بمشروع تجريبي ونتعلم كيفية استخدامه `i18n.site`

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

يجب `demo.i18n.site` يكون اسم الدليل الخاص باستنساخ قاعدة التعليمات البرمجية هو `md` لتسهيل المعاينة المحلية باستخدام `docker` .

### يترجم

أولاً، أدخل `md` وقم بتشغيل `i18n.site` ، والذي سيترجم `en` إلى `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

بعد التشغيل، سيتم إنشاء ملفات الترجمة وذاكرة التخزين المؤقت. يرجى تذكر إضافتها إلى المستودع `git add . ` في الدليل `md`

### المعاينة المحلية

التثبيت والبدء `docker` (#يوصي `MAC` باستخدام [orbstack](https://orbstack.dev) كوقت تشغيل `docker` ).

ثم أدخل `docker` وقم بتشغيل `./up.sh` ، ثم قم بزيارة [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### آخر المحتوى

يعتمد بنية [تطبيق من صفحة واحدة](https://developer.mozilla.org/docs/Glossary/SPA) `i18n.site` ويتم نشر صفحة دخول موقع الويب ومحتوى موقع الويب بشكل مستقل.

بعد تشغيل الترجمة أعلاه، سيتم إنشاء المجلدين `htm` و `v` في `md/out/dev` .

يشير `dev` هنا إلى أنه تم إنشاؤه بناءً على ملف `.i18n/htm/dev.yml` .

تحت : `dev`

تحت الدليل `htm` صفحة الدخول للموقع.

يحتوي `v` على محتوى الموقع مع رقم الإصدار.

ستقوم المعاينة المحلية بنسخ كافة الملفات إلى `out/dev/v/0.1.0` بغض النظر عن رقم الإصدار.

بالنسبة للإصدار الرسمي، سيتم نسخ الملفات التي تم تغييرها إلى دليل رقم الإصدار الجديد.

#### استخدم -c لتحديد ملف التكوين

ستقوم ملفات التكوين المختلفة بإنشاء الدلائل المقابلة ضمن الدليل `out`

على سبيل المثال، سوف يقوم `.i18n/htm/ol.yml` بإنشاء دليل `out/ol` .

`dev.yml` و `ol.yml` هي التكوينات الافتراضية.

`dev` هو اختصار `development` ، والذي يمثل بيئة التطوير، ويستخدم للمعاينة المحلية، وهو أيضًا ملف التكوين الافتراضي.
هو اختصار لـ `online` `ol` والذي يمثل البيئة عبر الإنترنت، ويستخدم للإصدار الرسمي، وهو أيضًا ملف التكوين الافتراضي عند النشر إلى `npm` باستخدام معلمة سطر الأوامر `-n` .

يمكنك أيضًا إنشاء ملفات تكوين أخرى. استخدم `--htm_conf` في سطر الأوامر لتحديد اسم ملف التكوين:

على سبيل المثال:
```
i18n.site --htm_conf yourConfig --save
```

`--save` يشير إلى رقم إصدار إصدار التحديث.

#### <a rel=id href="#npm" id="npm"></a> نشر المحتوى على npmjs.com

يعد نشر المحتوى على [npmjs.com](//npmjs.com) هو الحل الافتراضي الموصى به (راجع [التوفر العالي للواجهة الأمامية](/i18n.site/feature#ha) ).

##### npm login & يطلق

تثبيت `nodejs` استخدم `npm login` لتسجيل الدخول.

تحرير `md/.i18n/htm/ol.yml` قم بتغيير `i18n.site` الموجود في `v: //unpkg.com/i18n.site` إلى اسم الحزمة الخاص بك `npm` اسم الحزمة.

ما عليك سوى استخدام اسم الحزمة غير المشغولة على [npmjs.com](//npmjs.com) . يعد استخدام اسم مجال موقع الويب كاسم الحزمة خيارًا جيدًا.

عند النشر بناءً على الحزمة `npm` **تأكد من استخدام `//unpkg.com/`** كبادئة لقيمة `v:` . تم تحسين وقت التخزين المؤقت `i18n.site` تحت مسار البادئة `/.v` خصيصًا لتمكين عرض الإصدارات الجديدة في الوقت المناسب.

قم بتشغيل `i18n.site --npm` أو `i18n.site -n` في `md` للترجمة والنشر.

إذا كنت تستخدم بيئة تكامل مستمر للنشر، فلا داعي لتثبيتها `nodejs` ما عليك سوى نسخ الإذن الذي تم تسجيل الدخول إليه ونشره `~/.npmrc` إلى البيئة.

إذا قمت بتعديل اسم الحزمة في `v:` `ol.yml` ، فيرجى **التأكد من حذف `.i18n/v/ol` أولاً** ثم نشره.

##### تم نشر الخادم الوكيل بواسطة npm

إذا واجه المستخدمون في الصين القارية مشكلات في الشبكة ولم يتمكنوا من نشر الحزمة `npm` فيمكنهم تعيين متغير البيئة `https_proxy` لتكوين الخادم الوكيل.

بافتراض أن منفذ الخادم الوكيل الخاص بك هو `7890` يمكنك كتابة:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### محتوى مستضاف ذاتيًا

إذا كنت تريد استضافة المحتوى بنفسك، فقم أولاً بتحرير `md/.i18n/htm/ol.yml` وتغيير `v: //unpkg.com/i18n.site` إلى بادئة عنوان URL، مثل `v: //i18n-v.xxx.com` .

أدخل `md` وتشغيله

```
i18n.site --htm_conf ol --save
```

أو اختصار

```
i18n.site -c ol -s
```

ثم قم بتكوين المحتوى الموجود في `md/out/ol/v` إلى مسار بادئة URL المعينة في `v:` .

أخيرًا، **قم بتكوين وقت التخزين المؤقت للمسار المنتهي `/.v` `1s`** ، وإلا فلن يمكن الوصول إلى المحتوى الذي تم إصداره حديثًا على الفور.

يمكن ضبط وقت التخزين المؤقت للمسارات الأخرى على سنة واحدة أو أكثر لتقليل الطلبات غير الضرورية.

##### استضافة المحتوى إلى s3

لاستضافة المحتوى ذاتيًا، بالإضافة إلى استخدام الخادم الخاص بك، `CDN` خيار شائع آخر وهو + `S3`

يمكنك استخدام خادم تسجيل الدخول [rclone](https://rclone.org) `S3` ثم الرجوع إلى البرنامج النصي أدناه وتعديله، ونسخ التغييرات الإضافية فقط إلى `S3` في كل مرة تقوم فيها بالنشر.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

تذكر أن تقوم بتكوين `CDN` بحيث يكون وقت التخزين المؤقت للمسار المنتهي بـ `/.v` `1s` ، وإلا فلن تتمكن من الوصول إلى المحتوى الذي تم إصداره حديثًا على الفور.

### نشر الموقع

يمكن نشر موقع الويب في أي مكان [github page](https://pages.github.com) و [cloudflare page](https://pages.cloudflare.com) خياران جيدان.

نظرًا لأن موقع الويب يعتمد بنية [تطبيق من صفحة واحدة](https://developer.mozilla.org/docs/Glossary/SPA) ، تذكر إعادة كتابة مسار URL الذي لا يحتوي على `index.html` `. `

يجب نشر صفحة إدخال موقع الويب مرة واحدة فقط، وليست هناك حاجة لإعادة نشر صفحة إدخال موقع الويب لتحديثات المحتوى اللاحقة.

#### نشر على صفحة جيثب

[انقر github أولاً لإنشاء منظمة](https://github.com/account/organizations/new?plan=free) . اسم المنظمة التالي هو `i18n-demo`

ثم أنشئ مستودعًا ضمن هذه `i18n-demo.github.io` (يُرجى استبدال `i18n-demo` باسم المؤسسة التي أنشأتها):

<img alt="" src="https://p.3ti.site/1721098657.avif">

عند نشر المحتوى في المقالة السابقة، تم إنشاؤه `out/ol/htm` الرجاء إدخال هذا الدليل وتشغيله :

```
ln -s index.html 404.html
```


لأن `github page` لا يدعم إعادة كتابة مسار URL، لذلك يتم استخدام `404.html` بدلاً من ذلك.

ثم قم بتشغيل الأمر التالي في `htm` (تذكر استبدال `i18n-demo/i18n-demo.github.io.git` بعنوان المستودع الخاص بك) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

بعد دفع الكود، انتظر حتى يتم تشغيل نشر `github page` بنجاح (كما هو موضح أدناه)، ومن ثم يمكنك الوصول إليه.

<img src="//p.3ti.site/1721116586.avif" width="350px">

للحصول على الصفحة التجريبية يرجى الاطلاع على:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### نشر على صفحة cloudflare

بالمقارنة مع [cloudflare page](//pages.cloudflare.com) `github page` فإنه يوفر إعادة كتابة المسار وهو أكثر ملاءمة لبر الصين الرئيسي ويوصى باستخدامه.

يعتمد النشر `cloudflare page` على نشر `github page` أعلاه.

إنشاء مشروع وربط المستودع أعلاه `i18n-demo.github.io`

تظهر العملية في الشكل أدناه:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

من فضلك انقر `Add Account` لمنح حق الوصول إلى `i18n-demo` المنظمة .

إذا قمت بربط مستودع مؤسسة أخرى، فقد تحتاج إلى النقر فوق `Add Account` مرتين لتخويله مرتين قبل أن يتم عرض المؤسسة الجديدة.

<img alt="" src="https://p.3ti.site/1721118306.avif">

بعد ذلك `i18n-demo.github.io` حدد Warehouse، ثم انقر فوق `Begin setup` ، واستخدم القيم الافتراضية للخطوات اللاحقة.

<img alt="" src="https://p.3ti.site/1721118490.avif">

بعد الربط لأول مرة، عليك الانتظار بضع دقائق قبل أن تتمكن من الوصول إليه.

بعد النشر، يمكنك ربط اسم مجال مخصص.

<img alt="" src="https://p.3ti.site/1721119459.avif">

بعد ربط اسم المجال المخصص، يرجى الانتقال إلى اسم المجال لتكوين إعادة كتابة المسار لتطبيق الصفحة الواحدة، كما هو موضح أدناه:

<img alt="" src="https://p.3ti.site/1721119320.avif">

القواعد الموجودة في الصورة أعلاه هي كما يلي، يرجى استبدال `i18n.site` في السطر الأول أدناه باسم النطاق المرتبط بك.

```
(http.host in {"i18n.site"}) and not (
ends_with(http.request.uri.path,".html") or
ends_with(http.request.uri.path,".htm") or
ends_with(http.request.uri.path,".ico") or
ends_with(http.request.uri.path,".js") or
ends_with(http.request.uri.path,".avif") or
ends_with(http.request.uri.path,".css") or
ends_with(http.request.uri.path,".json") or
ends_with(http.request.uri.path,".png") or
ends_with(http.request.uri.path,".svg") or
ends_with(http.request.uri.path,".txt") or
ends_with(http.request.uri.path,".webmanifest") or
ends_with(http.request.uri.path,".xml")
)
```

بالإضافة إلى ذلك، يرجى تكوين قواعد ذاكرة التخزين المؤقت، كما هو موضح أدناه، وتعيين مدة ذاكرة التخزين المؤقت إلى شهر واحد.

<img alt="" src="https://p.3ti.site/1721125111.avif">

يرجى تغيير اسم النطاق المطابق في الخطوة الثانية في الصورة أعلاه إلى اسم النطاق الذي ربطته.

#### تحسين نشر موقع الويب في الصين القارية

إذا كنت ترغب في الحصول على أداء أفضل لإمكانية الوصول في بيئة الشبكة في الصين القارية، فيرجى [تسجيل اسم المجال](//beian.aliyun.com) أولاً.

ثم استخدم تخزين `out/ol/htm` للبائعين السحابيين في `CDN` القارية +

يمكنك استخدام حوسبة الحافة لإعادة كتابة المسار للتكيف مع تطبيقات الصفحة الواحدة، مثل [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) ويمكن تكوينه على النحو التالي:

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
<img alt="" src="https://p.3ti.site/1721121273.avif">

نظرًا لأنه لا يمكن أن تتواجد سجلات `MX` و `CNAME` سجلات معًا، إذا كنت ترغب في تلقي رسائل بريد إلكتروني باسم المجال في نفس الوقت، فستحتاج إلى التعاون مع [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) النصي لتسوية `CNAME` في `A` سجل.

بالإضافة إلى ذلك، نظرًا لأن رسوم حركة المرور الخارجية لموردي الخدمات السحابية في البر الرئيسي للصين باهظة الثمن نسبيًا، إذا كنت ترغب في تحسين التكاليف، فيمكنك استخدام [DNS الجغرافية المجانية لـ Huawei Cloud](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) واسم النطاق المخصص [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (كما هو موضح أدناه) لتحقيق ذلك تحويل حركة المرور──حركة المرور في البر الرئيسي للصين Baidu Cloud `CDN` حركة المرور الدولية تذهب cloudflare .

<img alt="" src="https://p.3ti.site/1721119788.avif">

تعد حلول تحسين النشر هذه أكثر تعقيدًا وسيتم تقديمها في فصول منفصلة في المستقبل.

#### إعادة توجيه اسم المجال العام

إذا كنت تستخدم `i18n.site` لإنشاء موقع ويب باعتباره موقع الويب الرئيسي الخاص بك، فستحتاج عادةً إلى تكوين إعادة التوجيه الشامل، أي إعادة توجيه `*.xxx.com` (بما في ذلك `www.xxx.com` ) الوصول إلى `xxx.com` .

يمكن تحقيق هذا المطلب بمساعدة Alibaba `CDN` `EdgeScript` ( [مستند باللغة الإنجليزية](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [مستند صيني](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

أضف اسم المجال في [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) وقم بتوجيه `*.xxx.com` المجال إلى Alibaba Cloud `CDN` 's `CNAME` .

<img alt="" src="https://p.3ti.site/1721122000.avif">

على سبيل المثال، تكوين إعادة توجيه اسم النطاق الشامل لـ `*.i18n.site` في الصورة أعلاه هو كما يلي:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### النشر باستخدام nginx

يرجى إضافة تكوين مشابه لما يلي في `server` nginx حيث `/root/i18n/md/out/ol/htm` يرجى تغييره إلى مسار مشروعك `out/ol/htm` :

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### بنية الدليل

#### عام

الملفات الثابتة للموقع، مثل `favicon.ico` `robots.txt` ، إلخ.

يمكن إنشاء ملفات الأيقونات هنا بامتداد [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n

يوجد أسفل الدليل ملفات تكوين `i18n.site` وذاكرة التخزين المؤقت للترجمة وما إلى ذلك. راجع الفصل التالي ["التكوين"](/i18n.site/conf) للحصول على التفاصيل `.i18n`

#### أون

دليل اللغة المصدر، المتوافق `.i18n/conf.yml` `fromTo` `en` في ملف التكوين

```yaml
i18n:
  fromTo:
    en: zh
```

يرجى الرجوع إلى تكوين الترجمة [i18](/i18/use)

