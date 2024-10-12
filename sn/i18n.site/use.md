# Isa &

## Configuration Token

`i18n.site` ine chishandiso chekushandura chakavakirwa- `i18` Ndokumbira [kutinya apa kuti utarise kugwaro `i18` kuti ugadzirise tokeni yekuwana](/i18/use) .

## Install

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Demo Chirongwa

Ngatitange nedemo purojekiti kuti tidzidze kushandisa `i18n.site` .

Isu tinotanga tabatanidza iyo demo repository uye tomhanyisa rairo seizvi:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Vashandisi mu mainland China vanogona:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

Zita redhairekitori re `demo.i18n.site` code base clone rinofanira kunge riri `md` kuti rifambise ongororo yenzvimbo ne `docker` .

### Shandura

Kutanga, isa `md` dhairekitori uye mhanya `i18n.site` , iyo inoshandura `en` kusvika `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Mushure mekushanda, shanduro `git add . ` cache mafaira anozogadzirwa `md`

### Preview Yemuno

Isa uye tanga `docker` ( `MAC` mushandisi anokurudzira kushandisa [orbstack](https://orbstack.dev) senguva yekumhanya `docker` ).

Wobva waisa iyo `docker` dhairekitori uye mhanya `./up.sh` , wobva [https://127.0.0.1](https://127.0.0.1) kuti utarise munharaunda.

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Tumira Zvemukati

`i18n.site` inotora [dhizaini-peji](https://developer.mozilla.org/docs/Glossary/SPA) rekuvaka, uye peji rekupinda webhusaiti uye zvemukati webhusaiti zvinoiswa zvakazvimirira.

Mushure mekuita shanduro iri pamusoro, madhairekitori `htm` uye `v` anozogadzirwa pasi `md/out/dev` dhairekitori.

Pano, `dev` inoreva kuti yakavakwa zvichibva pane `.i18n/htm/dev.yml` yekumisikidza faira.

`dev` directory :

Iyo `htm` dhairekitori ndiyo peji rekupinda webhusaiti.

Iyo `v` dhairekitori ine webhusaiti zvirimo nenhamba dzeshanduro.

Ongororo yemunharaunda haina basa nezve nhamba yeshanduro uye inokopa ese mafaera `out/dev/v/0.1.0` dhairekitori.

Kuti ibudiswe zviri pamutemo, mafaera akachinjwa anokopwa kudhairekitori renhamba yeshanduro itsva.

#### Shandisa -c Kutsanangura Faira Rekugadzirisa

Akasiyana ekugadzirisa mafaera achagadzira anowirirana madhairekitori mune `out` dhairekitori.

Semuenzaniso, `.i18n/htm/ol.yml` ichagadzira iyo `out/ol` dhairekitori.

`dev.yml` uye `ol.yml` ndiwo magadzirirwo akasarudzika.

`dev` ndiyo chidimbu `development` , ichiratidza nharaunda yebudiriro, inoshandiswa pakuona kwenzvimbo, uye zvakare ndiyo faira yekumisikidza.
`ol` ndiyo chidimbu `online` , ichiratidza nharaunda yepamhepo, iyo inoshandiswa kuburitswa zviri pamutemo Iri zvakare faira yekumisikidza kana uchishandisa command line paramita `-n` kusvika `npm` kuburitsa.

Iwe unogona zvakare kugadzira mamwe mafaera ekugadzirisa Shandisa `--htm_conf` pamutsara wekuraira kutsanangura zita refaira rekushandisa.

semuyenzaniso:
```
i18n.site --htm_conf yourConfig --save
```

Pano `--save` inomiririra iyo yekuvandudza kuburitswa vhezheni nhamba.

#### <a rel=id href="#npm" id="npm"></a> Shambadzira zvirimo kunpmjs.com

Kutsikisa zvirimo [ku](/i18n.site/feature#ha) [npmjs.com](//npmjs.com)

##### npm login &

Isa `nodejs` , pinda `npm login` .

Rongedza `md/.i18n/htm/ol.yml` uye shandura `i18n.site` `v: //unpkg.com/i18n.site` kune yako `npm` zita repasuru.

