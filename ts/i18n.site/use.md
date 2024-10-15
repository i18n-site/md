# Ku Nghenisa &

## Xikombiso Xa Vuhlanganisi

`i18n.site` yi na xitirhisiwa xa vuhundzuluxi xa `i18` lexi akiweke endzeni Hi kombela [u tikhoma laha ku languta eka tsalwa ra `i18` ku lulamisa xikombiso xa mfikelelo](/i18/use) .

## Nghenisa

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Phurojeke Ya Demo

A hi sunguleni hi phurojeke ya demo ku dyondza ndlela yo tirhisa `i18n.site` .

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

Vito ra vukorhokeri bya `demo.i18n.site` code base clone ri fanele ku va `md` ku olovisa ku langutiwa ka laha kaya hi `docker` .

### Hundzuluxa

Xo sungula, nghenisa `md` directory ivi u fambisa `i18n.site` , leyi nga ta hundzuluxela `en` ku ya eka `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Endzhaku ko tirha, tifayela ta vuhundzuluxi na ta cache ti ta endliwa Hi kombela u tsundzuka ku ti engetela eka vuhlayiselo eka `md` `git add . ` .

### Xikombiso Xa Ndhawu Ya Ka Ha Ri Emahlweni

Nghenisa u tlhela u sungula `docker` ( `MAC` mutirhisi u ringanyeta ku tirhisa [orbstack](https://orbstack.dev) tanihi nkarhi wo famba wa `docker` ).

Kutani, nghenisa eka `docker` directory ivi u tsutsuma `./up.sh` , kutani u endzela [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Post Leswi Nga Endzeni

`i18n.site` yi amukela xivumbeko [xa xitirhisiwa xa pheji yin’we](https://developer.mozilla.org/docs/Glossary/SPA) , naswona tluka ro nghena eka webusayiti na nhundzu ya webusayiti swi tirhisiwa hi ku tiyimela.

Endzhaku ko fambisa vuhundzuluxeri lebyi nga laha henhla, tidayirekitara `htm` na `v` ti ta endliwa ehansi ka tidayirekitara `md/out/dev` .

Laha, `dev` swi vula leswaku yi akiwile hi ku ya hi fayili `.i18n/htm/dev.yml` ya vuhlanganisi.

`dev` xikombo xa :

Xikombo xa `htm` i tluka ro nghena eka webusayiti.

Xikombo xa `v` xi na swilo swa webusayiti leswi nga na tinomboro ta vuhundzuluxeri.

Local preview a yi na mhaka na nomboro ya version naswona yi ta kopa tifayela hinkwato eka `out/dev/v/0.1.0` directory.

Ku humesiwa ximfumo, tifayela leti cinciweke ti ta kopiwa eka xikombo xa tinomboro ta vuhundzuluxeri lebyintshwa.

#### Tirhisa -c Ku Kombisa Fayili Ya Vuhlanganisi

Tifayili to hambana ta vuhlanganisi ti ta tumbuluxa tidayirekitara leti fambelanaka eka `out` directory.

Xikombiso, `.i18n/htm/ol.yml` yi ta tumbuluxa xikombo xa `out/ol` .

`dev.yml` na `ol.yml` i swivumbeko swa xiviri.

`dev` i xifunengeto xa `development` , lexi kombisaka ndhawu ya nhluvukiso, lexi tirhisiwaka eka ku langutiwa ka laha kaya, naswona nakambe i fayili ya vukorhokeri bya xiviri.
`ol` i xifunengeto xa `online` , lexi kombisaka ndhawu ya inthanete, leyi tirhisiwaka ku humesiwa ximfumo Nakambe i fayili ya vukorhokeri bya ntolovelo loko ku tirhisiwa tipharamitha ta layini ya swileriso `-n` ku ya eka `npm` ku humesa.

U nga ha tlhela u tumbuluxa tifayela tin’wana ta vuhlanganisi Tirhisa `--htm_conf` eka layini ya swileriso ku boxa vito ra fayili ya vuhlanganisi leyi u nga ta yi tirhisa:

Xikombiso:
```
i18n.site --htm_conf yourConfig --save
```

Laha `--save` yi yimela nomboro ya vuhundzuluxeri bya nkandziyiso wa mpfuxeto.

#### <a rel=id href="#npm" id="npm"></a> Kandziyisa swilo eka npmjs.com

Ku kandziyisa swilo eka [npmjs.com](//npmjs.com) i xitshunxo xa xiviri lexi ringanyetiweke (vona [Ku kumeka ka le henhla ka le mahlweni](/i18n.site/feature#ha) ).

##### npm login & Humesa

Nghenisa `nodejs` , nghena hi `npm login` .

Hlela `md/.i18n/htm/ol.yml` u cinca `i18n.site` eka `v: //unpkg.com/i18n.site` eka vito ra wena `npm` ra phasela.

