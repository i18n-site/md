# Faka &

## Uphawu Loqwalaselo

`i18n.site` Isixhobo sokuguqulela `i18` silungisiwe, nceda [ucofe apha ukuze ubhekisele kuxwebhu lwe- `i18` ukuqwalasela uphawu lofikelelo](/i18/use) .

## Faka

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Iprojekthi Yedemo

Masiqale ngeprojekthi yedemo kwaye sifunde ukusebenzisa `i18n.site`

Siqala ngokudibanisa indawo yokugcina idemo kwaye siqhube umyalelo ngolu hlobo lulandelayo:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Abasebenzisi belizwe laseTshayina banoku:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

`demo.i18n.site` `md` `docker`

### Guqulela

Okokuqala, ngenisa `md` weefayili kwaye usebenze `i18n.site` , eya kuguqulela `en` ukuya `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Emva kokusebenza, uguqulelo kunye neefayile ze-cache ziyakwenziwa Nceda ukhumbule ukuzongeza kwindawo yokugcina `git add . ` `md` .

### Imboniso Yasekuhlaleni

[orbstack](https://orbstack.dev) `MAC` `docker` `docker`

Emva koko, ngenisa `docker` weefayili kwaye uqhube `./up.sh` , kwaye emva koko undwendwele ukujonga kwangaphambili [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Thumela Umxholo

`i18n.site` Yamkela uyilo [lwesicelo esinephepha elinye](https://developer.mozilla.org/docs/Glossary/SPA) , kwaye iphepha lokungena kwiwebhusayithi kunye nomxholo wewebhusayithi usasazwa ngokuzimeleyo.

Emva kokwenza uguqulo olungentla, `htm` kunye ne- `v` abalawuli bayakwenziwa kwi `md/out/dev` directory.

Apha, `dev` ukuba yakhiwe ngokusekwe kwi `.i18n/htm/dev.yml` .

Ngaphantsi : `dev`

`htm` koluhlu kukho iphepha lokungena kwiwebhusayithi.

`v` luqulathe umxholo wewebhusayithi onenombolo yenguqulelo.

Imboniso yasekuhlaleni iya kukopa zonke iifayile `out/dev/v/0.1.0` nokuba yeyiphi inombolo yoguqulelo.

Ukukhutshwa ngokusemthethweni, iifayile ezitshintshileyo ziya kukhutshelwa kuluhlu lwenombolo entsha.

#### Sebenzisa -c Ukucacisa Ifayile Yoqwalaselo

Iifayile zoqwalaselo ezahlukeneyo ziyakudala abalawuli abahambelanayo phantsi kwe `out`

Umzekelo, `.i18n/htm/ol.yml` `out/ol` uvimba weefayili.

`dev.yml` `ol.yml` luqwalaselo olungagqibekanga.

`dev` sisishunqulelo se `development` , emele imeko-bume yophuhliso, isetyenziselwa imboniso yobulali, kwaye ikwayifayile yoqwalaselo engagqibekanga.
`ol` sisishunqulelo se `online` , esimele imeko-bume ye-intanethi, isetyenziselwa ukukhululwa ngokusesikweni, kwaye ikwayifayile yoqwalaselo engagqibekanga xa upapasha ukuya `npm` usebenzisa iparamitha yomyalelo welayini `-n` .

Unokwenza ezinye iifayile zoqwalaselo `--htm_conf` kumgca womyalelo ukucacisa igama lefayile yoqwalaselo.

umzekelo:
```
i18n.site --htm_conf yourConfig --save
```

`--save` ibonisa inombolo yenguqulo yokukhululwa.

#### <a rel=id href="#npm" id="npm"></a> Papasha umxholo ku-npmjs.com

Ukupapasha umxholo [npmjs.com](//npmjs.com) esicetyiswayo (bona [i-Front-end High Availability](/i18n.site/feature#ha) ).

##### npm login &

Faka `nodejs` sebenzisa `npm login` ukungena.

Hlela `md/.i18n/htm/ol.yml` tshintsha `i18n.site` kwi `v: //unpkg.com/i18n.site` iye kweyakho `npm` igama lephakheji.

