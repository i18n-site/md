# Search Engine Optimization (Seo)

## Prinsip

`i18n.site` nganggo arsitektur kaca tunggal sing ora refresh Kanggo nggampangake indeksasi telusuran, kaca statis sing kapisah lan `sitemap.xml` bakal digawe kanggo crawler.

Nalika `User-Agent` saka panjalukan akses digunakake dening crawler mesin telusur, panyuwunan kasebut bakal dialihake menyang kaca statis liwat `302` .

Ing kaca statis, gunakake `link` kanggo nuduhake pranala menyang macem-macem versi basa kaca iki, kayata :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## Konfigurasi nginx Lokal

Njupuk file konfigurasi `.i18n/htm/main.yml` ing proyek demo minangka conto

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

Mangga ngowahi nilai `host:` ing ndhuwur dadi jeneng domain sampeyan, kayata `xxx.com` .

Banjur, `i18n.site -n` , kaca statis bakal digawe ing `out/main/htm` direktori.

Mesthi, sampeyan uga bisa ngaktifake file konfigurasi liyane, kayata pisanan ngrujuk menyang konfigurasi `main` kanggo nggawe `.i18n/htm/dist.package.json` lan `.i18n/htm/dist.yml` .

Banjur mbukak `i18n.site -n -c dist` supaya kaca statis bakal diasilake dadi `out/dist/htm` .

`nginx` bisa disetel kanthi ngrujuk menyang konfigurasi ing ngisor iki.

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# Aja cache skrip buruh server kanggo dawa banget
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# Setel wektu cache sing luwih dawa kanggo sumber daya statis liyane
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# Setel file statis sing digunakake crawler minangka entri homepage
location = / {
  # Yen $botLang ora kosong, tegese akses crawler lan pangalihan miturut path basa sing disetel
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# Konfigurasi aplikasi siji kaca
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## Ngatur Panyimpenan Obyek Kanggo Ngunggah File Statis

File statis bisa digawe sacara lokal, nanging pendekatan sing luwih umum yaiku ngunggah menyang panyimpenan obyek.

Owahi `out` sing dikonfigurasi ing ndhuwur dadi :

```
out:
  - s3
```

Banjur, sunting `~/.config/i18n.site.yml` lan tambahake konfigurasi ing ngisor iki :

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

Ing konfigurasi, mangga ngganti `i18n.site` kanggo nilai `host:` ing `.i18n/htm/main.yml` , macem-macem toko obyek bisa diatur ing `s3` , lan lapangan `region` opsional (akeh toko obyek ora perlu nyetel lapangan iki).

Banjur mbukak `i18n.site -n` kanggo nerbitake maneh proyek kasebut.

Yen sampeyan wis ngowahi `~/.config/i18n.site.yml` lan pengin ngunggah maneh, gunakake perintah ing ngisor iki ing direktori root project kanggo mbusak cache unggahan :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## Konfigurasi cloudflare

Jeneng domain di-host kanggo [cloudflare](//www.cloudflare.com) .

### Aturan Konversi

Tambah aturan konversi kaya ing ngisor iki:

![](//p.3ti.site/1725436822.avif)

Kode aturane kaya ing ngisor iki, mangga ngowahi kode "i18n.site" dadi jeneng domain sampeyan:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Aturan Caching

Tambah aturan cache kaya ing ngisor iki:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Aturan Pangalihan

Setel aturan pangalihan minangka nderek, mangga ngowahi kode "i18n.site" kanggo jeneng domain

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

`URL redirect` Pilih pangalihan dinamis, mangga owahi `/en` ing jalur pangalihan `concat("/en",http.request.uri.path,".htm")` menyang basa standar sing pengin dilebokake mesin telusur.

## Konfigurasi Cloud Intelligent Baidu

Yen sampeyan kudu nyedhiyakake layanan menyang daratan China, sampeyan bisa nggunakake [Baidu Smart Cloud](//cloud.baidu.com) .

Data diunggah menyang Panyimpenan Obyek Baidu lan kaiket menyang Jaringan Distribusi Konten Baidu.

Banjur gawe skrip ing [layanan EdgeJS](//console.bce.baidu.com/cdn/#/cdn/ejs/list) kaya ing ngisor iki

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
  // Header respon bisa disetel kanggo debug output, kayata out.XXX = 'MSG';
})
```

Klik `Debug` , banjur klik Terbitake menyang kabeh jaringan.

![](//p.3ti.site/1725437754.avif)

## Panggunaan Lanjut: Distribusi Lalu Lintas Adhedhasar Resolusi Regional

Yen sampeyan pengin nyedhiyakake layanan ing daratan China lan uga pengin `cloudflare` lalu lintas internasional gratis, sampeyan bisa nggunakake `DNS` kanthi resolusi regional.

Contone, [Huawei Cloud DNS](https://www.huaweicloud.com) nyedhiyakake analisis regional gratis, sing lalu lintas Cina daratan bisa ngliwati Baidu Smart Cloud, lan lalu lintas internasional bisa ngliwati `cloudflare` .

Ana akeh pitfalls ing konfigurasi `cloudflare` Kene sawetara TCTerms kanggo Wigati :

### Jeneng Domain Di-Host Ing `DNS` Liyane, Carane Nggunakake `cloudflare`

Kaping pisanan, ikatan jeneng domain sing sewenang-wenang menyang `cloudflare` , banjur gunakake `SSL/TLS` → jeneng domain khusus kanggo nggandhengake jeneng domain utama menyang jeneng domain iki.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` Ora Bisa Diakses Liwat Jeneng Domain Khusus

Amarga panyimpenan obyek `cloudflare` dibangun ing `R2` ora bisa diakses kanthi jeneng domain sing disesuaikan, panyimpenan obyek pihak katelu kudu digunakake kanggo nyelehake file statis.

Ing kene kita njupuk [backblaze.com](https://www.backblaze.com) minangka conto kanggo nduduhake carane ngiket obyek pihak katelu kanggo disimpen ing `cloudflare` .

Nggawe ember ing `backblaze.com` , upload file sembarang, klik kanggo nelusur file, lan njaluk jeneng domain `Friendly URL` , kang `f003.backblazeb2.com` kene.

![](//p.3ti.site/1725440783.avif)

Ganti jeneng domain saka `CNAME` dadi `f003.backblazeb2.com` ing `cloudflare` lan aktifake proxy.

![](//p.3ti.site/1725440896.avif)

Ngowahi `cloudflare` saka `SSL` → mode enkripsi, disetel dadi `Full`

![](//p.3ti.site/1725438572.avif)

Tambah aturan konversi kaya sing kapacak ing ngisor iki, sijine dhisik (sing pisanan nduweni prioritas paling murah):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` pilih dinamis lan ngowahi `your_bucketname` ing `concat("/file/your_bucketname",http.request.uri.path)` kanggo jeneng ember.

Kajaba iku, ing aturan konversi `cloudflare` ing ndhuwur, `index.html` diganti dadi `file/your_bucketname/index.html` , lan konfigurasi liyane tetep padha.

![](//p.3ti.site/1725441384.avif)