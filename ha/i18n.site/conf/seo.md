# Inganta Injin Bincike (Seo)

## Ka'ida

`i18n.site` yana ɗaukar tsarin gine-ginen shafi ɗaya mara wartsake don sauƙaƙe bincike, wani shafi na daban da `sitemap.xml` za a ƙirƙira don masu rarrafe su yi rarrafe.

Lokacin da `User-Agent` na buƙatun samun damar amfani da injin binciken injin bincike, za a tura buƙatar zuwa shafin a tsaye ta hanyar `302` .

A kan shafuka masu tsayi, yi amfani da `link` don nuna hanyoyin haɗin kai zuwa sassa daban-daban na wannan shafin, kamar :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```

## Sanya Ma'ajiyar Abu Don Loda Fayilolin Tsaye

Ana iya samar da fayiloli a tsaye a cikin gida, amma hanyar da ta fi dacewa ita ce loda su zuwa ma'ajiyar abubuwa.

Ɗauki fayil ɗin sanyi na `.i18n/htm/ol.yml` a cikin aikin demo azaman misali

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

Da fatan za a fara canza ƙimar `host:` a sama zuwa sunan yankinku, kamar `i18n.site` .

Sa'an nan, gyara `~/.config/i18n.site.yml` kuma ƙara wannan saitin :

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

A cikin saitin, don Allah canza `i18n.site` zuwa darajar `host:` a cikin `.i18n/htm/ol.yml` , ana iya saita shaguna masu yawa a ƙarƙashin `s3` , kuma filin `region` na zaɓi ne (masu shaguna da yawa ba sa buƙatar saita wannan filin).

Sannan gudu `i18n.site -n` don sake buga aikin.

Idan kun canza `~/.config/i18n.site.yml` kuma kuna son sake yin loda, da fatan za a yi amfani da umarni mai zuwa a cikin tushen tushen aikin don share cache ɗin lodawa :

```
rm -rf .i18n/data/seo .i18n/data/public
```

## cloudflare Sanyi

Sunan yanki da aka shirya zuwa [cloudflare](//www.cloudflare.com)

### Dokokin Canzawa

Ƙara ƙa'idodin juyawa kamar yadda aka nuna a ƙasa:

![](//p.3ti.site/1725436822.avif)

Lambar ƙa'ida ita ce kamar haka, da fatan za a gyara lambar "i18n.site" zuwa sunan yankinku:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Dokokin Caching

Ƙara dokokin cache kamar haka:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Ka'idoji Na Turawa

Saita ƙa'idodin juyawa kamar haka, da fatan za a gyara lambar "i18n.site" zuwa sunan yankin ku

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

`URL redirect` Zaɓi jujjuyawa mai ƙarfi, da fatan za a gyara `/en` a hanyar jujjuyawar `concat("/en",http.request.uri.path,".htm")` zuwa harshen tsoho da kuke son haɗawa da injunan bincike.

## Saitin Gajimare Mai Hankali Na Baidu

Idan kuna buƙatar ba da sabis zuwa babban yankin China, kuna iya amfani da [Baidu Smart Cloud](//cloud.baidu.com) .

Ana ɗora bayanai zuwa Ma'ajiyar Abun Baidu kuma an ɗaure zuwa Cibiyar Rarraba Abun cikin Baidu.

Sannan ƙirƙirar rubutun a cikin [sabis na EdgeJS](//console.bce.baidu.com/cdn/#/cdn/ejs/list) kamar haka

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

Danna `Debug` , sannan danna Buga zuwa ga dukkan hanyar sadarwa.

![](//p.3ti.site/1725437754.avif)

## Babban Amfani: Rarraba Zirga-Zirga Dangane Da Ƙudurin Yanki

Idan kuna son samar da ayyuka a babban yankin China kuma kuna son zirga-zirgar zirga-zirgar ƙasa da ƙasa kyauta `cloudflare` , zaku iya amfani da `DNS` tare da ƙudurin yanki.

Misali, [Huawei Cloud DNS](https://www.huaweicloud.com) yana ba da bincike na yanki kyauta, wanda zirga-zirgar babban yankin kasar Sin za ta iya bi ta Baidu Smart Cloud, kuma zirga-zirgar kasa da kasa na iya bi ta `cloudflare` .

Akwai ramummuka da yawa a cikin daidaitawar `cloudflare` Anan akwai 'yan maki don lura :

### An Shirya Sunan Yankin a Cikin Wasu `DNS` , Yadda Ake Amfani Da `cloudflare`

Da farko ɗaure sunan yanki na sabani zuwa `cloudflare` , sannan a yi amfani da `SSL/TLS` → sunan yankin na al'ada don haɗa babban sunan yankin zuwa wannan yanki.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` Ba Za a Iya Shiga Ta Hanyar Sunan Yanki Na Al'ada Ba

Saboda ginanniyar `cloudflare` a cikin ma'ajiyar abu `R2` ba za a iya isa gare shi ta hanyar sunan yanki da aka keɓance ba, ana buƙatar amfani da ma'ajin abu na ɓangare na uku don sanya fayiloli na tsaye.

[backblaze.com](https://www.backblaze.com) mun ɗauki misali don nuna yadda ake ɗaure abubuwa na ɓangare na uku don adanawa a `cloudflare` .

Ƙirƙiri guga a `backblaze.com` , loda kowane fayil, danna don bincika fayil ɗin, kuma sami sunan yanki na `Friendly URL` , wanda shine `f003.backblazeb2.com` a nan.

![](//p.3ti.site/1725440783.avif)

Canja sunan yankin daga `CNAME` zuwa `f003.backblazeb2.com` a `cloudflare` kuma kunna wakili.

![](//p.3ti.site/1725440896.avif)

Gyara `cloudflare` na `SSL` → yanayin ɓoyewa, saita zuwa `Full`

![](//p.3ti.site/1725438572.avif)

Ƙara ƙa'idar juyawa kamar yadda aka nuna a ƙasa, sanya shi farko (na farko yana da mafi ƙarancin fifiko):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` zaɓi mai ƙarfi kuma canza `your_bucketname` cikin `concat("/file/your_bucketname",http.request.uri.path)` zuwa sunan guga na ku.

Bugu da ƙari, a cikin tsarin jujjuyawar `cloudflare` da ke sama, an canza `index.html` zuwa `file/your_bucketname/index.html` , kuma sauran saitunan sun kasance iri ɗaya.

![](//p.3ti.site/1725441384.avif)