# نصب کنید &

## نشانه پیکربندی

ابزار ترجمه `i18` تعبیه شده است `i18n.site` لطفاً [اینجا را کلیک کنید تا به سند `i18` برای پیکربندی نشانه دسترسی مراجعه کنید](/i18/use) .

## نصب

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## پروژه نمایشی

بیایید با یک پروژه آزمایشی شروع کنیم و یاد بگیریم که چگونه از آن استفاده کنیم `i18n.site`

ابتدا مخزن دمو را کلون می کنیم و دستور را به صورت زیر اجرا می کنیم:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

کاربران در سرزمین اصلی چین می توانند:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

`demo.i18n.site` دایرکتوری کلون پایه کد باید `md` باشد تا پیش‌نمایش محلی با `docker` را تسهیل کند.

### ترجمه کردن

ابتدا دایرکتوری `md` وارد کنید و `i18n.site` اجرا کنید که `en` را به `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

پس از اجرا، فایل‌های ترجمه و `md` تولید `git add . ` .

### پیش نمایش محلی

نصب کنید و شروع `docker` ( `MAC` توصیه می کنند از [orbstack](https://orbstack.dev) به عنوان زمان `docker` استفاده کنید).

سپس [https://127.0.0.1](https://127.0.0.1) `./up.sh` `docker`

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### مطالب ارسال کنید

معماری [برنامه تک صفحه ای](https://developer.mozilla.org/docs/Glossary/SPA) را اتخاذ می کند و صفحه ورودی وب سایت و محتوای وب سایت به `i18n.site` مستقل مستقر می شوند.

پس از اجرای ترجمه فوق، دایرکتوری های `htm` و `v` در `md/out/dev` تولید می شوند.

در اینجا `dev` نشان می دهد که بر اساس فایل `.i18n/htm/dev.yml` ساخته شده است.

زیر : `dev`

زیر دایرکتوری صفحه ورودی وب سایت `htm` .

`v` حاوی محتوای وب سایت با شماره نسخه است.

پیش نمایش محلی تمام فایل ها را بدون در نظر گرفتن شماره نسخه در `out/dev/v/0.1.0` کپی می کند.

برای انتشار رسمی، فایل های تغییر یافته در فهرست شماره نسخه جدید کپی می شوند.

#### برای تعیین فایل پیکربندی از -c استفاده کنید

فایل های پیکربندی مختلف دایرکتوری های مربوطه را در زیر `out` ایجاد می کنند.

به عنوان مثال `.i18n/htm/ol.yml` یک دایرکتوری `out/ol` ایجاد می کند.

`dev.yml` و `ol.yml` تنظیمات پیش فرض هستند.

مخفف `development` `dev` که نشان دهنده محیط توسعه است، برای پیش نمایش محلی استفاده می شود و همچنین فایل تنظیمات پیش فرض است.
مخفف `online` `ol` که نشان‌دهنده محیط آنلاین است، برای انتشار رسمی استفاده می‌شود و همچنین فایل پیکربندی پیش‌فرض هنگام انتشار در `npm` با استفاده از پارامتر خط فرمان `-n` .

همچنین می توانید فایل های پیکربندی دیگری را در خط فرمان ایجاد `--htm_conf` تا نام فایل پیکربندی را مشخص کنید.

مثلا:
```
i18n.site --htm_conf yourConfig --save
```

در `--save` شماره نسخه به روز رسانی را نشان می دهد.

#### <a rel=id href="#npm" id="npm"></a> مطالب را در npmjs.com منتشر کنید

انتشار محتوا [به](/i18n.site/feature#ha) [npmjs.com](//npmjs.com)

##### npm login & رهایی

نصب کنید `nodejs` برای ورود به سیستم `npm login` استفاده کنید.

ویرایش کنید `md/.i18n/htm/ol.yml` `i18n.site` در `v: //unpkg.com/i18n.site` به `npm` بسته خود تغییر دهید.