Ingoshandisa iyo isina kubatika pasuru zita pa [npmjs.com](//npmjs.com)

Pakushambadza zvichibva pasuru `npm` , iva **nechokwadi chekushandisa `//unpkg.com/`** kune chivakamberi che `v:` kukosha `i18n.site` yakanyatso optimize cache nguva `/.v` pasi peiyi prefix nzira kuti uwane kutarisisa panguva yezvitsva.

Mhanya `i18n.site --npm` kana `i18n.site -n` mudhairekitori `md` kuti ushandure nekushambadza.

Kana iwe ukashandisa inoenderera mberi yekubatanidza nharaunda kuti ibudise, hapana chikonzero chekuisa `nodejs` Ingokopa iyo yakanyorwa-mukati uye yekuburitsa mvumo `~/.npmrc` kune zvakatipoteredza.

Kana ukagadzirisa zita repasuru `v:` muna `ol.yml` , ndapota **ita shuwa kudzima `.i18n/v/ol`** kutanga wozoiburitsa.

##### Proxy Server Yakaburitswa Nenpm

Kana vashandisi vari mainland China vasangana nematambudziko etiweki uye vasingakwanise kuburitsa `npm` mapakeji, vanogona kuseta nharaunda inosiyana `https_proxy` kugadzirisa iyo proxy server.

Tichifunga kuti proxy server port yako ndeye `7890` , unogona kunyora:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Kuzvibata Wega Zvemukati

Kana iwe uchida kuzvipa wega zvirimo, tanga wagadzirisa `md/.i18n/htm/ol.yml` uye shandura `v: //unpkg.com/i18n.site` kune yako URL prefix, senge `v: //i18n-v.xxx.com` .

Pinda iyo `md` dhairekitori uye mhanya

```
i18n.site --htm_conf ol --save
```

kana chidimbu

```
i18n.site -c ol -s
```

Wobva wagadzirisa zvirimo `md/out/ol/v` dhairekitori kune iyo URL prefix nzira yakaiswa `v:` .

Pakupedzisira, **gadzirisa nguva ye cache yenzira inopera muna `/.v` kusvika `1s`** , kana zvisina kudaro zvinyorwa zvichangobva kubudiswa hazvigoni kuwanikwa pakarepo.

Iyo cache nguva yedzimwe nzira inogona kusetwa kune rimwe gore kana kupfuura kuderedza zvikumbiro zvisina basa.

##### Host Zvemukati Kune s3

Kuti uzvigadzirise `CDN` , kuwedzera pakushandisa yako wega sevha, imwe yakajairika sarudzo ndeye kushandisa `S3` + .

Unogona kushandisa [rclone](https://rclone.org) kuti upinde musevha `S3` , wobva watarisa uye gadzirisa script inotevera, uye ingoteedzera shanduko dzekuwedzera `S3` pakuburitswa kwega kwega.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Yeuka kugadzirisa `CDN` kuitira kuti nguva ye cache yenzira inopera muna `/.v` ndeye `1s` , kana zvisina kudaro zvinyorwa zvichangobva kusunungurwa hazvigone kuwanikwa pakarepo.

### Buritsa Webhusaiti

Iyo webhusaiti inogona kuiswa chero kupi [github page](https://pages.github.com) uye [cloudflare page](https://pages.cloudflare.com) isarudzo dzakanaka.

Nekuti iyo webhusaiti inoshandisa architecture [yepeji imwe-peji](https://developer.mozilla.org/docs/Glossary/SPA) , yeuka kunyorazve URL nzira dzisina `. ` kusvika `index.html` .

Webhusaiti yekupinda peji inongoda kuiswa kamwe chete, uye hapana chikonzero chekuisazve peji rekupinda webhusaiti kune zvinotevera zvinongedzo zvemukati.

#### Isa Pane github Peji

Chekutanga [tinya github kuti ugadzire sangano](https://github.com/account/organizations/new?plan=free) `i18n-demo`

Wobva wagadzira imba yekuchengetera `i18n-demo.github.io` pasi pesangano iri (ndokumbira tsiva `i18n-demo` nezita resangano rawakagadzira):

![](https://p.3ti.site/1721098657.avif)

Pakuburitsa zviri muchinyorwa chapfuura, `out/ol/htm` yagadzirwa :

```
ln -s index.html 404.html
```


Nekuti `github page` haitsigire URL nzira yekunyorazve, `404.html` inoshandiswa pachinzvimbo.

Wobva wamhanya unotevera kuraira mune `htm` dhairekitori (rangarira kutsiva `i18n-demo/i18n-demo.github.io.git` nekero yako yekuchengetera) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Mushure mekusundidzira kodhi, mirira kutumirwa `github page` kuti imhanye zvinobudirira (sezvinoratidzwa pazasi) usati waiwana.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Kuti uwane demo peji ndapota ona:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Isa Pane cloudflare Peji

[cloudflare page](//pages.cloudflare.com) `github page` , inopa nzira yekunyorazve uye inoshamwaridzana nenyika yeChina uye inosvikika zvakanyanya.

Kuiswa `cloudflare page` kunowanzoenderana nekutumirwa `github page` pamusoro.

Gadzira purojekiti uye sunga iyo `i18n-demo.github.io` imba yekuchengetera pamusoro.

Iyo nzira inoratidzwa mumufananidzo uri pasi apa:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Ndapota tinya `Add Account` kuti upe mukana kune sangano `i18n-demo` .

Kana wakasunga dura rerimwe sangano, ungangoda kudzvanya `Add Account` kaviri kuti upe mvumo kaviri sangano idzva risati raratidzwa.

![](https://p.3ti.site/1721118306.avif)

Tevere, sarudza warehouse `i18n-demo.github.io` , wobva wadzvanya `Begin setup` , uye shandisa iyo default kukosha kune anotevera matanho.

![](https://p.3ti.site/1721118490.avif)

Mushure mekusunga kekutanga, unofanirwa kumirira maminetsi mashoma usati waiwana.

Mushure mekutumirwa, unogona kusunga zita rezita renzvimbo.

![](https://p.3ti.site/1721119459.avif)

Mushure mekusunga iyo yakasarudzika zita rezita, ndapota enda kuzita rezita kuti ugadzirise nzira yekunyorazve yepeji-peji application, sezvakaratidzwa pazasi:

![](https://p.3ti.site/1721119320.avif)

Mitemo iri pamufananidzo uri pamusoro ndookuti tsiva `i18n.site` mumutsetse wekutanga pazasi nezita renzvimbo yawakasunga.

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

Mukuwedzera, ndapota gadzirisa mitemo ye cache, sezvakaratidzwa pasi apa, uye isa nguva ye cache kumwedzi mumwe.

![](https://p.3ti.site/1721125111.avif)

Ndokumbirawo shandura zita rezita rinoenderana mudanho rechipiri pamufananidzo uri pamusoro kune zita rezita rawakasunga.

#### Kugadzirisa Kutumirwa Kwewebhusaiti Mu Mainland China

Kana iwe uchida kuwana zvirinani kuwanikwa kwekuita munzvimbo yetiweki ye mainland China, ndapota [nyoresa zita rezita](//beian.aliyun.com) kutanga.

Zvadaro, shandisa chinhu chekuchengetedza chevatengesi vemakore munyika + `CDN` Tumira zvinotevera zvirimo `out/ol/htm` .

Unogona kushandisa komputa komputa kunyorazve nzira kuti ienderane kune imwechete-peji zvikumbiro Semuyenzaniso, [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) inogona kugadzirwa seizvi:

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

Nekuti rekodhi `MX` uye rekodha `CNAME` haigone kugarisana, kana iwe uchida kugamuchira zita rezita maemail panguva imwe chete, iwe unofanirwa kushandira pamwe neiyo [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) kusvika padanho `CNAME` mune rekodhi `A` .

Pamusoro pezvo, nekuti mhiri kwemakungwa kubhadhariswa kwevatengesi vemakore kuChina kwakadhura, kana iwe uchida kukwidziridza mitengo, unogona kushandisa [Huawei DNS 's yemahara geographical resolution](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) uye [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) 's tsika domain zita (sezvinoratidzwa pazasi) kuti uwane traffic diversion──Traffic routing munyika yeChina Baidu Cloud `CDN` , traffic yepasi rose inoenda cloudflare .

![](https://p.3ti.site/1721119788.avif)

Aya ma deployment optimization mhinduro akanyanya kuomarara uye achaunzwa muzvitsauko zvakasiyana mune ramangwana.

#### Generic Domain Name Redirection

Kana iwe ukashandisa `i18n.site` kugadzira webhusaiti sewe webhusaiti yako huru, iwe kazhinji unoda kugadzirisa pan-domain redirection, kureva, redirect access to `*.xxx.com` (kusanganisira `www.xxx.com` ) kusvika `xxx.com` .

Ichi chinodiwa chinogona kuwanikwa nerubatsiro rweAlibaba Cloud `CDN` `EdgeScript` ( [gwaro](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) [reChirungu](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) /

Wedzera zita renzvimbo muAlibaba [CDN](https://cdn.console.aliyun.com/domain/list) uye nongedzera zita renzvimbo `*.xxx.com` `CNAME` muAlibaba Cloud `CDN` .

![](https://p.3ti.site/1721122000.avif)

Semuenzaniso, iyo pan-domain zita redirection kumisikidzwa `*.i18n.site` pamufananidzo uri pamusoro ndeyotevera:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

#### Shandisa Ne nginx

Ndokumbira uwedzere gadziriso yakafanana `out/ol/htm` `/root/i18n/md/out/ol/htm` `server` ye nginx

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Dhairekitori Chimiro

#### `public`

Static mafaera ewebhusaiti, senge `favicon.ico` , `robots.txt` , nezvimwe.

Iyo icon mafaera pano anogona kugadzirwa ne [realfavicongenerator.net](https://realfavicongenerator.net)

#### `.i18n`

Pasi pe `.i18n` dhairekitori pane mafaira ekugadzirisa, cache yeshanduro, nezvimwe zve `i18n.site` Ona chitsauko chinotevera ["Configuration"](/i18n.site/conf) kuti uwane ruzivo.

#### `en`

Dhairekitori remutauro wemabviro, rinoenderana `en` `fromTo` `.i18n/conf.yml` yekumisikidza faira

```yaml
i18n:
  fromTo:
    en: zh
```

Ndokumbira utarise kugadziridzwa kweshanduro [i18](/i18/use)