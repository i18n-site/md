# I-Install Ti &

## Token Ti Konfigurasion

`i18n.site` `i18` [`i18`](/i18/use)

## Ikabil

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Proyekto Ti Demo

Mangrugitayo iti demo project ken adalentayo no kasano ti agusar `i18n.site`

Umuna nga i-clone tayo ti demo repository ken patarayen ti command kas iti sumaganad:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Dagiti agar-aramat iti mainland China ket mabalinda ti:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

Ti nagan ti direktorio ti kodigo a batayan a klono `demo.i18n.site` masapul a `md` tapno mapasayaat ti lokal a panagkita babaen ti `docker` .

### Itarus

Umuna, iserrek ti `md` ken tarayen `i18n.site` , a mangipatarus iti `en` iti `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Kalpasan ti panagtaray, dagiti papeles ti panagipatarus ken cache ket mapartuat Pangngaasi a laglagipen nga inayon dagitoy iti pagidulinan `git add . ` iti `md` .

### Lokal a Preview

I-install ken mangrugi `docker` ( #Irekomendar `MAC` ti panagusar ti [orbstack](https://orbstack.dev) kas ti runtime ti `docker` ).

Kalpasanna, iserrek ti direktorio ti `docker` ken tarayen `./up.sh` , ken kalpasanna bisitaen ti [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### I-Post Ti Linaonna

`i18n.site` Adaptaranna ti [maymaysa a panid nga arkitektura ti aplikasion](https://developer.mozilla.org/docs/Glossary/SPA) , ken ti panid ti iseserrek ti website ken ti linaon ti website ket naipakat nga agwaywayas.

Kalpasan ti panangpataray ti patarus iti ngato, dagiti direktorio `htm` ken `v` ket mapataud iti `md/out/dev` .

Ditoy `dev` ipamatmatna a daytoy ket naibangon a naibatay iti `.i18n/htm/dev.yml` file.

`dev` :

`htm` Iti baba ti direktorio ket ti panid ti iseserrek ti website.

`v` Ti direktorio ket naglaon ti linaon ti website nga addaan iti numero ti bersion.

Ti lokal a preview ket mangkopia kadagiti amin a papeles iti direktorio ti `out/dev/v/0.1.0`

Para iti opisial a pannakairuar, dagiti nabaliwan a papeles ket makopia iti baro a direktorio ti numero ti bersion.

#### Usaren Ti -c Tapno Mangibaga Ti File Ti Panagisaad

Dagiti nadumaduma a file ti panagisaad ket mangpartuat kadagiti maitunos a direktorio iti baba `out` direktorio.

Kas pagarigan, `.i18n/htm/ol.yml` ket mangpartuat ti `out/ol` direktorio.

`dev.yml` ken `ol.yml` ket dagiti default a panagisaad.

`development` `dev`
`online` `ol` `-n` `npm`

Mabalinmo pay ti mangpartuat kadagiti sabali a papeles ti panagisaad Usaren ti `--htm_conf`

Kas pangarigan:
```
i18n.site --htm_conf yourConfig --save
```

Ditoy `--save` ket mangipakita ti numero ti bersion ti pannakairuar ti update.

#### <a rel=id href="#npm" id="npm"></a> Ipablaak ti linaon iti npmjs.com

Ti panagipablaak ti linaon iti [npmjs.com](//npmjs.com) ket isu ti mairekomendar a default a solusion (kitaen [ti Front-end High Availability](/i18n.site/feature#ha) ).

##### npm login & Ilettat

I-install `nodejs` usaren `npm login` tapno makalog in.

Urnosen `md/.i18n/htm/ol.yml` baliwan `i18n.site` in `v: //unpkg.com/i18n.site` iti bukodmo `npm` nagan ti pakete.

