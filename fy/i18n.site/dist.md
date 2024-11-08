# Ynset en Online

`i18n.site` nimt in [applikaasje-arsjitektuer fan ien side](https://developer.mozilla.org/docs/Glossary/SPA) oan, en de webside yngongsside en webside-ynhâld wurde ûnôfhinklik ynset.

Nei it útfieren fan de boppesteande oersetting, wurde mappen `htm` en `v` generearre ûnder de map `md/out/dev` .

Hjir, `dev` betsjut dat it is boud basearre op de `.i18n/htm/dev.yml` konfiguraasje triem.

`dev` folder :

De map `htm` is de yngongside fan 'e webside.

De map `v` befettet websideynhâld mei ferzjenûmers.

Lokale foarbyld makket neat oer it ferzjenûmer en sil alle bestannen kopiearje nei de `out/dev/v/0.1.0` map.

Foar offisjele frijlitting sille feroare bestannen kopiearre wurde nei it nije ferzjenûmermap.

## Spesifisearje Konfiguraasjetriem Mei `-c`

Ferskillende konfiguraasjetriemmen sille oerienkommende mappen meitsje yn 'e `out` -map.

Bygelyks, `.i18n/htm/main.yml` sil de map `out/main` oanmeitsje.

`dev.yml` en `main.yml` binne de standert konfiguraasjes.

`dev` is de ôfkoarting fan `development` , wat de ûntwikkelingsomjouwing oanjout, brûkt foar lokale foarbyld, en is ek it standert konfiguraasjetriem.
`ol` is de ôfkoarting `npm` `online` , wat de online omjouwing `-n` , dy't brûkt wurdt foar offisjele frijlitting.

Jo kinne ek oare konfiguraasjetriemmen oanmeitsje Brûk `--htm_conf` op 'e kommandorigel om de konfiguraasjetriemnamme oan te jaan dy't jo wolle brûke.

bygelyks:
```
i18n.site --htm_conf dist --save
```

Hjir stiet `--save` foar it ferzjenûmer fan de fernijing útjefte.

## <a rel=id href="#npm" id="npm"></a> Publisearje ynhâld op npmjs.com

It publisearjen [fan](/i18n.site/feature#ha) ynhâld nei [npmjs.com](//npmjs.com)

### npm Oanmelde & Post

Ynstallearje `nodejs` , oanmelde mei `npm login` .

Bewurkje `md/.i18n/htm/main.yml` [npmjs.com](//npmjs.com) feroarje de wearde fan [`md:`](//github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/main.yml#L7) `YOUR_NPM_PACKAGE` as jo eigen `npm` pakketnamme.

Dan feroarje `md/.i18n/htm/main.package.json`

Run `i18n.site --npm` of `i18n.site -n` yn 'e `md` map om te oersetten en te publisearjen.

As jo gebrûk meitsje fan in trochgeande yntegraasje omjouwing te publisearjen, der is gjin needsaak om te ynstallearjen `nodejs` Krekt kopiearje de oanmelden en publisearjen tastimmingen `~/.npmrc` nei de omjouwing.

As jo de pakketnamme fan `v:` yn `main.yml` wizigje, **wês dan wis dat jo earst `.i18n/v/main` wiskje** en it dan publisearje.

#### Proxy-Tsjinner Publisearre Troch npm

As brûkers op it fêstelân fan Sina netwurkproblemen tsjinkomme en `npm` pakketten net kinne publisearje, kinne se de omjouwingsfariabele `https_proxy` ynstelle om de proxyserver te konfigurearjen.

Oannommen dat jo proxy-tsjinner poarte `7890` is, kinne jo skriuwe:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

## Self-Hosted Ynhâld

As jo de ynhâld sels hostje wolle, bewurkje earst `md/.i18n/htm/main.yml` en feroarje `v: //unpkg.com/i18n.site` nei jo URL-foarheaksel, lykas `v: //i18n-v.xxx.com` .

Fier de `md` map yn en rinne

```
i18n.site --htm_conf ol --save
```

of ôfkoarting

```
i18n.site -c ol -s
```

Konfigurearje dan de ynhâld yn 'e `md/out/main/v` -map nei it URL-prefixpaad ynsteld yn `v:` .

As lêste, **konfigurearje de cache-tiid fan it paad dat einiget op `/.v` nei `1s`** , oars kin de nij frijjûn ynhâld net direkt tagonklik wurde.

De cachetiid foar oare paden kin ynsteld wurde op ien jier of mear om ûnnedige oanfragen te ferminderjen.

## Host Ynhâld Oan s3

Om ynhâld sels te hostjen, neist it brûken fan jo eigen server, is `CDN` oare mienskiplike opsje om `S3` + te brûken.

Jo kinne [rclone](https://rclone.org) om oan te melden by de `S3` tsjinner, ferwize dan nei en feroarje it folgjende skript, en kopiearje allinich de ynkrementele wizigingen nei `S3` foar elke release.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/main/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/main/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/main/v/.v "$s3:/$bucket/"
```

Unthâld om `CDN` te konfigurearjen sadat de cache-tiid fan it paad dat op `/.v` einiget `1s` is, oars kin de nij útbrochte ynhâld net direkt tagonklik wurde.

## Publisearje Webside

De webside kin oeral ynset wurde [github page](https://pages.github.com) en [cloudflare page](https://pages.cloudflare.com) binne goede karren.

Om't de webside in [applikaasje-arsjitektuer fan ien side](https://developer.mozilla.org/docs/Glossary/SPA) brûkt, tink dan om URL-paden te herskriuwen dy't gjin `. ` oant `index.html` befetsje.

De yngongside fan 'e webside hoecht mar ien kear te wurde ynset, en d'r is gjin needsaak om de yngongside fan 'e webside opnij yn te setten foar folgjende ynhâldupdates.

### Ynsette Op github Side

[Klikje hjir earst om in organisaasje te github](https://github.com/account/organizations/new?plan=free) De folgjende organisaasjenamme is `i18n-demo` as foarbyld.

Meitsje dan pakhús `i18n-demo.github.io` ûnder dizze organisaasje (ferfange asjebleaft `i18n-demo` mei de organisaasjenamme dy't jo makke hawwe):

![](https://p.3ti.site/1721098657.avif)

By it publisearjen fan de ynhâld yn it foarige artikel is `out/main/htm` oanmakke Fier dizze map yn en útfiere :

```
ln -s index.html 404.html
```


Om't `github page` it werskriuwen fan URL-paden net stipet, wurdt `404.html` ynstee brûkt.

Fier dan it folgjende kommando út yn 'e map `htm` (ûnthâld om `i18n-demo/i18n-demo.github.io.git` te ferfangen mei jo eigen pakhúsadres) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Nei it triuwen fan 'e koade, wachtsje oant de ynset fan `github page` mei súkses rint (lykas hjirûnder werjûn) foardat jo tagong krije.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Sjoch foar demo-side:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

### Ynsette Op cloudflare Side

Yn [cloudflare page](//pages.cloudflare.com) mei `github page` , it jout paad herskriuwen en is mear freonlik foar it fêstelân fan Sina en is mear tagonklik It is oan te rieden om te brûken.

De ynset fan `cloudflare page` is normaal basearre op de ynset fan `github page` hjirboppe.

Meitsje in projekt en bine de `i18n-demo.github.io` pakhús hjirboppe.

It proses wurdt werjûn yn 'e figuer hjirûnder:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Klik asjebleaft `Add Account` om tagong te jaan oan organisaasje `i18n-demo` .

As jo it pakhús fan in oare organisaasje bûn hawwe, moatte jo miskien twa kear op `Add Account` klikke om twa kear te autorisearjen foardat de nije organisaasje werjûn wurdt.

![](https://p.3ti.site/1721118306.avif)

Selektearje dan pakhús `i18n-demo.github.io` , klik dan op `Begin setup` , en brûk de standertwearden foar folgjende stappen.

![](https://p.3ti.site/1721118490.avif)

Nei it binen foar de earste kear, moatte jo in pear minuten wachtsje foardat jo tagong krije kinne.

Nei ynset kinne jo in oanpaste domeinnamme bine.

![](https://p.3ti.site/1721119459.avif)

Nei it binen fan de oanpaste domeinnamme, gean asjebleaft nei de domeinnamme om it paadherskriuwen fan 'e applikaasje fan ien side te konfigurearjen, lykas hjirûnder werjûn:

![](https://p.3ti.site/1721119320.avif)

De regels yn de boppesteande foto binne as folget Ferfange asjebleaft `i18n.site` yn de earste rigel hjirûnder mei de domeinnamme dy't jo bûn.

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

Stel ek de cache-regels yn, lykas hjirûnder werjûn, en set de cache-doer yn op ien moanne.

![](https://p.3ti.site/1721125111.avif)

Feroarje asjebleaft de domeinnamme dy't oerienkomt yn 'e twadde stap yn' e foto hjirboppe nei de domeinnamme dy't jo bûn hawwe.

### Optimalisearjen Fan Webside-Ynset Op It Fêstelân Fan Sina

As jo bettere berikberensprestaasjes wolle krije yn 'e netwurkomjouwing fan it fêstelân fan Sina, [registrearje dan earst in domeinnamme](//beian.aliyun.com) .

Brûk dan de objektopslach fan wolkferkeapers op it fêstelân fan Sina + Implementearje de folgjende ynhâld `CDN` `out/main/htm`

Jo kinne edge computing brûke om it paad te herskriuwen om oan te passen oan applikaasjes fan ien side Bygelyks, [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) kin sa ynsteld wurde:

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
  // Jo kinne de antwurdkop ynstelle om de útfier te debuggen, lykas out.XXX = 'MSG';
})
```

![](https://p.3ti.site/1721121273.avif)

Om't record `MX` en record `CNAME` net tegearre bestean kinne, moatte jo as jo domeinnamme-e-mails tagelyk ûntfange wolle, gearwurkje mei [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) skript nei nivo `CNAME` yn record `A` .

Derneist, om't de oerseeske ferkearskosten fan wolkferkeapers op it fêstelân fan Sina relatyf djoer binne, as jo de kosten wolle optimalisearje, kinne jo [de fergese geografyske resolúsje fan Huawei DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) en de oanpaste domeinnamme fan [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (lykas hjirûnder werjûn) brûke ferkear omlieding── Ferkear routing yn fêstelân Sina Baidu Cloud `CDN` , ynternasjonaal ferkear giet cloudflare .

![](https://p.3ti.site/1721119788.avif)

Dizze oplossings foar ynsetoptimalisaasje binne komplekser en sille yn 'e takomst yn aparte haadstikken wurde yntrodusearre.

### Generic Domeinnamme Trochferwizing

As jo `i18n.site` brûke om in webside as jo haadwebside te generearjen, moatte jo meastentiids pan-domein-omlieding konfigurearje, dat is tagong ta `*.xxx.com` (ynklusyf `www.xxx.com` ) nei `xxx.com` .

Dizze eask kin berikt wurde mei help fan Alibaba Cloud `CDN` `EdgeScript` ( [Ingelsk dokumint](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Sineesk dokumint](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Foegje de domeinnamme ta yn [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) en wiis de domeinnamme `*.xxx.com` `CNAME` yn Alibaba Cloud `CDN` .

![](https://p.3ti.site/1721122000.avif)

Bygelyks, de pan-domeinnamme-omliedingskonfiguraasje fan `*.i18n.site` yn 'e ôfbylding hjirboppe is as folget:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

### Ynsette Mei nginx

Foegje asjebleaft in konfiguraasje ta lykas de `/root/i18n/md/out/main/htm` yn 'e `server` paragraaf fan nginx `out/main/htm`

```
location / {
  root  /root/i18n/md/out/main/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

## Basearre Op `github action` Trochgeande Yntegraasje

Jo kinne ferwize nei it folgjende om jo `github action` te konfigurearjen:

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

Lykas yn 'e konfiguraasje te sjen is, wurdt dizze workflow aktivearre as jo nei branch `main` en branch `dist` drukke.

De workflow sil it konfiguraasjebestân brûke dat oerienkomt `.i18n/htm/dist.yml` de `.i18n/htm/main.yml` om it dokumint te publisearjen.

Wy riede de folgjende bêste praktiken oan foar it proses fan frijlitting fan dokuminten:

As wizigingen nei tûke `main` skood wurde, wurdt it dokumint aktivearre om te bouwen en ynset op it foarbyldstasjon (it foarbyldstasjon is beskikber [github page](//pages.github.com) ).

Nei it befêstigjen dat it dokumint korrekt is op 'e preview-side, sil de koade wurde gearfoege en nei branch `dist` skood, en de offisjele bou en ynset sil online gean.

Fansels fereasket it útfieren fan it boppesteande proses mear konfiguraasjes te skriuwen.

Jo kinne ferwize nei it eigentlike projekt foar workflow scripting [github.com/fcdoc/doc](//github.com/fcdoc/doc/blob/main/.github/workflows/i18n.site.yml)

`secrets.I18N_SITE_TOKEN` en `secrets.NPM_TOKEN` yn 'e konfiguraasje fereaskje dat jo geheime fariabelen yn' e koadebasis konfigurearje.

![](//p.3ti.site/1730970199.avif)

`I18N_SITE_TOKEN` [i18n.site/token](//i18n.site/token)

`NPM_TOKEN` is it publisearjende token fan pakket `npm` yn 'e konfiguraasje [npmjs.com](//npmjs.com) meitsje in token mei publisearjende tagongsrjochten (lykas hjirûnder werjûn).

![](//p.3ti.site/1730969906.avif)


## Directory Struktuer

### `public`

Statyske bestannen fan 'e webside, lykas `favicon.ico` , `robots.txt` , ensfh.

De ikoanbestannen hjir kinne wurde oanmakke mei [realfavicongenerator.net](https://realfavicongenerator.net)

### `.i18n`

Under de `.i18n` triemtafel binne de konfiguraasje triemmen, oersetting cache, ensfh fan `i18n.site` Sjoch it folgjende haadstik ["Konfiguraasje"](/i18n.site/conf) foar details.

### `en`

Boarnetaalmap, oerienkommende mei `en` fan `fromTo` yn `.i18n/conf.yml` konfiguraasjetriem

```yaml
i18n:
  fromTo:
    en: zh
```

Ferwize asjebleaft nei de konfiguraasje fan oersetting [i18](/i18/use)