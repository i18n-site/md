# ጫን &

## የውቅር ማስመሰያ

የ `i18` የትርጉም መሳሪያው ተካትቷል `i18n.site` እባክዎን [የመዳረሻ ማስመሰያውን ለማዋቀር የ `i18` ሰነድን ይመልከቱ](/i18/use) ።

## ጫን

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## የማሳያ ፕሮጀክት

በማሳያ ፕሮጄክት እንጀምር እና እንዴት መጠቀም እንዳለብን እንማር `i18n.site`

በመጀመሪያ የማሳያ ማከማቻውን እንዘጋለን እና ትዕዛዙን እንደሚከተለው እናስኬዳለን-

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

በዋናው ቻይና ውስጥ ያሉ ተጠቃሚዎች የሚከተሉትን ማድረግ ይችላሉ:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

የአካባቢ ቅድመ እይታን በ `docker` ለማመቻቸት የኮድ ቤዝ ክሎኑ ማውጫ ስም `md` መሆን አለበት `demo.i18n.site`

### መተርጎም

መጀመሪያ የ `md` ማውጫውን አስገባና `i18n.site` አሂድ ይህም `en` ወደ `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

ከሄዱ በኋላ፣ የትርጉም እና `md` `git add . ` ይፈጠራሉ

### የአካባቢ ቅድመ እይታ

ጫን እና `docker` ( `MAC` እንመክራለን [orbstack](https://orbstack.dev) እንደ የ `docker` Runtime)።

ከዚያ፣ `docker` ያስገቡ እና `./up.sh` ያሂዱ፣ እና ከዚያ ይጎብኙ [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### ይዘትን ይለጥፉ

`i18n.site` [አንድ ገጽ የመተግበሪያ](https://developer.mozilla.org/docs/Glossary/SPA) አርክቴክቸርን ይቀበላል፣ እና የድረ-ገጹ መግቢያ ገጽ እና የድረ-ገጹ ይዘቶች በተናጥል ተዘርግተዋል።

ከላይ ያለውን ትርጉም ካስኬዱ በኋላ `htm` እና `v` ማውጫዎች በ `md/out/dev`

እዚህ `dev` በ `.i18n/htm/dev.yml` ፋይል ላይ የተመሠረተ መሆኑን ያሳያል።

: በታች `dev`

`htm` ስር የድረ-ገጽ መግቢያ ገጽ አለ።

ማውጫው የድረ-ገጹን ይዘት ከስሪት ቁጥር ጋር ይዟል `v`

የአካባቢ ቅድመ-እይታ የስሪት ቁጥሩ ምንም ይሁን ምን ሁሉንም ፋይሎች ወደ `out/dev/v/0.1.0`

በይፋ ለመልቀቅ፣ የተቀየሩ ፋይሎች ወደ አዲሱ የስሪት ቁጥር ማውጫ ይገለበጣሉ።

#### የማዋቀሪያ ፋይሉን ለመለየት -c ይጠቀሙ

የተለያዩ የውቅረት ፋይሎች `out` ስር ተዛማጅ ማውጫዎችን ይፈጥራሉ።

ለምሳሌ `.i18n/htm/ol.yml` `out/ol` ማውጫ ይፈጥራል።

`dev.yml` `ol.yml` ነባሪ ውቅሮች ናቸው።

የልማት አካባቢን የሚወክለው የ `development` ምህጻረ ቃል ለአካባቢያዊ ቅድመ-ዕይታ ጥቅም `dev` የሚውል ሲሆን እንዲሁም ነባሪው የውቅር ፋይል ነው።
የኦንላይን አካባቢን የሚወክለው የ `online` ምህጻረ ቃል ለኦፊሴላዊ ልቀት ጥቅም ላይ የሚውል ሲሆን እንዲሁም በሚታተምበት ጊዜ ነባሪ የውቅር ፋይል ነው `npm` የትእዛዝ መስመር መለኪያ `-n` በመጠቀም `ol`

እንዲሁም የማዋቀሪያውን ፋይል ስም `--htm_conf` በትእዛዝ መስመር ላይ ሌሎች የማዋቀሪያ ፋይሎችን መፍጠር ትችላለህ።

ለምሳሌ፥
```
i18n.site --htm_conf yourConfig --save
```

`--save` የዝማኔ መልቀቂያ ሥሪት ቁጥርን ያሳያል።

#### <a rel=id href="#npm" id="npm"></a> ይዘትን ወደ npmjs.com ያትሙ

ይዘትን ወደ [npmjs.com](//npmjs.com) ማተም የሚመከር ነባሪ መፍትሄ ነው ( [የፊት-ፍጻሜ ከፍተኛ ተገኝነትን](/i18n.site/feature#ha) ይመልከቱ)።

##### መልቀቅ npm login &

ጫን `nodejs` ለመግባት `npm login` ተጠቀም።

ያርትዑ `md/.i18n/htm/ol.yml` በ `v: //unpkg.com/i18n.site` ውስጥ ያለውን `i18n.site` ወደ ራስዎ `npm` የጥቅል ስም) ይለውጡ።

