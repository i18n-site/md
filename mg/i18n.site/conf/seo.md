# Search Engine Optimization (Seo)

## Toro Lalan'ny

`i18n.site` dia manangana maritrano pejy tokana tsy mamelombelona Mba hanamora ny fanondroana fikarohana, dia hisy pejy static misaraka sy `sitemap.xml` hatsangana ho an'ny crawlers.

Rehefa ampiasain'ny crawler motera fikarohana `User-Agent` amin'ny fangatahana fidirana, dia halefa any amin'ny pejy static amin'ny alàlan'ny `302` ny fangatahana.

Amin'ny pejy static, ampiasao `link` hanondroana rohy mankany amin'ny dikan-teny samihafa amin'ity pejy ity, toy ny :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## Fanofanana nginx Eo an-Toerana

Raiso ho ohatra ny rakitra fanamafisana `.i18n/htm/main.yml` ao amin'ny tetikasa demo

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

Ovao aloha ny sandan'ny `host:` etsy ambony amin'ny anaran'ny sehatrao, toy ny `xxx.com` .

Avy eo, `i18n.site -n` , ny pejy static dia hatsangana ao amin'ny lahatahiry `out/main/htm` .

Mazava ho azy fa azonao atao ihany koa ny mamela ny fisie fanamafisana hafa, toy ny fanondroana voalohany ny fanamafisana ny `main` mba hamoronana `.i18n/htm/dist.package.json` sy `.i18n/htm/dist.yml` .

Avy eo dia mandehana `i18n.site -n -c dist` mba hahatonga ny pejy static ho `out/dist/htm` .

`nginx` dia azo apetraka amin'ny alàlan'ny fanondroana ny fanamafisana etsy ambany.

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# Aza hadino ela loatra ny sora-tanan'ny mpiasa mpizara
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# Mametraha fotoana fitehirizana lava kokoa ho an'ny loharano static hafa
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# Ampidiro izay rakitra static ampiasain'ny crawler ho fidirana amin'ny pejy fandraisana
location = / {
  # Raha toa ka tsy foana $botLang
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# Fampiharana fampiharana pejy tokana
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## Ampifanaraho Ny Fitahirizana Zavatra Mba Hampidirana Rakitra Static

Ny rakitra static dia azo amboarina eo an-toerana, fa ny fomba mahazatra kokoa dia ny mampakatra azy ireo amin'ny fitahirizana zavatra.

`out` ho :

```
out:
  - s3
```

Avy eo, amboary `~/.config/i18n.site.yml` ary ampio ity fanitsiana manaraka ity :

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

Ao amin'ny fanamafisana, azafady ovay `i18n.site` amin'ny sandan'ny `host:` amin'ny `.i18n/htm/main.yml` , ny fivarotana zavatra marobe dia azo amboarina eo ambanin'ny `s3` , ary ny saha `region` dia tsy voatery (tsy mila mametraka an'io sehatra io ny fivarotana zavatra maro).

Dia mandehana `i18n.site -n` hamerenana ny tetikasa.

Raha nanova `~/.config/i18n.site.yml` ianao ary te-hampiakatra indray dia ampiasao ity baiko manaraka ity ao amin'ny lahatahiry fakan'ny tetikasa mba hanadio ny cache upload :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## Fametrahana cloudflare

Anaran'ny sehatra nampiantranoana ny [cloudflare](//www.cloudflare.com)

### Fitsipika Fiovam-Po

Ampio ny fitsipika fiovam-po araka ny aseho eto ambany:

