# Otsingumootori Optimeerimine (Seo)

## Põhimõte

`i18n.site` võtab kasutusele mittevärskendava ühe lehe arhitektuuri. Otsingu indekseerimise hõlbustamiseks luuakse roomajatele eraldi staatiline leht ja `sitemap.xml` .

Kui otsingumootori roomaja kasutab juurdepääsupäringu `User-Agent` , suunatakse päring `302` kaudu staatilisele lehele.

Staatilistel lehtedel kasutage `link` , et näidata linke selle lehe erinevatele keeleversioonidele, näiteks :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```

## Konfigureerige Objektide Salvestusruum Staatiliste Failide Üleslaadimiseks

Staatilisi faile saab genereerida kohapeal, kuid levinum lähenemisviis on nende üleslaadimine objektide salvestusruumi.

Võtke näitena demoprojekti konfiguratsioonifail `.i18n/htm/ol.yml`

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

Palun muutke esmalt ülaltoodud väärtust `host:` oma domeeninimeks, näiteks `i18n.site` .

Seejärel muutke `~/.config/i18n.site.yml` ja lisage järgmine konfiguratsioon :

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

Seadistuses muutke `i18n.site` väärtuseks `host:` in `.i18n/htm/ol.yml` , `s3` all saab konfigureerida mitu objektipoodi ja väli `region` on valikuline (paljud objektipoed ei pea seda välja määrama).

Seejärel käivitage projekti uuesti avaldamiseks `i18n.site -n` .

Kui olete muutnud `~/.config/i18n.site.yml` ja soovite uuesti üles laadida, kasutage üleslaadimise vahemälu tühjendamiseks projekti juurkataloogis järgmist käsku :

```
rm -rf .i18n/data/seo .i18n/data/public
```

## Cloudflare'i Konfiguratsioon

Domeeninimi majutatud [cloudflare](//www.cloudflare.com)

### Konversioonireeglid

Lisage konversioonireeglid, nagu allpool näidatud:

![](//p.3ti.site/1725436822.avif)

Reegli kood on järgmine, muutke koodi "i18n.site" oma domeeninimeks:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Vahemällu Salvestamise Reeglid

Lisage vahemälu reeglid järgmiselt:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Ümbersuunamise Reeglid

Määrake ümbersuunamise reeglid järgmiselt, muutke oma domeeninime koodi "i18n.site"

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

`URL redirect` Valige dünaamiline ümbersuunamine, muutke ümbersuunamistee `concat("/en",http.request.uri.path,".htm")` väärtust `/en` vaikekeeleks, mille soovite, et otsingumootorid kaasaksid.

## Baidu Intelligentne Pilvekonfiguratsioon

Kui teil on vaja Mandri-Hiinale teenuseid pakkuda, saate kasutada [Baidu Smart Cloudi](//cloud.baidu.com) .

Andmed laaditakse üles Baidu Object Storage'i ja seotakse Baidu sisujaotusvõrguga.

Seejärel looge skript [teenuses EdgeJS](//console.bce.baidu.com/cdn/#/cdn/ejs/list)

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

Klõpsake nuppu `Debug` ja seejärel nuppu Avalda kogu võrgus.

![](//p.3ti.site/1725437754.avif)

## Täpsem Kasutus: Jaotage Liiklust Piirkondliku Eraldusvõime Alusel

Kui soovite osutada teenuseid Mandri-Hiinas ja soovite ka `cloudflare` tasuta rahvusvahelist liiklust, võite kasutada piirkondliku eraldusvõimega `DNS` .

Näiteks pakub [Huawei DNS](https://www.huaweicloud.com) tasuta piirkondlikku analüüsi, mille abil saab Mandri-Hiina liiklus läbida Baidu Smart Cloudi ja rahvusvaheline liiklus läbi `cloudflare` .

`cloudflare` konfiguratsioonis on palju lõkse. Siin on mõned punktid, mida tasub tähele panna :

### Domeeninimi on Hostitud Teises `DNS` , Kuidas Kasutada `cloudflare`

Esmalt siduge suvaline domeeninimi väärtusega `cloudflare` ja seejärel kasutage `SSL/TLS` → kohandatud domeeninimi, et seostada põhidomeeninimi selle domeeninimega.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` Ei Pääse Juurde Kohandatud Domeeninime Kaudu

Kuna `cloudflare` objektisalvestusele `R2` ei pääse kohandatud domeeninimega juurde, tuleb staatiliste failide paigutamiseks kasutada kolmanda osapoole objektimälu.

Siin on näide [backblaze.com](https://www.backblaze.com) et näidata, kuidas siduda kolmanda osapoole objekte, mis salvestatakse `cloudflare` .

Looge ämber `backblaze.com` juures, laadige üles mis tahes fail, klõpsake faili sirvimiseks ja hankige domeeninimi `Friendly URL` , mis on siin `f003.backblazeb2.com` .

![](//p.3ti.site/1725440783.avif)

Muutke domeeninime `CNAME` -lt `f003.backblazeb2.com` `cloudflare` juures ja lubage puhverserver.

![](//p.3ti.site/1725440896.avif)

`SSL` `cloudflare` krüpteerimisrežiim, määra `Full`

![](//p.3ti.site/1725438572.avif)

Lisage konversioonireegel, nagu allpool näidatud, asetage see esimeseks (esimesel on madalaim prioriteet):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` valige dünaamiline ja muutke `your_bucketname` in `concat("/file/your_bucketname",http.request.uri.path)` oma ämbri nime.

Lisaks muudetakse ülaltoodud `cloudflare` teisendusreeglis `index.html` väärtuseks `file/your_bucketname/index.html` ja muud konfiguratsioonid jäävad samaks.

![](//p.3ti.site/1725441384.avif)