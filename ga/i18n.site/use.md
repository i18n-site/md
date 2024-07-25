# Suiteáil &

## Comhartha Cumraíochta

`i18n.site` Tá `i18` [`i18`](/i18/use) aistriúcháin

## Suiteáil

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Tionscadal Taispeána

Let tús le tionscadal taispeána agus foghlaim conas é a úsáid `i18n.site`

Déanaimid an stór taispeána a chlónáil ar dtús agus rithimid an t-ordú mar seo a leanas:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Is féidir le húsáideoirí ar mhórthír na Síne:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

`demo.i18n.site` `md` `docker`

### Aistrigh

Ar dtús, iontráil an eolaire `md` agus rith `i18n.site` , a aistreoidh `en` go `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Tar éis iad a rith, ginfear comhaid aistriúcháin `git add . ` taisce `md`

### Réamhamharc Áitiúil

Suiteáil agus tosaigh `docker` (Molann `MAC` úsáid [orbstack](https://orbstack.dev) mar an t-am rite de `docker` ).

Ansin, cuir isteach an eolaire `docker` agus rith `./up.sh` , agus ansin tabhair cuairt ar [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Ábhar a Phostáil

Glacann `i18n.site` ailtireacht [feidhmchláir aon-leathanach](https://developer.mozilla.org/docs/Glossary/SPA) , agus déantar leathanach iontrála an tsuímh Ghréasáin agus ábhar an tsuímh Ghréasáin a imscaradh go neamhspleách.

Tar éis an t-aistriúchán thuas a rith, ginfear `htm` agus `v` comhadlann san eolaire `md/out/dev`

Anseo, léiríonn `dev` go bhfuil sé tógtha bunaithe ar an gcomhad `.i18n/htm/dev.yml` .

Faoi : `dev`

`htm` eolaire tá leathanach iontrála an tsuímh Ghréasáin.

`v`

Déanfaidh réamhamharc áitiúil gach comhad a chóipeáil chuig an eolaire `out/dev/v/0.1.0`

Le haghaidh eisiúint oifigiúil, déanfar comhaid athraithe a chóipeáil chuig an eolaire uimhreacha leagan nua.

#### Úsáid -c Chun an Comhad Cumraíochta a Shonrú

Cruthóidh comhaid chumraíochta éagsúla eolairí comhfhreagracha faoin eolaire `out`

Mar shampla, `out/ol` `.i18n/htm/ol.yml`

Is iad `dev.yml` agus `ol.yml` na cumraíochtaí réamhshocraithe.

Is é `dev` an giorrúchán de `development` , a léiríonn an timpeallacht forbartha, a úsáidtear le haghaidh réamhamharc áitiúil, agus is é an comhad cumraíochta réamhshocraithe é freisin.
Is é `ol` an giorrúchán de `online` , a léiríonn an timpeallacht ar líne, a úsáidtear le haghaidh eisiúint oifigiúil, agus is é an comhad cumraíochta réamhshocraithe é nuair a fhoilsítear go `npm` ag baint úsáide as paraiméadar na n-orduithe `-n` .

Is féidir leat comhaid cumraíochta eile a chruthú freisin Úsáid `--htm_conf` ar an líne ordaithe chun ainm an chomhaid chumraíochta a shonrú:

mar shampla:
```
i18n.site --htm_conf yourConfig --save
```

Anseo `--save` léiríonn an uimhir leagain nuashonraithe.

#### <a rel=id href="#npm" id="npm"></a> Foilsigh ábhar chuig npmjs.com

[npmjs.com](//npmjs.com) é an réiteach réamhshocraithe molta ábhar a fhoilsiú (féach [Ard-Infhaighteacht ag an gceann tosaigh](/i18n.site/feature#ha) ).

##### Scaoileadh npm login &

Suiteáil `nodejs` bain úsáid as `npm login` chun logáil isteach.

Cuir `md/.i18n/htm/ol.yml` athraigh `i18n.site` in `v: //unpkg.com/i18n.site` chuig do cheann féin `npm` ainm an phacáiste.

