# Serĉilo-Optimumigo (Seo)

## Principo

`i18n.site` adoptas ne-refreŝigan unupaĝan arkitekturon Por faciligi serĉindeksadon, aparta statika paĝo kaj `sitemap.xml` estos generitaj por rampi.

Kiam `User-Agent` de la alirpeto estas uzata de la serĉilo-crawler, la peto estos redirektita al la statika paĝo per `302` .

Sur senmovaj paĝoj, uzu `link` por indiki ligilojn al malsamaj lingvaj versioj de ĉi tiu paĝo, kiel :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## Loka Nginx-Agordo

Prenu la agordan dosieron `.i18n/htm/main.yml` en la demo-projekto kiel ekzemplon

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

Bonvolu unue modifi la valoron de `host:` supre al via domajna nomo, kiel `xxx.com` .

Tiam, `i18n.site -n` , la statika paĝo estos generita en la `out/main/htm` dosierujo.

Kompreneble, vi ankaŭ povas ebligi aliajn agordajn dosierojn, kiel unue rilati al la agordo de `main` por krei `.i18n/htm/dist.package.json` kaj `.i18n/htm/dist.yml` .

Tiam rulu `i18n.site -n -c dist` por ke la statika paĝo estos generita al `out/dist/htm` .

`nginx` povas esti agordita per referenco al la agordo sube.

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# Ne konservu la skriptojn de serviloj por tro longe
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# Agordu pli longajn kaŝmemortempojn por aliaj senmovaj rimedoj
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# Fiksu kiun senmovan dosieron la rampilo uzas kiel la hejmpaĝon
location = / {
  # Se $botLang ne estas malplena, tio signifas aliron kaj alidirektilon laŭ la fiksita lingvovojo
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# Unupaĝa aplika agordo
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## Agordu Objektan Stokadon Por Alŝuti Senmovajn Dosierojn

Senmovaj dosieroj povas esti generitaj loke, sed pli ofta aliro estas alŝuti ilin al objektostokado.

Modifi `out` agorditan supre al :

```
out:
  - s3
```

Poste, redaktu `~/.config/i18n.site.yml` kaj aldonu la sekvan agordon :

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

En la agordo, bonvolu ŝanĝi `i18n.site` al la valoro de `host:` en `.i18n/htm/main.yml` , pluraj objektobutikoj povas esti agorditaj sub `s3` , kaj la `region` kampo estas laŭvola (multaj objektobutikoj ne bezonas agordi ĉi tiun kampon).

Tiam rulu `i18n.site -n` por reeldoni la projekton.

Se vi modifis `~/.config/i18n.site.yml` kaj volas re-alŝuti, bonvolu uzi la jenan komandon en la projekta radika dosierujo por forigi la alŝutan kaŝmemoron :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## Agordo De cloudflare

Domajna nomo gastigita al [cloudflare](//www.cloudflare.com)

### Reguloj De Konvertiĝo

Aldonu la konvertajn regulojn kiel montrite sube:

![](//p.3ti.site/1725436822.avif)

La regulkodo estas kiel sekvas, bonvolu modifi la kodon "i18n.site" al via domajna nomo:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Konservado De Reguloj

Aldonu kaŝmemorregulojn jene:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Redirektaj Reguloj

Agordu la alidirektajn regulojn jene, bonvolu modifi la kodon "i18n.site" al via domajna nomo

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

`URL redirect` Elektu dinamikan alidirekton, bonvolu modifi `/en` en alidirekta vojo `concat("/en",http.request.uri.path,".htm")` al la defaŭlta lingvo, kiun vi volas, ke serĉiloj inkludu.

## Baidu Inteligenta Nuba Agordo

Se vi bezonas provizi servojn al kontinenta Ĉinio, vi povas uzi [Baidu Smart Cloud](//cloud.baidu.com) .

Datumoj estas alŝutitaj al Baidu Object Storage kaj ligitaj al Baidu Content Distribution Network.

Poste kreu la skripton en [edge EdgeJS servo](//console.bce.baidu.com/cdn/#/cdn/ejs/list) jene

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
  // Respondaj kaplinioj povas esti agorditaj por sencimigi eligon, kiel ekstere.XXX = 'MSG';
})
```

Alklaku `Debug` , tiam alklaku Publiki al la tuta reto.

![](//p.3ti.site/1725437754.avif)

## Altnivela Uzado: Distribuu Trafikon Laŭ Regiona Rezolucio

Se vi volas provizi servojn en kontinenta Ĉinio kaj ankaŭ volas `cloudflare` senpagan internacian trafikon, vi povas uzi `DNS` kun regiona rezolucio.

Ekzemple, [Huawei Cloud DNS](https://www.huaweicloud.com) provizas senpagan regionan analizon, per kiu kontinenta ĉina trafiko povas trairi Baidu Smart Cloud, kaj internacia trafiko povas trairi `cloudflare` .

Estas multaj malfacilaĵoj en la agordo de `cloudflare` Jen kelkaj punktoj por noti :

### La Domajna Nomo Estas Gastigita en Alia `DNS` , Kiel Uzi `cloudflare`

Unue ligu arbitran domajnan nomon al `cloudflare` , kaj poste uzu `SSL/TLS` → kutiman domajnan nomon por asocii la ĉefan domajnan nomon al ĉi tiu domajna nomo.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` Ne Alireblas Per Kutima Domajna Nomo

Ĉar la `cloudflare` objektostokado `R2` ne estas alirebla per personigita domajna nomo, triaparta objektostokado devas esti uzata por meti senmovajn dosierojn.

Ĉi [backblaze.com](https://www.backblaze.com) ni prenas kiel ekzemplon por montri kiel ligi triajn objektojn por esti stokitaj ĉe `cloudflare` .

Kreu sitelon ĉe `backblaze.com` , alŝutu ajnan dosieron, alklaku por foliumi la dosieron kaj ricevu la domajnan nomon de `Friendly URL` , kiu estas `f003.backblazeb2.com` ĉi tie.

![](//p.3ti.site/1725440783.avif)

Ŝanĝu la domajnan nomon de `CNAME` al `f003.backblazeb2.com` ĉe `cloudflare` kaj ebligu la prokurilon.

![](//p.3ti.site/1725440896.avif)

Modifi `cloudflare` el `SSL` → ĉifrareĝimo, agordu al `Full`

![](//p.3ti.site/1725438572.avif)

Aldonu la konvertan regulon kiel montrite sube, metu ĝin unue (la unua havas la plej malaltan prioritaton):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` elektu dinamikan kaj modifi `your_bucketname` en `concat("/file/your_bucketname",http.request.uri.path)` al via sitelo-nomo.

Krome, en la `cloudflare` konverta regulo supre, `index.html` estas ŝanĝita al `file/your_bucketname/index.html` , kaj aliaj agordoj restas la samaj.

![](//p.3ti.site/1725441384.avif)