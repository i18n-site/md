# Instalējiet &

## Instalējiet

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Konfigurācijas Marķieris

`i18n.site` ir iebūvēts `i18` tulkošanas rīks, lūdzu [, noklikšķiniet šeit, lai skatītu `i18` dokumentu, lai konfigurētu piekļuves pilnvaru](/i18/use) .

## Demo Projekts

Sāksim ar demonstrācijas projektu, lai uzzinātu, kā lietot `i18n.site` .

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

`demo.i18n.site` koda bāzes klona direktorija nosaukumam ir jābūt `md` lai atvieglotu lokālo priekšskatījumu ar `docker` .

### Tulkot

Vispirms ievadiet `md` direktoriju un palaidiet `i18n.site` , kas pārtulkos `en` uz `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Pēc palaišanas tiks ģenerēti tulkošanas un kešatmiņas faili. Lūdzu, atcerieties tos pievienot krātuvei `md` `git add . ` .

### Vietējais Priekšskatījums

Instalējiet un sāciet `docker` ( `MAC` lietotājs iesaka izmantot [orbstack](https://orbstack.dev) kā izpildlaiku `docker` ).

Pēc tam ievadiet `docker` direktoriju un palaidiet `./up.sh` un pēc tam apmeklējiet [https://127.0.0.1](https://127.0.0.1) lai priekšskatītu lokāli.

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Izlikt Saturu

`i18n.site` izmanto [vienas lapas lietojumprogrammu](https://developer.mozilla.org/docs/Glossary/SPA) arhitektūru, un vietnes ieejas lapa un vietnes saturs tiek izvietoti neatkarīgi.

Pēc iepriekš minētā tulkojuma palaišanas `htm` un `v` direktorijs tiks ģenerēts `md/out/dev` direktorijā.

Šeit `dev` nozīmē, ka tas ir izveidots, pamatojoties uz `.i18n/htm/dev.yml` konfigurācijas failu.

`dev` direktoriju :

`htm` direktorijs ir vietnes ieejas lapa.

`v` direktorijā ir vietnes saturs ar versiju numuriem.

Vietējam priekšskatījumam nerūp versijas numurs, un visi faili tiks kopēti uz `out/dev/v/0.1.0` direktoriju.

Oficiālai izlaišanai mainītie faili tiks kopēti jaunā versijas numuru direktorijā.

#### Norādiet Konfigurācijas Failu Ar `-c`

Dažādi konfigurācijas faili izveidos atbilstošus direktorijus `out` direktorijā.

Piemēram, `.i18n/htm/ol.yml` izveidos direktoriju `out/ol` .

`dev.yml` un `ol.yml` ir noklusējuma konfigurācijas.

`dev` ir `development` saīsinājums, kas norāda izstrādes vidi, ko izmanto lokālajam priekšskatījumam, un tas ir arī noklusējuma konfigurācijas fails.
`ol` ir saīsinājums no `online` , kas norāda uz tiešsaistes vidi, kas tiek izmantota oficiālai izlaišanai. Tas ir arī noklusējuma konfigurācijas fails, kad izlaišanai tiek izmantoti komandrindas parametri `-n` līdz `npm` .

Varat arī izveidot citus konfigurācijas failus. Komandrindā izmantojiet `--htm_conf` , lai norādītu izmantojamā konfigurācijas faila nosaukumu.

piemēram:
```
i18n.site --htm_conf yourConfig --save
```

Šeit `--save` apzīmē atjaunināšanas laidiena versijas numuru.

#### <a rel=id href="#npm" id="npm"></a> Publicējiet saturu vietnē npmjs.com

Ieteicamais noklusējuma risinājums ir satura publicēšana [vietnē](/i18n.site/feature#ha) [npmjs.com](//npmjs.com)

##### npm login &

Instalējiet `nodejs` , piesakieties ar `npm login` .

Rediģējiet `md/.i18n/htm/ol.yml` un mainiet vērtību [`md:`](//github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/ol.yml#L7) `YOUR_NPM_PACKAGE` [npmjs.com](//npmjs.com) savu `npm` pakotnes nosaukumu.

Pēc tam mainiet `md/.i18n/htm/ol.package.json`

Palaidiet `i18n.site --npm` vai `i18n.site -n` direktorijā `md` , lai tulkotu un publicētu.

Ja publicēšanai izmantojat nepārtrauktas integrācijas vidi, nav jāinstalē `nodejs` , vienkārši nokopējiet vidē reģistrēto un publicēšanas atļauju `~/.npmrc` .

Ja modificējat pakotnes nosaukumu `v:` no `ol.yml` , **lūdzu, vispirms izdzēsiet `.i18n/v/ol`** un pēc tam publicējiet to.

##### Starpniekserveri Publicēja npm

Ja lietotāji kontinentālajā Ķīnā saskaras ar tīkla problēmām un nevar publicēt `npm` pakotnes, viņi var iestatīt vides mainīgo `https_proxy` lai konfigurētu starpniekserveri.

Pieņemot, ka jūsu starpniekservera ports ir `7890` , varat rakstīt:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Pašmitināts Saturs

Ja vēlaties pats mitināt saturu, vispirms rediģējiet `md/.i18n/htm/ol.yml` un mainiet `v: //unpkg.com/i18n.site` uz URL prefiksu, piemēram, `v: //i18n-v.xxx.com` .

