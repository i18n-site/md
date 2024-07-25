# Install &

## Configuration Token

`i18n.site` `i18` [`i18`](/i18/use)

## Hametraka

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Tetikasa Demo

Andao hanomboka amin'ny tetikasa demo ary hianatra ny fomba fampiasana `i18n.site`

Manao clone aloha ny tahiry demo izahay ary manatanteraka ny baiko toy izao manaraka izao:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Ireo mpampiasa any amin'ny tanibe Shina dia afaka:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

Ny anaran'ny lahatahiry an'ny clone base code dia tsy maintsy `md` mba hanamora ny fijerena eo an-toerana miaraka amin'ny `docker` `demo.i18n.site`

### Translate

Voalohany, ampidiro ny lahatahiry `md` ary mandehana `i18n.site` , izay handika `en` ho `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Aorian'ny fandehanana dia hisy rakitra fandikan-teny sy cache azo alaina azafady mba ampidirina ao amin'ny tahiry `git add . ` ao amin'ny lahatahiry `md`

### Fijery Eo an-Toerana

`MAC` `docker` [orbstack](https://orbstack.dev) `docker`

Avy eo, midira `docker` lahatahiry ary mandehana `./up.sh` , ary tsidiho ny [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Mandefa Votoaty

`i18n.site` Manangana rafitra [fampiharana pejy tokana](https://developer.mozilla.org/docs/Glossary/SPA) , ary apetraka tsy miankina ny pejin'ny fidirana amin'ny tranokala sy ny votoatin'ny tranonkala.

Aorian'ny fampandehanana ny dikanteny etsy ambony, ny lahatahiry `htm` sy `v` dia ho hita ao amin'ny lahatahiry `md/out/dev`

Eto, `dev` dia manondro fa miorina amin'ny rakitra `.i18n/htm/dev.yml` .

`dev` :

`htm` ambanin'ny lahatahiry ny pejy fidirana amin'ny tranokala.

`v`

Ny preview eo an-toerana dia handika ny rakitra rehetra amin'ny lahatahiry `out/dev/v/0.1.0`

Ho an'ny famoahana ofisialy, ny rakitra niova dia hadika amin'ny lahatahiry nomerao vaovao.

#### Ampiasao Ny -c Mba Hamaritana Ny Rakitra Fikirakirana

Hamorona lahatahiry mifanandrify eo ambanin'ny lahatahiry `out`

Ohatra, hamorona lahatahiry `out/ol` `.i18n/htm/ol.yml`

`dev.yml` ary `ol.yml` no config.

`dev` dia fanafohezana ny `development` , izay maneho ny tontolon'ny fampandrosoana, dia ampiasaina amin'ny fijerena eo an-toerana, ary izy io ihany koa ny rakitra fikirakirana.
`ol` dia fanafohezana ny `online` , izay maneho ny tontolo an-tserasera, dia ampiasaina amin'ny famoahana ofisialy, ary koa ny rakitra fanamafisam-peo mahazatra rehefa mamoaka amin'ny `npm` mampiasa ny baiko baiko `-n` .

Azonao atao koa ny mamorona fisie fanamafisana hafa `--htm_conf` ny baiko mba hamaritana ny anaran'ny fisie:

ohatra:
```
i18n.site --htm_conf yourConfig --save
```

Eto `--save` dia manondro ny laharana famoahana fanavaozana.

#### <a rel=id href="#npm" id="npm"></a> Mamoaka votoaty amin'ny npmjs.com

[Ny](/i18n.site/feature#ha) famoahana votoaty ho an'ny [npmjs.com](//npmjs.com)

##### npm login &

Ampidiro `nodejs` ampiasao `npm login` hidirana.

Amboary `md/.i18n/htm/ol.yml` ovay `i18n.site` amin'ny `v: //unpkg.com/i18n.site` ho anao manokana `npm` anaran'ny fonosana.

