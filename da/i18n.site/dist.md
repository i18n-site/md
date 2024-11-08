# Implementering Og Online

`i18n.site` vedtager en [enkeltsides applikationsarkitektur](https://developer.mozilla.org/docs/Glossary/SPA) , og hjemmesidens indgangsside og webstedsindhold implementeres uafhængigt.

Efter at have kørt ovenstående oversættelse, vil mappe `htm` og `v` blive genereret under `md/out/dev` mappen.

Her betyder `dev` , at den er bygget baseret på `.i18n/htm/dev.yml` -konfigurationsfilen.

`dev` bibliotek :

`htm` -kataloget er hjemmesidens indgangsside.

`v` kataloget indeholder webstedsindhold med versionsnumre.

Lokal preview er ligeglad med versionsnummeret og kopierer alle filer til `out/dev/v/0.1.0` mappen.

For officiel udgivelse vil ændrede filer blive kopieret til det nye versionsnummerbibliotek.

## Angiv Konfigurationsfil Med `-c`

Forskellige konfigurationsfiler vil oprette tilsvarende mapper i `out` mappen.

For eksempel vil `.i18n/htm/main.yml` oprette mappen `out/main` .

`dev.yml` og `main.yml` er standardkonfigurationerne.

`dev` er forkortelsen af `development` , der angiver udviklingsmiljøet, der bruges til lokal forhåndsvisning, og er også standardkonfigurationsfilen.
`ol` er forkortelsen af `online` , der angiver onlinemiljøet, som bruges til officiel udgivelse. Det er også standardkonfigurationsfilen, når du bruger kommandolinjeparametrene `-n` til `npm` til at frigive.

Du kan også oprette andre konfigurationsfiler Brug `--htm_conf` på kommandolinjen for at angive det konfigurationsfilnavn, der skal bruges:

for eksempel:
```
i18n.site --htm_conf dist --save
```

Her repræsenterer `--save` versionsnummeret for opdateringsudgivelsen.

## <a rel=id href="#npm" id="npm"></a> Udgiv indhold på npmjs.com

Udgivelse af indhold til [npmjs.com](//npmjs.com) er den anbefalede standardløsning (se [Front-end High Availability](/i18n.site/feature#ha) ).

### npm Log Ind & Post

Installer `nodejs` , log ind med `npm login` .

Rediger `md/.i18n/htm/main.yml` [npmjs.com](//npmjs.com) skift værdien af [`md:`](//github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/main.yml#L7) `YOUR_NPM_PACKAGE` som dit eget `npm` pakkenavn.

Rediger derefter `md/.i18n/htm/main.package.json`

Kør `i18n.site --npm` eller `i18n.site -n` i `md` -biblioteket for at oversætte og udgive.

Hvis du bruger et kontinuerligt integrationsmiljø til at publicere, er der ingen grund til at installere `nodejs` Du skal blot kopiere de loggede ind og udgivelsestilladelser `~/.npmrc` til miljøet.

Hvis du ændrer pakkenavnet på `v:` i `main.yml` , skal du **sørge for at slette `.i18n/v/main` først** og derefter udgive det.

#### Proxyserver Udgivet Af npm

Hvis brugere på det kinesiske fastland støder på netværksproblemer og ikke er i stand til at udgive `npm` pakker, kan de indstille miljøvariablen `https_proxy` til at konfigurere proxyserveren.

Hvis du antager, at din proxyserverport er `7890` , kan du skrive:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

## Selvhostet Indhold

Hvis du selv vil hoste indholdet, skal du først redigere `md/.i18n/htm/main.yml` og ændre `v: //unpkg.com/i18n.site` til dit URL-præfiks, såsom `v: //i18n-v.xxx.com` .

Indtast `md` mappen og kør

```
i18n.site --htm_conf ol --save
```

eller forkortelse

```
i18n.site -c ol -s
```

Konfigurer derefter indholdet i `md/out/main/v` -mappen til URL-præfiksstien angivet i `v:` .

Til sidst **skal du konfigurere cachetiden for stien, der slutter på `/.v` til `1s`** , ellers kan det nyligt frigivne indhold ikke tilgås med det samme.

Cachetiden for andre stier kan indstilles til et år eller mere for at reducere unødvendige anmodninger.

## Host Indhold Til s3

For selv at hoste indhold, ud over at bruge din egen server, er en anden almindelig mulighed at `CDN` `S3` +

Du kan bruge [rclone](https://rclone.org) til at logge ind på `S3` serveren, derefter henvise til og ændre følgende script og kun kopiere de trinvise ændringer til `S3` for hver udgivelse.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/main/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/main/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/main/v/.v "$s3:/$bucket/"
```

Husk at konfigurere `CDN` , så cachetiden for stien, der slutter på `/.v` er `1s` , ellers kan det nyligt frigivne indhold ikke tilgås med det samme.

## Udgive Hjemmeside

Hjemmesiden kan implementeres hvor som helst [github page](https://pages.github.com) og [cloudflare page](https://pages.cloudflare.com) er gode valg.

Fordi hjemmesiden bruger en [enkeltsidet applikationsarkitektur](https://developer.mozilla.org/docs/Glossary/SPA) , skal du huske at omskrive URL-stier, der ikke indeholder `. ` til `index.html` .

Indgangssiden til webstedet skal kun implementeres én gang, og der er ingen grund til at geninstallere webstedets indgangsside for efterfølgende indholdsopdateringer.

### Implementer På Github-Siden

[Klik først github for at oprette en organisation](https://github.com/account/organizations/new?plan=free) . Følgende organisationsnavn er `i18n-demo` som et eksempel.

Opret derefter lager `i18n-demo.github.io` under denne organisation (erstat venligst `i18n-demo` med det organisationsnavn, du oprettede):

![](https://p.3ti.site/1721098657.avif)

Når du udgiver indholdet i den forrige artikel, er `out/main/htm` blevet genereret. Indtast venligst denne mappe og kør :

```
ln -s index.html 404.html
```


Fordi `github page` ikke understøtter omskrivning af URL-sti, bruges `404.html` i stedet.

Kør derefter følgende kommando i `htm` mappen (husk at erstatte `i18n-demo/i18n-demo.github.io.git` med din egen lageradresse) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Når du har trykket på koden, skal du vente på, at implementeringen af `github page` kører med succes (som vist nedenfor), før du kan få adgang til den.

<img src="//p.3ti.site/1721116586.avif" width="350px">

For demo side se venligst:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

### Implementer På Cloudflare-Side

[cloudflare page](//pages.cloudflare.com) Sammenlignet med `github page` giver det sti-omskrivning og er mere venligt for det kinesiske fastland og er mere tilgængeligt.

Implementeringen af `cloudflare page` er normalt baseret på implementeringen af `github page` ovenfor.

Opret et projekt og bind `i18n-demo.github.io` -lageret ovenfor.

Processen er vist i figuren nedenfor:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Klik venligst på `Add Account` for at give adgang til organisation `i18n-demo` .

Hvis du har bundet lageret i en anden organisation, skal du muligvis klikke på `Add Account` to gange for at godkende to gange, før den nye organisation vil blive vist.

![](https://p.3ti.site/1721118306.avif)

Vælg derefter varehus `i18n-demo.github.io` , klik derefter på `Begin setup` , og brug standardværdierne til de efterfølgende trin.

![](https://p.3ti.site/1721118490.avif)

Efter binding for første gang, skal du vente et par minutter, før du kan få adgang til den.

Efter implementeringen kan du binde et tilpasset domænenavn.

![](https://p.3ti.site/1721119459.avif)

Når du har bundet det brugerdefinerede domænenavn, skal du gå til domænenavnet for at konfigurere sti-omskrivningen af enkeltsideapplikationen som vist nedenfor:

![](https://p.3ti.site/1721119320.avif)

Reglerne i billedet ovenfor er som følger. Erstat venligst `i18n.site` i den første linje nedenfor med det domænenavn, du har bundet.

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

Derudover skal du konfigurere cachereglerne, som vist nedenfor, og indstille cachens varighed til en måned.

![](https://p.3ti.site/1721125111.avif)

Skift venligst domænenavnet, der matcher i andet trin på billedet ovenfor til det domænenavn, du har bundet.

### Optimering Af Webstedsimplementering På Det Kinesiske Fastland

Hvis du ønsker at opnå bedre tilgængelighedsydelse i netværksmiljøet på det kinesiske fastland, skal du først [registrere et domænenavn](//beian.aliyun.com) .

Brug derefter objektlageret fra cloud `CDN` + følgende indhold `out/main/htm` .

Du kan bruge edge computing til at omskrive stien for at tilpasse sig enkeltsideapplikationer. For eksempel kan [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) konfigureres sådan:

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
  // Svarheadere kan indstilles til at fejlfinde output, såsom out.XXX = 'MSG';
})
```

![](https://p.3ti.site/1721121273.avif)

Fordi record `MX` og record `CNAME` ikke kan eksistere side om side, hvis du ønsker at modtage domænenavne-e-mails på samme tid, skal du [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) med scriptet til niveau `CNAME` i record `A` .

Derudover, fordi de oversøiske trafikafgifter for cloud-leverandører på det kinesiske fastland er relativt dyre, hvis du vil optimere omkostningerne, kan du bruge [Huawei DNS gratis geografiske opløsning](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) og [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) brugerdefinerede domænenavn (som vist nedenfor) til at opnå trafikomdirigering──Trafikdirigering på det kinesiske fastland Baidu Cloud `CDN` , international trafik går cloudflare .

![](https://p.3ti.site/1721119788.avif)

Disse implementeringsoptimeringsløsninger er mere komplekse og vil blive introduceret i separate kapitler i fremtiden.

### Generisk Omdirigering Af Domænenavn

Hvis du bruger `i18n.site` til at generere et websted som dit hovedwebsted, skal du normalt konfigurere pan-domæne-omdirigering, det vil sige omdirigere adgang til `*.xxx.com` (inklusive `www.xxx.com` ) til `xxx.com` .

Dette krav kan opnås ved hjælp af Alibaba Cloud `CDN` `EdgeScript` ( [engelsk dokument](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [kinesisk dokument](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Tilføj domænenavnet i [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) og peg domænenavnet `*.xxx.com` `CNAME` i Alibaba Cloud `CDN` .

![](https://p.3ti.site/1721122000.avif)

For eksempel er omdirigeringskonfigurationen for pan-domænenavnet på `*.i18n.site` på billedet ovenfor som følger:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

### Implementer Med nginx

Tilføj venligst en konfiguration svarende til følgende i `server` -afsnittet i nginx Ændr venligst `/root/i18n/md/out/main/htm` til stien til dit eget projekt `out/main/htm` :

```
location / {
  root  /root/i18n/md/out/main/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

## Baseret På `github action` Kontinuerlig Integration

Du kan henvise til følgende for at konfigurere din `github action` :

```
name: i18n.site

on:
  workflow_dispatch:
  push:
    branches:
      - main
      - dist

jobs:
  i18n:

    permissions:
      repository-projects: write
      contents: write

    runs-on: ubuntu-latest

    steps:
      - name: checkout
        uses: actions/checkout@v4

      - name: https://i18n.site
        uses: i18n-site/github-action-i18n.site@main
        with:
          I18N_SITE_TOKEN: ${{ secrets.I18N_SITE_TOKEN }}
          NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
```

Som det kan ses i konfigurationen, udløses denne arbejdsgang, når der trykkes til gren `main` og gren `dist` .

Workflowet vil bruge konfigurationsfilen svarende til filialnavnet til at publicere dokumentet. Her vil henholdsvis `.i18n/htm/main.yml` og `.i18n/htm/dist.yml` blive brugt som udgivelseskonfiguration.

Vi anbefaler følgende bedste praksis for dokumentudgivelsesprocessen:

Når ændringer skubbes til gren `main` , udløses dokumentet til at blive bygget og implementeret til forhåndsvisningsstationen (forhåndsvisningsstationen er tilgængelig [github page](//pages.github.com) ).

Efter at have bekræftet, at dokumentet er korrekt på forhåndsvisningsstedet, vil koden blive flettet og skubbet til gren `dist` , og den officielle opbygning og implementering vil gå online.

Selvfølgelig kræver implementering af ovenstående proces at skrive flere konfigurationer.

Du kan henvise til det faktiske projekt [github.com/fcdoc/doc](//github.com/fcdoc/doc/blob/main/.github/workflows/i18n.site.yml)

`secrets.I18N_SITE_TOKEN` og `secrets.NPM_TOKEN` i konfigurationen kræver, at du konfigurerer hemmelige variabler i kodebasen.

![](//p.3ti.site/1730970199.avif)

`I18N_SITE_TOKEN` [i18n.site/token](//i18n.site/token)

`NPM_TOKEN` er udgivelsestoken for pakke `npm` i konfigurationen [npmjs.com](//npmjs.com) og opret et token med udgivelsestilladelser (som vist nedenfor).

![](//p.3ti.site/1730969906.avif)


## Directory Struktur

### `public`

Statiske filer på webstedet, såsom `favicon.ico` , `robots.txt` osv.

Ikonfilerne her kan genereres med [realfavicongenerator.net](https://realfavicongenerator.net)

### `.i18n`

Under `.i18n` -mappen er konfigurationsfiler, oversættelsescache osv. af `i18n.site` Se næste kapitel ["Konfiguration"](/i18n.site/conf) for detaljer.

### `en`

Kildesprogsmappe, svarende til `en` af `fromTo` i `.i18n/conf.yml` konfigurationsfil

```yaml
i18n:
  fromTo:
    en: zh
```

Se venligst konfigurationen af oversættelse [i18](/i18/use)