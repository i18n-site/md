# Ku Nghenisa &

## Xikombiso Xa Vuhlanganisi

`i18n.site` Xitirhisiwa xa `i18` vuhundzuluxi xi nghenisiwile, hi kombela [u tikhoma laha ku languta eka dokhumente ya `i18` ku lulamisa xikombiso xa mfikelelo](/i18/use) .

## Nghenisa

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Phurojeke Ya Demo

A hi sunguleni hi project ya demo hi dyondza ndlela yo tirhisa `i18n.site`

Hi sungula hi clone vuhlayiselo bya demo ivi hi tirhisa xileriso hi ndlela leyi landzelaka:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Vatirhisi va le tikweni-nkulu ra China va nga:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

`demo.i18n.site` `md` `docker`

### Hundzuluxa

`zh` sungula `en` nghenisa `i18n.site` `md`

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Endzhaku ko tirha, tifayela ta vuhundzuluxi na ta cache ti ta endliwa Hi kombela u tsundzuka ku ti engetela eka vuhlayiselo `git add . ` eka `md` .

### Xikombiso Xa Ndhawu Ya Ka Ha Ri Emahlweni

Nghenisa u tlhela u sungula `docker` ( `MAC` va ringanyeta ku tirhisa [orbstack](https://orbstack.dev) tanihi nkarhi wo famba wa `docker` ).

Kutani, [https://127.0.0.1](https://127.0.0.1) `./up.sh` `docker`

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Post Leswi Nga Endzeni

`i18n.site` Amukela xivumbeko [xa xitirhisiwa xa tluka rin’we](https://developer.mozilla.org/docs/Glossary/SPA) , naswona tluka ro nghena eka webusayiti na nhundzu ya webusayiti swi tirhisiwa hi ku tiyimela.

Endzhaku ko fambisa vuhundzuluxi lebyi nga laha henhla, `htm` na `v` tidayirekitara ti ta endliwa eka `md/out/dev`

Laha, `dev` yi kombisa leswaku yi akiwile hi ku ya hi fayili ya `.i18n/htm/dev.yml` .

Ehansi ka leswi nga : `dev`

`htm` Ehansi ka xikombo ku na tluka ro nghena eka webusayiti.

`v` Xikombo xi na nhundzu ya webusayiti leyi nga na nomboro ya vuhundzuluxeri.

Xikombiso xa laha kaya xi ta kopa tifayela hinkwato eka xikombo xa `out/dev/v/0.1.0`

Ku humesiwa ximfumo, tifayela leti cinciweke ti ta kopiwa eka xikombo xa tinomboro ta vuhundzuluxeri lebyintshwa.

#### Tirhisa -c Ku Kombisa Fayili Ya Vuhlanganisi

Tifayili to hambana ta vuhlanganisi ti ta tumbuluxa tidayirekitara leti fambelanaka ehansi ka `out`

Xikombiso, `.i18n/htm/ol.yml` yi ta endla `out/ol` directory.

`dev.yml` na `ol.yml` i swivumbeko swa xiviri.

`dev` `development`
`ol` `online` `-n` `npm`

U nga ha tlhela u tumbuluxa tifayela tin’wana ta vuhlanganisi Tirhisa `--htm_conf` eka layini ya swileriso ku boxa vito ra fayili ya vuhlanganisi:

Xikombiso:
```
i18n.site --htm_conf yourConfig --save
```

Laha `--save` yi kombisa nomboro ya vuhundzuluxeri bya ku humesiwa ka mpfuxeto.

#### <a rel=id href="#npm" id="npm"></a> Kandziyisa swilo eka npmjs.com

Ku kandziyisa swilo eka [npmjs.com](//npmjs.com) i xitshunxo xa xiviri lexi ringanyetiweke (vona [Ku kumeka ka le henhla ka le mahlweni](/i18n.site/feature#ha) ).

##### npm login & Humesa

Nghenisa `nodejs` tirhisa `npm login` ku nghena.

Hlela `md/.i18n/htm/ol.yml` cinca `i18n.site` eka `v: //unpkg.com/i18n.site` eka ya wena `npm` vito ra phasela.

Tirhisa ntsena vito ra phasela leri nga tshamiki eka [npmjs.com](//npmjs.com)

Loko u `i18n.site` `/.v` **`//unpkg.com/` ya** `v:` `npm`

Tirhisa `i18n.site --npm` kumbe `i18n.site -n` eka `md`

Loko u tirhisa ndhawu ya nhlanganelo lowu yaka emahlweni ku kandziyisa, a swi bohi ku yi nghenisa `nodejs` Kopa ntsena mpfumelelo lowu ngheneke ni lowu kandziyisiweke `~/.npmrc` eka ndhawu.

Loko u cinca vito ra phasela eka `v:` in `ol.yml` , hi kombela **u tiyisisa leswaku u rhanga hi ku susa `.i18n/v/ol`** ivi u ri kandziyisa.

##### Proxy Server Yi Kandziyisiwile Hi npm

Loko vatirhisi va le tikweni-nkulu ra China va hlangana na swiphiqo swa netiweke naswona va nga swi koti ku kandziyisa phasela ra `npm` , va nga veka xihlawulekisi xa mbango `https_proxy` ku lulamisa sevha ya vuyimeri.

Hi ku ehleketa leswaku port ya wena ya sevha ya vuyimeri i `7890` u nga tsala:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Swilo Leswi Tiyimeleke

Loko u lava ku tikhoma nhundzu, xo sungula, hlela `md/.i18n/htm/ol.yml` ivi u cinca `v: //unpkg.com/i18n.site` eka xirhangi xa wena xa URL, ku fana na `v: //i18n-v.xxx.com` .

Nghena eka `md`

```
i18n.site --htm_conf ol --save
```

kumbe xifunengeto

```
i18n.site -c ol -s
```

Kutani, lulamisa leswi nga endzeni `v:` `md/out/ol/v`

Eku heteleleni, **lulamisa nkarhi wa cache wa ndlela leyi helelaka hi `/.v` ku ya eka `1s`** , handle ka sweswo nhundzu leyintshwa leyi humesiweke a yi nge fikeleleki hi ku hatlisa.

Nkarhi wa cache wa tindlela tin’wana wu nga vekiwa eka lembe rin’we kumbe ku tlula ku hunguta swikombelo leswi nga lavekiki.

##### Host Content Eka s3

Ku tikhoma swilo, ku engetela eka ku tirhisa sevha ya wena, `CDN` yin’wana + tolovelekeke i ku tirhisa `S3`

U nga `S3` [rclone](https://rclone.org) Login `S3`

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Tsundzuka ku lulamisa `CDN` leswaku nkarhi wa cache wa ndlela leyi helelaka hi `/.v` wu va `1s` , handle ka sweswo a wu nge swi koti ku fikelela swilo leswintshwa leswi humesiweke hi ku hatlisa.

### Ku Kandziyisa Webusayiti

Website yi nga tirhisiwa kun'wana na kun'wana [github page](https://pages.github.com) naswona [cloudflare page](https://pages.cloudflare.com) i swihlawulekisi leswinene.

Hikuva webusayiti yi amukela vumaki bya [xitirhisiwa xa tluka rin’we](https://developer.mozilla.org/docs/Glossary/SPA) , tsundzuka ku tsala nakambe ndlela ya URL leyi nga riki na `. ` ku ya eka `index.html` .

Tluka ro nghena eka webusayiti ri lava ku tirhisiwa kan’we ntsena, naswona a ku na xilaveko xo tlhela u tirhisa tluka ro nghena eka webusayiti eka ku pfuxetiwa ka nhundzu loku landzelaka.

#### Ku Hangalasa Eka Pheji Ya github

Xo sungula [tinya github ku tumbuluxa nhlangano](https://github.com/account/organizations/new?plan=free) Vito ra nhlangano leri landzelaka i `i18n-demo`

Kutani endla ndhawu yo hlayisela swilo ehansi ka nhlangano lowu `i18n-demo.github.io` (Hi kombela u siva `i18n-demo` hi vito ra nhlangano leri u ri tumbuluxeke):

<img alt="" src="https://p.3ti.site/1721098657.avif">

Loko u kandziyisa leswi nga eka xihloko lexi hundzeke, swi endliwile `out/ol/htm` kombela u nghenisa xikombo lexi ivi u tsutsuma :

```
ln -s index.html 404.html
```


Hikuva `github page` a yi seketeli ku tsariwa nakambe ka ndlela ya URL, hikwalaho `404.html` yi tirhisiwa ematshan'wini ya sweswo.

Kutani tirhisa xileriso `i18n-demo/i18n-demo.github.io.git` landzelaka : `htm`

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Endzhaku ko susumeta khodi, yimela ku tirhisiwa ka `github page` ku tirha hi ndlela leyi humelelaka (hilaha swi kombisiweke hakona laha hansi), kutani u nga yi fikelela.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Ku kuma pheji ya demo hi kombela u vona:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Ku Hangalasa Eka Tluka Ra cloudflare

[cloudflare page](//pages.cloudflare.com) Loko yi pimanisiwa na `github page`

`cloudflare page` Ku rhumeriwa hi ntolovelo ku sekeriwe eka ku tirhisiwa ka `github page` laha henhla.

Endla phurojeke u boha ndhawu yo hlayisela swilo leyi nga laha henhla `i18n-demo.github.io`

Endlelo ri kombisiwile eka xifaniso lexi nga laha hansi:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

Hi kombela u tikhoma `Add Account` nyika mfikelelo eka `i18n-demo` .

Loko u bohile ndhawu yo hlayisela swilo ya nhlangano wun’wana, u nga ha lava ku `Add Account` kambirhi leswaku u yi pfumelela kambirhi nhlangano lowuntshwa wu nga si kombisiwa.

<img alt="" src="https://p.3ti.site/1721118306.avif">

Endzhaku ka sweswo hlawula `i18n-demo.github.io` Warehouse, kutani u tikhoma `Begin setup` , kutani u tirhisa mimpimo ya xiviri eka magoza lama landzelaka.

<img alt="" src="https://p.3ti.site/1721118490.avif">

Endzhaku ko boha ro sungula, u fanele u rindza timinete ti nga ri tingani u nga si yi fikelela.

Endzhaku ko tirhisiwa, u nga boha vito ra domain ra ntolovelo.

<img alt="" src="https://p.3ti.site/1721119459.avif">

Endzhaku ko boha vito ra domain ra ntolovelo, hi kombela u ya eka vito ra domain ku lulamisa ku tsariwa nakambe ka ndlela ya xitirhisiwa xa tluka rin’we, tanihilaha swi kombisiweke hakona laha hansi:

<img alt="" src="https://p.3ti.site/1721119320.avif">

Milawu leyi nga eka xifaniso lexi nga laha henhla hi leyi landzelaka Hi kombela u siva `i18n.site` eka layini yo sungula leyi nga laha hansi hi vito ra domain leri bohiweke eka wena.

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

Ku engetela kwalaho, hi kombela u lulamisa milawu ya cache, tanihilaha swi kombisiweke hakona laha hansi, naswona u veka nkarhi wa cache eka n’hweti yin’we.

<img alt="" src="https://p.3ti.site/1721125111.avif">

Hi kombela u cinca ku fambelana ka vito ra domain eka goza ra vumbirhi eka xifaniso lexi nga laha henhla eka vito ra domain leri u ri boheke.

#### Ku Antswisa Ku Tirhisiwa Ka Webusayiti Etikweni-Nkulu Ra China

Loko u lava ku kuma matirhelo yo antswa ya ku fikelela eka ndhawu ya netiweke ya tiko-nkulu ra China, hi kombela [u tsarisa vito ra domain](//beian.aliyun.com) ku sungula.

Kutani, tirhisa vuhlayiselo `CDN` swilo swa vaxavisi va le mapapa etikweni `out/ol/htm` nkulu ra China +

U nga tirhisa khomphyuta ya le tlhelo ku tsala nakambe ndlela ku pfumelelana na switirhisiwa swa pheji yin’we, ku fana na [Baidu Smart `CDN`](//cloud.baidu.com/product/cdn.html) Yi nga lulamisiwa hi ndlela leyi:

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

Hikuva `MX` tirhekhodo na `CNAME` tirhekhodo a swi nge hanyi swin'we, loko u lava ku amukela ti-imeyili ta mavito ya domain hi nkarhi wun'we, u fanele ku tirhisana na [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) ku flatten `CNAME` into `A` record.

Ku engetela kwalaho, hikuva swibalo swa le matikweni ya le handle swa vaxavisi va le mapapa etikweni-nkulu ra China swa durha swinene, loko u lava ku antswisa swiendleko, u nga tirhisa [xiboho xa mahala xa ndhawu xa Huawei DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) na [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) vito ra domain ra ntolovelo (hilaha swi kombisiweke hakona laha hansi) ku fikelela ku hambukisiwa ka mimovha──Ku famba ka mimovha etikweni-nkulu ra China Baidu Cloud `CDN` vutleketli bya matiko ya misava byi ya cloudflare .

<img alt="" src="https://p.3ti.site/1721119788.avif">

Switshuxo leswi swa ku antswisa ku tirhisiwa swi rharhanganile swinene naswona swi ta nghenisiwa eka tindzima to hambana enkarhini lowu taka.

#### Ku Kongomisiwa Nakambe Ka Vito Ra Domain Ra Xivumbeko Xa Le Henhla

Loko u tirhisa `i18n.site` ku tumbuluxa webusayiti tanihi webusayiti ya wena leyikulu, hi ntolovelo u fanele ku lulamisa ku kongomisiwa nakambe ka pan-domain, hi leswaku, ku kongomisa nakambe `*.xxx.com` (ku katsa na `www.xxx.com` ) mfikelelo eka `xxx.com` .

Xilaveko lexi xi nga fikeleriwa hi ku pfuniwa hi `EdgeScript` ( [tsalwa ra Xinghezi](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Tsalwa ra Xichayina](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ) ra Alibaba Cloud `CDN`

Engetela vito ra domain eka [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) ivi u kombetela `*.xxx.com` ra domain eka Alibaba Cloud `CDN` 's `CNAME` .

<img alt="" src="https://p.3ti.site/1721122000.avif">

Xikombiso, xivumbeko xa pan-domain name redirection xa `*.i18n.site` eka xifaniso lexi nga laha henhla xi le ka xiyimo lexi landzelaka:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### Ku Hangalasa Hi nginx

Hi `/root/i18n/md/out/ol/htm` u engetela xivumbeko lexi fanaka na lexi landzelaka eka `server` `out/ol/htm` nginx

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Xivumbeko Xa Xikombo

#### Rivaleni

Tifayili leti nga cinciki ta webusayiti, to tanihi `favicon.ico` `robots.txt` , na swin’wana.

Tifayili ta swifaniso laha ti nga endliwa hi [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n

`.i18n` Ehansi ka xikombo ku na tifayela ta vukorhokeri bya `i18n.site` 's, cache ya [vuhundzuluxi](/i18n.site/conf) , na swin'wana.

#### Ts

Xikombo xa ririmi ra xihlovo, lexi fambelanaka `.i18n/conf.yml` `fromTo` `en` eka fayili ya vuhlanganisi

```yaml
i18n:
  fromTo:
    en: zh
```

Hi kombela u languta eka xivumbeko xa vuhundzuluxeri [i18](/i18/use)

