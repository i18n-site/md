# ګمارل او آنلاین

`i18n.site` د یو [واحد پاڼې غوښتنلیک](https://developer.mozilla.org/docs/Glossary/SPA) جوړښت غوره کوي، او د ویب پاڼې د ننوتلو پاڼه او د ویب پاڼې منځپانګې په خپلواکه توګه ځای پرځای شوي.

د پورتنۍ ژباړې د چلولو وروسته، لارښودونه `htm` او `v` به د `md/out/dev` لارښود لاندې رامینځته شي.

دلته، `dev` پدې مانا ده چې دا د `.i18n/htm/dev.yml` ترتیب کولو فایل پراساس جوړ شوی.

`dev` لارښود :

د `htm` لارښود د ویب پاڼې د ننوتلو پاڼه ده.

`v` لارښود د نسخې شمیرې سره د ویب پاڼې مینځپانګه لري.

ځایی لید د نسخې شمیرې ته پام نه کوي او ټولې فایلونه به `out/dev/v/0.1.0` ډایرکټر ته کاپي کړي.

د رسمي خوشې کولو لپاره، بدل شوي فایلونه به د نوي نسخه شمیره ډایرکټر ته کاپي شي.

## د ترتیب کولو فایل `-c` سره مشخص کړئ

د ترتیب کولو مختلف فایلونه به په `out` لارښود کې ورته لارښودونه رامینځته کړي.

د مثال په توګه، `.i18n/htm/main.yml` به `out/main` لارښود جوړ کړي.

`dev.yml` او `main.yml` ډیفالټ تشکیلات دي.

`dev` د `development` لنډیز دی، د پرمختیا چاپیریال په ګوته کوي، د محلي لید لپاره کارول کیږي، او د ډیفالټ ترتیب کولو فایل هم دی.
`ol` د `online` لنډیز دی، د آنلاین چاپیریال په ګوته کوي، کوم چې د رسمي خوشې کولو لپاره کارول کیږي دا د ډیفالټ ترتیب کولو فایل هم دی کله چې د خوشې کولو لپاره د کمانډ لاین پیرامیټونه `-n` څخه `npm` کاروي.

تاسو کولی شئ د ترتیب کولو نور فایلونه هم رامینځته کړئ چې د کارولو لپاره د ترتیب فایل نوم مشخص کولو لپاره په کمانډ لاین کې `--htm_conf` وکاروئ:

د مثال په ډول:
```
i18n.site --htm_conf dist --save
```

دلته `--save` د تازه خوشې کولو نسخه شمیره استازیتوب کوي.

## <a rel=id href="#npm" id="npm"></a> په npmjs.com کې مینځپانګه خپره کړئ

د منځپانګې خپرول د وړاندیز شوي ډیفالټ حل [npmjs.com](//npmjs.com) ( [د فرنټ پای لوړ شتون](/i18n.site/feature#ha) وګورئ).

### npm & پوسټ

`nodejs` نصب کړئ، `npm login` سره ننوتل.

`md/.i18n/htm/main.yml` ایډیټ کړئ او د خپل `npm` بستې نوم په [npmjs.com](//npmjs.com) د [`md:`](//github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/main.yml#L7) `YOUR_NPM_PACKAGE` بدل کړئ.

بیا `md/.i18n/htm/main.package.json` تعدیل کړئ

د ژباړې او خپرولو لپاره په `md` ډایرکټر کې `i18n.site --npm` یا `i18n.site -n` چل کړئ.

که تاسو د خپرولو لپاره دوامداره ادغام چاپیریال وکاروئ، نو `nodejs` نصبولو ته اړتیا نشته. یوازې د ننوتلو او خپرولو اجازه `~/.npmrc` چاپیریال ته کاپي کړئ.

که تاسو په `main.yml` کې د `v:` کڅوړې نوم بدل کړئ، مهرباني وکړئ **ډاډ ترلاسه کړئ چې لومړی `.i18n/v/main` حذف کړئ** او بیا یې خپور کړئ.

#### پراکسي سرور د npm لخوا خپور شوی

که چیرې په چین کې کاروونکي د شبکې ستونزې سره مخ شي او `npm` کڅوړو خپرولو توان نلري، دوی کولی شي د پراکسي سرور تنظیم کولو لپاره د چاپیریال متغیر `https_proxy` تنظیم کړي.

فرض کړئ چې ستاسو د پراکسي سرور پورټ `7890` دی، تاسو کولی شئ ولیکئ:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

## د ځان کوربه مواد

که تاسو غواړئ مینځپانګه پخپله کوربه توب وکړئ ، لومړی `md/.i18n/htm/main.yml` ترمیم کړئ او `v: //unpkg.com/i18n.site` خپل د URL مخکینۍ ته بدل کړئ ، لکه `v: //i18n-v.xxx.com` .

`md` لارښود دننه کړئ او چل کړئ

```
i18n.site --htm_conf ol --save
```

یا لنډیز

```
i18n.site -c ol -s
```

بیا، په `md/out/main/v` ډایرکټر کې مینځپانګه په `v:` کې ټاکل شوي د URL مخکینۍ لارې ته تنظیم کړئ.

په نهایت کې ، **د `/.v` څخه تر `1s` پورې پای ته رسیدو د لارې کیچ وخت تنظیم کړئ** ، که نه نو نوي خپاره شوي مینځپانګې سمدلاسه لاسرسی نشي کولی.

د نورو لارو لپاره د کیچ وخت د غیر ضروري غوښتنو کمولو لپاره یو کال یا ډیرو ته ټاکل کیدی شي.

## s3 ته مینځپانګه کوربه کړئ

د ځان کوربه مینځپانګې لپاره ، د خپل سرور کارولو سربیره + بل عام اختیار د `S3` `CDN` کارول دي.

تاسو کولی شئ د `S3` سرور ته د ننوتلو لپاره [rclone](https://rclone.org) ، بیا لاندې سکریپټ ته مراجعه وکړئ او تعدیل کړئ، او یوازې د هر ریلیز لپاره `S3` ته زیاتیدونکي بدلونونه کاپي کړئ.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/main/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/main/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/main/v/.v "$s3:/$bucket/"
```

په یاد ولرئ چې `CDN` ترتیب کړئ ترڅو په `/.v` کې پای ته رسیدو د لارې کیچ وخت `1s` وي، که نه نو نوي خپاره شوي مینځپانګې سمدستي لاسرسی نشي کولی.

## ویب پاڼه خپروي

ویب پاڼه په هر ځای کې ځای پرځای کیدی شي [github page](https://pages.github.com) او [cloudflare page](https://pages.cloudflare.com) ښه انتخابونه دي.

ځکه چې ویب پاڼه د یو [واحد پاڼې غوښتنلیک](https://developer.mozilla.org/docs/Glossary/SPA) جوړښت کاروي، په یاد ولرئ چې د URL لارې بیا ولیکئ چې `. ` څخه تر `index.html` پورې نلري.

د ویب پاڼې د ننوتلو پاڼه یوازې یو ځل ځای پرځای کولو ته اړتیا لري، او د راتلونکو منځپانګو تازه معلوماتو لپاره د ویب پاڼې د ننوتلو پاڼې بیا ځای پرځای کولو ته اړتیا نشته.

### په ګیتوب پا pageه کې ځای په ځای کړئ

[د سازمان جوړولو لپاره لومړی github کلیک وکړئ](https://github.com/account/organizations/new?plan=free) د مثال په توګه د لاندې سازمان نوم `i18n-demo` دی.

بیا د دې سازمان لاندې ګودام `i18n-demo.github.io` جوړ کړئ (مهرباني وکړئ `i18n-demo` د هغه سازمان نوم سره بدل کړئ چې تاسو یې رامینځته کړی):

![](https://p.3ti.site/1721098657.avif)

کله چې په تیرو مقالو کې مینځپانګه خپره شوه ، `out/main/htm` رامینځته شوی مهرباني وکړئ دا لارښود دننه کړئ او چل کړئ :

```
ln -s index.html 404.html
```


ځکه چې `github page` د URL لارې بیا لیکلو ملاتړ نه کوي، `404.html` پرځای کارول کیږي.

بیا په `htm` ډایرکټر کې لاندې کمانډ چل کړئ (په یاد ولرئ چې `i18n-demo/i18n-demo.github.io.git` د خپل ګودام پتې سره ځای په ځای کړئ) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

د کوډ فشارولو وروسته، مخکې له دې چې تاسو ورته لاسرسی ومومئ د `github page` پلي کولو لپاره په بریالیتوب سره (لکه څنګه چې لاندې ښودل شوي) انتظار وکړئ.

<img src="//p.3ti.site/1721116586.avif" width="350px">

د ډیمو پاڼې لپاره مهرباني وکړئ وګورئ:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

### په کلاوډ فلیر پاڼه کې ځای په ځای کړئ

`github page` په پرتله [cloudflare page](//pages.cloudflare.com) دا د بیا لیکلو لاره برابروي او د چین اصلي ټاټوبي ته ډیر د لاسرسي وړ دی.

د `cloudflare page` ګمارل معمولا د پورته `github page` د ګمارلو پر بنسټ والړ وي.

یوه پروژه جوړه کړئ او پورته `i18n-demo.github.io` ګودام وتړئ.

پروسه په لاندې شکل کې ښودل شوې:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

مهرباني وکړئ `Add Account` تنظیم `i18n-demo` ته د لاسرسي لپاره کلیک وکړئ.

که تاسو د بل سازمان ګودام تړلی وي، نو تاسو اړتیا لرئ چې د نوي سازمان د ښودلو دمخه دوه ځله اجازه ورکولو لپاره دوه ځله `Add Account` کلیک وکړئ.

![](https://p.3ti.site/1721118306.avif)

بیا، ګودام `i18n-demo.github.io` وټاکئ، بیا په `Begin setup` کلیک وکړئ، او د راتلونکو ګامونو لپاره ډیفالټ ارزښتونه وکاروئ.

![](https://p.3ti.site/1721118490.avif)

د لومړي ځل لپاره د پابندۍ وروسته، تاسو اړتیا لرئ څو دقیقې انتظار وکړئ مخکې له دې چې تاسو دې ته لاسرسی ومومئ.

د ګمارلو وروسته، تاسو کولی شئ د دودیز ډومین نوم وتړئ.

![](https://p.3ti.site/1721119459.avif)

د دودیز ډومین نوم له پابندولو وروسته، مهرباني وکړئ د ډومین نوم ته لاړ شئ ترڅو د واحد پاڼې غوښتنلیک د بیا لیکلو لاره تنظیم کړئ، لکه څنګه چې لاندې ښودل شوي:

![](https://p.3ti.site/1721119320.avif)

په پورتني انځور کې قواعد په لاندې ډول دي مهرباني وکړئ په لاندې کرښه کې `i18n.site` د هغه ډومین نوم سره بدل کړئ چې تاسو یې تړلی یاست.

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

سربیره پردې ، مهرباني وکړئ د کیچ قواعد تنظیم کړئ ، لکه څنګه چې لاندې ښودل شوي ، او د کیچ موده یوې میاشتې ته وټاکئ.

![](https://p.3ti.site/1721125111.avif)

مهرباني وکړئ د پورتنۍ عکس په دوهم ګام کې د ډومین نوم سمون په هغه ډومین نوم کې بدل کړئ چې تاسو یې تړلی یاست.

### په چین کې د ویب پاڼې پلي کول اصلاح کول

که تاسو غواړئ د چین د اصلي ټاټوبي شبکې چاپیریال کې د لاسرسي غوره فعالیت ترلاسه کړئ ، مهرباني وکړئ لومړی [د ډومین نوم راجستر کړئ](//beian.aliyun.com) .

بیا، په + کې د بادل پلورونکو څیز ذخیره وکاروئ `CDN` لاندې مینځپانګې ځای په ځای کړئ `out/main/htm` .

تاسو کولی شئ د یوې پاڼې غوښتنلیکونو سره د موافقت لپاره لاره د بیا لیکلو لپاره وکاروئ ، د مثال په توګه ، [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) پدې ډول تنظیم کیدی شي:

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
  // د ځواب سرلیکونه د محصول ډیبګ کولو لپاره ټاکل کیدی شي، لکه out.XXX = 'MSG'؛
})
```

![](https://p.3ti.site/1721121273.avif)

ځکه چې ریکارډ `MX` او ریکارډ `CNAME` یوځای نشي کولی، که تاسو غواړئ په ورته وخت کې د ډومین نوم بریښنالیکونه ترلاسه کړئ، نو تاسو اړتیا لرئ چې د [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) سره همکاري وکړئ ترڅو ریکارډ `A` ته `CNAME` کچه.

سربیره پردې ، ځکه چې په چین کې د بادل پلورونکو بهرني ترافیک لګښتونه نسبتا ګران دي ، که تاسو غواړئ لګښتونه غوره کړئ ، تاسو کولی شئ د ترلاسه کولو لپاره [د Huawei DNS وړیا جغرافیایی ریزولوشن](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) او [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) د ګمرک ډومین نوم وکاروئ (لکه څنګه چې لاندې ښودل شوي). د ټرافیک انحراف──په چین کې د ټرافیک لاره په عمده توګه Baidu Cloud `CDN` ، نړیوال ټرافیک cloudflare ته ځي.

![](https://p.3ti.site/1721119788.avif)

د ګمارنې د اصلاح کولو حلونه خورا پیچلي دي او په راتلونکي کې به په جلا فصلونو کې معرفي شي.

### د عمومي ډومین نوم ریډائریکشن

که تاسو د خپلې اصلي ویب پاڼې په توګه د ویب پاڼې د جوړولو لپاره `i18n.site` کاروئ، تاسو معمولا اړتیا لرئ چې د پین ډومین ریډائریکیشن ترتیب کړئ، دا دی، `*.xxx.com` (په شمول `www.xxx.com` ) ته `xxx.com` ته لاسرسی.

دا اړتیا د علی بابا کلاوډ `CDN` `EdgeScript` ( [انګلیسي سند](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [چینایي سند](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ) په مرسته ترلاسه کیدی شي

په [علی بابا CDN](https://cdn.console.aliyun.com/domain/list) کې د ډومین نوم اضافه کړئ او په علی بابا کلاوډ `CDN` کې د ډومین نوم `*.xxx.com` `CNAME` په نښه کړئ.

![](https://p.3ti.site/1721122000.avif)

د مثال په توګه، په پورتني انځور کې د `*.i18n.site` د پین ډومین نوم د بیرته راستنیدو ترتیب په لاندې ډول دی:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

### د nginx سره ځای په ځای کړئ

مهرباني وکړئ د `server` پراګراف لاندې ته ورته ترتیب اضافه کړئ nginx مهرباني وکړئ د خپلې پروژې `out/main/htm` لارې ته `/root/i18n/md/out/main/htm` بدل کړئ:

```
location / {
  root  /root/i18n/md/out/main/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

## `github action` دوامداره ادغام پر بنسټ

تاسو کولی شئ د خپل `github action` تنظیم کولو لپاره لاندې ته مراجعه وکړئ:

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

لکه څنګه چې په ترتیب کې لیدل کیدی شي، دا کاري جریان هغه وخت پیل کیږي کله چې څانګې `main` او څانګې `dist` ته فشار ورکړئ.

د کار فلو به د سند د خپرولو لپاره د څانګې نوم سره مطابقت لرونکی ترتیب فایل وکاروي، `.i18n/htm/main.yml` او `.i18n/htm/dist.yml` به په ترتیب سره د خپرولو ترتیب په توګه وکارول شي.

موږ د سند خوشې کولو پروسې لپاره لاندې غوره تمرینونه وړاندیز کوو:

کله چې بدلونونه څانګې `main` ته واړول شي، سند د جوړیدو او د مخکتنې سټیشن ته د ځای په ځای کولو لپاره هڅول کیږي (د مخکتنې سټیشن شتون لري [github page](//pages.github.com) ).

وروسته له دې چې تایید شي چې سند د مخکتنې سایټ کې سم دی، کوډ به ضمیمه شي او څانګې `dist` ته واستول شي، او رسمي جوړونه او ځای پرځای کول به آنلاین شي.

البته، د پورتنۍ پروسې پلي کول د نورو ترتیبونو لیکلو ته اړتیا لري.

تاسو کولی شئ د کاري فلو سکریپټینګ لپاره اصلي پروژې ته مراجعه وکړئ [github.com/fcdoc/doc](//github.com/fcdoc/doc/blob/main/.github/workflows/i18n.site.yml)

په ترتیب کې `secrets.I18N_SITE_TOKEN` او `secrets.NPM_TOKEN` تاسو ته اړتیا لرئ چې د کوډ بیس کې پټ متغیرات تنظیم کړئ.

![](//p.3ti.site/1730970199.avif)

`I18N_SITE_TOKEN` [i18n.site/token](//i18n.site/token)

`NPM_TOKEN` په ترتیب کې `npm` د خپرولو نښه ده [npmjs.com](//npmjs.com) د خپرولو اجازې سره نښه جوړه کړئ (لکه څنګه چې لاندې ښودل شوي).

![](//p.3ti.site/1730969906.avif)


## د لارښود جوړښت

### `public`

د ویب پاڼې جامد فایلونه، لکه `favicon.ico` ، `robots.txt` ، او نور.

دلته د آئیکون فایلونه د دې سره رامینځته کیدی شي [realfavicongenerator.net](https://realfavicongenerator.net)

### `.i18n`

د `.i18n` ډایرکټر لاندې د `i18n.site` د ترتیب کولو فایلونه، د ژباړې زیرمه، او نور شتون لري. د توضیحاتو لپاره راتلونکی فصل ["تنظیم"](/i18n.site/conf) وګورئ.

### `en`

د سرچینې ژبې لارښود، `.i18n/conf.yml` ترتیب کولو فایل کې د `en` څخه `fromTo` سره مطابقت لري

```yaml
i18n:
  fromTo:
    en: zh
```

مهرباني وکړئ د ژباړې ترتیب ته مراجعه وکړئ [i18](/i18/use)