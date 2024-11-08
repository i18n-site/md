# Uboreshaji Wa Injini Ya Utafutaji (Seo)

## Kanuni

`i18n.site` inachukua usanifu usioonyesha upya ukurasa mmoja Ili kuwezesha uwekaji faharasa wa utafutaji, ukurasa tofauti tuli na `sitemap.xml` utatolewa ili watambaji kutambaa.

Wakati `User-Agent` ya ombi la ufikiaji linatumiwa na kitambazaji cha injini ya utafutaji, ombi litaelekezwa kwenye ukurasa tuli kupitia `302` .

Kwenye kurasa tuli, tumia `link` kuonyesha viungo vya matoleo tofauti ya lugha ya ukurasa huu, kama vile :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## Usanidi Wa nginx Wa Ndani

Chukua faili ya usanidi `.i18n/htm/main.yml` katika mradi wa onyesho kama mfano

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

Tafadhali kwanza rekebisha thamani ya `host:` hapo juu kwa jina la kikoa chako, kama vile `xxx.com` .

Kisha, `i18n.site -n` , ukurasa tuli utatolewa katika saraka `out/main/htm` .

Bila shaka, unaweza pia kuwezesha faili nyingine za usanidi, kama vile kurejelea kwanza usanidi wa `main` kuunda `.i18n/htm/dist.package.json` na `.i18n/htm/dist.yml` .

Kisha endesha `i18n.site -n -c dist` ili ukurasa tuli utatolewa kwa `out/dist/htm` .

