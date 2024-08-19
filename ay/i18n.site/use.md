# ¡Uñstayaña &

## Configuración Ukax Mä Chimpuwa

`i18n.site` ukax mä `i18` jaqukipañ herramienta ukaniwa, [aka tuqir ch’iqt’am `i18` qillqat uñakipañataki, ukhamat token ukar mantañataki](/i18/use) .

## Uchaña

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Proyecto Demostración Ukax Mä Jach’a Uñacht’äwiwa

Mä proyecto demostración ukamp qalltañäni, `i18n.site` apnaqañ yatxatañataki.

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

`demo.i18n.site` código base clon ukan directorio sutipax `md` ukhamäñapawa, ukhamat local preview `docker` ukamp jan ch’amäñapataki.

### Jaqukipaña

Nayraqatax `md` directorio ukar mantañamawa ukat `i18n.site` ukar t’ijt’añamawa, ukax `en` ukat `zh` jaqukipatawa.

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

T’ijtäwi tukuyatatxa, jaqukipaña ukhamaraki caché `git add . ` `md` directorio ukan imañ utar yapxatañ amtañamawa.

### Local Ukan Nayrïr Uñacht’äwipa

Instalación ukat qalltaña `docker` ( `MAC` apnaqirix [orbstack](https://orbstack.dev) apnaqañ iwxt’i kunjamatix `docker` ukatakix apnaqañ pacha).

Ukatxa, `docker` directorio ukar mantam ukat `./up.sh` ukar mantam, ukatx [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Contenido Uñt’ayaña

`i18n.site` mä [sapa pankan arquitectura de aplicación](https://developer.mozilla.org/docs/Glossary/SPA) ukaruw apnaqi, ukatx sitio web ukar mantañ panka ukat sitio web ukan contenido ukax independientemente uñstayatawa.

Aka pata jaqukipäwi apnaqañ tukuyatatxa, `htm` ukat `v` directorios ukanakax `md/out/dev` directorio ukan luratäniwa.

Aka chiqanx `dev` ukax `.i18n/htm/dev.yml` configuración archivo ukarjam luratawa sañ muni.

`dev` directorio :

`htm` directorio ukax sitio web ukar mantañ uñacht’äwiwa.

`v` directorio ukax sitio web ukan contenido ukan versión jakhunakampiw utji.

Local preview ukax janiw versión número ukat llakiskiti ukatx taqi archivonakax `out/dev/v/0.1.0` directorio ukar copiañapawa.

Oficial uñstayañatakix mayjt’at qillqatanakax machaq versión jakhunak directorio ukar copiatäniwa.

#### -c Ukampiw Wakicht’at Qillqat Uñacht’ayaña

Kunayman configuración qillqatanakax `out` directorio ukanx directorios correspondientes ukanakaw lurasini.

Amuyt’añataki, `.i18n/htm/ol.yml` `out/ol` directorio uñstayañapawa.

`dev.yml` ukat `ol.yml` ukax configuración predeterminada ukawa.

`dev` ukax `development` ukan jisk’a arupawa, ukax lurañ pacha uñacht’ayi, ukax local ukan nayrïr uñakipañatakiw apnaqasi, ukatx ukax configuración de configuración predeterminada ukhamarakiwa.
`ol` ukax `online` ukan abreviaturapawa, ukax en línea ukan pachap uñacht’ayi, ukax oficial ukan mistuñapatakiw apnaqasi Ukhamaraki, ukax parámetros de línea de comandos `-n` ukat `npm` ukar mistuñatakix apnaqatarakiwa.

Ukhamaraki yaqha wakicht’awi qillqatanaka lurañawa `--htm_conf` kamachina chimpumpi apnaqaña wakichawi qillqawi suti uñacht’ayañataki:

ukhama:
```
i18n.site --htm_conf yourConfig --save
```

Aka `--save` machaq uñstawi versión jakhu uñacht’ayi.

#### <a rel=id href="#npm" id="npm"></a> Contenido ukax npmjs.com ukar uñt’ayatawa

[npmjs.com](//npmjs.com)[](/i18n.site/feature#ha)

##### npm login & Antutaña

`nodejs` ukar mantañamawa, `npm login` ukampiw mantañama.

`md/.i18n/htm/ol.yml` chiqañchaña ukatxa `i18n.site` `v: //unpkg.com/i18n.site` ukaru mayjt’ayaña pachpa `npm` paquete sutimpi.

Ukhamakiwa jan jaqini paquete sutimpi apnaqañaxa sitio web dominio sutimpi kunjamatixa paquete sutimpi apnaqaña [npmjs.com](//npmjs.com)

Kunawsatix `npm` paquete ukarjam uñt’ayaski ukhax **`//unpkg.com/` ukax** `v:` valor prefijo ukatakix `i18n.site` ukax especialmente optimizado caché tiempo `/.v` uka prefijo thakhinx machaq mistuwinak pachapar uñjañatakiwa.

`md` directorio ukan `i18n.site --npm` jan ukax `i18n.site -n` t’ijt’ayañaw jaqukipañataki ukat uñt’ayañataki.

Uñt’ayañatakix mä sarantañ mayacht’asiñ pacha apnaqañamawa, janiw `nodejs` uñstayañax wakiskiti, ukakipkarakiw mantañ ukhamarak uñt’ayañ permisos `~/.npmrc` pachamamar copiaña.

Ukax `v:` ukan `ol.yml` ukan paquete sutip mayjt’ayatäni ukhaxa, **nayraqat `.i18n/v/ol` chhaqtayañaw wakisi** , ukatx uñt’ayañawa.

##### Servidor Proxy Ukax npm Ukan Uñt’ayatawa

China continental uksan apnaqirinakax red ukan jan walt’awinakamp jikxatasipk ukhax janiw `npm` paquetes ukar uñt’ayañ atkiti, jupanakax variable de medio ambiente `https_proxy` ukar proxy servidor ukar uñt’ayañatak utt’ayapxaspaw.

Proxy servidor puerto ukax `7890` ukhamawa sasin amuyt’asax akham qillqt’asma:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Jupa Pachpa Uñt’ayata Contenido

Uka contenido ukar auto-host lurañ munsta ukhax nayraqatax `md/.i18n/htm/ol.yml` editar ukat `v: //unpkg.com/i18n.site` ukar URL prefijo ukar mayjt’ayaña, kunjamatix `v: //i18n-v.xxx.com` .

`md` directorio ukar mantañamawa ukat t’ijt’añamawa

```
i18n.site --htm_conf ol --save
```

jan ukax abreviatura

```
i18n.site -c ol -s
```

Ukatxa, `md/out/ol/v` directorio ukan utjki ukanak URL prefijo thakhi `v:` ukan utt’ayat ukarjam wakicht’aña.

Tukuyañatakix, **thakhix `/.v` ukat `1s` ukjam tukuyañ thakhin caché pachap wakicht’aña** , jan ukhamäkanixa, jichhak uñstayat yänakax janiw jank’ak mantañjamäkiti.

Yaqha thakhinakatakix caché pachax mä mara jan ukax juk’ampiruw utt’ayasispa, jan wakiskir mayiwinak jisk’achañataki.

##### Contenido Ukax s3 Ukaruw Uñt’ayasi

Contenido auto-host ukatakixa, servidor apnaqañat sipansa, yaqha común `CDN` `S3` +

[rclone](https://rclone.org) `S3` `S3`

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Amtañani `CDN` ukar wakicht’aña ukhamat `/.v` ukan tukuyir thakhin caché pachapax `1s` ukhamäñapataki, jan ukhamäkanixa, jichhak apsutanakax janiw jank’ak mantañjamäkiti.

### Sitio Web Ukar Uñt’ayaña

Sitio web ukax kawkhans uñstayasispawa [github page](https://pages.github.com) ukat [cloudflare page](https://pages.cloudflare.com) ukax aski ajlliwinakawa.

Kunatix sitio web ukax mä [sapa panka arquitectura de aplicación](https://developer.mozilla.org/docs/Glossary/SPA) uka apnaqi, amtañaniw URL thakhinak wasitat qillqt’aña, ukax janiw `. ` ukat `index.html` utjkiti.

Sitio web ukar mantañ pankax mä kutikiw uñstayañapa, ukatx janiw sitio web ukar mantañ pankax qhipa contenido ukar machaqar tukuyañatakix wasitat uñstayañax wakiskiti.

#### github Ukan Uñt’ayaña

[Nayraqatax github tuqir ch'iqt'am mä tama lurañatakix](https://github.com/account/organizations/new?plan=free) aka tantachäw sutix `i18n-demo` uñacht'äwiwa.

Ukatx aka tama taypinx `i18n-demo.github.io` almacén lurañaw ( `i18n-demo` lurat taman sutipampiw mayjt’ayañama):

![](https://p.3ti.site/1721098657.avif)

Nayra qillqatan qillqatanakap uñt’ayasaxa, `out/ol/htm` utji Aka directorio ukar mantam ukat :

```
ln -s index.html 404.html
```


Kunatix `github page` janiw URL thakhi wasitat qillqañ yanapt’kiti, `404.html` ukax uka lantix apnaqatawa.

Ukatxa aka kamachi `htm` directorio ukanxa phuqhañapawa (amtañani `i18n-demo/i18n-demo.github.io.git` ukarux pachpa almacén dirección ukamp turkañawa) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Código ukar ch’amanchañ tukuyasax, `github page` ukan uñstayawipax sum phuqhasiñapatakiw suyt’añama (kunjamtix akham uñacht’ayaski) janïr ukar mantañkama.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Demostración ukanx aka uñakipt’añäni:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### cloudflare Ukan Uñt’ayaña

[cloudflare page](//pages.cloudflare.com) `github page`

`cloudflare page` ukan uñstayawipax jilpachax `github page` ukan uñstayawiparjamaw uñakipata.

Mä proyecto luraña ukat `i18n-demo.github.io` almacén ukar uñt’ayaña.

Uka lurawixa aka uñacht’awina uñacht’ayatawa:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Ukhamaraki, `Add Account` ukxaru ch’iqt’aña, ukhamata `i18n-demo` tantachawiru mantañataki.

Yaqha organizacionan almacén ukar chint’atästa ukhaxa, `Add Account` pä kuti ch’iqt’añaw wakisispa pä kuti autorizañatakix janïr machaq tama uñacht’ayañkama.

![](https://p.3ti.site/1721118306.avif)

Ukxarusti, almacén `i18n-demo.github.io` ukxa ajlliñamawa, ukatxa `Begin setup` ukxaru ch’iqt’añamawa, ukatxa qhipa lurawinakatakixa valores predeterminados ukampi apnaqañawa.

![](https://p.3ti.site/1721118490.avif)

Nayrïr kuti encuadernación tukuyasaxa, mä qhawqha minutonakaw suytʼañama, janïr ukar mantañkama.

Uñstayañ tukuyatatxa, mä dominio sutimpiw uñt’ayasispa.

![](https://p.3ti.site/1721119459.avif)

Sapa uñt’at dominio sutimp chint’añ tukuyasax, mä panka apnaqañ thakhi wasitat qillqt’añ wakicht’añatakix dominio sutiruw sarañama, kunjamatix akham uñacht’ayaski ukhama:

![](https://p.3ti.site/1721119320.avif)

Aka pata jamuq uñacht’ayat `i18n.site` akhamawa.

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

![](https://p.3ti.site/1721125111.avif)

Ukhamaraki, payïr t’aqapanx dominio sutimp chikancht’asiwix mayjt’ayañamawa, ukax dominio sutimp chikancht’atawa.

#### China Continental Uksan Sitio Web Ukan Uñstayawip Sum Apnaqaña

China continental uksan red ukan medio ambiente ukan juk’amp suma accesibilidad ukar puriñ munsta ukhax nayraqat [mä dominio suti qillqantañamawa](//beian.aliyun.com) .

Ukatxa, China continental uksan cloud aljirinakax objetos almacenamiento + apnaqañamawa `CDN` Aka contenido ukar uñt’ayaña `out/ol/htm` .

Ukax edge computing ukampiw thakhi wasitat qillqt’añatakix apnaqasispa, mä panka aplicacionanakar adaptañataki Sañäni, [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) akham wakicht’asispawa:

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

Kunatix registro `MX` ukat registro `CNAME` janiw mayacht’asis utjkaspati, jumatix correo electrónico de dominio sutinak pachpa pachan katuqañ munsta ukhax [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) ukampiw yanapt’asiñama nivel `CNAME` ukar registro `A` ukar puriñkama.

Ukhamarus, kunatix China continental uksan cloud aljirinakax anqäx markan cargos de tráfico ukax mä juk’a jila chaniniwa, jumatix qullqinak sum apnaqañ munsta ukhax [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) [Cloud DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) desviación de tráfico──China continental uksan tráfico Baidu Cloud `CDN` , tráfico internacional ukax cloudflare .

![](https://p.3ti.site/1721119788.avif)

Aka soluciones de optimización de despliegue ukax juk’amp ch’amäxiwa ukatx jutïrinx sapa mayni jaljanakanw uñt’ayasini.

#### Dominio Genérico Suti Mayjt’ayaña

Mä sitio web jach’a sitio web ukham lurañatakix `i18n.site` apnaqañax, jilpachax redirección pan-dominio ukar wakicht’añaw wakisi, mä arunx `*.xxx.com` ( `www.xxx.com` ukamp chika) `xxx.com` ukar mantañax mayjt’ayañawa.

Aka mayiwix Alibaba Cloud `CDN` `EdgeScript` ( [inglés documento](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [documento chino](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ) ukan yanapt'apampiw phuqhasispa.

[Alibaba CDN](https://cdn.console.aliyun.com/domain/list) ukan dominio sutip yapxataña ukat Alibaba Cloud `CDN` ukan dominio suti `*.xxx.com` ukat `CNAME` uñacht'ayaña.

![](https://p.3ti.site/1721122000.avif)

Amuyt’añataki, pan-dominio suti redirección configuración `*.i18n.site` ukax akham uñacht’ayatawa:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

#### nginx Ukampiw Uñt’ayasi

`/root/i18n/md/out/ol/htm` configuración ukar uñtasit `server` `out/ol/htm` nginx

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Directorio Ukana Lurawipa

#### `public`

Sitio web ukan archivos estáticos ukanakax `favicon.ico` , `robots.txt` , ukat juk’ampinaka.

Aka chiqan icono qillqatanakax [realfavicongenerator.net](https://realfavicongenerator.net)

#### `.i18n`

`.i18n` directorio ukanxa configuración archivonaka, jaqukipaña caché, juk ampinaka `i18n.site` Jutïr jalja ["Configuración"](/i18n.site/conf) uñakipt’aña juk’ampi yatxatañataki.

#### `en`

Fuente aru directorio, ukax `en` de `fromTo` en `.i18n/conf.yml` configuración arxiwu ukar uñtasitawa

```yaml
i18n:
  fromTo:
    en: zh
```

Uñakipt’añatakix configuración de traducción [i18](/i18/use)