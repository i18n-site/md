# ස්ථාපනය කරන්න &

## මානකරන ටෝකනය

`i18n.site` `i18` පරිවර්තන මෙවලම කාවැදී ඇත, [ප්‍රවේශ ටෝකනය වින්‍යාස කිරීමට `i18` ලේඛනය වෙත යොමු වීමට කරුණාකර මෙහි ක්ලික් කරන්න](/i18/use) .

## ස්ථාපනය කරන්න

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Demo ව්යාපෘතිය

අපි ආදර්ශන ව්‍යාපෘතියකින් ආරම්භ කර භාවිතා කරන ආකාරය ඉගෙන ගනිමු `i18n.site`

අපි මුලින්ම demo repository ක්ලෝන කර පහත පරිදි විධානය ක්‍රියාත්මක කරමු:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

චීනයේ ප්‍රධාන භූමියේ පරිශීලකයින්ට කළ හැක්කේ:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

`demo.i18n.site` `md` `docker`

### පරිවර්තනය කරන්න

පළමුව, `md` ඇතුළු කර `i18n.site` ධාවනය කරන්න, එය `en` ට `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

ධාවනය කිරීමෙන් පසු, පරිවර්තන සහ හැඹිලි `git add . ` උත්පාදනය වනු ඇත `md`

### දේශීය පෙරදසුන

ස්ථාපනය කර ආරම්භ `docker` ( `MAC` `docker` හි ධාවන කාලය ලෙස භාවිතා [orbstack](https://orbstack.dev) නිර්දේශ කරයි ).

ඉන්පසුව, `docker` ඇතුල් කර `./up.sh` ධාවනය කරන්න, ඉන්පසු දේශීයව පෙරදසුන් කිරීමට [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### අන්තර්ගතය පළ කරන්න

`i18n.site` [තනි-පිටු යෙදුම්](https://developer.mozilla.org/docs/Glossary/SPA) ගෘහ නිර්මාණ ශිල්පය අනුගමනය කරයි, සහ වෙබ් අඩවියට ඇතුල් වන පිටුව සහ වෙබ් අඩවි අන්තර්ගතය ස්වාධීනව යොදවනු ලැබේ.

ඉහත පරිවර්තනය ක්‍රියාත්මක කිරීමෙන් පසු, `htm` සහ `v` නාමාවලි `md/out/dev` තුළ ජනනය වේ.

මෙන්න, `dev` එය `.i18n/htm/dev.yml` ගොනුව මත පදනම් වී ඇති බව පෙන්නුම් කරයි

අන්තර්ගතය : `dev`

`htm` යටතේ වෙබ් අඩවියට ඇතුල් වීමේ පිටුව ඇත.

`v` නාමාවලියෙහි අනුවාද අංකය සහිත වෙබ් අඩවිය අන්තර්ගත වේ.

අනුවාද අංකය නොසලකා සියලුම ගොනු `out/dev/v/0.1.0` පිටපත් කරනු ඇත.

නිල නිකුතුව සඳහා, වෙනස් කළ ගොනු නව අනුවාද අංක නාමාවලියට පිටපත් කරනු ලැබේ.

#### වින්‍යාස ගොනුව නියම කිරීමට -c භාවිතා කරන්න

විවිධ වින්‍යාස ගොනු මඟින් `out` යටතේ අනුරූප නාමාවලි සාදනු ඇත.

උදාහරණයක් ලෙස, `.i18n/htm/ol.yml` `out/ol` නාමාවලියක් සාදනු ඇත.

`dev.yml` සහ `ol.yml` යනු පෙරනිමි වින්‍යාසයන් වේ.

`dev` යනු `development` හි කෙටි යෙදුමයි, එය සංවර්ධන පරිසරය නියෝජනය කරයි, එය දේශීය පෙරදසුන සඳහා භාවිතා කරයි, සහ පෙරනිමි වින්‍යාස ගොනුව ද වේ.
`ol` `online` `-n` `npm`

වින්‍යාස ගොනුවේ නම සඳහන් කිරීමට `--htm_conf` වෙනත් වින්‍යාස ගොනු නිර්මාණය කළ හැක.

උදාහරණ වශයෙන්:
```
i18n.site --htm_conf yourConfig --save
```

`--save` දැක්වෙන්නේ යාවත්කාලීන නිකුත් කිරීමේ අනුවාද අංකයයි.

#### <a rel=id href="#npm" id="npm"></a> npmjs.com වෙත අන්තර්ගතය ප්‍රකාශ කරන්න

[npmjs.com](//npmjs.com) අන්තර්ගතය ප්‍රකාශ කිරීම නිර්දේශිත පෙරනිමි විසඳුමයි ( [ඉදිරිපස ඉහළ ලබා ගත හැකි බව](/i18n.site/feature#ha) බලන්න).

##### npm login &

ස්ථාපනය කරන්න `nodejs` පුරනය වීමට `npm login` භාවිතා කරන්න.

සංස්කරණය කරන්න `md/.i18n/htm/ol.yml` `v: //unpkg.com/i18n.site` හි ඇති `i18n.site` ඔබේම ලෙස වෙනස් කරන්න `npm` පැකේජයේ නම.

