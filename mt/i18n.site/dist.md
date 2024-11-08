# Skjerament U Online

`i18n.site` jadotta arkitettura [ta 'applikazzjoni ta' paġna waħda](https://developer.mozilla.org/docs/Glossary/SPA) , u l-paġna tad-dħul tal-websajt u l-kontenut tal-websajt huma skjerati b'mod indipendenti.

Wara li tmexxi t-traduzzjoni ta' hawn fuq, id-direttorji `htm` u `v` se jiġu ġġenerati taħt id-direttorju `md/out/dev` .

Hawnhekk, `dev` tfisser li hija mibnija bbażata fuq il-fajl ta 'konfigurazzjoni `.i18n/htm/dev.yml` .

`dev` direttorju :

Id-direttorju `htm` huwa l-paġna tad-dħul tal-websajt.

Id-direttorju `v` fih kontenut tal-websajt b'numri tal-verżjoni.

Preview lokali ma jimpurtax min-numru tal-verżjoni u se tikkopja l-fajls kollha fid-direttorju `out/dev/v/0.1.0` .

Għar-rilaxx uffiċjali, il-fajls mibdula jiġu kkupjati fid-direttorju tan-numru tal-verżjoni l-ġdid.

## Speċifika L-Fajl Tal-Konfigurazzjoni `-c`

Fajls ta' konfigurazzjoni differenti se joħolqu direttorji korrispondenti fid-direttorju `out` .

Pereżempju, `.i18n/htm/main.yml` se joħloq id-direttorju `out/main` .

`dev.yml` u `main.yml` huma l-konfigurazzjonijiet default.

`dev` hija l-abbrevjazzjoni ta ' `development` , li tindika l-ambjent ta' żvilupp, użat għall-preview lokali, u huwa wkoll il-fajl tal-konfigurazzjoni default.
`ol` hija l-abbrevjazzjoni ta ' `online` , li tindika l-ambjent onlajn, li jintuża għar-rilaxx uffiċjali Huwa wkoll il-fajl tal-konfigurazzjoni default meta tuża l-parametri tal-linja tal-kmand `-n` sa `npm` għar-rilaxx.

Tista 'wkoll toħloq fajls ta' konfigurazzjoni oħra Uża `--htm_conf` fuq il-linja tal-kmand biex tispeċifika l-isem tal-fajl tal-konfigurazzjoni biex tuża:

per eżempju:
```
i18n.site --htm_conf dist --save
```

Hawnhekk `--save` jirrappreżenta n-numru tal-verżjoni tar-rilaxx tal-aġġornament.

## <a rel=id href="#npm" id="npm"></a> Ippubblika l-kontenut fuq npmjs.com

Il-pubblikazzjoni ta' kontenut għal [npmjs.com](//npmjs.com) hija s-soluzzjoni default rakkomandata (ara [Disponibbiltà Għolja ta' Front-end](/i18n.site/feature#ha) ).

### npm & Post

Installa `nodejs` , idħol `npm login` .

Editja `md/.i18n/htm/main.yml` u ibdel il-valur ta [npmjs.com](//npmjs.com) [`md:`](//github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/main.yml#L7) `YOUR_NPM_PACKAGE` bħala l-isem tal-pakkett `npm` tiegħek.

Imbagħad immodifika `md/.i18n/htm/main.package.json`

Mexxi `i18n.site --npm` jew `i18n.site -n` fid-direttorju `md` biex tittraduċi u tippubblika.

Jekk tuża ambjent ta 'integrazzjoni kontinwa biex tippubblika, m'hemmx bżonn li tinstalla `nodejs` Sempliċement tikkopja l-permessi li illoggjat u tal-pubblikazzjoni `~/.npmrc` fl-ambjent.

Jekk timmodifika l-isem tal-pakkett ta ' `v:` `main.yml` , jekk jogħġbok **kun żgur li tħassar `.i18n/v/main` l-ewwel** u mbagħad tippubblikah.

#### Proxy Server Ippubblikat Minn npm

Jekk l-utenti fiċ-Ċina kontinentali jiltaqgħu ma 'problemi tan-netwerk u ma jkunux jistgħu jippubblikaw pakketti `npm` , jistgħu jistabbilixxu l-varjabbli ambjentali `https_proxy` biex jikkonfiguraw is-server proxy.

Jekk wieħed jassumi li l-port tas-server proxy tiegħek huwa `7890` , tista 'tikteb:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

## Kontenut Self-Hosted

Jekk trid tospita l-kontenut lilha nnifisha, l-ewwel editja `md/.i18n/htm/main.yml` u biddel `v: //unpkg.com/i18n.site` għall-prefiss tal-URL tiegħek, bħal `v: //i18n-v.xxx.com` .

Daħħal id-direttorju `md` u run

```
i18n.site --htm_conf ol --save
```

jew abbrevjazzjoni

```
i18n.site -c ol -s
```

Imbagħad, ikkonfigura l-kontenut fid-direttorju `md/out/main/v` għall-passaġġ tal-prefiss tal-URL stabbilit `v:` .

Fl-aħħarnett, **ikkonfigura l-ħin tal-cache tal-mogħdija li tispiċċa `/.v` sa `1s`** , inkella l-kontenut li għadu kif ħareġ ma jistax jiġi aċċessat immedjatament.

Il-ħin tal-cache għal mogħdijiet oħra jista 'jiġi ssettjat għal sena jew aktar biex jitnaqqsu t-talbiet mhux meħtieġa.

## Ospitanti Kontenut Għal s3

Biex tospita l-kontenut `CDN` stess, minbarra li tuża s-server tiegħek, għażla komuni oħra hija li tuża `S3` + .

Tista' tuża [rclone](https://rclone.org) biex tidħol fis-server `S3` , imbagħad tirreferi u timmodifika l-iskrittura li ġejja, u tikkopja biss il-bidliet inkrementali għal `S3` għal kull rilaxx.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/main/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/main/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/main/v/.v "$s3:/$bucket/"
```

Ftakar li tikkonfigura `CDN` sabiex il-ħin tal-cache tal-mogħdija li tispiċċa `/.v` ikun `1s` , inkella l-kontenut li għadu kif ħareġ ma jistax jiġi aċċessat immedjatament.

## Tippubblika Websajt

Il-websajt tista' tiġi skjerata kullimkien, [github page](https://pages.github.com) [cloudflare page](https://pages.cloudflare.com) huma għażliet tajbin.

Minħabba li l-websajt tuża arkitettura [ta 'applikazzjoni ta' paġna waħda](https://developer.mozilla.org/docs/Glossary/SPA) , ftakar li terġa 'tikteb mogħdijiet tal-URL li ma fihomx `. ` sa `index.html` .

Il-paġna tad-dħul tal-websajt teħtieġ li tiġi skjerata darba biss, u m'hemmx bżonn li terġa' titħaddem il-paġna tad-dħul tal-websajt għal aġġornamenti sussegwenti tal-kontenut.

### Użu Fuq Il-Paġna github

L-ewwel [ikklikkja github biex toħloq organizzazzjoni](https://github.com/account/organizations/new?plan=free) L-isem tal-organizzazzjoni li ġej huwa `i18n-demo` bħala eżempju.

Imbagħad oħloq maħżen `i18n-demo.github.io` taħt din l-organizzazzjoni (jekk jogħġbok ibdel `i18n-demo` bl-isem tal-organizzazzjoni li ħloqt):

![](https://p.3ti.site/1721098657.avif)

Meta tippubblika l-kontenut fl-artiklu preċedenti, `out/main/htm` ġie ġġenerat. Jekk jogħġbok daħħal dan id-direttorju u run :

```
ln -s index.html 404.html
```


Minħabba li `github page` ma jappoġġjax il-kitba mill-ġdid tal-passaġġ tal-URL, minflok jintuża `404.html` .

Imbagħad mexxi l-kmand li ġej fid-direttorju `htm` (ftakar li tissostitwixxi `i18n-demo/i18n-demo.github.io.git` bl-indirizz tal-maħżen tiegħek) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Wara li timbotta l-kodiċi, stenna li l-iskjerament ta ' `github page` jaħdem b'suċċess (kif muri hawn taħt) qabel ma tkun tista' taċċessah.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Għal paġna demo jekk jogħġbok ara:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

### Uża Fuq Il-Paġna cloudflare

[cloudflare page](//pages.cloudflare.com) ma ' `github page` , jipprovdi kitba mill-ġdid tal-passaġġ u huwa aktar faċli għaċ-Ċina kontinentali u huwa aktar aċċessibbli.

L-iskjerament ta' `cloudflare page` normalment ikun ibbażat fuq l-iskjerament ta' `github page` hawn fuq.

Oħloq proġett u torbot il-maħżen `i18n-demo.github.io` hawn fuq.

Il-proċess jidher fil-figura hawn taħt:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Jekk jogħġbok ikklikkja `Add Account` biex tagħti aċċess għall-organizzazzjoni `i18n-demo` .

Jekk rbit il-maħżen ta' organizzazzjoni oħra, jista' jkollok bżonn tikklikkja `Add Account` darbtejn biex tawtorizza darbtejn qabel ma tintwera l-organizzazzjoni l-ġdida.

![](https://p.3ti.site/1721118306.avif)

Sussegwentement, agħżel maħżen `i18n-demo.github.io` , imbagħad ikklikkja `Begin setup` , u uża l-valuri awtomatiċi għall-passi sussegwenti.

![](https://p.3ti.site/1721118490.avif)

Wara li torbot għall-ewwel darba, trid tistenna ftit minuti qabel ma tkun tista' taċċessah.

Wara l-iskjerament, tista' torbot isem tad-dominju tad-dwana.

![](https://p.3ti.site/1721119459.avif)

Wara li torbot l-isem tad-dominju tad-dwana, jekk jogħġbok mur fl-isem tad-dominju biex tikkonfigura l-kitba mill-ġdid tal-passaġġ tal-applikazzjoni ta 'paġna waħda, kif muri hawn taħt:

![](https://p.3ti.site/1721119320.avif)

Ir-regoli fl-istampa ta' hawn fuq huma kif ġej Jekk jogħġbok ibdel `i18n.site` fl-ewwel linja hawn taħt bl-isem tad-dominju li torbot.

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

Barra minn hekk, jekk jogħġbok ikkonfigura r-regoli tal-cache, kif muri hawn taħt, u ssettja t-tul tal-cache għal xahar.

![](https://p.3ti.site/1721125111.avif)

Jekk jogħġbok ibdel l-isem tad-dominju li jaqbel fit-tieni pass fl-istampa ta' hawn fuq għall-isem tad-dominju li torbot.

### L-Ottimizzazzjoni Tal-Iskjerament Tal-Websajt Fiċ-Ċina Kontinentali

Jekk trid tikseb prestazzjoni aħjar ta 'aċċessibbiltà fl-ambjent tan-netwerk taċ-Ċina kontinentali, jekk jogħġbok [irreġistra isem ta' dominju](//beian.aliyun.com) l-ewwel.

Imbagħad, uża l-ħażna tal-oġġetti tal `out/main/htm` bejjiegħa tas-sħab fiċ-Ċina kontinentali + Użu l-kontenut li ġej `CDN` .

Tista 'tuża edge computing biex tikteb mill-ġdid il-mogħdija biex tadatta għal applikazzjonijiet ta' paġna waħda Per eżempju, [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) jista 'jiġi kkonfigurat hekk:

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
  // L-intestaturi tar-rispons jistgħu jiġu ssettjati biex jiddebugjaw l-output, bħal out.XXX = 'MSG';
})
```

![](https://p.3ti.site/1721121273.avif)

Minħabba li r-rekord `MX` u r-rekord `CNAME` ma jistgħux jeżistu flimkien, jekk trid tirċievi emails bl-isem tad-dominju fl-istess ħin, trid tikkoopera mal [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) iskript għal-livell `CNAME` fir-rekord `A` .

Barra minn hekk, minħabba li t-tariffi tat-traffiku barranin tal-bejjiegħa tas-sħab fiċ-Ċina kontinentali huma relattivament għaljin, jekk trid tottimizza l-ispejjeż, tista 'tuża [DNS -riżoluzzjoni ġeografika ħielsa ta' Huawei Cloud](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) u l-isem tad-dominju tad-dwana [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (kif muri hawn taħt) biex tikseb! devjazzjoni tat-traffiku──Rotot tat-traffiku fiċ-Ċina kontinentali Baidu Cloud `CDN` , it-traffiku internazzjonali jmur cloudflare .

![](https://p.3ti.site/1721119788.avif)

Dawn is-soluzzjonijiet għall-ottimizzazzjoni tal-iskjerament huma aktar kumplessi u se jiġu introdotti f'kapitoli separati fil-futur.

### Ridirezzjoni Ġenerika Ta' L-Isem Tad-Dominju

Jekk tuża `i18n.site` biex tiġġenera websajt bħala l-websajt prinċipali tiegħek, normalment ikollok bżonn tikkonfigura direzzjoni mill-ġdid pan-domain, jiġifieri, aċċess mill-ġdid għal `*.xxx.com` (inkluż `www.xxx.com` ) għal `xxx.com` .

Dan ir-rekwiżit jista 'jinkiseb bl-għajnuna ta' Alibaba Cloud `CDN` `EdgeScript` ( [dokument bl-Ingliż](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Dokument Ċiniż](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Żid l-isem tad-dominju [f'Alibaba CDN](https://cdn.console.aliyun.com/domain/list) u poġġi l-isem tad-dominju `*.xxx.com` `CNAME` f'Alibaba Cloud `CDN` .

![](https://p.3ti.site/1721122000.avif)

Pereżempju, il-konfigurazzjoni tar-ridirezzjoni tal-isem pan-dominju ta ' `*.i18n.site` fl-istampa ta' hawn fuq hija kif ġej:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

### Użu B'nginx

Jekk jogħġbok żid konfigurazzjoni simili għal dan li ġej fil-paragrafu `server` ta nginx Jekk jogħġbok ibdel `/root/i18n/md/out/main/htm` għall-mogħdija tal-proġett tiegħek stess `out/main/htm` :

```
location / {
  root  /root/i18n/md/out/main/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

## Ibbażat Fuq `github action` Integrazzjoni Kontinwa

Tista' tirreferi għal dan li ġej biex tikkonfigura `github action` tiegħek:

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

Kif jidher fil-konfigurazzjoni, dan il-fluss tax-xogħol jiġi attivat meta timbotta lejn il-fergħa `main` u l-fergħa `dist` .

Il-fluss tax-xogħol se juża l-fajl tal-konfigurazzjoni li jikkorrispondi għall-isem tal-fergħa biex jippubblika d-dokument Hawnhekk, `.i18n/htm/main.yml` u `.i18n/htm/dist.yml` se jintużaw bħala l-konfigurazzjoni tal-pubblikazzjoni rispettivament.

Nirrakkomandaw l-aħjar prattiki li ġejjin għall-proċess tar-rilaxx tad-dokumenti:

Meta l-bidliet jiġu mbuttati lejn il-fergħa `main` , id-dokument jiġi attivat biex jinbena u jiġi skjerat fl-istazzjon tal-preview (l-istazzjon tal-preview huwa disponibbli [github page](//pages.github.com) ).

Wara li tikkonferma li d-dokument huwa korrett fuq is-sit tal-preview, il-kodiċi se jiġi magħqud u mbuttat lejn il-fergħa `dist` , u l-bini uffiċjali u l-iskjerament se jmorru onlajn.

Naturalment, l-implimentazzjoni tal-proċess ta 'hawn fuq teħtieġ il-kitba ta' aktar konfigurazzjonijiet.

Tista' tirreferi għall-proġett attwali għall-iskript tal-fluss tax-xogħol [github.com/fcdoc/doc](//github.com/fcdoc/doc/blob/main/.github/workflows/i18n.site.yml)

`secrets.I18N_SITE_TOKEN` u `secrets.NPM_TOKEN` fil-konfigurazzjoni jeħtieġu li inti tikkonfigura varjabbli sigrieti fil-bażi tal-kodiċi.

![](//p.3ti.site/1730970199.avif)

`I18N_SITE_TOKEN` [i18n.site/token](//i18n.site/token)

`NPM_TOKEN` huwa t-token tal-pubblikazzjoni tal-pakkett `npm` fil-konfigurazzjoni [npmjs.com](//npmjs.com) oħloq token bil-permessi tal-pubblikazzjoni (kif muri hawn taħt).

![](//p.3ti.site/1730969906.avif)


## Struttura Tad-Direttorju

### `public`

Fajls statiċi tal-websajt, bħal `favicon.ico` , `robots.txt` , eċċ.

Il-fajls tal-ikona hawn jistgħu jiġu ġġenerati b' [realfavicongenerator.net](https://realfavicongenerator.net)

### `.i18n`

Taħt id-direttorju `.i18n` hemm il-fajls tal-konfigurazzjoni, il-cache tat-traduzzjoni, eċċ. ta ' `i18n.site` Ara l-kapitolu li jmiss ["Konfigurazzjoni"](/i18n.site/conf) għad-dettalji.

### `en`

Direttorju tal-lingwa tas-sors, li jikkorrispondi għal fajl ta' konfigurazzjoni `en` minn `fromTo` `.i18n/conf.yml`

```yaml
i18n:
  fromTo:
    en: zh
```

Jekk jogħġbok irreferi għall-konfigurazzjoni tat-traduzzjoni [i18](/i18/use)