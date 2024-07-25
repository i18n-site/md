# Instal·Leu &

## Fitxa De Configuració

L'eina de traducció `i18` està incrustada, feu clic aquí `i18n.site` [consultar el document `i18` per configurar el testimoni d'accés](/i18/use) .

## Instal·Lar

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Projecte De Demostració

Comencem amb un projecte de demostració i aprenem a utilitzar `i18n.site` lo.

Primer clonem el dipòsit de demostració i executem l'ordre de la següent manera:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Els usuaris de la Xina continental poden:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

El nom `docker` directori del clon de la base de codi ha de ser `md` per facilitar la previsualització local amb `demo.i18n.site` .

### Traduir

Primer, introduïu el `md` i executeu `i18n.site` , que es traduirà `en` a `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Després de l'execució, es generaran els fitxers de traducció i de memòria cau, recordeu-los afegir-los al repositori `git add . ` al directori `md`

### Vista Prèvia Local

Instal·leu i `docker` ( `MAC` recomanen utilitzar [orbstack](https://orbstack.dev) com a temps d'execució de `docker` ).

A continuació, introduïu el directori `docker` i executeu `./up.sh` i, a continuació, visiteu [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Publica Contingut

`i18n.site` Adopta una arquitectura [d'aplicació d'una sola pàgina](https://developer.mozilla.org/docs/Glossary/SPA) i la pàgina d'entrada i el contingut del lloc web es despleguen de manera independent.

Després d'executar la traducció anterior, es generaran els directoris `htm` i `v` al directori `md/out/dev`

Aquí, `dev` indica que es basa en el fitxer `.i18n/htm/dev.yml` .

Sota : `dev`

`htm` el directori hi ha la pàgina d'entrada al lloc web.

`v` El directori conté el contingut del lloc web amb el número de versió.

La vista prèvia local copiarà tots els fitxers al directori `out/dev/v/0.1.0` , independentment del número de versió.

Per al llançament oficial, els fitxers modificats es copiaran al directori de números de versió nou.

#### Utilitzeu -c Per Especificar El Fitxer De Configuració

Els diferents fitxers de configuració crearan els directoris corresponents al directori `out`

Per exemple `.i18n/htm/ol.yml` crearà un directori `out/ol` .

`dev.yml` i `ol.yml` són les configuracions per defecte.

`dev` és l'abreviatura de `development` , que representa l'entorn de desenvolupament, s'utilitza per a la previsualització local i també és el fitxer de configuració predeterminat.
`ol` l'abreviatura de `online` , que representa l'entorn en línia, s'utilitza per al llançament oficial i també és el fitxer de configuració predeterminat quan es publica a `npm` utilitzant el paràmetre de línia d'ordres `-n` .

També podeu crear altres fitxers de configuració Utilitzeu `--htm_conf` a la línia d'ordres per especificar el nom del fitxer de configuració:

per exemple:
```
i18n.site --htm_conf yourConfig --save
```

`--save` indica el número de versió de l'actualització.

#### <a rel=id href="#npm" id="npm"></a> Publicar contingut a npmjs.com

Publicar contingut a [npmjs.com](//npmjs.com) és la solució predeterminada recomanada (vegeu [Alta disponibilitat frontal](/i18n.site/feature#ha) ).

##### npm login & Alliberament

Instal·leu `nodejs` utilitzeu `npm login` per iniciar sessió.

Edita `md/.i18n/htm/ol.yml` canvia `i18n.site` a `v: //unpkg.com/i18n.site` pel teu `npm` nom del paquet.

