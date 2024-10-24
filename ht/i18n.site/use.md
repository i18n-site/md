# Enstale &

## Enstale

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Siy Konfigirasyon

`i18n.site` gen yon zouti tradiksyon `i18` Tanpri [klike la a pou w al gade nan dokiman `i18` pou konfigirasyon siy aksè a](/i18/use) .

## Pwojè Demo

Ann kòmanse ak yon pwojè Demo pou aprann kijan pou itilize `i18n.site` .

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

Non anyè script baz kòd `demo.i18n.site` a dwe `md` pou fasilite aperçu lokal ak `docker` .

### Tradwi

Premyèman, antre anyè `md` a epi kouri `i18n.site` , ki pral tradui `en` a `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Apre kouri, yo pral pwodwi tradiksyon ak dosye kachèt Tanpri sonje ajoute yo nan depo a nan `git add . ` `md` .

### Preview Lokal Yo

Enstale epi kòmanse `docker` ( `MAC` itilizatè rekòmande pou itilize [orbstack](https://orbstack.dev) kòm ègzekutabl pou `docker` ).

Lè sa a, antre nan anyè `docker` epi kouri `./up.sh` , epi [https://127.0.0.1](https://127.0.0.1) nan aperçu lokalman.

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Afiche Kontni

`i18n.site` adopte yon achitekti [aplikasyon yon sèl paj](https://developer.mozilla.org/docs/Glossary/SPA) , ak paj antre sit entènèt la ak kontni sit entènèt yo deplwaye poukont yo.

Apre yo fin kouri tradiksyon ki anwo a, anyè `htm` ak `v` yo pral pwodwi anba anyè `md/out/dev` a.

Isit la, `dev` vle di li se bati ki baze sou `.i18n/htm/dev.yml` fichye a konfigirasyon.

`dev` anyè :

Anyè `htm` a se paj antre sit entènèt la.

Anyè `v` a gen kontni sit entènèt ak nimewo vèsyon.

Aperçu lokal pa okipe nimewo vèsyon an epi li pral kopye tout fichye yo nan anyè `out/dev/v/0.1.0` a.

Pou lage ofisyèl, yo pral kopye dosye ki chanje yo nan nouvo anyè nimewo vèsyon an.

#### Espesifye Fichye Konfigirasyon Ak `-c`

Fichye konfigirasyon diferan pral kreye repèrtwar korespondan nan anyè `out` a.

Pa egzanp, `.i18n/htm/ol.yml` pral kreye `out/ol` anyè.

`dev.yml` ak `ol.yml` se konfigirasyon default yo.

`dev` se abrevyasyon nan `development` , ki endike anviwònman devlopman, yo itilize pou preview lokal yo, epi li se tou dosye konfigirasyon default la.
`ol` se abrevyasyon la nan `online` , ki endike anviwònman an sou entènèt, ki se itilize pou lage ofisyèl Li se tou dosye a konfigirasyon default lè w ap itilize paramèt liy lòd `-n` a `npm` yo lage.

Ou kapab tou kreye lòt fichye konfigirasyon. Sèvi ak `--htm_conf` sou liy lòd la pou presize non fichye konfigirasyon pou itilize:

pou egzanp:
```
i18n.site --htm_conf yourConfig --save
```

Isit la `--save` reprezante nimewo vèsyon an aktyalizasyon.

#### <a rel=id href="#npm" id="npm"></a> Pibliye kontni sou npmjs.com

Pibliye kontni nan [npmjs.com](//npmjs.com) se solisyon an default rekòmande (gade [Front-end High Availability](/i18n.site/feature#ha) ).

##### npm login & Lage

Enstale `nodejs` , konekte ak `npm login` .

Edit `md/.i18n/htm/ol.yml` epi chanje valè [`md:`](//github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/ol.yml#L7) `YOUR_NPM_PACKAGE` kòm pwòp non pakè `npm` pa w [npmjs.com](//npmjs.com) ap fè.

Lè sa a, modifye `md/.i18n/htm/ol.package.json`

Kouri `i18n.site --npm` oswa `i18n.site -n` nan anyè `md` a pou tradui ak pibliye.

Si ou itilize yon anviwònman entegrasyon kontinyèl pou pibliye, pa gen okenn nesesite pou enstale `nodejs` , jis kopye pèmisyon ki konekte ak pibliye `~/.npmrc` nan anviwònman an.

Si ou modifye non pake a nan `v:` nan `ol.yml` , tanpri **asire w ke ou efase `.i18n/v/ol` premye** epi pibliye li.

##### Sèvè Prokurasyon Pibliye Pa npm

Si itilizatè yo nan Lachin tè pwensipal rankontre pwoblèm rezo epi yo pa kapab pibliye pakè `npm` , yo ka mete varyab anviwònman an `https_proxy` pou konfigirasyon sèvè prokurasyon an.

Si nou sipoze pò sèvè proxy ou a se `7890` , ou ka ekri:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Kontni Pwòp Tèt Ou Akomode

Si ou vle pwòp tèt ou òganize kontni an, premye modifye `md/.i18n/htm/ol.yml` epi chanje `v: //unpkg.com/i18n.site` nan prefiks URL ou a, tankou `v: //i18n-v.xxx.com` .

