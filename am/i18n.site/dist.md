# ማሰማራት እና በመስመር ላይ

`i18n.site` ባለ [አንድ ገጽ አፕሊኬሽን](https://developer.mozilla.org/docs/Glossary/SPA) አርክቴክቸርን ተቀብሏል፣ እና የድረ-ገጹ መግቢያ ገጽ እና የድር ጣቢያ ይዘቶች በተናጥል ተዘርግተዋል።

ከላይ ያለውን ትርጉም ካስኬዱ በኋላ፣ ማውጫ `htm` እና `v` በ `md/out/dev` ማውጫ ስር ይፈጠራሉ።

እዚህ, `dev` ማለት በ `.i18n/htm/dev.yml` ውቅር ፋይል ላይ የተመሰረተ ነው.

`dev` ማውጫ :

የ `htm` ማውጫው የድረ-ገጽ መግቢያ ገጽ ነው።

የ `v` ማውጫው ከስሪት ቁጥሮች ጋር የድር ጣቢያ ይዘት ይዟል።

የአካባቢ ቅድመ እይታ ስለ የስሪት ቁጥሩ ግድ የለውም እና ሁሉንም ፋይሎች ወደ `out/dev/v/0.1.0` ማውጫ ይገለበጣል።

በይፋ ለመልቀቅ፣ የተቀየሩ ፋይሎች ወደ አዲሱ የስሪት ቁጥር ማውጫ ይገለበጣሉ።

## የማዋቀሪያ ፋይልን በ `-c` ይግለጹ

የተለያዩ የማዋቀር ፋይሎች በ `out` ማውጫ ውስጥ ተዛማጅ ማውጫዎችን ይፈጥራሉ።

ለምሳሌ፣ `.i18n/htm/main.yml` `out/main` ማውጫውን ይፈጥራል።

`dev.yml` እና `main.yml` ነባሪ ውቅሮች ናቸው።

`dev` የ `development` ምህጻረ ቃል ነው, የልማት አካባቢን የሚያመለክት, ለአካባቢያዊ ቅድመ-እይታ ጥቅም ላይ ይውላል, እና እንዲሁም ነባሪ የውቅር ፋይል ነው.
`ol` የኦንላይን አካባቢን የሚያመለክት የ `online` ምህጻረ ቃል ነው, እሱም በይፋ ለመልቀቅ ጥቅም ላይ የሚውል የትእዛዝ መስመር መለኪያዎችን `-n` እስከ `npm` ሲጠቀሙ.

እንዲሁም ሌሎች የማዋቀሪያ ፋይሎችን መፍጠር በትእዛዝ መስመሩ ላይ የውቅረት ፋይል ስምን `--htm_conf` ይጠቀሙ፡-

ለምሳሌ፡-
```
i18n.site --htm_conf dist --save
```

እዚህ `--save` የዝማኔ መልቀቂያ ሥሪት ቁጥርን ይወክላል።

## <a rel=id href="#npm" id="npm"></a> ይዘትን ወደ npmjs.com ያትሙ

ይዘትን ወደ [npmjs.com](//npmjs.com) ማተም የሚመከር ነባሪ መፍትሄ ነው ( [የፊት-ፍጻሜ ከፍተኛ ተገኝነትን](/i18n.site/feature#ha) ይመልከቱ)።

### npm & ይለጥፉ

`nodejs` ይጫኑ, በ `npm login` ይግቡ.

`md/.i18n/htm/main.yml` ያርትዑ እና የ [`md:`](//github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/main.yml#L7) `YOUR_NPM_PACKAGE` እሴቱን ይቀይሩት [npmjs.com](//npmjs.com) የራስዎ `npm` ጥቅል ስም።

ከዚያ `md/.i18n/htm/main.package.json` አሻሽል።

ለመተርጎም እና ለማተም `md` ማውጫ ውስጥ `i18n.site --npm` ወይም `i18n.site -n` ያሂዱ።

ለማተም ያልተቋረጠ የውህደት አካባቢን ከተጠቀሙ፣ `nodejs` መጫን አያስፈልግም። የገቡትን እና የህትመት ፈቃዶችን `~/.npmrc` ወደ አካባቢው ብቻ ይቅዱ።

የ `v:` ለ `main.yml` የጥቅል ስም ከቀየሩ፣ እባኮትን **መጀመሪያ `.i18n/v/main` መሰረዝ እና ከዚያ ማተምዎን ያረጋግጡ** ።

#### ተኪ አገልጋይ በ npm ታትሟል

በሜይንላንድ ቻይና ያሉ ተጠቃሚዎች የኔትወርክ ችግር ካጋጠማቸው እና `npm` ፓኬጆችን ማተም ካልቻሉ ተኪ አገልጋዩን ለማዋቀር የአካባቢን ተለዋዋጭ `https_proxy` ማዘጋጀት ይችላሉ።

የተኪ አገልጋይ ወደብ `7890` እንደሆነ በማሰብ የሚከተለውን መጻፍ ይችላሉ-

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

## በራስ የሚስተናገድ ይዘት

ይዘቱን እራስዎ ማስተናገድ ከፈለጉ መጀመሪያ `md/.i18n/htm/main.yml` ያርትዑ እና `v: //unpkg.com/i18n.site` ወደ የእርስዎ URL ቅድመ ቅጥያ ይለውጡ፣ ለምሳሌ `v: //i18n-v.xxx.com` ።

`md` ማውጫውን አስገባና አሂድ

```
i18n.site --htm_conf ol --save
```

ወይም ምህጻረ ቃል

```
i18n.site -c ol -s
```

ከዚያ በ `md/out/main/v` ማውጫ ውስጥ ያለውን ይዘት በ `v:` ውስጥ ወደተቀመጠው የዩአርኤል ቅድመ ቅጥያ መንገድ ያዋቅሩት።

በመጨረሻም **የመንገዱን መሸጎጫ ጊዜ በ `/.v` ወደ `1s` ያዋቅሩ** , አለበለዚያ አዲስ የተለቀቀውን ይዘት ወዲያውኑ ማግኘት አይቻልም.

አላስፈላጊ ጥያቄዎችን ለመቀነስ የሌሎች ዱካዎች መሸጎጫ ጊዜ ለአንድ አመት ወይም ከዚያ በላይ ሊቀናጅ ይችላል።

## ይዘትን ወደ s3 ያስተናግዱ

ይዘትን በራስ ለማስተናገድ የእራስዎን አገልጋይ ከመጠቀም በተጨማሪ ሌላ የተለመደ አማራጭ `S3` + መጠቀም ነው `CDN`

ወደ `S3` አገልጋይ ለመግባት [rclone](https://rclone.org) ከዚያ የሚከተለውን ስክሪፕት ይመልከቱ እና ያሻሽሉ እና ለእያንዳንዱ ልቀት ተጨማሪ ለውጦችን ወደ `S3` ብቻ መቅዳት ይችላሉ።

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/main/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/main/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/main/v/.v "$s3:/$bucket/"
```

የመንገዱን መሸጎጫ ጊዜ በ `/.v` የሚያልቅበት ጊዜ `1s` እንዲሆን `CDN` ማዋቀርን ያስታውሱ, አለበለዚያ አዲስ የተለቀቀውን ይዘት ወዲያውኑ ማግኘት አይቻልም.

## ድር ጣቢያ አትም

ድህረ ገጹ በማንኛውም ቦታ ሊሰራጭ ይችላል [github page](https://pages.github.com) እና [cloudflare page](https://pages.cloudflare.com) ጥሩ ምርጫዎች ናቸው።

ድህረ ገጹ [ባለ አንድ ገጽ የመተግበሪያ](https://developer.mozilla.org/docs/Glossary/SPA) አርክቴክቸር ስለሚጠቀም፣ `. ` እስከ `index.html` ያላሉትን የዩአርኤል መንገዶች እንደገና መፃፍዎን ያስታውሱ።

የድረ-ገጹ መግቢያ ገጽ አንድ ጊዜ ብቻ መሰማራት አለበት፣ እና ለቀጣይ የይዘት ዝመናዎች የድህረ ገጹ መግቢያ ገጹን እንደገና መዘርጋት አያስፈልግም።

### በgithub ገጽ ላይ አሰማራ

[ድርጅት ለመፍጠር መጀመሪያ github ጠቅ ያድርጉ](https://github.com/account/organizations/new?plan=free) የሚከተለው የድርጅት ስም `i18n-demo` ነው።

ከዚያ በዚህ ድርጅት ስር መጋዘን `i18n-demo.github.io` ይፍጠሩ (እባክዎ `i18n-demo` በፈጠሩት የድርጅት ስም ይተኩ)

![](https://p.3ti.site/1721098657.avif)

በቀደመው መጣጥፍ ውስጥ ያለውን ይዘት ሲያትሙ `out/main/htm` ተፈጥሯል እባኮትን ይህንን ማውጫ ያስገቡ እና ያሂዱ :

```
ln -s index.html 404.html
```


ምክንያቱም `github page` የዩአርኤል ዱካ እንደገና መፃፍን ስለማይደግፍ `404.html` በምትኩ ጥቅም ላይ ይውላል።

ከዚያ የሚከተለውን ትዕዛዝ በ `htm` ማውጫ ውስጥ ያሂዱ ( `i18n-demo/i18n-demo.github.io.git` በራስዎ የመጋዘን አድራሻ ለመተካት ያስታውሱ) :

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

### በCloudflare ገጽ ላይ አሰማራ

ከ `github page` ጋር ሲነጻጸር [cloudflare page](//pages.cloudflare.com) እንደገና ለመጻፍ መንገድ ያቀርባል እና ለዋና ቻይና የበለጠ ወዳጃዊ ነው እና ለመጠቀም ይመከራል.

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

ከላይ በሥዕሉ ላይ ያሉት ሕጎች እንደሚከተለው ናቸው `i18n.site`

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

### በዋና ምድር ቻይና ውስጥ የድር ጣቢያ ዝርጋታን ማመቻቸት

በሜይንላንድ ቻይና አውታረ መረብ አካባቢ የተሻለ የተደራሽነት አፈጻጸም ለማግኘት ከፈለጉ፣ እባክዎ መጀመሪያ [የጎራ ስም ያስመዝግቡ](//beian.aliyun.com) ።

ከዚያ በዋና + ውስጥ የደመና አቅራቢዎችን ዕቃ ማከማቻ ይጠቀሙ `CDN` የሚከተለውን ይዘት `out/main/htm` ያሰማሩ።

ከአንድ ገጽ አፕሊኬሽኖች ጋር ለመላመድ መንገዱን እንደገና ለመጻፍ የጠርዝ ማስላትን መጠቀም ትችላለህ ለምሳሌ [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) በዚህ መልኩ ሊዋቀር ይችላል።

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
  // የምላሽ ራስጌዎች እንደ out.XXX = 'MSG';
})
```

![](https://p.3ti.site/1721121273.avif)

መዝገብ `MX` እና መዝገብ `CNAME` አብረው ሊኖሩ ስለማይችሉ፣ በተመሳሳይ ጊዜ የጎራ ስም ኢሜይሎችን መቀበል ከፈለጉ፣ ከ [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) ስክሪፕት እስከ ደረጃ `CNAME` ወደ መዝገብ `A` መተባበር አለብዎት።

በተጨማሪም፣ በሜይን ላንድ ቻይና ያሉ የደመና አቅራቢዎች የውጭ ትራፊክ ክፍያ በአንጻራዊነት ውድ ስለሆነ፣ ወጪዎችን ለማመቻቸት ከፈለጉ፣ ለማግኘት [የ Huawei Cloud DNS 's free ጂኦግራፊያዊ ጥራት](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) እና የ [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) ብጁ ዶሜይን (ከታች እንደሚታየው) መጠቀም ይችላሉ። የትራፊክ መዘዋወር──በዋና ምድር ቻይና ባይዱ ክላውድ `CDN` ፣ አለምአቀፍ ትራፊክ ይሄዳል cloudflare .

![](https://p.3ti.site/1721119788.avif)

እነዚህ የማሰማራት ማሻሻያ መፍትሄዎች ይበልጥ የተወሳሰቡ እና ወደፊት በተለያዩ ምዕራፎች ውስጥ ይተዋወቃሉ።

### አጠቃላይ የጎራ ስም ማዘዋወር

ድር ጣቢያን እንደ ዋና ድር ጣቢያዎ ለማመንጨት `i18n.site` ከተጠቀሙ አብዛኛውን ጊዜ የፓን-ጎራ ማዘዋወርን ማለትም ወደ `*.xxx.com` ( `www.xxx.com` ጨምሮ) ወደ `xxx.com` መዳረሻን ማዞር ያስፈልግዎታል።

ይህንን መስፈርት በአሊባባ ክላውድ `CDN` `EdgeScript` ( [የእንግሊዘኛ ሰነድ](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [የቻይንኛ ሰነድ](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ) እርዳታ ማግኘት ይቻላል.

[CDN ክላውድ](https://cdn.console.aliyun.com/domain/list) ውስጥ ያለውን የጎራ ስም ጨምር እና በ Alibaba Cloud `CDN` ውስጥ `*.xxx.com` `CNAME` የጎራ ስም ጠቁም።

![](https://p.3ti.site/1721122000.avif)

ለምሳሌ ከላይ በምስሉ ላይ ያለው የፓን-ጎራ `*.i18n.site` ማዘዋወር ውቅረት እንደሚከተለው ነው።

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

### በ nginx አሰማራ

እባኮትን በ `server` አንቀጽ ላይ `/root/i18n/md/out/main/htm` `out/main/htm` ተመሳሳይ የሆነ ውቅር ጨምሩ nginx

```
location / {
  root  /root/i18n/md/out/main/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

## በ `github action` ተከታታይ ውህደት ላይ የተመሠረተ

የእርስዎን `github action` ለማዋቀር የሚከተለውን መመልከት ይችላሉ

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

በማዋቀሩ ላይ እንደሚታየው, ይህ የስራ ሂደት ወደ ቅርንጫፍ `main` እና ቅርንጫፍ `dist` በሚገፋበት ጊዜ ይነሳል.

የስራ ፍሰቱ ሰነዱን ለማተም ከቅርንጫፉ ስም ጋር የሚዛመደውን የውቅር ፋይል ይጠቀማል፣ `.i18n/htm/main.yml` እና `.i18n/htm/dist.yml` እንደ ቅደም ተከተላቸው የህትመት ውቅር ሆነው ያገለግላሉ።

ለሰነድ መልቀቅ ሂደት የሚከተሉትን ምርጥ ልምዶች እንመክራለን።

ለውጦች ወደ ቅርንጫፍ `main` ሲገፉ, ሰነዱ እንዲገነባ እና ወደ ቅድመ እይታ ጣቢያው እንዲሰራጭ ይደረጋል (የቅድመ እይታ ጣቢያው ይገኛል [github page](//pages.github.com) ).

ሰነዱ በቅድመ-እይታ ቦታ ላይ ትክክል መሆኑን ካረጋገጠ በኋላ, ኮዱ ይዋሃዳል እና ወደ ቅርንጫፍ `dist` ይገፋል, እና ኦፊሴላዊው ግንባታ እና ማሰማራት በመስመር ላይ ይሄዳል.

እርግጥ ነው, ከላይ ያለውን ሂደት መተግበር ተጨማሪ አወቃቀሮችን መጻፍ ይጠይቃል.

ለስራ ሂደት ስክሪፕት ትክክለኛውን ፕሮጀክት መመልከት ይችላሉ [github.com/fcdoc/doc](//github.com/fcdoc/doc/blob/main/.github/workflows/i18n.site.yml)

`secrets.I18N_SITE_TOKEN` እና `secrets.NPM_TOKEN` በማዋቀሪያው ውስጥ ሚስጥራዊ ተለዋዋጮችን በኮድ መሰረት እንዲያዋቅሩ ይጠይቃሉ።

![](//p.3ti.site/1730970199.avif)

`I18N_SITE_TOKEN` ማግኘት ይቻላል [i18n.site/token](//i18n.site/token)

`NPM_TOKEN` የጥቅል `npm` ማተሚያ ማስመሰያ ነው [npmjs.com](//npmjs.com)

![](//p.3ti.site/1730969906.avif)


## የማውጫ መዋቅር

### `public`

እንደ `favicon.ico` ፣ `robots.txt` ፣ ወዘተ ያሉ የድረ-ገጹ የማይንቀሳቀሱ ፋይሎች።

እዚህ ያሉት የአዶ ፋይሎች በ [realfavicongenerator.net](https://realfavicongenerator.net)

### `.i18n`

በ `.i18n` ማውጫ ስር የ `i18n.site` የውቅረት ፋይሎች፣ የትርጉም መሸጎጫ እና ሌሎችም አሉ። ለዝርዝሮች ቀጣዩን ምዕራፍ ["ውቅረት"](/i18n.site/conf) ይመልከቱ።

### `en`

የምንጭ ቋንቋ ማውጫ፣ `en` ከ `fromTo` በ `.i18n/conf.yml` የውቅር ፋይል ጋር የሚዛመድ

```yaml
i18n:
  fromTo:
    en: zh
```

እባክዎ የትርጉም ውቅርን ይመልከቱ [i18](/i18/use)