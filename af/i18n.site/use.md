# Installeer &

## Konfigurasietoken

`i18n.site` het 'n ingeboude `i18` vertaalinstrument. [Klik asseblief hier om na die `i18` dokument te verwys om die toegangsteken te konfigureer](/i18/use) .

## Installeer

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Demo Projek

Kom ons begin met 'n demonstrasieprojek om te leer hoe om `i18n.site` te gebruik.

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

Die gidsnaam van die `demo.i18n.site` -kodebasiskloon moet `md` wees om plaaslike voorskou met `docker` te fasiliteer.

### Vertaal

Voer eers die `md` gids in en hardloop `i18n.site` , wat `en` na `zh` sal vertaal.

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Na hardloop, sal vertaling en kaslêers gegenereer word. Onthou asseblief om `git add . ` by die bewaarplek in die `md` gids te voeg.

### Plaaslike Voorskou

Installeer en begin `docker` ( `MAC` gebruiker beveel aan om [orbstack](https://orbstack.dev) as die looptyd vir `docker` te gebruik).

Voer dan die `docker` gids in en hardloop `./up.sh` , en besoek dan [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Plaas Inhoud

`i18n.site` neem 'n [enkelbladsy-toepassingsargitektuur](https://developer.mozilla.org/docs/Glossary/SPA) aan, en die webwerf-ingangbladsy en webwerf-inhoud word onafhanklik ontplooi.

Nadat die bogenoemde vertaling uitgevoer is, sal gidse `htm` en `v` onder die `md/out/dev` gids gegenereer word.

Hier beteken `dev` dat dit gebou is op grond van die `.i18n/htm/dev.yml` konfigurasielêer.

`dev` gids :

Die `htm` gids is die webwerf ingang bladsy.

Die `v` gids bevat webwerf-inhoud met weergawenommers.

Plaaslike voorskou gee nie om oor die weergawenommer nie en sal alle lêers na die `out/dev/v/0.1.0` gids kopieer.

Vir amptelike vrystelling sal veranderde lêers na die nuwe weergawenommergids gekopieer word.

#### Gebruik -c Om Die Konfigurasielêer Te Spesifiseer

Verskillende konfigurasielêers sal ooreenstemmende gidse in die `out` gids skep.

Byvoorbeeld, `.i18n/htm/ol.yml` sal die `out/ol` gids skep.

`dev.yml` en `ol.yml` is die verstekkonfigurasies.

`dev` is die afkorting van `development` , wat die ontwikkelingsomgewing aandui, wat vir plaaslike voorskou gebruik word, en is ook die verstekkonfigurasielêer.
`ol` is die afkorting van `online` , wat die aanlyn-omgewing aandui, wat vir amptelike vrystelling gebruik word. Dit is ook die verstekkonfigurasielêer wanneer opdragreëlparameters `-n` tot `npm` gebruik word om vry te stel.

U kan ook ander konfigurasielêers skep. Gebruik `--htm_conf` op die opdragreël om die konfigurasielêernaam te spesifiseer:

byvoorbeeld:
```
i18n.site --htm_conf yourConfig --save
```

Hier verteenwoordig `--save` die weergawenommer van die opdateringvrystelling.

#### <a rel=id href="#npm" id="npm"></a> Publiseer inhoud op npmjs.com

Die publisering [van](/i18n.site/feature#ha) inhoud na [npmjs.com](//npmjs.com)

##### npm login &

Installeer `nodejs` , meld aan met `npm login` .

Wysig `md/.i18n/htm/ol.yml` en verander `i18n.site` in `v: //unpkg.com/i18n.site` na jou eie `npm` pakketnaam.

Gebruik net die onbesette pakketnaam op [npmjs.com](//npmjs.com)

Wanneer u publiseer gebaseer op pakket `npm` , **maak seker dat u `//unpkg.com/` gebruik vir** die voorvoegsel van `v:` waarde `i18n.site` het spesiaal die kastyd van `/.v` onder hierdie voorvoegselpad geoptimaliseer om tydige besigtiging van nuwe vrystellings te verkry.

Begin `i18n.site --npm` of `i18n.site -n` in die `md` -gids om te vertaal en te publiseer.

As jy 'n deurlopende integrasie-omgewing gebruik om te publiseer, is dit nie nodig om `nodejs` te installeer nie. Kopieer net die aangemelde en publiseringstoestemmings `~/.npmrc` na die omgewing.

As jy die pakketnaam van `v:` in `ol.yml` verander, **maak asseblief seker dat jy eers `.i18n/v/ol` uitvee** en dit dan publiseer.

##### Instaanbediener Gepubliseer Deur npm

As gebruikers op die vasteland van China netwerkprobleme teëkom en nie `npm` pakkette kan publiseer nie, kan hulle die omgewingsveranderlike `https_proxy` stel om die instaanbediener op te stel.

As jy aanvaar dat jou instaanbedienerpoort `7890` is, kan jy skryf:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Inhoud Wat Self Aangebied Word

As jy die inhoud self wil aanbied, wysig eers `md/.i18n/htm/ol.yml` en verander `v: //unpkg.com/i18n.site` na jou URL-voorvoegsel, soos `v: //i18n-v.xxx.com` .

Voer die `md` gids in en hardloop

```
i18n.site --htm_conf ol --save
```

of afkorting

```
i18n.site -c ol -s
```

Stel dan die inhoud in die `md/out/ol/v` gids op na die URL-voorvoegselpad wat in `v:` gestel is.

Laastens, **konfigureer die kastyd van die pad wat eindig op `/.v` tot `1s`** , anders kan daar nie onmiddellik toegang tot die nuut vrygestelde inhoud verkry word nie.

Die kastyd vir ander paaie kan op een jaar of meer gestel word om onnodige versoeke te verminder.

##### Gasheer Inhoud Aan s3

Benewens die gebruik van jou eie bediener, is 'n ander algemene opsie om inhoud self aan te bied om `S3` + `CDN` gebruik.

Jy kan [rclone](https://rclone.org) gebruik om aan te meld by die `S3` bediener, verwys dan na en wysig die volgende skrif, en kopieer slegs die inkrementele veranderinge na `S3` vir elke vrystelling.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Onthou om `CDN` te konfigureer sodat die kastyd van die pad wat op `/.v` eindig, `1s` is, anders kan daar nie onmiddellik toegang tot die nuut vrygestelde inhoud verkry word nie.

### Webwerf Te Publiseer

Die webwerf kan enige plek ontplooi word [github page](https://pages.github.com) en [cloudflare page](https://pages.cloudflare.com) is goeie keuses.

Omdat die webwerf 'n [enkelbladsy-toepassingsargitektuur](https://developer.mozilla.org/docs/Glossary/SPA) gebruik, onthou om URL-paaie wat nie `. ` tot `index.html` bevat nie, te herskryf.

Die webwerf-inskrywingsbladsy hoef net een keer ontplooi te word, en dit is nie nodig om die webwerf-inskrywingsbladsy te herontplooi vir daaropvolgende inhoudopdaterings nie.

#### Ontplooi Op Github-Bladsy

[Klik eers github om 'n organisasie te skep](https://github.com/account/organizations/new?plan=free) . Die volgende organisasie se naam is `i18n-demo` as 'n voorbeeld.

Skep dan pakhuis `i18n-demo.github.io` onder hierdie organisasie (vervang asseblief `i18n-demo` met die organisasienaam wat jy geskep het):

![](https://p.3ti.site/1721098657.avif)

Wanneer die inhoud in die vorige artikel gepubliseer word, is `out/ol/htm` gegenereer. Voer asseblief hierdie gids in en hardloop :

```
ln -s index.html 404.html
```


Omdat `github page` nie URL-pad-herskryf ondersteun nie, word `404.html` eerder gebruik.

Voer dan die volgende opdrag in die `htm` -gids uit (onthou om `i18n-demo/i18n-demo.github.io.git` met jou eie pakhuisadres te vervang) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Nadat u die kode gedruk het, wag vir die ontplooiing van `github page` om suksesvol te loop (soos hieronder getoon) voordat u toegang daartoe kan verkry.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Vir demo bladsy sien asseblief:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Ontplooi Op Cloudflare-Bladsy

In vergelyking met `github page` bied dit padherskrywing en is dit meer vriendelik vir die vasteland van China en is [cloudflare page](//pages.cloudflare.com) meer toeganklik.

Die ontplooiing van `cloudflare page` is gewoonlik gebaseer op die ontplooiing van `github page` hierbo.

Skep 'n projek en bind die `i18n-demo.github.io` pakhuis hierbo.

Die proses word in die onderstaande figuur getoon:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Klik asseblief `Add Account` om toegang aan organisasie `i18n-demo` te verleen.

As jy die pakhuis van 'n ander organisasie gebind het, moet jy dalk twee keer op `Add Account` klik om twee keer te magtig voordat die nuwe organisasie vertoon sal word.

![](https://p.3ti.site/1721118306.avif)

Kies dan pakhuis `i18n-demo.github.io` , klik dan `Begin setup` , en gebruik die verstekwaardes vir die daaropvolgende stappe.

![](https://p.3ti.site/1721118490.avif)

Nadat jy vir die eerste keer gebind het, moet jy 'n paar minute wag voordat jy toegang daartoe kan kry.

Na ontplooiing kan u 'n pasgemaakte domeinnaam bind.

![](https://p.3ti.site/1721119459.avif)

Nadat u die pasgemaakte domeinnaam gebind het, gaan asseblief na die domeinnaam om die padherskrywing van die enkelbladsy-toepassing op te stel, soos hieronder getoon:

![](https://p.3ti.site/1721119320.avif)

Die reëls in die prentjie hierbo is as volg Vervang asseblief `i18n.site` in die eerste reël hieronder met die domeinnaam wat jy gebind het.

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

![](https://p.3ti.site/1721125111.avif)

Verander asseblief die domeinnaam wat in die tweede stap in die prentjie hierbo pas na die domeinnaam wat jy gebind het.

#### Optimaliseer Webwerf-Ontplooiing Op Die Vasteland Van China

As jy beter toeganklikheidprestasie in die netwerkomgewing van die vasteland van China wil verkry, [registreer asseblief eers 'n domeinnaam](//beian.aliyun.com) .

Gebruik dan die objekberging van wolkverkopers op die vasteland van + `CDN` Ontplooi die volgende inhoud `out/ol/htm` .

Jy kan edge computing gebruik om die pad te herskryf om aan te pas by enkelbladsy-toepassings Byvoorbeeld, [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) kan soos volg gekonfigureer word:

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

Omdat rekord `MX` en rekord `CNAME` nie saam kan bestaan nie, as jy domeinnaam-e-posse op dieselfde tyd wil ontvang, moet jy saamwerk met [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) script tot vlak `CNAME` in rekord `A` .

Daarbenewens, omdat die oorsese verkeerskoste van wolkverkopers in die vasteland van China relatief duur is, kan jy [Huawei DNS se gratis geografiese resolusie](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) en [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) se pasgemaakte domeinnaam (soos hieronder getoon) gebruik om koste te optimaliseer verkeersafleiding──Verkeer op die vasteland van China Baidu Cloud `CDN` , internasionale verkeer gaan cloudflare .

![](https://p.3ti.site/1721119788.avif)

Hierdie ontplooiingsoptimeringsoplossings is meer kompleks en sal in die toekoms in aparte hoofstukke bekendgestel word.

#### Generiese Domeinnaam Herleiding

As jy `i18n.site` gebruik om 'n webwerf as jou hoofwebwerf te genereer, moet jy gewoonlik pan-domein-herleiding opstel, dit wil sê, herlei toegang na `*.xxx.com` (insluitend `www.xxx.com` ) na `xxx.com` .

Hierdie vereiste kan bereik word met behulp van Alibaba Cloud `CDN` `EdgeScript` ( [Engelse dokument](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Chinese dokument](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Voeg die domeinnaam by in [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) en wys die domeinnaam `*.xxx.com` na `CNAME` in Alibaba Cloud `CDN` .

![](https://p.3ti.site/1721122000.avif)

Byvoorbeeld, die pan-domein naam herleiding konfigurasie van `*.i18n.site` in die prentjie hierbo is soos volg:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

#### Ontplooi Met nginx

Voeg asseblief 'n opstelling soortgelyk aan die volgende in die `server` paragraaf van nginx Verander asseblief `/root/i18n/md/out/ol/htm` na die pad van jou eie projek `out/ol/htm` :

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

#### `public`

Statiese lêers van die webwerf, soos `favicon.ico` , `robots.txt` , ens.

Die ikoonlêers hier kan gegenereer word met [realfavicongenerator.net](https://realfavicongenerator.net)

#### `.i18n`

Onder die `.i18n` gids is die konfigurasielêers, vertaalkas, ens. van `i18n.site` Sien die volgende hoofstuk ["Konfigurasie"](/i18n.site/conf) vir besonderhede.

#### `en`

Brontaalgids, wat ooreenstem met `en` van `fromTo` in `.i18n/conf.yml` konfigurasielêer

```yaml
i18n:
  fromTo:
    en: zh
```

Verwys asseblief na die konfigurasie van vertaling [i18](/i18/use)