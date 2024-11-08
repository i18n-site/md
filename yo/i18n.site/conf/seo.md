# Imudara Ẹrọ Iwadi (Seo)

## Opo

`i18n.site` gba faaji oju-iwe kan ti kii ṣe isọdọtun Lati rọrun titọka wiwa, oju-iwe aimi ọtọtọ ati `sitemap.xml` yoo jẹ ipilẹṣẹ fun awọn crawlers lati ra.

Nigbati `User-Agent` ti ibeere iwọle ti lo nipasẹ ẹrọ wiwakọ, ibeere naa yoo darí si oju-iwe aimi nipasẹ `302` .

Lori awọn oju-iwe aimi, lo `link` lati tọka awọn ọna asopọ si awọn ẹya ede oriṣiriṣi oju-iwe yii, bii :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## Iṣeto nginx Agbegbe

Mu faili iṣeto ni `.i18n/htm/main.yml` ninu iṣẹ akanṣe demo bi apẹẹrẹ

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

Jọwọ kọkọ yipada iye ti `host:` loke si orukọ ìkápá rẹ, bii `xxx.com` .

Lẹhinna, `i18n.site -n` , oju-iwe aimi yoo jẹ ipilẹṣẹ ninu itọsọna `out/main/htm` .

Nitoribẹẹ, o tun le mu awọn faili atunto miiran ṣiṣẹ, gẹgẹbi itọkasi akọkọ si iṣeto `main` lati ṣẹda `.i18n/htm/dist.package.json` ati `.i18n/htm/dist.yml` .

Lẹhinna ṣiṣe `i18n.site -n -c dist` ki oju-iwe aimi yoo jẹ ipilẹṣẹ si `out/dist/htm` .

