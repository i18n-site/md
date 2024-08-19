# Emoĩ &

## Token Configuración Rehegua

`i18n.site` oguereko peteĩ tembipuru’i ñembohasarã `i18` incorporado [Emboguejy ko’ápe ehecha hag̃ua kuatia `i18` emohenda hag̃ua token jeikerã](/i18/use) .

## Mboguejy Mohendahápe

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Proyecto Demostración Rehegua

Ñañepyrũ peteĩ proyecto demostración reheve jaikuaa hag̃ua mbaꞌeichaitépa jaipuruvaꞌerã `i18n.site` .

Ñañemboja raẽ pe demostración ryru ha ñamombaꞌapo pe tembiapoukapy kóicha:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Umi oiporúva China continental-pe ikatu:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

Pe directorio réra clon base `demo.i18n.site` código rehegua haꞌevaꞌerã `md` ombohape hag̃ua jehechaukarã local `docker` ndive.

### Ñe'ẽmbohasa

Ñepyrũrã, eike `md` ryru ha emongu’e `i18n.site` , ombohasátava `en` guive `zh` peve.

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Oñemongu’e rire, ojejapóta vore ñembohasa ha caché rehegua Emandu’ava’erã `git add . ` hag̃ua tendañongatuhápe `md` ryru’ípe.

### Jesarekorã Local Rehegua

