# Shigar &

## Alamar Daidaitawa

An `i18n.site` kayan aikin fassarar `i18` , da fatan [za a latsa nan don duba daftarin aiki `i18` don daidaita alamar shiga](/i18/use) .

## Shigar

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Demo Aikin

Bari mu fara da aikin demo kuma mu koyi yadda ake amfani da shi `i18n.site`

Mun fara rufe ma'ajiyar demo kuma muna gudanar da umarni kamar haka:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Masu amfani a babban yankin China na iya:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

`demo.i18n.site` Sunan kundin adireshin lambar clone dole ne ya zama `md` don sauƙaƙe samfoti na gida tare da `docker` .

### Fassara

Da farko, shigar da `md` kuma kunna `i18n.site` , wanda zai fassara `en` zuwa `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Bayan aiki, za a samar `git add . ` fassarar da fayilolin cache `md`

### Duban Gida

`MAC` `docker` [orbstack](https://orbstack.dev) `docker`

Sa'an nan, shigar da `docker` kuma gudanar da `./up.sh` , sa'an nan ziyarci [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Buga Abun Ciki

`i18n.site` Yana ɗaukar tsarin [gine-gine mai shafi ɗaya](https://developer.mozilla.org/docs/Glossary/SPA) , kuma ana tura shafin shiga yanar gizon da abun cikin gidan yanar gizon da kansa.

Bayan gudanar da fassarar da ke sama, za a samar da kundayen adireshi `htm` da `v` a cikin kundin `md/out/dev` .

Anan `.i18n/htm/dev.yml` `dev`

`dev` abun ciki :

`htm` Ƙarƙashin jagorar akwai shafin shiga yanar gizon.

`v` Littafin jagora ya ƙunshi abun cikin gidan yanar gizon tare da lambar sigar.

Samfoti na gida zai kwafi duk fayiloli zuwa `out/dev/v/0.1.0` adireshi ko da kuwa lambar sigar.

Don sakin hukuma, za a kwafi fayilolin da aka canza zuwa sabon kundin kundin tsarin lamba.

#### Yi Amfani Da -c Don Tantance Fayil Ɗin Sanyi

Fayilolin daidaitawa daban-daban za su ƙirƙiri kundayen adireshi masu dacewa a ƙarƙashin littafin `out`

Misali, `.i18n/htm/ol.yml` zai haifar da `out/ol` directory.

`dev.yml` da `ol.yml` sune saitunan tsoho.

`dev` shine gajartawar `development` , wanda ke wakiltar yanayin ci gaba, ana amfani dashi don samfoti na gida, kuma shine babban fayil ɗin daidaitawa.
`ol` shine gajartawar `online` , wanda ke wakiltar yanayin kan layi, ana amfani dashi don sakin hukuma, kuma shine babban fayil ɗin daidaitawa lokacin bugawa zuwa `npm` ta amfani da sigar layin umarni `-n` .

Hakanan zaka iya ƙirƙirar wasu fayilolin sanyi Yi `--htm_conf` akan layin umarni don tantance sunan fayil ɗin sanyi:

misali:
```
i18n.site --htm_conf yourConfig --save
```

`--save` yana nuna lambar sigar sabuntawa.

#### <a rel=id href="#npm" id="npm"></a> Buga abun ciki zuwa npmjs.com

Buga abun ciki zuwa [npmjs.com](//npmjs.com) shine shawarar da aka ba da shawarar (duba [Babban Samun Gaba-gaba](/i18n.site/feature#ha) ).

##### Saki npm login &

Shigar `nodejs` yi amfani da `npm login` don shiga.

Shirya `md/.i18n/htm/ol.yml` canza `i18n.site` a cikin `v: //unpkg.com/i18n.site` zuwa naku `npm` sunan kunshin.

