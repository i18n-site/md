# Implementacija I Online

`i18n.site` usvaja arhitekturu [aplikacije na jednoj stranici](https://developer.mozilla.org/docs/Glossary/SPA) , a ulazna stranica i sadržaj web stranice postavljaju se nezavisno.

Nakon pokretanja gornjeg prijevoda, direktoriji `htm` i `v` će se generirati u direktoriju `md/out/dev` .

Ovdje `dev` znači da je izgrađen na osnovu konfiguracijskog fajla `.i18n/htm/dev.yml` .

`dev` imenik :

Direktorij `htm` je ulazna stranica na web stranicu.

Direktorij `v` sadrži sadržaj web stranice s brojevima verzija.

Lokalni pregled ne brine o broju verzije i kopirat će sve datoteke u direktorij `out/dev/v/0.1.0` .

Za službeno izdanje, izmijenjene datoteke će se kopirati u novi direktorij s brojem verzije.

## Navedite Konfiguracijsku Datoteku Sa `-c`

Različite konfiguracijske datoteke će kreirati odgovarajuće direktorije u direktoriju `out` .

Na primjer, `.i18n/htm/main.yml` će kreirati `out/main` direktorij.

`dev.yml` i `main.yml` su zadane konfiguracije.

`dev` je skraćenica od `development` , koja označava razvojno okruženje, koja se koristi za lokalni pregled, a takođe je i podrazumevana konfiguraciona datoteka.
`ol` je skraćenica od `online` , koja označava onlajn okruženje, koje se koristi za zvanično izdanje. To je takođe podrazumevana konfiguraciona datoteka kada se koriste parametri komandne linije `-n` do `npm` za oslobađanje.

Možete kreirati i druge konfiguracijske datoteke. Koristite `--htm_conf` u komandnoj liniji da navedete naziv konfiguracijske datoteke:

na primjer:
```
i18n.site --htm_conf dist --save
```

Ovdje `--save` predstavlja broj verzije izdanja ažuriranja.

## <a rel=id href="#npm" id="npm"></a> Objavite sadržaj na npmjs.com

Objavljivanje sadržaja na [npmjs.com](//npmjs.com) je preporučeno podrazumevano rešenje (pogledajte [Front-end High Availability](/i18n.site/feature#ha) ).

### npm Prijava & Post

Instalirajte `nodejs` , prijavite se sa `npm login` .

Uredite `md/.i18n/htm/main.yml` i promijenite vrijednost od [`md:`](//github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/main.yml#L7) `YOUR_NPM_PACKAGE` [npmjs.com](//npmjs.com) ime vašeg `npm` paketa.

Zatim modificirajte `md/.i18n/htm/main.package.json`

Pokrenite `i18n.site --npm` ili `i18n.site -n` u direktoriju `md` da prevedete i objavite.

Ako koristite okruženje za kontinuiranu integraciju za objavljivanje, nema potrebe da instalirate `nodejs` Samo kopirajte prijavljene dozvole i dozvole za objavljivanje `~/.npmrc` u okruženje.

Ako promijenite naziv paketa `v:` u `main.yml` , **obavezno prvo izbrišite `.i18n/v/main`** , a zatim ga objavite.

#### Proxy Server Objavio npm

Ako korisnici u kontinentalnoj Kini naiđu na probleme sa mrežom i nisu u mogućnosti da objave `npm` paketa, mogu postaviti varijablu okruženja `https_proxy` da konfigurišu proxy server.

Pod pretpostavkom da je port vašeg proxy servera `7890` , možete napisati:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

## Sadržaj Koji Se Samostalno Održava

Ako želite sami hostirati sadržaj, prvo uredite `md/.i18n/htm/main.yml` i promijenite `v: //unpkg.com/i18n.site` u svoj URL prefiks, kao što je `v: //i18n-v.xxx.com` .

Unesite `md` direktorij i pokrenite

```
i18n.site --htm_conf ol --save
```

ili skraćenica

```
i18n.site -c ol -s
```

Zatim konfigurirajte sadržaj u direktoriju `md/out/main/v` na stazu URL prefiksa postavljenu u `v:` .

Konačno, **konfigurirajte vrijeme keširanja putanje koja se završava na `/.v` do `1s`** , inače se ne može odmah pristupiti novo objavljenom sadržaju.

Vrijeme keširanja za druge staze može se postaviti na godinu dana ili više da bi se smanjili nepotrebni zahtjevi.

## Hostujte Sadržaj Na s3

Za samohostovanje sadržaja, osim korištenja vlastitog servera, `CDN` jedna uobičajena opcija je korištenje `S3` +

Možete koristiti [rclone](https://rclone.org) za prijavu na server `S3` , zatim pogledati i izmijeniti sljedeću skriptu i kopirati samo inkrementalne promjene na `S3` za svako izdanje.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/main/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/main/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/main/v/.v "$s3:/$bucket/"
```

Ne zaboravite konfigurirati `CDN` tako da vrijeme keširanja putanje koja završava na `/.v` bude `1s` , inače se ne može odmah pristupiti novo objavljenom sadržaju.

## Objaviti Web Stranicu

Web lokacija se može postaviti bilo gdje, [github page](https://pages.github.com) [cloudflare page](https://pages.cloudflare.com) su dobar izbor.

Budući da web stranica koristi arhitekturu [aplikacije na jednoj stranici](https://developer.mozilla.org/docs/Glossary/SPA) , ne zaboravite prepisati URL putanje koje ne sadrže `. ` do `index.html` .

Stranicu za ulazak na web mjesto potrebno je samo jednom implementirati i nema potrebe za ponovnim postavljanjem stranice za unos web stranice za naknadna ažuriranja sadržaja.

### Postavite Na github Stranicu

Prvo [kliknite github da kreirate organizaciju](https://github.com/account/organizations/new?plan=free) Sljedeće ime organizacije je `i18n-demo` kao primjer.

Zatim kreirajte skladište `i18n-demo.github.io` pod ovom organizacijom (zamijenite `i18n-demo` imenom organizacije koju ste kreirali):

![](https://p.3ti.site/1721098657.avif)

Prilikom objavljivanja sadržaja u prethodnom članku, generirano je `out/main/htm` Molimo unesite ovaj direktorij i pokrenite :

```
ln -s index.html 404.html
```


Budući da `github page` ne podržava prepisivanje URL putanje, umjesto toga se koristi `404.html` .

Zatim pokrenite sljedeću naredbu u direktoriju `htm` (ne zaboravite `i18n-demo/i18n-demo.github.io.git` zamijeniti svojom adresom skladišta) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Nakon guranja koda, pričekajte da se implementacija `github page` uspješno pokrene (kao što je prikazano ispod) prije nego što mu možete pristupiti.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Za demo stranicu pogledajte:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

### Postavite Na cloudflare Stranicu

[cloudflare page](//pages.cloudflare.com) poređenju sa `github page` , omogućava prepisivanje putanje i više je prijateljski nastrojen prema kontinentalnoj Kini i preporučuje se za korišćenje.

Raspoređivanje `cloudflare page` se obično zasniva na gore navedenom rasporedu `github page` .

Kreirajte projekat i povežite `i18n-demo.github.io` skladište iznad.

Proces je prikazan na slici ispod:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Kliknite na `Add Account` da odobrite pristup organizaciji `i18n-demo` .

Ako ste vezali skladište druge organizacije, možda ćete morati dvaput kliknuti na `Add Account` za autorizaciju prije nego što se nova organizacija prikaže.

![](https://p.3ti.site/1721118306.avif)

Zatim odaberite skladište `i18n-demo.github.io` , zatim kliknite na `Begin setup` i koristite zadane vrijednosti za sljedeće korake.

![](https://p.3ti.site/1721118490.avif)

Nakon povezivanja po prvi put, morate pričekati nekoliko minuta prije nego što mu možete pristupiti.

Nakon implementacije, možete vezati prilagođeno ime domene.

![](https://p.3ti.site/1721119459.avif)

Nakon povezivanja prilagođenog imena domene, idite na ime domene da konfigurišete ponovno upisivanje putanje aplikacije na jednoj stranici, kao što je prikazano u nastavku:

![](https://p.3ti.site/1721119320.avif)

Pravila na gornjoj slici su sljedeća. Molimo zamijenite `i18n.site` u prvom redu ispod sa imenom domene koju ste vezali.

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

Osim toga, konfigurirajte pravila keširanja, kao što je prikazano u nastavku, i postavite trajanje keša na jedan mjesec.

![](https://p.3ti.site/1721125111.avif)

Molimo promijenite naziv domene koji se podudara u drugom koraku na slici iznad u naziv domene koji ste vezali.

### Optimiziranje Implementacije Web Stranice U Kontinentalnoj Kini

Ako želite postići bolje performanse pristupačnosti u mrežnom okruženju kontinentalne Kine, prvo [registrirajte naziv domene](//beian.aliyun.com) .

Zatim koristite skladište objekata dobavljača `out/main/htm` oblaku u kontinentalnoj Kini + Postavite sljedeći sadržaj `CDN` !

Možete koristiti rubno računanje da prepišete putanju kako biste se prilagodili aplikacijama na jednoj stranici. Na primjer, [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) može se konfigurirati ovako:

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
  // Možete postaviti zaglavlje odgovora da otklanja greške na izlazu, kao što je out.XXX = 'MSG';
})
```

![](https://p.3ti.site/1721121273.avif)

Budući da zapis `MX` i zapis `CNAME` ne mogu koegzistirati, ako želite istovremeno primati e-poruke sa imenom domene, morate [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) sa skriptom `CNAME` u zapis `A` .

Osim toga, budući da su naknade za promet u inozemstvu dobavljača u oblaku u kontinentalnoj Kini relativno skupe, ako želite optimizirati troškove, možete koristiti [DNS geografsku rezoluciju kompanije Huawei](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) i prilagođeno ime domene [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (kao što je prikazano u nastavku). preusmeravanje saobraćaja──Rusiranje saobraćaja u kontinentalnoj Kini Baidu Cloud `CDN` , međunarodni saobraćaj ide cloudflare .

![](https://p.3ti.site/1721119788.avif)

Ova rješenja za optimizaciju implementacije su složenija i biće predstavljena u posebnim poglavljima u budućnosti.

### Generičko Preusmjeravanje Imena Domene

Ako koristite `i18n.site` za generiranje web stranice kao glavne web stranice, obično morate konfigurirati preusmjeravanje pan-domene, odnosno preusmjeriti pristup na `*.xxx.com` (uključujući `www.xxx.com` ) na `xxx.com` .

Ovaj zahtjev se može postići uz pomoć Alibaba Cloud `CDN` `EdgeScript` ( [engleski dokument](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [kineski dokument](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Dodajte naziv domene u [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) i pokažite naziv domene `*.xxx.com` `CNAME` u Alibaba Cloud `CDN` !

![](https://p.3ti.site/1721122000.avif)

Na primjer, konfiguracija preusmjeravanja naziva pan-domene od `*.i18n.site` na gornjoj slici je sljedeća:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

### Postavite Sa Nginxom

Molimo dodajte konfiguraciju sličnu sljedećoj u `server` paragrafu nginx Molimo promijenite `/root/i18n/md/out/main/htm` u putanju vašeg vlastitog projekta `out/main/htm` :

```
location / {
  root  /root/i18n/md/out/main/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

## Zasnovano Na `github action` Kontinuiranoj Integraciji

Možete se obratiti sljedećem da biste konfigurirali svoj `github action` :

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

Kao što se može vidjeti u konfiguraciji, ovaj radni tok se pokreće kada se pritisne na granu `main` i granu `dist` .

Tok posla će koristiti konfiguracijsku datoteku koja odgovara imenu grane za objavljivanje dokumenta. Ovdje će se `.i18n/htm/main.yml` i `.i18n/htm/dist.yml` koristiti kao konfiguracija za objavljivanje.

Preporučujemo sljedeće najbolje prakse za proces izdavanja dokumenta:

Kada se promjene gurnu u granu `main` , dokument se pokreće da se izgradi i rasporedi na stanicu za pregled (stanica za pregled je dostupna [github page](//pages.github.com) ).

Nakon potvrde da je dokument ispravan na stranici za pregled, kod će biti spojen i gurnut u granu `dist` , a službena izrada i implementacija će ići na mrežu.

Naravno, implementacija gore navedenog procesa zahtijeva pisanje više konfiguracija.

Možete pogledati stvarni projekat za skriptiranje toka [github.com/fcdoc/doc](//github.com/fcdoc/doc/blob/main/.github/workflows/i18n.site.yml) .

`secrets.I18N_SITE_TOKEN` i `secrets.NPM_TOKEN` u konfiguraciji zahtijevaju da konfigurirate tajne varijable u bazi koda.

![](//p.3ti.site/1730970199.avif)

`I18N_SITE_TOKEN` [i18n.site/token](//i18n.site/token)

`NPM_TOKEN` je token za objavljivanje paketa `npm` u konfiguraciji [npmjs.com](//npmjs.com) kreirajte token s dozvolama za objavljivanje (kao što je prikazano u nastavku).

![](//p.3ti.site/1730969906.avif)


## Struktura Imenika

### `public`

Statičke datoteke web stranice, kao što su `favicon.ico` , `robots.txt` , itd.

Datoteke ikona ovdje se mogu generirati pomoću [realfavicongenerator.net](https://realfavicongenerator.net)

### `.i18n`

Pod direktorijumom `.i18n` nalaze se konfiguracijske datoteke, keš prijevoda, itd. od `i18n.site` Pogledajte sljedeće poglavlje ["Konfiguracija"](/i18n.site/conf) za detalje.

### `en`

Direktorij izvornog jezika, koji odgovara konfiguracijskoj datoteci `en` od `fromTo` u `.i18n/conf.yml`

```yaml
i18n:
  fromTo:
    en: zh
```

Molimo pogledajte konfiguraciju prijevoda [i18](/i18/use)