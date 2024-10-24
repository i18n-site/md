# Suiteáil &

## Suiteáil

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Comhartha Cumraíochta

Tá uirlis aistriúcháin ionsuite `i18` ag `i18n.site` [Cliceáil anseo le do thoil chun tagairt a dhéanamh don doiciméad `i18` chun an comhartha rochtana a chumrú](/i18/use) .

## Tionscadal Taispeána

Cuirimis tús le tionscadal taispeána chun foghlaim conas `i18n.site` .

Déanaimid an stór taispeána a chlónáil ar dtús agus ritheann muid an t-ordú mar seo a leanas:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Is féidir le húsáideoirí ar mhórthír na Síne:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

Caithfidh ainm eolaire an chlón bonn `demo.i18n.site` cód a bheith `md` chun réamhamharc áitiúil le `docker` a éascú.

### Aistrigh

Ar dtús, cuir isteach an t-eolaire `md` agus rith `i18n.site` , a aistreoidh `en` go `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Tar éis iad a rith `git add . ` ginfear comhaid aistriúcháin agus `md` .

### Réamhamharc Áitiúil

Suiteáil agus cuir tús le `docker` (molann `MAC` úsáideoir úsáid a bhaint as [orbstack](https://orbstack.dev) mar an t-am rite do `docker` ).

Ansin, cuir isteach an t-eolaire `docker` agus rith `./up.sh` , agus ansin tabhair cuairt ar [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Ábhar a Phostáil

`i18n.site` glacann sé ailtireacht [feidhmchláir aon leathanach](https://developer.mozilla.org/docs/Glossary/SPA) , agus déantar leathanach iontrála an tsuímh Ghréasáin agus ábhar an tsuímh Ghréasáin a imscaradh go neamhspleách.

Tar éis an t-aistriúchán thuas a rith, ginfear eolairí `htm` agus `v` faoin eolaire `md/out/dev` .

Anseo, ciallaíonn `dev` go bhfuil sé tógtha bunaithe ar an gcomhad cumraíochta `.i18n/htm/dev.yml` .

`dev` eolaire :

Is é an t-eolaire `htm` ná leathanach iontrála an tsuímh Ghréasáin.

Tá ábhar an tsuímh Ghréasáin le huimhreacha leagan san eolaire `v` .

Is cuma le réamhamharc áitiúil faoin uimhir leagain agus déanfaidh sé gach comhad a chóipeáil chuig an eolaire `out/dev/v/0.1.0` .

Le haghaidh eisiúint oifigiúil, déanfar comhaid athraithe a chóipeáil chuig an eolaire uimhreacha leagan nua.

#### Sonraigh an Comhad Cumraíochta Le `-c`

Cruthóidh comhaid chumraíochta éagsúla eolairí comhfhreagracha san eolaire `out` .

Mar shampla, cruthóidh `.i18n/htm/ol.yml` an t-eolaire `out/ol` .

Is iad `dev.yml` agus `ol.yml` na cumraíochtaí réamhshocraithe.

Is é `dev` an giorrúchán de `development` , a léiríonn an timpeallacht forbartha, a úsáidtear le haghaidh réamhamharc áitiúil, agus is é an comhad cumraíochta réamhshocraithe é freisin.
Is é `ol` an giorrúchán de `online` , rud a léiríonn an timpeallacht ar líne, a úsáidtear le haghaidh scaoileadh oifigiúil Is é freisin an comhad cumraíochta réamhshocraithe nuair a úsáidtear paraiméadair na n-orduithe `-n` go `npm` le scaoileadh.

Is féidir leat comhaid cumraíochta eile a chruthú freisin Úsáid `--htm_conf` ar an líne ordaithe chun ainm an chomhaid chumraíochta a shonrú:

mar shampla:
```
i18n.site --htm_conf yourConfig --save
```

Seo `--save` seasann an uimhir leagain eisiúna nuashonraithe.

#### <a rel=id href="#npm" id="npm"></a> Foilsigh ábhar chuig npmjs.com

Is é an réiteach réamhshocraithe [npmjs.com](//npmjs.com) ábhar a fhoilsiú (féach [Ard-Infhaighteacht ag an gceann tosaigh](/i18n.site/feature#ha) ).

##### Scaoileadh npm login &

Suiteáil `nodejs` , logáil isteach le `npm login` .

Cuir `md/.i18n/htm/ol.yml` in eagar agus athraigh luach [`md:`](//github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/ol.yml#L7) `YOUR_NPM_PACKAGE` [npmjs.com](//npmjs.com) ainm do `npm` phacáiste féin.

Ansin modhnaigh `md/.i18n/htm/ol.package.json`

Rith `i18n.site --npm` nó `i18n.site -n` san eolaire `md` chun aistriú agus foilsiú.

Má úsáideann tú timpeallacht chomhtháthaithe leanúnach chun foilsiú, ní gá `nodejs` a shuiteáil, níl le déanamh ach an cead logáilte isteach agus cead `~/.npmrc` a fhoilsiú don chomhshaol.

Má athraíonn tú ainm an phacáiste `v:` in `ol.yml` , **bí cinnte go scriosann tú `.i18n/v/ol` ar dtús** agus ansin foilsigh é.

##### Seachfhreastalaí Arna Fhoilsiú Ag npm

Má bhíonn fadhbanna líonra ag úsáideoirí ar mhórthír na Síne agus nach bhfuil siad in ann `npm` pacáiste a fhoilsiú, is féidir leo athróg timpeallachta `https_proxy` a shocrú chun an seachfhreastalaí a chumrú.

Ag glacadh leis gurb é `7890` port do sheachfhreastalaí, is féidir leat scríobh:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Ábhar Féin-Óstáilte

Más mian leat an t-inneachar féin a óstáil, cuir `md/.i18n/htm/ol.yml` in eagar ar dtús agus athraigh `v: //unpkg.com/i18n.site` go dtí do réimír URL, mar `v: //i18n-v.xxx.com` .

