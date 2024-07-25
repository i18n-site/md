# Fa'apipi'i &

## Fa'ailoga Fa'atulagaina

`i18n.site` Ua fa'apipi'i le meafaigaluega `i18` , fa'amolemole [kiliki iinei e fa'asino i le pepa `i18` e fa'atulaga ai le fa'ailoga avanoa](/i18/use) .

## Fa'apipi'i

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Poloketi Fa'aali

Tatou amata i se poloketi faʻataʻitaʻiga ma aʻoaʻo pe faʻapefea ona faʻaoga `i18n.site`

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

`demo.i18n.site` le igoa fa'atonu o le code base clone e tatau ona `md` e fa'afaigofie ai le va'aiga fa'alotoifale ma `docker` .

### Fa'aliliu

Muamua, ulufale i le `zh` `i18n.site` `en` `md`

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

A uma ona fa'agasolo, fa'aliliuga ma faila faila Fa'amolemole manatua e fa'aopoopo i le faleteuoloa `git add . ` i le lisi `md`

### Mua'i Fa'alotoifale

`MAC` [orbstack](https://orbstack.dev) `docker` `docker`

Ona, ulufale `./up.sh` [https://127.0.0.1](https://127.0.0.1) le `docker`

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Fa'asalalau Mataupu

`i18n.site` Fa'aaogaina se [fa'ata'ita'iga e tasi-itulau](https://developer.mozilla.org/docs/Glossary/SPA) , ma o le itulau e ulufale ai i luga o le upega tafa'ilagi ma mea o lo'o i luga o le upega tafa'ilagi o lo'o fa'apipi'iina tuto'atasi.

A uma ona fa'agasolo le fa'aliliuga o lo'o i luga, `htm` ma `v` directories o le a fa'atupu i le `md/out/dev`

O iinei, `dev` loʻo faʻaalia ai o loʻo fausia i luga o le `.i18n/htm/dev.yml` file.

`dev` :

`htm`

`v` O le fa'atonuga o lo'o iai le 'upega tafa'ilagi fa'atasi ma le numera o fa'amatalaga.

Fa'aituloto fa'apitonu'u o le a kopi uma faila i le `out/dev/v/0.1.0`

Mo le tatalaina aloaia, o faila suia o le a kopiina i le lisi fou numera numera.

#### Faʻaaoga -c E Faʻamaonia Ai Le Faila Faʻatulagaina

O faila fetuutuuna'i eseese o le a fausia ai tusi fa'atatau i lalo o le `out`

Mo se faʻataʻitaʻiga, `.i18n/htm/ol.yml` o le a fatuina se `out/ol` directory.

`dev.yml` ma `ol.yml` o fa'atonuga fa'aletonu.

`dev` o le fa'apuupuuga o le `development` , o lo'o fa'atusalia ai le si'osi'omaga o le atina'e, o lo'o fa'aogaina mo le va'aiga fa'apitonu'u, ma o le faila fa'aopoopo fa'aletonu.
`ol` o le fa'apuupuuga o le `online` , o lo'o fa'atusalia ai le si'osi'omaga i luga ole laiga, e fa'aoga mo le fa'asa'olotoina, ma o le faila fa'apena fo'i pe a fa'asalalau i le `npm` fa'aaogā le laina fa'atonu `-n` .

E mafai foi ona e fatuina isi faila faila Fa'aoga `--htm_conf`

faataitaiga:
```
i18n.site --htm_conf yourConfig --save
```

Lenei `--save`

#### <a rel=id href="#npm" id="npm"></a> Fa'asalalau mataupu ile npmjs.com

O [le](/i18n.site/feature#ha) fa'asalalauina o anotusi i le [npmjs.com](//npmjs.com)

##### npm login &

Faʻapipiʻi `nodejs` faʻaoga `npm login` e saini ai.

Fa'asa'o `md/.i18n/htm/ol.yml` sui `i18n.site` i `v: //unpkg.com/i18n.site` i lau oe `npm` igoa o le afifi.

Na'o le fa'aoga ole igoa ole afifi ile [npmjs.com](//npmjs.com)

Pe a fa'asalalau e fa'atatau i le afifi `npm` , **ia mautinoa e fa'aaoga `//unpkg.com/`** e fai ma prefix o le tau o le `v:` O le taimi fa'amau `i18n.site` i lalo o lenei ala muamua `/.v` ua fa'asili fa'apitoa ina ia mafai ai ona va'ava'ai taimi fou.

Fa'asolo `i18n.site --npm` po'o `i18n.site -n` `md` fa'atonuga e fa'aliliu ma fa'asalalau.

Afai e te fa'aogaina se `~/.npmrc` fa'aauau e fa'asalalau, e leai se mana'oga e fa'apipi'i `nodejs`

Afai e te suia le igoa o le afifi i `v:` i `ol.yml` , faamolemole **ia mautinoa e tape muamua `.i18n/v/ol`** ona lolomi lea.

##### Polokalama Server Lomia E npm

Afai e feagai tagata fa'aoga ile atunu'u tele o Saina `https_proxy` fa'afitauli feso'ota'iga ma ua le mafai ona fa'asalalauina le afifi `npm`

Fa'apea o lau port server sui o le `7890` e mafai ona e tusia:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Mea E Talimalo Ai Le Tagata Lava Ia

Afai e te manaʻo e faʻafeiloaʻi e oe lava ia mea, muamua, faʻasaʻo `md/.i18n/htm/ol.yml` ma sui `v: //unpkg.com/i18n.site` i lau prefix URL, pei ole `v: //i18n-v.xxx.com` .

Ulufale i le `md`

```
i18n.site --htm_conf ol --save
```

po o le faapuupuuga

```
i18n.site -c ol -s
```

Ona, fetuutuunai le anotusi i totonu o le lisi `v:` `md/out/ol/v`

Mulimuli ane, **fetuutuuna'i le taimi o le fa'amauina o le ala e `/.v` i le `1s`** , a le o lea e le mafai ona maua vave mea na fa'asalalau.

E mafai ona seti le taimi o le cache mo isi auala i le tasi le tausaga pe sili atu e faʻaitiitia ai talosaga le manaʻomia.

##### Talia Anotusi Ile s3

I mea e faʻafeiloaʻi e le tagata lava ia, faʻaopoopo i le faʻaaogaina o lau lava server, `CDN` + isi filifiliga masani o le faʻaaogaina `S3`

E mafai ona `S3` fa'aoga [rclone](https://rclone.org) Login `S3`

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Manatua e fetuutuunai `CDN` ina ia o le taimi o le cache o le ala e faaiʻu i le `/.v` o `1s` , a leai o le a le mafai ona e mauaina vave faʻamatalaga fou.

### Lolomi Le Upega Tafa'ilagi

O le upega tafa'ilagi e mafai ona fa'apipi'i i so'o se mea [github page](https://pages.github.com) ma [cloudflare page](https://pages.cloudflare.com) o filifiliga lelei.

Ona o le upega tafaʻilagi e faʻaaogaina le fausaga o [se itulau e tasi](https://developer.mozilla.org/docs/Glossary/SPA) , ia manatua e toe tusi le ala URL e le o `index.html` `. `

O le itulau e ulufale ai i luga o le upega tafaʻilagi e naʻo le tasi e manaʻomia ona faʻapipiʻi, ma e leai se manaʻoga e toe faʻapipiʻi le itulau e ulufale ai i luga o le upega tafaʻilagi mo faʻafouga o mea e sosoo ai.

#### Fa'asoa Ile Itulau github

Muamua [kiliki iinei github e fai ai se fa'alapotopotoga](https://github.com/account/organizations/new?plan=free) O le igoa fa'alāpotopotoga lea o le `i18n-demo`

Ona fai lea o se `i18n-demo` i lalo o lenei faalapotopotoga `i18n-demo.github.io`

<img alt="" src="https://p.3ti.site/1721098657.avif">

Pe a lolomiina le anotusi i le tusiga talu ai, ua faʻatupuina `out/ol/htm` ulufale i lenei lisi ma tamoe :

```
ln -s index.html 404.html
```


Talu ai e le lagolagoina `404.html` `github page`

Ona fa'asolo `i18n-demo/i18n-demo.github.io.git` o le fa'atonuga i totonu : le `htm`

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

A uma ona tulei le code, faʻatali mo le faʻapipiʻiina o le `github page`

<img src="//p.3ti.site/1721116586.avif" width="350px">

Mo itulau demo fa'amolemole va'ai:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Fa'apipi'i Ile Itulau cloudflare

Pe a faatusatusa i `github page` [cloudflare page](//pages.cloudflare.com) e maua ai le toe tusiina o le ala ma e sili atu ona faauo i le atunuu tele o Saina ma e sili atu ona faigofie.

`cloudflare page` O le fa'atulagaina e masani lava ona fa'avae i luga o le fa'atulagaina o `github page` luga.

Fausia se poloketi ma fusifusia le faleteuoloa o loʻo i luga `i18n-demo.github.io`

O le faagasologa o loʻo faʻaalia i le ata o loʻo i lalo:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

Fa'amolemole kiliki `Add Account` e fa'atagaina le avanoa i le `i18n-demo` .

Afai na e fusifusia le faleteuoloa a se isi faʻalapotopotoga, atonu e te manaʻomia `Add Account` kiliki faalua e faʻatagaina faalua aʻo leʻi faʻaalia le faʻalapotopotoga fou.

<img alt="" src="https://p.3ti.site/1721118306.avif">

Ona filifili lea `i18n-demo.github.io` Faleteuoloa, ona kiliki lea `Begin setup` , ma faʻaoga tulaga faʻaoga mo isi laasaga.

<img alt="" src="https://p.3ti.site/1721118490.avif">

A uma ona fusifusia mo le taimi muamua, e tatau ona e faʻatali mo ni nai minute ona e mauaina lea.

A maeʻa le faʻapipiʻiina, e mafai ona e fusifusia se igoa faʻapitoa.

<img alt="" src="https://p.3ti.site/1721119459.avif">

A mae'a ona fa'amauina le igoa fa'ale-aganu'u, fa'amolemole alu i le igoa fa'apitonu'u e fa'atulaga le ala e toe tusia ai le talosaga e tasi-itulau, e pei ona fa'aalia i lalo:

<img alt="" src="https://p.3ti.site/1721119320.avif">

O tulafono i le ata o loʻo i luga e faʻapea o loʻo mulimuli mai Faʻamolemole `i18n.site` i le laina muamua o loʻo i lalo ma le igoa ole igoa o loʻo fusia ia oe.

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

E le gata i lea, faamolemole fetuutuunai tulafono o le cache, e pei ona faaalia i lalo, ma seti le umi o le cache i le masina e tasi.

<img alt="" src="https://p.3ti.site/1721125111.avif">

Fa'amolemole sui le igoa ole igoa e fetaui ile la'asaga lona lua ile ata i luga ile igoa ole igoa na e saisaitia.

#### Fa'amalieina Le Fa'apipi'iina O Upega Tafa'ilagi I Le Atunu'u Tele O Saina

Afai e te manaʻo e maua se faʻatinoga sili atu ona faʻaogaina i le siosiomaga fesoʻotaʻiga a le atunuʻu tele o Saina, faʻamolemole [resitala muamua se igoa ole igoa](//beian.aliyun.com) .

Ona, fa'aoga `out/ol/htm` mea e teu ai le au fa'atau oloa i totonu o `CDN` +

E mafai ona e faʻaogaina le faʻaogaina o le mata e toe tusi ai le ala e faʻafetaui i talosaga e tasi-itulau, e pei ole [Baidu Smart `CDN`](//cloud.baidu.com/product/cdn.html) E mafai ona faʻapipiʻiina e pei o lenei:

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

Talu `MX` e le mafai ona ola faʻatasi faʻamaumauga ma `CNAME` faʻamaumauga, afai e te manaʻo e maua igoa ole imeli ile taimi e tasi, e tatau ona e galulue faʻatasi ma [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) tusitusiga e faʻapipiʻi `CNAME` i totonu `A` faʻamaumauga.

E le gata i lea, ona o le tau o fefaʻatauaiga i fafo a tagata faʻatau ao i totonu o Saina e fai si taugata, afai e te manaʻo e faʻalelei tau, e mafai ona e faʻaogaina [le Huawei DNS 's free geographic resolution](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) ma [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) 's custom domain name (e pei ona faʻaalia i lalo) e ausia fela'ua'iga fe'avea'i──Ta'avale i le atunu'u tele o Saina Baidu Cloud `CDN` feoaiga fa'avaomalo alu cloudflare .

<img alt="" src="https://p.3ti.site/1721119788.avif">

O nei fa'ata'ita'iga fa'ata'ita'iga fofo e sili atu ona lavelave ma o le a fa'alauiloa i isi mataupu i le lumana'i.

#### Fa'asinomaga Igoa Ole Igoa Lautele

Afai e te faʻaogaina `i18n.site` e faʻatupu ai se upega tafaʻilagi e avea ma au upega tafaʻilagi autu, e masani ona e manaʻomia le faʻatulagaina o le pan-domain redirection, o lona uiga, toe faʻafeiloaʻi `*.xxx.com` (e aofia ai `www.xxx.com` ) avanoa i `xxx.com` .

O lenei mana'oga e mafai ona ausia i le fesoasoani a Alibaba `CDN` 's `EdgeScript` ( [pepa Igilisi](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Pepa Saina](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Fa'aopoopo le igoa ole igoa ile [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) ma fa'asino `*.xxx.com` igoa ole igoa ile Alibaba Cloud `CDN` 's `CNAME` .

<img alt="" src="https://p.3ti.site/1721122000.avif">

Mo se faʻataʻitaʻiga, o le faʻasologa o le faʻasologa o igoa o le pan-domain o le `*.i18n.site`

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### Faʻapipiʻi I Le nginx

Fa'amolemole fa'aopoopo se fa'atulagaga e pei ona ta'ua i lalo i `server` nginx lea `/root/i18n/md/out/ol/htm` fa'amolemole sui i le ala o lau lava poloketi `out/ol/htm` :

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Fa'atonuga Fa'atonu

#### Lautele

Faila faila ole upega tafa'ilagi, pei ole `favicon.ico` `robots.txt` , ma isi.

O faila faʻailoga iinei e mafai ona gaosia i le [realfavicongenerator.net](https://realfavicongenerator.net) .

#### .i18n

I lalo o le fa'atonuga o lo'o iai `i18n.site` 's configuration files `.i18n` translation cache, etc. Va'ai le isi mataupu ["Configuration"](/i18n.site/conf) mo fa'amatalaga.

#### en

Fa'atonuga gagana fa'apogai, e fetaui `.i18n/conf.yml` `fromTo` `en` i le faila fa'atulagaina

```yaml
i18n:
  fromTo:
    en: zh
```

Fa'amolemole va'ai ile fa'atulagaina o fa'aliliuga [i18](/i18/use)

