# Instruere and Online

`i18n.site` una [pagina applicationem architecturae adhibet](https://developer.mozilla.org/docs/Glossary/SPA) , ac pagina introitus paginae ac paginae paginae separatim explicantur.

Post translationem praedictam currens, directoria `htm` et `v` generabuntur sub `md/out/dev` directorio.

Hic, `dev` significat constructum ex fasciculo `.i18n/htm/dev.yml` configurationis.

`dev` presul :

`htm` directorium paginae introitus website est.

Index `v` pagina contenta numeris versionis continet.

Praevius localis de numero versionis non curat et omnia documenta ad `out/dev/v/0.1.0` directorium describet.

Officialis emissio, tabulae mutatae ad numerum directorium novae versionis transcribendae erunt.

## Denota Configuration File Cum `-c`

Diversae imaginum conformationes in directoriis `out` directoriis respondentes creabunt.

Exempli gratia, `.i18n/htm/main.yml` `out/main` directorium creabit.

`dev.yml` et `main.yml` figurarum default sunt.

`dev` est abbreviatio `development` , indicans evolutionis ambitum, loci praevisum adhibitum, ac etiam fasciculi configurationis default.
`ol` est abbreviatio `online` , `-n` ambitus online, quae ad missionem officialis adhibetur `npm`

Alias tabulas configurationis creare potes. Utere `--htm_conf` in linea mandati ut definias nomen limae configurationis utendi:

exempli gratia:
```
i18n.site --htm_conf dist --save
```

Hic `--save` significat numerum renovationis emissio versionis.

## <a rel=id href="#npm" id="npm"></a> Audire contenta npmjs.com

Contentus publici ad [npmjs.com](//npmjs.com) est suadetur default solutionis (vide [Front-end High Availability](/i18n.site/feature#ha) ).

### npm &

Install `nodejs` , ini cum `npm login` .

Edit `md/.i18n/htm/main.yml` et valorem [`md:`](//github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/main.yml#L7) `YOUR_NPM_PACKAGE` muta ut nomen tuum `npm` sarcina [npmjs.com](//npmjs.com)

Tum mutare `md/.i18n/htm/main.package.json`

Curre `i18n.site --npm` vel `i18n.site -n` in indice `md` ad transferendum et evulgandum.

Si ambitu continua integratione uteris ad publicandum, opus non est instituere `nodejs` Iustus effingo usores et libellos permissionum `~/.npmrc` rerum in ambitu.

Si sarcina nomen `v:` in `main.yml` mutare, **cave prius `.i18n/v/main` delere** et deinde illud ede.

#### Proxy

Si usores in continenti Sinis difficultates retis conveniant et `npm` sarcinas edere nequeant, ambitum variabilem `https_proxy` constituere possunt ut procuratorem configurare possit.

Posito quod procuratorem tuum porto servo `7890` sit, scribere potes:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

## Contentus Auto-Hosted

Si contentus sui exercitus vis, primum `md/.i18n/htm/main.yml` recensere et `v: //unpkg.com/i18n.site` in praepositionem tuam mutare, ut `v: //i18n-v.xxx.com` .

Intra in `md` directorium et procursu

```
i18n.site --htm_conf ol --save
```

aut abbreviationem

```
i18n.site -c ol -s
```

Deinde configurare contentum in indice `md/out/main/v` inscriptionis ad praefixum URL iter in `v:` .

Denique **configurare tempus latibulum semitae in `/.v` ad `1s` desinentis** , alioquin contentus recenter emissus statim accedere non potest.

Latibulum tempus aliarum viarum ad unum annum vel amplius constitui potest ut necessarias petitiones minuat.

## Exercitum Contentus Ad s3

Ad contentum hospitii sui, praeterquam utendo tuo servo, alia optio `CDN` `S3` utatur +

Potes utere [rclone](https://rclone.org) ut stipes in servo `S3` , deinde ad scriptam sequentia refer ac mitiganda, et tantum exemplar mutationes incrementales ad `S3` pro singulis emissio.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/main/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/main/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/main/v/.v "$s3:/$bucket/"
```

Memento configurare `CDN` ut tempus latibulum semitae in `/.v` desinentis `1s` sit, alioquin contentus recenter emissus statim accedere non potest.

## Publish Website

Pagina alicubi explicari potest [github page](https://pages.github.com) et [cloudflare page](https://pages.cloudflare.com) bonae electiones sunt.

Quia pagina [una pagina applicationis](https://developer.mozilla.org/docs/Glossary/SPA) architecturae utitur, memento rescribere semitas URL quae non continent `. ` ad `index.html` .

Pagina ingressu solum necessario semel explicanda est, nec opus est ut paginam ingressu paginae redeployt pro contentis subsequentibus updates.

### Deploy in github Pagina

Primum [preme hic github organizationem creare](https://github.com/account/organizations/new?plan=free) . Sequens ordo nomen est `i18n-demo` exemplum.

Tunc CELLA `i18n-demo.github.io` crea sub hac ordinatione (placere repone `i18n-demo` cum ordinatione nomen tuum creatum);

![](https://p.3ti.site/1721098657.avif)

Cum contenta in superiori articulo edis, `out/main/htm` generatum est :

```
ln -s index.html 404.html
```


Quia `github page` iter URL rescribentis non sustinet, `404.html` loco ponitur.

Sequens mandatum currite in directorio `htm` (memini reponere `i18n-demo/i18n-demo.github.io.git` cum inscriptione sua CELLA) :

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

### Deploy in cloudflare Pagina

[cloudflare page](//pages.cloudflare.com) Comparatus cum `github page` , iter rescribendi praebet et magis ad Sinas continenti amicabilius et expeditius est.

Instruere plerumque `cloudflare page` in instruere `github page` supra.

Fac consilium et liga `i18n-demo.github.io` warehouse supra.

Processus ostenditur in figura infra:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Please click `Add Account` to grant access to organization `i18n-demo` .

Si horreum alterius organizationis ligaveris, necesse est ut bis `Add Account` click auctorizare bis antequam nova institutio exhibeatur.

![](https://p.3ti.site/1721118306.avif)

Deinde, elige CELLA `i18n-demo.github.io` , deinde deprime `Begin setup` et utere valores defectus pro gradibus subsequentibus.

![](https://p.3ti.site/1721118490.avif)

Post primum alligandum, paucis minutis exspectare debes antequam ad eam accedere possis.

Post instruere, consuetum nomen domain obligare potes.

![](https://p.3ti.site/1721119459.avif)

Consuetum nomen domicilii post ligans, quaeso i ad nomen dominicum configurare iter rescribendi applicationis unius paginae, ut infra ostendetur:

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

### Optimising Website Instruere in Continenti Sinis

Si vis ad meliorem accessibilitatem perficiendi in retis continentis Sinarum ambitu, primum [nomen ditionis subcriptio](//beian.aliyun.com) placet.

Deinde `CDN` consilio `out/main/htm` mercatorum nubium in continenti China +

Ora computando uti potes ut viam rescribas ad applicationes ad singulas paginas accommodandas. Exempli gratia, [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) configurari potest sic:

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
  // Potes responsionem header ad output debug, ut out.XXX = 'MSG';
})
```

![](https://p.3ti.site/1721121273.avif)

Quia record `MX` et recordum `CNAME` coexistere non possunt, si nomen domicilii nomen emails simul recipere vis, cooperari debes cum [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) ut libra `CNAME` in recordum `A` .

Praeterea, quod negotiatores transmarinae negotiatores nebulae [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) continenti Sinis relative pretiosae sunt, si sumptus optimize vis, [Huawei Cloud uti potes DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) mercatura distringere──Traffic fuso in continenti Sinis Baidu Cloud `CDN` , mercatura internationalis cloudflare accedit.

![](https://p.3ti.site/1721119788.avif)

Hae solutiones optimizationis instruere magis implicatae sunt et in singulis capitibus in futurum introduci.

### Nomen Domain Nomen Generale Redirection

Si `i18n.site` uteris ad generandum locum in principali loco tuo, solere debes configurare redirectionem pan-domain, id est, redirectam accessum ad `*.xxx.com` (including `www.xxx.com` ) ad `xxx.com` .

Haec postulatio fieri potest ope Alibabae Cloud `CDN` `EdgeScript` ( [documentum Anglicum](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Sinica documentum](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Add the domain name in [Alibaba Cloud CDN](https://cdn.console.aliyun.com/domain/list) and point the domain name `*.xxx.com` `CNAME` in Alibaba Cloud `CDN` .

![](https://p.3ti.site/1721122000.avif)

Exempli gratia, nomen redirectionis pan-dominicae figurae `*.i18n.site` in imagine supra se habet:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

### Explicare Cum nginx

Quaeso adde configurationem similem `/root/i18n/md/out/main/htm` in `server` `out/main/htm` nginx

```
location / {
  root  /root/i18n/md/out/main/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

## Ex `github action` Continua Integratio

Ad sequentia referre potes ut configurare tuum `github action` :

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

Ut in configuratione videri potest, hic labor fluxus utitur cum ad ramum `main` et ramum `dist` impellitur.

Operis fluxus utetur lima configuratione respondentem nomini ramo ad documentum edendum. Hic, `.i18n/htm/main.yml` et `.i18n/htm/dist.yml` adhibebitur ut configurationis divulgationis respective.

Praecipua sequentia exercitia commendamus ad processum emissionis documenti:

Cum mutationes ad ramum impelluntur `main` , documentum utitur ut aedificandum et ad stationem praevius (praevius statio praesto est [github page](//pages.github.com) ).

Postquam confirmans documentum recte in situ praevisum esse, signum mergetur et impelletur ad ramum `dist` , et officialis constructio et instruere in online ibit.

Utique, supra processum exsequens plura scribendarum conformationes requirit.

Referre potes ad rem ipsam [github.com/fcdoc/doc](//github.com/fcdoc/doc/blob/main/.github/workflows/i18n.site.yml) pro scripting workflow.

`secrets.I18N_SITE_TOKEN` et `secrets.NPM_TOKEN` in configuratione require te variabiles secretas in basi codice configurare.

![](//p.3ti.site/1730970199.avif)

`I18N_SITE_TOKEN` [i18n.site/token](//i18n.site/token)

`NPM_TOKEN` signum edendi sarcinarum `npm` in configuratione [npmjs.com](//npmjs.com)

![](//p.3ti.site/1730969906.avif)


## Directory Structure

### `public`

Paginae staticae paginae, ut `favicon.ico` , `robots.txt` , etc.

The icon files here can be generated with [realfavicongenerator.net](https://realfavicongenerator.net)

### `.i18n`

Sub `.i18n` directorio sunt fasciculi configurationis, cache translationis, etc. de `i18n.site` Vide proximum caput ["Configurationis"](/i18n.site/conf) pro singulis.

### `en`

Fons directorium linguae, respondens `en` of `fromTo` in `.i18n/conf.yml` fasciculi configurationis

```yaml
i18n:
  fromTo:
    en: zh
```

Quaeso ad configurationem translationis refer [i18](/i18/use)