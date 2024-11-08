# Gözleg Motory Optimizasiýasy (Seo)

## Ýörelgesi

`i18n.site` täzelenmeýän bir sahypa arhitekturasyny kabul edýär Gözleg indeksini aňsatlaşdyrmak üçin, gözlegçiler üçin aýratyn statiki sahypa we `sitemap.xml` dörediler.

Giriş haýyşynyň `User-Agent` gözleg motorynyň gözlegçisi tarapyndan ulanylanda, haýyş `302` üsti bilen statiki sahypa ugrukdyrylar.

Statik sahypalarda, bu sahypanyň dürli dil wersiýalaryna baglanyşyklary görkezmek üçin `link` ulanyň :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## Nerli nginx Konfigurasiýasy

Mysal hökmünde demo taslamasyndaky `.i18n/htm/main.yml` konfigurasiýa faýly alyň

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

Ilki bilen ýokardaky `host:` bahasyny `xxx.com` ýaly domen adyňyza üýtgediň.

Soň `i18n.site -n` , `out/main/htm` katalogda statiki sahypa dörediler.

Elbetde, beýleki konfigurasiýa faýllaryny hem işledip bilersiňiz, meselem `.i18n/htm/dist.package.json` we `.i18n/htm/dist.yml` döretmek üçin ilki bilen `main` konfigurasiýasyna ýüzlenmek.

Soňra statiki sahypa `out/dist/htm` -e öwrüler ýaly `i18n.site -n -c dist` işlediň.

`nginx` aşakdaky konfigurasiýa salgylanyp kesgitlenip bilner.

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# Serwer işgäri skriptlerini gaty uzak saklamaň
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# Beýleki statiki çeşmeler üçin has uzyn keş wagtyny düzüň
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# Gözlegçiniň baş sahypanyň ýazgysy hökmünde haýsy statiki faýly ulanýandygyny düzüň
location = / {
  # Eger boş däl bolsa, kesgitlenen dil ýoluna görä gözlegçilere giriş we gönükdirme diýmekdir $botLang
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# Pageeke sahypa programma konfigurasiýasy
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## Statik Faýllary Ýüklemek Üçin Obýekt Saklanyşyny Sazlaň

Statik faýllar ýerli görnüşde döredilip bilner, ýöne has giňden ýaýran çemeleşme, olary obýekt ammaryna ýüklemekdir.

Aboveokardaky düzülen `out` a üýtgediň :

```
out:
  - s3
```

Soň bolsa `~/.config/i18n.site.yml` redaktirläň we aşakdaky konfigurasiýany goşuň :

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

Sazlamada `i18n.site` `.i18n/htm/main.yml` -den `host:` -e üýtgediň, köp obýekt dükany `s3` den aşakda düzülip bilner we `region` meýdan islege bagly däl (köp obýekt dükanlary bu meýdany bellemeli däl).

Soňra taslamany neşir etmek üçin `i18n.site -n` işlediň.

`~/.config/i18n.site.yml` üýtgeden bolsaňyz we täzeden ýüklemek isleseňiz, ýük keşini arassalamak üçin taslama kök katalogynda aşakdaky buýrugy ulanyň :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## “Bulut” Konfigurasiýasy

[cloudflare](//www.cloudflare.com) ady

### Öwürmek Düzgünleri

Aşakda görkezilişi ýaly öwrüliş düzgünlerini goşuň:

![](//p.3ti.site/1725436822.avif)

Düzgün kody aşakdaky ýaly, "i18n.site" koduny domen adyňyza üýtgediň:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Keş Keş Düzgünleri

Keş düzgünlerini aşakdaky ýaly goşuň:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Düzgünleri Gönükdiriň

Gaýtadan gönükdirme düzgünlerini aşakdaky ýaly düzüň, "i18n.site" koduny domen adyňyza üýtgediň

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

`URL redirect` Dinamiki gönükdirmäni saýlaň, gözleg motorlarynyň goşmak isleýän esasy diline `concat("/en",http.request.uri.path,".htm")` gönükdirme ýolunda `/en` üýtgediň.

## Baidu Akylly Bulut Konfigurasiýasy

Hytaýyň materigine hyzmatlar bermeli bolsaňyz, [“Baidu Smart Cloud” -y](//cloud.baidu.com) ulanyp bilersiňiz.

Maglumatlar Baidu obýekt ammaryna ýüklenýär we Baidu mazmuny paýlaýyş toruna baglanýar.

Soňra ssenariýany aşakdaky ýaly dörediň [EdgeJS](//console.bce.baidu.com/cdn/#/cdn/ejs/list)

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
  // Jogap sözbaşylaryny çykarmak üçin düzülip bilner, meselem.XXX = 'MSG';
})
```

`Debug` basyň, soňra bolsa tutuş tora çap etmek düwmesine basyň.

![](//p.3ti.site/1725437754.avif)

## Giňişleýin Ulanylyşy: Sebitleýin Çözgüt Esasynda Traffigi Paýlaň

Hytaýyň materiginde hyzmatlar bermek isleseňiz we `cloudflare` mugt halkara traffigi isleseňiz, sebitleýin çözgüt bilen `DNS` ulanyp bilersiňiz.

Mysal üçin, [“Huawei Cloud DNS](https://www.huaweicloud.com) mugt sebitleýin derňewi üpjün edýär, bu ugurda Hytaýyň içerki ulaglary “Baidu Smart Cloud” -dan geçip biler we halkara traffigi `cloudflare` dan geçip biler.

`cloudflare` konfigurasiýasynda köp ýalňyşlyklar bar. Ine, bellemeli birnäçe nokat :

### Domen Ady Beýleki `DNS` -Da Ýerleşýär, `cloudflare` Nädip Ulanmaly

Ilki bilen özbaşdak domen adyny `cloudflare` bilen baglanyşdyryň, soňra esasy domen adyny bu domen ady bilen baglanyşdyrmak üçin `SSL/TLS` → adaty domen adyny ulanyň.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` Adaty Domen Ady Arkaly Girip Bolmaýar

Gurlan `cloudflare` obýekt saklanylýan `R2` de ýöriteleşdirilen domen ady bilen girip bolmaýandygy sebäpli, statiki faýllary ýerleşdirmek üçin üçünji tarap obýekt ammary ulanylmaly.

Bu ýerde `cloudflare` -da saklanjak üçünji tarap obýektlerini nädip baglamalydygyny görkezmek üçin mysal hökmünde alýarys [backblaze.com](https://www.backblaze.com)

`backblaze.com` -da çelek dörediň, islendik faýly ýükläň, faýla göz aýlamak `f003.backblazeb2.com` `Friendly URL` domen adyny alyň.

![](//p.3ti.site/1725440783.avif)

Domen adyny `cloudflare` dan `CNAME` den `f003.backblazeb2.com` üýtgediň we proksi işlediň.

![](//p.3ti.site/1725440896.avif)

`Full` → şifrlemek re `SSL` `cloudflare` -ny üýtgediň

![](//p.3ti.site/1725438572.avif)

Aşakda görkezilişi ýaly öwrüliş düzgünini goşuň, ilki goýuň (birinjisi iň pes ähmiýete eýe):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` dinamiki saýlaň we çelek adyňyza `concat("/file/your_bucketname",http.request.uri.path)` `your_bucketname` üýtgediň.

Mundan başga-da, ýokardaky `cloudflare` öwrüliş düzgüninde `index.html` `file/your_bucketname/index.html` -e üýtgedildi we beýleki konfigurasiýalar öňküligine galýar.

![](//p.3ti.site/1725441384.avif)