# Optimisation Ya Moteur De Recherche (Seo) .

## Etinda Ya Etinda

`i18n.site` e adopter architecture ya page moko non-refresh Pona ko faciliter indexation ya recherche, page statique na `sitemap.xml` ya separate eko produire pona ba rastreurs.

Tango `User-Agent` ya demande ya accès esalelami na rastreur ya moteur ya recherche, demande eko redirectionné na page statique na nzela ya `302` .

Na nkasa ya statique, salelá `link` mpo na kolakisa ba liens oyo ezali komema na ba versions ya minoko ndenge na ndenge ya lokasa oyo, lokola :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## Configuration Ya nginx Ya Esika

Bozua fichier ya configuration `.i18n/htm/main.yml` na projet ya démonstration lokola exemple

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

Svp bobongola liboso motuya ya `host:` likolo na kombo ya domaine na yo, lokola `xxx.com` .

Na nsima, `i18n.site -n` , lokasa ya statique ekosalema na répertoire `out/main/htm` .

Ya solo, okoki mpe ko activer ba fichiers misusu ya configuration, lokola liboso ko référer na configuration ya `main` pona kosala `.i18n/htm/dist.package.json` na `.i18n/htm/dist.yml` .

Na sima sala `i18n.site -n -c dist` po page statique ezala généré na `out/dist/htm` .

`nginx` ekoki kotiama na kotalaka configuration oyo ezali awa na se.

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# Kosala cache ya ba scripts ya mosali ya serveur tango molayi mingi te
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# Botia ba temps ya cache ya milayi pona ba ressources statiques misusu
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# Botia fichier statique nini crawler esalela lokola entrée ya page d'accueil
location = / {
  # Soki $botLang
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# Configuration ya application ya page moko
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## Configurer Stockage Ya Objet Pona Ko Uploader Ba Fichiers Statiques

Ba fichiers statiques ekoki kosalama localement, kasi approche oyo esalemaka mingi ezali ya ko uploader yango na stockage ya objet.

Bobongola `out` oyo e configuré likolo na :

```
out:
  - s3
```

Na sima, bongisa `~/.config/i18n.site.yml` pe bakisa configuration oyo elandi :

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

Na configuration, svp changer `i18n.site` na valeur ya `host:` na `.i18n/htm/main.yml` , ba magasins ya objet ebele ekoki ko configurer na se ya `s3` , pe champ `region` ezali optionnel (ba magasins ya objet mingi esengeli te ko setting champ oyo).

Na sima sala `i18n.site -n` pona ko republier projet.

Soki obongoli `~/.config/i18n.site.yml` mpe olingi kozongisa, salelá etinda oyo elandi na répertoire ya misisa ya projet mpo na kopɛtola cache ya kokɔtisa :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## Configuration Ya cloudflare Ya Lipata

Kombo ya domaine oyo eyambami na [cloudflare](//www.cloudflare.com)

### Mibeko Ya Mbongwana

Bakisa mibeko ya mbongwana ndenge elakisami awa na se:

![](//p.3ti.site/1725436822.avif)

Code ya mobeko ezali boye, svp modifier code "i18n.site" na kombo ya domaine na yo:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Mibeko Ya Caching

Bakisa mibeko ya cache ndenge elandi:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Mibeko Ya Kozongisa Nzela

Set mibeko ya redirection ndenge elandi, svp modifier code "i18n.site" na kombo ya domaine na yo

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

`URL redirect` Pona redirection dynamique, svp modifier `/en` na nzela ya redirection `concat("/en",http.request.uri.path,".htm")` na monoko ya défaut oyo olingi ba moteurs de recherche ekotisa.

## Baidu Configuration Ya Cloud Ya Mayele

Soki osengeli kopesa misala na Chine continent, okoki kosalela [Baidu Smart Cloud](//cloud.baidu.com) .

Ba données ezo uploader na Baidu Object Storage pe ekangami na Baidu Content Distribution Network.

Na sima sala script na [service ya EdgeJS](//console.bce.baidu.com/cdn/#/cdn/ejs/list) ndenge elandi

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
  // Mitó ya biyano ekoki kotyama mpo na kosilisa bobimisi, lokola out.XXX = 'MSG';
})
```

Finá na `Debug` , na nsima finá na Publish to the whole network.

![](//p.3ti.site/1725437754.avif)

## Bosaleli Ya Likolo : Kokabola Mobembo Na Kotalaka Résolution Ya Etuka

Soki olingi kopesa ba services na Chine continent mpe olingi pe `cloudflare` trafic international ya ofele, okoki kosalela `DNS` na résolution régionale.

Ndakisa, [Huawei DNS](https://www.huaweicloud.com) epesaka analyse régionale ya ofele, na yango trafic continent ya Chine ekoki koleka na Baidu Smart Cloud, mpe trafic international ekoki koleka na `cloudflare` .

Ba pièges ezali ebele na configuration ya `cloudflare` Tala mua ba points ya ko noter :

### Nkombo Ya Domaine Ezali Hébergé Na `DNS` Mosusu , Ndenge Ya Kosalela `cloudflare`

Ya liboso kanga kombo ya domaine arbitraire na `cloudflare` , mpe sima salela `SSL/TLS` → kombo ya domaine personnalisé mpo na kosangisa kombo ya domaine ya munene na kombo ya domaine oyo.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` Ekoki Kozuama Te Na Nzela Ya Kombo Ya Domaine Personnalisé

Lokola ebombelo ya biloko oyo `cloudflare` na kati `R2` ekoki kozwama te na nkombo ya domaine oyo ebongisami, esengeli kosalela bobateli ya biloko ya bato mosusu mpo na kotia ba fichiers statiques.

Awa `cloudflare` [backblaze.com](https://www.backblaze.com)

Salá seau na `backblaze.com` , tia fichier nionso, finá mpo na kotala fichier, mpe zwa kombo ya domaine ya `Friendly URL` , oyo ezali `f003.backblazeb2.com` awa.

![](//p.3ti.site/1725440783.avif)

Bobongola kombo ya domaine de `CNAME` à `f003.backblazeb2.com` na `cloudflare` pe activer proxy.

![](//p.3ti.site/1725440896.avif)

Bobongola `cloudflare` ya `SSL` → mode ya chiffrement, botia na `Full`

![](//p.3ti.site/1725438572.avif)

Bakisa mobeko ya mbongwana ndenge elakisami awa na se, tia yango liboso (oyo ya liboso ezali na priorité ya se):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` pona dynamique pe modifier `your_bucketname` na `concat("/file/your_bucketname",http.request.uri.path)` na kombo ya seau na yo.

En plus, na règle ya conversion `cloudflare` oyo ezali likolo, `index.html` e changer na `file/your_bucketname/index.html` , pe ba configurations misusu etikali ndenge moko.

![](//p.3ti.site/1725441384.avif)