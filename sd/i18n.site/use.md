# انسٽال ڪريو &

## ٺاھ جوڙ ٽوڪن

`i18` ترجمي وارو اوزار شامل ڪيو ويو آهي `i18n.site` مهرباني ڪري [هتي ڪلڪ ڪريو `i18` document to reference to configure access token](/i18/use) .

## انسٽال ڪريو

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## ڊيمو پروجيڪٽ

اچو ته هڪ ڊيمو پروجيڪٽ سان شروع ڪريون ۽ سکو ته ڪيئن استعمال ڪجي `i18n.site`

اسان پهريون ڀيرو ڊيمو مخزن کي ڪلون ڪيو ۽ هيٺ ڏنل حڪم کي هلائيندا آهيون:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

مکيه زمين چين ۾ صارفين ڪري سگهن ٿا:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

`demo.i18n.site` بيس ڪلون جو ڊاريڪٽري جو نالو هجڻ گهرجي `md` `docker` سان مقامي ڏيک کي آسان ڪرڻ لاءِ.

### ترجمو

پهرين، `md` داخل ڪريو ۽ `i18n.site` کي هلائي، جيڪو ترجمو ڪندو `en` `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

ھلڻ کان پوء، ترجمو ۽ ڪيش فائلون ٺاھيو ويندو مھرباني ڪري انھن کي `md` ۾ `git add . ` ڪرڻ لاء.

### مقامي ڏيک

انسٽال ڪريو ۽ شروع `docker` ( `MAC` استعمال ڪرڻ `docker` صلاح ڏيو [orbstack](https://orbstack.dev)

پوء، `docker` داخل ڪريو ۽ `./up.sh` ، ۽ پوء مقامي طور تي ڏسڻ لاء وڃو [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### پوسٽ مواد

[ھڪڙي صفحي جي ايپليڪيشن](https://developer.mozilla.org/docs/Glossary/SPA) آرڪيٽيڪچر کي اپنائڻ، ۽ ويب سائيٽ جي داخلا صفحي ۽ ويب سائيٽ جي مواد کي آزاديء سان ترتيب `i18n.site` ويو آھي.

مٿي ڏنل ترجمي کي هلائڻ کان پوءِ، `md/out/dev` ۾ `htm` ۽ `v` ڊاريڪٽريون ٺاهي وينديون.

هتي `dev` اشارو ڪري ٿو ته اهو ٺهيل آهي `.i18n/htm/dev.yml` فائل تي.

مواد : `dev`

ڊاريڪٽري جي `htm` ويب سائيٽ جو داخلا صفحو آهي.

ڊاريڪٽري `v` ورزن نمبر سان گڏ ويب سائيٽ جو مواد شامل آهي.

مقامي پريو `out/dev/v/0.1.0` ۾ سڀني فائلن کي نقل ڪندو نسخي نمبر کان سواء.

سرڪاري رليز لاءِ، تبديل ٿيل فائلن کي نقل ڪيو ويندو نئين نسخي نمبر ڊاريڪٽري ۾.

#### استعمال ڪريو -c ترتيب ڏيڻ واري فائل کي بيان ڪرڻ لاء

ڊاريڪٽري `out` تحت مختلف ترتيب واري فائلون لاڳاپيل ڊائريڪٽريون ٺاهينديون.

مثال طور `.i18n/htm/ol.yml` ٺاهي ويندي `out/ol` ڊاريڪٽري.

`dev.yml` `ol.yml` ڊفالٽ ترتيب آهن.

`development` جو مخفف آهي `dev` جيڪو ڊولپمينٽ ماحول جي نمائندگي ڪري ٿو، مقامي ڏيک لاءِ استعمال ٿئي ٿو، ۽ ڊفالٽ ڪنفيگريشن فائل پڻ آهي.
`online` جو مخفف آهي `ol` جيڪو آن لائن ماحول جي نمائندگي ڪري ٿو، سرڪاري رليز لاءِ استعمال ڪيو ويندو آهي، ۽ اهو پڻ ڊفالٽ ڪنفيگريشن فائل آهي جڏهن شايع ڪيو ويندو آهي `npm` ڪمانڊ لائن پيٽرولر استعمال ڪندي `-n` .

توهان پڻ ٺاهي سگهو ٿا ڪنفگريشن فائلون استعمال `--htm_conf` ڪمانڊ لائن تي.

مثال طور:
```
i18n.site --htm_conf yourConfig --save
```

`--save` ظاهر ڪري ٿو تازه ڪاري ورزن نمبر.

#### <a rel=id href="#npm" id="npm"></a> npmjs.com تي مواد شايع ڪريو

مواد کي شايع ڪرڻ [npmjs.com](//npmjs.com) تجويز ڪيل ڊفالٽ حل آهي (ڏسو [فرنٽ-اينڊ هاءِ دستيابي](/i18n.site/feature#ha) ).

##### npm login &

انسٽال ڪريو `nodejs` لاگ ان ڪرڻ لاءِ `npm login` استعمال ڪريو.

تبديلي آڻيو `md/.i18n/htm/ol.yml` `i18n.site` ۾ `v: //unpkg.com/i18n.site` تبديل ڪريو پنھنجو `npm` پيڪيج جو نالو.

