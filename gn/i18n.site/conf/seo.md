# Optimización Motor De Búsqueda (Seo) Rehegua .

## Principio Rehegua

`i18n.site` oadopta peteĩ arquitectura página peteĩva noñembopyahúiva Ikatu hag̃uáicha oñembohape indexación jeheka rehegua, ojejapóta peteĩ página estática ha `sitemap.xml` añónte umi rastreador-kuérape g̃uarã.

Oipurúramo `User-Agent` jeikerã jerure rehegua rastreador motor de búsqueda rehegua, pe mba’ejerure ojegueraha jeýta página estática-pe `302` rupive.

Umi páhina estático-pe, eipuru `link` ehechauka hag̃ua joajuha opaichagua ñeꞌepyre ko páhinape, haꞌeháicha :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## Configuración nginx Local Rehegua

Jaipyhy techapyrãramo pe archivo configuración `.i18n/htm/main.yml` oĩva proyecto demostración-pe

```yml
host: i18n-demo.github.io
seo: true
out:
  - fs

pkg:
  i: i18n.site
  md: i18n.site

cdn:
  v:
  jsd:
```

Emoambue raẽ `host:` mba’ekuaarã yvategua nde dominio rérape, ha’eháicha `xxx.com` .

Upéi, `i18n.site -n` , ojejapóta pe página estática `out/main/htm` directorio-pe.

Añetehápe, ikatu avei emboguata ambue ñanduti renda ñembohekorã, haꞌeháicha eñeꞌe raẽ `main` ñemboheko rehe emoheñói hag̃ua `.i18n/htm/dist.package.json` ha `.i18n/htm/dist.yml` .

Upéi emongu’e `i18n.site -n -c dist` ikatu hag̃uáicha oñemboheko pe página estática `out/dist/htm` peve.

