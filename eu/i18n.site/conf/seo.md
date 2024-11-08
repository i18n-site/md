# Bilatzaileen Optimizazioa (Seo)

## Printzipioa

`i18n.site` orrialde bakarreko arkitektura bat hartzen du, bilaketak indexatzea errazteko, orri estatiko bereizi bat eta `sitemap.xml` sortuko dira arakatzaileek arakatzeko.

Sarbide-eskaeraren `User-Agent` bilatzailea arakatzaileak erabiltzen duenean, eskaera orri estatikora birbideratuko da `302` bidez.

Orri estatikoetan, erabili `link` orri honen hizkuntza-bertsio desberdinetarako estekak adierazteko, adibidez :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## nginx Lokalaren Konfigurazioa

Hartu adibide gisa demo proiektuko `.i18n/htm/main.yml` konfigurazio fitxategia

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

Mesedez, lehenik eta behin aldatu goiko `host:` balioa zure domeinu-izenera, adibidez, `xxx.com` .

Ondoren, `i18n.site -n` , orri estatikoa sortuko da `out/main/htm` direktorioan.

Jakina, beste konfigurazio-fitxategi batzuk ere gaitu ditzakezu, esate baterako, lehenik `main` -ren konfigurazioari erreferentzia egitea `.i18n/htm/dist.package.json` eta `.i18n/htm/dist.yml` sortzeko.

Ondoren, exekutatu `i18n.site -n -c dist` orri estatikoa `out/dist/htm` sortuko da.

`nginx` ezar daiteke beheko konfigurazioari erreferentzia eginez.

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# Ez gorde zerbitzariko langileen scriptak denbora luzez
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# Ezarri beste baliabide estatiko batzuen cache-denbora luzeagoak
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# Ezarri zein fitxategi estatiko erabiltzen duen arakatzaileak hasierako orrialdeko sarrera gisa
location = / {
  # $botLang hutsik ez badago, arakatzailearen sarbidea eta birbideratzea esan nahi du ezarritako hizkuntza-bidearen arabera
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# Orri bakarreko aplikazioaren konfigurazioa
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## Konfiguratu Objektuen Biltegia Fitxategi Estatikoak Kargatzeko

Fitxategi estatikoak lokalean sor daitezke, baina ohikoagoa den ikuspegia objektuen biltegiratzera igotzea da.

Aldatu goian konfiguratutako `out` :

```
out:
  - s3
```

Ondoren, editatu `~/.config/i18n.site.yml` eta gehitu konfigurazio hau :

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

Konfigurazioan, mesedez aldatu `i18n.site` `host:` in `.i18n/htm/main.yml` baliora, hainbat objektu-biltegiak `s3` azpian konfigura daitezke eta `region` eremua aukerakoa da (objektu-denda askok ez dute eremu hau ezarri behar).

Ondoren, exekutatu `i18n.site -n` proiektua berriro argitaratzeko.

`~/.config/i18n.site.yml` aldatu baduzu eta berriro kargatu nahi baduzu, erabili hurrengo komandoa proiektuaren erroko direktorioa kargatzeko cachea garbitzeko :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## cloudflare Konfigurazioa

Domeinuaren izena [cloudflare](//www.cloudflare.com)

### Bihurketa-Arauak

Gehitu bihurketa-arauak behean erakusten den moduan:

![](//p.3ti.site/1725436822.avif)

Arau-kodea honako hau da, mesedez aldatu "i18n.site" kodea zure domeinu-izenera:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Cachean Gordetzeko Arauak

Gehitu cache-arauak honela:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Birbideratu Arauak

Ezarri birbideratzeko arauak honela, mesedez aldatu "i18n.site" kodea zure domeinu-izenarekin

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

`URL redirect` Hautatu birbideratze dinamikoa, aldatu `/en` birbideratze-bideko `concat("/en",http.request.uri.path,".htm")` bilatzaileen hizkuntza lehenetsira.

## Baidu Hodei Adimendunaren Konfigurazioa

Txina kontinentalean zerbitzuak eskaini behar badituzu, [Baidu Smart Cloud](//cloud.baidu.com) erabil dezakezu.

Datuak Baidu Object Storage-ra kargatzen dira eta Baidu Content Distribution Network-era lotzen dira.

Ondoren, sortu script-a [edge EdgeJS](//console.bce.baidu.com/cdn/#/cdn/ejs/list)

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
  // Erantzunen goiburuak irteera arazketarako ezar daitezke, hala nola out.XXX = 'MSG';
})
```

Sakatu `Debug` eta, ondoren, Argitaratu sare osoan.

![](//p.3ti.site/1725437754.avif)

## Erabilera Aurreratua: Banatu Trafikoa Eskualdeko Bereizmenaren Arabera

Txina kontinentalean zerbitzuak eskaini nahi badituzu eta nazioarteko trafiko `cloudflare` doan ere nahi baduzu, `DNS` erabil dezakezu eskualdeko bereizmenarekin.

Adibidez, [Huawei Cloud DNS -k](https://www.huaweicloud.com) doako eskualdeko analisia eskaintzen du, eta horrekin Txinako kontinenteko trafikoa Baidu Smart Cloud-etik pasa daiteke eta nazioarteko trafikoa `cloudflare` pasa daiteke.

`cloudflare` ren konfigurazioan hutsune asko daude. Hona hemen kontuan hartu beharreko puntu batzuk :

### Domeinu-Izena Beste `DNS` Batean Dago, Nola Erabili `cloudflare`

Lehenik eta behin, lotu arbitrariozko domeinu-izen bat `cloudflare` , eta, ondoren, erabili `SSL/TLS` → domeinu-izen pertsonalizatua domeinu-izen nagusia domeinu-izen honi lotzeko.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` Ezin Da Domeinu-Izen Pertsonalizatu Baten Bidez Sartu

`cloudflare` objektuen biltegiratze `R2` ezin denez domeinu-izen pertsonalizatu batek atzitu, hirugarrenen objektuen biltegiratze bat erabili behar da fitxategi estatikoak jartzeko.

[backblaze.com](https://www.backblaze.com) adibide gisa hartzen dugu hirugarrenen objektuak `cloudflare` -n gordetzeko nola lotu erakusteko.

Sortu ontzi bat `backblaze.com` -n, igo edozein fitxategi, egin klik fitxategia arakatzeko eta lortu `Friendly URL` domeinu-izena, hau da, `f003.backblazeb2.com` hemen.

![](//p.3ti.site/1725440783.avif)

Aldatu domeinu-izena `CNAME` `f003.backblazeb2.com` `cloudflare` eta gaitu proxya.

![](//p.3ti.site/1725440896.avif)

Aldatu `SSL` `cloudflare` → enkriptatzeko modua, ezarri `Full`

![](//p.3ti.site/1725438572.avif)

Gehitu bihurketa-araua behean agertzen den moduan, jarri lehena (lehenak lehentasun txikiena du):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` hautatu dinamikoa eta aldatu `your_bucketname` in `concat("/file/your_bucketname",http.request.uri.path)` zure kuboaren izenera.

Gainera, goiko `cloudflare` bihurketa-arauan, `index.html` `file/your_bucketname/index.html` -ra aldatzen da eta beste konfigurazioek berdin jarraitzen dute.

![](//p.3ti.site/1725441384.avif)