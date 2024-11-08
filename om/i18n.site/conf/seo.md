# Fooyyessi Mootora Barbaacha (Seo) .

## Qajeelfama (Principle) Jedhu

`i18n.site` arkiteekcharii fuula tokkoo kan hin haaromfamne fudhata Indeeksii barbaacha haala mijeessuudhaaf, fuula istaatiksii adda ta'ee fi `sitemap.xml` akka sakatta'aniif ni uuma.

Yeroo `User-Agent` gaaffii qaqqabummaa crawler motora barbaachaan fayyadamu, gaaffiin gara fuula static karaa `302` tti ni qajeelfama.

Fuula static irratti, `link` fayyadamii hidhannoo gara gosoota afaanii adda addaa fuula kanaa agarsiisuuf, kan akka :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## Qindaa'ina nginx Naannoo

Faayilii qindeessaa `.i18n/htm/main.yml` pirojektii demoo keessatti akka fakkeenyaatti fudhadhu

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

Maaloo jalqaba gatii `host:` armaan olii gara maqaa domeenii keetii fooyyessi, kan akka `xxx.com` .

Sana booda, `i18n.site -n` , fuul-durri istaatiksii galmee `out/main/htm` keessatti ni uuma.

Dhugaadha, faayilii qindeessaa biroos dandeessisuun ni danda'ama, kan akka jalqaba qindeessaa `main` eeruun `.i18n/htm/dist.package.json` fi `.i18n/htm/dist.yml` uumuuf.

Sana booda `i18n.site -n -c dist` fiigi akka fuul-barruu istaatiksii gara `out/dist/htm` uumamu.

`nginx` qindeessaa armaan gadii ilaaluun saaguun ni danda'ama.

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# Iskiriiptii hojjetaa sarvarii yeroo dheeraaf hin kuusin
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# Qabeenya istaatiksii biroof yeroo kaachota dheeraa saagi
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# Faayilii istaatiksii kam akka galtee fuula jalqabaatti fayyadamu saagi
location = / {
  # Yoo $botLang
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# Qindaa'ina aplikeeshinii fuula tokkoo
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## Kuusaa Wantaa Faayilii Istaatiksii Olkaa'uuf Qindeessi

Faayiloonni istaatiksii naannootti uumamuu danda'u, garuu mala baay'ee beekamaan gara kuusaa wantaatti olkaa'uudha.

`out` armaan olitti qindaa'e gara :

```
out:
  - s3
```

Sana booda, `~/.config/i18n.site.yml` gulaaliitii qindeessaa armaan gadii itti dabali :

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

Qindaa'ina keessatti, maaloo `i18n.site` gara gatii `host:` `.i18n/htm/main.yml` keessatti jijjiiri, kuusaawwan wanta hedduu `s3` jalatti qindaa'uu danda'u, fi dirree `region` filannoodha (kuusaawwan wantaa baay'een dirree kana saaguu hin barbaachisan).

Sana booda pirojekticha irra deebi'anii maxxansuuf `i18n.site -n` fiigi.

Yoo `~/.config/i18n.site.yml` fooyyessee fi irra deebitee olkaa'uu barbaadde, maaloo ajaja armaan gadii galmee hundee pirojektii keessatti fayyadamii kaachota olkaa'uu qulqulleessi :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## Qindeessaa cloudflare