Emohenda ha emoñepyrũ `docker` ( `MAC` puruhára omoneĩ eipuru hag̃ua [orbstack](https://orbstack.dev) `docker` -pe g̃uarã ñemboguata jave ).

Upéi, eike `docker` ryru ha emongu’e `./up.sh` , ha upéi eike [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Omoĩ Contenido

`i18n.site` oadopta peteĩ arquitectura [aplicación peteĩ página rehegua](https://developer.mozilla.org/docs/Glossary/SPA) , ha pe página jeikeha página web ha contenido página web rehegua oñemboguata ijehegui.

Ojejapo rire ñembohasa yvategua, ojejapóta kundaha `htm` ha `v` kundaha `md/out/dev` guýpe.

Ko’ápe, `dev` he’ise oñemopu’ãha oñemopyendáva `.i18n/htm/dev.yml` vore ñembohekorã rehe.

`dev` directorio :

Pe `htm` directorio ha’e pe página web jeikeha.

Pe `v` directorio oguereko contenido página web orekóva versión número.

Pe jehechaukaha tendápegua ndojepy’apýi pe versión papapy rehe ha okopia opaite vore `out/dev/v/0.1.0` ryru’ípe.

Oñemoherakuã hag̃ua oficialmente, umi archivo oñemoambuéva ojekopíta dirección número de versión pyahúpe.

#### Eipuru -c Emombe’u Hag̃ua Vore Ñembohekorã

Umi archivo configuración rehegua iñambuéva omoheñóita directorio ojoajúva `out` directorio-pe.

Techapyrã, `.i18n/htm/ol.yml` omoheñóita `out/ol` kundaha.

`dev.yml` ha `ol.yml` haꞌehína umi configuración por defecto.

`dev` haꞌehína `development` ñemombyky, ohechaukáva tekoha ñemoheñói rehegua, ojeporúva jehechaukarã local-pe g̃uarã, ha avei haꞌehína vore ñembohekorã ñepyrũrã.
`ol` haꞌehína `online` ñemombyky, ohechaukáva tekoha en línea, ojeporúva osẽ hag̃ua oficialmente Haꞌehína avei archivo configuración por defecto ojepuru jave parámetro línea de comandos `-n` guive `npm` peve ojepoi hag̃ua.

Ikatu avei ejapo ambue vore ñembohekorã Eipuru `--htm_conf` ñe’ẽmondo rape’ípe emombe’u hag̃ua vore ñembohekorã réra reipuru hag̃ua:

techapyrã ramo:
```
i18n.site --htm_conf yourConfig --save
```

Ko’ápe `--save` ohechauka pe versión ñeguenohẽ ñembopyahu papapy.

#### <a rel=id href="#npm" id="npm"></a> Omoherakuã contenido npmjs.com-pe

Oñemoherakuãvo contenido [npmjs.com](//npmjs.com) -pe haꞌehína solución por defecto oñembohekopyréva (ehecha [Front-end High Disponibilidad](/i18n.site/feature#ha) ).

##### npm login & Mosãso

Emoĩ `nodejs` , eike `npm login` reheve .

Emohenda `md/.i18n/htm/ol.yml` ha emoambue `i18n.site` `v: //unpkg.com/i18n.site` -pe nde `npm` paquete rérape.

Eipurunte pe paquete réra ndojepytasóiva en [npmjs.com](//npmjs.com)

Oñemoherakuã jave oñemopyendáva paquete `npm` rehe, **eñangareko eipuru hag̃ua `//unpkg.com/`** ñepyrũrã `v:` valor rehegua `i18n.site` omohenda porãma especialmente tiempo caché `/.v` rehegua ko ñepyrũrã rape guýpe ojehupyty hag̃ua oportunamente umi ñeguenohẽ pyahu.

Emongu’e `i18n.site --npm` térã `i18n.site -n` `md` ryru’ípe embohasa ha emoherakuã hag̃ua.

Eipurúramo peteĩ tekoha integración continuo emoherakuã hag̃ua, natekotevẽi emohenda `nodejs` Ekopia mante umi permiso ojeike ha oñemoherakuã hag̃ua `~/.npmrc` tekohápe.

Emoambuéramo paquete réra `v:` en `ol.yml` , **eñangareko embogue raẽ `.i18n/v/ol`** ha upéi emoherakuã.

##### Servidor Proxy Omoherakuãva npm Rupive

Umi puruhára China continental-pegua ojuhúramo apañuãi red rehegua ha ndaikatúi omoherakuã `npm` paquete, ikatu omohenda variable tekoha rehegua `https_proxy` omohenda hag̃ua servidor proxy.

Ñaimo’ãramo ne puerto servidor proxy ha’eha `7890` , ikatu jahai:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Contenido Ojejapóva Ijehegui

Emohendaséramo ijeheguiete pe mba’ekuaarã, emohenda raẽ `md/.i18n/htm/ol.yml` ha emoambue `v: //unpkg.com/i18n.site` nde URL ñepyrũrãme, ha’eháicha `v: //i18n-v.xxx.com` .

Eike `md` ryru ha emongu’e

```
i18n.site --htm_conf ol --save
```

térã abreviatura

```
i18n.site -c ol -s
```

Upéi, emohenda mba’e’oka oĩva `md/out/ol/v` ryru’ípe URL ñepyrũrã rape oñemohendava’ekue `v:` -pe.

Ipahápe, **emohenda caché aravo tape oñemohu’ãva `/.v` guive `1s` peve** , ndaupéichairamo ndaikatúi ojeike pya’e umi mba’ekuaarã osẽ pyahúvape.

Pe tiempo caché rehegua ambue tape rehegua ikatu oñemboguapy peteĩ arýpe térã hetave oñemboguejy hag̃ua mba’ejerure natekotevẽiva.

##### Oñemohenda Contenido S3-Pe

Ojeguerahauka hag̃ua `CDN` , ojepuru hag̃ua nde servidor tee, ambue opción jepivegua haꞌehína ojepuru `S3` +

Ikatu eipuru [rclone](https://rclone.org) eike hag̃ua `S3` servidor-pe, upéi ehecha ha emoambue ko’ã script, ha ekopia umi ñemoambue incremental `S3` pe añoite peteĩteĩva ñeguenohẽme g̃uarã.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Penemandu’áke pemohenda hag̃ua `CDN` ikatu hag̃uáicha pe tiempo caché rehegua tape oñemohu’ãva `/.v` -pe ha’e `1s` , ndaha’éiramo upéicha ndaikatúi ojeike pya’e umi mba’e’oka osẽ pyahúvape.

### Omoherakuã Página Web

Pe página web ikatu oñemboguata mamove [github page](https://pages.github.com) ha [cloudflare page](https://pages.cloudflare.com) ha’e jeporavo porã.

Pe ñanduti renda oipurúgui peteĩ arquitectura [purupyrã peteĩ página rehegua](https://developer.mozilla.org/docs/Glossary/SPA) , nemandu’ava’erã ehai jey hag̃ua URL rape ndoguerekóiva `. ` guive `index.html` peve.

Pe página web jeikeha tekotevẽ oñemboguata peteĩ jeýnte, ha natekotevẽi oñembohasa jey pe página web jeikeha oñembopyahu hag̃ua upe rire.

#### Oñemosarambi github Página-Pe

Ñepyrũrã `i18n-demo` [github emoheñói hag̃ua peteĩ organización](https://github.com/account/organizations/new?plan=free) .

Upéi ejapo almacén `i18n-demo.github.io` ko organización guýpe (emyengovia `i18n-demo` organización réra remoheñóiva rehe):

![](https://p.3ti.site/1721098657.avif)

Oñemoherakuãvo contenido artículo ohasava'ekuépe, `out/ol/htm` ojejapo Eike ko directorio-pe ha emongu'e :

```
ln -s index.html 404.html
```


`github page` ndoipytyvõigui URL rape jehai jey, ojepuru `404.html` hendaguépe.

Upéi emongu’e ko tembiapoukapy `htm` ryru’ípe (nemandu’áke emyengovia hag̃ua `i18n-demo/i18n-demo.github.io.git` nde dirección almacén rehegua) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Emoinge rire kódigo, ehaꞌarõ `github page` ñembohasa oñemboguata porã (ojehechaháicha iguýpe) ikatu mboyve reike ipype.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Página demostración rehegua ehecha:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Oñemosarambi cloudflare Página-Pe

[cloudflare page](//pages.cloudflare.com) `github page`

Pe `cloudflare page` ñemboguata oñemopyenda jepi `github page` ñemboguata yvateguápe.

Ejapo peteĩ proyecto ha embojoaju `i18n-demo.github.io` almacén yvate gotyo.

Pe proceso ojehechauka ta anga iguýpe:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Emboguejy `Add Account` eme'ẽ hag̃ua jeike organización `i18n-demo` -pe.

Rembojoajúramo ambue organización almacén, ikatu tekotevẽ remboguejy mokõi jey `Add Account` reautorisa hag̃ua mokõi jey ojehechauka mboyve organización pyahu.

![](https://p.3ti.site/1721118306.avif)

Upe rire, eiporavo almacén `i18n-demo.github.io` , upéi eñemboguejy `Begin setup` , ha eipuru umi valor por defecto umi paso oúvape g̃uarã.

![](https://p.3ti.site/1721118490.avif)

Embojoaju rire peteĩha jey, reha’arõva’erã unos minutos ikatu mboyve reike ipype.

Oñemosarambi rire, ikatu embojoaju peteĩ dominio réra jeporupyre.

![](https://p.3ti.site/1721119459.avif)

Embojoaju rire dominio réra jeporupyre, eike dominio rérape emohenda hag̃ua tape jehai jey purupyrã peteĩ página rehegua, ojehechaukaháicha ko’ápe:

![](https://p.3ti.site/1721119320.avif)

Umi tembiapoukapy oĩva taꞌãngamýi yvateguápe haꞌehína koꞌãva Emyengovia `i18n.site` oĩva peteĩha línea iguýpe pe dominio réra rembojoajúva reheve.

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

Avei, emohenda umi regla caché rehegua, ojehechaukaháicha ko’ápe, ha emohenda caché pukukue peteĩ jasy.

![](https://p.3ti.site/1721125111.avif)

Emoambue dominio réra ojoajúva mokõiha tembiaporãme taꞌãngamýi yvateguápe dominio réra rembojoajúvape.

#### Oñemohenda Porãvo Despliegue Sitio Web China Continental-Pe

Ehupytyséramo rendimiento accesibilidad iporãvéva entorno red China continental-pe, [ehai raẽ peteĩ dominio réra](//beian.aliyun.com) .

Upéi, eipuru objeto ñeñongatuha umi ñemuha arai rehegua China continental + pe `CDN` Emosarambi ko’ã contenido `out/ol/htm` .

Ikatu eipuru computación borde rehegua ehai jey hag̃ua tape eñemboheko hag̃ua umi aplicación peteĩ página rehegua Techapyrã, [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) ikatu oñemboheko kóicha:

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

Pe registro `MX` ha registro `CNAME` ndaikatúigui oiko oñondive, `CNAME` `A` jave umi correo electrónico dominio réra rehegua, tekotevẽ reñomoirũ script [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten)

Avei, umi cargo de tráfico ultramar-pegua umi cloud ñemuha China continental-pe hepyeterei rupi, remoporãséramo umi costo, ikatu reipuru [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) [Cloud DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) desvío de tránsito──Tráfico China continental-pe Baidu Cloud `CDN` , tráfico internacional oho cloudflare .

![](https://p.3ti.site/1721119788.avif)

Ko’ã solución optimización despliegue rehegua ikomplikadove ha oñembohasáta capítulo separado-pe tenonderãme.

#### Redirección Dominio Réra Genérico Rehegua

Eipurúramo `i18n.site` emoheñói hag̃ua peteĩ ñanduti renda nde ñanduti renda tenondegua ramo, jepive tekotevẽ remohenda pan-domain redirección, he’iséva, rembohasa jeike `*.xxx.com` -pe ( `www.xxx.com` oikehápe) `xxx.com` -pe.

Ko mba'e ojejeruréva ikatu ojehupyty Alibaba Cloud `CDN` `EdgeScript` pytyvõ rupive ( [kuatia inglés](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [kuatia chino](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ) .

Emoĩ dominio réra [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) -pe ha ehechauka dominio réra `*.xxx.com` guive `CNAME` peve Alibaba Cloud `CDN` -pe.

![](https://p.3ti.site/1721122000.avif)

Techapyrã, pan-domain réra redirección ñemboheko `*.i18n.site` taꞌãngamýi yvateguápe haꞌehína kóicha:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

#### Oñemosarambi nginx Ndive

Emoĩ `/root/i18n/md/out/ol/htm` ñemboheko ojoguáva `out/ol/htm` `server` párrafo nginx

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Directorio Ñemohenda

#### `public`

Umi archivo estático página web rehegua, haꞌeháicha `favicon.ico` , `robots.txt` , ha mbaꞌe.

Umi vore icono rehegua ko’ápe ikatu oñemboheko [realfavicongenerator.net](https://realfavicongenerator.net)

#### `.i18n`

`.i18n` ryru guýpe oĩ umi vore ñembohekorã, ñembohasa ryru, hambaꞌe `i18n.site` Ehecha ambue kapítulo ["Ñemohenda"](/i18n.site/conf) reikuaa hag̃ua.

#### `en`

Ñe’ẽ ypykue ryru, okorrespondéva `en` `fromTo` apytégui `.i18n/conf.yml` vore ñembohekorã

```yaml
i18n:
  fromTo:
    en: zh
```

Ehechamína pe ñembohasa ñemboheko [i18](/i18/use)