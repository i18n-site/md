# Instalați &

## Jeton De Configurare

Instrumentul de traducere `i18` este încorporat `i18n.site` vă rugăm [să faceți clic aici pentru a consulta documentul `i18` pentru a configura simbolul de acces](/i18/use) .

## Instalare

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Proiect Demonstrativ

Să începem cu un proiect demonstrativ și să învățăm cum să folosim `i18n.site`

Mai întâi clonăm depozitul demo și rulăm comanda după cum urmează:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Utilizatorii din China continentală pot:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

`demo.i18n.site` directorului clonei de bază de cod trebuie să fie `md` pentru a facilita previzualizarea locală cu `docker` .

### Traduceți

Mai întâi, introduceți `md` și rulați `i18n.site` , care se va traduce `en` în `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

După rulare, vor fi generate fișierele de traducere și cache. Vă rugăm să le adăugați în `md` `git add . ` .

### Previzualizare Locală

`docker` [orbstack](https://orbstack.dev) `MAC` `docker`

Apoi, introduceți directorul `docker` și rulați `./up.sh` , apoi vizitați [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Postați Conținut

`i18n.site` Adoptă o arhitectură [de aplicație cu o singură pagină](https://developer.mozilla.org/docs/Glossary/SPA) , iar pagina de intrare a site-ului web și conținutul site-ului sunt implementate independent.

După rularea traducerii de mai sus, directoarele `htm` și `v` vor fi generate în directorul `md/out/dev`

Aici, `dev` indică faptul că este construit pe baza fișierului `.i18n/htm/dev.yml` .

Sub : `dev`

Sub director este pagina de intrare a site- `htm` .

`v` Directorul conține conținutul site-ului web cu numărul de versiune.

Previzualizarea locală va copia toate fișierele în directorul `out/dev/v/0.1.0` , indiferent de numărul versiunii.

Pentru lansarea oficială, fișierele modificate vor fi copiate în noul director cu numărul de versiune.

#### Utilizați -c Pentru a Specifica Fișierul De Configurare

Diferite fișiere de configurare vor crea directoare corespunzătoare în directorul `out`

De exemplu, `.i18n/htm/ol.yml` va crea un director `out/ol` .

`dev.yml` și `ol.yml` sunt configurațiile implicite.

`dev` este abrevierea lui `development` , care reprezintă mediul de dezvoltare, este folosită pentru previzualizarea locală și este, de asemenea, fișierul de configurare implicit.
este abrevierea lui `online` , care reprezintă mediul online, este folosită pentru lansarea oficială și este, de asemenea `ol` fișierul de configurare implicit când se publică în `npm` folosind parametrul de linie de comandă `-n` .

De asemenea, puteți crea alte fișiere de configurare `--htm_conf` pe linia de comandă pentru a specifica numele fișierului de configurare:

de exemplu:
```
i18n.site --htm_conf yourConfig --save
```

`--save` indică numărul versiunii de actualizare.

#### <a rel=id href="#npm" id="npm"></a> Publicați conținut pe npmjs.com

Publicarea conținutului în [npmjs.com](//npmjs.com) este soluția implicită recomandată (consultați [Disponibilitate ridicată front-end](/i18n.site/feature#ha) ).

##### npm login & Eliberare

Instalați `nodejs` utilizați `npm login` pentru a vă autentifica.

Editați `md/.i18n/htm/ol.yml` schimbați `i18n.site` din `v: //unpkg.com/i18n.site` în propriul dvs. `npm` numele pachetului.

