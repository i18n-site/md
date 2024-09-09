# ጫን &

## የውቅር ማስመሰያ

`i18n.site` አብሮ የተሰራ `i18` የትርጉም መሳሪያ አለው [`i18`](/i18/use)

## ጫን

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## የማሳያ ፕሮጀክት

`i18n.site` ን እንዴት መጠቀም እንዳለብን ለማወቅ በማሳያ ፕሮጄክት እንጀምር።

መጀመሪያ የማሳያ ማከማቻውን እንዘጋለን እና ትዕዛዙን እንደሚከተለው እናስኬዳለን።

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

በዋና ቻይና ውስጥ ያሉ ተጠቃሚዎች የሚከተሉትን ማድረግ ይችላሉ:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

የአካባቢያዊ ቅድመ-እይታን ከ `docker` ጋር ለማመቻቸት የ `demo.i18n.site` ኮድ ቤዝ ክሎን ማውጫ ስም `md` መሆን አለበት።

### መተርጎም

በመጀመሪያ `md` ማውጫውን ያስገቡ እና `i18n.site` ያሂዱ ይህም `en` ወደ `zh` ይተረጉመዋል.

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

ከሄዱ በኋላ `md` የትርጉም እና የመሸጎጫ `git add . ` ይፈጠራሉ

### የአካባቢ ቅድመ እይታ

