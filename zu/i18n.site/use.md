# Faka &

## Ithokheni Yokumisa

`i18n.site` Ithuluzi lokuhumusha elingu- `i18` lishumekiwe, sicela [uchofoze lapha ukuze ubhekisele kudokhumenti `i18` ukuze ulungiselele ithokheni yokufinyelela](/i18/use) .

## Faka

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Iphrojekthi Yedemo

Ake siqale ngephrojekthi yedemo futhi sifunde ukusebenzisa `i18n.site`

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

`demo.i18n.site` Igama lohla lwemibhalo lesisekelo sekhodi kufanele libe `md` ukuze kube lula ukubuka kuqala kwendawo nge- `docker` .

### Humusha

Okokuqala, faka `md` lwemibhalo bese uqhuba `i18n.site` , ezohumusha `en` kuya ku- `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Ngemva kokuqalisa, amafayela okuhumusha kanye nenqolobane azokwenziwa. Sicela ukhumbule ukuwengeza endaweni yokugcina `git add . ` ohlwini `md` .

### Ukubuka Kuqala Kwendawo

Faka futhi `docker` ( `MAC` batusa ukusebenzisa [orbstack](https://orbstack.dev) njengesikhathi sokusebenza se- `docker` ).

Bese, faka `docker` lwemibhalo bese uqhuba `./up.sh` , bese [https://127.0.0.1](https://127.0.0.1) ukuze uhlole kuqala endaweni.

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Thumela Okuqukethwe

`i18n.site` Yamukela ukwakheka [kohlelo lokusebenza lwekhasi elilodwa](https://developer.mozilla.org/docs/Glossary/SPA) , futhi ikhasi lokungena lewebhusayithi nokuqukethwe kwewebhusayithi kuthunyelwa ngokuzimela.

Ngemva kokusebenzisa ukuhumusha okungenhla, izinkomba ezingu- `htm` kanye ne- `v` zizokhiqizwa kuhla lwemibhalo `md/out/dev`

Lapha `dev` ikhombisa ukuthi yakhiwe ngokusekelwe kufayela `.i18n/htm/dev.yml` .

Ngaphansi : `dev`

`htm` Ngaphansi kohlu lwemibhalo kunekhasi lokungena lewebhusayithi.

`v` Uhlu lwemibhalo luqukethe okuqukethwe kwewebhusayithi enenombolo yenguqulo.

Ukubuka kuqala kwasendaweni kuzokopisha wonke amafayela `out/dev/v/0.1.0` lwemibhalo kungakhathaliseki inombolo yenguqulo.

Ukuze kukhishwe ngokusemthethweni, amafayela ashintshiwe azokopishelwa kunkomba yenombolo yenguqulo entsha.

#### Sebenzisa -c Ukuze Ucacise Ifayela Lokumisa

Amafayela okumisa ahlukene azodala izinkomba ezihambisanayo ngaphansi kohlu lwemibhalo lwe- `out`

Isibonelo `.i18n/htm/ol.yml` izodala uhla lwemibhalo `out/ol` .

`dev.yml` kanye no- `ol.yml` kungukucushwa okuzenzakalelayo.

`dev` isifinyezo sika `development` , esimele indawo yokuthuthukiswa, sisetshenziselwa ukubuka kuqala kwendawo, futhi siyifayela lokumisa elizenzakalelayo.
`ol` isifinyezo sika `online` , esimele indawo eku-inthanethi, sisetshenziselwa ukukhululwa okusemthethweni, futhi siyifayela lokumisa elizenzakalelayo lapho kushicilelwa ku- `npm` kusetshenziswa ipharamitha yomugqa womyalo `-n` .

Ungakwazi futhi ukudala amanye amafayela wokumisa `--htm_conf` emugqeni womyalo ukuze ucacise igama lefayela lokumisa:

Ngokwesibonelo:
```
i18n.site --htm_conf yourConfig --save
```

Lapha `--save` ikhombisa inombolo yenguqulo yokukhishwa.

#### <a rel=id href="#npm" id="npm"></a> Shicilela okuqukethwe ku-npmjs.com

Ukushicilela okuqukethwe ku- [npmjs.com](//npmjs.com) yisixazululo esimisiwe esinconywayo (bona [Ukutholakala Okuphezulu Okuphezulu](/i18n.site/feature#ha) ).

##### npm login &

Faka `nodejs` sebenzisa `npm login` ukuze ungene.

Hlela `md/.i18n/htm/ol.yml` shintsha `i18n.site` ku- `v: //unpkg.com/i18n.site` ibe ngeyakho `npm` igama lephakheji.

