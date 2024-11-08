# Ontplooiing en Aanlyn

`i18n.site` neem 'n [enkelbladsy-toepassingsargitektuur](https://developer.mozilla.org/docs/Glossary/SPA) aan, en die webwerf-ingangbladsy en webwerf-inhoud word onafhanklik ontplooi.

Nadat die bogenoemde vertaling uitgevoer is, sal gidse `htm` en `v` onder die `md/out/dev` gids gegenereer word.

Hier beteken `dev` dat dit gebou is op grond van die `.i18n/htm/dev.yml` konfigurasielêer.

`dev` gids :

Die `htm` gids is die webwerf ingang bladsy.

Die `v` gids bevat webwerf-inhoud met weergawenommers.

Plaaslike voorskou gee nie om oor die weergawenommer nie en sal alle lêers na die `out/dev/v/0.1.0` gids kopieer.

Vir amptelike vrystelling sal veranderde lêers na die nuwe weergawenommergids gekopieer word.

## Spesifiseer Konfigurasielêer Met `-c`

Verskillende konfigurasielêers sal ooreenstemmende gidse in die `out` gids skep.

Byvoorbeeld, `.i18n/htm/main.yml` sal die `out/main` gids skep.

`dev.yml` en `main.yml` is die verstekkonfigurasies.

`dev` is die afkorting van `development` , wat die ontwikkelingsomgewing aandui, wat vir plaaslike voorskou gebruik word, en is ook die verstekkonfigurasielêer.
`ol` is die afkorting van `online` , wat die aanlyn-omgewing aandui, wat vir amptelike vrystelling gebruik word. Dit is ook die verstekkonfigurasielêer wanneer opdragreëlparameters `-n` tot `npm` gebruik word om vry te stel.

U kan ook ander konfigurasielêers skep. Gebruik `--htm_conf` op die opdragreël om die konfigurasielêernaam te spesifiseer:

byvoorbeeld:
```
i18n.site --htm_conf dist --save
```

Hier verteenwoordig `--save` die weergawenommer van die opdateringvrystelling.

## <a rel=id href="#npm" id="npm"></a> Publiseer inhoud op npmjs.com

