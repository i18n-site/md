# Gurnama &

## Sazlama Nyşany

`i18` Terjime guraly ýerleşdirildi, giriş belligini `i18n.site` [üçin `i18` resminama serediň](/i18/use) .

## Gurnama

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Demo Taslamasy

Geliň, demo taslamasyndan başlalyň we ulanmagy öwreneliň `i18n.site`

Ilki bilen demo ammaryny klonlaşdyrýarys we buýrugy aşakdaky ýaly ýerine ýetirýäris:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Hytaýyň materiginde ulanyjylar:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

Kod bazasynyň klonynyň katalog ady `demo.i18n.site` `docker` ýerli deslapky synlamany aňsatlaşdyrmak üçin `md` bolmaly.

### Terjime Et

Ilki bilen, `md` giriň we `en` `zh` etjek `i18n.site` işlediň.

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Işledilenden soň `git add . ` we keş keş faýllary dörediler `md`

### Ýerli Syn

Gurmak we başlamak ( `MAC` `docker` iş wagty hökmünde [orbstack](https://orbstack.dev) maslahat berýärler) `docker`

Soňra, `docker` giriň we `./up.sh` işlediň, soňra bolsa ýerli synlamak üçin giriň [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Mazmuny Iber

[Bir sahypalyk programma](https://developer.mozilla.org/docs/Glossary/SPA) arhitekturasyny kabul `i18n.site` we web sahypasynyň giriş sahypasy we web sahypasynyň mazmuny özbaşdak ýerleşdirilýär.

Aboveokardaky terjimesini işledeniňizden soň, katalogda `htm` we `v` kataloglar dörediler `md/out/dev`

Bu ýerde, `.i18n/htm/dev.yml` faýly esasynda gurlandygyny görkezýär `dev`

: aşagynda `dev`

Katalogyň aşagynda web sahypasynyň giriş sahypasy bar `htm`

Katalogda wersiýa belgisi bolan web sahypasynyň mazmuny bar `v`

Preerli deslapky syn, wersiýa belgisine garamazdan ähli faýllary kataloga göçürer `out/dev/v/0.1.0`

Resmi taýdan goýberilmegi üçin üýtgedilen faýllar täze wersiýa belgisi katalogyna göçüriler.

#### Sazlama Faýlyny Görkezmek Üçin -c Ulanyň

Dürli konfigurasiýa faýllary, bukjanyň aşagynda degişli kataloglary döreder `out`

Mysal üçin, `out/ol` katalog döreder `.i18n/htm/ol.yml`

we `ol.yml` başlangyç konfigurasiýalardyr `dev.yml`

ösüş gurşawyny aňladýan `development` gysgaltmasy, ýerli deslapky syn üçin ulanylýar we deslapky konfigurasiýa faýlydyr `dev`
onlaýn gurşawy aňladýan `online` gysgaltmasy `ol` resmi taýdan goýbermek üçin ulanylýar we neşir edilende deslapky konfigurasiýa faýlydyr `npm` `-n` buýruk setiriniň parametrini ulanyp.

Şeýle hem, konfigurasiýa faýlyň adyny görkezmek üçin buýruk setirinde ulanyň `--htm_conf`

meselem:
```
i18n.site --htm_conf yourConfig --save
```

Ine, täzeleniş wersiýasynyň belgisini görkezýär `--save`

#### <a rel=id href="#npm" id="npm"></a> Mazmuny npmjs.com sahypasyna çap ediň

Mazmuny neşir etmek maslahat berilýän deslapky çözgütdir ( [“Front-end High Availability](/i18n.site/feature#ha) ”) [npmjs.com](//npmjs.com)

##### Boşat npm login &

Guruň `nodejs` Giriş üçin `npm login` ulanyň.

Redaktirläň `md/.i18n/htm/ol.yml` `i18n.site` In `v: //unpkg.com/i18n.site` -ni özüňize üýtgediň `npm` paketiň ady.

Diňe işlenmedik paketiň adyny ulanyň, web sahypasynyň domen adyny paketiň ady hökmünde ulanmak [npmjs.com](//npmjs.com)

`npm` esasynda `i18n.site` edilende, `v:` `/.v` prefiksi hökmünde **`//unpkg.com/` ulanmagy unutmaň** .

Terjime etmek we neşir etmek üçin `i18n.site --npm` ýa-da `i18n.site -n` katalogynda işlediň `md`

Neşir etmek üçin üznüksiz integrasiýa gurşawyny ulanýan bolsaňyz, ony gurmagyň zerurlygy ýok `nodejs` giren we çap edilen rugsady `~/.npmrc` daşky gurşawa göçüriň!

Bukjanyň adyny `v:` `ol.yml` bilen üýtgeden bolsaňyz, **ilki bilen `.i18n/v/ol` pozuň** we soňra çap ediň!

##### Proksi Serwer npm Tarapyndan Neşir Edildi

Hytaýyň materiginde ulanyjylar tor problemalary bilen ýüzbe-ýüz bolup, `npm` neşir edip bilmeseler, proksi serwerini düzmek üçin daşky gurşaw `https_proxy` düzüp bilerler.

Proksi serwer portuňyzyň bardygyny göz öňünde tutup `7890` ýazyp bilersiňiz:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Özbaşdak Ýerleşdirilen Mazmun

Mazmuny özbaşdak ýerleşdirmek isleseňiz, ilki bilen `md/.i18n/htm/ol.yml` we `v: //unpkg.com/i18n.site` ýaly URL prefiksiňize üýtgediň `v: //i18n-v.xxx.com`

`md` giriň we işlediň

```
i18n.site --htm_conf ol --save
```

ýa-da gysgaltma

```
i18n.site -c ol -s
```

Soň bolsa, `v:` bukjadaky URL prefiks ýoluna mazmuny düzüň `md/out/ol/v`

Ahyrynda, **`1s` bilen gutarýan ýoluň keş keşini `/.v`** , ýogsam täze çykan mazmuna derrew girip bolmaýar!

Gereksiz islegleri azaltmak üçin beýleki ýollar üçin keş keşini bir ýyl ýa-da has köp wagt belläp bolýar.

##### S3-Iň Mazmuny

Öz-özüňi alyp barmak üçin, öz serweriňizi ulanmakdan başga-da, `CDN` bir umumy wariant `S3` +

`S3` serwerini ulanyp [rclone](https://rclone.org) , soňra aşakdaky ssenariýa serediň we üýtgediň we her gezek çap edeniňizde diňe artýan üýtgeşmeleri göçüriň `S3`

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Düzeltmegi ýatdan çykarmaň `CDN` `/.v` Bilen gutarýan ýoluň keş keşi `1s` bolar, ýogsam täze çykan mazmuna derrew girip bilmersiňiz.

### Web Sahypasyny Çap Et

Web sahypasy islendik ýerde ýerleşdirilip bilner, we [cloudflare page](https://pages.cloudflare.com) gowy saýlawlar [github page](https://pages.github.com)

Web sahypasy [bir sahypalyk programmanyň](https://developer.mozilla.org/docs/Glossary/SPA) arhitekturasyny kabul edýändigi sebäpli, URL ýoluny `index.html` ýazmagy ýatdan çykarmaň `. `

Web sahypasyna giriş sahypasy diňe bir gezek ýerleşdirilmeli we indiki mazmun täzelenmeleri üçin web sahypasynyň giriş sahypasyny täzeden ulanmagyň zerurlygy ýok.

#### github Sahypasynda Ýerleşdiriň

Ilki bilen [bir gurama döretmek üçin şu ýere github](https://github.com/account/organizations/new?plan=free) `i18n-demo`

Soňra bu guramanyň aşagynda ammar dörediň `i18n-demo.github.io` `i18n-demo` döreden guramanyň ady bilen çalyşyň):

<img alt="" src="https://p.3ti.site/1721098657.avif">

: makalada mazmuny çap edilende, döredildi `out/ol/htm`

```
ln -s index.html 404.html
```


Sebäbi URL ýoluny täzeden ýazmagy goldamaýar, şonuň üçin `404.html` ulanylýar `github page`

Soňra aşakdaky buýrugy `htm` işlediň ( `i18n-demo/i18n-demo.github.io.git` öz ammar adresiňiz bilen çalyşmagy ýatdan çykarmaň) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

`github page` basanyňyzdan soň, ýerleşdirilişine üstünlikli garaşyň (aşakda görkezilişi ýaly), soň bolsa girip bilersiňiz!

<img src="//p.3ti.site/1721116586.avif" width="350px">

Görkeziş sahypasy üçin serediň:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Bulutlar Sahypasynda Ýerleşdiriň

[cloudflare page](//pages.cloudflare.com) `github page` ýoly täzeden ýazmagy üpjün edýär we materik Hytaý üçin has dostlukly we ulanmak has amatly!

Gurnama `cloudflare page` adatça ýokardaky `github page` ýerleşdirişe esaslanýar.

Taslama dörediň we ýokardaky ammary baglaň `i18n-demo.github.io`

Amal aşakdaky suratda görkezilýär:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

`i18n-demo` girmäge rugsat bermek üçin basyň `Add Account`

Başga bir guramanyň ammaryny baglan bolsaňyz, täze gurama görkezilmezden ozal iki gezek ygtyýar bermek üçin iki gezek basmaly bolarsyňyz `Add Account`

<img alt="" src="https://p.3ti.site/1721118306.avif">

Indiki ammary saýlaň `i18n-demo.github.io` soňra `Begin setup` basyň we indiki ädimler üçin deslapky bahalary ulanyň.

<img alt="" src="https://p.3ti.site/1721118490.avif">

Ilkinji gezek baglanyşandan soň, oňa girmezden birnäçe minut garaşmaly.

Göçürilenden soň, ýörite domen adyny baglap bilersiňiz.

<img alt="" src="https://p.3ti.site/1721119459.avif">

Domainörite domen adyny baglanyşdyranyňyzdan soň, aşakda görkezilişi ýaly bir sahypalyk programmanyň ýol täzeden ýazylmagyny düzmek üçin domen adyna gidiň:

<img alt="" src="https://p.3ti.site/1721119320.avif">

Aboveokardaky suratdaky düzgünler aşakdaky `i18n.site` .

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

Mundan başga-da, aşakda görkezilişi ýaly keş keşini düzüň we keşiň dowamlylygyny bir aý belläň.

<img alt="" src="https://p.3ti.site/1721125111.avif">

Aboveokardaky suratdaky ikinji ädimdäki domen adyny gabat gelýän domen adyna üýtgediň.

#### Hytaýyň Materiginde Web Sahypasynyň Ýerleşdirilmegini Optimizirlemek

Hytaýyň materikleriniň tor gurşawynda has oňaýly öndürijilik gazanmak isleseňiz, ilki bilen [domen adyny bellige alyň](//beian.aliyun.com) .

`out/ol/htm` bolsa, `CDN` materiginde bulut satyjylarynyň obýekt ammaryny ulanyň +

[“Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) ýaly bir sahypalyk programmalara uýgunlaşmagyň ýoluny täzeden ýazmak üçin gyrasy hasaplamany ulanyp bilersiňiz, muny şeýle düzüp bolýar:

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

Sebäbi `MX` we `CNAME` ýazgylar bilelikde bolup bilmeýär, şol bir wagtyň özünde domen adynyň e-poçtalaryny almak isleseňiz, `CNAME` tekizlemek `A` skript bilen hyzmatdaşlyk etmeli [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten)

Mundan başga-da, Hytaýyň materigindäki bulut satyjylarynyň daşary ýurt tölegleri birneme gymmat bolany üçin, çykdajylary optimizirlemek isleseňiz, [Huawei Cloud-yň mugt geografiki DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) we [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) adaty domen adyny (aşakda görkezilişi ýaly) ulanyp bilersiňiz! ulag gatnawy - Hytaýyň materiginde ulag Baidu Cloud `CDN` halkara traffigi cloudflare gidýär.

<img alt="" src="https://p.3ti.site/1721119788.avif">

Bu ýerleşdiriş optimizasiýa çözgütleri has çylşyrymly we geljekde aýratyn bölümlerde hödürlener.

#### Umumy Domen Adynyň Gönükdirilmegi

Esasy web sahypasy hökmünde web sahypasyny döretmek üçin ulanýan `i18n.site` , adatça pan-domen gönükdirmesini sazlamaly, ýagny `*.xxx.com` (şol sanda `www.xxx.com` ) girişini gönükdirmeli `xxx.com`

Bu talap Alibaba Cloud-yň `EdgeScript` ( [Iňlis resminamasy](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Hytaý resminamasy](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ) kömegi bilen gazanylyp bilner `CDN`

[Alibaba CDN](https://cdn.console.aliyun.com/domain/list) a domen adyny goşuň we `*.xxx.com` adyny Alibaba Cloud `CDN` s `CNAME` -a görkeziň.

<img alt="" src="https://p.3ti.site/1721122000.avif">

Mysal üçin, ýokardaky suratdaky pan-domen adynyň gönükdirme konfigurasiýasy aşakdaky `*.i18n.site` :

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### nginx Bilen Ýerleşdiriň

`server` meňzeş konfigurasiýa goşmagyňyzy haýyş edýäris nginx bu ýerde `/root/i18n/md/out/ol/htm` ony öz taslamaňyzyň ýoluna üýtgediň `out/ol/htm`

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Katalog Gurluşy

#### Köpçülik

Web sahypasynyň statiki faýllary, meselem `favicon.ico` `robots.txt` We ş.m.

Bu ýerdäki nyşan faýllary döredilip bilner [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n

`.i18n` aşagynda `i18n.site` konfigurasiýa faýllary, terjime keşi we ş.m. Jikme-jiklikler üçin indiki ["Sazlama"](/i18n.site/conf) bölümine serediň.

#### en

Sazlama faýlyndaky `fromTo` `en` gabat `.i18n/conf.yml` çeşme dil katalogy

```yaml
i18n:
  fromTo:
    en: zh
```

Terjimäniň konfigurasiýasyna serediň [i18](/i18/use)

