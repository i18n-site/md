# Installera &

## Konfigurationstoken

`i18n.site` har ett inbyggt `i18` översättningsverktyg [Klicka här för att hänvisa till `i18` dokumentet för att konfigurera åtkomsttoken](/i18/use) .

## Installera

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Demoprojekt

Låt oss börja med ett demoprojekt för att lära oss hur man använder `i18n.site` .

Vi klonar först demoförvaret och kör kommandot enligt följande:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Användare på det kinesiska fastlandet kan:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

Katalognamnet för `demo.i18n.site` -kodbasklonen måste vara `md` för att underlätta lokal förhandsgranskning med `docker` .

### Översätta

Ange först katalogen `md` och kör `i18n.site` , vilket kommer att översätta `en` till `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Efter körning kommer översättnings- och cachefiler att genereras. Kom ihåg att lägga till dem i arkivet i `md` `git add . ` .

### Lokal Förhandsvisning

Installera och starta `docker` ( `MAC` användare rekommenderar att du använder [orbstack](https://orbstack.dev) som körtid för `docker` ).

Gå sedan in i katalogen `docker` och kör `./up.sh` och [https://127.0.0.1](https://127.0.0.1) sedan för att förhandsgranska lokalt.

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Lägg Upp Innehåll

`i18n.site` antar en [ensidig applikationsarkitektur](https://developer.mozilla.org/docs/Glossary/SPA) , och webbplatsens ingångssida och webbplatsinnehåll distribueras oberoende av varandra.

Efter att ha kört ovanstående översättning kommer katalogerna `htm` och `v` att genereras under katalogen `md/out/dev` .

Här betyder `dev` att den är byggd utifrån konfigurationsfilen `.i18n/htm/dev.yml` .

`dev` katalog :

Katalogen `htm` är hemsidans ingångssida.

Katalogen `v` innehåller webbplatsinnehåll med versionsnummer.

Lokal förhandsgranskning bryr sig inte om versionsnumret och kommer att kopiera alla filer till `out/dev/v/0.1.0` -katalogen.

För officiell release kommer ändrade filer att kopieras till den nya versionsnummerkatalogen.

#### Använd -c För Att Specificera Konfigurationsfilen

Olika konfigurationsfiler skapar motsvarande kataloger i `out` katalogen.

Till exempel kommer `.i18n/htm/ol.yml` att skapa `out/ol` -katalogen.

`dev.yml` och `ol.yml` är standardkonfigurationerna.

`dev` är förkortningen av `development` , som indikerar utvecklingsmiljön, som används för lokal förhandsgranskning, och är också standardkonfigurationsfilen.
`ol` är förkortningen av `online` , som indikerar onlinemiljön, som används för officiell version. Det är också standardkonfigurationsfilen när man använder kommandoradsparametrar `-n` till `npm` för att släppa.

Du kan också skapa andra konfigurationsfiler. Använd `--htm_conf` på kommandoraden för att ange vilket konfigurationsfilnamn som ska användas:

till exempel:
```
i18n.site --htm_conf yourConfig --save
```

Här representerar `--save` uppdateringens versionsnummer.

#### <a rel=id href="#npm" id="npm"></a> Publicera innehåll på npmjs.com

Att publicera innehåll till [npmjs.com](//npmjs.com) är den rekommenderade standardlösningen (se [Front-end High Availability](/i18n.site/feature#ha) ).

##### npm login &

Installera `nodejs` , logga in med `npm login` .

Redigera `md/.i18n/htm/ol.yml` och ändra `i18n.site` i `v: //unpkg.com/i18n.site` till ditt eget `npm` paketnamn.

