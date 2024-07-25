# Teeka Mu Nkola &

## Akabonero K'okusengeka

`i18n.site` `i18` [`i18`](/i18/use)

## Okuzimba

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Pulojekiti Ya Demo

Ka tutandike ne pulojekiti ya demo tuyige engeri y'okukozesaamu `i18n.site`

Tusooka kukola clone ya demo repository ne tuddukanya ekiragiro nga bwe kiri wansi:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Abakozesa ku lukalu lwa China basobola:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

Erinnya lya dayirekita ya code base clone lirina okuba `md` okusobola okwanguyiza local preview ne `docker` `demo.i18n.site`

### Okuvvunula

`zh` `en` yingira `i18n.site` `md`

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Oluvannyuma lw'okudduka, fayiro z'okuvvuunula n'okutereka zijja kukolebwa Nsaba jjukira okuzigattako mu tterekero `git add . ` mu `md`

### Okusooka Okulaba Mu Kitundu

Teeka era otandike `docker` ( `MAC` bateesa okukozesa [orbstack](https://orbstack.dev) nga runtime ya `docker` ).

Oluvannyuma [https://127.0.0.1](https://127.0.0.1) yingira `./up.sh` `docker`

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Ebirimu Ku Mukutu

`i18n.site`[​](https://developer.mozilla.org/docs/Glossary/SPA)

Oluvannyuma lw'okuddukanya enkyusa eyo waggulu, `htm` ne `v` dayirekita zijja kukolebwa mu `md/out/dev`

Wano, `dev` eraga nti yazimbibwa okusinziira ku fayiro `.i18n/htm/dev.yml` .

`dev` w'ebirimu :

`htm` Wansi wa dayirekita waliwo omuko gw'okuyingira ku mukutu.

`v` Dayirekta erimu ebirimu ku mukutu gwa yintaneeti n'ennamba y'enkyusa.

Local preview ejja kukoppa fayiro zonna mu `out/dev/v/0.1.0`

Okufulumizibwa mu butongole, fayiro ezikyusiddwa zijja kukoppololwa mu dayirekita y'ennamba z'enkyusa empya.

#### Kozesa -c Okulaga Fayiro Y'okusengeka

Fayiro z'okusengeka ez'enjawulo zijja kutondawo dayirekita ezikwatagana wansi wa `out`

Okugeza, `.i18n/htm/ol.yml` ejja kutondawo `out/ol` dayirekita.

`dev.yml` ne `ol.yml` ze nsengeka ezisookerwako.

`dev` ye nfupi ya `development` , ekiikirira embeera y'enkulaakulana, ekozesebwa okusooka okulaba mu kitundu, era era ye fayiro y'okusengeka esookerwako.
`ol` `online` `-n` `npm`

Osobola n'okukola fayiro z'okusengeka endala Kozesa `--htm_conf` ku layini y'ekiragiro okulaga erinnya lya fayiro y'okusengeka:

okugeza nga:
```
i18n.site --htm_conf yourConfig --save
```

Wano `--save`

#### <a rel=id href="#npm" id="npm"></a> Fulumya ebirimu ku npmjs.com

Okufulumya ebirimu ku [npmjs.com](//npmjs.com) kye kizibu ekisookerwako (laba [Front-end High Availability](/i18n.site/feature#ha) ).

##### npm login & Okuta

Teeka `nodejs` kozesa `npm login` okuyingira.

Edit `md/.i18n/htm/ol.yml` kyusa `i18n.site` mu `v: //unpkg.com/i18n.site` okudda ku yo `npm` erinnya ly'ekipapula.

Just use the unoccupied package name [npmjs.com](//npmjs.com) Okukozesa erinnya ly'ekifo ky'omukutu nga erinnya ly'ekipapula kirungi.

**`//unpkg.com/`** `i18n.site` nga `v:` `/.v` `npm`

Duka `i18n.site --npm` oba `i18n.site -n` mu `md` dayirekita okuvvuunula n'okufulumya.

Bw'oba okozesa `~/.npmrc` y'okugatta okutambula obutasalako okufulumya, tekyetaagisa kugiteeka `nodejs`

Bw'oba **`.i18n/v/ol`** erinnya ly'ekipapula mu `v:` mu `ol.yml`

##### Proxy Server Efulumiziddwa npm

Singa abakozesa ku lukalu lwa China basanga obuzibu `https_proxy` ne batasobola kufulumya `npm`

Nga tufudde nti port yo proxy server ye `7890` osobola okuwandiika:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Ebirimu Eby’okwekyaza

Bw’oba ​​oyagala okwekyaza ebirimu, sooka, longoosa `md/.i18n/htm/ol.yml` era okyuse `v: //unpkg.com/i18n.site` ku URL yo entandikwa, nga `v: //i18n-v.xxx.com` .

Yingira mu dayirekita ya `md`

```
i18n.site --htm_conf ol --save
```

oba ekifupi

```
i18n.site -c ol -s
```

Oluvannyuma, sengeka ebirimu `v:` `md/out/ol/v`

N'ekisembayo, **sengeka obudde bwa cache obw'ekkubo erikoma mu `/.v` ku `1s`** , bwe kitaba ekyo ebirimu ebipya ebifulumiziddwa tebisobola kuyingizibwa mangu.

Obudde bw'okutereka amakubo amalala busobola okuteekebwa ku mwaka gumu oba okusingawo okukendeeza ku kusaba okuteetaagisa.

##### Host Ebirimu Ku s3

Okusobola okwekyaza ebirimu, ng'oggyeeko okukozesa seva yo, + endala `CDN` bulijjo kwe kukozesa `S3`

Osobola okukozesa [rclone](https://rclone.org) `S3` `S3`

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Jjukira okutegeka `CDN` olwo obudde bwa cache obw'ekkubo erikoma mu `/.v` bubeere `1s` , bwe kitaba ekyo tojja kusobola kuyingira mu bipya ebifulumiziddwa amangu ddala.

### Okufulumya Omukutu Gwa Yintaneeti

Omukutu gusobola okuteekebwa wonna [github page](https://pages.github.com) era [cloudflare page](https://pages.cloudflare.com) okulonda kirungi.

Olw'okuba omukutu gukwata enzimba y'enkola [ey'olupapula lumu](https://developer.mozilla.org/docs/Glossary/SPA) , jjukira okuddamu okuwandiika ekkubo lya URL `. ` ku `index.html` .

Omuko gw’okuyingiza omukutu gwetaaga okuteekebwa mu nkola omulundi gumu gwokka, era tekyetaagisa kuddamu kuteeka mu nkola lupapula lw’okuyingira ku mukutu okusobola okulongoosa ebirimu ebiddako.

#### Teeka Ku Mukutu Gwa github

Sooka [onyige github okukola ekibiina](https://github.com/account/organizations/new?plan=free) `i18n-demo`

Oluvannyuma tonda sitoowa wansi w'ekitongole kino `i18n-demo.github.io` (Nsaba okyuse `i18n-demo` n'erinnya ly'ekitongole lye watondawo):

<img alt="" src="https://p.3ti.site/1721098657.avif">

Nga ofulumya ebirimu mu kiwandiiko ekyayita, bikoleddwa `out/ol/htm` oyingize dayirekita eno odduke :

```
ln -s index.html 404.html
```


Kubanga `github page` tewagira kuddamu kuwandiika kkubo lya URL, kale `404.html` ekozesebwa mu kifo ky'ekyo.

Oluvannyuma dduka ekiragiro kino wammanga mu `htm` dayirekita (jjukira okukyusa `i18n-demo/i18n-demo.github.io.git` n'endagiriro yo eya sitoowa) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Oluvannyuma lw'okusika koodi, linda okuteekebwa mu nkola kwa `github page`

<img src="//p.3ti.site/1721116586.avif" width="350px">

Ku mukutu gwa demo laba:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Teeka Ku Mukutu Gwa cloudflare

[cloudflare page](//pages.cloudflare.com) Bw’ogeraageranya ne `github page`

`cloudflare page` Okuteekebwa mu nkola kutera kwesigamiziddwa ku kuteeka mu nkola `github page` waggulu.

Tonda pulojekiti era osibe sitoowa eyo waggulu `i18n-demo.github.io`

Enkola eno eragiddwa mu kifaananyi wansi:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

`Add Account` onyige okukkiriza okuyingira mu `i18n-demo` .

Bw’oba ​​osibye sitoowa y’ekitongole ekirala, oyinza okwetaaga okunyiga `Add Account`

<img alt="" src="https://p.3ti.site/1721118306.avif">

Ekiddako londa `i18n-demo.github.io` Warehouse, olwo onyige `Begin setup` , era okozese emiwendo egy'enjawulo ku mitendera egiddako.

<img alt="" src="https://p.3ti.site/1721118490.avif">

Oluvannyuma lw’okusiba omulundi ogusooka, olina okulinda eddakiika ntono nga tonnagifuna.

Oluvannyuma lw'okuteeka mu nkola, osobola okusiba erinnya lya domain erya custom.

<img alt="" src="https://p.3ti.site/1721119459.avif">

Oluvannyuma lw'okusiba erinnya ly'ekifo ery'ennono, nsaba ogende ku linnya ly'ekifo okutegeka okuddamu okuwandiika ekkubo ly'enkola ey'olupapula olumu, nga bwe kiragibwa wansi:

<img alt="" src="https://p.3ti.site/1721119320.avif">

Amateeka agali mu kifaananyi waggulu ge gano wammanga Nsaba `i18n.site` mu layini esooka wansi n'erinnya lya domain erikusibiddwa.

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

Okugatta ku ekyo, nsaba otegeke amateeka ga cache, nga bwe kiragibwa wansi, era oteekewo ebbanga lya cache ku mwezi gumu.

<img alt="" src="https://p.3ti.site/1721125111.avif">

Nsaba okyuse erinnya lya domain erikwatagana mu mutendera ogwokubiri mu kifaananyi waggulu ku linnya lya domain lye wasibye.

#### Okulongoosa Enkola Y’okuteeka Emikutu Gya Yintaneeti Ku Lukalu Lwa China

Bw’oba ​​oyagala okufuna omulimu omulungi ogw’okutuuka ku bantu mu mbeera y’omukutu ku lukalu lwa China, nsaba osooke [owandiise erinnya ly’ekifo](//beian.aliyun.com) .

Olwo, kozesa `out/ol/htm` ebintu by'abatunzi b'ebire ku lukalu lwa `CDN` +

Osobola okukozesa edge computing okuddamu okuwandiika ekkubo okutuukagana n'enkola z'olupapula lumu, nga [Baidu Smart `CDN`](//cloud.baidu.com/product/cdn.html) Esobola okutegekebwa bweti:

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

Kubanga `MX` records ne `CNAME` records teziyinza kubeera wamu, bwoba oyagala okufuna emails za domain name mu kiseera kye kimu, olina okukolagana ne [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) oku flatten `CNAME` into `A` record.

Okugatta ku ekyo, olw’okuba ssente z’ebidduka emitala w’amayanja ez’abatunzi b’ebire ku lukalu lwa China za bbeeyi nnyo, bw’oba ​​oyagala okulongoosa ssente, osobola okukozesa [Huawei DNS 's free geographical resolution](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) ne [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) 's custom domain name (nga bwe kiragibwa wansi) okutuuka ku okukyusa entambula──Ebidduka mu lukalu lwa China Baidu Cloud `CDN` entambula y'ensi yonna egenda cloudflare .

<img alt="" src="https://p.3ti.site/1721119788.avif">

Ebigonjoola bino eby’okulongoosa mu nkola (deployment optimization solutions) bizibu nnyo era bijja kwanjulwa mu ssuula ez’enjawulo mu biseera eby’omu maaso.

#### Okukyusa Erinnya Lya Domain Erya Generic

`*.xxx.com` `www.xxx.com` `i18n.site` `xxx.com`

Okwetaaga kuno kuyinza okutuukirira nga tuyambibwako Alibaba `CDN` 's `EdgeScript` ( [ekiwandiiko ky'Olungereza](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Ekiwandiiko ky'Oluchina](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ) !

Yongera erinnya ly'ekifo mu [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) era olage `*.xxx.com` ly'ekifo ku Alibaba Cloud `CDN` 's `CNAME` .

<img alt="" src="https://p.3ti.site/1721122000.avif">

Okugeza, ensengeka y'okukyusa erinnya lya pan-domain eya `*.i18n.site` mu kifaananyi waggulu eri bweti:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### Teeka Mu Nkola Ne nginx

Nsaba osseeko ensengeka efaananako ne zino wammanga mu `server` nginx nga `/root/i18n/md/out/ol/htm` nsaba ogikyuse mu kkubo lya pulojekiti yo `out/ol/htm` :

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Ensengeka Ya Dayirekita

#### Mu Lujjudde

Fayiro ezitakyukakyuka ez’omukutu, nga `favicon.ico` `robots.txt` , n’ebirala.

Fayiro z'ebifaananyi wano zisobola okukolebwa ne [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n

`.i18n` Wansi wa dayirekita waliwo fayiro z'okusengeka `i18n.site` 's, cache y'okuvvuunula, n'ebirala Laba essuula eddako ["Okusengeka"](/i18n.site/conf) okumanya ebisingawo.

#### en

Dayirekita y'olulimi lw'ensibuko, ekwatagana `.i18n/conf.yml` `fromTo` `en` mu fayiro y'okusengeka

```yaml
i18n:
  fromTo:
    en: zh
```

Nsaba otunuulire ensengeka y'okuvvuunula [i18](/i18/use)

