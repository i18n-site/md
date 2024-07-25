# Instrue &

## Configurationis Indicium

`i18n.site` Instrumentum `i18` translatione infixa est, quaeso [hic strepita ut ad `i18` documentum referas ad signum accessum configurandum](/i18/use) .

## Install

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Demo Project

Incipiamus cum demo incepto ac discere uti `i18n.site`

Primum clone repositorium demo et imperium sic curritur:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Users in continenti Sinis possunt:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

`demo.i18n.site` Directorium nomen clone codicis basi `md` debet esse ad faciliorem loci praeviam cum `docker` .

### Translate

Primum intrant `md` et currunt `i18n.site` , quod interpretabitur `en` ad `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Post currentem, translationem `git add . ` fasciculi cache `md` .

### Loci Preview

Install and start `docker` ( `MAC` recommend using [orbstack](https://orbstack.dev) as the runtime of `docker` ).

Tum intrant `docker` et curre `./up.sh` et visita [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Post Content

`i18n.site`[​](https://developer.mozilla.org/docs/Glossary/SPA)

Post currendam translationem supra, `htm` et `v` directoria generabuntur in `md/out/dev` .

`.i18n/htm/dev.yml` , `dev`

`dev` :

`htm`

`v` Directorium contineat website contentum numero versionis.

Praevius localis omnia documenta ad `out/dev/v/0.1.0` cuiuscumque versionis numerum transcribere erit.

Officialis emissio, tabulae mutatae ad numerum directorium novae versionis transcribendae erunt.

#### -c Utere Ut Specificare Configuratione File

Diversae imaginum conformationes creabunt directoria debita sub `out` .

Exempli gratia `.i18n/htm/ol.yml` creabit `out/ol` directorium.

`dev.yml` et `ol.yml` sunt configurationes defaltae.

`dev` est abbreviatio `development` , quae evolutionis ambitum repraesentat , pro praeviso locali adhibetur , ac etiam fasciculi defaltae figurae est.
`ol` est abbreviatio `online` , quae in ambitu online repraesentat , pro missione officiali adhibetur , et etiam defalta configurationis fasciculi cum evulganda est `npm` utens linea praecepti parametri `-n` .

Alias ​​tabulas configurationis creare `--htm_conf` .

exempli gratia:
```
i18n.site --htm_conf yourConfig --save
```

Hic `--save`

#### <a rel=id href="#npm" id="npm"></a> Audire contenta npmjs.com

Contentus publici ad [npmjs.com](//npmjs.com) est suadetur default solutionis (vide [Front-end High Availability](/i18n.site/feature#ha) ).

##### npm login &

Instrue `nodejs` uti `npm login` ad log in.

Edit `md/.i18n/htm/ol.yml` muta `i18n.site` in `v: //unpkg.com/i18n.site` ad proprium tuum `npm` sarcina nomen.

