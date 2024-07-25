# دامەزراندنی &

## نیشانەی ڕێکخستن

ئامرازی `i18` وەرگێڕان جێگیرکراوە، تکایە کلیک لێرە بکە بۆ `i18n.site` [بە بەڵگەنامەی `i18` بۆ ڕێکخستنی نیشانەی دەستڕاگەیشتن](/i18/use) .

## دامەزراندن

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## پڕۆژەی دیمۆ

با لە پرۆژەیەکی دیمۆوە دەست پێ بکەین و فێربین چۆن بەکاری بهێنین `i18n.site`

سەرەتا کۆگای دیمۆکە کلۆن دەکەین و فەرمانەکە بەم شێوەیە جێبەجێ دەکەین:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

بەکارهێنەرانی چین دەتوانن:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

ناوی بەڕێوەبەرایەتی کلۆنی بنەڕەتی کۆد دەبێت `md` بێت بۆ ئاسانکاری پێشبینیکردنی ناوخۆیی لەگەڵ `docker` `demo.i18n.site`

### وەرگێڕان

`en` `i18n.site` `md` `zh`

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

دوای جێبەجێکردن، فایلەکانی وەرگێڕان و کاش دروست دەبن تکایە لەبیرت بێت زیادیان بکەیت بۆ کۆگا `git add . ` لە `md` .

### پێشبینی ناوخۆیی

