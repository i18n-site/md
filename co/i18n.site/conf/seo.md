# Search Engine Optimization (Seo)

## Principiu

`i18n.site` adopta una architettura di una sola pagina senza rinfrescante Per facilità l'indici di ricerca, una pagina statica separata è `sitemap.xml` seranu generati per i crawlers.

Quandu `User-Agent` di a dumanda d'accessu hè utilizatu da u crawler di u mutore di ricerca, a dumanda serà rediretta à a pagina statica via `302` .

Nant'à e pagine statiche, utilizate `link` per indicà ligami à diverse versioni di lingua di sta pagina, cum'è :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## Cunfigurazione nginx Locale

Pigliate u schedariu di cunfigurazione `.i18n/htm/main.yml` in u prughjettu demo per esempiu

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

Per piacè prima mudificà u valore di `host:` sopra à u vostru nome di duminiu, cum'è `xxx.com` .

Allora, `i18n.site -n` , a pagina statica serà generata in u cartulare `out/main/htm` .

Di sicuru, pudete ancu attivà altri schedarii di cunfigurazione, cum'è prima riferite à a cunfigurazione di `main` per creà `.i18n/htm/dist.package.json` è `.i18n/htm/dist.yml` .

Allora eseguite `i18n.site -n -c dist` per chì a pagina statica serà generata à `out/dist/htm` .

`nginx` pò esse stabilitu in riferimentu à a cunfigurazione sottu.

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# Ùn cache micca i script di u travagliu di u servitore per troppu longu
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# Stabilite tempi di cache più longu per altre risorse statiche
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# Stabilite u schedariu staticu chì u crawler usa cum'è l'entrata di a pagina iniziale
location = / {
  # Se $botLang ùn hè micca viotu, significa l'accessu di u crawler è a redirezzione secondu u percorsu di lingua stabilitu
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# Cunfigurazione di l'applicazione di una sola pagina
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## Configurate L'almacenamiento D'uggetti Per a Carica Di Fugliali Statici

I fugliali statichi ponu esse generati in u locu, ma un approcciu più cumuni hè di caricalli in u almacenamentu di l'ughjettu.

Mudificà `out` cunfiguratu sopra à :

```
out:
  - s3
```

Allora, editate `~/.config/i18n.site.yml` è aghjunghje a cunfigurazione seguente :

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

In a cunfigurazione, per piacè cambià `i18n.site` à u valore di `host:` in `.i18n/htm/main.yml` , parechje magazzini d'uggetti ponu esse cunfigurati sottu `s3` , è u campu `region` hè opzionale (assai magazzini d'uggetti ùn anu micca bisognu di stabilisce stu campu).

Allora eseguite `i18n.site -n` per ripubblicà u prugettu.

Se avete mudificatu `~/.config/i18n.site.yml` è vulete re-upload, per piacè aduprate u cumandimu seguitu in u repertoriu radicale di u prugettu per sguassà a cache di carica :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## Cunfigurazione cloudflare

Nome di duminiu ospitatu à [cloudflare](//www.cloudflare.com)

### Reguli Di Cunversione

Aghjunghjite e regule di cunversione cum'è mostra quì sottu:

![](//p.3ti.site/1725436822.avif)

U codice di regula hè a siguenti, per piacè mudificà u codice "i18n.site" à u vostru nome di duminiu:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Regule Di Caching

Aghjunghjite e regule di cache cum'è seguente:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Redirect Regule

Stabilite e regule di redirezzione cum'è seguita, per piacè mudificà u codice "i18n.site" à u vostru nome di duminiu

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

`URL redirect` Sceglite a redirezzione dinamica, per piacè mudificà `/en` in u percorsu di redirezzione `concat("/en",http.request.uri.path,".htm")` à a lingua predeterminata chì vulete chì i motori di ricerca includinu.

## Baidu Intelligent Cloud Configuration

Sè avete bisognu di furnisce servizii à a Cina continentale, pudete aduprà [Baidu Smart Cloud](//cloud.baidu.com) .

I dati sò caricati in Baidu Object Storage è legati à Baidu Content Distribution Network.

Allora crea u script in [EdgeJS serviziu di bordu](//console.bce.baidu.com/cdn/#/cdn/ejs/list) cum'è seguitu

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
  // L'intestazione di a risposta pò esse impostata per debug output, cum'è out.XXX = 'MSG';
})
```

Cliccate `Debug` , dopu cliccate Publicà in tutta a reta.

![](//p.3ti.site/1725437754.avif)

## Utilizazione Avanzata: Distribuite U Trafficu Basatu Annantu À a Risoluzione Regiunale

Se vulete furnisce servizii in Cina continentale è vulete ancu `cloudflare` trafficu internaziunale gratuitu, pudete aduprà `DNS` cù risoluzione regiunale.

Per esempiu, [Huawei DNS](https://www.huaweicloud.com) furnisce analisi regiunale gratuitu, cù quale u trafficu cinese continentale pò passà per Baidu Smart Cloud, è u trafficu internaziunale pò passà per `cloudflare` .

Ci hè parechje trappule in a cunfigurazione di `cloudflare` Eccu uni pochi di punti da nutà :

### U Nomu Di Duminiu Hè Ospitu in Altri `DNS` , Cumu Utilizà `cloudflare`

Prima ligà un nome di duminiu arbitrariu à `cloudflare` , è dopu aduprate `SSL/TLS` → nome di duminiu persunalizatu per associà u nome di duminiu principale à questu nome di duminiu.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` Ùn Si Pò Accede À Traversu Un Nome Di Duminiu Persunalizatu

Perchè l'almacenamiento d'ughjettu `cloudflare` `R2` ùn pò micca esse accessu da un nome di duminiu persunalizatu, un almacenamentu d'ughjettu di terzu deve esse usatu per mette i schedari statichi.

Quì avemu pigliatu cum'è un esempiu per [backblaze.com](https://www.backblaze.com) cumu ligà l'oggetti di terzu per esse guardatu à `cloudflare` .

Crea un bucket à `backblaze.com` , caricate qualsiasi fugliale, cliccate per navigà u schedariu, è uttene u nome di duminiu di `Friendly URL` , chì hè `f003.backblazeb2.com` quì.

![](//p.3ti.site/1725440783.avif)

Cambia u nome di duminiu da `CNAME` à `f003.backblazeb2.com` à `cloudflare` è attivate u proxy.

![](//p.3ti.site/1725440896.avif)

Mudificà `cloudflare` di `SSL` → modalità di criptografia, stabilitu à `Full`

![](//p.3ti.site/1725438572.avif)

Aghjunghjite a regula di cunversione cum'è mostra quì sottu, mette prima (u primu hà a priorità più bassa):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` selezziunate dinamica è mudificà `your_bucketname` in `concat("/file/your_bucketname",http.request.uri.path)` à u vostru nome di bucket.

Inoltre, in a regula di cunversione `cloudflare` sopra, `index.html` hè cambiatu à `file/your_bucketname/index.html` , è l'altri cunfigurazioni restanu listessi.

![](//p.3ti.site/1725441384.avif)