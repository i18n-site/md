# Namesti &

## Konfiguracijski Žeton

`i18n.site` Orodje za `i18` je vdelano, prosimo [, kliknite `i18` , če želite konfigurirati žeton za dostop](/i18/use) .

## Namestite

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Demo Projekt

Začnimo s predstavitvenim projektom in se naučimo uporabljati `i18n.site`

Najprej kloniramo demo repozitorij in zaženemo ukaz na naslednji način:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Uporabniki v celinski Kitajski lahko:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

Ime imenika klona kode mora biti `md` za lažji lokalni predogled z `docker` `demo.i18n.site`

### Prevesti

Najprej vnesite imenik `md` in zaženite `i18n.site` , ki bo prevedel `en` v `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Po zagonu bodo ustvarjene datoteke prevoda in predpomnilnika, ne pozabite jih dodati v `git add . ` v imeniku `md`

### Lokalni Predogled

Namestite in zaženite `docker` ( `MAC` priporočajo uporabo [orbstack](https://orbstack.dev) kot čas izvajanja `docker` ).

Nato vnesite imenik `docker` in zaženite `./up.sh` ter obiščite lokalno predogled [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Objavite Vsebino

`i18n.site` [enostransko aplikacijsko](https://developer.mozilla.org/docs/Glossary/SPA) arhitekturo, vstopna stran spletnega mesta in vsebina spletnega mesta pa sta nameščeni neodvisno.

Po zagonu zgornjega prevoda bosta imenika `htm` in `v` ustvarjena v imeniku `md/out/dev`

Tukaj `dev` označuje, da je zgrajen na podlagi `.i18n/htm/dev.yml` datoteke.

Pod : `dev`

`htm` Pod imenikom je vstopna stran spletnega mesta.

`v` vsebuje vsebino spletne strani s številko različice.

Lokalni predogled bo kopiral vse datoteke v imenik `out/dev/v/0.1.0` , ne glede na številko različice.

Za uradno izdajo bodo spremenjene datoteke kopirane v imenik številk nove različice.

#### Uporabite -C, Da Določite Konfiguracijsko Datoteko

Različne konfiguracijske datoteke bodo ustvarile ustrezne imenike pod imenikom `out`

Na primer, `.i18n/htm/ol.yml` bo ustvaril imenik `out/ol` .

`dev.yml` in `ol.yml` sta privzeti konfiguraciji.

`dev` je okrajšava `development` , ki predstavlja razvojno okolje, uporablja se za lokalni predogled in je tudi privzeta konfiguracijska datoteka.
`ol` je okrajšava `online` , ki predstavlja spletno okolje, uporablja se za uradno izdajo in je tudi privzeta konfiguracijska datoteka pri objavljanju v `npm` z uporabo parametra ukazne vrstice `-n` .

V ukazni vrstici lahko ustvarite `--htm_conf` druge konfiguracijske datoteke:

na primer:
```
i18n.site --htm_conf yourConfig --save
```

Tukaj `--save` označuje številko različice posodobitve.

#### <a rel=id href="#npm" id="npm"></a> Objavite vsebino na npmjs.com

Objavljanje vsebine [npmjs.com](//npmjs.com) priporočeni privzeti rešitvi (glejte [Front-end High Availability](/i18n.site/feature#ha) ).

##### npm login & Sprostitev

Namestite `nodejs` za prijavo uporabite `npm login` .

Uredite `md/.i18n/htm/ol.yml` spremenite `i18n.site` v `v: //unpkg.com/i18n.site` v svoje `npm` ime paketa.

