# Installera &

## Konfigurationstoken

`i18n.site` `i18` [`i18`](/i18/use)

## Installera

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Demoprojekt

Låt oss börja med ett demoprojekt och lära oss hur man använder `i18n.site`

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

Katalognamnet för kodbasklonen måste vara `md` för att underlätta lokal förhandsvisning med `docker` `demo.i18n.site`

### Översätt

Ange först katalogen `md` och kör `i18n.site` , vilket kommer att översätta `en` till `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Efter att ha körts kommer översättnings- och cachefiler att genereras. Kom ihåg `git add . ` lägga till dem i katalogen `md`

### Lokal Förhandsvisning

Installera och starta `docker` ( `MAC` rekommenderar att du använder [orbstack](https://orbstack.dev) som körtid för `docker` ).

Gå sedan in i `docker` och kör `./up.sh` , och besök [https://127.0.0.1](https://127.0.0.1) för att förhandsgranska lokalt.

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Lägg Upp Innehåll

`i18n.site` Antar en [ensidig applikationsarkitektur](https://developer.mozilla.org/docs/Glossary/SPA) , och webbplatsens ingångssida och webbplatsinnehåll distribueras oberoende av varandra.

Efter att ha kört ovanstående översättning, kommer `htm` och `v` kataloger att genereras i `md/out/dev`

Här indikerar `dev` att den är byggd på `.i18n/htm/dev.yml` .

: innehåll `dev`

Under katalogen `htm` hemsidans ingångssida.

`v` innehåller webbplatsens innehåll med versionsnummer.

Lokal förhandsgranskning kopierar alla filer till `out/dev/v/0.1.0` -katalogen oavsett versionsnummer.

För officiell release kommer ändrade filer att kopieras till den nya versionsnummerkatalogen.

#### Använd -c För Att Specificera Konfigurationsfilen

Olika konfigurationsfiler kommer att skapa motsvarande kataloger under katalogen `out`

Till exempel kommer `.i18n/htm/ol.yml` att skapa en `out/ol` katalog.

`dev.yml` och `ol.yml` är standardinställningarna.

`dev` är förkortningen av `development` , som representerar utvecklingsmiljön, används för lokal förhandsvisning och är också standardkonfigurationsfilen.
`ol` är förkortningen av `online` , som representerar onlinemiljön, används för officiell utgåva, och är också standardkonfigurationsfilen vid publicering till `npm` med kommandoradsparametern `-n` .

Du kan också skapa andra konfigurationsfiler Använd `--htm_conf`

till exempel:
```
i18n.site --htm_conf yourConfig --save
```

`--save` anger versionsnummer för uppdateringen.

#### <a rel=id href="#npm" id="npm"></a> Publicera innehåll på npmjs.com

Att publicera innehåll till [npmjs.com](//npmjs.com) är den rekommenderade standardlösningen (se [Front-end High Availability](/i18n.site/feature#ha) ).

##### npm login & Släpp

Installera `nodejs` använd `npm login` för att logga in.

Redigera `md/.i18n/htm/ol.yml` ändra `i18n.site` i `v: //unpkg.com/i18n.site` till ditt eget `npm` paketnamn.

