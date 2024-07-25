# نصب کړئ &

## د ترتیب نښه نښه

د `i18` ژباړې وسیله سرایت شوې `i18n.site` مهرباني وکړئ [دلته کلیک وکړئ ترڅو `i18` سند ته د لاسرسي نښه تنظیم کړئ](/i18/use) .

## نصب کړئ

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## د ډیمو پروژه

راځئ چې د ډیمو پروژې سره پیل وکړو او د کارولو څرنګوالی زده کړو `i18n.site`

موږ لومړی د ډیمو ذخیره کلون کوو او په لاندې ډول کمانډ چلوو:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

په چین کې کاروونکي کولی شي:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

د کوډ بیس کلون د ډایرکټر نوم باید `md` وي ترڅو `demo.i18n.site` `docker` سره د محلي لید اسانتیا ولري.

### ژباړه

لومړی، `md` داخل کړئ او `i18n.site` چل کړئ، کوم چې به `en` `zh` وژباړي.

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

د چلولو وروسته، ژباړه او کیچ فایلونه به په یاد ولرئ `git add . ` `md` ډایرکټر کې یې اضافه کړئ.

### ځايي مخکتنه

نصب او پیل `docker` ( `MAC` د `docker` د وخت په توګه [orbstack](https://orbstack.dev) کارولو وړاندیز کوي).

بیا، `docker` داخل کړئ او `./up.sh` چل کړئ، او بیا په محلي توګه د لیدو لپاره لاړ شئ [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### مینځپانګه پوسټ کړئ

د [یو واحد پاڼې غوښتنلیک](https://developer.mozilla.org/docs/Glossary/SPA) جوړښت غوره کوي `i18n.site` او د ویب پاڼې د ننوتلو پاڼه او د ویب پاڼې منځپانګې په خپلواک ډول ځای پرځای شوي.

د پورتنۍ ژباړې له چلولو وروسته به په `md/out/dev` کې `htm` او `v` ډایرکټرونه جوړ شي.

دلته `dev` دا په ګوته کوي چې دا `.i18n/htm/dev.yml` فایل پر بنسټ جوړ شوی.

: منځپانګې لاندې `dev`

`htm` لارښود لاندې د ویب پاڼې د ننوتلو پاڼه ده.

`v` د ویب پاڼې مینځپانګه د نسخې شمیره لري.

ځایی لید به ټولې فایلونه `out/dev/v/0.1.0` ته کاپي کړي پرته لدې چې د نسخې شمیره وي.

د رسمي خوشې کولو لپاره، بدل شوي فایلونه به د نوي نسخه شمیره ډایرکټر ته کاپي شي.

#### د ترتیب کولو فایل مشخص کولو لپاره -c وکاروئ

د ترتیب کولو مختلف فایلونه به `out` لارښود لاندې ورته لارښودونه رامینځته کړي.

د مثال په توګه `.i18n/htm/ol.yml` به یو `out/ol` لارښود جوړ کړي.

`dev.yml` `ol.yml` ډیفالټ تشکیلات دي.

د `development` لنډیز `dev` ، کوم چې د پراختیا چاپیریال استازیتوب کوي، د ځایی لید لپاره کارول کیږي، او د ډیفالټ ترتیب فایل هم دی.
د `online` لنډیز `ol` ، کوم چې د آنلاین چاپیریال استازیتوب کوي، د رسمي خوشې کولو لپاره کارول کیږي، او د ډیفالټ ترتیب فایل هم دی کله چې خپور شي `npm` د کمانډ لاین پیرامیټر `-n` په کارولو سره.

تاسو کولی شئ د کنفیګریشن فایل نوم مشخص کولو لپاره د کمانډ لاین څخه کار `--htm_conf` :

د مثال په ډول:
```
i18n.site --htm_conf yourConfig --save
```

`--save` د تازه خوشې کولو نسخه شمیره په ګوته کوي.

#### <a rel=id href="#npm" id="npm"></a> په npmjs.com کې مینځپانګه خپره کړئ

د [npmjs.com](//npmjs.com) خپرول د وړاندیز شوي ډیفالټ حل دی ( [د فرنټ پای لوړ شتون](/i18n.site/feature#ha) وګورئ).

##### خوشې npm login &

نصب کړئ `nodejs` د ننوتلو لپاره `npm login` وکاروئ.

ایډیټ کړئ `md/.i18n/htm/ol.yml` `i18n.site` په `v: //unpkg.com/i18n.site` خپل ځان بدل کړئ `npm` د بسته نوم.

یوازې د بسته بندۍ نوم وکاروئ [npmjs.com](//npmjs.com) ویب پاڼې ډومین نوم د بسته بندۍ نوم یو ښه انتخاب دی.

کله چې `npm` پیکج پر بنسټ خپریږي، **ډاډ ترلاسه کړئ `//unpkg.com/`** د `v:` ارزښت د مخکینۍ په توګه د کیش وخت `i18n.site` د دې مخکینۍ لارې لاندې `/.v` د نوي ریلیزونو په وخت کې د لیدلو وړ کولو لپاره ځانګړي شوي.

د ژباړې او خپرولو لپاره په `md` کې `i18n.site --npm` یا `i18n.site -n` چل کړئ.

که تاسو د خپرولو لپاره دوامداره ادغام چاپیریال وکاروئ ، `nodejs` د دې نصبولو ته اړتیا نشته یوازې د ننوتلو او خپریدو اجازه `~/.npmrc` چاپیریال ته کاپي کړئ.

که تاسو د بستې نوم په `v:` کې بدل کړئ `ol.yml` مهرباني وکړئ **ډاډ ترلاسه کړئ چې لومړی `.i18n/v/ol` حذف کړئ** او بیا یې خپور کړئ.

##### پراکسي سرور د npm لخوا خپور شوی

که چیرې په چین کې کاروونکي د شبکې ستونزې سره مخ شي او `npm` بسته بندۍ خپرولو توان نلري، دوی کولی شي د پراکسي سرور ترتیبولو لپاره د چاپیریال `https_proxy` ترتیب کړي.

فرض کړئ چې ستاسو د پراکسي سرور بندر دی `7890` تاسو کولی شئ ولیکئ:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### د ځان کوربه مواد

که تاسو غواړئ مینځپانګه پخپله کوربه کړئ، لومړی، سم `md/.i18n/htm/ol.yml` او `v: //unpkg.com/i18n.site` خپل د URL مخکینۍ ته بدل کړئ، لکه `v: //i18n-v.xxx.com` .

`md` دننه کړئ او چل کړئ

```
i18n.site --htm_conf ol --save
```

یا لنډیز

```
i18n.site -c ol -s
```

بیا، په `md/out/ol/v` کې مینځپانګه په `v:` کې ټاکل شوي د URL مخکینۍ لارې ته تنظیم کړئ.

په نهایت کې، **د لارې د کیچ وخت ترتیب کړئ `/.v` په `1s` کې پای ته رسیږي** ، که نه نو نوي خپاره شوي مینځپانګې سمدلاسه لاسرسی نشي کولی.

د نورو لارو لپاره د کیچ وخت د غیر ضروري غوښتنو کمولو لپاره یو کال یا ډیرو ته ټاکل کیدی شي.

##### s3 ته مینځپانګه کوربه کړئ

د خپل ځان کوربه کولو لپاره، + خپل سرور کارولو سربیره، `CDN` بل عام انتخاب دی `S3`

تاسو کولی شئ [rclone](https://rclone.org) `S3` سرور وکاروئ، بیا لاندې سکریپټ ته مراجعه وکړئ، او یوازې هرکله چې تاسو خپروئ په `S3` کې زیاتیدونکي بدلونونه کاپي کړئ.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

په یاد ولرئ چې ترتیب کول `CDN` ترڅو د لارې د کیچ وخت په `/.v` `1s` کې پای ته ورسیږي، که نه نو تاسو به سمدلاسه نوي خپاره شوي مینځپانګې ته لاسرسی ونلرئ.

### ویب پاڼه خپروي

ویب پاڼه په هر ځای کې ځای پرځای کیدی شي [github page](https://pages.github.com) او [cloudflare page](https://pages.cloudflare.com) ښه انتخابونه دي.

ځکه چې ویب پاڼه د [یو واحد پاڼې غوښتنلیک](https://developer.mozilla.org/docs/Glossary/SPA) جوړښت غوره کوي، په یاد ولرئ چې د URL لاره چې په `. ` کې نه وي لیکل شوي `index.html`

د ویب پاڼې د ننوتلو پاڼه یوازې یو ځل ځای پرځای کولو ته اړتیا لري، او د راتلونکو منځپانګو تازه معلوماتو لپاره د ویب پاڼې د ننوتلو پاڼې بیا ځای پرځای کولو ته اړتیا نشته.

#### په ګیتوب پا pageه کې ځای په ځای کړئ

[د سازمان د جوړولو لپاره لومړی github کلیک وکړئ](https://github.com/account/organizations/new?plan=free) د مثال په توګه `i18n-demo`

بیا د دې `i18n-demo.github.io` لاندې ګودام جوړ کړئ (مهرباني وکړئ د هغه سازمان نوم سره `i18n-demo` کړئ چې تاسو یې جوړ کړی):

<img alt="" src="https://p.3ti.site/1721098657.avif">

کله چې په تیرو مقالو کې مینځپانګه خپره شوه `out/ol/htm` دا رامینځته شوی مهرباني وکړئ دا لارښود دننه کړئ او چل کړئ :

```
ln -s index.html 404.html
```


ځکه `github page` د URL لارې بیا لیکلو ملاتړ نه کوي، نو `404.html` پرځای کارول کیږي.

بیا په `htm` کې لاندې کمانډ چل کړئ (په یاد ولرئ `i18n-demo/i18n-demo.github.io.git` د خپل ګودام پتې سره بدل کړئ) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

د کوډ فشارولو وروسته، د پلي کولو لپاره انتظار وکړئ `github page` په بریالیتوب سره پرمخ ځي (لکه څنګه چې لاندې ښودل شوي)، او بیا تاسو کولی شئ هغې ته لاسرسی ومومئ.

<img src="//p.3ti.site/1721116586.avif" width="350px">

د ډیمو پاڼې لپاره مهرباني وکړئ وګورئ:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### په کلاوډ فلیر پاڼه کې ځای په ځای کړئ

سره پرتله [cloudflare page](//pages.cloudflare.com) `github page` دا د بیا لیکلو لاره برابروي او د چین اصلي ځای ته د لاسرسي وړ دی.

ګمارنه معمولا د پورته `github page` ګمارنې پراساس ده `cloudflare page`

یوه پروژه جوړه کړئ او پورتني ګودام وتړئ `i18n-demo.github.io`

پروسه په لاندې شکل کې ښودل شوې:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

مهرباني وکړئ `i18n-demo` ته د لاسرسي لپاره کلیک وکړئ `Add Account`

که تاسو د بل سازمان ګودام تړلی وي، نو تاسو اړتیا لرئ چې د نوي سازمان د ښودلو دمخه دوه ځله د دې اجازه ورکولو لپاره دوه ځله کلیک `Add Account` .

<img alt="" src="https://p.3ti.site/1721118306.avif">

`i18n-demo.github.io` ګودام غوره کړئ، بیا `Begin setup` کلیک وکړئ، او د راتلونکو ګامونو لپاره اصلي ارزښتونه وکاروئ.

<img alt="" src="https://p.3ti.site/1721118490.avif">

د لومړي ځل لپاره د پابندۍ وروسته، تاسو اړتیا لرئ څو دقیقې انتظار وکړئ مخکې له دې چې تاسو دې ته لاسرسی ومومئ.

د ګمارلو وروسته، تاسو کولی شئ د دودیز ډومین نوم وتړئ.

<img alt="" src="https://p.3ti.site/1721119459.avif">

د دودیز ډومین نوم له پابندولو وروسته، مهرباني وکړئ د ډومین نوم ته لاړ شئ ترڅو د واحد پاڼې غوښتنلیک د بیا لیکلو لاره تنظیم کړئ، لکه څنګه چې لاندې ښودل شوي:

<img alt="" src="https://p.3ti.site/1721119320.avif">

په پورته عکس کې قواعد په لاندې ډول دي مهرباني وکړئ په لاندې کرښه کې د ډومین نوم سره بدل `i18n.site` .

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

سربیره پردې ، مهرباني وکړئ د کیچ قواعد تنظیم کړئ ، لکه څنګه چې لاندې ښودل شوي ، او د کیچ موده یوې میاشتې ته وټاکئ.

<img alt="" src="https://p.3ti.site/1721125111.avif">

مهرباني وکړئ د پورتنۍ عکس په دوهم ګام کې د ډومین نوم سمون په هغه ډومین نوم کې بدل کړئ چې تاسو یې تړلی یاست.

#### په چین کې د ویب پاڼې پلي کول اصلاح کول

که تاسو غواړئ د چین د اصلي ټاټوبي شبکې چاپیریال کې د لاسرسي غوره فعالیت ترلاسه کړئ ، مهرباني وکړئ لومړی [د ډومین نوم راجستر کړئ](//beian.aliyun.com) .

بیا `CDN` په اصلي `out/ol/htm` چین کې د بادل پلورونکو ذخیرې وکاروئ +

تاسو کولی شئ د یوې پاڼې غوښتنلیکونو سره د موافقت لپاره لاره بیا لیکلو لپاره د څنډه کمپیوټر وکاروئ ، لکه [د Baidu سمارټ `CDN`](//cloud.baidu.com/product/cdn.html) دا په لاندې ډول تنظیم کیدی شي:

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

ځکه `MX` ریکارډونه او `CNAME` ریکارډونه یوځای نشي کولی، که تاسو غواړئ په ورته وخت کې د ډومین نوم بریښنالیکونه ترلاسه کړئ، تاسو اړتیا لرئ چې [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) سکریپټ سره همکاري وکړئ ترڅو `CNAME` `A` ریکارډ.

سربیره پردې ، ځکه چې په چین کې د بادل پلورونکو بهرني ترافیک لګښتونه نسبتا ګران دي ، که تاسو غواړئ لګښتونه غوره کړئ ، تاسو کولی شئ د ترلاسه کولو لپاره [د Huawei DNS وړیا جغرافیایی ریزولوشن](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) او [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) د ګمرک ډومین نوم وکاروئ (لکه څنګه چې لاندې ښودل شوي). د ټرافیک انحراف──په اصلي ټاټوبي چین Baidu بادل کې ترافیک `CDN` نړیوال ترافیک cloudflare ته ځي.

<img alt="" src="https://p.3ti.site/1721119788.avif">

د ګمارنې د اصلاح کولو حلونه خورا پیچلي دي او په راتلونکي کې به په جلا فصلونو کې معرفي شي.

#### د عمومي ډومین نوم ریډائریکشن

که تاسو د خپلې اصلي ویب پاڼې په توګه د ویب پاڼې د جوړولو لپاره `i18n.site` ، تاسو معمولا اړتیا لرئ چې د پین ډومین ریډائریکشن ترتیب کړئ، دا دی، ریډیریټ `*.xxx.com` ( `www.xxx.com` په شمول) ته لاسرسی `xxx.com` .

دا اړتیا د علی بابا `CDN` په مرسته ترلاسه کیدی شي `EdgeScript` ( [انګلیسي سند](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [چینایي سند](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

په [علی بابا CDN](https://cdn.console.aliyun.com/domain/list) کې د ډومین نوم اضافه کړئ او `*.xxx.com` ډومین نوم علی بابا کلاوډ `CDN` 's `CNAME` ته په نښه کړئ.

<img alt="" src="https://p.3ti.site/1721122000.avif">

د مثال په توګه، په پورتني انځور کې د پین ډومین نوم د بیرته راستنیدو ترتیب په لاندې ډول `*.i18n.site` :

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### د nginx سره ځای په ځای کړئ

مهرباني وکړئ `server` کې ورته ترتیب اضافه کړئ nginx چیرته چې `/root/i18n/md/out/ol/htm` مهرباني وکړئ دا د خپلې پروژې په لاره کې بدل کړئ `out/ol/htm` :

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### د لارښود جوړښت

#### عامه

د ویب پاڼې جامد فایلونه، لکه `favicon.ico` `robots.txt` ، او نور.

دلته د آئیکون فایلونه د دې سره رامینځته کیدی شي [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n

د لارښود لاندې `i18n.site` ترتیب فایلونه، د ژباړې زیرمه، او نور دي `.i18n` د جزیاتو لپاره راتلونکی [څپرکی](/i18n.site/conf) وګورئ.

#### en

د سرچینې ژبې لارښود، د ترتیب کولو فایل کې `fromTo` `en` `.i18n/conf.yml` مطابقت لري

```yaml
i18n:
  fromTo:
    en: zh
```

مهرباني وکړئ د ژباړې ترتیب ته مراجعه وکړئ [i18](/i18/use)

