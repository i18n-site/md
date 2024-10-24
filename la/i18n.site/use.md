# Instrue &

## Install

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Configurationis Indicium

`i18n.site` instrumentum translationis in `i18` constructum habet. Quaeso [preme hic ad documentum `i18` referre ad indicium accessum configurare](/i18/use) .

## Demo Project

Incipe cum demo project discendo uti `i18n.site` .

Primum repositorium clone demo et imperium sic curritur:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Users in continenti Sinis possunt:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

Directorium nomen clone basis `demo.i18n.site` codicis esse debet `md` ad faciliorem loci praevisionem cum `docker` .

### Translate

Primum, `md` directorium inire et `i18n.site` currere, quod `en` ad `zh` interpretabitur.

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Post `md` , translationes `git add . ` fasciculi cache generabuntur.

### Loci Preview

Install and start `docker` ( `MAC` user recommends using [orbstack](https://orbstack.dev) as the runtime for `docker` ).

Deinde intrant `docker` directorium et curre `./up.sh` , et tunc visita [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Post Content

`i18n.site` una [pagina applicationem architecturae adhibet](https://developer.mozilla.org/docs/Glossary/SPA) , ac pagina introitus paginae ac paginae paginae separatim explicantur.

Post translationem praedictam currens, directoria `htm` et `v` generabuntur sub `md/out/dev` directorio.

Hic, `dev` significat constructum ex fasciculo `.i18n/htm/dev.yml` configurationis.

`dev` presul :

`htm` directorium paginae introitus website est.

Index `v` pagina contenta numeris versionis continet.

Praevius localis de numero versionis non curat et omnia documenta ad `out/dev/v/0.1.0` directorium describet.

Pro missione officialis, tabulae mutatae ad numerum directorium novae versionis transcribendae erunt.

#### Specificare Configuratione Lima Cum `-c`

Diversae imaginum conformationes in directoriis `out` directoriis respondentes creabunt.

Exempli gratia, `.i18n/htm/ol.yml` `out/ol` directorium creabit.

`dev.yml` et `ol.yml` figurarum default sunt.

`dev` est abbreviatio `development` , indicans evolutionis ambitum, loci praevisum adhibitum, ac etiam fasciculi configurationis default.
`ol` est abbreviatio `online` , indicans ambitum online, quae emissio officialis adhibetur. Est etiam defalta configurationis fasciculi cum utens parametris `-n` ad `npm` lineam imperandi solvendi.

Alias tabulas configurationis creare potes. Utere `--htm_conf` in linea mandati ad designandum nomen lima utendi:

exempli gratia:
```
i18n.site --htm_conf yourConfig --save
```

Hic `--save` significat numerum renovationis emissio versionis.

#### <a rel=id href="#npm" id="npm"></a> Audire contenta npmjs.com

Contentus publici ad [npmjs.com](//npmjs.com) est suadetur default solutionis (vide [Front-end High Availability](/i18n.site/feature#ha) ).

##### npm login &

Install `nodejs` , ini cum `npm login` .

Edit `md/.i18n/htm/ol.yml` et valorem [`md:`](//github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/ol.yml#L7) `YOUR_NPM_PACKAGE` muta ut nomen tuum `npm` sarcina [npmjs.com](//npmjs.com)

Tum mutare `md/.i18n/htm/ol.package.json`

Curre `i18n.site --npm` vel `i18n.site -n` in indice `md` ad transferendum et evulgandum.

Si ambitu continua integratione uteris ad edendum, non opus est instituere `nodejs` , solum copiam initium et licentiam evulgandi `~/.npmrc` in ambitu.

Si sarcina nomen `v:` in `ol.yml` mutare, **cave prius `.i18n/v/ol` delere** et deinde illud ede.

##### Procuratorium Servo Editum Ab npm

Si usores in continenti Sinis difficultates retis conveniant et `npm` sarcinas edere nequeant, ambitum variabilem `https_proxy` constituere possunt ut procuratorem configurare possit.

Posito quod procuratorem tuum porto servo `7890` sit, scribere potes:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Contentus Auto-Hosted

Si contentus sui exercitus vis, primum `md/.i18n/htm/ol.yml` recensere et `v: //unpkg.com/i18n.site` in praepositionem URL tuam mutare, ut `v: //i18n-v.xxx.com` .

Intra in `md` directorium et procursu

```
i18n.site --htm_conf ol --save
```

aut abbreviationem

```
i18n.site -c ol -s
```

Deinde configurare contentum in indice `md/out/ol/v` inscriptionis ad praefixum URL iter in `v:` .

Denique **configurare tempus latibulum semitae in `/.v` ad `1s` desinentis** , alioquin contentus recenter emissus statim accedere non potest.

Latibulum tempus aliarum viarum ad unum annum vel amplius constitui potest ut necessarias petitiones minuat.

##### Exercitum Contentus Ad s3

Ad contentum hospitii sui, praeterquam utendo tuo servo, alia optio `CDN` `S3` utatur +

Potes utere [rclone](https://rclone.org) ut stipes in servo `S3` , deinde ad scriptam sequentia refer ac mitiganda, et tantum exemplar mutationes incrementales ad `S3` pro singulis emissio.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Memento configurare `CDN` ut tempus latibulum semitae in `/.v` desinentis `1s` sit, alioquin contentus recenter emissus statim accedere non potest.

### Publish Website

Pagina alicubi explicari potest [github page](https://pages.github.com) et [cloudflare page](https://pages.cloudflare.com) bonae electiones sunt.

Quia pagina [una pagina applicationis](https://developer.mozilla.org/docs/Glossary/SPA) architecturae utitur, memento rescribere semitas URL quae non continent `. ` ad `index.html` .

Pagina introitus Paginae tantum semel explicari debet, et non opus est paginam ingressu paginae redeploy pro contentis subsequentibus updates.

#### Deploy in github Pagina

Primum [preme hic github organizationem creare](https://github.com/account/organizations/new?plan=free) . Sequens ordo nomen est `i18n-demo` exemplum.

Tunc CELLA `i18n-demo.github.io` crea sub hac ordinatione (placere repone `i18n-demo` cum ordinatione nomen tuum creatum);

![](https://p.3ti.site/1721098657.avif)

Cum contenta in superiori articulo edis, `out/ol/htm` generatum est :

```
ln -s index.html 404.html
```


Quia `github page` iter URL rescribentis non sustinet, `404.html` loco ponitur.

Sequens mandatum currite in directorio `htm` (memini reponere `i18n-demo/i18n-demo.github.io.git` cum inscriptione propria CELLA) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Imposito codice, exspecta instruere `github page` ut feliciter (ut infra patebit) antequam ad illum accedere possis.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Pro demo pagina videbis:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Deploy in cloudflare Pagina

[cloudflare page](//pages.cloudflare.com) Comparatus cum `github page` , iter rescribendi praebet et magis ad Sinas continenti amicabilius et expeditius est.

Instruere plerumque `cloudflare page` in instruere `github page` supra.

Fac consilium et liga `i18n-demo.github.io` warehouse supra.

Processus ostenditur in figura infra:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Please click `Add Account` to grant access to organization `i18n-demo` .

Si horreum alterius organizationis ligaveris, bis necesse est ut `Add Account` bis strepat ut auctorizare debeas antequam nova institutio ostendetur.

![](https://p.3ti.site/1721118306.avif)

Deinde, elige CELLA `i18n-demo.github.io` , deinde deprime `Begin setup` et utere valores defectus pro gradibus subsequentibus.

![](https://p.3ti.site/1721118490.avif)

Post primum ligamen, pauca minuta expectare debes antequam ad eam accedere possis.

Post instruere, consuetum nomen domain ligare potes.

![](https://p.3ti.site/1721119459.avif)

Consuetum nomen domicilii post ligans, quaeso i ad nomen dominicum ad iter rescriptum unius paginae applicationis configurare, ut infra ostendetur:

![](https://p.3ti.site/1721119320.avif)

Regulae in pictura superiore haec sunt. Quaeso `i18n.site` in prima linea infra, cum nomine regio ligabis, restitue.

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

Praeterea, quaeso, regulas caches configurare, ut infra ostendetur, et latibulum spatium ad unum mensem pone.

![](https://p.3ti.site/1721125111.avif)

Quaeso mutare nomen dominii matching in secundo gradu in pictura supra ad nomen domain ligatum.

#### Optimising Website Instruere in Continenti Sinis

Si vis ad meliorem accessibilitatem perficiendi in retis continentis Sinarum ambitu, primum [nomen fundi subcriptio](//beian.aliyun.com) , sis.

`CDN` utere consilio venditorum nubium `out/ol/htm` continenti China +

Ora computando uti potes ut viam rescribas ad applicationes ad singulas paginas accommodandas. Exempli gratia, [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) configurari potest sic:

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

Quia record `MX` et recordum `CNAME` coexistere non possunt, si nomen domicilii nomen emails simul recipere vis, cooperari debes cum [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) ut libra `CNAME` in recordum `A` .

Praeterea, quod negotiatores transmarinae negotiatores nebulae [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) continenti Sinis relative pretiosae sunt, si sumptus optimize vis, [Huawei Cloud uti potes DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) mercatura distringere──Traffic in continenti Sinis Baidu Cloud `CDN` , mercatura internationalis cloudflare accedit.

![](https://p.3ti.site/1721119788.avif)

Hae solutiones optimizationis instruere magis implicatae sunt et in singulis capitibus in futurum introduci.

#### Nomen Domicilii Genericum Amicus

Si `i18n.site` uteris ad generandum locum in principali loco tuo, solere debes configurare redirectionem pan-domain, id est, redirectam accessum ad `*.xxx.com` (including `www.xxx.com` ) ad `xxx.com` .

Haec postulatio fieri potest ope Alibabae Cloud `CDN` `EdgeScript` ( [documentum Anglicum](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Sinica documentum](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Add the domain name in [Alibaba Cloud CDN](https://cdn.console.aliyun.com/domain/list) and point the domain name `*.xxx.com` `CNAME` in Alibaba Cloud `CDN` .

![](https://p.3ti.site/1721122000.avif)

Exempli gratia, nomen redirectionis pan-domain figurae `*.i18n.site` in imagine supra sic est:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

#### Explicare Cum nginx

Quaeso adde configurationem similem `/root/i18n/md/out/ol/htm` in `server` `out/ol/htm` nginx

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

#### `public`

Tabulae staticae interretiales, ut `favicon.ico` , `robots.txt` , etc.

The icon files here can be generated with [realfavicongenerator.net](https://realfavicongenerator.net)

#### `.i18n`

Sub `.i18n` directorio sunt fasciculi configurationis, cache translationis, etc. de `i18n.site` Vide proximum caput ["Configurationis"](/i18n.site/conf) pro singulis.

#### `en`

Fons directorium linguae, respondens `en` of `fromTo` in `.i18n/conf.yml` fasciculi configurationis

```yaml
i18n:
  fromTo:
    en: zh
```

Quaeso ad configurationem translationis refer [i18](/i18/use)