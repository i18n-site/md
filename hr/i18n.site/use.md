# Instaliraj &

## Konfiguracijski Token

`i18n.site` Alat za `i18` je ugrađen, [kliknite ovdje da biste pogledali dokument `i18` za konfiguraciju tokena za pristup](/i18/use) .

## Instalirati

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Demo Projekt

Počnimo s demo projektom i naučimo kako se koristiti `i18n.site`

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

`demo.i18n.site` Ime direktorija klona baze koda mora biti `md` kako bi se olakšao lokalni pregled s `docker` .

### Prevedi

Prvo unesite direktorij `md` i pokrenite `i18n.site` , što će prevesti `en` u `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Nakon pokretanja, datoteke prijevoda i predmemorije bit će generirane. Ne zaboravite ih dodati u repozitorij `git add . ` u direktoriju `md`

### Lokalni Pregled

Instalirajte i pokrenite `docker` ( `MAC` preporučuju korištenje [orbstack](https://orbstack.dev) kao vrijeme izvođenja `docker` ).

Zatim uđite u direktorij `docker` i pokrenite `./up.sh` , a zatim posjetite [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Objavite Sadržaj

`i18n.site` Usvaja arhitekturu [aplikacije na jednoj stranici](https://developer.mozilla.org/docs/Glossary/SPA) , a ulazna stranica web stranice i sadržaj web stranice raspoređeni su neovisno.

Nakon pokretanja gornjeg prijevoda, direktoriji `htm` i `v` bit će generirani u direktoriju `md/out/dev`

Ovdje `dev` označava da je izgrađen na temelju `.i18n/htm/dev.yml` datoteke.

Pod : `dev`

`htm` imenika je ulazna stranica web stranice.

`v` sadrži sadržaj web stranice s brojem verzije.

Lokalni pregled kopirat će sve datoteke u direktorij `out/dev/v/0.1.0` bez obzira na broj verzije.

Za službeno izdanje, promijenjene datoteke će se kopirati u direktorij s novim brojem verzije.

#### Koristite -c Za Navođenje Konfiguracijske Datoteke

Različite konfiguracijske datoteke će stvoriti odgovarajuće direktorije u direktoriju `out`

Na primjer, `.i18n/htm/ol.yml` će stvoriti `out/ol` imenik.

`dev.yml` i `ol.yml` su zadane konfiguracije.

`dev` je skraćenica od `development` , koja predstavlja razvojno okruženje, koristi se za lokalni pregled, a također je zadana konfiguracijska datoteka.
`ol` je skraćenica od `online` , koja predstavlja mrežno okruženje, koristi se za službeno izdanje, a također je zadana konfiguracijska datoteka prilikom objavljivanja u `npm` upotrebom parametra naredbenog retka `-n` .

Također možete stvoriti druge konfiguracijske datoteke `--htm_conf` naredbenom retku za navođenje naziva konfiguracijske datoteke:

na primjer:
```
i18n.site --htm_conf yourConfig --save
```

Ovdje `--save` označava broj verzije ažuriranja.

#### <a rel=id href="#npm" id="npm"></a> Objavite sadržaj na npmjs.com

Objavljivanje sadržaja [npmjs.com](//npmjs.com) preporučenom zadanom rješenju (pogledajte [Front-end High Availability](/i18n.site/feature#ha) ).

##### npm login & Puštanje

Instalirajte `nodejs` koristite `npm login` za prijavu.

Uredite `md/.i18n/htm/ol.yml` promijenite `i18n.site` u `v: //unpkg.com/i18n.site` u svoj `npm` naziv paketa.

