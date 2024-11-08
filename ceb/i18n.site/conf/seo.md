# Search Engine Optimization (Seo)

## Prinsipyo

`i18n.site` nagsagop sa usa ka non-refresh nga arkitektura sa usa ka panid Aron mapadali ang pag-indeks sa pagpangita, usa ka separado nga static nga panid ug `sitemap.xml` ang himuon para sa mga crawler nga mokamang.

Kung `User-Agent` sa hangyo sa pag-access gigamit sa search engine crawler, ang hangyo ibalhin sa static nga panid pinaagi sa `302` .

Sa static nga mga panid, gamita `link` aron ipakita ang mga link sa lain-laing mga bersyon sa pinulongan niini nga panid, sama sa :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## Lokal Nga nginx Configuration

Kuhaa ang `.i18n/htm/main.yml` configuration file sa demo project isip usa ka pananglitan

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

Palihug usba una ang bili sa `host:` sa ibabaw sa imong domain name, sama sa `xxx.com` .

Unya, `i18n.site -n` , ang static nga panid mabuhat sa `out/main/htm` nga direktoryo.

Siyempre, mahimo usab nimo nga ma-enable ang ubang mga file sa pag-configure, sama sa una nga paghisgot sa pag-configure sa `main` aron mahimo `.i18n/htm/dist.package.json` ug `.i18n/htm/dist.yml` .

Dayon pagdagan `i18n.site -n -c dist` aron ang static nga panid mahimo nga `out/dist/htm` .

