# استقرار و آنلاین

`i18n.site` معماری [برنامه تک صفحه ای را](https://developer.mozilla.org/docs/Glossary/SPA) اتخاذ می کند و صفحه ورودی وب سایت و محتوای وب سایت به طور مستقل مستقر می شوند.

پس از اجرای ترجمه فوق، دایرکتوری های `htm` و `v` تحت دایرکتوری `md/out/dev` ایجاد می شوند.

در اینجا، `dev` به این معنی است که بر اساس فایل پیکربندی `.i18n/htm/dev.yml` ساخته شده است.

`dev` دایرکتوری :

دایرکتوری `htm` صفحه ورودی وب سایت است.

دایرکتوری `v` حاوی محتوای وب سایت با شماره نسخه است.

پیشنمایش محلی به شماره نسخه اهمیتی نمیدهد و همه فایلها را در فهرست `out/dev/v/0.1.0` کپی میکند.

برای انتشار رسمی، فایل های تغییر یافته در فهرست شماره نسخه جدید کپی می شوند.

## فایل پیکربندی را با `-c` مشخص کنید

فایل های پیکربندی مختلف دایرکتوری های مربوطه را در دایرکتوری `out` ایجاد می کنند.

برای مثال، `.i18n/htm/main.yml` دایرکتوری `out/main` را ایجاد می کند.

`dev.yml` و `main.yml` تنظیمات پیش فرض هستند.

`dev` مخفف `development` است که محیط توسعه را نشان می دهد که برای پیش نمایش محلی استفاده می شود و همچنین فایل پیکربندی پیش فرض است.
`ol` مخفف `online` است که نشان `-n` محیط آنلاین است که برای انتشار رسمی استفاده می شود `npm`

همچنین میتوانید فایلهای پیکربندی دیگری ایجاد کنید، از `--htm_conf` در خط فرمان برای تعیین نام فایل پیکربندی استفاده کنید.

به عنوان مثال:
```
i18n.site --htm_conf dist --save
```

در اینجا `--save` نشان دهنده شماره نسخه نسخه به روز رسانی است.

## <a rel=id href="#npm" id="npm"></a> مطالب را در npmjs.com منتشر کنید

انتشار محتوا [به](/i18n.site/feature#ha) [npmjs.com](//npmjs.com)

### npm & پست

`nodejs` نصب کنید، با `npm login` وارد شوید.

`md/.i18n/htm/main.yml` را ویرایش کنید و مقدار [`md:`](//github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/main.yml#L7) را `YOUR_NPM_PACKAGE` [npmjs.com](//npmjs.com) عنوان نام `npm` خود تغییر دهید.

سپس `md/.i18n/htm/main.package.json` اصلاح کنید

`i18n.site --npm` یا `i18n.site -n` در فهرست `md` برای ترجمه و انتشار اجرا کنید.

اگر از یک محیط یکپارچه سازی مداوم برای انتشار استفاده می کنید، نیازی به نصب `nodejs` نیست. فقط مجوزهای ورود به سیستم و انتشار `~/.npmrc` را در محیط کپی کنید.

اگر نام بسته `v:` در `main.yml` را تغییر دادید، **لطفاً ابتدا `.i18n/v/main` حذف کرده** و سپس منتشر کنید.

#### سرور پروکسی منتشر شده توسط npm

اگر کاربران در سرزمین اصلی چین با مشکلات شبکه مواجه شوند و نتوانند `npm` بسته را منتشر کنند، می توانند متغیر محیطی `https_proxy` را برای پیکربندی سرور پراکسی تنظیم کنند.

با فرض اینکه پورت سرور پروکسی شما `7890` باشد، می توانید بنویسید:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

## محتوای خود میزبان

اگر میخواهید محتوا را خود میزبانی کنید، ابتدا `md/.i18n/htm/main.yml` ویرایش کنید و `v: //unpkg.com/i18n.site` به پیشوند URL خود، مانند `v: //i18n-v.xxx.com` تغییر دهید.

دایرکتوری `md` را وارد کرده و اجرا کنید

```
i18n.site --htm_conf ol --save
```

یا مخفف

```
i18n.site -c ol -s
```

سپس، محتوای موجود در فهرست `md/out/main/v` را در مسیر پیشوند URL تنظیم شده در `v:` پیکربندی کنید.

در نهایت، **زمان کش مسیری که به `/.v` تا `1s` ختم می شود را پیکربندی کنید** ، در غیر این صورت نمی توان بلافاصله به محتوای تازه منتشر شده دسترسی پیدا کرد.

زمان کش برای مسیرهای دیگر را می توان روی یک سال یا بیشتر تنظیم کرد تا درخواست های غیر ضروری کاهش یابد.

## میزبانی محتوا برای s3

برای خود میزبانی محتوا، علاوه بر استفاده از سرور خود، یکی `CDN` از گزینه های رایج استفاده از `S3` است +

برای ورود به `S3` `S3` می توانید از [rclone](https://rclone.org)

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/main/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/main/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/main/v/.v "$s3:/$bucket/"
```

به یاد داشته باشید که `CDN` طوری پیکربندی کنید که زمان کش مسیری که به `/.v` ختم می شود `1s` باشد، در غیر این صورت نمی توان بلافاصله به محتوای تازه منتشر شده دسترسی پیدا کرد.

## انتشار وب سایت

وب سایت را می توان در هر جایی مستقر کرد [github page](https://pages.github.com) و [cloudflare page](https://pages.cloudflare.com) گزینه های خوبی هستند.

از آنجایی که وب سایت از معماری [برنامه تک صفحه ای](https://developer.mozilla.org/docs/Glossary/SPA) استفاده می کند، به یاد داشته باشید که مسیرهای URL را که شامل `. ` تا `index.html` نیستند بازنویسی کنید.

صفحه ورودی وب سایت فقط یک بار باید مستقر شود و نیازی به بازگشایی صفحه ورودی وب سایت برای به روز رسانی محتوای بعدی نیست.

### استقرار در صفحه github

[برای ایجاد یک سازمان ابتدا اینجا را کلیک github](https://github.com/account/organizations/new?plan=free) . نام سازمان زیر به عنوان مثال `i18n-demo` است.

سپس انبار `i18n-demo.github.io` را در این سازمان ایجاد کنید (لطفاً نام سازمانی را که ایجاد کردید جایگزین `i18n-demo` کنید):

![](https://p.3ti.site/1721098657.avif)

هنگام انتشار مطالب در مقاله قبلی، `out/main/htm` ایجاد شده است، لطفاً وارد این فهرست شده و اجرا کنید :

```
ln -s index.html 404.html
```


از آنجایی که `github page` از بازنویسی مسیر URL پشتیبانی نمی کند، به جای آن از `404.html` استفاده می شود.

سپس دستور زیر را در دایرکتوری `htm` اجرا کنید (به یاد داشته باشید که `i18n-demo/i18n-demo.github.io.git` با آدرس انبار خود جایگزین کنید) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

پس از فشار دادن کد، منتظر بمانید تا استقرار `github page` با موفقیت اجرا شود (مانند شکل زیر) قبل از اینکه بتوانید به آن دسترسی پیدا کنید.

<img src="//p.3ti.site/1721116586.avif" width="350px">

برای صفحه نمایشی لطفاً ببینید:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

### استقرار در صفحه cloudflare

در مقایسه با `github page` [cloudflare page](//pages.cloudflare.com) بازنویسی مسیر را فراهم می کند و برای سرزمین اصلی چین مناسب تر است و استفاده از آن در دسترس تر است.

استقرار `cloudflare page` معمولاً بر اساس استقرار `github page` بالا است.

یک پروژه ایجاد کنید و انبار `i18n-demo.github.io` بالا را متصل کنید.

فرآیند در شکل زیر نشان داده شده است:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

لطفاً برای اعطای دسترسی به سازمان `i18n-demo` روی `Add Account` کلیک کنید.

اگر انبار سازمان دیگری را محدود کرده اید، ممکن است لازم باشد قبل از نمایش سازمان جدید، دو بار برای مجوز دو بار روی `Add Account` کلیک کنید.

![](https://p.3ti.site/1721118306.avif)

در مرحله بعد، warehouse `i18n-demo.github.io` انتخاب کنید، سپس روی `Begin setup` کلیک کنید و از مقادیر پیش فرض برای مراحل بعدی استفاده کنید.

![](https://p.3ti.site/1721118490.avif)

پس از صحافی برای اولین بار، باید چند دقیقه صبر کنید تا بتوانید به آن دسترسی پیدا کنید.

پس از استقرار، می توانید یک نام دامنه سفارشی را متصل کنید.

![](https://p.3ti.site/1721119459.avif)

پس از اتصال نام دامنه سفارشی، لطفاً به نام دامنه بروید تا مسیر بازنویسی برنامه تک صفحه ای را پیکربندی کنید، همانطور که در زیر نشان داده شده است:

![](https://p.3ti.site/1721119320.avif)

قوانین در تصویر بالا به شرح زیر است لطفاً `i18n.site` در خط اول با نام دامنه ای که محدود کرده اید جایگزین کنید.

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

علاوه بر این، لطفا قوانین کش را مانند شکل زیر پیکربندی کنید و مدت زمان کش را روی یک ماه تنظیم کنید.

![](https://p.3ti.site/1721125111.avif)

لطفاً نام دامنه مطابق مرحله دوم در تصویر بالا را به نام دامنه ای که محدود کرده اید تغییر دهید.

### بهینه سازی استقرار وب سایت در سرزمین اصلی چین

اگر می خواهید عملکرد دسترسی بهتری در محیط شبکه سرزمین اصلی چین به دست آورید، لطفاً ابتدا [یک نام دامنه ثبت کنید](//beian.aliyun.com) .

سپس، از ذخیره سازی اشیاء فروشندگان ابری در سرزمین اصلی چین استفاده کنید + `CDN` محتوای زیر را مستقر کنید `out/main/htm`

می توانید از محاسبات لبه [`CDN`](//cloud.baidu.com/product/cdn.html) بازنویسی مسیر برای انطباق با برنامه های تک صفحه ای استفاده کنید.

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

![](https://p.3ti.site/1721121273.avif)

از آنجایی که رکورد `MX` و رکورد `CNAME` نمی توانند همزمان وجود داشته باشند، اگر می خواهید ایمیل های نام دامنه را همزمان دریافت کنید، باید با [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) `CNAME` تا رکورد `A` همکاری کنید.

علاوه بر این، از آنجایی که هزینه های ترافیک خارج از کشور فروشندگان ابر در سرزمین اصلی چین نسبتاً گران است، اگر می خواهید هزینه ها را بهینه کنید، می توانید [DNS وضوح جغرافیایی رایگان هواوی](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) و نام دامنه سفارشی [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (همانطور که در زیر نشان داده شده است) استفاده کنید انحراف ترافیک──مسیریابی ترافیک در سرزمین اصلی چین بایدو ابر `CDN` ، ترافیک بینالمللی cloudflare مییابد.

![](https://p.3ti.site/1721119788.avif)

این راه حل های بهینه سازی استقرار پیچیده تر هستند و در فصل های جداگانه در آینده معرفی خواهند شد.

### تغییر مسیر نام دامنه عمومی

اگر `i18n.site` برای ایجاد یک وب سایت به عنوان وب سایت اصلی خود استفاده می کنید، معمولاً باید تغییر مسیر پان دامنه را پیکربندی کنید، یعنی دسترسی به `*.xxx.com` (از جمله `www.xxx.com` ) را به `xxx.com` تغییر دهید.

این نیاز را می توان با کمک Alibaba Cloud `CDN` `EdgeScript` ( [سند انگلیسی](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [سند چینی](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ) به دست آورد.

نام دامنه را در [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) اضافه کنید و نام دامنه را در Alibaba Cloud `*.xxx.com` `CNAME` `CDN` دهید.

![](https://p.3ti.site/1721122000.avif)

به عنوان مثال، پیکربندی تغییر مسیر نام پان دامنه `*.i18n.site` در تصویر بالا به شرح زیر است:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

### استقرار با nginx

لطفاً یک پیکربندی شبیه به زیر در پاراگراف `server` اضافه کنید nginx لطفاً `/root/i18n/md/out/main/htm` به مسیر پروژه `out/main/htm` خود تغییر دهید.

```
location / {
  root  /root/i18n/md/out/main/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

## بر اساس `github action` یکپارچه سازی مداوم

برای پیکربندی `github action` می توانید به موارد زیر مراجعه کنید:

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

همانطور که در پیکربندی مشاهده می شود، این گردش کار هنگام فشار دادن به شاخه `main` و شاخه `dist` فعال می شود.

گردش کار از فایل پیکربندی مربوط به نام شعبه برای انتشار سند `.i18n/htm/main.yml` خواهد `.i18n/htm/dist.yml` .

ما بهترین روشهای زیر را برای فرآیند انتشار سند توصیه میکنیم:

هنگامی که تغییرات به شاخه `main` فشار داده می شود، سند راه اندازی می شود تا ساخته شود و در ایستگاه پیش نمایش مستقر شود (ایستگاه پیش نمایش در دسترس است [github page](//pages.github.com) ).

پس از تأیید صحت سند در سایت پیش نمایش، کد ادغام شده و به شاخه `dist` منتقل می شود و ساخت و استقرار رسمی آنلاین می شود.

البته اجرای فرآیند فوق نیاز به نگارش تنظیمات بیشتری دارد.

برای برنامه نویسی گردش کار می توانید به پروژه واقعی مراجعه کنید [github.com/fcdoc/doc](//github.com/fcdoc/doc/blob/main/.github/workflows/i18n.site.yml)

`secrets.I18N_SITE_TOKEN` و `secrets.NPM_TOKEN` در پیکربندی نیاز به پیکربندی متغیرهای مخفی در پایه کد دارند.

![](//p.3ti.site/1730970199.avif)

`I18N_SITE_TOKEN` [i18n.site/token](//i18n.site/token)

`NPM_TOKEN` نشانه انتشار بسته `npm` در پیکربندی است [npmjs.com](//npmjs.com) یک نشانه با مجوزهای انتشار ایجاد کنید.

![](//p.3ti.site/1730969906.avif)


## ساختار دایرکتوری

### `public`

فایل های ثابت وب سایت مانند `favicon.ico` ، `robots.txt` و غیره.

فایل های نماد اینجا را می توان با [realfavicongenerator.net](https://realfavicongenerator.net)

### `.i18n`

در زیر دایرکتوری `.i18n` فایل های پیکربندی، حافظه پنهان ترجمه و غیره `i18n.site` قرار دارند. برای جزئیات به فصل بعدی ["پیکربندی"](/i18n.site/conf) مراجعه کنید.

### `en`

فهرست راهنمای زبان مبدأ، مربوط به فایل پیکربندی `en` از `fromTo` در `.i18n/conf.yml`

```yaml
i18n:
  fromTo:
    en: zh
```

لطفاً به پیکربندی ترجمه مراجعه کنید [i18](/i18/use)