فقط از نام بسته خالی استفاده [npmjs.com](//npmjs.com) استفاده از نام دامنه وب سایت به عنوان نام بسته انتخاب خوبی است.

هنگام انتشار بر اساس `npm` `i18n.site` **مطمئن شوید که از `//unpkg.com/` به عنوان پیشوند مقدار # استفاده** `/.v` `v:`

برای ترجمه و انتشار `i18n.site --npm` یا `i18n.site -n` در `md` اجرا کنید.

اگر از یک محیط یکپارچه سازی مداوم برای انتشار استفاده می کنید، نیازی به نصب آن نیست `nodejs` فقط `~/.npmrc` ورود به سیستم و منتشر شده را در محیط کپی کنید.

اگر نام بسته را در `v:` `ol.yml` تغییر دهید، **لطفاً ابتدا `.i18n/v/ol` حذف کنید** و سپس آن را منتشر کنید.

##### سرور پروکسی منتشر شده توسط npm

اگر کاربران در سرزمین اصلی چین با مشکلات شبکه مواجه شوند و نتوانند بسته `npm` منتشر کنند، می توانند متغیر محیطی `https_proxy` را برای پیکربندی سرور پراکسی تنظیم کنند.

با فرض اینکه پورت سرور پروکسی شما `7890` می توانید بنویسید:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### محتوای خود میزبان

اگر می‌خواهید محتوا را خود میزبانی کنید، `md/.i18n/htm/ol.yml` `v: //unpkg.com/i18n.site` به پیشوند URL خود تغییر دهید، مانند `v: //i18n-v.xxx.com` .

دایرکتوری `md` وارد کنید و اجرا کنید

```
i18n.site --htm_conf ol --save
```

یا مخفف

```
i18n.site -c ol -s
```

سپس، محتوای موجود در `md/out/ol/v` را در مسیر پیشوند URL تنظیم شده در `v:` پیکربندی کنید.

در نهایت، **زمان کش مسیری `/.v` به `1s` ختم می شود را پیکربندی کنید** ، در غیر این صورت نمی توان بلافاصله به محتوای تازه منتشر شده دسترسی پیدا کرد.

زمان کش برای مسیرهای دیگر را می توان روی یک سال یا بیشتر تنظیم کرد تا درخواست های غیر ضروری کاهش یابد.

##### میزبانی محتوا برای s3

برای خود میزبانی محتوا، علاوه بر استفاده از سرور خود، + دیگر `CDN` گزینه های رایج استفاده از `S3`

شما می توانید [rclone](https://rclone.org) `S3` استفاده کنید، سپس به اسکریپت زیر مراجعه کنید و آن را تغییر دهید و هر بار که منتشر می کنید `S3` تغییرات افزایشی را کپی کنید.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

به یاد داشته باشید که `CDN` به طوری که زمان کش مسیری که به `/.v` ختم می شود `1s` باشد، در غیر این صورت نمی توانید بلافاصله به محتوای تازه منتشر شده دسترسی پیدا کنید.

### انتشار وب سایت

وب سایت را می توان در هر جایی مستقر کرد [github page](https://pages.github.com) و [cloudflare page](https://pages.cloudflare.com) گزینه های خوبی هستند.

از آنجایی که وب سایت از معماری [یک برنامه تک صفحه ای](https://developer.mozilla.org/docs/Glossary/SPA) استفاده می کند، به یاد داشته باشید که مسیر URL را که شامل `index.html` نیست `. ` بازنویسی کنید.

صفحه ورودی وب سایت فقط یک بار باید مستقر شود و نیازی به بازگشایی صفحه ورودی وب سایت برای به روز رسانی محتوای بعدی نیست.

#### استقرار در صفحه github

ابتدا [github را کلیک کنید تا یک سازمان ایجاد کنید](https://github.com/account/organizations/new?plan=free) `i18n-demo`

سپس یک انبار تحت این `i18n-demo.github.io` ایجاد کنید (لطفاً نام سازمانی را که ایجاد کردید `i18n-demo` کنید):

<img alt="" src="https://p.3ti.site/1721098657.avif">

هنگام انتشار مطالب در مقاله قبلی `out/ol/htm` لطفاً وارد این فهرست شده و اجرا کنید :

```
ln -s index.html 404.html
```


از آنجا که `github page` از بازنویسی مسیر URL پشتیبانی نمی کند، بنابراین از `404.html` استفاده می شود.

سپس دستور زیر را در `htm` اجرا کنید (به یاد داشته باشید که آدرس انبار خود `i18n-demo/i18n-demo.github.io.git` جایگزین کنید) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

پس از فشار دادن کد، منتظر بمانید تا استقرار `github page`

<img src="//p.3ti.site/1721116586.avif" width="350px">

برای صفحه نمایشی لطفاً ببینید:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### استقرار در صفحه cloudflare

در مقایسه `github page` [cloudflare page](//pages.cloudflare.com)

استقرار معمولاً بر اساس استقرار `github page` بالا `cloudflare page` .

یک پروژه ایجاد کنید و انبار بالا را ببندید `i18n-demo.github.io`

فرآیند در شکل زیر نشان داده شده است:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

لطفا برای اعطای دسترسی به `i18n-demo` سازمان کلیک `Add Account` .

اگر انبار سازمان دیگری را محدود کرده اید، ممکن است لازم باشد قبل از نمایش سازمان جدید، دو بار برای تأیید آن کلیک کنید `Add Account`

<img alt="" src="https://p.3ti.site/1721118306.avif">

سپس Warehouse `i18n-demo.github.io` انتخاب کنید، سپس `Begin setup` کلیک کنید و از مقادیر پیش فرض برای مراحل بعدی استفاده کنید.

<img alt="" src="https://p.3ti.site/1721118490.avif">

پس از صحافی برای اولین بار، باید چند دقیقه صبر کنید تا بتوانید به آن دسترسی پیدا کنید.

پس از استقرار، می توانید یک نام دامنه سفارشی را متصل کنید.

<img alt="" src="https://p.3ti.site/1721119459.avif">

پس از اتصال نام دامنه سفارشی، لطفاً به نام دامنه بروید تا مسیر بازنویسی برنامه تک صفحه ای را پیکربندی کنید، همانطور که در زیر نشان داده شده است:

<img alt="" src="https://p.3ti.site/1721119320.avif">

قوانین موجود در تصویر بالا به شرح زیر است. لطفاً در خط اول نام دامنه را جایگزین `i18n.site` .

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

علاوه بر این، لطفا قوانین کش را مانند شکل زیر پیکربندی کنید و مدت زمان کش را روی یک ماه تنظیم کنید.

<img alt="" src="https://p.3ti.site/1721125111.avif">

لطفاً نام دامنه مطابق مرحله دوم در تصویر بالا را به نام دامنه ای که محدود کرده اید تغییر دهید.

#### بهینه سازی استقرار وب سایت در سرزمین اصلی چین

اگر می خواهید عملکرد دسترسی بهتری در محیط شبکه سرزمین اصلی چین به دست آورید، لطفاً ابتدا [یک نام دامنه ثبت کنید](//beian.aliyun.com) .

سپس `CDN` از ذخیره سازی اشیا در سرزمین `out/ol/htm` چین استفاده کنید +

می‌توانید از محاسبات لبه برای بازنویسی مسیر برای انطباق با برنامه‌های تک صفحه‌ای مانند [Baidu Smart Cloud استفاده کنید `CDN`](//cloud.baidu.com/product/cdn.html)

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

[cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) `CNAME` `CNAME` `MX` `A`

علاوه بر این، از آنجایی که هزینه های ترافیک خارج از کشور فروشندگان ابر در سرزمین اصلی چین نسبتاً گران است، اگر می خواهید هزینه ها را بهینه کنید، می توانید [DNS وضوح جغرافیایی رایگان هواوی](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) و نام دامنه سفارشی [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (همانطور که در زیر نشان داده شده است) استفاده کنید انحراف ترافیک──ترافیک در سرزمین اصلی چین بایدو ابر `CDN` ترافیک بین‌المللی cloudflare می‌یابد.

<img alt="" src="https://p.3ti.site/1721119788.avif">

این راه حل های بهینه سازی استقرار پیچیده تر هستند و در فصل های جداگانه در آینده معرفی خواهند شد.

#### تغییر مسیر نام دامنه عمومی

اگر از `i18n.site` برای ایجاد یک وب سایت به عنوان وب سایت اصلی خود استفاده می کنید، معمولاً باید تغییر مسیر پان دامنه را پیکربندی کنید، یعنی دسترسی `*.xxx.com` (شامل `www.xxx.com` ) را به `xxx.com` .

این نیاز را می توان با کمک Alibaba Cloud `EdgeScript` ( [سند انگلیسی](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [سند چینی](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ) بدست آورد `CDN`

یک نام دامنه در [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) اضافه کنید و `*.xxx.com` دامنه `CNAME` روی Alibaba Cloud `CDN` قرار دهید.

<img alt="" src="https://p.3ti.site/1721122000.avif">

به عنوان مثال، پیکربندی تغییر مسیر نام پان دامنه در تصویر بالا به `*.i18n.site` زیر است:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### استقرار با nginx

لطفاً یک پیکربندی شبیه به زیر در `server` اضافه کنید nginx جایی که `/root/i18n/md/out/ol/htm` لطفاً آن را به مسیر پروژه خود تغییر دهید `out/ol/htm`

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### ساختار دایرکتوری

#### عمومی

فایل های ثابت وب سایت مانند `favicon.ico` `robots.txt` و غیره.

فایل های نماد اینجا را می توان با [realfavicongenerator.net](https://realfavicongenerator.net)

#### i18n

`.i18n` `i18n.site`[​](/i18n.site/conf)

#### en

فهرست راهنمای زبان مبدأ، مربوط `.i18n/conf.yml` `fromTo` `en` در فایل پیکربندی

```yaml
i18n:
  fromTo:
    en: zh
```

لطفاً به پیکربندی ترجمه مراجعه کنید [i18](/i18/use)

