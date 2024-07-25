# Installeer &

## Konfigurasietoken

`i18n.site` Die `i18` vertaalinstrument is ingebed, [klik asseblief hier om na die `i18` -dokument te verwys om die toegangsteken te konfigureer](/i18/use) .

## Installeer

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Demo Projek

Kom ons begin met 'n demo-projek en leer hoe om `i18n.site`

Ons kloon eers die demo-bewaarplek en voer die opdrag soos volg uit:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Gebruikers op die vasteland van China kan:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

Die gidsnaam van die kodebasiskloon moet `md` wees om plaaslike voorskou met `demo.i18n.site` `docker` fasiliteer.

### Vertaal

Voer eers die `md` -gids in en hardloop `i18n.site` , wat `en` na `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Na hardloop, sal vertaling en kaslêers gegenereer word. Onthou asseblief om dit by die bewaarplek `git add . ` in die `md`

### Plaaslike Voorskou

Installeer en `docker` ( `MAC` beveel aan om [orbstack](https://orbstack.dev) as die looptyd van `docker` te gebruik).

Voer dan die `docker` -gids in en hardloop `./up.sh` , en besoek dan [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Plaas Inhoud

`i18n.site` Neem 'n [enkelbladsy-toepassingsargitektuur](https://developer.mozilla.org/docs/Glossary/SPA) aan, en die webwerf-ingangsbladsy en webwerf-inhoud word onafhanklik ontplooi.

Nadat u die vertaling hierbo uitgevoer het, sal `htm` en `v` -gidse gegenereer word in die `md/out/dev`

Hier dui `dev` aan dat dit gebou is op die `.i18n/htm/dev.yml` .

`dev` Onder inhoud :

`htm` die gids is die webwerf ingang bladsy.

`v` Die gids bevat die webwerf-inhoud met weergawenommer.

Plaaslike voorskou sal alle lêers na die `out/dev/v/0.1.0` -gids kopieer, ongeag die weergawenommer.

Vir amptelike vrystelling sal veranderde lêers na die nuwe weergawenommergids gekopieer word.

#### Gebruik -c Om Die Konfigurasielêer Te Spesifiseer

Verskillende konfigurasielêers sal ooreenstemmende gidse onder die `out`

Byvoorbeeld, `.i18n/htm/ol.yml` sal 'n `out/ol` gids skep.

`dev.yml` en `ol.yml` is die verstekkonfigurasies.

`dev` is die afkorting van `development` , wat die ontwikkelingsomgewing verteenwoordig, word gebruik vir plaaslike voorskou, en is ook die verstekkonfigurasielêer.
`ol` is die afkorting van `online` , wat die aanlyn-omgewing verteenwoordig, word gebruik vir amptelike vrystelling, en is ook die verstekkonfigurasielêer wanneer dit gepubliseer word na `npm` deur die opdragreëlparameter `-n` .

U kan ook ander konfigurasielêers skep. Gebruik `--htm_conf`

byvoorbeeld:
```
i18n.site --htm_conf yourConfig --save
```

`--save` dui die weergawenommer van die opdatering aan.

#### <a rel=id href="#npm" id="npm"></a> Publiseer inhoud op npmjs.com

Die publisering [van](/i18n.site/feature#ha) inhoud na [npmjs.com](//npmjs.com)

##### npm login & Vrylating

Installeer `nodejs` gebruik `npm login` om aan te meld.

Wysig `md/.i18n/htm/ol.yml` verander `i18n.site` in `v: //unpkg.com/i18n.site` na jou eie `npm` pakketnaam.

