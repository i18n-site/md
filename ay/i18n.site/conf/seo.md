# Uñakipañataki Thakhinaka (Seo) .

## Principio

`i18n.site` mä arquitectura de una sola página jan refrescante ukaruw apnaqi `sitemap.xml`

Kunawsatix `User-Agent` ukax mantañ mayiwix thakhi thaqhirimp apnaqatäki ukhax mayiwix `302` tuqiw estático ukar kutt’ayatarakini.

Estático pankanakanx `link` ukampiw aka pankan kunayman arut versión ukar uñt’ayañax utji, sañäni :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## Ukax nginx Ukan Utt’ayatawa

Mä uñacht’äwiw proyecto demostración ukan `.i18n/htm/main.yml` configuración archivo ukar apsuñani

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

Nayraqatax `host:` patat chimpunak mayjt’ayañaw dominio sutimaru, kunjamatix `xxx.com` .

Ukatxa, `i18n.site -n` , ukax `out/main/htm` directorio ukanw estático ukanx lurasi.

Chiqansa, yaqha wakicht’awi qillqatanakax ch’amanchatarakiwa, kunjamatix nayraqatax `main` ukan wakicht’awipar uñt’ayañax `.i18n/htm/dist.package.json` ukat `.i18n/htm/dist.yml` lurañataki.

Ukatxa `i18n.site -n -c dist` ukja t’ijt’aña ukhamata estático pankaxa `out/dist/htm` ukjaru puriñapataki.

`nginx` akham configuración ukar uñakipt’asaw utt’ayasispa.

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# Janiw servidor irnaqir scripts ukanakax sinti jaya pachanak caché ukar uñt’ayañakiti
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# Yaqha estático yänakatakix juk’amp jaya pachanak caché ukar uñt’ayaña
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# Kawkïr archivo estático ukas rastreador ukax nayrïr uñstawiparjam apnaqi uk utt’ayaña
location = / {
  # $botLang
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# Mä sapa panka apnaqawi wakicht’aña
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## Objeto Imañ Wakicht’aña, Ukax Archivos Estáticos Ukanakar Apkatañataki

Archivos estáticos ukax local ukan lurasispawa, ukampis juk’amp uñt’at amtawix objeto almacenamiento ukar apkatañawa.

`out` configurado ukax :

```
out:
  - s3
```

Ukatxa, `~/.config/i18n.site.yml` chiqañchaña ukat aka configuración ukar yapxataña :

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

Configuración ukanxa, `i18n.site` ukarux `host:` in `.i18n/htm/main.yml` ukar mayjt’ayañamawa, walja yänak imañ utanakax `s3` ukarjam wakicht’atäspawa, ukatx `region` chiqax munañjamawa (walja yänak imañ utanakax janiw uka chimpunak utt’ayañax wakiskiti).

Ukatxa `i18n.site -n` t’ijt’añani proyecto wasitat uñt’ayañataki.

`~/.config/i18n.site.yml` mayjt’ayata ukat wasitat apkatañ munsta ukhax aka kamachimpiw proyecto saphi directorio ukanx apkatañ caché q’umachañama :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## cloudflare Ukax Mä Configuración Ukaniwa

Dominio sutix uñt'ayatawa [cloudflare](//www.cloudflare.com)

### Jaqukipaña Kamachinaka

Uka jaqukipañ kamachinakax akham uñacht’ayatawa:

![](//p.3ti.site/1725436822.avif)

Kamachi chimpuxa akhamawa, "i18n.site" chimpuxa dominio sutimpi mayjt’ayatawa:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Caching Kamachinaka

Caché kamachinakax akhamawa:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Kamachinak Mayjt’ayaña

Redirección kamachinakax akham uñt’ayatawa, ukax "i18n.site" uka chimpumpiw dominio sutimar mayjt’ayañama

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

`URL redirect` Redirección dinámica ajlliñani, `/en` redirección thakhi `concat("/en",http.request.uri.path,".htm")` ukanxa mayjt’ayañawa, kuna arutï thakhinchirinakaxa munapki ukaru.

## Baidu Intelligente Cloud Ukax Mä Configuración Ukaniwa

China continental uksar yanapt’añax wakisispa ukhax [Baidu Smart Cloud](//cloud.baidu.com) ukampiw apnaqasispa.

Datos ukax Baidu Objeto Almacenamiento ukaruw apkatata ukatx Red de Distribución de Contenidos Baidu ukaruw chint’ata.

Ukatxa [EdgeJS](//console.bce.baidu.com/cdn/#/cdn/ejs/list)

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
  // Jaskhiwi p’iqinchanakax mistuwinak askichañatakiw utt’ayasispa, kunjamatix out.XXX = 'MSG';
})
```

`Debug` ukxaru ch’iqt’aña, ukatxa taqpacha llikaru uñt’ayaña ch’iqt’aña.

![](//p.3ti.site/1725437754.avif)

## Nayraru Apnaqawi: Resolución Regional Ukarjama Trafico Ukanaka Jaljaña

China continental uksan servicios ukanakamp churañ munsta ukat ukhamarak `cloudflare` tráfico internacional gratuito ukar munsta ukhax `DNS` resolución regional ukamp apnaqasma.

Amuyt’añataki `cloudflare` [Huawei Cloud DNS](https://www.huaweicloud.com)

Walja trampas ukanakaw configuración `cloudflare` Akax mä qawqha puntos ukanakaw uñjasi :

### Dominio Sutix Yaqha `DNS` Ukanw Uñt’ayasi, Kunjams `cloudflare` Apnaqañax

Nayraqatax mä arbitrariu dominio suti `cloudflare` ukar chint’aña, ukatx `SSL/TLS` → dominio costumbre sutimp apnaqañaw jach’a dominio sutimp aka dominio sutimp chikt’ayañataki.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` Ukax Janiw Mä Costumbre Dominio Sutimpix Mantañjamäkiti

Kunatix lurat `cloudflare` ukan yänaka imañ `R2` janiw mä dominio sutimp uñt’ayat ukar mantañapakiti, mä kimsïr yänak imañ utax archivos estáticos ukar uñstayañatakix apnaqañaw wakisi.

`cloudflare` [backblaze.com](https://www.backblaze.com)

Mä cubo luraña `backblaze.com` , kuna qillqat apkataña, qillqat uñakipañataki ch’iqt’aña, ukatxa `Friendly URL` dominio suti apsuña, ukaxa `f003.backblazeb2.com` aka tuqina.

![](//p.3ti.site/1725440783.avif)

Dominio suti `CNAME` ukhat `f003.backblazeb2.com` ukar `cloudflare` ukar mayjt’ayaña ukat proxy ukar ch’amanchaña.

![](//p.3ti.site/1725440896.avif)

`cloudflare` de `SSL` → modalidad de encriptación ukar mayjt’ayaña, `Full` ukar uñt’ayaña

![](//p.3ti.site/1725438572.avif)

Jaqukipañ kamachi yapxataña kunjamatixa uñacht’ayata, nayraqataru uchaña (nayrïrixa juk’ampi jisk’a nayraru sartayaña):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` dinámico ajlliñani ukatxa `your_bucketname` en `concat("/file/your_bucketname",http.request.uri.path)` ukaru cubo sutiparu mayjt’ayaña.

Ukhamaraki, `cloudflare` jaqukipañ kamachinx `index.html` `file/your_bucketname/index.html` ukar mayjt’ayatawa, ukatx yaqha configuración ukanakax pachpakiw qhipararaki.

![](//p.3ti.site/1725441384.avif)