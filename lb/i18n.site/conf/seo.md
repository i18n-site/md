# Search Engine Optimization (Seo)

## Prinzip

`i18n.site` adoptéiert eng eenzeg Säitarchitektur déi net erfrëscht ass Fir d'Sichindexéierung ze erliichteren, gëtt eng separat statesch Säit an `sitemap.xml` generéiert fir Crawler ze kräischen.

Wann `User-Agent` vun der Zougangsufro vum Sichmotor Crawler benotzt gëtt, gëtt d'Ufro iwwer `302` op déi statesch Säit ëmgeleet.

Op statesche Säiten benotzt `link` fir Linken op verschidde Sproochversioune vun dëser Säit unzeginn, wéi z :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```

## Konfiguréieren Objektlagerung Fir Statesch Dateien Eropzelueden

Statesch Dateie kënnen lokal generéiert ginn, awer eng méi allgemeng Approche ass se op d'Objetlagerung eropzelueden.

Huelt d' `.i18n/htm/ol.yml` Konfiguratiounsdatei am Demo-Projet als Beispill

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

Ännert w.e.g. als éischt de Wäert vun `host:` uewen op Ärem Domain Numm, wéi `i18n.site` .

Dann, ännert `~/.config/i18n.site.yml` a füügt déi folgend Konfiguratioun un :

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

An der Konfiguratioun, ännert w.e.g. `i18n.site` op de Wäert vun `host:` an `.i18n/htm/ol.yml` , verschidde Objektgeschäfter kënnen ënner `s3` konfiguréiert ginn, an de `region` Feld ass fakultativ (vill Objektgeschäfter brauchen net dëst Feld ze setzen).

Da lafen `i18n.site -n` fir de Projet nei ze publizéieren.

Wann Dir `~/.config/i18n.site.yml` geännert hutt a wëllt nei eroplueden, benotzt w.e.g. de folgende Kommando am Projet Root Verzeechnes fir den Upload Cache ze läschen :

```
rm -rf .i18n/data/seo .i18n/data/public
```

## cloudflare Configuratioun

Domain Numm gehost [cloudflare](//www.cloudflare.com) .

### Konversioun Regelen

Füügt d'Konversiounsregele wéi hei ënnendrënner:

![](//p.3ti.site/1725436822.avif)

De Regelcode ass wéi follegt, ännert w.e.g. de Code "i18n.site" op Ären Domain Numm:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Cache Regelen

Füügt Cache Regele wéi follegt:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Redirect Regelen

Setzt d'Redirectiounsregele wéi follegt, ännert w.e.g. de Code "i18n.site" op Ären Domain Numm

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

`URL redirect` Wielt dynamesch Viruleedung, ännert w.e.g. `/en` am Viruleedungswee `concat("/en",http.request.uri.path,".htm")` op d'Standardsprooch déi Dir wëllt Sichmotoren enthalen.

## Baidu Intelligent Cloud Configuratioun

Wann Dir Servicer op Festland China ubidden musst, kënnt Dir [Baidu Smart Cloud](//cloud.baidu.com) benotzen.

D'Donnéeë ginn op Baidu Object Storage eropgelueden an un Baidu Content Distribution Network gebonnen.

Erstellt dann de Skript an [EdgeJS](//console.bce.baidu.com/cdn/#/cdn/ejs/list)

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

Klickt `Debug` , klickt dann op Publizéieren an de ganze Netz.

![](//p.3ti.site/1725437754.avif)

## Fortgeschratt Benotzung: Verdeelen Traffic Baséiert Op Regional Resolutioun

Wann Dir Servicer am Festland China ubidden wëllt an och `cloudflare` gratis internationale Verkéier wëllt, kënnt Dir `DNS` mat regionaler Resolutioun benotzen.

Zum Beispill, [Huawei DNS](https://www.huaweicloud.com) stellt gratis regional Analyse, mat deem Festland Chinese Traffic kann duerch Baidu Smart Cloud goen, an international Verkéier kann duerch `cloudflare` goen.

Et gi vill Falen an der Konfiguratioun vun `cloudflare` Hei sinn e puer Punkten ze notéieren :

### Den Domain Numm Gëtt an Aner `DNS` Gehost, Wéi Benotzt `cloudflare`

Bindt als éischt en arbiträren Domain Numm un `cloudflare` , a benotzt dann `SSL/TLS` → Benotzerdefinéiert Domain Numm fir den Haapt Domain Numm un dësen Domain Numm ze associéieren.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` Kann Net Iwwer E Personaliséierten Domain Numm Zougänglech Sinn

Well déi agebauten `cloudflare` `R2` net vun engem personaliséierten Domain Numm zougänglech ass, muss eng Drëtt Partei Objektlagerung benotzt ginn fir statesch Dateien ze placéieren.

[backblaze.com](https://www.backblaze.com) huelen mir e Beispill fir ze demonstréieren wéi een Drëtt-Partei-Objete verbënnt an se op `cloudflare` späichert.

Erstellt en Eemer bei `backblaze.com` , lued all Datei erop, klickt fir d'Datei ze duerchsichen, a kritt den Domain Numm vun `Friendly URL` , deen `f003.backblazeb2.com` hei ass.

![](//p.3ti.site/1725440783.avif)

Ännert den Domain Numm vun `CNAME` op `f003.backblazeb2.com` bei `cloudflare` an aktivéiert de Proxy.

![](//p.3ti.site/1725440896.avif)

Änneren `cloudflare` vun `SSL` → Verschlësselungsmodus, op `Full` gesat

![](//p.3ti.site/1725438572.avif)

Füügt d'Konversiounsregel un wéi hei ënnendrënner, setzt se als éischt (déi éischt huet déi niddregst Prioritéit):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` wielt dynamesch a ännert `your_bucketname` an `concat("/file/your_bucketname",http.request.uri.path)` op Ären Eemernumm.

Zousätzlech, an der `cloudflare` Konversiounsregel hei uewen, gëtt `index.html` op `file/your_bucketname/index.html` geännert, an aner Konfiguratiounen bleiwen déiselwecht.

![](//p.3ti.site/1725441384.avif)