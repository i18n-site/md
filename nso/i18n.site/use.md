# Tsenya Deploy &

## Letshwao La Peakanyo

`i18n.site` Sedirišwa sa `i18` phetolelo se tsentšwe, hle [kgotla mo go lebelela tokumente ya `i18` go beakanya leswao la phihlelelo](/i18/use) .

## Hloma

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Projeke Ya Demo

A re thomeng ka projeke ya demo gomme re ithute go šomiša `i18n.site`

Re thoma ka clone polokelo ya demo gomme ra sepetša taelo ka tsela ye e latelago:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Badiriši ba nageng-kgolo ya China ba ka:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

Leina la tšhupetšo la clone ya motheo wa khoutu e swanetše go ba `md` go nolofatša ponelopele ya selegae ka `docker` `demo.i18n.site`

### Fetolela

`en` `zh` , `i18n.site` `md`

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Ka morago ga go šoma, difaele tša phetolelo le tša cache di tla tšweletšwa Hle gopola go di oketša polokelong `git add . ` ka gare `md` tšhupetšo.

### Ponelopele Ya Selegae

Kenya le go thoma `docker` ( `MAC` ba kgothaletša go diriša [orbstack](https://orbstack.dev) bjalo ka nako ya go sepela ya `docker` ).

Ka [https://127.0.0.1](https://127.0.0.1) ga `./up.sh` , tsenya `docker`

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Diteng Tša Poso

`i18n.site` E amogela mohlwaela [wa tirišo wa letlakala le tee](https://developer.mozilla.org/docs/Glossary/SPA) , gomme letlakala la go tsena la weposaete le diteng tša weposaete di tsenywa tirišong ka go ikemela.

Ka morago ga go sepetša phetolelo ye e lego ka mo godimo, dipuku tša `htm` le `v` di tla tšweletšwa ka gare ga `md/out/dev`

Mo, `dev` e laetša gore e agilwe go ya ka faele `.i18n/htm/dev.yml` .

Ka tlase ga : `dev`

`htm` Ka tlase ga tšhupetšo ke letlakala la go tsena la weposaete.

`v` Tšhupetšo e na le diteng tša weposaete tšeo di nago le nomoro ya phetolelo.

Tebelelopele ya selegae e tla kopiša difaele ka moka go tšhupetšo ya `out/dev/v/0.1.0`

Bakeng sa tokollo ya semmušo, difaele tše di fetotšwego di tla kopišwa go tšhupetšo ya nomoro ya phetolelo ye mpsha.

#### Šomiša -c Go Laetša Faele Ya Peakanyo

Difaele tša peakanyo tše di fapanego di tla hlama dipuku tša go swana ka fase ga `out`

Mohlala, `.i18n/htm/ol.yml` tla bopa `out/ol` directory.

`dev.yml` le `ol.yml` ke dipeakanyo tša go se fetoge.

`dev` ke khutsofatšo ya `development` , yeo e emelago tikologo ya tlhabollo, e šomišwa bakeng sa ponelopele ya selegae, gomme gape ke faele ya peakanyo ya go se fetoge.
`ol` khutsofatšo ya `online` , yeo e emelago tikologo ya inthanete, e šomišwa go lokollwa semmušo, gomme gape ke faele ya peakanyo ya go se fetoge ge e phatlalatšwa go `npm` o šomiša paramethara ya mola wa taelo `-n` .

O ka hlama gape difaele te dingwe ta peakanyo Šomiša `--htm_conf`

Mohlala:
```
i18n.site --htm_conf yourConfig --save
```

Mona `--save`

#### <a rel=id href="#npm" id="npm"></a> Phatlalatša diteng go npmjs.com

Go phatlalatša diteng go [npmjs.com](//npmjs.com) ke tharollo ya go se fetoge ye e kgothaletšwago (bona [Front-end High Availability](/i18n.site/feature#ha) ).

##### npm login & Lokolla

Tsenya `nodejs` šomiša `npm login` go tsena.

Edita `md/.i18n/htm/ol.yml` fetola `i18n.site` ka `v: //unpkg.com/i18n.site` go ya gago `npm` leina la sephuthelwana.

E no šomiša leina la sephuthelwana seo se sa dulwago go [npmjs.com](//npmjs.com)

Ge o phatlalatša go ya ka sephuthelwana sa `npm` , **kgonthiša gore o šomiša `//unpkg.com/`** bjalo ka hlogo ya boleng bja `v:` Nako ya cache `i18n.site` ka fase ga tsela ye ya hlogo `/.v` e lokišitšwe ka mo go kgethegilego go kgontšha go lebelela ka nako ga ditokollo tše mpsha.

Matha `i18n.site --npm` goba `i18n.site -n` ka gare `md` tšhupetšo go fetolela le go phatlalatša.

Ge o šomiša tikologo ya kopanyo ye e tšwelago pele go phatlalatša, ga go nyakege gore o e tsenye `nodejs` Kopiša fela tumelelo ye e tsentšwego le ye e phatlaladitšwego `~/.npmrc` tikologong.

Ge o fetoša leina **`.i18n/v/ol`** sephuthelwana ka go `v:` ka `ol.yml`

##### Seva Ya Moemedi E Phatlaladitšwego Ke npm

Ge e ba badiriši ba nageng-kgolo ya China ba kopana le mathata a netweke gomme ba sa kgone go phatlalatša sephuthelwana sa `npm` , ba ka beakanya phetogo ya tikologo `https_proxy` go beakanya seva ya moemedi.

Ka go tšea gore boema-kepe bja gago bja seva ya moemedi ke `7890` o ka ngwala:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Diteng Tšeo Di Itshwarelago

Ge o nyaka go itshwara diteng, pele, rulaganya `md/.i18n/htm/ol.yml` gomme o fetoše `v: //unpkg.com/i18n.site` go hlogo ya gago ya URL, go swana le `v: //i18n-v.xxx.com` .

Kena ka `md`

```
i18n.site --htm_conf ol --save
```

goba khutsofatšo

```
i18n.site -c ol -s
```

Ka morago ga moo, beakanya diteng ka go `md/out/ol/v` go tsela ya hlogo ya URL yeo e beakantšwego go `v:` .

Sa mafelelo, **beakanya nako ya cache ya tsela yeo e felelago ka `/.v` go `1s`** , go sego bjalo diteng tše di sa tšwago go lokollwa di ka se fihlelelwe ka pela.

Nako ya cache ya ditsela tše dingwe e ka bewa go ngwaga o tee goba go feta go fokotša dikgopelo tše di sa nyakegego.

##### Host Diteng Go s3

Go itshwara diteng, go tlaleletša go šomiša `CDN` ya gago, kgetho ye nngwe + e tlwaelegilego ke go šomiša `S3`

O ka šomiša seva `S3` `S3` tsena [rclone](https://rclone.org)

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Gopola go beakanya `CDN` gore nako ya cache ya tsela yeo e felelago ka `/.v` e be `1s` , go sego bjalo o ka se kgone go fihlelela diteng tšeo di sa tšwago go lokollwa ka pela.

### Phatlalatša Weposaete

Webosaete e ka tsenywa tirišong kae goba kae [github page](https://pages.github.com) gomme [cloudflare page](https://pages.cloudflare.com) ke dikgetho tše dibotse.

Ka lebaka la gore weposaete e amogela sebopego sa [tirišo ya letlakala le tee](https://developer.mozilla.org/docs/Glossary/SPA) , gopola go ngwala gape tsela ya URL yeo e se `. ` go `index.html` .

Letlakala la go tsenya weposaete le swanetše go tsenywa tirišong gatee fela, gomme ga go nyakege gore o tsenye letlakala la go tsenya weposaete gape bakeng sa dimpshafatšo tša diteng tše di latelago.

#### Deploy Ka github Leqepheng La

Pele [tobetsa github ho bopa mokgatlo](https://github.com/account/organizations/new?plan=free) Lebitso le latelang ke `i18n-demo`

Ke moka o hlame lefelo la polokelo ka fase ga mokgatlo wo `i18n-demo.github.io` (Hle tšea legato la `i18n-demo` ka leina la mokgatlo leo o le hlotšego):

<img alt="" src="https://p.3ti.site/1721098657.avif">

Ge o phatlalatša diteng tša sehlogo se se fetilego, di tšweleditšwe `out/ol/htm` tsenya tšhupetšo ye gomme o kitime :

```
ln -s index.html 404.html
```


Ka gobane `github page` ga e thekge go ngwala gape tsela ya URL, ka fao `404.html` e šomišwa go e na le moo.

Ke moka o sepele taelo ye e latelago ka gare `htm` tšhupetšo (gopola go tšeela `i18n-demo/i18n-demo.github.io.git` legato ka aterese ya gago ya polokelo) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Ka morago ga go kgorometša khoutu, emela gore go tsenywa tirišong ga `github page`

<img src="//p.3ti.site/1721116586.avif" width="350px">

Bakeng sa letlakala la demo hle bona:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Deploy Ka Leqepheng La cloudflare

[cloudflare page](//pages.cloudflare.com) Ge e bapetšwa le `github page`

`cloudflare page` Go tsenywa tirišong gantši go theilwe godimo ga go tsenywa tirišong ga `github page` ka godimo.

Bopa porojeke e ne tlama polokelo ka holimo `i18n-demo.github.io`

Tshepedišo e bontšhitšwe seswantšhong se se lego ka mo tlase:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

Hle tobetsa `Add Account` fa phihlelelo go `i18n-demo` .

Ge e ba o tlemile polokelo ya mokgatlo o mongwe, o ka swanelwa ke go kgotla `Add Account`

<img alt="" src="https://p.3ti.site/1721118306.avif">

Se se latelago kgetha `i18n-demo.github.io` Warehouse, ke moka o klike `Begin setup` , gomme o šomiše dikelo tša go se fetoge bakeng sa magato a latelago.

<img alt="" src="https://p.3ti.site/1721118490.avif">

Ka morago ga go tlama ka lekga la mathomo, o swanetše go leta metsotso e sego kae pele o ka e fihlelela.

Ka morago ga go tsenywa tirišong, o ka tlama leina la domain ya tlwaelo.

<img alt="" src="https://p.3ti.site/1721119459.avif">

Ka morago ga go tlama leina la domain la tlwaelo, hle eya go leina la domain go beakanya go ngwala gape ga tsela ya tirišo ya letlakala le tee, bjalo ka ge go bontšhitšwe ka mo tlase:

<img alt="" src="https://p.3ti.site/1721119320.avif">

Melawana yeo e lego seswantšhong se se lego ka mo godimo ke ye e latelago Hle e tšeele sebaka sa `i18n.site`

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

Go tlaleletša, hle beakanya melawana ya cache, bjalo ka ge go bontšhitšwe ka mo tlase, gomme o beakantše nako ya cache go kgwedi e tee.

<img alt="" src="https://p.3ti.site/1721125111.avif">

Hle fetola go swana ga leina la domain mo mogatong wa bobedi seswantšhong sa ka godimo go leina la domain leo o le tlemilego.

#### Optimizing Websaeteng Deployment Ka Naha-Kgolo Ya China

Ge e ba o nyaka go hwetša tshepedišo e kaone ya phihlelelo tikologong ya netweke ya naga-kgolo ya China, hle [ngwadiša leina la domain](//beian.aliyun.com) pele.

`out/ol/htm` morago ga moo, diriša polokelo ya dilo ya barekiši ba leru nageng-kgolo `CDN` China +

O ka šomiša khomphutha ya mošito go ngwala gape tsela ya go tlwaela dikgopelo tša letlakala le tee, go swana le [Baidu Smart `CDN`](//cloud.baidu.com/product/cdn.html) E ka beakanywa ka tsela ye:

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

Ka lebaka la gore `MX` direkoto le `CNAME` direkhoto di ka se phele mmogo, ge o nyaka go amogela di-imeile tša leina la domain ka nako e tee, o swanetše go dirišana le `A` `CNAME` [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten)

Go tlaleletša, ka lebaka la gore ditefišo tša sephethephethe tša ka mošola wa mawatle tša barekiši ba leru nageng-kgolo ya China di bitša kudu, ge e ba o nyaka go dira gore ditshenyagalelo di šome gabotse, o ka diriša [tharollo ya mahala ya thutafase DNS Huawei Cloud](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) le [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) 's custom domain name (bjalo ka ge go bontšhitšwe ka mo tlase) go fihlelela sephethephethe fapo──Sephethephethe ka naha-kgolo China Baidu Leru `CDN` sephethephethe machaba e ea cloudflare .

<img alt="" src="https://p.3ti.site/1721119788.avif">

Ditharollo tše tša go dira gore go tsenywa tirišong gabotse di raragane kudu gomme di tla tsebagatšwa dikgaolong tše di aroganego nakong ye e tlago.

#### Generic Domain Name Lebitso La Redirection

Ge o šomiša `i18n.site` go tšweletša weposaete bjalo ka weposaete ya gago ye kgolo, gantši o swanetše go beakanya go lebiša lefsa ga pan-domain, ke gore, go lebiša gape `*.xxx.com` (go akaretšwa `www.xxx.com` ) go `xxx.com` .

Senyakwa se se ka fihlelelwa ka thušo ya `EdgeScript` ( [tokomane ya Seisemane](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [tokomane ya Setšhaena](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ) ya Alibaba Cloud `CDN`

Oketša leina la domain ka go [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) gomme o šupe leina `*.xxx.com` domain go Alibaba Cloud `CDN` 's `CNAME` .

<img alt="" src="https://p.3ti.site/1721122000.avif">

Ka mohlala, peakanyo ya go lebiša leina la pan-domain ya `*.i18n.site`

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### Deploy Ka nginx

`/root/i18n/md/out/ol/htm` oketša peakanyo ye e swanago le ye e latelago `server` `out/ol/htm` nginx

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Sebopego Sa Tlhahlo

#### Setšhaba

Difaele tša go se fetoge tša weposaete, tše bjalo ka `favicon.ico` `robots.txt` , bjalobjalo.

Difaele tša leswao mo di ka tšweletšwa ka [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n

`.i18n` `i18n.site`[​](/i18n.site/conf)

#### en

Mohlodi polelo tšhupetšo, e sepelelanago `.i18n/conf.yml` `fromTo` `en` ka faeleng ya peakanyo

```yaml
i18n:
  fromTo:
    en: zh
```

Hle lebelela peakanyo ya phetolelo [i18](/i18/use)