Modo utere vacui sarcina nominis in [npmjs.com](//npmjs.com)

Cum `i18n.site` nititur in `npm` `/.v` **scito uti `//unpkg.com/`** pro praepositione valoris `v:` .

Curre `i18n.site --npm` vel `i18n.site -n` in `md` ad transferendum et edendum.

Si ambitum continuam integrationem edendi uteris, non opus est `~/.npmrc` eam instituas `nodejs`

Si nomen fasciculi in `ol.yml` mutare `v:` **scito prius `.i18n/v/ol` delere** et deinde illud ede .

##### Proxy

Si usores in continenti Sinis problemata retiacula concurrunt et `npm` edere nequeunt, ambitus variabilis `https_proxy` constituere possunt ut procuratorem configurare.

Posito quod procuratorem tuum port `7890` scribere potes;

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Contentus Auto-Hosted

Si vis `v: //unpkg.com/i18n.site` exercitus contentum, primum `v: //i18n-v.xxx.com` `md/.i18n/htm/ol.yml`

Intra in `md`

```
i18n.site --htm_conf ol --save
```

aut abbreviationem

```
i18n.site -c ol -s
```

Deinde configurare contentum in `md/out/ol/v` ad URL praepositionis iter in `v:` .

Denique **configurare tempus viae in `/.v` `1s`** , alioquin recenter emissus statim accedere non potest.

Latibulum tempus aliarum viarum ad unum annum vel amplius constitui potest ut necessarias petitiones minuat.

##### Exercitum Contentus Ad s3

Ad contentus sui exercitus + praeter utens tuo `CDN` , alia optio communis est utendi `S3`

Potes `S3` [rclone](https://rclone.org) Login `S3`

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Memento configurare `CDN` ut tempus latibulum viae desinentis in `/.v` `1s` sit, aliter contentus recenter emissus statim accedere non poteris.

### Publish Website

Pagina alicubi explicari potest [github page](https://pages.github.com) et [cloudflare page](https://pages.cloudflare.com) bonae electiones sunt.

Quia pagina architecturae [applicationis unius paginae](https://developer.mozilla.org/docs/Glossary/SPA) adoptat, memento rescribere `index.html` URL quae non continet `. `

Pagina ingressu solum necessario semel explicanda est, nec opus est ut paginam ingressu paginae redeployt pro contentis subsequentibus updates.

#### Deploy in github Pagina

Primum preme hic `i18n-demo` [github creare](https://github.com/account/organizations/new?plan=free) .

Deinde `i18n-demo` crea sub hac ordinatione `i18n-demo.github.io`

<img alt="" src="https://p.3ti.site/1721098657.avif">

Cum contenta in superiori articulo edens, : est `out/ol/htm`

```
ln -s index.html 404.html
```


Quia `github page` iter URL rescribentis non suscipit, ideo `404.html` loco ponitur.

Praeceptum sequens currite in `htm` (memini reponere `i18n-demo/i18n-demo.github.io.git` cum electronica propria CELLA) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Imposito codice, exspecta `github page` ad feliciter (ut infra patebit), et tunc accedere potes.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Pro demo pagina videbis:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Deploy in cloudflare Pagina

[cloudflare page](//pages.cloudflare.com) Comparatus `github page` iter rescribendi praebet et magis ad Sinas continenti amicabilius et expeditius est.

`cloudflare page` `github page`

Fac consilium et liga supra `i18n-demo.github.io`

Processus ostenditur in figura infra:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

Please `i18n-demo` `Add Account`

Si horreum alterius organizationis alligasti, bis necesse est `Add Account` id confirmes bis antequam nova institutio ostendetur.

<img alt="" src="https://p.3ti.site/1721118306.avif">

Proxima `Begin setup` `i18n-demo.github.io`

<img alt="" src="https://p.3ti.site/1721118490.avif">

Post primum alligandum, paucis minutis exspectare debes antequam ad eam accedere possis.

Post instruere, consuetum nomen domain obligare potes.

<img alt="" src="https://p.3ti.site/1721119459.avif">

Consuetum nomen domicilii post ligans, quaeso i ad nomen dominicum ad iter rescriptum unius paginae applicationis configurare, ut infra ostendetur:

<img alt="" src="https://p.3ti.site/1721119320.avif">

Regulae in tabula superiore haec sunt. Quaeso `i18n.site` in prima linea infra cum nomine regio tibi ligato.

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

Praeterea, quaeso, regulas caches configurare, ut infra ostendetur, et latibulum spatium ad unum mensem pone.

<img alt="" src="https://p.3ti.site/1721125111.avif">

Quaeso mutare nomen dominii matching in secundo gradu in pictura supra ad nomen domain ligatum.

#### Optimising Website Instruere in Continenti Sinis

Si vis ad meliorem accessibilitatem perficiendi in retis continentis Sinarum ambitu, primum [nomen fundi subcriptio](//beian.aliyun.com) , sis.

Tum utere `out/ol/htm` repositorium nubium venditorum in `CDN` Sinis +

Ora computando uti potes ad iter scribendo aptando ad singulas paginas applicationes, ut [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) Configurari potest sic:

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

Quia `MX` records ac `CNAME` records coexistere non possunt , si nomen domicilii nomen emails simul accipere vis , cooperari debes [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) scriptura ad sternendam `CNAME` in `A` recordum .

Praeterea, quod negotiatores transmarinae negotiatores nebulae in continenti Sinis relative pretiosae sunt, si sumptus optimize vis, [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) [Cloud uti potes DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) mercatura distringere──Traffic in continenti Sinis Baidu Cloud `CDN` negotiatio internationalis cloudflare accedit .

<img alt="" src="https://p.3ti.site/1721119788.avif">

Hae solutiones optimizationis instruere magis implicatae sunt et in singulis capitibus in futurum introduci.

#### Nomen Domain Nomen Generale Redirection

Si uteris `i18n.site` ad generandum website ut principale locum tuum, solere debes configurare redirectionem pan-domain, id est, redirect `*.xxx.com` (including `www.xxx.com` ) accessum ad `xxx.com` .

`EdgeScript` postulatio fieri / [ope](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) Alibabae [Cloud](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) `CDN`

Add a domain nomen in [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) et designare `*.xxx.com` nomen Alibaba Cloud `CDN` 's `CNAME` .

<img alt="" src="https://p.3ti.site/1721122000.avif">

Exempli gratia, nomen redirectionis pan-domain `*.i18n.site` in pictura supra est sic:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### Explicare Cum nginx

Quaeso adde configurationem similem sequenti in `server` nginx ubi `/root/i18n/md/out/ol/htm` placet eam mutare ad viam consilii tui `out/ol/htm` :

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Directory Structure

#### public

Paginae statice interretiales, ut `favicon.ico` `robots.txt` , etc.

The icon files here can be generated with [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n

`.i18n` Sub indicem sunt fasciculi configurationis `i18n.site` , cache translationem, etc. Vide proximum caput ["Configurationis"](/i18n.site/conf) pro singulis.

#### en

Fons directorium linguae, `.i18n/conf.yml` `fromTo` `en` in configuration file

```yaml
i18n:
  fromTo:
    en: zh
```

Quaeso ad configurationem translationis refer [i18](/i18/use)

