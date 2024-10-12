# Panag-Optimisar Ti Makina Ti Panagsapul (Seo) .

## Prinsipio

`i18n.site` ket mangadaptar ti saan a panag-refresh a maymaysa a panid nga arkitektura Tapno mapasayaat ti panag-indeks ti panagbiruk, ti naisina nga estatiko a panid ken `sitemap.xml` ket mapataud para kadagiti agkarayam.

No `User-Agent` ti kiddaw ti panagserrek ket inus-usar babaen ti crawler ti makina ti panagbiruk, ti kiddaw ket maiturongto manen iti estatiko a panid babaen ti `302` .

Kadagiti estatiko a panid, usaren `link` tapno mangipakita kadagiti silpo kadagiti nadumaduma a bersion ti pagsasao iti daytoy a panid, a kas ti :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```

## Ikonfigura Ti Pagipempenan Ti Banag Para Iti Panagikarga Kadagiti Estatiko a File

Dagiti estatiko a papeles ket mabalin a mapataud iti lokal, ngem ti ad-adu a gagangay a wagas ket ti panangikarga kadagitoy iti pagipempenan ti banag.

Alaen ti `.i18n/htm/ol.yml` a file ti panagisaad iti proyekto ti demo a kas pagarigan

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

Pangngaasi nga umuna a baliwan ti pateg ti `host:` iti ngato iti nagan ti dominiom, a kas ti `i18n.site` .

Kalpasanna, i-edit `~/.config/i18n.site.yml` ken inayon ti sumaganad a konfigurasion :

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

Iti panagisaad, pangngaasi a baliwan `i18n.site` iti pateg ti `host:` iti `.i18n/htm/ol.yml` , dagiti adu a pagidulinan ti banag ket mabalin a maikonfigura iti baba `s3` , ken ti tay-ak ti `region` ket opsional (adu a pagidulinan ti banag ket saan a kasapulan a mangikeddeng iti daytoy a tay-ak).

Kalpasanna, tarayen ti `i18n.site -n` tapno maipablaak manen ti proyekto.

No binaliwam `~/.config/i18n.site.yml` ken kayatmo ti mangikarga manen, pangngaasi nga usarem ti sumaganad a bilin iti ramut a direktorio ti proyekto tapno maikkat ti cache ti panagikarga :

```
rm -rf .i18n/data/seo .i18n/data/public
```

## Konfigurasion Ti cloudflare

Nagan ti domain a naisangayan iti [cloudflare](//www.cloudflare.com)

### Paglintegan Ti Panagbalbaliw

Inayon dagiti pagannurotan ti panagbalbaliw kas naipakita iti baba:

![](//p.3ti.site/1725436822.avif)

Ti kodigo ti pagannurotan ket kastoy, pangngaasi a baliwam ti kodigo nga "i18n.site" iti nagan ti dominiom:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Dagiti Pagannurotan Ti Panag-Cache

Inayon dagiti pagannurotan ti cache kas iti sumaganad:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### I-Redirect Dagiti Pagannurotan

Itakderan dagiti pagalagadan ti panagiturong manen a kas ti sumaganad, pangngaasi a baliwam ti kodigo nga "i18n.site" iti nagan ti dominiom

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

`URL redirect` Pilien ti dinamiko a panagiturong manen, pangngaasi a baliwan ti `/en` iti dalan ti panagiturong manen `concat("/en",http.request.uri.path,".htm")` iti default a pagsasao a kayatmo nga iraman dagiti makina ti panagbiruk.

## Baidu Nasaririt a Konfigurasion Ti Ulep

No kasapulam ti mangipaay kadagiti serbisio iti mainland China, mabalinmo nga usaren [ti Baidu Smart Cloud](//cloud.baidu.com) .

Ti datos ket naikarga iti Baidu Object Storage ken naisilpo iti Baidu Content Distribution Network.

Kalpasanna, mangpartuat ti iskrip iti [EdgeJS edge service](//console.bce.baidu.com/cdn/#/cdn/ejs/list) kas iti sumaganad

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

I-click ti `Debug` , sa i-click ti Publish iti intero a network.

![](//p.3ti.site/1725437754.avif)

## Narang-Ay a Panagusar: Iwaras Ti Trapiko a Naibatay Iti Rehional a Resolusion

No kayatmo ti mangipaay kadagiti serbisio iti mainland China ken kayatmo met `cloudflare` a libre nga internasional a trapiko, mabalinmo nga usaren `DNS` nga addaan iti rehional a resolusion.

Kas pagarigan `cloudflare` [ti Huawei Cloud DNS](https://www.huaweicloud.com)

Adu dagiti silo iti konfigurasion ti `cloudflare` Adtoy ti sumagmamano a punto a laglagipen :

### Ti Nagan Ti Domain Ket Naisangayan Kadagiti Sabali a `DNS` , No Kasano Nga Usaren `cloudflare`

Umuna nga igalut ti arbitrario a nagan ti dominio iti `cloudflare` , ken kalpasanna usaren ti `SSL/TLS` → kostumbre a nagan ti dominio tapno mainaig ti kangrunaan a nagan ti dominio iti daytoy a nagan ti dominio.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` Ket Saan a Mabalin a Mastrek Babaen Ti Kostumbre a Nagan Ti Dominio

Gapu ta ti `cloudflare` a pagidulinan ti banag `R2` ket saan a mabalin a mastrek babaen ti naipasayaat a nagan ti dominio, ti maikatlo a partido a pagidulinan ti banag ket kasapulan a mausar a mangikabil kadagiti estatiko a papeles.

Ditoy nga alaentayo `cloudflare` [backblaze.com](https://www.backblaze.com)

Mangaramid ti timba iti `backblaze.com` , i-upload ti ania man a file, i-klik tapno ag-browse ti file, ken alaen ti domain name ti `Friendly URL` , nga isu ti `f003.backblazeb2.com` ditoy.

![](//p.3ti.site/1725440783.avif)

Baliwan ti nagan ti domain manipud iti `CNAME` agingga `f003.backblazeb2.com` iti `cloudflare` ken pagayatan ti proxy.

![](//p.3ti.site/1725440896.avif)

Baliwan `cloudflare` ti `SSL` → ti wagas ti panagenkripsio, naikabil iti `Full`

![](//p.3ti.site/1725438572.avif)

Inayon ti pagannurotan ti panagbalbaliw kas naipakita iti baba, iyun-una (ti umuna ket addaan iti kababaan a prioridad):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` pilien ti dinamiko ken baliwan ti `your_bucketname` iti `concat("/file/your_bucketname",http.request.uri.path)` iti nagan ti timbam.

Iti pay maipatinayon, iti pagannurotan ti panagbalbaliw `cloudflare` iti ngato, `index.html` ket nabaliwan iti `file/your_bucketname/index.html` , ken dagiti dadduma a panagisaad ket agtalinaed a kas met laeng.

![](//p.3ti.site/1725441384.avif)