# Uvajanje in Na Spletu

`i18n.site` sprejme arhitekturo [enostranske aplikacije](https://developer.mozilla.org/docs/Glossary/SPA) , vstopna stran spletnega mesta in vsebina spletnega mesta pa sta nameščeni neodvisno.

Po izvedbi zgornjega prevoda bosta imenika `htm` in `v` ustvarjena pod imenikom `md/out/dev` .

Tu `dev` pomeni, da je zgrajen na podlagi konfiguracijske datoteke `.i18n/htm/dev.yml` .

`dev` imenik :

Imenik `htm` je vstopna stran spletnega mesta.

Imenik `v` vsebuje vsebino spletnega mesta s številkami različic.

Lokalni predogled ne upošteva številke različice in bo kopiral vse datoteke v imenik `out/dev/v/0.1.0` .

Za uradno izdajo bodo spremenjene datoteke kopirane v imenik številk nove različice.

## Določite Konfiguracijsko Datoteko Z `-c`

Različne konfiguracijske datoteke bodo ustvarile ustrezne imenike v imeniku `out` .

Na primer, `.i18n/htm/main.yml` bo ustvaril imenik `out/main` .

`dev.yml` in `main.yml` sta privzeti konfiguraciji.

`dev` je okrajšava `development` , ki označuje razvojno okolje, ki se uporablja za lokalni predogled, in je tudi privzeta konfiguracijska datoteka.
`ol` je okrajšava `online` , ki označuje spletno okolje, ki se uporablja za uradno izdajo. Je tudi privzeta konfiguracijska datoteka pri uporabi parametrov ukazne vrstice `-n` do `npm` za izdajo.

Ustvarite lahko tudi druge konfiguracijske datoteke V ukazni vrstici `--htm_conf` ime konfiguracijske datoteke:

na primer:
```
i18n.site --htm_conf dist --save
```

Tukaj `--save` predstavlja številko različice izdaje posodobitve.

## <a rel=id href="#npm" id="npm"></a> Objavite vsebino na npmjs.com

Objavljanje vsebine v priporočeni privzeti [npmjs.com](//npmjs.com) (glejte [Front-end High Availability](/i18n.site/feature#ha) ).

### npm & Objava

Namestite `nodejs` , prijavite se z `npm login` .

Uredite `md/.i18n/htm/main.yml` in spremenite vrednost [`md:`](//github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/main.yml#L7) `YOUR_NPM_PACKAGE` kot lastno ime paketa `npm` [npmjs.com](//npmjs.com) vsako prazno ime paketa.

Nato spremenite `md/.i18n/htm/main.package.json`

Zaženite `i18n.site --npm` ali `i18n.site -n` v imeniku `md` za prevod in objavo.

Če za objavljanje uporabljate okolje neprekinjene integracije, ni treba namestiti `nodejs` Preprosto kopirajte dovoljenja za prijavo in objavljanje `~/.npmrc` v okolje.

Če spremenite ime paketa `v:` v `main.yml` , **najprej izbrišite `.i18n/v/main`** in ga nato objavite.

#### Proxy Strežnik, Ki Ga Je Objavil npm

Če uporabniki v celinski Kitajski naletijo na težave z omrežjem in ne morejo objaviti `npm` paketov, lahko nastavijo spremenljivko okolja `https_proxy` za konfiguracijo strežnika proxy.

Ob predpostavki, da so vrata vašega proxy strežnika `7890` , lahko napišete:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

## Vsebina, Ki Jo Gosti Sam

Če želite vsebino gostiti sami, najprej uredite `md/.i18n/htm/main.yml` in spremenite `v: //unpkg.com/i18n.site` v predpono URL-ja, na primer `v: //i18n-v.xxx.com` .

Vnesite imenik `md` in zaženite

```
i18n.site --htm_conf ol --save
```

ali okrajšava

```
i18n.site -c ol -s
```

Nato konfigurirajte vsebino v imeniku `md/out/main/v` na pot predpone URL, nastavljeno v `v:` .

Končno **konfigurirajte čas predpomnilnika poti, ki se konča z `/.v` do `1s`** , sicer do novo izdane vsebine ni mogoče takoj dostopati.

Čas predpomnilnika za druge poti je mogoče nastaviti na eno leto ali več, da zmanjšate nepotrebne zahteve.

## Gostovanje Vsebine Na s3

Za samostojno gostovanje vsebine `CDN` poleg uporabe lastnega strežnika še ena pogosta možnost uporaba `S3` +

Prijavite se [rclone](https://rclone.org) v strežnik `S3` , nato pa si oglejte in spremenite naslednji skript ter kopirajte samo postopne spremembe v `S3` za vsako izdajo.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/main/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/main/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/main/v/.v "$s3:/$bucket/"
```

Ne pozabite konfigurirati `CDN` , tako da je čas predpomnilnika poti, ki se konča z `/.v` `1s` , sicer do novo izdane vsebine ni mogoče takoj dostopati.

## Objavi Spletno Stran

Spletno mesto je mogoče namestiti kjer koli [github page](https://pages.github.com) in [cloudflare page](https://pages.cloudflare.com) sta dobra izbira.

Ker spletno mesto uporablja arhitekturo [enostranske aplikacije](https://developer.mozilla.org/docs/Glossary/SPA) , ne pozabite prepisati poti URL-jev, ki ne vsebujejo `. ` do `index.html` .

Vstopno stran spletnega mesta je treba razmestiti samo enkrat in vstopne strani spletnega mesta ni treba znova namestiti za nadaljnje posodobitve vsebine.

### Razmesti Na Strani github

Najprej [kliknite tukaj github](https://github.com/account/organizations/new?plan=free) Naslednje ime organizacije je `i18n-demo` .

Nato ustvarite skladišče `i18n-demo.github.io` pod to organizacijo (zamenjajte `i18n-demo` z imenom organizacije, ki ste ga ustvarili):

![](https://p.3ti.site/1721098657.avif)

Pri objavi vsebine v prejšnjem članku je bilo ustvarjeno `out/main/htm` Vnesite ta imenik in zaženite :

```
ln -s index.html 404.html
```


Ker `github page` ne podpira prepisovanja poti URL, se namesto tega uporablja `404.html` .

Nato zaženite naslednji ukaz v imeniku `htm` (ne pozabite zamenjati `i18n-demo/i18n-demo.github.io.git` s svojim naslovom skladišča) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Ko potisnete kodo, počakajte, da se uvedba `github page` uspešno izvede (kot je prikazano spodaj), preden lahko dostopate do nje.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Za predstavitveno stran si oglejte:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

### Namestitev Na Strani cloudflare

[cloudflare page](//pages.cloudflare.com) V primerjavi z `github page` omogoča prepisovanje poti in je bolj prijazen celinski Kitajski ter je bolj dostopen za uporabo.

Uvedba `cloudflare page` običajno temelji na umestitvi `github page` zgoraj.

Ustvarite projekt in povežite zgoraj navedeno skladišče `i18n-demo.github.io` .

Postopek je prikazan na spodnji sliki:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Kliknite `Add Account` , da omogočite dostop organizaciji `i18n-demo` .

Če ste vezali skladišče druge organizacije, boste morda morali dvakrat klikniti `Add Account` za avtorizacijo, preden bo prikazana nova organizacija.

![](https://p.3ti.site/1721118306.avif)

Nato izberite skladišče `i18n-demo.github.io` , nato kliknite `Begin setup` in uporabite privzete vrednosti za nadaljnje korake.

![](https://p.3ti.site/1721118490.avif)

Po prvi vezavi morate počakati nekaj minut, preden lahko dostopate do nje.

Po uvedbi lahko povežete ime domene po meri.

![](https://p.3ti.site/1721119459.avif)

Ko povežete ime domene po meri, pojdite na ime domene, da konfigurirate prepisovanje poti enostranske aplikacije, kot je prikazano spodaj:

![](https://p.3ti.site/1721119320.avif)

Pravila na zgornji sliki so naslednja. Zamenjajte `i18n.site` v prvi vrstici spodaj z imenom domene, ki ste ga vezali.

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

Poleg tega konfigurirajte pravila predpomnilnika, kot je prikazano spodaj, in nastavite trajanje predpomnilnika na en mesec.

![](https://p.3ti.site/1721125111.avif)

Spremenite ime domene, ki se ujema v drugem koraku na zgornji sliki, z imenom domene, ki ste ga vezali.

### Optimiziranje Postavitve Spletnega Mesta Na Celinski Kitajski

Če želite doseči boljšo zmogljivost dostopnosti v omrežnem okolju celinske Kitajske, najprej [registrirajte ime domene](//beian.aliyun.com) .

Nato uporabite objektno shranjevanje prodajalcev v oblaku na celinski Kitajski + Razmestite naslednjo vsebino `CDN` `out/main/htm`

Uporabite lahko robno računalništvo, da prepišete pot za prilagoditev enostranskim aplikacijam. Na primer, [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) je mogoče konfigurirati takole:

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
  // Glavo odgovora lahko nastavite za odpravljanje napak v izhodu, na primer out.XXX = 'MSG';
})
```

![](https://p.3ti.site/1721121273.avif)

Ker zapis `MX` in zapis `CNAME` ne moreta soobstajati, morate, če želite prejemati e-poštna sporočila z imenom domene hkrati, sodelovati s skriptom [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) do ravni `CNAME` v zapisu `A` .

Poleg tega, ker so stroški čezmorskega prometa prodajalcev oblakov na celinski Kitajski razmeroma dragi, lahko, če želite optimizirati stroške, uporabite [DNS geografsko ločljivost](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) in ime domene po meri [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (kot je prikazano spodaj). preusmeritev prometa──usmerjanje prometa v celinski Kitajski Baidu Cloud `CDN` , mednarodni promet poteka cloudflare .

![](https://p.3ti.site/1721119788.avif)

Te rešitve za optimizacijo uvajanja so bolj zapletene in bodo v prihodnosti predstavljene v ločenih poglavjih.

### Generična Preusmeritev Imena Domene

Če za ustvarjanje spletnega mesta kot glavnega spletnega mesta uporabljate `i18n.site` , morate običajno konfigurirati preusmeritev vse domene, to je preusmeritev dostopa do `*.xxx.com` (vključno z `www.xxx.com` ) na `xxx.com` .

To zahtevo je mogoče doseči s pomočjo Alibaba Cloud `CDN` `EdgeScript` ( [angleški dokument](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [kitajski dokument](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Dodajte ime domene v [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) in pokažite ime domene `*.xxx.com` `CNAME` v Alibaba Cloud `CDN` !

![](https://p.3ti.site/1721122000.avif)

Na primer, konfiguracija preusmeritve imena vse domene `*.i18n.site` na zgornji sliki je naslednja:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

### Namestite Z Nginxom

Dodajte konfiguracijo, podobno naslednji v odstavku `server` od nginx Prosimo, spremenite `/root/i18n/md/out/main/htm` v pot svojega projekta `out/main/htm` :

```
location / {
  root  /root/i18n/md/out/main/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

## Na Podlagi `github action` Neprekinjene Integracije

Za konfiguracijo `github action` lahko uporabite naslednje:

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

Kot je razvidno iz konfiguracije, se ta potek dela sproži ob potiskanju na vejo `main` in vejo `dist` .

Potek dela bo za objavo dokumenta uporabil konfiguracijsko datoteko, ki ustreza imenu veje. Tukaj bosta kot konfiguracija za objavo uporabljeni `.i18n/htm/main.yml` oziroma `.i18n/htm/dist.yml` .

Priporočamo naslednje najboljše prakse za postopek objave dokumenta:

Ko so spremembe potisnjene v vejo `main` , se dokument sproži za izgradnjo in razmestitev v postajo za predogled (postaja za predogled je na voljo [github page](//pages.github.com) ).

Po potrditvi, da je dokument pravilen na spletnem mestu za predogled, bo koda združena in potisnjena v vejo `dist` , uradna izdelava in uvedba pa bosta na spletu.

Seveda izvajanje zgornjega postopka zahteva pisanje več konfiguracij.

Za skriptiranje delovnega toka se lahko sklicujete na dejanski projekt [github.com/fcdoc/doc](//github.com/fcdoc/doc/blob/main/.github/workflows/i18n.site.yml)

`secrets.I18N_SITE_TOKEN` in `secrets.NPM_TOKEN` v konfiguraciji zahtevata, da konfigurirate tajne spremenljivke v osnovi kode.

![](//p.3ti.site/1730970199.avif)

`I18N_SITE_TOKEN` [i18n.site/token](//i18n.site/token)

`NPM_TOKEN` je žeton za objavo paketa `npm` v konfiguraciji. [npmjs.com](//npmjs.com) in ustvarite žeton za objavo (kot je prikazano spodaj).

![](//p.3ti.site/1730969906.avif)


## Struktura Imenika

### `public`

Statične datoteke spletnega mesta, kot so `favicon.ico` , `robots.txt` itd.

Datoteke z ikonami lahko ustvarite z [realfavicongenerator.net](https://realfavicongenerator.net)

### `.i18n`

V imeniku `.i18n` so konfiguracijske datoteke, predpomnilnik prevodov itd. od `i18n.site` Za podrobnosti glejte naslednje poglavje ["Konfiguracija"](/i18n.site/conf) .

### `en`

Imenik izvornega jezika, ki ustreza konfiguracijski datoteki `en` od `fromTo` v `.i18n/conf.yml`

```yaml
i18n:
  fromTo:
    en: zh
```

Prosimo, glejte konfiguracijo prevoda [i18](/i18/use)