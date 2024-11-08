# Maskanakuna Allinchay (Seo) .

## Principio Nisqamanta

`i18n.site` mana musuqyachiy sapalla p'anqa arquitecturata hap'in Maskana indexacionta yanapanapaq, sapaq mana kuyukuq p'anqa chaymanta `sitemap.xml` ruwasqa kanqa rastreadorkunapaq.

`User-Agent` yaykuy mañakuymanta maskana motor maskaqwan llamk'achkan, mañakuyqa `302` kaqnintakama mana kuyukuq p'anqaman kutichisqa kanqa.

Mana kuyukuq p'anqakunapi, `link` llamk'achiy kay p'anqap huk simip rikch'ayninkunaman t'inkikunata rikuchinaykipaq, ahinataq :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## Llaqta nginx Nisqa Wakichiy

Demo proyectopi `.i18n/htm/main.yml` ruwana willañiqita huk rikch'anachiy hina hap'iy

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

Ama hina kaspa, ñawpaqta `host:` patamanta chanitaqa kamachiy sutiykiman tikray, ahinataq `xxx.com` .

Chaymanta, `i18n.site -n` , mana kuyukuq p'anqaqa `out/main/htm` sutiyuq qillqana mayt'upi paqarichisqa kanqa.

Chiqamanta, wak wakichiy willañiqikunatapas atichiyta atikunki, ahinataq ñawpaqta `main` wakichiymanta rimaspa `.i18n/htm/dist.package.json` chaymanta `.i18n/htm/dist.yml` ruwanapaq.

Chaymanta `i18n.site -n -c dist` purichiy, chaywantaq mana kuyukuq p'anqa `out/dist/htm` nisqaman paqarichisqa kanqa.

