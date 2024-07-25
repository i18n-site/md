# Installer &

## Konfigurasjonstoken

`i18n.site` Oversettelsesverktøyet `i18` er innebygd. [Klikk her for å referere til `i18` -dokumentet for å konfigurere tilgangstoken](/i18/use) .

## Installere

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Demoprosjekt

La oss starte med et demoprosjekt og lære hvordan du bruker `i18n.site`

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

Katalognavnet til kodebaseklonen må være `md` for `docker` `demo.i18n.site`

### Oversette

Skriv først inn `md` -katalogen og kjør `i18n.site` , som vil oversette `en` til `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Etter å ha kjørt, vil oversettelses- og hurtigbufferfiler bli generert. Husk å legge dem `git add . ` i katalogen `md`

### Lokal Forhåndsvisning

Installer og start `docker` ( `MAC` anbefaler å bruke [orbstack](https://orbstack.dev) som kjøretid på `docker` ).

Gå deretter inn i `docker` -katalogen og kjør `./up.sh` , og gå deretter [https://127.0.0.1](https://127.0.0.1) for å forhåndsvise lokalt.

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Legg Ut Innhold

`i18n.site` Vedtar en [enkeltsides applikasjonsarkitektur](https://developer.mozilla.org/docs/Glossary/SPA) , og nettsidens inngangsside og nettstedinnhold distribueres uavhengig.

Etter å ha kjørt oversettelsen ovenfor, vil `htm` og `v` kataloger bli generert i `md/out/dev`

Her indikerer `dev` at den er bygget basert på `.i18n/htm/dev.yml` .

Under : `dev`

`htm` katalogen er inngangssiden til nettstedet.

`v` Katalogen inneholder innholdet på nettstedet med versjonsnummer.

Lokal forhåndsvisning vil kopiere alle filer til `out/dev/v/0.1.0` -katalogen uavhengig av versjonsnummeret.

For offisiell utgivelse vil endrede filer bli kopiert til den nye versjonsnummerkatalogen.

#### Bruk -c for Å Spesifisere Konfigurasjonsfilen

Ulike konfigurasjonsfiler vil lage tilsvarende kataloger under `out`

For eksempel vil `.i18n/htm/ol.yml` opprette en `out/ol` -katalog.

`dev.yml` og `ol.yml` er standardkonfigurasjonene.

`dev` er forkortelsen av `development` , som representerer utviklingsmiljøet, brukes for lokal forhåndsvisning, og er også standard konfigurasjonsfil.
`ol` er forkortelsen av `online` , som representerer nettmiljøet, brukes for offisiell utgivelse, og er også standard konfigurasjonsfil ved publisering til `npm` ved å bruke kommandolinjeparameteren `-n` .

Du kan også opprette andre konfigurasjonsfiler. Bruk `--htm_conf` på kommandolinjen for å angi konfigurasjonsfilnavnet:

for eksempel:
```
i18n.site --htm_conf yourConfig --save
```

`--save` indikerer oppdateringens utgivelsesnummer.

#### <a rel=id href="#npm" id="npm"></a> Publiser innhold til npmjs.com

Publisering av innhold til [npmjs.com](//npmjs.com) er den anbefalte standardløsningen (se [Front-end High Availability](/i18n.site/feature#ha) ).

##### npm login & Utgivelse

Installer `nodejs` bruk `npm login` for å logge på.

Rediger `md/.i18n/htm/ol.yml` endre `i18n.site` i `v: //unpkg.com/i18n.site` til ditt eget `npm` pakkenavn.