`nginx` ikatu oñemboguapy ojehechávo pe configuración oĩva iguýpe.

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# Ani remoĩ cache-pe umi script servidor mba’apoharakuéra rehegua ipukueterei
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# Emohenda tiempo caché ipukuvéva ambue recurso estático-pe g̃uarã
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# Emohenda mba’e vore estáticopa oipuru pe rastreador jeikeha página web-pe
location = / {
  # $botLang
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# Peteĩ páhina purupyrã ñemboheko
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## Emohenda Mba’e’oka Ñeñongatuha Ojegueraha Hag̃ua Archivo Estático

Umi archivo estático ikatu ojejapo localmente, ha katu peteĩ tape ojepuruvéva haꞌehína ojegueraha hag̃ua objeto ñeñongatuhápe.

Emoambue `out` oñembohekopyréva yvateve :

```
out:
  - s3
```

Upéi, emohenda `~/.config/i18n.site.yml` ha emoĩ ko’ã ñemboheko :

```yml
site:
  i18n.site:
    s3:
      - endpoint: s3.eu-central-003.backblazeb2.com
        ak: # access key
        sk: # secret key
        bucket: # bucket name
        # region:
```

Pe ñembohekorãme, emoambue `i18n.site` `host:` `.i18n/htm/main.yml` -pe, ikatu oñemboheko heta mbaꞌeñongatuha `s3` guýpe, ha `region` tenda haꞌehína opcional (heta mbaꞌeñongatuha natekotevẽi omohenda ko tenda).

Upéi emongu’e `i18n.site -n` emoherakuã jey hag̃ua tembiapo.

Emoambue ramo `~/.config/i18n.site.yml` ha emboguejyse jey, eipuru ko tembiapoukapy proyecto ypykuépe ryru’ípe emopotĩ hag̃ua ñemboguejyha caché :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## cloudflare Ñemboheko

Dominio réra oñemohendava'ekue [cloudflare](//www.cloudflare.com)

### Umi Regla Conversión Rehegua

Emoĩve umi regla conversión rehegua ojehechaukaháicha ko’ápe:

![](//p.3ti.site/1725436822.avif)

Pe regla código ha’e kóicha, emoambue pe código "i18n.site" nde dominio rérape:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Umi Regla Caché Rehegua

Emoĩve umi regla caché rehegua kóicha:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Umi Regla Ojeredirigi Haguã

Emohenda umi tembiapoukapy redirección rehegua kóicha, emoambue kódigo "i18n.site" nde dominio rérape

![](//p.3ti.site/1725437096.avif)

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
) and (
http.user_agent wildcard "*bot*" or
http.user_agent wildcard "*spider*" or
http.user_agent wildcard "*facebookexternalhit*" or
http.user_agent wildcard "*slurp*" or
http.user_agent wildcard "curl*" or
http.user_agent wildcard "*InspectionTool*"
)
```

`URL redirect` Eiporavo redirección dinámica, emoambue `/en` redirección rape `concat("/en",http.request.uri.path,".htm")` pe ñe’ẽ por defecto reipotávape umi motor de búsqueda oike.

## Baidu Ñemboheko Arai Arandu Rehegua

Tekotevẽramo eme’ẽ servicio China continental-pe, ikatu reipuru [Baidu Smart Cloud](//cloud.baidu.com) .

Datokuéra ojegueraha Baidu Object Storage-pe ha oñembojoaju Red de Distribución de Contenidos Baidu-pe.

Upéi ejapo script [servicio edge EdgeJS](//console.bce.baidu.com/cdn/#/cdn/ejs/list) pe kóicha

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
  // Ñembohovái iñakãrapu’ãva ikatu oñemboguapy oñemboheko hag̃ua osëva, haꞌeháicha out.XXX = 'MSG';
})
```

Emboguejy `Debug` , upéi eñemboguejy Emoherakuã red tuichakue javeve.

![](//p.3ti.site/1725437754.avif)

## Jeporu Tenondegua: Oñemosarambi Tráfico Oñemopyendáva Resolución Regional Rehe

Ome'ẽséramo servicio China continental-pe ha avei oipotáramo `cloudflare` tráfico internacional gratuito, ikatu oiporu `DNS` orekóva resolución regional.

Techapyrã `cloudflare` [Huawei Cloud DNS](https://www.huaweicloud.com)

Oĩ heta trampa configuración `cloudflare` Ko'ápe oĩ mbovymi punto ojehechakuaava'erã :

### Pe Dominio Réra Oñemohenda Ambue `DNS` -Pe, Mba’éichapa Ojepuruva’erã `cloudflare`

Ñepyrũrã embojoaju peteĩ dominio réra arbitrario `cloudflare` -pe, ha upéi eipuru `SSL/TLS` → dominio réra jeporupyre embojoaju hag̃ua dominio réra tenondegua ko dominio réra ndive.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` Ndaikatúi Ojeike Peteĩ Téra Dominio Jeporupyre Rupive

Pe `cloudflare` `R2` oñemopuꞌavaꞌekue ryepýpe ndaikatúigui ojeike peteĩ dominio réra oñembohekopyréva rupive, tekotevẽ ojepuru peteĩ mbaꞌeñongatuha mbohapýha oñemohenda hag̃ua archivo estático.

`cloudflare` jagueraha techapyrãramo [backblaze.com](https://www.backblaze.com)

Ejapo peteĩ mba’yru `backblaze.com` -pe, egueraha oimeraẽva vore, eñemboguejy ehesa’ỹijo hag̃ua vore ha ehupyty dominio réra `Friendly URL` , ha’éva `f003.backblazeb2.com` ko’ápe.

![](//p.3ti.site/1725440783.avif)

Emoambue dominio réra `CNAME` guive `f003.backblazeb2.com` peve `cloudflare` pe ha emboguata proxy.

![](//p.3ti.site/1725440896.avif)

Emoambue `cloudflare` 1- `SSL` → modo cifrado, emohenda `Full`

![](//p.3ti.site/1725438572.avif)

Emoĩve pe regla conversión rehegua ojehechaukaháicha ko’ápe, emoĩ tenonderã (pe peteĩha oguereko prioridad michĩvéva):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` eiporavo dinámico ha emoambue `your_bucketname` en `concat("/file/your_bucketname",http.request.uri.path)` nde cubo rérape.

Avei, `cloudflare` ñembohasa regla yvateguápe, `index.html` oñemoambue `file/your_bucketname/index.html` -pe, ha ambue ñemboheko opyta peteĩcha.

![](//p.3ti.site/1725441384.avif)