Vele usebenzise igama lephakeji elingahlali muntu [npmjs.com](//npmjs.com)

Uma ushicilela ngokusekelwe kuphakheji `npm` , **qiniseka ukuthi usebenzisa `//unpkg.com/`** njengesiqalo senani elingu- `v:` Isikhathi senqolobane `i18n.site` ngaphansi kwale ndlela yesiqalo `/.v` sithuthukiswe ngokukhethekile ukuze unike amandla ukubuka okufika ngesikhathi kokukhishwa okusha.

Qalisa `i18n.site --npm` noma `md` kuhla lwemibhalo ukuze `i18n.site -n` futhi ushicilele.

Uma usebenzisa indawo eqhubekayo yokuhlanganisa ukuze ushicilele, asikho isidingo sokuyifaka `nodejs` Vele ukopishe imvume yokungena ngemvume neshicilelwe `~/.npmrc` endaweni.

Uma ushintsha igama lephakheji ku- `v:` `ol.yml` , sicela **uqiniseke ukuthi ususa `.i18n/v/ol` kuqala** bese uyishicilela.

##### Iseva Elibamba Eshicilelwe Ngu-Npm

Uma abasebenzisi ezweni lase-China behlangabezana nezinkinga zenethiwekhi futhi bengakwazi ukushicilela iphakheji ye- `npm` bangasetha okuguquguqukayo kwemvelo `https_proxy` ukuze balungiselele iseva elibamba.

Ngokucabanga ukuthi imbobo yeseva elibamba ithi `7890` ungabhala:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Okuqukethwe Okuzibambele Wena

Uma ufuna ukuzibamba ngokwakho okuqukethwe, qala, `md/.i18n/htm/ol.yml` futhi ushintshe `v: //unpkg.com/i18n.site` kusiqalo sakho se-URL, njengokuthi `v: //i18n-v.xxx.com` .

Faka `md` lwemibhalo bese ugijima

```
i18n.site --htm_conf ol --save
```

noma isifinyezo

```
i18n.site -c ol -s
```

Bese, ulungiselela okuqukethwe `md/out/ol/v` lwemibhalo kundlela yesiqalo se-URL esethwe ku- `v:` .

Okokugcina, **lungiselela isikhathi senqolobane yendlela egcina `/.v` `1s`** , ngaphandle kwalokho okuqukethwe okusha akukwazi ukufinyelelwa ngokushesha.

Isikhathi senqolobane sezinye izindlela singasethwa sibe unyaka owodwa noma ngaphezulu ukuze kuncishiswe izicelo ezingadingekile.

##### Setha Okuqukethwe Ku-S3

Ukuze uzibambele ngokwakho okuqukethwe, ngaphezu kokusebenzisa `CDN` yakho, enye + evamile ukusebenzisa `S3`

Ungasebenzisa iseva yokungena [rclone](https://rclone.org) `S3` bese ubhekisela futhi ulungise umbhalo ongezansi, futhi ukopishe izinguquko ezikhulayo kuphela ku- `S3` isikhathi ngasinye ushicilela.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Khumbula ukulungisa `CDN` ukuze isikhathi senqolobane yendlela egcina ngo- `/.v` is `1s` , ngaphandle kwalokho ngeke ukwazi ukufinyelela okuqukethwe okusanda kukhululwa ngokushesha.

### Shicilela Iwebhusayithi

Iwebhusayithi ingasatshalaliswa noma kuphi [github page](https://pages.github.com) futhi [cloudflare page](https://pages.cloudflare.com) yizinqumo ezinhle.

Ngoba iwebhusayithi ithatha ukwakheka kohlelo [lokusebenza lwekhasi elilodwa](https://developer.mozilla.org/docs/Glossary/SPA) , `index.html` ukubhala kabusha indlela ye-URL engaqukethe `. `

Ikhasi lokufaka iwebhusayithi lidinga ukusetshenziswa kanye kuphela, futhi asikho isidingo sokuphinda usebenzise ikhasi lokufaka iwebhusayithi ukuze uthole izibuyekezo zokuqukethwe ezilandelayo.

#### Sebenzisa Ekhasini Le-Github

Okokuqala [chofoza github ukuze udale inhlangano](https://github.com/account/organizations/new?plan=free) Igama elilandelayo lenhlangano `i18n-demo`

Bese udala indawo yokugcina impahla ngaphansi kwale nhlangano `i18n-demo.github.io` (Sicela ufake igama lenhlangano esikhundleni sika- `i18n-demo` ):

<img alt="" src="https://p.3ti.site/1721098657.avif">

Uma ushicilela okuqukethwe esihlokweni esedlule, sekwenziwe `out/ol/htm` Sicela ufake lolu hlu lwemibhalo bese uqalisa :

```
ln -s index.html 404.html
```


Ngoba `github page` ayikusekeli ukubhalwa kabusha kwendlela ye-URL, ngakho-ke `404.html` kusetshenziswa esikhundleni salokho.

Bese ugijima umyalo olandelayo `htm` lwemibhalo (khumbula ukufaka ikheli lakho lendawo yokugcina impahla esikhundleni sika- `i18n-demo/i18n-demo.github.io.git` :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Ngemva kokuphusha ikhodi, linda ukuthunyelwa kwe- `github page`

<img src="//p.3ti.site/1721116586.avif" width="350px">

Ngekhasi ledemo sicela ubone:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Sebenzisa Ekhasini Le-Cloudflare

[cloudflare page](//pages.cloudflare.com) Uma kuqhathaniswa ne `github page` inikeza indlela yokubhala kabusha futhi inobungani nezwe lase China futhi ifinyeleleka kalula.

`cloudflare page` Ukuthunyelwa kuvame ukususelwa ekusetshenzisweni kokungu- `github page` ngenhla.

Dala iphrojekthi futhi ubophe okungenhla `i18n-demo.github.io`

Inqubo iboniswa esithombeni esingezansi:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

Sicela `Add Account` ukuze unikeze ukufinyelela `i18n-demo` .

Uma ubophe i-warehouse yenye inhlangano, kungase kudingeke `Add Account` uchofoze kabili ukuze uyigunyaze kabili ngaphambi kokuthi inhlangano entsha iboniswe.

<img alt="" src="https://p.3ti.site/1721118306.avif">

Okulandelayo `Begin setup` `i18n-demo.github.io`

<img alt="" src="https://p.3ti.site/1721118490.avif">

Ngemva kokubopha okokuqala, udinga ukulinda amaminithi ambalwa ngaphambi kokuthi ukwazi ukuyifinyelela.

Ngemva kokuthunyelwa, ungakwazi ukubopha igama lesizinda ngokwezifiso.

<img alt="" src="https://p.3ti.site/1721119459.avif">

Ngemva kokubophezela igama lesizinda ngokwezifiso, sicela uye egameni lesizinda ukuze ulungiselele ukubhalwa kabusha kwendlela yohlelo lokusebenza lwekhasi elilodwa, njengoba kukhonjisiwe ngezansi:

<img alt="" src="https://p.3ti.site/1721119320.avif">

Imithetho esesithombeni esingenhla ingokulandelayo. Sicela `i18n.site` igama lesizinda endaweni yokuqala ngezansi.

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

Ngaphezu kwalokho, sicela ulungiselele imithetho yenqolobane, njengoba kukhonjisiwe ngezansi, bese usetha ubude benqolobane bube yinyanga eyodwa.

<img alt="" src="https://p.3ti.site/1721125111.avif">

Sicela ushintshe igama lesizinda elimeshayo esinyathelweni sesibili esithombeni esingenhla siye egameni lesizinda osibophelile.

#### Ukuthuthukisa Ukuthunyelwa Kwewebhusayithi E-Mainland China

Uma ufuna ukuthola ukusebenza okungcono kokufinyeleleka endaweni yenethiwekhi yezwekazi laseChina, sicela [ubhalise igama lesizinda](//beian.aliyun.com) kuqala.

Bese, sebenzisa isitoreji `out/ol/htm` sabathengisi bamafu e `CDN` Mainland China +

Ungasebenzisa i-edge computing ukuze ubhale kabusha indlela ukuze uvumelane nezinhlelo zokusebenza zekhasi elilodwa, njenge [-Baidu Smart `CDN`](//cloud.baidu.com/product/cdn.html) Ingalungiselelwa kanje:

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

Ngoba `MX` amarekhodi kanye namarekhodi `CNAME` awakwazi ukuhlangana, uma ufuna ukuthola ama-imeyili `A` lesizinda ngasikhathi sinye, udinga ukusebenzisana `CNAME` [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten)

Ngaphezu kwalokho, ngenxa yokuthi izindleko zethrafikhi zaphesheya kwezilwandle zabathengisi bamafu e-Mainland China zibiza kakhulu, uma ufuna ukukhulisa izindleko, ungasebenzisa [ukulungiswa kwendawo kwamahhala kwe- DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) kanye negama lesizinda langokwezifiso lika- [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (njengoba kukhonjisiwe ngezansi) ukuze uzuze ukuphambukisa kwethrafikhi──I-traffic ezweni lase-China i-Baidu Cloud `CDN` ithrafikhi yamazwe ngamazwe iya cloudflare .

<img alt="" src="https://p.3ti.site/1721119788.avif">

Lezi zixazululo zokuthuthukisa ukuthunyelwa ziyinkimbinkimbi futhi zizokwethulwa ezahlukweni ezihlukene ngokuzayo.

#### Ukuqondisa Kabusha Igama Lesizinda Esijwayelekile

Uma usebenzisa `i18n.site` ukuze ukhiqize iwebhusayithi njengewebhusayithi yakho eyinhloko, ngokuvamile udinga ukulungisa ukuqondisa kabusha kwesizinda se-pan, okungukuthi, ukuqondisa kabusha `*.xxx.com` (kuhlanganise ne- `www.xxx.com` ) ukufinyelela ku- `xxx.com` .

Le mfuneko ingafinyelelwa ngosizo lwe `CDN` Alibaba `EdgeScript` ( [idokhumenti yesiNgisi](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Idokhumenti yesiShayina](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Engeza igama lesizinda ku [-Alibaba CDN](https://cdn.console.aliyun.com/domain/list) bese ukhomba `*.xxx.com` lesizinda ku-Alibaba Cloud `CDN` 's `CNAME` .

<img alt="" src="https://p.3ti.site/1721122000.avif">

Isibonelo, ukucushwa kwe-pan-domain yokuqondisa kabusha `*.i18n.site` esingenhla kungokulandelayo:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### Sebenzisa Nge nginx

Sicela wengeze ukucushwa okufana nokulandelayo `server` nginx lapho `/root/i18n/md/out/ol/htm` sicela ukuguqulele endleleni yephrojekthi yakho `out/ol/htm` :

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Ukwakheka Kwemibhalo

#### Umphakathi

Amafayela amile wewebhusayithi, njengokuthi `favicon.ico` `robots.txt` , njll.

Amafayela esithonjana lapha angenziwa nge- [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n

`.i18n` Ngaphansi kohlu lwemibhalo kukhona amafayela okumisa ka- `i18n.site` , inqolobane yokuhumusha, njll. Bheka isahluko esilandelayo ["Ukucushwa"](/i18n.site/conf) ukuze uthole imininingwane.

#### en

Uhla lwemibhalo lolimi lomthombo, oluhambisana `.i18n/conf.yml` `fromTo` `en` kufayela lokumisa

```yaml
i18n:
  fromTo:
    en: zh
```

Sicela ubheke ukucushwa kokuhumusha [i18](/i18/use)

