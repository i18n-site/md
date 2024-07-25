# Isa &

## Configuration Token

`i18n.site` The `i18` dudziro yakamisikidzwa, ndapota [tinya pano kuti utarise ku `i18` gwaro kuti ugadzirise tokeni yekuwana](/i18/use) .

## Install

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Demo Chirongwa

Ngatitange nedemo chirongwa uye tidzidze kushandisa `i18n.site`

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

`demo.i18n.site` `md` `docker`

### Shandura

Kutanga, isa `md` uye mhanya `i18n.site` , iyo inoshandura `en` ku `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Mushure mekushanda, shanduro uye cache `git add . ` anozogadzirwa `md`

### Preview Yemuno

Isa uye `docker` ( `MAC` vanokurudzira kushandisa [orbstack](https://orbstack.dev) senguva yekumhanya ye `docker` ).

Wobva waisa `docker` uye mhanya `./up.sh` , wobva washanya [https://127.0.0.1](https://127.0.0.1) utarise munharaunda.

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Tumira Zvemukati

`i18n.site` Inotora [dhizaini yepeji-imwe](https://developer.mozilla.org/docs/Glossary/SPA) , uye peji rekupinda webhusaiti uye zvemukati webhusaiti zvinoiswa zvakazvimirira.

Mushure mekuita dudziro iri pamusoro, `htm` uye `v` madhairekitori anozogadzirwa `md/out/dev` .

Pano `dev` inoratidza kuti yakavakwa zvichibva pane `.i18n/htm/dev.yml` faira.

Under : `dev`

`htm` Pasi pedhairekitori pane peji rekupinda webhusaiti.

`v`

Ongororo yemunharaunda inokopa mafaera ese `out/dev/v/0.1.0` zvisinei nenhamba yeshanduro.

Kuti ibudiswe zviri pamutemo, mafaera akachinjwa anokopwa kudhairekitori renhamba yeshanduro itsva.

#### Shandisa -c Kutsanangura Faira Rekugadzirisa

Mafaera ekumisikidza akasiyana achagadzira dhairekitori pasi pe `out`

`out/ol` , `.i18n/htm/ol.yml`

`dev.yml` uye `ol.yml` ndiwo magadzirirwo akasarudzika.

`dev` ndicho chipfupiso che `development` , chinomiririra nharaunda yebudiriro, inoshandiswa pakuona kwenzvimbo, uye zvakare ndiyo faira yekumisikidza.
`ol` ndicho chipfupiso che `online` , chinomiririra nharaunda yepamhepo, chinoshandiswa kuburitswa zviri pamutemo, uye zvakare iri faira yekumisikidza kana uchidhinda ku `npm` uchishandisa mutsara wemirairo parameter `-n` .

Iwe unogona zvakare kugadzira mamwe mafaera ekugadzirisa `--htm_conf` pamutsara wekuraira kuti utaure zita refaira rekugadzirisa.

semuyenzaniso:
```
i18n.site --htm_conf yourConfig --save
```

Here `--save` inoratidza iyo update yekuburitsa vhezheni nhamba.

#### <a rel=id href="#npm" id="npm"></a> Shambadzira zvirimo kunpmjs.com

[Kutsikisa](/i18n.site/feature#ha) zvirimo ku [npmjs.com](//npmjs.com)

##### npm login &

Isa `nodejs` shandisa `npm login` kupinda.

Rongedza `md/.i18n/htm/ol.yml` shandura `i18n.site` mu `v: //unpkg.com/i18n.site` kuti ive yako `npm` pasuru zita.

