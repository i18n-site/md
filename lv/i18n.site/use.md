# Instalējiet &

## Konfigurācijas Marķieris

`i18n.site` `i18` [`i18`](/i18/use)

## Uzstādīt

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Demo Projekts

Sāksim ar demonstrācijas projektu un iemācīsimies lietot `i18n.site`

Vispirms mēs klonējam demonstrācijas repozitoriju un palaižam komandu šādi:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Lietotāji kontinentālajā Ķīnā var:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

Koda bāzes klona direktorija nosaukumam ir jābūt `md` `demo.i18n.site` lai atvieglotu lokālo priekšskatījumu ar `docker` .

### Tulkot

Vispirms ievadiet `md` un palaidiet `i18n.site` , kas pārtulkos `en` uz `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Pēc palaišanas tiks ģenerēti tulkošanas un kešatmiņas faili. Lūdzu, atcerieties tos pievienot repozitorijai `git add . ` `md` .

### Vietējais Priekšskatījums

Instalējiet un `docker` ( `MAC` iesaka izmantot [orbstack](https://orbstack.dev) kā `docker` izpildlaiku).

Pēc tam ievadiet `docker` un palaidiet `./up.sh` un pēc tam apmeklējiet [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Izlikt Saturu

`i18n.site` [vienas lapas lietojumprogrammu](https://developer.mozilla.org/docs/Glossary/SPA) arhitektūru, un vietnes ieejas lapa un vietnes saturs tiek izvietoti neatkarīgi.

Pēc iepriekš minētā tulkojuma izpildes `md/out/dev` tiks ģenerēti `htm` un `v` katalogi.

Šeit `dev` norāda, ka tas ir izveidots, pamatojoties uz `.i18n/htm/dev.yml` failu.

Zem : `dev`

`htm` direktorija ir vietnes ieejas lapa.

`v` satur vietnes saturu ar versijas numuru.

Vietējais priekšskatījums kopēs visus failus uz `out/dev/v/0.1.0` neatkarīgi no versijas numura.

Oficiālai izlaišanai mainītie faili tiks kopēti uz jauno versijas numuru direktoriju.

#### Izmantojiet -C, Lai Norādītu Konfigurācijas Failu

Dažādi konfigurācijas faili izveidos atbilstošus direktorijus direktorijā `out`

Piemēram, `.i18n/htm/ol.yml` izveidos `out/ol` direktoriju.

`dev.yml` un `ol.yml` ir noklusējuma konfigurācijas.

`dev` ir saīsinājums no `development` , kas apzīmē izstrādes vidi, tiek izmantots lokālajam priekšskatījumam un ir arī noklusējuma konfigurācijas fails.
`ol` ir saīsinājums no `online` , kas apzīmē tiešsaistes vidi, tiek izmantots oficiālai izlaišanai, un tas ir arī noklusējuma konfigurācijas fails, publicējot `npm` izmantojot komandrindas parametru `-n` .

`--htm_conf` arī izveidot citus konfigurācijas failus, lai norādītu konfigurācijas faila nosaukumu.

piemēram:
```
i18n.site --htm_conf yourConfig --save
```

`--save` norāda atjaunināšanas versijas numuru.

#### <a rel=id href="#npm" id="npm"></a> Publicējiet saturu vietnē npmjs.com

Ieteicamais [noklusējuma](/i18n.site/feature#ha) risinājums ir satura publicēšana vietnē [npmjs.com](//npmjs.com)

##### npm login &

Instalējiet `nodejs` izmantojiet `npm login` lai pieteiktos.

Rediģēt `md/.i18n/htm/ol.yml` mainiet `i18n.site` in `v: //unpkg.com/i18n.site` uz savu `npm` pakotnes nosaukums.

