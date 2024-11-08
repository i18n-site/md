# لڳائڻ ۽ آن لائن

`i18n.site` ھڪڙي [صفحي جي ايپليڪيشن](https://developer.mozilla.org/docs/Glossary/SPA) آرڪيٽيڪچر کي اپنائڻ، ۽ ويب سائيٽ جي داخلا واري صفحي ۽ ويب سائيٽ جي مواد کي آزاديء سان ترتيب ڏنو ويو آھي.

مٿين ترجمي کي هلائڻ کان پوء، ڊائريڪٽري `htm` ۽ `v` ٺاهي ويندي `md/out/dev` ڊاريڪٽري جي تحت.

هتي، `dev` جو مطلب آهي ته اهو ٺهيل آهي `.i18n/htm/dev.yml` ترتيب واري فائل جي بنياد تي.

`dev` ڊاريڪٽري :

`htm` ڊاريڪٽري ويب سائيٽ جو داخلا صفحو آهي.

`v` ڊاريڪٽري ۾ ورزن نمبرن سان گڏ ويب سائيٽ جو مواد شامل آھي.

مقامي ڏيک نسخي نمبر جي پرواهه نه ڪندو آهي ۽ سڀني فائلن کي `out/dev/v/0.1.0` ڊاريڪٽري ڏانهن نقل ڪندو.

سرڪاري رليز لاءِ، تبديل ٿيل فائلون نقل ڪيون وينديون نئين ورجن نمبر ڊاريڪٽري ۾.

## `-c` سان ٺاھ جوڙ واري فائل جي وضاحت ڪريو

مختلف ٺاھ جوڙ جون فائلون `out` ڊاريڪٽري ۾ لاڳاپيل ڊائريڪٽريون ٺاھينديون.

مثال طور، `.i18n/htm/main.yml` ٺاهيندو `out/main` ڊاريڪٽري.

`dev.yml` ۽ `main.yml` ڊفالٽ ٺاھ جوڙ آھن.

`dev` `development` جو مخفف آهي، ترقيءَ واري ماحول کي ظاهر ڪري ٿو، مقامي ڏيک لاءِ استعمال ٿئي ٿو، ۽ پڻ ڊفالٽ ڪنفيگريشن فائل آهي.
`ol` `online` جو مخفف آهي، جيڪو آن لائن ماحول کي ظاهر ڪري ٿو، جيڪو سرڪاري رليز لاءِ استعمال ڪيو ويندو آهي، اهو پڻ ڊفالٽ ڪنفيگريشن فائل آهي جڏهن ڪمانڊ لائين پيرا ميٽرز `-n` کان `npm` جاري ڪرڻ لاءِ.

توھان پڻ ٺاھي سگھوٿا ٻيون ٺاھڻ واريون فائلون استعمال ڪرڻ لاءِ `--htm_conf` ڪمانڊ لائن تي ترتيب ڏيڻ واري فائل جو نالو بيان ڪرڻ لاءِ:

مثال طور:
```
i18n.site --htm_conf dist --save
```

هتي `--save` ظاھر ڪري ٿو تازه ڪاري ورزن نمبر.

## <a rel=id href="#npm" id="npm"></a> npmjs.com تي مواد شايع ڪريو

مواد کي شايع ڪرڻ لاءِ تجويز ڪيل ڊفالٽ حل [npmjs.com](//npmjs.com) (ڏسو [فرنٽ-اينڊ هاءِ دستيابي](/i18n.site/feature#ha) ).

### لاگ npm & پوسٽ

انسٽال ڪريو `nodejs` ، لاگ ان ڪريو `npm login` سان.

`md/.i18n/htm/main.yml` [npmjs.com](//npmjs.com) ڪريو ۽ [`md:`](//github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/main.yml#L7) `YOUR_NPM_PACKAGE` کي پنھنجي `npm` پيڪيج جي نالي سان تبديل ڪريو.

پوء تبديل ڪريو `md/.i18n/htm/main.package.json`

ترجمو ڪرڻ ۽ شايع ڪرڻ لاءِ `md` ڊاريڪٽري ۾ `i18n.site --npm` يا `i18n.site -n` هلايو.

جيڪڏھن توھان شايع ڪرڻ لاءِ مسلسل انٽيگريشن ماحول استعمال ڪريو ٿا، `nodejs` انسٽال ڪرڻ جي ڪا ضرورت نھ آھي. بس لاگ ان ٿيل ۽ پبلشنگ جي اجازتن کي نقل ڪريو `~/.npmrc` ماحول ۾.

جيڪڏهن توهان `main.yml` ۾ `v:` جي پيڪيج جي نالي ۾ ترميم ڪريو ٿا، مهرباني ڪري **پڪ ڪريو ته پهريان `.i18n/v/main` حذف ڪريو** ۽ پوءِ شايع ڪريو.

#### پراکسي سرور پاران شايع ٿيل اين پي ايم

جيڪڏهن مينلينڊ چين ۾ صارفين کي نيٽ ورڪ مسئلن سان منهن ڏيڻو پوي ٿو ۽ `npm` پيڪيجز شايع ڪرڻ جي قابل نه آهن، اهي پراکسي سرور کي ترتيب ڏيڻ لاء ماحول متغير `https_proxy` سيٽ ڪري سگهن ٿا.

فرض ڪيو ته توهان جو پراکسي سرور پورٽ `7890` آهي، توهان لکي سگهو ٿا:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

## خود ميزباني ڪيل مواد

جيڪڏھن توھان چاھيو ٿا ته مواد کي خود ميزباني ڪريو، پھريائين `md/.i18n/htm/main.yml` ايڊٽ ڪريو ۽ `v: //unpkg.com/i18n.site` پنھنجي URL جي اڳياڙي ۾ تبديل ڪريو، جھڙوڪ `v: //i18n-v.xxx.com` .

داخل ڪريو `md` ڊاريڪٽري ۽ هلائي

```
i18n.site --htm_conf ol --save
```

يا مخفف

```
i18n.site -c ol -s
```

ان کان پوء، `md/out/main/v` ڊاريڪٽري ۾ مواد کي ترتيب ڏيو يو آر ايل پريفڪس رستو `v:` ۾ سيٽ ڪيو.

آخرڪار، **`/.v` کان `1s` ۾ ختم ٿيڻ واري رستي جي ڪيش وقت کي ترتيب ڏيو** ، ٻي صورت ۾ نئين جاري ڪيل مواد کي فوري طور تي رسائي نه ٿي سگھي.

غير ضروري درخواستن کي گھٽائڻ لاءِ ٻين رستن لاءِ ڪيش جو وقت ھڪ سال يا وڌيڪ مقرر ڪري سگھجي ٿو.

## s3 تي مواد ميزباني ڪريو

خود ميزباني واري مواد لاءِ، توهان جي پنهنجي سرور کي استعمال ڪرڻ کان علاوه، ٻيو عام آپشن استعمال ڪرڻ آهي `S3` `CDN` +

توھان استعمال ڪري سگھوٿا `S3` سرور ۾ لاگ ان ٿيڻ لاءِ [rclone](https://rclone.org) پوءِ ھيٺ ڏنل اسڪرپٽ جو حوالو ڏيو ۽ تبديل ڪريو، ۽ صرف ھر رليز لاءِ `S3` ۾ وڌندڙ تبديلين کي نقل ڪريو.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/main/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/main/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/main/v/.v "$s3:/$bucket/"
```

`CDN` کي ترتيب ڏيڻ لاء ياد رکو ته جيئن `/.v` ۾ ختم ٿيڻ واري رستي جو ڪيش وقت `1s` آهي، ٻي صورت ۾ نئين جاري ڪيل مواد کي فوري طور تي رسائي نه ٿي سگھي.

## ويب سائيٽ شايع ڪرڻ

ويب سائيٽ ڪٿي به ٺهي سگهي ٿي [github page](https://pages.github.com) ۽ [cloudflare page](https://pages.cloudflare.com) سٺيون چونڊون آهن.

ڇاڪاڻ ته ويب سائيٽ هڪ [واحد-صفحي ايپليڪيشن](https://developer.mozilla.org/docs/Glossary/SPA) آرڪيٽيڪچر استعمال ڪري ٿي، ياد رکو ته URL جي رستن کي ٻيهر لکڻ لاءِ جيڪي `. ` کان `index.html` تي مشتمل نه هجن.

ويب سائيٽ جي داخلا واري صفحي کي صرف هڪ ڀيرو ترتيب ڏيڻ جي ضرورت آهي، ۽ بعد ۾ مواد جي تازه ڪاري لاء ويب سائيٽ جي داخلا صفحي کي ٻيهر ترتيب ڏيڻ جي ڪا ضرورت ناهي.

### github صفحي تي ترتيب ڏيو

[هڪ تنظيم ٺاهڻ لاءِ پهرين github ڪلڪ ڪريو](https://github.com/account/organizations/new?plan=free) مثال طور هيٺ ڏنل تنظيم جو نالو `i18n-demo` آهي.

ان کان پوء هن تنظيم جي تحت گودام `i18n-demo.github.io` ٺاهيو (مهرباني ڪري `i18n-demo` کي تبديل ڪريو ان تنظيم جي نالي سان جيڪو توهان ٺاهيو آهي):

![](https://p.3ti.site/1721098657.avif)

پوئين مضمون ۾ مواد شايع ڪرڻ وقت، `out/main/htm` ٺاھيو ويو آھي مھرباني ڪري ھي ڊاريڪٽري داخل ڪريو ۽ ھلايو :

```
ln -s index.html 404.html
```


ڇاڪاڻ ته `github page` URL جو رستو ٻيهر لکڻ جي حمايت نٿو ڪري، `404.html` بدران استعمال ڪيو ويندو آهي.

پوءِ `htm` ڊاريڪٽري ۾ ھيٺ ڏنل حڪم ھلايو ( `i18n-demo/i18n-demo.github.io.git` پنھنجي گودام پتي سان تبديل ڪرڻ ياد رکو) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

ڪوڊ کي دٻائڻ کان پوء، ڪاميابيء سان هلائڻ لاء `github page` جي تعیناتي جو انتظار ڪريو (جيئن ھيٺ ڏيکاريل آھي) ان کان اڳ توھان ان تائين رسائي ڪري سگھو ٿا.

<img src="//p.3ti.site/1721116586.avif" width="350px">

ڊيمو صفحي لاء مهرباني ڪري ڏسو:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

### Cloudflare صفحي تي ترتيب ڏيو

`github page` جي مقابلي ۾ [cloudflare page](//pages.cloudflare.com) اهو رستو ٻيهر لکندو آهي ۽ سرزمين چين ڏانهن وڌيڪ دوستانه آهي ۽ استعمال ڪرڻ جي سفارش ڪئي وئي آهي.

`cloudflare page` جي مقرري عام طور تي مٿي ڏنل `github page` جي ترتيب تي ٻڌل آھي.

ھڪڙو منصوبو ٺاھيو ۽ مٿي `i18n-demo.github.io` گودام کي پابند ڪريو.

عمل هيٺ ڏنل شڪل ۾ ڏيکاريل آهي:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

مھرباني ڪري `Add Account` تي ڪلڪ ڪريو تنظيم `i18n-demo` تائين پھچائڻ لاءِ.

جيڪڏهن توهان ڪنهن ٻئي تنظيم جي گودام کي پابند ڪيو آهي، توهان کي نئين تنظيم جي ظاهر ٿيڻ کان پهريان ٻه ڀيرا اختيار ڪرڻ لاء `Add Account` ڀيرا ڪلڪ ڪرڻ جي ضرورت پوندي.

![](https://p.3ti.site/1721118306.avif)

اڳيون، گودام `i18n-demo.github.io` چونڊيو، پوءِ ڪلڪ ڪريو `Begin setup` ، ۽ ايندڙ مرحلن لاءِ ڊفالٽ ويلز استعمال ڪريو.

![](https://p.3ti.site/1721118490.avif)

پهريون ڀيرو پابند ٿيڻ کان پوء، توهان کي ڪجهه منٽ انتظار ڪرڻ جي ضرورت آهي ان کان پهريان توهان ان تائين رسائي ڪري سگهو ٿا.

لڳائڻ کان پوء، توهان پابند ڪري سگهو ٿا هڪ ڪسٽم ڊومين جو نالو.

![](https://p.3ti.site/1721119459.avif)

ڪسٽم ڊومين جو نالو بائنڊنگ ڪرڻ کان پوءِ، مھرباني ڪري ڊومين جي نالي ڏانھن وڃو ھڪڙي صفحي واري ايپليڪيشن جي رستي کي ٻيهر لکڻ لاءِ، جيئن ھيٺ ڏيکاريل آھي:

![](https://p.3ti.site/1721119320.avif)

مٿي ڏنل تصوير ۾ ضابطا هن ريت آهن مهرباني ڪري هيٺ ڏنل لڪير ۾ `i18n.site` تبديل ڪريو جيڪو توهان پابند ڪيو آهي.

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

ان کان علاوه، مھرباني ڪري ڪيش جي ضابطن کي ترتيب ڏيو، جيئن ھيٺ ڏيکاريل آھي، ۽ ڪيش جي مدت کي ھڪڙي مھيني تائين مقرر ڪريو.

![](https://p.3ti.site/1721125111.avif)

مھرباني ڪري مٿي ڏنل تصوير ۾ ٻئي مرحلي ۾ ملندڙ ڊومين جو نالو تبديل ڪريو جنھن ڊومين جي نالي تي توھان پابند آھيو.

### سرزمين چين ۾ ويب سائيٽ جي ترتيب کي بهتر ڪرڻ

جيڪڏھن توھان چاھيو ٿا بھترين پھچڻ جي ڪارڪردگيءَ کي سرزمين چين جي نيٽ ورڪ ماحول ۾، مھرباني ڪري [رجسٽر ڪريو ڊومين جو نالو](//beian.aliyun.com) پھرين.

پوء، استعمال ڪريو بادل وينڊرز جي آبجیکٹ اسٽوريج چين ۾ + هيٺ ڏنل مواد کي ترتيب ڏيو `CDN` `out/main/htm`

توهان ايج ڪمپيوٽنگ استعمال ڪري سگهو ٿا رستو ٻيهر لکڻ لاءِ سنگل-پيج ايپليڪيشنن کي ترتيب ڏيڻ لاءِ، مثال طور، [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) هن طرح ترتيب ڏئي سگهجي ٿو:

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
  // جوابي هيڊر سيٽ ڪري سگھجن ٿا ڊيبگ آئوٽ پٽ لاءِ، جيئن out.XXX = 'MSG'؛
})
```

![](https://p.3ti.site/1721121273.avif)

ڇاڪاڻ ته رڪارڊ `MX` ۽ رڪارڊ `CNAME` گڏ نٿا ٿي سگهن، جيڪڏهن توهان هڪ ئي وقت ۾ ڊومين نالو اي ميلون حاصل ڪرڻ چاهيو ٿا، توهان کي [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) سان تعاون ڪرڻ جي ضرورت آهي سطح `CNAME` کي رڪارڊ `A` ۾.

ان کان علاوه، ڇاڪاڻ ته مکيه زمين چين ۾ ڪلائوڊ وينڊرز جا اوورسيز ٽريفڪ چارجز نسبتاً مهانگو آهن، جيڪڏهن توهان قيمتن کي بهتر ڪرڻ چاهيو ٿا، ته توهان حاصل ڪرڻ لاءِ [DNS Cloud جي مفت جاگرافيائي قرارداد](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) ۽ [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) جو ڪسٽم ڊومين نالو استعمال ڪري سگهو ٿا (جيئن هيٺ ڏيکاريل آهي). ٽريفڪ جو رخ──چائنا ۾ ٽريفڪ جو رخ Baidu Cloud `CDN` , بين الاقوامي ٽرئفڪ وڃي ٿي cloudflare .

![](https://p.3ti.site/1721119788.avif)

اهي ترتيب ڏيڻ جي اصلاح جا حل وڌيڪ پيچيده آهن ۽ مستقبل ۾ الڳ بابن ۾ متعارف ڪرايا ويندا.

### عام ڊومين نالو ريڊائريشن

جيڪڏهن توهان `i18n.site` استعمال ڪريو ٿا ويب سائيٽ ٺاهڻ لاءِ پنهنجي مکيه ويب سائيٽ، توهان کي عام طور تي ترتيب ڏيڻ جي ضرورت پوندي پين-ڊومين ريڊائريڪشن، يعني ريڊائريڪٽ رسائي `*.xxx.com` (بشمول `www.xxx.com` ) تائين `xxx.com` تائين.

اها ضرورت علي بابا ڪلائوڊ `CDN` `EdgeScript` جي مدد سان حاصل ڪري سگهجي ٿي ( [انگريزي دستاويز](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [چيني دستاويز](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

[CDN Cloud](https://cdn.console.aliyun.com/domain/list) ۾ ڊومين جو نالو شامل ڪريو ۽ علي بابا ڪلائوڊ `CDN` ۾ ڊومين جو نالو `*.xxx.com` `CNAME` اشارو ڪريو.

![](https://p.3ti.site/1721122000.avif)

مثال طور، مٿي ڏنل تصوير ۾ `*.i18n.site` جي pan-domain name redirection configuration هن ريت آهي:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

### nginx سان ترتيب ڏيو

مھرباني ڪري `server` پيراگراف ۾ ھيٺ ڏنل ھڪڙي ترتيب شامل ڪريو nginx مھرباني ڪري پنھنجي منصوبي `out/main/htm` جي رستي ۾ `/root/i18n/md/out/main/htm` تبديل ڪريو

```
location / {
  root  /root/i18n/md/out/main/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

## `github action` مسلسل انضمام جي بنياد تي

توھان پنھنجي `github action` ترتيب ڏيڻ لاء ھيٺ ڏنل حوالو ڪري سگھو ٿا:

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

جيئن ته ترتيب ۾ ڏسي سگھجي ٿو، هي ڪم فلو شروع ٿئي ٿو جڏهن شاخ `main` ۽ شاخ `dist` ڏانهن ڌڪيو وڃي.

ڪم فلو ڊاڪيومينٽ کي شايع ڪرڻ لاءِ برانچ جي نالي سان ٺهڪندڙ فائل استعمال ڪندو، هتي `.i18n/htm/main.yml` ۽ `.i18n/htm/dist.yml` ترتيب وار پبلشنگ ڪنفيگريشن طور استعمال ڪيو ويندو.

اسان سفارش ڪريون ٿا هيٺين بهترين عملن لاءِ دستاويز ڇڏڻ جي عمل لاءِ:

جڏهن تبديلين کي شاخ `main` ڏانهن ڌڪيو وڃي ٿو، دستاويز کي ٺهرايو ويندو آهي ۽ پريويو اسٽيشن تي لڳايو ويندو آهي (پريويو اسٽيشن موجود آهي [github page](//pages.github.com) ).

تصديق ڪرڻ کان پوءِ ته دستاويز پريويو سائيٽ تي صحيح آهي، ڪوڊ کي ضم ڪيو ويندو ۽ شاخ `dist` ڏانهن ڌڪيو ويندو، ۽ سرڪاري تعمير ۽ ترتيب آن لائن ٿي ويندي.

يقينن، مٿين عمل کي لاڳو ڪرڻ لاء وڌيڪ ترتيب لکڻ جي ضرورت آهي.

توهان ڪم فلو اسڪرپٽنگ لاءِ اصل پروجيڪٽ ڏانهن رجوع ڪري سگهو ٿا [github.com/fcdoc/doc](//github.com/fcdoc/doc/blob/main/.github/workflows/i18n.site.yml)

ترتيب ۾ `secrets.I18N_SITE_TOKEN` ۽ `secrets.NPM_TOKEN` توهان کي ڪوڊ بيس ۾ ڳجهي متغيرن کي ترتيب ڏيڻ جي ضرورت آهي.

![](//p.3ti.site/1730970199.avif)

`I18N_SITE_TOKEN` حاصل ڪريو [i18n.site/token](//i18n.site/token)

`NPM_TOKEN` آهي پبلشنگ ٽوڪن جو پيڪيج `npm` جو [npmjs.com](//npmjs.com) ڪريو ۽ پبلشنگ جي اجازتن سان ٺاهيو (جيئن هيٺ ڏيکاريل آهي).

![](//p.3ti.site/1730969906.avif)


## ڊاريڪٽري جي جوڙجڪ

### `public`

ويب سائيٽ جون جامد فائلون، جهڙوڪ `favicon.ico` ، `robots.txt` ، وغيره.

هتي جي آئڪن فائلن سان ٺاهي سگھجن ٿيون [realfavicongenerator.net](https://realfavicongenerator.net)

### `.i18n`

`.i18n` ڊاريڪٽري جي ھيٺان `i18n.site` جون ڪنفيگريشن فائلون، ترجمي ڪيش وغيره آھن. تفصيل لاءِ ايندڙ باب ["Configuration"](/i18n.site/conf) ڏسو.

### `en`

ماخذ ٻولي ڊاريڪٽري، `.i18n/conf.yml` ترتيب واري فائل ۾ `en` مان `fromTo` سان لاڳاپيل

```yaml
i18n:
  fromTo:
    en: zh
```

مهرباني ڪري ترجمي جي ترتيب ڏانهن رجوع ڪريو [i18](/i18/use)