# ¡Uñstayaña &

## Configuración Ukax Mä Chimpuwa

`i18n.site` `i18` [`i18`](/i18/use)

## Uchaña

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Proyecto Demostración Ukax Mä Jach’a Uñacht’äwiwa

Mä proyecto demostración ukamp qalltañäni ukat kunjams apnaqañax uk yatxatañäni `i18n.site`

Nayraqatax demostración ukan imañ utaparuw clonación lurapxta ukatx kamachix akham apnaqapxta:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

China continental uksan apnaqirinakax akanakawa:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

`demo.i18n.site` `md` `docker`

### Jaqukipaña

`i18n.site` `md` `en` `zh`

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

T’ijtäwi tukuyatatxa, jaqukipaña ukat caché qillqatanakax lurasini, `git add . ` `md` ukan imañ utar yapxatañ amtañamawa.

### Local Ukan Nayrïr Uñacht’äwipa

Instalación ukat qalltaña `docker` ( `MAC` [orbstack](https://orbstack.dev) apnaqañaw sasaw iwxt’apxi `docker` ukhama ).

[https://127.0.0.1](https://127.0.0.1) `./up.sh` `docker`

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Contenido Uñt’ayaña

`i18n.site`[​](https://developer.mozilla.org/docs/Glossary/SPA)

Aka pata jaqukipäwi apnaqañ tukuyatatxa, `htm` ukat `v` directorios ukanakax `md/out/dev`

Aka `.i18n/htm/dev.yml` , `dev`

`dev` Uka manqhanjja :

`htm`

`v`

Local preview ukax taqi archivonakax `out/dev/v/0.1.0`

Oficial uñstayañatakix mayjt’at qillqatanakax machaq versión jakhunak directorio ukar copiatäniwa.

#### -c Ukampiw Wakicht’at Qillqat Uñacht’ayaña

Kunayman configuración qillqatanakax `out`

`out/ol` , `.i18n/htm/ol.yml`

`dev.yml` ukat `ol.yml` ukax configuración predeterminada ukawa.

`dev` `development`
`ol` `online` `-n` `npm`

Ukhamaraki yaqha wakicht’awi qillqatanaka lurañawa `--htm_conf`

ukhama:
```
i18n.site --htm_conf yourConfig --save
```

Aka `--save`

#### <a rel=id href="#npm" id="npm"></a> Contenido ukax npmjs.com ukar uñt’ayatawa

[npmjs.com](//npmjs.com)[​](/i18n.site/feature#ha)

##### npm login & Antutaña

Instalación `nodejs` `npm login` apnaqañamawa mantañataki.

Editar `md/.i18n/htm/ol.yml` `i18n.site` in `v: //unpkg.com/i18n.site` ukar mayjt’ayaña `npm` paquete suti.

Ukhamakiwa jan jaqini paquete sutimpi apnaqañaxa sitio web dominio sutimpi kunjamatixa paquete sutimpi apnaqaña [npmjs.com](//npmjs.com)

`npm` `v:` **`//unpkg.com/`** `i18n.site` `/.v`

`i18n.site --npm` jan ukax `i18n.site -n` `md` directorio ukan jaqukipaña ukat uñt’ayaña.

Mä sarantañ mayacht’asiñ `~/.npmrc` apnaqañax yatiyañatakix janiw wakiskiti uñstayaña `nodejs`

`v:` **`.i18n/v/ol`** `ol.yml`

##### Servidor Proxy Ukax npm Ukan Uñt’ayatawa

China continental ukan apnaqirinakax red `https_proxy` jan walt’awinakamp jikxatasipxani ukat jan `npm`

Ukhamarusa, proxy servidor puerto ukaxa `7890` ukhama qillqt’aña:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Jupa Pachpa Uñt’ayata Contenido

Ukax `v: //unpkg.com/i18n.site` auto-host `v: //i18n-v.xxx.com` , nayraqatax `md/.i18n/htm/ol.yml`

`md`

```
i18n.site --htm_conf ol --save
```

jan ukax abreviatura

```
i18n.site -c ol -s
```

`v:` , `md/out/ol/v`

**`1s` `/.v`**

Yaqha thakhinakatakix caché pachax mä mara jan ukax juk’ampiruw utt’ayasispa, jan wakiskir mayiwinak jisk’achañataki.

##### Contenido Ukax s3 Ukaruw Uñt’ayasi

Contenido auto-host ukatakixa, + apnaqañat sipansa, yaqha común `CDN` `S3`

[rclone](https://rclone.org) `S3` `S3`

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

¡Amtañani `CDN` ukhamat `/.v` ukamp tukuyir thakhin caché pachapax `1s` ukhamawa, jan ukhamäkanixa, janiw jichhak uñstayat yänakar jank’ak mantañax utjkaniti.

### Sitio Web Ukar Uñt’ayaña

Sitio web ukax kawkhans uñstayasispawa [github page](https://pages.github.com) ukat [cloudflare page](https://pages.cloudflare.com) ukax aski ajlliwinakawa.

Kunatix sitio web ukax [mä sapa panka apnaqañ](https://developer.mozilla.org/docs/Glossary/SPA) arquitectura ukar apnaqi, amtañaniw URL thakhix `index.html` ukar wasitat qillqt’aña `. `

Sitio web ukar mantañ pankax mä kutikiw uñstayañapa, ukatx janiw sitio web ukar mantañ pankax wasitat uñstayañax wakiskiti qhipa contenido ukar machaqar tukuyañataki.

#### github Ukan Uñt’ayaña

[Nayraqatax aka github ch'iqt'am mä tama lurañatakix](https://github.com/account/organizations/new?plan=free) aka tantachäw sutix `i18n-demo` uñacht'äwiwa.

Ukatxa aka tantachawi taypina mä almacén lurañama `i18n-demo.github.io` (Amuyt’añani `i18n-demo` uka tamax lurat sutimp lantintañamawa):

<img alt="" src="https://p.3ti.site/1721098657.avif">

Nayrir qillqatan qillqatanakap uñt’ayasaxa, : `out/ol/htm`

```
ln -s index.html 404.html
```


Kunatix `github page` ukax janiw URL thakhi wasitat qillqañ yanapt’kiti, ukhamax `404.html` ukax uka lantix apnaqatawa.

: aka `i18n-demo/i18n-demo.github.io.git` `htm`

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Código ukar ch’amanchañ tukuyasax `github page`

<img src="//p.3ti.site/1721116586.avif" width="350px">

Demostración ukanx aka uñakipt’añäni:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### cloudflare Ukan Uñt’ayaña

[cloudflare page](//pages.cloudflare.com) `github page`

`cloudflare page` `github page`

Mä proyecto luraña ukat uka patat almacén ukar chint’aña `i18n-demo.github.io`

Uka lurawixa aka uñacht’awina uñacht’ayatawa:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

`Add Account` Ukham ch'iqt'am `i18n-demo` organización ukar mantañataki.

Yaqha organizacionan almacén ukar chint’atästa ukhaxa, pä kutiw `Add Account`

<img alt="" src="https://p.3ti.site/1721118306.avif">

Ukxarusti `i18n-demo.github.io` Almacén uk ajlliñamawa, ukatxa `Begin setup` ukxaru ch’iqt’añamawa, ukatxa qhipa lurawinakatakixa nayra pachanakata apnaqañamawa.

<img alt="" src="https://p.3ti.site/1721118490.avif">

Nayrïr kuti encuadernación tukuyasaxa, mä qhawqha minutonakaw suytʼañama, janïr ukar mantañkama.

Uñstayañ tukuyatatxa, mä dominio sutimpiw uñt’ayasispa.

<img alt="" src="https://p.3ti.site/1721119459.avif">

Sapa uñt’at dominio sutimp chint’añ tukuyasax, mä panka apnaqañ thakhi wasitat qillqt’añ wakicht’añatakix dominio sutiruw sarañama, kunjamatix akham uñacht’ayaski ukhama:

<img alt="" src="https://p.3ti.site/1721119320.avif">

Aka pata uñacht’awina kamachinakaxa akhamawa `i18n.site`

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

Ukhamaraki, caché kamachinakax wakicht’atawa, kunjamatix akham uñacht’ayaski ukhamarjama, ukatx caché ukan pachapax mä phaxsiruw uñt’ayasi.

<img alt="" src="https://p.3ti.site/1721125111.avif">

Ukhamaraki, payïr t’aqapanx dominio sutimp chikancht’asiwix mayjt’ayañamawa, ukax dominio sutimp chikancht’atawa.

#### China Continental Uksan Sitio Web Ukan Uñstayawip Sum Apnaqaña

China continental uksan red ukan medio ambiente ukan juk’amp suma accesibilidad ukar puriñ munsta ukhax nayraqat [mä dominio suti qillqantañamawa](//beian.aliyun.com) .

Ukatxa, China continental uksan cloud aljirinakax `out/ol/htm` almacenamiento `CDN` apnaqapxam +

Edge computing ukax thakhi wasitat qillqt’añatakiw apnaqasispa, mä panka aplicacionanakar adaptañataki, kunjamakitix [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html)

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

Kunatix `MX` registros ukat `CNAME` registros ukanakax janiw mayacht’asis jakapkaspati, jumatix mä pachanx dominio sutimp correo electróniconak katuqañ munsta ukhax [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) script ukampiw yanapt’asiñama `CNAME` ukar `A` grabación.

Ukhamarus, kunatix China continental uksan cloud aljirinakax anqäx markan cargos de tráfico ukax mä juk’a jila chaniniwa, jumatix qullqinak sum apnaqañ munsta ukhax [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) [Cloud DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) desviación de tráfico──Tráfico en China continental Baidu Cloud `CDN` tráfico internacional ukax cloudflare .

<img alt="" src="https://p.3ti.site/1721119788.avif">

Aka soluciones de optimización de despliegue ukax juk’amp ch’amäxiwa ukatx jutïrinx sapa mayni jaljanakanw uñt’ayasini.

#### Dominio Genérico Suti Mayjt’ayaña

Mä sitio web jach’a `www.xxx.com` `xxx.com` `*.xxx.com` lurañatakix `i18n.site`

Aka mayiwix Alibaba Cloud ukan `EdgeScript` ( [inglés documento](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Chino documento](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ) ukan yanapt'apampiw phuqhasispa `CDN`

[Alibaba CDN](https://cdn.console.aliyun.com/domain/list) ukan mä dominio suti yapxataña ukat `*.xxx.com` suti Alibaba Cloud `CDN` 's `CNAME` ukar uñacht’ayaña.

<img alt="" src="https://p.3ti.site/1721122000.avif">

Amuyt’añataki, pan-dominio suti redirección configuración `*.i18n.site` aka pata jamuq uñacht’ayatawa:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### nginx Ukampiw Uñt’ayasi

Mä configuración ukar uñtasitaw `server` yapxatañama nginx kawkhantix `/root/i18n/md/out/ol/htm` mä proyecto `out/ol/htm` ukan thakhipar mayjt’ayañama.

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Directorio Ukan Lurawipa

#### Taqitaki

Sitio web ukan archivos estáticos ukanaka, kunjamatix `favicon.ico` `robots.txt` , ukat juk’ampinaka.

Aka chiqan icono qillqatanakax [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n Ukat Juk’ampinaka

`.i18n` `i18n.site`[​](/i18n.site/conf)

#### en

Fuente aru directorio, ukaxa `fromTo` `en` `.i18n/conf.yml` chika luratawa configuración qillqatanxa

```yaml
i18n:
  fromTo:
    en: zh
```

Uñakipt’añatakix configuración de traducción [i18](/i18/use)

