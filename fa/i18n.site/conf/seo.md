# بهینه‌سازی موتورهای جستجو (SEO)

## اصل

`i18n.site` از یک معماری تک‌صفحه‌ای بدون بازخوانی استفاده می‌کند تا فهرست‌بندی جستجو را تسهیل کند، یک صفحه ثابت جداگانه و `sitemap.xml` برای خزنده‌ها تولید می‌شود.

هنگامی که `User-Agent` درخواست دسترسی توسط خزنده موتور جستجو استفاده می‌شود، درخواست از طریق `302` به صفحه ثابت هدایت می‌شود.

در صفحات استاتیک، از `link` برای نشان دادن پیوندهای نسخه‌های زبان‌های مختلف این صفحه استفاده می‌شود، مانند:

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```

## پیکربندی上传静态文件的对象存储

فایل‌های استاتیک می‌توانند به صورت محلی تولید شوند، اما روش رایج‌تر آپلود آنها به ذخیره‌سازی شی است.

به عنوان مثال، فایل پیکربندی `.i18n/htm/ol.yml` در پروژه نمونه در نظر گرفته می‌شود

```yml
host:
seo: true
out:
  - s3
v: //unpkg.com/i18n.site
x: 18x
importmap:
  i/: //unpkg.com/@i18n.site/
```

لطفاً ابتدا مقدار `host:` بالا را به نام دامنه خود تغییر دهید، مانند `i18n.site`.

سپس، فایل `~/.config/i18n.site.yml` را ویرایش کنید و پیکربندی زیر را اضافه کنید:

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

در پیکربندی، `i18n.site` را به مقدار `host:` در `.i18n/htm/ol.yml` تغییر دهید، چندین ذخیره‌های شی می‌توانند تحت `s3` پیکربندی شوند، فیلد `region` اختیاری است (بسیاری از ذخیره‌های شی نیازی به تنظیم این فیلد ندارند).

سپس دستور `i18n.site -n` را اجرا کنید تا پروژه دوباره منتشر شود.

اگر `~/.config/i18n.site.yml` تغییر داده شده است و می‌خواهید دوباره آپلود کنید، لطفاً از دستور زیر در فهرست اصلی پروژه برای پاک کردن کش آپلود استفاده کنید:

```
rm -rf .i18n/data/seo .i18n/data/public
```

## پیکربندی Cloudflare

نام دامنه در [cloudflare](//www.cloudflare.com) میزبانی می‌شود.

### قوانین تبدیل

قوانین تبدیل را مطابق شکل زیر اضافه کنید:

![](//p.3ti.site/1725436822.avif)

کد قانون به شرح زیر است، لطفاً کد "i18n.site" را به نام دامنه خود تغییر دهید:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### قوانین ذخیره‌سازی

قوانین کش را به صورت زیر اضافه کنید:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### قوانین تغییر مسیر

قوانین تغییر مسیر را به صورت زیر تنظیم کنید، لطفاً کد "i18n.site" را به نام دامنه خود تغییر دهید

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

`URL redirect` تغییر جهت پویا را انتخاب کنید، لطفاً `/en` در مسیر تغییر مسیر `concat("/en",http.request.uri.path,".htm")` به زبان پیشفرضی که میخواهید موتورهای جستجو در آن قرار دهند، تغییر دهید.

## پیکربندی ابر هوشمند Baidu

اگر نیاز به ارائه خدمات به سرزمین اصلی چین دارید، می‌توانید از [Baidu Smart Cloud](//cloud.baidu.com) استفاده کنید.

داده‌ها به Baidu Object Storage بارگذاری می‌شوند و به شبکه توزیع محتوای Baidu متصل می‌شوند.

سپس اسکریپت را در [سرویس EdgeJS](//console.bce.baidu.com/cdn/#/cdn/ejs/list) به صورت زیر ایجاد کنید:

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

روی `Debug` کلیک کنید، سپس روی انتشار در کل شبکه کلیک کنید.

![](//p.3ti.site/1725437754.avif)

## استفاده پیشرفته: توزیع ترافیک بر اساس تحلیل منطقه‌ای

اگر می‌خواهید هم در سرزمین اصلی چین خدمات ارائه دهید و هم ترافیک بین‌المللی رایگان `cloudflare` را داشته باشید، می‌توانید از `DNS` با تحلیل منطقه‌ای استفاده کنید.

برای مثال، [Huawei DNS](https://www.huaweicloud.com) تحلیل منطقه‌ای رایگان ارائه می‌دهد که با آن ترافیک سرزمین اصلی چین می‌تواند از طریق Baidu Smart Cloud عبور کند و ترافیک بین‌المللی می‌تواند از `cloudflare` عبور کند.

اشکالات زیادی در پیکربندی `cloudflare` وجود دارد. در اینجا چند نکته قابل توجه است:

### نام دامنه در `DNS` دیگر میزبانی می‌شود، نحوه استفاده از `cloudflare`

ابتدا یک نام دامنه دلخواه را به `cloudflare` متصل کنید و سپس از `SSL/TLS` → نام دامنه سفارشی برای مرتبط کردن نام دامنه اصلی به این نام دامنه استفاده کنید.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` از طریق یک نام دامنه سفارشی قابل دسترسی نیست

چون `R2` با نام دامنه سفارشی قابل دسترسی `cloudflare` نیست، برای قرار دادن فایل‌های استاتیک باید از یک ذخیره‌سازی شی شخص ثالث استفاده شود.

در اینجا ما [backblaze.com](https://www.backblaze.com) به عنوان مثال برای نشان دادن نحوه اتصال ذخیره‌های شخص ثالث به `cloudflare` در نظر می‌گیریم.

یک سطل در `backblaze.com` ایجاد کنید، هر فایلی را آپلود کنید، برای مرور فایل کلیک کنید و نام دامنه `Friendly URL` را دریافت کنید که در اینجا `f003.backblazeb2.com` است.

![](//p.3ti.site/1725440783.avif)

نام دامنه را از `CNAME` به `f003.backblazeb2.com` در `cloudflare` تغییر دهید و پروکسی را فعال کنید.

![](//p.3ti.site/1725440896.avif)

`cloudflare` را از `SSL` → حالت رمزگذاری تغییر دهید، روی `Full` تنظیم کنید

![](//p.3ti.site/1725438572.avif)

قانون تبدیل را مطابق شکل زیر اضافه کنید، آن را در ابتدا قرار دهید (ابتدایی‌ترین اولویت کمترین اولویت را دارد):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` را انتخاب کنید و `your_bucketname` در `concat("/file/your_bucketname",http.request.uri.path)` را به نام سطل خود تغییر دهید.

علاوه بر این، در قانون تبدیل `cloudflare` در بالا، `index.html` به `file/your_bucketname/index.html` تغییر می‌کند و سایر تنظیمات ثابت می‌مانند.

![](//p.3ti.site/1725441384.avif)