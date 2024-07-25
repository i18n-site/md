# انسٹال کریں &

## کنفیگریشن ٹوکن

`i18` ترجمہ ٹول سرایت شدہ ہے `i18n.site` براہ کرم [رسائی ٹوکن کو ترتیب دینے کے لیے `i18` دستاویز کا حوالہ دینے کے لیے یہاں کلک کریں](/i18/use) ۔

## انسٹال کریں۔

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## ڈیمو پروجیکٹ

آئیے ایک ڈیمو پروجیکٹ کے ساتھ شروع کریں اور استعمال کرنے کا طریقہ سیکھیں `i18n.site`

ہم پہلے ڈیمو ریپوزٹری کو کلون کرتے ہیں اور کمانڈ کو اس طرح چلاتے ہیں:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

مین لینڈ چین میں صارفین یہ کر سکتے ہیں:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

`docker` کے ساتھ مقامی پیش نظارہ کی سہولت کے لیے کوڈ بیس کلون کا ڈائرکٹری کا نام `md` ہونا چاہیے `demo.i18n.site`

### ترجمہ

سب سے پہلے، `md` درج کریں اور `i18n.site` چلائیں، جس کا ترجمہ `en` میں ہوگا `zh`

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

چلانے کے بعد، ترجمہ اور کیش فائلیں بنائی جائیں گی، براہ کرم انہیں ریپوزٹری `git add . ` میں شامل کرنا یاد رکھیں `md`

### مقامی پیش نظارہ

