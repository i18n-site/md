# සෙවුම් යන්ත්ර ප්රශස්තකරණය (SEO)

## මූලධර්මය

සෙවුම් සුචිගත කිරීම පහසු කිරීම සඳහා `i18n.site` නැවුම් නොවන තනි පිටු ගෘහ නිර්මාණ ශිල්පයක් අනුගමනය කරයි, බඩගා යන්නන්ට බඩගා යාමට වෙනම ස්ථිතික පිටුවක් සහ `sitemap.xml` ජනනය කෙරේ.

සෙවුම් යන්ත්ර ක්රෝලර් විසින් ප්රවේශ ඉල්ලීමේ `User-Agent` භාවිතා කරන විට, ඉල්ලීම `302` හරහා ස්ථිතික පිටුවට හරවා යවනු ලැබේ.

ස්ථිතික පිටු මත, මෙම පිටුවේ විවිධ භාෂා අනුවාද සඳහා සබැඳි දැක්වීමට `link` භාවිතා කරන්න, වැනි :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## දේශීය nginx වින්යාසය

ආදර්ශන ව්යාපෘතියේ `.i18n/htm/main.yml` වින්යාස ගොනුව උදාහරණයක් ලෙස ගන්න

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

කරුණාකර පළමුව ඉහත `host:` හි අගය `xxx.com` වැනි ඔබේ වසම් නාමයට වෙනස් කරන්න.

එවිට, `i18n.site -n` , ස්ථිතික පිටුව `out/main/htm` නාමාවලිය තුළ ජනනය වේ.

ඇත්ත වශයෙන්ම, ඔබට `.i18n/htm/dist.package.json` සහ `.i18n/htm/dist.yml` සෑදීමට `main` හි වින්යාසය වෙත යොමු කිරීම වැනි වෙනත් වින්යාස ගොනු ද සක්රීය කළ හැක.

ඉන්පසු `i18n.site -n -c dist` ධාවනය කරන්න එවිට ස්ථිතික පිටුව `out/dist/htm` දක්වා ජනනය වේ.