Ampiasao fotsiny ny anaran'ny fonosana tsy misy olona ao amin'ny [npmjs.com](//npmjs.com)

Rehefa mamoaka mifototra amin'ny fonosana `npm` , **ataovy azo antoka fa ampiasaina `//unpkg.com/`** ho prefix amin'ny sanda `v:` Ny fotoana cache `i18n.site` eo ambanin'ity lalana tovana ity `/.v` dia nohatsaraina manokana mba ahafahana mijery ara-potoana ny famoahana vaovao.

Alefaso `i18n.site --npm` na `i18n.site -n` ao amin'ny lahatahiry `md`

Raha mampiasa `~/.npmrc` fampidirana mitohy ianao mba hamoahana azy, dia tsy ilaina ny mametraka izany `nodejs`

Raha **`.i18n/v/ol`** ny anaran'ny fonosana ao amin'ny `v:` in `ol.yml`

##### Mpizara Proxy Navoakan'ny npm

Raha sendra olana amin'ny tambajotra ny mpampiasa ao amin'ny tanibe Shina ka tsy afaka mamoaka ny `https_proxy` `npm`

Raha heverinao fa ny seranana mpizara proxy anao dia `7890` azonao atao ny manoratra:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Votoaty Nampiantranoan-Tena

Raha te hampiantrano ny atiny ianao `md/.i18n/htm/ol.yml` ovay aloha `v: //unpkg.com/i18n.site` amin'ny tovan'ny URL-nao, toy ny `v: //i18n-v.xxx.com` .

Ampidiro ny lahatahiry `md`

```
i18n.site --htm_conf ol --save
```

na fanafohezana

```
i18n.site -c ol -s
```

Avy eo, amboary ny atiny ao amin'ny `v:` `md/out/ol/v`

Farany, **amboary ny fotoana cache amin'ny lalana mifarana `/.v` `1s`** , raha tsy izany dia tsy azo idirana avy hatrany ny atiny vao navoaka.

Ny fotoana cache ho an'ny lalana hafa dia azo apetraka ho herintaona na mihoatra mba hampihenana ny fangatahana tsy ilaina.

##### Mampiantrano Votoaty Amin'ny s3

Ho an'ny votoaty mpampiantrano tena, ankoatry ny fampiasana `CDN` mpizara anao manokana, + safidy hafa dia ny fampiasana `S3`

`S3` atao ny mampiasa [rclone](https://rclone.org) Login `S3`

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Tsarovy ny manitsy `CDN` ka ny fotoana cache amin'ny lalana mifarana amin'ny `/.v` dia `1s` , raha tsy izany dia tsy ho afaka miditra amin'ny votoaty vao navoaka avy hatrany ianao.

### Mamoaka Tranonkala

Ny tranokala dia azo apetraka na aiza na aiza [github page](https://pages.github.com) ary [cloudflare page](https://pages.cloudflare.com) dia safidy tsara.

Satria ny tranokala dia mampiasa ny rafitry [ny fampiharana pejy tokana](https://developer.mozilla.org/docs/Glossary/SPA) , `index.html` ny mamerina manoratra ny lalana URL tsy misy `. `

Indray mandeha ihany no mila apetraka ny pejin'ny fidirana amin'ny vohikala, ary tsy ilaina ny mamerina ny pejin'ny fidirana amin'ny tranonkala ho an'ny fanavaozana votoaty manaraka.

#### Alefaso Amin'ny Pejy github

[Kitiho aloha github](https://github.com/account/organizations/new?plan=free) `i18n-demo`

Avy eo, mamorona trano `i18n-demo` entana eo ambanin'ity fikambanana ity `i18n-demo.github.io`

<img alt="" src="https://p.3ti.site/1721098657.avif">

Rehefa mamoaka ny votoaty ao amin'ny lahatsoratra teo aloha dia efa : azafady `out/ol/htm`

```
ln -s index.html 404.html
```


Satria tsy manohana ny fanoratana ny lalan'ny URL ny `github page` , ka `404.html` no ampiasaina.

Avy eo `i18n-demo/i18n-demo.github.io.git` ataovy ao : lahatahiry `htm`

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Rehefa avy nanosika ny kaody dia andraso ny fametrahana ny `github page`

<img src="//p.3ti.site/1721116586.avif" width="350px">

Ho an'ny pejy demo dia jereo azafady:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Alefaso Amin'ny Pejy cloudflare

[cloudflare page](//pages.cloudflare.com) ampitahaina amin'ny `github page` , dia manome fanoratana lalana ary mora kokoa amin'ny tanibe Shina ary azo ampiasaina kokoa.

`cloudflare page` `github page`

Mamorona tetikasa ary fehezo ny trano fanatobiana entana `i18n-demo.github.io`

Ny dingana dia aseho amin'ny sary etsy ambany:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

Tsindrio `i18n-demo` `Add Account`

Raha namatotra ny trano fanatobiana orinasa hafa ianao dia mety mila `Add Account` indroa mba hanome alalana azy indroa alohan'ny hisehoan'ny fikambanana vaovao.

<img alt="" src="https://p.3ti.site/1721118306.avif">

Fidio avy eo `i18n-demo.github.io` Warehouse, ary tsindrio `Begin setup` , ary ampiasao ny sanda mahazatra ho an'ny dingana manaraka.

<img alt="" src="https://p.3ti.site/1721118490.avif">

Aorian'ny famatorana voalohany dia mila miandry minitra vitsivitsy ianao vao afaka miditra azy.

Aorian'ny fametrahana dia azonao atao ny mamatotra anarana sehatra manokana.

<img alt="" src="https://p.3ti.site/1721119459.avif">

Aorian'ny famatorana ny anaran-tsehatra manokana dia mandehana any amin'ny anaran-tsehatra mba hanitsiana ny lalana fanoratana indray ny fampiharana pejy tokana, araka ny aseho eto ambany:

<img alt="" src="https://p.3ti.site/1721119320.avif">

Ny fitsipika eo amin'ny sary etsy ambony dia toy izao manaraka `i18n.site` .

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

Fanampin'izany, amboary azafady ny fitsipiky ny cache, araka ny aseho etsy ambany, ary apetraho ho iray volana ny faharetan'ny cache.

<img alt="" src="https://p.3ti.site/1721125111.avif">

Ovay azafady ny anaran-tsehatra mifanandrify amin'ny dingana faharoa amin'ny sary etsy ambony amin'ny anaran'ny sehatra nofatoranao.

#### Fanamafisana Ny Fametrahana Tranokala Any Amin'ny Tanibe Shina

Raha te-hahazo fampandehanana fidirana tsara kokoa amin'ny tontolon'ny tambajotran'ny tanibe Shina ianao dia [misoratra anarana anarana sehatra](//beian.aliyun.com) aloha.

Avy eo, ampiasao ny fitahirizana `out/ol/htm` ataon'ireo mpivarotra rahona any amin'ny tanibe `CDN` +

Azonao atao ny mampiasa informatika sisiny hanoratana ny lalana hifanaraka amin'ny fampiharana pejy tokana, toy ny [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html)

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

Satria tsy afaka miara-miaina `MX` firaketana an-tsoratra sy ny `CNAME` firaketana, raha te hahazo mailaka amin'ny anaran'ny sehatra ianao dia mila miara-miasa amin'ny [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) mba hametahana `CNAME` ho `A` record.

Ho fanampin'izany, satria somary lafo ny saram-pitaterana any ivelany ataon'ireo mpivarotra rahona any amin'ny tanibe Shina, raha te hanatsara ny vidiny ianao dia azonao atao ny mampiasa [ny vahaolana ara-jeografika maimaim-poana an'ny Huawei DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) sy ny anaran'ny sehatra mahazatra an'ny [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (araka ny aseho eto ambany). fifamoivoizana──Fifamoivoizana any amin'ny tanibe Shina Baidu Cloud `CDN` mandeha cloudflare .

<img alt="" src="https://p.3ti.site/1721119788.avif">

Sarotra kokoa ireo vahaolana fanatsarana fanapariahana ireo ary hapetraka amin'ny toko samihafa amin'ny ho avy.

#### Famerenana Ny Anaran-Tsehatra Ankapobeny

Raha mampiasa `i18n.site` ianao hamorona vohikala ho tranokalanao, dia matetika ianao no mila manitsy ny famerenan'ny domaine pan-domain, izany hoe ny fidirana `*.xxx.com` (anisan'izany `www.xxx.com` ) mankany amin'ny `xxx.com` .

Ity fepetra ity dia azo tanterahina miaraka amin'ny fanampian'ny Alibaba `CDN` 's `EdgeScript` ( [antontan](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) [-taratasy anglisy](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) /

Manampia anarana sehatra ao amin'ny [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) ary atoro `*.xxx.com` anaran'ny sehatra amin'ny Alibaba Cloud `CDN` 's `CNAME` .

<img alt="" src="https://p.3ti.site/1721122000.avif">

Ohatra, toy izao manaraka izao ny tefim-pamerenana ny anaran'ny domaine an'ny `*.i18n.site`

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### Ampidiro Amin'ny nginx

Azafady `/root/i18n/md/out/ol/htm` ampio rindrankajy mitovy amin'ity manaraka ity ao `server` `out/ol/htm` nginx

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Rafitra Lahatahiry

#### -Bahoaka

Ny rakitra static amin'ny tranokala, toy ny `favicon.ico` `robots.txt` , sns.

Ny rakitra icon eto dia azo amboarina amin'ny [realfavicongenerator.net](https://realfavicongenerator.net) .

#### .i18n

`.i18n` ambanin'ny lahatahiry dia misy `i18n.site` 's configuration files, translation cache, etc. Jereo ny toko manaraka ["Configuration"](/i18n.site/conf) raha mila fanazavana fanampiny.

#### Mg

Lahatahiry fiteny loharano, mifanandrify `.i18n/conf.yml` `fromTo` `en` ao amin'ny rakitra fikirakirana

```yaml
i18n:
  fromTo:
    en: zh
```

Azafady, jereo ny fanitsiana ny fandikan-teny [i18](/i18/use)