Kawai yi amfani da sunan fakitin da ba a ciki akan [npmjs.com](//npmjs.com)

Lokacin bugawa bisa fakitin `npm` , **tabbatar da amfani da `//unpkg.com/`** a matsayin prefix na `v:` ƙimar lokacin cache `i18n.site` ƙarƙashin wannan hanyar prefix `/.v` an inganta shi musamman don ba da damar duba sabbin abubuwan da aka saki.

Gudun `i18n.site --npm` ko `i18n.site -n` a cikin `md` adireshin don fassara da bugawa.

Idan kuna amfani da `~/.npmrc` haɗin kai na ci gaba don bugawa, babu buƙatar shigar da shi `nodejs`

Idan kun canza sunan fakitin a cikin `v:` `ol.yml` , da **fatan za a fara share `.i18n/v/ol`** sannan ku buga shi.

##### Sabar Wakili Ta npm Ta Buga

Idan masu amfani a babban yankin kasar Sin sun gamu da matsalolin hanyar sadarwa kuma ba su iya buga kunshin `npm` , za su iya saita canjin yanayi `https_proxy` don daidaita sabar wakili.

Tsammanin cewa tashar tashar sabar wakili ce `7890` zaku iya rubuta:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Abun Ciki Mai Ɗaukar Nauyi

Idan kuna son ɗaukar nauyin abun ciki, `v: //i18n-v.xxx.com` farko `v: //unpkg.com/i18n.site` gyara `md/.i18n/htm/ol.yml`

Shigar `md` directory kuma gudu

```
i18n.site --htm_conf ol --save
```

ko gajarta

```
i18n.site -c ol -s
```

Sa'an nan, saita abun ciki a `md/out/ol/v` directory zuwa URL prefix hanyar saita a `v:` .

A ƙarshe, **saita lokacin cache na hanyar da ke ƙarewa `/.v` `1s`** , in ba haka ba ba za a iya isa ga sabon abun ciki ba nan take.

Ana iya saita lokacin cache na wasu hanyoyin zuwa shekara ɗaya ko fiye don rage buƙatun da ba dole ba.

##### Mai Watsa Shiri Abun Ciki Zuwa s3

Don abun ciki mai ɗaukar nauyi, ban da amfani da uwar garken ku, wani zaɓi `CDN` gama gari shine amfani da + `S3`

Kuna iya amfani `S3` uwar `S3` [rclone](https://rclone.org)

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Ka tuna don saita `CDN` ta yadda lokacin cache na hanyar da ke ƙarewa a `/.v` shine `1s` , in ba haka ba ba za ku iya samun damar shiga sabon abun ciki da aka saki nan da nan ba.

### Buga Gidan Yanar Gizo

Ana iya tura gidan yanar gizon a ko'ina [github page](https://pages.github.com) kuma [cloudflare page](https://pages.cloudflare.com) zabi ne masu kyau.

Domin gidan yanar gizon yana ɗaukar tsarin tsarin [aikace-aikacen shafi ɗaya](https://developer.mozilla.org/docs/Glossary/SPA) , ku tuna don sake rubuta hanyar URL ɗin da ba ta ƙunshi `. ` `index.html`

Shafin shigarwar gidan yanar gizon yana buƙatar tura sau ɗaya kawai, kuma babu buƙatar sake fasalin shafin shiga yanar gizon don sabuntawar abun ciki na gaba.

#### Sanya Kan Shafin github

Da farko [danna github don ƙirƙirar ƙungiya](https://github.com/account/organizations/new?plan=free) mai zuwa `i18n-demo` matsayin misali.

Sannan ƙirƙirar sito a ƙarƙashin wannan `i18n-demo.github.io` (Don Allah a maye gurbin `i18n-demo` da sunan ƙungiyar da kuka ƙirƙira):

<img alt="" src="https://p.3ti.site/1721098657.avif">

Lokacin buga abun ciki a labarin da ya gabata, an : shi `out/ol/htm`

```
ln -s index.html 404.html
```


`404.html` `github page`

Sannan gudanar : umarni `i18n-demo/i18n-demo.github.io.git` zuwa a cikin kundin adireshin `htm`

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Bayan tura lambar, jira ƙaddamar da `github page`

<img src="//p.3ti.site/1721116586.avif" width="350px">

Don shafin demo don Allah duba:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Sanya Kan Shafin cloudflare

Idan aka kwatanta `github page` [cloudflare page](//pages.cloudflare.com)

`cloudflare page` Tsarin yakan dogara ne akan turawa na `github page` sama.

Ƙirƙiri aikin kuma ɗaure ɗakunan ajiya na sama `i18n-demo.github.io`

Ana nuna tsarin a cikin hoton da ke ƙasa:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

Da fatan za a `i18n-demo` `Add Account`

Idan kun daure sito na wata ƙungiya, kuna iya buƙatar danna `Add Account` sau biyu don ba da izini sau biyu kafin a nuna sabuwar ƙungiyar.

<img alt="" src="https://p.3ti.site/1721118306.avif">

Na `Begin setup` zaɓi `i18n-demo.github.io`

<img alt="" src="https://p.3ti.site/1721118490.avif">

Bayan ɗaure a karon farko, kuna buƙatar jira ƴan mintuna kafin ku sami damar shiga.

Bayan turawa, zaku iya ɗaure sunan yanki na al'ada.

<img alt="" src="https://p.3ti.site/1721119459.avif">

Bayan ɗaure sunan yanki na al'ada, da fatan za a je zuwa sunan yankin don saita hanyar sake rubuta aikace-aikacen shafi guda ɗaya, kamar yadda aka nuna a ƙasa:

<img alt="" src="https://p.3ti.site/1721119320.avif">

Dokokin dake cikin hoton da ke sama sune kamar `i18n.site` .

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

Bugu da kari, da fatan za a saita ƙa'idodin cache, kamar yadda aka nuna a ƙasa, kuma saita tsawon lokacin cache zuwa wata ɗaya.

<img alt="" src="https://p.3ti.site/1721125111.avif">

Da fatan za a canza sunan yankin da ya dace a mataki na biyu a cikin hoton da ke sama zuwa sunan yankin da kuka ɗaure.

#### Inganta Aikin Aika Gidan Yanar Gizo a Babban Yankin Kasar Sin

Idan kana son samun ingantacciyar isar da damar aiki a cikin mahallin cibiyar sadarwa ta kasar Sin, da fatan za [a yi rajista da sunan yankin](//beian.aliyun.com) tukuna.

Sa'an nan, yi amfani da `out/ol/htm` ajiya na masu siyar da girgije a cikin babban yankin `CDN` +

Kuna iya amfani da lissafin gefen don sake rubuta hanyar don dacewa da aikace-aikacen shafi guda ɗaya, kamar [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html)

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

[cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) `CNAME` `MX` `CNAME` `A`

Bugu da kari, saboda kudaden zirga-zirgar zirga-zirgar tafiye-tafiye na masu siyar da girgije a babban yankin kasar Sin suna da tsada sosai, idan kuna son inganta farashi, zaku iya amfani da [ƙudurin yanayi na kyauta na Huawei DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) da sunan yanki na [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (kamar yadda aka nuna a ƙasa) don cimma karkatar da ababen hawa──Hanyar zirga-zirga a babban yankin kasar Sin Baidu Cloud `CDN` zirga-zirgar ababen hawa na kasa da kasa na tafiya cloudflare .

<img alt="" src="https://p.3ti.site/1721119788.avif">

Waɗannan hanyoyin inganta aikin turawa sun fi rikitarwa kuma za a gabatar da su a cikin surori daban-daban a nan gaba.

#### Juyawa Sunan Yankin Gabaɗaya

Idan kuna amfani da `i18n.site` don samar da gidan yanar gizon a matsayin babban gidan yanar gizonku, yawanci kuna buƙatar saita jujjuyawar yanki, wato, turawa `*.xxx.com` (ciki har da `www.xxx.com` ) damar shiga `xxx.com` .

Ana [iya](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) cimma wannan buƙatu tare / [taimakon](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) Alibaba `EdgeScript` `CDN`

Ƙara sunan yanki a cikin [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) kuma nuna `*.xxx.com` yankin zuwa Alibaba Cloud `CDN` 's `CNAME` .

<img alt="" src="https://p.3ti.site/1721122000.avif">

Misali, tsarin jujjuya sunan pan-domain na `*.i18n.site`

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### Yi Amfani Da nginx

Da fatan za a ƙara tsari mai kama da mai zuwa a cikin `server` nginx inda `/root/i18n/md/out/ol/htm` don Allah canza shi zuwa hanyar aikin ku `out/ol/htm`

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Tsarin Jagora

#### Jama'A

Fayilolin gidan yanar gizon a tsaye, kamar `favicon.ico` `robots.txt` , da sauransu.

Ana iya ƙirƙirar fayilolin gumaka tare da [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n

`.i18n` kundin `i18n.site` akwai fayilolin daidaitawa, cache fassarar, da sauransu. Duba babi na gaba ["Configuration"](/i18n.site/conf) don cikakkun bayanai.

#### en

Littafin adireshin tushen tushe, daidai `.i18n/conf.yml` `fromTo` `en` a cikin fayil ɗin daidaitawa

```yaml
i18n:
  fromTo:
    en: zh
```

Da fatan za a koma ga daidaitawar fassarar [i18](/i18/use)

