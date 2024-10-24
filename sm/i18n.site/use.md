# Fa'apipi'i &

## Fa'apipi'i

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Fa'ailoga Fa'atulagaina

`i18n.site` o lo'o iai se meafaigaluega fa'aliliu `i18` fa'amolemole [kiliki iinei e fa'asino i le pepa `i18` e fa'atulaga ai le fa'ailoga avanoa](/i18/use) .

## Poloketi Fa'aali

Sei o tatou amata i se poloketi faʻataʻitaʻiga e aʻoaʻo ai le faʻaogaina `i18n.site` .

Matou te faʻapipiʻi muamua le faleoloa demo ma faʻatonu le poloaiga e pei ona taua i lalo:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

E mafai e tagata fa'aoga ile atunu'u tele o Saina ona:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

O le igoa fa'atonu o le `demo.i18n.site` code base clone e tatau ona `md` e fa'afaigofie ai le va'aiga fa'apitonu'u ma `docker` .

### Fa'aliliu

Muamua, ulufale i le `md` directory ma tamoe `i18n.site` , lea o le a faaliliu `en` i le `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

A uma ona fa'agasolo, fa'aliliuga ma faila faila o le a fa'atupuina Fa'amolemole manatua e fa'aopoopo i le fale teu oloa i le `md` `git add . ` .

### Mua'i Fa'alotoifale

Faʻapipiʻi ma amata `docker` ( `MAC` tagata faʻaoga fautuaina e faʻaaoga [orbstack](https://orbstack.dev) e fai ma taʻaloga mo `docker` ).

Ona, ulufale i le `docker` directory ma tamoe `./up.sh` , ona asiasi lea [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Fa'asalalau Mea

`i18n.site` faʻaaogaina se faʻataʻitaʻiga [tusi e tasi-itulau](https://developer.mozilla.org/docs/Glossary/SPA) , ma o le itulau ulufale o le upega tafaʻilagi ma le upega tafaʻilagi o loʻo faʻapipiʻiina tutoatasi.

A uma ona fa'agasolo le fa'aliliuga o lo'o i luga, o le a fa'atupu fa'atonuga `htm` ma `v` i lalo ole fa'atonuga `md/out/dev` .

O iinei, `dev` o lona uiga o loʻo fausia e faʻavae i luga o le `.i18n/htm/dev.yml` faila faila.

`dev` lisi :

O le `htm` directory o le itulau ulufale i luga o le upega tafaʻilagi.

O le `v` directory o lo'o iai 'upega tafa'ilagi fa'atasi ma numera fa'asologa.

O le fa'aituuga fa'apitonu'u e le popole ile numera fa'asologa ma o le a kopi uma faila ile `out/dev/v/0.1.0` directory.

Mo le tatalaina aloaia, o faila suia o le a kopiina i le lisi fou numera numera.

#### Fa'ailoa Le Faila Fa'atulaga Ile `-c`

O faila fetuutuuna'i eseese o le a fausia ni tusi fa'atatau i le `out` directory.

Mo se faʻataʻitaʻiga, `.i18n/htm/ol.yml` o le a fatuina le `out/ol` directory.

`dev.yml` ma `ol.yml` o fa'atonuga fa'aletonu.

`dev` o le faʻapuupuuga o `development` , e faʻaalia ai le siosiomaga atinaʻe, faʻaaogaina mo le vaʻaiga faʻapitonuʻu, ma o le faila faʻapipiʻi le lelei.
`ol` o le faʻapuupuuga o `online` , e faʻaalia ai le siosiomaga i luga ole laiga, lea e faʻaaogaina mo le faʻatagaina aloaia O le faila faʻapipiʻi le faʻaogaina pe a faʻaogaina laina laina `-n` i `npm` e faʻasaʻo.

E mafai foi ona e fatuina isi faila faila Fa'aaoga `--htm_conf` i luga o le laina faʻatonu e faʻamaonia ai le igoa faila faila e faʻaoga:

faataitaiga:
```
i18n.site --htm_conf yourConfig --save
```

O le `--save` o lo'o fa'atusalia ai le fa'afouga fa'asa'olotoga numera.

#### <a rel=id href="#npm" id="npm"></a> Fa'asalalau mataupu ile npmjs.com

O le fa'asalalauina [o](/i18n.site/feature#ha) anotusi i [npmjs.com](//npmjs.com)

##### npm login &

Fa'apipi'i `nodejs` , ulufale i totonu ma `npm login` .

Fa'asa'o `md/.i18n/htm/ol.yml` ma sui le tau o le [`md:`](//github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/ol.yml#L7) `YOUR_NPM_PACKAGE` e pei o lou lava igoa afifi `npm` [npmjs.com](//npmjs.com) le a faia.

Ona sui lea `md/.i18n/htm/ol.package.json`

Fa'agasolo `i18n.site --npm` po'o `i18n.site -n` ile `md` fa'atonu e fa'aliliu ma fa'asalalau.

Afai e te faʻaogaina se siosiomaga faʻapipiʻi faʻaauau e faʻasalalau, e leai se manaʻoga e faʻapipiʻi `nodejs` , naʻo le kopiina o le faʻatagaina ma faʻasalalau `~/.npmrc` i le siosiomaga.

Afai e te suia le igoa afifi o `v:` i `ol.yml` , faamolemole **ia mautinoa e tape muamua `.i18n/v/ol`** ona lolomiina lea.

##### O Lo'o Fa'asalalauina E Le npm

Afai e feagai tagata fa'aoga ile atunu'u tele o Saina ma fa'afitauli feso'ota'iga ma ua le mafai ona fa'asalalauina `npm` afifi, e mafai ona latou seti le suiga ole si'osi'omaga `https_proxy` e fa'atulaga ai le server sui.

Fa'apea o lau port server sui o le `7890` , e mafai ona e tusia:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Mea E Talimalo Ai Le Tagata Lava Ia

Afai e te manaʻo e faʻafeiloaʻi e oe lava ia mea, faʻasaʻo muamua `md/.i18n/htm/ol.yml` ma suia `v: //unpkg.com/i18n.site` i lau prefix URL, pei ole `v: //i18n-v.xxx.com` .