Die publisering van inhoud [na](/i18n.site/feature#ha) [npmjs.com](//npmjs.com)

### npm Teken in & Plaas

Installeer `nodejs` , meld aan met `npm login` .

Wysig `md/.i18n/htm/main.yml` [npmjs.com](//npmjs.com) verander die waarde van [`md:`](//github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/main.yml#L7) `YOUR_NPM_PACKAGE` as jou eie `npm` pakketnaam.

Verander dan `md/.i18n/htm/main.package.json`

Begin `i18n.site --npm` of `i18n.site -n` in die `md` gids om te vertaal en te publiseer.

As jy 'n deurlopende integrasie-omgewing gebruik om te publiseer, is dit nie nodig om `nodejs` te installeer nie. Kopieer net die aangemelde en publiseringstoestemmings `~/.npmrc` na die omgewing.

As jy die pakketnaam van `v:` in `main.yml` verander, **maak asseblief seker dat jy eers `.i18n/v/main` uitvee** en dit dan publiseer.

#### Instaanbediener Gepubliseer Deur npm

As gebruikers op die vasteland van China netwerkprobleme teëkom en nie `npm` pakkette kan publiseer nie, kan hulle die omgewingsveranderlike `https_proxy` stel om die instaanbediener op te stel.

As jy aanvaar dat jou instaanbedienerpoort `7890` is, kan jy skryf:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

## Inhoud Wat Self Aangebied Word

As jy die inhoud self wil aanbied, wysig eers `md/.i18n/htm/main.yml` en verander `v: //unpkg.com/i18n.site` na jou URL-voorvoegsel, soos `v: //i18n-v.xxx.com` .

Voer die `md` gids in en hardloop

```
i18n.site --htm_conf ol --save
```

of afkorting

```
i18n.site -c ol -s
```

Stel dan die inhoud in die `md/out/main/v` -gids op na die URL-voorvoegselpad wat in `v:` gestel is.

Laastens, **konfigureer die kastyd van die pad wat eindig op `/.v` tot `1s`** , anders kan die nuut vrygestelde inhoud nie onmiddellik verkry word nie.

Die kastyd vir ander paaie kan op een jaar of meer gestel word om onnodige versoeke te verminder.

## Gasheer Inhoud Aan s3

Benewens die gebruik van jou eie bediener, is ' `CDN` ander algemene opsie om inhoud self aan te bied om `S3` + te gebruik.

Jy kan [rclone](https://rclone.org) gebruik om aan te meld by die `S3` bediener, verwys dan na en wysig die volgende skrif, en kopieer slegs die inkrementele veranderinge na `S3` vir elke vrystelling.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/main/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/main/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/main/v/.v "$s3:/$bucket/"
```

Onthou om `CDN` te konfigureer sodat die kastyd van die pad wat op `/.v` eindig, `1s` is, anders kan daar nie onmiddellik toegang tot die nuut vrygestelde inhoud verkry word nie.

## Webwerf Te Publiseer

Die webwerf kan enige plek ontplooi word [github page](https://pages.github.com) en [cloudflare page](https://pages.cloudflare.com) is goeie keuses.

Omdat die webwerf 'n [enkelbladsy-toepassingsargitektuur](https://developer.mozilla.org/docs/Glossary/SPA) gebruik, onthou om URL-paaie wat nie `. ` tot `index.html` bevat nie, te herskryf.

Die webwerf-inskrywingsbladsy hoef net een keer ontplooi te word, en dit is nie nodig om die webwerf-inskrywingsbladsy te herontplooi vir daaropvolgende inhoudopdaterings nie.

### Ontplooi Op Github-Bladsy

[Klik eers github om 'n organisasie te skep](https://github.com/account/organizations/new?plan=free) . Die volgende organisasie se naam is `i18n-demo` as 'n voorbeeld.

Skep dan pakhuis `i18n-demo.github.io` onder hierdie organisasie (vervang asseblief `i18n-demo` met die organisasienaam wat jy geskep het):

![](https://p.3ti.site/1721098657.avif)

Wanneer die inhoud in die vorige artikel gepubliseer word, is `out/main/htm` gegenereer. Voer asseblief hierdie gids in en hardloop :

```
ln -s index.html 404.html
```


Omdat `github page` nie URL-pad-herskryf ondersteun nie, `404.html` eerder gebruik.

Voer dan die volgende opdrag in die `htm` gids uit (onthou om `i18n-demo/i18n-demo.github.io.git` met jou eie pakhuisadres te vervang) :

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

### Ontplooi Op Cloudflare-Bladsy

In [cloudflare page](//pages.cloudflare.com) met `github page` , bied dit padherskrywing en is dit meer vriendelik vir die vasteland van China en is dit meer toeganklik.

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
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

Stel ook asseblief die kasreëls op, soos hieronder getoon, en stel die kasduur op een maand.

![](https://p.3ti.site/1721125111.avif)

Verander asseblief die domeinnaam wat in die tweede stap in die prentjie hierbo pas na die domeinnaam wat jy gebind het.

### Optimaliseer Webwerf-Ontplooiing Op Die Vasteland Van China

As jy beter toeganklikheidprestasie in die netwerkomgewing van die vasteland van China wil verkry, [registreer asseblief eers 'n domeinnaam](//beian.aliyun.com) .

Gebruik dan die objekberging van wolkverkopers op die vasteland van China + Ontplooi die volgende inhoud `CDN` `out/main/htm`

Jy kan edge computing gebruik om die pad te herskryf om aan te pas by enkelbladsy-toepassings Byvoorbeeld, [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) kan soos volg gekonfigureer word:

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
  // Antwoordopskrifte kan gestel word om uitvoer te ontfout, soos out.XXX = 'MSG';
})
```

![](https://p.3ti.site/1721121273.avif)

Omdat rekord `MX` en rekord `CNAME` nie saam kan bestaan nie, as jy domeinnaam-e-posse op dieselfde tyd wil ontvang, moet jy saamwerk met die [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) tot vlak `CNAME` in rekord `A` .

Daarbenewens, omdat die oorsese verkeerskoste van wolkverkopers in die vasteland van China relatief duur is, kan jy [Huawei DNS se gratis geografiese resolusie](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) en [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) se pasgemaakte domeinnaam (soos hieronder getoon) gebruik om koste te optimaliseer verkeersafleiding──Verkeersroetering in die vasteland van China Baidu Cloud `CDN` , internasionale verkeer gaan cloudflare .

![](https://p.3ti.site/1721119788.avif)

Hierdie ontplooiingsoptimeringsoplossings is meer kompleks en sal in die toekoms in aparte hoofstukke bekendgestel word.

### Generiese Domeinnaam Herleiding

As jy `i18n.site` gebruik om 'n webwerf as jou hoofwebwerf te genereer, moet jy gewoonlik pan-domein-herleiding opstel, dit wil sê, herlei toegang na `*.xxx.com` (insluitend `www.xxx.com` ) na `xxx.com` .

Hierdie vereiste kan bereik word met behulp van Alibaba Cloud `CDN` `EdgeScript` ( [Engelse dokument](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Chinese dokument](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Voeg die domeinnaam by in [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) en wys die domeinnaam `*.xxx.com` `CNAME` in Alibaba Cloud `CDN` .

![](https://p.3ti.site/1721122000.avif)

Byvoorbeeld, die pan-domein naam herleiding konfigurasie van `*.i18n.site` in die prentjie hierbo is soos volg:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

### Ontplooi Met nginx

Voeg asseblief 'n opstelling soortgelyk aan die volgende in die `server` paragraaf van nginx Verander asseblief `/root/i18n/md/out/main/htm` na die pad van jou eie projek `out/main/htm` :

```
location / {
  root  /root/i18n/md/out/main/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

## Gebaseer Op `github action` Deurlopende Integrasie

Jy kan na die volgende verwys om jou `github action` op te stel:

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

Soos in die konfigurasie gesien kan word, word hierdie werkvloei geaktiveer wanneer na tak `main` en tak `dist` gedruk word.

Die werkvloei sal die konfigurasielêer wat ooreenstem met die taknaam gebruik om die dokument te publiseer. Hier sal `.i18n/htm/main.yml` en `.i18n/htm/dist.yml` onderskeidelik as die publiseringkonfigurasie gebruik word.

Ons beveel die volgende beste praktyke vir die dokumentvrystellingsproses aan:

Wanneer veranderinge na tak `main` gedruk word, word die dokument geaktiveer om gebou en ontplooi te word na die voorskoustasie (die voorskoustasie is beskikbaar [github page](//pages.github.com) ).

Nadat bevestig is dat die dokument korrek is op die voorskou-werf, sal die kode saamgevoeg word en na tak `dist` gedruk word, en die amptelike bou en ontplooiing sal aanlyn gaan.

Natuurlik vereis die implementering van bogenoemde proses die skryf van meer konfigurasies.

Jy kan verwys na die werklike [github.com/fcdoc/doc](//github.com/fcdoc/doc/blob/main/.github/workflows/i18n.site.yml) vir werkvloei scripting.

`secrets.I18N_SITE_TOKEN` en `secrets.NPM_TOKEN` in die konfigurasie vereis dat jy geheime veranderlikes in die kodebasis opstel.

![](//p.3ti.site/1730970199.avif)

`I18N_SITE_TOKEN` [i18n.site/token](//i18n.site/token)

`NPM_TOKEN` is die publikasie-token van pakket `npm` in die opstelling Besoek [npmjs.com](//npmjs.com)

![](//p.3ti.site/1730969906.avif)


## Gidsstruktuur

### `public`

Statiese lêers van die webwerf, soos `favicon.ico` , `robots.txt` , ens.

Die ikoonlêers hier kan gegenereer word met [realfavicongenerator.net](https://realfavicongenerator.net)

### `.i18n`

Onder die `.i18n` gids is die konfigurasielêers, vertaalkas, ens. van `i18n.site` Sien die volgende hoofstuk ["Konfigurasie"](/i18n.site/conf) vir besonderhede.

### `en`

Brontaalgids, wat ooreenstem met `en` van `fromTo` in `.i18n/conf.yml` konfigurasielêer

```yaml
i18n:
  fromTo:
    en: zh
```

Verwys asseblief na die konfigurasie van vertaling [i18](/i18/use)