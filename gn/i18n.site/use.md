# Emoĩ &

## Token Configuración Rehegua

`i18n.site` Tembipuru `i18` ñembohasarã oñemboguapy, [eity ko’ápe ehecha hag̃ua kuatia `i18` emohenda hag̃ua jeikerã token](/i18/use) .

## Mboguejy Mohendahápe

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Proyecto Demostración Rehegua

Ñañepyrũ peteĩ proyecto demostración reheve ha ñaikuaa mba'éichapa jaipuru `i18n.site`

Ñañembohape raẽ pe demostración ryru ha ñamombaꞌapo pe tembiapoukapy kóicha:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Umi oiporúva China continental-pe ikatu:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

`demo.i18n.site` Pe clon base código rehegua réra haꞌevaꞌerã `md` ombohape hag̃ua jehechaukarã local `docker` ndive.

### Ñe'ẽmbohasa

`zh` `en` `i18n.site` `md`

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Oñemongu’e rire, ojejapóta vore ñembohasa ha caché rehegua Emoĩ hag̃ua ñanduti renda `git add . ` `md` .

### Jehechaukarã Local

Emohenda ha eñepyrũ `docker` ( `MAC` omoneĩ eipuru [orbstack](https://orbstack.dev) `docker` ñemboguatarãicha ).

[https://127.0.0.1](https://127.0.0.1) , `./up.sh` `docker`

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Omoĩ Contenido

`i18n.site`[​](https://developer.mozilla.org/docs/Glossary/SPA)

Oñemongu’e rire ñembohasa yvategua, `htm` ha `v` kundaha oñembohekopyréva `md/out/dev`

Ko’ápe, `dev` ohechauka oñemopu’ãha oñemopyendáva vore `.i18n/htm/dev.yml` rehe.

`dev` :

`htm` Pe directorio guýpe oĩ pe página web jeikeha.

`v` Pe directorio oguereko pe contenido página web rehegua orekóva versión número.

Tembiecharã ñepyrũrã okopiáta opaite vore `out/dev/v/0.1.0`

Ojekuaauka hag̃ua oficialmente, umi archivo oñemoambuéva ojekopíta versión número pyahúpe.

#### Eipuru -c Emombe’u Hag̃ua Vore Ñembohekorã

Umi vore ñembohekorã iñambuéva omoheñóita kundaha ojoajúva `out`

Techapyrã, `.i18n/htm/ol.yml` omoheñóita peteĩ `out/ol` kundaha.

`dev.yml` ha `ol.yml` haꞌehína umi configuración por defecto.

`dev` haꞌehína `development` ñemombyky, ohechaukáva tekoha ñembohekorã, ojeporúva jehechaukarã local-pe g̃uarã, ha avei haꞌehína vore ñembohekorã ñepyrũrã.
`ol` haꞌehína `online` ñemombyky, ohechaukáva tekoha en línea, ojeporúva osẽ hag̃ua oficialmente, ha avei haꞌehína vore configuración por defecto oñemoherakuã jave `npm` ojeporúvo parámetro línea de comandos `-n` .

Ikatu avei ejapo ambue vore ñembohekorã Eipuru `--htm_conf`

techapyrã ramo:
```
i18n.site --htm_conf yourConfig --save
```

Ko’ápe `--save` ohechauka pe versión ñeguenohẽ ñembopyahu número.

#### <a rel=id href="#npm" id="npm"></a> Omoherakuã contenido npmjs.com-pe

Oñemoherakuãvo contenido [npmjs.com](//npmjs.com) -pe haꞌehína solución por defecto oñembohekopyréva (ehecha [Front-end High Disponibilidad](/i18n.site/feature#ha) ).

##### npm login & Mosãso

Emoĩ `nodejs` eipuru `npm login` eike hag̃ua.

Emohenda `md/.i18n/htm/ol.yml` emoambue `i18n.site` in `v: //unpkg.com/i18n.site` nde mba’évape `npm` paquete réra.

Eipurunte pe paquete réra ndojepytasóiva en [npmjs.com](//npmjs.com)

`i18n.site` **`//unpkg.com/`** `v:` `npm` `/.v`

Emongu’e `i18n.site --npm` térã `i18n.site -n` `md`

Eipurúramo peteĩ tekoha integración continuo emoherakuã hag̃ua, natekotevẽi emoĩ `nodejs` Ekopia mante pe permiso ojeike ha oñemoherakuãva `~/.npmrc` tekohápe.

Emoambuéramo paquete réra `v:` in `ol.yml` , **eñangareko embogue raẽ hag̃ua `.i18n/v/ol`** ha upéi emoherakuã.

##### Servidor Proxy Omoherakuãva npm Rupive

Umi puruhára China continental-pegua ojuhúramo apañuãi red `https_proxy` ha ndaikatúi omoherakuã `npm`

Ñaimo’ãramo ne puerto servidor proxy ha’eha `7890` ikatu rehai:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Contenido Ojejapóva Ijehegui

Emohendaséramo ijeheguiete pe mba’ekuaarã, tenonderã, emohenda `md/.i18n/htm/ol.yml` ha emoambue `v: //unpkg.com/i18n.site` nde URL ñepyrũrãme, ha’eháicha `v: //i18n-v.xxx.com` .

Eike `md`

```
i18n.site --htm_conf ol --save
```

térã abreviatura

```
i18n.site -c ol -s
```

`v:` , emohenda mba’e’oka oĩva `md/out/ol/v`

Ipahápe, **`1s` caché aravo tape oñemohu’ãva `/.v`**

Pe tiempo caché rehegua ambue tapekuérape g̃uarã ikatu oñemboguapy peteĩ arýpe térã hetave oñemboguejy hag̃ua mba’ejerure natekotevẽiva.

##### Oñemohenda Contenido S3-Pe

Contenido auto-host + `CDN` g̃uarã, eipuru hag̃ua nde servidor tee, ambue opción común haꞌehína eipuru `S3`

Ikatu eipuru [rclone](https://rclone.org) `S3` `S3`

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Nemandu’áke emohenda hag̃ua `CDN` ikatu hag̃uáicha pe tiempo caché rehegua tape oñemohu’ãva `/.v` -pe ha’e `1s` , ndaha’éiramo ndaikatumo’ãi reike pya’e umi mba’e’oka osẽ pyahúvape.

### Omoherakuã Página Web

Pe página web ikatu oñemboguata mamove [github page](https://pages.github.com) ha [cloudflare page](https://pages.cloudflare.com) ha’e jeporavo porã.

Pe ñanduti renda oadopta rupi [peteĩ purupyrã peteĩ página](https://developer.mozilla.org/docs/Glossary/SPA) rehegua arquitectura , nemandu’áke ehai jey hag̃ua URL rape ndoguerekóiva `. ` `index.html` .

Pe página web jeikeha tekotevẽ oñemboguata peteĩ jeýnte, ha natekotevẽi oñembohasa jey pe página web jeikeha oñembopyahu hag̃ua upe rire.

#### Oñemosarambi github Página-Pe

Primero [eity github emoheñói hag̃ua peteĩ](https://github.com/account/organizations/new?plan=free) organización ko'ãva ha'e `i18n-demo`

Upéi ejapo peteĩ almacén ko organización guýpe `i18n-demo.github.io` (Emyengovia `i18n-demo` pe organización réra rejapova’ekue rehe):

<img alt="" src="https://p.3ti.site/1721098657.avif">

Oñemoherakuãvo contenido artículo ohasava'ekuépe, : `out/ol/htm`

```
ln -s index.html 404.html
```


Pórke `github page` ndoipytyvõi URL rape jehai jey, upévare ojepuru `404.html` hendaguépe.

`i18n-demo/i18n-demo.github.io.git` : ko tembiapoukapy `htm`

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Emongu’e rire pe código, eha’arõ `github page`

<img src="//p.3ti.site/1721116586.avif" width="350px">

Página demostración rehegua ehecha:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Oñemosarambi cloudflare Página-Pe

[cloudflare page](//pages.cloudflare.com) Oñembojojávo `github page`

`cloudflare page` Pe ñemboguata oñemopyenda jepi `github page` yvategua ñemboguata rehe.

Ejapo peteĩ proyecto ha embojoaju almacén yvategua `i18n-demo.github.io`

Pe proceso ojehechauka ta anga iguýpe:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

`i18n-demo` `Add Account`

Rembojoajúramo ambue organización almacén, ikatu tekotevẽ `Add Account` mokõi jey reautorisa hag̃ua mokõi jey ojehechauka mboyve pe organización pyahu.

<img alt="" src="https://p.3ti.site/1721118306.avif">

Upe rire eiporavo `i18n-demo.github.io` Almacén, upéi eñemboguejy `Begin setup` , ha eipuru umi mba’ekuaarã tenondegua umi tembiaporã oúvape g̃uarã.

<img alt="" src="https://p.3ti.site/1721118490.avif">

Embojoaju rire peteĩha jey, reha’arõva’erã unos minutos ikatu mboyve reike ipype.

Oñemosarambi rire, ikatu embojoaju peteĩ dominio réra jeporupyre.

<img alt="" src="https://p.3ti.site/1721119459.avif">

Embojoaju rire dominio réra jeporupyre, eike dominio rérape emohenda hag̃ua tape jehai jey purupyrã peteĩ página rehegua, ojehechaukaháicha ko’ápe:

<img alt="" src="https://p.3ti.site/1721119320.avif">

Umi tembiapoukapy oĩva ta’ãngamýi yvateguápe ha’e ko’ãva Emyengovia `i18n.site`

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

Avei, emohenda umi caché regla, ojehechaukaháicha ko’ápe, ha emohenda caché pukukue peteĩ jasy.

<img alt="" src="https://p.3ti.site/1721125111.avif">

Emoambue dominio réra ojoajúva mokõiha paso ta’ãngamýi yvateguápe dominio réra rembojoajúvape.

#### Oñemohenda Porãvo Despliegue Sitio Web China Continental-Pe

Ehupytyséramo rendimiento accesibilidad iporãvéva entorno red China continental-pe, [ehai raẽ peteĩ dominio réra](//beian.aliyun.com) .

Upéi, eipuru `out/ol/htm` ñeñongatuha umi ñemuha arai rehegua `CDN` continental-pe +

Ikatu reipuru computación borde rehegua rehai jey hag̃ua tape ojeadapta hag̃ua umi aplicación peteĩ página rehegua, haꞌeháicha [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html)

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

`MX` `CNAME` [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) `CNAME` `A`

Avei, umi cargo de tráfico ultramar-pegua umi cloud ñemuha China continental-pe hepyeterei rupi, remoporãséramo umi costo, ikatu reipuru [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) [Cloud DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) desvío de tránsito──Tráfico China continental-pe Baidu Cloud `CDN` tráfico internacional oho cloudflare .

<img alt="" src="https://p.3ti.site/1721119788.avif">

Ko’ã solución optimización despliegue rehegua ikomplikadove ha oñembohasáta capítulo separado-pe tenonderãme.

#### Redirección Dominio Réra Genérico Rehegua

Eipurúramo `i18n.site` emoheñói hag̃ua peteĩ ñanduti renda nde ñanduti renda tenondegua ramo, jepivegua tekotevẽ emohenda pan-domain redirección, he’iséva, redirección `*.xxx.com` (oikehápe `www.xxx.com` ) jeike `xxx.com` .

Ko mba'e ojejeruréva ikatu ojehupyty Alibaba Cloud pytyvõ rupive `EdgeScript` ( [kuatia inglés](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [kuatia chino](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ) `CDN`

Emoĩ peteĩ dominio réra [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) pe ha ehechauka `*.xxx.com` réra Alibaba Cloud `CDN` 's `CNAME` -pe.

<img alt="" src="https://p.3ti.site/1721122000.avif">

Techapyrã, pan-domain réra redirección ñemboheko `*.i18n.site` rehegua taꞌãngamýi yvateguápe haꞌehína kóicha:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### Oñemosarambi nginx Ndive

Emoĩ `/root/i18n/md/out/ol/htm` mohendaha `out/ol/htm` ko’ãvape `server` nginx

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Directorio Estructura Rehegua

#### Opavavépe G̃uarã

Umi archivo estático página web rehegua, haꞌeháicha `favicon.ico` `robots.txt` , ha mbaꞌe.

Umi vore icono rehegua ko’ápe ikatu oñemboheko [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n Rehegua

`.i18n` Pe kundaha guýpe oĩ `i18n.site` 's vore ñembohekorã, ñembohasa ryru, hambaꞌe Ehecha pe kapítulo oúva ["Ñemohenda"](/i18n.site/conf) reikuaa hag̃ua.

#### en

Ñe’ẽ ypykue ryru, ojoajúva `fromTo` `en` `.i18n/conf.yml` oĩva vore ñembohekorãme

```yaml
i18n:
  fromTo:
    en: zh
```

Ehechamína pe ñembohasa ñemboheko [i18](/i18/use)

