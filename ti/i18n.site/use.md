# ምትካል &

## ናይ ውቅር ምልክት

`i18n.site` `i18` [`i18`](/i18/use)

## ምግጣም

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## ዲሞ ፕሮጀክት

ብናይ ዲሞ ፕሮጀክት ንጀምር እሞ ከመይ ጌርና ከም እንጥቀመሉ ንመሃር `i18n.site`

መጀመርታ ነቲ ናይ ዲሞ መኽዘን ክሎን ብምግባር ነቲ ትእዛዝ ከምዚ ዝስዕብ ንሰርሕ፤

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

ኣብ መሬት ቻይና ዝርከቡ ተጠቀምቲ፤

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

ስም ማህደር ናይቲ ኮድ መሰረት ክሎን `md` ክኸውን ኣለዎ ንከባብያዊ ቅድመ-ምርኢት ምስ `docker` ንምምችቻው `demo.i18n.site`

### ምትርጓም

`en` `i18n.site` `md` `zh`

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

ድሕሪ ምጉያይ ትርጉምን ካሸን ፋይላት ክፍጠሩ እዮም በጃኹም ኣብቲ መኽዘን `git add . ` ኣብ `md` ምውሳኽ ኣይትረስዑ።

### ናይ ከባቢ ቅድመ ምርኢት

