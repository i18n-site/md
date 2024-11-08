# Search Engine Optimization (Seo)

## Prensip

`i18n.site` adopte yon achitekti yon sèl paj ki pa rafrechi Pou fasilite rechèch la, yo pral pwodwi yon paj estatik separe ak `sitemap.xml` pou crawlers yo.

Lè crawler motè rechèch la itilize `User-Agent` demann aksè a, demann lan pral redireksyon sou paj estatik la atravè `302` .

Nan paj estatik, sèvi ak `link` pou endike lyen ki mennen nan diferan lang vèsyon paj sa a, tankou :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## Konfigirasyon Lokal nginx

Pran fichye konfigirasyon `.i18n/htm/main.yml` nan pwojè Demo a kòm yon egzanp

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

Tanpri premye modifye valè a nan `host:` pi wo a nan non domèn ou, tankou `xxx.com` .

Lè sa a, `i18n.site -n` , paj estatik la pral pwodwi nan anyè a `out/main/htm` .

Natirèlman, ou ka tou pèmèt lòt fichye konfigirasyon, tankou premye refere a konfigirasyon an nan `main` yo kreye `.i18n/htm/dist.package.json` ak `.i18n/htm/dist.yml` .

Lè sa a, kouri `i18n.site -n -c dist` pou paj estatik la pral pwodwi a `out/dist/htm` .

`nginx` ka mete lè w refere a konfigirasyon ki anba a.

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# Pa kache scripts travayè sèvè pou twò lontan
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# Mete pi long tan kachèt pou lòt resous estatik
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# Mete ki fichye estatik krole a itilize kòm antre nan paj dakèy la
location = / {
  # Si $botLang pa vid, sa vle di aksè ak redireksyon crawler selon chemen lang lan
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# Konfigirasyon aplikasyon yon sèl paj
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## Konfigure Depo Objè Pou Telechaje Fichye Estatik

Fichye estatik yo ka pwodwi lokalman, men yon apwòch ki pi komen se telechaje yo nan depo objè.

Modifye `out` ki konfigire pi wo a pou :

```
out:
  - s3
```

Lè sa a, modifye `~/.config/i18n.site.yml` epi ajoute konfigirasyon sa a :

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

Nan konfigirasyon an, tanpri chanje `i18n.site` nan valè a nan `host:` nan `.i18n/htm/main.yml` , magazen objè miltip ka configuré anba `s3` , ak jaden an `region` se opsyonèl (anpil magazen objè pa bezwen mete jaden sa a).

Lè sa a, kouri `i18n.site -n` pou repibliye pwojè a.

Si ou te modifye `~/.config/i18n.site.yml` epi ou vle re-upload, tanpri itilize lòd sa a nan anyè rasin pwojè a pou netwaye kachèt upload la :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## Konfigirasyon cloudflare

Non domèn akomode [cloudflare](//www.cloudflare.com)

### Règ Konvèsyon

Ajoute règ konvèsyon yo jan yo montre anba a:

![](//p.3ti.site/1725436822.avif)

Kòd règ la se jan sa a, tanpri modifye kòd la "i18n.site" nan non domèn ou:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Règ Kachèt

Ajoute règ kachèt jan sa a:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Règ Redireksyon

Mete règ yo redireksyon jan sa a, tanpri modifye kòd la "i18n.site" nan non domèn ou

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

`URL redirect` Chwazi redireksyon dinamik, tanpri modifye `/en` nan chemen redireksyon `concat("/en",http.request.uri.path,".htm")` nan lang default ou vle motè rechèch la genyen ladan li.

## Baidu Entelijan Cloud Konfigirasyon

Si ou bezwen bay sèvis nan tè pwensipal Lachin, ou ka itilize [Baidu Smart Cloud](//cloud.baidu.com) .

Done yo telechaje nan Depo objè Baidu epi yo mare nan Baidu Content Distribution Network.

Lè sa a, kreye script la nan [sèvis EdgeJS](//console.bce.baidu.com/cdn/#/cdn/ejs/list) jan sa a

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
  // Tèt repons yo ka mete debug pwodiksyon, tankou out.XXX = 'MSG';
})
```

Klike sou `Debug` , apresa klike sou Pibliye nan tout rezo a.

![](//p.3ti.site/1725437754.avif)

## Itilizasyon Avanse: Distribye Trafik Ki Baze Sou Rezolisyon Rejyonal Yo

Si ou vle bay sèvis nan tè pwensipal Lachin epi tou vle `cloudflare` gratis trafik entènasyonal, ou ka itilize `DNS` ak rezolisyon rejyonal yo.

Pou egzanp, [Huawei Cloud DNS](https://www.huaweicloud.com) bay analiz rejyonal gratis, ak ki trafik tè pwensipal Chinwa ka ale nan Baidu Smart Cloud, ak trafik entènasyonal ka ale nan `cloudflare` .

Gen anpil enkonvenyans nan konfigirasyon an nan `cloudflare` Men kèk pwen pou sonje :

### Non Domèn Akomode Nan Lòt `DNS` , Kijan Pou Itilize `cloudflare`

Premyèman mare yon non domèn abitrè a `cloudflare` , epi sèvi ak `SSL/TLS` → non domèn koutim pou asosye non domèn prensipal la ak non domèn sa a.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` Pa Ka Jwenn Aksè Atravè Yon Non Domèn Koutim

Paske bati `cloudflare` nan depo objè `R2` pa ka jwenn aksè pa yon non domèn Customized, yon depo objè twazyèm-pati bezwen yo dwe itilize yo mete fichye estatik.

Isit [backblaze.com](https://www.backblaze.com) nou pran kòm yon egzanp pou montre kouman yo mare objè twazyèm pati yo dwe estoke nan `cloudflare` .

Kreye yon bokit nan `backblaze.com` , telechaje nenpòt fichye, klike sou yo browse fichye a, epi jwenn non an domèn nan `Friendly URL` , ki se `f003.backblazeb2.com` isit la.

![](//p.3ti.site/1725440783.avif)

Chanje non domèn soti nan `CNAME` a `f003.backblazeb2.com` nan `cloudflare` epi pèmèt prokurasyon an.

![](//p.3ti.site/1725440896.avif)

Modifye `cloudflare` nan `SSL` → mòd chifreman, mete sou `Full`

![](//p.3ti.site/1725438572.avif)

Ajoute règ konvèsyon an jan yo montre anba a, mete l an premye (premye a gen priyorite ki pi ba a):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` chwazi dinamik ak modifye `your_bucketname` nan `concat("/file/your_bucketname",http.request.uri.path)` nan non bokit ou.

Anplis de sa, nan règ konvèsyon `cloudflare` ki pi wo a, `index.html` chanje a `file/your_bucketname/index.html` , ak lòt konfigirasyon rete menm jan an.

![](//p.3ti.site/1725441384.avif)