# Instaliraj &

## Konfiguracijski Token

`i18n.site` ima ugrađeni `i18` alat za prevođenje [Kliknite ovdje da biste pogledali `i18` dokument za konfiguraciju tokena za pristup](/i18/use) .

## Instalirati

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Demo Projekt

Počnimo s demo projektom da naučimo kako koristiti `i18n.site` .

Prvo kloniramo demo repozitorij i izvodimo naredbu na sljedeći način:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Korisnici u kontinentalnoj Kini mogu:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

Naziv direktorija klona baze koda `demo.i18n.site` mora biti `md` kako bi se olakšao lokalni pregled s `docker` .

### Prevesti

Prvo unesite direktorij `md` i pokrenite `i18n.site` , što će `en` prevesti u `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Nakon pokretanja, datoteke prijevoda i predmemorije bit će generirane. Ne zaboravite ih dodati u spremište u `git add . ` `md` .

### Lokalni Pregled

Instalirajte i pokrenite `docker` ( `MAC` korisnik preporučuje korištenje [orbstack](https://orbstack.dev) kao runtime za `docker` ).

Zatim unesite direktorij `docker` i pokrenite `./up.sh` , a zatim posjetite lokalno [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Objavite Sadržaj

`i18n.site` usvaja arhitekturu [aplikacije s jednom stranicom](https://developer.mozilla.org/docs/Glossary/SPA) , a ulazna stranica web stranice i sadržaj web stranice raspoređeni su neovisno.

Nakon pokretanja gornjeg prijevoda, direktoriji `htm` i `v` će generirani u direktoriju `md/out/dev` .

Ovdje `dev` znači da je izgrađen na temelju konfiguracijske datoteke `.i18n/htm/dev.yml` .

`dev` imenik :

Direktorij `htm` je ulazna stranica web stranice.

Direktorij `v` sadrži sadržaj web stranice s brojevima verzija.

Lokalni pregled ne mari za broj verzije i kopirat će sve datoteke u direktorij `out/dev/v/0.1.0` .

Za službeno izdanje, promijenjene datoteke će se kopirati u direktorij s novim brojem verzije.

#### Koristite -c Za Navođenje Konfiguracijske Datoteke

Različite konfiguracijske datoteke će stvoriti odgovarajuće direktorije u `out` direktoriju.

Na primjer, `.i18n/htm/ol.yml` će stvoriti direktorij `out/ol` .

`dev.yml` i `ol.yml` su zadane konfiguracije.

`dev` je skraćenica od `development` , koja označava razvojno okruženje, koristi se za lokalni pregled, a također je i zadana konfiguracijska datoteka.
`ol` je skraćenica od `online` , koja označava mrežno okruženje, koje se koristi za službeno izdanje. To je također zadana konfiguracijska datoteka kada se koriste parametri naredbenog retka `-n` do `npm` za izdavanje.

Također možete stvoriti druge konfiguracijske datoteke pomoću `--htm_conf` u naredbenom retku za navođenje imena konfiguracijske datoteke:

na primjer:
```
i18n.site --htm_conf yourConfig --save
```

Ovdje `--save` predstavlja broj verzije izdanja ažuriranja.

#### <a rel=id href="#npm" id="npm"></a> Objavite sadržaj na npmjs.com

Objavljivanje sadržaja [npmjs.com](//npmjs.com) preporučenom zadanom rješenju (pogledajte [Front-end High Availability](/i18n.site/feature#ha) ).

##### npm login & Puštanje

Instalirajte `nodejs` , prijavite se s `npm login` .

Uredite `md/.i18n/htm/ol.yml` i promijenite `i18n.site` u `v: //unpkg.com/i18n.site` u svoj vlastiti `npm` naziv paketa.

