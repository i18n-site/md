# Juurutamine Ja Võrgus

`i18n.site` võtab kasutusele [ühelehelise rakenduse](https://developer.mozilla.org/docs/Glossary/SPA) arhitektuuri ning veebisaidi sisenemisleht ja veebisaidi sisu juurutatakse iseseisvalt.

Pärast ülaltoodud tõlke käivitamist luuakse kataloogid `htm` ja `v` kataloogi `md/out/dev` alla.

Siin tähendab `dev` , et see on loodud `.i18n/htm/dev.yml` konfiguratsioonifaili põhjal.

`dev` kataloog :

Kataloog `htm` on veebisaidi sisenemise leht.

Kataloog `v` sisaldab veebisaidi sisu koos versiooninumbritega.

Kohalik eelvaade ei hooli versiooninumbrist ja kopeerib kõik failid `out/dev/v/0.1.0` kataloogi.

Ametlikuks avaldamiseks kopeeritakse muudetud failid uude versiooninumbrite kataloogi.

## Määrake Konfiguratsioonifail `-c`

Erinevad konfiguratsioonifailid loovad vastavad kataloogid `out` kataloogis.

Näiteks `.i18n/htm/main.yml` loob kataloogi `out/main` .

`dev.yml` ja `main.yml` on vaikekonfiguratsioonid.

`dev` on lühend `development` -st, mis näitab arenduskeskkonda, kasutatakse kohaliku eelvaate jaoks ja on ka vaikekonfiguratsioonifail.
`ol` on lühend `online` -st, mis näitab võrgukeskkonda, mida kasutatakse ametlikuks väljalaskmiseks. See on ka vaikekonfiguratsioonifail, kui kasutate vabastamiseks käsurea parameetreid `-n` kuni `npm` .

Saate luua ka muid konfiguratsioonifaile. Kasutage käsureal `--htm_conf` , et määrata kasutatava konfiguratsioonifaili nimi.

näiteks:
```
i18n.site --htm_conf dist --save
```

Siin tähistab `--save` värskenduse väljalaske versiooni numbrit.

## <a rel=id href="#npm" id="npm"></a> Avaldage sisu saidil npmjs.com

Soovitatav vaikelahendus on sisu avaldamine saidil [npmjs.com](//npmjs.com) (vt [Esiosa kõrge saadavus](/i18n.site/feature#ha) ).

### Logi npm & Postitus

Installige `nodejs` , logige sisse numbriga `npm login` .

Redigeerige `md/.i18n/htm/main.yml` ja `YOUR_NPM_PACKAGE` [`md:`](//github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/main.yml#L7) `npm` paketi nimeks [npmjs.com](//npmjs.com)

Seejärel muutke `md/.i18n/htm/main.package.json`

Tõlkimiseks ja avaldamiseks käivitage kataloogis `md` `i18n.site --npm` või `i18n.site -n` .

Kui kasutate avaldamiseks pidevat integratsioonikeskkonda, pole vaja `nodejs` installida. Lihtsalt kopeerige sisselogimise ja avaldamise õigused `~/.npmrc` keskkonda.

Kui muudate paketi nime `v:` in `main.yml` , **kustutage kindlasti esmalt `.i18n/v/main`** ja seejärel avaldage see.

#### Puhverserveri Avaldas npm

Kui Mandri-Hiina kasutajatel tekib võrguprobleeme ja nad ei saa avaldada `npm` paketti, saavad nad seada puhverserveri konfigureerimiseks keskkonnamuutuja `https_proxy` .

Eeldades, et teie puhverserveri port on `7890` , võite kirjutada:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

## Ise Hostitud Sisu

Kui soovite sisu ise hostida, muutke esmalt `md/.i18n/htm/main.yml` ja muutke `v: //unpkg.com/i18n.site` oma URL-i prefiksiks, näiteks `v: //i18n-v.xxx.com` .

Sisestage kataloog `md` ja käivitage

```
i18n.site --htm_conf ol --save
```

või lühend

```
i18n.site -c ol -s
```

Seejärel konfigureerige kataloogi `md/out/main/v` sisu URL-i eesliite teele, mis on määratud `v:` .

Lõpuks **seadistage vahemälu aeg teele, mis lõpeb numbritega `/.v` kuni `1s`** , vastasel juhul ei pääse äsja avaldatud sisule kohe juurde.

Muude teede vahemäluajaks saab määrata ühe aasta või rohkem, et vähendada tarbetuid päringuid.

## Hosti Sisu S3-Sse

Sisu ise hostimiseks on lisaks oma serveri kasutamisele `CDN` üks levinud valik `S3` +

Saate [rclone](https://rclone.org) `S3` serverisse sisselogimiseks, seejärel vaadata ja muuta järgmist skripti ning kopeerida ainult iga versiooni järkjärgulised muudatused väärtuseks `S3` .

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/main/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/main/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/main/v/.v "$s3:/$bucket/"
```

Ärge unustage seadistada `CDN` nii, et `/.v` ga lõppeva tee vahemälu aeg oleks `1s` , vastasel juhul ei pääse äsja avaldatud sisule kohe juurde.

## Avaldada Veebisait

Veebisaiti saab juurutada kõikjal [github page](https://pages.github.com) ja [cloudflare page](https://pages.cloudflare.com) on head valikud.

Kuna veebisait kasutab [ühelehelise rakenduse](https://developer.mozilla.org/docs/Glossary/SPA) arhitektuuri, ärge unustage ümber kirjutada URL-i teed, mis ei sisalda `. ` kuni `index.html` .

Veebisaidi sisestuslehte tuleb juurutada vaid üks kord ja järgnevate sisuvärskenduste jaoks pole vaja veebisaidi sisestuslehte ümber paigutada.

### Juurutage Githubi Lehel

[Organisatsiooni loomiseks klõpsake kõigepealt github](https://github.com/account/organizations/new?plan=free) . Järgmise organisatsiooni nimi on näiteks `i18n-demo` .

Seejärel looge selle organisatsiooni alla ladu `i18n-demo.github.io` (asendage `i18n-demo` enda loodud organisatsiooni nimega):

![](https://p.3ti.site/1721098657.avif)

Eelmise artikli sisu avaldamisel on loodud `out/main/htm` Palun sisestage see kataloog ja käivitage :

```
ln -s index.html 404.html
```


Kuna `github page` ei toeta URL-i tee ümberkirjutamist, kasutatakse selle asemel `404.html` .

Seejärel käivitage kataloogis `htm` järgmine käsk (pidage meeles, et asendage `i18n-demo/i18n-demo.github.io.git` oma lao aadressiga) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Pärast koodi vajutamist oodake, kuni koodi `github page` juurutamine õnnestub (nagu allpool näidatud), enne kui pääsete sellele juurde.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Demo lehe vaatamiseks vaadake:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

### Juurutage Cloudflare'i Lehel

[cloudflare page](//pages.cloudflare.com) `github page` ga pakub see tee ümberkirjutamist ja on Mandri-Hiina jaoks sõbralikum ning seda on soovitatav kasutada.

`cloudflare page` juurutamine põhineb tavaliselt ülaltoodud `github page` kasutuselevõtul.

Looge projekt ja siduge ülaltoodud `i18n-demo.github.io` ladu.

Protsess on näidatud alloleval joonisel:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Organisatsioonile `i18n-demo` juurdepääsu andmiseks klõpsake nuppu `Add Account` .

Kui olete sidunud teise organisatsiooni lao, peate võib-olla klõpsama kaks korda `Add Account` , et kaks korda autoriseerida, enne kui uus organisatsioon kuvatakse.

![](https://p.3ti.site/1721118306.avif)

Järgmisena valige ladu `i18n-demo.github.io` , seejärel klõpsake nuppu `Begin setup` ja kasutage järgmiste sammude jaoks vaikeväärtusi.

![](https://p.3ti.site/1721118490.avif)

Pärast esmakordset sidumist peate ootama mõni minut, enne kui pääsete sellele juurde.

Pärast juurutamist saate siduda kohandatud domeeninime.

![](https://p.3ti.site/1721119459.avif)

Pärast kohandatud domeeninime sidumist minge domeeninime juurde, et konfigureerida ühelehelise rakenduse tee ümberkirjutamine, nagu allpool näidatud:

![](https://p.3ti.site/1721119320.avif)

Ülaltoodud pildil olevad reeglid on järgmised. Asendage alloleval esimesel real olev `i18n.site` seotud domeeninimega.

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

Lisaks konfigureerige vahemälu reeglid, nagu allpool näidatud, ja määrake vahemälu kestuseks üks kuu.

![](https://p.3ti.site/1721125111.avif)

Palun muutke ülaltoodud pildi teises etapis sobiv domeeninimi seotud domeeninimega.

### Veebisaidi Juurutamise Optimeerimine Mandri-Hiinas

Kui soovite Mandri-Hiina võrgukeskkonnas paremat juurdepääsetavust saavutada, [registreerige esmalt domeeninimi](//beian.aliyun.com) .

Seejärel kasutage Mandri-Hiinas asuvate pilvemüüjate objektisalvestust + `CDN` Rakendage järgmine sisu `out/main/htm` .

Üheleheliste rakendustega kohanemiseks saate kasutada servaarvutust. Näiteks saab [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) konfigureerida järgmiselt.

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
  // Saate määrata vastuse päise väljundi silumiseks, näiteks out.XXX = 'MSG';
})
```

![](https://p.3ti.site/1721121273.avif)

Kuna kirje `MX` ja kirje `CNAME` ei saa koos eksisteerida, peate samal ajal domeeninimede e-kirju vastu võtma [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) , et viia `CNAME` tase kirjesse `A` .

Lisaks, kuna Mandri-Hiina pilvemüüjate välised liiklustasud on suhteliselt kallid, saate kulude optimeerimiseks kasutada [Huawei DNS tasuta geograafilist eraldusvõimet](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) ja [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) kohandatud domeeninime (nagu allpool näidatud). liikluse ümbersuunamine──Liikluse suunamine Mandri-Hiinas Baidu Cloud `CDN` , rahvusvaheline liiklus läheb cloudflare .

![](https://p.3ti.site/1721119788.avif)

Need juurutamise optimeerimise lahendused on keerukamad ja neid tutvustatakse tulevikus eraldi peatükkidena.

### Üldine Domeeninime Ümbersuunamine

Kui kasutate veebisaidi loomiseks peamise veebisaidina `i18n.site` , peate tavaliselt konfigureerima pandomeeni ümbersuunamise, st suunama juurdepääsu `*.xxx.com` -le (kaasa arvatud `www.xxx.com` ) `xxx.com` .

Seda nõuet saab täita Alibaba Cloud `CDN` `EdgeScript` abil ( [ingliskeelne dokument](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [hiina dokument](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Lisage domeeninimi [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) ja suunake `*.xxx.com` Alibaba Cloud `CDN` `CNAME` .

![](https://p.3ti.site/1721122000.avif)

Näiteks ülaltoodud pildil on pandomeeninime ümbersuunamise konfiguratsioon `*.i18n.site` järgmine:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

### Juurutage Koos Nginxiga

Palun lisage konfiguratsioon, mis sarnaneb järgmisega nginx lõigus `server` Palun muutke `/root/i18n/md/out/main/htm` oma projekti `out/main/htm` teeks:

```
location / {
  root  /root/i18n/md/out/main/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

## Põhineb `github action` Pideval Integratsioonil

Oma `github action` konfigureerimiseks võite viidata järgmisele:

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

Nagu konfiguratsioonist näha, käivitatakse see töövoog, kui vajutate harule `main` ja harule `dist` .

Töövoog kasutab dokumendi avaldamiseks haru nimele vastavat konfiguratsioonifaili. Siin kasutatakse avaldamise konfiguratsioonina vastavalt väärtusi `.i18n/htm/main.yml` ja `.i18n/htm/dist.yml` .

Soovitame dokumendi väljaandmise protsessis järgida järgmisi parimaid tavasid.

Kui muudatused lükatakse harusse `main` , käivitatakse dokument koostamiseks ja juurutamiseks eelvaatejaamas (eelvaatejaam on saadaval [github page](//pages.github.com) ).

Pärast dokumendi õigsuse kinnitamist eelvaate saidil kood liidetakse ja lükatakse harusse `dist` ning ametlik ehitamine ja juurutamine läheb võrku.

Loomulikult nõuab ülaltoodud protsessi rakendamine rohkemate konfiguratsioonide kirjutamist.

Töövoo skriptimiseks võite vaadata tegelikku projekti [github.com/fcdoc/doc](//github.com/fcdoc/doc/blob/main/.github/workflows/i18n.site.yml)

`secrets.I18N_SITE_TOKEN` ja `secrets.NPM_TOKEN` konfiguratsioonis nõuavad salajaste muutujate konfigureerimist koodibaasis.

![](//p.3ti.site/1730970199.avif)

`I18N_SITE_TOKEN` [i18n.site/token](//i18n.site/token)

`NPM_TOKEN` on konfiguratsioonis oleva paketi `npm` avaldamisluba [npmjs.com](//npmjs.com) looge avaldamislubadega märk (nagu allpool näidatud).

![](//p.3ti.site/1730969906.avif)


## Kataloogi Struktuur

### `public`

Veebisaidi staatilised failid, näiteks `favicon.ico` , `robots.txt` jne.

Siin olevaid ikoonifaile saab luua rakendusega [realfavicongenerator.net](https://realfavicongenerator.net)

### `.i18n`

Kataloogi `.i18n` all on `i18n.site` konfiguratsioonifailid, tõlkevahemälu jne. Täpsemalt vaadake järgmist peatükki ["Konfiguratsioon"](/i18n.site/conf) .

### `en`

Lähtekeele kataloog, `en` vastab `fromTo` `.i18n/conf.yml`

```yaml
i18n:
  fromTo:
    en: zh
```

Palun vaadake tõlke konfiguratsiooni [i18](/i18/use)