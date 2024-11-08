# Shakisha Moteri Optimisiyoneri (Seo)

## Ihame

`i18n.site` ifata imiterere idahwitse yububiko bumwe Kugirango byoroherezwe gushakisha, urupapuro rwihariye ruhagaze hamwe na `sitemap.xml` bizakorwa kubikurura.

Iyo `User-Agent` yo gusaba gukoreshwa ikoreshwa na moteri ishakisha moteri, icyifuzo kizoherezwa kurupapuro ruhagaze binyuze kuri `302` .

Kurupapuro ruhagaze, koresha `link` kugirango werekane amahuza yindimi zitandukanye zuru rupapuro, nka :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## Ibikoresho Bya nginx Byaho

Fata dosiye `.i18n/htm/main.yml` iboneza mumushinga wa demo nkurugero

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

Nyamuneka banza uhindure agaciro ka `host:` hejuru kurizina rya domaine, nka `xxx.com` .

Hanyuma, `i18n.site -n` , urupapuro ruhagaze ruzakorwa mububiko `out/main/htm` .

Birumvikana, urashobora kandi gushoboza izindi dosiye ziboneza, nko kubanza kuvuga iboneza rya `main` kugirango ukore `.i18n/htm/dist.package.json` na `.i18n/htm/dist.yml` .

Noneho kora `i18n.site -n -c dist` kugirango page ihagaze izakorwa kuri `out/dist/htm` .

`nginx` irashobora gushyirwaho ukoresheje iboneza hepfo.

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# Ntukabike seriveri yumukozi inyandiko igihe kirekire
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# Shiraho igihe kirekire cache kubindi bikoresho bihamye
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# Shiraho dosiye ihamye igikurura ikoresha nkurupapuro rwinjira
location = / {
  # Niba $botLang
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# Urupapuro rumwe rwa porogaramu iboneza
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## Kugena Ububiko Bwibintu Byo Kohereza Dosiye Zihamye

Amadosiye ahamye arashobora gukorerwa mugace, ariko uburyo busanzwe ni ukuyashyira mububiko bwibintu.

Hindura `out` yagizwe hejuru kuri :

```
out:
  - s3
```

Noneho, hindura `~/.config/i18n.site.yml` hanyuma wongere iboneza bikurikira :

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

Muboneza, nyamuneka uhindure `i18n.site` kubiciro bya `host:` muri `.i18n/htm/main.yml` , ububiko bwibintu byinshi burashobora gushyirwaho munsi ya `s3` , kandi umurima wa `region` ntubishaka (ububiko bwibintu byinshi ntibukeneye gushyiraho uyu murima).

Noneho kora `i18n.site -n` kugirango utangaze umushinga.

Niba warahinduye `~/.config/i18n.site.yml` ukaba ushaka kongera kohereza, nyamuneka koresha itegeko rikurikira mububiko bwumushinga kugirango usibe cache yoherejwe :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## Ibicu

Izina rya domeni ryakiriwe kuri [cloudflare](//www.cloudflare.com)

### Amategeko Yo Guhindura

Ongeraho amategeko yo guhindura nkuko bigaragara hano:

![](//p.3ti.site/1725436822.avif)

Amategeko agenga amategeko ni aya akurikira, nyamuneka uhindure kode "i18n.urubuga" ku izina ryawe:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Amategeko Yo Kubika

Ongeraho amategeko ya cache kuburyo bukurikira:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Ohereza Amategeko

Shiraho amategeko yo kuyobora nkuko bikurikira, nyamuneka uhindure kode "i18n.urubuga" mwizina rya domaine

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

`URL redirect` Hitamo redirection dinamike, nyamuneka uhindure `/en` munzira yo kuyobora `concat("/en",http.request.uri.path,".htm")` kururimi rusanzwe ushaka moteri zishakisha.

## Iboneza Rya Baidu Ubwenge Ibicu

Niba ukeneye gutanga serivisi kumugabane wUbushinwa, urashobora gukoresha [Baidu Smart Cloud](//cloud.baidu.com) .

Amakuru yoherejwe mububiko bwibikoresho bya Baidu kandi bihujwe na Baidu Ibikwirakwizwa.

Noneho kora inyandiko muri [serivise yumurongo ukurikira EdgeJS](//console.bce.baidu.com/cdn/#/cdn/ejs/list)

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
  // Imitwe yo gusubiza irashobora gushyirwaho mugusohora ibyasohotse, nka hanze.XXX = 'MSG';
})
```

Kanda `Debug` , hanyuma ukande Gutangaza kumurongo wose.

![](//p.3ti.site/1725437754.avif)

## Imikoreshereze Yambere: Gukwirakwiza Traffic Ukurikije Imyanzuro Yakarere

Niba ushaka gutanga serivise kumugabane wUbushinwa kandi ukaba ushaka `cloudflare` traffic traffic yubusa, urashobora gukoresha `DNS` hamwe nicyemezo cyakarere.

Kurugero, [Igicu cya DNS](https://www.huaweicloud.com) gitanga isesengura ryubusa mu karere, hamwe n’imodoka zo ku mugabane w’Ubushinwa zishobora kunyura muri Baidu Smart Cloud, kandi traffic mpuzamahanga ishobora kunyura kuri `cloudflare` .

Hano hari imitego myinshi muburyo bwa `cloudflare` Hano hari ingingo nke ugomba kumenya :

### Izina Rya Domaine Ryakiriwe Mubindi `DNS` , Uburyo Bwo Gukoresha `cloudflare`

Banza uhuze izina rya domaine uko bishakiye kuri `cloudflare` , hanyuma ukoreshe `SSL/TLS` name izina rya domaine yihariye kugirango uhuze izina nyamukuru nizina ryizina.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` Ntishobora Kugerwaho Binyuze Mwizina Ryigenga

Kuberako ibyubatswe `cloudflare` mububiko bwibintu `R2` ntibishobora kugerwaho nizina rya domaine yihariye, ububiko bwikintu cya gatatu bugomba gukoreshwa mugushira dosiye zihamye.

[backblaze.com](https://www.backblaze.com) dufata nkurugero rwo kwerekana uburyo bwo guhuza ibintu byabandi-kubikwa kuri `cloudflare` .

Kora indobo kuri `backblaze.com` , ohereza dosiye iyariyo yose, kanda kugirango urebe dosiye, hanyuma ubone izina rya domaine ya `Friendly URL` , ni `f003.backblazeb2.com` hano.

![](//p.3ti.site/1725440783.avif)

Hindura izina rya domaine kuva `CNAME` kugeza `f003.backblazeb2.com` kuri `cloudflare` hanyuma ushoboze proksi.

![](//p.3ti.site/1725440896.avif)

Hindura `cloudflare` ya `SSL` → uburyo bwo kugenzura, shyira kuri `Full`

![](//p.3ti.site/1725438572.avif)

Ongeraho itegeko ryo guhindura nkuko bigaragara hano hepfo, shyira imbere (iyambere ifite icyambere cyo hasi):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` hitamo dinamike hanyuma uhindure `your_bucketname` muri `concat("/file/your_bucketname",http.request.uri.path)` kurizina ryindobo.

Mubyongeyeho, mumategeko `cloudflare` yo guhindura hejuru, `index.html` yahinduwe kuri `file/your_bucketname/index.html` , nibindi bikoresho bikomeza kuba bimwe.

![](//p.3ti.site/1725441384.avif)