# Gurnama &

## Sazlama Nyşany

`i18n.site` da gurlan `i18` terjime guraly bar, [giriş belligini sazlamak üçin `i18` resminama serediň](/i18/use) .

## Gurnama

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Demo Taslamasy

`i18n.site` ulanmagy öwrenmek üçin demo taslamasy bilen başlalyň.

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

`docker` bilen ýerli deslapky synlamany ýeňilleşdirmek üçin `demo.i18n.site` kod esasy klonyň katalog ady `md` bolmaly.

### Terjime Et

Ilki bilen `md` katalogy giriziň we `en` -den `zh` terjime etjek `i18n.site` işlediň.

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Işledilenden soň terjime we keş keş faýllary dörediler, `git add . ` `md` bukjadaky ammarda goşmagy ýatdan çykarmaň.

### Ýerli Syn

`docker` guruň we başlaň ( `MAC` ulanyjy `docker` iş wagty hökmünde [orbstack](https://orbstack.dev) maslahat berýär).

Soň bolsa, `docker` bukjany giriziň we `./up.sh` işlediň, soňra bolsa ýerli synlamak üçin giriň [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Mazmuny Iber

`i18n.site` [bir sahypalyk programma](https://developer.mozilla.org/docs/Glossary/SPA) arhitekturasyny kabul edýär we web sahypasynyň giriş sahypasy we web sahypasynyň mazmuny özbaşdak ýerleşdirilýär.

Aboveokardaky terjime işledilenden soň, `md/out/dev` katalogyň aşagynda `htm` we `v` kataloglar dörediler.

Bu ýerde `dev` , `.i18n/htm/dev.yml` konfigurasiýa faýly esasynda gurlandygyny aňladýar.

`dev` katalog :

`htm` katalog web sahypasynyň giriş sahypasydyr.

`v` katalogda wersiýa belgileri bolan web sahypasynyň mazmuny bar.

Preerli deslapky syn wersiýa belgisi bilen gyzyklanmaýar we ähli faýllary `out/dev/v/0.1.0` bukjasyna göçürer.

Resmi taýdan goýberilmegi üçin üýtgedilen faýllar täze wersiýa belgisi katalogyna göçüriler.

#### Sazlama Faýlyny Görkezmek Üçin -c Ulanyň

Dürli konfigurasiýa faýllary `out` katalogda degişli kataloglary döreder.

Mysal üçin, `.i18n/htm/ol.yml` `out/ol` katalogy döreder.

`dev.yml` we `ol.yml` deslapky konfigurasiýalardyr.

`dev` ýerli ösüş üçin ulanylýan ösüş gurşawyny görkezýän `development` gysgaltmasy, şeýle hem deslapky konfigurasiýa faýlydyr.
`ol` , resmi taýdan goýbermek üçin ulanylýan onlaýn gurşawy `-n` `online` - `npm` gysgaldylyşydyr.

Şeýle hem, beýleki konfigurasiýa faýllaryny döredip bilersiňiz, ulanmak üçin konfigurasiýa faýlyň adyny görkezmek üçin buýruk setirinde `--htm_conf` ulanyň.

meselem:
```
i18n.site --htm_conf yourConfig --save
```

Bu ýerde `--save` täzeleniş wersiýasynyň belgisini görkezýär.

#### <a rel=id href="#npm" id="npm"></a> Mazmuny npmjs.com sahypasyna çap ediň

Mazmuny neşir etmek maslahat berilýän deslapky çözgütdir ( [“Front-end High Availability](/i18n.site/feature#ha) ”) [npmjs.com](//npmjs.com)

##### Boşat npm login &

`nodejs` guruň, `npm login` bilen giriň.

`md/.i18n/htm/ol.yml` redaktirläň we `i18n.site` `v: //unpkg.com/i18n.site` -de öz `npm` bukjanyňyzyň adyna üýtgediň.

Diňe işlenmedik paketiň adyny ulanyň, web sahypasynyň domen adyny paketiň ady hökmünde ulanmak [npmjs.com](//npmjs.com)

`npm` paket esasynda çap edilende, `v:` bahanyň prefiksi **üçin `//unpkg.com/` ulanmagy unutmaň** `i18n.site` täze çykarylanlary wagtynda görmek üçin bu prefiks ýolunda `/.v` keş keşini ýörite optimizirledi.

Terjime etmek we neşir etmek üçin `md` katalogda `i18n.site --npm` ýa-da `i18n.site -n` işlediň.

Neşir etmek üçin üznüksiz integrasiýa gurşawyny ulanýan bolsaňyz, `nodejs` gurmagyň zerurlygy ýok. Diňe sessiýa açan we `~/.npmrc` neşir rugsatlaryny daşky gurşawa göçüriň.

Bukjanyň adyny `v:` -den `ol.yml` üýtgeden bolsaňyz, **ilki `.i18n/v/ol` pozuň** we çap ediň.

##### Proksi Serwer npm Tarapyndan Neşir Edildi

Hytaýyň materiginde ulanyjylar tor problemalary bilen ýüzbe-ýüz bolup, `npm` paket çap edip bilmeseler, proksi serwerini düzmek üçin daşky gurşaw üýtgeýjisini `https_proxy` edip bilerler.

Proksi serwer portuňyzyň `7890` bolandygyny göz öňünde tutup, ýazyp bilersiňiz:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Özbaşdak Ýerleşdirilen Mazmun

Mazmuny özbaşdak ýerleşdirmek isleseňiz, ilki `md/.i18n/htm/ol.yml` redaktirläň we `v: //unpkg.com/i18n.site` URL ýaly prefiksine `v: //i18n-v.xxx.com` ýaly üýtgediň.

`md` bukjany giriziň we işlediň

```
i18n.site --htm_conf ol --save
```

ýa-da gysgaltma

```
i18n.site -c ol -s
```

Soň bolsa, `md/out/ol/v` bukjadaky mazmuny `v:` -de goýlan URL prefiks ýoluna düzüň.

Netijede, **`/.v` dan `1s` çenli gutarýan ýoluň keş keşini düzüň** , ýogsam täze çykan mazmuna derrew girip bolmaz.

Gereksiz islegleri azaltmak üçin beýleki ýollar üçin keş keşini bir ýyl ýa-da has köp wagt belläp bolýar.

##### S3-Iň Mazmuny

Öz-özüňi alyp barmak `CDN` , öz serweriňizi ulanmakdan başga-da, umumy bir wariant `S3` +

`S3` serwere girmek üçin ulanyp [rclone](https://rclone.org) , soňra aşakdaky skriptlere serediň we üýtgedip bilersiňiz we her goýberiliş üçin diňe artýan üýtgeşmeleri `S3` e göçürip bilersiňiz.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

`CDN` bilen sazlamagy ýatdan çykarmaň, `/.v` -de gutarýan ýoluň keş keşi `1s` bolar, ýogsam täze çykan mazmuna derrew girip bolmaz.

### Web Sahypasyny Çap Et

Web sahypasy islendik ýerde ýerleşdirilip bilner, we [cloudflare page](https://pages.cloudflare.com) gowy saýlawlar [github page](https://pages.github.com)

Web sahypasy [bir sahypalyk programma](https://developer.mozilla.org/docs/Glossary/SPA) arhitekturasyny ulanýandygy sebäpli, `. ` -dan `index.html` e çenli bolmadyk URL ýollaryny täzeden ýazmagy ýatdan çykarmaň.

Web sahypasyna giriş sahypasy diňe bir gezek ýerleşdirilmeli we indiki mazmun täzelenmeleri üçin web sahypasynyň giriş sahypasyny täzeden ulanmagyň zerurlygy ýok.

#### github Sahypasynda Ýerleşdiriň

Ilki bilen [bir gurama döretmek üçin şu ýere github](https://github.com/account/organizations/new?plan=free) `i18n-demo`

Soňra bu guramanyň aşagynda `i18n-demo.github.io` ammar dörediň ( `i18n-demo` döreden gurama adyňyz bilen çalşyň):

![](https://p.3ti.site/1721098657.avif)

Öňki makalada mazmuny çap edilende `out/ol/htm` döredildi, bu bukjany giriziň we işlediň :

```
ln -s index.html 404.html
```


`github page` URL ýoluny täzeden ýazmagy goldamaýandygy sebäpli, ýerine `404.html` ulanylýar.

Soňra `htm` bukjada aşakdaky buýrugy işlediň ( `i18n-demo/i18n-demo.github.io.git` öz ammar adresiňiz bilen çalyşmagy ýatdan çykarmaň) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Kody basanyňyzdan soň, `github page` girmegiň üstünlikli işlemegine garaşyň (aşakda görkezilişi ýaly).

<img src="//p.3ti.site/1721116586.avif" width="350px">

Görkeziş sahypasy üçin serediň:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Bulutlar Sahypasynda Ýerleşdiriň

[cloudflare page](//pages.cloudflare.com) `github page` deňeşdirilende, ýoly täzeden ýazmagy üpjün edýär we materik Hytaý üçin has dostlukly we ulanmak has amatly.

`cloudflare page` -yň ýerleşdirilmegi, adatça ýokardaky `github page` iň ýerleşdirilmegine esaslanýar.

Taslama dörediň we ýokardaky `i18n-demo.github.io` ammary baglaň.

Amal aşakdaky suratda görkezilýär:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

`i18n-demo` gurama girmek üçin `Add Account` basyň.

Başga bir guramanyň ammaryny baglan bolsaňyz, täze gurama görkezilmezden ozal iki gezek ygtyýar bermek üçin `Add Account` gezek iki gezek basmaly bolmagyňyz mümkin.

![](https://p.3ti.site/1721118306.avif)

Ondan soň `i18n-demo.github.io` ammary saýlaň, soňra `Begin setup` basyň we indiki ädimler üçin deslapky bahalary ulanyň.

![](https://p.3ti.site/1721118490.avif)

Ilkinji gezek baglanyşandan soň, oňa girmezden birnäçe minut garaşmaly.

Göçürilenden soň, ýörite domen adyny baglap bilersiňiz.

![](https://p.3ti.site/1721119459.avif)

Domainörite domen adyny baglanyşdyranyňyzdan soň, aşakda görkezilişi ýaly bir sahypalyk programmanyň ýol täzeden ýazylmagyny düzmek üçin domen adyna gidiň:

![](https://p.3ti.site/1721119320.avif)

Aboveokardaky suratdaky düzgünler aşakdakylardyr: Aşakdaky birinji setirdäki `i18n.site` baglanyşdyrýan domen adyňyz bilen çalşyň.

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

![](https://p.3ti.site/1721125111.avif)

Aboveokardaky suratdaky ikinji ädimdäki domen adyny gabat gelýän domen adyna üýtgediň.

#### Hytaýyň Materiginde Web Sahypasynyň Ýerleşdirilmegini Optimizirlemek

Hytaýyň materikleriniň tor gurşawynda has oňat elýeterlilik gazanmak isleseňiz, ilki bilen [domen adyny bellige alyň](//beian.aliyun.com) .

Soň `out/ol/htm` , Hytaýyň materiginde bulut satyjylarynyň obýekt saklanyşyny ulanyň `CDN` Aşakdaky mazmuny ýerleşdiriň +

Bir sahypalyk programmalara uýgunlaşmagyň ýoluny täzeden ýazmak üçin gyrasy hasaplamany ulanyp bilersiňiz, Mysal üçin, [“Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) şeýle düzülip bilner:

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

`MX` ýazgy we `CNAME` ýazgy bilelikde bolup bilmeýär, şol bir wagtyň özünde domen adynyň e-poçtalaryny almak isleseňiz, `CNAME` `A` çykmak üçin skript bilen hyzmatdaşlyk etmeli [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten)

Mundan başga-da, Hytaýyň materigindäki bulut satyjylarynyň daşary ýurt tölegleri birneme gymmat bolany üçin, çykdajylary optimizirlemek isleseňiz, [Huawei Cloud-yň mugt geografiki DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) we [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) adaty domen adyny (aşakda görkezilişi ýaly) ulanyp bilersiňiz! ulag gatnawy - Hytaýyň materiginde ulag Baidu Cloud `CDN` , halkara traffigi cloudflare gidýär.

![](https://p.3ti.site/1721119788.avif)

Bu ýerleşdiriş optimizasiýa çözgütleri has çylşyrymly we geljekde aýratyn bölümlerde hödürlener.

#### Umumy Domen Adynyň Gönükdirilmegi

Esasy web sahypa hökmünde web sahypasyny döretmek üçin `i18n.site` ulanýan bolsaňyz, adatça pan-domen gönükdirmesini sazlamaly, ýagny girişi `*.xxx.com` (şol sanda `www.xxx.com` -den `xxx.com` -e) gönükdirmeli.

Bu talap Alibaba Cloud `CDN` `EdgeScript` ( [Iňlis resminamasy](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Hytaý resminamasy](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ) kömegi bilen gazanylyp bilner.

[Alibaba Cloud CDN](https://cdn.console.aliyun.com/domain/list) da domen adyny goşuň we domen adyny Alibaba Cloud `CDN` -de `*.xxx.com` dan `CNAME` çenli görkeziň.

![](https://p.3ti.site/1721122000.avif)

Mysal üçin, ýokardaky suratdaky `*.i18n.site` nyň pan-domen adyny gönükdirme konfigurasiýasy aşakdaky ýaly:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

#### nginx Bilen Ýerleşdiriň

Aşakdakylara meňzeş konfigurasiýa goşuň! `server` njy abzasda nginx `/root/i18n/md/out/ol/htm` öz taslamaňyzyň ýoluna üýtgediň `out/ol/htm`

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

#### `public`

Web sahypasynyň statiki faýllary, meselem `favicon.ico` , `robots.txt` we ş.m.

Bu ýerdäki nyşan faýllary döredilip bilner [realfavicongenerator.net](https://realfavicongenerator.net)

#### `.i18n`

`.i18n` bukjanyň aşagynda konfigurasiýa faýllary, terjime keşi we ş.m. bar `i18n.site` Jikme-jiklikler üçin indiki bölüme ["Sazlama"](/i18n.site/conf) serediň.

#### `en`

`.i18n/conf.yml` konfigurasiýa faýlyndaky `fromTo` -den `en` e gabat gelýän çeşme dil katalogy

```yaml
i18n:
  fromTo:
    en: zh
```

Terjimäniň konfigurasiýasyna serediň [i18](/i18/use)