انسٹال کریں اور شروع `docker` ( `MAC` `docker` کے رن ٹائم کے طور پر استعمال [orbstack](https://orbstack.dev) کی تجویز کرتے ہیں)۔

پھر، `docker` درج کریں اور `./up.sh` چلائیں، اور پھر مقامی طور پر پیش نظارہ کرنے کے لیے ملاحظہ کریں [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### مواد پوسٹ کریں۔

[ایک صفحے کے ایپلیکیشن](https://developer.mozilla.org/docs/Glossary/SPA) آرکیٹیکچر کو اپناتا ہے، اور ویب سائٹ کا داخلہ صفحہ اور ویب سائٹ کا مواد آزادانہ طور پر تعینات کیا جاتا ہے `i18n.site`

مندرجہ بالا ترجمہ کو چلانے کے بعد، ڈائرکٹری میں `htm` اور `v` ڈائرکٹریز تیار ہوں گی `md/out/dev`

یہاں `dev` اشارہ کرتا ہے کہ یہ `.i18n/htm/dev.yml` فائل کی بنیاد پر بنایا گیا ہے۔

مندرجات : تحت `dev`

ڈائریکٹری کے تحت ویب سائٹ کا داخلہ صفحہ ہے `htm`

ڈائرکٹری میں ورژن نمبر کے ساتھ ویب سائٹ کا مواد شامل ہے `v`

مقامی پیش نظارہ ورژن نمبر سے قطع نظر تمام فائلوں کو ڈائرکٹری میں کاپی کرے گا `out/dev/v/0.1.0`

سرکاری ریلیز کے لیے، تبدیل شدہ فائلوں کو نئے ورژن نمبر ڈائرکٹری میں کاپی کیا جائے گا۔

#### کنفیگریشن فائل کی وضاحت کرنے کے لیے -c استعمال کریں۔

مختلف کنفیگریشن فائلیں ڈائرکٹری کے تحت متعلقہ ڈائریکٹریز بنائیں گی `out`

مثال کے طور پر `.i18n/htm/ol.yml` ایک `out/ol` ڈائریکٹری بنائے گی۔

اور `ol.yml` ڈیفالٹ کنفیگریشنز ہیں `dev.yml`

`development` کا مخفف ہے، جو ترقیاتی ماحول کی نمائندگی کرتا ہے، مقامی پیش نظارہ کے لیے استعمال کیا جاتا ہے، اور ڈیفالٹ کنفیگریشن فائل بھی ہے `dev`
`online` کا مخفف `ol` ، جو آن لائن ماحول کی نمائندگی کرتا ہے، سرکاری ریلیز کے لیے استعمال کیا جاتا ہے، اور `npm` کمانڈ لائن پیرامیٹر کا استعمال کرتے ہوئے `-n` .

آپ کنفیگریشن فائل کا نام بتانے کے لیے کمانڈ لائن پر استعمال کر سکتے ہیں `--htm_conf`

مثال کے طور پر:
```
i18n.site --htm_conf yourConfig --save
```

یہاں اپ ڈیٹ ریلیز ورژن نمبر کی نشاندہی کرتا ہے `--save`

#### <a rel=id href="#npm" id="npm"></a> npmjs.com پر مواد شائع کریں۔

[npmjs.com](//npmjs.com) مواد شائع کرنا تجویز کردہ ڈیفالٹ حل ہے ( [فرنٹ اینڈ ہائی دستیابی](/i18n.site/feature#ha) دیکھیں)۔

##### npm login & رہائی

انسٹال کریں `nodejs` لاگ ان کرنے کے لیے `npm login` استعمال کریں۔

ترمیم کریں `md/.i18n/htm/ol.yml` `i18n.site` میں `v: //unpkg.com/i18n.site` کو اپنی مرضی سے تبدیل کریں `npm` پیکیج کا نام۔

ویب سائٹ کے ڈومین نام کو بطور پیکج کا نام استعمال کرنا ایک اچھا انتخاب ہے [npmjs.com](//npmjs.com)

پیکیج `npm` بنیاد پر شائع کرتے وقت، $ کو `v:` قدر کے سابقہ ​​کے طور پر **`//unpkg.com/` کرنا یقینی بنائیں** `i18n.site` اس سابقہ ​​راستے کے تحت `/.v` نئی ریلیز کو بروقت دیکھنے کے قابل بنایا گیا ہے۔

ترجمہ اور شائع کرنے کے لیے ڈائرکٹری میں `i18n.site --npm` یا `i18n.site -n` چلائیں `md`

اگر آپ شائع کرنے کے لیے مسلسل انضمام کا ماحول استعمال کرتے ہیں، تو اسے انسٹال کرنے کی ضرورت نہیں ہے بس لاگ ان اور شائع شدہ اجازت `~/.npmrc` کو ماحول میں کاپی کریں `nodejs`

اگر آپ پیکیج کے نام **`.i18n/v/ol`** `v:` in `ol.yml`

##### پراکسی سرور این پی ایم کے ذریعہ شائع کیا گیا ہے۔

اگر مین لینڈ چائنا کے صارفین کو نیٹ ورک کے مسائل کا سامنا کرنا پڑتا ہے اور وہ پیکیج `npm` شائع کرنے سے قاصر ہیں، تو وہ پراکسی سرور کو کنفیگر کرنے کے لیے انوائرمنٹ ویری ایبل `https_proxy` سیٹ کر سکتے ہیں۔

یہ فرض کرتے ہوئے کہ آپ کا پراکسی سرور پورٹ ہے `7890` آپ لکھ سکتے ہیں:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### خود میزبان مواد

اگر آپ مواد کی خود میزبانی کرنا چاہتے ہیں، `md/.i18n/htm/ol.yml` پہلے ترمیم کریں اور `v: //unpkg.com/i18n.site` اپنے URL کے سابقہ ​​میں تبدیل کریں، جیسے `v: //i18n-v.xxx.com` ۔

ڈائرکٹری درج کریں اور چلائیں `md`

```
i18n.site --htm_conf ol --save
```

یا مخفف

```
i18n.site -c ol -s
```

پھر، ڈائرکٹری میں موجود مواد کو `v:` میں سیٹ کردہ `md/out/ol/v` آر ایل پریفکس پاتھ میں ترتیب دیں۔

آخر میں، **`1s` `/.v` ختم ہونے والے راستے کا کیش ٹائم کنفیگر کریں** ، بصورت دیگر نئے جاری کردہ مواد تک فوری طور پر رسائی حاصل نہیں کی جا سکتی۔

غیر ضروری درخواستوں کو کم کرنے کے لیے دوسرے راستوں کے لیے کیشے کا وقت ایک سال یا اس سے زیادہ پر سیٹ کیا جا سکتا ہے۔

##### s3 میں مواد کی میزبانی کریں۔

خود میزبان مواد کے لیے، آپ کے اپنے سرور `CDN` استعمال کرنے کے علاوہ ایک اور عام آپشن ہے `S3` +

آپ `S3` [rclone](https://rclone.org) استعمال کر سکتے ہیں، پھر نیچے دیے گئے اسکرپٹ کا حوالہ دے سکتے ہیں، اور ہر بار شائع کرنے پر صرف انکریمنٹل تبدیلیاں کاپی کر سکتے ہیں `S3`

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

ترتیب دینا یاد رکھیں `CDN` تاکہ `/.v` میں ختم ہونے والے راستے کا کیش ٹائم `1s` ہو، بصورت دیگر آپ فوری طور پر نئے جاری کردہ مواد تک رسائی حاصل نہیں کر پائیں گے۔

### ویب سائٹ شائع کریں

ویب سائٹ کو کہیں بھی تعینات کیا جا سکتا ہے [github page](https://pages.github.com) اور [cloudflare page](https://pages.cloudflare.com) اچھے انتخاب ہیں۔

چونکہ ویب سائٹ [ایک صفحے کی ایپلیکیشن](https://developer.mozilla.org/docs/Glossary/SPA) کے فن تعمیر کو اپناتی ہے، اس لیے یاد رکھیں کہ URL کا راستہ دوبارہ لکھنا ہے جس میں `index.html` پر مشتمل نہیں ہے `. `

ویب سائٹ کے اندراج کے صفحے کو صرف ایک بار تعینات کرنے کی ضرورت ہے، اور بعد میں مواد کی تازہ کاری کے لیے ویب سائٹ کے اندراج کے صفحے کو دوبارہ تعینات کرنے کی ضرورت نہیں ہے۔

#### گیتھب پیج پر تعینات کریں۔

[ایک تنظیم بنانے کے لیے پہلے github کلک کریں](https://github.com/account/organizations/new?plan=free) ایک مثال کے طور پر `i18n-demo`

پھر اس تنظیم کے تحت ایک گودام بنائیں `i18n-demo.github.io` براہ کرم `i18n-demo` اپنے بنائے ہوئے تنظیم کے نام سے تبدیل کریں):

<img alt="" src="https://p.3ti.site/1721098657.avif">

پچھلے مضمون میں مواد شائع کرتے وقت، یہ تیار کیا گیا ہے `out/ol/htm` براہ کرم اس ڈائریکٹری کو درج کریں اور چلائیں :

```
ln -s index.html 404.html
```


`github page` یو آر ایل پاتھ ری رائٹنگ کی حمایت نہیں کرتا، اس لیے اس کی بجائے `404.html` استعمال کیا جاتا ہے۔

پھر `htm` میں درج ذیل کمانڈ کو چلائیں (اپنے گودام کے پتے سے `i18n-demo/i18n-demo.github.io.git` تبدیل کرنا یاد رکھیں) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

کوڈ کو آگے بڑھانے کے بعد، تعیناتی `github page` کامیابی سے چلنے کا انتظار کریں (جیسا کہ نیچے دکھایا گیا ہے)، اور پھر آپ اس تک رسائی حاصل کر سکتے ہیں۔

<img src="//p.3ti.site/1721116586.avif" width="350px">

ڈیمو صفحہ کے لیے براہ کرم دیکھیں:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### کلاؤڈ فلیئر صفحہ پر تعینات کریں۔

کے [cloudflare page](//pages.cloudflare.com) میں `github page` یہ راستہ دوبارہ لکھنا فراہم کرتا ہے اور مین لینڈ چین کے لیے زیادہ قابل رسائی ہے۔

تعیناتی عام طور پر اوپر `github page` کی تعیناتی پر مبنی ہوتی ہے `cloudflare page`

ایک پروجیکٹ بنائیں اور اوپر والے گودام کو باندھیں `i18n-demo.github.io`

عمل کو ذیل کی شکل میں دکھایا گیا ہے:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

براہ کرم `i18n-demo` تنظیم تک رسائی دینے کے لیے کلک کریں `Add Account`

اگر آپ نے کسی اور تنظیم کے گودام کو پابند کیا ہے، تو آپ کو نئی تنظیم کے ظاہر ہونے سے پہلے اسے دو بار اجازت دینے کے لیے دو بار کلک کرنے کی ضرورت پڑ سکتی ہے `Add Account`

<img alt="" src="https://p.3ti.site/1721118306.avif">

اگلا منتخب `Begin setup` `i18n-demo.github.io`

<img alt="" src="https://p.3ti.site/1721118490.avif">

پہلی بار بائنڈنگ کرنے کے بعد، آپ کو اس تک رسائی حاصل کرنے سے پہلے چند منٹ انتظار کرنا ہوگا۔

تعیناتی کے بعد، آپ اپنی مرضی کے مطابق ڈومین نام کا پابند کر سکتے ہیں۔

<img alt="" src="https://p.3ti.site/1721119459.avif">

حسب ضرورت ڈومین نام کو بائنڈنگ کرنے کے بعد، براہ کرم ڈومین نام پر جائیں تاکہ سنگل پیج ایپلیکیشن کی پاتھ ری رائٹنگ کو ترتیب دیا جا سکے، جیسا کہ ذیل میں دکھایا گیا ہے:

<img alt="" src="https://p.3ti.site/1721119320.avif">

مندرجہ بالا تصویر میں قواعد درج ذیل ہیں، براہ کرم نیچے دیے گئے ڈومین نام کے ساتھ تبدیل کریں `i18n.site`

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

اس کے علاوہ، براہ کرم کیشے کے قواعد کو ترتیب دیں، جیسا کہ ذیل میں دکھایا گیا ہے، اور کیش کی مدت کو ایک ماہ پر سیٹ کریں۔

<img alt="" src="https://p.3ti.site/1721125111.avif">

براہ کرم اوپر دی گئی تصویر کے دوسرے مرحلے میں ڈومین نام کی مماثلت کو اس ڈومین نام میں تبدیل کریں جس کا آپ نے پابند کیا ہے۔

#### سرزمین چین میں ویب سائٹ کی تعیناتی کو بہتر بنانا

اگر آپ مین لینڈ چین کے نیٹ ورک ماحول میں بہتر رسائی کی کارکردگی حاصل کرنا چاہتے ہیں، تو براہ کرم پہلے [ایک ڈومین نام رجسٹر کریں](//beian.aliyun.com) ۔

`out/ol/htm` کے بعد `CDN` مینلینڈ چین میں کلاؤڈ فروشوں کے آبجیکٹ اسٹوریج کا استعمال کریں +

آپ سنگل پیج ایپلی کیشنز کو اپنانے کے لیے ایج کمپیوٹنگ کا استعمال کر سکتے ہیں، جیسے کہ [Baidu Smart `CDN`](//cloud.baidu.com/product/cdn.html) اسے اس طرح ترتیب دیا جا سکتا ہے:

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

`CNAME` `MX` [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) `CNAME` `A`

اس کے علاوہ، کیونکہ مین لینڈ چین میں کلاؤڈ وینڈرز کے بیرون ملک ٹریفک چارجز نسبتاً مہنگے ہیں، اگر آپ لاگت کو بہتر بنانا چاہتے ہیں، تو آپ [Huawei Cloud کا مفت جغرافیائی DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) اور [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) کا حسب ضرورت ڈومین نام (جیسا کہ نیچے دکھایا گیا ہے) استعمال کر سکتے ہیں۔ ٹریفک ڈائیورژن──مین لینڈ چین میں ٹریفک Baidu Cloud `CDN` بین الاقوامی ٹریفک cloudflare .

<img alt="" src="https://p.3ti.site/1721119788.avif">

یہ تعیناتی کی اصلاح کے حل زیادہ پیچیدہ ہیں اور مستقبل میں الگ الگ ابواب میں متعارف کرائے جائیں گے۔

#### عام ڈومین نام ری ڈائریکشن

اگر آپ کسی ویب سائٹ کو اپنی مرکزی ویب سائٹ کے طور پر بنانے کے لیے استعمال کرتے `i18n.site` ، تو آپ کو عام طور پر پین ڈومین ری ڈائریکشن کو ترتیب دینے کی ضرورت ہوتی ہے، یعنی ری ڈائریکٹ `*.xxx.com` (بشمول `www.xxx.com` ) تک رسائی `xxx.com` .

یہ ضرورت علی بابا کلاؤڈ کے `EdgeScript` ( [انگریزی دستاویز](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [چینی دستاویز](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ) کی مدد سے حاصل کی جا سکتی ہے `CDN`

[علی بابا CDN](https://cdn.console.aliyun.com/domain/list) میں ڈومین نام شامل کریں اور `*.xxx.com` نام کو علی بابا کلاؤڈ `CDN` 's `CNAME` کی طرف اشارہ کریں۔

<img alt="" src="https://p.3ti.site/1721122000.avif">

مثال کے طور پر، اوپر کی تصویر میں پین ڈومین نام کی ری ڈائریکشن کنفیگریشن `*.i18n.site` طرح ہے:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### nginx کے ساتھ تعینات کریں۔

براہ کرم `server` میں مندرجہ ذیل سے ملتی جلتی ایک ترتیب شامل کریں nginx جہاں `/root/i18n/md/out/ol/htm` براہ کرم اسے اپنے پروجیکٹ کے راستے میں تبدیل کریں `out/ol/htm` :

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### ڈائرکٹری کا ڈھانچہ

#### عوام

ویب سائٹ کی جامد فائلیں، جیسے `favicon.ico` `robots.txt` ، وغیرہ۔

یہاں آئیکن فائلوں کو [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n

ڈائرکٹری کے نیچے `i18n.site` کی کنفیگریشن فائلیں، ٹرانسلیشن کیش وغیرہ ہیں `.i18n` تفصیلات کے لیے اگلا باب ["کنفیگریشن"](/i18n.site/conf) دیکھیں۔

#### en

ماخذ زبان کی ڈائرکٹری، کنفیگریشن فائل میں `fromTo` `en` `.i18n/conf.yml` مطابقت رکھتی ہے۔

```yaml
i18n:
  fromTo:
    en: zh
```

براہ کرم ترجمہ کی ترتیب سے رجوع کریں [i18](/i18/use)