دامەزراندن و دەستپێکردن `docker` ( `MAC` پێشنیاری بەکارهێنانی [orbstack](https://orbstack.dev) وەک کاتی جێبەجێکردنی `docker` ).

پاشان [https://127.0.0.1](https://127.0.0.1) `./up.sh` `docker`

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### ناوەڕۆکی پۆست بکە

`i18n.site`[​](https://developer.mozilla.org/docs/Glossary/SPA)

دوای جێبەجێکردنی وەرگێڕانی سەرەوە، بەڕێوەبەرایەتی `htm` و `v` لە ناوەڕۆکی `md/out/dev`

`.i18n/htm/dev.yml` ، `dev`

لە ژێر : `dev`

`htm` لە ژێر دایرێکتۆرەکەدا لاپەڕەی چوونە ژوورەوەی ماڵپەڕەکە هەیە.

`v` دایرێکتۆرەکە ناوەڕۆکی ماڵپەڕەکە بە ژمارەی وەشانی تێدایە.

پێشبینی ناوخۆیی هەموو فایلەکان کۆپی دەکات بۆ ناوەڕۆکی `out/dev/v/0.1.0`

بۆ بڵاوکردنەوەی فەرمی، فایلە گۆڕاوەکان کۆپی دەکرێن بۆ ناوەڕۆکی ژمارەی وەشانی نوێ.

#### -c بەکاربهێنە بۆ دیاریکردنی پەڕگەی ڕێکخستن

فایلە جیاوازەکانی ڕێکخستن لە ژێر بەڕێوەبەرایەتی `out`

`out/ol` نموونە `.i18n/htm/ol.yml`

`dev.yml` و `ol.yml` ڕێکخستنە پێشوەختەکانن.

`dev` کورتکراوەی `development` یە کە نوێنەرایەتی ژینگەی گەشەپێدان دەکات، بۆ پێشبینی ناوخۆیی بەکاردێت، هەروەها پەڕگەی ڕێکخستنی پێشوەختەیە.
`ol` `online` `-n` `npm`

هەروەها دەتوانیت پەڕگەی ڕێکخستنی تر دروست بکەیت لە هێڵی فەرمانەکەدا `--htm_conf`

بۆ نموونە:
```
i18n.site --htm_conf yourConfig --save
```

لێرەدا `--save` ژمارەی وەشانی بڵاوکردنەوەی نوێکردنەوەکە نیشان دەدات.

#### <a rel=id href="#npm" id="npm"></a> ناوەڕۆک بڵاو بکەرەوە بۆ npmjs.com

بڵاوکردنەوەی ناوەڕۆک بۆ [npmjs.com](//npmjs.com) چارەسەری پێشوەختەی پێشنیار کراوە (بڕوانە [بەردەستبوونی بەرزی پێشەوە](/i18n.site/feature#ha) ).

##### npm login & ئازادکردن

دامەزراندن `nodejs` `npm login` بەکاربهێنە بۆ چوونە ژوورەوە.

دەستکاری بکە `md/.i18n/htm/ol.yml` `i18n.site` لە `v: //unpkg.com/i18n.site` بگۆڕە بۆ `npm` ناوی پاکێجەکەت.

تەنها ناوی پاکێجی بێ داگیرکەر بەکاربهێنە [npmjs.com](//npmjs.com) بەکارهێنانی ناوی دۆمەینی ماڵپەڕەکە وەک ناوی پاکێجەکە هەڵبژاردەیەکی باشە.

**`//unpkg.com/`** کاتی بڵاوکردنەوە `i18n.site` `/.v` `v:` `npm`

بۆ وەرگێڕان و بڵاوکردنەوە `i18n.site --npm` یان `i18n.site -n` لە ناوەڕۆکی `md`

ئەگەر ژینگەیەکی یەکخستنی بەردەوام بەکاردەهێنیت بۆ بڵاوکردنەوە، پێویست بە دامەزراندنی `nodejs` تەنها مۆڵەتی چوونەژوورەوە و بڵاوکراوە `~/.npmrc` کۆپی بکە بۆ ژینگەکە.

**`.i18n/v/ol`** ناوی پاکێجەکەت لە `v:` in `ol.yml`

##### پرۆکسی سێرڤەر کە لەلایەن npm بڵاوکراوەتەوە

ئەگەر بەکارهێنەرانی چینی سەرەکی تووشی کێشەی تۆڕ `https_proxy` و نەیانتوانی پاکێجی `npm`

بەگریمانەیەک کە دەرچەی سێرڤەری پرۆکسیت `7890` دەتوانیت بنووسیت:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### ناوەڕۆکی خۆ میوانداریکراو

ئەگەر دەتەوێت ناوەڕۆکەکە خۆت میوانداری بکەیت، سەرەتا دەستکاری `md/.i18n/htm/ol.yml` و `v: //unpkg.com/i18n.site` بگۆڕە بۆ پێشگرەکەی URLەکەت، وەک `v: //i18n-v.xxx.com` .

دایرێکتۆری `md`

```
i18n.site --htm_conf ol --save
```

یان کورتکراوەی

```
i18n.site -c ol -s
```

پاشان، ناوەڕۆکەکە لە `md/out/ol/v` ڕێکبخە بۆ ڕێڕەوی پێشگرەکانی URL کە لە `v:` دانراوە.

لە کۆتاییدا، **کاتی کاشی ڕێڕەوەکە ڕێکبخە کە `1s` `/.v`**

دەتوانرێت کاتی کاش بۆ ڕێڕەوەکانی تر بۆ ساڵێک یان زیاتر دابنرێت بۆ کەمکردنەوەی داواکارییە ناپێویستەکان.

##### ناوەڕۆک هۆست بکە بۆ s3

بۆ خۆهۆستکردنی ناوەڕۆک، جگە لە بەکارهێنانی سێرڤەری خۆت، + دیکەی `CDN` بریتییە لە بەکارهێنانی `S3`

`S3` [rclone](https://rclone.org) `S3`

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

لەبیرت بێت `CDN` بەجۆرێک کە کاتی کاشی ڕێڕەوەکە کە بە `/.v` کۆتایی دێت `1s` بێت، ئەگەرنا ناتوانیت دەستبەجێ دەستت بگات بە ناوەڕۆکی تازە بڵاوکراوە.

### ماڵپەڕی بڵاوکردنەوە

ماڵپەڕەکە دەتوانرێت لە هەر شوێنێک جێگیر بکرێت [github page](https://pages.github.com) و [cloudflare page](https://pages.cloudflare.com) هەڵبژاردەی باشن.

لەبەر ئەوەی ماڵپەڕەکە بیناسازی [بەرنامەیەکی تاکە لاپەڕەیی](https://developer.mozilla.org/docs/Glossary/SPA) وەردەگرێت، لەبیرت بێت ڕێڕەوی URL کە `. ` نییە بنووسیتەوە بۆ `index.html` .

لاپەڕەی چوونە ژوورەوەی ماڵپەڕەکە تەنها پێویستی بە یەکجارە و پێویست ناکات لاپەڕەی چوونەژوورەوەی ماڵپەڕەکە دووبارە بڵاوبکرێتەوە بۆ نوێکردنەوەی ناوەڕۆکی دواتر.

#### لە لاپەڕەی github بڵاوکردنەوە

سەرەتا [کلیک github بکە بۆ دروستکردنی ڕێکخراوێک](https://github.com/account/organizations/new?plan=free) ئەم ناوەی خوارەوە وەک نموونە `i18n-demo`

پاشان کۆگایەک لە ژێر ئەم ڕێکخراوەدا دروست بکە `i18n-demo.github.io` تکایە `i18n-demo` بگۆڕە بەو ناوی ڕێکخراوەی کە دروستت کردووە):

<img alt="" src="https://p.3ti.site/1721098657.avif">

لە کاتی بڵاوکردنەوەی ناوەڕۆکەکەی بابەتەکەی پێشوو `out/ol/htm` دروست بووە تکایە ئەم دایرێکتۆرییە دابنێ و ڕابکە :

```
ln -s index.html 404.html
```


چونکە `github page` پشتگیری لە دووبارە نووسینەوەی ڕێڕەوی URL ناکات، بۆیە لە جیاتی ئەوە `404.html` بەکاردێت.

: `i18n-demo/i18n-demo.github.io.git` فرمانەی خوارەوە لە ناوەڕۆکی `htm`

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

دوای پاڵنانی کۆدەکە، چاوەڕێی بڵاوکردنەوەی `github page`

<img src="//p.3ti.site/1721116586.avif" width="350px">

بۆ پەڕەی دیمۆ تکایە سەیری:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### لە لاپەڕەی cloudflare بڵاوکردنەوە

بە بەراورد `github page` [cloudflare page](//pages.cloudflare.com)

`cloudflare page` `github page`

پرۆژەیەک دروست بکە و ئەو کۆگایەی سەرەوە ببەستە `i18n-demo.github.io`

پرۆسەکە لەم وێنەیەی خوارەوەدا نیشان دراوە:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

تکایە کلیک `Add Account` بۆ ئەوەی دەستت بگات بە `i18n-demo` ڕێکخراوەکە .

ئەگەر کۆگای ڕێکخراوێکی ترت بەستووە، لەوانەیە پێویستت بە دوو جار کلیک لەسەر `Add Account`

<img alt="" src="https://p.3ti.site/1721118306.avif">

دواتر `i18n-demo.github.io` Warehouse هەڵبژێرە، پاشان کلیک لە `Begin setup` بکە، و بەهاکانی پێشوەختە بۆ هەنگاوەکانی دواتر بەکاربهێنە.

<img alt="" src="https://p.3ti.site/1721118490.avif">

دوای ئەوەی بۆ یەکەمجار بەستنەوە، پێویستە چەند خولەکێک چاوەڕێ بکەیت پێش ئەوەی بتوانیت دەستت پێی بگات.

دوای بڵاوکردنەوە دەتوانیت ناوی دۆمەینێکی تایبەت بەخۆت ببەستیت.

<img alt="" src="https://p.3ti.site/1721119459.avif">

دوای بەستنەوەی ناوی دۆمەینی تایبەتمەند، تکایە بچۆ بۆ ناوی دۆمەینەکە بۆ ڕێکخستنی دووبارە نووسینەوەی ڕێڕەوی بەرنامەی تاکە لاپەڕەیی، وەک لە خوارەوە نیشان دراوە:

<img alt="" src="https://p.3ti.site/1721119320.avif">

یاساکانی وێنەی سەرەوە بەم شێوەیەن تکایە لە دێڕی یەکەمی خوارەوەدا ناوی دۆمەینەکە `i18n.site` .

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

جگە لەوەش، تکایە یاساکانی کاش ڕێکبخە، وەک لە خوارەوە دیارە، و ماوەی کاشەکە بۆ یەک مانگ دابنێ.

<img alt="" src="https://p.3ti.site/1721125111.avif">

تکایە هاوتاکردنی ناوی دۆمەین لە هەنگاوی دووەمی وێنەی سەرەوەدا بگۆڕە بۆ ئەو ناوە دۆمەینەی کە بەستووتە.

#### باشکردنی بڵاوکردنەوەی ماڵپەڕەکان لە چین

ئەگەر دەتەوێت ئەدای دەستڕاگەیشتنێکی باشتر لە ژینگەی تۆڕی چینی سەرەکی بەدەست بهێنیت، تکایە سەرەتا [ناوی دۆمەینێک تۆمار بکە](//beian.aliyun.com) .

پاشان، بەکارهێنانی هەڵگرتنی `out/ol/htm` فرۆشیارانی هەور لە `CDN` +

دەتوانیت edge computing بەکاربهێنیت بۆ دووبارە نووسینی ڕێگاکە بۆ ئەوەی لەگەڵ بەرنامەکانی تاکە لاپەڕەدا بگونجێت، وەکو [Baidu Smart `CDN`](//cloud.baidu.com/product/cdn.html) دەتوانرێت بەم شێوەیە ڕێکبخرێت:

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

`MX` تۆمارەکان و `CNAME` تۆمارەکان ناتوانن پێکەوە بژین، ئەگەر بتەوێت لە یەک کاتدا ئیمەیڵی ناوی دۆمەین وەربگریت، پێویستە هاوکاری لەگەڵ [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) بکەیت بۆ ئەوەی `CNAME` تەخت بکەیت بۆ `A` تۆمارکردن.

جگە لەوەش، لەبەر ئەوەی پارەی هاتوچۆی دەرەوەی وڵاتی فرۆشیارانی هەور لە چین تاڕادەیەک گرانە، ئەگەر بتەوێت تێچوونەکان باشتر بکەیت، دەتوانیت [DNS جوگرافیای بێبەرامبەری Huawei Cloud](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) و ناوی دۆمەینی تایبەت بە [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) 's بەکاربهێنیت (وەک لە خوارەوە نیشان دراوە) بۆ بەدەستهێنانی ترافیک لادان──ترافیک لە چین بایدو هەوری `CDN` هاتوچۆی نێودەوڵەتی دەچێتە cloudflare .

<img alt="" src="https://p.3ti.site/1721119788.avif">

ئەم چارەسەرانەی باشکردنی بڵاوکردنەوە ئاڵۆزترن و لە داهاتوودا لە بەشە جیاوازەکاندا دەناسرێنەوە.

#### ئاڕاستەکردنەوەی ناوی دۆمەینی گشتی

`*.xxx.com` `i18n.site` `www.xxx.com` `xxx.com`

ئەم مەرجە دەتوانرێت بە یارمەتی عەلی بابا `CDN` بەدەست بهێنرێت `EdgeScript` ( [بەڵگەنامەی ئینگلیزی](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [بەڵگەنامەی چینی](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ) !

ناوی دۆمەینێک لە [CDN عەلیبابا](https://cdn.console.aliyun.com/domain/list) زیاد بکە و `*.xxx.com` دۆمەینەکە ئاماژە بە `CDN` `CNAME` هەوری عەلیبابا بکە.

<img alt="" src="https://p.3ti.site/1721122000.avif">

بۆ نموونە ڕێکخستنی ئاڕاستەکردنەوەی ناوی pan-domain ی `*.i18n.site`

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### لەگەڵ nginx بڵاوکردنەوە

`/root/i18n/md/out/ol/htm` ڕێکخستنێکی هاوشێوەی ئەمانەی خوارەوە زیاد `out/ol/htm` لە `server` nginx

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### پێکهاتەی بەڕێوەبەرایەتی

#### گشتی

فایلە ئیستاتیکییەکانی ماڵپەڕەکە، وەک `favicon.ico` `robots.txt` ، هتد.

فایلەکانی ئایکۆن لێرەدا دەتوانرێت بە [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n

`.i18n` لە ژێر دایرێکتۆرەکەدا `i18n.site` ڕێکخستن، کاشی وەرگێڕان و هتد [.](/i18n.site/conf)

#### en

بەڕێوەبەرایەتی زمانی سەرچاوە، کە هاوتایە `.i18n/conf.yml` `fromTo` `en` لە پەڕگەی ڕێکخستن

```yaml
i18n:
  fromTo:
    en: zh
```

تکایە ئاماژە بە ڕێکخستنی وەرگێڕانەکە بکە [i18](/i18/use)