Maqaa domeenii gara [cloudflare](//www.cloudflare.com)

### Seera Jijjiirraa

Seerota jijjiirraa akka armaan gadiitti itti dabali:

![](//p.3ti.site/1725436822.avif)

Koodiin seeraa akka armaan gadiitti, maaloo koodii "i18n.site" gara maqaa domeenii keessaniitti fooyyessa:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Seera Kuusaa

Seerota kaachota akka armaan gadiitti dabali:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Seerota Qajeelchuu

Seerota kallattii jijjiiruu akka armaan gadiitti saagi, maaloo koodii "i18n.site" gara maqaa domeenii keetii fooyyessaa

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

`URL redirect` Qajeelfama daayinamikii filadhu, maaloo daandii kallattii `concat("/en",http.request.uri.path,".htm")` keessatti `/en` gara afaan durtii motoroonni barbaacha akka hammatan barbaaddutti fooyyessi.

## Baidu Intelligent Cloud Qindeessituu

Yoo tajaajila gara guddittii Chaayinaa kennuu barbaaddan, [Baidu Smart Cloud](//cloud.baidu.com) fayyadamuu dandeessu.

Deetaan gara Kuusaa Wantoota Baidutti olkaa'amee gara Neetwork Raabsa Qabiyyee Baidutti hidhama.

Sana booda iskiriiptii [tajaajila qarqara EdgeJS](//console.bce.baidu.com/cdn/#/cdn/ejs/list) keessatti akka armaan gadiitti uumi

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
  // Mataduree deebii akka firii sirreessuuf saaguu ni danda'ama, kan akka out.XXX = 'MSG';
})
```

`Debug` cuqaasi, sana booda gara guutummaa neetworkitti Maxxansi cuqaasi.

![](//p.3ti.site/1725437754.avif)

## Fayyadama Sadarkaa Olaanaa: Furmaata Naannoo Irratti Hundaa’uun Tiraafikaa Raabsuu

Yoo tajaajila Chaayinaa guddittii keessatti kennuu barbaaddanii fi akkasumas tiraafikaa idil-addunyaa bilisaa `cloudflare` barbaaddan, `DNS` furmaata naannootiin fayyadamuu dandeessu.

Fakkeenyaaf `cloudflare` [Huawei Cloud DNS](https://www.huaweicloud.com)

Qaawwa hedduun qindeessaa `cloudflare` Qabxiilee muraasni hubatamuu qaban kunooti :

### Maqaan Domeenii `DNS` Biroo Keessatti Keessummeessa, Akkaataa Itti Fayyadama `cloudflare`

Jalqaba maqaa domeenii fedhii `cloudflare` tti hidhu, kana booda `SSL/TLS` → maqaa domeenii amala fayyadamii maqaa domeenii ijoo maqaa domeenii kanaan walqabsiisi.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` Karaa Maqaa Domeenii Amala Ta'een Argamuu Hin Danda'u

Kuusaan `cloudflare` ijaarame `R2` maqaa domeenii dhuunfatameen dhaqqabamuu waan hin dandeenyeef, kuusaan wanta qaama sadaffaa faayilii istaatiksii kaa'uuf fayyadamuu qaba.

[backblaze.com](https://www.backblaze.com) akkaataa wantoota qaama sadaffaa `cloudflare` irratti kuufamuu qaban hidhuuf akka fakkeenyaatti fudhanna.

`backblaze.com` irratti baaldi uumi, faayilii kamiyyuu olkaa'i, faayilii daawwachuuf cuqaasi, maqaa domeenii `Friendly URL` argadhu, kunis asitti `f003.backblazeb2.com` dha.

![](//p.3ti.site/1725440783.avif)

Maqaa domeenii `CNAME` irraa gara `f003.backblazeb2.com` `cloudflare` irratti jijjiirii bakka bu'aa dandeessisi.

![](//p.3ti.site/1725440896.avif)

`cloudflare` of `SSL` fooyyessi → haalata icciitii, gara `Full` saagi

![](//p.3ti.site/1725438572.avif)

Seera jijjiirraa akka armaan gadiitti dabali, dursi (inni jalqabaa dursa gadi aanaa qaba):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` daayinamikii filadhuutii `your_bucketname` `concat("/file/your_bucketname",http.request.uri.path)` keessaa gara maqaa baaldi keetii fooyyessi.

Dabalataanis, seera jijjiirraa `cloudflare` armaan olii keessatti, `index.html` gara `file/your_bucketname/index.html` tti jijjiirama, fi qindeessootni biroo akkuma jirutti hafu.

![](//p.3ti.site/1725441384.avif)