Tirhisa ntsena vito ra phasela leri nga tshamiki eka [npmjs.com](//npmjs.com)

Loko u kandziyisa hi ku ya hi phasela `npm` , **tiyisisa leswaku u tirhisa `//unpkg.com/`** eka xirhangi xa `v:` value `i18n.site` yi antswisile hi ku hlawuleka nkarhi wa cache wa `/.v` ehansi ka ndlela leyi ya xirhangi ku fikelela ku langutiwa hi nkarhi ka ku humesiwa lokuntshwa.

Tirhisa `i18n.site --npm` kumbe `i18n.site -n` eka `md` directory ku hundzuluxela na ku kandziyisa.

Loko u tirhisa ndhawu ya nhlanganelo lowu yaka emahlweni ku kandziyisa, a swi bohi ku nghenisa `nodejs` , kopa ntsena mpfumelelo lowu ngheneke na ku kandziyisa `~/.npmrc` eka ndhawu.

Loko u cinca vito ra phasela ra `v:` eka `ol.yml` , hi kombela **u tiyiseka leswaku u rhanga hi ku susa `.i18n/v/ol`** ivi u yi kandziyisa.

##### Seva Ya Vuyimeri Leyi Kandziyisiweke Hi npm

Loko vatirhisi va le tikweni-nkulu ra China va hlangana na swiphiqo swa netiweke naswona va nga swi koti ku kandziyisa tiphasela ta `npm` , va nga veka xihlawulekisi xa mbango `https_proxy` ku lulamisa sevha ya vuyimeri.

Hi ku ehleketa leswaku port ya wena ya sevha ya vuyimeri i `7890` , u nga tsala:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Swilo Leswi Tiyimeleke

Loko u lava ku tikhoma nhundzu, rhanga hi ku hlela `md/.i18n/htm/ol.yml` ivi u cinca `v: //unpkg.com/i18n.site` eka xirhangi xa wena xa URL, ku fana na `v: //i18n-v.xxx.com` .

Nghenisa eka `md` directory ivi u tsutsuma

```
i18n.site --htm_conf ol --save
```

kumbe xifunengeto

```
i18n.site -c ol -s
```

Kutani, lulamisa leswi nga endzeni eka `md/out/ol/v` directory eka ndlela ya xirhangi xa URL leyi vekiweke eka `v:` .

Eku heteleleni, **lulamisa nkarhi wa cache wa ndlela leyi helelaka hi `/.v` ku ya eka `1s`** , handle ka sweswo nhundzu leyintshwa leyi humesiweke a yi nge fikeleleki hi ku hatlisa.

Nkarhi wa cache wa tindlela tin’wana wu nga vekiwa eka lembe rin’we kumbe ku tlula ku hunguta swikombelo leswi nga lavekiki.

##### Host Content Eka s3

Ku tikhoma swilo, ku engetela eka ku tirhisa sevha ya wena, ndlela yin’wana leyi `CDN` i ku tirhisa `S3` +

U nga tirhisa [rclone](https://rclone.org) ku nghena eka sevha ya `S3` , kutani u languta no cinca tsalwa leri landzelaka, naswona u kopa ntsena ku cinca loku engetelekeke eka `S3` eka nkandziyiso wun’wana na wun’wana.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Tsundzuka ku lulamisa `CDN` leswaku nkarhi wa cache wa ndlela leyi helelaka hi `/.v` wu va `1s` , handle ka sweswo nhundzu leyintshwa leyi humesiweke a yi nge fikeleleki hi ku hatlisa.

### Ku Kandziyisa Webusayiti

Website yi nga tirhisiwa kun'wana na kun'wana [github page](https://pages.github.com) naswona [cloudflare page](https://pages.cloudflare.com) i swihlawulekisi leswinene.

Hikuva webusayiti yi tirhisa xivumbeko xa [xitirhisiwa xa tluka rin’we](https://developer.mozilla.org/docs/Glossary/SPA) , tsundzuka ku tsala nakambe tindlela ta URL leti nga riki na `. ` ku ya eka `index.html` .

Tluka ro nghena eka webusayiti ri lava ku tirhisiwa kan’we ntsena, naswona a ku na xilaveko xo tlhela u tirhisa tluka ro nghena eka webusayiti eka ku pfuxetiwa ka nhundzu loku landzelaka.

#### Ku Hangalasa Eka Pheji Ya github

Xo sungula [tinya github ku tumbuluxa nhlangano](https://github.com/account/organizations/new?plan=free) `i18n-demo`

Kutani endla warehouse `i18n-demo.github.io` ehansi ka nhlangano lowu (hi kombela u siva `i18n-demo` hi vito ra nhlangano leri u ri tumbuluxeke):

![](https://p.3ti.site/1721098657.avif)

Loko u kandziyisa leswi nga endzeni eka xihloko lexi hundzeke, `out/ol/htm` yi endliwile Hi kombela u nghenisa xikombo lexi ivi u tsutsuma :

```
ln -s index.html 404.html
```


Hikuva `github page` a yi seketeli ku tsariwa nakambe ka ndlela ya URL, `404.html` yi tirhisiwa ematshan’wini ya sweswo.

Kutani tirhisa xileriso lexi landzelaka eka `htm` directory (tsundzuka ku siva `i18n-demo/i18n-demo.github.io.git` hi adirese ya wena ya vuhlayiselo) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Endzhaku ko susumeta khodi, yimela ku tirhisiwa ka `github page` ku tirha hi ndlela leyi humelelaka (hilaha swi kombisiweke hakona laha hansi) u nga si yi fikelela.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Ku kuma pheji ya demo hi kombela u vona:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Ku Hangalasa Eka Tluka Ra cloudflare

[cloudflare page](//pages.cloudflare.com) `github page`

Ku tirhisiwa ka `cloudflare page` hi ntolovelo ku sekeriwe eka ku tirhisiwa ka `github page` laha henhla.

Endla phurojeke u boha `i18n-demo.github.io` warehouse leyi nga laha henhla.

Endlelo ri kombisiwile eka xifaniso lexi nga laha hansi:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Hi kombela u tikhoma `Add Account` ku nyika mfikelelo eka nhlangano `i18n-demo` .

Loko u bohile ndhawu yo hlayisela swilo ya nhlangano wun’wana, u nga ha lava ku tikhoma `Add Account` kambirhi ku pfumelela kambirhi nhlangano lowuntshwa wu nga si kombisiwa.

![](https://p.3ti.site/1721118306.avif)

Endzhaku ka sweswo, hlawula warehouse `i18n-demo.github.io` , kutani u tikhoma `Begin setup` , kutani u tirhisa mimpimo ya ntolovelo eka magoza lama landzelaka.

![](https://p.3ti.site/1721118490.avif)

Endzhaku ko boha ro sungula, u fanele u rindza timinete ti nga ri tingani u nga si yi fikelela.

Endzhaku ko tirhisiwa, u nga boha vito ra domain ra ntolovelo.

![](https://p.3ti.site/1721119459.avif)

Endzhaku ko boha vito ra domain ra ntolovelo, hi kombela u ya eka vito ra domain ku lulamisa ku tsariwa nakambe ka ndlela ya xitirhisiwa xa tluka rin’we, tanihilaha swi kombisiweke hakona laha hansi:

![](https://p.3ti.site/1721119320.avif)

Milawu leyi nga eka xifaniso lexi nga laha henhla hi leyi landzelaka Hi kombela u siva `i18n.site` eka layini yo sungula laha hansi hi vito ra domain leri u ri boheke.

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

Ku engetela kwalaho, hi kombela u lulamisa milawu ya cache, tanihilaha swi kombisiweke hakona laha hansi, naswona u veka nkarhi wa cache eka n’hweti yin’we.

![](https://p.3ti.site/1721125111.avif)

Hi kombela u cinca ku fambelana ka vito ra domain eka goza ra vumbirhi eka xifaniso lexi nga laha henhla eka vito ra domain leri u ri boheke.

#### Ku Antswisa Ku Tirhisiwa Ka Webusayiti Etikweni-Nkulu Ra China

Loko u lava ku kuma matirhelo yo antswa ya ku fikelela eka ndhawu ya netiweke ya tiko-nkulu ra China, hi kombela u [tsarisa vito ra domain](//beian.aliyun.com) ku sungula.

Kutani, tirhisa vuhlayiselo bya swilo swa vaxavisi va le mapapa etikweni-nkulu ra + `CDN` Deploy the following content `out/ol/htm` .

U nga tirhisa khomphyuta ya le tlhelo ku tsala nakambe ndlela ku pfumelelana na switirhisiwa swa pheji yin’we Xikombiso, [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) yi nga lulamisiwa hi ndlela leyi:

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

Hikuva rhekhodo `MX` na rhekhodo `CNAME` a swi nge hanyi swin’we, loko `CNAME` lava ku amukela ti-imeyili ta mavito ya domain hi nkarhi wun’we, u fanele ku tirhisana na `A` [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten)

Ku engetela kwalaho, hikuva swibalo swa le matikweni ya le handle swa vaxavisi va le mapapa etikweni-nkulu ra China swa durha swinene, loko u lava ku antswisa swiendleko, u nga tirhisa [xiboho xa mahala xa ndhawu xa Huawei DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) na [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) vito ra domain ra ntolovelo (hilaha swi kombisiweke hakona laha hansi) ku fikelela ku hambukisiwa ka mimovha──Ku famba ka mimovha etikweni-nkulu ra China Baidu Cloud `CDN` , vutleketli bya matiko ya misava byi cloudflare .

![](https://p.3ti.site/1721119788.avif)

Switshuxo leswi swa ku antswisa ku tirhisiwa swi rharhanganile swinene naswona swi ta nghenisiwa eka tindzima to hambana enkarhini lowu taka.

#### Ku Kongomisiwa Nakambe Ka Vito Ra Domain Ra Xivumbeko Xa Le Henhla

Loko u tirhisa `i18n.site` ku tumbuluxa webusayiti tanihi webusayiti ya wena leyikulu, hi ntolovelo u fanele ku lulamisa ku kongomisiwa nakambe ka pan-domain, hi leswaku, ku kongomisa mfikelelo eka `*.xxx.com` (ku katsa na `www.xxx.com` ) ku ya eka `xxx.com` .

Xilaveko lexi xi nga fikeleriwa hi ku pfuniwa hi Alibaba Cloud `CDN` `EdgeScript` ( [Tsalwa ra Xinghezi](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Tsalwa ra Xichayina](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ) .

Engetelani vito ra domain eka [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) naswona u kombetela vito ra domain `*.xxx.com` `CNAME` eka Alibaba Cloud `CDN` .

![](https://p.3ti.site/1721122000.avif)

Xikombiso, xivumbeko xa ku kongomisiwa nakambe ka vito ra pan-domain xa `*.i18n.site` eka xifaniso lexi nga laha henhla xi le ka xiyimo lexi landzelaka:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

#### Ku Hangalasa Hi nginx

Hi kombela u engetela `/root/i18n/md/out/ol/htm` lexi fanaka na lexi landzelaka eka ndzimana `server` ya nginx `out/ol/htm`

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

#### `public`

Tifayili leti nga cinciki ta webusayiti, to tanihi `favicon.ico` , `robots.txt` , na swin’wana.

Tifayili ta swifaniso laha ti nga endliwa hi [realfavicongenerator.net](https://realfavicongenerator.net)

#### `.i18n`

Ehansi ka `.i18n` directory ku na tifayela ta vukorhokeri, cache ya vuhundzuluxi, na swin'wana swa `i18n.site` Vona ndzima leyi landzelaka ["Configuration"](/i18n.site/conf) ku kuma vuxokoxoko.

#### `en`

Xikombo xa ririmi ra xihlovo, lexi fambelanaka na `en` wa `fromTo` eka `.i18n/conf.yml` wa fayili ya vuhlanganisi

```yaml
i18n:
  fromTo:
    en: zh
```

Hi kombela u languta eka xivumbeko xa vuhundzuluxeri [i18](/i18/use)