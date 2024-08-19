# Teeka Mu Nkola &

## Akabonero K'okusengeka

`i18n.site` erina ekintu ekizimbibwamu `i18` eky'okuvvuunula Nsaba [onyige wano okutunuulira ekiwandiiko `i18` okutegeka akabonero k'okuyingira](/i18/use) .

## Okuzimba

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Pulojekiti Ya Demo

Ka tutandike ne pulojekiti ya demo okuyiga engeri y'okukozesaamu `i18n.site` .

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

Erinnya lya dayirekita lya `demo.i18n.site` code base clone lirina okuba `md` okusobola okwanguyiza local preview ne `docker` .

### Okuvvunula

Okusooka, yingiramu dayirekita `md` odduke `i18n.site` , ekijja okuvvuunula `en` okudda ku `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Oluvannyuma lw'okuddukanya, fayiro z'okuvvuunula n'okutereka zijja kukolebwa Nsaba jjukira `git add . ` mu tterekero mu `md` dayirekita.

### Okusooka Okulaba Mu Kitundu

Teeka era otandike `docker` ( `MAC` omukozesa akuwa amagezi okukozesa [orbstack](https://orbstack.dev) nga runtime for `docker` ).

Oluvannyuma, yingiramu `docker` dayirekita odduke `./up.sh` , n'oluvannyuma genda ku [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Ebirimu Ku Mukutu

`i18n.site` ekwata ensengeka [y’enkola ey’olupapula lumu](https://developer.mozilla.org/docs/Glossary/SPA) , era omuko gw’okuyingira ku mukutu n’ebirimu ku mukutu biteekebwa mu nkola nga byetongodde.

Oluvannyuma lw'okuddukanya enkyusa eyo waggulu, dayirekita `htm` ne `v` zijja kukolebwa wansi wa dayirekita `md/out/dev` .

Wano, `dev` kitegeeza nti ezimbiddwa okusinziira ku fayiro y'okusengeka `.i18n/htm/dev.yml` .

`dev` dayirekita :

Dayirekita ya `htm` ye lupapula lw'okuyingira ku mukutu.

Dayirekita ya `v` erimu ebirimu ku mukutu gwa yintaneeti nga biriko ennamba z’enkyusa.

Local preview tefaayo ku nnamba ya version era ejja kukoppa fayiro zonna mu `out/dev/v/0.1.0` directory.

Okufulumizibwa mu butongole, fayiro ezikyusiddwa zijja kukoppololwa mu dayirekita y'ennamba z'enkyusa empya.

#### Kozesa -c Okulaga Fayiro Y'okusengeka

Fayiro z'okusengeka ez'enjawulo zijja kutondawo dayirekita ezikwatagana mu dayirekita `out` .

Okugeza, `.i18n/htm/ol.yml` ejja kutondawo dayirekita `out/ol` .

`dev.yml` ne `ol.yml` ze nsengeka ezisookerwako.

`dev` kifupi kya `development` , ekiraga embeera y'enkulaakulana, ekozesebwa okusooka okulaba mu kitundu, era era ye fayiro y'okusengeka esookerwako.
`ol` ye nfupi ya `online` , eraga embeera ya yintaneeti, ekozesebwa okufulumya mu butongole Era ye fayiro y'okusengeka esookerwako nga okozesa parameters za layini y'ekiragiro `-n` okutuuka ku `npm` okufulumya.

Osobola n'okukola fayiro endala ez'okusengeka Kozesa `--htm_conf` ku layini y'ekiragiro okulaga erinnya lya fayiro y'okusengeka gy'ogenda okukozesa:

okugeza nga:
```
i18n.site --htm_conf yourConfig --save
```

Wano `--save` ekiikirira ennamba y'enkyusa y'okufulumya okulongoosa.

#### <a rel=id href="#npm" id="npm"></a> Fulumya ebirimu ku npmjs.com

Okufulumya ebirimu ku [npmjs.com](//npmjs.com) kye kizibu ekisookerwako (laba [Front-end High Availability](/i18n.site/feature#ha) ).

##### npm login & Okuta

Teeka `nodejs` , yingira ne `npm login` .

Edit `md/.i18n/htm/ol.yml` era okyuse `i18n.site` mu `v: //unpkg.com/i18n.site` okudda mu linnya lyo erya `npm` package.

