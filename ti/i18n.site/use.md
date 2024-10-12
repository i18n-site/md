# ምትካል &

## ናይ ውቅር ምልክት

`i18n.site` ኣብ ውሽጡ ዝተሃንጸ `i18` ናይ ትርጉም መሳርሒ ኣለዎ በጃኹም [ኣብዚ ጠውቑ ነቲ `i18` ሰነድ ብምውካስ ነቲ ናይ መእተዊ ምልክት ንምውቃር](/i18/use) ።

## ምግጣም

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## ዲሞ ፕሮጀክት

`i18n.site` ከመይ ጌርና ከም እንጥቀመሉ ንምፍላጥ ብናይ ዲሞ ፕሮጀክት ንጀምር።

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

ስም ማህደር ናይቲ `demo.i18n.site` ኮድ መሰረት ክሎን `md` ክኸውን ኣለዎ ንከባብያዊ ቅድመ - ምርኢት ምስ `docker` ንምምችቻው ።

### ምትርጓም

መጀመርታ ኣብ `md` ማህደር ኣቲና `i18n.site` ንጉየ፣ እዚ ድማ `en` ናብ `zh` ይትርጉሞ።

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

ድሕሪ ምዝዋር፡ ትርጉምን መኽዘንን ፋይላት ክፍጠሩ እዮም በጃኹም ኣብቲ ኣብ `md` `git add . ` መኽዘን ምውሳኽ ኣይትረስዑ።

### ናይ ከባቢ ቅድመ ምርኢት