Només cal que utilitzeu el nom del paquet desocupat a [npmjs.com](//npmjs.com)

Quan publiqueu en funció del paquet `npm` , **assegureu-vos d'utilitzar `//unpkg.com/`** com a prefix del valor `v:` . El temps de memòria cau `i18n.site` a sota d'aquest camí de prefix `/.v` s'ha optimitzat especialment per permetre la visualització oportuna de les noves versions.

Executeu `i18n.site --npm` o `i18n.site -n` al `md` per traduir i publicar.

Si utilitzeu un entorn d'integració contínua per publicar, no cal que l'instal·leu `nodejs` només cal que copieu el permís `~/.npmrc` d'inici de sessió i publicat a l'entorn.

Si modifiqueu el nom del paquet a `v:` `ol.yml` , **assegureu-vos d'eliminar `.i18n/v/ol` primer** i després de publicar-lo.

##### Servidor Intermediari Publicat Per npm

Si els usuaris de la Xina continental troben problemes de xarxa i no poden publicar el paquet `npm` , poden configurar la variable d'entorn `https_proxy` per configurar el servidor intermediari.

Suposant que el port del vostre servidor intermediari és `7890` podeu escriure:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Contingut Autoallotjat

Si voleu allotjar el contingut, primer, editeu `md/.i18n/htm/ol.yml` lo i canvieu `v: //unpkg.com/i18n.site` pel prefix d'URL, com ara `v: //i18n-v.xxx.com` .

Introduïu el directori `md`

```
i18n.site --htm_conf ol --save
```

o abreviatura

```
i18n.site -c ol -s
```

A continuació, configureu el contingut del directori `md/out/ol/v` amb el camí del prefix d'URL establert a `v:` .

Finalment, **configureu el temps de memòria cau del camí que acaba `1s` `/.v`**

El temps de memòria cau per a altres camins es pot establir en un any o més per reduir les sol·licituds innecessàries.

##### Allotjament De Contingut a s3

Per allotjar contingut, a més d'utilitzar `CDN` vostre propi servidor, una altra opció habitual és utilitzar `S3` +

Podeu utilitzar el servidor [rclone](https://rclone.org) Iniciar sessió `S3` consultar i modificar l'script a continuació, i només copiar els canvis incrementals a `S3` cada vegada que publiqueu.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Recordeu configurar `CDN` de manera que el temps de memòria cau del camí que acaba en `/.v` sigui `1s` , en cas contrari no podreu accedir immediatament al contingut acabat de publicar.

### Publicar Lloc Web

El lloc web es pot desplegar a qualsevol lloc [github page](https://pages.github.com) i [cloudflare page](https://pages.cloudflare.com) són bones opcions.

Com que el lloc web adopta l'arquitectura d' [una aplicació d'una sola pàgina](https://developer.mozilla.org/docs/Glossary/SPA) , recordeu que `index.html` `. `

La pàgina d'entrada del lloc web només s'ha de desplegar una vegada i no cal tornar a desplegar la pàgina d'entrada del lloc web per a actualitzacions de contingut posteriors.

#### Desplega a La Pàgina github

Primer [feu clic github per crear una organització](https://github.com/account/organizations/new?plan=free) `i18n-demo`

A continuació, creeu un magatzem sota aquesta organització `i18n-demo.github.io` si us plau, substituïu `i18n-demo` pel nom de l'organització que heu creat):

<img alt="" src="https://p.3ti.site/1721098657.avif">

Quan publiqueu el contingut de l'article anterior, s'ha generat `out/ol/htm` Si us plau, introduïu aquest directori i executeu :

```
ln -s index.html 404.html
```


Com `github page` no admet la reescriptura del camí d'URL, s'utilitza `404.html` .

A continuació, executeu l'ordre següent al directori `htm` (recordeu substituir `i18n-demo/i18n-demo.github.io.git` per la vostra pròpia adreça de magatzem) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Després d'empènyer el codi, espereu que el desplegament de `github page` s'executi correctament (com es mostra a continuació) i podreu accedir-hi.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Per a la pàgina de demostració, consulteu:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Desplega a La Pàgina De cloudflare

En comparació [cloudflare page](//pages.cloudflare.com) `github page` , proporciona una reescriptura de ruta i és més amigable amb la Xina continental i és més accessible.

`cloudflare page` El desplegament es basa normalment en el desplegament de `github page` anterior.

Crea un projecte i lliga el magatzem anterior `i18n-demo.github.io`

El procés es mostra a la figura següent:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

Si us plau `Add Account` feu clic per concedir accés a l' `i18n-demo` .

Si heu lligat el magatzem d'una altra organització, potser haureu de fer clic dues vegades per autoritzar `Add Account` lo dues vegades abans que es mostri la nova organització.

<img alt="" src="https://p.3ti.site/1721118306.avif">

A continuació `i18n-demo.github.io` seleccioneu Magatzem, feu clic a `Begin setup` i utilitzeu els valors predeterminats per als passos posteriors.

<img alt="" src="https://p.3ti.site/1721118490.avif">

Després de l'enllaç per primera vegada, heu d'esperar uns minuts abans de poder accedir-hi.

Després del desplegament, podeu vincular un nom de domini personalitzat.

<img alt="" src="https://p.3ti.site/1721119459.avif">

Després d'enllaçar el nom de domini personalitzat, aneu al nom de domini per configurar la reescriptura del camí de l'aplicació d'una sola pàgina, tal com es mostra a continuació:

<img alt="" src="https://p.3ti.site/1721119320.avif">

Les regles de la imatge superior són `i18n.site` següents.

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

A més, configureu les regles de la memòria cau, tal com es mostra a continuació, i configureu la durada de la memòria cau en un mes.

<img alt="" src="https://p.3ti.site/1721125111.avif">

Si us plau, canvieu el nom de domini que coincideix en el segon pas de la imatge superior pel nom de domini que heu vinculat.

#### Optimització Del Desplegament De Llocs Web a La Xina Continental

Si voleu obtenir un millor rendiment d'accessibilitat a l'entorn de xarxa de la Xina continental, [registreu primer un nom de domini](//beian.aliyun.com) .

`out/ol/htm` continuació, utilitzeu l'emmagatzematge d'objectes dels venedors del núvol a `CDN` Xina continental +

Podeu utilitzar l'edge computing per reescriure el camí per adaptar-lo a aplicacions d'una sola pàgina, com ara [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) Es pot configurar així:

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

Com `MX` els registres i `CNAME` registres no poden coexistir, si voleu rebre correus electrònics de noms de domini al mateix temps, heu de cooperar amb l'script per aplanar `CNAME` a `A` [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten)

A més, com que els càrrecs de trànsit a l'estranger dels venedors de núvols a la Xina continental són relativament cars, si voleu optimitzar els costos, podeu utilitzar [la resolució geogràfica gratuïta de Huawei DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) i el nom de domini personalitzat de [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (com es mostra a continuació). desviació del trànsit──Trànsit a la Xina continental Baidu Cloud `CDN` el trànsit internacional puja cloudflare .

<img alt="" src="https://p.3ti.site/1721119788.avif">

Aquestes solucions d'optimització de desplegament són més complexes i s'introduiran en capítols separats en el futur.

#### Redirecció Genèrica De Noms De Domini

Si utilitzeu `i18n.site` per generar un lloc web com a lloc web principal, normalment haureu de configurar la redirecció pan-domini, és a dir, redirigir l'accés `*.xxx.com` (incloent `www.xxx.com` ) a `xxx.com` .

Aquest requisit es pot aconseguir amb l'ajuda d'Alibaba Cloud `CDN` `EdgeScript` ( [document anglès](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Document xinès](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Afegiu un nom de domini a [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) i assenyaleu `*.xxx.com` nom de domini a Alibaba Cloud `CDN` `CNAME` .

<img alt="" src="https://p.3ti.site/1721122000.avif">

Per exemple, la configuració de redirecció de noms de domini panoràmic de la imatge superior és `*.i18n.site` següent:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### Desplegueu Amb nginx

Si us plau, afegiu una configuració similar a la següent `server` nginx on `/root/i18n/md/out/ol/htm` canvieu-la a la ruta del vostre propi projecte `out/ol/htm` :

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Estructura De Directoris

#### Públic

Fitxers estàtics del lloc web, com ara `favicon.ico` `robots.txt` , etc.

Els fitxers d'icones aquí es poden generar amb [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n

`.i18n` el directori hi ha `i18n.site` fitxers de configuració, la memòria cau de traducció, etc. Vegeu el següent capítol ["Configuració"](/i18n.site/conf) per a més detalls.

#### en

Directori de l'idioma font, corresponent `.i18n/conf.yml` `fromTo` `en` del fitxer de configuració

```yaml
i18n:
  fromTo:
    en: zh
```

Consulteu la configuració de la traducció [i18](/i18/use)