Just use the unoccupied package name [npmjs.com](//npmjs.com) Okukozesa erinnya ly'ekifo ky'omukutu nga erinnya ly'ekipapula kirungi.

Nga ofulumya nga osinziira ku package `npm` , **kakasa nti okozesa `//unpkg.com/` ku** prefix ya `v:` value `i18n.site` alongoosezza mu ngeri ey'enjawulo obudde bwa cache bwa `/.v` wansi w'ekkubo lino ery'entandikwa okutuuka ku kulaba mu budde ebifulumiziddwa.

Duka `i18n.site --npm` oba `i18n.site -n` mu `md` dayirekita okuvvuunula n'okufulumya.

Bw’oba okozesa embeera y’okugatta okutambula obutasalako okufulumya, tekyetaagisa kuteeka `nodejs` Just copy the logged-in and publishing permissions `~/.npmrc` to the environment.

Bw'oba okyusa erinnya ly'ekipapula lya `v:` mu `ol.yml` , nsaba **okakasa nti osooka kusazaamu `.i18n/v/ol`** n'oluvannyuma n'ogifulumya.

##### Proxy Server Efulumiziddwa npm

Singa abakozesa ku lukalu lwa China basanga obuzibu bw'omukutu era nga tebasobola kufulumya packages `npm` , basobola okuteekawo enkyukakyuka y'obutonde `https_proxy` okutegeka proxy server.

Nga tufudde nti port yo proxy server eri `7890` , osobola okuwandiika:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Ebirimu Eby’okwekyaza

Bw’oba oyagala okwekyaza ebirimu, sooka olongoose `md/.i18n/htm/ol.yml` okyuse `v: //unpkg.com/i18n.site` ku URL yo, nga `v: //i18n-v.xxx.com` .

Yingiza dayirekita ya `md` odduke

```
i18n.site --htm_conf ol --save
```

oba ekifupi

```
i18n.site -c ol -s
```

Oluvannyuma, sengeka ebirimu mu `md/out/ol/v` dayirekita ku kkubo ly'entandikwa ya URL eriteekeddwa mu `v:` .

N'ekisembayo, **sengeka obudde bwa cache obw'ekkubo erikoma mu `/.v` okutuuka ku `1s`** , bwe kitaba ekyo ebirimu ebipya ebifulumiziddwa tebisobola kuyingizibwa mangu.

Obudde bw'okutereka amakubo amalala busobola okuteekebwa ku mwaka gumu oba okusingawo okukendeeza ku kusaba okuteetaagisa.

##### Host Ebirimu Ku s3

Okusobola okwekyaza ebirimu, ng’oggyeeko okukozesa seva yo, enkola endala `CDN` bulijjo kwe kukozesa `S3` +

Osobola okukozesa [rclone](https://rclone.org) okuyingira mu seva ya `S3` , olwo otunule n'okyusa script eno wammanga, n'okoppa enkyukakyuka ez'okwongera ku `S3` zokka ku buli kufulumizibwa.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Jjukira okutegeka `CDN` olwo obudde bwa cache obw'ekkubo erikoma mu `/.v` bubeere `1s` , bwe kitaba ekyo ebirimu ebipya ebifulumiziddwa tebisobola kuyingizibwa mangu.

### Okufulumya Omukutu Gwa Yintaneeti

Omukutu gusobola okuteekebwa wonna [github page](https://pages.github.com) era [cloudflare page](https://pages.cloudflare.com) okulonda kirungi.

Olw’okuba omukutu gukozesa ensengeka [y’enkola ey’olupapula lumu](https://developer.mozilla.org/docs/Glossary/SPA) , jjukira okuddamu okuwandiika amakubo ga URL agataliimu `. ` ku `index.html` .

Omuko gw’okuyingiza omukutu gwetaaga okuteekebwa mu nkola omulundi gumu gwokka, era tekyetaagisa kuddamu kuteeka mu nkola lupapula lw’okuyingira ku mukutu okusobola okulongoosa ebirimu ebiddako.

#### Teeka Ku Mukutu Gwa github

Sooka `i18n-demo` [github okukola ekitongole](https://github.com/account/organizations/new?plan=free) .

Oluvannyuma tonda sitoowa `i18n-demo.github.io` wansi w'ekitongole kino (nsaba okyuse `i18n-demo` n'erinnya ly'ekitongole lye watondawo):

![](https://p.3ti.site/1721098657.avif)

Nga ofulumya ebirimu mu kiwandiiko ekyayita, `out/ol/htm` bikoleddwa Nsaba oyingize dayirekita eno odduke :

```
ln -s index.html 404.html
```


Olw'okuba `github page` tewagira kuddamu kuwandiika kkubo lya URL, `404.html` ekozesebwa mu kifo ky'ekyo.

Oluvannyuma dduka ekiragiro kino wammanga mu `htm` directory (jjukira okukyusa `i18n-demo/i18n-demo.github.io.git` n'ossaamu endagiriro yo eya sitoowa) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Oluvannyuma lw'okusika koodi, linda okuteekebwa mu nkola kwa `github page` okutambula obulungi (nga bwe kiragibwa wansi) nga tonnagiyingira.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Ku mukutu gwa demo laba:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Teeka Ku Mukutu Gwa cloudflare

[cloudflare page](//pages.cloudflare.com) `github page`

Okuteekebwa mu nkola kwa `cloudflare page` kutera okusinziira ku kuteekebwa mu nkola kwa `github page` waggulu.

Tonda pulojekiti era osibe sitoowa ya `i18n-demo.github.io` waggulu.

Enkola eno eragiddwa mu kifaananyi wansi:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Nsaba onyige `Add Account` okukkiriza okuyingira mu kibiina `i18n-demo` .

Bw’oba osibye sitoowa y’ekitongole ekirala, oyinza okwetaaga okunyiga `Add Account` emirundi ebiri okukkiriza emirundi ebiri ng’ekitongole ekipya tekinnalagibwa.

![](https://p.3ti.site/1721118306.avif)

Ekiddako, londa sitoowa `i18n-demo.github.io` , olwo onyige `Begin setup` , era okozese emiwendo egy’enjawulo ku mitendera egiddako.

![](https://p.3ti.site/1721118490.avif)

Oluvannyuma lw’okusiba omulundi ogusooka, olina okulinda eddakiika ntono nga tonnagifuna.

Oluvannyuma lw'okuteeka mu nkola, osobola okusiba erinnya lya domain erya custom.

![](https://p.3ti.site/1721119459.avif)

Oluvannyuma lw'okusiba erinnya ly'ekifo ery'ennono, nsaba ogende ku linnya ly'ekifo okutegeka okuddamu okuwandiika ekkubo ly'enkola ey'olupapula olumu, nga bwe kiragibwa wansi:

![](https://p.3ti.site/1721119320.avif)

Amateeka agali mu kifaananyi waggulu ge gano wammanga Nsaba okyuse `i18n.site` mu layini esooka wansi n'erinnya lya domain lye wasibye.

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

![](https://p.3ti.site/1721125111.avif)

Nsaba okyuse erinnya lya domain erikwatagana mu mutendera ogwokubiri mu kifaananyi waggulu ku linnya lya domain lye wasibye.

#### Okulongoosa Enkola Y’okuteeka Emikutu Gya Yintaneeti Ku Lukalu Lwa China

Bw’oba oyagala okufuna omulimu omulungi ogw’okutuuka ku bantu mu mbeera y’omukutu ku lukalu lwa China, nsaba osooke [owandiise erinnya ly’ekifo](//beian.aliyun.com) .

Olwo, kozesa okutereka ebintu by'abatunzi b'ebire ku lukalu lwa + `CDN` Teeka ebirimu bino wammanga `out/ol/htm` .

Osobola okukozesa edge computing okuddamu okuwandiika ekkubo okutuukagana n'enkola z'olupapula lumu Okugeza, [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) esobola okutegekebwa bweti:

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

Olw’okuba record `MX` ne record `CNAME` teziyinza kubeera wamu, bw’oba oyagala okufuna emails z’amannya ga domain mu kiseera kye kimu, olina okukolagana ne [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) okutuuka ku level `CNAME` mu record `A` .

Okugatta ku ekyo, olw’okuba ssente z’ebidduka emitala w’amayanja ez’abatunzi b’ebire ku lukalu lwa China za bbeeyi nnyo, bw’oba oyagala okulongoosa ssente, osobola okukozesa [Huawei DNS 's free geographical resolution](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) ne [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) 's custom domain name (nga bwe kiragibwa wansi) okutuuka ku traffic diversion──Entambula ku lukalu lwa China Baidu Cloud `CDN` , entambula y'ensi yonna egenda cloudflare .

![](https://p.3ti.site/1721119788.avif)

Ebigonjoola bino eby’okulongoosa mu nkola (deployment optimization solutions) bizibu nnyo era bijja kwanjulwa mu ssuula ez’enjawulo mu biseera eby’omu maaso.

#### Okukyusa Erinnya Lya Domain Erya Generic

Bw’oba okozesa `i18n.site` okukola omukutu ng’omukutu gwo omukulu, ebiseera ebisinga weetaaga okutegeka okukyusakyusa mu pan-domain, kwe kugamba, okukyusa okuyingira ku `*.xxx.com` (nga mw’otwalidde ne `www.xxx.com` ) okudda ku `xxx.com` .

Okwetaaga kuno kuyinza okutuukirira nga tuyambibwako Alibaba Cloud `CDN` `EdgeScript` ( [Ekiwandiiko ky'Olungereza](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Ekiwandiiko ky'Oluchina](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ) .

Yongera erinnya lya domain mu [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) era olage erinnya lya domain `*.xxx.com` ku `CNAME` mu Alibaba Cloud `CDN` .

![](https://p.3ti.site/1721122000.avif)

Okugeza, ensengeka y’okukyusa erinnya lya pan-domain eya `*.i18n.site` mu kifaananyi waggulu eri bweti:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

#### Teeka Mu Nkola Ne nginx

Nsaba `/root/i18n/md/out/ol/htm` ensengeka efaananako ne zino `out/ol/htm` mu katundu `server` aka nginx

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

#### `public`

Fayiro ezitakyukakyuka ez’omukutu, nga `favicon.ico` , `robots.txt` , n’ebirala.

Fayiro z'ebifaananyi wano zisobola okukolebwa ne [realfavicongenerator.net](https://realfavicongenerator.net)

#### `.i18n`

Wansi wa `.i18n` dayirekita waliwo fayiro z'okusengeka, ekifo eky'okuvvuunula, n'ebirala ebya `i18n.site` Laba essuula eddako ["Okusengeka"](/i18n.site/conf) okumanya ebisingawo.

#### `en`

Dayirekita y'olulimi lw'ensibuko, ekwatagana ne `en` ku `fromTo` mu `.i18n/conf.yml` fayiro y'okusengeka

```yaml
i18n:
  fromTo:
    en: zh
```

Nsaba otunuulire ensengeka y'okuvvuunula [i18](/i18/use)