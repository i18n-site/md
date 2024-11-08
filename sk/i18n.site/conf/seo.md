# Optimalizácia Pre Vyhľadávače (Seo)

## Princíp

`i18n.site` používa architektúru jednej stránky bez obnovenia, aby sa uľahčilo indexovanie vyhľadávania, pre prehľadávače sa vygeneruje samostatná statická stránka a stránka `sitemap.xml` .

Keď indexový prehľadávač vyhľadávacieho nástroja použije `User-Agent` v žiadosti o prístup, požiadavka bude presmerovaná na statickú stránku cez `302` .

Na statických stránkach použite `link` na označenie odkazov na rôzne jazykové verzie tejto stránky, ako napríklad :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## Lokálna Konfigurácia nginx

Ako príklad si vezmite konfiguračný súbor `.i18n/htm/main.yml` v demo projekte

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

Najprv upravte hodnotu `host:` vyššie na názov svojej domény, napríklad `xxx.com` .

Potom `i18n.site -n` , statická stránka sa vygeneruje v adresári `out/main/htm` .

Samozrejme, môžete povoliť aj iné konfiguračné súbory, ako napríklad najprv použiť konfiguráciu `main` na vytvorenie `.i18n/htm/dist.package.json` a `.i18n/htm/dist.yml` .

Potom spustite `i18n.site -n -c dist` , aby sa statická stránka vygenerovala na `out/dist/htm` .

`nginx` je možné nastaviť podľa konfigurácie nižšie.

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# Neukladajte pracovné skripty servera do vyrovnávacej pamäte príliš dlho
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# Nastavte dlhšie časy vyrovnávacej pamäte pre iné statické zdroje
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# Nastavte, ktorý statický súbor prehľadávač používa ako položku domovskej stránky
location = / {
  # Ak $botLang nie je prázdne, znamená to prístup prehľadávača a presmerovanie podľa nastavenej jazykovej cesty
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# Jednostránková konfigurácia aplikácie
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## Nakonfigurujte Úložisko Objektov Na Nahrávanie Statických Súborov

Statické súbory je možné generovať lokálne, ale bežnejším prístupom je ich nahranie do úložiska objektov.

Upravte `out` nakonfigurovanú vyššie na :

```
out:
  - s3
```

Potom upravte `~/.config/i18n.site.yml` a pridajte nasledujúcu konfiguráciu :

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

V konfigurácii zmeňte hodnotu `i18n.site` na hodnotu `host:` v `.i18n/htm/main.yml` , viaceré úložiská objektov je možné nakonfigurovať pod `s3` a pole `region` je voliteľné (veľa skladov objektov toto pole nemusí nastavovať).

Potom spustite `i18n.site -n` na opätovné zverejnenie projektu.

Ak ste upravili `~/.config/i18n.site.yml` a chcete znova nahrať, použite nasledujúci príkaz v koreňovom adresári projektu na vymazanie vyrovnávacej pamäte nahrávania :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## Konfigurácia cloudflare

Názov domény hosťovaný na [cloudflare](//www.cloudflare.com)

### Konverzné Pravidlá

Pridajte pravidlá konverzie, ako je uvedené nižšie:

![](//p.3ti.site/1725436822.avif)

Kód pravidla je nasledujúci, zmeňte kód „i18n.site“ na názov svojej domény:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Pravidlá Ukladania Do Vyrovnávacej Pamäte

Pravidlá vyrovnávacej pamäte pridajte takto:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Pravidlá Presmerovania

Nastavte pravidlá presmerovania nasledovne, upravte kód „i18n.site“ na názov vašej domény

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

`URL redirect` Vyberte dynamické presmerovanie, upravte `/en` v ceste presmerovania `concat("/en",http.request.uri.path,".htm")` na predvolený jazyk, ktorý majú vyhľadávače zahrnúť.

## Konfigurácia Inteligentného Cloudu Baidu

Ak potrebujete poskytovať služby pevninskej Číne, môžete použiť [Baidu Smart Cloud](//cloud.baidu.com) .

Dáta sa nahrávajú do Baidu Object Storage a viažu sa na Baidu Content Distribution Network.

Potom vytvorte skript v [službe EdgeJS](//console.bce.baidu.com/cdn/#/cdn/ejs/list) nasledovne

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
  // Hlavičky odpovedí možno nastaviť na ladenie výstupu, ako napríklad out.XXX = 'MSG';
})
```

Kliknite na `Debug` a potom na Publikovať v celej sieti.

![](//p.3ti.site/1725437754.avif)

## Pokročilé Použitie: Rozdeľte Prevádzku Na Základe Regionálneho Rozlíšenia

Ak chcete poskytovať služby v pevninskej Číne a zároveň chcete `cloudflare` bezplatnú medzinárodnú dopravu, môžete použiť `DNS` s regionálnym rozlíšením.

Napríklad [Huawei DNS](https://www.huaweicloud.com) poskytuje bezplatnú regionálnu analýzu, s ktorou môže pevninská čínska doprava prechádzať cez Baidu Smart Cloud a medzinárodná cez `cloudflare` .

V konfigurácii `cloudflare` je veľa úskalí. Tu je niekoľko bodov, ktoré treba poznamenať :

### Názov Domény Je Hosťovaný v Inej `DNS` , Ako Používať `cloudflare`

Najprv naviažte ľubovoľný názov domény na `cloudflare` a potom použite `SSL/TLS` → vlastný názov domény na priradenie hlavného názvu domény k tomuto názvu domény.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` Nie Je Možné Získať Prostredníctvom Vlastného Názvu Domény

Pretože k `cloudflare` ukladaciemu priestoru objektov `R2` nemožno pristupovať pomocou prispôsobeného názvu domény, na umiestnenie statických súborov je potrebné použiť ukladací priestor objektov tretej strany.

`cloudflare` príklad uvádzame [backblaze.com](https://www.backblaze.com)

Vytvorte vedro na `backblaze.com` , nahrajte ľubovoľný súbor, kliknutím prezerajte súbor a získajte názov domény `Friendly URL` , čo je tu `f003.backblazeb2.com` .

![](//p.3ti.site/1725440783.avif)

Zmeňte názov domény z `CNAME` na `f003.backblazeb2.com` na `cloudflare` a povoľte proxy.

![](//p.3ti.site/1725440896.avif)

Upravte `cloudflare` z `SSL` → režim šifrovania, nastavte na `Full`

![](//p.3ti.site/1725438572.avif)

Pridajte pravidlo konverzie, ako je uvedené nižšie, umiestnite ho na prvé miesto (prvé z nich má najnižšiu prioritu):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` vyberte dynamické a upravte `your_bucketname` v `concat("/file/your_bucketname",http.request.uri.path)` na názov vášho segmentu.

Okrem toho vo vyššie uvedenom pravidle prevodu `cloudflare` sa `index.html` zmení na `file/your_bucketname/index.html` a ostatné konfigurácie zostávajú rovnaké.

![](//p.3ti.site/1725441384.avif)