Utilizați doar numele pachetului neocupat pe [npmjs.com](//npmjs.com)

Când `i18n.site` pe baza pachetului `npm` , asigurați-vă `/.v` **utilizați `//unpkg.com/`** ca prefix al valorii `v:` .

Rulați `i18n.site --npm` sau `i18n.site -n` în directorul `md`

Dacă utilizați un mediu de integrare continuă pentru a publica, nu este nevoie să îl `nodejs` Doar copiați permisiunea autentificată și publicată `~/.npmrc` în mediu.

Dacă modificați numele pachetului în `v:` `ol.yml` , **asigurați-vă că mai întâi ștergeți `.i18n/v/ol`** și apoi îl publicați.

##### Server Proxy Publicat De npm

Dacă utilizatorii din China continentală întâmpină probleme de rețea și nu pot publica pachetul `npm` , aceștia pot seta variabila de mediu `https_proxy` pentru a configura serverul proxy.

Presupunând că portul serverului dumneavoastră proxy este `7890` puteți scrie:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Conținut Auto-Găzduit

Dacă doriți să găzduiți singur conținutul, mai întâi `md/.i18n/htm/ol.yml` și schimbați `v: //unpkg.com/i18n.site` cu prefixul URL, cum ar fi `v: //i18n-v.xxx.com` .

Intră în directorul `md`

```
i18n.site --htm_conf ol --save
```

sau abreviere

```
i18n.site -c ol -s
```

Apoi, configurați conținutul din directorul `md/out/ol/v` la calea prefixului URL setată în `v:` .

În cele din urmă, **configurați timpul de cache al căii care se termină în `/.v` la `1s`** , altfel conținutul nou lansat nu poate fi accesat imediat.

Timpul de cache pentru alte căi poate fi setat la un an sau mai mult pentru a reduce solicitările inutile.

##### Găzduiește Conținut Pe s3

Pentru a auto-găzdui conținut, pe lângă utilizarea propriului server, + altă opțiune comună este `CDN` folosești `S3`

Puteți utiliza serverul Autentificare [rclone](https://rclone.org) `S3` apoi consultați și modificați scriptul de mai jos și copiați numai modificările incrementale în `S3` de fiecare dată când publicați.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Nu uitați să configurați `CDN` astfel încât timpul de cache al căii care se termină în `/.v` să fie `1s` , altfel nu veți putea accesa imediat conținutul nou lansat.

### Publica Site-Ul Web

Site-ul poate fi implementat oriunde [github page](https://pages.github.com) și [cloudflare page](https://pages.cloudflare.com) sunt alegeri bune.

Deoarece site-ul web adoptă arhitectura [unei aplicații cu o singură pagină](https://developer.mozilla.org/docs/Glossary/SPA) , nu uitați să rescrieți calea URL care nu `. ` la `index.html` .

Pagina de intrare a site-ului web trebuie să fie implementată o singură dată și nu este nevoie să redistribuiți pagina de intrare a site-ului web pentru actualizările ulterioare de conținut.

#### Implementați Pe Pagina github

Mai întâi [faceți clic github pentru a crea o organizație](https://github.com/account/organizations/new?plan=free) `i18n-demo`

Apoi creați un depozit sub această `i18n-demo.github.io` (Vă rugăm să înlocuiți `i18n-demo` cu numele organizației pe care l-ați creat):

<img alt="" src="https://p.3ti.site/1721098657.avif">

Când publicați conținutul din articolul precedent, acesta a fost generat `out/ol/htm` Vă rugăm să intrați în acest director și să rulați :

```
ln -s index.html 404.html
```


Deoarece `github page` nu acceptă rescrierea căii URL, deci `404.html` este folosit în schimb.

Apoi rulați următoarea comandă în directorul `htm` (nu uitați să înlocuiți `i18n-demo/i18n-demo.github.io.git` cu adresa dvs. de depozit) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

După ce ați apăsat codul, așteptați să ruleze cu succes implementarea `github page`

<img src="//p.3ti.site/1721116586.avif" width="350px">

Pentru pagina demo, consultați:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Implementați Pe Pagina cloudflare

În comparație cu [cloudflare page](//pages.cloudflare.com) , oferă rescrierea căii și `github page` mai prietenos cu China continentală și este mai accesibil.

`cloudflare page` Implementarea se bazează de obicei pe implementarea lui `github page` de mai sus.

Creați un proiect și legați depozitul de mai sus `i18n-demo.github.io`

Procesul este prezentat în figura de mai jos:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

Vă rugăm `Add Account` faceți clic pentru a acorda acces la `i18n-demo` organizație .

Dacă ați legat depozitul unei alte organizații, poate fi necesar să faceți clic de două ori pentru a `Add Account` l autoriza de două ori înainte ca noua organizație să fie afișată.

<img alt="" src="https://p.3ti.site/1721118306.avif">

Apoi selectați `i18n-demo.github.io` Warehouse, apoi faceți clic pe `Begin setup` și utilizați valorile implicite pentru pașii următori.

<img alt="" src="https://p.3ti.site/1721118490.avif">

După prima legare, trebuie să așteptați câteva minute înainte de a-l putea accesa.

După implementare, puteți lega un nume de domeniu personalizat.

<img alt="" src="https://p.3ti.site/1721119459.avif">

După legarea numelui de domeniu personalizat, mergeți la numele domeniului pentru a configura rescrierea căii aplicației cu o singură pagină, după cum se arată mai jos:

<img alt="" src="https://p.3ti.site/1721119320.avif">

Regulile din imaginea de mai sus sunt după cum urmează `i18n.site`

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

În plus, vă rugăm să configurați regulile de cache, așa cum se arată mai jos, și să setați durata cache-ului la o lună.

<img alt="" src="https://p.3ti.site/1721125111.avif">

Vă rugăm să schimbați numele de domeniu care se potrivește în al doilea pas din imaginea de mai sus cu numele de domeniu pe care l-ați legat.

#### Optimizarea Implementării Site-Ului Web În China Continentală

Dacă doriți să obțineți performanțe de accesibilitate mai bune în mediul de rețea din China continentală, vă rugăm [să înregistrați mai întâi un nume de domeniu](//beian.aliyun.com) .

Apoi, utilizați stocarea `CDN` obiecte a furnizorilor de cloud din China `out/ol/htm` +

Puteți utiliza edge computing pentru a rescrie calea pentru a se adapta la aplicații cu o singură pagină, cum ar fi [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) Poate fi configurat astfel:

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

Deoarece `MX` și `CNAME` înregistrările nu pot coexista, dacă doriți să primiți e-mailuri cu numele de domeniu în același timp, trebuie să cooperați cu [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) pentru a aplatiza `CNAME` în `A` record.

În plus, deoarece taxele de trafic din străinătate ale furnizorilor de cloud din China continentală sunt relativ scumpe, dacă doriți să optimizați costurile, puteți utiliza [rezoluția geografică gratuită a DNS Huawei Cloud](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) și numele de domeniu personalizat [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (după cum se arată mai jos). devierea traficului──Traficul în China continentală Baidu Cloud `CDN` traficul internațional merge cloudflare .

<img alt="" src="https://p.3ti.site/1721119788.avif">

Aceste soluții de optimizare a implementării sunt mai complexe și vor fi introduse în capitole separate în viitor.

#### Redirecționarea Numelui De Domeniu Generic

Dacă utilizați `i18n.site` pentru a genera un site web ca site principal, de obicei trebuie să configurați redirecționarea pe domenii, adică redirecționarea accesului `*.xxx.com` (inclusiv `www.xxx.com` ) către `xxx.com` .

Această cerință poate fi realizată cu ajutorul lui Alibaba `EdgeScript` `CDN` [document în limba engleză](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [document chinezesc](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Adăugați un nume de domeniu în [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) și îndreptați `*.xxx.com` de domeniu către Alibaba Cloud `CDN` `CNAME` .

<img alt="" src="https://p.3ti.site/1721122000.avif">

De exemplu, configurația de redirecționare a `*.i18n.site` pan-domeniu din imaginea de mai sus este următoarea:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### Implementați Cu nginx

Vă rugăm să adăugați o configurație similară următoarei în `server` nginx unde `/root/i18n/md/out/ol/htm` vă rugăm să o schimbați în calea propriului dvs. proiect `out/ol/htm` :

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Structura Directorului

#### public

Fișierele statice ale site-ului web, cum ar fi `favicon.ico` `robots.txt` etc.

Fișierele pictograme de aici pot fi generate cu [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n

Sub `.i18n` se află fișierele de configurare ale lui `i18n.site` , memoria cache de traducere etc. Consultați următorul capitol [„Configurare”](/i18n.site/conf) pentru detalii.

#### Ro

Directorul limbii sursă, care corespunde `.i18n/conf.yml` `fromTo` `en` din fișierul de configurare

```yaml
i18n:
  fromTo:
    en: zh
```

Vă rugăm să consultați configurația traducerii [i18](/i18/use)

