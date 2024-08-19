# Instalați &

## Jeton de configurare

`i18n.site` include un instrument de traducere încorporat `i18`. Vă rugăm [să faceți clic aici pentru a consulta documentația `i18` pentru a configura tokenul de acces](/i18/use).

## Instalare

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Proiect demonstrativ

Să începem cu un proiect demonstrativ pentru a învăța cum să folosim `i18n.site`.

Mai întâi, clonăm depozitul de demonstrare și rulăm comanda următoare:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Utilizatorii din China continentală pot:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

Numele directorului de clonare al bazei de cod `demo.i18n.site` trebuie să fie `md`, pentru a facilita previzualizarea locală cu `docker`.

### Traducere

Mai întâi, intrați în directorul `md` și rulați `i18n.site`, care va traduce de la `en` la `zh`.

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

După rulare, vor fi generate fișierele de traducere și fișierele de cache. Vă rugăm să nu uitați să adăugați la versiune `git add .` în directorul `md`.

### Previzualizare locală

Instalați și porniți `docker` ( `MAC` utilizator recomandă utilizarea [orbstack](https://orbstack.dev) ca timp de rulare pentru `docker` ).

Apoi, intrați în directorul `docker` și rulați `./up.sh`, apoi accesați [https://127.0.0.1](https://127.0.0.1) pentru a efectua previzualizarea locală.

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Publicare conținut

`i18n.site` adoptă arhitectura [aplicației cu o singură pagină](https://developer.mozilla.org/docs/Glossary/SPA), iar pagina de intrare a site-ului web și conținutul site-ului sunt implementate independent.

După rularea traducerii de mai sus, directoarele `htm` și `v` vor fi generate în directorul `md/out/dev`.

Aici, `dev` înseamnă că este construit pe baza fișierului de configurare `.i18n/htm/dev.yml`.

Directorul `dev`:

Directorul `htm` conține pagina de intrare a site-ului.

Directorul `v` conține conținutul site-ului cu numărul de versiune.

Previzualizarea locală nu ia în considerare numărul de versiune și va copia toate fișierele în directorul `out/dev/v/0.1.0`.

Pentru lansarea oficială, fișierele modificate vor fi copiate în noul director cu numărul de versiune.

#### Utilizați -c pentru a specifica fișierul de configurare

Diferite fișiere de configurare vor crea directoare corespunzătoare în directorul `out`.

De exemplu, `.i18n/htm/ol.yml` va crea directorul `out/ol`.

`dev.yml` și `ol.yml` sunt configurațiile implicite.

`dev` este abrevierea de la `development`, indicând mediul de dezvoltare, utilizat pentru previzualizarea locală și este, de asemenea, fișierul de configurare implicit.
`ol` este abrevierea de la `online`, indicând mediul online, utilizat pentru lansarea oficială. Este, de asemenea, fișierul de configurare implicit atunci când se folosește parametrul de linie de comandă `-n` pentru `npm`.

De asemenea, puteți crea alte fișiere de configurare. Utilizați `--htm_conf` pe linia de comandă pentru a specifica numele fișierului de configurare de utilizat:

de exemplu:
```
i18n.site --htm_conf yourConfig --save
```

Aici `--save` reprezintă actualizarea versiunii.

#### <a rel=id href="#npm" id="npm"></a> Publicare conținut pe npmjs.com

Publicarea conținutului pe [npmjs.com](//npmjs.com) este soluția implicită recomandată ( consultați [Disponibilitate ridicată front-end](/i18n.site/feature#ha) ).

##### npm login și publicare

Instalați `nodejs`, autentificați-vă folosind `npm login`.

Editați `md/.i18n/htm/ol.yml` și schimbați `i18n.site` în `v: //unpkg.com/i18n.site` cu numele pachetului dvs. `npm` propriu.

Utilizați doar numele pachetului neocupat de pe [npmjs.com](//npmjs.com).

Când publicați pe baza pachetului `npm`, **asigurați-vă că utilizați `//unpkg.com/` ca prefix pentru `v:`**, valoarea `i18n.site` a optimizat în mod special timpul de cache pentru `/.v` sub acest prefix pentru a obține vizualizarea în timp util a noilor versiuni.

Rulați `i18n.site --npm` sau `i18n.site -n` în directorul `md` pentru a traduce și a publica.

Dacă utilizați un mediu de integrare continuă pentru a publica, nu este necesar să instalați `nodejs`. Copiați doar permisiunile de conectare și de publicare `~/.npmrc` în acest mediu.

Dacă modificați numele pachetului `v:` în `ol.yml`, **asigurați-vă că ștergeți mai întâi `.i18n/v/ol`** și apoi publicați.

##### Server proxy pentru publicare npm

Dacă utilizatorii din China continentală întâmpină probleme de rețea și nu pot publica pachete `npm`, pot seta variabila de mediu `https_proxy` pentru a configura serverul proxy.

Presupunând că portul serverului proxy este `7890`, puteți scrie:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Conținut auto-găzduit

Dacă doriți să găzduiți conținutul auto, mai întâi editați `md/.i18n/htm/ol.yml` și schimbați `v: //unpkg.com/i18n.site` cu prefixul URL, de exemplu `v: //i18n-v.xxx.com`.

Introduceți directorul `md` și rulați

```
i18n.site --htm_conf ol --save
```

sau abreviere

```
i18n.site -c ol -s
```

Apoi, configurați conținutul din directorul `md/out/ol/v` la calea prefixului URL setată în `v:`.

În cele din urmă, **configurați timpul de cache al căii care se termină în `/.v` la `1s`**, altfel conținutul nou lansat nu poate fi accesat imediat.

Timpul de cache pentru alte căi poate fi setat la un an sau mai mult pentru a reduce solicitările inutile.

##### Găzduiți conținut pe S3

Pentru a găzdui conținut auto, pe lângă utilizarea propriului server, o altă opțiune comună este să utilizați `S3` + `CDN`.

Puteți utiliza [rclone](https://rclone.org) pentru a vă conecta la serverul `S3`, apoi faceți referire și modificați scriptul de mai jos și copiați doar modificările incrementale la `S3` pentru fiecare versiune.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Nu uitați să configurați `CDN` astfel încât timpul de cache al căii care se termină în `/.v` să fie `1s`, altfel conținutul nou lansat nu poate fi accesat imediat.

### Publicare site web

Site-ul poate fi implementat oriunde [github page](https://pages.github.com) și [cloudflare page](https://pages.cloudflare.com) sunt alegeri bune.

Deoarece site-ul web folosește arhitectura [aplicației cu o singură pagină](https://developer.mozilla.org/docs/Glossary/SPA), nu uitați să rescrieți căile URL care nu conțin `. ` la `index.html`.

Pagina de intrare a site-ului web trebuie să fie implementată o singură dată și nu este necesar să redistribuiți pagina de intrare a site-ului web pentru actualizările ulterioare de conținut.

#### Implementare pe pagina github

Mai întâi [faceți clic pe github pentru a crea o organizație](https://github.com/account/organizations/new?plan=free). Numele organizației următoare este `i18n-demo`.

Apoi creați depozitul `i18n-demo.github.io` sub această organizație (vă rugăm să înlocuiți `i18n-demo` cu numele organizației pe care l-ați creat):

![](https://p.3ti.site/1721098657.avif)

La publicarea conținutului din articolul precedent, a fost generat `out/ol/htm`. Vă rugăm să introduceți acest director și să rulați:

```
ln -s index.html 404.html
```


Deoarece `github page` nu acceptă rescrierea căii URL, se folosește în schimb `404.html`.

Apoi rulați următoarea comandă în directorul `htm` (nu uitați să înlocuiți `i18n-demo/i18n-demo.github.io.git` cu propria adresă de depozit):

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

După ce ați apăsat codul, așteptați ca implementarea lui `github page` să ruleze cu succes (după cum se arată mai jos) înainte de a-l putea accesa.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Pentru pagina demo, consultați:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Implementare pe pagina cloudflare

În comparație cu [cloudflare page](//pages.cloudflare.com), `github page` oferă rescrierea căii și este mai prietenos cu China continentală și mai accesibil.

Implementarea lui `cloudflare page` se bazează de obicei pe implementarea lui `github page` de mai sus.

Creați un proiect și legați depozitul `i18n-demo.github.io` de mai sus.

Procesul este prezentat în figura de mai jos:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Faceți clic pe `Add Account` pentru a acorda acces la organizația `i18n-demo`.

Dacă ați legat depozitul unei alte organizații, poate fi necesar să faceți clic pe `Add Account` de două ori pentru a autoriza de două ori înainte ca noua organizație să fie afișată.

![](https://p.3ti.site/1721118306.avif)

Apoi, selectați depozitul `i18n-demo.github.io`, apoi faceți clic pe `Begin setup` și utilizați valorile implicite pentru pașii următori.

![](https://p.3ti.site/1721118490.avif)

După prima legare, trebuie să așteptați câteva minute înainte de a-l putea accesa.

După implementare, puteți lega un nume de domeniu personalizat.

![](https://p.3ti.site/1721119459.avif)

După legarea numelui de domeniu personalizat, mergeți la numele domeniului pentru a configura rescrierea căii aplicației cu o singură pagină, după cum se arată mai jos:

![](https://p.3ti.site/1721119320.avif)

Regulile din imaginea de mai sus sunt următoarele. Vă rugăm să înlocuiți `i18n.site` din prima linie de mai jos cu numele de domeniu pe care l-ați legat.

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

![](https://p.3ti.site/1721125111.avif)

Vă rugăm să schimbați numele de domeniu care se potrivește în al doilea pas din imaginea de mai sus cu numele de domeniu pe care l-ați legat.

#### Optimizarea implementării site-ului web în China continentală

Dacă doriți să obțineți performanțe de accesibilitate mai bune în mediul de rețea din China continentală, vă rugăm [să înregistrați mai întâi un nume de domeniu](//beian.aliyun.com).

Apoi, utilizați stocarea obiectelor `out/ol/htm` a furnizorilor de cloud din China continentală și implementați următorul conținut `CDN`.

Puteți utiliza edge computing pentru a rescrie calea pentru a se adapta la aplicațiile cu o singură pagină. De exemplu, [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) poate fi configurat astfel:

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

Deoarece înregistrarea `MX` și înregistrarea `CNAME` nu pot coexista, dacă doriți să primiți e-mailuri cu numele de domeniu în același timp, trebuie să cooperați cu [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) la nivelul `CNAME` în înregistrarea `A`.

În plus, deoarece taxele de trafic din străinătate ale furnizorilor de cloud din China continentală sunt relativ scumpe, dacă doriți să optimizați costurile, puteți utiliza [rezoluția geografică gratuită a DNS Huawei Cloud](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) și numele de domeniu personalizat [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (după cum se arată mai jos) pentru a分流 traficul ── traficul în China continentală prin Baidu Cloud `CDN`, traficul internațional prin cloudflare.

![](https://p.3ti.site/1721119788.avif)

Aceste soluții de optimizare a implementării sunt mai complexe și vor fi introduse în capitole separate în viitor.

#### Redirecționarea numelui de domeniu generic

Dacă utilizați `i18n.site` pentru a genera un site web ca site principal, de obicei trebuie să configurați redirecționarea pe domenii, adică redirecționarea accesului la `*.xxx.com` (inclusiv `www.xxx.com`) la `xxx.com`.

Această cerință poate fi realizată cu ajutorul `EdgeScript` de la Alibaba Cloud `CDN` ( [document în limba engleză](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [document chinezesc](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Adăugați numele de domeniu în [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) și redirecționați domeniul `*.xxx.com` către `CNAME` în cadrul serviciului `CDN` al Alibaba Cloud.

![](https://p.3ti.site/1721122000.avif)

De exemplu, configurația de redirecționare a domeniului generic `*.i18n.site` din imaginea de mai sus este următoarea:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

#### Deplasare cu nginx

Vă rugăm să adăugați o configurație similară cu cea de mai jos în secțiunea `server` din nginx, unde `/root/i18n/md/out/ol/htm` trebuie înlocuit cu calea către directorul `out/ol/htm` al proiectului dumneavoastră:

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Structura directorului

#### `public`

Fișierele statice ale site-ului, cum ar fi `favicon.ico`, `robots.txt`, etc.

Iconurile de aici pot fi generate folosind [realfavicongenerator.net](https://realfavicongenerator.net).

#### `.i18n`

În directorul `.i18n` se află fișierele de configurare și cache-ul de traducere pentru `i18n.site`. Consultați capitolul următor [„Configurare”](/i18n.site/conf) pentru mai multe detalii.

#### `en`

Directorul limbii sursă, corespunzător valorii `en` din secțiunea `fromTo` a fișierului de configurare `.i18n/conf.yml`

```yaml
i18n:
  fromTo:
    en: zh
```

Consultați configurația traducerii în [i18](/i18/use).