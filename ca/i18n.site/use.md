# Instal·Leu &

## Fitxa De Configuració

`i18n.site` té una eina de traducció integrada `i18` Feu [clic aquí per consultar el document `i18` per configurar el testimoni d'accés](/i18/use) .

## Instal·Lar

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Projecte De Demostració

Comencem amb un projecte de demostració per aprendre a utilitzar `i18n.site` .

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

El nom del directori del clon de base de codi `demo.i18n.site` ha de ser `md` per facilitar la previsualització local amb `docker` .

### Traduir

Primer, introduïu el directori `md` i executeu `i18n.site` , que es traduirà `en` a `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Després d'executar-se, es generaran fitxers de traducció i memòria cau, recordeu afegir `git add . ` al repositori al directori `md` .

### Vista Prèvia Local

Instal·leu i inicieu `docker` ( `MAC` usuari recomana utilitzar [orbstack](https://orbstack.dev) com a temps d'execució per a `docker` ).

A continuació, introduïu el directori `docker` i executeu `./up.sh` i, a continuació, visiteu [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Publica Contingut

`i18n.site` adopta una arquitectura [d'aplicació d'una sola pàgina](https://developer.mozilla.org/docs/Glossary/SPA) i la pàgina d'entrada del lloc web i el contingut del lloc web es despleguen de manera independent.

Després d'executar la traducció anterior, els directoris `htm` i `v` es generaran sota el directori `md/out/dev` .

Aquí, `dev` significa que està construït a partir del fitxer de configuració `.i18n/htm/dev.yml` .

`dev` directori :

El directori `htm` és la pàgina d'entrada del lloc web.

El directori `v` conté contingut del lloc web amb números de versió.

La previsualització local no li importa el número de versió i copiarà tots els fitxers al directori `out/dev/v/0.1.0` .

Per al llançament oficial, els fitxers modificats es copiaran al directori de números de versió nou.

#### Utilitzeu -c Per Especificar El Fitxer De Configuració

Diferents fitxers de configuració crearan els directoris corresponents al directori `out` .

Per exemple, `.i18n/htm/ol.yml` crearà el directori `out/ol` .

`dev.yml` i `ol.yml` són les configuracions per defecte.

`dev` és l'abreviatura d' `development` , que indica l'entorn de desenvolupament, utilitzat per a la previsualització local, i també és el fitxer de configuració predeterminat.
`ol` és l'abreviatura d' `online` , que indica l'entorn en línia, que s'utilitza per al llançament oficial. També és el fitxer de configuració predeterminat quan s'utilitzen els paràmetres de la línia d'ordres `-n` al `npm` .

També podeu crear altres fitxers de configuració Utilitzeu `--htm_conf` a la línia d'ordres per especificar el nom del fitxer de configuració que voleu utilitzar.

per exemple:
```
i18n.site --htm_conf yourConfig --save
```

Aquí `--save` representa el número de versió de la versió de l'actualització.

#### <a rel=id href="#npm" id="npm"></a> Publicar contingut a npmjs.com

Publicar contingut a [npmjs.com](//npmjs.com) és la solució predeterminada recomanada (vegeu [Alta disponibilitat frontal](/i18n.site/feature#ha) ).

##### npm login & Alliberament

Instal·leu `nodejs` , inicieu sessió amb `npm login` .

Editeu `md/.i18n/htm/ol.yml` i canvieu `i18n.site` en `v: //unpkg.com/i18n.site` pel vostre propi nom de paquet `npm` .

Només cal que utilitzeu el nom del paquet desocupat a [npmjs.com](//npmjs.com)

Quan publiqueu en funció del paquet `npm` , **assegureu-vos d'utilitzar `//unpkg.com/` per** al prefix d' `v:` , el valor `i18n.site` ha optimitzat especialment el temps de memòria cau de `/.v` en aquest camí del prefix per aconseguir una visualització oportuna de les noves versions.

Executeu `i18n.site --npm` o `i18n.site -n` al directori `md` per traduir i publicar.

Si utilitzeu un entorn d'integració contínua per publicar, no cal que instal·leu `nodejs` Només cal que copieu els permisos d'inici de sessió i de publicació `~/.npmrc` a l'entorn.

Si modifiqueu el nom del paquet d' `v:` a `ol.yml` , **assegureu-vos d'eliminar primer `.i18n/v/ol`** i després de publicar-lo.

##### Servidor Intermediari Publicat Per npm

Si els usuaris de la Xina continental tenen problemes de xarxa i no poden publicar paquets `npm` , poden establir la variable d'entorn `https_proxy` per configurar el servidor intermediari.

Suposant que el port del vostre servidor intermediari és `7890` , podeu escriure:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Contingut Autoallotjat

Si voleu allotjar el contingut, primer editeu `md/.i18n/htm/ol.yml` i canvieu `v: //unpkg.com/i18n.site` pel prefix d'URL, com ara `v: //i18n-v.xxx.com` .

Introduïu el directori `md` i executeu

```
i18n.site --htm_conf ol --save
```

o abreviatura

```
i18n.site -c ol -s
```

A continuació, configureu el contingut del directori `md/out/ol/v` amb la ruta del prefix d'URL establerta a `v:` .

Finalment, **configureu el temps de memòria cau del camí que acaba en `/.v` a `1s`** , en cas contrari, no es pot accedir immediatament al contingut recent publicat.

El temps de memòria cau per a altres camins es pot establir en un any o més per reduir les sol·licituds innecessàries.

##### Allotjament De Contingut a s3

Per allotjar contingut, a `CDN` d'utilitzar el vostre propi servidor, una altra opció habitual és utilitzar `S3` +

Podeu utilitzar [rclone](https://rclone.org) per iniciar sessió al servidor `S3` , consultar i modificar l'script següent i només copiar els canvis incrementals a `S3` per a cada llançament.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Recordeu configurar `CDN` de manera que el temps de memòria cau del camí que acaba en `/.v` sigui `1s` , en cas contrari no es pot accedir immediatament al contingut acabat de publicar.

### Publicar Lloc Web

El lloc web es pot desplegar a qualsevol lloc [github page](https://pages.github.com) i [cloudflare page](https://pages.cloudflare.com) són bones opcions.

Com que el lloc web utilitza una arquitectura [d'aplicació d'una sola pàgina](https://developer.mozilla.org/docs/Glossary/SPA) , recordeu de reescriure els camins d'URL que no continguin `. ` a `index.html` .

La pàgina d'entrada del lloc web només s'ha de desplegar una vegada i no cal tornar a desplegar la pàgina d'entrada del lloc web per a actualitzacions de contingut posteriors.

#### Desplega a La Pàgina github

Primer [feu clic github per crear una organització](https://github.com/account/organizations/new?plan=free) . El nom de l'organització següent és `i18n-demo` .

A continuació, creeu el magatzem `i18n-demo.github.io` sota aquesta organització (substituïu `i18n-demo` pel nom de l'organització que heu creat):

![](https://p.3ti.site/1721098657.avif)

En publicar el contingut de l'article anterior, s'ha generat `out/ol/htm` Si us plau, introduïu aquest directori i executeu :

```
ln -s index.html 404.html
```


Com que `github page` no admet la reescriptura del camí d'URL, s'utilitza `404.html` .

A continuació, executeu l'ordre següent al directori `htm` (recordeu substituir `i18n-demo/i18n-demo.github.io.git` per la vostra pròpia adreça de magatzem) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Després d'empènyer el codi, espereu que el desplegament de `github page` s'executi correctament (com es mostra a continuació) abans de poder accedir-hi.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Per a la pàgina de demostració, consulteu:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Desplega a La Pàgina De cloudflare

En comparació amb [cloudflare page](//pages.cloudflare.com) , proporciona una reescriptura de ruta i és més amigable amb `github page` Xina continental i és més accessible.

El desplegament de `cloudflare page` normalment es basa en el desplegament de `github page` anterior.

Creeu un projecte i lligueu el magatzem `i18n-demo.github.io` anterior.

El procés es mostra a la figura següent:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Feu clic a `Add Account` per concedir accés a l'organització `i18n-demo` .

Si heu lligat el magatzem d'una altra organització, és possible que hàgiu de fer clic `Add Account` dues vegades per autoritzar dues vegades abans que es mostri la nova organització.

![](https://p.3ti.site/1721118306.avif)

A continuació, seleccioneu magatzem `i18n-demo.github.io` , feu clic a `Begin setup` i utilitzeu els valors predeterminats per als passos posteriors.

![](https://p.3ti.site/1721118490.avif)

Després de l'enllaç per primera vegada, heu d'esperar uns minuts abans de poder accedir-hi.

Després del desplegament, podeu vincular un nom de domini personalitzat.

![](https://p.3ti.site/1721119459.avif)

Després d'enllaçar el nom de domini personalitzat, aneu al nom de domini per configurar la reescriptura del camí de l'aplicació d'una sola pàgina, tal com es mostra a continuació:

![](https://p.3ti.site/1721119320.avif)

Les regles de la imatge superior són les següents. Si us plau, substituïu `i18n.site` de la primera línia de sota amb el nom de domini que heu vinculat.

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

A més, configureu les regles de la memòria cau, tal com es mostra a continuació, i configureu la durada de la memòria cau en un mes.

![](https://p.3ti.site/1721125111.avif)

Si us plau, canvieu el nom de domini que coincideix en el segon pas de la imatge superior pel nom de domini que heu vinculat.

#### Optimització Del Desplegament De Llocs Web a La Xina Continental

Si voleu obtenir un millor rendiment d'accessibilitat a l'entorn de xarxa de la Xina continental, [registreu primer un nom de domini](//beian.aliyun.com) .

A continuació, utilitzeu l'emmagatzematge d'objectes dels venedors de núvol a `out/ol/htm` Xina continental + Desplegueu el contingut següent `CDN` .

Podeu utilitzar l'edge computing per reescriure el camí per adaptar-lo a aplicacions d'una sola pàgina. Per exemple, [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) es pot configurar així:

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

Com que `CNAME` registre `MX` i el registre `CNAME` no poden `A` , si voleu rebre correus electrònics de nom de domini al mateix temps, heu de cooperar amb l'script [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten)

A més, com que els càrrecs de trànsit a l'estranger dels venedors de núvols a la Xina continental són relativament cars, si voleu optimitzar els costos, podeu utilitzar [la resolució geogràfica gratuïta de Huawei DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) i el nom de domini personalitzat de [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (com es mostra a continuació). desviació del trànsit──Trànsit a la Xina continental Baidu Cloud `CDN` , el trànsit internacional va cloudflare .

![](https://p.3ti.site/1721119788.avif)

Aquestes solucions d'optimització de desplegament són més complexes i s'introduiran en capítols separats en el futur.

#### Redirecció Genèrica De Noms De Domini

Si utilitzeu `i18n.site` per generar un lloc web com a lloc web principal, normalment haureu de configurar la redirecció pandomini, és a dir, redirigir l'accés a `*.xxx.com` (inclòs `www.xxx.com` ) a `xxx.com` .

Aquest requisit es pot aconseguir amb l'ajuda d'Alibaba Cloud `CDN` `EdgeScript` ( [document en anglès](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [document xinès](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Afegeix el nom de domini a [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) i apunta el nom de domini `*.xxx.com` a `CNAME` a Alibaba Cloud `CDN` .

![](https://p.3ti.site/1721122000.avif)

Per exemple, la configuració de redirecció de noms de domini general de `*.i18n.site` a la imatge de dalt és la següent:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

#### Desplegueu Amb nginx

Si us plau, afegiu una configuració similar a la següent al paràgraf `server` de nginx Si us plau, canvieu `/root/i18n/md/out/ol/htm` al camí del vostre propi projecte `out/ol/htm` :

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

#### `public`

Fitxers estàtics del lloc web, com ara `favicon.ico` , `robots.txt` , etc.

Els fitxers d'icones aquí es poden generar amb [realfavicongenerator.net](https://realfavicongenerator.net)

#### `.i18n`

Sota el directori `.i18n` hi ha els fitxers de configuració, la memòria cau de traducció, etc. d' `i18n.site` Vegeu el següent capítol ["Configuració"](/i18n.site/conf) per a més detalls.

#### `en`

Directori de l'idioma font, corresponent al fitxer de configuració `en` d' `fromTo` en `.i18n/conf.yml`

```yaml
i18n:
  fromTo:
    en: zh
```

Consulteu la configuració de la traducció [i18](/i18/use)