`nginx` mahimong itakda pinaagi sa pagtumong sa configuration sa ubos.

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# Ayaw pag-cache sa mga script sa trabahante sa server sa dugay nga panahon
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# Itakda ang mas taas nga oras sa cache alang sa ubang mga static nga kapanguhaan
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# Ibutang kung unsang static nga file ang gigamit sa crawler isip entry sa homepage
location = / {
  # Kung wala’y sulod $botLang , nagpasabut kini nga pag-access sa crawler ug pag-redirect sumala sa gitakda nga agianan sa pinulongan
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# Usa ka panid nga pagsumpo sa aplikasyon
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## I-Configure Ang Pagtipig Sa Butang Alang Sa Pag-Upload Sa Mga Static Nga File

Ang mga static nga file mahimong mamugna sa lokal, apan ang usa ka mas komon nga paagi mao ang pag-upload niini ngadto sa pagtipig sa butang.

Usba `out` nga gi-configure sa ibabaw sa :

```
out:
  - s3
```

Dayon, usba `~/.config/i18n.site.yml` ug idugang ang mosunod nga configuration :

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

Sa pag-configure, palihog usba `i18n.site` ngadto sa bili sa `host:` sa `.i18n/htm/main.yml` , daghang mga butang nga tindahan mahimong ma-configure ubos sa `s3` , ug ang `region` nga field kay opsyonal (daghang butang nga tindahan dili kinahanglan nga itakda kini nga field).

Dayon padagana `i18n.site -n` aron imantala pag-usab ang proyekto.

Kung imong giusab `~/.config/i18n.site.yml` ug gusto nimo nga i-upload pag-usab, palihug gamita ang mosunod nga sugo sa direktoryo sa gamut sa proyekto aron malimpyohan ang cache sa pag-upload :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## Configuration Sa cloudflare

Ngalan sa domain nga gi-host sa [cloudflare](//www.cloudflare.com)

### Mga Lagda Sa Pagkakabig

Idugang ang mga lagda sa pagkakabig sama sa gipakita sa ubos:

![](//p.3ti.site/1725436822.avif)

Ang code sa lagda mao ang mosunod, palihog usba ang code nga "i18n.site" sa imong domain name:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Mga Lagda Sa Pag-Cache

Idugang ang mga lagda sa cache sama sa mosunod:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Pag-Redirect Sa Mga Lagda

Ibutang ang mga lagda sa redirection ingon sa mosunod, palihog usba ang code "i18n.site" sa imong domain name

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

`URL redirect` Pilia ang dinamikong redirection, palihog usba `/en` sa redirection path `concat("/en",http.request.uri.path,".htm")` ngadto sa default nga lengguwahe nga gusto nimong iapil sa mga search engine.

## Baidu Intelligent Cloud Configuration

Kung kinahanglan nimo nga maghatag serbisyo sa mainland China, mahimo nimong gamiton [ang Baidu Smart Cloud](//cloud.baidu.com) .

Ang datos gi-upload sa Baidu Object Storage ug gigapos sa Baidu Content Distribution Network.

Dayon paghimo sa script sa [EdgeJS edge nga serbisyo](//console.bce.baidu.com/cdn/#/cdn/ejs/list) sama sa mosunod

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
  // Ang mga ulohan sa tubag mahimong itakda sa pag-debug sa output, sama sa out.XXX = 'MSG';
})
```

I-klik ang `Debug` , unya i-klik ang I-publish sa tibuok network.

![](//p.3ti.site/1725437754.avif)

## Abante Nga Paggamit: I-Apod-Apod Ang Trapiko Base Sa Resolusyon Sa Rehiyon

Kung gusto nimo maghatag serbisyo sa mainland China ug gusto usab `cloudflare` nga libre nga internasyonal nga trapiko, mahimo nimong gamiton `DNS` nga adunay resolusyon sa rehiyon.

Pananglitan, [ang Huawei Cloud DNS](https://www.huaweicloud.com) naghatag ug libre nga pagtuki sa rehiyon, diin ang trapiko sa mainland sa China makaagi sa Baidu Smart Cloud, ug ang internasyonal nga trapiko mahimong moagi sa `cloudflare` .

Adunay daghang mga lit-ag sa configuration sa `cloudflare` Ania ang pipila ka mga punto nga timan-an :

### Ang Ngalan Sa Domain Gi-Host Sa Ubang `DNS` , Kung Giunsa Paggamit `cloudflare`

Ibugkos una ang usa ka arbitraryong domain name sa `cloudflare` , ug dayon gamita `SSL/TLS` → custom nga domain name aron i-associate ang nag-unang domain name niini nga domain name.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` Dili Ma-Access Pinaagi Sa Custom Nga Domain Name

Tungod kay ang built `cloudflare` in nga butang storage `R2` dili ma-access sa usa ka customized domain name, usa ka third-party nga butang storage kinahanglan nga gamiton sa pagbutang sa static files.

Dinhi among gikuha [backblaze.com](https://www.backblaze.com) isip usa ka pananglitan aron ipakita kung giunsa ang pagbugkos sa mga butang sa ikatulo nga partido nga tipigan sa `cloudflare` .

Paghimo og balde sa `backblaze.com` , i-upload ang bisan unsang file, i-klik aron ma-browse ang file, ug kuhaa ang domain name sa `Friendly URL` , nga mao ang `f003.backblazeb2.com` dinhi.

![](//p.3ti.site/1725440783.avif)

Usba ang domain name gikan sa `CNAME` ngadto `f003.backblazeb2.com` sa `cloudflare` ug i-enable ang proxy.

![](//p.3ti.site/1725440896.avif)

Usba `cloudflare` sa `SSL` → encryption mode, ibutang sa `Full`

![](//p.3ti.site/1725438572.avif)

Idugang ang lagda sa pagkakabig sama sa gipakita sa ubos, unaha kini (ang una adunay labing ubos nga prayoridad):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` pilia ang dinamiko ug usba `your_bucketname` sa `concat("/file/your_bucketname",http.request.uri.path)` sa imong ngalan sa balde.

Dugang pa, sa `cloudflare` nga lagda sa pagkakabig sa ibabaw, `index.html` giusab ngadto sa `file/your_bucketname/index.html` , ug ang uban nga mga configuration nagpabilin nga pareho.

![](//p.3ti.site/1725441384.avif)