[npmjs.com](//npmjs.com)

`npm` `v:` **`//unpkg.com/`** `i18n.site` `/.v`

පරිවර්තනය කිරීමට සහ ප්‍රකාශ කිරීමට `md` `i18n.site --npm` හෝ `i18n.site -n` ධාවනය කරන්න.

ඔබ ප්‍රකාශනය කිරීමට අඛණ්ඩ ඒකාබද්ධතා පරිසරයක් භාවිතා කරන්නේ නම්, එය ස්ථාපනය කිරීමට අවශ්‍ය නැත `nodejs` ඇතුළු වී ප්‍රකාශිත අවසරය `~/.npmrc` පරිසරයට පිටපත් කරන්න.

**`.i18n/v/ol`** පැකේජයේ නම `v:` in `ol.yml`

##### ප්‍රොක්සි සේවාදායකය npm විසින් ප්‍රකාශනය කරන ලදී

චීනයේ ප්‍රධාන භූමි ප්‍රදේශයේ පරිශීලකයින්ට ජාල ගැටළු වලට මුහුණ දීමට සිදුවුවහොත් `https_proxy` `npm`

ඔබගේ ප්‍රොක්සි සේවාදායක වරාය `7890` ඔබට මෙසේ ලිවිය හැක.

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### ස්වයං-සත්කාරක අන්තර්ගතය

ඔබට අන්තර්ගතය ස්වයං-සත්කාරක කිරීමට අවශ්‍ය නම්, පළමුව, `v: //i18n-v.xxx.com` වැනි ඔබේ URL උපසර්ගයට සංස්කරණය කර `v: //unpkg.com/i18n.site` වෙනස් කරන්න `md/.i18n/htm/ol.yml`

`md` ඇතුල් කර ධාවනය කරන්න

```
i18n.site --htm_conf ol --save
```

හෝ කෙටි යෙදුම

```
i18n.site -c ol -s
```

ඉන්පසුව, `v:` හි ඇති URL උපසර්ගය වෙත `md/out/ol/v` අන්තර්ගතය වින්‍යාස කරන්න.

අවසාන වශයෙන්, **`1s` `/.v` අවසන් වන මාර්ගයේ හැඹිලි කාලය වින්‍යාස කරන්න** , එසේ නොමැතිනම් අලුතින් නිකුත් කරන ලද අන්තර්ගතයට වහාම ප්‍රවේශ විය නොහැක.

අනවශ්‍ය ඉල්ලීම් අඩු කිරීම සඳහා වෙනත් මාර්ග සඳහා හැඹිලි කාලය වසරක් හෝ ඊට වැඩි කාලයක් දක්වා සැකසිය හැක.

##### s3 වෙත අන්තර්ගතය සත්කාරක කරන්න

ස්වයං-සත්කාරක අන්තර්ගතය සඳහා + ඔබේම සේවාදායකය භාවිතා කිරීමට අමතරව, තවත් පොදු විකල්පයක් `CDN` `S3`

`S3` [rclone](https://rclone.org) `S3`

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

`/.v` වලින් අවසන් වන මාර්ගයේ හැඹිලි කාලය `1s` වන පරිදි වින්‍යාස කිරීමට මතක තබා ගන්න `CDN`

### ප්‍රකාශන වෙබ් අඩවිය

වෙබ් අඩවිය ඕනෑම තැනක යෙදවිය හැක [github page](https://pages.github.com) සහ [cloudflare page](https://pages.cloudflare.com) හොඳ තේරීම් වේ.

වෙබ් අඩවිය [තනි-පිටු යෙදුමක](https://developer.mozilla.org/docs/Glossary/SPA) ගෘහ නිර්මාණ ශිල්පය අනුගමනය කරන බැවින්, `index.html` වෙත අඩංගු නොවන URL මාර්ගය නැවත ලිවීමට මතක තබා ගන්න `. `

වෙබ් අඩවි ඇතුළත් කිරීමේ පිටුව එක් වරක් පමණක් යෙදවීමට අවශ්‍ය වන අතර, පසුකාලීන අන්තර්ගත යාවත්කාලීන කිරීම් සඳහා වෙබ් අඩවි ඇතුළත් කිරීමේ පිටුව නැවත යෙදවීමට අවශ්‍ය නොවේ.

#### github පිටුවෙහි යෙදවීම

පහත දැක්වෙන [github](https://github.com/account/organizations/new?plan=free) නම `i18n-demo`

ඉන්පසු මෙම සංවිධානය යටතේ ගබඩාවක් සාදන්න `i18n-demo.github.io` කරුණාකර ඔබ නිර්මාණය කළ සංවිධානයේ නම සමඟ `i18n-demo` ආදේශ කරන්න):

<img alt="" src="https://p.3ti.site/1721098657.avif">

පෙර ලිපියේ අන්තර්ගතය ප්‍රකාශයට පත් කරන විට, එය ජනනය කර ඇත `out/ol/htm` කරුණාකර මෙම නාමාවලිය ඇතුළත් කර ධාවනය කරන්න :

```
ln -s index.html 404.html
```


URL මාර්ගය නැවත ලිවීමට සහය නොදක්වන `github page` , `404.html` වෙනුවට භාවිතා වේ.

ඉන්පසු පහත විධානය `htm` ක්‍රියාත්මක කරන්න ( `i18n-demo/i18n-demo.github.io.git` ඔබේම ගබඩා ලිපිනය සමඟ ප්‍රතිස්ථාපනය කිරීමට මතක තබා ගන්න) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

කේතය තල්ලු කිරීමෙන් පසු, `github page`

<img src="//p.3ti.site/1721116586.avif" width="350px">

ආදර්ශන පිටුව සඳහා කරුණාකර බලන්න:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### cloudflare පිටුවෙහි යෙදවීම

[cloudflare page](//pages.cloudflare.com) `github page`

`cloudflare page` යෙදවීම සාමාන්‍යයෙන් ඉහත `github page` යෙදවීම මත පදනම් වේ.

ව්‍යාපෘතියක් සාදා `i18n-demo.github.io` ගබඩාව බැඳ තබන්න.

ක්රියාවලිය පහත රූපයේ දැක්වේ:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

`i18n-demo` සංවිධානයට ප්‍රවේශය ලබා දීමට කරුණාකර ක්ලික් කරන්න `Add Account`

ඔබ වෙනත් ආයතනයක ගබඩාවක් බැඳ තිබේ නම්, නව සංවිධානය ප්‍රදර්ශනය වීමට පෙර එය දෙවරක් අවසර දීමට ඔබට දෙවරක් ක්ලික් කිරීමට අවශ්‍ය විය හැක `Add Account`

<img alt="" src="https://p.3ti.site/1721118306.avif">

ඊළඟට `i18n-demo.github.io` ගබඩාව තෝරන්න, ඉන්පසු `Begin setup` ක්ලික් කරන්න , සහ පසුකාලීන පියවර සඳහා පෙරනිමි අගයන් භාවිතා කරන්න.

<img alt="" src="https://p.3ti.site/1721118490.avif">

පළමු වරට බැඳීමෙන් පසු, ඔබට එයට ප්‍රවේශ වීමට පෙර මිනිත්තු කිහිපයක් බලා සිටිය යුතුය.

යෙදවීමෙන් පසු, ඔබට අභිරුචි ඩොමේන් නාමයක් බැඳිය හැක.

<img alt="" src="https://p.3ti.site/1721119459.avif">

අභිරුචි වසම් නාමය බැඳීමෙන් පසුව, පහත දැක්වෙන පරිදි, තනි පිටු යෙදුමේ නැවත ලිවීමේ මාර්ගය වින්‍යාස කිරීමට කරුණාකර වසම් නාමය වෙත යන්න:

<img alt="" src="https://p.3ti.site/1721119320.avif">

ඉහත පින්තූරයේ ඇති නීති `i18n.site` පරිදි වේ ඩොමේන් නාමය පහතින්

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

ඊට අමතරව, කරුණාකර පහත පෙන්වා ඇති පරිදි හැඹිලි රීති වින්‍යාස කර, හැඹිලි කාලය මාසයකට සකසන්න.

<img alt="" src="https://p.3ti.site/1721125111.avif">

කරුණාකර ඉහත පින්තූරයේ දෙවන පියවරේදී ගැළපෙන වසම් නාමය ඔබ බැඳී ඇති වසම් නාමයට වෙනස් කරන්න.

#### චීනයේ ප්‍රධාන භූමියේ වෙබ් අඩවි යෙදවීම ප්‍රශස්ත කිරීම

ඔබට චීනයේ ප්‍රධාන භූමියේ ජාල පරිසරය තුළ වඩා හොඳ ප්‍රවේශ්‍යතා කාර්ය සාධනයක් ලබා ගැනීමට අවශ්‍ය නම්, කරුණාකර පළමුව [වසම් නාමයක් ලියාපදිංචි කරන්න](//beian.aliyun.com) .

`out/ol/htm` `CDN` චීනයේ වලාකුළු වෙළෙන්දන්ගේ වස්තු ගබඩාව භාවිතා කරන්න +

[Baidu Smart `CDN`](//cloud.baidu.com/product/cdn.html) වැනි තනි පිටු යෙදුම් වලට අනුවර්තනය වීමට මාර්ගය නැවත ලිවීමට ඔබට එජ් පරිගණනය භාවිතා කළ හැක.

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

`MX` වාර්තා සහ `CNAME` වාර්තා එකට පැවතිය නොහැක, ඔබට එකවර ඩොමේන් නාම ඊමේල් ලබා ගැනීමට අවශ්‍ය නම්, ඔබ `CNAME` `A` සමතලා කිරීමට [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten)

මීට අමතරව, චීනයේ ප්‍රධාන භූමියේ ක්ලවුඩ් වෙළෙන්දන්ගේ විදේශ ගමනාගමන ගාස්තු සාපේක්ෂව මිල අධික බැවින්, ඔබට පිරිවැය ප්‍රශස්ත කිරීමට අවශ්‍ය නම්, ඔබට ලබා ගැනීමට [Huawei DNS හි නොමිලේ භූගෝලීය විභේදනය](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) සහ [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) හි අභිරුචි ඩොමේන් නාමය (පහත පෙන්වා ඇති පරිදි) භාවිතා කළ හැකිය රථවාහන හැරවීම──චයිනා බයිඩු ක්ලවුඩ් ප්‍රධාන භූමියේ ගමනාගමනය `CDN` ජාත්‍යන්තර ගමනාගමනය cloudflare .

<img alt="" src="https://p.3ti.site/1721119788.avif">

මෙම යෙදවුම් ප්‍රශස්තකරණ විසඳුම් වඩාත් සංකීර්ණ වන අතර අනාගතයේදී වෙනම පරිච්ඡේදවල හඳුන්වා දෙනු ඇත.

#### සාමාන්‍ය වසම් නාම යළි-යොමුවීම්

ඔබ ඔබේ ප්‍රධාන වෙබ් අඩවිය ලෙස වෙබ් අඩවියක් ජනනය කිරීමට භාවිතා `i18n.site` නම්, ඔබ සාමාන්‍යයෙන් පෑන්-වසම් යළි-යොමුවීම් වින්‍යාස කිරීමට අවශ්‍ය වේ, එනම් `*.xxx.com` ( `www.xxx.com` ඇතුළුව) වෙත ප්‍රවේශය නැවත යොමු කිරීම `xxx.com`

මෙම අවශ්‍යතාවය Alibaba Cloud's `EdgeScript` ( [ඉංග්‍රීසි ලේඛනය](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [චීන ලේඛනය](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ) ආධාරයෙන් සාක්ෂාත් කරගත හැකිය `CDN`

[Alibaba CDN](https://cdn.console.aliyun.com/domain/list) හි ඩොමේන් නාමයක් එකතු කර `*.xxx.com` නාමය Alibaba Cloud `CDN` හි `CNAME` වෙත යොමු කරන්න.

<img alt="" src="https://p.3ti.site/1721122000.avif">

උදාහරණයක් ලෙස, ඉහත පින්තූරයේ ඇති pan-domain නාම යළි-යොමුවීම් වින්‍යාසය `*.i18n.site` පරිදි වේ:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### nginx සමඟ යොදවන්න

`server` nginx `/root/i18n/md/out/ol/htm` `out/ol/htm`

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### නාමාවලි ව්යුහය

#### පොදු

`favicon.ico` `robots.txt` , වැනි වෙබ් අඩවියේ ස්ථිතික ගොනු.

මෙහි ඇති අයිකන ගොනු ජනනය කළ හැක [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n

`.i18n` යටතේ `i18n.site` හි වින්‍යාස ගොනු, පරිවර්තන හැඹිලිය යනාදිය ඇත. විස්තර සඳහා ඊළඟ පරිච්ඡේදය ["වින්‍යාස කිරීම"](/i18n.site/conf) බලන්න.

#### en

මූලාශ්‍ර භාෂා නාමාවලිය, වින්‍යාස ගොනුවේ `fromTo` `en` `.i18n/conf.yml` අනුරූප වේ

```yaml
i18n:
  fromTo:
    en: zh
```

කරුණාකර පරිවර්තන වින්‍යාසය බලන්න [i18](/i18/use)

