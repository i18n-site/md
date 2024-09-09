# Optimizacija Iskalnikov (Seo)

## Načelo

`i18n.site` sprejme arhitekturo ene strani brez osveževanja, da se olajša indeksiranje iskanja, bosta pajkom ustvarjena ločena statična stran in `sitemap.xml` .

Ko pajek iskalnika uporabi `User-Agent` zahteve za dostop, bo zahteva preusmerjena na statično stran prek `302` .

Na statičnih straneh uporabite `link` , da označite povezave do različnih jezikovnih različic te strani, kot je :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```

## Konfigurirajte Shranjevanje Predmetov Za Nalaganje Statičnih Datotek

Statične datoteke je mogoče ustvariti lokalno, vendar je pogostejši pristop, da jih naložite v shrambo objektov.

Kot primer vzemite konfiguracijsko datoteko `.i18n/htm/ol.yml` v predstavitvenem projektu

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

Najprej spremenite zgornjo vrednost `host:` za ime svoje domene, na primer `i18n.site` .

Nato uredite `~/.config/i18n.site.yml` in dodajte naslednjo konfiguracijo :

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

V konfiguraciji spremenite `i18n.site` na vrednost `host:` v `.i18n/htm/ol.yml` , več shramb objektov je mogoče konfigurirati pod `s3` , polje `region` pa ni obvezno (mnogim shrambam objektov tega polja ni treba nastaviti).

Nato zaženite `i18n.site -n` da ponovno objavite projekt.

Če ste spremenili `~/.config/i18n.site.yml` in želite znova naložiti, uporabite naslednji ukaz v korenskem imeniku projekta, da počistite predpomnilnik nalaganja :

```
rm -rf .i18n/data/seo .i18n/data/public
```

## Konfiguracija cloudflare

Ime domene gosti [cloudflare](//www.cloudflare.com)

### Pravila Pretvorbe

Dodajte pravila pretvorbe, kot je prikazano spodaj:

![](//p.3ti.site/1725436822.avif)

Koda pravila je naslednja, spremenite kodo "i18n.site" v ime svoje domene:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Pravila Predpomnjenja

Pravila predpomnilnika dodajte na naslednji način:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Pravila Preusmeritve

Nastavite pravila preusmeritve, kot sledi, spremenite kodo "i18n.site" v ime svoje domene

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

`URL redirect` Izberite dinamično preusmeritev, spremenite `/en` v preusmeritveni poti `concat("/en",http.request.uri.path,".htm")` na privzeti jezik, ki ga želite vključiti v iskalnike.

## Konfiguracija Inteligentnega Oblaka Baidu

Če morate zagotavljati storitve celinski Kitajski, lahko uporabite [Baidu Smart Cloud](//cloud.baidu.com) .

Podatki se naložijo v Baidu Object Storage in povežejo z Baidu Content Distribution Network.

Nato ustvarite skript v [storitvi EdgeJS edge,](//console.bce.baidu.com/cdn/#/cdn/ejs/list) kot sledi

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

Kliknite `Debug` in nato Objavi v celotnem omrežju.

![](//p.3ti.site/1725437754.avif)

## Napredna Uporaba: Porazdelite Promet Na Podlagi Regionalne Ločljivosti

Če želite zagotavljati storitve v celinski Kitajski in želite tudi `cloudflare` brezplačnega mednarodnega prometa, lahko uporabite `DNS` z regionalno ločljivostjo.

Na primer, [Huawei Cloud DNS](https://www.huaweicloud.com) zagotavlja brezplačno regionalno analizo, s katero lahko celinski kitajski promet poteka skozi Baidu Smart Cloud, mednarodni promet pa lahko poteka skozi `cloudflare` .

V konfiguraciji `cloudflare` je veliko pasti. Tukaj je nekaj točk, ki jih je treba upoštevati :

### Ime Domene Gostuje v Drugem `DNS` , Kako Uporabljati `cloudflare`

Najprej povežite poljubno ime domene z `cloudflare` in nato uporabite `SSL/TLS` → ime domene po meri, da glavno ime domene povežete s tem imenom domene.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` Ni Mogoče Dostopati Prek Imena Domene Po Meri

Ker `R2` `cloudflare` dostopati s prilagojenim imenom domene, je treba za namestitev statičnih datotek uporabiti pomnilnik objektov tretje osebe.

Tukaj [backblaze.com](https://www.backblaze.com) primer, da pokažemo, kako povezati objekte tretjih oseb, ki bodo shranjeni na `cloudflare` .

Ustvarite vedro pri `backblaze.com` , naložite katero koli datoteko, kliknite za brskanje po datoteki in pridobite ime domene `Friendly URL` , ki je tukaj `f003.backblazeb2.com` .

![](//p.3ti.site/1725440783.avif)

Spremenite ime domene iz `CNAME` v `f003.backblazeb2.com` pri `cloudflare` in omogočite proxy.

![](//p.3ti.site/1725440896.avif)

Spremeni `cloudflare` od `SSL` → način šifriranja, nastavljen na `Full`

![](//p.3ti.site/1725438572.avif)

Dodajte pravilo pretvorbe, kot je prikazano spodaj, postavite ga na prvo mesto (prvo ima najnižjo prednost):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` izberite dinamično in spremenite `your_bucketname` v `concat("/file/your_bucketname",http.request.uri.path)` v ime vašega vedra.

Poleg tega se v zgornjem pravilu pretvorbe `cloudflare` `index.html` spremeni v `file/your_bucketname/index.html` , druge konfiguracije pa ostanejo enake.

![](//p.3ti.site/1725441384.avif)