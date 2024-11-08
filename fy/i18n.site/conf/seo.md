# Search Engine Optimization (Seo)

## Prinsipe

`i18n.site` nimt in net-ferfarske arsjitektuer fan ien side oan `sitemap.xml`

As `User-Agent` fan it tagongsfersyk wurdt brûkt troch de sykmasjine-crawler, sil it fersyk fia `302` wurde omlaat nei de statyske side.

Brûk op statyske siden `link` om keppelings oan te jaan nei ferskate taalferzjes fan dizze side, lykas :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## Lokale Nginx-Konfiguraasje

Nim it `.i18n/htm/main.yml` konfiguraasjebestân yn it demoprojekt as foarbyld

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

Wizigje asjebleaft earst de wearde fan `host:` hjirboppe oan jo domeinnamme, lykas `xxx.com` .

Dan, `i18n.site -n` , sil de statyske side generearre wurde yn 'e `out/main/htm` map.

Fansels kinne jo ek oare konfiguraasjebestannen ynskeakelje, lykas earst ferwize nei de konfiguraasje fan `main` om `.i18n/htm/dist.package.json` en `.i18n/htm/dist.yml` te meitsjen.

Dan rinne `i18n.site -n -c dist` sadat de statyske side wurdt oanmakke nei `out/dist/htm` .

`nginx` kin ynsteld wurde troch te ferwizen nei de konfiguraasje hjirûnder.

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# Net cache server wurker skripts foar te lang
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# Stel langere cachetiden yn foar oare statyske boarnen
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# Stel yn hokker statyske bestân de crawler brûkt as de thússide-yngong
location = / {
  # As $botLang net leech is, betsjut it crawler tagong en trochferwizing neffens it ynstelde taalpaad
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# Applikaasjekonfiguraasje foar ien side
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## Konfigurearje Foarwerp Opslach Foar It Opladen Fan Statyske Triemmen

Statyske bestannen kinne lokaal oanmakke wurde, mar in mear foarkommende oanpak is om se te uploaden nei objektopslach.

Feroarje `out` nei :

```
out:
  - s3
```

Bewurkje dan `~/.config/i18n.site.yml` en foegje de folgjende konfiguraasje ta :

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

Yn 'e konfiguraasje feroarje asjebleaft `i18n.site` nei de wearde fan `host:` yn `.i18n/htm/main.yml` , meardere objektwinkels kinne wurde konfigureare ûnder `s3` , en it fjild `region` is opsjoneel (in protte objektwinkels hoege dit fjild net yn te stellen).

Run dan `i18n.site -n` om it projekt opnij te publisearjen.

As jo `~/.config/i18n.site.yml` wizige hawwe en opnij wolle uploade, brûk dan asjebleaft it folgjende kommando yn 'e projektrootmap om de uploadcache te wiskjen :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## cloudflare Konfiguraasje

Domeinnamme hosted oan [cloudflare](//www.cloudflare.com)

### Konverzje Regels

Foegje de konverzjeregels ta lykas hjirûnder werjûn:

![](//p.3ti.site/1725436822.avif)

De regelkoade is as folget, wizigje asjebleaft de koade "i18n.site" oan jo domeinnamme:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Caching Regels

Foegje cacheregels ta as folget:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Redirect Regels

Stel de omliedingsregels as folget yn, wizigje asjebleaft de koade "i18n.site" nei jo domeinnamme

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

`URL redirect` Selektearje dynamyske omlieding, wizigje asjebleaft `/en` yn trochferwizingspaad `concat("/en",http.request.uri.path,".htm")` nei de standerttaal dy't jo wolle dat sykmasjines opnimme.

## Baidu Intelligent Cloud Configuration

As jo tsjinsten moatte leverje oan it fêstelân fan Sina, kinne jo [Baidu Smart Cloud](//cloud.baidu.com) brûke.

Gegevens wurde opladen nei Baidu Object Storage en bûn oan Baidu Content Distribution Network.

Meitsje dan it skript yn [EdgeJS -tsjinst](//console.bce.baidu.com/cdn/#/cdn/ejs/list) as folget

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
  // Responskoppen kinne ynsteld wurde om útfier te debuggen, lykas out.XXX = 'MSG';
})
```

Klik op `Debug` , klik dan op Publisearje nei it hiele netwurk.

![](//p.3ti.site/1725437754.avif)

## Avansearre Gebrûk: Ferkear Fersprieden Op Basis Fan Regionale Resolúsje

As jo tsjinsten op it fêstelân fan Sina wolle leverje en ek `cloudflare` fergees ynternasjonaal ferkear wolle, kinne jo `DNS` brûke mei regionale resolúsje.

Bygelyks, [Huawei DNS](https://www.huaweicloud.com) biedt fergese regionale analyse, wêrmei't Sineesk ferkear fia Baidu Smart Cloud kin gean, en ynternasjonaal ferkear kin troch `cloudflare` gean.

D'r binne in protte pitfalls yn 'e konfiguraasje fan `cloudflare` Hjir binne in pear punten om op te merken :

### De Domeinnamme Wurdt Host Yn Oare `DNS` , Hoe Te Brûken `cloudflare`

Bine earst in willekeurige domeinnamme oan `cloudflare` , en brûk dan `SSL/TLS` → oanpaste domeinnamme om de haaddomeinnamme oan dizze domeinnamme te assosjearjen.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` Kin Net Tagonklik Wurde Fia in Oanpaste Domeinnamme

Om't de `cloudflare` objektopslach `R2` net tagonklik is troch in oanpaste domeinnamme, moat in objektopslach fan tredden brûkt wurde om statyske bestannen te pleatsen.

[backblaze.com](https://www.backblaze.com) nimme wy as foarbyld om te demonstrearjen hoe objekten fan tredden te binen om op `cloudflare` te bewarjen.

Meitsje in emmer by `backblaze.com` , upload elk bestân, klikje om it bestân te blêdzjen, en krije de domeinnamme fan `Friendly URL` , dat is `f003.backblazeb2.com` hjir.

![](//p.3ti.site/1725440783.avif)

Feroarje de domeinnamme fan `CNAME` nei `f003.backblazeb2.com` by `cloudflare` en aktivearje de proxy.

![](//p.3ti.site/1725440896.avif)

Wizigje `cloudflare` fan `SSL` → fersiferingsmodus, ynsteld op `Full`

![](//p.3ti.site/1725438572.avif)

Foegje de konverzjeregel ta lykas hjirûnder werjûn, set it earst (de earste hat de leechste prioriteit):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` selektearje dynamysk en wizigje `your_bucketname` yn `concat("/file/your_bucketname",http.request.uri.path)` oan jo emmernamme.

Derneist, yn 'e `cloudflare` konverzjeregel hjirboppe, wurdt `index.html` feroare yn `file/your_bucketname/index.html` , en oare konfiguraasjes bliuwe itselde.

![](//p.3ti.site/1725441384.avif)