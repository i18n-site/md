# Search Engine Optimization (Seo)

## Prinsipna

`i18n.site` adopts a non-refresh arsitéktur kaca tunggal Dina raraga mempermudah indexing pilarian, kaca statik misah jeung `sitemap.xml` bakal dihasilkeun pikeun crawlers mun ngorondang.

Nalika `User-Agent` tina pamundut aksés dipaké ku Mapay search engine, pamundut bakal dialihkeun ka kaca statik via `302` .

Dina kaca statik, paké `link` pikeun nunjukkeun tumbu ka vérsi basa anu béda dina kaca ieu, sapertos :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## Konfigurasi nginx Lokal

Candak file konfigurasi `.i18n/htm/main.yml` dina proyék demo sabagé conto

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

Mangga robih heula nilai `host:` di luhur kana nami domain anjeun, sapertos `xxx.com` .

Lajeng, `i18n.site -n` , kaca statik bakal dihasilkeun dina `out/main/htm` diréktori.

Tangtosna, anjeun ogé tiasa ngaktipkeun file konfigurasi anu sanés, sapertos ngarujuk heula kana konfigurasi `main` pikeun nyiptakeun `.i18n/htm/dist.package.json` sareng `.i18n/htm/dist.yml` .

Lajeng ngajalankeun `i18n.site -n -c dist` supados kaca statik bakal dihasilkeun kana `out/dist/htm` .

`nginx` tiasa diatur ku ngarujuk kana konfigurasi di handap ieu.

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# Ulah cache skrip worker server pikeun lila teuing
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# Setel waktos cache anu langkung panjang pikeun sumber statik anu sanés
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# Atur file statik mana anu dianggo ku crawler salaku éntri halaman utama
location = / {
  # Upami $botLang
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# Konfigurasi aplikasi kaca tunggal
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## Konpigurasikeun Neundeun Objék Pikeun Unggah File Statik

File statik tiasa didamel sacara lokal, tapi pendekatan anu langkung umum nyaéta unggah kana panyimpenan obyék.

Robah `out` anu dikonpigurasi di luhur jadi :

```
out:
  - s3
```

Teras, édit `~/.config/i18n.site.yml` sareng tambahkeun konfigurasi ieu :

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

Dina konfigurasi, mangga robah `i18n.site` kana nilai `host:` di `.i18n/htm/main.yml` , sababaraha toko obyék bisa ngonpigurasi handapeun `s3` , sarta widang `region` nyaeta pilihan (loba toko obyék teu kedah nyetél widang ieu).

Lajeng ngajalankeun `i18n.site -n` mun republish proyék.

Upami anjeun parantos ngarobih `~/.config/i18n.site.yml` sareng hoyong unggah deui, punten nganggo paréntah di handap ieu dina diréktori akar proyék pikeun mupus cache unggah :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## Konfigurasi cloudflare

Ngaran domain hosted ka [cloudflare](//www.cloudflare.com)

### Aturan Konvérsi

Tambahkeun aturan konvérsi sapertos anu dipidangkeun di handap ieu:

![](//p.3ti.site/1725436822.avif)

Kodeu aturan nyaéta kieu, mangga modifikasi kode "i18n.site" kana ngaran domain anjeun:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Aturan Cache

Tambahkeun aturan cache saperti kieu:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Aturan Alihan

Atur aturan alihan saperti kieu, mangga modifikasi kode "i18n.site" kana ngaran domain Anjeun

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

`URL redirect` Pilih alihan dinamis, mangga robih `/en` dina jalur alihan `concat("/en",http.request.uri.path,".htm")` kana basa standar anu anjeun hoyongkeun ku mesin pencari.

## Konfigurasi Awan Intelligent Baidu

Upami anjeun kedah nyayogikeun jasa ka daratan Cina, anjeun tiasa nganggo [Baidu Smart Cloud](//cloud.baidu.com) .

Data diunggah ka Panyimpenan Objék Baidu sareng kabeungkeut kana Jaringan Distribusi Kandungan Baidu.

Teras jieun skrip dina [layanan EdgeJS](//console.bce.baidu.com/cdn/#/cdn/ejs/list) sapertos kieu

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
  // Anjeun tiasa nyetel lulugu respon pikeun debug kaluaran, kayaning out.XXX = 'MSG';
})
```

Klik `Debug` , teras klik Publikasikeun ka sakumna jaringan.

![](//p.3ti.site/1725437754.avif)

## Pamakéan Canggih: Distribusi Lalu Lintas Dumasar Kana Résolusi Régional

Upami anjeun hoyong nyayogikeun jasa di daratan Cina sareng hoyong ogé `cloudflare` lalu lintas internasional gratis, anjeun tiasa nganggo `DNS` kalayan résolusi régional.

Contona, [Huawei Cloud DNS](https://www.huaweicloud.com) nyadiakeun analisis régional gratis, nu patalimarga Cina daratan bisa ngaliwatan Baidu Smart Cloud, sarta lalulintas internasional bisa ngaliwatan `cloudflare` .

Aya loba pitfalls dina konfigurasi `cloudflare` Di dieu aya sababaraha titik pikeun catetan :

### Ngaran Domain Ieu Hosted Di Séjén `DNS` , Kumaha Ngagunakeun `cloudflare`

Kahiji meungkeut hiji ngaran domain wenang ka `cloudflare` , lajeng nganggo `SSL/TLS` → ngaran domain custom ngahubungkeun ngaran domain utama pikeun ngaran domain ieu.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` Teu Bisa Diaksés Ngaliwatan Ngaran Domain Custom

Kusabab diwangun `cloudflare` dina gudang obyék `R2` teu bisa diakses ku ngaran domain ngaropéa, gudang objék pihak-katilu perlu dipaké pikeun nempatkeun file statik.

Di dieu urang nyandak [backblaze.com](https://www.backblaze.com) minangka conto pikeun nunjukkeun kumaha ngabeungkeut objék pihak katilu pikeun disimpen dina `cloudflare` .

Jieun ember di `backblaze.com` , unggah file mana wae, klik pikeun ngotektak file, tur meunangkeun ngaran domain `Friendly URL` , nu `f003.backblazeb2.com` dieu.

![](//p.3ti.site/1725440783.avif)

Ganti nami domain tina `CNAME` ka `f003.backblazeb2.com` dina `cloudflare` sareng aktipkeun proxy.

![](//p.3ti.site/1725440896.avif)

Robah `cloudflare` tina `SSL` → modeu énkripsi, disetel ka `Full`

![](//p.3ti.site/1725438572.avif)

Tambihkeun aturan konvérsi sapertos anu dipidangkeun di handap, pasang heula (anu ngagaduhan prioritas panghandapna):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` pilih dinamis sareng modifikasi `your_bucketname` dina `concat("/file/your_bucketname",http.request.uri.path)` kana nami ember anjeun.

Sajaba ti éta, dina `cloudflare` aturan konversi luhur, `index.html` dirobah jadi `file/your_bucketname/index.html` , sarta konfigurasi séjén tetep sarua.

![](//p.3ti.site/1725441384.avif)