`docker` ን ጫን እና ጀምር ( `MAC` ተጠቃሚ [orbstack](https://orbstack.dev) እንደ የአሂድ ጊዜ ለ `docker` እንዲጠቀሙ ይመክራል።

ከዚያ፣ `docker` ማውጫውን አስገባና `./up.sh` አስሂድ፣ እና ከዚያ ጎብኝ [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### ይዘትን ይለጥፉ

`i18n.site` ባለ [አንድ ገጽ አፕሊኬሽን](https://developer.mozilla.org/docs/Glossary/SPA) አርክቴክቸርን ተቀብሏል፣ እና የድረ-ገጹ መግቢያ ገጽ እና የድር ጣቢያ ይዘቶች በተናጥል ተዘርግተዋል።

ከላይ ያለውን ትርጉም ካስኬዱ በኋላ፣ ማውጫ `htm` እና `v` በ `md/out/dev` ማውጫ ስር ይፈጠራሉ።

እዚህ, `dev` ማለት በ `.i18n/htm/dev.yml` ውቅር ፋይል ላይ የተመሰረተ ነው.

`dev` ማውጫ :

የ `htm` ማውጫው የድረ-ገጽ መግቢያ ገጽ ነው።

የ `v` ማውጫው ከስሪት ቁጥሮች ጋር የድር ጣቢያ ይዘት ይዟል።

የአካባቢ ቅድመ እይታ ስለ የስሪት ቁጥሩ ግድ የለውም እና ሁሉንም ፋይሎች ወደ `out/dev/v/0.1.0` ማውጫ ይገለበጣል።

በይፋ ለመልቀቅ፣ የተቀየሩ ፋይሎች ወደ አዲሱ የስሪት ቁጥር ማውጫ ይገለበጣሉ።

#### የማዋቀሪያ ፋይሉን ለመለየት -c ይጠቀሙ

የተለያዩ የማዋቀር ፋይሎች በ `out` ማውጫ ውስጥ ተዛማጅ ማውጫዎችን ይፈጥራሉ።

ለምሳሌ፣ `.i18n/htm/ol.yml` `out/ol` ማውጫውን ይፈጥራል።

`dev.yml` እና `ol.yml` ነባሪ ውቅሮች ናቸው።

`dev` የ `development` ምህጻረ ቃል ነው, የልማት አካባቢን የሚያመለክት, ለአካባቢያዊ ቅድመ-እይታ ጥቅም ላይ ይውላል, እና እንዲሁም ነባሪ የውቅር ፋይል ነው.
`ol` የኦንላይን አካባቢን የሚያመለክት የ `online` ምህጻረ ቃል ነው, እሱም በይፋ ለመልቀቅ ጥቅም ላይ የሚውል የትእዛዝ መስመር መለኪያዎችን ከ `-n` እስከ `npm` ሲጠቀሙ.

እንዲሁም ሌሎች የማዋቀሪያ ፋይሎችን መፍጠር በትእዛዝ መስመሩ ላይ የውቅረት ፋይል ስምን `--htm_conf` ይጠቀሙ፡-

ለምሳሌ፡-
```
i18n.site --htm_conf yourConfig --save
```

እዚህ `--save` የዝማኔ መልቀቂያ ሥሪት ቁጥርን ይወክላል።

#### <a rel=id href="#npm" id="npm"></a> ይዘትን ወደ npmjs.com ያትሙ

ይዘትን ወደ [npmjs.com](//npmjs.com) ማተም የሚመከር ነባሪ መፍትሄ ነው ( [የፊት-ፍጻሜ ከፍተኛ ተገኝነትን](/i18n.site/feature#ha) ይመልከቱ)።

##### መልቀቅ npm login &

`nodejs` ይጫኑ, በ `npm login` ይግቡ.

`md/.i18n/htm/ol.yml` አርትዕ እና `i18n.site` በ `v: //unpkg.com/i18n.site` ወደ ራስህ `npm` የጥቅል ስም ቀይር።

ያልተያዘውን የጥቅል ስም በ ላይ ብቻ ይጠቀሙ [npmjs.com](//npmjs.com)

በጥቅል `npm` ላይ ተመስርተው በሚታተሙበት ጊዜ 2 ለ `v:` እሴት ቅድመ-ቅጥያ **`//unpkg.com/` ያረጋግጡ** `i18n.site` በዚህ ቅድመ ቅጥያ መንገድ የ `/.v` መሸጎጫ ጊዜን አመቻችቷል አዲስ የተለቀቁትን ወቅታዊ እይታ።

ለመተርጎም እና ለማተም በ `md` ማውጫ ውስጥ `i18n.site --npm` ወይም `i18n.site -n` ያሂዱ።

ለማተም ቀጣይነት ያለው የውህደት አካባቢን ከተጠቀሙ፣ `nodejs` መጫን አያስፈልግም። የገቡትን እና የህትመት ፈቃዶችን `~/.npmrc` ወደ አካባቢው ብቻ ይቅዱ።

የ `v:` ለ `ol.yml` የጥቅል ስም ከቀየሩ፣ እባኮትን **መጀመሪያ `.i18n/v/ol` መሰረዝ እና ከዚያ ማተምዎን ያረጋግጡ** ።

##### ተኪ አገልጋይ በ npm ታትሟል

በሜይንላንድ ቻይና ያሉ ተጠቃሚዎች የኔትወርክ ችግር ካጋጠማቸው እና `npm` ፓኬጆችን ማተም ካልቻሉ ተኪ አገልጋዩን ለማዋቀር የአካባቢን ተለዋዋጭ `https_proxy` ማዘጋጀት ይችላሉ።

የተኪ አገልጋይ ወደብ `7890` እንደሆነ በማሰብ የሚከተለውን መጻፍ ይችላሉ-

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### በራስ የሚስተናገድ ይዘት

ይዘቱን እራስዎ ማስተናገድ ከፈለጉ በመጀመሪያ `md/.i18n/htm/ol.yml` ያርትዑ እና `v: //unpkg.com/i18n.site` ወደ የእርስዎ URL ቅድመ ቅጥያ ይለውጡ፣ ለምሳሌ `v: //i18n-v.xxx.com` ።

የ `md` ማውጫውን አስገባና አሂድ

```
i18n.site --htm_conf ol --save
```

ወይም ምህጻረ ቃል

```
i18n.site -c ol -s
```

ከዚያ በ `md/out/ol/v` ማውጫ ውስጥ ያለውን ይዘት በ `v:` ውስጥ ወደተቀመጠው የዩአርኤል ቅድመ ቅጥያ መንገድ ያዋቅሩት።

በመጨረሻም **የመንገዱን መሸጎጫ ጊዜ በ `/.v` ወደ `1s` ያዋቅሩ** , አለበለዚያ አዲስ የተለቀቀውን ይዘት ወዲያውኑ ማግኘት አይቻልም.

አላስፈላጊ ጥያቄዎችን ለመቀነስ የሌሎች ዱካዎች መሸጎጫ ጊዜ ለአንድ አመት ወይም ከዚያ በላይ ሊቀናጅ ይችላል።

##### ይዘትን ወደ s3 ያስተናግዱ

ይዘትን በራስ ለማስተናገድ የእራስዎን አገልጋይ ከመጠቀም በተጨማሪ ሌላ የተለመደ አማራጭ `S3` + መጠቀም ነው `CDN`

ወደ `S3` አገልጋይ ለመግባት [rclone](https://rclone.org) ከዚያ የሚከተለውን ስክሪፕት ይመልከቱ እና ያሻሽሉ እና ለእያንዳንዱ ልቀት ተጨማሪ ለውጦችን ወደ `S3` ብቻ መቅዳት ይችላሉ።

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

የመንገዱን መሸጎጫ ጊዜ በ `/.v` የሚያልቅበት ጊዜ `1s` እንዲሆን `CDN` ማዋቀርን ያስታውሱ, አለበለዚያ አዲስ የተለቀቀውን ይዘት ወዲያውኑ ማግኘት አይቻልም.

### ድር ጣቢያ አትም

ድህረ ገጹ በማንኛውም ቦታ ሊሰራጭ ይችላል [github page](https://pages.github.com) እና [cloudflare page](https://pages.cloudflare.com) ጥሩ ምርጫዎች ናቸው።

ድህረ ገጹ [ባለ አንድ ገጽ የመተግበሪያ](https://developer.mozilla.org/docs/Glossary/SPA) አርክቴክቸር ስለሚጠቀም፣ `. ` እስከ `index.html` ያላሉትን የዩአርኤል መንገዶች እንደገና መፃፍዎን ያስታውሱ።

የድረ-ገጹ መግቢያ ገጽ አንድ ጊዜ ብቻ መሰማራት አለበት፣ እና ለቀጣይ የይዘት ዝመናዎች የድህረ ገጹ መግቢያ ገጹን እንደገና መዘርጋት አያስፈልግም።

#### በgithub ገጽ ላይ አሰማራ

[ድርጅት ለመፍጠር መጀመሪያ github ጠቅ ያድርጉ](https://github.com/account/organizations/new?plan=free) የሚከተለው የድርጅት ስም `i18n-demo` ነው።

ከዚያ በዚህ ድርጅት ስር መጋዘን `i18n-demo.github.io` ይፍጠሩ (እባክዎ `i18n-demo` በፈጠሩት ድርጅት ስም ይተኩ)

![](https://p.3ti.site/1721098657.avif)

በቀደመው መጣጥፍ ውስጥ ያለውን ይዘት ሲያትሙ፣ `out/ol/htm` ተፈጥሯል እባክዎን ይህንን ማውጫ ያስገቡ እና ያሂዱ :

```
ln -s index.html 404.html
```


ምክንያቱም `github page` የዩአርኤል ዱካ እንደገና መፃፍን ስለማይደግፍ `404.html` በምትኩ ጥቅም ላይ ይውላል።

ከዚያ የሚከተለውን ትዕዛዝ በ `htm` ማውጫ ውስጥ ያሂዱ ( `i18n-demo/i18n-demo.github.io.git` ን በራስዎ የመጋዘን አድራሻ ለመተካት ያስታውሱ) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

ኮዱን ከገፉ በኋላ የ `github page` ማሰማራቱ በተሳካ ሁኔታ እንዲሰራ ይጠብቁ (ከዚህ በታች እንደሚታየው) ከመድረስዎ በፊት።

<img src="//p.3ti.site/1721116586.avif" width="350px">

የማሳያ ገጽ እባክዎን ይመልከቱ፡-

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### በCloudflare ገጽ ላይ አሰማራ

[cloudflare page](//pages.cloudflare.com) `github page` ጋር ሲነጻጸር, እንደገና ለመጻፍ መንገድ ያቀርባል እና ለዋና ቻይና የበለጠ ወዳጃዊ ነው እና ለመጠቀም ይመከራል.

የ `cloudflare page` መዘርጋት ብዙውን ጊዜ ከላይ ባለው `github page` ላይ የተመሰረተ ነው.

ፕሮጀክት ይፍጠሩ እና ከላይ ያለውን `i18n-demo.github.io` መጋዘን ያስሩ።

ሂደቱ ከዚህ በታች ባለው ስእል ውስጥ ይታያል.
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

ለድርጅት `i18n-demo` መዳረሻ ለመስጠት እባክዎ `Add Account` ጠቅ ያድርጉ።

የሌላ ድርጅት መጋዘን ካሰሩ፣ አዲሱ ድርጅት ከመታየቱ በፊት ሁለት ጊዜ ፍቃድ ለመስጠት `Add Account` ሁለቴ ጠቅ ማድረግ ሊኖርብዎ ይችላል።

![](https://p.3ti.site/1721118306.avif)

በመቀጠል መጋዘን `i18n-demo.github.io` ይምረጡ እና ከዚያ `Begin setup` ጠቅ ያድርጉ እና ለሚቀጥሉት እርምጃዎች ነባሪ እሴቶችን ይጠቀሙ።

![](https://p.3ti.site/1721118490.avif)

ለመጀመሪያ ጊዜ ከተጣበቁ በኋላ, ከመድረስዎ በፊት ጥቂት ደቂቃዎችን መጠበቅ አለብዎት.

ከተሰማራ በኋላ፣ ብጁ የጎራ ስም ማሰር ይችላሉ።

![](https://p.3ti.site/1721119459.avif)

ብጁ የጎራውን ስም ካሰሩ በኋላ፣ ከታች እንደሚታየው የአንድ ገጽ መተግበሪያን እንደገና የሚፃፍበትን መንገድ ለማዋቀር እባክዎ ወደ የጎራ ስም ይሂዱ።

![](https://p.3ti.site/1721119320.avif)

ከላይ በሥዕሉ ላይ ያሉት `i18n.site` እንደሚከተለው ናቸው።

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

በተጨማሪም፣ እባክዎ ከታች እንደሚታየው የመሸጎጫ ደንቦቹን ያዋቅሩ እና የመሸጎጫ ጊዜውን ለአንድ ወር ያዘጋጁ።

![](https://p.3ti.site/1721125111.avif)

እባኮትን ከላይ በምስሉ ላይ ባለው ሁለተኛ ደረጃ የሚዛመደውን የጎራ ስም ወደ ያዙት የጎራ ስም ይቀይሩት።

#### በዋና ምድር ቻይና ውስጥ የድር ጣቢያ ዝርጋታን ማመቻቸት

በሜይንላንድ ቻይና አውታረ መረብ አካባቢ የተሻለ የተደራሽነት አፈጻጸም ለማግኘት ከፈለጉ፣ እባክዎ መጀመሪያ [የጎራ ስም ያስመዝግቡ](//beian.aliyun.com) ።

ከዚያ በዋና ቻይና ውስጥ የደመና አቅራቢዎችን ማከማቻ ይጠቀሙ `CDN` የሚከተለውን ይዘት `out/ol/htm` ያሰማሩ +

ከአንድ ገጽ አፕሊኬሽኖች ጋር ለመላመድ መንገዱን እንደገና ለመጻፍ የጠርዝ ማስላትን መጠቀም ትችላለህ ለምሳሌ [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) በዚህ መልኩ ሊዋቀር ይችላል።

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
![](https://p.3ti.site/1721121273.avif)

መዝገብ `MX` እና መዝገብ `CNAME` አብረው ሊኖሩ ስለማይችሉ፣ በተመሳሳይ ጊዜ የጎራ ስም ኢሜይሎችን መቀበል ከፈለጉ፣ ከ [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) ስክሪፕት እስከ ደረጃ `CNAME` ወደ መዝገብ `A` መተባበር አለብዎት።

በተጨማሪም፣ በሜይን ላንድ ቻይና ያሉ የደመና አቅራቢዎች የውጭ ትራፊክ ክፍያ በአንጻራዊነት ውድ ስለሆነ፣ ወጪዎችን ለማመቻቸት ከፈለጉ፣ ለማግኘት [የ Huawei Cloud DNS 's free ጂኦግራፊያዊ ጥራት](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) እና የ [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) ብጁ ዶሜይን (ከታች እንደሚታየው) መጠቀም ይችላሉ። የትራፊክ መዘዋወር──ትራፊክ በሜይንላንድ ቻይና Baidu Cloud `CDN` , አለምአቀፍ ትራፊክ ይሄዳል cloudflare .

![](https://p.3ti.site/1721119788.avif)

እነዚህ የማሰማራት ማመቻቸት መፍትሄዎች የበለጠ የተወሳሰቡ እና ወደፊት በተለያዩ ምዕራፎች ውስጥ ይተዋወቃሉ።

#### አጠቃላይ የጎራ ስም ማዘዋወር

ድር ጣቢያን እንደ ዋና ድር ጣቢያዎ ለማመንጨት `i18n.site` ከተጠቀሙ አብዛኛውን ጊዜ የፓን-ጎራ ማዘዋወርን ማለትም ወደ `*.xxx.com` ( `www.xxx.com` ን ጨምሮ) ወደ `xxx.com` መዳረሻን ማዞር ያስፈልግዎታል።

ይህንን መስፈርት በአሊባባ ክላውድ `CDN` `EdgeScript` ( [የእንግሊዘኛ ሰነድ](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [የቻይንኛ ሰነድ](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ) እርዳታ ማግኘት ይቻላል.

[በአሊባባ CDN](https://cdn.console.aliyun.com/domain/list) ውስጥ ያለውን የጎራ ስም ጨምር እና በ Alibaba Cloud `CDN` ውስጥ `*.xxx.com` እስከ `CNAME` ያለውን የጎራ ስም ጠቁም።

![](https://p.3ti.site/1721122000.avif)

ለምሳሌ፣ ከላይ በሥዕሉ ላይ ያለው የ `*.i18n.site` ፓን-ጎራ ስም ማዛወር ውቅር እንደሚከተለው ነው።

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

#### በ nginx አሰማራ

እባክዎን በ `server` አንቀጽ ውስጥ ከሚከተለው ጋር `out/ol/htm` `/root/i18n/md/out/ol/htm` ውቅር ያክሉ nginx

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### የማውጫ መዋቅር

#### `public`

እንደ `favicon.ico` ፣ `robots.txt` ፣ ወዘተ ያሉ የድረ-ገጹ የማይንቀሳቀሱ ፋይሎች።

እዚህ ያሉት የአዶ ፋይሎች በ [realfavicongenerator.net](https://realfavicongenerator.net)

#### `.i18n`

በ `.i18n` ማውጫ ስር የ `i18n.site` የውቅረት ፋይሎች፣ የትርጉም መሸጎጫ እና ሌሎችም አሉ። ለዝርዝሮች የሚቀጥለውን ምዕራፍ ["ውቅረት"](/i18n.site/conf) ይመልከቱ።

#### `en`

የምንጭ ቋንቋ ማውጫ፣ ከ `en` ከ `fromTo` በ `.i18n/conf.yml` የውቅር ፋይል ጋር የሚዛመድ

```yaml
i18n:
  fromTo:
    en: zh
```

እባክዎ የትርጉም ውቅርን ይመልከቱ [i18](/i18/use)