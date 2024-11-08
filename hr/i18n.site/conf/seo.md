# Optimizacija Za Tražilice (Seo)

## Načelo

`i18n.site` usvaja arhitekturu jedne stranice bez osvježavanja kako bi se olakšalo indeksiranje pretraživanja, generirat će se zasebna statična stranica i `sitemap.xml` koju će indeksirati.

Kada alat za indeksiranje tražilice koristi `User-Agent` zahtjeva za pristup, zahtjev će biti preusmjeren na statičnu stranicu putem `302` .

Na statičnim stranicama koristite `link` za označavanje poveznica na različite jezične verzije ove stranice, kao što je :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## Lokalna nginx Konfiguracija

Uzmimo konfiguracijsku datoteku `.i18n/htm/main.yml` u demo projektu kao primjer

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

Prvo promijenite gornju vrijednost `host:` za naziv svoje domene, kao što je `xxx.com` .

Zatim, `i18n.site -n` , statična stranica će biti generirana u `out/main/htm` direktoriju.

Naravno, također možete omogućiti druge konfiguracijske datoteke, kao što je prvo pozivanje na konfiguraciju `main` za stvaranje `.i18n/htm/dist.package.json` i `.i18n/htm/dist.yml` .

Zatim pokrenite `i18n.site -n -c dist` tako da se statična stranica generira na `out/dist/htm` .

`nginx` se može postaviti prema donjoj konfiguraciji.

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# Ne spremajte radničke skripte poslužitelja predugo u predmemoriju
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# Postavite duža vremena predmemorije za druge statičke resurse
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# Postavite koju statičku datoteku alat za indeksiranje koristi kao unos početne stranice
location = / {
  # Ako $botLang nije prazno, to znači pristup indeksiranja i preusmjeravanje prema postavljenoj jezičnoj stazi
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# Konfiguracija aplikacije na jednoj stranici
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## Konfigurirajte Pohranu Objekata Za Učitavanje Statičkih Datoteka

Statičke datoteke mogu se generirati lokalno, ali uobičajeniji pristup je njihovo učitavanje u pohranu objekata.

Izmijenite gore konfiguriranu `out` u :

```
out:
  - s3
```

Zatim uredite `~/.config/i18n.site.yml` i dodajte sljedeću konfiguraciju :

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

U konfiguraciji promijenite `i18n.site` u vrijednost `host:` u `.i18n/htm/main.yml` , višestruke pohrane objekata mogu se konfigurirati pod `s3` , a polje `region` nije obavezno (mnoge pohrane objekata ne moraju postavljati ovo polje).

Zatim pokrenite `i18n.site -n` da ponovno objavite projekt.

Ako ste izmijenili `~/.config/i18n.site.yml` i želite ponovno učitati, upotrijebite sljedeću naredbu u korijenskom direktoriju projekta za brisanje predmemorije prijenosa :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## cloudflare Konfiguracija

Naziv domene hostiran na [cloudflare](//www.cloudflare.com)

### Pravila Pretvorbe

Dodajte pravila konverzije kao što je prikazano u nastavku:

![](//p.3ti.site/1725436822.avif)

Kôd pravila je sljedeći, molimo promijenite kod "i18n.site" u naziv svoje domene:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Pravila Predmemoriranja

Dodajte pravila predmemorije na sljedeći način:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Pravila Preusmjeravanja

Postavite pravila preusmjeravanja na sljedeći način, molimo promijenite kod "i18n.site" na naziv svoje domene

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

`URL redirect` Odaberite dinamičko preusmjeravanje, promijenite `/en` u stazi preusmjeravanja `concat("/en",http.request.uri.path,".htm")` na zadani jezik koji želite da tražilice uključe.

## Baidu Intelligent Cloud Configuration

Ako trebate pružati usluge kontinentalnoj Kini, možete koristiti [Baidu Smart Cloud](//cloud.baidu.com) .

Podaci se učitavaju u Baidu Object Storage i povezuju s Baidu Content Distribution Network.

Zatim izradite skriptu u [EdgeJS edge usluzi](//console.bce.baidu.com/cdn/#/cdn/ejs/list) na sljedeći način

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
  // Zaglavlja odgovora mogu se postaviti za ispravljanje pogrešaka, kao što je out.XXX = 'MSG';
})
```

Kliknite `Debug` , zatim kliknite Objavi na cijeloj mreži.

![](//p.3ti.site/1725437754.avif)

## Napredna Upotreba: Distribuirajte Promet Na Temelju Regionalne Rezolucije

Ako želite pružati usluge u kontinentalnoj Kini i također želite `cloudflare` besplatnog međunarodnog prometa, možete koristiti `DNS` s regionalnom rezolucijom.

Na primjer, [Huawei Cloud DNS](https://www.huaweicloud.com) pruža besplatnu regionalnu analizu, s kojom promet kontinentalne Kine može ići kroz Baidu Smart Cloud, a međunarodni promet može ići kroz `cloudflare` .

Mnogo je zamki u konfiguraciji `cloudflare` Evo nekoliko točaka koje treba primijetiti :

### Naziv Domene Nalazi Se U Drugom `DNS` , Kako Koristiti `cloudflare`

Prvo povežite proizvoljan naziv domene s `cloudflare` , a zatim upotrijebite `SSL/TLS` → prilagođeni naziv domene da povežete glavni naziv domene s ovim nazivom domene.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` Se Ne Može Pristupiti Putem Prilagođenog Naziva Domene

Budući da se `cloudflare` pohrani objekata `R2` ne može pristupiti pomoću prilagođenog naziva domene, potrebno je koristiti pohranu objekata treće strane za smještaj statičkih datoteka.

Ovdje ćemo uzeti [backblaze.com](https://www.backblaze.com) primjer da pokažemo kako objekte treće strane pohraniti na `cloudflare` .

Stvorite kantu na `backblaze.com` , prenesite bilo koju datoteku, kliknite za pregledavanje datoteke i dohvatite naziv domene `Friendly URL` , što je ovdje `f003.backblazeb2.com` .

![](//p.3ti.site/1725440783.avif)

Promijenite naziv domene s `CNAME` na `f003.backblazeb2.com` na `cloudflare` i omogućite proxy.

![](//p.3ti.site/1725440896.avif)

Izmijenite `cloudflare` od `SSL` → način šifriranja, postavite na `Full`

![](//p.3ti.site/1725438572.avif)

Dodajte pravilo konverzije kao što je prikazano u nastavku, stavite ga na prvo mjesto (prvo ima najniži prioritet):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` odaberite dinamički i promijenite `your_bucketname` u `concat("/file/your_bucketname",http.request.uri.path)` u naziv svoje kante.

Osim toga, u gornjem pravilu pretvorbe `cloudflare` , `index.html` se mijenja u `file/your_bucketname/index.html` , a ostale konfiguracije ostaju iste.

![](//p.3ti.site/1725441384.avif)