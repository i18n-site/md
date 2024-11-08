# Deployment an Online

`i18n.site` adoptéiert eng [eenzeg Säit Applikatiounsarchitektur](https://developer.mozilla.org/docs/Glossary/SPA) , an d'Websäit Entrée Säit an Websäit Inhalt sinn onofhängeg ofgebaut.

Nodeems Dir déi uewe genannte Iwwersetzung ausgefouert hutt, ginn d'Verzeechnes `htm` an `v` ënner dem `md/out/dev` Verzeichnis generéiert.

Hei heescht `dev` datt et baséiert op der `.i18n/htm/dev.yml` Konfiguratiounsdatei gebaut ass.

`dev` dir :

Den `htm` Verzeechnes ass d'Websäit Entrée Säit.

Den `v` Verzeichnis enthält Websäitinhalt mat Versiounsnummeren.

Lokal Virschau këmmert sech net ëm d'Versiounsnummer a kopéiert all Dateien an den `out/dev/v/0.1.0` Verzeichnis.

Fir offiziell Verëffentlechung, geännert Dateien ginn an déi nei Versiounsnummerverzeechnes kopéiert.

## Spezifizéiert d'Konfiguratiounsdatei Mat `-c`

Verschidde Konfiguratiounsdateien erstellen entspriechend Verzeichnisser am `out` Verzeichnis.

Zum Beispill, `.i18n/htm/main.yml` erstellt den `out/main` Verzeichnis.

`dev.yml` an `main.yml` sinn d'Standardkonfiguratiounen.

`dev` ass d'Ofkierzung vun `development` , wat d'Entwécklungsëmfeld ugeet, fir lokal Virschau benotzt, an ass och d'Standardkonfiguratiounsdatei.
`ol` ass d'Ofkierzung `npm` `online` , wat d'Online-Ëmfeld `-n` , déi fir offiziell Verëffentlechung benotzt gëtt.

Dir kënnt och aner Konfiguratiounsdateien erstellen Benotzt `--htm_conf` op der Kommandozeil fir de Konfiguratiounsdatei ze benotzen:

zum Beispill:
```
i18n.site --htm_conf dist --save
```

Hei `--save` representéiert d'Verëffentlechungsnummer vun der Update.

## <a rel=id href="#npm" id="npm"></a> Verëffentlechen Inhalt op npmjs.com

[npmjs.com](//npmjs.com) ze publizéieren ass déi recommandéiert Standardléisung (kuckt [Front-End High Availability](/i18n.site/feature#ha) ).

### npm Login & Post

Installéieren `nodejs` , aloggen mat `npm login` .

Edit `md/.i18n/htm/main.yml` an ännert de Wäert vun [`md:`](//github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/main.yml#L7) `YOUR_NPM_PACKAGE` als Ären eegene `npm` Package Numm [npmjs.com](//npmjs.com)

Dann änneren `md/.i18n/htm/main.package.json`

Run `i18n.site --npm` oder `i18n.site -n` am `md` Verzeichnis fir ze iwwersetzen an ze publizéieren.

Wann Dir e kontinuéierlechen Integratiounsëmfeld benotzt fir ze verëffentlechen, brauch Dir net ze installéieren `nodejs` Kopie einfach déi ugemellt a Verëffentlechungsrechter `~/.npmrc` an d'Ëmwelt.

Wann Dir de Packagenumm vun `v:` an `main.yml` ännert, **gitt sécher datt Dir `.i18n/v/main` fir d'éischt läscht** an et dann publizéiert.

#### Proxy Server Publizéiert Vun npm

Wann d'Benotzer am Festland China Netzwierkproblemer begéinen an net fäeg sinn `npm` Packagen ze verëffentlechen, kënnen se d'Ëmfeldvariabel `https_proxy` setzen fir de Proxy-Server ze konfiguréieren.

Unzehuelen datt Äre Proxy Server Hafen `7890` ass, kënnt Dir schreiwen:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

## Self-Gehost Inhalt

Wann Dir den Inhalt selwer wëllt hosten, ännert d'éischt `md/.i18n/htm/main.yml` an ännert `v: //unpkg.com/i18n.site` op Äre URL Präfix, wéi `v: //i18n-v.xxx.com` .

Gitt den `md` Verzeichnis a lafen

```
i18n.site --htm_conf ol --save
```

oder Ofkierzung

```
i18n.site -c ol -s
```

Dann konfiguréieren den Inhalt am `md/out/main/v` Verzeichnis op den URL Präfix Wee, deen an `v:` gesat gëtt.

Schlussendlech **konfiguréiert d'Cachezäit vum Wee, deen op `/.v` op `1s` endet** , soss kann den nei verëffentlechten Inhalt net direkt zougänglech sinn.

D'Cachezäit fir aner Weeër kann op ee Joer oder méi gesat ginn fir onnéideg Ufroen ze reduzéieren.

## Host Inhalt Op s3

Fir den Inhalt selwer ze hosten, zousätzlech `CDN` Ären eegene Server ze benotzen, ass eng aner gemeinsam Optioun `S3` + ze benotzen.

Dir kënnt [rclone](https://rclone.org) fir op den `S3` Server anzeloggen, da kuckt op de folgende Skript a ännert nëmmen déi inkrementell Ännerungen op `S3` fir all Verëffentlechung.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/main/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/main/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/main/v/.v "$s3:/$bucket/"
```

Denkt drun `CDN` ze konfiguréieren sou datt d'Cachezäit vum Wee deen op `/.v` endet `1s` ass, soss kann den nei verëffentlechten Inhalt net direkt zougänglech sinn.

## Websäit Publizéieren

D'Websäit kann iwwerall agesat ginn, [github page](https://pages.github.com) [cloudflare page](https://pages.cloudflare.com) si gutt Choixen.

Well d'Websäit eng [eenzeg Säit Applikatiounsarchitektur](https://developer.mozilla.org/docs/Glossary/SPA) benotzt, erënnert un d'URL-Weeër ëmzeschreiwen déi net `. ` op `index.html` enthalen.

D'Websäit Entrée Säit muss nëmmen eemol ofgebaut ginn, an et ass net néideg der Websäit Entrée Säit fir spéider Inhalt Aktualiséierungen nei z'installéieren.

### Deploy Op github Säit

Éischt [klickt github fir eng Organisatioun ze kreéieren](https://github.com/account/organizations/new?plan=free) De folgenden Organisatiounsnumm ass `i18n-demo` als Beispill.

Dann erstellt Lager `i18n-demo.github.io` ënner dëser Organisatioun (ersetzt w.e.g. `i18n-demo` mam Organisatiounsnumm deen Dir erstallt hutt):

![](https://p.3ti.site/1721098657.avif)

Wann Dir den Inhalt am viregten Artikel publizéiert, `out/main/htm` gouf generéiert Gitt dës Verzeechnes a lafen :

```
ln -s index.html 404.html
```


Well `github page` net d'URL-Wee-Ënnerschreiwe ënnerstëtzt, gëtt `404.html` amplaz benotzt.

Fuert dann de folgende Kommando am `htm` Verzeichnis (erënnert drun `i18n-demo/i18n-demo.github.io.git` mat Ärer eegener Lageradress ze ersetzen) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Nodeems Dir de Code gedréckt hutt, waart op d'Deployment vun `github page` fir erfollegräich ze lafen (wéi hei ënnendrënner) ier Dir Zougang kënnt.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Fir Demo Säit kuckt w.e.g.:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

### Deploy Op cloudflare Säit

Am [cloudflare page](//pages.cloudflare.com) mat `github page` , bitt et Wee nei schreiwen an ass méi frëndlech fir Festland China an ass méi zougänglech Et ass recommandéiert ze benotzen.

Den Détachement vun `cloudflare page` baséiert normalerweis op der Deployment vun `github page` uewen.

Erstellt e Projet a bindt den `i18n-demo.github.io` Lager hei uewen.

De Prozess gëtt an der Figur hei ënnen gewisen:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Klickt w.e.g. op `Add Account` fir Zougang zu Organisatioun `i18n-demo` ze ginn.

Wann Dir de Lager vun enger anerer Organisatioun gebonnen hutt, musst Dir vläicht zweemol op `Add Account` klickt fir zweemol ze autoriséieren ier déi nei Organisatioun ugewise gëtt.

![](https://p.3ti.site/1721118306.avif)

Als nächst, wielt Lager `i18n-demo.github.io` , klickt dann op `Begin setup` , a benotzt d'Default Wäerter fir spéider Schrëtt.

![](https://p.3ti.site/1721118490.avif)

Nodeems Dir fir d'éischte Kéier gebonnen hutt, musst Dir e puer Minutten waarden ier Dir Zougang kritt.

Nom Détachement kënnt Dir e personaliséierten Domain Numm binden.

![](https://p.3ti.site/1721119459.avif)

Nodeems Dir de personaliséierten Domain Numm gebonnen hutt, gitt w.e.g. op den Domain Numm fir de Wee-Rewriting vun der Single-page-Applikatioun ze konfiguréieren, wéi hei ënnendrënner:

![](https://p.3ti.site/1721119320.avif)

D'Regelen am Bild hei uewen sinn wéi follegt Ersetzt w.e.g. `i18n.site` an der éischter Zeil hei ënnen mam Domain Numm deen Dir gebonnen hutt.

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

Zousätzlech, konfiguréiert w.e.g. d'Cache-Regelen, wéi hei ënnendrënner, a setzt d'Cache-Dauer op ee Mount.

![](https://p.3ti.site/1721125111.avif)

Ännert w.e.g. den Domain Numm, deen am zweete Schrëtt am Bild hei uewen passt, zum Domain Numm deen Dir gebonnen hutt.

### Optimiséierung Vun Der Websäit Deployment Am Festland China

Wann Dir besser Accessibilitéitsleeschtungen am Netzëmfeld vum Festland China wëllt kréien, [registréiert w.e.g. als éischt en Domain Numm](//beian.aliyun.com) .

Dann, benotzt d'Objetlagerung vu Cloud Ubidder am Festland + `CDN` Deploy de folgenden Inhalt `out/main/htm` .

Dir kënnt Rand Computing benotze fir de Wee z'änneren fir un eenzel Säit Uwendungen z'adaptéieren Zum Beispill, [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) kann esou konfiguréiert ginn:

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
  // Äntwert Header kënnen op Debug Output gesat ginn, sou wéi out.XXX = 'MSG';
})
```

![](https://p.3ti.site/1721121273.avif)

Well Rekord `MX` a Rekord `CNAME` kënnen net coexistéieren, wann Dir Domain Numm E-Maile gläichzäiteg wëllt kréien, musst Dir mam [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) op den Niveau `CNAME` an de Rekord `A` kooperéieren.

Zousätzlech, well d'auslännesch Verkéierskäschte vu Cloud Ubidder am Festland China relativ deier sinn, wann Dir d'Käschte optiméiere wëllt, kënnt Dir [DNS gratis geographesch Opléisung vum Huawei Cloud](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) an den personaliséierten Domain Numm vum [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (wéi hei ënnendrënner) benotzen Verkéier Diversioun──Traffic Routing am Festland China Baidu Cloud `CDN` , international Verkéier geet cloudflare .

![](https://p.3ti.site/1721119788.avif)

Dës Détachement Optimisatiounsléisungen si méi komplex a ginn an Zukunft a separat Kapitelen agefouert.

### Generesch Domain Numm Viruleedung

Wann Dir `i18n.site` benotzt fir eng Websäit als Är Haaptwebsäit ze generéieren, musst Dir normalerweis Pan-Domain Viruleedung konfiguréieren, dat heescht, den Zougang zu `*.xxx.com` (dorënner `www.xxx.com` ) op `xxx.com` .

Dës Ufuerderung kann erreecht ginn mat der Hëllef vun Alibaba Cloud `CDN` `EdgeScript` ( [Englesch Dokument](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Chinesesch Dokument](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Füügt den Domain Numm an [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) a weist den Domain Numm `*.xxx.com` `CNAME` an Alibaba Cloud `CDN` .

![](https://p.3ti.site/1721122000.avif)

Zum Beispill, d'Pan-Domain Numm Viruleedung Konfiguratioun vun `*.i18n.site` am Bild hei uewen ass wéi follegt:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

### Deploy Mat nginx

Füügt w.e.g. eng Konfiguratioun wéi déi `/root/i18n/md/out/main/htm` am `server` Paragraphe vun nginx `out/main/htm`

```
location / {
  root  /root/i18n/md/out/main/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

## Baséiert Op `github action` Kontinuéierlech Integratioun

Dir kënnt op déi folgend referenzéieren fir Ären `github action` ze konfiguréieren:

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

Wéi kann an der Konfiguratioun gesi ginn, gëtt dësen Workflow ausgeléist wann Dir op d'Branche `main` an d'Branche `dist` dréckt.

De Workflow benotzt d'Konfiguratiounsdatei entsprécht dem Branchenumm `.i18n/htm/main.yml` d'Dokument ze publizéieren `.i18n/htm/dist.yml`

Mir recommandéieren déi folgend Best Praxis fir den Dokument Verëffentlechungsprozess:

Wann d'Ännerungen op d'Branche `main` gedréckt ginn, gëtt d'Dokument ausgeléist fir ze bauen an op d'Previewstatioun ofzesetzen (d'Previewstatioun ass verfügbar [github page](//pages.github.com) ).

Nodeems Dir bestätegt datt d'Dokument op der Virschau-Site richteg ass, gëtt de Code fusionéiert an op d'Branche `dist` gedréckt, an den offiziellen Build an Deployment gëtt online.

Natierlech erfuerdert d'Ëmsetzung vum uewe genannte Prozess méi Konfiguratiounen ze schreiwen.

Dir kënnt op den aktuellen Projet referenzéieren fir Workflow Scripting [github.com/fcdoc/doc](//github.com/fcdoc/doc/blob/main/.github/workflows/i18n.site.yml)

`secrets.I18N_SITE_TOKEN` an `secrets.NPM_TOKEN` an der Konfiguratioun verlaangen datt Dir geheime Variabelen an der Codebasis konfiguréiert.

![](//p.3ti.site/1730970199.avif)

`I18N_SITE_TOKEN` [i18n.site/token](//i18n.site/token)

`NPM_TOKEN` ass de Verëffentlechungs-Token vum Package `npm` an der Konfiguratioun [npmjs.com](//npmjs.com) erstellt en Token mat Verëffentlechungsrechter (wéi hei ënnendrënner).

![](//p.3ti.site/1730969906.avif)


## Directory Struktur

### `public`

Statesch Dateie vun der Websäit, wéi `favicon.ico` , `robots.txt` , etc.

D'Ikondateien hei kënne generéiert ginn [realfavicongenerator.net](https://realfavicongenerator.net)

### `.i18n`

Ënnert dem `.i18n` Verzeichnis sinn d'Konfiguratiounsdateien, Iwwersetzungs-Cache, etc. vun `i18n.site` Kuckt dat nächst Kapitel ["Configuratioun"](/i18n.site/conf) fir Detailer.

### `en`

Quellsprooch Verzeechnes, entspriechend `en` vun `fromTo` an `.i18n/conf.yml` Konfiguratiounsdatei

```yaml
i18n:
  fromTo:
    en: zh
```

Kuckt w.e.g. op d'Konfiguratioun vun der Iwwersetzung [i18](/i18/use)