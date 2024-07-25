# Installige &

## Konfiguratsioonimärk

`i18n.site` `i18` [`i18`](/i18/use)

## Installige

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Demoprojekt

Alustame demoprojektiga ja õpime seda kasutama `i18n.site`

Esmalt kloonime demohoidla ja käivitame käsu järgmiselt:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Mandri-Hiina kasutajad saavad:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

Koodi baasklooni kataloogi nimi peab olema `md` `demo.i18n.site` hõlbustada `docker` kohalikku eelvaadet.

### Tõlkida

Esmalt `md` kataloog ja käivitage `i18n.site` , mis tõlgib `en` `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Pärast käivitamist luuakse tõlke- ja vahemälufailid. Ärge unustage lisada need hoidlasse `git add . ` `md`

### Kohalik Eelvaade

Installige ja `docker` ( `MAC` soovitavad kasutada `docker` käitusajaks [orbstack](https://orbstack.dev) ).

Seejärel sisestage `docker` ja käivitage `./up.sh` ning seejärel külastage kohaliku eelvaate kuvamiseks [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Postitage Sisu

Võtab kasutusele [ühelehelise rakenduse](https://developer.mozilla.org/docs/Glossary/SPA) arhitektuuri ning veebisaidi sisenemisleht `i18n.site` veebisaidi sisu juurutatakse iseseisvalt.

Pärast ülaltoodud tõlke käivitamist luuakse `md/out/dev` `htm` ja `v` kataloogid.

Siin näitab `dev` , et see on üles ehitatud `.i18n/htm/dev.yml` põhjal.

`dev` :

`htm` all on veebisaidi sisenemise leht.

`v` sisaldab veebisaidi sisu koos versiooninumbriga.

Kohalik eelvaade kopeerib kõik failid `out/dev/v/0.1.0` olenemata versiooninumbrist.

Ametlikuks avaldamiseks kopeeritakse muudetud failid uude versiooninumbrite kataloogi.

#### Konfiguratsioonifaili Määramiseks Kasutage -c

Erinevad konfiguratsioonifailid loovad vastavad kataloogid kataloogi `out`

Näiteks `.i18n/htm/ol.yml` loob kataloogi `out/ol` .

`dev.yml` ja `ol.yml` on vaikekonfiguratsioonid.

`dev` on lühend `development` , mis tähistab arenduskeskkonda, kasutatakse kohalikuks eelvaateks ja on ka vaikekonfiguratsioonifail.
on lühend `online` , mis tähistab võrgukeskkonda, mida kasutatakse ametlikuks väljalaskmiseks ja see on ka vaikimisi konfiguratsioonifail `ol` kui avaldatakse `npm` kasutades käsureaparameetrit `-n` .

Konfiguratsioonifaili nime määramiseks `--htm_conf` luua ka muid konfiguratsioonifaile.

näiteks:
```
i18n.site --htm_conf yourConfig --save
```

`--save` tähistab värskenduse versiooni numbrit.

#### <a rel=id href="#npm" id="npm"></a> Avaldage sisu saidil npmjs.com

Soovitatav vaikelahendus on sisu avaldamine saidil [npmjs.com](//npmjs.com) (vt [Esiosa kõrge saadavus](/i18n.site/feature#ha) ).

##### npm login &

Installige `nodejs` kasutage sisselogimiseks `npm login` .

Redigeeri `md/.i18n/htm/ol.yml` muutke `i18n.site` in `v: //unpkg.com/i18n.site` enda omaks `npm` paketi nimi.

