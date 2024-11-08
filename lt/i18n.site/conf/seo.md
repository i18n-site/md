# Optimizavimas Paieškos Sistemoms (Seo)

## Principu

`i18n.site` naudoja neatnaujinamą vieno puslapio architektūrą. Siekiant palengvinti paieškos indeksavimą, `sitemap.xml` bus sugeneruotas atskiras statinis puslapis.

Kai paieškos variklio tikrinimo programa naudoja prieigos užklausos `User-Agent` , užklausa bus nukreipta į statinį puslapį per `302` .

Statiškuose puslapiuose naudokite `link` kad nurodytumėte nuorodas į skirtingų kalbų šio puslapio versijas, pvz. :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## Vietinė nginx Konfigūracija

Kaip pavyzdį paimkite `.i18n/htm/main.yml` konfigūracijos failą demonstraciniame projekte

```yml
host: i18n-demo.github.io
seo: true
out:
  - fs

pkg:
  i: i18n.site
  md: i18n.site

cdn:
  v:
  jsd:
```

Pirmiausia pakeiskite aukščiau esančią `host:` reikšmę į savo domeno pavadinimą, pvz., `xxx.com` .

Tada, `i18n.site -n` , statinis puslapis bus sugeneruotas `out/main/htm` kataloge.

Žinoma, taip pat galite įjungti kitus konfigūracijos failus, pvz., pirmiausia nurodydami `main` konfigūraciją, kad sukurtumėte `.i18n/htm/dist.package.json` ir `.i18n/htm/dist.yml` .

Tada paleiskite `i18n.site -n -c dist` , kad statinis puslapis būtų sugeneruotas į `out/dist/htm` .

