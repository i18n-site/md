# Gözleg Motory Optimizasiýasy (Seo)

## Ýörelgesi

`i18n.site` täzelenmeýän ýekeje sahypa arhitekturasyny kabul edýär Gözleg indeksirlemesini aňsatlaşdyrmak üçin, gözlegçiler üçin aýratyn statiki sahypa we `sitemap.xml` dörediler.

Giriş haýyşynyň `User-Agent` gözleg motorynyň gözlegçisi tarapyndan ulanylanda, haýyş `302` üsti bilen statiki sahypa ugrukdyrylar.

Statik sahypalarda, bu sahypanyň dürli dil wersiýalaryna baglanyşyklary görkezmek üçin `link` ulanyň :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```

## Statik Faýllary Ýüklemek Üçin Obýekt Saklanyşyny Sazlaň

Statik faýllar ýerli görnüşde döredilip bilner, ýöne has giňden ýaýran çemeleşme, olary obýekt ammaryna ýüklemekdir.

Mysal hökmünde demo taslamasyndaky `.i18n/htm/ol.yml` konfigurasiýa faýly alyň

```yml
host:
seo: true
out:
  - s3
v: //unpkg.com/i18n.site
x: 18x
importmap:
  i/: //unpkg.com/@i18n.site/
```

Ilki bilen ýokardaky `host:` bahasyny `i18n.site` ýaly domen adyňyza üýtgediň.

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

Sazlamada `i18n.site` `.i18n/htm/ol.yml` -den `host:` -e üýtgediň, köp obýekt dükany `s3` den aşakda düzülip bilner we `region` meýdan islege bagly däl (köp obýekt dükanlary bu meýdany bellemeli däl).

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

Soňra skripti aşakdaky ýaly dörediň [EdgeJS](//console.bce.baidu.com/cdn/#/cdn/ejs/list)

```js
var uri=r.uri,p=uri.lastIndexOf('.');

if(
  p<0 || !/html?|css|rss|avif|md|ico|gz|js|json|png|svg|txt|webmanifest|xml/.test(uri.slice(p+1))
){
  const ua = r.headersIn['User-Agent'].toLowerCase();
  if (/facebookexternalhit|slurp|bot|spider|curl/.test(ua)) {
    r.return(302,(/baidu|yisou|sogou|360|byte/.test(ua)?'/zh':'/en')+r.uri+'.htm')
    return
  }
  r.uri = '/index.html'
}

r.respHeader(()=>{
var t = [];
r.rawHeadersOut.forEach((i)=>{
    var out = r.headersOut;
    var key = i[0].toLowerCase();
    if(key.startsWith('x-')||key.startsWith('ohc-')){
        delete out[key]
    }
    out['Cache-Control']='max-age='+9e5;
    ['Content-MD5','Age','Expires','Last-Modified'].forEach((i)=>delete out[i])
})

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

Gurlan `cloudflare` obýekt saklanylýan `R2` ýöriteleşdirilen domen adyna girip bolmaýandygy sebäpli, statiki faýllary ýerleşdirmek üçin üçünji tarap obýekt ammary ulanylmaly.

Bu ýerde `cloudflare` -da saklanjak üçünji tarap obýektlerini nädip baglamalydygyny görkezmek üçin mysal hökmünde alýarys [backblaze.com](https://www.backblaze.com)

`backblaze.com` -da çelek dörediň, islendik faýly ýükläň, faýla göz aýlamak `f003.backblazeb2.com` `Friendly URL` domen adyny alyň.

![](//p.3ti.site/1725440783.avif)

Domen adyny `cloudflare` dan `CNAME` den `f003.backblazeb2.com` üýtgediň we proksi işlediň.

![](//p.3ti.site/1725440896.avif)

`Full` → şifrlemek re `SSL` `cloudflare` -ny üýtgediň

![](//p.3ti.site/1725438572.avif)

Aşakda görkezilişi ýaly öwrüliş düzgünini goşuň, ilki goýuň (birinjisinde iň pes ähmiýeti bar):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` dinamiki saýlaň we çelek adyňyza `concat("/file/your_bucketname",http.request.uri.path)` `your_bucketname` üýtgediň.

Mundan başga-da, ýokardaky `cloudflare` öwrüliş düzgüninde `index.html` `file/your_bucketname/index.html` -e üýtgedildi we beýleki konfigurasiýalar öňküligine galýar.

![](//p.3ti.site/1725441384.avif)