Samo koristite naziv nezauzetog paketa na [npmjs.com](//npmjs.com)

Kada objavljujete na temelju paketa `npm` , **obavezno koristite `//unpkg.com/`** za prefiks `v:` Vrijednost `i18n.site` je posebno optimizirala vrijeme predmemorije `/.v` pod ovom stazom prefiksa da biste postigli pravovremeno pregledavanje novih izdanja.

Pokrenite `i18n.site --npm` ili `i18n.site -n` u direktoriju `md` za prijevod i objavu.

Ako za objavljivanje koristite okruženje kontinuirane integracije, nema potrebe za instaliranjem `nodejs` , samo kopirajte dopuštenje za prijavu i objavljivanje `~/.npmrc` u okruženje.

Ako izmijenite naziv paketa `v:` u `ol.yml` , **svakako prvo izbrišite `.i18n/v/ol`** , a zatim ga objavite.

##### Proxy Poslužitelj Objavio npm

Ako korisnici u kontinentalnoj Kini naiđu na probleme s mrežom i ne mogu objaviti `npm` paketa, mogu postaviti varijablu okruženja `https_proxy` za konfiguraciju proxy poslužitelja.

Pod pretpostavkom da je port vašeg proxy poslužitelja `7890` , možete napisati:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Samostalni Sadržaj

Ako želite sami hostirati sadržaj, prvo uredite `md/.i18n/htm/ol.yml` i promijenite `v: //unpkg.com/i18n.site` u svoj prefiks URL-a, kao što je `v: //i18n-v.xxx.com` .

Unesite direktorij `md` i pokrenite

```
i18n.site --htm_conf ol --save
```

ili skraćenica

```
i18n.site -c ol -s
```

Zatim konfigurirajte sadržaj u direktoriju `md/out/ol/v` na stazu URL prefiksa postavljenu u `v:` .

Na kraju, **konfigurirajte vrijeme predmemorije staze koja završava s `/.v` do `1s`** , inače se novoobjavljenom sadržaju ne može odmah pristupiti.

Vrijeme predmemorije za druge staze može se postaviti na jednu godinu ili više kako bi se smanjili nepotrebni zahtjevi.

##### Host Sadržaja Na s3

Za samostalno postavljanje sadržaja, uz korištenje vlastitog poslužitelja, još jedna `CDN` opcija je korištenje `S3` +

[rclone](https://rclone.org) se prijaviti na `S3` poslužitelj, zatim pogledati i modificirati sljedeću skriptu i kopirati samo inkrementalne promjene u `S3` za svako izdanje.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Ne zaboravite konfigurirati `CDN` tako da vrijeme predmemorije staze koja završava s `/.v` bude `1s` , inače se novoobjavljenom sadržaju ne može odmah pristupiti.

### Objaviti Web Stranicu

Web mjesto se može postaviti bilo gdje [github page](https://pages.github.com) i [cloudflare page](https://pages.cloudflare.com) su dobar izbor.

Budući da web-mjesto koristi arhitekturu [aplikacije s jednom stranom](https://developer.mozilla.org/docs/Glossary/SPA) , ne zaboravite prepisati URL staze koje ne sadrže `. ` do `index.html` .

Ulaznu stranicu web-mjesta potrebno je implementirati samo jednom i nema potrebe ponovno postavljati ulaznu stranicu web-mjesta za naknadna ažuriranja sadržaja.

#### Implementiraj Na github Stranici

Prvo [kliknite ovdje github](https://github.com/account/organizations/new?plan=free) Sljedeći naziv organizacije je `i18n-demo` .

Zatim kreirajte skladište `i18n-demo.github.io` pod ovom organizacijom (zamijenite `i18n-demo` nazivom organizacije koji ste stvorili):

![](https://p.3ti.site/1721098657.avif)

Prilikom objavljivanja sadržaja u prethodnom članku, generirano je `out/ol/htm` Molimo unesite ovaj direktorij i pokrenite :

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

#### Implementacija Na Stranici cloudflare

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

#### Optimiziranje Postavljanja Web Stranice U Kontinentalnoj Kini

Ako želite postići bolje performanse pristupačnosti u mrežnom okruženju kontinentalne Kine, prvo [registrirajte naziv domene](//beian.aliyun.com) .

Zatim upotrijebite pohranu objekata dobavljača u oblaku u kontinentalnoj + `CDN` Postavite sljedeći sadržaj `out/ol/htm` !

Možete koristiti rubno računalstvo za prepisivanje putanje za prilagodbu aplikacijama s jednom stranicom. Na primjer, [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) može se konfigurirati ovako:

```js
var uri=r.uri,p=uri.lastIndexOf('.');
if(
  p<0 || !'|avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml|'.includes('|'+uri.slice(p+1)+'|')
){
  r.uri='/index.html'
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
![](https://p.3ti.site/1721121273.avif)

Budući da zapis `MX` i zapis `CNAME` ne mogu koegzistirati, ako želite primati e-poštu s nazivom domene u isto vrijeme, trebate surađivati sa skriptom [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) na razini `CNAME` u zapisu `A` .

Osim toga, budući da su naknade za promet u inozemstvu dobavljača u oblaku u kontinentalnoj Kini relativno skupe, ako želite optimizirati troškove, možete upotrijebiti [DNS geografsku rezoluciju usluge Huawei Cloud](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) i prilagođeni naziv domene [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (kao što je prikazano u nastavku). preusmjeravanje prometa──Promet u kontinentalnoj Kini Baidu Cloud `CDN` , međunarodni promet ide cloudflare .

![](https://p.3ti.site/1721119788.avif)

Ova rješenja za optimizaciju implementacije su složenija i bit će predstavljena u zasebnim poglavljima u budućnosti.

#### Generičko Preusmjeravanje Imena Domene

Ako koristite `i18n.site` za generiranje web stranice kao svoje glavne web stranice, obično trebate konfigurirati preusmjeravanje unutar domene, odnosno preusmjeriti pristup na `*.xxx.com` (uključujući `www.xxx.com` ) na `xxx.com` .

Ovaj se zahtjev može postići uz pomoć Alibaba Cloud `CDN` `EdgeScript` ( [engleski dokument](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [kineski dokument](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Dodajte naziv domene u [CDN Cloud](https://cdn.console.aliyun.com/domain/list) i usmjerite naziv domene `*.xxx.com` `CNAME` u Alibaba Cloud `CDN` !

![](https://p.3ti.site/1721122000.avif)

Na primjer, konfiguracija preusmjeravanja naziva pan-domene `*.i18n.site` na gornjoj slici je sljedeća:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

#### Implementiraj S Nginxom

Molimo dodajte konfiguraciju sličnu sljedećoj u paragrafu `server` od nginx Molimo promijenite `/root/i18n/md/out/ol/htm` u stazu vašeg vlastitog projekta `out/ol/htm` :

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Struktura Imenika

#### `public`

Statičke datoteke web stranice, kao što su `favicon.ico` , `robots.txt` itd.

Datoteke ikona ovdje se mogu generirati pomoću [realfavicongenerator.net](https://realfavicongenerator.net)

#### `.i18n`

U direktoriju `.i18n` nalaze se konfiguracijske datoteke, predmemorija prijevoda itd. od `i18n.site` Za detalje pogledajte sljedeće poglavlje ["Konfiguracija"](/i18n.site/conf) .

#### `en`

Direktorij izvornog jezika, koji odgovara konfiguracijskoj datoteci `en` od `fromTo` u `.i18n/conf.yml`

```yaml
i18n:
  fromTo:
    en: zh
```

Molimo pogledajte konfiguraciju prijevoda [i18](/i18/use)