# Deplojo Kaj Rete

`i18n.site` adoptas [unu-paĝan aplikaĵarkitekturon](https://developer.mozilla.org/docs/Glossary/SPA) , kaj la reteja enirejpaĝo kaj reteja enhavo estas deplojitaj sendepende.

Post rulado de la ĉi-supra traduko, dosierujoj `htm` kaj `v` estos generitaj sub la dosierujo `md/out/dev` .

Ĉi tie, `dev` signifas, ke ĝi estas konstruita surbaze de la agorda dosiero `.i18n/htm/dev.yml` .

`dev` dosierujo :

La dosierujo `htm` estas la retejo enirpaĝo.

La `v` dosierujo enhavas retejan enhavon kun versinumeroj.

Loka antaŭvido ne zorgas pri la numero de versio kaj kopios ĉiujn dosierojn al la `out/dev/v/0.1.0` dosierujo.

Por oficiala liberigo, ŝanĝitaj dosieroj estos kopiitaj al la nova versio-numera dosierujo.

## Indiku Agordan Dosieron Kun `-c`

Malsamaj agordaj dosieroj kreos respondajn dosierujojn en la dosierujo `out` .

Ekzemple, `.i18n/htm/main.yml` kreos la `out/main` dosierujon.

`dev.yml` kaj `main.yml` estas la defaŭltaj agordoj.

`dev` estas la mallongigo de `development` , indikante la evolumedion, uzatan por loka antaŭrigardo, kaj ankaŭ estas la defaŭlta agorda dosiero.
`ol` estas la mallongigo de `online` , indikante la interretan medion, kiu estas uzata por oficiala eldono. Ĝi ankaŭ estas la defaŭlta agorda dosiero kiam oni uzas komandliniajn parametrojn `-n` ĝis `npm` por liberigi.

Vi ankaŭ povas krei aliajn agordajn dosierojn Uzu `--htm_conf` en la komandlinio por specifi la agordan nomon por uzi:

ekzemple:
```
i18n.site --htm_conf dist --save
```

Ĉi tie `--save` reprezentas la numeron de versio de ĝisdatigo.

## <a rel=id href="#npm" id="npm"></a> Eldonu enhavon al npmjs.com

Publiki enhavon al [npmjs.com](//npmjs.com) estas la rekomendita defaŭlta solvo (vidu [Frontend High Availability](/i18n.site/feature#ha) ).

### Ensalutu & npm

Instalu `nodejs` , ensalutu per `npm login` .

Redaktu `md/.i18n/htm/main.yml` [npmjs.com](//npmjs.com) ŝanĝu la valoron de [`md:`](//github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/main.yml#L7) `YOUR_NPM_PACKAGE` kiel via propra `npm` paknomo.

Poste modifi `md/.i18n/htm/main.package.json`

Rulu `i18n.site --npm` aŭ `i18n.site -n` en la `md` dosierujo por traduki kaj publikigi.

Se vi uzas kontinuan integrigan medion por publikigi, ne necesas instali `nodejs` Nur kopiu la ensalutitajn kaj eldonajn permesojn `~/.npmrc` al la medio.

Se vi modifas la pakaĵnomon de `v:` en `main.yml` , bonvolu **nepre forigi `.i18n/v/main` unue** kaj poste publikigi ĝin.

#### Prokura Servilo Eldonita De npm

Se uzantoj en kontinenta Ĉinio renkontas retajn problemojn kaj ne kapablas publikigi `npm` pakaĵojn, ili povas agordi la mediovariablon `https_proxy` por agordi la prokurilon.

Supozante, ke via prokurservila haveno estas `7890` , vi povas skribi:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

## Memgastigita Enhavo

Se vi volas memgastigi la enhavon, unue redaktu `md/.i18n/htm/main.yml` kaj ŝanĝu `v: //unpkg.com/i18n.site` al via URL-prefikso, kiel `v: //i18n-v.xxx.com` .

Enigu la `md` dosierujon kaj rulu

```
i18n.site --htm_conf ol --save
```

aŭ mallongigo

```
i18n.site -c ol -s
```

Poste, agordu la enhavon en la dosierujo `md/out/main/v` al la URL-prefiksa vojo fiksita en `v:` .

Fine, **agordu la kaŝmemortempon de la vojo finiĝanta per `/.v` ĝis `1s`** , alie la lastatempe liberigita enhavo ne povas aliri tuj.

La kaŝmemortempo por aliaj vojoj povas esti agordita al unu jaro aŭ pli por redukti nenecesajn petojn.

## Gastigu Enhavon Al s3

Por memgastigi enhavon, krom `CDN` vian propran servilon, alia ofta elekto estas uzi `S3` + .

Vi povas uzi [rclone](https://rclone.org) por ensaluti al la `S3` servilo, tiam referenci kaj modifi la sekvan skripton, kaj nur kopii la pliigajn ŝanĝojn al `S3` por ĉiu eldono.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/main/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/main/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/main/v/.v "$s3:/$bucket/"
```

Memoru agordi `CDN` por ke la kaŝmemortempo de la vojo finiĝanta per `/.v` estu `1s` , alie la nove eldonita enhavo ne povas tuj aliri.

## Publikigi Retejon

La retejo povas esti deplojita ie ajn, [github page](https://pages.github.com) [cloudflare page](https://pages.cloudflare.com) estas bonaj elektoj.

Ĉar la retejo uzas [unupaĝan aplikaĵarkitekturon](https://developer.mozilla.org/docs/Glossary/SPA) , memoru reverki URL-vojojn kiuj ne enhavas `. ` ĝis `index.html` .

La retpaĝa enirpaĝo nur devas esti deplojita unufoje, kaj ne necesas redeploji la retejan enirpaĝon por postaj enhavaj ĝisdatigoj.

### Deploji Sur Github-Paĝo

Unue [alklaku ĉi github por krei organizon](https://github.com/account/organizations/new?plan=free) La sekva organizo nomo estas `i18n-demo` .

Poste kreu magazenon `i18n-demo.github.io` sub ĉi tiu organizo (bonvolu anstataŭigi `i18n-demo` per la organizo nomo, kiun vi kreis):

![](https://p.3ti.site/1721098657.avif)

Publikante la enhavon en la antaŭa artikolo, `out/main/htm` estis generita Bonvolu eniri ĉi tiun dosierujon kaj ruli :

```
ln -s index.html 404.html
```


Ĉar `github page` ne subtenas reskribon de URL-pado, `404.html` estas uzata anstataŭe.

Poste rulu la sekvan komandon en la dosierujo `htm` (memoru anstataŭigi `i18n-demo/i18n-demo.github.io.git` per via propra magazenadreso) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Post puŝado de la kodo, atendu la disfaldiĝon de `github page` sukcese funkcii (kiel montrite sube) antaŭ ol vi povas aliri ĝin.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Por demo-paĝo bonvolu vidi:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

### Deploji Sur cloudflare Paĝo

[cloudflare page](//pages.cloudflare.com) kun `github page` , ĝi disponigas padon reverkadon kaj estas pli amika al kontinenta Ĉinio kaj estas pli alirebla.

La deplojo de `cloudflare page` estas kutime bazita sur la deplojo de `github page` supre.

Kreu projekton kaj ligu la `i18n-demo.github.io` magazenon supre.

La procezo estas montrita en la figuro sube:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Bonvolu klaki `Add Account` por doni aliron al organizo `i18n-demo` .

Se vi ligis la magazenon de alia organizo, vi eble bezonos klaki `Add Account` dufoje por rajtigi dufoje antaŭ ol la nova organizo aperos.

![](https://p.3ti.site/1721118306.avif)

Poste, elektu magazenon `i18n-demo.github.io` , tiam alklaku `Begin setup` , kaj uzu la defaŭltajn valorojn por postaj paŝoj.

![](https://p.3ti.site/1721118490.avif)

Post ligado por la unua fojo, vi devas atendi kelkajn minutojn antaŭ ol vi povas aliri ĝin.

Post deplojo, vi povas ligi propran domajnan nomon.

![](https://p.3ti.site/1721119459.avif)

Post ligo de la kutima domajna nomo, bonvolu iri al la domajna nomo por agordi la padon reverkadon de la unupaĝa aplikaĵo, kiel montrite sube:

![](https://p.3ti.site/1721119320.avif)

La reguloj en la supra bildo estas kiel sekvas Bonvolu anstataŭigi `i18n.site` en la unua linio sube per la domajna nomo, kiun vi ligis.

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

Krome, bonvolu agordi la kaŝmemorregulojn, kiel montrite sube, kaj agordi la kaŝmemorodaŭron al unu monato.

![](https://p.3ti.site/1721125111.avif)

Bonvolu ŝanĝi la domajnan nomon kongruan en la dua paŝo en la supra bildo al la domajna nomo, kiun vi ligis.

### Optimumigo De Retejo-Deplojo en Kontinenta Ĉinio

Se vi volas akiri pli bonan alireblecon en la reto medio de kontinenta Ĉinio, bonvolu [registri domajnan nomon](//beian.aliyun.com) unue.

Tiam, uzu la objektan stokadon de nubaj vendistoj en kontinenta + `CDN` Deploji la sekvan enhavon `out/main/htm` .

Vi povas uzi randan komputadon por reverki la vojon por adaptiĝi al unupaĝaj aplikoj Ekzemple, [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) povas esti agordita tiel:

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
  // Vi povas agordi la respondan kaplinion por sencimigi la eligon, kiel ekstere.XXX = 'MSG';
})
```

![](https://p.3ti.site/1721121273.avif)

Ĉar rekordo `MX` kaj rekordo `CNAME` ne povas kunekzisti, se vi volas ricevi retpoŝtojn de domajna nomo samtempe, vi devas kunlabori kun la [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) al nivelo `CNAME` en rekordon `A` .

Krome, ĉar la transmaraj trafikaj kostoj de nubaj vendistoj en kontinenta Ĉinio estas relative multekostaj, se vi volas optimumigi kostojn, vi povas uzi [DNS senpagan geografian rezolucion de Huawei Cloud](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) kaj la propran domajnan nomon de [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (kiel montrite sube) por atingi trafika deturniĝo──Trafikvojigo en kontinenta Ĉinio Baidu Cloud `CDN` , internacia trafiko iras cloudflare .

![](https://p.3ti.site/1721119788.avif)

Ĉi tiuj disfaldaj optimumigaj solvoj estas pli kompleksaj kaj estos enkondukitaj en apartaj ĉapitroj estonte.

### Ĝenerala Domajna Nomo Alidirekto

Se vi uzas `i18n.site` por generi retejon kiel vian ĉefan retejon, vi kutime bezonas agordi tutdomajnan alidirekton, tio estas, redirekti aliron al `*.xxx.com` (inkluzive de `www.xxx.com` ) al `xxx.com` .

Ĉi tiu postulo povas esti atingita per la helpo de Alibaba Cloud `CDN` `EdgeScript` ( [angla dokumento](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Ĉina dokumento](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Aldonu la domajnan nomon en [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) kaj indiku la domajnan nomon `*.xxx.com` `CNAME` en Alibaba Cloud `CDN` .

![](https://p.3ti.site/1721122000.avif)

Ekzemple, la tutdomajna nomo alidirekta agordo de `*.i18n.site` en la supra bildo estas jena:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

### Deploji Per nginx

Bonvolu aldoni agordon similan al la sekva en la `server` alineo de nginx Bonvolu ŝanĝi `/root/i18n/md/out/main/htm` al la vojo de via propra projekto `out/main/htm` :

```
location / {
  root  /root/i18n/md/out/main/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

## Bazita Sur `github action` Kontinua Integriĝo

Vi povas raporti al la sekvanta por agordi vian `github action` :

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

Kiel videblas en la agordo, ĉi tiu laborfluo estas ekigita kiam oni premas al branĉo `main` kaj branĉo `dist` .

La laborfluo uzos la agordan dosieron respondan al la branĉnomo por publikigi la dokumenton Ĉi tie, `.i18n/htm/main.yml` kaj `.i18n/htm/dist.yml` estos uzataj kiel la eldona agordo respektive.

Ni rekomendas la jenajn plej bonajn praktikojn por la dokumenteldonprocezo:

Kiam ŝanĝoj estas puŝitaj al branĉo `main` , la dokumento estas ekigita por esti konstruita kaj deplojita al la antaŭrigardstacio (la antaŭrigardstacio estas havebla [github page](//pages.github.com) ).

Post konfirmi ke la dokumento estas ĝusta en la antaŭrigardejo, la kodo estos kunfandita kaj puŝita al branĉo `dist` , kaj la oficiala konstruo kaj deplojo enretiĝos.

Kompreneble, efektivigi ĉi-supran procezon postulas verki pli da agordoj.

Vi povas raporti al la reala projekto por laborflua skripto [github.com/fcdoc/doc](//github.com/fcdoc/doc/blob/main/.github/workflows/i18n.site.yml)

`secrets.I18N_SITE_TOKEN` kaj `secrets.NPM_TOKEN` en la agordo postulas, ke vi agordu sekretajn variablojn en la koda bazo.

![](//p.3ti.site/1730970199.avif)

`I18N_SITE_TOKEN` [i18n.site/token](//i18n.site/token)

`NPM_TOKEN` estas la publikiga ĵetono de la pako `npm` en la agordo Vizitu [npmjs.com](//npmjs.com)

![](//p.3ti.site/1730969906.avif)


## Dosierujo-Strukturo

### `public`

Senmovaj dosieroj de la retejo, kiel `favicon.ico` , `robots.txt` , ktp.

La ikondosieroj ĉi tie povas esti generitaj per [realfavicongenerator.net](https://realfavicongenerator.net)

### `.i18n`

Sub la dosierujo `.i18n` estas la agordaj dosieroj, traduka kaŝmemoro ktp. de `i18n.site` Vidu la sekvan ĉapitron ["Agordo"](/i18n.site/conf) por detaloj.

### `en`

Fontlingva dosierujo, responda al `en` el `fromTo` el `.i18n/conf.yml` agorda dosiero

```yaml
i18n:
  fromTo:
    en: zh
```

Bonvolu raporti al la agordo de traduko [i18](/i18/use)