`nginx` inaweza kuwekwa kwa kurejelea usanidi ulio hapa chini.

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# Usihifadhi hati za mfanyakazi wa seva kwa muda mrefu sana
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# Weka muda mrefu zaidi wa akiba kwa rasilimali zingine tuli
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# Weka faili tuli ambayo kitambazaji hutumia kama ingizo la ukurasa wa nyumbani
location = / {
  # Ikiwa $botLang si tupu, inamaanisha ufikiaji wa kutambaa na kuelekeza upya kulingana na njia iliyowekwa ya lugha
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# Usanidi wa programu ya ukurasa mmoja
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## Sanidi Hifadhi Ya Kitu Kwa Kupakia Faili Tuli

Faili tuli zinaweza kuzalishwa ndani ya nchi, lakini mbinu ya kawaida zaidi ni kuzipakia kwenye hifadhi ya kitu.

Rekebisha `out` iliyosanidiwa hapo juu kuwa :

```
out:
  - s3
```

Kisha, hariri `~/.config/i18n.site.yml` na ongeza usanidi ufuatao :

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

Katika usanidi, tafadhali badilisha `i18n.site` hadi thamani ya `host:` katika `.i18n/htm/main.yml` , hifadhi nyingi za vitu zinaweza kusanidiwa chini ya `s3` , na sehemu ya `region` ni ya hiari (duka nyingi za vitu hazihitaji kuweka uga huu).

Kisha endesha `i18n.site -n` ili kuchapisha tena mradi.

Ikiwa umerekebisha `~/.config/i18n.site.yml` na ungependa kupakia upya, tafadhali tumia amri ifuatayo katika saraka ya mizizi ya mradi ili kufuta akiba ya upakiaji :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## Usanidi Wa cloudflare

Jina la kikoa limepangishwa [cloudflare](//www.cloudflare.com)

### Kanuni Za Uongofu

Ongeza kanuni za uongofu kama inavyoonyeshwa hapa chini:

![](//p.3ti.site/1725436822.avif)

Kanuni ya kanuni ni kama ifuatavyo, tafadhali rekebisha msimbo "i18n.site" kwa jina la kikoa chako:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Sheria Za Caching

Ongeza sheria za kashe kama ifuatavyo:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Elekeza Upya Sheria

Weka sheria za uelekezaji kwingine kama ifuatavyo, tafadhali rekebisha msimbo "i18n.site" kwa jina la kikoa chako.

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

`URL redirect` Chagua uelekezaji upya unaobadilika, tafadhali rekebisha `/en` katika njia ya `concat("/en",http.request.uri.path,".htm")` ya kuelekeza kwingine hadi lugha chaguo-msingi unayotaka injini tafuti zijumuishe.

## Usanidi Wa Wingu Wa Akili Wa Baidu

Ikiwa unahitaji kutoa huduma kwa China bara, unaweza kutumia [Baidu Smart Cloud](//cloud.baidu.com) .

Data inapakiwa kwenye Hifadhi ya Kitu cha Baidu na kufungwa kwenye Mtandao wa Usambazaji wa Maudhui wa Baidu.

Kisha unda hati katika [huduma ya EdgeJS](//console.bce.baidu.com/cdn/#/cdn/ejs/list) kama ifuatavyo

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
  // Vijajuu vya majibu vinaweza kuwekwa ili kutoa utatuzi, kama vile out.XXX = 'MSG';
})
```

Bofya `Debug` , kisha ubofye Chapisha kwa mtandao mzima.

![](//p.3ti.site/1725437754.avif)

## Matumizi Ya Hali Ya Juu: Sambaza Trafiki Kulingana Na Azimio La Kikanda

Iwapo ungependa kutoa huduma nchini China bara na pia unataka trafiki `cloudflare` ya kimataifa isiyolipishwa, unaweza kutumia `DNS` yenye azimio la kikanda.

Kwa mfano, [Wingu DNS Huawei](https://www.huaweicloud.com) hutoa uchanganuzi wa kikanda bila malipo, ambao trafiki ya China bara inaweza kupitia Baidu Smart Cloud, na trafiki ya kimataifa inaweza kupitia `cloudflare` .

Kuna mitego mingi katika usanidi wa `cloudflare` Hapa kuna vidokezo vichache vya kuzingatia :

### Jina La Kikoa Linapangishwa Katika Zingine `DNS` , Jinsi Ya Kutumia `cloudflare`

Kwanza funga jina la kikoa kiholela kwa `cloudflare` , na kisha utumie `SSL/TLS` → jina maalum la kikoa kuhusisha jina kuu la kikoa na jina hili la kikoa.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` Haiwezi Kufikiwa Kupitia Jina Maalum La Kikoa

Kwa sababu hifadhi ya kitu `cloudflare` `R2` haiwezi kufikiwa kwa jina la kikoa lililogeuzwa kukufaa, hifadhi ya kitu cha mtu wa tatu inahitaji kutumiwa kuweka faili tuli.

Hapa [backblaze.com](https://www.backblaze.com) kama mfano kuonyesha jinsi ya kufunga vitu vya mtu wa tatu kuhifadhiwa kwa `cloudflare` .

Unda ndoo kwa `backblaze.com` , pakia faili yoyote, bofya ili kuvinjari faili, na upate jina la kikoa la `Friendly URL` , ambalo ni `f003.backblazeb2.com` hapa.

![](//p.3ti.site/1725440783.avif)

Badilisha jina la kikoa kutoka `CNAME` hadi `f003.backblazeb2.com` saa `cloudflare` na uwashe wakala.

![](//p.3ti.site/1725440896.avif)

Rekebisha `cloudflare` kati ya `SSL` modi ya usimbaji fiche, weka `Full`

![](//p.3ti.site/1725438572.avif)

Ongeza sheria ya ubadilishaji kama inavyoonyeshwa hapa chini, iweke kwanza (ya kwanza ina kipaumbele cha chini zaidi):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` chagua inayobadilika na urekebishe `your_bucketname` kati ya `concat("/file/your_bucketname",http.request.uri.path)` kwa jina la ndoo yako.

Kwa kuongeza, katika sheria ya uongofu `cloudflare` hapo juu, `index.html` inabadilishwa hadi `file/your_bucketname/index.html` , na usanidi mwingine unabaki sawa.

![](//p.3ti.site/1725441384.avif)