Gebruik net die onbesette pakketnaam op [npmjs.com](//npmjs.com)

Wanneer `i18n.site` op die `npm` `/.v` publiseer, **moet u seker maak dat u `//unpkg.com/`** as die voorvoegsel van die `v:` -waarde gebruik.

Begin `i18n.site --npm` of `i18n.site -n` in die `md` -gids om te vertaal en te publiseer.

As jy 'n deurlopende integrasie-omgewing gebruik om te publiseer, is dit nie nodig om dit te installeer nie `nodejs` Kopieer net die aangemelde en gepubliseerde toestemming `~/.npmrc` na die omgewing.

As jy die pakketnaam verander in `v:` `ol.yml` , **maak asseblief seker dat jy eers `.i18n/v/ol` uitvee** en dit dan publiseer.

##### Instaanbediener Gepubliseer Deur npm

As gebruikers op die vasteland van China netwerkprobleme teëkom en nie die `npm` -pakket kan publiseer nie, kan hulle die omgewingsveranderlike `https_proxy` stel om die instaanbediener op te stel.

As u aanvaar dat u instaanbedienerpoort `7890` kan u skryf:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Inhoud Wat Self Aangebied Word

As jy die inhoud self wil aanbied, wysig `md/.i18n/htm/ol.yml` en verander `v: //unpkg.com/i18n.site` na jou URL-voorvoegsel, soos `v: //i18n-v.xxx.com` .

Voer die `md` -gids in en hardloop

```
i18n.site --htm_conf ol --save
```

of afkorting

```
i18n.site -c ol -s
```

Stel dan die inhoud in die `md/out/ol/v` -gids op na die URL-voorvoegselpad wat in `v:` gestel is.

Laastens, **stel die kastyd van die pad `/.v` eindig op `1s` op** , anders kan die nuut vrygestelde inhoud nie onmiddellik verkry word nie.

Die kastyd vir ander paaie kan op een jaar of meer gestel word om onnodige versoeke te verminder.

##### Gasheer Inhoud Aan s3

Benewens die gebruik van jou eie bediener, is 'n ander algemene opsie om inhoud `CDN` gebruik `S3` +

Jy kan [rclone](https://rclone.org) `S3` bediener gebruik, dan verwys na en wysig die skrif hieronder, en kopieer slegs inkrementele veranderinge na `S3` elke keer as jy publiseer.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Onthou om `CDN` op te stel sodat die kastyd van die pad wat op `/.v` eindig `1s` is, anders sal jy nie dadelik toegang tot die nuut vrygestelde inhoud hê nie.

### Webwerf Te Publiseer

Die webwerf kan enige plek ontplooi word [github page](https://pages.github.com) en [cloudflare page](https://pages.cloudflare.com) is goeie keuses.

Omdat die webwerf die argitektuur van ['n enkelbladsy-toepassing](https://developer.mozilla.org/docs/Glossary/SPA) aanneem, onthou om die URL-pad wat nie bevat nie `. ` te herskryf na `index.html` .

Die webwerf-inskrywingsbladsy hoef net een keer ontplooi te word, en dit is nie nodig om die webwerf-inskrywingsbladsy te herontplooi vir daaropvolgende inhoudopdaterings nie.

#### Ontplooi Op Github-Bladsy

[Klik eers github om 'n organisasie te skep](https://github.com/account/organizations/new?plan=free) `i18n-demo`

Skep dan 'n pakhuis onder hierdie `i18n-demo.github.io` (vervang asseblief `i18n-demo` met die organisasienaam wat jy geskep het):

<img alt="" src="https://p.3ti.site/1721098657.avif">

Wanneer die inhoud in die vorige artikel gepubliseer word, is dit gegenereer `out/ol/htm` Voer asseblief hierdie gids in en hardloop :

```
ln -s index.html 404.html
```


Omdat `github page` nie URL-pad-herskryf ondersteun nie, word `404.html` eerder gebruik.

Voer dan die volgende opdrag in die `htm` -gids (onthou om `i18n-demo/i18n-demo.github.io.git` met jou eie pakhuisadres te vervang) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Nadat u die kode gedruk het, wag vir die implementering van `github page` om suksesvol te loop (soos hieronder getoon), en dan kan u toegang daartoe kry.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Vir demo bladsy sien asseblief:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Ontplooi Op Cloudflare-Bladsy

In vergelyking met [cloudflare page](//pages.cloudflare.com) , bied dit padherskrywing en is `github page` meer vriendelik vir die vasteland van China en dit word aanbeveel om te gebruik.

`cloudflare page` Die ontplooiing is gewoonlik gebaseer op die ontplooiing van `github page` hierbo.

Skep 'n projek en bind bogenoemde `i18n-demo.github.io` .

Die proses word in die onderstaande figuur getoon:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

Klik `Add Account` om toegang tot die `i18n-demo` te verleen.

As jy die pakhuis van 'n ander organisasie gebind het, moet jy dalk `Add Account` keer klik om dit twee keer te magtig voordat die nuwe organisasie vertoon sal word.

<img alt="" src="https://p.3ti.site/1721118306.avif">

Kies `i18n-demo.github.io` Warehouse, klik dan `Begin setup` en gebruik die verstekwaardes vir die volgende stappe.

<img alt="" src="https://p.3ti.site/1721118490.avif">

Nadat jy vir die eerste keer gebind het, moet jy 'n paar minute wag voordat jy toegang daartoe kan kry.

Na ontplooiing kan u 'n pasgemaakte domeinnaam bind.

<img alt="" src="https://p.3ti.site/1721119459.avif">

Nadat u die pasgemaakte domeinnaam gebind het, gaan asseblief na die domeinnaam om die padherskrywing van die enkelbladsy-toepassing op te stel, soos hieronder getoon:

<img alt="" src="https://p.3ti.site/1721119320.avif">

Die reëls in die prentjie hierbo is as volg. Vervang `i18n.site` in die eerste reël hieronder met die domeinnaam wat aan jou gebind is.

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

Stel ook asseblief die kasreëls op, soos hieronder getoon, en stel die kasduur op een maand.

<img alt="" src="https://p.3ti.site/1721125111.avif">

Verander asseblief die domeinnaam wat in die tweede stap in die prentjie hierbo pas na die domeinnaam wat jy gebind het.

#### Optimaliseer Webwerf-Ontplooiing Op Die Vasteland Van China

As jy beter toeganklikheidprestasie in die netwerkomgewing van die vasteland van China wil verkry, [registreer asseblief eers 'n domeinnaam](//beian.aliyun.com) .

Gebruik `out/ol/htm` die objekberging van wolkverkopers op die vasteland `CDN` China +

Jy kan edge computing gebruik om die pad te herskryf om aan te pas by enkelbladsy-toepassings, soos [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html)

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

Omdat `MX` -rekords en `CNAME` -rekords nie gelyktydig kan bestaan ​​nie, moet jy saamwerk met [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) script om `CNAME` in `A` rekord.

Daarbenewens, omdat die oorsese verkeerskoste van wolkverkopers in die vasteland van China relatief duur is, kan jy [Huawei DNS se gratis geografiese resolusie](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) en [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) se pasgemaakte domeinnaam (soos hieronder getoon) gebruik om koste te optimaliseer verkeersafleiding──Verkeer op die vasteland van China Baidu Cloud `CDN` internasionale verkeer gaan cloudflare .

<img alt="" src="https://p.3ti.site/1721119788.avif">

Hierdie ontplooiingsoptimeringsoplossings is meer kompleks en sal in die toekoms in aparte hoofstukke bekendgestel word.

#### Generiese Domeinnaam Herleiding

As jy `i18n.site` gebruik om 'n webwerf as jou hoofwebwerf te genereer, moet jy gewoonlik pan-domein herleiding opstel, dit wil sê, herlei `*.xxx.com` (insluitend `www.xxx.com` ) toegang na `xxx.com` .

Hierdie vereiste kan bereik word met behulp van Alibaba `CDN` se `EdgeScript` ( [Engelse dokument](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Chinese dokument](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Voeg 'n domeinnaam in [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) by en wys `*.xxx.com` domeinnaam na Alibaba Cloud `CDN` se `CNAME` .

<img alt="" src="https://p.3ti.site/1721122000.avif">

Byvoorbeeld, die pan-domein naam herleiding konfigurasie van `*.i18n.site`

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### Ontplooi Met nginx

Voeg asseblief 'n konfigurasie soortgelyk aan die volgende in `server` nginx waar `/root/i18n/md/out/ol/htm` dit asseblief verander na die pad van jou eie projek `out/ol/htm` :

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Gidsstruktuur

#### Publiek

Statiese lêers van die webwerf, soos `favicon.ico` `robots.txt` , ens.

Die ikoonlêers hier kan gegenereer word met [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n

`.i18n` Onder die gids is `i18n.site` se konfigurasielêers, vertaalkas, ens. Sien die volgende hoofstuk ["Konfigurasie"](/i18n.site/conf) vir besonderhede.

#### Af

Brontaalgids, wat ooreenstem `.i18n/conf.yml` `fromTo` `en` in die konfigurasielêer

```yaml
i18n:
  fromTo:
    en: zh
```

Verwys asseblief na die konfigurasie van vertaling [i18](/i18/use)