Ulufale i le `md` directory ma tamoe

```
i18n.site --htm_conf ol --save
```

po o le faapuupuuga

```
i18n.site -c ol -s
```

Ona, fetuutuunai le anotusi i le `md/out/ol/v` directory i le URL prefix ala seti i `v:` .

Mulimuli ane, **fetuutuunai le taimi o le cache o le ala e fa'ai'u i `/.v` i `1s`** , a le o lea e le mafai ona vave maua le mea fou na tu'uina atu.

E mafai ona seti le taimi o le cache mo isi auala i le tasi le tausaga pe sili atu e faʻaitiitia ai talosaga le manaʻomia.

##### Talia Anotusi Ile s3

I mea e faʻafeiloaʻi e le tagata lava ia, faʻaopoopo i `CDN` faʻaaogaina o lau lava 'auʻaunaga, o le isi filifiliga masani o le faʻaaogaina `S3` +

E mafai ona e fa'aoga [rclone](https://rclone.org) e saini i le `S3` server, ona va'ai lea ma sui le fa'amaumauga o lo'o mulimuli mai, ma na'o le kopi o suiga fa'aopoopo i `S3` mo fa'asalalauga ta'itasi.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Manatua e faʻapipiʻi `CDN` ina ia oʻo i le taimi faʻapipiʻi o le ala e faaiʻu i `/.v` o le `1s` , a le o lea e le mafai ona vave maua le mea fou faʻasalalau.

### Lolomi Le Upega Tafa'ilagi

