# ምምሕያሽ ሞተር ምድላይ (SEO)

## መትከል ምዃኑ’ዩ።

`i18n.site` ዘይሕደስ ንጽል ገጽ ስነ ህንጻ ይቕበል ንፍተሻ ኢንዴክስ ንምምችቻው፡ ንሰራሕተኛታት ንኽስሕቡ ዝተፈለየ ስታትቲክ ገጽን `sitemap.xml` ን ክፍጠር እዩ።

`User-Agent` ናይቲ ናይ መእተዊ ሕቶ ብናይ ምድላይ ሞተር ክራውለር ምስ ዝጥቀመሉ፡ እቲ ሕቶ ብመንገዲ `302` ናብቲ ስታትቲክ ገጽ ይቕየር።

ኣብ ስቴቲክ ገጻት `link` ተጠቒምካ ናብ ዝተፈላለዩ ቋንቋታት ስሪት ናይዚ ገጽ ዝወስድ መላግቦታት ንምምልካት፡ ከም :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## ናይ ከባቢ nginx ውቅር

ኣብቲ ናይ ዲሞ ፕሮጀክት ዘሎ `.i18n/htm/main.yml` ናይ ውቅር ፋይል ከም ኣብነት ንውሰድ

```yml
host: i18n-demo.github.io
seo: true
out:
  - fs

pkg:
  i: i18n.site
  md: i18n.site

cdn:
  v:
  jsd:
```

በጃኻ መጀመርታ ነቲ ኣብ ላዕሊ ዘሎ ዋጋ `host:` ናብ ስም ዓውዲኻ ኣዐርዮ፣ ከም `xxx.com` ።

ድሕሪኡ `i18n.site -n` ፡ እቲ ስታትቲክ ገጽ ኣብቲ `out/main/htm` ማህደር ክፍጠር እዩ።

ብርግጽ ካልኦት ናይ ውቅር ፋይላት እውን ከተኽእሎም ትኽእል ኢኻ፣ ከም መጀመርታ ንውቅር `main` ብምውካስ `.i18n/htm/dist.package.json` ን `.i18n/htm/dist.yml` ን ምፍጣር።

ድሕሪኡ `i18n.site -n -c dist` ምጉያይ ምእንቲ እቲ ስታትቲክ ገጽ ናብ `out/dist/htm` ክፍጠር።

