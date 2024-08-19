# Install &

## Configuration Token

`i18n.site` dia manana fitaovana fandikan-teny `i18` naorina, azafady [kitiho eto raha hijery ny antontan-taratasy `i18` hanamboarana ny token'ny fidirana](/i18/use) .

## Hametraka

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Tetikasa Demo

Andeha isika hanomboka amin'ny tetikasa demo hianarana ny fampiasana `i18n.site` .

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

Ny anaran'ny lahatahiry amin'ny clone base code `demo.i18n.site` dia tsy maintsy `md` mba hanamora ny fijerena eo an-toerana miaraka amin'ny `docker` .

### Translate

Voalohany, ampidiro ny lahatahiry `md` ary mihazakazaka `i18n.site` , izay handika `en` hatramin'ny `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Aorian'ny fandehanana dia hipoitra ny rakitra dikanteny sy cache azafady mba `git add . ` ao amin'ny lahatahiry ao amin'ny lahatahiry `md` .

### Fijery Eo an-Toerana

Ampidiro ary atombohy `docker` ( mpampiasa `MAC` no manoro hevitra ny hampiasa [orbstack](https://orbstack.dev) ho fotoana fampandehanana ho an'ny `docker` ).

Avy eo, midira ny lahatahiry `docker` ary mandehana `./up.sh` , ary avy eo tsidiho ny [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Mandefa Votoaty

`i18n.site` dia mampiasa maritrano [fampiharana pejy tokana](https://developer.mozilla.org/docs/Glossary/SPA) , ary ny pejy fidirana amin'ny tranokala sy ny votoatin'ny tranokala dia apetraka tsy miankina.

Aorian'ny fampandehanana ny dikanteny etsy ambony, ny lahatahiry `htm` sy `v` dia hatsangana eo ambanin'ny lahatahiry `md/out/dev` .

Eto, `dev` dia midika fa miorina amin'ny fisie `.i18n/htm/dev.yml` izy io.

`dev` directory :

Ny lahatahiry `htm` dia ny pejy fidirana amin'ny tranokala.

Ny lahatahiry `v` dia misy votoaty amin'ny tranokala miaraka amin'ny laharan'ny dikan-teny.

Ny fijerena eo an-toerana dia tsy miraharaha ny laharan'ny dikan-teny ary handika ny rakitra rehetra amin'ny lahatahiry `out/dev/v/0.1.0` .

Ho an'ny famoahana ofisialy, ny rakitra niova dia hadika amin'ny lahatahiry nomerao vaovao.

#### Ampiasao Ny -c Mba Hamaritana Ny Rakitra Fikirakirana

Hamorona lahatahiry mifanaraka amin'izany ao amin'ny lahatahiry `out` ny fisie fanamafisana samihafa.

Ohatra, `.i18n/htm/ol.yml` no hamorona ny lahatahiry `out/ol` .

`dev.yml` sy `ol.yml` no configurations default.

`dev` dia fanafohezana ny `development` , manondro ny tontolo iainana fampandrosoana, ampiasaina amin'ny fijerena eo an-toerana, ary koa ny rakitra fikirakirana default.
`ol` dia fanafohezana `-n` `online` , manondro ny tontolo iainana an-tserasera, izay ampiasaina amin'ny famoahana `npm` .

Azonao atao koa ny mamorona fisie fanamafisana hafa Ampiasao `--htm_conf` amin'ny baiko mba hamaritana ny anaran'ny rakitra ampiasaina:

ohatra:
```
i18n.site --htm_conf yourConfig --save
```

Eto `--save` dia maneho ny laharan'ny famoahana fanavaozana.

#### <a rel=id href="#npm" id="npm"></a> Mamoaka votoaty amin'ny npmjs.com

[Ny](/i18n.site/feature#ha) famoahana votoaty ho an'ny [npmjs.com](//npmjs.com)

##### npm login &

Mametraka `nodejs` , midira miaraka amin'ny `npm login` .

Amboary `md/.i18n/htm/ol.yml` ary ovay `i18n.site` amin'ny `v: //unpkg.com/i18n.site` amin'ny anaranao fonosana `npm` .

Ampiasao fotsiny ny anaran'ny fonosana tsy misy olona ao amin'ny [npmjs.com](//npmjs.com)

Rehefa mamoaka mifototra amin'ny fonosana `npm` , **aza hadino ny mampiasa `//unpkg.com/` ho an'ny** tovana amin'ny sanda `v:` `i18n.site` dia nanatsara manokana ny fotoana cache an'ny `/.v` eo ambanin'ity lalana tovana ity mba hahazoana fijerena ara-potoana ny famoahana vaovao.

Manaova `i18n.site --npm` na `i18n.site -n` ao amin'ny lahatahiry `md` handikana sy hamoahana.

Raha mampiasa tontolo fampidirana mitohy ianao mba hamoahana dia tsy ilaina ny mametraka `nodejs` Adikao fotsiny ny fahazoan-dàlana miditra sy mamoaka `~/.npmrc` amin'ny tontolo iainana.

Raha ovainao ny anaran'ny fonosana `v:` amin'ny `ol.yml` , **azafady mba hofafanao aloha `.i18n/v/ol`** ary avoaka avy eo.

##### Mpizara Proxy Navoakan'ny npm

Raha sendra olana amin'ny tambajotra ny mpampiasa ao amin'ny tanibe Shina ka tsy afaka mamoaka fonosana `npm` , dia afaka mametraka ny fari-piainan'ny tontolo iainana `https_proxy` izy ireo mba handrindrana ny mpizara proxy.

Raha heverinao fa `7890` ny seranana mpizara proxy anao dia azonao atao ny manoratra:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Votoaty Nampiantranoan-Tena

Raha te hampiantrano ny atiny ianao dia ovay aloha `md/.i18n/htm/ol.yml` ary ovay `v: //unpkg.com/i18n.site` amin'ny tovan'ny URL-nao, toy ny `v: //i18n-v.xxx.com` .

Ampidiro ny lahatahiry `md` ary mihazakazaka

```
i18n.site --htm_conf ol --save
```

na fanafohezana

```
i18n.site -c ol -s
```

Avy eo, amboary ny atiny ao amin'ny lahatahiry `md/out/ol/v` mankany amin'ny lalan'ny prefix URL napetraka ao amin'ny `v:` .

Farany, **amboary ny fotoana cache amin'ny lalana mifarana amin'ny `/.v` hatramin'ny `1s`** , raha tsy izany dia tsy azo idirana avy hatrany ny atiny vao navoaka.

Ny fotoana cache ho an'ny lalana hafa dia azo apetraka ho herintaona na mihoatra mba hampihenana ny fangatahana tsy ilaina.

##### Mampiantrano Votoaty Amin'ny s3

Ho an'ny votoaty mpampiantrano tena, ankoatry ny fampiasana `CDN` mpizara anao manokana, ny safidy mahazatra hafa dia ny fampiasana `S3` +

Azonao atao ny mampiasa [rclone](https://rclone.org) raha hidirana amin'ny mpizara `S3` , dia jereo sy ovay ity script manaraka ity, ary adikao fotsiny ny fanovana fanampiny ho `S3` isaky ny famoahana.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Tsarovy ny manitsy `CDN` ka ny fotoana cache amin'ny lalana mifarana amin'ny `/.v` dia `1s` , raha tsy izany dia tsy azo idirana avy hatrany ny atiny vao navoaka.

### Mamoaka Tranonkala

Ny tranokala dia azo apetraka na aiza na aiza [github page](https://pages.github.com) ary [cloudflare page](https://pages.cloudflare.com) dia safidy tsara.

Satria mampiasa rafitra [fampiharana pejy tokana](https://developer.mozilla.org/docs/Glossary/SPA) ny tranokala, tadidio ny mamerina manoratra ny lalan'ny URL izay tsy misy `. ` hatramin'ny `index.html` .

Indray mandeha ihany no mila apetraka ny pejin'ny fidirana amin'ny tranokala, ary tsy ilaina ny mamerina ny pejy fidirana amin'ny tranokala ho an'ny fanavaozana votoaty manaraka.

#### Alefaso Amin'ny Pejy github

[Kitiho aloha eto github raha te hamorona fikambanana](https://github.com/account/organizations/new?plan=free) `i18n-demo` ho ohatra.

Avy eo mamorona trano fanatobiana entana `i18n-demo.github.io` eo ambanin'ity fikambanana ity (azafady soloy ny anaran'ny fikambanana noforoninao `i18n-demo` ):

![](https://p.3ti.site/1721098657.avif)

Rehefa mamoaka ny votoaty ao amin'ny lahatsoratra teo aloha, dia `out/ol/htm` no natsangana, azafady ampidiro ity lahatahiry ity ary mandehana :

```
ln -s index.html 404.html
```


Satria tsy manohana ny fanoratana ny lalan'ny URL `github page` , dia `404.html` no ampiasaina.

Avy eo dia ataovy ao amin'ny lahatahiry `htm` ity baiko manaraka ity (tadidio ny manolo `i18n-demo/i18n-demo.github.io.git` amin'ny adiresinao manokana) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Aorian'ny fanosehana ny kaody dia andraso ny fametrahana ny `github page` hahomby (araka ny aseho eto ambany) vao afaka miditra azy ianao.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Ho an'ny pejy demo dia jereo azafady:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Apetraho Amin'ny Pejy cloudflare

[cloudflare page](//pages.cloudflare.com) Raha ampitahaina amin'ny `github page` , dia manome fanoratana lalana ary mora kokoa amin'ny tanibe Shina ary azo idirana kokoa.

Ny fametrahana ny `cloudflare page` dia matetika mifototra amin'ny fametrahana ny `github page` etsy ambony.

Mamorona tetikasa ary afehezo ny trano fanatobiana entana `i18n-demo.github.io` etsy ambony.

Ny dingana dia aseho amin'ny sary etsy ambany:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Kitiho azafady `Add Account` mba hanomezana fidirana amin'ny fikambanana `i18n-demo` .

Raha namatotra ny trano fanatobiana orinasa hafa ianao, dia mety mila manindry `Add Account` indroa ianao mba hanome alalana indroa alohan'ny hisehoan'ny fikambanana vaovao.

![](https://p.3ti.site/1721118306.avif)

Manaraka, safidio ny trano fanatobiana entana `i18n-demo.github.io` , avy eo tsindrio `Begin setup` , ary ampiasao ny sanda default ho an'ny dingana manaraka.

![](https://p.3ti.site/1721118490.avif)

Aorian'ny famatorana voalohany dia mila miandry minitra vitsivitsy ianao vao afaka miditra azy.

Aorian'ny fametrahana dia azonao atao ny mamatotra anarana sehatra manokana.

![](https://p.3ti.site/1721119459.avif)

Aorian'ny famatorana ny anaran-tsehatra manokana dia mandehana any amin'ny anaran-tsehatra mba hanitsiana ny lalana fanoratana indray ny fampiharana pejy tokana, araka ny aseho eto ambany:

![](https://p.3ti.site/1721119320.avif)

Ny `i18n.site` eo amin'ny sary etsy ambony dia toy izao manaraka izao.

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

![](https://p.3ti.site/1721125111.avif)

Ovay azafady ny anaran-tsehatra mifanandrify amin'ny dingana faharoa amin'ny sary etsy ambony amin'ny anaran'ny sehatra nofatoranao.

#### Fanamafisana Ny Fametrahana Tranokala Any Amin'ny Tanibe Shina

Raha te-hahazo fampandehanana fidirana tsara kokoa amin'ny tontolon'ny tambajotran'ny tanibe Shina ianao dia [misoratra anarana anarana sehatra](//beian.aliyun.com) aloha.

Avy eo, ampiasao ny fitahirizana zavatra an'ireo mpivarotra rahona any amin'ny tanibe Shina + Ampiharo ity atiny manaraka `out/ol/htm` `CDN`

Azonao atao ny mampiasa informatika sisiny hanoratana ny lalana hifanaraka amin'ny fampiharana pejy tokana, ohatra, [ny Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) dia azo amboarina toy izao:

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

Satria ny firaketana `MX` sy ny firaketana `CNAME` dia tsy afaka miara-miaina, raha te-handray mailaka amin'ny anaran'ny sehatra ianao dia mila miara-miasa amin'ny sora [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) baventy mankany amin'ny ambaratonga `CNAME` ho firaketana `A` .

Ho fanampin'izany, satria somary lafo ny saram-pitaterana any ivelany ataon'ireo mpivarotra rahona any amin'ny tanibe Shina, raha te hanatsara ny vidiny ianao dia azonao atao ny mampiasa [ny vahaolana ara-jeografika maimaim-poana an'ny Huawei DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) sy ny anaran'ny sehatra mahazatra an'ny [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (araka ny aseho eto ambany). fifamoivoizana──Fifamoivoizana any amin'ny tanibe Shina Baidu Cloud `CDN` , mandeha cloudflare .

![](https://p.3ti.site/1721119788.avif)

Sarotra kokoa ireo vahaolana fanapariahana fanapariahana ireo ary hapetraka amin'ny toko samihafa amin'ny ho avy.

#### Famerenana Ny Anaran-Tsehatra Ankapobeny

Raha mampiasa `i18n.site` ianao mba hamoronana tranokala ho tranokalanao lehibe, dia matetika ianao no mila manitsy ny fanodikodinam-pan-domain, izany hoe ny fidirana amin'ny `*.xxx.com` (anisan'izany `www.xxx.com` ) mankany `xxx.com` .

Ity fepetra ity dia azo tanterahina miaraka amin'ny fanampian'ny Alibaba Cloud `CDN` `EdgeScript` ( [antontan-taratasy anglisy](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [antontan-taratasy sinoa](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Ampio ny anaran-tsehatra ao amin'ny [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) ary tondroy ny anaran-tsehatra `*.xxx.com` hatramin'ny `CNAME` ao amin'ny Alibaba Cloud `CDN` .

![](https://p.3ti.site/1721122000.avif)

Ohatra, toy izao manaraka izao ny fanamafisam-peon'ny `*.i18n.site` amin'ny sary etsy ambony:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

#### Ampidiro Amin'ny nginx

Azafady `/root/i18n/md/out/ol/htm` ampio fika mitovy amin'ity manaraka `out/ol/htm` ao amin'ny andalana `server` amin'ny nginx

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Firafitry Ny Lahatahiry

#### `public`

Ny rakitra static amin'ny tranokala, toy ny `favicon.ico` , `robots.txt` , sns.

Ny rakitra icon eto dia azo amboarina amin'ny [realfavicongenerator.net](https://realfavicongenerator.net) .

#### `.i18n`

Eo ambanin'ny lahatahiry `.i18n` no misy ny rakitra fikirakirana, cache dikanteny, sns. amin'ny `i18n.site` Jereo ny toko manaraka ["Configuration"](/i18n.site/conf) raha mila fanazavana fanampiny.

#### `en`

Lahatahiry fitenin'ny loharano, mifanandrify amin'ny fisie fanitsiana `en` amin'ny `fromTo` amin'ny `.i18n/conf.yml`

```yaml
i18n:
  fromTo:
    en: zh
```

Mba jereo ny fandrindrana ny fandikan-teny [i18](/i18/use)