Samo koristite naziv nezauzetog paketa na [npmjs.com](//npmjs.com)

Kada objavljujete na temelju paketa `npm` , **obavezno koristite `//unpkg.com/`** kao prefiks vrijednosti `v:` . Vrijeme predmemorije `i18n.site` pod ovim prefiksom `/.v` je posebno optimizirano kako bi se omogućilo pravovremeno pregledavanje novih izdanja.

Pokrenite `i18n.site --npm` ili `i18n.site -n` u direktoriju `md` da prevedete i objavite.

Ako koristite kontinuirano integracijsko okruženje za objavljivanje, nema potrebe da ga instalirate `nodejs` Samo kopirajte prijavljeno i objavljeno dopuštenje `~/.npmrc` u okruženje.

Ako promijenite naziv paketa u `v:` u `ol.yml` , **svakako prvo izbrišite `.i18n/v/ol`** , a zatim ga objavite.

##### Proxy Poslužitelj Objavio npm

Ako korisnici u kontinentalnoj Kini naiđu na probleme s mrežom i ne mogu objaviti paket `npm` , mogu postaviti varijablu okruženja `https_proxy` za konfiguraciju proxy poslužitelja.

Pod pretpostavkom da je port vašeg proxy poslužitelja `7890` možete napisati:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Sadržaj Koji Sam Hostiram

Ako želite sami hostirati sadržaj, prvo uredite `md/.i18n/htm/ol.yml` i promijenite `v: //unpkg.com/i18n.site` u svoj URL prefiks, kao što je `v: //i18n-v.xxx.com` .

Unesite direktorij `md` i pokrenite

```
i18n.site --htm_conf ol --save
```

ili skraćenica

```
i18n.site -c ol -s
```

Zatim konfigurirajte sadržaj u `md/out/ol/v` prema URL prefiksu postavljenom u `v:` .

Na kraju, **konfigurirajte vrijeme predmemorije putanje koja `/.v` na `1s`** , inače se novoobjavljenom sadržaju ne može pristupiti odmah.

Vrijeme predmemorije za druge staze može se postaviti na jednu godinu ili više kako bi se smanjili nepotrebni zahtjevi.

##### Host Sadržaja Na s3

Za samostalno postavljanje `CDN` , uz korištenje vlastitog poslužitelja, još jedna uobičajena opcija je + `S3`

Možete koristiti [rclone](https://rclone.org) Login `S3` poslužitelj, zatim pogledati i modificirati skriptu u nastavku i kopirati samo inkrementalne promjene u `S3` svaki put kada objavite.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Ne zaboravite konfigurirati `CDN` tako da vrijeme predmemorije staze koja završava s `/.v` bude `1s` , inače nećete moći odmah pristupiti novoobjavljenom sadržaju.

### Objaviti Web Stranicu

Web mjesto se može postaviti bilo gdje [github page](https://pages.github.com) i [cloudflare page](https://pages.cloudflare.com) su dobar izbor.

Budući `index.html` web-mjesto usvaja arhitekturu [jednostraničke aplikacije](https://developer.mozilla.org/docs/Glossary/SPA) , ne zaboravite prepisati URL putanju koja ne sadrži `. ` .

Ulaznu stranicu web-mjesta potrebno je implementirati samo jednom i nema potrebe ponovno postavljati ulaznu stranicu web-mjesta za naknadna ažuriranja sadržaja.

#### Implementiraj Na github Stranici

Prvo [kliknite ovdje github](https://github.com/account/organizations/new?plan=free) Sljedeći naziv organizacije je `i18n-demo`

Zatim stvorite skladište pod ovom `i18n-demo.github.io` (zamijenite `i18n-demo` s imenom organizacije koju ste stvorili):

<img alt="" src="https://p.3ti.site/1721098657.avif">

Prilikom objavljivanja sadržaja u prethodnom članku, on je generiran `out/ol/htm` Unesite ovaj direktorij i pokrenite :

```
ln -s index.html 404.html
```


Jer `github page` ne podržava prepisivanje URL putanje, pa se umjesto toga koristi `404.html` .

Zatim pokrenite sljedeću naredbu u `htm` (ne zaboravite zamijeniti `i18n-demo/i18n-demo.github.io.git` svojom vlastitom adresom skladišta) :

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

#### Implementacija Na Stranici cloudflare

U usporedbi [cloudflare page](//pages.cloudflare.com) `github page` , omogućuje prepisivanje putanje i pristupačniji je za korištenje.

`cloudflare page` Primjena se obično temelji na primjeni `github page` gore.

Napravite projekt i povežite gore navedeno `i18n-demo.github.io`

Proces je prikazan na slici ispod:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

Kliknite `Add Account` biste odobrili pristup `i18n-demo` .

Ako ste vezali skladište druge organizacije, možda ćete morati dvaput kliknuti `Add Account` da biste ga dva puta autorizirali prije nego što se prikaže nova organizacija.

<img alt="" src="https://p.3ti.site/1721118306.avif">

Zatim odaberite `i18n-demo.github.io` Warehouse, zatim kliknite `Begin setup` i koristite zadane vrijednosti za sljedeće korake.

<img alt="" src="https://p.3ti.site/1721118490.avif">

Nakon prvog uvezivanja morate pričekati nekoliko minuta prije nego što mu možete pristupiti.

Nakon implementacije možete vezati prilagođeni naziv domene.

<img alt="" src="https://p.3ti.site/1721119459.avif">

Nakon vezanja prilagođenog naziva domene, idite na naziv domene da biste konfigurirali ponovno pisanje staze jednostraničke aplikacije, kao što je prikazano u nastavku:

<img alt="" src="https://p.3ti.site/1721119320.avif">

Pravila na gornjoj slici su sljedeća: zamijenite `i18n.site`

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

Osim toga, konfigurirajte pravila predmemorije, kao što je prikazano u nastavku, i postavite trajanje predmemorije na jedan mjesec.

<img alt="" src="https://p.3ti.site/1721125111.avif">

Promijenite naziv domene koji odgovara u drugom koraku na gornjoj slici na naziv domene koji ste vezali.

#### Optimiziranje Postavljanja Web Stranice U Kontinentalnoj Kini

Ako želite postići bolje performanse pristupačnosti u mrežnom okruženju kontinentalne Kine, prvo [registrirajte naziv domene](//beian.aliyun.com) .

Zatim upotrijebite pohranu objekata u oblaku `CDN` `out/ol/htm` Kini +

Možete koristiti rubno računalstvo za prepisivanje putanje za prilagodbu aplikacijama s jednom stranicom, kao što je [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) Može se konfigurirati ovako:

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

Budući da zapisi `MX` i `CNAME` zapisi ne mogu postojati, ako želite primati e-poštu `A` nazivom domene u isto vrijeme, morate surađivati `CNAME` skriptom [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten)

Osim toga, budući da su naknade za promet u inozemstvu dobavljača u oblaku u kontinentalnoj Kini relativno skupe, ako želite optimizirati troškove, možete upotrijebiti [besplatnu geografsku rezoluciju usluge Huawei DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) i prilagođeni naziv domene [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (kao što je prikazano u nastavku). preusmjeravanje prometa──Promet u kontinentalnoj Kini Baidu Cloud `CDN` međunarodni promet ide cloudflare .

<img alt="" src="https://p.3ti.site/1721119788.avif">

Ova rješenja za optimizaciju implementacije su složenija i bit će predstavljena u zasebnim poglavljima u budućnosti.

#### Generičko Preusmjeravanje Imena Domene

Ako koristite `i18n.site` generiranje web-mjesta kao svoje glavno web-mjesto, obično morate konfigurirati preusmjeravanje na sve domene, odnosno preusmjeriti `*.xxx.com` (uključujući `www.xxx.com` ) pristup na `xxx.com` .

Ovaj zahtjev se može postići uz pomoć Alibaba Cloud `CDN` a `EdgeScript` ( [engleski dokument](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [kineski dokument](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Dodajte naziv domene u [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) i usmjerite `*.xxx.com` domene na `CNAME` Alibaba Cloud `CDN` .

<img alt="" src="https://p.3ti.site/1721122000.avif">

Na primjer, konfiguracija preusmjeravanja naziva pan-domene `*.i18n.site` na gornjoj slici je sljedeća:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### Implementirajte S Nginxom

Molimo dodajte konfiguraciju sličnu sljedećoj u `server` nginx gdje je `/root/i18n/md/out/ol/htm` promijenite na putanju vašeg projekta `out/ol/htm` :

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

#### Javnost

Statičke datoteke web stranice, kao što su `favicon.ico` `robots.txt` itd.

Datoteke ikona ovdje se mogu generirati pomoću [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n

`.i18n` U direktoriju su `i18n.site` konfiguracijske datoteke, predmemorija prijevoda, itd. Pogledajte sljedeće poglavlje ["Konfiguracija"](/i18n.site/conf) za detalje.

#### Hr

Direktorij izvornog jezika, koji `.i18n/conf.yml` `fromTo` `en` u konfiguracijskoj datoteci

```yaml
i18n:
  fromTo:
    en: zh
```

Molimo pogledajte konfiguraciju prijevoda [i18](/i18/use)