Cuir isteach an t-eolaire `md` agus rith

```
i18n.site --htm_conf ol --save
```

nó giorrúchán

```
i18n.site -c ol -s
```

Ansin, cumraigh an t-ábhar san eolaire `md/out/ol/v` go dtí an chonair réimír URL atá socraithe in `v:` .

Ar deireadh, **cumraigh am taisce an chosáin a chríochnaíonn i `/.v` go `1s`** , nó ní féidir teacht ar an ábhar nua-eisithe láithreach.

Is féidir an t-am taisce le haghaidh cosáin eile a shocrú go bliain amháin nó níos mó chun iarratais nach bhfuil gá leo a laghdú.

##### Ábhar an Óstaigh Chuig s3

Chun inneachar a óstáil féin, chomh maith le do fhreastalaí féin a úsáid, is rogha choitianta `CDN` é `S3` +

Is `S3` leat úsáid a bhaint `S3` [rclone](https://rclone.org)

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Cuimhnigh `CDN` a chumrú ionas gurb é `1s` am taisce an chosáin a chríochnaíonn in `/.v` , nó ní féidir teacht ar an ábhar nua-eisithe láithreach.

### Láithreán Gréasáin a Fhoilsiú

Is féidir an suíomh Gréasáin a imscaradh áit ar bith, is roghanna maithe [cloudflare page](https://pages.cloudflare.com) [github page](https://pages.github.com)

Toisc go n-úsáideann an láithreán gréasáin ailtireacht [feidhmchláir aon leathanach](https://developer.mozilla.org/docs/Glossary/SPA) , cuimhnigh ar chonairí URL nach bhfuil idir `. ` agus `index.html` iontu a athscríobh.

Ní gá leathanach iontrála an tsuímh Ghréasáin a imscaradh ach uair amháin, agus ní gá leathanach iontrála an tsuímh Ghréasáin a ath-imscaradh le haghaidh nuashonruithe ábhair ina dhiaidh sin.

#### Imscaradh Ar Leathanach github

[Cliceáil github ar dtús chun eagraíocht a chruthú](https://github.com/account/organizations/new?plan=free) `i18n-demo`

Ansin cruthaigh stóras `i18n-demo.github.io` faoin eagraíocht seo (cuir ainm na heagraíochta a chruthaigh tú in ionad `i18n-demo` le do thoil):

![](https://p.3ti.site/1721098657.avif)

Agus an t-ábhar san alt roimhe seo á fhoilsiú, tá `out/ol/htm` ginte Cuir isteach an t-eolaire seo agus rith :

```
ln -s index.html 404.html
```


Toisc nach dtacaíonn `github page` le hathscríobh cosán URL, úsáidtear `404.html` ina ionad sin.

Ansin rith an t-ordú seo a leanas san eolaire `htm` (cuimhnigh do sheoladh stórais féin a chur in ionad `i18n-demo/i18n-demo.github.io.git` ) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Tar éis duit an cód a bhrú, fan ar imscaradh `github page` a rith go rathúil (mar a thaispeántar thíos) sular féidir leat rochtain a fháil air.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Le haghaidh leathanach taispeána féach le do thoil:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Imscaradh Ar Leathanach cloudflare

[cloudflare page](//pages.cloudflare.com) gcomparáid le `github page` , soláthraíonn sé athscríobh cosáin agus tá sé níos cairdiúla don mhórthír na Síne agus tá sé níos inrochtana.

De ghnáth bíonn imscaradh `cloudflare page` bunaithe ar imscaradh `github page` thuas.

Cruthaigh tionscadal agus ceangail an stóras `i18n-demo.github.io` thuas.

Léirítear an próiseas san fhigiúr thíos:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Cliceáil `Add Account` le do thoil chun rochtain a thabhairt don eagraíocht `i18n-demo` .

Má tá stóras eagraíochta eile faoi cheangal agat, seans go mbeidh ort cliceáil ar `Add Account` faoi dhó chun údarú a fháil faoi dhó sula dtaispeánfar an eagraíocht nua.

![](https://p.3ti.site/1721118306.avif)

Ansin, roghnaigh stóras `i18n-demo.github.io` , ansin cliceáil `Begin setup` , agus úsáid na luachanna réamhshocraithe le haghaidh céimeanna ina dhiaidh sin.

![](https://p.3ti.site/1721118490.avif)

Tar éis ceangailteach den chéad uair, ní mór duit fanacht cúpla nóiméad sula bhféadfaidh tú rochtain a fháil air.

Tar éis imscaradh, is féidir leat ainm fearainn saincheaptha a cheangal.

![](https://p.3ti.site/1721119459.avif)

Tar éis duit an t-ainm fearainn saincheaptha a cheangal, téigh go dtí an t-ainm fearainn chun athscríobh cosán an fheidhmchláir aon-leathanaigh a chumrú, mar a thaispeántar thíos:

![](https://p.3ti.site/1721119320.avif)

Is iad seo a leanas na `i18n.site` sa phictiúr thuas.

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

Ina theannta sin, cumraigh le do thoil na rialacha taisce, mar a thaispeántar thíos, agus socraigh fad an taisce go dtí mí amháin.

![](https://p.3ti.site/1721125111.avif)

Athraigh an t-ainm fearainn atá ag teacht leis an dara céim sa phictiúr thuas go dtí an t-ainm fearainn a cheangail tú.

#### Imscaradh Láithreán Gréasáin a Bharrfheabhsú Ar Mhórthír Na Síne

Más mian leat feidhmíocht inrochtaineachta níos fearr a fháil i dtimpeallacht líonra mórthír na Síne, [cláraigh ainm fearainn](//beian.aliyun.com) ar dtús.

Ansin, bain úsáid as stóráil réad na ndíoltóirí scamall sa tSín + `CDN` Imscaradh an t-ábhar seo a leanas `out/ol/htm` .

Is féidir leat ríomhaireacht chiumhais a úsáid chun an cosán a athscríobh chun oiriúnú d’fheidhmchláir aon-leathanaigh Mar shampla, is féidir [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) a chumrú mar seo:

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

Toisc nach féidir taifead `MX` agus taifead `CNAME` a bheith ar aon dul, `A` `CNAME` leat ríomhphoist ainm fearainn a fháil ag an am céanna, ní mór duit comhoibriú leis an script [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten)

Ina theannta sin, toisc go bhfuil táillí tráchta thar lear díoltóirí scamall sa tSín mórthír sách costasach, más mian leat costais a bharrfheabhsú, is féidir leat úsáid a bhaint as [réiteach geografach saor in aisce Huawei Cloud DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) agus ainm fearainn saincheaptha [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (mar a thaispeántar thíos). atreorú tráchta ─ ─ Trácht sa tSín mórthír Baidu Cloud `CDN` , téann trácht idirnáisiúnta cloudflare .

![](https://p.3ti.site/1721119788.avif)

Tá na réitigh bharrfheabhsaithe imlonnaithe seo níos casta agus tabharfar isteach iad i gcaibidlí ar leith amach anseo.

#### Atreorú Cineálach Ainm Fearainn

Má úsáideann tú `i18n.site` chun suíomh Gréasáin a ghiniúint mar do phríomhshuíomh Gréasáin, de ghnáth ní mór duit atreorú uile-fhearainn a chumrú, is é sin, rochtain a atreorú chuig `*.xxx.com` (lena n-áirítear `www.xxx.com` ) go `xxx.com` .

Is féidir an riachtanas seo a bhaint amach le cabhair ó Alibaba Cloud `CDN` `EdgeScript` ( [doiciméad Béarla](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [doiciméad Sínis](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Cuir an t-ainm fearainn in [Alibaba Cloud CDN](https://cdn.console.aliyun.com/domain/list) agus cuir an t-ainm fearainn `*.xxx.com` `CNAME` in Alibaba Cloud `CDN` .

![](https://p.3ti.site/1721122000.avif)

Mar shampla, is é seo a leanas an chumraíocht atreoraithe ainm uile-fhearainn de `*.i18n.site` sa phictiúr thuas:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

#### Imscaradh Le nginx

Cuir cumraíocht cosúil leis an `/root/i18n/md/out/ol/htm` seo `out/ol/htm` leanas leis san alt `server` de nginx

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

#### `public`

Comhaid statacha an láithreáin ghréasáin, mar shampla `favicon.ico` , `robots.txt` , etc.

Is féidir na comhaid deilbhín anseo a ghiniúint le [realfavicongenerator.net](https://realfavicongenerator.net)

#### `.i18n`

Faoin eolaire `.i18n` tá na comhaid cumraíochta, taisce aistriúcháin, srl. de `i18n.site` Féach an chéad chaibidil eile ["Cumraíocht"](/i18n.site/conf) le haghaidh sonraí.

#### `en`

Eolaire teanga foinse, a fhreagraíonn do `en` as `fromTo` in `.i18n/conf.yml` comhad cumraíochta

```yaml
i18n:
  fromTo:
    en: zh
```

Déan tagairt le do thoil do chumraíocht an aistriúcháin [i18](/i18/use)