Sebenzisa nje igama lephakeji elingasetyenziswanga [npmjs.com](//npmjs.com)

Xa `i18n.site` ngokusekwe `npm` `/.v` **qiniseka ukuba usebenzisa `//unpkg.com/`** njengesimaphambili se- `v:` ixabiso.

Sebenzisa `i18n.site --npm` okanye `i18n.site -n` kuluhlu `md` kwaye upapashe.

Ukuba usebenzisa imeko- `~/.npmrc` yokudibanisa eqhubekayo ukupapasha, akukho mfuneko yokuyifaka `nodejs`

Ukuba ulungisa igama lepakethe kwi `v:` `ol.yml` , nceda **qiniseka ukuba ucima `.i18n/v/ol` kuqala** kwaye uyipapashe.

##### Iseva Engummeli Epapashwe Ngu-Npm

Ukuba abasebenzisi kwilizwe lase China badibana neengxaki zothungelwano kwaye abakwazi ukupapasha `npm` , banokuseta umahluko wemo engqongileyo `https_proxy` ukuqwalasela umncedisi we proxy.

Ucinga ukuba i-port ye-proxy ye-proxy i- `7890` ungabhala:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Umxholo Ozibambele Wona

Ukuba ufuna ukuzibamba umxholo, kuqala, `md/.i18n/htm/ol.yml` kwaye utshintshe `v: //unpkg.com/i18n.site` kwisimaphambili sakho se-URL, njenge `v: //i18n-v.xxx.com` .

Ngenisa `md` weefayili kwaye uqhube

```
i18n.site --htm_conf ol --save
```

okanye isifinyezo

```
i18n.site -c ol -s
```

Emva koko, qwalasela umxholo kulawulo lwendlela ye `md/out/ol/v` URL ebekwe kwi `v:` .

Okokugqibela, **qwalasela ixesha le-cache yendlela ephela `/.v` `1s`** , kungenjalo umxholo osanda kukhutshwa awunakufikelelwa ngoko nangoko.

Ixesha le-cache lezinye iindlela lingamiselwa unyaka okanye ngaphezulu ukunciphisa izicelo ezingeyomfuneko.

##### Umxholo Wokusingatha Kwi-S3

Ukuzenzela `CDN` , ukongeza ekusebenziseni iseva yakho, enye + eqhelekileyo kukusebenzisa `S3`

Ungasebenzisa [rclone](https://rclone.org) ye `S3` Ngena, emva koko ubhekisele kwaye uguqule iskripthi esingezantsi, kwaye ukhuphele kuphela utshintsho olongezelelekileyo kwi- `S3` rhoqo upapasha.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Khumbula ukuqwalasela `CDN` ukuze ixesha lecache lendlela ephela ngo `/.v` `1s` , kungenjalo awuzukwazi ukufikelela kumxholo osanda kukhutshwa ngoko nangoko.

### Ukupapasha Iwebhusayithi

Iwebhusayithi inokuthunyelwa naphi na [github page](https://pages.github.com) kwaye [cloudflare page](https://pages.cloudflare.com) zikhetho ezilungileyo.

Kuba iwebhusayithi ithatha uyilo lwesicelo [sephepha elinye](https://developer.mozilla.org/docs/Glossary/SPA) , khumbula ukubhala kwakhona indlela ye `index.html` URL engaqulathanga `. `

Iphepha lokungena kwiwebhusayithi lifuna ukuthunyelwa kube kanye kuphela, kwaye akukho mfuneko yokuphinda usebenzise iphepha lokungena kwiwebhusayithi ukuze kuhlaziywe umxholo olandelayo.

#### Sebenzisa Kwiphepha Le-Github

Okokuqala [nqakraza github ukwenza umbutho](https://github.com/account/organizations/new?plan=free) `i18n-demo` gama lilandelayo njengomzekelo.

Emva koko udale indawo yokugcina `i18n-demo` phantsi kwalo mbutho `i18n-demo.github.io`

<img alt="" src="https://p.3ti.site/1721098657.avif">

Xa upapasha umxholo kwinqaku elidlulileyo, : `out/ol/htm`

```
ln -s index.html 404.html
```


Kuba `github page` ayikuxhasi ukubhalwa kwakhona kwendlela ye-URL, ke `404.html` isetyenziswa endaweni yoko.

Emva koko sebenzisa lo myalelo ulandelayo `htm` (khumbula ukutshintsha `i18n-demo/i18n-demo.github.io.git` ngedilesi yakho yokugcina) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Emva kokutyhala ikhowudi, linda ukuthunyelwa kwe `github page`

<img src="//p.3ti.site/1721116586.avif" width="350px">

Ngephepha ledemo nceda ubone:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Sebenzisa Kwiphepha Lecloudflare

[cloudflare page](//pages.cloudflare.com) Xa kuthelekiswa `github page` ibonelela ngokubhala ngokutsha kwaye inobubele kwilizwe laseTshayina kwaye iyafikeleleka ngakumbi.

`cloudflare page` `github page`

Yenza iprojekthi kwaye ubophe apha ngasentla `i18n-demo.github.io`

Inkqubo iboniswe kulo mfanekiso ungezantsi:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

Nceda `Add Account` ukunika ufikelelo kumbutho `i18n-demo` .

Ukuba ubophe i-warehouse yomnye umbutho, unokufuna `Add Account` kabini ukuze ugunyazise kabini ngaphambi kokuba umbutho omtsha uboniswe.

<img alt="" src="https://p.3ti.site/1721118306.avif">

Khetha `Begin setup` `i18n-demo.github.io`

<img alt="" src="https://p.3ti.site/1721118490.avif">

Emva kokubophelela okokuqala, kufuneka ulinde imizuzu embalwa ngaphambi kokuba ufikelele kuyo.

Emva kokuthunyelwa, unokubophelela igama lesizinda esiqhelekileyo.

<img alt="" src="https://p.3ti.site/1721119459.avif">

Emva kokubophelela igama le-domain yesiko, nceda uye kwigama lesizinda ukuze uqwalasele indlela yokubhala ngokutsha isicelo sephepha elinye, njengoko kubonisiwe ngezantsi:

<img alt="" src="https://p.3ti.site/1721119320.avif">

`i18n.site` ekulo mfanekiso ungentla ilandelayo.

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

Ukongeza, nceda uqwalasele imithetho ye-cache, njengoko kuboniswe ngezantsi, kwaye usete ubude be-cache kwinyanga enye.

<img alt="" src="https://p.3ti.site/1721125111.avif">

Nceda utshintshe igama lesizinda elihambelanayo kwinqanaba lesibini kumfanekiso ongentla kwigama lesizinda olibopheyo.

#### Ukuphucula Ukuhanjiswa Kwewebhusayithi Kwilizwe laseTshayina

Ukuba ufuna ukufumana ufikelelo olungcono kwimo yenethiwekhi yelizwe laseTshayina, nceda [ubhalise igama lesizinda](//beian.aliyun.com) kuqala.

Emva koko, sebenzisa `out/ol/htm` yokugcina abathengisi bamafu `CDN` laseTshayina +

Unokusebenzisa i-edge computing ukuze ubhale kwakhona umendo wokuziqhelanisa nezicelo zephepha elinye, ezifana ne [-Baidu Smart `CDN`](//cloud.baidu.com/product/cdn.html) Inokuqwalaselwa ngolu hlobo:

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

`CNAME` `MX` [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) `CNAME` `A`

Ukongeza, ngenxa yokuba iintlawulo zetrafikhi zaphesheya zabathengisi bamafu kwilizwe lase China zibiza kakhulu, ukuba ufuna ukwandisa iindleko, ungasebenzisa [DNS sasimahla sendawo](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) kunye negama lesizinda se [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (njengoko kubonisiwe ngezantsi) ukuphumeza ukuphambuka kwetrafikhi──Itrafikhi kwilizwe lase China Baidu Cloud `CDN` itrafikhi yamazwe ngamazwe iya cloudflare .

<img alt="" src="https://p.3ti.site/1721119788.avif">

Ezi zisombululo zokusasazwa kakuhle zinzima kwaye ziya kwaziswa kwizahluko ezahlukeneyo kwixesha elizayo.

#### Ukwalathisa Kwakhona Igama Lesizinda seGeneric

Ukuba usebenzisa `i18n.site` ukwenza iwebhusayithi njengewebhusayithi yakho ephambili, uhlala ufuna ukuqwalasela ulwalathiso lwe-pan-domain, oko kukuthi, uqondise kwakhona `*.xxx.com` (kubandakanya `www.xxx.com` ) ukufikelela kwi `xxx.com` .

Le mfuno inokufezekiswa ngoncedo lwe Alibaba Cloud `CDN` `EdgeScript` ( [uxwebhu lwesiNgesi](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [uxwebhu lwesiTshayina](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Yongeza igama lesizinda kwi [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) kwaye walathe `*.xxx.com` lesizinda kwi Alibaba Cloud `CDN` 's `CNAME` .

<img alt="" src="https://p.3ti.site/1721122000.avif">

Umzekelo, ulungelelwaniso lwe-pan-domain `*.i18n.site` elikumfanekiso ongasentla lulandelayo:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### Sebenzisa Nge nginx

Nceda wongeze uqwalaselo olufana noku kulandelayo `server` nginx apho `/root/i18n/md/out/ol/htm` nceda uyitshintshe kwindlela yeprojekthi yakho `out/ol/htm` :

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Ulwakhiwo Lukavimba Weefayili

#### Uluntu

Iifayile ezimileyo zewebhusayithi, ezinje `favicon.ico` `robots.txt` , njl.

Iifayile ze icon apha zingenziwa nge [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n

`.i18n` koluhlu lweefayile `i18n.site` , icache yoguqulelo, njl.njl. Bona isahluko esilandelayo ["Uqwalaselo"](/i18n.site/conf) ngeenkcukacha.

#### en

Uvimba weefayili wolwimi lwentsusa, ohambelana `.i18n/conf.yml` `fromTo` `en` kwifayile yoqwalaselo

```yaml
i18n:
  fromTo:
    en: zh
```

Nceda ujonge kuqwalaselo loguqulo [i18](/i18/use)

