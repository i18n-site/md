# Meklētājprogrammu Optimizācija (Seo)

## Principu

`i18n.site` izmanto neatsvaidzinošu vienas lapas arhitektūru. Lai atvieglotu meklēšanas indeksēšanu, rāpuļprogrammām tiks ģenerēta atsevišķa statiska lapa un `sitemap.xml` .

Ja meklētājprogrammas rāpuļprogramma izmanto piekļuves pieprasījuma `User-Agent` , pieprasījums tiks novirzīts uz statisko lapu, izmantojot `302` .

Statiskās lapās izmantojiet `link` lai norādītu saites uz dažādām šīs lapas valodu versijām, piemēram :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## Vietējā nginx Konfigurācija

Kā piemēru ņemiet `.i18n/htm/main.yml` konfigurācijas failu demonstrācijas projektā

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

Lūdzu, vispirms mainiet iepriekš norādīto vērtību `host:` savā domēna vārdā, piemēram, `xxx.com` .

Pēc tam, `i18n.site -n` , statiskā lapa tiks ģenerēta direktorijā `out/main/htm` .

Protams, varat iespējot arī citus konfigurācijas failus, piemēram, vispirms atsaucoties uz `main` konfigurāciju, lai izveidotu `.i18n/htm/dist.package.json` un `.i18n/htm/dist.yml` .

Pēc tam palaidiet `i18n.site -n -c dist` , lai statiskā lapa tiktu ģenerēta uz `out/dist/htm` .

`nginx` var iestatīt, izmantojot tālāk norādīto konfigurāciju.

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# Neglabājiet servera darbinieku skriptus pārāk ilgi kešatmiņā
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# Iestatiet ilgāku kešatmiņas laiku citiem statiskajiem resursiem
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# Iestatiet, kuru statisko failu rāpuļprogramma izmanto kā sākumlapas ierakstu
location = / {
  # Ja $botLang nav tukšs, tas nozīmē rāpuļprogrammas piekļuvi un novirzīšanu atbilstoši iestatītajam valodas ceļam
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# Vienas lapas lietojumprogrammas konfigurācija
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## Konfigurējiet Objektu Krātuvi Statisku Failu Augšupielādei

Statiskus failus var ģenerēt lokāli, taču izplatītāka pieeja ir to augšupielāde objektu krātuvē.

Mainiet iepriekš konfigurēto `out` uz :

```
out:
  - s3
```

Pēc tam rediģējiet `~/.config/i18n.site.yml` un pievienojiet šādu konfigurāciju :

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

Konfigurācijā, lūdzu, mainiet `i18n.site` uz vērtību `host:` in `.i18n/htm/main.yml` , vairākus objektu veikalus var konfigurēt zem `s3` , un lauks `region` nav obligāts (daudziem objektu veikaliem šis lauks nav jāiestata).

Pēc tam palaidiet `i18n.site -n` lai atkārtoti publicētu projektu.

Ja esat mainījis `~/.config/i18n.site.yml` un vēlaties augšupielādēt atkārtoti, lūdzu, izmantojiet šo komandu projekta saknes direktorijā, lai notīrītu augšupielādes kešatmiņu :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## cloudflare Konfigurācija

Domēna vārds mitināts [cloudflare](//www.cloudflare.com)

### Konversijas Noteikumi

Pievienojiet konvertēšanas noteikumus, kā parādīts zemāk:

![](//p.3ti.site/1725436822.avif)

Noteikuma kods ir šāds. Lūdzu, mainiet kodu "i18n.site" uz savu domēna nosaukumu:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Kešatmiņas Noteikumi

Pievienojiet kešatmiņas noteikumus šādi:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Pāradresācijas Noteikumi

Iestatiet tālāk norādītos novirzīšanas noteikumus, lūdzu, mainiet kodu "i18n.site" savā domēna vārdā

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

`URL redirect` Atlasiet dinamisko novirzīšanu, lūdzu, mainiet `/en` `concat("/en",http.request.uri.path,".htm")` novirzīšanas ceļā uz noklusējuma valodu, kuru vēlaties iekļaut meklētājprogrammās.

## Baidu Inteliģentā Mākoņa Konfigurācija

Ja jums ir nepieciešams sniegt pakalpojumus kontinentālajai Ķīnai, varat izmantot [Baidu Smart Cloud](//cloud.baidu.com) .

Dati tiek augšupielādēti Baidu objektu krātuvē un saistīti ar Baidu satura izplatīšanas tīklu.

Pēc tam izveidojiet skriptu [pakalpojumā EdgeJS](//console.bce.baidu.com/cdn/#/cdn/ejs/list)

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
  // Atbilžu galvenes var iestatīt atkļūdošanas izvadei, piemēram, out.XXX = 'MSG';
})
```

Noklikšķiniet uz `Debug` un pēc tam noklikšķiniet uz Publicēt visā tīklā.

![](//p.3ti.site/1725437754.avif)

## Papildu Lietošana: Sadaliet Trafiku, Pamatojoties Uz Reģionālo Izšķirtspēju

Ja vēlaties sniegt pakalpojumus kontinentālajā Ķīnā un vēlaties arī `cloudflare` bezmaksas starptautisko satiksmi, varat izmantot `DNS` ar reģionālo izšķirtspēju.

Piemēram `cloudflare` [Huawei Cloud DNS](https://www.huaweicloud.com)

`cloudflare` konfigurācijā ir daudz nepilnību. Šeit ir daži punkti, kas jāņem vērā :

### Domēna Vārds Tiek Mitināts Citā `DNS` , Kā Lietot `cloudflare`

Vispirms saistiet patvaļīgu domēna nosaukumu ar `cloudflare` un pēc tam izmantojiet `SSL/TLS` → pielāgots domēna nosaukums, lai saistītu galveno domēna nosaukumu ar šo domēna nosaukumu.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` Nevar Piekļūt, Izmantojot Pielāgotu Domēna Nosaukumu

Tā kā `cloudflare` objektu krātuvei `R2` nevar piekļūt ar pielāgotu domēna nosaukumu, statisku failu ievietošanai ir jāizmanto trešās puses objektu krātuve.

[backblaze.com](https://www.backblaze.com) mēs ņemam kā piemēru, lai parādītu, kā saistīt trešās puses objektus, kas jāuzglabā ar `cloudflare` .

Izveidojiet segmentu `backblaze.com` , augšupielādējiet jebkuru failu, noklikšķiniet, lai pārlūkotu failu, un iegūstiet domēna nosaukumu `Friendly URL` , kas šeit ir `f003.backblazeb2.com` .

![](//p.3ti.site/1725440783.avif)

Mainiet domēna nosaukumu no `CNAME` uz `f003.backblazeb2.com` pie `cloudflare` un iespējojiet starpniekserveri.

![](//p.3ti.site/1725440896.avif)

Modificēt `cloudflare` no `SSL` → šifrēšanas režīms, iestatīt uz `Full`

![](//p.3ti.site/1725438572.avif)

Pievienojiet konvertēšanas kārtulu, kā parādīts zemāk, ievietojiet to pirmajā vietā (pirmajam ir zemākā prioritāte):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` atlasiet dinamisko un modificējiet `your_bucketname` `concat("/file/your_bucketname",http.request.uri.path)` savā segmenta nosaukumā.

Turklāt iepriekš minētajā `cloudflare` konversijas kārtulā `index.html` tiek mainīts uz `file/your_bucketname/index.html` , un pārējās konfigurācijas paliek nemainīgas.

![](//p.3ti.site/1725441384.avif)