ምትካልን ጀምርን `docker` ( `MAC` [orbstack](https://orbstack.dev) ከም ናይ `docker` ምዝዋር ግዜ ክትጥቀሙ ይመኽሩ ).

[https://127.0.0.1](https://127.0.0.1) `./up.sh` `docker`

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### ትሕዝቶ ፖስት ግበር

`i18n.site`[​](https://developer.mozilla.org/docs/Glossary/SPA)

ነዚ ኣብ ላዕሊ ዘሎ ትርጉም ድሕሪ ምዝዋር `htm` ን `v` ን ማህደር ኣብቲ `md/out/dev`

`.i18n/htm/dev.yml` `dev`

ኣብ ትሕቲ : `dev`

`htm` ኣብ ትሕቲ እቲ ማህደር መእተዊ ገጽ መርበብ ሓበሬታ ኣሎ።

`v` እቲ ማህደር ትሕዝቶ መርበብ ሓበሬታ ምስ ቁጽሪ ስሪት ዝሓዘ እዩ።

ሎካል ቅድመ-ምርኢት ቁጽሪ ስሪት ብዘየገድስ ንኹሎም ፋይላት ናብ `out/dev/v/0.1.0`

ንወግዓዊ ምዝርጋሕ፡ ዝተቐየሩ ፋይላት ናብቲ ሓድሽ ቁጽሪ ስሪት ማህደር ክቕደሑ እዮም።

#### ነቲ ናይ ውቅር ፋይል ንምግላጽ -c ተጠቐም

ዝተፈላለዩ ናይ ውቅር ፋይላት ኣብ ትሕቲ `out`

ንኣብነት `out/ol` ማህደር ክፈጥር እዩ `.i18n/htm/ol.yml`

`dev.yml` ን `ol.yml` ን እቶም ነባሪ ውቅርታት እዮም።

`dev` ኣሕጽሮተ ቃል ናይ `development` ኮይኑ፡ ንሃዋህው ምዕባለ ዝውክል ኮይኑ፡ ንከባብያዊ ቅድመ-ምርኢት ዝጥቀመሉ፡ ከምኡ'ውን ነባሪ ናይ ውቅር ፋይል እዩ።
`ol` `online` `-n` `npm`

ካልኦት ናይ ውቅር ፋይላት እውን ክትፈጥር ትኽእል ኢኻ ኣብ መስመር ትእዛዝ `--htm_conf`

ንኣብነት፥
```
i18n.site --htm_conf yourConfig --save
```

ኣብዚ `--save` ናይ ምዕባለ ስሪት ስሪት ይሕብር።

#### <a rel=id href="#npm" id="npm"></a> ትሕዝቶ ኣብ npmjs.com ምሕታም

[ትሕዝቶ](/i18n.site/feature#ha) ናብ [npmjs.com](//npmjs.com)

##### npm login & ስደድ

Install `nodejs` ንምእታው `npm login` ተጠቐም።

ኣርትዕ `md/.i18n/htm/ol.yml` `i18n.site` ኣብ `v: //unpkg.com/i18n.site` ናብ ናትካ `npm` ስም ፓኬጅ ቀይሮ።

በቃ ነቲ ዘይተታሕዘ ፓኬጅ ስም ኣብ [npmjs.com](//npmjs.com)

ኣብ `npm` ፓኬጅ ተመርኲስካ ክትዝርግሕ ከለኻ፡ $ `i18n.site` ቅድመ-ጥብቆ ናይቲ `v:` `/.v` **`//unpkg.com/` ኣረጋግጽ** ።

`i18n.site --npm` `i18n.site -n` ኣብቲ `md`

ንምሕታም ቀጻሊ ውህደት ሃዋህው እንተተጠቒምካ ምጽዓን ኣየድልን እዩ ነቲ ዝኣተኻን ዝተሓትመን ፍቓድ `~/.npmrc` ናብቲ ከባቢ ጥራይ ቅዳሕ `nodejs`

ስም ፓኬጅ **`.i18n/v/ol`** `v:` in `ol.yml`

##### ፕሮክሲ ሰርቨር ብ npm ዝተሓትመ

ኣብ መሬት ቻይና `https_proxy` ተጠቀምቲ ናይ መርበብ ጸገም እንተጋጢምዎምን ነቲ `npm`

ፕሮክሲ ሰርቨር ፖርትካ `7890` እዩ ኢልና ብምግማት፡ ክትጽሕፍ ትኽእል ኢኻ፤

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### ባዕሉ ዝተኣንገደ ትሕዝቶ

ነቲ ትሕዝቶ ባዕልኻ ከተአንግዶ `v: //unpkg.com/i18n.site` `v: //i18n-v.xxx.com` `md/.i18n/htm/ol.yml`

ኣብቲ `md`

```
i18n.site --htm_conf ol --save
```

ወይ ኣሕጽሮተ ቃል

```
i18n.site -c ol -s
```

ድሕሪኡ፡ ነቲ ኣብ `md/out/ol/v` ዘሎ ትሕዝቶ ናብቲ ኣብ `v:` ዝተቐመጠ ናይ URL ቅድመ-ጥብቆ መንገዲ ኣወሃህቦ።

**ኣብ መወዳእታ፡ ናይቲ `1s` `/.v`**

ንኻልኦት መንገድታት ዝኸውን ናይ መኽዘን ግዜ ናብ ሓደ ዓመት ወይ ልዕሊኡ ክቕየር ይኽእል እዩ ዘየድሊ ሕቶታት ንምንካይ።

##### ትሕዝቶ ናብ s3 ኣአንግድ

ትሕዝቶ ባዕልኻ ንምእንጋድ፡ ብዘይካ ናይ ገዛእ ርእስኻ ሰርቨር ምጥቃም + ልሙድ `CDN` `S3`

`S3` [rclone](https://rclone.org) `S3`

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

`CDN` ምእንቲ እቲ ብ `/.v` ዝውዳእ መንገዲ ናይ መኽዘን ግዜ `1s` ክኸውን፣ እንተዘይኮይኑ ነቲ ሓድሽ ዝተዘርግሐ ትሕዝቶ ብቕጽበት ክትረኽቦ ኣይትኽእልን ኢኻ።

### መርበብ ሓበሬታ ምሕታም

እቲ ዌብሳይት ኣብ ዝኾነ ቦታ ክዝርጋሕ ይኽእል እዩ [github page](https://pages.github.com) ከምኡ ውን [cloudflare page](https://pages.cloudflare.com) ጽቡቓት ምርጫታት እዮም።

እቲ መርበብ ሓበሬታ ናይ [ሓደ ገጽ መተግበሪ](https://developer.mozilla.org/docs/Glossary/SPA) ስነ ህንጻ ​​ስለ ዝቕበል ፡ ነቲ ዘይሓዘ መንገዲ URL ናብ `index.html` ዳግማይ ክትጽሕፎ ኣይትረስዕ `. `

እቲ ናይ ዌብሳይት መእተዊ ገጽ ሓንሳብ ጥራይ እዩ ክዝርጋሕ ዘለዎ፣ ንቐጻሊ ትሕዝቶ ምዕባለታት ድማ ነቲ ናይ ዌብሳይት መእተዊ ገጽ ዳግማይ ምዝርጋሕ ኣየድልን።

#### ኣብ ገጽ github ምዝርጋሕ

መጀመርታ [github ጠውቑ ትካል ንምፍጣር](https://github.com/account/organizations/new?plan=free) እዚ ዝስዕብ ስም ትካል `i18n-demo`

ድሕሪኡ ኣብ ትሕቲ እዚ `i18n-demo.github.io` መኽዘን ፍጠሩ (በጃኹም `i18n-demo` በቲ ዝፈጠርኩሞ ስም ትካል ተክእዎ):

<img alt="" src="https://p.3ti.site/1721098657.avif">

ኣብ ዝሓለፈ ጽሑፍ ትሕዝቶ ኣብ እትዝርግሓሉ እዋን ተፈጢሩ : በጃኹም ነዚ ማህደር ኣቲኹም ንጉየዩ `out/ol/htm`

```
ln -s index.html 404.html
```


ምኽንያቱ `github page` ዳግማይ ምጽሓፍ መንገዲ URL ስለዘይድግፍ፡ ኣብ ክንድኡ `404.html` ይጥቀም።

ድሕሪኡ `i18n-demo/i18n-demo.github.io.git` ዝስዕብ ትእዛዝ : `htm`

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

ነቲ ኮድ ድሕሪ ምድፋእካ፡ ምዝርጋሕ ናይ `github page` ብዓወት ክሰርሕ ተጸበዮ (ከምቲ ኣብ ታሕቲ ዘሎ)፡ ድሕሪኡ ክትረኽቦ ትኽእል ኢኻ።

<img src="//p.3ti.site/1721116586.avif" width="350px">

ንዲሞ ገጽ ኣብዚ ርአ፤

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### ኣብ ገጽ ክላውድፍሌር ምዝርጋሕ

`github page` [cloudflare page](//pages.cloudflare.com)

`cloudflare page` `github page`

ፕሮጀክት ፈጢርካ ነዚ ኣብ ላዕሊ ዘሎ መኽዘን ምእሳር `i18n-demo.github.io`

እቲ መስርሕ ኣብዚ ኣብ ታሕቲ ዘሎ ስእሊ ተገሊጹ ኣሎ፤
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

በጃኹም `Add Account` ናብቲ `i18n-demo` ክትኣትዉ ትኽእሉ ኢኹም።

ናይ ካልእ ትካል መኽዘን ኣሲርካዮ እንተኾንካ፡ ቅድሚ እቲ ሓድሽ ትካል ምቕራቡ ክልተ ግዜ ንምፍቃድ `Add Account`

<img alt="" src="https://p.3ti.site/1721118306.avif">

ቀጺልና `i18n-demo.github.io` Warehouse ምረጽ፣ ድሕሪኡ `Begin setup` ጠውቕ፣ ንቐጻሊ ስጉምትታት ድማ ነባሪ ክብርታት ተጠቐም።

<img alt="" src="https://p.3ti.site/1721118490.avif">

ንመጀመርታ ግዜ ድሕሪ ምእሳርካ፡ ቅድሚ ክትረኽቦ ምኽኣልካ ገለ ደቓይቕ ክትጽበ ኣለካ።

ድሕሪ ምዝርጋሕ፡ ብሕታዊ ስም ዓውዲ ክትኣስሮ ትኽእል ኢኻ።

<img alt="" src="https://p.3ti.site/1721119459.avif">

ድሕሪ ምእሳር ናይቲ ብሕታዊ ስም ዓውዲ፡ በጃኻ ናብቲ ስም ዓውዲ ብምኻድ ናይቲ ሓደ ገጽ ዘለዎ መተግበሪ ዳግማይ ምጽሓፍ መንገዲ ኣወሃሂድካ፡ ከምቲ ኣብ ታሕቲ ዘሎ፤

<img alt="" src="https://p.3ti.site/1721119320.avif">

ኣብ ላዕሊ ኣብ ዘሎ ስእሊ ዘሎ ሕግታት ከምዚ ዝስዕብ እዩ በጃኹም ኣብታ ኣብ ታሕቲ ዘላ ቀዳመይቲ መስመር ብናይ ዶሜይን ስም ተተክእዎ `i18n.site`

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

ብተወሳኺ፡ በጃኻ ከምቲ ኣብ ታሕቲ ዘሎ ሕግታት መኽዘን ኣወሃሂድካ፡ ንውሓት ግዜ መኽዘን ናብ ሓደ ወርሒ ኣቐምጦ።

<img alt="" src="https://p.3ti.site/1721125111.avif">

በጃኹም ኣብ ካልኣይ ደረጃ ኣብዚ ኣብ ላዕሊ ዘሎ ስእሊ ዘሎ ምትእስሳር ስም ዓውዲ ናብቲ ዝኣሰርኩሞ ስም ዓውዲ ቀይርዎ።

#### ኣብ መሬት ቻይና ንዝግበር ምዝርጋሕ ዌብሳይት ምምሕያሽ

ኣብ ኔትወርክ ሃዋህው መሬት ቻይና ዝሓሸ ናይ ተበጻሕነት ኣፈጻጽማ ክትረኽቡ ምስ እትደልዩ፡ በጃኹም መጀመርታ [ስም ዶመይን ምዝገባ ግበሩ](//beian.aliyun.com) ።

`out/ol/htm` ፡ ኣብ መሬት ቻይና `CDN` ሸየጥቲ ነገራት መኽዘን ተጠቐም +

ነቲ መንገዲ ዳግማይ ንምጽሓፍ edge computing ክትጥቀም ትኽእል ኢኻ ምስ ሓደ ገጽ ዘለዎም ኣፕሊኬሽናት ክትላመድ፣ ከም [Baidu Smart `CDN`](//cloud.baidu.com/product/cdn.html) ከምዚ ጌርካ ክውነን ይኽእል እዩ፤

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

`MX` መዛግብትን `CNAME` መዛግብትን ብሓባር ክነብሩ ስለዘይክእሉ፡ ኣብ ሓደ እዋን ናይ ዶሜይን ስም ኢመይላት ክትቅበሉ እንተደሊኻ `CNAME` ናብ `A` record) ክትጸፍፍፍ ምስ ስክሪፕት ክትተሓባበር ኣለካ [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten)

ብተወሳኺ፡ ኣብ መሬት ቻይና ንዝርከቡ ሸየጥቲ ደበና ዝኽፈል ክፍሊት ትራፊክ ብተዛማዲ ክቡር ስለዝኾነ፡ ወጻኢታት ከተመሓይሽ እንተደሊኻ፡ ንኽትዕወት [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) [Huawei Cloud DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) traffic diversion──ትራፊክ ኣብ መሬት ቻይና Baidu Cloud `CDN` ዓለምለኻዊ ትራፊክ ይኸይድ cloudflare .

<img alt="" src="https://p.3ti.site/1721119788.avif">

እዞም ናይ ምዝርጋሕ ምምሕያሽ መፍትሒታት ዝያዳ ዝተሓላለኹ ኮይኖም ኣብ መጻኢ ኣብ ዝተፈላለየ ምዕራፋት ክተኣታተዉ እዮም።

#### ሓፈሻዊ ኣንፈት ስም ዓውዲ

`*.xxx.com` `xxx.com` ከም ቀንዲ ዌብሳይትካ `www.xxx.com` `i18n.site`

እዚ ጠለብ ብሓገዝ ናይ ዓሊባባ ክላውድ ናይ `EdgeScript` ( [ትግርኛ ሰነድ](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [ቻይናዊ ሰነድ](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ) ክዕወት ይከኣል `CDN`

ኣብ [CDN ክላውድ](https://cdn.console.aliyun.com/domain/list) ስም ዶሜይን ወሲኽና `*.xxx.com` ዶሜይን ስም ናብ ኣሊባባ ክላውድ `CDN` 's `CNAME` ኣመልክቶ።

<img alt="" src="https://p.3ti.site/1721122000.avif">

ንኣብነት ኣብዚ ኣብ ላዕሊ ዘሎ ስእሊ ናይ ፓን-ዶመይን ስም ዳግመ-ኣንፈት ውቅር ከምዚ ዝስዕብ `*.i18n.site` ፤

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### ምስ nginx ምውፋር

`/root/i18n/md/out/ol/htm` ኣብ `server` `out/ol/htm` nginx

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### ኣቃውማ ማህደር

#### ህዝባዊ

ስታትቲክ ፋይላት ናይቲ መርበብ ሓበሬታ፡ ከም `favicon.ico` `robots.txt` , ወዘተ።

ኣብዚ ዘለዉ ናይ ምልክት ፋይላት ብ [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n

`.i18n` `i18n.site`[​](/i18n.site/conf)

#### en

ምንጪ ቋንቋ ማህደር፣ `.i18n/conf.yml` ኣብቲ ናይ ውቅር ፋይል ዘሎ `fromTo` `en` ዝሰማማዕ

```yaml
i18n:
  fromTo:
    en: zh
```

በጃኹም ኣብ ውቅር ትርጉም ተወከሱ [i18](/i18/use)