Kasutage lihtsalt vaba paketi nime [npmjs.com](//npmjs.com) Veebisaidi domeeninime kasutamine paketi nimena on hea valik.

`v:` `npm` **`//unpkg.com/`** `i18n.site` `/.v`

Tõlkimiseks ja avaldamiseks käivitage `md` `i18n.site --npm` või `i18n.site -n` .

Kui kasutate avaldamiseks pidevat integratsioonikeskkonda, pole vaja seda installida `nodejs` Lihtsalt kopeerige sisselogitud ja avaldatud luba `~/.npmrc` keskkonda.

Kui muudate paketi nime `ol.yml` `v:` , **kustutage see kindlasti `.i18n/v/ol`** ja seejärel avaldage see.

##### Puhverserveri Avaldas npm

Kui Mandri-Hiina kasutajatel tekib võrguprobleeme ja nad ei saa `npm` avaldada, saavad nad puhverserveri konfigureerimiseks määrata keskkonnamuutuja `https_proxy` .

Eeldades, et teie puhverserveri port on `7890` võite kirjutada:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Ise Hostitud Sisu

Kui soovite sisu ise hostida, `v: //unpkg.com/i18n.site` esmalt URL-i eesliidet, näiteks `v: //i18n-v.xxx.com` `md/.i18n/htm/ol.yml`

`md` kataloog ja käivitage

```
i18n.site --htm_conf ol --save
```

või lühend

```
i18n.site -c ol -s
```

Seejärel konfigureerige `md/out/ol/v` sisu URL-i eesliite teele, mis on määratud numbriga `v:` .

Lõpuks **konfigureerige numbriga `1s` lõppeva `/.v` vahemälu aeg** , vastasel juhul ei pääse äsja avaldatud sisule kohe juurde.

Muude teede vahemäluajaks saab määrata ühe aasta või rohkem, et vähendada tarbetuid päringuid.

##### Hosti Sisu S3-Sse

Sisu ise hostimiseks `CDN` lisaks oma serveri kasutamisele + üks levinud võimalus kasutada `S3`

`S3` `S3` [rclone](https://rclone.org)

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Ärge unustage konfigureerida `CDN` et numbriga `/.v` lõppeva tee vahemälu aeg oleks `1s` , vastasel juhul ei pääse te äsja avaldatud sisule kohe juurde.

### Avaldada Veebisait

Veebisaiti saab juurutada kõikjal [github page](https://pages.github.com) ja [cloudflare page](https://pages.cloudflare.com) on head valikud.

Kuna veebisait kasutab [ühelehelise rakenduse](https://developer.mozilla.org/docs/Glossary/SPA) arhitektuuri, pidage meeles, et kirjutage URL-i tee, mis ei sisalda `. ` ümber numbriks `index.html` !

Veebisaidi sisestuslehte tuleb juurutada vaid üks kord ja järgnevate sisuvärskenduste jaoks pole vaja veebisaidi sisestuslehte ümber paigutada.

#### Juurutage Githubi Lehel

[Organisatsiooni loomiseks klõpsake github](https://github.com/account/organizations/new?plan=free) `i18n-demo`

Seejärel looge selle `i18n-demo.github.io` alla ladu (asendage `i18n-demo` enda loodud organisatsiooni nimega):

<img alt="" src="https://p.3ti.site/1721098657.avif">

Eelmise artikli sisu avaldamisel on see loodud `out/ol/htm` Palun sisestage see kataloog ja käivitage :

```
ln -s index.html 404.html
```


Kuna `github page` ei toeta URL-i tee ümberkirjutamist, kasutatakse selle asemel `404.html` .

Seejärel käivitage kataloogis `htm` käsk (pidage meeles, et `i18n-demo/i18n-demo.github.io.git` asendage oma lao aadressiga) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Pärast koodi vajutamist oodake, kuni `github page`

<img src="//p.3ti.site/1721116586.avif" width="350px">

Demo lehe vaatamiseks vaadake:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Juurutage Cloudflare'i Lehel

Võrreldes rakendusega [cloudflare page](//pages.cloudflare.com) `github page` on see Mandri-Hiina jaoks sõbralikum ja seda on soovitatav kasutada.

Juurutamine põhineb tavaliselt ülaltoodud `github page` kasutuselevõtul `cloudflare page`

Koostage projekt ja siduge `i18n-demo.github.io` ladu.

Protsess on näidatud alloleval joonisel:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

Klõpsake `Add Account` et anda juurdepääs `i18n-demo` .

Kui olete sidunud teise organisatsiooni lao, peate võib `Add Account` olla kaks korda klõpsama, et see kaks korda autoriseerida, enne kui uus organisatsioon kuvatakse.

<img alt="" src="https://p.3ti.site/1721118306.avif">

Järgmisena valige `i18n-demo.github.io` , seejärel klõpsake nuppu `Begin setup` ja kasutage järgmiste sammude jaoks vaikeväärtusi.

<img alt="" src="https://p.3ti.site/1721118490.avif">

Pärast esmakordset sidumist peate mõne minuti ootama, enne kui sellele juurde pääsete.

Pärast juurutamist saate siduda kohandatud domeeninime.

<img alt="" src="https://p.3ti.site/1721119459.avif">

Pärast kohandatud domeeninime sidumist minge domeeninime juurde, et konfigureerida ühelehelise rakenduse tee ümberkirjutamine, nagu allpool näidatud:

<img alt="" src="https://p.3ti.site/1721119320.avif">

Ülaloleval pildil olevad reeglid on järgmised. `i18n.site` alloleval esimesel real teiega seotud domeeninimega.

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

Lisaks konfigureerige vahemälu reeglid, nagu allpool näidatud, ja määrake vahemälu kestuseks üks kuu.

<img alt="" src="https://p.3ti.site/1721125111.avif">

Palun muutke ülaltoodud pildi teises etapis sobiv domeeninimi seotud domeeninimega.

#### Veebisaidi Juurutamise Optimeerimine Mandri-Hiinas

Kui soovite Mandri-Hiina võrgukeskkonnas paremat juurdepääsetavust saavutada, [registreerige esmalt domeeninimi](//beian.aliyun.com) .

Seejärel kasutage Mandri-Hiinas asuvate pilvemüüjate objektide salvestust + Kasutage `out/ol/htm` sisu `CDN`

Saate kasutada servaarvutust, et kirjutada ümber, et kohaneda üheleheliste rakendustega, nagu [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) Seda saab konfigureerida järgmiselt.

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

`MX` kirjed ja `CNAME` kirjed ei saa samaaegselt vastu võtta, peate tegema `CNAME` `A` [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten)

Lisaks, kuna Mandri-Hiina pilvemüüjate välised liiklustasud on suhteliselt kallid, saate kulude optimeerimiseks kasutada [Huawei DNS tasuta geograafilist eraldusvõimet](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) ja [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) kohandatud domeeninime (nagu allpool näidatud). liikluse ümbersuunamine──Liiklus Mandri-Hiinas Baidu Cloud `CDN` rahvusvaheline liiklus läheb cloudflare .

<img alt="" src="https://p.3ti.site/1721119788.avif">

Need juurutamise optimeerimise lahendused on keerukamad ja neid tutvustatakse tulevikus eraldi peatükkidena.

#### Üldine Domeeninime Ümbersuunamine

Kui kasutate `xxx.com` loomiseks `*.xxx.com` peamise `www.xxx.com` `i18n.site`

Seda nõuet saab täita Alibaba `CDN` `EdgeScript` ( [ingliskeelne dokument](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [hiina dokument](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ) abil.

Lisage [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) domeeninimi ja suunake `*.xxx.com` Alibaba Cloud `CDN` `CNAME` .

<img alt="" src="https://p.3ti.site/1721122000.avif">

Näiteks ülaltoodud pildil on domeeninime ümbersuunamise `*.i18n.site` järgmine:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### Juurutage Koos Nginxiga

Palun lisage konfiguratsioon, mis on sarnane järgmisega `server` nginx kus `/root/i18n/md/out/ol/htm` palun muutke see oma projekti `out/ol/htm` teeks:

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Kataloogi Struktuur

#### Avalik

Veebisaidi staatilised failid, nagu `favicon.ico` `robots.txt` jne.

Siin olevaid ikoonifaile saab luua rakendusega [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n

`.i18n` all on `i18n.site` konfiguratsioonifailid, tõlke vahemälu jne. Täpsemat teavet leiate järgmisest peatükist ["Konfiguratsioon"](/i18n.site/conf) .

#### Et

Lähtekeele kataloog, mis `.i18n/conf.yml` `fromTo` `en` konfiguratsioonifailis

```yaml
i18n:
  fromTo:
    en: zh
```

Palun vaadake tõlke konfiguratsiooni [i18](/i18/use)

