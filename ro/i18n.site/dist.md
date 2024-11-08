# Implementare Și Online

`i18n.site` adoptă o arhitectură [de aplicație cu o singură pagină](https://developer.mozilla.org/docs/Glossary/SPA) , iar pagina de intrare a site-ului web și conținutul site-ului sunt implementate independent.

După rularea traducerii de mai sus, directoarele `htm` și `v` vor fi generate sub directorul `md/out/dev` .

Aici, `dev` înseamnă că este construit pe baza fișierului de configurare `.i18n/htm/dev.yml` .

`dev` director :

Directorul `htm` este pagina de intrare a site-ului.

Directorul `v` conține conținut de site cu numere de versiune.

Previzualizarea locală nu-i pasă de numărul versiunii și va copia toate fișierele în directorul `out/dev/v/0.1.0` .

Pentru lansarea oficială, fișierele modificate vor fi copiate în noul director cu numărul de versiune.

## Specificați Fișierul De Configurare Cu `-c`

Diferite fișiere de configurare vor crea directoare corespunzătoare în directorul `out` .

De exemplu, `.i18n/htm/main.yml` va crea directorul `out/main` .

`dev.yml` și `main.yml` sunt configurațiile implicite.

`dev` este abrevierea lui `development` , indicând mediul de dezvoltare, utilizat pentru previzualizarea locală și este, de asemenea, fișierul de configurare implicit.
`ol` este abrevierea lui `online` , indicând mediul online, care este folosit pentru lansarea oficială. Este, de asemenea, fișierul de configurare implicit atunci când se folosesc parametrii de la linia de comandă `-n` la `npm` .

De asemenea, puteți crea alte fișiere de configurare Utilizați `--htm_conf` pe linia de comandă pentru a specifica numele fișierului de configurare de utilizat:

de exemplu:
```
i18n.site --htm_conf dist --save
```

Aici `--save` reprezintă numărul versiunii de actualizare.

## <a rel=id href="#npm" id="npm"></a> Publicați conținut pe npmjs.com

Publicarea conținutului în [npmjs.com](//npmjs.com) este soluția implicită recomandată (consultați [Disponibilitate ridicată front-end](/i18n.site/feature#ha) ).

### npm & Post

Instalează `nodejs` , autentifică - te cu `npm login` .

Editați `md/.i18n/htm/main.yml` și schimbați valoarea de la [`md:`](//github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/main.yml#L7) `YOUR_NPM_PACKAGE` ca propriul nume de pachet `npm` [npmjs.com](//npmjs.com)

Apoi modificați `md/.i18n/htm/main.package.json`

Rulați `i18n.site --npm` sau `i18n.site -n` în directorul `md` pentru a traduce și a publica.

Dacă utilizați un mediu de integrare continuă pentru a publica, nu este nevoie să instalați `nodejs` Copiați doar permisiunile de conectare și de publicare `~/.npmrc` în mediu.

Dacă modificați numele pachetului `v:` în `main.yml` , **asigurați-vă că ștergeți mai întâi `.i18n/v/main`** și apoi îl publicați.

#### Server Proxy Publicat De npm

Dacă utilizatorii din China continentală întâmpină probleme de rețea și nu pot publica pachete `npm` , pot seta variabila de mediu `https_proxy` pentru a configura serverul proxy.

Presupunând că portul serverului dumneavoastră proxy este `7890` , puteți scrie:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

## Conținut Auto-Găzduit

Dacă doriți să autogăzduiți conținutul, mai întâi editați `md/.i18n/htm/main.yml` și schimbați `v: //unpkg.com/i18n.site` cu prefixul URL, cum ar fi `v: //i18n-v.xxx.com` .

Introduceți directorul `md` și rulați

```
i18n.site --htm_conf ol --save
```

sau abreviere

```
i18n.site -c ol -s
```

Apoi, configurați conținutul din directorul `md/out/main/v` la calea prefixului URL setată în `v:` .

În cele din urmă, **configurați timpul de cache al căii care se termină în `/.v` la `1s`** , altfel conținutul nou lansat nu poate fi accesat imediat.

Timpul de cache pentru alte căi poate fi setat la un an sau mai mult pentru a reduce solicitările inutile.

## Găzduiește Conținut Pe s3

Pentru a auto-găzdui conținut, pe lângă utilizarea propriului server, o `CDN` opțiune comună este să utilizați `S3` +

Puteți utiliza [rclone](https://rclone.org) pentru a vă conecta la serverul `S3` , apoi faceți referire și modificați următorul script și copiați doar modificările incrementale la `S3` pentru fiecare ediție.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/main/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/main/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/main/v/.v "$s3:/$bucket/"
```

Nu uitați să configurați `CDN` astfel încât timpul de cache al căii care se termină în `/.v` să fie `1s` , altfel conținutul nou lansat nu poate fi accesat imediat.

## Publica Site-Ul Web

Site-ul poate fi implementat oriunde [github page](https://pages.github.com) și [cloudflare page](https://pages.cloudflare.com) sunt alegeri bune.

Deoarece site-ul web folosește o arhitectură [de aplicație cu o singură pagină](https://developer.mozilla.org/docs/Glossary/SPA) , nu uitați să rescrieți căile URL care nu conțin de la `. ` la `index.html` .

Pagina de intrare a site-ului web trebuie să fie implementată o singură dată și nu este nevoie să redistribuiți pagina de intrare a site-ului web pentru actualizările ulterioare de conținut.

### Implementați Pe Pagina github

Mai întâi [faceți clic github pentru a crea o organizație](https://github.com/account/organizations/new?plan=free) Următorul nume de organizație este `i18n-demo` .

Apoi creați depozitul `i18n-demo.github.io` sub această organizație (vă rugăm să înlocuiți `i18n-demo` cu numele organizației pe care l-ați creat):

![](https://p.3ti.site/1721098657.avif)

La publicarea conținutului din articolul precedent, a fost generat `out/main/htm` Vă rugăm să introduceți acest director și să rulați :

```
ln -s index.html 404.html
```


Deoarece `github page` nu acceptă rescrierea căii URL, se folosește în schimb `404.html` .

Apoi rulați următoarea comandă în directorul `htm` (nu uitați să înlocuiți `i18n-demo/i18n-demo.github.io.git` cu propria adresă de depozit) :

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

### Implementați Pe Pagina cloudflare

[cloudflare page](//pages.cloudflare.com) comparație cu `github page` , oferă rescrierea căii și este mai prietenos cu China continentală și este mai accesibil.

Implementarea lui `cloudflare page` se bazează de obicei pe implementarea lui `github page` de mai sus.

Creați un proiect și legați depozitul `i18n-demo.github.io` de mai sus.

Procesul este prezentat în figura de mai jos:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Faceți clic pe `Add Account` pentru a acorda acces la organizația `i18n-demo` .

Dacă ați legat depozitul unei alte organizații, poate fi necesar să faceți clic pe `Add Account` de două ori pentru a autoriza de două ori înainte ca noua organizație să fie afișată.

![](https://p.3ti.site/1721118306.avif)

Apoi, selectați depozitul `i18n-demo.github.io` , apoi faceți clic pe `Begin setup` și utilizați valorile implicite pentru pașii următori.

![](https://p.3ti.site/1721118490.avif)

După prima legare, trebuie să așteptați câteva minute înainte de a-l putea accesa.

După implementare, puteți lega un nume de domeniu personalizat.

![](https://p.3ti.site/1721119459.avif)

După legarea numelui de domeniu personalizat, mergeți la numele domeniului pentru a configura rescrierea căii aplicației cu o singură pagină, după cum se arată mai jos:

![](https://p.3ti.site/1721119320.avif)

Regulile din imaginea de mai sus sunt următoarele. Vă rugăm să înlocuiți `i18n.site` din prima linie de mai jos cu numele de domeniu pe care l-ați legat.

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

În plus, vă rugăm să configurați regulile de cache, așa cum se arată mai jos, și să setați durata cache-ului la o lună.

![](https://p.3ti.site/1721125111.avif)

Vă rugăm să schimbați numele de domeniu care se potrivește în al doilea pas din imaginea de mai sus cu numele de domeniu pe care l-ați legat.

### Optimizarea Implementării Site-Ului Web În China Continentală

Dacă doriți să obțineți performanțe de accesibilitate mai bune în mediul de rețea din China continentală, vă rugăm [să înregistrați mai întâi un nume de domeniu](//beian.aliyun.com) .

Apoi, utilizați stocarea de obiecte a furnizorilor `out/main/htm` cloud din China continentală + Implementați următorul conținut `CDN` .

Puteți utiliza edge computing pentru a rescrie calea pentru a se adapta la aplicațiile cu o singură pagină. De exemplu, [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) poate fi configurat astfel:

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
  // Puteți seta antetul răspunsului pentru a depana ieșirea, cum ar fi out.XXX = 'MSG';
})
```

![](https://p.3ti.site/1721121273.avif)

Deoarece înregistrarea `MX` și înregistrarea `CNAME` nu pot coexista, dacă doriți să primiți e-mailuri cu numele de domeniu în același timp, trebuie să cooperați cu [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) la nivelul `CNAME` în înregistrarea `A` .

În plus, deoarece taxele de trafic din străinătate ale furnizorilor de cloud din China continentală sunt relativ scumpe, dacă doriți să optimizați costurile, puteți utiliza [DNS geografică gratuită a lui Huawei Cloud](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) și numele de domeniu personalizat [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (după cum se arată mai jos). devierea traficului──Dirutarea traficului în China continentală Baidu Cloud `CDN` , traficul internațional merge cloudflare .

![](https://p.3ti.site/1721119788.avif)

Aceste soluții de optimizare a implementării sunt mai complexe și vor fi introduse în capitole separate în viitor.

### Redirecționarea Numelui De Domeniu Generic

Dacă utilizați `i18n.site` pentru a genera un site web ca site principal, de obicei trebuie să configurați redirecționarea pe domenii, adică redirecționarea accesului la `*.xxx.com` (inclusiv `www.xxx.com` ) la `xxx.com` .

Această cerință poate fi realizată cu ajutorul Alibaba Cloud `CDN` `EdgeScript` ( [document în limba engleză](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [document chinezesc](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Adăugați numele de domeniu în [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) și indicați numele de domeniu de `*.xxx.com` `CNAME` în Alibaba Cloud `CDN` .

![](https://p.3ti.site/1721122000.avif)

De exemplu, configurația de redirecționare a numelui pan-domeniu de `*.i18n.site` din imaginea de mai sus este următoarea:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

### Implementați Cu nginx

Vă rugăm să adăugați o configurație similară cu următoarea în paragraful `server` din nginx Vă rugăm să schimbați `/root/i18n/md/out/main/htm` în calea propriului proiect `out/main/htm` :

```
location / {
  root  /root/i18n/md/out/main/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

## Bazat Pe `github action` Integrare Continuă

Puteți consulta următoarele pentru a configura `github action` :

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

După cum se poate vedea în configurație, acest flux de lucru este declanșat atunci când apăsați către ramura `main` și ramura `dist` .

Fluxul de lucru va folosi fișierul de configurare corespunzător numelui de ramură pentru a publica documentul. Aici, `.i18n/htm/main.yml` și respectiv `.i18n/htm/dist.yml` vor fi utilizate ca configurație de publicare.

Vă recomandăm următoarele bune practici pentru procesul de eliberare a documentului:

Când modificările sunt împinse în ramura `main` , documentul este declanșat pentru a fi construit și implementat la stația de previzualizare (stația de previzualizare este disponibilă [github page](//pages.github.com) ).

După confirmarea faptului că documentul este corect pe site-ul de previzualizare, codul va fi îmbinat și împins în ramura `dist` , iar compilarea și implementarea oficială vor intra online.

Desigur, implementarea procesului de mai sus necesită scrierea mai multor configurații.

Puteți consulta proiectul propriu [github.com/fcdoc/doc](//github.com/fcdoc/doc/blob/main/.github/workflows/i18n.site.yml) zis pentru scriptarea fluxului de lucru.

`secrets.I18N_SITE_TOKEN` și `secrets.NPM_TOKEN` din configurație necesită să configurați variabile secrete în baza de cod.

![](//p.3ti.site/1730970199.avif)

`I18N_SITE_TOKEN` [i18n.site/token](//i18n.site/token)

`NPM_TOKEN` este simbolul de publicare al pachetului `npm` din configurație [npmjs.com](//npmjs.com) creați un simbol cu permisiuni de publicare (după cum se arată mai jos).

![](//p.3ti.site/1730969906.avif)


## Structura Directorului

### `public`

Fișierele statice ale site-ului web, cum ar fi `favicon.ico` , `robots.txt` etc.

Fișierele pictograme de aici pot fi generate cu [realfavicongenerator.net](https://realfavicongenerator.net)

### `.i18n`

Sub directorul `.i18n` se află fișierele de configurare, memoria cache de traducere etc. de `i18n.site` Consultați următorul capitol [„Configurare”](/i18n.site/conf) pentru detalii.

### `en`

Directorul limbii sursă, corespunzător fișierului de configurare `en` din `fromTo` din `.i18n/conf.yml`

```yaml
i18n:
  fromTo:
    en: zh
```

Vă rugăm să consultați configurația traducerii [i18](/i18/use)