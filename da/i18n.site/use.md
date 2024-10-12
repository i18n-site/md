# Installer &

## Konfigurationstoken

`i18n.site` har et indbygget `i18` oversættelsesværktøj [Klik her for at henvise til `i18` dokumentet for at konfigurere adgangstokenet](/i18/use) .

## Installere

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Demo Projekt

Lad os starte med et demoprojekt for at lære at bruge `i18n.site` .

Vi kloner først demo-lageret og kører kommandoen som følger:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Brugere på det kinesiske fastland kan:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

Biblioteknavnet på `demo.i18n.site` -kodebaseklonen skal være `md` for at lette lokal forhåndsvisning med `docker` .

### Oversætte

Indtast først mappen `md` og kør `i18n.site` , som vil oversætte `en` til `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Efter kørsel vil der blive genereret oversættelses- og cachefiler. Husk at tilføje dem til depotet i `md` `git add . ` .

### Lokal Forhåndsvisning

Installer og start `docker` ( `MAC` bruger anbefaler at bruge [orbstack](https://orbstack.dev) som køretid for `docker` ).

Indtast derefter mappen `docker` og kør `./up.sh` , og besøg derefter [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Post Indhold

`i18n.site` vedtager en [enkeltsides applikationsarkitektur](https://developer.mozilla.org/docs/Glossary/SPA) , og hjemmesidens indgangsside og webstedsindhold implementeres uafhængigt.

Efter at have kørt ovenstående oversættelse, vil mappe `htm` og `v` blive genereret under `md/out/dev` mappen.

Her betyder `dev` , at den er bygget baseret på `.i18n/htm/dev.yml` -konfigurationsfilen.

`dev` bibliotek :

`htm` -kataloget er hjemmesidens indgangsside.

`v` kataloget indeholder webstedsindhold med versionsnumre.

Lokal preview er ligeglad med versionsnummeret og kopierer alle filer til `out/dev/v/0.1.0` mappen.

For officiel udgivelse vil ændrede filer blive kopieret til det nye versionsnummerbibliotek.

#### Brug -c Til at Angive Konfigurationsfilen

Forskellige konfigurationsfiler vil oprette tilsvarende mapper i `out` mappen.

For eksempel vil `.i18n/htm/ol.yml` oprette mappen `out/ol` .

`dev.yml` og `ol.yml` er standardkonfigurationerne.

`dev` er forkortelsen af `development` , der angiver udviklingsmiljøet, der bruges til lokal forhåndsvisning, og er også standardkonfigurationsfilen.
`ol` er forkortelsen af `online` , der angiver onlinemiljøet, som bruges til officiel udgivelse. Det er også standardkonfigurationsfilen, når du bruger kommandolinjeparametrene `-n` til `npm` til at frigive.

Du kan også oprette andre konfigurationsfiler Brug `--htm_conf` på kommandolinjen for at angive det konfigurationsfilnavn, der skal bruges:

for eksempel:
```
i18n.site --htm_conf yourConfig --save
```

Her repræsenterer `--save` versionsnummeret for opdateringsudgivelsen.

#### <a rel=id href="#npm" id="npm"></a> Udgiv indhold på npmjs.com

Udgivelse af indhold til [npmjs.com](//npmjs.com) er den anbefalede standardløsning (se [Front-end High Availability](/i18n.site/feature#ha) ).

##### npm login &

Installer `nodejs` , log ind med `npm login` .

Rediger `md/.i18n/htm/ol.yml` og skift `i18n.site` i `v: //unpkg.com/i18n.site` til dit eget `npm` pakkenavn.

