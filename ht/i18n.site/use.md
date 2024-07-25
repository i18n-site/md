# Enstale &

## Siy Konfigirasyon

`i18` Zouti tradiksyon an entegre, tanpri klike la pou `i18n.site` [al gade nan dokiman `i18` pou konfigirasyon jeton aksè a](/i18/use) .

## Enstale

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Pwojè Demo

Ann kòmanse ak yon pwojè demonstrasyon epi aprann kijan pou itilize `i18n.site`

Nou premye klonaj depo Demo a epi kouri kòmandman an jan sa a:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Itilizatè yo nan tè pwensipal Lachin kapab:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

Non anyè klonaj baz kòd la dwe `md` pou fasilite aperçu lokal ak `docker` `demo.i18n.site`

### Tradwi

Premyèman, antre nan anyè `md` epi kouri `i18n.site` , ki pral tradui `en` nan `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Apre yo fin kouri, yo pral jenere fichye tradiksyon ak kach yo. Tanpri sonje ajoute yo nan depo `git add . ` nan anyè `md` .

### Preview Lokal Yo

`docker` `MAC` [orbstack](https://orbstack.dev) `docker`

Lè sa a, antre nan anyè `docker` epi kouri `./up.sh` , epi ale nan [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Afiche Kontni

`i18n.site` Adopte yon achitekti [aplikasyon pou yon sèl paj](https://developer.mozilla.org/docs/Glossary/SPA) , epi paj antre sit entènèt la ak kontni sit entènèt yo deplwaye poukont yo.

Apre w fin kouri tradiksyon ki anwo a, `htm` ak `v` anyè yo pral pwodwi nan anyè `md/out/dev`

Isit la `dev` endike ke li se bati ki baze sou dosye a `.i18n/htm/dev.yml` .

`dev` Anba kontni :

`htm` anyè a se paj antre sit entènèt la.

`v` Anyè a gen kontni sit entènèt la ak nimewo vèsyon an.

Preview lokal la pral kopye tout fichye yo nan `out/dev/v/0.1.0` a kèlkeswa nimewo vèsyon an.

Pou lage ofisyèl, yo pral kopye dosye ki chanje yo nan nouvo anyè nimewo vèsyon an.

#### Sèvi Ak -c Pou Presize Fichye Konfigirasyon An

Fichye konfigirasyon diferan pral kreye anyè ki koresponn anba `out` a.

Pa egzanp, `.i18n/htm/ol.yml` ap kreye yon `out/ol` anyè.

`dev.yml` ak `ol.yml` se konfigirasyon default yo.

se abrevyasyon `development` `dev` ki reprezante anviwònman devlopman, yo itilize pou preview lokal la, epi li se tou dosye konfigirasyon default la.
`ol` Abreviyasyon `online` , ki reprezante anviwònman an sou entènèt, yo itilize pou lage ofisyèl, epi li se tou fichye konfigirasyon default lè yo pibliye nan `npm` lè l sèvi avèk paramèt liy kòmand `-n` .

Ou ka kreye lòt fichye konfigirasyon `--htm_conf` .

pa egzanp:
```
i18n.site --htm_conf yourConfig --save
```

Isit `--save` endike nimewo vèsyon an aktyalizasyon.

#### <a rel=id href="#npm" id="npm"></a> Pibliye kontni sou npmjs.com

Pibliye kontni nan [npmjs.com](//npmjs.com) se solisyon an default rekòmande (gade [Front-end High Availability](/i18n.site/feature#ha) ).

##### npm login & Lage

Enstale `nodejs` sèvi ak `npm login` pou konekte.

Edit `md/.i18n/htm/ol.yml` chanje `i18n.site` nan `v: //unpkg.com/i18n.site` pou pwòp ou a `npm` non pake.

