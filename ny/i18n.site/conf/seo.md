# Search Engine Optimization (Seo)

## Mfundo

`i18n.site` imatengera kapangidwe ka tsamba limodzi kosatsitsimutsa Kuti mutsogolere kusakira, tsamba lapadera lokhazikika ndi `sitemap.xml` lidzapangidwa kuti okwawa azitha kukwawa.

Pamene `User-Agent` ya pempho lofikira likugwiritsidwa ntchito ndi chokwawa cha injini zosakira, pempholo lidzatumizidwa ku tsamba lokhazikika kudzera pa `302` .

Pamasamba osasunthika, gwiritsani ntchito `link` kuti muwonetse maulalo amitundu yosiyanasiyana yatsambali, monga :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## Kusintha Kwa nginx Kwanuko

Tengani fayilo yosinthira `.i18n/htm/main.yml` mu polojekiti yachiwonetsero monga chitsanzo

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

Chonde sinthani kaye mtengo wa `host:` pamwamba pa dzina lanu, monga `xxx.com` .

Kenako, `i18n.site -n` , tsamba lokhazikika lidzapangidwa mu `out/main/htm` directory.

Zoonadi, mungathenso kulola mafayilo ena osinthika, monga poyamba kunena za kasinthidwe ka `main` kuti mupange `.i18n/htm/dist.package.json` ndi `.i18n/htm/dist.yml` .

Kenako thamangani `i18n.site -n -c dist` kuti tsamba lokhazikika lipangidwe ku `out/dist/htm` .

`nginx` ikhoza kukhazikitsidwa potengera kasinthidwe pansipa.

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# Osasunga zolemba za ogwira ntchito pa seva kwa nthawi yayitali
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# Khazikitsani nthawi yotalikirapo posungira zinthu zina zosasunthika
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# Khazikitsani fayilo yokhazikika yomwe chokwawa amagwiritsa ntchito ngati tsamba loyambira
location = / {
  # Ngati $botLang
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# Kukonzekera kwa tsamba limodzi
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## Konzani Malo Osungira Zinthu Kuti Mukweze Mafayilo Osasintha

Mafayilo osasunthika amatha kupangidwa kwanuko, koma njira yodziwika bwino ndikuyiyika pazosungira zinthu.

Sinthani `out` yokonzedwa pamwambapa kuti :

```
out:
  - s3
```

Kenako, sinthani `~/.config/i18n.site.yml` ndikuwonjezera masinthidwe awa :

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

Pokonzekera, chonde sinthani `i18n.site` ku mtengo wa `host:` mu `.i18n/htm/main.yml` , masitolo ambiri azinthu akhoza kukhazikitsidwa pansi pa `s3` , ndipo gawo la `region` ndilosankha (zinthu zambiri zosungiramo zinthu sizikusowa kukhazikitsa gawo ili).

Kenako thamangani `i18n.site -n` kuti musindikizenso polojekitiyi.

Ngati mwasintha `~/.config/i18n.site.yml` ndipo mukufuna kuyikanso, chonde gwiritsani ntchito lamulo ili m'ndandanda wa mizu ya polojekiti kuti muchotse posungira :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## cloudflare Kasinthidwe

Dzina la Domain lomwe lili ndi [cloudflare](//www.cloudflare.com)

### Malamulo Otembenuka

Onjezani malamulo otembenuka monga momwe zilili pansipa:

![](//p.3ti.site/1725436822.avif)

Lamuloli lili motere, chonde sinthani kachidindo "i18n.site" kukhala dzina lanu:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Malamulo Caching

Onjezani malamulo a cache motere:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Londoleranso Malamulo

Khazikitsani malamulo owongolera motere, chonde sinthani kachidindo "i18n.site" ku dzina lanu

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

`URL redirect` Sankhani mayendedwe osinthika, chonde sinthani `/en` munjira yolowera `concat("/en",http.request.uri.path,".htm")` kupita kuchilankhulo chosasinthika chomwe mukufuna kuti injini zosakira ziphatikizidwe.

## Kukonzekera Kwamtambo Wa Baidu Intelligent

Ngati mukufuna kupereka chithandizo ku China, mutha kugwiritsa ntchito [Baidu Smart Cloud](//cloud.baidu.com) .

Deta imakwezedwa ku Baidu Object Storage ndikumangika ku Baidu Content Distribution Network.

Kenako pangani script mu [EdgeJS](//console.bce.baidu.com/cdn/#/cdn/ejs/list)

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
  // Mitu yamayankho ikhoza kukhazikitsidwa kuti iwononge zotsatira, monga out.XXX = 'MSG';
})
```

Dinani `Debug` , kenako dinani Sindikizani ku netiweki yonse.

![](//p.3ti.site/1725437754.avif)

## Kugwiritsa Ntchito Mwaukadaulo: Gawani Kuchuluka Kwa Magalimoto Potengera Kusamvana Kwa Dera

Ngati mukufuna kupereka chithandizo ku China komanso mukufuna `cloudflare` magalimoto aulere apadziko lonse lapansi, mutha kugwiritsa ntchito `DNS` yokhala ndi malingaliro achigawo.

Mwachitsanzo, [Mtambo DNS Huawei](https://www.huaweicloud.com) umapereka kusanthula kwaulere kwa chigawo, komwe magalimoto aku China amatha kudutsa Baidu Smart Cloud, ndipo magalimoto apadziko lonse lapansi amatha kudutsa `cloudflare` .

Pali misampha yambiri mu kasinthidwe ka `cloudflare` Nazi mfundo zochepa zoti muzindikire :

### Dzina Lachidziwitso Limasungidwa Mu Zina `DNS` , Momwe Mungagwiritsire Ntchito `cloudflare`

Choyamba sungani dzina lachidziwitso ku `cloudflare` , ndiyeno gwiritsani ntchito `SSL/TLS` → dzina lachidziwitso kuti mugwirizanitse dzina lachidziwitso ku dzina ili.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` Singapezeke Kudzera Mu Dzina Lodziwika Bwino

Chifukwa `cloudflare` chinthu `R2` sichingapezeke ndi dzina lachidziwitso chokhazikika, kusungirako chinthu chachitatu kuyenera kugwiritsidwa ntchito kuyika mafayilo osasunthika.

Apa tikutenga [backblaze.com](https://www.backblaze.com) kusonyeza momwe tingamangirire zinthu za chipani chachitatu kuti zisungidwe pa `cloudflare` .

Pangani chidebe pa `backblaze.com` , kwezani fayilo iliyonse, dinani kuti musakatule fayilo, ndikupeza dzina lachidziwitso la `Friendly URL` , lomwe lili `f003.backblazeb2.com` apa.

![](//p.3ti.site/1725440783.avif)

Sinthani dzina lachidziwitso kuchokera ku `CNAME` kupita ku `f003.backblazeb2.com` pa `cloudflare` ndikuyambitsa proxy.

![](//p.3ti.site/1725440896.avif)

Sinthani `cloudflare` ya `SSL` → encryption mode, khalani `Full`

![](//p.3ti.site/1725438572.avif)

Onjezani lamulo la kutembenuka monga momwe likusonyezera pansipa, ikani poyamba (loyamba ndilofunika kwambiri):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` sankhani zosinthika ndikusintha `your_bucketname` mu `concat("/file/your_bucketname",http.request.uri.path)` ku dzina la ndowa yanu.

Kuonjezera apo, mu lamulo la kutembenuka kwa `cloudflare` pamwambapa, `index.html` imasinthidwa kukhala `file/your_bucketname/index.html` , ndipo zosintha zina zimakhala zofanana.

![](//p.3ti.site/1725441384.avif)