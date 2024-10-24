# تحسين محركات البحث (SEO)

## المبدأ

يستخدم `i18n.site` بنية صفحة واحدة بدون إعادة تحميل، من أجل تسهيل فهرسة محركات البحث، سيتم إنشاء صفحات ثابتة منفصلة وملف `sitemap.xml` لجعل الزاحف يمكنه التقاطها.

عندما يستخدم زاحف محرك البحث `User-Agent` لطلب الوصول، ستتم إعادة توجيه الطلب إلى الصفحة الثابتة عبر `302`.

في الصفحات الثابتة، استخدم `link` للإشارة إلى الروابط إلى إصدارات اللغات المختلفة لهذه الصفحة، مثل:

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```

## تكوين upload static file object storage

يمكن إنشاء الملفات الثابتة محليًا، ولكن الطريقة الأكثر شيوعًا هي تحميلها إلى object storage.

بالنسبة لمثال ملف التكوين `.i18n/htm/ol.yml` في المشروع التوضيحي:

```yml
host: i18n-demo.github.io
seo: true
out:
  - fs

pkg:
  i: i18n.site
  md: i18n.site

cdn:
  v:
  jsd:
```

يرجى تعديل قيمة `host:` في الأعلى إلى نطاقك، مثل `i18n.site`.

ثم قم بتحرير `~/.config/i18n.site.yml` وأضف التكوين التالي:

```yml
site:
  i18n.site:
    s3:
      - endpoint: s3.eu-central-003.backblazeb2.com
        ak: # access key
        sk: # secret key
        bucket: # bucket name
        # region:
```

في التكوين، يرجى تعديل `i18n.site` إلى قيمة `host:` في `.i18n/htm/ol.yml`، ويمكنك تكوين عدة مستودعات的对象 التخزين تحت `s3`، الحقل `region` هو اختياري (كثير من مستودعات Object Storage لا تحتاج إلى إعداده).

ثم قم بتشغيل `i18n.site -n` لإعادة نشر المشروع.

إذا قمت بتعديل `~/.config/i18n.site.yml` وتريد إعادة رفعها، استخدم الأمر التالي في الدليل الجذر للمشروع لتنظيف ذاكرة التخزين المؤقت للرفع:

```
rm -rf .i18n/data/seo .i18n/data/public
```

## تكوين Cloudflare

اسم المجال المستضاف على [cloudflare](//www.cloudflare.com).

### قواعد التحويل

أضف قواعد التحويل كما هو موضح أدناه:

![](//p.3ti.site/1725436822.avif)

رمز القاعدة هو كما يلي، يرجى تعديل الرمز "i18n.site" إلى اسم النطاق الخاص بك:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### قواعد التخزين المؤقت

أضف قواعد التخزين المؤقت كما يلي:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### قواعد إعادة التوجيه

قم بضبط قواعد إعادة التوجيه كما يلي، يرجى تعديل الكود "i18n.site" إلى اسم النطاق الخاص بك:

![](//p.3ti.site/1725437096.avif)

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
) and (
http.user_agent wildcard "*bot*" or
http.user_agent wildcard "*spider*" or
http.user_agent wildcard "*facebookexternalhit*" or
http.user_agent wildcard "*slurp*" or
http.user_agent wildcard "curl*" or
http.user_agent wildcard "*InspectionTool*"
)
```

اختر إعادة التوجيه الديناميكي في `URL redirect`، ويرجى تعديل `/en` في مسار إعادة التوجيه `concat("/en",http.request.uri.path,".htm")` إلى اللغة الافتراضية التي تريد أن تُدخلها محركات البحث.

## تكوين بايدو السحابي الذكي

إذا كنت بحاجة إلى تقديم خدمات إلى البر الرئيسي للصين، فيمكنك استخدام [Baidu Smart Cloud](//cloud.baidu.com).

يتم تحميل البيانات إلى Baidu Object Storage وربطها بشبكة توزيع محتوى Baidu.

ثم قم بإنشاء البرنامج النصي في [EdgeJS边缘服务](//console.bce.baidu.com/cdn/#/cdn/ejs/list) كما يلي:

```js
var uri=r.uri,p=uri.lastIndexOf('.');

if(
  p<0 || !/html?|css|rss|avif|md|ico|gz|js|json|png|svg|txt|webmanifest|xml/.test(uri.slice(p+1))
){
  const ua = r.headersIn['User-Agent'].toLowerCase();
  if (/facebookexternalhit|slurp|bot|spider|curl/.test(ua)) {
    r.return(302,(/baidu|yisou|sogou|360|byte/.test(ua)?'/zh':'/en')+r.uri+'.htm')
    return
  }
  r.uri = '/index.html'
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

انقر فوق `Debug`، ثم انقر فوق نشر على الشبكة بالكامل.

![](//p.3ti.site/1725437754.avif)

## الاستخدام المتقدم: توزيع حركة المرور بناءً على تحليل الإقليمية

إذا كنت ترغب في تقديم الخدمات في البر الرئيسي للصين وتريد أيضًا حركة مرور دولية مجانية من `cloudflare`، فيمكنك استخدام `DNS` مع تحليل الإقليمية.

على سبيل المثال، توفر [华为云DNS](https://www.huaweicloud.com) تحليلًا إقليميًا مجانيًا، حيث يمكن لحركة المرور في البر الرئيسي الصيني أن تمر عبر Baidu Smart Cloud، ويمكن أن تمر حركة المرور الدولية عبر `cloudflare`.

هناك العديد من المصادر في تكوين `cloudflare`، إليك بعض النقاط التي يجب الانتباه إليها:

### إذا كان اسم المجال مستضافًا في `DNS` آخر، كيفية استخدام `cloudflare`؟

ابدأ بربط نطاق عشوائي بـ `cloudflare`، ثم استخدم `SSL/TLS` → نطاق مخصص لربط النطاق الرئيسي بهذا النطاق.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` لا يمكن الوصول إليه عبر نطاق مخصص

نظرًا لأنه لا يمكن الوصول إلى مخزن الكائنات `R2` المدمج في `cloudflare` عبر اسم نطاق مخصص، لذا يلزم استخدام مخزن كائنات خارجي لتحميل الملفات الثابتة.

نأخذ [backblaze.com](https://www.backblaze.com) كمثال لتوضيح كيفية ربط مستودع كائنات الطرف الثالث ليتم تخزينه عند `cloudflare`.

أنشئ مجموعة في `backblaze.com`، وقم بتحميل أي ملف، وانقر لتصفح الملف، واحصل على اسم المجال `Friendly URL`، وهو `f003.backblazeb2.com` هنا.

![](//p.3ti.site/1725440783.avif)

قم بتغيير اسم المجال من `CNAME` إلى `f003.backblazeb2.com` عند `cloudflare` وقم بتمكين الوكيل.

![](//p.3ti.site/1725440896.avif)

تعديل `cloudflare` من `SSL` ← وضع التشفير، اضبط على `Full`

![](//p.3ti.site/1725438572.avif)

أضف قاعدة التحويل كما هو موضح أدناه، ضعها في第一位 (الأولى تكون الأقل أولوية):

![](//p.3ti.site/1725443232.avif)

اختر `Rewrite to` الديناميكي، وقم بتعديل `your_bucketname` في `concat("/file/your_bucketname",http.request.uri.path)` إلى اسم مستودعك.

بالإضافة إلى ذلك، في قواعد التحويل في `cloudflare`، قم بتغيير `index.html` إلى `file/your_bucketname/index.html`، واترك باقي التكوينات كما هي.

![](//p.3ti.site/1725441384.avif)