# Defnydd Ac Ar-Lein

`i18n.site` yn mabwysiadu pensaernïaeth [cymhwysiad un dudalen](https://developer.mozilla.org/docs/Glossary/SPA) , ac mae tudalen mynediad y wefan a chynnwys y wefan yn cael eu defnyddio'n annibynnol.

Ar ôl rhedeg y cyfieithiad uchod, bydd cyfeiriaduron `htm` a `v` yn cael eu cynhyrchu o dan y cyfeiriadur `md/out/dev` .

Yma, mae `dev` yn golygu ei fod wedi'i adeiladu yn seiliedig ar y ffeil ffurfweddu `.i18n/htm/dev.yml` .

`dev` cyfeiriadur :

Y cyfeiriadur `htm` yw tudalen mynediad y wefan.

Mae'r cyfeiriadur `v` yn cynnwys cynnwys gwefan gyda rhifau fersiwn.

Nid yw rhagolwg lleol yn poeni am rif y fersiwn a bydd yn copïo pob ffeil i'r cyfeiriadur `out/dev/v/0.1.0` .

I'w rhyddhau'n swyddogol, bydd ffeiliau sydd wedi'u newid yn cael eu copïo i'r cyfeiriadur rhif fersiwn newydd.

## Nodwch Y Ffeil Ffurfweddu Gyda `-c`

Bydd gwahanol ffeiliau cyfluniad yn creu cyfeiriaduron cyfatebol yn y cyfeiriadur `out` .

Er enghraifft, bydd `.i18n/htm/main.yml` yn creu'r cyfeiriadur `out/main` .

`dev.yml` ac `main.yml` yw'r ffurfweddiadau rhagosodedig.

`dev` yw'r talfyriad o `development` , sy'n nodi'r amgylchedd datblygu, a ddefnyddir ar gyfer rhagolwg lleol, a dyma hefyd y ffeil ffurfweddu rhagosodedig.
`ol` yw'r talfyriad o `online` , sy'n nodi'r amgylchedd ar-lein, a ddefnyddir ar gyfer rhyddhau swyddogol Mae hefyd yn ffeil ffurfweddu rhagosodedig wrth ddefnyddio paramedrau llinell orchymyn `-n` i `npm` i ryddhau.

Gallwch hefyd greu ffeiliau ffurfweddu eraill Defnyddiwch `--htm_conf` ar y llinell orchymyn i nodi enw'r ffeil ffurfweddu i'w ddefnyddio:

er enghraifft:
```
i18n.site --htm_conf dist --save
```

Yma mae `--save` yn cynrychioli rhif y fersiwn rhyddhau diweddariad.

## <a rel=id href="#npm" id="npm"></a> Cyhoeddi cynnwys i npmjs.com

Cyhoeddi [cynnwys](/i18n.site/feature#ha) i [npmjs.com](//npmjs.com)

### npm Mewngofnodi & Post

Gosod `nodejs` , mewngofnodi gyda `npm login` .

Golygu `md/.i18n/htm/main.yml` a newid gwerth [`md:`](//github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/main.yml#L7) `YOUR_NPM_PACKAGE` fel eich enw pecyn `npm` eich hun Bydd unrhyw enw pecyn gwag ar [npmjs.com](//npmjs.com)

Yna addasu `md/.i18n/htm/main.package.json`

Rhedeg `i18n.site --npm` neu `i18n.site -n` yn y cyfeiriadur `md` i gyfieithu a chyhoeddi.

Os ydych yn defnyddio amgylchedd integreiddio parhaus i gyhoeddi, nid oes angen gosod `nodejs` Copïwch y caniatâd mewngofnodi a chyhoeddi `~/.npmrc` i'r amgylchedd.

Os ydych chi'n addasu enw pecyn `v:` mewn `main.yml` , **gwnewch yn siŵr eich bod chi'n dileu `.i18n/v/main` yn gyntaf** ac yna'n ei gyhoeddi.

#### Gweinydd Dirprwy Wedi'i Gyhoeddi Gan npm

Os yw defnyddwyr ar dir mawr Tsieina yn dod ar draws problemau rhwydwaith ac yn methu â chyhoeddi `npm` pecyn, gallant osod y newidyn amgylchedd `https_proxy` i ffurfweddu'r gweinydd dirprwy.

Gan dybio mai eich porth gweinydd dirprwyol yw `7890` , gallwch ysgrifennu:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

## Cynnwys Hunangynhaliol

Os ydych chi eisiau hunangynnal y cynnwys, golygwch `md/.i18n/htm/main.yml` yn gyntaf a newidiwch `v: //unpkg.com/i18n.site` i'ch rhagddodiad URL, megis `v: //i18n-v.xxx.com` .

Rhowch y cyfeiriadur `md` a rhedeg

```
i18n.site --htm_conf ol --save
```

neu dalfyriad

```
i18n.site -c ol -s
```

Yna, ffurfweddwch y cynnwys yn y cyfeiriadur `md/out/main/v` i'r llwybr rhagddodiad URL a osodwyd yn `v:` .

Yn olaf, **ffurfweddwch amser storfa'r llwybr sy'n gorffen yn `/.v` i `1s`** , fel arall ni ellir cyrchu'r cynnwys sydd newydd ei ryddhau ar unwaith.

Gellir gosod yr amser storio ar gyfer llwybrau eraill i flwyddyn neu fwy i leihau ceisiadau diangen.

## Cynnwys Gwesteiwr I s3

I hunangynnal cynnwys, yn ogystal â defnyddio'ch gweinydd eich hun, opsiwn cyffredin `CDN` yw defnyddio `S3` +

`S3` `S3` [rclone](https://rclone.org)

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/main/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/main/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/main/v/.v "$s3:/$bucket/"
```

Cofiwch ffurfweddu `CDN` fel mai amser cache'r llwybr sy'n gorffen yn `/.v` yw `1s` , fel arall ni ellir cyrchu'r cynnwys sydd newydd ei ryddhau ar unwaith.

## Cyhoeddi Gwefan

Gellir defnyddio'r wefan yn unrhyw le [github page](https://pages.github.com) ac mae [cloudflare page](https://pages.cloudflare.com) yn ddewisiadau da.

Gan fod y wefan yn defnyddio saernïaeth [rhaglen un dudalen](https://developer.mozilla.org/docs/Glossary/SPA) , cofiwch ailysgrifennu llwybrau URL nad ydynt yn cynnwys `. ` i `index.html` .

Dim ond unwaith y mae angen defnyddio tudalen mynediad y wefan, ac nid oes angen adleoli tudalen mynediad y wefan ar gyfer diweddariadau cynnwys dilynol.

### Defnyddio Ar Dudalen github

[Cliciwch github yn gyntaf i greu sefydliad](https://github.com/account/organizations/new?plan=free) `i18n-demo`

Yna creu warws `i18n-demo.github.io` o dan y sefydliad hwn (rhowch enw'r sefydliad a grewyd gennych yn lle `i18n-demo` ):

![](https://p.3ti.site/1721098657.avif)

Wrth gyhoeddi'r cynnwys yn yr erthygl flaenorol, mae `out/main/htm` wedi'i greu Rhowch y cyfeiriadur hwn a rhedeg :

```
ln -s index.html 404.html
```


Oherwydd nad yw `github page` yn cefnogi ailysgrifennu llwybr URL, defnyddir `404.html` yn lle hynny.

Yna rhedeg y gorchymyn canlynol yn y cyfeiriadur `htm` (cofiwch ddisodli `i18n-demo/i18n-demo.github.io.git` gyda'ch cyfeiriad warws eich hun) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Ar ôl gwthio'r cod, arhoswch i'r defnydd o `github page` redeg yn llwyddiannus (fel y dangosir isod) cyn y gallwch ei gyrchu.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Ar gyfer y dudalen demo gweler:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

### Defnyddio Ar Dudalen cloudflare

O'i [cloudflare page](//pages.cloudflare.com) â `github page` , mae'n darparu ailysgrifennu llwybrau ac mae'n fwy cyfeillgar i dir mawr Tsieina ac mae'n fwy hygyrch.

Mae'r defnydd o `cloudflare page` fel arfer yn seiliedig ar y defnydd o `github page` uchod.

Crëwch brosiect a rhwymwch y warws `i18n-demo.github.io` uchod.

Dangosir y broses yn y ffigur isod:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Cliciwch `Add Account` i ganiatáu mynediad i sefydliad `i18n-demo` .

Os ydych wedi rhwymo warws sefydliad arall, efallai y bydd angen i chi glicio `Add Account` ddwywaith i awdurdodi ddwywaith cyn y bydd y sefydliad newydd yn cael ei arddangos.

![](https://p.3ti.site/1721118306.avif)

Nesaf, dewiswch warws `i18n-demo.github.io` , yna cliciwch ar `Begin setup` , a defnyddiwch y gwerthoedd rhagosodedig ar gyfer camau dilynol.

![](https://p.3ti.site/1721118490.avif)

Ar ôl rhwymo am y tro cyntaf, mae angen i chi aros ychydig funudau cyn y gallwch gael mynediad iddo.

Ar ôl ei ddefnyddio, gallwch chi rwymo enw parth arferol.

![](https://p.3ti.site/1721119459.avif)

Ar ôl rhwymo'r enw parth arferol, ewch i'r enw parth i ffurfweddu llwybr ailysgrifennu'r rhaglen un dudalen, fel y dangosir isod:

![](https://p.3ti.site/1721119320.avif)

Mae'r rheolau yn y llun uchod fel `i18n.site` ganlyn.

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

Yn ogystal, ffurfweddwch y rheolau storfa, fel y dangosir isod, a gosodwch hyd y storfa i fis.

![](https://p.3ti.site/1721125111.avif)

Newidiwch yr enw parth sy'n cyfateb yn yr ail gam yn y llun uchod i'r enw parth a rwymwyd gennych.

### Optimeiddio'r Defnydd O Wefannau Ar Dir Mawr Tsieina

Os ydych chi am gael gwell perfformiad hygyrchedd yn amgylchedd rhwydwaith tir mawr Tsieina, [cofrestrwch enw parth](//beian.aliyun.com) yn gyntaf.

Yna, defnyddiwch storfa gwrthrychau gwerthwyr cwmwl ar dir mawr + `CDN` Defnyddio'r cynnwys canlynol `out/main/htm` .

Gallwch ddefnyddio cyfrifiadura ymyl i ailysgrifennu'r llwybr i addasu i gymwysiadau un dudalen Er enghraifft, gellir ffurfweddu [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) fel hyn:

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
  // Gellir gosod penawdau ymateb i allbwn dadfygio, megis out.XXX = 'MSG';
})
```

![](https://p.3ti.site/1721121273.avif)

Gan na all cofnod `MX` a record `CNAME` gydfodoli, os ydych am `A` e-byst enw parth ar yr un pryd, mae angen i chi gydweithredu â'r `CNAME` [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten)

Yn ogystal, oherwydd bod taliadau traffig tramor gwerthwyr cwmwl ar dir mawr Tsieina yn gymharol ddrud, os ydych chi am wneud y gorau o'r costau, gallwch ddefnyddio [datrysiad daearyddol rhad ac am ddim Huawei Cloud DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) ac enw parth arferol [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (fel y dangosir isod) i'w gyflawni dargyfeirio traffig ── Llwybro traffig ar dir mawr Tsieina Baidu Cloud `CDN` , traffig rhyngwladol yn mynd cloudflare .

![](https://p.3ti.site/1721119788.avif)

Mae'r atebion optimeiddio defnydd hyn yn fwy cymhleth a chânt eu cyflwyno mewn penodau ar wahân yn y dyfodol.

### Ailgyfeirio Enw Parth Generig

Os ydych yn defnyddio `i18n.site` i gynhyrchu gwefan fel eich prif wefan, fel arfer mae angen i chi ffurfweddu ailgyfeirio ar draws y parth, hynny yw, ailgyfeirio mynediad i `*.xxx.com` (gan gynnwys `www.xxx.com` ) i `xxx.com` .

Gellir cyflawni'r gofyniad hwn gyda chymorth Alibaba Cloud `CDN` `EdgeScript` ( [dogfen Saesneg](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [dogfen Tsieineaidd](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Ychwanegwch yr enw parth yn [Alibaba Cloud CDN](https://cdn.console.aliyun.com/domain/list) a phwyntiwch yr enw parth `*.xxx.com` `CNAME` yn Alibaba Cloud `CDN` .

![](https://p.3ti.site/1721122000.avif)

Er enghraifft, mae cyfluniad ailgyfeirio enw parth cyfan `*.i18n.site` yn y llun uchod fel a ganlyn:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

### Defnyddio Gyda nginx

Ychwanegwch gyfluniad tebyg i'r canlynol ym mharagraff `server` o nginx Newidiwch `/root/i18n/md/out/main/htm` i lwybr eich prosiect eich hun `out/main/htm` :

```
location / {
  root  /root/i18n/md/out/main/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

## Yn Seiliedig Ar `github action` Integreiddio Parhaus

Gallwch gyfeirio at y canlynol i ffurfweddu eich `github action` :

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

Fel y gwelir yn y ffurfweddiad, mae'r llif gwaith hwn yn cael ei sbarduno wrth wthio i gangen `main` a changen `dist` .

Bydd y llif gwaith yn defnyddio'r ffeil ffurfweddu sy'n cyfateb i enw'r gangen i gyhoeddi'r ddogfen Yma, bydd `.i18n/htm/main.yml` ac `.i18n/htm/dist.yml` yn cael eu defnyddio fel y ffurfwedd cyhoeddi yn y drefn honno.

Rydym yn argymell yr arferion gorau canlynol ar gyfer y broses rhyddhau dogfennau:

Pan fydd newidiadau yn cael eu gwthio i gangen `main` , mae'r ddogfen yn cael ei sbarduno i gael ei hadeiladu a'i hanfon i'r orsaf rhagolwg (mae'r orsaf rhagolwg ar gael [github page](//pages.github.com) ).

Ar ôl cadarnhau bod y ddogfen yn gywir ar y safle rhagolwg, bydd y cod yn cael ei uno a'i wthio i gangen `dist` , a bydd yr adeiladu a'r defnydd swyddogol yn mynd ar-lein.

Wrth gwrs, mae gweithredu'r broses uchod yn gofyn am ysgrifennu mwy o ffurfweddiadau.

Gallwch gyfeirio at y prosiect ei [github.com/fcdoc/doc](//github.com/fcdoc/doc/blob/main/.github/workflows/i18n.site.yml) ar gyfer sgriptio llif gwaith.

Mae `secrets.I18N_SITE_TOKEN` ac `secrets.NPM_TOKEN` yn y ffurfweddiad yn gofyn ichi ffurfweddu newidynnau cyfrinachol yn y sylfaen cod.

![](//p.3ti.site/1730970199.avif)

`I18N_SITE_TOKEN` [i18n.site/token](//i18n.site/token)

`NPM_TOKEN` yw tocyn cyhoeddi pecyn `npm` yn y ffurfweddiad. Ewch i [npmjs.com](//npmjs.com) a chreu tocyn gyda chaniatâd cyhoeddi (fel y dangosir isod).

![](//p.3ti.site/1730969906.avif)


## Strwythur Cyfeiriadur

### `public`

Ffeiliau statig y wefan, megis `favicon.ico` , `robots.txt` , ac ati.

Gellir cynhyrchu'r ffeiliau eicon yma gyda [realfavicongenerator.net](https://realfavicongenerator.net)

### `.i18n`

O dan y cyfeiriadur `.i18n` mae'r ffeiliau ffurfweddu, storfa cyfieithu, ac ati o `i18n.site` Gweler y bennod nesaf ["Ffurfweddiad"](/i18n.site/conf) am fanylion.

### `en`

Cyfeiriadur iaith ffynhonnell, sy'n cyfateb i ffeil ffurfweddu `en` o `fromTo` mewn `.i18n/conf.yml`

```yaml
i18n:
  fromTo:
    en: zh
```

Cyfeiriwch at gyfluniad cyfieithu [i18](/i18/use)