[npmjs.com](//npmjs.com) izmantojiet neaizņemto pakotnes nosaukumu Vietnes domēna nosaukuma izmantošana kā pakotnes nosaukums ir laba izvēle.

`i18n.site` **`//unpkg.com/`** `/.v` `v:` `npm`

Palaidiet `i18n.site --npm` vai `i18n.site -n` `md` , lai tulkotu un publicētu.

Ja publicēšanai izmantojat nepārtrauktas integrācijas vidi, tā nav jāinstalē `nodejs` Vienkārši nokopējiet vidē reģistrēto un publicēto `~/.npmrc` .

Ja modificējat pakotnes nosaukumu `ol.yml` `v:` , lūdzu **, vispirms izdzēsiet `.i18n/v/ol`** un pēc tam publicējiet to.

##### Starpniekserveris Publicēja npm

Ja lietotāji kontinentālajā Ķīnā saskaras ar tīkla problēmām un nevar publicēt `npm` , viņi var iestatīt vides mainīgo `https_proxy` , lai konfigurētu starpniekserveri.

Pieņemot, ka jūsu starpniekservera ports ir `7890` varat rakstīt:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Pašmitināts Saturs

Ja vēlaties pats mitināt saturu, vispirms `md/.i18n/htm/ol.yml` un mainiet `v: //unpkg.com/i18n.site` uz savu URL prefiksu, piemēram, `v: //i18n-v.xxx.com` !

Ievadiet `md` un palaidiet

```
i18n.site --htm_conf ol --save
```

vai saīsinājums

```
i18n.site -c ol -s
```

Pēc tam konfigurējiet saturu `md/out/ol/v` uz URL prefiksa ceļu, kas iestatīts `v:` .

Visbeidzot, **konfigurējiet kešatmiņas laiku ceļam `/.v` kas beidzas ar `1s`** , pretējā gadījumā tikko izlaistajam saturam nevarēs piekļūt nekavējoties.

Citu ceļu kešatmiņas laiku var iestatīt uz vienu gadu vai ilgāk, lai samazinātu nevajadzīgus pieprasījumus.

##### Mitināt Saturu Uz s3

Lai patstāvīgi mitinātu saturu, papildus sava servera izmantošanai `CDN` viena izplatīta iespēja ir + `S3`

`S3` `S3` [rclone](https://rclone.org)

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Neaizmirstiet konfigurēt `CDN` lai ceļa, kas beidzas ar `/.v` , kešatmiņas laiks būtu `1s` , pretējā gadījumā jūs nevarēsiet nekavējoties piekļūt tikko izlaistajam saturam.

### Publicēt Vietni

Vietni var izvietot jebkur [github page](https://pages.github.com) un [cloudflare page](https://pages.cloudflare.com) ir laba izvēle.

Tā kā vietne izmanto [vienas lapas lietojumprogrammas](https://developer.mozilla.org/docs/Glossary/SPA) arhitektūru, neaizmirstiet pārrakstīt URL ceļu, kas nesatur `index.html` `. `

Vietnes ievades lapa ir jāizvieto tikai vienu reizi, un nav nepieciešams atkārtoti izvietot vietnes ievades lapu, lai veiktu turpmākus satura atjauninājumus.

#### Izvietot github Lapā

Vispirms [noklikšķiniet šeit github lai izveidotu organizāciju](https://github.com/account/organizations/new?plan=free) , piemēram, šāds organizācijas nosaukums `i18n-demo`

Pēc tam izveidojiet noliktavu šajā organizācijā `i18n-demo.github.io` Lūdzu, aizstājiet `i18n-demo` ar izveidoto organizācijas nosaukumu):

<img alt="" src="https://p.3ti.site/1721098657.avif">

Publicējot saturu iepriekšējā rakstā, tas ir ģenerēts Lūdzu `out/ol/htm` ievadiet šo direktoriju un palaidiet :

```
ln -s index.html 404.html
```


Tā `github page` neatbalsta URL ceļa pārrakstīšanu, tāpēc tā vietā tiek izmantots `404.html` .

Pēc tam `htm` izpildiet šādu komandu (atcerieties aizstāt `i18n-demo/i18n-demo.github.io.git` ar savu noliktavas adresi) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Pēc koda nosūtīšanas pagaidiet, līdz `github page`

<img src="//p.3ti.site/1721116586.avif" width="350px">

Demonstrācijas lapu skatiet:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Izvietot cloudflare Lapā

Salīdzinot `github page` [cloudflare page](//pages.cloudflare.com) tas nodrošina ceļu pārrakstīšanu un ir ērtāk lietojams.

Izvietošana parasti ir balstīta uz `github page` izvietošanu `cloudflare page`

Izveidojiet projektu un saistiet iepriekš `i18n-demo.github.io` noliktavu.

Process ir parādīts zemāk esošajā attēlā:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

Lūdzu, noklikšķiniet uz `Add Account` lai piešķirtu piekļuvi `i18n-demo` organizācijai .

Ja esat saistījis citas organizācijas noliktavu, iespējams, divreiz jānoklikšķina uz `Add Account` lai to divreiz autorizētu, pirms tiks parādīta jaunā organizācija.

<img alt="" src="https://p.3ti.site/1721118306.avif">

Pēc tam atlasiet `i18n-demo.github.io` , pēc tam noklikšķiniet uz `Begin setup` un turpmākajām darbībām izmantojiet noklusējuma vērtības.

<img alt="" src="https://p.3ti.site/1721118490.avif">

Pēc pirmās iesiešanas jums ir jānogaida dažas minūtes, pirms varēsiet tai piekļūt.

Pēc izvietošanas varat saistīt pielāgotu domēna nosaukumu.

<img alt="" src="https://p.3ti.site/1721119459.avif">

Pēc pielāgotā domēna nosaukuma saistīšanas, lūdzu, dodieties uz domēna nosaukumu, lai konfigurētu vienas lapas lietojumprogrammas ceļa pārrakstīšanu, kā parādīts tālāk:

<img alt="" src="https://p.3ti.site/1721119320.avif">

Augšējā attēlā ir šādi noteikumi, lūdzu `i18n.site` aizstājiet to ar jums saistīto domēna vārdu.

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

Turklāt, lūdzu, konfigurējiet kešatmiņas noteikumus, kā parādīts tālāk, un iestatiet kešatmiņas ilgumu uz vienu mēnesi.

<img alt="" src="https://p.3ti.site/1721125111.avif">

Lūdzu, mainiet domēna nosaukumu, kas atbilst augšējā attēla otrajā darbībā, uz jūsu piesaistīto domēna nosaukumu.

#### Vietņu Izvietošanas Optimizēšana Kontinentālajā Ķīnā

Ja vēlaties iegūt labāku pieejamības veiktspēju kontinentālās Ķīnas tīkla vidē, lūdzu, vispirms [reģistrējiet domēna nosaukumu](//beian.aliyun.com) .

`out/ol/htm` tam izmantojiet mākoņpakalpojumu sniedzēju objektu krātuvi kontinentālajā `CDN` +

Varat izmantot malu skaitļošanu, lai pārrakstītu ceļu, lai pielāgotos vienas lapas lietojumprogrammām, piemēram [, Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) To var konfigurēt šādi:

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

[cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) `CNAME` `MX` `CNAME` `A`

Turklāt, tā kā mākoņdatošanas pakalpojumu sniedzēju ārzemju maksas kontinentālajā Ķīnā ir salīdzinoši dārgas, ja vēlaties optimizēt izmaksas, varat izmantot [Huawei DNS bezmaksas ģeogrāfisko izšķirtspēju](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) un [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) pielāgoto domēna nosaukumu (kā parādīts tālāk). satiksmes novirzīšana──Satiksme kontinentālajā Ķīnā Baidu Cloud `CDN` starptautiskā satiksme notiek cloudflare .

<img alt="" src="https://p.3ti.site/1721119788.avif">

Šie izvietošanas optimizācijas risinājumi ir sarežģītāki, un nākotnē tie tiks ieviesti atsevišķās nodaļās.

#### Vispārēja Domēna Vārda Novirzīšana

Ja tīmekļa `*.xxx.com` ģenerēšanai kā galveno `www.xxx.com` `xxx.com` `i18n.site`

Šo prasību var izpildīt ar Alibaba Cloud `EdgeScript` ( [angļu valodas dokuments](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [ķīniešu dokuments](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ) palīdzību `CDN`

Pievienojiet domēna nosaukumu pakalpojumā [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) un norādiet domēna `*.xxx.com` uz Alibaba Cloud `CDN` `CNAME` .

<img alt="" src="https://p.3ti.site/1721122000.avif">

Piemēram, augšējā attēlā redzamā domēna nosaukuma novirzīšanas konfigurācija ir `*.i18n.site` :

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### Izvietot Ar nginx

Lūdzu, pievienojiet konfigurāciju, kas līdzīga tālāk `server` nginx kur `/root/i18n/md/out/ol/htm` lūdzu, mainiet to uz sava projekta `out/ol/htm` ceļu:

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Direktoriju Struktūra

#### Publiski

Vietnes statiskie faili, piemēram `favicon.ico` `robots.txt` utt.

Šeit esošos ikonu failus var ģenerēt ar [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n

`.i18n` `i18n.site`[​](/i18n.site/conf)

#### Lv

Avotvalodas direktorijs, kas `.i18n/conf.yml` `fromTo` `en` konfigurācijas failā

```yaml
i18n:
  fromTo:
    en: zh
```

Lūdzu, skatiet tulkojuma konfigurāciju [i18](/i18/use)