Jis itilize non pakè ki pa okipe sou [npmjs.com](//npmjs.com)

Lè w ap pibliye pakè `npm` , **asire w ke w sèvi ak `//unpkg.com/`** kòm ​​prefiks `v:` valè a kach `i18n.site` anba chemen prefiks sa a `/.v` te espesyalman optimize pou pèmèt yo gade nouvo lage yo alè.

Kouri `i18n.site --npm` oswa `i18n.site -n` nan anyè `md` pou tradui ak pibliye.

Si w itilize yon anviwònman entegrasyon kontinyèl pou pibliye, pa gen okenn nesesite pou `~/.npmrc` enstale li `nodejs`

Si ou modifye non pake a nan `v:` `ol.yml` , tanpri **asire w ke w efase `.i18n/v/ol` dabò** epi pibliye li.

##### Proxy Sèvè Pibliye Pa npm

Si itilizatè yo nan Lachin tè pwensipal rankontre pwoblèm rezo epi yo pa kapab pibliye pake `npm` , yo ka mete varyab anviwònman an `https_proxy` pou konfigirasyon sèvè proxy la.

Si nou sipoze pò sèvè proxy ou a se `7890` ou ka ekri:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Kontni Pwòp Tèt Ou Akomode

Si ou vle pwòp tèt ou òganize kontni an, premye, `md/.i18n/htm/ol.yml` ak chanje `v: //unpkg.com/i18n.site` nan prefiks URL ou a, tankou `v: //i18n-v.xxx.com` .

Antre nan anyè `md` epi kouri

```
i18n.site --htm_conf ol --save
```

oswa abrevyasyon

```
i18n.site -c ol -s
```

Lè sa a, konfigirasyon kontni an nan `md/out/ol/v` a nan chemen prefiks URL ki tabli nan `v:` .

Finalman, **konfigirasyon tan an kachèt nan chemen an `/.v` fini nan `1s`** , otreman kontni ki fèk pibliye yo pa ka jwenn aksè imedyatman.

Tan kachèt pou lòt chemen yo ka mete sou yon ane oswa plis pou diminye demann ki pa nesesè yo.

##### Mete Kontni Nan s3

Pou pwòp tèt ou òganize kontni, anplis de sèvi ak pwòp sèvè ou, `CDN` lòt opsyon komen se + ak `S3`

Ou ka sèvi ak [rclone](https://rclone.org) Login sèvè `S3` , Lè sa a, refere ak modifye script ki anba a, epi sèlman kopi chanjman inkreman nan `S3` chak fwa ou pibliye.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Sonje konfigirasyon `CDN` pou tan kachèt chemen an ki fini nan `/.v` se `1s` , sinon ou p ap kapab jwenn aksè nan kontni ki fèk pibliye a imedyatman.

### Pibliye Sit Entènèt

Sit entènèt la ka deplwaye nenpòt kote [github page](https://pages.github.com) ak [cloudflare page](https://pages.cloudflare.com) se bon chwa.

Paske sit entènèt la adopte achitekti [yon aplikasyon yon sèl paj](https://developer.mozilla.org/docs/Glossary/SPA) , sonje reekri chemen URL ki pa genyen `. ` `index.html` .

Paj antre sit entènèt la sèlman bezwen deplwaye yon fwa, epi pa gen okenn nesesite pou re-deplwaye paj antre sit entènèt la pou mizajou kontni ki vin apre yo.

#### Deplwaye Sou Paj github

Premye [klike isit github pou kreye yon òganizasyon](https://github.com/account/organizations/new?plan=free) sa a `i18n-demo` kòm yon egzanp.

Lè sa a, kreye yon depo anba òganizasyon sa `i18n-demo.github.io` (Tanpri ranplase `i18n-demo` ak non òganizasyon ou te kreye a):

<img alt="" src="https://p.3ti.site/1721098657.avif">

Lè pibliye kontni an nan atik anvan an, li te `out/ol/htm` Tanpri antre nan anyè sa a epi kouri :

```
ln -s index.html 404.html
```


Paske `github page` pa sipòte reekri URL, kidonk `404.html` yo itilize pito.

Lè sa a, kouri lòd sa a nan `htm` a (sonje ranplase `i18n-demo/i18n-demo.github.io.git` ak pwòp adrès depo ou) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Apre ou fin pouse kòd la, tann pou deplwaman `github page`

<img src="//p.3ti.site/1721116586.avif" width="350px">

Pou paj Demo tanpri gade:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Deplwaye Sou Paj cloudflare

[cloudflare page](//pages.cloudflare.com) Konpare ak `github page` , li bay re-ekri chemen ak pi zanmitay nan tè pwensipal Lachin epi li pi aksesib.

`cloudflare page` Deplwaman an anjeneral baze sou deplwaman `github page` pi wo a.

Kreye yon pwojè ak mare depo ki anwo a `i18n-demo.github.io`

Pwosesis la montre nan figi ki anba a:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

Tanpri `Add Account` sou `i18n-demo` an.

Si ou te mare depo yon lòt òganizasyon, ou ka bezwen `Add Account` de fwa pou otorize li de fwa anvan nouvo òganizasyon an ap parèt.

<img alt="" src="https://p.3ti.site/1721118306.avif">

Apre sa `i18n-demo.github.io` chwazi Warehouse, epi klike sou `Begin setup` , epi sèvi ak valè default yo pou etap ki vin apre yo.

<img alt="" src="https://p.3ti.site/1721118490.avif">

Apre obligatwa pou premye fwa, ou bezwen tann kèk minit anvan ou ka jwenn aksè nan li.

Apre deplwaman, ou ka mare yon non domèn koutim.

<img alt="" src="https://p.3ti.site/1721119459.avif">

Apre ou fin mare non domèn koutim lan, tanpri ale nan non domèn pou configured reekri chemen aplikasyon an yon sèl paj, jan yo montre anba a:

<img alt="" src="https://p.3ti.site/1721119320.avif">

Règ yo nan foto ki anwo a se jan sa a Tanpri `i18n.site` nan premye liy ki anba a ak non an domèn ki mare ou.

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

Anplis de sa, tanpri konfigirasyon règ yo kachèt, jan yo montre anba a, epi mete dire a kachèt nan yon mwa.

<img alt="" src="https://p.3ti.site/1721125111.avif">

Tanpri chanje non domèn matche nan dezyèm etap la nan foto ki anwo a ak non domèn ou mare.

#### Optimize Deplwaman Sit Entènèt Nan Tè Pwensipal Lachin

Si ou vle jwenn pi bon pèfòmans aksè nan anviwònman rezo Lachin tè pwensipal la, tanpri [anrejistre yon non domèn](//beian.aliyun.com) an premye.

Lè sa a, sèvi ak depo objè nan vandè nwaj yo nan `CDN` tè `out/ol/htm` +

Ou ka itilize edge computing pou reekri chemen an pou adapte yo ak aplikasyon pou yon sèl paj, tankou [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html)

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

`MX` dosye ak `CNAME` dosye pa ka viv ansanm, si ou vle resevwa imèl non domèn an menm tan, ou bezwen kolabore ak script [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) pou plati `CNAME` nan `A` .

Anplis de sa, paske chaj yo trafik lòt bò dlo nan vandè nwaj yo nan tè pwensipal Lachin yo relativman chè, si ou vle optimize depans, ou ka itilize [rezolisyon gratis Huawei DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) ak non domèn koutim [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (jan yo montre anba a) reyalize detounman trafik──Trafik nan tè pwensipal Lachin Baidu Cloud `CDN` trafik entènasyonal ale cloudflare .

<img alt="" src="https://p.3ti.site/1721119788.avif">

Solisyon optimize deplwaman sa yo pi konplèks epi yo pral prezante nan chapit separe nan lavni.

#### Redireksyon Non Domèn Jenerik

Si ou itilize `i18n.site` pou jenere yon sit entènèt kòm sit entènèt prensipal ou, anjeneral ou bezwen konfigirasyon redireksyon pan-domèn, se sa ki redireksyon `*.xxx.com` (ki gen ladan `www.xxx.com` ) aksè a `xxx.com` .

Kondisyon sa a ka reyalize avèk èd Alibaba Cloud `CDN` `EdgeScript` ( [dokiman angle](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Dokiman Chinwa](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Ajoute yon non domèn nan [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) epi lonje non `*.xxx.com` nan sou `CNAME` Alibaba Cloud `CDN` .

<img alt="" src="https://p.3ti.site/1721122000.avif">

Pou egzanp, konfigirasyon redireksyon non pan-domèn `*.i18n.site` nan foto ki anwo a se jan sa a:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### Deplwaye Ak nginx

Tanpri ajoute yon konfigirasyon ki sanble ak sa ki annapre yo nan `server` nginx kote `/root/i18n/md/out/ol/htm` tanpri chanje li nan chemen pwòp pwojè ou a `out/ol/htm` :

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Estrikti Anyè

#### Piblik

Fichye estatik nan sit entènèt la, tankou `favicon.ico` `robots.txt` , elatriye.

Fichye icon yo isit la ka pwodwi ak [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n

Anba `.i18n` a genyen fichye konfigirasyon `i18n.site` yo, kachèt tradiksyon, elatriye. Gade pwochen chapit ["Konfigirasyon"](/i18n.site/conf) pou plis detay.

#### en

Anyè lang sous, ki koresponn `.i18n/conf.yml` `fromTo` `en` nan fichye konfigirasyon an

```yaml
i18n:
  fromTo:
    en: zh
```

Tanpri gade nan konfigirasyon tradiksyon an [i18](/i18/use)

