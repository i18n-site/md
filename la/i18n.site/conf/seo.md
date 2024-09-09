# Search Engine Optimization (Seo)

## Principium

`i18n.site` una pagina architectura non reficit. Ut faciliorem indicens investigationem, paginam static separatam et `sitemap.xml` generabitur pro reptans ad repere.

Cum `User-Agent` accessus petitionis adhibeatur per quaero engine trahens, petitio ad paginam static per `302` redibit.

In paginis staticis, `link` utere ad indicandas nexus ad varias linguas huius paginae versiones, quales sunt :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```

## Configurare Object Repono Pro Imposuisti Static Files

Tabulae staticae localiter generari possunt, sed communior accessus est eas in tabulas repositas imponere.

Accipe `.i18n/htm/ol.yml` configuration file in demo project exemplum

```yml
host:
seo: true
out:
  - s3
v: //unpkg.com/i18n.site
x: 18x
importmap:
  i/: //unpkg.com/@i18n.site/
```

Quaeso, primum valorem `host:` supra ad nomen tuum domain modificare, ut `i18n.site` .

Deinde, `~/.config/i18n.site.yml` edite et sequentem configurationem adde :

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

In schemate, quaeso, `i18n.site` in valorem `host:` in `.i18n/htm/ol.yml` mutare, multae obiecti copiae sub `s3` configurari possunt, et `region` campus ad libitum (multi thesauri obiecti non indigent ut hunc agrum constituant).

Tunc currite `i18n.site -n` ad res publicandas.

Si modificatio `~/.config/i18n.site.yml` et vis ad re-inpositionem, quaeso utere sequenti imperio in directorio radicis projecti ad purgandum cache onerationis :

```
rm -rf .i18n/data/seo .i18n/data/public
```

## Nubemflare Configuratione

Domain name hosted to [cloudflare](//www.cloudflare.com)

### Conversio Praecepta

Adde regulas conversionis ut infra:

![](//p.3ti.site/1725436822.avif)

Regula Codicis talis est, quaeso, codicem "i18n.site" ad nomen domain tuum mutare:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Caching Praecepta

Addere cache praecepta haec sunt:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Redirect Praecepta

Praecepta directio constitue ut sequitur, codicem "i18n.site" mutare ad nomen tuum domain

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

`URL redirect` Select dynamicam redirectionem, quaeso `/en` in redirectionem mutare viam `concat("/en",http.request.uri.path,".htm")` ad linguam default quam vis investigationum machinarum includere.

## Baidu Intelligent Cloud Configurationis

Si officia in continenti Sinis praebere debes, [Baidu Smart Cloud](//cloud.baidu.com) uti potes.

Data est obiecta Baidu Objectum Repono et tenetur ad Baidu Content Distributio Network.

Tunc creare scriptum in [EdgeJS muneris](//console.bce.baidu.com/cdn/#/cdn/ejs/list) ut sequitur

```js
var uri=r.uri,p=uri.lastIndexOf('.');

if(
  p<0 || !/html?|css|rss|avif|md|ico|gz|js|json|png|svg|txt|webmanifest|xml/.test(uri.slice(p+1))
){
  const ua = r.headersIn['User-Agent'].toLowerCase();
  if (/facebookexternalhit|slurp|bot|spider|curl/.test(ua)) {
    r.return(302,(/baidu|yisou|sogou|360|byte/.test(ua)?'/zh':'/en')+r.uri+'.htm')
    return
  }
  r.uri = '/index.html'
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

Preme `Debug` , deprime Retiacula integra ad publicandum.

![](//p.3ti.site/1725437754.avif)

## Provectus Usus: Distribue Negotiationis Secundum Resolutionem Regionalem

Si officia in continenti Sinis praebere vis ac etiam `cloudflare` negotiatio internationalis libera, `DNS` cum resolutione regionali uti potes.

Exempli gratia, [Huawei DNS](https://www.huaweicloud.com) liberam praebet analysin regionalem, cum qua continenti Seres negotiatio per Baidu Smart Cloud ire potest, et negotiatio internationalis per `cloudflare` ire potest.

Multae insidiae in schemate de `cloudflare` Hic pauca notanda sunt :

### Nomen Domain Nomen Est in Aliis `DNS` , Uti `cloudflare`

Primum nomen dominii arbitrarium obligare ad `cloudflare` , ac deinde uti `SSL/TLS` → consuetudo domain nomen ut principale nomen domain nomen huic regioni adiungat.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` Non Potest Accessed Per Consuetudinem Domain Nomen

Quia `R2` accedere `cloudflare` a nativus dominii nomine, tertia pars obiecti repositionis necessario ad tabulas statas collocandas debet.

Hic [backblaze.com](https://www.backblaze.com) in exemplum demonstrandi quomodo ligandi res tertiae partis in `cloudflare` recondenda sint.

Situlam in `backblaze.com` crea, fasciculum quemlibet impone, preme ut tabellam browse, et nomen regio `Friendly URL` obtine, quod hic `f003.backblazeb2.com` est.

![](//p.3ti.site/1725440783.avif)

Mutare nomen dominii ab `CNAME` ad `f003.backblazeb2.com` ad `cloudflare` et procuratorem praesta.

![](//p.3ti.site/1725440896.avif)

Modificare `cloudflare` de `SSL` → encryption modus, pone ad `Full`

![](//p.3ti.site/1725438572.avif)

Regulam conversionis adde, ut infra, pone primo (primum habet infimum prioritatem);

![](//p.3ti.site/1725443232.avif)

`Rewrite to` eligere dynamicam et modificare `your_bucketname` in `concat("/file/your_bucketname",http.request.uri.path)` ad situlam nomini tuo.

Praeterea in regula `cloudflare` conversionis supra, `index.html` mutatur ad `file/your_bucketname/index.html` , et aliae figurationes eadem manent.

![](//p.3ti.site/1725441384.avif)