`nginx` galima nustatyti pagal toliau pateiktą konfigūraciją.

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# Nelaikykite serverio darbuotojo scenarijų per ilgai talpykloje
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# Nustatykite ilgesnį kitų statinių išteklių talpyklos laiką
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# Nustatykite, kurį statinį failą tikrinimo programa naudos kaip pagrindinio puslapio įrašą
location = / {
  # Jei $botLang tuščias, tai reiškia tikrinimo prieigą ir peradresavimą pagal nustatytą kalbos kelią
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# Vieno puslapio programos konfigūracija
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## Konfigūruokite Objektų Saugyklą Statiniams Failams Įkelti

Statinius failus galima sugeneruoti vietoje, tačiau labiau paplitęs būdas yra įkelti juos į objektų saugyklą.

Pakeiskite aukščiau sukonfigūruotą `out` į :

```
out:
  - s3
```

Tada redaguokite `~/.config/i18n.site.yml` ir pridėkite šią konfigūraciją :

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

Konfigūracijoje pakeiskite `i18n.site` į reikšmę `host:` in `.i18n/htm/main.yml` , kelias objektų saugyklas galima sukonfigūruoti po `s3` , o laukas `region` yra neprivalomas (daugeliui objektų parduotuvių šio lauko nustatyti nereikia).

Tada paleiskite `i18n.site -n` kad iš naujo paskelbtumėte projektą.

Jei pakeitėte `~/.config/i18n.site.yml` ir norite įkelti iš naujo, naudokite šią komandą projekto šakniniame kataloge, kad išvalytumėte įkėlimo talpyklą :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## „Cloudflare“ Konfigūracija

Domeno vardas priglobtas [cloudflare](//www.cloudflare.com)

### Konversijos Taisyklės

Pridėkite konvertavimo taisykles, kaip parodyta toliau:

![](//p.3ti.site/1725436822.avif)

Taisyklės kodas yra toks, pakeiskite kodą „i18n.site“ į savo domeno pavadinimą:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Talpyklos Taisyklės

Pridėkite talpyklos taisykles taip:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Peradresavimo Taisyklės

Nustatykite peradresavimo taisykles taip, pakeiskite kodą „i18n.site“ į savo domeno pavadinimą

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

`URL redirect` Pasirinkite dinaminį peradresavimą, pakeiskite `/en` `concat("/en",http.request.uri.path,".htm")` peradresavimo kelyje į numatytąją kalbą, kurią norite įtraukti į paieškos variklius.

## Baidu Intelligent Cloud Configuration

Jei jums reikia teikti paslaugas žemyninei Kinijai, galite naudoti [„Baidu Smart Cloud“](//cloud.baidu.com) .

Duomenys įkeliami į „Baidu Object Storage“ ir susiejami su „Baidu“ turinio paskirstymo tinklu.

Tada sukurkite scenarijų [EdgeJS tarnyboje](//console.bce.baidu.com/cdn/#/cdn/ejs/list) taip

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
  // Atsakymų antraštėse galima nustatyti derinimo išvestį, pvz., out.XXX = 'MSG';
})
```

Spustelėkite `Debug` , tada spustelėkite Paskelbti visame tinkle.

![](//p.3ti.site/1725437754.avif)

## Išplėstinis Naudojimas: Paskirstykite Srautą Pagal Regioninę Skiriamąją Gebą

Jei norite teikti paslaugas žemyninėje Kinijoje ir taip pat norite `cloudflare` nemokamo tarptautinio srauto, galite naudoti `DNS` su regionine skiriamąja geba.

Pavyzdžiui, [„Huawei Cloud DNS](https://www.huaweicloud.com) teikia nemokamą regioninę analizę, kurią naudojant žemyninės Kinijos srautas gali vykti per „Baidu Smart Cloud“, o tarptautinis srautas – per `cloudflare` .

Konfigūruojant `cloudflare` yra daug spąstų. Štai keletas punktų, į kuriuos reikia atkreipti dėmesį :

### Domeno Vardas Talpinamas Kituose `DNS` , Kaip Naudoti `cloudflare`

Pirmiausia susiekite savavališką domeno pavadinimą su `cloudflare` , tada naudokite `SSL/TLS` → pasirinktinis domeno pavadinimas, kad susietumėte pagrindinį domeno pavadinimą su šiuo domeno pavadinimu.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` Negalima Pasiekti Naudojant Pasirinktinį Domeno Pavadinimą

Kadangi `cloudflare` objektų saugyklos `R2` negalima pasiekti naudojant tinkintą domeno pavadinimą, statiniams failams patalpinti reikia naudoti trečiosios šalies objektų saugyklą.

Pateikiame pavyzdį [backblaze.com](https://www.backblaze.com) kad parodytume, kaip susieti trečiųjų šalių objektus, kurie turi būti saugomi `cloudflare` .

Sukurkite segmentą `backblaze.com` , įkelkite bet kurį failą, spustelėkite, kad naršytumėte failą, ir gaukite domeno pavadinimą `Friendly URL` , kuris čia yra `f003.backblazeb2.com` .

![](//p.3ti.site/1725440783.avif)

Pakeiskite domeno pavadinimą iš `CNAME` į `f003.backblazeb2.com` ties `cloudflare` ir įjunkite tarpinį serverį.

![](//p.3ti.site/1725440896.avif)

Keisti `cloudflare` iš `SSL` → šifravimo režimas, nustatytas į `Full`

![](//p.3ti.site/1725438572.avif)

Pridėkite konversijos taisyklę, kaip parodyta toliau, įdėkite ją pirmiausia (pirmasis turi mažiausią prioritetą):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` pasirinkite dinaminį ir pakeiskite `your_bucketname` `concat("/file/your_bucketname",http.request.uri.path)` į segmento pavadinimą.

Be to, aukščiau pateiktoje `cloudflare` konvertavimo taisyklėje `index.html` pakeičiamas į `file/your_bucketname/index.html` , o kitos konfigūracijos lieka tokios pačios.

![](//p.3ti.site/1725441384.avif)