Ingoshandisa iyo isina kubatika pasuru zita pa [npmjs.com](//npmjs.com)

**`//unpkg.com/`** `i18n.site` `v:` `/.v` `npm`

Mhanya `i18n.site --npm` kana `i18n.site -n` `md` kuti ushandure nekushambadza.

Kana iwe ukashandisa inoenderera yekubatanidza `~/.npmrc` kushambadza, hapana chikonzero chekuimisa `nodejs`

Kana ukagadzirisa zita repasuru mu `v:` `ol.yml` , ndapota **ita chokwadi chekudzima `.i18n/v/ol` kutanga** wozoiburitsa

##### Proxy Server Yakaburitswa Nanpm

Kana vashandisi vari mainland China vasangana nematambudziko `https_proxy` uye vasingakwanise kuburitsa iyo `npm`

Tichifunga kuti proxy server port yako ndeye `7890` unogona kunyora:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Kuzvibata Wega Zvemukati

Kana iwe uchida kuzviitira wega zvirimo, kutanga, `md/.i18n/htm/ol.yml` uye shandura `v: //unpkg.com/i18n.site` kune yako URL prefix, senge `v: //i18n-v.xxx.com` .

Pinda `md` uye mhanya

```
i18n.site --htm_conf ol --save
```

kana chidimbu

```
i18n.site -c ol -s
```

Wobva wagadzirisa zvirimo `md/out/ol/v` kune iyo URL prefix nzira yakaiswa mu `v:` .

Chekupedzisira, **gadzirisa iyo cache nguva yenzira `/.v` ku `1s`** , zvikasadaro izvo zvichangobva kuburitswa hazvigone kuwanikwa nekukurumidza.

Iyo cache nguva yedzimwe nzira inogona kusetwa kune rimwe gore kana kupfuura kuderedza zvikumbiro zvisina basa.

##### Host Zvemukati Kune s3

Kuzvigashira zvemukati, mukuwedzera pakushandisa yako sevha, imwe + `CDN` ndeye kushandisa `S3`

Unogona `S3` `S3` [rclone](https://rclone.org)

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Rangarira kugadzirisa `CDN` kuitira kuti cache nguva yenzira inopera mu `/.v` is `1s` , zvikasadaro hauzokwanisi kuwana zvichangobva kuburitswa zvemukati nekukasira.

### Buritsa Webhusaiti

Iyo webhusaiti inogona kuiswa chero kupi [github page](https://pages.github.com) uye [cloudflare page](https://pages.cloudflare.com) isarudzo dzakanaka.

Nekuti iyo webhusaiti inotora dhizaini [yepeji-imwe application](https://developer.mozilla.org/docs/Glossary/SPA) , `index.html` kunyorazve iyo URL nzira isina `. `

Webhusaiti yekupinda peji inongoda kuiswa kamwe chete, uye hapana chikonzero chekuisazve peji rekupinda webhusaiti kune zvinotevera zvinongedzo zvemukati.

#### Isa Pane github Peji

[Kutanga tinya github kuti ugadzire sangano](https://github.com/account/organizations/new?plan=free) `i18n-demo`

Wobva wagadzira imba yekuchengetera pasi pesangano `i18n-demo.github.io` (Ndokumbira tsiva `i18n-demo` nezita resangano rawakagadzira):

<img alt="" src="https://p.3ti.site/1721098657.avif">

Paunenge uchiburitsa zviri muchinyorwa chapfuura, : `out/ol/htm`

```
ln -s index.html 404.html
```


Nekuti `github page` haitsigire URL nzira yekunyorazve, saka `404.html` inoshandiswa pachinzvimbo.

Wobva wamhanya `htm` dhairekitori (rangarira kutsiva `i18n-demo/i18n-demo.github.io.git` nekero yako yekuchengetera) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Mushure mekusundidzira kodhi, mirira kutumirwa kwe `github page`

<img src="//p.3ti.site/1721116586.avif" width="350px">

Kudemo peji ndapota ona:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Isa Pane cloudflare Peji

[cloudflare page](//pages.cloudflare.com) `github page`

`cloudflare page` `github page`

Gadzira purojekiti uye sunga iri pamusoro `i18n-demo.github.io`

Iyo nzira inoratidzwa mumufananidzo uri pasi apa:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

Ndapota `Add Account` kuti upe mukana kune `i18n-demo` .

Kana wakasunga dura rerimwe sangano, ungangoda `Add Account` kaviri kuti uipe mvumo kaviri sangano idzva risati raratidzwa.

<img alt="" src="https://p.3ti.site/1721118306.avif">

Tevere sarudza `i18n-demo.github.io` , wobva wadzvanya `Begin setup` , uye shandisa iyo yakasarudzika maitiro kune anotevera matanho.

<img alt="" src="https://p.3ti.site/1721118490.avif">

Mushure mekusunga kekutanga, unofanirwa kumirira maminetsi mashoma usati waiwana.

Mushure mekutumirwa, unogona kusunga zita rezita rezita.

<img alt="" src="https://p.3ti.site/1721119459.avif">

Mushure mekusunga iyo yakasarudzika zita rezita, ndapota enda kuzita rezita kuti ugadzirise nzira yekunyorazve yepeji-peji application, sezvakaratidzwa pazasi:

<img alt="" src="https://p.3ti.site/1721119320.avif">

`i18n.site` iri pamufananidzo iri pamusoro ndeiyi inotevera.

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

Mukuwedzera, ndapota gadzirisa mitemo ye cache, sezvakaratidzwa pasi apa, uye isa nguva ye cache kumwedzi mumwe.

<img alt="" src="https://p.3ti.site/1721125111.avif">

Ndokumbirawo shandura zita rezita rinoenderana munhanho yechipiri pamufananidzo uri pamusoro kune zita rezita rawakasunga.

#### Kugadzirisa Kutumirwa Kwewebhusaiti Mu Mainland China

Kana iwe uchida kuwana zvirinani kuwanikwa kwekuita munzvimbo yetiweki ye mainland China, ndapota [nyoresa zita rezita](//beian.aliyun.com) kutanga.

Zvadaro `CDN` shandisa chinhu chekuchengetedza `out/ol/htm` vemakore muChina +

Iwe unogona kushandisa kumucheto komputa kunyorazve nzira yekuchinjika kune imwechete-peji zvikumbiro, senge [Baidu Smart `CDN`](//cloud.baidu.com/product/cdn.html) Inogona kugadzirwa seizvi:

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

Nekuti `MX` marekodhi uye `CNAME` marekodhi haagone kugarisana, kana iwe uchida kugamuchira zita rezita maemail panguva imwe chete, unofanirwa kushandirapamwe [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) script kuti ubate `CNAME` mu `A` rekodhi.

Pamusoro pezvo, nekuti mhiri kwemakungwa kubhadhariswa kwevatengesi vemakore kuChina kwakadhura, kana iwe uchida kukwidziridza mitengo, unogona kushandisa [Huawei Cloud DNS yemahara geographical resolution](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) uye [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) 's tsika domain zita (sezvinoratidzwa pazasi) kuti uwane traffic diversion──Traffic in mainland China Baidu Cloud `CDN` traffic yepasi rose inoenda cloudflare .

<img alt="" src="https://p.3ti.site/1721119788.avif">

Aya ma deployment optimization mhinduro akanyanya kuoma uye achaunzwa muzvitsauko zvakasiyana mune ramangwana.

#### Generic Domain Name Redirection

Kana iwe `i18n.site` kugadzira webhusaiti sewebhusaiti yako huru, kazhinji unofanirwa kugadzirisa pan-domain redirection, kureva, redirect `*.xxx.com` (kusanganisira `www.xxx.com` ) kuwana `xxx.com` .

Chinodiwa ichi chinogona kuwanikwa nerubatsiro rweAlibaba Cloud `CDN` `EdgeScript` ( [Chirungu](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) [gwaro](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) /

Wedzera zita rezita muAlibaba [CDN](https://cdn.console.aliyun.com/domain/list) uye nongedzera `*.xxx.com` rezita kuAlibaba Cloud `CDN` 's `CNAME` .

<img alt="" src="https://p.3ti.site/1721122000.avif">

Semuenzaniso, iyo pan-domain zita redirection kumisikidza ye `*.i18n.site`

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### Shandisa Ne nginx

Ndokumbira uwedzere gadziriso yakafanana neinotevera `server` nginx apo `/root/i18n/md/out/ol/htm` ndokumbirawo uchinje kune nzira yepurojekiti yako `out/ol/htm` :

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Directory Structure

#### Paruzhinji

Static mafaera ewebhusaiti, senge `favicon.ico` `robots.txt` , nezvimwe.

Iyo icon mafaera pano anogona kugadzirwa ne [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n

`.i18n` Pazasi pedhairekitori pane mafaera ekugadziridza e `i18n.site` , cache yeshanduro, nezvimwe. Ona chitsauko chinotevera ["Magadzirirwo"](/i18n.site/conf) kuti uwane ruzivo.

#### en

Kwakabva dhairekitori remutauro, rinoenderana `.i18n/conf.yml` `fromTo` `en` mufaira rekugadzirisa

```yaml
i18n:
  fromTo:
    en: zh
```

Ndokumbira utarise kugadziridzwa kweshanduro [i18](/i18/use)

