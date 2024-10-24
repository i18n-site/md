# Ɲinifɛnw Ɲɛnabɔli (Seo) .

## Sariyakolo

`i18n.site` bɛ ɲɛ kelen jɔcogo dɔ ta min tɛ lakurayali ye Walasa ka ɲinini index (sɛgɛsɛgɛli index) nɔgɔya, ɲɛ jɔlen ni `sitemap.xml` danfaralen bɛna dilan walasa sɛgɛsɛgɛlikɛlaw ka se ka sɛgɛsɛgɛli kɛ.

Ni `User-Agent` min bɛ sɔrɔ ɲinini na ɲininikɛlan fɛ, o ɲinini bɛna Lasegin ka Taa ɲɛ jɔlen na `302` fɛ.

Ɲɛ jɔlenw kan, baara kɛ ni `link` walasa ka jɛgɛnsira jira minnu bɛ nin ɲɛ in kan suguya wɛrɛw la, i n’a fɔ :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```

## Fɛnw Marayɔrɔ Labɛn Walasa Ka Dosiye Jɔlenw Bila

Filenw jɔlenw bɛ Se ka Dabɔ sigida la, nka fɛɛrɛ min ka teli ka Kɛ o ye k’u Blà fɛnw marayɔrɔ la.

Aw ye `.i18n/htm/ol.yml` labɛncogo filen min bɛ demo poroze kɔnɔ, o ta ka kɛ misali ye

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

Aw ye fɔlɔ ka `host:` nafa caman sɛmɛntiya sanfɛ ka kɛ aw ka domani tɔgɔ ye, i n’a fɔ `i18n.site` .

O kɔfɛ, `~/.config/i18n.site.yml` ladilan ka nin cogoya in fara a kan :

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

Labɛnni na, aw bɛ `i18n.site` Changer ka kɛ `host:` nafa ye `.i18n/htm/ol.yml` kɔnɔ, fɛn caman marayɔrɔw bɛ se ka labɛn `s3` jukɔrɔ, wa `region` foro ye ŋaniyata ye (fɛn marayɔrɔ caman mago tɛ ka nin foro in sigi).

O kɔfɛ, aw bɛ `i18n.site -n` boli walasa ka porozɛ in bɔ kɛnɛ kan kokura.

N’i ye `~/.config/i18n.site.yml` sɛmɛntiya ani n’i b’a fɛ ka segin ka wuli, i ka nin cikan in kɛ poroze jusigilan kɔnɔ walasa ka jiginni cache saniya :

```
rm -rf .i18n/data/seo .i18n/data/public
```

## Sankaba-Kɛnɛw Labɛncogo

Domain tɔgɔ min bɛ jate [cloudflare](//www.cloudflare.com)

### Yɛlɛma Sariyaw

Aw bɛ fɛn caman tigɛli sariyaw fara a kan i n’a fɔ a jiralen bɛ cogo min na jukɔrɔ:

![](//p.3ti.site/1725436822.avif)

Sariyasen in ye nin ye, i ka kode "i18n.site" sɛmɛntiya ka kɛ i ka domani tɔgɔ ye:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Caching Sariyaw

Aw bɛ cache sariyaw fara a kan nin cogo la:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Sariyaw Bila Sira Wɛrɛ Kan

Aw ye sira tigɛcogo sariyaw sigi nin cogo la, aw bɛ kode "i18n.site" sɛmɛntiya ka kɛ aw ka domani tɔgɔ ye

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

`URL redirect` Dynamique redirection sugandi, i ka `/en` sɛmɛntiya redirection sira `concat("/en",http.request.uri.path,".htm")` kɔnɔ ka kɛ kan kɔrɔ ye i b’a fɛ ɲininikɛlanw ka don min kɔnɔ.

## Baidu Intelligent Sankaba Labɛncogo

Ni aw mago bɛ ka baara kɛ Sinuwa jamanaba ye, aw bɛ se ka baara kɛ ni [Baidu Smart Cloud](//cloud.baidu.com) ye .

Donanw bɛ bila Baidu Object Storage kɔnɔ, ka siri Baidu Content Distribution Network la.

O kɔ fɛ, sɛbɛnnibolo dabɔ [EdgeJS edge service](//console.bce.baidu.com/cdn/#/cdn/ejs/list) kɔnɔ i n’a fɔ nin cogo in na

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

`Debug` digi, o kɔ, Publish to the entire network digi.

![](//p.3ti.site/1725437754.avif)

## Baarakɛcogo Kɔrɔlen: Ka Sirako Tila-Tila Ka Da Marabolow Ka Ɲɛnabɔli Kan

N’i b’a fɛ ka baara kɛ Sinuwa jamanaba kɔnɔ ani fana n’i b’a fɛ ka `cloudflare` kɛ diɲɛ jamanaw ka taama fu la, i bɛ se ka baara kɛ ni `DNS` ye ni marabolow ka latigɛ ye.

Misali la `cloudflare` [Huawei Cloud DNS](https://www.huaweicloud.com)

Jaan caman bɛ `cloudflare` labɛncogo la, hakilina damadɔw filɛ nin ye minnu ka kan ka kɔlɔsi :

### Domɛni Tɔgɔ Bɛ Jate `DNS` Wɛrɛw La, Baara Kɛcogo `cloudflare`

Fɔlɔ, i ka domani tɔgɔ gansan dɔ siri `cloudflare` la, o kɔfɛ, i bɛ `SSL/TLS` → domani tɔgɔ ladamu kɛ ka domani tɔgɔba in siri o domani tɔgɔ in na.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` Tɛ Se Ka Sɔrɔ Domani Tɔgɔ Ladamulen Fɛ

Ikomi fɛn marayɔrɔ `R2` `cloudflare` bɛ don a kɔnɔ, o tɛ se ka sɔrɔ ni domani tɔgɔ ye min bɛ kɛ ka kɛɲɛ ni mɔgɔw sago ye, fɛn marayɔrɔ sabanan ka kan ka kɛ ka dosiye jɔlenw bila.

Yan an `cloudflare` [backblaze.com](https://www.backblaze.com)

Aw bɛ bulon dɔ Dabɔ `backblaze.com` la, ka dosiye o dosiye Blà, ka digi walasa ka dosiye in Lajɛ, ka `Friendly URL` tɔgɔ Sɔrɔ, o ye `f003.backblazeb2.com` ye yan.

![](//p.3ti.site/1725440783.avif)

Domɛni tɔgɔ Changer ka Bɔ `CNAME` ka Kɛ `f003.backblazeb2.com` `cloudflare` la ani ka proxy (proxy) Dabɔ.

![](//p.3ti.site/1725440896.avif)

Aw bɛ `cloudflare` ladilan `SSL` la → kodɔncogo, aw bɛ a bila `Full` la

![](//p.3ti.site/1725438572.avif)

Aw bɛ fɛn caman tigɛli sariya fara a kan i n’a fɔ a jiralen bɛ cogo min na jukɔrɔ, aw k’a bila fɔlɔ (fɔlɔ de ka fɔlɔ ka dɔgɔ):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` dinamikɛ sugandi ka `your_bucketname` ladilan `concat("/file/your_bucketname",http.request.uri.path)` kɔnɔ ka kɛɲɛ ni i ka bulon tɔgɔ ye.

Ka fara o kan, `cloudflare` jiginni sariya min bɛ sanfɛ, `index.html` bɛ Changé ka kɛ `file/your_bucketname/index.html` ye, wa sigicogo wɛrɛw bɛ to o cogo kelen na.

![](//p.3ti.site/1725441384.avif)