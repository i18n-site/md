# Optimizimi I Motorit Të Kërkimit (Seo)

## Parim

`i18n.site` miraton një arkitekturë të vetme faqeje pa rifreskim Për të lehtësuar indeksimin e kërkimit, do të krijohet një faqe e veçantë statike dhe `sitemap.xml` për zvarritjet.

Kur `User-Agent` e kërkesës për akses përdoret nga zvarritësi i motorit të kërkimit, kërkesa do të ridrejtohet në faqen statike nëpërmjet `302` .

Në faqet statike, përdorni `link` për të treguar lidhjet në versione të ndryshme gjuhësore të kësaj faqeje, si p.sh. :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## Konfigurimi Lokal nginx

Merrni si shembull skedarin e konfigurimit `.i18n/htm/main.yml` në projektin demo

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

Ju lutemi së pari modifikoni vlerën e `host:` më sipër në emrin e domenit tuaj, si p.sh. `xxx.com` .

Pastaj, `i18n.site -n` , faqja statike do të gjenerohet në direktorinë `out/main/htm` .

Sigurisht, mund të aktivizoni edhe skedarë të tjerë konfigurimi, si p.sh. fillimisht t'i referoheni konfigurimit të `main` për të krijuar `.i18n/htm/dist.package.json` dhe `.i18n/htm/dist.yml` .

Pastaj ekzekutoni `i18n.site -n -c dist` në mënyrë që faqja statike të gjenerohet në `out/dist/htm` .

`nginx` mund të vendoset duke iu referuar konfigurimit më poshtë.

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# Mos i ruani skriptet e punonjësve të serverit për një kohë të gjatë
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# Vendosni kohë më të gjata të memories për burime të tjera statike
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# Cakto cilin skedar statik përdor zvarritësi si hyrje në faqen kryesore
location = / {
  # Nëse $botLang nuk është bosh, do të thotë akses dhe ridrejtim i zvarritësit sipas shtegut të caktuar të gjuhës
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# Konfigurimi i aplikacionit me një faqe
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## Konfiguro Ruajtjen E Objekteve Për Ngarkimin E Skedarëve Statikë

Skedarët statikë mund të gjenerohen në nivel lokal, por një qasje më e zakonshme është ngarkimi i tyre në ruajtjen e objekteve.

Modifiko `out` e konfiguruar më lart në :

```
out:
  - s3
```

Pastaj, modifikoni `~/.config/i18n.site.yml` dhe shtoni konfigurimin e mëposhtëm :

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

Në konfigurim, ju lutemi ndryshoni `i18n.site` në vlerën `host:` në `.i18n/htm/main.yml` , dyqane të shumta objektesh mund të konfigurohen nën `s3` dhe fusha `region` është opsionale (shumë dyqane objektesh nuk kanë nevojë të vendosin këtë fushë).

Pastaj ekzekutoni `i18n.site -n` për të ripublikuar projektin.

Nëse keni modifikuar `~/.config/i18n.site.yml` dhe dëshironi të ri-ngarkoni, ju lutemi përdorni komandën e mëposhtme në direktoriumin rrënjë të projektit për të pastruar cache-in e ngarkimit :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## Konfigurimi I cloudflare

Emri i domenit është pritur në [cloudflare](//www.cloudflare.com)

### Rregullat E Konvertimit

Shtoni rregullat e konvertimit siç tregohet më poshtë:

![](//p.3ti.site/1725436822.avif)

Kodi i rregullit është si më poshtë, ju lutemi modifikoni kodin "i18n.site" në emrin e domenit tuaj:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Rregullat E Memorizimit

Shtoni rregullat e cache si më poshtë:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Rregullat E Ridrejtimit

Vendosni rregullat e ridrejtimit si më poshtë, ju lutemi modifikoni kodin "i18n.site" në emrin e domenit tuaj

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

`URL redirect` Zgjidhni ridrejtimin dinamik, ju lutemi modifikoni `/en` në rrugën e ridrejtimit `concat("/en",http.request.uri.path,".htm")` në gjuhën e paracaktuar që dëshironi të përfshijnë motorët e kërkimit.

## Konfigurimi Inteligjent I Resë Kompjuterike Baidu

Nëse keni nevojë të ofroni shërbime në Kinën kontinentale, mund të përdorni [Baidu Smart Cloud](//cloud.baidu.com) .

Të dhënat ngarkohen në hapësirën ruajtëse të objekteve Baidu dhe lidhen me rrjetin e shpërndarjes së përmbajtjes Baidu.

Pastaj krijoni skriptin në [shërbimin e EdgeJS](//console.bce.baidu.com/cdn/#/cdn/ejs/list) si më poshtë

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
  // Mund të vendosni kokën e përgjigjes që të korrigjojë daljen, si p.sh. out.XXX = 'MSG';
})
```

Klikoni `Debug` , më pas kliko Publiko në të gjithë rrjetin.

![](//p.3ti.site/1725437754.avif)

## Përdorimi I Avancuar: Shpërndani Trafikun Bazuar Në Rezolucionin Rajonal

Nëse dëshironi të ofroni shërbime në territorin e Kinës dhe gjithashtu dëshironi `cloudflare` trafik ndërkombëtar falas, mund të përdorni `DNS` me rezolucion rajonal.

Për shembull, [Huawei DNS](https://www.huaweicloud.com) ofron analiza rajonale falas, me të cilat trafiku kontinental kinez mund të kalojë përmes Baidu Smart Cloud, dhe trafiku ndërkombëtar mund të kalojë përmes `cloudflare` .

Ka shumë gracka në konfigurimin e `cloudflare` Këtu janë disa pika për t'u vënë re :

### Emri I Domenit Është Pritur Në `DNS` Të Tjera, Si Të Përdoret `cloudflare`

Fillimisht lidhni një emër domain arbitrar me `cloudflare` , dhe më pas përdorni `SSL/TLS` → emër domain të personalizuar për të lidhur emrin e domain-it kryesor me këtë emër domeni.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` Nuk Mund Të Aksesohet Përmes Një Emri Të Personalizuar Domeni

Për shkak se ruajtja e `cloudflare` e objektit `R2` nuk mund të aksesohet nga një emër domaini i personalizuar, duhet të përdoret një ruajtje e objekteve të palëve të treta për të vendosur skedarë statikë.

[backblaze.com](https://www.backblaze.com) marrim si shembull për të demonstruar se si të lidhim objektet e palëve të treta që do të ruhen në `cloudflare` .

Krijoni një kovë në `backblaze.com` , ngarkoni çdo skedar, klikoni për të shfletuar skedarin dhe merrni emrin e domenit `Friendly URL` , që është `f003.backblazeb2.com` këtu.

![](//p.3ti.site/1725440783.avif)

Ndryshoni emrin e domenit nga `CNAME` në `f003.backblazeb2.com` në `cloudflare` dhe aktivizoni përfaqësuesin.

![](//p.3ti.site/1725440896.avif)

Modifiko `cloudflare` nga `SSL` → modaliteti i enkriptimit, vendoset në `Full`

![](//p.3ti.site/1725438572.avif)

Shtoni rregullin e konvertimit siç tregohet më poshtë, vendoseni në fillim (i pari ka përparësinë më të ulët):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` zgjidhni dinamike dhe modifikoni `your_bucketname` në `concat("/file/your_bucketname",http.request.uri.path)` në emrin e kovës tuaj.

Përveç kësaj, në rregullin e konvertimit `cloudflare` më sipër, `index.html` ndryshohet në `file/your_bucketname/index.html` dhe konfigurimet e tjera mbeten të njëjta.

![](//p.3ti.site/1725441384.avif)