ያልተያዘውን የጥቅል ስም በ ላይ ብቻ ይጠቀሙ [npmjs.com](//npmjs.com)

`v:` `npm` **`//unpkg.com/`** `i18n.site` `/.v`

ለመተርጎም እና ለማተም `md` ውስጥ `i18n.site --npm` ወይም `i18n.site -n` ያሂዱ።

ለማተም ቀጣይነት ያለው የውህደት `~/.npmrc` ከተጠቀሙ እሱን መጫን አያስፈልግም `nodejs`

የጥቅል ስሙን `v:` `ol.yml` ካስተካክሉት፣ እባክዎ **መጀመሪያ `.i18n/v/ol` መሰረዝዎን እና ከዚያ ማተምዎን ያረጋግጡ** ።

##### ተኪ አገልጋይ በ npm ታትሟል

በሜይንላንድ ቻይና ያሉ ተጠቃሚዎች የኔትወርክ ችግር ካጋጠማቸው እና `https_proxy` `npm`

የእርስዎ ተኪ አገልጋይ ወደብ `7890` እንደሆነ በማሰብ የሚከተሉትን መጻፍ ይችላሉ:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### በራስ የሚስተናገድ ይዘት

ይዘቱን እራስዎ ማስተናገድ ከፈለጉ መጀመሪያ `md/.i18n/htm/ol.yml` እና `v: //unpkg.com/i18n.site` ወደ የእርስዎ URL ቅድመ ቅጥያ ይቀይሩ፣ ለምሳሌ `v: //i18n-v.xxx.com` ።

`md` ያስገቡ እና ያሂዱ

```
i18n.site --htm_conf ol --save
```

ወይም ምህጻረ ቃል

```
i18n.site -c ol -s
```

ከዚያ በ `md/out/ol/v` ማውጫ ውስጥ ያለውን ይዘት በ `v:` ውስጥ ወደተቀመጠው የዩአርኤል ቅድመ ቅጥያ ያዋቅሩት።

በመጨረሻም **የመንገዱን መሸጎጫ ጊዜ ወደ `1s` `/.v`** ፣ ይህ ካልሆነ አዲስ የተለቀቀውን ይዘት ወዲያውኑ ማግኘት አይቻልም።

አላስፈላጊ ጥያቄዎችን ለመቀነስ የሌሎች ዱካዎች መሸጎጫ ጊዜ ለአንድ አመት ወይም ከዚያ በላይ ሊቀናጅ ይችላል።

##### ይዘትን ወደ s3 ያስተናግዱ

ይዘትን በራስ ለማስተናገድ፣ የእራስዎን አገልጋይ ከመጠቀም በተጨማሪ + የተለመደ አማራጭ መጠቀም `CDN` `S3`

የ [rclone](https://rclone.org) መግቢያን መጠቀም ትችላለህ `S3` ከዚህ በታች ያለውን ስክሪፕት ተመልከት እና ቀይር፣ እና በእያንዳንዱ ባተምክ `S3` ተጨማሪ ለውጦችን መቅዳት ትችላለህ።

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

የመንገዱን መሸጎጫ በ `/.v` የሚያበቃበት ጊዜ `1s` እንዲሆን ! ማዋቀርን አይዘንጉ `CDN` ያለበለዚያ አዲስ የተለቀቀውን ይዘት ወዲያውኑ ማግኘት አይችሉም።

### ድር ጣቢያ አትም

ድህረ ገጹ በማንኛውም ቦታ ሊሰራጭ ይችላል [github page](https://pages.github.com) እና [cloudflare page](https://pages.cloudflare.com) ጥሩ ምርጫዎች ናቸው።

ድህረ ገጹ [የአንድ ገጽ አፕሊኬሽኑን](https://developer.mozilla.org/docs/Glossary/SPA) አርክቴክቸር ስለሚጠቀም፣ ወደ `index.html` ያላካተተውን የዩአርኤል መንገድ እንደገና መፃፍዎን ያስታውሱ `. `

የድረ-ገጹ መግቢያ ገጽ አንድ ጊዜ ብቻ መሰማራት አለበት፣ እና ለቀጣይ የይዘት ዝመናዎች የድህረ ገጹ መግቢያ ገጹን እንደገና መዘርጋት አያስፈልግም።

#### በgithub ገጽ ላይ አሰማራ

[ድርጅት ለመፍጠር መጀመሪያ እዚህ ጠቅ github](https://github.com/account/organizations/new?plan=free) `i18n-demo`

ከዚያ በዚህ `i18n-demo.github.io` ስር መጋዘን ይፍጠሩ (እባክዎ በፈጠሩት ድርጅት ስም `i18n-demo` ይተኩ)

<img alt="" src="https://p.3ti.site/1721098657.avif">

በቀደመው መጣጥፍ ውስጥ ይዘቱን ሲያትሙ ተፈጥሯል `out/ol/htm` እባክዎን ይህንን ማውጫ ያስገቡ እና ያሂዱ :

```
ln -s index.html 404.html
```


`github page` የዩአርኤል ዱካ መፃፍን ስለማይደግፍ በምትኩ `404.html` ጥቅም ላይ ይውላል።

: `i18n-demo/i18n-demo.github.io.git` ትዕዛዝ በ `htm`

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

ኮዱን ከገፉ በኋላ የ `github page` ስራው በተሳካ ሁኔታ እስኪሰራ ድረስ ይጠብቁ እና ከዚያ ሊደርሱበት ይችላሉ።

<img src="//p.3ti.site/1721116586.avif" width="350px">

የማሳያ ገጽ እባክዎን ይመልከቱ፡-

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### በCloudflare ገጽ ላይ አሰማራ

`github page` [cloudflare page](//pages.cloudflare.com)

ብዙውን `cloudflare page` የስርጭቱ መጠን ከላይ በተጠቀሰው `github page` ላይ የተመሰረተ ነው።

አንድ ፕሮጀክት ይፍጠሩ እና ከላይ ያለውን መጋዘን ያስሩ `i18n-demo.github.io`

ሂደቱ ከዚህ በታች ባለው ስእል ውስጥ ይታያል.
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

`i18n-demo` መዳረሻ ለመስጠት እባኮትን ጠቅ ያድርጉ `Add Account`

የሌላ ድርጅት መጋዘን ካሰሩ፣ አዲሱ ድርጅት ከመታየቱ በፊት ሁለት ጊዜ ፍቃድ ለመስጠት `Add Account`

<img alt="" src="https://p.3ti.site/1721118306.avif">

`Begin setup` `i18n-demo.github.io`

<img alt="" src="https://p.3ti.site/1721118490.avif">

ለመጀመሪያ ጊዜ ከተጣበቁ በኋላ, ከመድረስዎ በፊት ጥቂት ደቂቃዎችን መጠበቅ አለብዎት.

ከተሰማራ በኋላ፣ ብጁ የጎራ ስም ማሰር ይችላሉ።

<img alt="" src="https://p.3ti.site/1721119459.avif">

ብጁ የጎራውን ስም ካሰሩ በኋላ፣ ከታች እንደሚታየው የአንድ ገጽ መተግበሪያን እንደገና የሚፃፍበትን መንገድ ለማዋቀር እባክዎ ወደ የጎራ ስም ይሂዱ።

<img alt="" src="https://p.3ti.site/1721119320.avif">

ከላይ በምስሉ ላይ ያሉት ህጎች እንደሚከተለው ናቸው `i18n.site`

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

በተጨማሪም፣ እባክዎ ከታች እንደሚታየው የመሸጎጫ ደንቦቹን ያዋቅሩ እና የመሸጎጫ ጊዜውን ለአንድ ወር ያዘጋጁ።

<img alt="" src="https://p.3ti.site/1721125111.avif">

እባኮትን ከላይ በምስሉ ላይ ባለው ሁለተኛ ደረጃ የሚዛመደውን የጎራ ስም ወደ ያዙት የጎራ ስም ይቀይሩት።

#### በዋና ምድር ቻይና ውስጥ የድር ጣቢያ ዝርጋታን ማመቻቸት

በሜይንላንድ ቻይና አውታረ መረብ አካባቢ የተሻለ የተደራሽነት አፈጻጸም ለማግኘት ከፈለጉ፣ እባክዎ መጀመሪያ [የጎራ ስም ያስመዝግቡ](//beian.aliyun.com) ።

`CDN` `out/ol/htm` ቻይና ውስጥ የደመና አቅራቢዎችን ማከማቻ ይጠቀሙ +

እንደ [Baidu Smart Cloud ካሉ ባለ አንድ ገጽ መተግበሪያዎች ጋር ለመላመድ መንገዱን እንደገና ለመፃፍ የጠርዝ ማስላትን መጠቀም ይችላሉ `CDN`](//cloud.baidu.com/product/cdn.html)

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

ምክንያቱም `MX` መዝገቦች እና `CNAME` መዛግብት አብረው ሊኖሩ አይችሉም፣ በተመሳሳይ ጊዜ የጎራ ስም ኢሜይሎችን መቀበል ከፈለጉ፣ `CNAME` ለማስያዝ `A` [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten)

በተጨማሪም፣ በሜይን ላንድ ቻይና ያሉ የደመና አቅራቢዎች የውጭ ትራፊክ ክፍያ በአንጻራዊነት ውድ ስለሆነ፣ ወጪዎችን ለማመቻቸት ከፈለጉ፣ ለማግኘት [የ Huawei Cloud DNS 's free ጂኦግራፊያዊ ጥራት](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) እና የ [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) ብጁ ዶሜይን (ከታች እንደሚታየው) መጠቀም ይችላሉ። የትራፊክ መዘዋወር──ትራፊክ በዋና ምድር ቻይና ባይዱ ክላውድ `CDN` አለምአቀፍ ትራፊክ ይሄዳል cloudflare .

<img alt="" src="https://p.3ti.site/1721119788.avif">

እነዚህ የማሰማራት ማሻሻያ መፍትሄዎች ይበልጥ የተወሳሰቡ እና ወደፊት በተለያዩ ምዕራፎች ውስጥ ይተዋወቃሉ።

#### አጠቃላይ የጎራ ስም ማዘዋወር

ድህረ ገጽን እንደ ዋና ድር ጣቢያህ ለማፍለቅ `i18n.site` ከሆነ፣ አብዛኛውን ጊዜ የፓን-ጎራ አቅጣጫን ማዋቀር አለብህ፣ ማለትም፣ ወደ `xxx.com` `www.xxx.com` ጨምሮ) `*.xxx.com` ያስፈልጋል።

ይህ መስፈርት በአሊባባ `CDN` `EdgeScript` ( [የእንግሊዝኛ ሰነድ](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [የቻይንኛ ሰነድ](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ) እርዳታ ማግኘት ይቻላል

[በአሊባባ CDN](https://cdn.console.aliyun.com/domain/list) ውስጥ የጎራ ስም ያክሉ እና የጎራ `*.xxx.com` ወደ አሊባባ ክላውድ `CDN` 's `CNAME` ያሳዩ።

<img alt="" src="https://p.3ti.site/1721122000.avif">

ለምሳሌ፣ ከላይ በምስሉ ላይ ያለው የፓን-ጎራ ስም ማዘዋወር ውቅር እንደሚከተለው ነው `*.i18n.site`

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### በ nginx አሰማራ

እባኮትን `server` ውስጥ ከሚከተለው ጋር ተመሳሳይ የሆነ ውቅር ጨምሩበት nginx `/root/i18n/md/out/ol/htm` ወደ እርስዎ የፕሮጀክት መንገድ ይለውጡት `out/ol/htm`

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### ማውጫ መዋቅር

#### የህዝብ

እንደ `favicon.ico` `robots.txt` ፣ ወዘተ ያሉ የድህረ ገጹ የማይንቀሳቀሱ ፋይሎች።

እዚህ ያሉት የአዶ ፋይሎች በ [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n

`.i18n` ስር `i18n.site` የውቅረት ፋይሎች፣ የትርጉም መሸጎጫ እና ሌሎችም አሉ። ለዝርዝሮች ቀጣዩን ምዕራፍ ["ውቅረት"](/i18n.site/conf) ይመልከቱ።

#### እ.ኤ.አ

የምንጭ ቋንቋ ማውጫ፣ በማዋቀር ፋይል ውስጥ ካለው `fromTo` `en` `.i18n/conf.yml` የሚዛመድ

```yaml
i18n:
  fromTo:
    en: zh
```

እባክዎ የትርጉም ውቅርን ይመልከቱ [i18](/i18/use)