`nginx` nisqataqa uraypi kaq wakichiyta qhawarispa churayta atikun.

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# Ama sirwiq llamk’aq scriptkunata ancha unayta waqaychaychu
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# Huk mana kuyukuq yanapakuykunapaq aswan unay waqaychasqa pachakunata churay
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# Mayqin mana kuyukuq willañiqitachus rastreador qallariy p'anqapi yaykuy hina llamk'achin chayta churay
location = / {
  # $botLang
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# Huk p'anqalla ruwana wakichiy
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## Imakuna Waqaychayta Wakichiy, Mana Kuyukuq Willañiqikunata Karganapaq

Mana kuyukuq willañiqikunataqa llaqtapi paqarichiyta atikunmi, ichataq aswan riqsisqa ruwayqa imakuna waqaychayman yapaymi.

`out` hawapi wakichisqa kaqta tikray :

```
out:
  - s3
```

Chaymanta, `~/.config/i18n.site.yml` llamk'achiyta hinaspa kay ruwayta yapay :

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

Wakichiypi, ama hina kaspa `i18n.site` `host:` `.i18n/htm/main.yml` kaqpi chaniman tikray, achka imakuna waqaychasqakuna `s3` urapi wakichisqa kanman, `region` pampataq akllanapaq (achka ima waqaychasqakuna mana kay pampata churanankuchu tiyan).

Chaymanta `i18n.site -n` purichiy llamk'ayta wakmanta lluqsichinaykipaq.

Sichus `~/.config/i18n.site.yml` hukchasqaña kanki chaymanta wakmanta kargayta munanki, ama hina kaspa kay kamachiyta llamk'achiy proyecto sapsi qillqana mayt'upi karga waqaychasqata ch'uyanchanaykipaq :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## Puyu Llimp’iyuq Wakichiy

Dominio sutiqa [cloudflare](//www.cloudflare.com)

### Tikray Kamachiykuna

Uraypi rikuchisqa hina tikray kamachiykunata yapay:

![](//p.3ti.site/1725436822.avif)

Kamachiypa chiqanchayninqa kayhinam, ama hina kaspa "i18n.site" chikuta kamachiy sutiykiman tikray:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Caching Kamachiykuna

Waqaychasqa kamachiykunata kayhinata yapay:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Kamachiykunata Hukman Kutichiy

Kayhinata kutichiy kamachiykunata churay, ama hina kaspa "i18n.site" nisqa chikuta kamachiy sutiykiman tikray

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

`URL redirect` Dinamico kutichiyta akllay, ama hina kaspa `/en` tikray ñanpi `concat("/en",http.request.uri.path,".htm")` kaqpi maskanakuna churayta munasqayki ñawpaqmanta simiman.

## Baidu Yuyaysapa Puyu Wakichiy

Sichus China hatun suyuman yanapakuykunata qunayki tiyan, [Baidu Smart Cloud](//cloud.baidu.com) llamk'achiy atikunki.

Willayta Baidu Objeto Waqaychayman kargasqa chaymanta Baidu Contenido Rakiy Llikaman watasqa.

Chaymantaqa [EdgeJS edge service](//console.bce.baidu.com/cdn/#/cdn/ejs/list) nisqapi qillqa mayt'uta kayhinata ruway

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
  // Kutichiy umalliqkuna lluqsiyta pantasqa allichaypaq churasqa kanman, ahinataq out.XXX = 'MSG';
})
```

`Debug` ñit'iy, chaymantataq Llapan llikaman lluqsichiy ñit'iy.

![](//p.3ti.site/1725437754.avif)

## Ñawpaqman Purichiy: Regional Resolución Nisqaman Hina Trafico Nisqa Rakiy

Sichus China hatun suyupi yanapakuykunata quyta munanki chaymanta `cloudflare` mana qullqiyuq internacional t'ikrayta munanki, `DNS` regional resolución kaqwan llamk'achiy atikunki.

Ejemplopaq `cloudflare` [Huawei Cloud DNS](https://www.huaweicloud.com)

`cloudflare` configuración nisqapiqa achka trampakunam kachkan, ¡Kaypim huk iskay kimsa puntokuna qawanapaq kachkan :

### Domain Sutiqa Huk `DNS` Kaqpi Qusqa Kachkan, Imayna `cloudflare` Llamk'achiyta

Ñawpaqta huk munasqa kamachiy sutita `cloudflare` kaqman watay, chaymanta `SSL/TLS` → sapanchasqa kamachiy sutita llamk'achiy hatun kamachiy sutita kay kamachiy sutiwan tinkinapaq.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` Manam Sapanchasqa Kamachiy Sutiwan Yaykuyta Atikunmanchu

Imaraykuchus - ruwasqa `cloudflare` imayay waqaychasqa `R2` mana huk ruwasqa kamachiy sutiwan yaykuyta atikunmanchu, huk kimsa kaq imaya waqaychay llamk'achinan tiyan mana kuyusqa willañiqikunata churanapaq.

`cloudflare` [backblaze.com](https://www.backblaze.com)

`backblaze.com` kaqpi huk kutilla ruway, mayqin willañiqitapas yapay, willañiqita qhawanaykipaq ñit'iy, `Friendly URL` kaqpa kamachiy sutinta hap'iy, kaypi `f003.backblazeb2.com` kaq.

![](//p.3ti.site/1725440783.avif)

`CNAME` kaqmanta `f003.backblazeb2.com` kaqman `cloudflare` kaqpi kamachiy sutita tikray chaymanta proxy atichiy.

![](//p.3ti.site/1725440896.avif)

`cloudflare` kaqmanta `SSL` → chifray ñanta tikray, `Full` kaqman churay

![](//p.3ti.site/1725438572.avif)

Uraypi rikuchisqa hina tikray kamachiyta yapay, ñawpaqta churay (ñawpaq kaq aswan pisi ñawpaqman churasqa):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` dinámico akllay hinaspa `your_bucketname` `concat("/file/your_bucketname",http.request.uri.path)` kaqpi cubo sutiykiman tikray.

Chaymantapas, hawapi `cloudflare` tikray kamachiypi, `index.html` `file/your_bucketname/index.html` kaqman tikrasqa, huk ruwanakunataq kaqlla qhipakunku.

![](//p.3ti.site/1725441384.avif)