Úsáid an t-ainm pacáiste neamháitithe ar [npmjs.com](//npmjs.com)

**`//unpkg.com/`** `i18n.site` ag foilsiú bunaithe ar `v:` `/.v` `npm`

Rith `i18n.site --npm` nó `i18n.site -n` san eolaire `md`

Má úsáideann tú `~/.npmrc` um chomhtháthú leanúnach chun foilsiú, ní gá é a shuiteáil `nodejs`

**`.i18n/v/ol`** athraíonn tú ainm an phacáiste in `v:` in `ol.yml`

##### Seachfhreastalaí Arna Fhoilsiú Ag npm

Má bhíonn fadhbanna líonra ag úsáideoirí ar mhórthír na Síne agus `https_proxy` bhfuil siad in ann an pacáiste `npm`

Ag glacadh leis go bhfuil do phort seachfhreastalaí `7890` is féidir leat scríobh:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Ábhar Féin-Óstáilte

Más mian leat an t-inneachar féin a óstáil, `md/.i18n/htm/ol.yml` in eagar ar dtús agus athraigh `v: //unpkg.com/i18n.site` chuig do réimír URL, mar `v: //i18n-v.xxx.com` .

Cuir isteach an eolaire `md`

```
i18n.site --htm_conf ol --save
```

nó giorrúchán

```
i18n.site -c ol -s
```

Ansin, cumraigh an t-ábhar san `v:` `md/out/ol/v`

Ar deireadh, **cumraigh am taisce an chosáin a chríochnaíonn i `/.v` go `1s`** , nó ní féidir teacht ar an ábhar nua-eisithe láithreach.

Is féidir an t-am taisce le haghaidh cosáin eile a shocrú go bliain amháin nó níos mó chun iarratais nach bhfuil gá leo a laghdú.

##### Ábhar an Óstaigh Chuig s3

Chun inneachar a óstáil féin, chomh maith le do fhreastalaí féin a úsáid, `CDN` rogha choitianta eile é `S3` +

Is `S3` leat freastalaí [rclone](https://rclone.org) Logáil Isteach `S3`

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Cuimhnigh a chumrú `CDN` ionas gurb é `1s` nó $ , an t-am taisce don chonair a chríochnaíonn le `/.v` , nó ní bheidh tú in ann rochtain a fháil ar an ábhar nua-eisithe láithreach.

### Láithreán Gréasáin a Fhoilsiú

Is féidir an suíomh Gréasáin a imscaradh áit ar bith, [cloudflare page](https://pages.cloudflare.com) roghanna maithe iad [github page](https://pages.github.com)

Toisc go nglacann an suíomh Gréasáin le hailtireacht [feidhmchláir aon-leathanach](https://developer.mozilla.org/docs/Glossary/SPA) , cuimhnigh ar an gconair URL nach bhfuil `. ` a athscríobh go `index.html` .

Ní gá leathanach iontrála an tsuímh Ghréasáin a imscaradh ach uair amháin, agus ní gá leathanach iontrála an tsuímh Ghréasáin a ath-imscaradh le haghaidh nuashonruithe ábhair ina dhiaidh sin.

#### Imscaradh Ar Leathanach github

Ar dtús [cliceáil github](https://github.com/account/organizations/new?plan=free) `i18n-demo`

Ansin cruthaigh stóras faoin eagraíocht seo `i18n-demo.github.io` (Cuir ainm na heagraíochta a chruthaigh tú in ionad `i18n-demo` le do thoil):

<img alt="" src="https://p.3ti.site/1721098657.avif">

Agus an t-ábhar san alt roimhe seo á fhoilsiú, `out/ol/htm` sé ginte Cuir isteach an eolaire seo agus rith :

```
ln -s index.html 404.html
```


Toisc nach dtacaítear `404.html` `github page`

Ansin rith an t-ordú seo a leanas san eolaire `htm` (cuimhnigh do sheoladh stórais féin a chur in ionad `i18n-demo/i18n-demo.github.io.git` ) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Tar éis duit an cód a bhrú, fan go n-imscarfar `github page`

<img src="//p.3ti.site/1721116586.avif" width="350px">

Le haghaidh leathanach taispeána féach le do thoil:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Imscaradh Ar Leathanach cloudflare

[cloudflare page](//pages.cloudflare.com) gcomparáid le `github page` , soláthraíonn sé athscríobh cosán agus tá sé níos cairdiúla don mhórthír na Síne agus tá sé níos inrochtana.

`cloudflare page` ghnáth bíonn an t-imscaradh bunaithe ar imscaradh `github page` thuas.

Cruthaigh tionscadal agus ceangal an stóras thuas `i18n-demo.github.io`

Léirítear an próiseas san fhigiúr thíos:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

Cliceáil `Add Account` do thoil chun rochtain a thabhairt don `i18n-demo` .

Má tá stóras eagraíochta eile faoi cheangal agat, seans go mbeidh ort cliceáil ar `Add Account` faoi dhó chun é a údarú faoi dhó sula dtaispeánfar an eagraíocht nua.

<img alt="" src="https://p.3ti.site/1721118306.avif">

Ansin `Begin setup` `i18n-demo.github.io`

<img alt="" src="https://p.3ti.site/1721118490.avif">

Tar éis ceangailteach den chéad uair, ní mór duit fanacht cúpla nóiméad sula bhféadfaidh tú rochtain a fháil air.

Tar éis imscaradh, is féidir leat ainm fearainn saincheaptha a cheangal.

<img alt="" src="https://p.3ti.site/1721119459.avif">

Tar éis duit an t-ainm fearainn saincheaptha a cheangal, téigh go dtí an t-ainm fearainn chun athscríobh cosán an fheidhmchláir aon-leathanaigh a chumrú, mar a thaispeántar thíos:

<img alt="" src="https://p.3ti.site/1721119320.avif">

Is iad seo `i18n.site` leanas na rialacha sa phictiúr thuas.

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

Ina theannta sin, cumraigh le do thoil na rialacha taisce, mar a thaispeántar thíos, agus socraigh fad an taisce go dtí mí amháin.

<img alt="" src="https://p.3ti.site/1721125111.avif">

Athraigh an t-ainm fearainn atá ag teacht leis an dara céim sa phictiúr thuas go dtí an t-ainm fearainn a cheangail tú.

#### Imscaradh Láithreán Gréasáin a Bharrfheabhsú Ar Mhórthír Na Síne

Más mian leat feidhmíocht inrochtaineachta níos fearr a fháil i dtimpeallacht líonra mórthír na Síne, [cláraigh ainm fearainn](//beian.aliyun.com) ar dtús.

Ansin, bain úsáid as stóráil réad na ndíoltóirí scamall sa `CDN` `out/ol/htm` +

Is féidir leat ríomhaireacht chiumhais a úsáid chun an cosán a athscríobh chun oiriúnú d'fheidhmchláir aon-leathanaigh, mar [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html)

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

`A` `CNAME` `CNAME` [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) `MX`

Ina theannta sin, toisc go bhfuil táillí tráchta thar lear díoltóirí scamall sa tSín mórthír sách costasach, más mian leat costais a bharrfheabhsú, is féidir leat úsáid a bhaint as [réiteach geografach saor in aisce Huawei Cloud DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) agus ainm fearainn saincheaptha [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (mar a thaispeántar thíos). atreorú tráchta──Traffic sa tSín mórthír Baidu Cloud `CDN` Téann trácht idirnáisiúnta cloudflare .

<img alt="" src="https://p.3ti.site/1721119788.avif">

Tá na réitigh bharrfheabhsaithe imlonnaithe seo níos casta agus tabharfar isteach iad i gcaibidlí ar leith amach anseo.

#### Atreorú Cineálach Ainm Fearainn

`xxx.com` `www.xxx.com` `*.xxx.com` `i18n.site`

Is féidir an riachtanas seo a bhaint amach le cabhair ó `EdgeScript` ( [doiciméad Béarla](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [doiciméad Sínis](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ) Alibaba Cloud `CDN`

Cuir ainm fearainn leis in [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) agus pointeáil `*.xxx.com` t-ainm fearainn chuig Alibaba Cloud `CDN` 's `CNAME` .

<img alt="" src="https://p.3ti.site/1721122000.avif">

Mar shampla, is mar seo a leanas an chumraíocht atreoraithe ainm uile-fhearainn de `*.i18n.site`

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### Imscaradh Le nginx

Cuir cumraíocht cosúil leis an méid seo a leanas `/root/i18n/md/out/ol/htm` `server` `out/ol/htm` nginx

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Struchtúr Eolaire

#### Poiblí

Comhaid statacha an láithreáin ghréasáin, mar shampla `favicon.ico` `robots.txt` , etc.

Is féidir na comhaid deilbhín anseo a ghiniúint le [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n

`.i18n` Faoin eolaire tá comhaid cumraíochta `i18n.site` , taisce aistriúcháin, srl. Féach an chéad chaibidil eile ["Cumraíocht"](/i18n.site/conf) le haghaidh sonraí.

#### Ga

Eolaire teanga foinse, a fhreagraíonn `.i18n/conf.yml` `fromTo` `en` sa chomhad cumraíochta

```yaml
i18n:
  fromTo:
    en: zh
```

Déan tagairt le do thoil do chumraíocht an aistriúcháin [i18](/i18/use)