Bare bruk det ledige pakkenavnet på [npmjs.com](//npmjs.com)

Når `i18n.site` publiserer basert `/.v` `npm` -pakken, **må du passe på å bruke `//unpkg.com/`** som prefiks for `v:` -verdien.

Kjør `i18n.site --npm` eller `i18n.site -n` i `md` for å oversette og publisere.

Hvis du bruker et kontinuerlig integrasjonsmiljø for å publisere, er det ikke nødvendig å installere det `nodejs` Bare kopier den påloggede og publiserte tillatelsen `~/.npmrc` til miljøet.

Hvis du endrer pakkenavnet i `v:` `ol.yml` , må du **sørge for å slette `.i18n/v/ol` først** og deretter publisere det.

##### Proxy-Server Publisert Av npm

Hvis brukere i fastlands-Kina støter på nettverksproblemer og ikke klarer å publisere `npm` -pakken, kan de angi miljøvariabelen `https_proxy` for å konfigurere proxy-serveren.

Forutsatt at proxy-serverporten din er `7890` kan du skrive:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Selvhostet Innhold

Hvis du vil være vert for innholdet, må `md/.i18n/htm/ol.yml` først redigere og endre `v: //unpkg.com/i18n.site` til URL-prefikset, for eksempel `v: //i18n-v.xxx.com` .

Gå inn i `md` og kjør

```
i18n.site --htm_conf ol --save
```

eller forkortelse

```
i18n.site -c ol -s
```

Konfigurer deretter innholdet i `md/out/ol/v` til URL-prefiksbanen satt i `v:` .

Til slutt, **konfigurer hurtigbuffertiden for banen `/.v` slutter på `1s`** , ellers kan det nylig utgitte innholdet ikke nås umiddelbart.

Buffertiden for andre stier kan settes til ett år eller mer for å redusere unødvendige forespørsler.

##### Vert Innhold Til s3

For å være vert for innhold, i tillegg til å bruke din egen server, `CDN` + annet vanlig alternativ å bruke `S3`

Du kan bruke [rclone](https://rclone.org) Logg `S3` server, og deretter se og endre skriptet nedenfor, og bare kopiere inkrementelle endringer til `S3` hver gang du publiserer.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Husk å konfigurere `CDN` slik at hurtigbuffertiden for banen som slutter på `/.v` er `1s` , ellers vil du ikke få tilgang til det nylig utgitte innholdet umiddelbart.

### Publisere Nettsiden

Nettstedet kan distribueres hvor som helst [github page](https://pages.github.com) og [cloudflare page](https://pages.cloudflare.com) er gode valg.

Fordi nettstedet tar i bruk arkitekturen til `index.html` [enkeltsideapplikasjon](https://developer.mozilla.org/docs/Glossary/SPA) , husk å omskrive URL-banen som ikke inneholder `. `

Nettstedinngangssiden trenger bare å distribueres én gang, og det er ikke nødvendig å omdistribuere nettsiden for påfølgende innholdsoppdateringer.

#### Distribuer På Github-Siden

[Klikk først github for å opprette en organisasjon](https://github.com/account/organizations/new?plan=free) Følgende organisasjonsnavn er `i18n-demo`

Opprett deretter et lager under denne `i18n-demo.github.io` (Vennligst erstatt `i18n-demo` med organisasjonsnavnet du opprettet):

<img alt="" src="https://p.3ti.site/1721098657.avif">

Når du publiserer innholdet i forrige artikkel, har det blitt generert `out/ol/htm` Gå inn i denne katalogen og kjør :

```
ln -s index.html 404.html
```


Fordi `github page` ikke støtter omskriving av URL-bane, så `404.html` brukes i stedet.

Kjør deretter følgende kommando i `htm` (husk å erstatte `i18n-demo/i18n-demo.github.io.git` med din egen lageradresse) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Etter å ha presset koden, vent til distribusjonen av `github page` kjører (som vist nedenfor), og deretter kan du få tilgang til den.

<img src="//p.3ti.site/1721116586.avif" width="350px">

For demoside, se:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Distribuer På Cloudflare-Siden

Sammenlignet med [cloudflare page](//pages.cloudflare.com) , gir det sti-omskriving og er mer vennlig for fastlands `github page` Kina og er mer tilgjengelig.

`cloudflare page` Utrullingen er vanligvis basert på utrullingen av `github page` ovenfor.

Opprett et prosjekt og bind inn lageret ovenfor `i18n-demo.github.io`

Prosessen er vist i figuren nedenfor:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

`Add Account` for å gi tilgang til `i18n-demo` .

Hvis du har bundet lageret til en annen organisasjon, må du kanskje klikke `Add Account` ganger for å autorisere det to ganger før den nye organisasjonen vises.

<img alt="" src="https://p.3ti.site/1721118306.avif">

Velg deretter `i18n-demo.github.io` Varehus, klikk deretter `Begin setup` , og bruk standardverdiene for påfølgende trinn.

<img alt="" src="https://p.3ti.site/1721118490.avif">

Etter binding for første gang, må du vente noen minutter før du får tilgang til den.

Etter distribusjon kan du binde et tilpasset domenenavn.

<img alt="" src="https://p.3ti.site/1721119459.avif">

Etter å ha bindet det egendefinerte domenenavnet, gå til domenenavnet for å konfigurere baneomskrivingen av enkeltsideapplikasjonen, som vist nedenfor:

<img alt="" src="https://p.3ti.site/1721119320.avif">

Reglene i bildet ovenfor er som følger. Erstatt `i18n.site`

```
(http.host in {"i18n.site"}) and not (
ends_with(http.request.uri.path,".html") or
ends_with(http.request.uri.path,".htm") or
ends_with(http.request.uri.path,".ico") or
ends_with(http.request.uri.path,".js") or
ends_with(http.request.uri.path,".avif") or
ends_with(http.request.uri.path,".css") or
ends_with(http.request.uri.path,".json") or
ends_with(http.request.uri.path,".png") or
ends_with(http.request.uri.path,".svg") or
ends_with(http.request.uri.path,".txt") or
ends_with(http.request.uri.path,".webmanifest") or
ends_with(http.request.uri.path,".xml")
)
```

I tillegg, vennligst konfigurer hurtigbufferreglene, som vist nedenfor, og sett hurtigbuffervarigheten til én måned.

<img alt="" src="https://p.3ti.site/1721125111.avif">

Vennligst endre domenenavnet som samsvarer i det andre trinnet i bildet ovenfor til domenenavnet du har bundet.

#### Optimalisering Av Nettstedsimplementering I Fastlands-Kina

Hvis du ønsker å oppnå bedre tilgjengelighetsytelse i nettverksmiljøet på fastlands-Kina, vennligst [registrer et domenenavn](//beian.aliyun.com) først.

Bruk deretter `out/ol/htm` til skyleverandører `CDN` fastlandet +

Du kan bruke edge computing til å omskrive banen for å tilpasse seg enkeltsideapplikasjoner, for eksempel [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) Den kan konfigureres slik:

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
<img alt="" src="https://p.3ti.site/1721121273.avif">

Fordi `MX` -poster og `CNAME` -poster ikke kan eksistere side om side, hvis du ønsker å motta domenenavn `CNAME` e `A` poster samtidig, må du samarbeide med [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten)

I tillegg, fordi de utenlandske trafikkkostnadene til skyleverandører i fastlands-Kina er relativt dyre, hvis du ønsker å optimalisere kostnadene, kan du bruke [Huawei Cloud DNS s gratis geografiske oppløsning](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) og [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) tilpassede domenenavn (som vist nedenfor). trafikkomdirigering──Trafikk i fastlands-Kina Baidu Cloud `CDN` internasjonal trafikk går cloudflare .

<img alt="" src="https://p.3ti.site/1721119788.avif">

Disse løsningene for distribusjonsoptimalisering er mer komplekse og vil bli introdusert i separate kapitler i fremtiden.

#### Generisk Omdirigering Av Domenenavn

Hvis du bruker `i18n.site` til å generere et nettsted som hovednettsted, må du vanligvis konfigurere omdirigering av pan-domene, det vil si omdirigere `*.xxx.com` (inkludert `www.xxx.com` ) tilgang til `xxx.com` .

Dette kravet kan oppnås ved hjelp av Alibaba `CDN` `EdgeScript` ( [engelsk dokument](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [kinesisk dokument](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Legg til et domenenavn i [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) og pek `*.xxx.com` til Alibaba Cloud `CDN` sin `CNAME` .

<img alt="" src="https://p.3ti.site/1721122000.avif">

`*.i18n.site` eksempel er omdirigeringskonfigurasjonen for pan-domenenavnet på bildet ovenfor som følger:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### Distribuer Med nginx

Vennligst legg til en konfigurasjon som ligner på følgende i `server` nginx der `/root/i18n/md/out/ol/htm` vennligst endre den til banen til ditt eget prosjekt `out/ol/htm` :

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

#### Offentlig

Statiske filer på nettstedet, for eksempel `favicon.ico` `robots.txt` , etc.

Ikonfilene her kan genereres med [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n

`.i18n` Under katalogen er `i18n.site` konfigurasjonsfiler, oversettelsesbuffer osv. Se neste kapittel ["Konfigurasjon"](/i18n.site/conf) for detaljer.

#### No

Kildespråkkatalog, som `.i18n/conf.yml` `fromTo` `en` i konfigurasjonsfilen

```yaml
i18n:
  fromTo:
    en: zh
```

Vennligst se konfigurasjonen av oversettelsen [i18](/i18/use)

