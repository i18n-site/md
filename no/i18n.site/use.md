# Installer &

## Konfigurasjonstoken

`i18n.site` har et innebygd `i18` oversettelsesverktøy [Klikk her for å referere til `i18` -dokumentet for å konfigurere tilgangstoken](/i18/use) .

## Installer

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Demoprosjekt

Låt oss starte med et demoprosjekt for å lære hvordan du bruker `i18n.site` .

Vi kloner først demolageret og kjører kommandoen som følger:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Brukere i fastlands-Kina kan:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

Katalognavnet til `demo.i18n.site` -kodebaseklonen må være `md` for å lette lokal forhåndsvisning med `docker` .

### Oversette

Skriv inn i `md`-katalogen og kjør `i18n.site`, som vil oversette `en` til `zh`.

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Etter kjøring vil oversettelses- og hurtigbufferfiler bli generert. Husk å legge dem til i `md` med `git add .`.

### Lokal forhåndsvisning

Installer og start `docker` (`MAC`-brukere anbefales å bruke [orbstack](https://orbstack.dev) som kjøretid for `docker`).

Gå deretter inn i `docker`-katalogen og kjør `./up.sh`, og gå deretter [https://127.0.0.1](https://127.0.0.1) for å forhåndsvise lokalt.

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Publisere innhold

`i18n.site` bruker en [enkeltsides applikasjonsarkitektur](https://developer.mozilla.org/docs/Glossary/SPA), og inngangssiden til nettstedet og innholdet på nettstedet distribueres uavhengig.

Etter å ha kjørt oversettelsen ovenfor, vil katalogene `htm` og `v` bli generert under `md/out/dev`-katalogen.

Her betyr `dev` at den er bygget basert på `.i18n/htm/dev.yml` konfigurasjonsfilen.

`dev` katalog:

`htm`-katalogen er inngangssiden til nettstedet.

`v` katalogen inneholder nettstedinnhold med versjonsnumre.

Lokal forhåndsvisning bryr seg ikke om versjonsnummeret og vil kopiere alle filer til `out/dev/v/0.1.0` katalogen.

For offisiell utgivelse vil endrede filer bli kopiert til den nye versjonsnummerkatalogen.

#### Bruk -c for å spesifisere konfigurasjonsfilen

Ulike konfigurasjonsfiler vil opprette tilsvarende kataloger i `out`-katalogen.

For eksempel vil `.i18n/htm/ol.yml` opprette `out/ol` katalogen.

`dev.yml` og `ol.yml` er standardkonfigurasjonene.

`dev` er forkortelsen for `development`, som indikerer utviklingsmiljøet, brukt for lokal forhåndsvisning, og er også standard konfigurasjonsfil.
`ol` er forkortelsen for `online`, som representerer et online-miljø, brukt for offisiell utgivelse, og er standardkonfigurasjonen når kommandolinjeparameteret `-n` brukes til å publisere til `npm`.

Du kan også opprette andre konfigurasjonsfiler. Bruk `--htm_conf` på kommandolinjen for å spesifisere konfigurasjonsfilnavnet som skal brukes:

for eksempel:
```
i18n.site --htm_conf yourConfig --save
```

Her representerer `--save` versjonsnummeret for oppdateringsutgivelsen.

#### <a rel=id href="#npm" id="npm"></a> Publisere innhold til npmjs.com

Publisering av innhold til [npmjs.com](//npmjs.com) er den anbefalte standardløsningen (se [Front-end High Availability](/i18n.site/feature#ha)).

##### npm login &

Installer `nodejs`, bruk `npm login` for å logge inn.

Rediger `md/.i18n/htm/ol.yml` og endre `i18n.site` i `v: //unpkg.com/i18n.site` til ditt eget `npm` pakkenavn.

Bruk bare det ledige pakkenavnet på [npmjs.com](//npmjs.com). Bruk av nettstedets domene som pakkenavn er et godt valg.

Når du publiserer basert på pakke `npm`, **pass på å bruke `//unpkg.com/`** for prefikset `v:` verdien. `i18n.site` har spesielt optimalisert hurtigbuffertiden for `/.v` under denne prefiksbanen for å oppnå rettidig visning av nye utgivelser.

Kjør `i18n.site --npm` eller `i18n.site -n` i `md` katalogen for å oversette og publisere.

Hvis du bruker et kontinuerlig integrasjonsmiljø for å publisere, er det ikke nødvendig å installere `nodejs`. Kopier bare innloggede og publiseringsrettigheter `~/.npmrc` til miljøet.

Hvis du endrer pakkenavnet `v:` i `ol.yml`, må du **sørge for å slette `.i18n/v/ol` først** og deretter publisere det.

##### npm Publiseringens proxy-server

Hvis brukere i fastlands-Kina støter på nettverksproblemer og ikke klarer å publisere `npm` pakker, kan de sette miljøvariabel `https_proxy` for å konfigurere proxy-serveren.

Forutsatt at proxy-serverporten din er `7890`, kan du skrive:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Selvhostet innhold

Hvis du ønsker å være vert for innholdet, må du først redigere `md/.i18n/htm/ol.yml` og endre `v: //unpkg.com/i18n.site` til URL-prefikset, for eksempel `v: //i18n-v.xxx.com`.

Gå inn i `md` katalogen og kjør

```
i18n.site --htm_conf ol --save
```

eller kort

```
i18n.site -c ol -s
```

Deretter konfigurerer du innholdet i `md/out/ol/v` katalogen til URL-prefikset satt i `v:`.

Til slutt, **konfigurer hurtigbuffertiden for banen som slutter på `/.v` til `1s`**, ellers kan det nylig utgitte innholdet ikke nås umiddelbart.

Buffertiden for andre stier kan settes til ett år eller mer for å redusere unødvendige forespørsler.

##### Vert innhold til s3

For å vertse innhold, i tillegg til å bruke egen server, er en vanlig alternativ løsning å bruke `S3` kombinert med `CDN`.

Du kan bruke [rclone](https://rclone.org) til å logge på `S3` serveren, deretter referere til og endre følgende skript, og bare kopiere de inkrementelle endringene til `S3` for hver utgivelse.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Husk å konfigurere `CDN` slik at hurtigbuffertiden for banen som slutter på `/.v` er `1s`, ellers kan ikke det nylig utgitte innholdet nås umiddelbart.

### Publisere nettsted

Nettstedet kan distribueres hvor som helst, [github page](https://pages.github.com) og [cloudflare page](https://pages.cloudflare.com) er gode valg.

Siden nettstedet bruker en [enkeltsides applikasjonsarkitektur](https://developer.mozilla.org/docs/Glossary/SPA), husk å omskrive URL-baner som ikke inneholder `. ` til `index.html`.

Nettstedinngangssiden trenger bare å distribueres én gang, og det er ikke nødvendig å omdistribuere nettsiden for påfølgende innholdsoppdateringer.

#### Distribuer på github page

[Klikk først github for å opprette en organisasjon](https://github.com/account/organizations/new?plan=free) Følgende organisasjonsnavn er `i18n-demo` som et eksempel.

Opprett deretter lager `i18n-demo.github.io` under denne organisasjonen (vennligst erstatt `i18n-demo` med organisasjonsnavnet du opprettet):

![](https://p.3ti.site/1721098657.avif)

Når du publiserer innholdet i forrige artikkel, har `out/ol/htm` blitt generert. Gå inn i denne katalogen og kjør:

```
ln -s index.html 404.html
```


Fordi `github page` ikke støtter omskriving av URL-bane, brukes `404.html` i stedet.

Kjør deretter følgende kommando i `htm` katalogen (husk å erstatte `i18n-demo/i18n-demo.github.io.git` med din egen lageradresse):

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Efter å ha presset koden, vent til distribusjonen av `github page` kjører (som vist nedenfor) før du får tilgang til den.

<img src="//p.3ti.site/1721116586.avif" width="350px">

For demoside, se:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Distribuer på cloudflare page

[cloudflare page](//pages.cloudflare.com) tilbyr vei-omdirigering sammenlignet med `github page`, og har bedre tilgjengelighet for brukere i Kina. Den anbefales derfor å bruke denne.

Utplasseringen av `cloudflare page` er vanligvis basert på utplasseringen av `github page` ovenfor.

Opprett et prosjekt og bind `i18n-demo.github.io` lageret ovenfor.

Prosessen er vist i figuren nedenfor:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Klikk `Add Account` for å gi tilgang til organisasjon `i18n-demo`.

Hvis du har bundet lageret til en annen organisasjon, må du kanskje klikke `Add Account` to ganger for å godkjenne to ganger før den nye organisasjonen vises.

![](https://p.3ti.site/1721118306.avif)

Velg deretter lager `i18n-demo.github.io`, klikk deretter `Begin setup`, og bruk standardverdiene for påfølgende trinn.

![](https://p.3ti.site/1721118490.avif)

Efter binding for første gang, må du vente noen minutter før du får tilgang til den.

Efter distribusjon kan du binde et tilpasset domenenavn.

![](https://p.3ti.site/1721119459.avif)

Efter å ha bindet det egendefinerte domenenavnet, gå til domenenavnet for å konfigurere baneomskrivingen av enkeltsideapplikasjonen, som vist nedenfor:

![](https://p.3ti.site/1721119320.avif)

Reglene i bildet ovenfor er som følger. Erstatt `i18n.site` i den første linjen nedenfor med domenenavnet du har bundet.

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

I tillegg, vennligst konfigurer hurtigbufferreglene, som vist nedenfor, og sett hurtigbuffervarigheten til én måned.

![](https://p.3ti.site/1721125111.avif)

Vennligst endre domenenavnet som samsvarer i det andre trinnet i bildet ovenfor til domenenavnet du har bundet.

#### Optimalisering av nettstedets implementering i fastlands-Kina

Hvis du ønsker å oppnå bedre tilgjengelighetsytelse i nettverksmiljøet på fastlands-Kina, vennligst [registrer et domenenavn](//beian.aliyun.com) først.

Bruk deretter objektlagringen `out/ol/htm` fra kinesiske skyleverandører + distribuer følgende innhold `CDN`.

Du kan bruke edge computing for å omskrive banen for å tilpasse seg enkeltsideapplikasjoner. For eksempel kan [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) konfigureres slik:

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

Fordi post `MX` og post `CNAME` ikke kan eksistere side om side, hvis du ønsker å motta e-poster med domenenavn samtidig, må du samarbeide med [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) til nivå `CNAME` i post `A`.

I tillegg, fordi de utenlandske trafikkkostnadene til kinesiske skyleverandører er relativt dyre, hvis du ønsker å optimalisere kostnadene, kan du bruke [Huawei Cloud DNS gratis geografiske oppløsning](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) og [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) tilpassede domenenavn (som vist nedenfor). trafikkomdirigering ── trafikk i fastlands-Kina Baidu Cloud `CDN`, internasjonal trafikk går cloudflare.

![](https://p.3ti.site/1721119788.avif)

Disse løsningene for distribusjonsoptimalisering er mer komplekse og vil bli introdusert i separate kapitler i fremtiden.

#### Generisk omdirigering av domenenavn

Hvis du bruker `i18n.site` for å generere et nettsted som hovednettsted, må du vanligvis konfigurere omdirigering av pan-domene, det vil si omdirigere tilgang til `*.xxx.com` (inkludert `www.xxx.com`) til `xxx.com`.

Dette kravet kan oppnås ved hjelp av Alibaba Cloud `CDN` `EdgeScript` ( [engelsk dokument](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [kinesisk dokument](https://help.aliyun.com/zh/cdn/developer-reference/edgescript))

Legg til domenenavnet i [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) og pek domenenavnet `*.xxx.com` `CNAME` i Alibaba Cloud `CDN`.

![](https://p.3ti.site/1721122000.avif)

For eksempel er omdirigeringskonfigurasjonen for pan-domenenavn på `*.i18n.site` i bildet ovenfor som følger:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

#### Distribuer med nginx

Vennligst legg til en konfigurasjon som ligner på følgende i `server`-avsnittet i nginx. Vennligst endre `/root/i18n/md/out/ol/htm` til banen til ditt eget prosjekt `out/ol/htm`:

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Katalogstruktur

#### `public`

Statiske filer på nettstedet, for eksempel `favicon.ico`, `robots.txt`, etc.

Ikonfilene her kan genereres med [realfavicongenerator.net](https://realfavicongenerator.net).

#### `.i18n`

Under `.i18n`-katalogen er konfigurasjonsfilene, oversettelsesbufferen osv. av `i18n.site`. Se neste kapittel ["Konfigurasjon"](/i18n.site/conf) for detaljer.

#### `en`

Kildespråkkatalog, tilsvarende `en` av `fromTo` i `.i18n/conf.yml` konfigurasjonsfil

```yaml
i18n:
  fromTo:
    en: zh
```

Vennligst se konfigurasjonen av oversettelsen [i18](/i18/use).