صرف غير آباد ٿيل پيڪيج جو نالو استعمال ڪريو ويب سائيٽ ڊومين جو نالو جيئن ته پيڪيج جو نالو سٺو انتخاب آهي [npmjs.com](//npmjs.com)

`npm` جي بنياد تي شايع ڪرڻ جي لاءِ، **پڪ ڪريو ته `//unpkg.com/`** `v:` قدر جي اڳياڙيءَ طور استعمال ڪيو وڃي ته ڪيش جو وقت `i18n.site` هن اڳياڙيءَ واري رستي جي تحت `/.v` خاص طور تي بهتر ڪيو ويو آهي ته جيئن نئين رليز کي بروقت ڏسڻ ۾ اچي.

ھلايو `i18n.site --npm` يا `i18n.site -n` `md` ۾ ترجمو ڪرڻ ۽ شايع ڪرڻ لاء.

جيڪڏھن توھان شايع ڪرڻ لاءِ مسلسل انضمام واري ماحول کي استعمال ڪريو ٿا، ان کي انسٽال ڪرڻ جي ڪا ضرورت ناھي `nodejs` بس لاگ ان ٿيل ۽ شايع ٿيل اجازت `~/.npmrc` کي ماحول ۾ نقل ڪريو.

جيڪڏهن توهان پئڪيج جي نالي کي `v:` ۾ تبديل ڪريو ٿا `ol.yml` مهرباني ڪري **پڪ ڪريو ته پهريان `.i18n/v/ol` حذف ڪريو** ۽ پوءِ شايع ڪريو.

##### پراکسي سرور پاران شايع ٿيل اين پي ايم

جيڪڏهن مينلينڊ چين ۾ استعمال ڪندڙ نيٽ ورڪ مسئلن کي منهن ڏئي رهيا آهن ۽ پيڪيج `npm` شايع ڪرڻ کان قاصر آهن، اهي پراکسي سرور کي ترتيب ڏيڻ لاء ماحول متغير `https_proxy` ڪري سگهن ٿا.

فرض ڪيو ته توهان جو پراکسي سرور پورٽ آهي `7890` توهان لکي سگهو ٿا:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### خود ميزباني ڪيل مواد

جيڪڏهن توهان مواد کي خود ميزباني ڪرڻ چاهيو ٿا، پهرين، ايڊٽ `md/.i18n/htm/ol.yml` ۽ تبديل ڪريو `v: //unpkg.com/i18n.site` پنهنجي URL جي اڳڪٿي ۾، جهڙوڪ `v: //i18n-v.xxx.com` .

ڊاريڪٽري داخل ڪريو ۽ هلائي `md`

```
i18n.site --htm_conf ol --save
```

يا مخفف

```
i18n.site -c ol -s
```

ان کان پوء، ڊاريڪٽري ۾ مواد کي ترتيب ڏيو `md/out/ol/v` آر ايل پريفڪس رستو `v:` .

آخر ۾، **`1s` `/.v` ختم ٿيڻ واري رستي جي ڪيش وقت کي ترتيب ڏيو** ، ٻي صورت ۾ نئين جاري ڪيل مواد کي فوري طور تي رسائي نه ٿي سگھي.

غير ضروري درخواستن کي گھٽائڻ لاءِ ٻين رستن لاءِ ڪيش جو وقت ھڪ سال يا وڌيڪ مقرر ڪري سگھجي ٿو.

##### s3 تي مواد ميزباني ڪريو

خود ميزباني `CDN` لاءِ، توهان جي پنهنجي سرور + استعمال ڪرڻ کان علاوه، ٻيو عام آپشن استعمال ڪرڻ آهي `S3`

توھان استعمال ڪري [rclone](https://rclone.org) لاگ `S3` سرور، پوءِ ھيٺ ڏنل اسڪرپٽ جو حوالو ڏيو ۽ صرف `S3` ۾ واڌارو تبديليون نقل ڪريو جڏھن توھان شايع ڪريو.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

ترتيب ڏيڻ لاءِ ياد رکو `CDN` ته جيئن `/.v` ۾ ​​ختم ٿيڻ واري رستي جو ڪيش وقت `1s` آهي، ٻي صورت ۾ توهان فوري طور تي نئين جاري ڪيل مواد تائين رسائي حاصل ڪرڻ جي قابل نه هوندا.

### ويب سائيٽ شايع ڪرڻ

ويب سائيٽ ڪٿي به ٺهي سگهي ٿي [github page](https://pages.github.com) ۽ [cloudflare page](https://pages.cloudflare.com) سٺيون چونڊون آهن.

ڇاڪاڻ ته ويب سائيٽ [هڪ صفحي جي ايپليڪيشن](https://developer.mozilla.org/docs/Glossary/SPA) جي فن تعمير کي اختيار ڪري ٿي، ياد رکو ته URL جو رستو ٻيهر لکو جنهن ۾ شامل نه آهي `index.html` `. `

ويب سائيٽ جي داخلا واري صفحي کي صرف هڪ ڀيرو ترتيب ڏيڻ جي ضرورت آهي، ۽ بعد ۾ مواد جي تازه ڪاري لاء ويب سائيٽ جي داخلا صفحي کي ٻيهر ترتيب ڏيڻ جي ڪا ضرورت ناهي.

#### github صفحي تي ترتيب ڏيو

[هڪ تنظيم ٺاهڻ لاءِ پهرين github ڪلڪ ڪريو](https://github.com/account/organizations/new?plan=free) مثال طور `i18n-demo`

ان کان پوء هن `i18n-demo.github.io` جي تحت هڪ گودام ٺاهيو (مهرباني ڪري `i18n-demo` تبديل ڪريو تنظيم جو نالو توهان ٺاهيو):

<img alt="" src="https://p.3ti.site/1721098657.avif">

جڏهن پوئين مضمون ۾ مواد شايع ڪيو ويو آهي، اهو ٺاهيو ويو `out/ol/htm` مهرباني ڪري هن ڊاريڪٽري ۾ داخل ڪريو ۽ هلائي :

```
ln -s index.html 404.html
```


ڇو `github page` URL جو رستو ٻيهر لکڻ جي حمايت نه ڪندو آهي، تنهنڪري `404.html` استعمال ڪيو ويندو آهي.

پوءِ `htm` ۾ ھيٺ ڏنل حڪم ھلايو (ياد رکو `i18n-demo/i18n-demo.github.io.git` پنھنجي گودام پتي سان) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

ڪوڊ کي دٻائڻ کان پوءِ، ڪاميابيءَ سان هلائڻ لاءِ انتظار `github page` (جيئن هيٺ ڏيکاريل آهي)، ۽ پوءِ توهان ان تائين رسائي حاصل ڪري سگهو ٿا.

<img src="//p.3ti.site/1721116586.avif" width="350px">

ڊيمو صفحي لاء مهرباني ڪري ڏسو:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Cloudflare صفحي تي ترتيب ڏيو

جي [cloudflare page](//pages.cloudflare.com) ۾ `github page` اهو رستو ٻيهر لکندو آهي ۽ چين جي سرزمين لاء وڌيڪ دوستانه آهي ۽ استعمال ڪرڻ جي سفارش ڪئي وئي آهي.

مقرري عام طور `cloudflare page` `github page` مٿي جي ترتيب تي ٻڌل آهي.

ھڪڙو منصوبو ٺاھيو ۽ مٿي `i18n-demo.github.io` گودام کي پابند ڪريو.

عمل هيٺ ڏنل شڪل ۾ ڏيکاريل آهي:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

مھرباني ڪري ڪلڪ `Add Account` `i18n-demo` تائين پھچائڻ لاءِ.

جيڪڏهن توهان ڪنهن ٻئي تنظيم جي گودام کي پابند ڪيو آهي، توهان کي ٻه ڀيرا ڪلڪ `Add Account` جي ضرورت پوندي ان کي اجازت ڏيڻ کان پهريان ٻه ڀيرا نئين تنظيم کي ظاهر ڪيو ويندو.

<img alt="" src="https://p.3ti.site/1721118306.avif">

اڳيون `Begin setup` `i18n-demo.github.io`

<img alt="" src="https://p.3ti.site/1721118490.avif">

پهريون ڀيرو پابند ٿيڻ کان پوء، توهان کي ڪجهه منٽ انتظار ڪرڻ جي ضرورت آهي ان کان پهريان توهان ان تائين رسائي ڪري سگهو ٿا.

لڳائڻ کان پوء، توهان پابند ڪري سگهو ٿا هڪ ڪسٽم ڊومين جو نالو.

<img alt="" src="https://p.3ti.site/1721119459.avif">

ڪسٽم ڊومين جو نالو بائنڊنگ ڪرڻ کان پوءِ، مھرباني ڪري ڊومين جي نالي ڏانھن وڃو ھڪڙي صفحي واري ايپليڪيشن جي رستي کي ٻيهر لکڻ لاءِ، جيئن ھيٺ ڏيکاريل آھي:

<img alt="" src="https://p.3ti.site/1721119320.avif">

مٿي ڏنل تصوير ۾ ضابطا آهن مهرباني `i18n.site` هيٺ ڏنل قطار ۾ توهان کي پابند ٿيل ڊومين سان.

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

ان کان علاوه، مھرباني ڪري ڪيش جي ضابطن کي ترتيب ڏيو، جيئن ھيٺ ڏيکاريل آھي، ۽ ڪيش جي مدت کي ھڪڙي مھيني تائين مقرر ڪريو.

<img alt="" src="https://p.3ti.site/1721125111.avif">

مھرباني ڪري مٿي ڏنل تصوير ۾ ٻئي مرحلي ۾ ملندڙ ڊومين جو نالو تبديل ڪريو جنھن ڊومين جي نالي تي توھان پابند آھيو.

#### سرزمين چين ۾ ويب سائيٽ جي ترتيب کي بهتر ڪرڻ

جيڪڏھن توھان چاھيو ٿا بھترين پھچڻ جي ڪارڪردگيءَ کي سرزمين چين جي نيٽ ورڪ ماحول ۾، مھرباني ڪري [رجسٽر ڪريو ڊومين جو نالو](//beian.aliyun.com) پھرين.

پوء `CDN` استعمال ڪريو بادل وينڊرز جي مکيه لينڊ چين ۾ `out/ol/htm` +

توهان ايج ڪمپيوٽنگ استعمال ڪري سگهو ٿا رستو ٻيهر لکڻ لاءِ سنگل پيج جي ايپليڪيشنن کي ترتيب ڏيڻ لاءِ، جيئن ته [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) ان کي هن طرح ترتيب ڏئي سگهجي ٿو:

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

ڇاڪاڻ `MX` رڪارڊ ۽ `CNAME` رڪارڊ گڏ نه ٿي سگھن ٿا، جيڪڏهن توهان هڪ ئي وقت ۾ ڊومين نالو اي ميلون حاصل ڪرڻ چاهيو ٿا، توهان کي [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) سان تعاون ڪرڻ جي ضرورت آهي `CNAME` ۾ `A` record.

ان کان علاوه، ڇاڪاڻ ته مکيه زمين چين ۾ ڪلائوڊ وينڊرز جا اوورسيز ٽريفڪ چارجز نسبتاً مهانگو آهن، جيڪڏهن توهان قيمتن کي بهتر ڪرڻ چاهيو ٿا، ته توهان حاصل ڪرڻ لاءِ [Huawei Cloud جي مفت جاگرافيائي DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) ۽ [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) جو ڪسٽم ڊومين نالو استعمال ڪري سگهو ٿا (جيئن هيٺ ڏيکاريل آهي). ٽريفڪ جو رخ──ٽريفڪ سرزمين چين ۾ Baidu Cloud `CDN` بين الاقوامي ٽرئفڪ cloudflare .

<img alt="" src="https://p.3ti.site/1721119788.avif">

اهي ترتيب ڏيڻ جي اصلاح جا حل وڌيڪ پيچيده آهن ۽ مستقبل ۾ الڳ بابن ۾ متعارف ڪرايا ويندا.

#### عام ڊومين نالو ريڊائريشن

جيڪڏهن توهان استعمال ڪريو `i18n.site` ويب سائيٽ ٺاهڻ لاءِ پنهنجي مکيه ويب سائيٽ، توهان کي عام طور تي پين-ڊومين ريڊائريڪشن کي ترتيب ڏيڻ جي ضرورت آهي، يعني ريڊائريڪيشن `*.xxx.com` ( `www.xxx.com` سميت) تائين رسائي `xxx.com` .

اها ضرورت علي `CDN` ڪلائوڊ جي مدد سان حاصل ڪري سگهجي ٿي `EdgeScript` ( [انگريزي دستاويز](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [چيني دستاويز](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

[Alibaba CDN](https://cdn.console.aliyun.com/domain/list) ۾ ڊومين جو نالو شامل ڪريو ۽ `*.xxx.com` جو نالو Alibaba Cloud `CDN` 's `CNAME` ڏانھن اشارو ڪريو.

<img alt="" src="https://p.3ti.site/1721122000.avif">

مثال طور، مٿي ڏنل تصوير ۾ pan-domain name redirection configuration هن `*.i18n.site` آهي:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### nginx سان ترتيب ڏيو

مھرباني ڪري ھيٺ ڏنل ھڪڙي ترتيب شامل ڪريو `server` ۾ nginx جتي `/root/i18n/md/out/ol/htm` مھرباني ڪري پنھنجي منصوبي جي رستي ۾ تبديل ڪريو `out/ol/htm` :

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### ڊاريڪٽري جي جوڙجڪ

#### عوامي

ويب سائيٽ جون جامد فائلون، جهڙوڪ `favicon.ico` `robots.txt` ، وغيره.

هتي جي آئڪن فائلن سان ٺاهي سگھجن ٿيون [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n

`.i18n` هيٺ ڏنل آهن `i18n.site` جي ڪنفيگريشن فائلون، ترجمي ڪيش وغيره. تفصيل لاءِ ايندڙ باب ["Configuration"](/i18n.site/conf) ڏسو.

#### en

ماخذ ٻولي ڊاريڪٽري، ترتيب واري فائل ۾ `fromTo` `en` `.i18n/conf.yml` لاڳاپيل

```yaml
i18n:
  fromTo:
    en: zh
```

مهرباني ڪري ترجمي جي ترتيب ڏانهن رجوع ڪريو [i18](/i18/use)

