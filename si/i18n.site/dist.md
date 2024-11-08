# යෙදවීම සහ මාර්ගගතව

`i18n.site` [තනි පිටු යෙදුම්](https://developer.mozilla.org/docs/Glossary/SPA) ගෘහ නිර්මාණ ශිල්පයක් අනුගමනය කරයි, සහ වෙබ් අඩවි පිවිසුම් පිටුව සහ වෙබ් අඩවි අන්තර්ගතය ස්වාධීනව යොදවනු ලැබේ.

ඉහත පරිවර්තනය ක්රියාත්මක කිරීමෙන් පසු, නාමාවලිය `htm` සහ `v` `md/out/dev` නාමාවලිය යටතේ ජනනය වේ.

මෙහි `dev` යන්නෙන් අදහස් වන්නේ එය `.i18n/htm/dev.yml` වින්යාස ගොනුව මත පදනම්ව ගොඩනගා ඇති බවයි.

`dev` නාමාවලිය :

`htm` නාමාවලිය යනු වෙබ් අඩවියට ඇතුල් වන පිටුවයි.

`v` නාමාවලියෙහි අනුවාද අංක සහිත වෙබ් අඩවි අන්තර්ගතය අඩංගු වේ.

දේශීය පෙරදසුන අනුවාද අංකය ගැන තැකීමක් නොකරන අතර සියලුම ගොනු `out/dev/v/0.1.0` නාමාවලියට පිටපත් කරයි.

නිල නිකුතුව සඳහා, වෙනස් කළ ගොනු නව අනුවාද අංක නාමාවලියට පිටපත් කරනු ලැබේ.

## `-c` සමඟ වින්යාස ගොනුව සඳහන් කරන්න

විවිධ වින්යාස ගොනු `out` නාමාවලියෙහි අනුරූප නාමාවලි සාදනු ඇත.

උදාහරණයක් ලෙස, `.i18n/htm/main.yml` `out/main` නාමාවලිය සාදනු ඇත.

`dev.yml` සහ `main.yml` යනු පෙරනිමි සැකසුම් වේ.

`dev` යනු `development` හි කෙටි යෙදුමකි, එය දේශීය පෙරදසුන සඳහා භාවිතා කරන සංවර්ධන පරිසරය දක්වයි, සහ පෙරනිමි වින්යාස ගොනුව ද වේ.
`ol` යනු `online` හි සංක්ෂිප්තයයි, එය නිල නිකුතුව සඳහා භාවිතා කරන සබැඳි පරිසරය පෙන්නුම් කරයි, එය විධාන රේඛා `-n` සිට `npm` දක්වා මුදා හැරීමට භාවිතා කරන විට පෙරනිමි වින්යාස ගොනුව වේ.

ඔබට භාවිතා කළ යුතු වින්යාස ගොනු නාමය සඳහන් කිරීමට විධාන රේඛාවේ `--htm_conf` භාවිතා කරන්න.

උදාහරණ වශයෙන්:
```
i18n.site --htm_conf dist --save
```

මෙහි `--save` යාවත්කාලීන නිකුත් කිරීමේ අනුවාද අංකය නියෝජනය කරයි.

## <a rel=id href="#npm" id="npm"></a> npmjs.com වෙත අන්තර්ගතය ප්රකාශ කරන්න

වෙත අන්තර්ගතය ප්රකාශ කිරීම නිර්දේශිත පෙරනිමි විසඳුමයි ( [ඉදිරිපස ඉහළ ලබා ගත හැකි බව](/i18n.site/feature#ha) [npmjs.com](//npmjs.com) ).

### npm වන්න & පළ කරන්න

`nodejs` ස්ථාපනය කරන්න, `npm login` සමඟ ලොග් වන්න.

`md/.i18n/htm/main.yml` සංස්කරණය කර [npmjs.com](//npmjs.com) `npm` පැකේජ නාමය ලෙස [`md:`](//github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/main.yml#L7) `YOUR_NPM_PACKAGE` වෙනස් කරන්න.

ඉන්පසු `md/.i18n/htm/main.package.json` වෙනස් කරන්න

පරිවර්තනය කිරීමට සහ ප්රකාශ කිරීමට `md` නාමාවලියෙහි `i18n.site --npm` හෝ `i18n.site -n` ධාවනය කරන්න.

ඔබ ප්රකාශනය කිරීමට අඛණ්ඩ ඒකාබද්ධ පරිසරයක් භාවිතා කරන්නේ නම්, `nodejs` ස්ථාපනය කිරීමට අවශ්ය නොවේ. ලොග් වී ඇති සහ ප්රකාශන අවසර `~/.npmrc` පරිසරයට පිටපත් කරන්න.

ඔබ `v:` හි `main.yml` හි පැකේජ නාමය වෙනස් කරන්නේ නම්, කරුණාකර **පළමුව `.i18n/v/main` මකා පසුව එය ප්රකාශ කිරීමට වග බලා ගන්න** .

#### ප්රොක්සි සේවාදායකය npm විසින් ප්රකාශනය කරන ලදී

චීනයේ ප්රධාන භූමි ප්රදේශයේ පරිශීලකයින්ට ජාල ගැටළු වලට මුහුණ දීමට සිදුවුවහොත් සහ පැකේජ `npm` ක් ප්රකාශයට පත් කිරීමට නොහැකි නම්, ඔවුන්ට ප්රොක්සි සේවාදායකය වින්යාස කිරීමට පරිසර විචල්යය `https_proxy` සැකසිය හැක.

ඔබගේ ප්රොක්සි සේවාදායක වරාය `7890` යැයි උපකල්පනය කරමින්, ඔබට ලිවිය හැක:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

## ස්වයං-සත්කාරක අන්තර්ගතය

ඔබට අන්තර්ගතය ස්වයං-සත්කාරක කිරීමට අවශ්ය නම්, පළමුව `md/.i18n/htm/main.yml` සංස්කරණය කර `v: //i18n-v.xxx.com` වැනි ඔබේ URL උපසර්ගයට `v: //unpkg.com/i18n.site` වෙනස් කරන්න.

`md` නාමාවලිය ඇතුළත් කර ධාවනය කරන්න

```
i18n.site --htm_conf ol --save
```

හෝ කෙටි යෙදුම

```
i18n.site -c ol -s
```

ඉන්පසුව, `md/out/main/v` නාමාවලියෙහි අන්තර්ගතය `v:` හි සකසා ඇති URL උපසර්ග මාර්ගයට වින්යාස කරන්න.

අවසාන වශයෙන්, **`/.v` සිට `1s` දක්වා අවසන් වන මාර්ගයේ හැඹිලි කාලය වින්යාස කරන්න** , එසේ නොමැති නම් අලුතින් නිකුත් කරන ලද අන්තර්ගතයට වහාම ප්රවේශ විය නොහැක.

අනවශ්ය ඉල්ලීම් අඩු කිරීම සඳහා වෙනත් මාර්ග සඳහා හැඹිලි කාලය වසරක් හෝ ඊට වැඩි කාලයක් දක්වා සැකසිය හැක.

## s3 වෙත අන්තර්ගතය සත්කාරක කරන්න

ස්වයං-සත්කාරක අන්තර්ගතය සඳහා, ඔබේම සේවාදායකය භාවිතා කිරීමට අමතරව, `CDN` පොදු විකල්පයක් වන්නේ `S3` +

`S3` සේවාදායකයට ලොග් වීමට `S3` [rclone](https://rclone.org)

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/main/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/main/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/main/v/.v "$s3:/$bucket/"
```

`/.v` න් අවසන් වන මාර්ගයේ හැඹිලි කාලය `1s` වන පරිදි `CDN` වින්යාස කිරීමට මතක තබා ගන්න, එසේ නොමැතිනම් අලුතින් නිකුත් කරන ලද අන්තර්ගතයට වහාම ප්රවේශ විය නොහැක.

## ප්රකාශන වෙබ් අඩවිය

වෙබ් අඩවිය ඕනෑම තැනක යෙදවිය හැක [github page](https://pages.github.com) සහ [cloudflare page](https://pages.cloudflare.com) හොඳ තේරීම් වේ.

වෙබ් අඩවිය [තනි පිටු යෙදුම්](https://developer.mozilla.org/docs/Glossary/SPA) ගෘහ නිර්මාණ ශිල්පයක් භාවිතා කරන නිසා, `. ` සිට `index.html` දක්වා අඩංගු නොවන URL මාර්ග නැවත ලිවීමට මතක තබා ගන්න.

වෙබ් අඩවි ඇතුළත් කිරීමේ පිටුව එක් වරක් පමණක් යෙදවීමට අවශ්ය වන අතර, පසුකාලීන අන්තර්ගත යාවත්කාලීන කිරීම් සඳහා වෙබ් අඩවි ඇතුළත් කිරීමේ පිටුව නැවත යෙදවීමට අවශ්ය නොවේ.

### github පිටුවෙහි යෙදවීම

[සංවිධානයක් සෑදීමට පළමුව github ක්ලික් කරන්න](https://github.com/account/organizations/new?plan=free) `i18n-demo` උදාහරණයක් ලෙස.

ඉන්පසු මෙම සංවිධානය යටතේ ගබඩා `i18n-demo.github.io` සාදන්න (කරුණාකර `i18n-demo` ඔබ විසින් සාදන ලද සංවිධානයේ නම සමඟ ප්රතිස්ථාපනය කරන්න):

![](https://p.3ti.site/1721098657.avif)

පෙර ලිපියේ අන්තර්ගතය ප්රකාශයට පත් කරන විට, `out/main/htm` ජනනය වී ඇත, කරුණාකර මෙම නාමාවලිය ඇතුළත් කර ධාවනය කරන්න :

```
ln -s index.html 404.html
```


URL මාර්ගය නැවත ලිවීමට `github page` සහාය නොදක්වන නිසා, ඒ වෙනුවට `404.html` භාවිතා වේ.

ඉන්පසු `htm` නාමාවලියෙහි පහත විධානය ක්රියාත්මක කරන්න ( `i18n-demo/i18n-demo.github.io.git` ඔබේම ගබඩා ලිපිනය සමඟ ප්රතිස්ථාපනය කිරීමට මතක තබා ගන්න) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

කේතය තල්ලු කිරීමෙන් පසු, ඔබට එයට ප්රවේශ වීමට පෙර `github page` යෙදවීම සාර්ථකව ක්රියාත්මක වන තෙක් (පහත පෙන්වා ඇති පරිදි) රැඳී සිටින්න.

<img src="//p.3ti.site/1721116586.avif" width="350px">

ආදර්ශන පිටුව සඳහා කරුණාකර බලන්න:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

### cloudflare පිටුවෙහි යෙදවීම

[cloudflare page](//pages.cloudflare.com) `github page`

`cloudflare page` යෙදවීම සාමාන්යයෙන් ඉහත `github page` යෙදවීම මත පදනම් වේ.

ව්යාපෘතියක් සාදා ඉහත `i18n-demo.github.io` ගබඩාව බැඳ තබන්න.

ක්රියාවලිය පහත රූපයේ දැක්වේ:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

සංවිධානය `i18n-demo` වෙත ප්රවේශය ලබා දීමට කරුණාකර `Add Account` ක්ලික් කරන්න.

ඔබ වෙනත් ආයතනයක ගබඩාවක් බැඳ තිබේ නම්, නව සංවිධානය පෙන්වීමට පෙර දෙවරක් අවසර දීමට `Add Account` දෙවරක් ක්ලික් කිරීමට ඔබට අවශ්ය විය හැක.

![](https://p.3ti.site/1721118306.avif)

මීලඟට, ගබඩාව `i18n-demo.github.io` තෝරන්න, ඉන්පසු `Begin setup` ක්ලික් කරන්න, පසුව පියවර සඳහා පෙරනිමි අගයන් භාවිතා කරන්න.

![](https://p.3ti.site/1721118490.avif)

පළමු වරට බැඳීමෙන් පසු, ඔබට එයට ප්රවේශ වීමට පෙර මිනිත්තු කිහිපයක් බලා සිටිය යුතුය.

යෙදවීමෙන් පසු, ඔබට අභිරුචි ඩොමේන් නාමයක් බැඳිය හැක.

![](https://p.3ti.site/1721119459.avif)

අභිරුචි වසම් නාමය බැඳීමෙන් පසුව, පහත දැක්වෙන පරිදි, තනි පිටු යෙදුමේ නැවත ලිවීමේ මාර්ගය වින්යාස කිරීමට කරුණාකර වසම් නාමය වෙත යන්න:

![](https://p.3ti.site/1721119320.avif)

ඉහත පින්තූරයේ ඇති නීති පහත පරිදි වේ, කරුණාකර පහත පළමු පේළියේ ඇති `i18n.site` වෙනුවට ඔබ බැඳ ඇති ඩොමේන් නාමය.

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

ඊට අමතරව, කරුණාකර පහත පෙන්වා ඇති පරිදි හැඹිලි රීති වින්යාස කර, හැඹිලි කාලය මාසයකට සකසන්න.

![](https://p.3ti.site/1721125111.avif)

කරුණාකර ඉහත පින්තූරයේ දෙවන පියවරේදී ගැළපෙන වසම් නාමය ඔබ බැඳී ඇති වසම් නාමයට වෙනස් කරන්න.

### චීනයේ ප්රධාන භූමියේ වෙබ් අඩවි යෙදවීම ප්රශස්ත කිරීම

ඔබට චීනයේ ප්රධාන භූමියේ ජාල පරිසරය තුළ වඩා හොඳ ප්රවේශ්යතා කාර්ය සාධනයක් ලබා ගැනීමට අවශ්ය නම්, කරුණාකර පළමුව [වසම් නාමයක් ලියාපදිංචි කරන්න](//beian.aliyun.com) .

ඉන්පසුව, + ප්රධාන භූමියේ ක්ලවුඩ් වෙළෙන්දන්ගේ වස්තු ගබඩාව භාවිතා කරන්න `CDN` පහත අන්තර්ගතය යොදවන්න `out/main/htm` .

තනි පිටු යෙදුම් වලට අනුවර්තනය වීමට මාර්ගය නැවත ලිවීමට ඔබට එජ් කම්පියුටින් භාවිතා කළ හැක, උදාහරණයක් ලෙස, [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) මෙලෙස වින්යාස කළ හැක.

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

![](https://p.3ti.site/1721121273.avif)

රෙකෝඩ් `MX` සහ රෙකෝඩ් `CNAME` එකට පැවතිය නොහැකි නිසා, ඔබට එකවර ඩොමේන් නාම ඊමේල් ලබා ගැනීමට අවශ්ය නම්, ඔබ `CNAME` මට්ටමට `A` කිරීමට ස්ක්රිප්ට් සමඟ [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) කටයුතු කළ යුතුය.

මීට අමතරව, චීනයේ ප්රධාන භූමියේ ක්ලවුඩ් වෙළෙන්දන්ගේ විදේශ ගමනාගමන ගාස්තු සාපේක්ෂව මිල අධික බැවින්, ඔබට පිරිවැය ප්රශස්ත කිරීමට අවශ්ය නම්, ඔබට ලබා ගැනීමට [DNS Cloud හි නොමිලේ භූගෝලීය විභේදනය](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) සහ [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) හි අභිරුචි ඩොමේන් නාමය (පහත පෙන්වා ඇති පරිදි) භාවිතා කළ හැකිය රථවාහන හැරවීම──චයිනා බයිඩු ක්ලවුඩ් `CDN` ප්රධාන භූමියේ රථවාහන මාර්ගගත කිරීම, ජාත්යන්තර ගමනාගමනය cloudflare .

![](https://p.3ti.site/1721119788.avif)

මෙම යෙදවුම් ප්රශස්තකරණ විසඳුම් වඩාත් සංකීර්ණ වන අතර අනාගතයේදී වෙනම පරිච්ඡේදවල හඳුන්වා දෙනු ඇත.

### සාමාන්ය වසම් නාම යළි-යොමුවීම්

ඔබේ ප්රධාන වෙබ් අඩවිය ලෙස වෙබ් අඩවියක් උත්පාදනය කිරීමට ඔබ `i18n.site` භාවිතා කරන්නේ නම්, ඔබ සාමාන්යයෙන් pan-domain යළි-යොමුවීම් වින්යාස කිරීමට අවශ්ය වේ, එනම්, `*.xxx.com` ( `www.xxx.com` ඇතුළුව) සිට `xxx.com` වෙත ප්රවේශය හරවා යවන්න.

මෙම අවශ්යතාවය Alibaba Cloud `CDN` `EdgeScript` ( [ඉංග්රීසි ලේඛනය](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [චීන ලේඛනය](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ) ආධාරයෙන් ලබා ගත හැක.

[Alibaba CDN](https://cdn.console.aliyun.com/domain/list) හි ඩොමේන් නාමය එකතු කර Alibaba Cloud `CDN` හි වසම් නාමය `*.xxx.com` `CNAME` යොමු කරන්න.

![](https://p.3ti.site/1721122000.avif)

උදාහරණයක් ලෙස, ඉහත පින්තූරයේ `*.i18n.site` හි pan-domain නාම යළි-යොමුවීම් වින්යාසය පහත පරිදි වේ:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

### nginx සමඟ යොදවන්න

කරුණාකර `server` ඡේදයේ පහත දැක්වෙන වින්යාසයක් එක් කරන්න nginx කරුණාකර `/root/i18n/md/out/main/htm` ඔබේම ව්යාපෘතියේ මාර්ගයට `out/main/htm` වෙනස් කරන්න:

```
location / {
  root  /root/i18n/md/out/main/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

## `github action` අඛණ්ඩ අනුකලනය මත පදනම්ව

ඔබගේ `github action` වින්යාස කිරීමට ඔබට පහත සඳහන් දෑ වෙත යොමු විය හැක:

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

වින්යාසයෙහි දැකිය හැකි පරිදි, ශාඛාව `main` සහ ශාඛාව `dist` වෙත තල්ලු කිරීමේදී මෙම කාර්ය ප්රවාහය අවුලුවනු ලැබේ.

ලේඛනය ප්රකාශයට පත් කිරීම සඳහා කාර්ය ප්රවාහය ශාඛාවේ නමට අනුරූප වන වින්යාස ගොනුව භාවිතා කරනු ඇත, `.i18n/htm/main.yml` සහ `.i18n/htm/dist.yml` පිළිවෙලින් ප්රකාශන වින්යාසය ලෙස භාවිතා කරනු ඇත.

ලේඛන මුදා හැරීමේ ක්රියාවලිය සඳහා පහත හොඳම භාවිතයන් අපි නිර්දේශ කරමු:

වෙනස්කම් ශාඛාව `main` වෙත තල්ලු කළ විට, ලේඛනය ගොඩනැගීමට සහ පෙරදසුන් ස්ථානයට යෙදවීමට ක්රියා කරයි (පෙරදසුන් මධ්යස්ථානය තිබේ [github page](//pages.github.com) ).

පෙරදසුන් අඩවියේ ලේඛනය නිවැරදි බව තහවුරු කිරීමෙන් පසුව, කේතය ඒකාබද්ධ කර `dist` ශාඛාව වෙත තල්ලු කරනු ලබන අතර, නිල ගොඩනැගීම සහ යෙදවීම සබැඳිව යයි.

ඇත්ත වශයෙන්ම, ඉහත ක්රියාවලිය ක්රියාත්මක කිරීම සඳහා තවත් වින්යාසයන් ලිවීම අවශ්ය වේ.

ඔබට වැඩ ප්රවාහ ස්ක්රිප්ටින් සඳහා සැබෑ ව්යාපෘතිය වෙත යොමු විය හැක [github.com/fcdoc/doc](//github.com/fcdoc/doc/blob/main/.github/workflows/i18n.site.yml)

වින්යාසයෙහි `secrets.I18N_SITE_TOKEN` සහ `secrets.NPM_TOKEN` මඟින් ඔබට කේත පදනමේ රහස් විචල්යයන් වින්යාස කිරීමට අවශ්ය වේ.

![](//p.3ti.site/1730970199.avif)

`I18N_SITE_TOKEN` විය [i18n.site/token](//i18n.site/token) .

`NPM_TOKEN` යනු වින්යාසය තුළ ඇති පැකේජ `npm` හි ප්රකාශන ටෝකනය [npmjs.com](//npmjs.com) ගොස් ප්රකාශන අවසර සහිත ටෝකනයක් සාදන්න (පහත පෙන්වා ඇත).

![](//p.3ti.site/1730969906.avif)


## නාමාවලි ව්යුහය

### `public`

වෙබ් අඩවියේ ස්ථිතික ගොනු, `favicon.ico` , `robots.txt` , ආදිය.

මෙහි ඇති අයිකන ගොනු ජනනය කළ හැක [realfavicongenerator.net](https://realfavicongenerator.net)

### `.i18n`

`.i18n` බහලුම යටතේ `i18n.site` හි වින්යාස ගොනු, පරිවර්තන හැඹිලි යනාදිය ඇත. විස්තර සඳහා ඊළඟ පරිච්ඡේදය ["වින්යාස කිරීම"](/i18n.site/conf) බලන්න.

### `en`

මූලාශ්ර භාෂා නාමාවලිය, `.i18n/conf.yml` වින්යාස ගොනුවේ `fromTo` න් `en` ට අනුරූප වේ

```yaml
i18n:
  fromTo:
    en: zh
```

කරුණාකර පරිවර්තන වින්යාසය බලන්න [i18](/i18/use)