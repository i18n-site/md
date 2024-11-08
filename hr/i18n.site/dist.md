# Implementacija I Online

`i18n.site` usvaja arhitekturu [aplikacije na jednoj stranici](https://developer.mozilla.org/docs/Glossary/SPA) , a ulazna stranica web stranice i sadržaj web stranice raspoređeni su neovisno.

Nakon pokretanja gornjeg prijevoda, direktoriji `htm` i `v` će generirani u direktoriju `md/out/dev` .

Ovdje `dev` znači da je izgrađen na temelju konfiguracijske datoteke `.i18n/htm/dev.yml` .

`dev` imenik :

Direktorij `htm` je ulazna stranica web stranice.

Direktorij `v` sadrži sadržaj web stranice s brojevima verzija.

Lokalni pregled ne mari za broj verzije i kopirat će sve datoteke u direktorij `out/dev/v/0.1.0` .

Za službeno izdanje, promijenjene datoteke će se kopirati u direktorij s novim brojem verzije.

## Navedite Konfiguracijsku Datoteku S `-c`

Različite konfiguracijske datoteke će stvoriti odgovarajuće direktorije u `out` direktoriju.

Na primjer, `.i18n/htm/main.yml` će stvoriti direktorij `out/main` .

`dev.yml` i `main.yml` su zadane konfiguracije.

`dev` je skraćenica od `development` , koja označava razvojno okruženje, koristi se za lokalni pregled, a također je i zadana konfiguracijska datoteka.
`ol` je skraćenica od `online` , koja označava mrežno okruženje, koje se koristi za službeno izdanje. To je također zadana konfiguracijska datoteka kada se koriste parametri naredbenog retka `-n` do `npm` za izdavanje.

Također možete stvoriti druge konfiguracijske datoteke pomoću `--htm_conf` u naredbenom retku za navođenje imena konfiguracijske datoteke:

na primjer:
```
i18n.site --htm_conf dist --save
```

Ovdje `--save` predstavlja broj verzije izdanja ažuriranja.

## <a rel=id href="#npm" id="npm"></a> Objavite sadržaj na npmjs.com

Objavljivanje sadržaja [npmjs.com](//npmjs.com) preporučenom zadanom rješenju (pogledajte [Front-end High Availability](/i18n.site/feature#ha) ).

### Prijava & npm

Instalirajte `nodejs` , prijavite se s `npm login` .

Uredite `md/.i18n/htm/main.yml` i promijenite vrijednost [`md:`](//github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/main.yml#L7) `YOUR_NPM_PACKAGE` kao svoj vlastiti `npm` naziv paketa na [npmjs.com](//npmjs.com)

Zatim promijenite `md/.i18n/htm/main.package.json`

Pokrenite `i18n.site --npm` ili `i18n.site -n` u direktoriju `md` za prijevod i objavu.

Ako za objavljivanje koristite okruženje kontinuirane integracije, nema potrebe za instaliranjem `nodejs` Samo kopirajte dopuštenja za prijavu i objavljivanje `~/.npmrc` u okruženje.

Ako izmijenite naziv paketa `v:` u `main.yml` , **svakako prvo izbrišite `.i18n/v/main`** , a zatim ga objavite.

#### Proxy Poslužitelj Objavio npm

Ako korisnici u kontinentalnoj Kini naiđu na probleme s mrežom i ne mogu objaviti `npm` paketa, mogu postaviti varijablu okruženja `https_proxy` za konfiguraciju proxy poslužitelja.

Pod pretpostavkom da je port vašeg proxy poslužitelja `7890` , možete napisati:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

## Samostalni Sadržaj

Ako želite sami hostirati sadržaj, prvo uredite `md/.i18n/htm/main.yml` i promijenite `v: //unpkg.com/i18n.site` u svoj prefiks URL-a, kao što je `v: //i18n-v.xxx.com` .

Unesite direktorij `md` i pokrenite

```
i18n.site --htm_conf ol --save
```

ili skraćenica

```
i18n.site -c ol -s
```

Zatim konfigurirajte sadržaj u direktoriju `md/out/main/v` na stazu URL prefiksa postavljenu u `v:` .

Na kraju, **konfigurirajte vrijeme predmemorije staze koja završava s `/.v` do `1s`** , inače se novoobjavljenom sadržaju ne može odmah pristupiti.

Vrijeme predmemorije za druge staze može se postaviti na jednu godinu ili više kako bi se smanjili nepotrebni zahtjevi.

## Host Sadržaja Na s3

Za samostalno postavljanje sadržaja, uz korištenje vlastitog poslužitelja, još jedna `CDN` opcija je korištenje `S3` +

[rclone](https://rclone.org) se prijaviti na `S3` poslužitelj, zatim pogledati i modificirati sljedeću skriptu i kopirati samo inkrementalne promjene u `S3` za svako izdanje.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/main/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/main/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/main/v/.v "$s3:/$bucket/"
```

Ne zaboravite konfigurirati `CDN` tako da vrijeme predmemorije staze koja završava s `/.v` bude `1s` , inače se novoobjavljenom sadržaju ne može odmah pristupiti.

## Objaviti Web Stranicu

Web mjesto se može postaviti bilo gdje [github page](https://pages.github.com) i [cloudflare page](https://pages.cloudflare.com) su dobar izbor.

Budući da web-mjesto koristi arhitekturu [aplikacije s jednom stranom](https://developer.mozilla.org/docs/Glossary/SPA) , ne zaboravite prepisati URL staze koje ne sadrže `. ` do `index.html` .

Ulaznu stranicu web-mjesta potrebno je implementirati samo jednom i nema potrebe ponovno postavljati ulaznu stranicu web-mjesta za naknadna ažuriranja sadržaja.

### Implementiraj Na github Stranici

Prvo [kliknite ovdje github](https://github.com/account/organizations/new?plan=free) Sljedeći naziv organizacije je `i18n-demo` .

Zatim kreirajte skladište `i18n-demo.github.io` pod ovom organizacijom (zamijenite `i18n-demo` nazivom organizacije koji ste stvorili):

![](https://p.3ti.site/1721098657.avif)

Prilikom objavljivanja sadržaja u prethodnom članku, generirano je `out/main/htm` Molimo unesite ovaj direktorij i pokrenite :

```
ln -s index.html 404.html
```


Budući da `github page` ne podržava prepisivanje URL staze, umjesto toga koristi se `404.html` .

Zatim pokrenite sljedeću naredbu u direktoriju `htm` (ne zaboravite zamijeniti `i18n-demo/i18n-demo.github.io.git` adresom vlastitog skladišta) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Nakon što pritisnete kod, pričekajte da se implementacija `github page` uspješno pokrene (kao što je prikazano u nastavku) prije nego što mu možete pristupiti.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Za demo stranicu pogledajte:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

### Implementacija Na Stranici cloudflare

[cloudflare page](//pages.cloudflare.com) U usporedbi s `github page` , omogućuje prepisivanje putanje i pristupačniji je za kontinentalnu Kinu.

Implementacija `cloudflare page` obično se temelji na implementaciji `github page` iznad.

Napravite projekt i vežite `i18n-demo.github.io` skladište iznad.

Proces je prikazan na slici ispod:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Kliknite `Add Account` da biste odobrili pristup organizaciji `i18n-demo` .

Ako ste vezali skladište druge organizacije, možda ćete morati dvaput kliknuti `Add Account` za autorizaciju prije nego što se prikaže nova organizacija.

![](https://p.3ti.site/1721118306.avif)

Zatim odaberite skladište `i18n-demo.github.io` , zatim kliknite `Begin setup` i koristite zadane vrijednosti za sljedeće korake.

![](https://p.3ti.site/1721118490.avif)

Nakon prvog uvezivanja morate pričekati nekoliko minuta prije nego što mu možete pristupiti.

Nakon implementacije možete vezati prilagođeni naziv domene.

![](https://p.3ti.site/1721119459.avif)

Nakon vezanja prilagođenog naziva domene, idite na naziv domene da biste konfigurirali ponovno pisanje staze jednostraničke aplikacije, kao što je prikazano u nastavku:

![](https://p.3ti.site/1721119320.avif)

Pravila na gornjoj slici su sljedeća. Zamijenite `i18n.site` u prvom retku ispod s nazivom domene koji ste vezali.

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

Osim toga, konfigurirajte pravila predmemorije, kao što je prikazano u nastavku, i postavite trajanje predmemorije na jedan mjesec.

![](https://p.3ti.site/1721125111.avif)

Promijenite naziv domene koji odgovara u drugom koraku na gornjoj slici na naziv domene koji ste vezali.

### Optimiziranje Postavljanja Web Stranice U Kontinentalnoj Kini

Ako želite postići bolje performanse pristupačnosti u mrežnom okruženju kontinentalne Kine, prvo [registrirajte naziv domene](//beian.aliyun.com) .

Zatim upotrijebite pohranu objekata dobavljača u oblaku u kontinentalnoj + `CDN` Postavite sljedeći sadržaj `out/main/htm` !

Možete koristiti rubno računalstvo za prepisivanje putanje za prilagodbu aplikacijama s jednom stranicom. Na primjer, [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) može se konfigurirati ovako:

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

![](https://p.3ti.site/1721121273.avif)

Budući da zapis `MX` i zapis `CNAME` ne mogu koegzistirati, ako želite primati e-poštu s nazivom domene u isto vrijeme, trebate surađivati sa skriptom [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) na razini `CNAME` u zapisu `A` .

Osim toga, budući da su naknade za promet u inozemstvu dobavljača u oblaku u kontinentalnoj Kini relativno skupe, ako želite optimizirati troškove, možete upotrijebiti [DNS geografsku rezoluciju usluge Huawei Cloud](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) i prilagođeni naziv domene [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (kao što je prikazano u nastavku). preusmjeravanje prometa──usmjeravanje prometa u kontinentalnoj Kini Baidu Cloud `CDN` , međunarodni promet ide cloudflare .

![](https://p.3ti.site/1721119788.avif)

Ova rješenja za optimizaciju implementacije su složenija i bit će predstavljena u zasebnim poglavljima u budućnosti.

### Generičko Preusmjeravanje Imena Domene

Ako koristite `i18n.site` za generiranje web stranice kao svoje glavne web stranice, obično trebate konfigurirati preusmjeravanje unutar domene, odnosno preusmjeriti pristup na `*.xxx.com` (uključujući `www.xxx.com` ) na `xxx.com` .

Ovaj se zahtjev može postići uz pomoć Alibaba Cloud `CDN` `EdgeScript` ( [engleski dokument](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [kineski dokument](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Dodajte naziv domene u [CDN Cloud](https://cdn.console.aliyun.com/domain/list) i usmjerite naziv domene `*.xxx.com` `CNAME` u Alibaba Cloud `CDN` !

![](https://p.3ti.site/1721122000.avif)

Na primjer, konfiguracija preusmjeravanja naziva pan-domene `*.i18n.site` na gornjoj slici je sljedeća:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

### Implementirajte S Nginxom

Molimo dodajte konfiguraciju sličnu sljedećoj u paragrafu `server` od nginx Molimo promijenite `/root/i18n/md/out/main/htm` u stazu vašeg vlastitog projekta `out/main/htm` :

```
location / {
  root  /root/i18n/md/out/main/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

## Na Temelju `github action` Kontinuirane Integracije

Možete pogledati sljedeće kako biste konfigurirali svoj `github action` :

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

Kao što se može vidjeti u konfiguraciji, ovaj tijek rada se pokreće kada se pritisne na granu `main` i granu `dist` .

Tijek rada će koristiti konfiguracijsku datoteku koja odgovara nazivu grane za objavljivanje dokumenta. Ovdje će se `.i18n/htm/main.yml` i `.i18n/htm/dist.yml` koristiti kao konfiguracija za objavljivanje.

Preporučujemo sljedeće najbolje prakse za postupak izdavanja dokumenta:

Kada se promjene gurnu u granu `main` , dokument se pokreće za izgradnju i postavljanje na stanicu za pregled (stanica za pregled je dostupna [github page](//pages.github.com) ).

Nakon potvrde da je dokument ispravan na stranici za pregled, kod će se spojiti i gurnuti u granu `dist` , a službena izrada i implementacija bit će online.

Naravno, implementacija gornjeg procesa zahtijeva pisanje više konfiguracija.

Možete pogledati stvarni projekt za skriptiranje tijeka rada [github.com/fcdoc/doc](//github.com/fcdoc/doc/blob/main/.github/workflows/i18n.site.yml)

`secrets.I18N_SITE_TOKEN` i `secrets.NPM_TOKEN` u konfiguraciji zahtijevaju da konfigurirate tajne varijable u bazi koda.

![](//p.3ti.site/1730970199.avif)

`I18N_SITE_TOKEN` [i18n.site/token](//i18n.site/token)

`NPM_TOKEN` je token za objavljivanje paketa `npm` u konfiguraciji. [npmjs.com](//npmjs.com) i kreirajte token s dopuštenjima za objavljivanje.

![](//p.3ti.site/1730969906.avif)


## Struktura Imenika

### `public`

Statičke datoteke web stranice, kao što su `favicon.ico` , `robots.txt` itd.

Datoteke ikona ovdje se mogu generirati pomoću [realfavicongenerator.net](https://realfavicongenerator.net)

### `.i18n`

U direktoriju `.i18n` nalaze se konfiguracijske datoteke, predmemorija prijevoda itd. od `i18n.site` Pogledajte sljedeće poglavlje ["Konfiguracija"](/i18n.site/conf) za detalje.

### `en`

Direktorij izvornog jezika, koji odgovara konfiguracijskoj datoteci `en` od `fromTo` u `.i18n/conf.yml`

```yaml
i18n:
  fromTo:
    en: zh
```

Molimo pogledajte konfiguraciju prijevoda [i18](/i18/use)