[npmjs.com](//npmjs.com) ime nezasedenega paketa je dobra izbira.

Ko objavljate na podlagi paketa `npm` , **obvezno uporabite `//unpkg.com/`** predpono vrednosti `v:` . Čas predpomnilnika `i18n.site` pod to potjo predpone `/.v` je bil posebej optimiziran, da omogoča pravočasen ogled novih izdaj.

Zaženite `i18n.site --npm` ali `i18n.site -n` v `md` za prevod in objavo.

Če za objavo uporabljate stalno integracijsko okolje, ga ni treba namestiti `nodejs` Preprosto kopirajte prijavljeno in objavljeno dovoljenje `~/.npmrc` v okolje.

Če spremenite ime paketa v `v:` v `ol.yml` , **najprej izbrišite `.i18n/v/ol`** in ga nato objavite.

##### Proxy Strežnik, Ki Ga Je Objavil npm

Če uporabniki na celinski Kitajski naletijo na težave z omrežjem in ne morejo objaviti paketa `npm` , lahko nastavijo spremenljivko okolja `https_proxy` za konfiguracijo strežnika proxy.

Ob predpostavki, da so vrata vašega strežnika proxy `7890` lahko napišete:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Vsebina, Ki Jo Gosti Sam

Če želite sami gostiti vsebino, `md/.i18n/htm/ol.yml` spremenite `v: //unpkg.com/i18n.site` v predpono URL-ja, na primer `v: //i18n-v.xxx.com` .

Vnesite imenik `md` in zaženite

```
i18n.site --htm_conf ol --save
```

ali okrajšava

```
i18n.site -c ol -s
```

Nato konfigurirajte vsebino v `md/out/ol/v` na pot predpone URL, nastavljeno v `v:` .

Končno **konfigurirajte čas predpomnilnika poti, ki `/.v` konča z `1s`** , sicer do novo izdane vsebine ni mogoče dostopati takoj.

Čas predpomnilnika za druge poti je mogoče nastaviti na eno leto ali več, da zmanjšate nepotrebne zahteve.

##### Gostovanje Vsebine Na s3

Za samostojno gostovanje vsebine `CDN` poleg uporabe lastnega strežnika + ena pogosta možnost `S3`

Uporabite lahko strežnik [rclone](https://rclone.org) Login `S3` , nato pa se obrnite na spodnji skript in `S3` ob vsaki objavi kopirajte le postopne spremembe.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Ne pozabite konfigurirati `CDN` tako da je čas predpomnilnika poti, ki se konča z `/.v` , `1s` , sicer ne boste mogli takoj dostopati do novo izdane vsebine.

### Objavi Spletno Stran

Spletno mesto je mogoče namestiti kjer koli [github page](https://pages.github.com) in [cloudflare page](https://pages.cloudflare.com) sta dobra izbira.

Ker spletno mesto uporablja arhitekturo [enostranske aplikacije](https://developer.mozilla.org/docs/Glossary/SPA) , ne pozabite prepisati poti URL- `index.html` `. `

Vstopno stran spletnega mesta je treba razmestiti samo enkrat in vstopne strani spletnega mesta ni treba znova namestiti za nadaljnje posodobitve vsebine.

#### Razmesti Na Strani github

Najprej [kliknite tukaj github](https://github.com/account/organizations/new?plan=free) Naslednje ime organizacije je `i18n-demo`

Nato ustvarite skladišče pod to `i18n-demo.github.io` ( `i18n-demo` zamenjajte z imenom organizacije, ki ste jo ustvarili):

<img alt="" src="https://p.3ti.site/1721098657.avif">

Ob objavi vsebine v prejšnjem članku je bila ustvarjena `out/ol/htm` Prosimo, vnesite ta imenik in zaženite :

```
ln -s index.html 404.html
```


Ker `github page` ne podpira prepisovanja URL poti, se namesto tega uporablja `404.html` .

Nato zaženite naslednji ukaz v `htm` (ne pozabite zamenjati `i18n-demo/i18n-demo.github.io.git` s svojim naslovom skladišča) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Ko potisnete kodo, počakajte, da se uspešno izvede uvedba `github page` (kot je prikazano spodaj), nato pa lahko dostopate do nje.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Za predstavitveno stran si oglejte:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Namestitev Na Strani cloudflare

V [cloudflare page](//pages.cloudflare.com) z `github page` omogoča prepisovanje poti in je bolj dostopen za uporabo.

`cloudflare page` Uvajanje običajno temelji na uvajanju `github page` zgoraj.

Ustvarite projekt in povežite zgoraj `i18n-demo.github.io` skladišče.

Postopek je prikazan na spodnji sliki:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

Prosimo, kliknite `Add Account` , da omogočite dostop do `i18n-demo` .

Če ste vezali skladišče druge organizacije, boste morda morali dvakrat klikniti `Add Account` , da jo potrdite, preden se prikaže nova organizacija.

<img alt="" src="https://p.3ti.site/1721118306.avif">

Nato izberite `i18n-demo.github.io` Warehouse, nato kliknite `Begin setup` in uporabite privzete vrednosti za nadaljnje korake.

<img alt="" src="https://p.3ti.site/1721118490.avif">

Po prvi vezavi morate počakati nekaj minut, preden lahko dostopate do nje.

Po uvedbi lahko povežete ime domene po meri.

<img alt="" src="https://p.3ti.site/1721119459.avif">

Ko povežete ime domene po meri, pojdite na ime domene, da konfigurirate prepisovanje poti enostranske aplikacije, kot je prikazano spodaj:

<img alt="" src="https://p.3ti.site/1721119320.avif">

Pravila na zgornji sliki so `i18n.site` v prvi vrstici spodaj z imenom domene, vezanim na vas.

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

Poleg tega konfigurirajte pravila predpomnilnika, kot je prikazano spodaj, in nastavite trajanje predpomnilnika na en mesec.

<img alt="" src="https://p.3ti.site/1721125111.avif">

Spremenite ime domene, ki se ujema v drugem koraku na zgornji sliki, z imenom domene, ki ste ga vezali.

#### Optimiziranje Postavitve Spletnega Mesta Na Celinski Kitajski

Če želite doseči boljšo zmogljivost dostopnosti v omrežnem okolju celinske Kitajske, najprej [registrirajte ime domene](//beian.aliyun.com) .

Nato uporabite shrambo objektov ponudnikov `CDN` oblaku na `out/ol/htm` Kitajski +

Uporabite lahko robno računalništvo, da prepišete pot za prilagoditev enostranskim aplikacijam, kot je [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html)

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

Ker zapisi `MX` in `CNAME` zapisi ne morejo sočasno obstajati, morate sodelovati s skriptom [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) , da zravnate `CNAME` v `A` zapis.

Poleg tega, ker so stroški čezmorskega prometa prodajalcev oblakov na celinski Kitajski razmeroma dragi, lahko, če želite optimizirati stroške, uporabite [brezplačno geografsko DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) in ime domene po meri [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (kot je prikazano spodaj). preusmeritev prometa──Promet v celinski Kitajski Baidu Cloud `CDN` mednarodni promet poteka cloudflare .

<img alt="" src="https://p.3ti.site/1721119788.avif">

Te rešitve za optimizacijo uvajanja so bolj zapletene in bodo v prihodnosti predstavljene v ločenih poglavjih.

#### Generična Preusmeritev Imena Domene

Če kot glavno spletno mesto uporabljate `i18n.site` , morate običajno konfigurirati preusmeritev po vsej domeni, to je preusmeritev `*.xxx.com` (vključno z `www.xxx.com` ) dostopa do `xxx.com` .

To zahtevo je mogoče doseči s pomočjo Alibaba Cloud `CDN` `EdgeScript` ( [angleški dokument](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [kitajski dokument](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Dodajte ime domene v [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) in usmerite `*.xxx.com` domene na `CNAME` Alibaba Cloud `CDN` .

<img alt="" src="https://p.3ti.site/1721122000.avif">

Na primer, konfiguracija preusmeritve imena vse `*.i18n.site` na zgornji sliki je naslednja:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### Namestite Z Nginxom

Dodajte konfiguracijo, podobno naslednji v `server` nginx kjer `/root/i18n/md/out/ol/htm` jo spremenite v pot svojega projekta `out/ol/htm` :

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Struktura Imenika

#### Javnosti

Statične datoteke spletne strani, kot so `favicon.ico` `robots.txt` itd.

Datoteke z ikonami lahko ustvarite z [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n

`.i18n` Pod imenikom so `i18n.site` konfiguracijske datoteke, predpomnilnik prevodov itd. Za podrobnosti glejte naslednje poglavje ["Konfiguracija"](/i18n.site/conf) .

#### en

Imenik izvornega jezika, ki `.i18n/conf.yml` `fromTo` `en` v konfiguracijski datoteki

```yaml
i18n:
  fromTo:
    en: zh
```

Prosimo, glejte konfiguracijo prevoda [i18](/i18/use)

