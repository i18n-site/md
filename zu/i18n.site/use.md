# Faka &

## Ithokheni Yokumisa

`i18n.site` inethuluzi lokuhumusha elakhelwe ngaphakathi elingu- `i18` Sicela [uchofoze lapha ukuze ubhekisele kudokhumenti `i18` ukuze ulungiselele ithokheni yokufinyelela](/i18/use) .

## Faka

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Iphrojekthi Yedemo

Ake siqale ngephrojekthi yedemo ukuze sifunde ukusebenzisa `i18n.site` .

Okokuqala sihlanganisa inqolobane yedemo bese siqhuba umyalo ngale ndlela elandelayo:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Abasebenzisi abasezweni laseChina bangakwazi:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

Igama lohla lwemibhalo lesisekelo sekhodi `demo.i18n.site` kufanele libe ngu `md` ukuze kulungiselelwe ukuhlola kuqala kwendawo ngo `docker` .

### Humusha

Okokuqala, faka umkhombandlela we `md` bese uqhuba `i18n.site` , ozohumusha `en` kuya ku `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Ngemva kokuqalisa, amafayela okuhumusha kanye nenqolobane azokwenziwa. Sicela ukhumbule `git add . ` endaweni yokugcina kuhla lwemibhalo engu `md` .

### Ukubuka Kuqala Kwendawo

Faka futhi uqale `docker` ( umsebenzisi `MAC` uncoma ukusebenzisa [orbstack](https://orbstack.dev) njengesikhathi sokusebenza sika `docker` ).

Bese, faka uhla lwemibhalo `docker` bese usebenzisa `./up.sh` , bese uvakashela [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Thumela Okuqukethwe

`i18n.site` yamukela ukwakheka [kwesicelo sekhasi elilodwa](https://developer.mozilla.org/docs/Glossary/SPA) , futhi ikhasi lokungena lewebhusayithi nokuqukethwe kwewebhusayithi kuthunyelwa ngokuzimela.

Ngemva kokusebenzisa ukuhumusha okungenhla, uhla lwemibhalo `htm` no `v` luzokwenziwa ngaphansi kohla lwemibhalo `md/out/dev` .

Lapha, `dev` usho ukuthi yakhiwe ngokusekelwe kufayela lokucushwa elingu `.i18n/htm/dev.yml` .

`dev` inkomba :

I-directory `htm` yikhasi lokungena lewebhusayithi.

Inkomba engu `v` iqukethe iwebhusayithi enezinombolo zenguqulo.

Ukubuka kuqala kwendawo akunandaba nenombolo yenguqulo futhi kuzokopisha wonke amafayela kuhla lwemibhalo elingu `out/dev/v/0.1.0` .

Ukuze kukhishwe ngokusemthethweni, amafayela ashintshiwe azokopishelwa kunkomba yenombolo yenguqulo entsha.

#### Sebenzisa -c Ukuze Ucacise Ifayela Lokumisa

Amafayela okumisa ahlukene azodala izinkomba ezihambisanayo kuhla lwemibhalo elingu `out` .

Isibonelo, `.i18n/htm/ol.yml` uzodala uhla lwemibhalo olu `out/ol` .

`dev.yml` kanye no `ol.yml` yizicucu ezizenzakalelayo.

`dev` isifinyezo sika- `development` , esibonisa indawo yokuthuthuka, esetshenziselwa ukubuka kuqala kwendawo, futhi iyifayela lokumisa elizenzakalelayo.
`ol` isifinyezo sika- `online` , esibonisa indawo eku-inthanethi, esetshenziselwa ukukhululwa ngokusemthethweni Kuphinde kube ifayela lokumisa elizenzakalelayo lapho kusetshenziswa imingcele yomugqa womyalo `-n` kuya ku `npm` ukuze ukhulule.

Ungakwazi futhi ukudala amanye amafayela wokumisa Sebenzisa u `--htm_conf` emugqeni womyalo ukuze ucacise igama lefayela lokumisa ozolisebenzisa:

Ngokwesibonelo:
```
i18n.site --htm_conf yourConfig --save
```

Lapha `--save` umele inombolo yenguqulo yokukhishwa.

#### <a rel=id href="#npm" id="npm"></a> Shicilela okuqukethwe ku-npmjs.com

Ukushicilela okuqukethwe ku- [npmjs.com](//npmjs.com) yisixazululo esimisiwe esinconywayo (bona [Ukutholakala Okuphezulu Okuphezulu](/i18n.site/feature#ha) ).

##### npm login &

Faka `nodejs` , ngena nge `npm login` .

Hlela okuthi `md/.i18n/htm/ol.yml` futhi ushintshe `i18n.site` koku `v: //unpkg.com/i18n.site` kube igama lakho lamaphakheji angu `npm` .

