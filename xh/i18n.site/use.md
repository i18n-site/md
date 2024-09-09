# Faka &

## Uphawu Loqwalaselo

`i18n.site` inesixhobo esakhelwe- `i18` sokuguqulela Nceda [cofa apha ukubhekisa kuxwebhu olu `i18` ukuqwalasela uphawu lofikelelo](/i18/use)

## Faka

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Iprojekthi Yedemo

Masiqale ngeprojekthi yedemo ukuze sifunde ukusebenzisa `i18n.site` .

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

Igama likavimba weefayili ze `demo.i18n.site` ikhowudi ye-clone yesiseko kufuneka ibe ngu `md` ukuququzelela umboniso wendawo ngo `docker` .

### Guqulela

Okokuqala, faka i- `md` directory kwaye usebenzise `i18n.site` , eya kuguqulela `en` ukuya ku `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Emva kokusebenza, uguqulelo kunye neefayile ze-cache ziyakwenziwa Nceda ukhumbule `git add . ` kwindawo yokugcina kwi- `md` directory.

### Imboniso Yasekuhlaleni

Faka kwaye uqalise `docker` ( umsebenzisi `MAC` ucebisa ukusebenzisa [orbstack](https://orbstack.dev) njengexesha lokuqhutywa kwe `docker` ).

Emva koko, ngenisa uluhlu lwe `docker` kwaye uqhube `./up.sh` , kwaye emva koko [https://127.0.0.1](https://127.0.0.1) ukujonga kuqala.

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Thumela Umxholo

`i18n.site` ithatha uyilo [lwesicelo sephepha elinye](https://developer.mozilla.org/docs/Glossary/SPA) , kwaye iphepha lokungena kwiwebhusayithi kunye nomxholo wewebhusayithi zihanjiswa ngokuzimeleyo.

Emva kokwenza olu guqulelo lungentla, abalawuli `htm` kunye no `v` baya kwenziwa phantsi kwe `md/out/dev` directory.

Apha, `dev` uthetha ukuba yakhiwe ngokusekelwe kwifayile yoqwalaselo `.i18n/htm/dev.yml` .

`dev` ulawulo :

Uvimba we `htm` kwiphepha lokungena kwiwebhusayithi.

I `v` iqulathe umxholo wewebhusayithi enamanani oguqulelo.

Imboniso yasekuhlaleni ayikhathali ngenani loguqulelo kwaye iya kukopa zonke iifayile kulawulo `out/dev/v/0.1.0` .

Ukukhutshwa ngokusemthethweni, iifayile ezitshintshileyo ziya kukhutshelwa kuluhlu lwenombolo entsha.

#### Sebenzisa -c Ukucacisa Ifayile Yoqwalaselo

Iifayile zoqwalaselo ezahlukeneyo ziyakudala abalawuli abahambelanayo kulawulo lwe `out` .

Umzekelo, `.i18n/htm/ol.yml` uya kudala uluhlu `out/ol` .

`dev.yml` kunye ne `ol.yml` lulungelelwaniso olungagqibekanga.

U `dev` sisishunqulelo sika `development` , ebonisa imeko-bume yophuhliso, esetyenziselwa imboniso yobulali, kwaye ikwayifayile yoqwalaselo engagqibekanga.
`ol` sisishunqulelo se- `online` , ebonisa indawo ye-intanethi, esetyenziselwa ukukhululwa ngokusemthethweni Ikwayifayile yoqwalaselo engagqibekanga xa usebenzisa iparamitha zomgca womyalelo `-n` ukuya ku `npm` ukukhulula.

Unokwenza ezinye iifayile zoqwalaselo Sebenzisa `--htm_conf` kumgca womyalelo ukucacisa igama lefayile yoqwalaselo oza kulisebenzisa.

umzekelo:
```
i18n.site --htm_conf yourConfig --save
```

Apha `--save` umele inombolo yohlaziyo lwenguqulo.

#### <a rel=id href="#npm" id="npm"></a> Papasha umxholo ku-npmjs.com

Ukupapasha umxholo [npmjs.com](//npmjs.com) esicetyiswayo (bona [i-Front-end High Availability](/i18n.site/feature#ha) ).

##### npm login &

Faka i `nodejs` , ngena nge `npm login` .

Hlela `md/.i18n/htm/ol.yml` kwaye utshintshe `i18n.site` kwisi `v: //unpkg.com/i18n.site` uye kwigama lakho lephakheji `npm` .

