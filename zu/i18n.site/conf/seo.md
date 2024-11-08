# I-Search Engine Optimization (Seo)

## Isimiso

`i18n.site` ithatha ikhasi elilodwa elingavuseleli kabusha Ukuze kube lula ukukhonjwa kokusesha, ikhasi elimile elihlukile kanye `sitemap.xml` kuzokwenziwa ukuze abaseshi bakhase.

Uma `User-Agent` wesicelo sokufinyelela esetshenziswa isiseshi senjini yokusesha, isicelo sizoqondiswa kabusha ekhasini elimile nge `302` .

Emakhasini amile, sebenzisa `link` ukukhombisa izixhumanisi ezinguqulweni zolimi ezahlukene zaleli khasi, njengokuthi :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## Ukucushwa Kwe-Nginx Yendawo

Thatha ifayela lokumisa elingu `.i18n/htm/main.yml` kuphrojekthi yedemo njengesibonelo

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

Sicela uqale ulungise inani elingu `host:` ngenhla egameni lakho lesizinda, njengokuthi `xxx.com` .

Bese, `i18n.site -n` , ikhasi elimile lizokhiqizwa ohlwini lwemibhalo `out/main/htm` .

Kunjalo, ungakwazi futhi ukunika amandla amanye amafayela okumisa, njengokubhekisa kuqala ekucushweni kuka `main` ukuze udale `.i18n/htm/dist.package.json` no `.i18n/htm/dist.yml` .

Bese ugijima `i18n.site -n -c dist` ukuze ikhasi elimile lizokhiqizwa ku `out/dist/htm` .