Brug blot det ledige pakkenavn på [npmjs.com](//npmjs.com)

Når du udgiver baseret på pakke `npm` , skal du **sørge for at bruge `//unpkg.com/`** for præfikset `v:` værdi `i18n.site` har specielt optimeret cachetiden på `/.v` under denne præfikssti for at opnå rettidig visning af nye udgivelser.

Kør `i18n.site --npm` eller `i18n.site -n` i `md` -biblioteket for at oversætte og udgive.

Hvis du bruger et kontinuerligt integrationsmiljø til at publicere, er der ingen grund til at installere `nodejs` , du skal blot kopiere den loggede ind og udgivelsestilladelse `~/.npmrc` til miljøet.

Hvis du ændrer pakkenavnet på `v:` i `ol.yml` , skal du **sørge for at slette `.i18n/v/ol` først** og derefter udgive det.

##### Proxyserver Udgivet Af npm

Hvis brugere på det kinesiske fastland støder på netværksproblemer og ikke er i stand til at udgive `npm` pakker, kan de indstille miljøvariablen `https_proxy` til at konfigurere proxyserveren.

Hvis du antager, at din proxyserverport er `7890` , kan du skrive:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Selvhostet Indhold

Hvis du selv vil hoste indholdet, skal du først redigere `md/.i18n/htm/ol.yml` og ændre `v: //unpkg.com/i18n.site` til dit URL-præfiks, såsom `v: //i18n-v.xxx.com` .

Indtast `md` mappen og kør

```
i18n.site --htm_conf ol --save
```

eller forkortelse

```
i18n.site -c ol -s
```

Konfigurer derefter indholdet i `md/out/ol/v` -mappen til URL-præfiksstien angivet i `v:` .

Til sidst **skal du konfigurere cachetiden for stien, der slutter på `/.v` til `1s`** , ellers kan det nyligt frigivne indhold ikke tilgås med det samme.

Cachetiden for andre stier kan indstilles til et år eller mere for at reducere unødvendige anmodninger.

##### Host Indhold Til s3

For selv at hoste indhold, ud over at bruge din egen server, er en anden almindelig mulighed at `CDN` `S3` +

Du kan bruge [rclone](https://rclone.org) til at logge ind på `S3` serveren, derefter henvise til og ændre følgende script og kun kopiere de trinvise ændringer til `S3` for hver udgivelse.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Husk at konfigurere `CDN` , så cachetiden for stien, der slutter på `/.v` er `1s` , ellers kan det nyligt frigivne indhold ikke tilgås med det samme.

### Udgive Hjemmeside

Hjemmesiden kan implementeres hvor som helst [github page](https://pages.github.com) og [cloudflare page](https://pages.cloudflare.com) er gode valg.

Fordi hjemmesiden bruger en [enkeltsidet applikationsarkitektur](https://developer.mozilla.org/docs/Glossary/SPA) , skal du huske at omskrive URL-stier, der ikke indeholder `. ` til `index.html` .

Indgangssiden til webstedet skal kun implementeres én gang, og der er ingen grund til at geninstallere webstedets indgangsside for efterfølgende indholdsopdateringer.

#### Implementer På Github-Siden

[Klik først github for at oprette en organisation](https://github.com/account/organizations/new?plan=free) . Følgende organisationsnavn er `i18n-demo` som et eksempel.

Opret derefter lager `i18n-demo.github.io` under denne organisation (erstat venligst `i18n-demo` med det organisationsnavn, du oprettede):

![](https://p.3ti.site/1721098657.avif)

Når du udgiver indholdet i den forrige artikel, er `out/ol/htm` blevet genereret. Indtast venligst denne mappe og kør :

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

#### Implementer På Cloudflare-Side

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

#### Optimering Af Webstedsimplementering På Det Kinesiske Fastland

Hvis du ønsker at opnå bedre tilgængelighedsydelse i netværksmiljøet på det kinesiske fastland, skal du først [registrere et domænenavn](//beian.aliyun.com) .

Brug derefter objektlageret fra cloud `CDN` + følgende indhold `out/ol/htm` .

Du kan bruge edge computing til at omskrive stien for at tilpasse sig enkeltsideapplikationer. For eksempel kan [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) konfigureres sådan:

```js
var uri=r.uri,p=uri.lastIndexOf('.');
if(
  p<0 || !'|avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml|'.includes('|'+uri.slice(p+1)+'|')
){
  r.uri='/index.html'
}
r.respHeader(()=>{
var t = [];
r.rawHeadersOut.forEach((i)=>{
    var out = r.headersOut;
    var key = i[0].toLowerCase();
    if(key.startsWith('x-')||key.startsWith('ohc-')){
        delete out[key]
    }
    out['Cache-Control']='max-age='+9e5;
    ['Content-MD5','Age','Expires','Last-Modified'].forEach((i)=>delete out[i])
})
})
```
![](https://p.3ti.site/1721121273.avif)

Fordi record `MX` og record `CNAME` ikke kan eksistere side om side, hvis du ønsker at modtage domænenavne-e-mails på samme tid, skal du [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) med scriptet til niveau `CNAME` i record `A` .

Derudover, fordi de oversøiske trafikafgifter for cloud-leverandører på det kinesiske fastland er relativt dyre, hvis du vil optimere omkostningerne, kan du bruge [Huawei DNS gratis geografiske opløsning](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) og [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) brugerdefinerede domænenavn (som vist nedenfor) til at opnå trafikomdirigering──Trafik på det kinesiske fastland Baidu Cloud `CDN` , international trafik går cloudflare .

![](https://p.3ti.site/1721119788.avif)

Disse implementeringsoptimeringsløsninger er mere komplekse og vil blive introduceret i separate kapitler i fremtiden.

#### Generisk Omdirigering Af Domænenavn

Hvis du bruger `i18n.site` til at generere et websted som dit hovedwebsted, skal du normalt konfigurere pan-domæne-omdirigering, det vil sige omdirigere adgang til `*.xxx.com` (inklusive `www.xxx.com` ) til `xxx.com` .

Dette krav kan opnås ved hjælp af Alibaba Cloud `CDN` `EdgeScript` ( [engelsk dokument](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [kinesisk dokument](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Tilføj domænenavnet i [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) og peg domænenavnet `*.xxx.com` `CNAME` i Alibaba Cloud `CDN` .

![](https://p.3ti.site/1721122000.avif)

For eksempel er omdirigeringskonfigurationen for pan-domænenavnet på `*.i18n.site` på billedet ovenfor som følger:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

#### Implementer Med nginx

Tilføj venligst en konfiguration svarende til følgende i `server` -afsnittet i nginx Ændr venligst `/root/i18n/md/out/ol/htm` til stien til dit eget projekt `out/ol/htm` :

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Directory Struktur

#### `public`

Statiske filer på webstedet, såsom `favicon.ico` , `robots.txt` osv.

Ikonfilerne her kan genereres med [realfavicongenerator.net](https://realfavicongenerator.net)

#### `.i18n`

Under `.i18n` -mappen findes konfigurationsfiler, oversættelsescache osv. af `i18n.site` Se næste kapitel ["Konfiguration"](/i18n.site/conf) for detaljer.

#### `en`

Kildesprogsmappe, svarende til `en` af `fromTo` i `.i18n/conf.yml` konfigurationsfil

```yaml
i18n:
  fromTo:
    en: zh
```

Se venligst konfigurationen af oversættelse [i18](/i18/use)