`nginx` ኣብ ታሕቲ ዘሎ ውቅር ብምውካስ ክትገብሮ ትኽእል ኢኻ።

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# ስክሪፕትታት ሰራሕተኛ ሰርቨር ንነዊሕ እዋን ኣይትዕቅቦም
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# ንኻልኦት ስታትቲክ ጸጋታት ዝነውሐ ናይ መኽዘን ግዜታት ኣቐምጥ
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# እቲ ክራውለር ኣየናይ ስታትቲክ ፋይል ከም መእተዊ ገጽ ከም ዝጥቀም ኣቐምጥ
location = / {
  # $botLang
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# ናይ ሓደ ገጽ መተግበሪ ውቅር
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## ስታትቲክ ፋይላት ንምስቃል ዝኸውን መኽዘን ነገራት ምውቃር

ስታትቲክ ፋይላት ብኸባቢ ክፈጥሩ ይኽእሉ እዮም፣ ዝያዳ ልሙድ ኣገባብ ግን ናብ መኽዘን ነገራት ምጽዓን እዩ።

ኣብ ላዕሊ ዝተዋቕረ `out` ናብ :

```
out:
  - s3
```

ድሕሪኡ `~/.config/i18n.site.yml` ኣርቲዕና ነዚ ዝስዕብ ውቅር ወስኸሉ :

```yml
site:
  i18n.site:
    s3:
      - endpoint: s3.eu-central-003.backblazeb2.com
        ak: # access key
        sk: # secret key
        bucket: # bucket name
        # region:
```

ኣብቲ ውቅር፡ በጃኻ `i18n.site` ናብ ዋጋ `host:` ኣብ `.i18n/htm/main.yml` ቀይሮ፡ ብዙሓት መኽዘናት ነገራት ኣብ ትሕቲ `s3` ክውነኑ ይኽእሉ፡ እቲ `region` ዓውዲ ድማ ኣማራጺ እዩ (ብዙሓት መኽዘናት ነገራት ነዚ ዓውዲ ምቕማጥ ኣየድልዮምን)።

ድሕሪኡ ነቲ ፕሮጀክት ዳግማይ ንምሕታም `i18n.site -n` ምጉያይ።

`~/.config/i18n.site.yml` ኣመሓይሽካ ዳግማይ ክትሰቕሎ እንተደሊኻ፡ በጃኻ ኣብቲ ናይ ፕሮጀክት ሱር ማህደር ነዚ ዝስዕብ ትእዛዝ ተጠቐም ነቲ ናይ ምጽዓን መኽዘን ኣጽርዮ :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## ውቅር ክላውድፍሌር

ዶሜይን ስም ናብ [cloudflare](//www.cloudflare.com)

### ሕግታት ምልዋጥ

ከምቲ ኣብ ታሕቲ ዘሎ ናይ ምቕያር ሕግታት ወስኹ፤

![](//p.3ti.site/1725436822.avif)

እቲ ሕጊ ኮድ ከምዚ ዝስዕብ እዩ፣ በጃኹም ነቲ ኮድ "i18n.site" ናብ ስም ዶሜይንኩም ኣዐርይዎ፤

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### ሕግታት ምዕቃብ

ሕግታት ካሸ ከምዚ ዝስዕብ ምውሳኽ፤

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### ሕግታት ዳግመ-ኣንፈት

ሕግታት ኣንፈት ምቕያር ከምዚ ዝስዕብ ኣቐምጦ፣ በጃኻ ነቲ ኮድ "i18n.site" ናብ ስም ዓውዲኻ ኣዐርዮ

![](//p.3ti.site/1725437096.avif)

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
) and (
http.user_agent wildcard "*bot*" or
http.user_agent wildcard "*spider*" or
http.user_agent wildcard "*facebookexternalhit*" or
http.user_agent wildcard "*slurp*" or
http.user_agent wildcard "curl*" or
http.user_agent wildcard "*InspectionTool*"
)
```

`URL redirect` ዳይናሚክ ሪዳይረክሽን ምረጽ፣ በጃኻ ኣብ መንገዲ ሪዳይረክሽን `concat("/en",http.request.uri.path,".htm")` `/en` ናብቲ ሞተር ምድላይ ከካትትዎ እትደሊ ነባሪ ቋንቋ ኣዐርዮ።

## ባይዱ በሊሕ ደበና ውቅር

ንመሬት ቻይና ኣገልግሎት ክትህቡ እንተድኣ ኣድልዩኩም [፡ Baidu Smart Cloud](//cloud.baidu.com) ክትጥቀሙ ትኽእሉ ኢኹም።

ዳታ ናብ ባይዱ ኦብጀክት ስቶሬጅ ይስቀል እሞ ናብ ባይዱ ኮንትንት ዲስትሪብዩሽን ኔትወርክ ይተኣሳሰር።

ድሕሪኡ ኣብ [EdgeJS edge service](//console.bce.baidu.com/cdn/#/cdn/ejs/list) ከምዚ ዝስዕብ ስክሪፕት ንፍጠር

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
  // ርእስታት መልሲ ንውጽኢት ምእራም ክቕመጡ ይኽእሉ፣ ከም out.XXX = 'MSG';
})
```

`Debug` ጠውቕ፣ ድሕሪኡ ናብ ምሉእ መርበብ ሓበሬታ ምሕታም ጠውቕ።

![](//p.3ti.site/1725437754.avif)

## ምዕቡል ኣጠቓቕማ፦ ኣብ ዞባዊ ፍታሕ መሰረት ትራፊክ ምክፍፋል

ኣብ መሬት ቻይና ኣገልግሎት ክትህቡ ምስ እትደልዩን ከምኡ ውን `cloudflare` ነጻ ኣህጉራዊ ትራፊክ እንተደሊኹምን `DNS` ምስ ዞባዊ ውሳነ ክትጥቀሙ ትኽእሉ ኢኹም።

ንኣብነት [፡ ሁዋዌ DNS](https://www.huaweicloud.com) `cloudflare`

ኣብ ውቅር `cloudflare` ብዙሕ መጻወድያታት ኣሎ ገለ ውሑዳት ነጥብታት ኣብዚ ኣለዉ :

### እቲ ዶሜይን ስም ኣብ ካልእ `DNS` , ከመይ ጌርና ንጥቀመሉ `cloudflare` ይእንገድ

መጀመርታ ንሓደ ፍቓደኛ ስም ዓውዲ ናብ `cloudflare` ምእሳር፣ ድሕሪኡ `SSL/TLS` → ብሕታዊ ስም ዓውዲ ተጠቒምካ ነቲ ቀንዲ ስም ዓውዲ ምስዚ ስም ዓውዲ ከተተሓሕዞ።

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` ብብሕታዊ ስም ዓውዲ ክረኽቦ ኣይክእልን እዩ።

እቲ ኣብ `cloudflare` ዝተሃንጸ መኽዘን ነገራት `R2` ብዝተዳለወ ስም ዓውዲ ክረኽቦ ስለዘይክእል፡ ሳልሳይ ወገን መኽዘን ነገራት ስታትቲክ ፋይላት ንምቕማጥ ምጥቃም የድሊ።

`cloudflare` ን [backblaze.com](https://www.backblaze.com)

ኣብ `backblaze.com` ባልጃ ንፍጠር፣ ዝኾነ ፋይል ስቐል፣ ነቲ ፋይል ንምድህሳስ ጠውቕ፣ ኣብዚ ድማ `Friendly URL` ዝብል ናይ ዶሜይን ስም ውሰድ፣ እዚ ድማ `f003.backblazeb2.com` እዩ።

![](//p.3ti.site/1725440783.avif)

ስም ዓውዲ ካብ `CNAME` ናብ `f003.backblazeb2.com` ኣብ `cloudflare` ቀይርካ ነቲ ፕሮክሲ ኣኽእሎ።

![](//p.3ti.site/1725440896.avif)

`cloudflare` ካብ `SSL` → ናይ ምስጢራዊ ሞድ ኣዐርዩ፣ ናብ `Full` ኣቐምጥ

![](//p.3ti.site/1725438572.avif)

ከምቲ ኣብ ታሕቲ ዘሎ ናይ ምቕያር ሕጊ ወስኹሉ፣ ቀዳምነት ኣቐምጥዎ (እቲ ቀዳማይ ዝወሓደ ቀዳምነት ኣለዎ)፤

![](//p.3ti.site/1725443232.avif)

`Rewrite to` ዳይናሚክ ምረጽ እሞ `your_bucketname` ኣብ `concat("/file/your_bucketname",http.request.uri.path)` ናብ ስም ባልጃኻ ኣዐርዮ።

ብተወሳኺ ኣብዚ ኣብ ላዕሊ ዘሎ ሕጊ ምቕያር `cloudflare` `index.html` ናብ `file/your_bucketname/index.html` ይቕየር፣ ካልኦት ውቅርታት ድማ ከም ቀደሞም ይቕጽሉ።

![](//p.3ti.site/1725441384.avif)