# Optimizacija Za Pretraživače (Seo)

## Princip

`i18n.site` usvaja arhitekturu jedne stranice bez osvježavanja Da bi se olakšalo indeksiranje pretraživanja, generiraće se posebna statička stranica i `sitemap.xml` za indeksiranje.

Kada pretraživač tražilice koristi `User-Agent` zahtjeva za pristup, zahtjev će biti preusmjeren na statičku stranicu putem `302` .

Na statičnim stranicama, koristite `link` da označite veze do različitih jezičkih verzija ove stranice, kao što je :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## Lokalna nginx Konfiguracija

Uzmite konfiguracijsku datoteku `.i18n/htm/main.yml` u demo projektu kao primjer

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

Molimo prvo izmijenite gornju vrijednost `host:` u ime vašeg domena, kao što je `xxx.com` .

Zatim, `i18n.site -n` , statička stranica će se generirati u `out/main/htm` direktoriju.

Naravno, možete omogućiti i druge konfiguracijske datoteke, kao što je prvo upućivanje na konfiguraciju `main` za kreiranje `.i18n/htm/dist.package.json` i `.i18n/htm/dist.yml` .

Zatim pokrenite `i18n.site -n -c dist` tako da će statička stranica biti generirana na `out/dist/htm` .

`nginx` se može postaviti prema konfiguraciji ispod.

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# Nemojte predugo keširati skripte serverskih radnika
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# Postavite duže vrijeme keširanja za druge statičke resurse
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# Postavite koju statičku datoteku će pretraživač koristiti kao unos početne stranice
location = / {
  # Ako $botLang nije prazan, to znači pristup indeksiranju i preusmjeravanje prema postavljenoj putanji jezika
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

Statičke datoteke se mogu generirati lokalno, ali češći pristup je njihovo učitavanje u pohranu objekata.

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

U konfiguraciji, promijenite `i18n.site` u vrijednost `host:` u `.i18n/htm/main.yml` , više skladišta objekata se mogu konfigurirati pod `s3` , a polje `region` je opciono (mnoga skladišta objekata ne moraju postaviti ovo polje).

Zatim pokrenite `i18n.site -n` da ponovo objavite projekat.

Ako ste izmijenili `~/.config/i18n.site.yml` i želite ponovo učitati, koristite sljedeću naredbu u korijenskom direktoriju projekta da obrišete keš memoriju za otpremanje :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## cloudflare Konfiguracija

Ime domene hostirano na [cloudflare](//www.cloudflare.com)

### Pravila Konverzije

Dodajte pravila konverzije kao što je prikazano u nastavku:

![](//p.3ti.site/1725436822.avif)

Kod pravila je sljedeći, molimo izmijenite kod "i18n.site" u ime vaše domene:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Pravila Keširanja

Dodajte pravila keširanja na sljedeći način:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Pravila Preusmjeravanja

Postavite pravila preusmjeravanja na sljedeći način, modificirajte kod "i18n.site" u ime vaše domene

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

`URL redirect` Odaberite dinamičko preusmjeravanje, modificirajte `/en` u stazi preusmjeravanja `concat("/en",http.request.uri.path,".htm")` na zadani jezik koji želite da pretraživači uključe.

## Baidu Intelligent Cloud Configuration

Ako trebate pružati usluge kontinentalnoj Kini, možete koristiti [Baidu Smart Cloud](//cloud.baidu.com) .

Podaci se šalju u Baidu Object Storage i vezuju za Baidu Content Distribution Network.

Zatim kreirajte skriptu u [usluzi EdgeJS](//console.bce.baidu.com/cdn/#/cdn/ejs/list) na sljedeći način

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
  // Zaglavlja odgovora se mogu postaviti na izlaz za otklanjanje grešaka, kao što je out.XXX = 'MSG';
})
```

Kliknite na `Debug` , a zatim kliknite na Objavi na cijeloj mreži.

![](//p.3ti.site/1725437754.avif)

## Napredna Upotreba: Distribuirajte Promet Na Osnovu Regionalne Rezolucije

Ako želite pružati usluge u kontinentalnoj Kini i želite `cloudflare` besplatnog međunarodnog saobraćaja, možete koristiti `DNS` s regionalnom rezolucijom.

Na primjer, [Huawei DNS](https://www.huaweicloud.com) pruža besplatnu regionalnu analizu, s kojom promet u kontinentalnoj Kini može ići kroz Baidu Smart Cloud, a međunarodni promet može proći kroz `cloudflare` !

Postoje mnoge zamke u konfiguraciji `cloudflare` Evo nekoliko stvari koje treba napomenuti :

### Ime Domene Se Nalazi U Drugom `DNS` , Kako Koristiti `cloudflare`

Prvo povežite proizvoljno ime domena na `cloudflare` , a zatim koristite `SSL/TLS` → prilagođeno ime domena da povežete ime glavnog domena sa ovim imenom domene.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` Se Ne Može Pristupiti Preko Prilagođenog Imena Domene

Budući da se `cloudflare` skladištu objekata `R2` ne može pristupiti preko prilagođenog imena domene, potrebno je koristiti skladište objekata treće strane za postavljanje statičkih datoteka.

Ovdje `cloudflare` [backblaze.com](https://www.backblaze.com)

Kreirajte kantu na `backblaze.com` , otpremite bilo koju datoteku, kliknite da pregledate datoteku i dobijte ime domene `Friendly URL` , što je ovdje `f003.backblazeb2.com` .

![](//p.3ti.site/1725440783.avif)

Promijenite ime domene iz `CNAME` u `f003.backblazeb2.com` na `cloudflare` i omogućite proxy.

![](//p.3ti.site/1725440896.avif)

Izmijenite `cloudflare` od `SSL` → način šifriranja, postavite na `Full`

![](//p.3ti.site/1725438572.avif)

Dodajte pravilo konverzije kao što je prikazano ispod, stavite ga na prvo mjesto (prvo ima najniži prioritet):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` odaberite dinamički i modificirajte `your_bucketname` u `concat("/file/your_bucketname",http.request.uri.path)` u naziv vašeg segmenta.

Osim toga, u gornjem pravilu konverzije `cloudflare` , `index.html` se mijenja u `file/your_bucketname/index.html` , a ostale konfiguracije ostaju iste.

![](//p.3ti.site/1725441384.avif)