`nginx` le ṣeto nipasẹ tọka si iṣeto ni isalẹ.

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# Ma ṣe kaṣe awọn iwe afọwọkọ olupin olupin fun pipẹ pupọ
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# Ṣeto awọn akoko kaṣe to gun fun awọn orisun aimi miiran
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# Ṣeto iru faili aimi ti crawler nlo bi titẹ oju-ile
location = / {
  # Ti $botLang
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# Nikan iwe ohun elo iṣeto ni
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## Ṣe Atunto Ibi Ipamọ Ohun Fun Ikojọpọ Awọn Faili Aimi

Awọn faili aimi le ṣe ipilẹṣẹ ni agbegbe, ṣugbọn ọna ti o wọpọ julọ ni lati gbe wọn si ibi ipamọ ohun.

Ṣe atunṣe `out` ti a tunto loke lati :

```
out:
  - s3
```

Lẹhinna, ṣatunkọ `~/.config/i18n.site.yml` ki o ṣafikun iṣeto atẹle naa :

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

Ni iṣeto ni, jọwọ yi `i18n.site` pada si iye ti `host:` ni `.i18n/htm/main.yml` , awọn ile itaja ohun elo pupọ le tunto labẹ `s3` , ati aaye `region` jẹ aṣayan (ọpọlọpọ awọn ile itaja ohun elo ko nilo lati ṣeto aaye yii).

Lẹhinna ṣiṣẹ `i18n.site -n` lati tun ṣe agbejade iṣẹ naa.

Ti o ba ti yipada `~/.config/i18n.site.yml` ati pe o fẹ tun gbejade, jọwọ lo aṣẹ atẹle ninu ilana ilana gbongbo ise agbese lati ko kaṣe ikojọpọ naa kuro :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## cloudflare Iṣeto Ni

Orukọ ìkápá ti gbalejo si [cloudflare](//www.cloudflare.com)

### Awọn Ofin Iyipada

Ṣafikun awọn ofin iyipada bi a ṣe han ni isalẹ:

![](//p.3ti.site/1725436822.avif)

Koodu ofin jẹ bi atẹle, jọwọ ṣe atunṣe koodu “i18n.site” si orukọ ìkápá rẹ:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Caching Ofin

Ṣafikun awọn ofin kaṣe bi atẹle:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Àtúnjúwe Awọn Ofin

Ṣeto awọn ofin atunṣe bi atẹle, jọwọ ṣe atunṣe koodu "i18n.site" si orukọ ìkápá rẹ

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

`URL redirect` Yan àtúnjúwe ìmúdàgba, jọ̀wọ́ ṣàtúnṣe `/en` ní ọ̀nà àtúnjúwe `concat("/en",http.request.uri.path,".htm")` sí èdè àìpé tí o fẹ́ kí àwọn ẹ̀rọ ìṣàwárí ní nínú.

## Iṣeto Awọsanma Ni Oye Baidu

Ti o ba nilo lati pese awọn iṣẹ si oluile China, o le lo [Baidu Smart Cloud](//cloud.baidu.com) .

Data ti kojọpọ si Ibi ipamọ Nkan Baidu ati ni asopọ si Nẹtiwọọki Pipin Akoonu Baidu.

Lẹhinna ṣẹda iwe afọwọkọ ni [iṣẹ EdgeJS](//console.bce.baidu.com/cdn/#/cdn/ejs/list) bi atẹle

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
  // Awọn akọle idahun le ṣee ṣeto si iṣẹjade yokokoro, bii out.XXX = 'MSG';
})
```

Tẹ `Debug` , lẹhinna tẹ Atẹjade si gbogbo nẹtiwọọki naa.

![](//p.3ti.site/1725437754.avif)

## Lilo Ilọsiwaju: Pinpin Ijabọ Da Lori Ipinnu Agbegbe

Ti o ba fẹ pese awọn iṣẹ ni oluile China ati pe o tun fẹ `cloudflare` ijabọ kariaye ọfẹ, o le lo `DNS` pẹlu ipinnu agbegbe.

Fun apẹẹrẹ, [Huawei Cloud DNS](https://www.huaweicloud.com) n pese itupalẹ agbegbe ọfẹ, pẹlu eyiti awọn ijabọ Ilu China le lọ nipasẹ Baidu Smart Cloud, ati awọn ijabọ agbaye le lọ nipasẹ `cloudflare` .

Nibẹ ni o wa ọpọlọpọ awọn pitfalls ni iṣeto ni ti `cloudflare` Eyi ni awọn aaye diẹ lati ṣe akiyesi :

### Orukọ Ìkápá Naa Ti Gbalejo Ni `DNS` Miiran, Bii O Ṣe Le Lo `cloudflare`

Ni akọkọ dè orukọ ìkápá lainidii kan si `cloudflare` , ati lẹhinna lo `SSL/TLS` → orukọ ìkápá aṣa lati ṣepọ orukọ ìkápá akọkọ si orukọ ìkápá yii.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` Ko Le Wọle Nipasẹ Orukọ Ìkápá Aṣa

Nitori itumọ `cloudflare` ni ibi ipamọ ohun `R2` ko le wọle nipasẹ orukọ ìkápá ti a ṣe adani, ibi ipamọ ohun ẹni-kẹta nilo lati lo lati gbe awọn faili aimi.

[backblaze.com](https://www.backblaze.com) a gba bi apẹẹrẹ lati ṣe afihan bi o ṣe le di awọn nkan ẹnikẹta lati wa ni ipamọ ni `cloudflare` .

Ṣẹda garawa kan ni `backblaze.com` , gbejade eyikeyi faili, tẹ lati lọ kiri lori faili naa, ki o si gba orukọ ìkápá ti `Friendly URL` , eyiti o jẹ `f003.backblazeb2.com` nibi.

![](//p.3ti.site/1725440783.avif)

Yi orukọ ìkápá pada lati `CNAME` si `f003.backblazeb2.com` ni `cloudflare` ati mu aṣoju ṣiṣẹ.

![](//p.3ti.site/1725440896.avif)

Ṣe atunṣe `cloudflare` ti `SSL` → ipo fifi ẹnọ kọ nkan, ṣeto si `Full`

![](//p.3ti.site/1725438572.avif)

Ṣafikun ofin iyipada bi o ṣe han ni isalẹ, fi sii ni akọkọ (eyiti akọkọ ni pataki ti o kere julọ):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` yan agbara ati yipada `your_bucketname` ni `concat("/file/your_bucketname",http.request.uri.path)` si orukọ garawa rẹ.

Ni afikun, ninu ofin iyipada `cloudflare` loke, `index.html` yipada si `file/your_bucketname/index.html` , ati awọn atunto miiran wa kanna.

![](//p.3ti.site/1725441384.avif)