`docker` ምጽዓንን ጀምርን ( `MAC` ተጠቃሚ [orbstack](https://orbstack.dev) ከም ናይ ምዝዋር ግዜ ን `docker` ክትጥቀመሉ ይመክር)።

ድሕሪኡ፡ ኣብቲ `docker` ማህደር ኣቲኻ `./up.sh` ኣካይድ፡ ድሕሪኡ ናብ [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### ትሕዝቶ ፖስት ግበር

`i18n.site` ናይ [ሓደ ገጽ መተግበሪ](https://developer.mozilla.org/docs/Glossary/SPA) ስነ ህንጻ ይቕበል፣ እቲ መእተዊ ገጽን ትሕዝቶ መርበብ ሓበሬታን ድማ ብናጻ ይዝርጋሕ።

እዚ ኣብ ላዕሊ ዘሎ ትርጉም ድሕሪ ምዝዋርና፡ ኣብ ትሕቲ `md/out/dev` ማህደር `htm` ን `v` ን ማህደር ክፍጠሩ እዮም።

ኣብዚ `dev` ማለት ኣብቲ `.i18n/htm/dev.yml` ናይ ውቅር ፋይል ተመርኲሱ ዝተሃንጸ ማለት እዩ።

`dev` ማህደር :

እቲ `htm` ማህደር መእተዊ ገጽ መርበብ ሓበሬታ እዩ።

እቲ `v` ማህደር ትሕዝቶ መርበብ ሓበሬታ ምስ ቁጽሪ ስሪት ዝሓዘ እዩ።

ሎካል ቅድመ-ምርኢት ብዛዕባ ቁጽሪ ስሪት ኣይግድሶን እዩ ንኹሎም ፋይላት ድማ ናብ `out/dev/v/0.1.0` ማህደር ክቕድሖም እዩ።

ንወግዓዊ ምዝርጋሕ፡ ዝተቐየሩ ፋይላት ናብቲ ሓድሽ ቁጽሪ ስሪት ማህደር ክቕደሑ እዮም።

#### ነቲ ናይ ውቅር ፋይል ንምግላጽ -c ተጠቐም

ዝተፈላለዩ ናይ ውቅር ፋይላት ኣብቲ `out` ማህደር ተዛመድቲ ማህደር ክፈጥሩ እዮም።

ንኣብነት `.i18n/htm/ol.yml` `out/ol` ዝብል ማህደር ክፈጥር እዩ።

`dev.yml` ን `ol.yml` ን እቶም ነባሪ ውቅርታት እዮም።

`dev` ኣሕጽሮተ ቃል `development` ኮይኑ፡ ነቲ ናይ ምዕባለ ሃዋህው ዘመልክት ኮይኑ፡ ንከባብያዊ ቅድመ-ምርኢት ዝጥቀመሉ፡ ከምኡ’ውን ነባሪ ናይ ውቅር ፋይል እዩ።
`ol` ኣሕጽሮተ ቃል ናይ `online` ኮይኑ፡ ነቲ ናይ ኦንላይን ሃዋህው ዘመልክት ኮይኑ፡ ንወግዓዊ ምፍናው ዝጥቀመሉ ኮይኑ፡ ንመውጽኢ መስመር ትእዛዝ መለክዒታት `-n` ክሳብ `npm` ኣብ እንጥቀመሉ እዋን እውን ነባሪ ናይ ውቅር ፋይል እዩ።

ካልኦት ናይ ውቅር ፋይላት እውን ክትፈጥር ትኽእል ኢኻ ኣብ መስመር ትእዛዝ `--htm_conf` ተጠቐም ክትጥቀመሉ እትደሊ ስም ውቅር ፋይል ንምግላጽ፤

ንኣብነት፥
```
i18n.site --htm_conf yourConfig --save
```

ኣብዚ `--save` ነቲ ናይ ምዕባለ ምውጻእ ስሪት ቁጽሪ ይውክል።

#### <a rel=id href="#npm" id="npm"></a> ትሕዝቶ ናብ npmjs.com ምሕታም

ትሕዝቶ [ናብ](/i18n.site/feature#ha) [npmjs.com](//npmjs.com)

##### npm login & ስደድ

`nodejs` ጽዓን ፣ ብ `npm login` ንእቶ ።

`md/.i18n/htm/ol.yml` ኣርትዖት `i18n.site` ኣብ `v: //unpkg.com/i18n.site` ናብ ናይ ገዛእ ርእስኻ `npm` ፓኬጅ ስም ቀይሮ።

በቃ ነቲ ዘይተታሕዘ ፓኬጅ ስም ኣብ [npmjs.com](//npmjs.com)

ኣብ ፓኬጅ `npm` ተመርኲስካ ክትዝርግሕ ከለኻ፡ ንቅድመ-ጥብቆ `v:` ዋጋ **`//unpkg.com/` ምጥቃምካ ኣረጋግጽ** `i18n.site` ኣብ ትሕቲ እዚ ቅድመ-ጥብቆ መንገዲ `/.v` ናይ መኽዘን ግዜ ብፍሉይ ኣመሓይሹዎ ኣሎ፡ ንሓደስቲ ምውጻእ ኣብ እዋኑ ምርኣይ።

ንምትርጓምን ንምሕታምን ኣብቲ `md` ማህደር `i18n.site --npm` ወይ `i18n.site -n` ኣካይድ።

ንምሕታም ቀጻሊ ናይ ውህደት ሃዋህው እንተተጠቒምካ `nodejs` ምትካል ኣየድልን እዩ።እቲ ዝኣተኻን ናይ ምሕታም ፍቓድ `~/.npmrc` ናብቲ ከባቢ ጥራይ ቅዳሕ።

ስም ፓኬጅ `v:` ኣብ `ol.yml` እንተ ኣመሓይሽካዮ፡ በጃኻ **መጀመርታ `.i18n/v/ol` ምድምሳስካን ድሕሪኡ ምሕታምካን ኣረጋግጽ** ።

##### ፕሮክሲ ሰርቨር ብ npm ዝተሓትመ

ኣብ መሬት ቻይና ዝርከቡ ተጠቀምቲ ናይ መርበብ ጸገም እንተጋጢምዎምን `npm` ፓኬጃት ክዝርግሑ እንተዘይክኢሎምን፡ ነቲ ፕሮክሲ ሰርቨር ንምውቃር ነቲ ናይ ከባቢ ተለዋዋጢ `https_proxy` ከቐምጥዎ ይኽእሉ።

ፕሮክሲ ሰርቨር ፖርትካ `7890` እዩ ኢልና ብምግማት፡ ክትጽሕፍ ትኽእል ኢኻ፤

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### ባዕሉ ዝተኣንገደ ትሕዝቶ

ነቲ ትሕዝቶ ባዕልኻ ከተአንግዶ እንተደሊኻ፡ መጀመርታ `md/.i18n/htm/ol.yml` ኣርትዕ እሞ `v: //unpkg.com/i18n.site` ናብ ቅድመ-ጥብቆ URLካ ቀይሮ፡ ከም `v: //i18n-v.xxx.com` ።

ኣብቲ `md` ማህደር ኣቲኻ ንጉየ

```
i18n.site --htm_conf ol --save
```

ወይ ኣሕጽሮተ ቃል

```
i18n.site -c ol -s
```

ድሕሪኡ፡ ነቲ ኣብ `md/out/ol/v` ማህደር ዘሎ ትሕዝቶ ናብቲ ኣብ `v:` ዝተቐመጠ ናይ URL ቅድመ-ጥብቆ መንገዲ ኣወሃህቦ።

ኣብ መወዳእታ **፡ ናይቲ ብ `/.v` ክሳብ `1s` ዝውዳእ መንገዲ ናይ መኽዘን ግዜ ኣወሃህቦ** ፣ እንተዘይኮይኑ እቲ ሓድሽ ዝተዘርግሐ ትሕዝቶ ብቕጽበት ክረኽቦ ኣይክእልን።

ንኻልኦት መንገድታት ዝኸውን ናይ መኽዘን ግዜ ናብ ሓደ ዓመት ወይ ልዕሊኡ ክቕየር ይኽእል እዩ ዘየድሊ ሕቶታት ንምንካይ።

##### ትሕዝቶ ናብ s3 ኣአንግድ

ትሕዝቶ ባዕልኻ ንምእንጋድ፡ ብዘይካ ናይ ገዛእ ርእስኻ ሰርቨር ምጥቃም፡ ካልእ `CDN` ኣማራጺ `S3` +

ናብ `S3` `S3` ንምእታው [rclone](https://rclone.org)

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

`CDN` ምውቃር ናይቲ ብ `/.v` ዝውዳእ መንገዲ ናይ መኽዘን ግዜ `1s` ክኸውን ኣይትረስዕ፣ እንተዘይኮይኑ እቲ ሓድሽ ዝተዘርግሐ ትሕዝቶ ብቕጽበት ክረኽቦ ኣይክእልን።

### መርበብ ሓበሬታ ምሕታም

እቲ ዌብሳይት ኣብ ዝኾነ ቦታ ክዝርጋሕ ይኽእል እዩ [github page](https://pages.github.com) ከምኡ ውን [cloudflare page](https://pages.cloudflare.com) ጽቡቓት ምርጫታት እዮም።

እቲ መርበብ ሓበሬታ ናይ [ሓደ ገጽ መተግበሪ](https://developer.mozilla.org/docs/Glossary/SPA) ስነ ህንጻ ስለ ዝጥቀም `. ` ክሳብ `index.html` ዘይሓዙ መንገድታት URL ዳግማይ ምጽሓፍ ኣይትረስዕ።

እቲ ናይ ዌብሳይት መእተዊ ገጽ ሓንሳብ ጥራይ እዩ ክዝርጋሕ ዘለዎ፣ ንቐጻሊ ትሕዝቶ ምዕባለታት ድማ ነቲ ናይ ዌብሳይት መእተዊ ገጽ ዳግማይ ምዝርጋሕ ኣየድልን።

#### ኣብ ገጽ github ምዝርጋሕ

መጀመርታ [ኣብዚ ጠውቑ ትካል github](https://github.com/account/organizations/new?plan=free) እዚ ዝስዕብ ስም ትካል `i18n-demo` ከም ኣብነት እዩ።

ድሕሪኡ ኣብ ትሕቲ እዚ ትካል መኽዘን `i18n-demo.github.io` ፍጠር (በጃኻ `i18n-demo` በቲ ዝፈጠርካዮ ስም ትካል ተክኦ)፤

![](https://p.3ti.site/1721098657.avif)

ኣብ ዝሓለፈ ጽሑፍ ትሕዝቶ ኣብ እትዝርግሓሉ እዋን `out/ol/htm` ተፈጢሩ ኣሎ በጃኹም ነዚ ማህደር ኣቲኹም ንጉየዩ :

```
ln -s index.html 404.html
```


`github page` ዳግማይ ምጽሓፍ መንገዲ URL ስለዘይድግፍ፡ ኣብ ክንድኡ `404.html` ይጥቀም።

ድሕሪኡ ኣብ `htm` ማህደር ነዚ ዝስዕብ ትእዛዝ ኣካይድ ( `i18n-demo/i18n-demo.github.io.git` ብናይ ገዛእ ርእስኻ መኽዘን ኣድራሻ ክትትክኦ ኣይትረስዕ) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

ነቲ ኮድ ድሕሪ ምድፋእካ፡ ቅድሚ ምብጻሕካ ምዝርጋሕ `github page` ብዓወት ክሰርሕ ተጸበ (ከምቲ ኣብ ታሕቲ ዘሎ)።

<img src="//p.3ti.site/1721116586.avif" width="350px">

ንዲሞ ገጽ ኣብዚ ርአ፤

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### ኣብ ገጽ ክላውድፍሌር ምዝርጋሕ

[cloudflare page](//pages.cloudflare.com) `github page`

ምውፋር `cloudflare page` መብዛሕትኡ ግዜ ኣብቲ ኣብ ላዕሊ ዘሎ ምውፋር `github page` ዝተመርኮሰ እዩ።

ፕሮጀክት ፈጢርና ኣብ ላዕሊ ዘሎ `i18n-demo.github.io` መኽዘን ምእሳር።

እቲ መስርሕ ኣብዚ ኣብ ታሕቲ ዘሎ ስእሊ ተገሊጹ ኣሎ፤
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

ንውድብ `i18n-demo` ንምእታው በጃኹም `Add Account` ጠውቑ ።

ናይ ካልእ ትካል መኽዘን ኣሲርካዮ እንተኾንካ፡ ቅድሚ እቲ ሓድሽ ትካል ምርኣይ ክልተ ግዜ ፍቓድ ንምሃብ `Add Account` ክልተ ግዜ ጠውቕ ከድልየካ ይኽእል እዩ።

![](https://p.3ti.site/1721118306.avif)

ቀጺልና መኽዘን `i18n-demo.github.io` ንመርጽ፡ ድሕሪኡ `Begin setup` ጠውቕ፡ ንቐጻሊ ስጉምትታት ድማ ነባሪ ክብርታት ንጠቐም።

![](https://p.3ti.site/1721118490.avif)

ንመጀመርታ ግዜ ድሕሪ ምእሳርካ፡ ቅድሚ ክትረኽቦ ምኽኣልካ ገለ ደቓይቕ ክትጽበ ኣለካ።

ድሕሪ ምዝርጋሕ፡ ብሕታዊ ስም ዓውዲ ክትኣስሮ ትኽእል ኢኻ።

![](https://p.3ti.site/1721119459.avif)

ድሕሪ ምእሳር ናይቲ ብሕታዊ ስም ዓውዲ፡ በጃኻ ናብቲ ስም ዓውዲ ብምኻድ ናይቲ ሓደ ገጽ ዘለዎ መተግበሪ መንገዲ ዳግመ-ጽሑፍ ኣወሃህዶ፡ ከምቲ ኣብ ታሕቲ ዘሎ፤

![](https://p.3ti.site/1721119320.avif)

ኣብዚ ኣብ ላዕሊ ዘሎ ስእሊ ዘሎ `i18n.site` ከምዚ ዝስዕብ እዩ።

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

ብተወሳኺ፡ በጃኹም ከምቲ ኣብ ታሕቲ ዘሎ ሕግታት መኽዘን ኣወሃሂድኩም፡ ንውሓት ግዜ መኽዘን ናብ ሓደ ወርሒ ኣቐምጥዎ።

![](https://p.3ti.site/1721125111.avif)

በጃኹም ኣብ ካልኣይ ደረጃ ኣብዚ ኣብ ላዕሊ ዘሎ ስእሊ ዘሎ ምትእስሳር ስም ዓውዲ ናብቲ ዝኣሰርኩሞ ስም ዓውዲ ቀይርዎ።

#### ኣብ መሬት ቻይና ንዝግበር ምዝርጋሕ ዌብሳይት ምምሕያሽ

ኣብ ኔትወርክ ሃዋህው መሬት ቻይና ዝሓሸ ናይ ተበጻሕነት ኣፈጻጽማ ክትረኽቡ ምስ እትደልዩ፡ በጃኹም መጀመርታ [ናይ ዶሜይን ስም ምዝገባ ግበሩ](//beian.aliyun.com) ።

ድሕሪኡ፡ ኣብ መሬት + ዝርከቡ ሸየጥቲ ደበና መኽዘን ነገራት ተጠቐም `CDN` ነዚ ዝስዕብ ትሕዝቶ ኣዋፍር `out/ol/htm` .

ንሓደ ገጽ ዘለዎም መተግበሪታት ንምትዕጽጻፍ ነቲ መንገዲ ዳግማይ ንምጽሓፍ edge computing ክትጥቀም ትኽእል ኢኻ ንኣብነት [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) ከምዚ ጌርካ ክውነን ይኽእል።

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

ምኽንያቱ መዝገብ `MX` ን መዝገብ `CNAME` ን ብሓባር ክነብሩ ስለዘይክእሉ፡ ኣብ ሓደ እዋን ናይ ዶሜይን ስም ኢመይላት ክትቅበል እንተደሊኻ፡ ምስቲ [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) ክትተሓባበር ኣለካ ናብ ደረጃ `CNAME` ናብ መዝገብ `A` ።

ብተወሳኺ፡ ኣብ መሬት ቻይና ንዝርከቡ ሸየጥቲ ደበና ዝኽፈል ክፍሊት ትራፊክ ብተዛማዲ [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) ስለዝኾነ፡ ወጻኢታት ከተመሓይሽ እንተደሊኻ፡ ንኽትዕወት [ናይ Huawei Cloud DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) traffic diversion──ትራፊክ መስመር ኣብ መሬት ቻይና Baidu Cloud `CDN` , ዓለምለኻዊ ትራፊክ ይኸይድ cloudflare .

![](https://p.3ti.site/1721119788.avif)

እዞም ናይ ምዝርጋሕ ምምሕያሽ መፍትሒታት ዝያዳ ዝተሓላለኹ ኮይኖም ኣብ መጻኢ ኣብ ዝተፈላለየ ምዕራፋት ክተኣታተዉ እዮም።

#### ሓፈሻዊ ኣንፈት ስም ዓውዲ

ንሓደ ዌብሳይት ከም ቀንዲ ዌብሳይትካ ንምፍጣር `i18n.site` እንተተጠቒምካ፡ መብዛሕትኡ ግዜ ፓን-ዶመይን ሪዳይረክሽን ክትውቅሮ ኣለካ፡ ማለት ንመእተዊ ናብ `*.xxx.com` ( `www.xxx.com` ሓዊሱ) ናብ `xxx.com` ምቕያር የድልየካ።

እዚ ጠለብ ብሓገዝ ዓሊባባ ክላውድ `CDN` `EdgeScript` ( [ትግርኛ ሰነድ](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [ቻይናዊ ሰነድ](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ) ክዕወት ይከኣል ።

ኣብ [ዓሊባባ CDN](https://cdn.console.aliyun.com/domain/list) ስም ዶሜይን ወሲኽና ኣብ ዓሊባባ ክላውድ `CDN` `*.xxx.com` `CNAME` ዝብል ስም ዶሜይን ኣመልክት !

![](https://p.3ti.site/1721122000.avif)

ንኣብነት ኣብዚ ኣብ ላዕሊ ዘሎ ስእሊ ናይ `*.i18n.site` ናይ ፓን-ዶመይን ስም ዳግመ-ኣንፈት ውቅር ከምዚ ዝስዕብ ይመስል፤

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

#### ምስ nginx ምውፋር

በጃኹም ኣብ `server` ሕጡበ- `/root/i18n/md/out/ol/htm` ናይ nginx `out/ol/htm`

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

#### `public`

ስታትቲክ ፋይላት ናይቲ መርበብ ሓበሬታ፡ ከም `favicon.ico` , `robots.txt` , ወዘተ።

ኣብዚ ዘለዉ ናይ ምልክት ፋይላት ብ [realfavicongenerator.net](https://realfavicongenerator.net)

#### `.i18n`

ኣብ ትሕቲ `.i18n` ማህደር ናይ `i18n.site` ናይ ውቅር ፋይላት፣ ናይ ትርጉም መኽዘን ወዘተ ኣለዉ።ንዝርዝር ኣብ ዝቕጽል ምዕራፍ ["ውቅር"](/i18n.site/conf) ርአ።

#### `en`

ምንጪ ቋንቋ ማህደር፣ ምስ `en` ካብ `fromTo` ካብ `.i18n/conf.yml` ናይ ውቅር ፋይል ዝሰማማዕ

```yaml
i18n:
  fromTo:
    en: zh
```

በጃኹም ኣብ ውቅር ትርጉም ተወከሱ [i18](/i18/use)