# Leitarvélabestun (Seo)

## Meginreglu

`i18n.site` tekur upp einnar síðuarkitektúr sem ekki er endurnýjaður Til þess að auðvelda leitarflokkun verður sérstök kyrrstæð síða og `sitemap.xml` til að skríða.

Þegar `User-Agent` á aðgangsbeiðninni er notað af leitarvélarskriðnum verður beiðninni vísað á kyrrstæðu síðu með `302` .

Á kyrrstæðum síðum, notaðu `link` til að gefa til kynna tengla á mismunandi tungumálaútgáfur þessarar síðu, eins og :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## Staðbundin nginx Stilling

Taktu `.i18n/htm/main.yml` stillingarskrána í kynningarverkefninu sem dæmi

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

Vinsamlegast breyttu fyrst gildinu `host:` hér að ofan við lénið þitt, eins og `xxx.com` .

Þá, `i18n.site -n` , verður kyrrstæða síða búin til í `out/main/htm` möppunni.

Auðvitað geturðu líka virkjað aðrar stillingarskrár, svo sem að vísa fyrst til stillingar `main` til að búa til `.i18n/htm/dist.package.json` og `.i18n/htm/dist.yml` .

Keyrðu síðan `i18n.site -n -c dist` þannig að kyrrstæða síðan verður til í `out/dist/htm` .

`nginx` er hægt að stilla með því að vísa til stillingar hér að neðan.

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# Ekki geyma forskriftir starfsmanna í skyndiminni of lengi
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# Stilltu lengri skyndiminnistíma fyrir aðrar kyrrstæður auðlindir
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# Stilltu hvaða kyrrstöðu skrá skriðan notar sem færslu á heimasíðunni
location = / {
  # Ef $botLang er ekki tómt þýðir það skriðaðgang og tilvísun í samræmi við uppsetta tungumálaslóð
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# Stilling forrits á einni síðu
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## Stilltu Hlutgeymslu Til Að Hlaða Upp Kyrrstæðum Skrám

Hægt er að búa til kyrrstæðar skrár á staðnum, en algengari aðferð er að hlaða þeim upp á hlutgeymslu.

Breyttu `out` sem er stillt hér að ofan í :

```
out:
  - s3
```

Síðan skaltu breyta `~/.config/i18n.site.yml` og bæta við eftirfarandi stillingum :

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

Í uppsetningunni, vinsamlegast breyttu `i18n.site` í gildið `host:` í `.i18n/htm/main.yml` , margar hlutageymslur geta verið stilltar undir `s3` , og `region` reiturinn er valfrjáls (margar hlutageymslur þurfa ekki að stilla þennan reit).

Keyrðu síðan `i18n.site -n` til að endurbirta verkefnið.

Ef þú hefur breytt `~/.config/i18n.site.yml` og vilt hlaða upp aftur, vinsamlegast notaðu eftirfarandi skipun í rótarskrá verkefnisins til að hreinsa upphlaða skyndiminni :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## cloudflare Stillingar

Lén hýst á [cloudflare](//www.cloudflare.com)

### Umbreytingarreglur

Bættu við viðskiptareglunum eins og sýnt er hér að neðan:

![](//p.3ti.site/1725436822.avif)

Reglukóðinn er sem hér segir, vinsamlegast breyttu kóðanum "i18n.site" í lénið þitt:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Skyndiminnisreglur

Bættu skyndiminnisreglum við eins og hér segir:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Tilvísunarreglur

Stilltu tilvísunarreglurnar sem hér segir, vinsamlegast breyttu kóðanum "i18n.site" í lénið þitt

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

`URL redirect` Veldu kraftmikla tilvísun, vinsamlegast breyttu `/en` í tilvísunarleið `concat("/en",http.request.uri.path,".htm")` í sjálfgefið tungumál sem þú vilt að leitarvélar innihaldi.

## Baidu Intelligent Cloud Configuration

Ef þú þarft að veita þjónustu til meginlands Kína geturðu notað [Baidu Smart Cloud](//cloud.baidu.com) .

Gögnum er hlaðið upp í Baidu Object Storage og bundið við Baidu Content Distribution Network.

Búðu síðan til handritið í [EdgeJS](//console.bce.baidu.com/cdn/#/cdn/ejs/list) sem hér segir

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
  // Hægt er að stilla svarhausa til að kemba úttak, svo sem out.XXX = 'MSG';
})
```

Smelltu á `Debug` og smelltu síðan á Birta á allt netið.

![](//p.3ti.site/1725437754.avif)

## Ítarleg Notkun: Dreifðu Umferð Út Frá Svæðisbundinni Upplausn

Ef þú vilt veita þjónustu á meginlandi Kína og vilt líka `cloudflare` ókeypis alþjóðlega umferð geturðu notað `DNS` með svæðisbundinni upplausn.

Til dæmis, [Huawei DNS](https://www.huaweicloud.com) býður upp á ókeypis svæðisgreiningu, þar sem kínversk umferð getur farið í gegnum Baidu Smart Cloud og alþjóðleg umferð getur farið í gegnum `cloudflare` .

Það eru margar gildrur í uppsetningunni `cloudflare` Hér eru nokkur atriði til að hafa í huga :

### Lénið Er Hýst Í Öðrum `DNS` , Hvernig Á Að Nota `cloudflare`

Bindið fyrst handahófskennt lén við `cloudflare` , og notaðu síðan `SSL/TLS` → sérsniðið lén til að tengja aðallénið við þetta lén.

![](https://p.3ti.site/1725438658.avif)

### Ekki Er Hægt Að Nálgast `cloudflare R2` Í Gegnum Sérsniðið Lén

Vegna þess að ekki er hægt að nálgast `cloudflare` hlutageymsluna `R2` með sérsniðnu lénsheiti, þarf að nota hlutageymslu þriðja aðila til að setja fastar skrár.

[backblaze.com](https://www.backblaze.com) tökum við sem dæmi til að sýna hvernig á að binda hluti frá þriðja aðila til að geyma á `cloudflare` .

Búðu til fötu á `backblaze.com` , hladdu upp hvaða skrá sem er, smelltu til að fletta í skránni og fáðu lénið `Friendly URL` , sem er `f003.backblazeb2.com` hér.

![](//p.3ti.site/1725440783.avif)

Breyttu léninu úr `CNAME` í `f003.backblazeb2.com` við `cloudflare` og virkjaðu umboðið.

![](//p.3ti.site/1725440896.avif)

Breyta `cloudflare` af `SSL` → dulkóðunarhamur, stilltur á `Full`

![](//p.3ti.site/1725438572.avif)

Bættu við viðskiptareglunni eins og sýnt er hér að neðan, settu hana fyrst (sú fyrsta hefur lægsta forgang):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` veldu dynamic og breyttu `your_bucketname` í `concat("/file/your_bucketname",http.request.uri.path)` í fötu nafnið þitt.

Að auki, í `cloudflare` umreikningsreglunni hér að ofan, er `index.html` breytt í `file/your_bucketname/index.html` og aðrar stillingar eru óbreyttar.

![](//p.3ti.site/1725441384.avif)