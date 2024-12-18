# تعیناتی اور آن لائن

`i18n.site` [ایک صفحے کے ایپلیکیشن](https://developer.mozilla.org/docs/Glossary/SPA) فن تعمیر کو اپناتا ہے، اور ویب سائٹ کا داخلہ صفحہ اور ویب سائٹ کا مواد آزادانہ طور پر تعینات کیا جاتا ہے۔

مندرجہ بالا ترجمہ کو چلانے کے بعد، ڈائرکٹری `htm` اور `v` `md/out/dev` ڈائرکٹری کے تحت تیار کی جائیں گی۔

یہاں، `dev` کا مطلب ہے کہ یہ `.i18n/htm/dev.yml` کنفیگریشن فائل کی بنیاد پر بنایا گیا ہے۔

`dev` ڈائریکٹری :

`htm` ڈائریکٹری ویب سائٹ کا داخلی صفحہ ہے۔

`v` ڈائرکٹری ورژن نمبروں کے ساتھ ویب سائٹ کے مواد پر مشتمل ہے۔

مقامی پیش نظارہ ورژن نمبر کی پرواہ نہیں کرتا ہے اور تمام فائلوں کو `out/dev/v/0.1.0` ڈائریکٹری میں کاپی کرے گا۔

سرکاری ریلیز کے لیے، تبدیل شدہ فائلوں کو نئے ورژن نمبر ڈائرکٹری میں کاپی کیا جائے گا۔

## `-c` کے ساتھ کنفیگریشن فائل کی وضاحت کریں۔

مختلف کنفیگریشن فائلیں `out` ڈائرکٹری میں متعلقہ ڈائریکٹریز بنائیں گی۔

مثال کے طور پر، `.i18n/htm/main.yml` `out/main` ڈائریکٹری بنائے گا۔

`dev.yml` اور `main.yml` ڈیفالٹ کنفیگریشنز ہیں۔

`dev` `development` کا مخفف ہے، جو ترقیاتی ماحول کی نشاندہی کرتا ہے، مقامی پیش نظارہ کے لیے استعمال کیا جاتا ہے، اور یہ ڈیفالٹ کنفیگریشن فائل بھی ہے۔
`ol` `online` کا مخفف ہے، جو آن لائن ماحول کی نشاندہی کرتا ہے، جو سرکاری ریلیز کے لیے استعمال کیا جاتا ہے جب کہ کمانڈ لائن پیرامیٹرز `-n` سے `npm` کو جاری کرنے کے لیے استعمال کیا جاتا ہے۔

آپ دوسری کنفیگریشن فائلیں بھی بنا سکتے ہیں استعمال کرنے کے لیے کنفیگریشن فائل کا نام بتانے کے لیے کمانڈ لائن پر `--htm_conf` استعمال کریں۔

مثال کے طور پر:
```
i18n.site --htm_conf dist --save
```

یہاں `--save` اپ ڈیٹ ریلیز ورژن نمبر کی نمائندگی کرتا ہے۔

## <a rel=id href="#npm" id="npm"></a> npmjs.com پر مواد شائع کریں۔

پر مواد شائع کرنا تجویز کردہ ڈیفالٹ حل [npmjs.com](//npmjs.com) ( [فرنٹ اینڈ ہائی دستیابی](/i18n.site/feature#ha) دیکھیں)۔

### لاگ npm & پوسٹ

`nodejs` انسٹال کریں، `npm login` کے ساتھ لاگ ان کریں۔

`md/.i18n/htm/main.yml` میں ترمیم کریں اور [`md:`](//github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/main.yml#L7) `YOUR_NPM_PACKAGE` اپنے `npm` پیکیج کے نام کے طور پر تبدیل کریں [npmjs.com](//npmjs.com)

پھر `md/.i18n/htm/main.package.json` ترمیم کریں۔

ترجمہ اور شائع کرنے کے لیے `md` ڈائریکٹری میں `i18n.site --npm` یا `i18n.site -n` چلائیں۔

اگر آپ شائع کرنے کے لیے مسلسل انضمام کا ماحول استعمال کرتے ہیں، تو `nodejs` انسٹال کرنے کی ضرورت نہیں ہے۔ بس لاگ ان اور اشاعت کی اجازت `~/.npmrc` ماحول میں کاپی کریں۔

اگر آپ `main.yml` میں `v:` کے پیکج کے نام میں ترمیم کرتے ہیں، تو براہ کرم **پہلے `.i18n/v/main` حذف کرنا یقینی بنائیں** اور پھر اسے شائع کریں۔

#### پراکسی سرور این پی ایم کے ذریعہ شائع کیا گیا ہے۔

اگر مین لینڈ چائنا کے صارفین کو نیٹ ورک کے مسائل کا سامنا کرنا پڑتا ہے اور وہ `npm` پیکجز شائع کرنے سے قاصر ہیں، تو وہ پراکسی سرور کو کنفیگر کرنے کے لیے ماحولیاتی متغیر `https_proxy` سیٹ کر سکتے ہیں۔

یہ فرض کرتے ہوئے کہ آپ کا پراکسی سرور پورٹ ہے `7890` ، آپ لکھ سکتے ہیں:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

## خود میزبان مواد

اگر آپ مواد کی خود میزبانی کرنا چاہتے ہیں تو پہلے `md/.i18n/htm/main.yml` میں ترمیم کریں اور `v: //unpkg.com/i18n.site` اپنے URL کے سابقہ میں تبدیل کریں، جیسے `v: //i18n-v.xxx.com` ۔

`md` ڈائریکٹری درج کریں اور چلائیں۔

```
i18n.site --htm_conf ol --save
```

یا مخفف

```
i18n.site -c ol -s
```

پھر، `md/out/main/v` ڈائرکٹری میں موجود مواد کو `v:` میں سیٹ کردہ یو آر ایل کے سابقہ راستے پر ترتیب دیں۔

آخر میں، **`/.v` سے `1s` میں ختم ہونے والے راستے کے کیش ٹائم کو ترتیب دیں** ، بصورت دیگر نئے جاری کردہ مواد تک فوری طور پر رسائی حاصل نہیں کی جا سکتی۔

غیر ضروری درخواستوں کو کم کرنے کے لیے دوسرے راستوں کے لیے کیشے کا وقت ایک سال یا اس سے زیادہ پر سیٹ کیا جا سکتا ہے۔

## s3 میں مواد کی میزبانی کریں۔

خود میزبان مواد کے لیے، آپ کا اپنا سرور استعمال کرنے کے علاوہ، ایک اور عام آپشن `S3` `CDN` استعمال کرنا ہے +

آپ `S3` سرور میں لاگ ان کرنے کے لیے استعمال کر سکتے ہیں [rclone](https://rclone.org) پھر درج ذیل اسکرپٹ کا حوالہ دے سکتے ہیں اور اس میں ترمیم کر سکتے ہیں، اور ہر ریلیز کے لیے صرف `S3` میں اضافی تبدیلیاں کاپی کر سکتے ہیں۔

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/main/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/main/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/main/v/.v "$s3:/$bucket/"
```

`CDN` کنفیگر کرنا یاد رکھیں تاکہ `/.v` میں ختم ہونے والے راستے کا کیش ٹائم `1s` ہو، بصورت دیگر نئے جاری کردہ مواد تک فوری طور پر رسائی حاصل نہیں کی جا سکتی۔

## ویب سائٹ شائع کریں

ویب سائٹ کو کہیں بھی تعینات کیا جا سکتا ہے [github page](https://pages.github.com) اور [cloudflare page](https://pages.cloudflare.com) اچھے انتخاب ہیں۔

چونکہ ویب سائٹ [ایک صفحے کے ایپلیکیشن](https://developer.mozilla.org/docs/Glossary/SPA) آرکیٹیکچر کا استعمال کرتی ہے، اس لیے یاد رکھیں کہ یو آر ایل کے راستے دوبارہ لکھیں جن میں `. ` سے `index.html` شامل نہ ہوں۔

ویب سائٹ کے اندراج کے صفحے کو صرف ایک بار تعینات کرنے کی ضرورت ہے، اور بعد میں مواد کی تازہ کاری کے لیے ویب سائٹ کے اندراج کے صفحے کو دوبارہ تعینات کرنے کی ضرورت نہیں ہے۔

### گیتھب پیج پر تعینات کریں۔

[ایک تنظیم بنانے کے لیے پہلے github کلک کریں](https://github.com/account/organizations/new?plan=free) مثال کے طور پر درج ذیل تنظیم کا نام `i18n-demo` ہے۔

پھر اس تنظیم کے تحت گودام `i18n-demo.github.io` بنائیں (براہ کرم `i18n-demo` اس تنظیم کے نام سے بدل دیں جو آپ نے بنایا ہے):

![](https://p.3ti.site/1721098657.avif)

پچھلے مضمون میں مواد شائع کرتے وقت، `out/main/htm` تیار کیا گیا ہے، براہ کرم اس ڈائریکٹری کو درج کریں اور چلائیں :

```
ln -s index.html 404.html
```


چونکہ `github page` URL پاتھ کو دوبارہ لکھنے کی حمایت نہیں کرتا ہے، اس کے بجائے `404.html` استعمال کیا جاتا ہے۔

پھر `htm` ڈائرکٹری میں درج ذیل کمانڈ کو چلائیں ( `i18n-demo/i18n-demo.github.io.git` اپنے گودام کے پتے سے تبدیل کرنا یاد رکھیں) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

کوڈ کو آگے بڑھانے کے بعد، اس تک رسائی حاصل کرنے سے پہلے `github page` کی تعیناتی کے کامیابی سے چلنے کا انتظار کریں (جیسا کہ نیچے دکھایا گیا ہے)۔

<img src="//p.3ti.site/1721116586.avif" width="350px">

ڈیمو صفحہ کے لیے براہ کرم دیکھیں:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

### کلاؤڈ فلیئر صفحہ پر تعینات کریں۔

`github page` کے مقابلے میں [cloudflare page](//pages.cloudflare.com) یہ پاتھ ری رائٹنگ فراہم کرتا ہے اور مین لینڈ چین کے لیے زیادہ دوستانہ ہے اور اسے استعمال کرنے کی سفارش کی جاتی ہے۔

`cloudflare page` کی تعیناتی عام طور پر اوپر `github page` کی تعیناتی پر مبنی ہوتی ہے۔

ایک پروجیکٹ بنائیں اور اوپر والے `i18n-demo.github.io` گودام کو باندھیں۔

عمل کو ذیل کی شکل میں دکھایا گیا ہے:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

تنظیم `i18n-demo` تک رسائی دینے کے لیے براہ کرم `Add Account` پر کلک کریں۔

اگر آپ نے کسی اور تنظیم کے گودام کو پابند کیا ہے، تو آپ کو نئی تنظیم کے ظاہر ہونے سے پہلے دو بار اجازت دینے کے لیے `Add Account` پر دو بار کلک کرنے کی ضرورت پڑ سکتی ہے۔

![](https://p.3ti.site/1721118306.avif)

اگلا، گودام `i18n-demo.github.io` منتخب کریں، پھر `Begin setup` پر کلک کریں، اور بعد کے مراحل کے لیے پہلے سے طے شدہ اقدار کا استعمال کریں۔

![](https://p.3ti.site/1721118490.avif)

پہلی بار بائنڈنگ کرنے کے بعد، آپ کو اس تک رسائی حاصل کرنے سے پہلے چند منٹ انتظار کرنا ہوگا۔

تعیناتی کے بعد، آپ اپنی مرضی کے مطابق ڈومین نام کا پابند کر سکتے ہیں۔

![](https://p.3ti.site/1721119459.avif)

حسب ضرورت ڈومین نام کو بائنڈنگ کرنے کے بعد، براہ کرم ڈومین نام پر جائیں تاکہ سنگل پیج ایپلیکیشن کی پاتھ ری رائٹنگ کو ترتیب دیا جا سکے، جیسا کہ ذیل میں دکھایا گیا ہے:

![](https://p.3ti.site/1721119320.avif)

مندرجہ بالا تصویر میں قواعد درج ذیل ہیں، براہ کرم نیچے دی گئی پہلی سطر میں `i18n.site` اپنے پابند کردہ ڈومین نام سے بدل دیں۔

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

اس کے علاوہ، براہ کرم کیشے کے قواعد کو ترتیب دیں، جیسا کہ ذیل میں دکھایا گیا ہے، اور کیش کی مدت کو ایک ماہ پر سیٹ کریں۔

![](https://p.3ti.site/1721125111.avif)

براہ کرم اوپر دی گئی تصویر کے دوسرے مرحلے میں مماثل ڈومین نام کو اس ڈومین نام سے تبدیل کریں جس کا آپ پابند ہیں۔

### سرزمین چین میں ویب سائٹ کی تعیناتی کو بہتر بنانا

اگر آپ مین لینڈ چین کے نیٹ ورک ماحول میں بہتر رسائی کی کارکردگی حاصل کرنا چاہتے ہیں، تو براہ کرم پہلے [ایک ڈومین نام رجسٹر کریں](//beian.aliyun.com) ۔

اس کے بعد، مینلینڈ + میں کلاؤڈ فروشوں کے آبجیکٹ اسٹوریج کا استعمال کریں `CDN` درج ذیل مواد کو تعینات کریں `out/main/htm` !

آپ edge computing استعمال کر سکتے ہیں تاکہ ایک صفحے کی ایپلی کیشنز کو اپنانے کے لیے راستے کو دوبارہ لکھ سکیں، مثال کے طور پر، [Baidu Smart Cloud `CDN` کو](//cloud.baidu.com/product/cdn.html) اس طرح ترتیب دیا جا سکتا ہے:

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
  // رسپانس ہیڈر کو ڈیبگ آؤٹ پٹ پر سیٹ کیا جا سکتا ہے، جیسے out.XXX = 'MSG';
})
```

![](https://p.3ti.site/1721121273.avif)

کیونکہ ریکارڈ `MX` اور ریکارڈ `CNAME` ایک ساتھ نہیں رہ سکتے، اگر آپ ایک ہی وقت میں ڈومین نام کی ای میلز وصول کرنا چاہتے ہیں، تو آپ کو [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) کے ساتھ لیول `CNAME` سے ریکارڈ `A` میں تعاون کرنے کی ضرورت ہے۔

اس کے علاوہ، کیونکہ مین لینڈ چین میں کلاؤڈ وینڈرز کے بیرون ملک ٹریفک چارجز نسبتاً مہنگے ہیں، اگر آپ لاگت کو بہتر بنانا چاہتے ہیں، تو آپ [DNS Cloud کا مفت جغرافیائی ریزولوشن](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) اور [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) کا حسب ضرورت ڈومین نام (جیسا کہ نیچے دکھایا گیا ہے) استعمال کر سکتے ہیں۔ ٹریفک ڈائیورژن──مین لینڈ چین میں ٹریفک روٹنگ Baidu Cloud `CDN` ، بین الاقوامی ٹریفک cloudflare .

![](https://p.3ti.site/1721119788.avif)

یہ تعیناتی کی اصلاح کے حل زیادہ پیچیدہ ہیں اور مستقبل میں الگ الگ ابواب میں متعارف کرائے جائیں گے۔

### عام ڈومین نام ری ڈائریکشن

اگر آپ کسی ویب سائٹ کو اپنی مرکزی ویب سائٹ کے طور پر بنانے کے لیے `i18n.site` استعمال کرتے ہیں، تو آپ کو عام طور پر پین ڈومین ری ڈائریکشن کو کنفیگر کرنے کی ضرورت ہوتی ہے، یعنی `*.xxx.com` (بشمول `www.xxx.com` ) سے `xxx.com` تک رسائی کو ری ڈائریکٹ کرنا ہوتا ہے۔

یہ ضرورت علی بابا کلاؤڈ `CDN` `EdgeScript` ( [انگریزی دستاویز](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [چینی دستاویز](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ) کی مدد سے حاصل کی جا سکتی ہے۔

[علی بابا CDN](https://cdn.console.aliyun.com/domain/list) میں ڈومین کا نام شامل کریں اور علی بابا کلاؤڈ `CDN` میں ڈومین نام `*.xxx.com` `CNAME` نشاندہی کریں۔

![](https://p.3ti.site/1721122000.avif)

مثال کے طور پر، اوپر دی گئی تصویر میں `*.i18n.site` کی پین ڈومین نام کی ری ڈائریکشن کنفیگریشن اس طرح ہے:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

### nginx کے ساتھ تعینات کریں۔

براہ کرم nginx کے `server` پیراگراف میں مندرجہ ذیل سے ملتی جلتی ترتیب شامل کریں براہ کرم `/root/i18n/md/out/main/htm` اپنے پروجیکٹ `out/main/htm` کے راستے میں تبدیل کریں:

```
location / {
  root  /root/i18n/md/out/main/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

## `github action` مسلسل انضمام کی بنیاد پر

آپ اپنے `github action` ترتیب دینے کے لیے درج ذیل کا حوالہ دے سکتے ہیں۔

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

جیسا کہ کنفیگریشن میں دیکھا جا سکتا ہے، یہ ورک فلو اس وقت متحرک ہوتا ہے جب برانچ `main` اور برانچ `dist` کو آگے بڑھایا جاتا ہے۔

ورک فلو دستاویز کو شائع کرنے کے لیے برانچ کے نام سے متعلقہ کنفیگریشن فائل کا استعمال کرے گا، یہاں `.i18n/htm/main.yml` اور `.i18n/htm/dist.yml` کو پبلشنگ کنفیگریشن کے طور پر استعمال کیا جائے گا۔

ہم دستاویز کی رہائی کے عمل کے لیے درج ذیل بہترین طریقوں کی تجویز کرتے ہیں:

جب تبدیلیوں کو برانچ `main` میں دھکیل دیا جاتا ہے تو، دستاویز کو تعمیر کرنے اور پیش نظارہ اسٹیشن پر تعینات کرنے کے لیے متحرک کیا جاتا ہے (پیش نظارہ اسٹیشن دستیاب ہے [github page](//pages.github.com) )۔

پیش نظارہ سائٹ پر دستاویز کے درست ہونے کی تصدیق کرنے کے بعد، کوڈ کو ضم کر کے برانچ `dist` میں دھکیل دیا جائے گا، اور سرکاری تعمیر اور تعیناتی آن لائن ہو جائے گی۔

بلاشبہ، مندرجہ بالا عمل کو لاگو کرنے کے لیے مزید کنفیگریشن لکھنے کی ضرورت ہے۔

آپ ورک فلو اسکرپٹنگ کے لیے اصل پروجیکٹ کا حوالہ دے سکتے ہیں [github.com/fcdoc/doc](//github.com/fcdoc/doc/blob/main/.github/workflows/i18n.site.yml)

کنفیگریشن میں `secrets.I18N_SITE_TOKEN` اور `secrets.NPM_TOKEN` کے لیے آپ کو کوڈ بیس میں خفیہ متغیرات کو ترتیب دینے کی ضرورت ہوتی ہے۔

![](//p.3ti.site/1730970199.avif)

`I18N_SITE_TOKEN` [i18n.site/token](//i18n.site/token)

`NPM_TOKEN` کنفیگریشن میں پیکیج `npm` کا پبلشنگ ٹوکن ہے [npmjs.com](//npmjs.com)

![](//p.3ti.site/1730969906.avif)


## ڈائریکٹری کا ڈھانچہ

### `public`

ویب سائٹ کی جامد فائلیں، جیسے `favicon.ico` ، `robots.txt` ، وغیرہ۔

یہاں آئیکن فائلوں کو [realfavicongenerator.net](https://realfavicongenerator.net)

### `.i18n`

`.i18n` ڈائرکٹری کے تحت `i18n.site` کی کنفیگریشن فائلیں، ٹرانسلیشن کیش وغیرہ ہیں۔ تفصیلات کے لیے اگلا باب ["کنفیگریشن"](/i18n.site/conf) دیکھیں۔

### `en`

ماخذ زبان کی ڈائرکٹری، `.i18n/conf.yml` کنفیگریشن فائل میں `fromTo` میں سے `en` کے مطابق

```yaml
i18n:
  fromTo:
    en: zh
```

براہ کرم ترجمہ کی ترتیب سے رجوع کریں [i18](/i18/use)