Ievadiet `md` direktoriju un palaidiet

```
i18n.site --htm_conf ol --save
```

vai saīsinājums

```
i18n.site -c ol -s
```

Pēc tam konfigurējiet saturu direktorijā `md/out/ol/v` uz URL prefiksa ceļu, kas iestatīts `v:` .

Visbeidzot, **konfigurējiet kešatmiņas laiku ceļam, kas beidzas ar `/.v` līdz `1s`** , pretējā gadījumā tikko izlaistajam saturam nevarēs uzreiz piekļūt.

Citu ceļu kešatmiņas laiku var iestatīt uz vienu gadu vai ilgāk, lai samazinātu nevajadzīgus pieprasījumus.

##### Mitināt Saturu Uz s3

Lai pašam mitinātu saturu, papildus sava servera izmantošanai vēl `CDN` izplatīta iespēja ir izmantot `S3` +

Varat izmantot [rclone](https://rclone.org) lai pieteiktos `S3` serverī, pēc tam skatīt un modificēt šo skriptu un kopēt tikai pakāpeniskās izmaiņas uz `S3` katram laidienam.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Atcerieties konfigurēt `CDN` , lai ceļa, kas beidzas ar `/.v` kešatmiņas laiks būtu `1s` , pretējā gadījumā tikko izlaistajam saturam nevar piekļūt uzreiz.

### Publicēt Vietni

Vietni var izvietot jebkur [github page](https://pages.github.com) un [cloudflare page](https://pages.cloudflare.com) ir laba izvēle.

Tā kā vietne izmanto [vienas lapas lietojumprogrammu](https://developer.mozilla.org/docs/Glossary/SPA) arhitektūru, neaizmirstiet pārrakstīt URL ceļus, kas nesatur `. ` līdz `index.html` .

Vietnes ievades lapa ir jāizvieto tikai vienu reizi, un nav nepieciešams atkārtoti izvietot vietnes ievades lapu, lai veiktu turpmākus satura atjauninājumus.

#### Izvietot github Lapā

Vispirms [noklikšķiniet šeit github lai izveidotu organizāciju](https://github.com/account/organizations/new?plan=free) . Tālāk norādītais organizācijas nosaukums ir `i18n-demo` .

Pēc tam šajā organizācijā izveidojiet noliktavu `i18n-demo.github.io` (lūdzu, aizstājiet `i18n-demo` ar izveidoto organizācijas nosaukumu):

![](https://p.3ti.site/1721098657.avif)

Publicējot saturu iepriekšējā rakstā, ir ģenerēts `out/ol/htm` Lūdzu, ievadiet šo direktoriju un palaidiet :

```
ln -s index.html 404.html
```


Tā kā `github page` neatbalsta URL ceļa pārrakstīšanu, tā vietā tiek izmantots `404.html` .

Pēc tam palaidiet šādu komandu direktorijā `htm` (neaizmirstiet aizstāt `i18n-demo/i18n-demo.github.io.git` ar savu noliktavas adresi) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Pēc koda nospiešanas pagaidiet, līdz `github page` izvietošana tiek veiksmīgi palaists (kā parādīts tālāk), pirms varat tam piekļūt.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Demonstrācijas lapu skatiet:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Izvietot cloudflare Lapā

[cloudflare page](//pages.cloudflare.com) ar `github page` , tas nodrošina ceļu pārrakstīšanu un ir draudzīgāks kontinentālajai Ķīnai, un to ieteicams izmantot.

`cloudflare page` izvietošana parasti balstās uz iepriekš norādīto `github page` izvietošanu.

Izveidojiet projektu un saistiet augstāk esošo `i18n-demo.github.io` noliktavu.

Process ir parādīts zemāk esošajā attēlā:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Lūdzu, noklikšķiniet uz `Add Account` , lai piešķirtu piekļuvi organizācijai `i18n-demo` .

Ja esat saistījis citas organizācijas noliktavu, iespējams, divreiz jānoklikšķina uz `Add Account` , lai divreiz autorizētu, pirms tiks parādīta jaunā organizācija.

![](https://p.3ti.site/1721118306.avif)

Pēc tam atlasiet noliktavu `i18n-demo.github.io` , pēc tam noklikšķiniet uz `Begin setup` un izmantojiet noklusējuma vērtības turpmākajām darbībām.

![](https://p.3ti.site/1721118490.avif)

Pēc pirmās iesiešanas jums ir jānogaida dažas minūtes, pirms varēsit tai piekļūt.

Pēc izvietošanas varat saistīt pielāgotu domēna nosaukumu.

![](https://p.3ti.site/1721119459.avif)

Pēc pielāgotā domēna nosaukuma saistīšanas, lūdzu, dodieties uz domēna nosaukumu, lai konfigurētu vienas lapas lietojumprogrammas ceļa pārrakstīšanu, kā parādīts tālāk:

![](https://p.3ti.site/1721119320.avif)

Augšējā attēlā ir šādi noteikumi, lūdzu, nomainiet `i18n.site` pirmajā rindā ar jūsu piesaistīto domēna nosaukumu.

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

Turklāt, lūdzu, konfigurējiet kešatmiņas noteikumus, kā parādīts tālāk, un iestatiet kešatmiņas ilgumu uz vienu mēnesi.

![](https://p.3ti.site/1721125111.avif)

Lūdzu, mainiet domēna nosaukumu, kas atbilst augšējā attēla otrajā darbībā, uz jūsu piesaistīto domēna nosaukumu.

#### Vietņu Izvietošanas Optimizēšana Kontinentālajā Ķīnā

Ja vēlaties iegūt labāku pieejamības veiktspēju kontinentālās Ķīnas tīkla vidē, lūdzu, vispirms [reģistrējiet domēna nosaukumu](//beian.aliyun.com) .

Pēc tam izmantojiet kontinentālās + mākoņpakalpojumu sniedzēju objektu krātuvi `CDN` Izvietojiet šādu saturu `out/ol/htm` .

Varat izmantot malu skaitļošanu, lai pārrakstītu ceļu, lai pielāgotos vienas lapas lietojumprogrammām. Piemēram, [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) var konfigurēt šādi.

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

Tā kā ieraksts `MX` un ieraksts `CNAME` nevar pastāvēt vienlaikus, ja vēlaties vienlaikus saņemt e-pasta ziņojumus ar domēna nosaukumu, jums ir jāsadarbojas ar [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) , lai `CNAME` līmeni iegūtu `A` ierakstu.

Turklāt, tā kā mākoņdatošanas pakalpojumu sniedzēju ārzemju maksas kontinentālajā Ķīnā ir salīdzinoši dārgas, ja vēlaties optimizēt izmaksas, varat izmantot [Huawei DNS bezmaksas ģeogrāfisko izšķirtspēju](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) un [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) pielāgoto domēna nosaukumu (kā parādīts tālāk). satiksmes novirzīšana──Satiksme kontinentālajā Ķīnā Baidu Cloud `CDN` , starptautiskā satiksme notiek cloudflare .

![](https://p.3ti.site/1721119788.avif)

Šie izvietošanas optimizācijas risinājumi ir sarežģītāki, un nākotnē tie tiks ieviesti atsevišķās nodaļās.

#### Vispārēja Domēna Vārda Novirzīšana

Ja izmantojat `i18n.site` , lai ģenerētu vietni kā galveno vietni, jums parasti ir jākonfigurē visas domēna novirzīšana, tas ir, jānovirza piekļuve uz `*.xxx.com` (tostarp `www.xxx.com` ) uz `xxx.com` .

Šo prasību var izpildīt ar Alibaba Cloud `CDN` `EdgeScript` ( [angļu valodas dokuments](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [ķīniešu dokuments](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ) palīdzību .

Pievienojiet domēna nosaukumu [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) un norādiet domēna nosaukumu `*.xxx.com` `CNAME` pakalpojumā Alibaba Cloud `CDN` .

![](https://p.3ti.site/1721122000.avif)

Piemēram, visas domēna nosaukuma novirzīšanas konfigurācija `*.i18n.site` attēlā iepriekš ir šāda:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

#### Izvietot Ar nginx

`server` `/root/i18n/md/out/ol/htm` nginx `out/ol/htm`

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

#### `public`

Vietnes statiskie faili, piemēram, `favicon.ico` , `robots.txt` utt.

Šeit esošos ikonu failus var ģenerēt ar [realfavicongenerator.net](https://realfavicongenerator.net)

#### `.i18n`

`.i18n` direktorijā atrodas `i18n.site` konfigurācijas faili, tulkošanas kešatmiņa utt. Sīkāku informāciju skatiet nākamajā nodaļā ["Konfigurācija"](/i18n.site/conf) .

#### `en`

Avotvalodas direktorijs, kas atbilst `en` no `fromTo` in `.i18n/conf.yml` konfigurācijas failam

```yaml
i18n:
  fromTo:
    en: zh
```

Lūdzu, skatiet tulkojuma konfigurāciju [i18](/i18/use)