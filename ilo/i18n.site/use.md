# I-Install Ti &

## Token Ti Konfigurasion

`i18n.site` ket addaan iti naibangon a `i18` nga alikamen ti panagipatarus Pangngaasi [nga i-klik ditoy tapno kitaen ti `i18` a dokumento tapno mangikonfigura ti token ti panagserrek](/i18/use) .

## Ikabil

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Proyekto Ti Demo

Mangrugitayo iti demo project tapno maammuantayo no kasano nga usaren `i18n.site` .

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

Ti nagan ti direktorio ti `demo.i18n.site` a kodigo a batayan a klono ket masapul a `md` tapno mapasayaat ti lokal a preview babaen ti `docker` .

### Itarus

Umuna, iserrek ti `md` a direktorio ken tarayen `i18n.site` , a mangipatarus `en` iti `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Kalpasan ti panagtaray, dagiti papeles ti panagipatarus ken cache ket mapartuat Pangngaasi a laglagipen nga inayon `git add . ` iti pagidulinan iti `md` a direktorio.

### Lokal a Preview

I-install ken rugian `docker` ( `MAC` nga agar-aramat ket mangisingasing ti panagusar ti [orbstack](https://orbstack.dev) a kas ti runtime para iti `docker` ).

Kalpasanna, iserrek ti `docker` a direktorio ken tarayen `./up.sh` , ken kalpasanna bisitaen ti [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### I-Post Ti Linaonna

`i18n.site` ket mangadaptar ti [maymaysa a panid nga arkitektura ti aplikasion](https://developer.mozilla.org/docs/Glossary/SPA) , ken ti panid ti iseserrek ti website ken ti linaon ti website ket naipakat nga agwaywayas.

Kalpasan ti panangpataray ti patarus iti ngato, dagiti direktorio `htm` ken `v` ket mapataudto iti baba ti direktorio ti `md/out/dev` .

Ditoy, `dev` ket kayatna a sawen a daytoy ket naibangon a naibatay iti `.i18n/htm/dev.yml` a file ti panagisaad.

`dev` nga direktorio :

Ti `htm` direktorio ket ti panid ti iseserrek ti website.

Ti `v` a direktorio ket aglaon ti linaon ti website nga addaan kadagiti numero ti bersion.

Ti lokal a preview ket saan a maseknan ti numero ti bersion ken kopiaenna amin a papeles iti `out/dev/v/0.1.0` a direktorio.

Para iti opisial a pannakairuar, dagiti nabaliwan a papeles ket makopia iti baro a direktorio ti numero ti bersion.

#### Usaren Ti -c Tapno Mangibaga Ti File Ti Panagisaad

Dagiti nadumaduma a file ti panagisaad ket mangpartuat kadagiti maitunos a direktorio iti `out` a direktorio.

Kas pagarigan, `.i18n/htm/ol.yml` ket mangpartuat ti `out/ol` a direktorio.

`dev.yml` ken `ol.yml` ti default a konfigurasion.

`dev` ket ti abbreviation ti `development` , a mangipakpakita ti aglawlaw ti panagrang-ay, a maus-usar para iti lokal a preview, ken isu pay ti default a file ti panagisaad.
`ol` ket ti abbreviation ti `online` , a mangipakpakita ti online nga aglawlaw, a maus-usar para iti opisial a pannakairuar Daytoy pay ti default a file ti panagisaad no agus-usar kadagiti parametro ti linia ti bilin `-n` aginggana ti `npm` tapno mairuar.

Mabalinmo pay ti mangpartuat kadagiti sabali a file ti panagisaad Usaren ti `--htm_conf` iti linia ti bilin tapno mangibaga ti nagan ti file ti panagisaad nga usaren:

Kas pangarigan:
```
i18n.site --htm_conf yourConfig --save
```

Ditoy `--save` ket mangibagi ti numero ti bersion ti pannakairuar ti update.

#### <a rel=id href="#npm" id="npm"></a> Ipablaak ti linaon iti npmjs.com

Ti panagipablaak ti linaon iti [npmjs.com](//npmjs.com) ket isu ti mairekomendar a default a solusion (kitaen [ti Front-end High Availability](/i18n.site/feature#ha) ).

##### npm login & Ilettat

I-install `nodejs` , ag-log in babaen `npm login` .

Urnosen `md/.i18n/htm/ol.yml` ken baliwam `i18n.site` iti `v: //unpkg.com/i18n.site` iti bukodmo a `npm` a nagan ti pakete.