`nginx` ingasethwa ngokubhekisela ekucushweni okungezansi.

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# Ungagcini inqolobane imibhalo yesisebenzi seseva isikhathi eside kakhulu
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# Setha izikhathi ezinde zenqolobane kwezinye izinsiza ezimile
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# Setha ukuthi yiliphi ifayela elingashintshi elisetshenziswa isiseshi njengokufakwa kwekhasi eliyisiqalo
location = / {
  # Uma $botLang
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# Ukucushwa kohlelo lokusebenza lwekhasi elilodwa
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## Lungiselela Isitoreji Sento Ukuze Ulayishe Amafayela Amile

Amafayela amile angenziwa endaweni, kodwa indlela evamile kakhulu ukuwalayisha endaweni yokugcina into.

Shintsha `out` okulungiselelwe ngenhla kube :

```
out:
  - s3
```

Bese, hlela `~/.config/i18n.site.yml` bese wengeza ukucushwa okulandelayo :

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

Ekucupheni, sicela ushintshe `i18n.site` enani lika `host:` koku `.i18n/htm/main.yml` , izitolo eziningi zezinto zingalungiselelwa ngaphansi kuka `s3` , futhi inkambu `region` ingokuzithandela (izitolo eziningi zezinto azidingi ukusetha le nkambu).

Bese usebenzisa okuthi `i18n.site -n` ukuze ushicilele kabusha iphrojekthi.

Uma ushintshe `~/.config/i18n.site.yml` futhi ufuna ukuphinda ulayishe, sicela usebenzise umyalo olandelayo kumkhombandlela wempande yephrojekthi ukuze usule inqolobane yokulayisha :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## Ukucushwa Kwe-Cloudflare

Igama lesizinda lisingathwe ku- [cloudflare](//www.cloudflare.com)

### Imithetho Yokuguqulwa

Engeza imithetho yokuguqulwa njengoba kukhonjisiwe ngezansi:

![](//p.3ti.site/1725436822.avif)

Ikhodi yomthetho imi kanje, sicela uguqule ikhodi "i18n.site" egameni lakho lesizinda:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Imithetho Yokugcina Isikhashana

Engeza imithetho yenqolobane kanje:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Qondisa Kabusha Imithetho

Setha imithetho yokuqondisa kabusha ngale ndlela elandelayo, sicela uguqule ikhodi ethi "i18n.site" egameni lakho lesizinda.

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

`URL redirect` Khetha ukuqondisa kabusha okuguquguqukayo, sicela uguqule oku `/en` endleleni yokuqondisa kabusha `concat("/en",http.request.uri.path,".htm")` ukuya olimini olumisiwe ofuna izinjini zokusesha ziluhlanganise.

## I-Baidu Intelligent Cloud Configuration

Uma udinga ukuhlinzeka ngamasevisi ezweni lase-China, ungasebenzisa [i-Baidu Smart Cloud](//cloud.baidu.com) .

Idatha ilayishwa ku-Baidu Object Storage futhi iboshelwe ku-Baidu Content Distribution Network.

Bese udala iskripthi [kusevisi EdgeJS edge](//console.bce.baidu.com/cdn/#/cdn/ejs/list) ngendlela elandelayo

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
  // Izihloko zezimpendulo zingasethwa ukuze zisuse iphutha, njengokuthi out.XXX = 'MSG';
})
```

Chofoza `Debug` , bese uchofoza Shicilela kuyo yonke inethiwekhi.

![](//p.3ti.site/1725437754.avif)

## Ukusetshenziswa Okuthuthukile: Sabalalisa Ithrafikhi Ngokusekelwe Ekulungisweni Kwesifunda

Uma ufuna ukuhlinzeka ngezinsizakalo ezweni laseChina futhi ufuna `cloudflare` ithrafikhi yamazwe ngamazwe yamahhala, ungasebenzisa `DNS` ngokulungiswa kwesifunda.

Isibonelo, [i-Huawei DNS](https://www.huaweicloud.com) ihlinzeka ngokuhlaziywa kwesifunda kwamahhala, lapho ithrafikhi yamaShayina ezwe lonke ingadlula e-Baidu Smart Cloud, futhi ithrafikhi yamazwe ngamazwe ingadlula ku `cloudflare` .

Kunezingibe eziningi ekucushweni kuka `cloudflare` Nawa amaphuzu ambalwa okumele uwaqaphele :

### Igama Lesizinda Lisingathwa Kwezinye `DNS` , Indlela Yokusebenzisa `cloudflare`

Okokuqala bopha igama lesizinda elingenasizathu ku `cloudflare` , bese usebenzisa `SSL/TLS` → igama lesizinda ngokwezifiso ukuhlobanisa igama lesizinda eliyinhloko naleli gama lesizinda.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` Ayikwazi Ukufinyelelwa Ngegama Lesizinda Ngokwezifiso

Ngenxa yokuthi isitoreji sento `cloudflare` ngaphakathi `R2` asikwazi ukufinyelelwa ngegama lesizinda elenziwe ngokwezifiso, isitoreji sento esivela eceleni sidinga ukusetshenziselwa ukubeka amafayela amile.

Lapha sithatha [backblaze.com](https://www.backblaze.com) njengesibonelo ukukhombisa indlela yokubopha izinto zezinkampani zangaphandle ezizogcinwa ku `cloudflare` .

Dala ibhakede ku `backblaze.com` , layisha noma yiliphi ifayela, chofoza ukuze upheqa ifayela, futhi uthole igama lesizinda lika- `Friendly URL` , okuyi `f003.backblazeb2.com` lapha.

![](//p.3ti.site/1725440783.avif)

Shintsha igama lesizinda kusuka `CNAME` kuya `f003.backblazeb2.com` at `cloudflare` futhi unike amandla ummeleli.

![](//p.3ti.site/1725440896.avif)

Shintsha `cloudflare` koku `SSL` → imodi yokubethela, isethelwe ku `Full`

![](//p.3ti.site/1725438572.avif)

Engeza umthetho wokuguqula njengoba kukhonjisiwe ngezansi, ubeke kuqala (owokuqala unokubaluleka okuphansi kakhulu):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` khetha okuguquguqukayo bese ulungisa oku `your_bucketname` koku `concat("/file/your_bucketname",http.request.uri.path)` egameni lakho lebhakede.

Ukwengeza, kumthetho wokuguqulwa `cloudflare` ngenhla, `index.html` uguqulwa ube ngu `file/your_bucketname/index.html` , futhi okunye ukulungiselelwa kuhlala okufanayo.

![](//p.3ti.site/1725441384.avif)