පහත වින්යාසය වෙත යොමු කිරීමෙන් `nginx` සැකසිය හැක.

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# සේවාදායක සේවක ස්ක්රිප්ට් වැඩි වේලාවක් හැඹිලිගත නොකරන්න
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# වෙනත් ස්ථිතික සම්පත් සඳහා දිගු හැඹිලි කාලය සකසන්න
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# මුල් පිටු ප්රවේශය ලෙස crawler භාවිතා කරන ස්ථිතික ගොනුව සකසන්න
location = / {
  # $botLang හිස් නොවේ නම්, එයින් අදහස් කරන්නේ ක්රෝලර් ප්රවේශය සහ සැකසූ භාෂා මාර්ගයට අනුව යළි-යොමුවීම් ය
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# තනි පිටු යෙදුම් වින්යාසය
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## ස්ථිතික ගොනු උඩුගත කිරීම සඳහා වස්තු ගබඩාව වින්යාස කරන්න

ස්ථිතික ගොනු දේශීයව ජනනය කළ හැකි නමුත් වඩාත් පොදු ප්රවේශයක් වන්නේ ඒවා වස්තු ගබඩාවට උඩුගත කිරීමයි.

ඉහත වින්යාස කර ඇති `out` ට වෙනස් කරන්න :

```
out:
  - s3
```

ඉන්පසු, `~/.config/i18n.site.yml` සංස්කරණය කර පහත වින්යාසය එක් කරන්න :

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

වින්යාසය තුළ, කරුණාකර `i18n.site` `.i18n/htm/main.yml` හි `host:` අගයට වෙනස් කරන්න, බහු වස්තු ගබඩා `s3` යටතේ වින්යාස කළ හැකි අතර `region` ක්ෂේත්රය විකල්ප වේ (බොහෝ වස්තු ගබඩාවලට මෙම ක්ෂේත්රය සැකසීමට අවශ්ය නොවේ).

ඉන්පසු ව්යාපෘතිය නැවත ප්රකාශ කිරීමට `i18n.site -n` ධාවනය කරන්න.

ඔබ `~/.config/i18n.site.yml` වෙනස් කර නැවත උඩුගත කිරීමට අවශ්ය නම්, කරුණාකර උඩුගත හැඹිලිය ඉවත් කිරීමට ව්යාපෘති මූල නාමාවලියෙහි පහත විධානය භාවිතා කරන්න :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## cloudflare වින්යාසය

ඩොමේන් නාමය සත්කාරකත්වය [cloudflare](//www.cloudflare.com)

### පරිවර්තන නීති

පහත දැක්වෙන පරිදි පරිවර්තන රීති එකතු කරන්න:

![](//p.3ti.site/1725436822.avif)

රීති කේතය පහත පරිදි වේ, කරුණාකර "i18n.site" කේතය ඔබගේ වසම් නාමයට වෙනස් කරන්න:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### හැඹිලි නීති

පහත පරිදි හැඹිලි නීති එක් කරන්න:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### යළි-යොමු කිරීමේ නීති

ප්රතියොමු රීති පහත පරිදි සකසන්න, කරුණාකර "i18n.site" කේතය ඔබගේ වසම් නාමයට වෙනස් කරන්න

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

`URL redirect` ගතික යළි-යොමුවීම් තෝරන්න, කරුණාකර යළි-යොමු කිරීමේ මාර්ගය `concat("/en",http.request.uri.path,".htm")` හි `/en` ඔබට සෙවුම් යන්ත්ර ඇතුළත් කිරීමට අවශ්ය පෙරනිමි භාෂාවට වෙනස් කරන්න.

## Baidu බුද්ධිමත් වලාකුළු වින්යාසය

ඔබට චීනයේ ප්රධාන භූමියට සේවා සැපයීමට අවශ්ය නම්, ඔබට [Baidu Smart Cloud](//cloud.baidu.com) භාවිත කළ හැක.

Baidu Object Storage වෙත දත්ත උඩුගත කර Baidu අන්තර්ගත බෙදාහැරීමේ ජාලයට බැඳී ඇත.

ඉන්පසු පහත ආකාරයට [EdgeJS](//console.bce.baidu.com/cdn/#/cdn/ejs/list)

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
  // ප්රතිචාර ශීර්ෂ නිදොස් කිරීමේ ප්රතිදානයට සැකසිය හැක, එනම් out.XXX = 'MSG';
})
```

`Debug` ක්ලික් කරන්න, ඉන්පසු මුළු ජාලයටම ප්රකාශ කරන්න ක්ලික් කරන්න.

![](//p.3ti.site/1725437754.avif)

## උසස් භාවිතය: කලාපීය විභේදනය මත පදනම්ව ගමනාගමනය බෙදා හැරීම

ඔබට චීනයේ ප්රධාන භූමියේ සේවා සැපයීමට අවශ්ය නම් සහ නොමිලේ ජාත්යන්තර ගමනාගමනය `cloudflare` අවශ්ය නම්, ඔබට කලාපීය විභේදනය සමඟ `DNS` භාවිතා කළ හැක.

උදාහරණයක් ලෙස `cloudflare` [Huawei Cloud DNS](https://www.huaweicloud.com)

`cloudflare` හි වින්යාසය තුළ බොහෝ අන්තරායන් ඇත. මෙහි සටහන් කළ යුතු කරුණු කිහිපයක් තිබේ :

### වසම් නාමය වෙනත් `DNS` හි සංග්රහ කර ඇත, `cloudflare` භාවිතා කරන්නේ කෙසේද

පළමුව අත්තනෝමතික වසම් නාමයක් `cloudflare` ට බැඳ, පසුව මෙම වසම් නාමයට ප්රධාන වසම් නාමය සම්බන්ධ කිරීමට `SSL/TLS` → අභිරුචි ඩොමේන් නාමය භාවිතා කරන්න.

![](https://p.3ti.site/1725438658.avif)

### අභිරුචි ඩොමේන් නාමයක් හරහා `cloudflare R2` වෙත ප්රවේශ විය නොහැක

බිල්ට් `cloudflare` ඉන් වස්තු ආචයනය `R2` අභිරුචිකරණය කළ වසම් නාමයකින් ප්රවේශ විය නොහැකි නිසා, ස්ථිතික ගොනු තැබීමට තුන්වන පාර්ශ්ව වස්තු ගබඩාවක් භාවිතා කිරීමට අවශ්ය වේ.

`cloudflare` හි ගබඩා කළ යුතු තෙවන පාර්ශවීය වස්තු බැඳිය යුතු ආකාරය නිරූපණය කිරීමට [backblaze.com](https://www.backblaze.com) උදාහරණයක් ලෙස ගනිමු.

`backblaze.com` ට බාල්දියක් සාදන්න, ඕනෑම ගොනුවක් උඩුගත කරන්න, ගොනුව බ්රවුස් කිරීමට ක්ලික් කරන්න, සහ මෙහි `f003.backblazeb2.com` වන `Friendly URL` හි ඩොමේන් නාමය ලබා ගන්න.

![](//p.3ti.site/1725440783.avif)

වසම් නාමය `cloudflare` ට `CNAME` සිට `f003.backblazeb2.com` දක්වා වෙනස් කර ප්රොක්සි සක්රීය කරන්න.

![](//p.3ti.site/1725440896.avif)

`cloudflare` න් `SSL` → සංකේතාංකන මාදිලිය වෙනස් කරන්න, `Full` ලෙස සකසන්න

![](//p.3ti.site/1725438572.avif)

පහත දැක්වෙන පරිදි පරිවර්තන රීතිය එක් කරන්න, එය මුලින්ම තබන්න (පළමු එකට අඩුම ප්රමුඛතාවය ඇත):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` ගතික තෝරන්න සහ `your_bucketname` in `concat("/file/your_bucketname",http.request.uri.path)` ඔබේ බාල්දියේ නමට වෙනස් කරන්න.

මීට අමතරව, ඉහත `cloudflare` පරිවර්තන රීතියේ, `index.html` `file/your_bucketname/index.html` ලෙස වෙනස් කර ඇති අතර, අනෙකුත් වින්යාසයන් එලෙසම පවතී.

![](//p.3ti.site/1725441384.avif)