Använd bara det lediga paketnamnet på [npmjs.com](//npmjs.com)

När `i18n.site` publicerar baserat `/.v` `npm` -paketet, **se till att använda `//unpkg.com/`** som prefix för `v:` -värdet.

Kör `i18n.site --npm` eller `i18n.site -n` i `md` för att översätta och publicera.

Om du använder en kontinuerlig integrationsmiljö för att publicera, behöver du inte installera den `nodejs` Kopiera bara den inloggade och publicerade behörigheten `~/.npmrc` till miljön.

Om du ändrar paketnamnet i `v:` `ol.yml` , **var noga med att ta bort `.i18n/v/ol` först** och sedan publicera det.

##### Proxyserver Publicerad Av npm

Om användare i Kina stöter på nätverksproblem och inte kan `npm` paketet, kan de ställa in miljövariabeln `https_proxy` för att konfigurera proxyservern.

Om du antar att din proxyserverport är `7890` kan du skriva:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Självhostat Innehåll

Om du vill vara värd för innehållet, redigera `md/.i18n/htm/ol.yml` och ändra `v: //unpkg.com/i18n.site` till ditt URL-prefix, som `v: //i18n-v.xxx.com` .

Gå in i `md` och kör

```
i18n.site --htm_conf ol --save
```

eller förkortning

```
i18n.site -c ol -s
```

Konfigurera sedan innehållet i `md/out/ol/v` till URL-prefixet som anges i `v:` .

Slutligen, **konfigurera cachetiden för sökvägen `/.v` slutar på `1s`** , annars kan det nysläppta innehållet inte nås omedelbart.

Cachetiden för andra sökvägar kan ställas in på ett år eller mer för att minska onödiga förfrågningar.

##### Värd Innehåll Till s3

Att själv hosta innehåll, förutom att använda din egen server `CDN` är + annat vanligt alternativ att använda `S3`

Du kan använda [rclone](https://rclone.org) Login `S3` servern, hänvisa till och ändra skriptet nedan och kopiera endast inkrementella ändringar till `S3` varje gång du publicerar.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Kom ihåg att konfigurera `CDN` så att cachetiden för sökvägen som slutar på `/.v` är `1s` , annars kommer du inte att kunna komma åt det nysläppta innehållet omedelbart.

### Publicera Webbplats

Webbplatsen kan distribueras var som helst [github page](https://pages.github.com) och [cloudflare page](https://pages.cloudflare.com) är bra val.

Eftersom webbplatsen använder arkitekturen för [en ensidig applikation](https://developer.mozilla.org/docs/Glossary/SPA) , kom `index.html` att skriva om URL-sökvägen som inte innehåller `. `

Webbsidans ingångssida behöver bara distribueras en gång, och det finns inget behov av att distribuera om webbplatsens ingångssida för efterföljande innehållsuppdateringar.

#### Distribuera På Github-Sidan

[Klicka först github för att skapa en organisation](https://github.com/account/organizations/new?plan=free) Följande organisationsnamn är `i18n-demo`

Skapa sedan ett lager under denna `i18n-demo.github.io` (Vänligen ersätt `i18n-demo` med organisationsnamnet du skapade):

<img alt="" src="https://p.3ti.site/1721098657.avif">

När du publicerar innehållet i föregående artikel har det skapats `out/ol/htm` ange den här katalogen och kör :

```
ln -s index.html 404.html
```


Eftersom `github page` inte stöder omskrivning av webbadresser, så `404.html` används istället.

Kör sedan följande kommando i `htm` (kom ihåg att ersätta `i18n-demo/i18n-demo.github.io.git` med din egen lageradress) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Efter att ha tryckt på koden, vänta tills distributionen av `github page` körs framgångsrikt (som visas nedan), och sedan kan du komma åt den.

<img src="//p.3ti.site/1721116586.avif" width="350px">

För demosida se:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Distribuera På Cloudflare-Sidan

Jämfört med [cloudflare page](//pages.cloudflare.com) , ger den omskrivning `github page` vägar och är mer vänlig för Kina och är mer tillgänglig.

`cloudflare page` Distributionen är vanligtvis baserad på distributionen av `github page` ovan.

Skapa ett projekt och bind ovanstående lager `i18n-demo.github.io`

Processen visas i figuren nedan:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

Klicka `Add Account` för att ge åtkomst till `i18n-demo` .

Om du har bundit en annan organisations lager kan du behöva `Add Account` två gånger för att auktorisera det två gånger innan den nya organisationen visas.

<img alt="" src="https://p.3ti.site/1721118306.avif">

Välj `i18n-demo.github.io` Warehouse, klicka sedan på `Begin setup` och använd standardvärdena för efterföljande steg.

<img alt="" src="https://p.3ti.site/1721118490.avif">

När du har bindit för första gången måste du vänta några minuter innan du kan komma åt den.

Efter implementeringen kan du binda ett anpassat domännamn.

<img alt="" src="https://p.3ti.site/1721119459.avif">

Efter att du har bindit det anpassade domännamnet, gå till domännamnet för att konfigurera sökvägsomskrivningen för ensidig applikation, som visas nedan:

<img alt="" src="https://p.3ti.site/1721119320.avif">

Reglerna på bilden ovan är som följer Vänligen ersätt `i18n.site`

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

Konfigurera dessutom cachereglerna, som visas nedan, och ställ in cachetiden till en månad.

<img alt="" src="https://p.3ti.site/1721125111.avif">

Vänligen ändra domännamnsmatchningen i det andra steget i bilden ovan till det domännamn du bundna.

#### Optimering Av Webbplatsdistribution På Kinas Fastland

Om du vill få bättre tillgänglighetsprestanda i nätverksmiljön på det kinesiska fastlandet, vänligen [registrera ett domännamn](//beian.aliyun.com) först.

Använd `out/ol/htm` objektlagring av molnleverantörer i `CDN` +

Du kan använda edge computing för att skriva om sökvägen för att anpassa sig till ensidiga applikationer, som [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html)

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

Eftersom `MX` -poster och `CNAME` -poster inte kan existera samtidigt, måste du `CNAME` `A` [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten)

Dessutom, eftersom de utländska trafikavgifterna för molnleverantörer på Kinas fastland är relativt dyra, om du vill optimera kostnaderna, kan du använda [Huawei Clouds gratis geografiska DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) och [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) :s anpassade domännamn (som visas nedan) för att uppnå trafikomdirigering──Trafik på Kinas fastland Baidu Cloud `CDN` internationell trafik går cloudflare .

<img alt="" src="https://p.3ti.site/1721119788.avif">

Dessa distributionsoptimeringslösningar är mer komplexa och kommer att introduceras i separata kapitel i framtiden.

#### Generisk Omdirigering Av Domännamn

Om du använder `i18n.site` för att skapa en webbplats som din huvudwebbplats behöver du vanligtvis konfigurera omdirigering av pan-domän, det vill säga omdirigera `*.xxx.com` (inklusive `www.xxx.com` ) åtkomst till `xxx.com` .

Detta krav kan uppnås med hjälp av Alibaba `CDN` `EdgeScript` ( [engelsk dokument](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [kinesiskt dokument](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Lägg till ett domännamn i [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) och peka `*.xxx.com` till Alibaba Cloud `CDN` :s `CNAME` .

<img alt="" src="https://p.3ti.site/1721122000.avif">

Till exempel är omdirigeringskonfigurationen `*.i18n.site` pandomännamnet i bilden ovan följande:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### Distribuera Med nginx

Vänligen lägg till en konfiguration som liknar följande i `server` nginx där `/root/i18n/md/out/ol/htm` vänligen ändra den till sökvägen för ditt eget projekt `out/ol/htm` :

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

Statiska filer för webbplatsen, som `favicon.ico` `robots.txt` , etc.

Ikonfilerna här kan genereras med [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n

`.i18n` Under katalogen finns `i18n.site` s konfigurationsfiler, översättningscache, etc. Se nästa kapitel ["Konfiguration"](/i18n.site/conf) för detaljer.

#### Sv

Källspråkskatalog, `.i18n/conf.yml` `fromTo` `en` i konfigurationsfilen

```yaml
i18n:
  fromTo:
    en: zh
```

Se konfigurationen av översättning [i18](/i18/use)