Sebenzisa nje igama lephakeji elingasetyenziswanga [npmjs.com](//npmjs.com)

Xa upapasha ngokusekwe kwiphakheji `npm` , **qiniseka ukuba usebenzisa `//unpkg.com/` kwi** -prefix ye `v:` ixabiso le `i18n.site` liye lalungisa ngokukodwa ixesha le-cache ye `/.v` phantsi kwesi simaphambili sendlela yokufezekisa ukujonga kwangexesha kokukhutshwa okutsha.

Sebenzisa `i18n.site --npm` okanye `i18n.site -n` kuluhlu lwe `md` ukuguqulela kunye nokupapasha.

Ukuba usebenzisa imeko-bume yokudibanisa eqhubekayo ukupapasha, akukho mfuneko yokufaka `nodejs` Khuphela nje i-logged-in kunye neemvume zokupapasha `~/.npmrc` kwindawo.

Ukuba ulungisa igama lepakethe ka `v:` ku- `ol.yml` , nceda **qiniseka ukuba ucima `.i18n/v/ol` kuqala** kwaye emva koko uyipapashe.

##### Iseva Engummeli Epapashwe Ngu-Npm

Ukuba abasebenzisi kwilizwe laseTshayina badibana neengxaki zenethiwekhi kwaye abakwazi ukupapasha iipakethe `npm` , banokuseta ukuguquguquka kokusingqongileyo `https_proxy` ukuqwalasela umncedisi weproxy.

Ucinga ukuba i-port ye-proxy yakho ngu `7890` , ungabhala:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Umxholo Ozibambeleyo

Ukuba ufuna ukuzibamba ngokwakho umxholo, hlela kuqala `md/.i18n/htm/ol.yml` kwaye utshintshe `v: //unpkg.com/i18n.site` kwisimaphambili sakho se-URL, njenge `v: //i18n-v.xxx.com` .

Ngenisa u `md` uvimba weefayili kwaye uqhube

```
i18n.site --htm_conf ol --save
```

okanye isifinyezo

```
i18n.site -c ol -s
```

Emva koko, qwalasela umxholo kuluhlu lwe `md/out/ol/v` kwi-URL yesimaphambili sendlela ebekwe kwi `v:` .

Ekugqibeleni, **qwalasela ixesha le-cache yendlela ephela ngo `/.v` ukuya ku `1s`** , ngaphandle koko umxholo osanda kukhutshwa awukwazi ukufikelela ngokukhawuleza.

Ixesha le-cache lezinye iindlela lingamiselwa unyaka okanye ngaphezulu ukunciphisa izicelo ezingeyomfuneko.

##### Umxholo Wokusingatha Kwi-S3

Ukuzibamba umxholo, ukongeza ekusebenziseni iseva yakho, enye inketho eqhelekileyo kukusebenzisa i + `S3` `CDN` .

Ungasebenzisa [rclone](https://rclone.org) ukungena kwi-server `S3` , emva koko ubhekisele kwaye ulungise le script ilandelayo, kwaye ukhuphele kuphela utshintsho olunyukayo ku `S3` kukhupho ngalunye.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Khumbula ukuqwalasela `CDN` ukwenzela ukuba ixesha le-cache yendlela ephela kwi `/.v` yi- `1s` , ngaphandle koko umxholo osanda kukhutshwa awukwazi ukufikelela ngokukhawuleza.

### Ukupapasha Iwebhusayithi

Iwebhusayithi inokuthunyelwa naphi na [github page](https://pages.github.com) kwaye [cloudflare page](https://pages.cloudflare.com) zikhetho ezilungileyo.

Ngenxa yokuba iwebhusayithi isebenzisa i [-architecture yesicelo sephepha elinye](https://developer.mozilla.org/docs/Glossary/SPA) , khumbula ukubhala kwakhona iindlela ze-URL ezingenayo `. ` ukuya kwi `index.html` .

Iphepha lokungena kwiwebhusayithi lifuna ukuthunyelwa kube kanye kuphela, kwaye akukho mfuneko yokuphinda usebenzise iphepha lokungena kwiwebhusayithi ukuze kuhlaziywe umxholo olandelayo.

#### Sebenzisa Kwiphepha Le-Github

Okokuqala [nqakraza github ukwenza umbutho](https://github.com/account/organizations/new?plan=free) Eli gama lilandelayo ngu `i18n-demo` njengomzekelo.

Emva koko udale indawo yokugcina `i18n-demo.github.io` phantsi kwalo mbutho (nceda ubuyisele `i18n-demo` ngegama lombutho olenzileyo):

![](https://p.3ti.site/1721098657.avif)

Xa upapasha umxholo kwinqaku elidlulileyo, `out/ol/htm` yenziwe :

```
ln -s index.html 404.html
```


Kuba `github page` akakuxhasi ukubhalwa kwakhona kwendlela ye-URL, `404.html` kusetyenziswa endaweni yoko.

Emva koko sebenzisa lo myalelo ulandelayo kulawulo `htm` (khumbula ukutshintsha `i18n-demo/i18n-demo.github.io.git` ngedilesi yakho yokugcina) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Emva kokutyhala ikhowudi, linda ukuthunyelwa kwe `github page` ukuba iqhube ngempumelelo (njengoko kubonisiwe ngezantsi) ngaphambi kokuba ufikelele kuyo.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Ngephepha ledemo nceda ubone:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Sebenzisa Kwiphepha Lecloudflare

Xa kuthelekiswa [cloudflare page](//pages.cloudflare.com) `github page` , ibonelela ngokuphinda kubhalwe indlela kwaye inobubele kwilizwe laseTshayina kwaye iyafikeleleka ngakumbi.

Ukusasazwa kwe `cloudflare page` ngokuqhelekileyo kusekelwe ekuhanjisweni kwe `github page` ngasentla.

Yenza iprojekthi kwaye ubophe i `i18n-demo.github.io` warehouse ngasentla.

Inkqubo iboniswe kumzobo ongezantsi:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Nceda ucofe u `Add Account` ukunika imvume yokufikelela kumbutho `i18n-demo` .

Ukuba ubophe i-warehouse yomnye umbutho, unokufuna ukucofa u `Add Account` kabini ukugunyazisa kabini ngaphambi kokuba umbutho omtsha uboniswe.

![](https://p.3ti.site/1721118306.avif)

Okulandelayo, khetha indawo yokugcina `i18n-demo.github.io` , emva koko ucofe u `Begin setup` , kwaye usebenzise amaxabiso angagqibekanga kumanyathelo alandelayo.

![](https://p.3ti.site/1721118490.avif)

Emva kokubophelela okokuqala, kufuneka ulinde imizuzu embalwa ngaphambi kokuba ufikelele kuyo.

Emva kokuthunyelwa, unokubophelela igama lesizinda esiqhelekileyo.

![](https://p.3ti.site/1721119459.avif)

Emva kokubophelela igama le-domain yesiko, nceda uye kwigama lesizinda ukuze uqwalasele indlela yokubhala ngokutsha isicelo sephepha elinye, njengoko kubonisiwe ngezantsi:

![](https://p.3ti.site/1721119320.avif)

`i18n.site` ekulo mfanekiso ungentla ngolu hlobo lulandelayo.

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

Ukongeza, nceda uqwalasele imithetho ye-cache, njengoko kuboniswe ngezantsi, kwaye usete ubude be-cache kwinyanga enye.

![](https://p.3ti.site/1721125111.avif)

Nceda utshintshe igama lesizinda elihambelanayo kwinqanaba lesibini kumfanekiso ongentla kwigama lesizinda olibopheyo.

#### Ukuphucula Ukuhanjiswa Kwewebhusayithi Kwilizwe laseTshayina

Ukuba ufuna ukufumana ufikelelo olungcono kwimo yenethiwekhi yelizwe laseTshayina, nceda [ubhalise igama lesizinda](//beian.aliyun.com) kuqala.

Emva koko, sebenzisa into yokugcina abathengisi bamafu kwilizwe + `CDN` Sebenzisa umxholo olandelayo `out/ol/htm` .

Unokusebenzisa i-edge computing ukuze ubhale kwakhona umendo wokuziqhelanisa nezicelo zephepha elinye Umzekelo, [i-Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) inokuqwalasela ngolu hlobo:

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

Ngenxa yokuba irekhodi ye `MX` kunye nerekhodi ye `CNAME` ayikwazi ukuhlalisana, ukuba ufuna ukufumana i-imeyile yegama lesizinda ngexesha elifanayo, kufuneka usebenzisane [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) kwinqanaba le `CNAME` kwirekhodi ye `A` .

Ukongeza, ngenxa yokuba iintlawulo zetrafikhi zaphesheya zabathengisi bamafu kwilizwe lase China zibiza kakhulu, ukuba ufuna ukwandisa iindleko, ungasebenzisa [DNS sasimahla sendawo](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) kunye negama lesizinda se [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (njengoko kubonisiwe ngezantsi) ukuphumeza i-traffic diversion──I-Traffic kwilizwe lase-China i-Baidu Cloud `CDN` , i-traffic traffic international iya cloudflare .

![](https://p.3ti.site/1721119788.avif)

Ezi zisombululo zokusasazwa kakuhle zinzima kwaye ziya kwaziswa kwizahluko ezahlukeneyo kwixesha elizayo.

#### Ukwalathisa Kwakhona Igama Lesizinda seGeneric

Ukuba usebenzisa `i18n.site` ukuvelisa iwebhusayithi njengewebhusayithi yakho ephambili, ngokuqhelekileyo kufuneka uqwalasele i-pan-domain redirection, oko kukuthi, ukuqondisa kwakhona ukufikelela kwi `*.xxx.com` (kuquka `www.xxx.com` ) ukuya kwi `xxx.com` .

Le mfuno inokufezekiswa ngoncedo lwe Alibaba Cloud `CDN` `EdgeScript` ( [uxwebhu lwesiNgesi](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Uxwebhu lwesiTshayina](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Yongeza igama lesizinda kwi [-Alibaba CDN](https://cdn.console.aliyun.com/domain/list) kwaye ubonise igama lesizinda `*.xxx.com` ukuya kwi `CNAME` kwi-Alibaba Cloud `CDN` .

![](https://p.3ti.site/1721122000.avif)

Umzekelo, ulungelelwaniso lwe-pan-domain ye-redirection ye `*.i18n.site` emfanekisweni ongentla ngolu hlobo lulandelayo:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

#### Sebenzisa Nge nginx

Nceda wongeze `/root/i18n/md/out/ol/htm` olufana noku kulandelayo kumhlathi we `out/ol/htm` `server` nginx

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Ubume Boluhlu

#### `public`

Iifayile ezimileyo zewebhusayithi, ezifana ne `favicon.ico` , `robots.txt` , njl.

Iifayile ze icon apha zingenziwa nge [realfavicongenerator.net](https://realfavicongenerator.net)

#### `.i18n`

Ngaphantsi kwe `.i18n` directory kukho iifayile zoqwalaselo, i-cache [yokuguqulela](/i18n.site/conf) , njl `i18n.site`

#### `en`

Uvimba weefayili wolwimi lwentsusa, ohambelana ne `en` yesi- `fromTo` ku `.i18n/conf.yml` ifayile yoqwalaselo

```yaml
i18n:
  fromTo:
    en: zh
```

Nceda ujonge kuqwalaselo loguqulo [i18](/i18/use)