Använd bara det lediga paketnamnet på [npmjs.com](//npmjs.com)

När du publicerar baserat på paket `npm` , **se till att använda `//unpkg.com/`** för prefixet `v:` värdet `i18n.site` har speciellt optimerat cachetiden för `/.v` under denna prefixsökväg för att få aktuell visning av nya utgåvor.

Kör `i18n.site --npm` eller `i18n.site -n` i `md` -katalogen för att översätta och publicera.

Om du använder en kontinuerlig integrationsmiljö för att publicera, behöver du inte installera `nodejs` , bara kopiera inloggad och publiceringsbehörighet `~/.npmrc` till miljön.

Om du ändrar paketnamnet `v:` på `ol.yml` , **se till att ta bort `.i18n/v/ol` först** och sedan publicera det.

##### Proxyserver Publicerad Av npm

Om användare på det kinesiska fastlandet stöter på nätverksproblem och inte kan publicera `npm` paket, kan de ställa in miljövariabel `https_proxy` för att konfigurera proxyservern.

Om du antar att din proxyserverport är `7890` , kan du skriva:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Eget Värdinnehåll

Om du vill vara värd för innehållet, redigera först `md/.i18n/htm/ol.yml` och ändra `v: //unpkg.com/i18n.site` till ditt URL-prefix, till exempel `v: //i18n-v.xxx.com` .

Gå in i katalogen `md` och kör

```
i18n.site --htm_conf ol --save
```

eller förkortning

```
i18n.site -c ol -s
```

Konfigurera sedan innehållet i `md/out/ol/v` -katalogen till URL-prefixets sökväg som anges i `v:` .

Slutligen, **konfigurera cachetiden för sökvägen som slutar på `/.v` till `1s`** , annars kan det nysläppta innehållet inte nås omedelbart.

Cachetiden för andra sökvägar kan ställas in på ett år eller mer för att minska onödiga förfrågningar.

##### Värd Innehåll Till s3

För att själv hosta innehåll, förutom att använda din egen server, är `CDN` annat vanligt alternativ att använda `S3` +

Du kan använda [rclone](https://rclone.org) för att logga in på `S3` servern, hänvisa till och ändra följande skript och kopiera endast de inkrementella ändringarna till `S3` för varje utgåva.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Kom ihåg att konfigurera `CDN` så att cachetiden för sökvägen som slutar på `/.v` är `1s` , annars kan det nysläppta innehållet inte nås omedelbart.

### Publicera Webbplats

Webbplatsen kan distribueras var som helst [github page](https://pages.github.com) och [cloudflare page](https://pages.cloudflare.com) är bra val.

Eftersom webbplatsen använder en [ensidig applikationsarkitektur](https://developer.mozilla.org/docs/Glossary/SPA) , kom ihåg att skriva om URL-sökvägar som inte innehåller `. ` till `index.html` .

Webbsidans ingångssida behöver bara distribueras en gång, och det finns inget behov av att distribuera om webbplatsens ingångssida för efterföljande innehållsuppdateringar.

#### Distribuera På Github-Sidan

[Klicka först github för att skapa en organisation](https://github.com/account/organizations/new?plan=free) . Följande organisationsnamn är `i18n-demo` som ett exempel.

Skapa sedan lager `i18n-demo.github.io` under denna organisation (ersätt `i18n-demo` med organisationsnamnet du skapade):

![](https://p.3ti.site/1721098657.avif)

När du publicerar innehållet i föregående artikel har `out/ol/htm` genererats Vänligen ange den här katalogen och kör :

```
ln -s index.html 404.html
```


Eftersom `github page` inte stöder omskrivning av webbadresser, används `404.html` istället.

Kör sedan följande kommando i `htm` -katalogen (kom ihåg att ersätta `i18n-demo/i18n-demo.github.io.git` med din egen lageradress) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

När du har tryckt på koden, vänta tills distributionen av `github page` körs framgångsrikt (som visas nedan) innan du kan komma åt den.

<img src="//p.3ti.site/1721116586.avif" width="350px">

För demosida se:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Distribuera På Cloudflare-Sidan

[cloudflare page](//pages.cloudflare.com) med `github page` ger den omskrivning av vägar och är mer vänlig för Kina och är mer tillgänglig.

Utplaceringen av `cloudflare page` baseras vanligtvis på utplaceringen av `github page` ovan.

Skapa ett projekt och bind `i18n-demo.github.io` -lagret ovan.

Processen visas i figuren nedan:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Klicka på `Add Account` för att ge åtkomst till organisation `i18n-demo` .

Om du har bundit en annan organisations lager kan du behöva klicka på `Add Account` två gånger för att auktorisera två gånger innan den nya organisationen kommer att visas.

![](https://p.3ti.site/1721118306.avif)

Välj sedan lager `i18n-demo.github.io` , klicka sedan på `Begin setup` och använd standardvärdena för efterföljande steg.

![](https://p.3ti.site/1721118490.avif)

När du har bindit för första gången måste du vänta några minuter innan du kan komma åt den.

Efter implementeringen kan du binda ett anpassat domännamn.

![](https://p.3ti.site/1721119459.avif)

Efter att du har bindit det anpassade domännamnet, gå till domännamnet för att konfigurera sökvägsomskrivningen för ensidig applikation, som visas nedan:

![](https://p.3ti.site/1721119320.avif)

Reglerna i bilden ovan är som följer Vänligen ersätt `i18n.site` an på första raden nedan med domännamnet du bundna.

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

Konfigurera dessutom cachereglerna, som visas nedan, och ställ in cachetiden till en månad.

![](https://p.3ti.site/1721125111.avif)

Vänligen ändra domännamnsmatchningen i det andra steget i bilden ovan till det domännamn du bundna.

#### Optimering Av Webbplatsdistribution På Kinas Fastland

Om du vill få bättre tillgänglighetsprestanda i nätverksmiljön på det kinesiska fastlandet, vänligen [registrera ett domännamn](//beian.aliyun.com) först.

Använd sedan objektlagringen för molnleverantörer i Kina + Distribuera följande innehåll `CDN` `out/ol/htm`

Du kan använda edge computing för att skriva om sökvägen för att anpassa sig till ensidiga applikationer. Till exempel kan [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) konfigureras så här:

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

Eftersom post `MX` och post `CNAME` inte kan existera samtidigt, om du vill ta emot domännamnsmail samtidigt, måste du samarbeta med [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) till nivå `CNAME` i post `A` .

Dessutom, eftersom de utländska trafikavgifterna för molnleverantörer på Kinas fastland är relativt dyra, om du vill optimera kostnaderna, kan du använda [Huawei DNS gratis geografiska upplösning](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) och [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) :s anpassade domännamn (som visas nedan) för att uppnå trafikomdirigering──Trafik i Kinas fastland Baidu Cloud `CDN` , internationell trafik går cloudflare .

![](https://p.3ti.site/1721119788.avif)

Dessa distributionsoptimeringslösningar är mer komplexa och kommer att introduceras i separata kapitel i framtiden.

#### Generisk Omdirigering Av Domännamn

Om du använder `i18n.site` för att skapa en webbplats som din huvudwebbplats, behöver du vanligtvis konfigurera omdirigering av pan-domäner, det vill säga omdirigera åtkomst till `*.xxx.com` (inklusive `www.xxx.com` ) till `xxx.com` .

Detta krav kan uppnås med hjälp av Alibaba Cloud `CDN` `EdgeScript` ( [engelsk dokument](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [kinesiskt dokument](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Lägg till domännamnet i [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) och peka på domännamnet `*.xxx.com` `CNAME` i Alibaba Cloud `CDN` .

![](https://p.3ti.site/1721122000.avif)

Till exempel är omdirigeringskonfigurationen för pan-domännamnet för `*.i18n.site` i bilden ovan följande:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

#### Distribuera Med nginx

Lägg till en konfiguration som liknar följande i `server` -stycket i nginx Ändra `/root/i18n/md/out/ol/htm` till sökvägen för ditt eget projekt `out/ol/htm` :

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

Statiska filer för webbplatsen, såsom `favicon.ico` , `robots.txt` , etc.

Ikonfilerna här kan genereras med [realfavicongenerator.net](https://realfavicongenerator.net)

#### `.i18n`

Under `.i18n` -katalogen finns konfigurationsfiler, översättningscache, etc. av `i18n.site` Se nästa kapitel ["Konfiguration"](/i18n.site/conf) för detaljer.

#### `en`

Källspråkskatalog, motsvarande konfigurationsfilen `en` av `fromTo` i `.i18n/conf.yml`

```yaml
i18n:
  fromTo:
    en: zh
```

Se konfigurationen av översättning [i18](/i18/use)