Antre anyè `md` a epi kouri

```
i18n.site --htm_conf ol --save
```

oswa abrevyasyon

```
i18n.site -c ol -s
```

Lè sa a, konfigirasyon kontni an nan anyè a `md/out/ol/v` nan chemen an prefiks URL mete nan `v:` .

Finalman, **konfigirasyon tan an kachèt nan chemen an ki fini nan `/.v` a `1s`** , otreman kontni an ki fèk pibliye pa ka jwenn aksè imedyatman.

Tan kachèt pou lòt chemen yo ka mete sou yon ane oswa plis pou diminye demann ki pa nesesè yo.

##### Mete Kontni Nan s3

Pou pwòp tèt ou òganize kontni, anplis de sèvi `CDN` pwòp sèvè ou, yon lòt opsyon komen se sèvi ak `S3` + .

Ou ka itilize [rclone](https://rclone.org) pou konekte sou sèvè `S3` a, epi fè referans ak modifye script sa a, epi sèlman kopye chanjman incrémentielles yo nan `S3` pou chak lage.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Sonje konfigirasyon `CDN` pou tan kachèt chemen an ki fini nan `/.v` se `1s` , otreman kontni ki fèk pibliye pa ka jwenn aksè imedyatman.

### Pibliye Sit Entènèt

Sit entènèt la ka deplwaye nenpòt kote, [github page](https://pages.github.com) [cloudflare page](https://pages.cloudflare.com) se bon chwa.

Paske sit entènèt la itilize yon achitekti [aplikasyon pou yon sèl paj](https://developer.mozilla.org/docs/Glossary/SPA) , sonje reekri chemen URL ki pa genyen `. ` a `index.html` .

Paj antre sit entènèt la sèlman bezwen deplwaye yon fwa, epi pa gen okenn nesesite pou re-deplwaye paj antre sit entènèt la pou mizajou kontni ki vin apre yo.

#### Deplwaye Sou Paj github

Premye [klike isit github pou kreye yon òganizasyon](https://github.com/account/organizations/new?plan=free) non sa a se `i18n-demo` kòm yon egzanp.

Apre sa, kreye depo `i18n-demo.github.io` anba òganizasyon sa a (tanpri ranplase `i18n-demo` ak non òganizasyon ou te kreye a):

![](https://p.3ti.site/1721098657.avif)

Lè pibliye kontni an nan atik anvan an, `out/ol/htm` te pwodwi Tanpri antre nan anyè sa a epi kouri :

```
ln -s index.html 404.html
```


Paske `github page` pa sipòte reekri chemen URL, `404.html` yo itilize pito.

Lè sa a, kouri lòd sa a nan anyè `htm` a (sonje ranplase `i18n-demo/i18n-demo.github.io.git` ak adrès depo pwòp ou a) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Apre ou fin pouse kòd la, tann pou deplwaman `github page` a kouri avèk siksè (jan yo montre anba a) anvan ou ka jwenn aksè nan li.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Pou paj Demo tanpri gade:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Deplwaye Sou Paj cloudflare

[cloudflare page](//pages.cloudflare.com) ak `github page` , li bay reekri chemen epi li pi zanmitay ak Lachin tè pwensipal li pi aksesib.

Deplwaman `cloudflare page` anjeneral baze sou deplwaman `github page` pi wo a.

Kreye yon pwojè epi mare `i18n-demo.github.io` depo ki anwo a.

Pwosesis la montre nan figi ki anba a:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Tanpri klike sou `Add Account` pou bay aksè a òganizasyon `i18n-demo` .

Si ou te mare depo yon lòt òganizasyon, ou ka bezwen klike sou `Add Account` de fwa pou otorize de fwa anvan nouvo òganizasyon an ap parèt.

![](https://p.3ti.site/1721118306.avif)

Apre sa, chwazi depo `i18n-demo.github.io` , Lè sa a, klike sou `Begin setup` , epi sèvi ak valè yo default pou etap ki vin apre yo.

![](https://p.3ti.site/1721118490.avif)

Apre obligatwa pou premye fwa, ou bezwen tann kèk minit anvan ou ka jwenn aksè nan li.

Apre deplwaman, ou ka mare yon non domèn koutim.

![](https://p.3ti.site/1721119459.avif)

Apre ou fin mare non domèn koutim lan, tanpri ale nan non domèn pou configured reekri chemen aplikasyon an yon sèl paj, jan yo montre anba a:

![](https://p.3ti.site/1721119320.avif)

Règ ki nan foto ki anwo a se jan sa a Tanpri ranplase `i18n.site` nan premye liy ki anba a ak non domèn ou mare.

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

Anplis de sa, tanpri konfigirasyon règ yo kachèt, jan yo montre anba a, epi mete dire a kachèt nan yon mwa.

![](https://p.3ti.site/1721125111.avif)

Tanpri chanje non domèn matche nan dezyèm etap la nan foto ki anwo a ak non domèn ou mare.

#### Optimize Deplwaman Sit Entènèt Nan Tè Pwensipal Lachin

Si ou vle jwenn pi bon pèfòmans aksè nan anviwònman rezo Lachin tè pwensipal la, tanpri [anrejistre yon non domèn](//beian.aliyun.com) an premye.

Lè sa a, sèvi ak depo objè nan vandè nwaj nan tè pwensipal + `CDN` Deplwaye kontni sa a `out/ol/htm` .

Ou ka itilize edge computing pou reekri chemen an pou adapte yo ak aplikasyon pou yon sèl paj. Pou egzanp, [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) ka konfigirasyon konsa:

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

Paske dosye `MX` ak dosye `CNAME` pa ka viv ansanm, si ou vle resevwa imèl non domèn an menm tan, ou bezwen kolabore ak [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) la nan nivo `CNAME` nan dosye `A` .

Anplis de sa, paske chaj yo trafik lòt bò dlo nan vandè nwaj yo nan tè pwensipal Lachin yo relativman chè, si ou vle optimize depans, ou ka itilize [DNS gratis Huawei Cloud](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) ak non domèn koutim [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (jan yo montre anba a) reyalize Detounman trafik──Trafik nan tè pwensipal Lachin Baidu Cloud `CDN` , trafik entènasyonal ale cloudflare .

![](https://p.3ti.site/1721119788.avif)

Solisyon optimize deplwaman sa yo pi konplèks epi yo pral prezante nan chapit separe nan lavni.

#### Redireksyon Non Domèn Jenerik

Si ou itilize `i18n.site` pou jenere yon sit entènèt kòm sit entènèt prensipal ou, anjeneral ou bezwen konfigirasyon redireksyon pan-domèn, se sa ki, redireksyon aksè a `*.xxx.com` (ki gen ladan `www.xxx.com` ) a `xxx.com` .

Egzijans sa a ka reyalize avèk èd Alibaba Cloud `CDN` `EdgeScript` ( [dokiman angle](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Dokiman Chinwa](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Ajoute non domèn nan [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) epi montre non domèn `*.xxx.com` `CNAME` nan Alibaba Cloud `CDN` .

![](https://p.3ti.site/1721122000.avif)

Pou egzanp, konfigirasyon redireksyon non pan-domèn nan `*.i18n.site` nan foto ki anwo a se jan sa a:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

#### Deplwaye Ak nginx

Tanpri ajoute yon konfigirasyon ki sanble ak sa ki annapre yo nan paragraf `server` nan nginx Tanpri chanje `/root/i18n/md/out/ol/htm` nan chemen pwòp pwojè ou a `out/ol/htm` :

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

#### `public`

Fichye estatik nan sit entènèt la, tankou `favicon.ico` , `robots.txt` , elatriye.

Fichye icon yo isit la ka pwodwi ak [realfavicongenerator.net](https://realfavicongenerator.net)

#### `.i18n`

Anba anyè `.i18n` yo se fichye konfigirasyon yo, kachèt tradiksyon, elatriye nan `i18n.site` Gade pwochen chapit ["Konfigirasyon"](/i18n.site/conf) pou plis detay.

#### `en`

Anyè lang sous, ki koresponn ak `en` nan `fromTo` nan `.i18n/conf.yml` fichye konfigirasyon

```yaml
i18n:
  fromTo:
    en: zh
```

Tanpri gade nan konfigirasyon tradiksyon an [i18](/i18/use)