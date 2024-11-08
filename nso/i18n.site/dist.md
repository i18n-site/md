# Go Tsenywa Tirišong Le Inthaneteng

`i18n.site` e amogela sebopego sa [tirišo ya letlakala le tee](https://developer.mozilla.org/docs/Glossary/SPA) , gomme letlakala la go tsena la weposaete le diteng tša weposaete di tsenywa tirišong ka go ikemela.

Ka morago ga go sepetša phetolelo ye e lego ka mo godimo, dipuku tša ditšhupetšo `htm` le `v` di tla tšweletšwa ka fase ga tšhupetšo `md/out/dev` .

Mona, `dev` bolela gore e agilwe go ya ka faele ya peakanyo `.i18n/htm/dev.yml` .

`dev` tšhupetšo ya :

The `htm` directory ke leqephe la ho kena websaeteng.

Tlhahlo ya `v` e na le diteng tša weposaete tšeo di nago le dinomoro tša phetolelo.

Tebelelopele ya selegae ga e na taba le nomoro ya phetolelo gomme e tla kopiša difaele ka moka go tšhupetšo ya `out/dev/v/0.1.0` .

Bakeng sa tokollo ya semmušo, difaele tše di fetotšwego di tla kopišwa go tšhupetšo ya nomoro ya phetolelo ye mpsha.

## Laetša Faele Ya Peakanyo Ka `-c`

Difaele tša peakanyo tše di fapanego di tla hlola dipuku tša go tshwanela ka gare ga tšhupetšo `out` .

Mohlala, `.i18n/htm/main.yml` e tla bopa tšhupetšo ya `out/main` .

`dev.yml` le `main.yml` ke dipeakanyo tša go se fetoge.

`dev` ke khutsofatšo ya `development` , yeo e laetšago tikologo ya tlhabollo, yeo e šomišwago bakeng sa ponelopele ya selegae, gomme gape ke faele ya peakanyo ya go se fetoge.
`ol` ke khutsofatšo ya `online` , e laetšago tikologo ya inthanete, yeo e šomišwago bakeng sa go lokollwa semmušo gape ke faele ya peakanyo ya go se fetoge ge o šomiša ditekanyetšo tša mola wa taelo `-n` go ya go `npm` go lokolla.

Gape o ka hlama difaele te dingwe ta peakanyo Šomiša `--htm_conf` mothalong wa taelo go laetša leina la faele ya peakanyo yeo o tlago e šomiša:

Mohlala:
```
i18n.site --htm_conf dist --save
```

Mona `--save` emela nomoro ya phetolelo ya tokollo ya mpshafatšo.

## <a rel=id href="#npm" id="npm"></a> Phatlalatša diteng go npmjs.com

Go phatlalatša diteng go [npmjs.com](//npmjs.com) ke tharollo ya go se fetoge ye e kgothaletšwago (bona [Front-end High Availability](/i18n.site/feature#ha) ).

### npm Tsena & Poso

Tsenya `nodejs` , tsena ka `npm login` .

Edita `md/.i18n/htm/main.yml` gomme o fetoše boleng bja [`md:`](//github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/main.yml#L7) `YOUR_NPM_PACKAGE` bjalo [npmjs.com](//npmjs.com) leina la gago la sephuthelwana `npm` .

Ebe fetola `md/.i18n/htm/main.package.json`

Matha `i18n.site --npm` goba `i18n.site -n` ka go `md` tšhupetšo go fetolela le go phatlalatša.

Ge o šomiša tikologo ya kopanyo ye e tšwelago pele go phatlalatša, ga go nyakege gore o tsenye `nodejs` E no kopiša ditumelelo tša go tsena le tša go phatlalatša `~/.npmrc` tikologong.

Ge o fetoša leina la sephuthelwana la `v:` go `main.yml` , hle **kgonthiša gore o phumola `.i18n/v/main` pele** gomme ka morago o e phatlalatše.

#### Seva Ya Moemedi E Phatlaladitšwego Ke npm

Ge e ba badiriši ba nageng-kgolo ya China ba kopana le mathata a netweke gomme ba sa kgone go phatlalatša diphuthelwana tše `npm` , ba ka beakanya phetogo ya tikologo `https_proxy` go beakanya seva ya moemedi.

Ka go tšea gore boema-kepe bja gago bja seva ya moemedi ke `7890` , o ka ngwala:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

## Diteng Tšeo Di Itshwarelago

Ge o nyaka go itshwara diteng, thoma ka go rulaganya `md/.i18n/htm/main.yml` gomme o fetoše `v: //unpkg.com/i18n.site` go hlogo ya gago ya URL, go swana le `v: //i18n-v.xxx.com` .

Kenya tšhupetšo ya `md` gomme o kitime

```
i18n.site --htm_conf ol --save
```

goba khutsofatšo

```
i18n.site -c ol -s
```

Ka morago ga moo, beakanya diteng ka go tšhupetšo `md/out/main/v` go tsela ya hlogo ya URL yeo e beakantšwego go `v:` .

Sa mafelelo, **beakanya nako ya cache ya tsela yeo e felelago ka `/.v` go ya go `1s`** , go sego bjalo diteng tšeo di sa tšwago go lokollwa di ka se fihlelelwe ka pela.

Nako ya cache ya ditsela tše dingwe e ka bewa go ngwaga o tee goba go feta go fokotša dikgopelo tše di sa nyakegego.

## Host Diteng Go s3

Go itshwara diteng, go tlaleletša go šomiša seva ya gago, kgetho ye `CDN` ye e tlwaelegilego ke go šomiša `S3` +

O ka šomiša [rclone](https://rclone.org) go tsena go seva `S3` , ke moka wa lebelela le go fetoša sengwalwa se se latelago, gomme wa kopiša fela diphetogo tša go oketšega go `S3` bakeng sa tokollo ye nngwe le ye nngwe.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/main/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/main/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/main/v/.v "$s3:/$bucket/"
```

Gopola go beakanya `CDN` gore nako ya cache ya tsela yeo e felelago ka `/.v` e be `1s` , go sego bjalo diteng tše di sa tšwago go lokollwa di ka se fihlelelwe ka pela.

## Phatlalatša Weposaete

Webosaete e ka tsenywa tirišong kae goba kae [github page](https://pages.github.com) gomme [cloudflare page](https://pages.cloudflare.com) ke dikgetho tše dibotse.

Ka lebaka la gore weposaete e šomiša sebopego sa [tirišo ya letlakala le tee](https://developer.mozilla.org/docs/Glossary/SPA) , gopola go ngwala gape ditsela tša URL tšeo di se nago `. ` go ya go `index.html` .

Letlakala la go tsenya weposaete le swanetše go tsenywa tirišong gatee fela, gomme ga go nyakege gore o tsenye letlakala la go tsenya weposaete gape bakeng sa dimpshafatšo tša diteng tše di latelago.

### Deploy Ka github Leqepheng La

Pele [tobetsa github ho bopa mokhatlo o](https://github.com/account/organizations/new?plan=free) hlophisitsoeng o latelang ke `i18n-demo` e le mohlala.

Ebe bopa polokelo `i18n-demo.github.io` tlas'a mokgatlo ona (ka kōpo nka sebaka sa `i18n-demo` ka lebitso la mokhatlo o hlophileng):

![](https://p.3ti.site/1721098657.avif)

Ge o phatlalatša diteng tša sengwalwa sa go feta, `out/main/htm` e tšweleditšwe Hle tsenya tšhupetšo ye gomme o kitime :

```
ln -s index.html 404.html
```


Ka lebaka la gore `github page` ga e thekge go ngwala gape tsela ya URL, `404.html` e šomišwa go e na le moo.

Ebe matha taelo e latelang ka `htm` tšhupetšo (gopola go tšeela `i18n-demo/i18n-demo.github.io.git` legato ka aterese ya gago ya polokelo) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Ka morago ga go kgorometša khoutu, emela gore go tsenywa tirišong ga `github page` go šome ka katlego (bjalo ka ge go bontšhitšwe ka mo tlase) pele o ka e fihlelela.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Bakeng sa letlakala la demo hle bona:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

### Deploy Ka Leqepheng La cloudflare

[cloudflare page](//pages.cloudflare.com) e bapetšwa le `github page` , e fana ka go ngwala gape ga tsela gomme e na le bogwera kudu go naga-kgolo ya China gomme e kgothaletšwa go e diriša.

Go tsenywa tirišong ga `cloudflare page` gantši go theilwe godimo ga go tsenywa tirišong ga `github page` ka godimo.

Theha porojeke e ne tlama polokelo `i18n-demo.github.io` ka holimo.

Tshepedišo e bontšhitšwe seswantšhong se se lego ka mo tlase:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Hle klika `Add Account` go fa phihlelelo go mokgatlo `i18n-demo` .

Ge e le gore o tlemile polokelo ya mokgatlo wo mongwe, o ka swanelwa ke go klika `Add Account` gabedi go dumelela gabedi pele mokgatlo wo mofsa o ka bontšhwa.

![](https://p.3ti.site/1721118306.avif)

Se se latelago, kgetha polokelo `i18n-demo.github.io` , ke moka o klike `Begin setup` , gomme o šomiše dikelo tša go se fetoge bakeng sa megato ye e latelago.

![](https://p.3ti.site/1721118490.avif)

Ka morago ga go tlama ka lekga la mathomo, o swanetše go leta metsotso e sego kae pele o ka e fihlelela.

Ka morago ga go tsenywa tirišong, o ka tlama leina la domain ya tlwaelo.

![](https://p.3ti.site/1721119459.avif)

Ka morago ga go tlama leina la domain la tlwaelo, hle eya go leina la domain go beakanya go ngwala gape ga tsela ya tirišo ya letlakala le tee, bjalo ka ge go bontšhitšwe ka mo tlase:

![](https://p.3ti.site/1721119320.avif)

Melawana yeo e lego seswantšhong se se lego ka mo godimo ke ye e latelago Hle tšea legato `i18n.site` mothalong wa mathomo wo o lego ka mo tlase ka leina la domain leo o le tlemilwego.

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

Go tlaleletša, hle beakanya melawana ya cache, bjalo ka ge go bontšhitšwe ka mo tlase, gomme o beakantše nako ya cache go kgwedi e tee.

![](https://p.3ti.site/1721125111.avif)

Hle fetola go swana ga leina la domain mo mogatong wa bobedi seswantšhong sa ka godimo go leina la domain leo o le tlemilego.

### Optimizing Websaeteng Deployment Ka Naha-Kgolo Ya China

Ge e ba o nyaka go hwetša tshepedišo e kaone ya phihlelelo tikologong ya netweke ya naga-kgolo ya China, hle [ngwadiša leina la domain](//beian.aliyun.com) pele.

Ka morago ga moo, diriša polokelo ya dilo ya barekiši ba leru nageng-kgolo ya + `CDN` Deploy diteng tše di latelago `out/main/htm` .

O ka šomiša khomphutha ya bokagodimo go ngwala gape tsela ya go tlwaela dikgopelo tša letlakala le tee Go fa mohlala, [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) e ka beakanywa ka tsela ye:

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
  // O ka beakanya hlogo ya karabo go lokiša diphošo tša ditšweletšwa, go swana le out.XXX = 'MSG';
})
```

![](https://p.3ti.site/1721121273.avif)

Ka lebaka la gore rekoto `MX` le rekoto `CNAME` di ka se phele mmogo, ge o nyaka go amogela di `CNAME` imeile tša leina la domain ka nako e tee, o swanetše go dirišana le `A` sa [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten)

Go tlaleletša, ka lebaka la gore ditefišo tša sephethephethe tša ka mošola wa mawatle tša barekiši ba leru nageng-kgolo ya China di bitša kudu, ge e ba o nyaka go dira gore ditshenyagalelo di šome gabotse, o ka diriša [DNS ya mahala ya thutafase ya Huawei Cloud](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) le [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) 's custom domain name (bjalo ka ge go bontšhitšwe ka mo tlase) go fihlelela go fapošwa ga sephethephethe──Tsela ya sephethephethe nagengkgolo ya China Baidu Cloud `CDN` , sephethephethe sa boditšhabatšhaba se ya cloudflare .

![](https://p.3ti.site/1721119788.avif)

Ditharollo tše tša go dira gore go tsenywa tirišong gabotse di raragane kudu gomme di tla tsebagatšwa dikgaolong tše di aroganego nakong ye e tlago.

### Generic Domain Name Lebitso Redirection

Ge o šomiša `i18n.site` go tšweletša weposaete bjalo ka weposaete ya gago ye kgolo, gantši o swanetše go beakanya go lebiša lefsa ga pan-domain, ke gore, go lebiša phihlelelo go `*.xxx.com` (go akaretšwa `www.xxx.com` ) go `xxx.com` .

Tlhokego ye e ka fihlelelwa ka thušo ya Alibaba Cloud `CDN` `EdgeScript` ( [tokomane ya Seisemane](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [tokomane ya Setšhaena](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ) .

Oketša leina la domain ka go [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) gomme o šupe leina la domain `*.xxx.com` `CNAME` ka go Alibaba Cloud `CDN` .

![](https://p.3ti.site/1721122000.avif)

Ka mohlala, peakanyo ya go lebiša lefsa leina la pan-domain ya `*.i18n.site` seswantšhong se se lego ka mo godimo e ka tsela ye e latelago:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

### Deploy Ka nginx

Hle oketša peakanyo ye e swanago le ye `/root/i18n/md/out/main/htm` latelago mo temaneng ya `server` ya nginx `out/main/htm`

```
location / {
  root  /root/i18n/md/out/main/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

## E Theilwe Godimo Ga `github action` Kopanyo Ye E Tšwelago Pele

O ka lebelela tše di latelago go beakanya `github action` ya gago :

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

Bjalo ka ge go ka bonwa ka go peakanyo, tshepedišo ye ya mošomo e hlohleletšwa ge o kgoromeletšwa go lekala la `main` le lekaleng `dist` .

Tshepetšo ya mošomo e tla šomiša faele ya peakanyo ye e sepelelanago le leina la lekala go phatlalatša tokumente Mo, `.i18n/htm/main.yml` le `.i18n/htm/dist.yml` di tla šomišwa bjalo ka peakanyo ya go phatlalatša ka go latelelana.

Re kgothaletša mekgwa ye mekaone ye e latelago ya tshepedišo ya go lokolla ditokomane:

Ge diphetogo di kgorometšwa go lekala la `main` , tokumente e hlohleletšwa go agwa le go tsenywa tirišong go seteišene sa ponelopele (seteišene sa ponelopele se a hwetšagala [github page](//pages.github.com) ).

Ka morago ga go tiišetša gore tokomane e nepagetše lefelong la ponelopele, khoutu e tla kopanywa gomme ya kgorometšwa go lekala la `dist` , gomme go aga semmušo le go tsenywa tirišong go tla tsena inthaneteng.

Ke nnete, go phethagatša tshepedišo ye e lego ka mo godimo go nyaka go ngwala dipeakanyo tše ntši.

O ka lebelela porojeke ya [github.com/fcdoc/doc](//github.com/fcdoc/doc/blob/main/.github/workflows/i18n.site.yml) bakeng sa go ngwala ga tshepedišo ya mošomo.

`secrets.I18N_SITE_TOKEN` le `secrets.NPM_TOKEN` ka peakanyo di nyaka gore o beakanye diphetogo tša sephiri motheong wa khoutu.

![](//p.3ti.site/1730970199.avif)

[i18n.site/token](//i18n.site/token) `I18N_SITE_TOKEN` Get.

`NPM_TOKEN` ke letshwao la go phatlalatša la sephuthelwana `npm` ka go peakanyo gomme o [npmjs.com](//npmjs.com) leswao leo le nago le ditumelelo tša go phatlalatša (bjalo ka ge go bontšhitšwe ka mo tlase).

![](//p.3ti.site/1730969906.avif)


## Sebopego Sa Tšhupamabaka

### `public`

Difaele tša go se fetoge tša weposaete, tše bjalo ka `favicon.ico` , `robots.txt` , bjalobjalo.

Difaele tša leswao mo di ka tšweletšwa ka [realfavicongenerator.net](https://realfavicongenerator.net)

### `.i18n`

Ka tlase ga `.i18n` directory ke difaele tša peakanyo, cache ya phetolelo, bjalobjalo ya `i18n.site` Bona kgaolo ye e latelago [ya "Peakanyo"](/i18n.site/conf) bakeng sa dintlha.

### `en`

Mohlodi polelo directory, e lumellanang le `en` ya `fromTo` ka `.i18n/conf.yml` peakanyo faele

```yaml
i18n:
  fromTo:
    en: zh
```

Hle lebelela peakanyo ya phetolelo [i18](/i18/use)