Usaren laeng ti saan nga okupado a nagan ti pakete iti [npmjs.com](//npmjs.com)

**`//unpkg.com/`** `i18n.site` `v:` naibatay `/.v` `npm`

Ipataray `i18n.site --npm` wenno `i18n.site -n` iti direktorio ti `md`

No agus-usar ka ti agtultuloy nga aglawlaw ti panagtipon tapno mangipablaak, saan a kasapulan nga i-install daytoy `nodejs` Kopiaem laeng ti nakalog-in ken naipablaak a pammalubos `~/.npmrc` iti aglawlaw.

No baliwam ti nagan ti pakete iti `v:` `ol.yml` , pangngaasim ta **siguraduem nga umuna nga ibura `.i18n/v/ol`** ken kalpasanna ipablaak daytoy.

##### Proxy Server Nga Impablaak Ti npm

No dagiti agar-aramat idiay nangruna a Tsina ket makasabetda kadagiti parikut ti network ken dida makaipablaak ti pakete ti `npm` , mabalinda nga ikeddeng ti variable ti aglawlaw `https_proxy` tapno mangikonfigura ti proxy server.

No ipapan a ti puerto ti proxy server-mo ket `7890` mabalinmo nga isurat:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Self-Hosted a Linaon

No kayatmo a self-host ti linaon, umuna, i-edit `md/.i18n/htm/ol.yml` ken baliwam `v: //unpkg.com/i18n.site` iti URL prefix-mo, kas iti `v: //i18n-v.xxx.com` .

Iserrek ti direktorio ti `md`

```
i18n.site --htm_conf ol --save
```

wenno abbreviation

```
i18n.site -c ol -s
```

Kalpasanna, ikonfigura ti linaon iti `md/out/ol/v` iti dalan ti pangrugian ti URL a naikeddeng iti `v:` .

Kamaudiananna, **ikonfigura ti oras ti cache ti dalan nga agpatingga `1s` `/.v`**

Ti oras ti cache para kadagiti sabali a dalan ket mabalin a maikeddeng iti maysa a tawen wenno ad-adu pay tapno mangkissay kadagiti saan a kasapulan a kiddaw.

##### Host Ti Linaon Ti s3

Tapno ag-self-host ti linaon, malaksid ti panagusar ti bukodmo a serbidor, `CDN` sabali pay a gagangay a pagpilian ket ti panagusar + `S3`

`S3` nga usaren `S3` [rclone](https://rclone.org)

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Laglagipem nga ikonfigura ti `CDN` tapno ti oras ti cache ti dalan nga agpatingga iti `/.v` ket `1s` , no saan ket saanmo a makastrek a dagus ti baro a nairuar a linaon.

### Ipablaak Ti Website

Mabalin nga i-deploy ti website iti sadinoman [github page](https://pages.github.com) ken [cloudflare page](https://pages.cloudflare.com) ket nasayaat a pili.

Gapu ta ti website ket mangadaptar ti arkitektura [ti maymaysa a panid nga aplikasion](https://developer.mozilla.org/docs/Glossary/SPA) , laglagipen nga isurat manen ti dalan ti URL a saan a `. ` iti `index.html` .

Ti panid ti iseserrek ti website ket kasapulan laeng a maminsan a maipakat, ken saan a kasapulan a maipakat manen ti panid ti iseserrek ti website para kadagiti sumaganad a panagpabaro ti linaon.

#### I-Deploy Iti Panid Ti github

Umuna [nga i-klik github tapno mangpartuat ti maysa nga organisasion](https://github.com/account/organizations/new?plan=free) Ti sumaganad a nagan ti organisasion `i18n-demo` kas pagarigan .

Kalpasanna mangpartuat ti bodega iti babaen daytoy nga organisasion `i18n-demo.github.io` (Pangngaasi a sukatam `i18n-demo` iti nagan ti organisasion a pinartuatmo):

<img alt="" src="https://p.3ti.site/1721098657.avif">

No mangipablaak ti linaon iti napalabas nga artikulo, daytoy ket `out/ol/htm` Pangngaasi nga iserrek daytoy a direktorio ken tarayen :

```
ln -s index.html 404.html
```


Gapu ta ti `github page` ket saan a mangsuporta ti panagsurat manen ti dalan ti URL, isu a `404.html` ket naus-usar imbes a.

Kalpasanna, tarayen ti sumaganad a bilin iti direktorio ti `htm` (laglagipem a sukatan `i18n-demo/i18n-demo.github.io.git` iti bukodmo nga adres ti bodega) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Kalpasan ti panangiduron ti kodigo, urayen ti pannakaipakat ti `github page` tapno sibaballigi nga agtaray (kas naipakita iti baba), ken kalpasanna mabalinmo nga aksesen daytoy.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Para iti panid ti demo pangngaasiyo ta kitaenyo ti:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### I-Deploy Iti Panid Ti cloudflare

[cloudflare page](//pages.cloudflare.com) `github page`

`cloudflare page` Ti pannakaipakat ket kadawyan a naibatay iti pannakaipakat ti `github page` iti ngato.

Mangaramid ti proyekto ken igalut ti bodega iti ngato `i18n-demo.github.io`

Ti proseso ket naipakita iti pigura iti baba:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

Pangngaasiyo ta i `i18n-demo` click ti `Add Account`

No naisinggalutmo ti bodega ti sabali nga organisasion, mabalin a kasapulam ti ag `Add Account` click iti mamindua tapno mamindua nga autorisaran sakbay a maiparang ti baro nga organisasion.

<img alt="" src="https://p.3ti.site/1721118306.avif">

Sumaganad pilien ti `i18n-demo.github.io` Warehouse, kalpasanna i-klik `Begin setup` , ken usaren dagiti default a pateg para kadagiti sumaganad nga addang.

<img alt="" src="https://p.3ti.site/1721118490.avif">

Kalpasan ti panangigalut iti umuna a gundaway, masapul nga agurayka iti sumagmamano a minuto sakbay a makastrekka iti dayta.

Kalpasan ti pannakaipakat, mabalinmo nga i-bind ti kostumbre a nagan ti domain.

<img alt="" src="https://p.3ti.site/1721119459.avif">

Kalpasan ti panangisilpo ti kostumbre a nagan ti dominio, pangngaasi a mapan iti nagan ti dominio tapno mangikonfigura ti panagsurat manen ti dalan ti maymaysa a panid nga aplikasion, a kas naipakita iti baba:

<img alt="" src="https://p.3ti.site/1721119320.avif">

Dagiti pagannurotan iti ladawan iti ngato ket kastoy Pangngaasiyo ta sukatan ti `i18n.site`

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

Iti pay maipatinayon, pangngaasi nga ikonfigura dagiti pagalagadan ti cache, a kas naipakita iti baba, ken ikeddeng ti kapaut ti cache iti maysa a bulan.

<img alt="" src="https://p.3ti.site/1721125111.avif">

Pangngaasi a baliwan ti panagtunos ti nagan ti domain iti maikadua nga addang iti ladawan iti ngato iti nagan ti domain a binilidam.

#### Panag-Optimisar Iti Pannakaipakat Ti Website Iti Mainland China

No kayatmo ti makagun-od iti nasaysayaat a panagaramid ti aksesibilidad iti aglawlaw ti network ti mainland China, pangngaasim ta [irehistrom nga umuna ti nagan ti domain](//beian.aliyun.com) .

`out/ol/htm` , usaren ti object storage dagiti cloud vendors iti mainland `CDN` +

Mabalinmo nga usaren ti edge computing tapno isurat manen ti dalan tapno makibagay kadagiti agmaymaysa a panid nga aplikasion, a kas ti [Baidu Smart `CDN`](//cloud.baidu.com/product/cdn.html) Mabalin a maikonfigura a kastoy:

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

Gapu `MX` dagiti rekord ken `CNAME` rekord ket saan a mabalin nga agbiag a sangsangkamaysa `A` no kayatmo ti umawat kadagiti email ti nagan ti domain nga aggigiddan, kasapulam ti `CNAME` iti [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten)

Mainayon pay, gapu ta dagiti singir ti trapiko iti ballasiw-taaw dagiti aglaklako iti ulep iti mainland China ket relatibo a nangina, no kayatmo nga optimize dagiti gastos, mabalinmo nga usaren [ti Huawei DNS 's libre a heograpiko a resolusion](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) ken [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) 's custom domain name (kas naipakita iti baba) tapno maragpat traffic diversion──Trapiko iti mainland China Baidu Cloud `CDN` internasional a trapiko mapan cloudflare .

<img alt="" src="https://p.3ti.site/1721119788.avif">

Dagitoy a solusion ti deployment optimization ket ad-adda a komplikado ken maiyam-ammo kadagiti agsina a kapitulo iti masakbayan.

#### Generiko a Panagiturong Manen Ti Nagan Ti Dominio

No `*.xxx.com` -usar `www.xxx.com` `xxx.com` `i18n.site`

Daytoy a kasapulan ket mabalin a maragpat babaen ti tulong ti `EdgeScript` ( [Ingles a dokumento](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Insik a dokumento](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ) ti Alibaba Cloud `CDN`

Manginayon ti nagan ti domain iti [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) ken itudo `*.xxx.com` nagan ti domain iti Alibaba Cloud `CDN` 's `CNAME` .

<img alt="" src="https://p.3ti.site/1721122000.avif">

Kas pagarigan, ti pan-domain name redirection configuration ti `*.i18n.site` iti ladawan iti ngato ket kastoy:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### I-Deploy Ti nginx

Pangngaasi nga inayon ti panagisaad a kapada ti sumaganad iti `server` nginx a sadiay `/root/i18n/md/out/ol/htm` pangngaasim ta baliwam daytoy iti dalan ti bukodmo a proyekto `out/ol/htm` :

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Estruktura Ti Direktorio

#### Publiko

Dagiti estatiko a file ti website, kas iti `favicon.ico` `robots.txt` , kdpy.

Dagiti file ti icon ditoy ket mabalin a mapataud babaen ti [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n Nga

`.i18n` `i18n.site`[​](/i18n.site/conf)

#### Ilo

Direktorio ti taudan a pagsasao, a maitunos `.i18n/conf.yml` `fromTo` `en` iti file ti panagisaad

```yaml
i18n:
  fromTo:
    en: zh
```

Pangngaasi a kitaen ti konfigurasion ti panagipatarus [i18](/i18/use)

