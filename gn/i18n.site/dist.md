# Despliegue Ha en Línea

`i18n.site` oadopta peteĩ arquitectura [aplicación peteĩ página rehegua](https://developer.mozilla.org/docs/Glossary/SPA) , ha pe página jeikeha página web ha contenido página web rehegua oñemboguata ijehegui.

Ojejapo rire ñembohasa yvategua, ojejapóta kundaha `htm` ha `v` kundaha `md/out/dev` guýpe.

Ko’ápe, `dev` he’ise oñemopu’ãha oñemopyendáva `.i18n/htm/dev.yml` vore ñembohekorã rehe.

`dev` directorio :

Pe `htm` directorio ha’e pe página web jeikeha.

Pe `v` directorio oguereko contenido página web orekóva versión número.

Pe jehechaukaha tendápegua ndojepy’apýi pe versión papapy rehe ha okopia opaite vore `out/dev/v/0.1.0` ryru’ípe.

Ojekuaauka hag̃ua oficialmente, umi archivo oñemoambuéva ojekopíta versión número pyahúpe.

## Emombe’u Vore Ñembohekorã `-c` Ndive

Umi archivo configuración rehegua iñambuéva omoheñóita directorio ojoajúva `out` directorio-pe.

Techapyrã, `.i18n/htm/main.yml` omoheñóita `out/main` kundaha.

`dev.yml` ha `main.yml` haꞌehína umi configuración por defecto.

`dev` haꞌehína `development` ñemombyky, ohechaukáva tekoha ñemoheñói rehegua, ojeporúva jehechaukarã local-pe g̃uarã, ha avei haꞌehína vore ñembohekorã ñepyrũrã.
`ol` haꞌehína `online` ñemombyky, ohechaukáva tekoha en línea, ojeporúva osẽ hag̃ua oficialmente Haꞌehína avei archivo configuración por defecto ojepuru jave parámetro línea de comandos `-n` guive `npm` peve ojepoi hag̃ua.

Ikatu avei ejapo ambue vore ñembohekorã Eipuru `--htm_conf` ñe’ẽmondo rape’ípe emombe’u hag̃ua vore ñembohekorã réra reipuru hag̃ua:

techapyrã ramo:
```
i18n.site --htm_conf dist --save
```

Ko’ápe `--save` ohechauka pe versión ñeguenohẽ ñembopyahu papapy.

## <a rel=id href="#npm" id="npm"></a> Omoherakuã contenido npmjs.com-pe

Oñemoherakuãvo contenido [npmjs.com](//npmjs.com) -pe haꞌehína solución por defecto oñembohekopyréva (ehecha [Front-end High Disponibilidad](/i18n.site/feature#ha) ).

### npm &

Emoĩ `nodejs` , eike `npm login` reheve .

Emohenda `md/.i18n/htm/main.yml` ha emoambue [`md:`](//github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/main.yml#L7) `YOUR_NPM_PACKAGE` nde `npm` paquete réraicha Oimeraẽva paquete réra ndojeguerekóiva [npmjs.com](//npmjs.com)

Upéi ñamoambue `md/.i18n/htm/main.package.json`

Emongu’e `i18n.site --npm` térã `i18n.site -n` `md` ryru’ípe embohasa ha emoherakuã hag̃ua.

Eipurúramo peteĩ tekoha integración continuo emoherakuã hag̃ua, natekotevẽi emohenda `nodejs` Ekopia mante umi permiso ojeike ha oñemoherakuã hag̃ua `~/.npmrc` tekohápe.

Emoambuéramo paquete réra `v:` en `main.yml` , **eñangareko embogue raẽ `.i18n/v/main`** ha upéi emoherakuã.

#### Servidor Proxy Omoherakuãva npm Rupive

Umi puruhára China continental-pegua ojuhúramo apañuãi red rehegua ha ndaikatúi omoherakuã `npm` paquete, ikatu omohenda variable tekoha rehegua `https_proxy` omohenda hag̃ua servidor proxy.

Ñaimo’ãramo ne puerto servidor proxy ha’eha `7890` , ikatu jahai:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

## Contenido Ojejapóva Ijehegui

Emohendaséramo ijeheguiete pe mba’ekuaarã, emohenda raẽ `md/.i18n/htm/main.yml` ha emoambue `v: //unpkg.com/i18n.site` nde URL ñepyrũrãme, ha’eháicha `v: //i18n-v.xxx.com` .

Eike `md` ryru ha emongu’e

```
i18n.site --htm_conf ol --save
```

térã abreviatura

```
i18n.site -c ol -s
```

Upéi, emohenda mba’e’oka oĩva `md/out/main/v` ryru’ípe URL ñepyrũrã rape oñemohendava’ekue `v:` -pe.

Ipahápe, **emohenda caché aravo tape oñemohu’ãva `/.v` guive `1s` peve** , ndaupéichairamo ndaikatúi ojeike pya’e umi mba’ekuaarã osẽ pyahúvape.

Pe tiempo caché rehegua ambue tapekuérape g̃uarã ikatu oñemboguapy peteĩ arýpe térã hetave oñemboguejy hag̃ua mba’ejerure natekotevẽiva.

## Oñemohenda Contenido S3-Pe

`CDN` hag̃ua ijeheguiete, ojepuru hag̃ua nde servidor tee, ambue opción jepivegua haꞌehína ojepuru `S3` +

Ikatu eipuru [rclone](https://rclone.org) eike hag̃ua `S3` servidor-pe, upéi ehecha ha emoambue ko’ã script, ha ekopia umi ñemoambue incremental `S3` -pe añoite peteĩteĩva ñeguenohẽme g̃uarã.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/main/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/main/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/main/v/.v "$s3:/$bucket/"
```

Penemandu’áke pemohenda hag̃ua `CDN` ikatu hag̃uáicha pe tiempo caché rehegua tape oñemohu’ãva `/.v` -pe ha’e `1s` , ndaha’éiramo upéicha ndaikatúi ojeike pya’e umi mba’e’oka osẽ pyahúvape.

## Omoherakuã Página Web

Pe página web ikatu oñemboguata mamove [github page](https://pages.github.com) ha [cloudflare page](https://pages.cloudflare.com) ha’e jeporavo porã.

Pe ñanduti renda oipurúgui peteĩ arquitectura [purupyrã peteĩ página rehegua](https://developer.mozilla.org/docs/Glossary/SPA) , nemandu’ava’erã ehai jey hag̃ua URL rape ndoguerekóiva `. ` guive `index.html` peve.

Pe página web jeikeha tekotevẽ oñemboguata peteĩ jeýnte, ha natekotevẽi oñembohasa jey pe página web jeikeha oñembopyahu hag̃ua upe rire.

### Oñemosarambi github Página-Pe

Ñepyrũrã [eity github emoheñói hag̃ua peteĩ organización](https://github.com/account/organizations/new?plan=free) `i18n-demo`

Upéi ejapo almacén `i18n-demo.github.io` ko organización guýpe (emyengovia `i18n-demo` organización réra remoheñóiva rehe):

![](https://p.3ti.site/1721098657.avif)

Oñemoherakuãvo contenido artículo ohasava'ekuépe, `out/main/htm` ojejapo Eike ko directorio-pe ha emongu'e :

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

### Oñemosarambi cloudflare Página-Pe

[cloudflare page](//pages.cloudflare.com) `github page`

Pe `cloudflare page` ñemboguata oñemopyenda jepi `github page` ñemboguata yvateguápe.

Ejapo peteĩ proyecto ha embojoaju `i18n-demo.github.io` almacén yvate gotyo.

Pe proceso ojehechauka ta anga iguýpe:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Emboguejy `Add Account` eme'ẽ hag̃ua jeike organización `i18n-demo` .

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
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

Avei, emohenda umi regla caché rehegua, ojehechaukaháicha ko’ápe, ha emohenda caché pukukue peteĩ jasy.

![](https://p.3ti.site/1721125111.avif)

Emoambue dominio réra ojoajúva mokõiha tembiaporãme taꞌãngamýi yvateguápe dominio réra rembojoajúvape.

### Oñemohenda Porãvo Despliegue Sitio Web China Continental-Pe

Ehupytyséramo rendimiento accesibilidad iporãvéva entorno red China continental-pe, [ehai raẽ peteĩ dominio réra](//beian.aliyun.com) .

Upéi, eipuru objeto ñeñongatuha umi ñemuha arai rehegua China continental + pe `CDN` Emosarambi ko’ã contenido `out/main/htm` .

Ikatu eipuru computación borde rehegua ehai jey hag̃ua tape eñemboheko hag̃ua umi aplicación peteĩ página rehegua Techapyrã, [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) ikatu oñemboheko kóicha:

```js
const uri = r.uri, p = uri.lastIndexOf(".");
if (
  p < 0 ||
  !"|js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest|".includes(
    "|" + uri.slice(p + 1) + "|",
  )
) {
  const ua = r.headersIn["User-Agent"].toLowerCase()
  if (/facebookexternalhit|slurp|bot|spider|curl/.test(ua)) {
    r.return(
      302,
      (/baidu|yisou|sogou|360|byte/.test(ua) ? "/zh" : "/en") + r.uri + ".htm",
    )
  } else {
    r.uri = "/index.html"
  }
}

r.respHeader(() => {
  const t = [], out = r.headersOut;
  ["Content-MD5", "Age", "Expires", "Last-Modified"].forEach(
    i => delete out[i]
  )
  r.rawHeadersOut.forEach(i => {
    const key = i[0].toLowerCase()
    if (key.startsWith("x-") || key.startsWith("ohc-")) {
      delete out[key]
    }
  })
  out["Cache-Control"] = "max-age=" + 9e5
  // Ikatu emohenda ñembohovái iñakãrapu’ãva emboheko hag̃ua osëva, taha’e out.XXX = 'MSG';
})
```

![](https://p.3ti.site/1721121273.avif)

Pe registro `MX` ha registro `CNAME` ndaikatúigui oiko oñondive, rehupytyséramo peteĩ jave umi correo `CNAME` dominio réra `A` , tekotevẽ reñomoirũ script [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten)

Avei, umi cargo de tráfico ultramar-pegua umi cloud ñemuha China continental-pe hepyeterei rupi, remoporãséramo umi [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) , ikatu reipuru [Huawei Cloud DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) desvío de tránsito──Enrutamiento tráfico China continental-pe Baidu Cloud `CDN` , tráfico internacional oho cloudflare .

![](https://p.3ti.site/1721119788.avif)

Ko’ã solución optimización despliegue rehegua ikomplikadove ha oñembohasáta capítulo separado-pe tenonderãme.

### Redirección Dominio Réra Genérico Rehegua

Eipurúramo `i18n.site` emoheñói hag̃ua peteĩ ñanduti renda nde ñanduti renda tenondegua ramo, jepive tekotevẽ remohenda pan-domain redirección, he’iséva, rembohasa jeike `*.xxx.com` -pe ( `www.xxx.com` oikehápe) `xxx.com` -pe.

Ko mba'e ojejeruréva ikatu ojehupyty Alibaba Cloud `CDN` `EdgeScript` pytyvõ rupive ( [kuatia inglés](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [kuatia chino](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ) .

Emoĩ dominio réra [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) -pe ha ehechauka dominio réra `*.xxx.com` `CNAME` Alibaba Cloud `CDN` -pe.

![](https://p.3ti.site/1721122000.avif)

Techapyrã, pan-domain réra redirección ñemboheko `*.i18n.site` taꞌãngamýi yvateguápe haꞌehína kóicha:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

### Oñemosarambi nginx Ndive

Emoĩ peteĩ ñemboheko ojoguáva `/root/i18n/md/out/main/htm` `server` párrafo nginx `out/main/htm`

```
location / {
  root  /root/i18n/md/out/main/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

## Oñemopyendáva `github action` Integración Continuo Rehe

Ikatu ehecha ko'ã mba'e emohenda hag̃ua nde `github action` :

```
name: i18n.site

on:
  workflow_dispatch:
  push:
    branches:
      - main
      - dist

jobs:
  i18n:

    permissions:
      repository-projects: write
      contents: write

    runs-on: ubuntu-latest

    steps:
      - name: checkout
        uses: actions/checkout@v4

      - name: https://i18n.site
        uses: i18n-site/github-action-i18n.site@main
        with:
          I18N_SITE_TOKEN: ${{ secrets.I18N_SITE_TOKEN }}
          NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
```

Ojehechaháicha configuración-pe, ko tembiaporã rape oñembohape oñembohasávo rama `main` ha rama `dist` .

Tembiaporã rape oipurúta vore ñembohekorã okorrespondéva rama rérape oñemoherakuã hag̃ua kuatia Koꞌape, ojeporúta `.i18n/htm/main.yml` ha `.i18n/htm/dist.yml` ñemboheko ñembohekorã ramo.

Ro’e porã ko’ã tembiapo iporãvéva kuatia ñeguenohẽ rembiaporãme g̃uarã:

Oñemonguꞌe jave umi ñemoambue rama `main` -pe, oñembohape kuatia oñemopuꞌa ha oñembohasa hag̃ua estación jehechaukarãme (pe estación jehechaukarã oĩ [github page](//pages.github.com) ).

Oñemoañete rire kuatia oĩ porãha pe tenda jehechaukarãme, oñembojoajúta pe código ha oñembohasáta rama `dist` -pe, ha pe construcción ha despliegue oficial ohóta en línea.

Añetehápe, oñemboguata hag̃ua pe proceso yvategua tekotevẽ ojehai hetave configuración.

Ikatu ehecha proyecto añeteguáva [github.com/fcdoc/doc](//github.com/fcdoc/doc/blob/main/.github/workflows/i18n.site.yml)

`secrets.I18N_SITE_TOKEN` ha `secrets.NPM_TOKEN` ñembohekorãme ojerure oñemboheko hag̃ua umi mbaꞌekuaarã ñemigua kódigo base-pe.

![](//p.3ti.site/1730970199.avif)

`I18N_SITE_TOKEN` [i18n.site/token](//i18n.site/token)

`NPM_TOKEN` haꞌehína token ñemoherakuãrã paquete `npm` rehegua Visita [npmjs.com](//npmjs.com)

![](//p.3ti.site/1730969906.avif)


## Directorio Ñemohenda

### `public`

Umi archivo estático página web rehegua, haꞌeháicha `favicon.ico` , `robots.txt` , ha mbaꞌe.

Umi vore icono rehegua ko’ápe ikatu oñemboheko [realfavicongenerator.net](https://realfavicongenerator.net)

### `.i18n`

`.i18n` ryru guýpe oĩ umi vore ñembohekorã, ñembohasa ryru, hambaꞌe `i18n.site` Ehecha ambue kapítulo ["Ñemohenda"](/i18n.site/conf) reikuaa hag̃ua.

### `en`

Ñe’ẽ ypykue ryru, okorrespondéva `en` `fromTo` apytégui `.i18n/conf.yml` vore ñembohekorã

```yaml
i18n:
  fromTo:
    en: zh
```

Ehechamína pe ñembohasa ñemboheko [i18](/i18/use)