O le upega tafa'ilagi e mafai ona fa'apipi'i i so'o se mea [github page](https://pages.github.com) ma [cloudflare page](https://pages.cloudflare.com) o filifiliga lelei.

Ona o le upega tafaʻilagi o loʻo faʻaaogaina se [itulau e tasi-itulau faʻataʻitaʻiga](https://developer.mozilla.org/docs/Glossary/SPA) , ia manatua e toe tusi ala URL e le o iai `. ` i `index.html` .

O le itulau e ulufale ai i luga o le upega tafaʻilagi e naʻo le tasi e manaʻomia ona faʻapipiʻi, ma e leai se manaʻoga e toe faʻapipiʻi le itulau e ulufale ai i luga o le upega tafaʻilagi mo faʻafouga o mea e sosoo ai.

#### Fa'asoa Ile Itulau github

Muamua [kiliki iinei github e fai ai se fa'alapotopotoga](https://github.com/account/organizations/new?plan=free) `i18n-demo`

Ona fai lea o le faleteuoloa `i18n-demo.github.io` i lalo o lenei faalapotopotoga (faamolemole sui `i18n-demo` i le igoa o le faalapotopotoga na e faia):

![](https://p.3ti.site/1721098657.avif)

Pe a lolomiina le anotusi i le tusiga muamua, `out/ol/htm` ua faʻatupuina Faʻamolemole ulufale i lenei lisi ma tamoe :

```
ln -s index.html 404.html
```


Talu ai e le lagolagoina e `github page` le toe tusia o le ala URL, ua fa'aaogaina `404.html` .

Ona taʻavale lea o le faʻatonuga i le `htm` directory (manatua e sui `i18n-demo/i18n-demo.github.io.git` i lau lava tuatusi faleteuoloa) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

A maeʻa ona tuleia le code, faʻatali mo le faʻapipiʻiina o le `github page` e tamoe manuia (e pei ona faʻaalia i lalo) ae e te leʻi mauaina.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Mo itulau demo fa'amolemole va'ai:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Fa'apipi'i Ile Itulau cloudflare

[cloudflare page](//pages.cloudflare.com) a faatusatusa i `github page` , e maua ai le toe tusiina o le ala ma e sili atu ona faauo i le atunuu tele o Saina ma e sili atu ona faigofie.

O le faʻaogaina o le `cloudflare page` e masani lava ona faʻavae i luga o le faʻaogaina o `github page` i luga.

Fausia se poloketi ma fusifusia le `i18n-demo.github.io` faleteuoloa i luga.

O le faagasologa o loʻo faʻaalia i le ata o loʻo i lalo:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Fa'amolemole kiliki `Add Account` e fa'atagaina ai le avanoa i fa'alapotopotoga `i18n-demo` .

Afai na e fusifusia le faleteuoloa a se isi faʻalapotopotoga, atonu e te manaʻomia le kiliki `Add Account` faalua e faʻatagaina faalua aʻo leʻi faʻaalia le faʻalapotopotoga fou.

![](https://p.3ti.site/1721118306.avif)

Sosoo ai, filifili faleteuoloa `i18n-demo.github.io` , ona kiliki lea `Begin setup` , ma faʻaoga tulaga faʻaletonu mo laasaga mulimuli ane.

![](https://p.3ti.site/1721118490.avif)

A uma ona fusifusia mo le taimi muamua, e tatau ona e faʻatali mo ni nai minute ona e mauaina lea.

A maeʻa le faʻapipiʻiina, e mafai ona e fusifusia se igoa faʻapitoa.

![](https://p.3ti.site/1721119459.avif)

A mae'a ona fa'amauina le igoa fa'ale-aganu'u, fa'amolemole alu i le igoa fa'apitonu'u e fa'atulaga le ala e toe tusia ai le talosaga e tasi-itulau, e pei ona fa'aalia i lalo:

![](https://p.3ti.site/1721119320.avif)

O tulafono i le ata o loʻo i luga e faʻapea Faʻamolemole sui `i18n.site` i le laina muamua o loʻo i lalo ma le igoa ole igoa na e saisaitia.

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

E le gata i lea, faamolemole fetuutuunai tulafono o le cache, e pei ona faaalia i lalo, ma seti le umi o le cache i le masina e tasi.

![](https://p.3ti.site/1721125111.avif)

Fa'amolemole sui le igoa ole igoa e fetaui ile laasaga lona lua ile ata oi luga ile igoa ole igoa na e saisaitia.

#### Fa'amalieina Le Fa'aogaina O Le Upega Tafa'ilagi I Le Atunu'u Tele O Saina

Afai e te manaʻo e maua se faʻatinoga sili atu ona faʻaogaina i le siosiomaga fesoʻotaʻiga a le atunuʻu tele o Saina, faʻamolemole [resitala muamua se igoa ole igoa](//beian.aliyun.com) .

Ona, fa'aoga le mea e teu ai fa'atau oloa i le atunu'u tele o + `CDN` Fa'atino mea nei `out/ol/htm` .

E mafai ona e fa'aogaina le fa'aputuga pito e toe tusi ai le ala e fa'afetaui ai i talosaga e tasi-itulau Mo se fa'ata'ita'iga, [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) e mafai ona fa'atulagaina e pei o lenei:

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

Talu ai e le mafai ona ola fa'atasi le fa'amaumauga `MX` ma le fa'amaumauga `CNAME` , afai e te mana'o e maua ni imeli ile taimi e tasi, e tatau ona e felagolagoma'i ma le [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) i le tulaga `CNAME` ile fa'amaumauga `A` .

E le gata i lea, ona o le tau o fefaʻatauaiga i fafo a tagata faʻatau ao i totonu o Saina e fai si taugata, afai e te manaʻo e faʻalelei tau, e mafai ona e faʻaogaina [le Huawei DNS 's free geographic resolution](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) ma [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) 's custom domain name (e pei ona faʻaalia i lalo) e ausia fe'avea'i fe'avea'i──Ta'avale i le atunu'u tele o Saina Baidu Cloud `CDN` , fa'ava-o-malo e alu cloudflare .

![](https://p.3ti.site/1721119788.avif)

O nei fa'ata'ita'iga fa'ata'ita'iga fofo e sili atu ona lavelave ma o le a fa'alauiloa i isi mataupu i le lumana'i.

#### Fa'asinomaga Igoa Ole Igoa Lautele

Afai e te faʻaogaina `i18n.site` e faʻatupu ai se upega tafaʻilagi e avea ma au upega tafaʻilagi autu, e masani ona e manaʻomia le faʻatulagaina o le pan-domain redirection, o lona uiga, toe faʻafeiloaʻi le avanoa i `*.xxx.com` (e aofia ai `www.xxx.com` ) i le `xxx.com` .

E mafai ona ausia lenei manaʻoga faʻatasi ma le fesoasoani a Alibaba Cloud `CDN` `EdgeScript` ( [Pepa Peretania](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Pepa Saina](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Fa'aopoopo `CNAME` igoa `CDN` `*.xxx.com` ile [Alibaba Cloud CDN](https://cdn.console.aliyun.com/domain/list)

![](https://p.3ti.site/1721122000.avif)

Mo se faʻataʻitaʻiga, o le faʻasologa o le redirection igoa o le pan-domain o le `*.i18n.site` i le ata o loʻo i luga e faʻapea:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

#### Faʻapipiʻi I Le nginx

Fa'amolemole fa'aopoopo se `/root/i18n/md/out/ol/htm` tutusa ma mea nei ile `server` parakalafa ole nginx `out/ol/htm`

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Fa'atonuga

#### `public`

Faila faila o le upega tafaʻilagi, pei ole `favicon.ico` , `robots.txt` , ma isi.

O faila faʻailoga iinei e mafai ona gaosia i le [realfavicongenerator.net](https://realfavicongenerator.net) .

#### `.i18n`

I lalo o le `.i18n` directory o loʻo i ai faila faʻapipiʻi, faʻaliliuga cache, ma isi o le `i18n.site` Vaʻai le isi mataupu ["Configuration"](/i18n.site/conf) mo faʻamatalaga.

#### `en`

Fa'atonuga gagana fa'apogai, e fetaui ma `en` o le `fromTo` i le `.i18n/conf.yml` faila fa'atulagaina

```yaml
i18n:
  fromTo:
    en: zh
```

Fa'amolemole va'ai ile fa'atulagaina o fa'aliliuga [i18](/i18/use)