# Instaliraj &

## Konfiguracijski Token

Alat za prevođenje `i18` je ugrađen, [kliknite ovdje da pogledate `i18` dokument za konfiguraciju tokena za pristup](/i18/use) `i18n.site`

## Instaliraj

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Demo Projekat

Počnimo s demo projektom i naučimo kako koristiti `i18n.site`

Prvo kloniramo demo spremište i izvodimo naredbu na sljedeći način:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Korisnici u kontinentalnoj Kini mogu:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

Ime direktorija klona baze koda mora biti `md` da bi se olakšao lokalni pregled sa `docker` `demo.i18n.site`

### Prevesti

Prvo unesite `md` i pokrenite `i18n.site` , koji će prevesti `en` u `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Nakon pokretanja, datoteke za prijevod `git add . ` keširanje će biti generirane `md`

### Lokalni Pregled

Instalirajte i `docker` ( `MAC` preporučuju korištenje [orbstack](https://orbstack.dev) kao vremena izvođenja `docker` ).

Zatim unesite `docker` i pokrenite `./up.sh` , a zatim posjetite [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Objavite Sadržaj

`i18n.site` arhitekturu [aplikacije na jednoj stranici](https://developer.mozilla.org/docs/Glossary/SPA) , a ulazna stranica i sadržaj web stranice postavljaju se nezavisno.

Nakon pokretanja gornjeg prijevoda, direktoriji `htm` i `v` će se generirati u direktoriju `md/out/dev`

`.i18n/htm/dev.yml` , `dev`

Ispod : `dev`

`htm` imenika je ulazna stranica za web stranicu.

`v` Direktorij sadrži sadržaj web stranice s brojem verzije.

Lokalni pregled će kopirati sve datoteke u `out/dev/v/0.1.0` bez obzira na broj verzije.

Za službeno izdanje, izmijenjene datoteke će se kopirati u novi direktorij s brojem verzije.

#### Koristite -c Da Odredite Konfiguracionu Datoteku

Različite konfiguracijske datoteke će kreirati odgovarajuće direktorije u direktoriju `out`

Na primjer, `.i18n/htm/ol.yml` će kreirati `out/ol` direktorij.

`dev.yml` i `ol.yml` su zadane konfiguracije.

`dev` je skraćenica od `development` , koja predstavlja razvojno okruženje, koristi se za lokalni pregled, a takođe je i podrazumevana konfiguraciona datoteka.
`ol` je skraćenica od `online` , koja predstavlja onlajn okruženje, koristi se za zvanično izdanje, a takođe je i podrazumevana konfiguraciona datoteka kada se objavljuje u `npm` koristeći parametar komandne linije `-n` .

Možete kreirati `--htm_conf` druge konfiguracijske datoteke u komandnoj liniji da navedete ime konfiguracijske datoteke:

na primjer:
```
i18n.site --htm_conf yourConfig --save
```

`--save` označava broj verzije izdanja ažuriranja.

#### <a rel=id href="#npm" id="npm"></a> Objavite sadržaj na npmjs.com

Objavljivanje sadržaja na [npmjs.com](//npmjs.com) je preporučeno podrazumevano rešenje (pogledajte [Front-end High Availability](/i18n.site/feature#ha) ).

##### npm login & Pustiti

Instalirajte `nodejs` koristite `npm login` za prijavu.

Uredi `md/.i18n/htm/ol.yml` promijenite `i18n.site` u `v: //unpkg.com/i18n.site` u svoj `npm` ime paketa.