![](//p.3ti.site/1725436822.avif)

Ny fehezan-dalàna dia toy izao manaraka izao, azafady ovao ny kaody "i18n.site" amin'ny anaran'ny sehatra misy anao:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Fitsipika Caching

Ampio fitsipika cache toy izao manaraka izao:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Redirect Fitsipika

Ataovy toy izao manaraka izao ny fitsipika redirection, azafady ovao ny kaody "i18n.site" amin'ny anaran'ny sehatra misy anao

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

`URL redirect` Safidio ny redirection dynamique, azafady ovao `/en` amin'ny lalan'ny redirection `concat("/en",http.request.uri.path,".htm")` mankany amin'ny fiteny mahazatra tianao hampidirana motera fikarohana.

## Baidu Intelligent Cloud Configuration

Raha mila manome tolotra ho an'ny tanibe Shina ianao dia afaka mampiasa [Baidu Smart Cloud](//cloud.baidu.com) .

Ny angona dia ampidirina ao amin'ny Baidu Object Storage ary mifamatotra amin'ny Baidu Content Distribution Network.

Avy eo mamorona ny script ao amin'ny [serivisy EdgeJS](//console.bce.baidu.com/cdn/#/cdn/ejs/list) toy izao manaraka izao

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
  // Ny lohatenin'ny valin-kafatra dia azo apetraka ho debug ny vokatra, toy ny out.XXX = 'MSG';
})
```

Kitiho `Debug` , ary tsindrio Avoaka amin'ny tambajotra manontolo.

![](//p.3ti.site/1725437754.avif)

## Fampiasana Mandroso: Zarao Ny Fifamoivoizana Mifototra Amin'ny Fanapahan-Kevitra Isam-Paritra

Raha te-hanome tolotra any amin'ny tanibe Shina ianao ary mila fifamoivoizana iraisam-pirenena maimaim-poana `cloudflare` dia azonao ampiasaina `DNS` miaraka amin'ny fanapahan-kevitra isam-paritra.

Ohatra, [Huawei Cloud DNS](https://www.huaweicloud.com) dia manome famakafakana isam-paritra maimaim-poana, izay ahafahan'ny fifamoivoizana Shinoa mandeha amin'ny Baidu Smart Cloud, ary ny fifamoivoizana iraisam-pirenena dia afaka mandalo `cloudflare` .

Betsaka ny fandrika ao amin'ny fanamafisana ny `cloudflare` Ireto misy teboka vitsivitsy tokony homarihina :

### Ny Anaran-Tsehatra Dia Nampiantranoina Amin'ny `DNS` Hafa, Ny Fomba Fampiasana `cloudflare`

Ampifandraiso amin'ny `cloudflare` aloha ny anaran-tsehatra tsy manara-penitra, ary avy eo dia ampiasao ny anaran-tsehatra manokana `SSL/TLS` → mba hampifandray ny anaran-tsehatra lehibe amin'ity anaran-tsehatra ity.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` Dia Tsy Azo Idirana Amin'ny Anaran'ny Sehatra Manokana

Satria tsy azo idirana amin'ny anaran'ny sehatra `cloudflare` ny fitehirizana zavatra `R2` naorina, dia mila ampiasaina ny fitehirizana zavatra avy amin'ny antoko fahatelo hametrahana rakitra static.

Raisintsika ho [backblaze.com](https://www.backblaze.com) ny fomba famatorana ireo zavatra hafa hotehirizina ao amin'ny `cloudflare` !

Mamorona siny amin'ny `backblaze.com` , ampidiro ny rakitra rehetra, tsindrio raha hijery ilay rakitra, ary alao ny anaran'ny sehatra `Friendly URL` , izay `f003.backblazeb2.com` eto.

![](//p.3ti.site/1725440783.avif)

Hanova ny anaran'ny sehatra `CNAME` ka hatramin'ny `f003.backblazeb2.com` amin'ny `cloudflare` ary avelao ny proxy.

![](//p.3ti.site/1725440896.avif)

Amboary `cloudflare` amin'ny `SSL` → fomba fanafenana, atao `Full`

![](//p.3ti.site/1725438572.avif)

Ampio ny fitsipika fiovam-po araka ny aseho eto ambany, ataovy voalohany (ny voalohany dia manana laharam-pahamehana ambany indrindra):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` safidio ny dinamika ary ovao `your_bucketname` amin'ny `concat("/file/your_bucketname",http.request.uri.path)` amin'ny anaran'ny sinyo.

Ho fanampin'izany, ao amin'ny fitsipika fiovam-po `cloudflare` etsy ambony, `index.html` dia novaina ho `file/your_bucketname/index.html` , ary ny fanamafisana hafa dia tsy miova.

![](//p.3ti.site/1725441384.avif)