Vele usebenzise igama lephakeji elingahlali muntu [npmjs.com](//npmjs.com)

Uma ushicilela ngokusekelwe kuphakheji `npm` , **qiniseka ukuthi usebenzisa `//unpkg.com/` kwisiqalo** `i18n.site` elingu `v:` uthuthukise ngokukhethekile isikhathi senqolobane esingu `/.v` ngaphansi kwale ndlela yesiqalo ukuze uzuze ukubukwa ngesikhathi kokukhishwa okusha.

Qalisa `i18n.site --npm` noma `i18n.site -n` kuhla lwemibhalo `md` ukuze uhumushe futhi ushicilele.

Uma usebenzisa indawo eqhubekayo yokuhlanganisa ukuze ushicilele, asikho isidingo sokufaka `nodejs` Vele ukopishe izimvume zokungena ngemvume nokushicilela `~/.npmrc` endaweni.

Uma ulungisa igama lephakeji lika `v:` ku- `ol.yml` , sicela **uqinisekise ukuthi ususa `.i18n/v/ol` kuqala** bese ukushicilele.

##### Iseva Elibamba Eshicilelwe Ngu-Npm

Uma abasebenzisi e-Mainland China behlangabezana nezinkinga zenethiwekhi futhi bengakwazi ukushicilela amaphakheji `npm` , bangasetha ukuhluka kwemvelo `https_proxy` ukuze kulungiselelwe iseva elibamba.

Ngokucabanga ukuthi imbobo yeseva yommeleli wakho ngu `7890` , ungabhala:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Okuqukethwe Okuzibambele Wena

Uma ufuna ukuzibamba ngokwakho okuqukethwe, qala uhlele `md/.i18n/htm/ol.yml` bese ushintsha `v: //unpkg.com/i18n.site` kusiqalo se-URL yakho, njengokuthi `v: //i18n-v.xxx.com` .

Faka u `md` lwemibhalo bese ugijima

```
i18n.site --htm_conf ol --save
```

noma isifinyezo

```
i18n.site -c ol -s
```

Bese, ulungiselela okuqukethwe ohlwini lwemibhalo `md/out/ol/v` endleleni yesiqalo se-URL esethwe ku `v:` .

Okokugcina, **lungiselela isikhathi senqolobane yendlela egcina ngo `/.v` ukuya ku `1s`** , ngaphandle kwalokho okuqukethwe okusha akukwazi ukufinyelelwa ngokushesha.

Isikhathi senqolobane sezinye izindlela singasethwa sibe unyaka owodwa noma ngaphezulu ukuze kuncishiswe izicelo ezingadingekile.

##### Setha Okuqukethwe Ku-S3

Ukuze uzibambele ngokwakho okuqukethwe, ngaphezu kokusebenzisa iseva yakho `CDN` enye inketho evamile ukusebenzisa `S3` + .

Ungasebenzisa [rclone](https://rclone.org) ukuze ungene kuseva `S3` , bese ubhekisela futhi ulungise umbhalo olandelayo, futhi ukopishe kuphela izinguquko ezikhulayo ku `S3` ekukhishweni ngakunye.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Khumbula ukulungisa `CDN` ukuze isikhathi senqolobane yendlela egcina ngo `/.v` sibe ngu `1s` , ngaphandle kwalokho okuqukethwe okusanda kukhishwa akukwazi ukufinyelelwa ngokushesha.

### Shicilela Iwebhusayithi

Iwebhusayithi ingasatshalaliswa noma kuphi [github page](https://pages.github.com) futhi [cloudflare page](https://pages.cloudflare.com) yizinqumo ezinhle.

Ngoba iwebhusayithi isebenzisa ukwakheka [kohlelo lokusebenza lwekhasi elilodwa](https://developer.mozilla.org/docs/Glossary/SPA) , khumbula ukubhala kabusha imizila ye-URL engaqukathi `. ` ukuya ku `index.html` .

Ikhasi lokufaka iwebhusayithi lidinga ukusetshenziswa kanye kuphela, futhi asikho isidingo sokuphinda usebenzise ikhasi lokufaka iwebhusayithi ukuze uthole izibuyekezo zokuqukethwe ezilandelayo.

#### Sebenzisa Ekhasini Le-Github

Okokuqala [chofoza github ukuze udale inhlangano](https://github.com/account/organizations/new?plan=free) . Igama lenhlangano elilandelayo ngu- `i18n-demo` njengesibonelo.

Bese udala indawo yokugcina impahla `i18n-demo.github.io` ngaphansi kwale nhlangano (sicela ufake igama lenhlangano olidalile esikhundleni soku `i18n-demo` ):

![](https://p.3ti.site/1721098657.avif)

Uma ushicilela okuqukethwe esihlokweni esedlule, kukhiqizwa okungu `out/ol/htm` . Sicela ufake lolu hlu lwemibhalo bese uqalisa :

```
ln -s index.html 404.html
```


Ngenxa yokuthi `github page` akakusekeli ukubhalwa kabusha kwendlela ye-URL, kusetshenziswa `404.html` esikhundleni salokho.

Bese usebenzisa umyalo olandelayo ohlwini lwemibhalo `htm` (khumbula ukufaka ikheli lakho le-warehouse esikhundleni sika `i18n-demo/i18n-demo.github.io.git` ) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Ngemva kokuphusha ikhodi, linda ukuthunyelwa kuka `github page` ukuze kusebenze ngempumelelo (njengoba kukhonjisiwe ngezansi) ngaphambi kokuthi uyifinyelele.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Ngekhasi ledemo sicela ubone:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Sebenzisa Ekhasini Le-Cloudflare

Uma kuqhathaniswa no [cloudflare page](//pages.cloudflare.com) `github page` , inikeza indlela yokubhala kabusha futhi inobungani nezwe lase-China futhi ifinyeleleka kalula.

Ukuthunyelwa kuka `cloudflare page` ngokuvamile kusekelwe ekusetshenzisweni koku `github page` ngenhla.

Dala iphrojekthi futhi ubophe i-warehouse `i18n-demo.github.io` ngenhla.

Inqubo iboniswa esithombeni esingezansi:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Sicela uchofoze `Add Account` ukuze unikeze ukufinyelela kwenhlangano `i18n-demo` .

Uma ubophe i-warehouse yenye inhlangano, kungase kudingeke ukuthi uchofoze `Add Account` kabili ukuze ugunyaze kabili ngaphambi kokuthi inhlangano entsha iboniswe.

![](https://p.3ti.site/1721118306.avif)

Okulandelayo, khetha i-warehouse `i18n-demo.github.io` , bese uchofoza u `Begin setup` , bese usebenzisa amanani azenzakalelayo ngezinyathelo ezilandelayo.

![](https://p.3ti.site/1721118490.avif)

Ngemva kokubopha okokuqala, udinga ukulinda amaminithi ambalwa ngaphambi kokuthi ukwazi ukuyifinyelela.

Ngemva kokuthunyelwa, ungakwazi ukubopha igama lesizinda ngokwezifiso.

![](https://p.3ti.site/1721119459.avif)

Ngemva kokubophezela igama lesizinda ngokwezifiso, sicela uye egameni lesizinda ukuze ulungiselele ukubhalwa kabusha kwendlela yohlelo lokusebenza lwekhasi elilodwa, njengoba kukhonjisiwe ngezansi:

![](https://p.3ti.site/1721119320.avif)

Imithetho esesithombeni esingenhla imi kanje. Sicela ufake igama lesizinda osibophe ngalo esikhundleni sika `i18n.site` emgqeni wokuqala ongezansi

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

Ngaphezu kwalokho, sicela ulungiselele imithetho yenqolobane, njengoba kukhonjisiwe ngezansi, bese usetha ubude benqolobane bube yinyanga eyodwa.

![](https://p.3ti.site/1721125111.avif)

Sicela ushintshe igama lesizinda elimeshayo esinyathelweni sesibili esithombeni esingenhla siye egameni lesizinda osibophelile.

#### Ukuthuthukisa Ukuthunyelwa Kwewebhusayithi E-Mainland China

Uma ufuna ukuthola ukusebenza okungcono kokufinyeleleka endaweni yenethiwekhi yezwekazi laseChina, sicela [ubhalise igama lesizinda](//beian.aliyun.com) kuqala.

Bese, sebenzisa isitoreji sento sabathengisi bamafu e-Mainland + `CDN` Sebenzisa okuqukethwe okulandelayo `out/ol/htm` .

Ungasebenzisa i-edge computing ukuze ubhale kabusha indlela ukuze ivumelane nezinhlelo zokusebenza zekhasi elilodwa. Isibonelo, [i-Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) ingalungiselelwa kanje:

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

Ngenxa yokuthi irekhodi elingu `MX` nerekhodi elingu `CNAME` alikwazi ukuhlalisana, uma ufuna ukuthola ama-imeyili egama lesizinda ngesikhathi esifanayo, udinga ukusebenzisana [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) se-Level `CNAME` sibe yirekhodi lesi `A` .

Ngaphezu kwalokho, ngenxa yokuthi izindleko zethrafikhi zaphesheya kwezilwandle zabathengisi bamafu e-Mainland China zibiza kakhulu, uma ufuna ukukhulisa izindleko, ungasebenzisa [ukulungiswa kwendawo kwamahhala kwe- DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) kanye negama lesizinda langokwezifiso lika- [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (njengoba kukhonjisiwe ngezansi) ukuze uzuze traffic diversion──Traffic inland China Baidu Cloud `CDN` , traffic international uya cloudflare .

![](https://p.3ti.site/1721119788.avif)

Lezi zixazululo zokuthuthukisa ukuthunyelwa ziyinkimbinkimbi futhi zizokwethulwa ezahlukweni ezihlukene ngokuzayo.

#### Ukuqondisa Kabusha Igama Lesizinda Esijwayelekile

Uma usebenzisa `i18n.site` ukuze ukhiqize iwebhusayithi njengewebhusayithi yakho eyinhloko, ngokuvamile udinga ukulungisa ukuqondisa kabusha kwesizinda se-pan, okungukuthi, ukuqondisa kabusha ukufinyelela ku `*.xxx.com` (okuhlanganisa `www.xxx.com` ) kuya ku `xxx.com` .

Le mfuneko ingafinyelelwa ngosizo lwe - Alibaba Cloud `CDN` `EdgeScript` ( [Idokhumenti yesiNgisi](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Idokhumenti yesiShayina](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Engeza igama lesizinda ku [-Alibaba CDN](https://cdn.console.aliyun.com/domain/list) bese ukhomba igama lesizinda `*.xxx.com` kuya ku `CNAME` ku-Alibaba Cloud `CDN` .

![](https://p.3ti.site/1721122000.avif)

Isibonelo, ukucushwa kokuqondisa kabusha kwesizinda se-pan-domain kuka `*.i18n.site` esithombeni esingenhla kungokulandelayo:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

#### Sebenzisa Nge nginx

Sicela ungeze `/root/i18n/md/out/ol/htm` okufanayo nalokhu okulandelayo endimeni `out/ol/htm` `server` ye- nginx

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Isakhiwo Sohlu Lwemibhalo

#### `public`

Amafayela amile wewebhusayithi, njengokuthi `favicon.ico` , `robots.txt` , njll.

Amafayela esithonjana lapha angenziwa nge- [realfavicongenerator.net](https://realfavicongenerator.net)

#### `.i18n`

Ngaphansi kwenkomba engu `.i18n` kukhona amafayela okumisa, inqolobane yokuhumusha, njll. ka `i18n.site` Bheka isahluko esilandelayo [esithi "Ukucushwa"](/i18n.site/conf) ukuze uthole imininingwane.

#### `en`

Uhla lwemibhalo lolimi oluwumthombo, oluhambisana no `en` koku `fromTo` kufayela lokucushwa elingu `.i18n/conf.yml`

```yaml
i18n:
  fromTo:
    en: zh
```

Sicela ubheke ukucushwa kokuhumusha [i18](/i18/use)