# Search Engine Optimization (Seo)

## Prinsipyo

`i18n.site` ay gumagamit ng isang hindi nagre-refresh na arkitektura ng solong pahina Upang mapadali ang pag-index ng paghahanap, isang hiwalay na static na pahina at `sitemap.xml` ay bubuo para sa mga crawler na mag-crawl.

Kapag `User-Agent` ng kahilingan sa pag-access ay ginamit ng crawler ng search engine, ang kahilingan ay ire-redirect sa static na pahina sa pamamagitan ng `302` .

Sa mga static na pahina, gumamit `link` upang ipahiwatig ang mga link sa iba't ibang bersyon ng wika ng pahinang ito, tulad ng :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## Lokal Na Pagsasaayos Ng nginx

Kunin ang `.i18n/htm/main.yml` configuration file sa demo project bilang isang halimbawa

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

Mangyaring baguhin muna ang halaga ng `host:` sa itaas sa iyong domain name, gaya ng `xxx.com` .

Pagkatapos, `i18n.site -n` , ang static na pahina ay bubuo sa `out/main/htm` direktoryo.

Siyempre, maaari mo ring paganahin ang iba pang mga configuration file, tulad ng unang pagtukoy sa configuration ng `main` upang lumikha `.i18n/htm/dist.package.json` at `.i18n/htm/dist.yml` .

Pagkatapos ay patakbuhin `i18n.site -n -c dist` upang ang static na pahina ay mabuo sa `out/dist/htm` .

`nginx` ay maaaring itakda sa pamamagitan ng pagsangguni sa configuration sa ibaba.

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# Huwag i-cache ang mga script ng manggagawa ng server nang masyadong mahaba
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# Magtakda ng mas mahabang oras ng cache para sa iba pang mga static na mapagkukunan
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# Itakda kung aling static na file ang ginagamit ng crawler bilang entry sa homepage
location = / {
  # Kung walang laman ang $botLang , nangangahulugan ito ng pag-access at pag-redirect ng crawler ayon sa nakatakdang landas ng wika
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# Isang pahinang pagsasaayos ng application
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## I-Configure Ang Object Storage Para Sa Pag-Upload Ng Mga Static Na File

Ang mga static na file ay maaaring mabuo nang lokal, ngunit ang isang mas karaniwang diskarte ay ang pag-upload ng mga ito sa object storage.

Baguhin `out` na na-configure sa itaas sa :

```
out:
  - s3
```

Pagkatapos, i-edit ang `~/.config/i18n.site.yml` at idagdag ang sumusunod na configuration :

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

Sa pagsasaayos, mangyaring baguhin `i18n.site` sa halaga ng `host:` sa `.i18n/htm/main.yml` , maaaring i-configure ang maraming object store sa ilalim ng `s3` , at opsyonal ang `region` na field (maraming object store ang hindi kailangang itakda ang field na ito).

Pagkatapos ay patakbuhin `i18n.site -n` upang muling i-publish ang proyekto.

Kung binago mo `~/.config/i18n.site.yml` at nais mong muling i-upload, mangyaring gamitin ang sumusunod na command sa direktoryo ng ugat ng proyekto upang i-clear ang cache ng pag-upload :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## Configuration Ng cloudflare

Ang domain name ay naka-host sa [cloudflare](//www.cloudflare.com)

### Mga Panuntunan Sa Conversion

Idagdag ang mga panuntunan sa conversion tulad ng ipinapakita sa ibaba:

![](//p.3ti.site/1725436822.avif)

Ang code ng panuntunan ay ang mga sumusunod, mangyaring baguhin ang code na "i18n.site" sa iyong domain name:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Mga Panuntunan Sa Pag-Cache

Magdagdag ng mga panuntunan sa cache tulad ng sumusunod:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Mga Panuntunan Sa Pag-Redirect

Itakda ang mga panuntunan sa pag-redirect bilang mga sumusunod, mangyaring baguhin ang code na "i18n.site" sa iyong domain name

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

`URL redirect` Pumili ng dynamic na redirection, mangyaring baguhin `/en` sa redirection path `concat("/en",http.request.uri.path,".htm")` sa default na wika na gusto mong isama ng mga search engine.

## Baidu Intelligent Cloud Configuration

Kung kailangan mong magbigay ng mga serbisyo sa mainland China, maaari mong gamitin [ang Baidu Smart Cloud](//cloud.baidu.com) .

Ang data ay ina-upload sa Baidu Object Storage at nakatali sa Baidu Content Distribution Network.

Pagkatapos ay lumikha ng script sa [EdgeJS edge na serbisyo](//console.bce.baidu.com/cdn/#/cdn/ejs/list) tulad ng sumusunod

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
  // Maaaring itakda ang mga header ng tugon upang i-debug ang output, gaya ng out.XXX = 'MSG';
})
```

I-click ang `Debug` , pagkatapos ay i-click ang I-publish sa buong network.

![](//p.3ti.site/1725437754.avif)

## Advanced Na Paggamit: Ipamahagi Ang Trapiko Batay Sa Rehiyonal Na Resolusyon

Kung gusto mong magbigay ng mga serbisyo sa mainland China at gusto mo rin `cloudflare` libreng internasyonal na trapiko, maaari mong gamitin `DNS` na may regional resolution.

Halimbawa `cloudflare` nagbibigay [ang Huawei Cloud DNS](https://www.huaweicloud.com)

Mayroong maraming mga pitfalls sa pagsasaayos ng `cloudflare` Narito ang ilang mga punto na dapat tandaan :

### Ang Domain Name Ay Naka-Host Sa Ibang `DNS` , Kung Paano Gamitin `cloudflare`

Una, itali ang isang arbitrary na domain name sa `cloudflare` , at pagkatapos ay gamitin `SSL/TLS` → custom na domain name upang iugnay ang pangunahing domain name sa domain name na ito.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` Ay Hindi Ma-Access Sa Pamamagitan Ng Custom Na Domain Name

Dahil ang built `cloudflare` in na object storage `R2` ay hindi ma-access ng customized na domain name, kailangang gumamit ng third-party na object storage para maglagay ng mga static na file.

Dito namin kinuha [backblaze.com](https://www.backblaze.com) bilang isang halimbawa upang ipakita kung paano i-bind ang mga third-party na bagay na iimbak sa `cloudflare` .

Gumawa ng bucket sa `backblaze.com` , mag-upload ng anumang file, i-click upang i-browse ang file, at makuha ang domain name ng `Friendly URL` , na `f003.backblazeb2.com` dito.

![](//p.3ti.site/1725440783.avif)

Baguhin ang domain name mula `CNAME` hanggang `f003.backblazeb2.com` sa `cloudflare` at paganahin ang proxy.

![](//p.3ti.site/1725440896.avif)

Baguhin `cloudflare` ng `SSL` → encryption mode, itakda sa `Full`

![](//p.3ti.site/1725438572.avif)

Idagdag ang panuntunan sa conversion tulad ng ipinapakita sa ibaba, unahin ito (ang una ang may pinakamababang priyoridad):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` piliin ang dynamic at baguhin `your_bucketname` sa `concat("/file/your_bucketname",http.request.uri.path)` sa pangalan ng iyong bucket.

Bilang karagdagan, sa `cloudflare` na panuntunan sa conversion sa itaas, `index.html` ay binago sa `file/your_bucketname/index.html` , at ang iba pang mga configuration ay nananatiling pareho.

![](//p.3ti.site/1725441384.avif)