Usaren laeng ti saan nga okupado a nagan ti pakete iti [npmjs.com](//npmjs.com)

No agipablaak a naibatay iti pakete `npm` , **siguraduen nga usaren `//unpkg.com/` para** iti pangrugian ti `v:` a pateg ti `i18n.site` ket naisangayan a nangpasayaat ti oras ti cache ti `/.v` iti baba daytoy a dalan ti pangrugian tapno magun-od ti naintiempuan a panagkita kadagiti baro a nairuar.

Ipataray `i18n.site --npm` wenno `i18n.site -n` iti `md` a direktorio tapno maipatarus ken maipablaak.

No agus-usar ka ti agtultuloy nga aglawlaw ti panagtipon tapno mangipablaak, saan a kasapulan ti mangikabil `nodejs` Kopiaem laeng dagiti nakalog-in ken dagiti pammalubos ti panagipablaak `~/.npmrc` iti aglawlaw.

No baliwam ti nagan ti pakete ti `v:` iti `ol.yml` , pangngaasim ta **siguraduem nga umuna nga ibura `.i18n/v/ol`** ken kalpasanna ipablaak daytoy.

##### Proxy Server Nga Impablaak Ti npm

No dagiti agar-aramat idiay nangruna a Tsina ket makasabetda kadagiti parikut ti network ken dida makaipablaak `npm` a pakete, mabalinda nga ikeddeng ti aglawlaw a variable `https_proxy` tapno mangikonfigura ti proxy server.

No ipapan a ti puerto ti proxy server mo ket `7890` , mabalinmo nga isurat:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Self-Hosted a Linaon

No kayatmo a self-host ti linaon, umuna nga i-edit `md/.i18n/htm/ol.yml` ken baliwam `v: //unpkg.com/i18n.site` iti URL prefix-mo, kas iti `v: //i18n-v.xxx.com` .

Iserrek ti `md` a direktorio ken agtaray

```
i18n.site --htm_conf ol --save
```

wenno abbreviation

```
i18n.site -c ol -s
```

Kalpasanna, ikonfigura ti linaon iti `md/out/ol/v` a direktorio iti dalan ti pangrugian ti URL a naikeddeng iti `v:` .

Kamaudiananna, **ikonfigura ti oras ti cache ti dalan nga agpatingga iti `/.v` aginggana iti `1s`** , no saan ti baro a nairuar a linaon ket saan a mabalin a dagus a mastrek.

Ti oras ti cache para kadagiti sabali a dalan ket mabalin a maikeddeng iti maysa a tawen wenno ad-adu pay tapno mangkissay kadagiti saan a kasapulan a kiddaw.

##### Host Ti Linaon Ti s3

Tapno ag `CDN` self-host ti linaon, malaksid ti panagusar ti bukodmo a serbidor, ti sabali pay a gagangay a pagpilian ket ti panagusar ti `S3` +

Mabalinmo nga usaren ti [rclone](https://rclone.org) tapno aglog-in iti `S3` a serbidor, kalpasanna kitaen ken baliwan ti sumaganad nga iskrip, ken kopiaen laeng dagiti inkremental a panagbalbaliw iti `S3` para iti tunggal maysa a pannakairuar.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Laglagipem nga ikonfigura `CDN` tapno ti oras ti cache ti dalan nga agpatingga iti `/.v` ket `1s` , no saan ti baro a nairuar a linaon ket saan a mabalin a dagus a mastrek.

### Ipablaak Ti Website

Mabalin nga i-deploy ti website iti sadinoman [github page](https://pages.github.com) ken [cloudflare page](https://pages.cloudflare.com) ket nasayaat a pili.

Gapu ta ti website ket agus-usar ti [maymaysa a panid nga arkitektura ti aplikasion](https://developer.mozilla.org/docs/Glossary/SPA) , laglagipen nga isurat manen dagiti dalan ti URL nga awan ti linaon `. ` aginggana ti `index.html` .

Ti panid ti iseserrek ti website ket kasapulan laeng a maminsan a maipakat, ken saan a kasapulan a maipakat manen ti panid ti iseserrek ti website para kadagiti sumaganad a panagpabaro ti linaon.

#### I-Deploy Iti Panid Ti github

Umuna [nga i-klik github tapno mangpartuat ti maysa nga organisasion](https://github.com/account/organizations/new?plan=free) Ti sumaganad a nagan ti organisasion ket `i18n-demo` a kas pagarigan.

Kalpasanna mangpartuat ti bodega `i18n-demo.github.io` iti baba daytoy nga organisasion (pangngaasi a sukatam `i18n-demo` iti nagan ti organisasion a pinartuatmo):

![](https://p.3ti.site/1721098657.avif)

No maipablaak ti linaon iti napalabas nga artikulo, `out/ol/htm` ti napataud Pangngaasi nga iserrek daytoy a direktorio ken tarayen :

```
ln -s index.html 404.html
```


Gapu ta `github page` ket saan a mangsuporta ti panagsurat manen ti dalan ti URL, `404.html` ket naus-usar imbes a.

Kalpasanna, tarayen ti sumaganad a bilin iti `htm` a direktorio (laglagipem a sukatan `i18n-demo/i18n-demo.github.io.git` iti bukodmo nga adres ti bodega) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Kalpasan ti panangiduron ti kodigo, urayem ti pannakaipakat ti `github page` tapno sibaballigi nga agtaray (kas naipakita iti baba) sakbay a makastrekka iti daytoy.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Para iti panid ti demo pangngaasiyo ta kitaenyo ti:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### I-Deploy Iti Panid Ti cloudflare

[cloudflare page](//pages.cloudflare.com) `github page`

Ti pannakaipakat ti `cloudflare page` ket kadawyan a naibatay iti pannakaipakat ti `github page` iti ngato.

Mangaramid ti proyekto ken igalut ti `i18n-demo.github.io` a bodega iti ngato.

Ti proseso ket naipakita iti pigura iti baba:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Pangngaasi nga i-klik ti `Add Account` tapno maited ti akses iti organisasion `i18n-demo` .

No naisinggalutmo ti bodega ti sabali nga organisasion, mabalin a kasapulam nga i-klik `Add Account` iti mamindua tapno mamindua nga autorisaran sakbay a maiparang ti baro nga organisasion.

![](https://p.3ti.site/1721118306.avif)

Sumaganad, pilien ti bodega `i18n-demo.github.io` , kalpasanna i-klik `Begin setup` , ken usaren dagiti default a pateg para kadagiti sumaganad nga addang.

![](https://p.3ti.site/1721118490.avif)

Kalpasan ti panangigalut iti umuna a gundaway, masapul nga agurayka iti sumagmamano a minuto sakbay a makastrekka iti dayta.

Kalpasan ti pannakaipakat, mabalinmo nga i-bind ti kostumbre a nagan ti domain.

![](https://p.3ti.site/1721119459.avif)

Kalpasan ti panangisilpo ti kostumbre a nagan ti dominio, pangngaasi a mapan iti nagan ti dominio tapno mangikonfigura ti panagsurat manen ti dalan ti maymaysa a panid nga aplikasion, a kas naipakita iti baba:

![](https://p.3ti.site/1721119320.avif)

Dagiti pagannurotan iti ladawan iti ngato ket kastoy Pangngaasi a sukatan `i18n.site` iti umuna a linia iti baba iti nagan ti domain a naigalutmo.

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

![](https://p.3ti.site/1721125111.avif)

Pangngaasi a baliwan ti panagtunos ti nagan ti domain iti maikadua nga addang iti ladawan iti ngato iti nagan ti domain a binilidam.

#### Panag-Optimisar Iti Pannakaipakat Ti Website Iti Mainland China

No kayatmo ti makagun-od iti nasaysayaat a panagaramid ti aksesibilidad iti aglawlaw ti network ti mainland China, pangngaasim ta [irehistrom nga umuna ti nagan ti domain](//beian.aliyun.com) .

Kalpasanna, usaren ti pagipempenan ti banag dagiti aglaklako iti ulep iti mainland + `CDN` I-deploy ti sumaganad a linaon `out/ol/htm` .

Mabalinmo nga usaren ti edge computing tapno isurat manen ti dalan tapno makibagay kadagiti agmaymaysa a panid nga aplikasion Kas pagarigan, [ti Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) ket mabalin a maikonfigura a kastoy:

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

Gapu ta ti rekord `MX` ken rekord `CNAME` ket saan a mabalin nga agbiag a sangsangkamaysa, no `A` ti umawat kadagiti email ti nagan ti domain iti aggigiddan, kasapulam ti `CNAME` iti [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten)

Mainayon pay, gapu ta dagiti singir ti trapiko iti ballasiw-taaw dagiti aglaklako iti ulep iti mainland China ket relatibo a nangina, no kayatmo nga optimize dagiti gastos, mabalinmo nga usaren [ti Huawei DNS 's libre a heograpiko a resolusion](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) ken [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) 's custom domain name (kas naipakita iti baba) tapno maragpat traffic diversion──Trapiko iti mainland China Baidu Cloud `CDN` , internasional a trapiko mapan cloudflare .

![](https://p.3ti.site/1721119788.avif)

Dagitoy a solusion ti deployment optimization ket ad-adda a komplikado ken maiyam-ammo kadagiti agsina a kapitulo iti masakbayan.

#### Generiko a Panagiturong Manen Ti Nagan Ti Dominio

No usarem `i18n.site` tapno mangpataud ti website a kas ti kangrunaan a websitemo, kadawyan a kasapulam nga ikonfigura ti pan-domain a panangiturong manen, kayatna a sawen, iturong manen ti akses iti `*.xxx.com` (agraman `www.xxx.com` ) iti `xxx.com` .

Daytoy a kasapulan ket mabalin a maragpat babaen ti tulong ti Alibaba Cloud `CDN` `EdgeScript` ( [Ingles a dokumento](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Insik a dokumento](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ) .

Inayon ti nagan ti domain iti [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) ken itudo ti nagan ti domain `*.xxx.com` agingga iti `CNAME` iti Alibaba Cloud `CDN` .

![](https://p.3ti.site/1721122000.avif)

Kas pagarigan, ti pan-domain name redirection configuration ti `*.i18n.site` iti ladawan iti ngato ket kas ti sumaganad:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

#### I-Deploy Ti nginx

Pangngaasi `/root/i18n/md/out/ol/htm` inayon ti panagisaad a kapada ti `out/ol/htm` iti `server` a parapo ti nginx

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

#### `public`

Dagiti estatiko a file ti website, kas iti `favicon.ico` , `robots.txt` , kdpy.

Dagiti file ti icon ditoy ket mabalin a mapataud babaen ti [realfavicongenerator.net](https://realfavicongenerator.net)

#### `.i18n`

Iti baba ti `.i18n` a direktorio ket dagiti file ti panagisaad, cache ti panagipatarus, kdpy ti `i18n.site` Kitaen ti sumaganad a kapitulo [a "Panagkonfigura"](/i18n.site/conf) para kadagiti detalye.

#### `en`

Direktorio ti taudan a pagsasao, a maitunos iti `en` ti `fromTo` iti `.i18n/conf.yml` a file ti panagisaad

```yaml
i18n:
  fromTo:
    en: zh
```

Pangngaasi a kitaen ti konfigurasion ti panagipatarus [i18](/i18/use)