Samo koristite naziv paketa koji nije zauzet [npmjs.com](//npmjs.com) Dobar je izbor.

Kada objavljujete na osnovu `npm` `/.v` **obavezno koristite `//unpkg.com/`** `i18n.site` prefiks za `v:` vrijednost.

Pokrenite `i18n.site --npm` ili `i18n.site -n` u `md` da prevedete i objavite.

Ako koristite okruženje kontinuirane integracije za objavljivanje, nema potrebe da ga instalirate `nodejs` Samo kopirajte prijavljenu i objavljenu dozvolu `~/.npmrc` u okruženje!

Ako promijenite ime paketa u `v:` `ol.yml` , **obavezno prvo izbrišite `.i18n/v/ol`** , a zatim ga objavite.

##### Proxy Server Objavio npm

Ako korisnici u kontinentalnoj Kini naiđu na probleme sa mrežom i ne mogu da objave `npm` , mogu postaviti varijablu okruženja `https_proxy` da konfigurišu proxy server.

Pod pretpostavkom da je port vašeg proxy servera `7890` možete napisati:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Sadržaj Koji Se Samostalno Održava

Ako želite sami hostirati sadržaj, prvo `md/.i18n/htm/ol.yml` i promijenite `v: //unpkg.com/i18n.site` u svoj URL prefiks, kao što je `v: //i18n-v.xxx.com` !

Unesite `md` i pokrenite

```
i18n.site --htm_conf ol --save
```

ili skraćenica

```
i18n.site -c ol -s
```

Zatim konfigurirajte sadržaj u `md/out/ol/v` na stazu prefiksa URL-a postavljenu u `v:` .

Konačno, **konfigurirajte vrijeme keširanja putanje `/.v` se završava na `1s`** , inače se ne može odmah pristupiti novo objavljenom sadržaju.

Vrijeme keširanja za druge staze može se postaviti na godinu dana ili više da bi se smanjili nepotrebni zahtjevi.

##### Hostujte Sadržaj Na s3

Da + sami hostirali sadržaj, osim korištenja vlastitog servera, još jedna uobičajena opcija je `CDN` koristite `S3`

Možete koristiti [rclone](https://rclone.org) `S3` , zatim pogledati i izmijeniti skriptu u nastavku i kopirati samo inkrementalne promjene na `S3` svaki put!

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Ne zaboravite konfigurirati `CDN` tako da vrijeme keširanja putanje koja se završava na `/.v` bude `1s` , inače nećete moći odmah pristupiti novo objavljenom sadržaju.

### Objaviti Web Stranicu

Web lokacija se može postaviti bilo gdje [github page](https://pages.github.com) i [cloudflare page](https://pages.cloudflare.com) su dobar izbor.

Budući da web stranica usvaja arhitekturu [aplikacije na jednoj stranici](https://developer.mozilla.org/docs/Glossary/SPA) , `index.html` zaboravite da prepišete URL putanju koja ne sadrži `. `

Stranicu za ulazak na web mjesto potrebno je samo jednom implementirati i nema potrebe za ponovnim postavljanjem stranice za unos web stranice za naknadna ažuriranja sadržaja.

#### Postavite Na github Stranicu

Prvo [kliknite github da biste kreirali organizaciju](https://github.com/account/organizations/new?plan=free) `i18n-demo` primjer.

Zatim kreirajte skladište pod ovom `i18n-demo.github.io` (zamijenite `i18n-demo` imenom organizacije koju ste kreirali):

<img alt="" src="https://p.3ti.site/1721098657.avif">

Prilikom objavljivanja sadržaja u prethodnom članku, on je generiran `out/ol/htm` Molimo unesite ovaj direktorij i pokrenite :

```
ln -s index.html 404.html
```


Zato što ne podržava prepisivanje URL putanje, pa se umjesto toga koristi `404.html` `github page`

Zatim pokrenite sljedeću naredbu u `htm` (ne zaboravite da zamijenite `i18n-demo/i18n-demo.github.io.git` sa svojom adresom skladišta) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Nakon što pritisnete kod, pričekajte da se implementacija `github page`

<img src="//p.3ti.site/1721116586.avif" width="350px">

Za demo stranicu pogledajte:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Postavite Na cloudflare Stranicu

[cloudflare page](//pages.cloudflare.com) poređenju `github page` , omogućava prepisivanje putanje i pristupačniji je za upotrebu.

`cloudflare page` Postavljanje se obično zasniva na implementaciji `github page` iznad.

Kreirajte projekat i povežite gore navedeno skladište `i18n-demo.github.io`

Proces je prikazan na slici ispod:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

Molimo `Add Account` da odobrite pristup `i18n-demo` .

Ako ste povezali skladište druge organizacije, možda ćete morati dvaput `Add Account` da ga ovlastite prije nego što se nova organizacija prikaže.

<img alt="" src="https://p.3ti.site/1721118306.avif">

Zatim `i18n-demo.github.io` Skladište, zatim kliknite `Begin setup` i koristite zadane vrijednosti za sljedeće korake.

<img alt="" src="https://p.3ti.site/1721118490.avif">

Nakon povezivanja po prvi put, morate pričekati nekoliko minuta prije nego što mu možete pristupiti.

Nakon implementacije, možete vezati prilagođeno ime domene.

<img alt="" src="https://p.3ti.site/1721119459.avif">

Nakon povezivanja prilagođenog imena domene, molimo idite na ime domene da konfigurišete ponovno upisivanje putanje aplikacije na jednoj stranici, kao što je prikazano u nastavku:

<img alt="" src="https://p.3ti.site/1721119320.avif">

Pravila na gornjoj slici su sljedeća. `i18n.site` u prvom redu ispod sa imenom domene.

```
(http.host in {"i18n.site"}) and not (
ends_with(http.request.uri.path,".html") or
ends_with(http.request.uri.path,".htm") or
ends_with(http.request.uri.path,".ico") or
ends_with(http.request.uri.path,".js") or
ends_with(http.request.uri.path,".avif") or
ends_with(http.request.uri.path,".css") or
ends_with(http.request.uri.path,".json") or
ends_with(http.request.uri.path,".png") or
ends_with(http.request.uri.path,".svg") or
ends_with(http.request.uri.path,".txt") or
ends_with(http.request.uri.path,".webmanifest") or
ends_with(http.request.uri.path,".xml")
)
```

Osim toga, konfigurirajte pravila keširanja, kao što je prikazano u nastavku, i postavite trajanje keša na jedan mjesec.

<img alt="" src="https://p.3ti.site/1721125111.avif">

Molimo promijenite naziv domene koji se podudara u drugom koraku na slici iznad u naziv domene koji ste vezali.

#### Optimiziranje Implementacije Web Stranice U Kontinentalnoj Kini

Ako želite postići bolje performanse pristupačnosti u mrežnom okruženju kontinentalne Kine, prvo [registrirajte naziv domene](//beian.aliyun.com) .

Zatim koristite skladištenje `out/ol/htm` dobavljača u kontinentalnoj `CDN` +

Možete koristiti rubno računanje da prepišete putanju kako biste se prilagodili aplikacijama na jednoj stranici, kao što je [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) Može se konfigurirati ovako:

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
<img alt="" src="https://p.3ti.site/1721121273.avif">

Budući `MX` zapisi i `CNAME` zapisi `A` mogu koegzistirati, ako želite istovremeno primati e-poruke sa imenom domene, morate sarađivati `CNAME` skriptom [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten)

Osim toga, budući da su naknade za promet u inozemstvu dobavljača u oblaku u kontinentalnoj Kini relativno skupe, ako želite optimizirati troškove, možete koristiti [besplatnu geografsku rezoluciju DNS Huawei](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) i prilagođeno ime domene [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (kao što je prikazano u nastavku). preusmeravanje saobraćaja──Saobraćaj u kontinentalnoj Kini Baidu Cloud `CDN` međunarodni saobraćaj ide cloudflare .

<img alt="" src="https://p.3ti.site/1721119788.avif">

Ova rješenja za optimizaciju implementacije su složenija i biće predstavljena u posebnim poglavljima u budućnosti.

#### Generičko Preusmjeravanje Imena Domene

Ako koristite `i18n.site` za generiranje web stranice kao svoju glavnu web stranicu, obično morate konfigurirati preusmjeravanje pan-domene, odnosno preusmjeriti `*.xxx.com` (uključujući `www.xxx.com` ) pristup `xxx.com` .

Ovaj zahtjev `EdgeScript` može postići uz pomoć Alibaba Cloud `CDN` a ( [dokument na engleskom](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [kineski dokument](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )!

Dodajte naziv domene u [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) i usmjerite `*.xxx.com` domene na Alibaba Cloud `CDN` `CNAME` .

<img alt="" src="https://p.3ti.site/1721122000.avif">

Na primjer, konfiguracija preusmjeravanja `*.i18n.site` pan-domene na gornjoj slici je sljedeća:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### Postavite Sa Nginxom

Molimo dodajte konfiguraciju sličnu sljedećoj u `server` nginx gdje `/root/i18n/md/out/ol/htm` molimo promijenite je u putanju vašeg vlastitog projekta `out/ol/htm` :

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

#### Javnosti

Statičke datoteke web stranice, kao što su `favicon.ico` `robots.txt` , itd.

Datoteke ikona ovdje se mogu generirati pomoću [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n

`.i18n` Ispod direktorija su konfiguracijske datoteke `i18n.site` , keš memorija itd. Za detalje pogledajte sljedeće poglavlje ["Konfiguracija"](/i18n.site/conf) .

#### en

Direktorij izvornog jezika, koji `.i18n/conf.yml` `fromTo` `en` u konfiguracijskoj datoteci

```yaml
i18n:
  fromTo:
    en: zh
```

Molimo pogledajte konfiguraciju prijevoda [i18](/i18/use)

