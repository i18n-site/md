# بهینه سازی موتورهای جستجو (SEO)

## اصل

`i18n.site` یک معماری تک صفحه ای بدون بازخوانی را اتخاذ می کند تا فهرست بندی جستجو را تسهیل کند، یک صفحه ثابت جداگانه و `sitemap.xml` برای خزنده ها ایجاد می شود.

هنگامی که `User-Agent` درخواست دسترسی توسط خزنده موتور جستجو استفاده می شود، درخواست از طریق `302` به صفحه ثابت هدایت می شود.

در صفحات استاتیک، از `link` برای نشان دادن پیوندها به نسخه های زبان های مختلف این صفحه، مانند :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## پیکربندی محلی nginx

فایل پیکربندی `.i18n/htm/main.yml` را در پروژه آزمایشی به عنوان مثال در نظر بگیرید

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

لطفاً ابتدا مقدار `host:` بالا را به نام دامنه خود تغییر دهید، مانند `xxx.com` .

سپس، `i18n.site -n` ، صفحه استاتیک در دایرکتوری `out/main/htm` ایجاد می شود.

البته میتوانید فایلهای پیکربندی دیگر را نیز فعال کنید، مثلاً ابتدا به پیکربندی `main` برای ایجاد `.i18n/htm/dist.package.json` و `.i18n/htm/dist.yml` مراجعه کنید.

سپس `i18n.site -n -c dist` اجرا کنید تا صفحه استاتیک به `out/dist/htm` تولید شود.

`nginx` می توان با مراجعه به پیکربندی زیر تنظیم کرد.

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# اسکریپت های کارگر سرور را برای مدت طولانی کش نکنید
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# زمان های کش طولانی تری را برای سایر منابع استاتیک تنظیم کنید
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# تنظیم کنید که خزنده از کدام فایل استاتیک به عنوان ورودی صفحه اصلی استفاده کند
location = / {
  # اگر $botLang
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# پیکربندی برنامه تک صفحه ای
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## ذخیره سازی اشیا را برای آپلود فایل های ثابت پیکربندی کنید

فایلهای استاتیک را میتوان به صورت محلی تولید کرد، اما روش رایجتر آپلود آنها در ذخیرهسازی شی است.

`out` پیکربندی شده در بالا را به :

```
out:
  - s3
```

سپس، `~/.config/i18n.site.yml` را ویرایش کنید و پیکربندی زیر را اضافه کنید :

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

در پیکربندی، لطفاً `i18n.site` به مقدار `host:` در `.i18n/htm/main.yml` تغییر دهید، چندین ذخایر شی را می توان تحت `s3` پیکربندی کرد، و فیلد `region` اختیاری است (بسیاری از فروشگاه های شی نیازی به تنظیم این فیلد ندارند).

سپس `i18n.site -n` اجرا کنید تا پروژه دوباره منتشر شود.

اگر `~/.config/i18n.site.yml` تغییر داده اید و می خواهید دوباره آپلود کنید، لطفاً از دستور زیر در فهرست اصلی پروژه برای پاک کردن کش آپلود استفاده کنید :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## پیکربندی cloudflare

نام دامنه میزبانی شده است [cloudflare](//www.cloudflare.com)

### قوانین تبدیل

قوانین تبدیل را مطابق شکل زیر اضافه کنید:

![](//p.3ti.site/1725436822.avif)

کد قانون به شرح زیر است، لطفا کد "i18n.site" را به نام دامنه خود تغییر دهید:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### قوانین ذخیره سازی

قوانین کش را به صورت زیر اضافه کنید:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### قوانین تغییر مسیر

قوانین تغییر مسیر را به صورت زیر تنظیم کنید، لطفا کد "i18n.site" را به نام دامنه خود تغییر دهید.

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

اگر نیاز به ارائه خدمات به سرزمین اصلی چین دارید، می توانید [از Baidu Smart Cloud](//cloud.baidu.com) استفاده کنید.

دادهها در Baidu Object Storage بارگذاری میشوند و به شبکه توزیع محتوای Baidu متصل میشوند.

سپس اسکریپت را در [سرویس EdgeJS](//console.bce.baidu.com/cdn/#/cdn/ejs/list) به صورت زیر ایجاد کنید

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
  // سرصفحه های پاسخ را می توان روی خروجی اشکال زدایی تنظیم کرد، مانند out.XXX = 'MSG';
})
```

روی `Debug` کلیک کنید، سپس روی انتشار در کل شبکه کلیک کنید.

![](//p.3ti.site/1725437754.avif)

## استفاده پیشرفته: ترافیک را بر اساس وضوح منطقه ای توزیع کنید

اگر می خواهید در سرزمین اصلی چین خدمات ارائه دهید و همچنین `cloudflare` ترافیک بین المللی رایگان می خواهید، می توانید از `DNS` با وضوح منطقه ای استفاده کنید.

به عنوان مثال، [Huawei DNS](https://www.huaweicloud.com) تجزیه و تحلیل منطقه ای رایگان ارائه می دهد که با آن ترافیک سرزمین اصلی چین می تواند از طریق Baidu Smart Cloud عبور کند، و ترافیک بین المللی می تواند از `cloudflare` عبور کند.

اشکالات زیادی در پیکربندی `cloudflare` وجود دارد. در اینجا چند نکته قابل توجه است :

### نام دامنه در `DNS` دیگر میزبانی می شود، نحوه استفاده از `cloudflare`

ابتدا یک نام دامنه دلخواه را به `cloudflare` متصل کنید و سپس از `SSL/TLS` → نام دامنه سفارشی برای مرتبط کردن نام دامنه اصلی به این نام دامنه استفاده کنید.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` از طریق یک نام دامنه سفارشی قابل دسترسی نیست

از آنجایی که فضای ذخیره سازی `cloudflare` `R2` توسط یک نام دامنه سفارشی قابل دسترسی نیست، برای قرار دادن فایل های ثابت باید از یک ذخیره سازی شی شخص ثالث استفاده شود.

در [backblaze.com](https://www.backblaze.com) ما را به عنوان مثال برای نشان دادن نحوه اتصال اشیاء شخص ثالث برای ذخیره در `cloudflare` در نظر می گیریم.

یک سطل در `backblaze.com` ایجاد کنید، هر فایلی را آپلود کنید، برای مرور فایل کلیک کنید و نام دامنه `Friendly URL` را دریافت کنید که در اینجا `f003.backblazeb2.com` است.

![](//p.3ti.site/1725440783.avif)

نام دامنه را از `CNAME` به `f003.backblazeb2.com` در `cloudflare` تغییر دهید و پروکسی را فعال کنید.

![](//p.3ti.site/1725440896.avif)

`cloudflare` از `SSL` → حالت رمزگذاری را تغییر دهید، روی `Full` تنظیم کنید

![](//p.3ti.site/1725438572.avif)

قانون تبدیل را مطابق شکل زیر اضافه کنید، آن را در ابتدا قرار دهید (اولین اولویت کمترین اولویت را دارد):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` پویا را انتخاب کنید و `your_bucketname` در `concat("/file/your_bucketname",http.request.uri.path)` را به نام سطل خود تغییر دهید.

علاوه بر این، در قانون تبدیل `cloudflare` در بالا، `index.html` به `file/your_bucketname/index.html` تغییر می کند و سایر تنظیمات ثابت می مانند.

![](//p.3ti.site/1725441384.avif)