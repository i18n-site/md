# Imuṣiṣẹ Ati Online

`i18n.site` gba faaji [ohun elo oju-iwe kan ṣoṣo](https://developer.mozilla.org/docs/Glossary/SPA) , ati oju-iwe iwọle oju opo wẹẹbu ati akoonu oju opo wẹẹbu ni a gbe lọ ni ominira.

Lẹhin ṣiṣe itumọ ti o wa loke, awọn ilana `htm` ati `v` yoo jẹ ipilẹṣẹ labẹ ilana `md/out/dev` .

Nibi, `dev` tumọ si pe o da lori faili iṣeto ni `.i18n/htm/dev.yml` .

`dev` liana :

Ilana `htm` jẹ oju-iwe iwọle oju opo wẹẹbu.

Ilana `v` ni akoonu oju opo wẹẹbu pẹlu awọn nọmba ẹya.

Awotẹlẹ agbegbe ko bikita nipa nọmba ẹya ati pe yoo daakọ gbogbo awọn faili si itọsọna `out/dev/v/0.1.0` .

Fun itusilẹ osise, awọn faili ti o yipada yoo jẹ daakọ si itọsọna nọmba ẹya tuntun.

## Pato Faili Iṣeto Ni Pẹlu `-c`

Awọn faili iṣeto ni oriṣiriṣi yoo ṣẹda awọn ilana ti o baamu ni ilana `out` .

Fun apẹẹrẹ, `.i18n/htm/main.yml` yoo ṣẹda itọsọna `out/main` naa.

`dev.yml` ati `main.yml` jẹ awọn atunto aiyipada.

`dev` jẹ abbreviation ti `development` , afihan agbegbe idagbasoke, ti a lo fun awotẹlẹ agbegbe, ati pe o tun jẹ faili iṣeto ni aiyipada.
`ol` jẹ abbreviation ti `online` , ti o nfihan ayika ori ayelujara, eyiti o jẹ lilo fun idasilẹ osise O tun jẹ faili iṣeto ni aiyipada nigba lilo awọn ipilẹ laini aṣẹ `-n` si `npm` lati tu silẹ.

O tun le ṣẹda awọn faili atunto miiran Lo `--htm_conf` lori laini aṣẹ lati pato orukọ faili iṣeto ni lati lo:

fun apere:
```
i18n.site --htm_conf dist --save
```

Nibi `--save` duro fun nọmba ikede imudojuiwọn.

## <a rel=id href="#npm" id="npm"></a> Ṣe atẹjade akoonu si npmjs.com

Titẹjade akoonu si [npmjs.com](//npmjs.com) ni ojutu aiyipada ti a ṣeduro (wo Wiwa [Giga Iwaju-opin](/i18n.site/feature#ha) ).

### npm & Ifiweranṣẹ

Fi `nodejs` sori ẹrọ, wọle pẹlu `npm login` .

Ṣatunkọ `md/.i18n/htm/main.yml` ki o yipada iye ti [`md:`](//github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/main.yml#L7) `YOUR_NPM_PACKAGE` gẹgẹbi orukọ package `npm` ti ara rẹ yoo [npmjs.com](//npmjs.com) .

Lẹhinna yipada `md/.i18n/htm/main.package.json`

Ṣiṣe `i18n.site --npm` tabi `i18n.site -n` ninu ilana `md` lati tumọ ati ṣe atẹjade.

Ti o ba lo agbegbe iṣọpọ lemọlemọ lati gbejade, ko si iwulo lati fi sii `nodejs` Kan daakọ wọle ati awọn igbanilaaye titẹjade `~/.npmrc` si agbegbe naa.

Ti o ba yipada orukọ package ti `v:` ni `main.yml` , jọwọ **rii daju pe o paarẹ `.i18n/v/main` ni akọkọ** ati lẹhinna gbejade.

#### Olupin Aṣoju Ti a Tẹjade Nipasẹ npm

Ti awọn olumulo ni Ilu China ba pade awọn iṣoro nẹtiwọọki ati pe wọn ko le ṣe atẹjade awọn akopọ `npm` , wọn le ṣeto oniyipada ayika `https_proxy` lati tunto olupin aṣoju.

A ro pe ibudo olupin aṣoju rẹ jẹ `7890` , o le kọ:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

## Akoonu Ti Ara Ẹni Ti Gbalejo

Ti o ba fẹ lati gbalejo akoonu funrararẹ, ṣatunkọ akọkọ `md/.i18n/htm/main.yml` ki o yi `v: //unpkg.com/i18n.site` pada si asọtẹlẹ URL rẹ, bii `v: //i18n-v.xxx.com` .

Tẹ `md` liana ki o si ṣiṣẹ

```
i18n.site --htm_conf ol --save
```

tabi abbreviation

```
i18n.site -c ol -s
```

Lẹhinna, tunto akoonu ti o wa ninu itọsọna `md/out/main/v` si ọna itọsi URL ti a ṣeto ni `v:` .

Nikẹhin, **tunto akoko kaṣe ti ọna ti o pari ni `/.v` si `1s`** , bibẹẹkọ akoonu tuntun ti a tu silẹ ko le wọle si lẹsẹkẹsẹ.

Akoko kaṣe fun awọn ọna miiran le ṣeto si ọdun kan tabi diẹ sii lati dinku awọn ibeere ti ko wulo.

## Gbalejo Akoonu Si s3

Si akoonu ti ara ẹni, ni afikun si lilo olupin tirẹ, aṣayan miiran ti `CDN` wọpọ ni lati lo `S3` + .

O le lo [rclone](https://rclone.org) lati buwolu wọle si olupin `S3` , lẹhinna tọka si ati ṣe atunṣe iwe afọwọkọ atẹle, ati daakọ awọn ayipada afikun si `S3` nikan fun idasilẹ kọọkan.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/main/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/main/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/main/v/.v "$s3:/$bucket/"
```

Ranti lati tunto `CDN` ki akoko kaṣe ti ọna ti o pari ni `/.v` jẹ `1s` , bibẹẹkọ akoonu tuntun ti a tu silẹ ko le wọle si lẹsẹkẹsẹ.

## Jade Aaye Ayelujara

Oju opo wẹẹbu le wa ni ransogun nibikibi [github page](https://pages.github.com) ati [cloudflare page](https://pages.cloudflare.com) jẹ awọn yiyan ti o dara.

Nitoripe oju opo wẹẹbu nlo faaji [ohun elo oju-iwe kan](https://developer.mozilla.org/docs/Glossary/SPA) , ranti lati tun awọn ọna URL kọ ti ko ni `. ` si `index.html` ninu.

Oju-iwe titẹsi oju opo wẹẹbu nilo lati ran lọ lẹẹkan, ati pe ko si iwulo lati tun ṣe oju-iwe titẹsi oju opo wẹẹbu fun awọn imudojuiwọn akoonu atẹle.

### Ran Lọ Si Oju-Iwe github

[Kọkọ tẹ github lati ṣẹda ajọ kan](https://github.com/account/organizations/new?plan=free) `i18n-demo`

Lẹhinna ṣẹda ile-ipamọ `i18n-demo.github.io` labẹ ajo yii (jọwọ rọpo `i18n-demo` pẹlu orukọ agbari ti o ṣẹda):

![](https://p.3ti.site/1721098657.avif)

Nigbati o ba ṣe atẹjade akoonu inu nkan ti tẹlẹ, `out/main/htm` ti jẹ ipilẹṣẹ :

```
ln -s index.html 404.html
```


Nitoripe `github page` ko ṣe atilẹyin ọna atunṣe URL, `404.html` lo dipo.

Lẹhinna ṣiṣe aṣẹ atẹle ni itọsọna `htm` (ranti lati rọpo `i18n-demo/i18n-demo.github.io.git` pẹlu adirẹsi ile-itaja tirẹ) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Lẹhin titari koodu naa, duro fun imuṣiṣẹ ti `github page` lati ṣiṣẹ ni aṣeyọri (bii o han ni isalẹ) ṣaaju ki o to wọle si.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Fun oju-iwe demo jọwọ wo:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

### Ran Lọ Si Oju-Iwe cloudflare

[cloudflare page](//pages.cloudflare.com) a ṣe afiwe pẹlu `github page` , o pese ọna atunṣe ati pe o jẹ ọrẹ diẹ sii si Ilu China ati pe o wa ni iraye si diẹ sii.

Gbigbe ti `cloudflare page` nigbagbogbo da lori imuṣiṣẹ ti `github page` loke.

Ṣẹda iṣẹ akanṣe kan ki o di ile-itaja `i18n-demo.github.io` loke.

Ilana naa han ni aworan ni isalẹ:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Jọwọ tẹ `Add Account` lati fun ni iwọle si agbari `i18n-demo` .

Ti o ba ti dè ile-itaja ti ile-iṣẹ miiran, o le nilo lati tẹ `Add Account` lẹẹmeji lati fun laṣẹ lẹẹmeji ṣaaju iṣafihan tuntun naa.

![](https://p.3ti.site/1721118306.avif)

Nigbamii, yan ile-iṣẹ `i18n-demo.github.io` , lẹhinna tẹ `Begin setup` , ki o lo awọn iye aiyipada fun awọn igbesẹ ti o tẹle.

![](https://p.3ti.site/1721118490.avif)

Lẹhin ti dipọ fun igba akọkọ, o nilo lati duro fun iṣẹju diẹ ṣaaju ki o to wọle si.

Lẹhin imuṣiṣẹ, o le di orukọ ìkápá aṣa kan.

![](https://p.3ti.site/1721119459.avif)

Lẹhin sisọ orukọ ìkápá aṣa, jọwọ lọ si orukọ ìkápá lati tunto ọna atunkọ ohun elo oju-iwe ẹyọkan, bi a ṣe han ni isalẹ:

![](https://p.3ti.site/1721119320.avif)

Awọn ofin ti o wa ninu aworan ti o wa loke jẹ atẹle. Jọwọ rọpo `i18n.site` ni laini akọkọ ni isalẹ pẹlu orukọ ìkápá ti o dè.

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

Ni afikun, jọwọ tunto awọn ofin kaṣe, bi o ṣe han ni isalẹ, ki o ṣeto iye akoko kaṣe si oṣu kan.

![](https://p.3ti.site/1721125111.avif)

Jọwọ yi orukọ ìkápá ti o baamu ni igbesẹ keji ni aworan loke si orukọ ìkápá ti o dè.

### Ti O Dara Ju Imuṣiṣẹ Oju Opo Wẹẹbu Ni Oluile China

Ti o ba fẹ lati gba iṣẹ iraye si to dara julọ ni agbegbe nẹtiwọọki ti oluile China, jọwọ [forukọsilẹ orukọ ìkápá kan](//beian.aliyun.com) ni akọkọ.

Lẹhinna, lo ibi ipamọ ohun ti awọn olutaja awọsanma ni oluile + `CDN` Mu akoonu `out/main/htm` wọnyi ṣiṣẹ.

O le lo iširo eti lati tun ọna naa kọ lati ṣe deede si awọn ohun elo oju-iwe kan Fun apẹẹrẹ, [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) le tunto bii eyi:

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
  // Awọn akọle idahun le ṣee ṣeto si iṣẹjade yokokoro, bii out.XXX = 'MSG';
})
```

![](https://p.3ti.site/1721121273.avif)

Nitori igbasilẹ `MX` ati igbasilẹ `CNAME` ko le gbepọ, ti o ba fẹ lati gba awọn apamọ orukọ ašẹ ni akoko kanna, o nilo lati ṣe ifowosowopo pẹlu iwe [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) si ipele `CNAME` sinu igbasilẹ `A` .

Ni afikun, nitori awọn idiyele ijabọ okeokun ti awọn olutaja awọsanma ni oluile China jẹ gbowolori diẹ, ti o ba fẹ mu awọn idiyele pọ si, o le lo [DNS agbegbe ọfẹ ti Huawei Cloud](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) ati orukọ aṣa aṣa [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (gẹgẹbi a ṣe han ni isalẹ) lati ṣaṣeyọri ipa ọna opopona──Ipa ọna opopona ni oluile China Baidu Cloud `CDN` , ijabọ agbaye n lọ cloudflare .

![](https://p.3ti.site/1721119788.avif)

Awọn solusan iṣapeye imuṣiṣẹ wọnyi jẹ idiju diẹ sii ati pe yoo ṣafihan ni awọn ipin lọtọ ni ọjọ iwaju.

### Generic Ašẹ Orukọ Redirection

Ti o ba lo `i18n.site` lati ṣe ina oju opo wẹẹbu kan gẹgẹbi oju opo wẹẹbu akọkọ rẹ, o nilo nigbagbogbo lati tunto atunto-ašẹ pan-ašẹ, iyẹn ni, àtúnjúwe iwọle si `*.xxx.com` (pẹlu `www.xxx.com` ) si `xxx.com` .

Ibeere yii le ṣe aṣeyọri pẹlu iranlọwọ ti Alibaba Cloud `CDN` `EdgeScript` ( [iwe Gẹẹsi](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [iwe Kannada](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Ṣafikun orukọ `*.xxx.com` `CDN` Alibaba `CNAME` [CDN](https://cdn.console.aliyun.com/domain/list)

![](https://p.3ti.site/1721122000.avif)

Fun apẹẹrẹ, iṣeto atunto orukọ pan-ašẹ ti `*.i18n.site` ninu aworan loke jẹ atẹle yii:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

### Mu Ṣiṣẹ Pẹlu nginx

Jọwọ ṣafikun iṣeto ti o jọra si atẹle naa ni paragira `server` ti nginx Jọwọ yi `/root/i18n/md/out/main/htm` pada si ọna ti iṣẹ akanṣe tirẹ `out/main/htm`

```
location / {
  root  /root/i18n/md/out/main/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

## Da Lori `github action` Lemọlemọfún Integration

O le tọka si atẹle naa lati tunto `github action` rẹ:

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

Gẹgẹbi a ti le rii ninu iṣeto ni, ṣiṣiṣẹsẹhin iṣẹ yii nfa nigbati titari si ẹka `main` ati ẹka `dist` .

Sisan-iṣẹ yoo lo faili iṣeto ti o baamu si orukọ ẹka lati gbejade iwe-ipamọ Nibi, `.i18n/htm/main.yml` ati `.i18n/htm/dist.yml` yoo ṣee lo bi iṣeto ti atẹjade ni atele.

A ṣeduro awọn iṣe ti o dara julọ atẹle fun ilana itusilẹ iwe:

Nigbati awọn ayipada ba wa ni titari si ẹka `main` , iwe naa yoo fa lati kọ ati gbe lọ si ibudo awotẹlẹ (ibudo awotẹlẹ wa [github page](//pages.github.com) ).

Lẹhin ti ifẹsẹmulẹ pe iwe-ipamọ naa jẹ deede lori aaye awotẹlẹ, koodu naa yoo dapọ ati titari si ẹka `dist` , ati kọ ati imuṣiṣẹ osise yoo lọ lori ayelujara.

Nitoribẹẹ, imuse ilana ti o wa loke nilo kikọ awọn atunto diẹ sii.

O le tọka si iṣẹ akanṣe [github.com/fcdoc/doc](//github.com/fcdoc/doc/blob/main/.github/workflows/i18n.site.yml) fun iwe afọwọkọ iṣẹ.

`secrets.I18N_SITE_TOKEN` ati `secrets.NPM_TOKEN` ni iṣeto ni o nilo ki o tunto awọn oniyipada asiri ni ipilẹ koodu.

![](//p.3ti.site/1730970199.avif)

`I18N_SITE_TOKEN` [i18n.site/token](//i18n.site/token)

`NPM_TOKEN` jẹ ami atẹjade ti package `npm` ninu iṣeto ni ibẹwo [npmjs.com](//npmjs.com)

![](//p.3ti.site/1730969906.avif)


## Ilana Itọnisọna

### `public`

Awọn faili aimi ti oju opo wẹẹbu, bii `favicon.ico` , `robots.txt` , ati bẹbẹ lọ.

Awọn faili aami nibi le ṣe ipilẹṣẹ pẹlu [realfavicongenerator.net](https://realfavicongenerator.net)

### `.i18n`

Labẹ awọn `.i18n` liana ni o wa iṣeto ni awọn faili, translation kaṣe, ati be be lo ti `i18n.site` Wo nigbamii ti ipin ["Ito ni"](/i18n.site/conf) fun awọn alaye.

### `en`

Itọsọna ede orisun, bamu si `en` ti `fromTo` ni `.i18n/conf.yml` faili iṣeto ni

```yaml
i18n:
  fromTo:
    en: zh
```

Jọwọ tọkasi iṣeto ti itumọ [i18](/i18/use)