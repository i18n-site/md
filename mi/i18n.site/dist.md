# Te Tuku Me Te Ipurangi

`i18n.site` he hangahanga [tono wharangi kotahi](https://developer.mozilla.org/docs/Glossary/SPA) , a ko te wharangi tomokanga paetukutuku me nga ihirangi paetukutuku ka tohatoha takitahi.

Whai muri i te whakahaere i te whakamaoritanga i runga ake nei, ka hangaia nga raarangi `htm` me `v` i raro i te raarangi `md/out/dev` .

I konei, ko `dev` te tikanga ka hangaia i runga i te konae whirihoranga `.i18n/htm/dev.yml` .

`dev` whaiaronga :

Ko te whaiaronga `htm` te wharangi tomokanga paetukutuku.

Kei roto i te whaiaronga `v` nga ihirangi paetukutuku me nga tau putanga.

Karekau te arokitenga a-rohe e aro ki te nama putanga ka kape i nga konae katoa ki te raarangi `out/dev/v/0.1.0` .

Mo te tukunga mana, ka kapehia nga konae kua whakarereke ki te raarangi nama putanga hou.

## Tauwhāitihia Te Konae Whirihoranga Me Te `-c`

Ko nga konae whirihoranga rereke ka waihanga i nga raarangi rite ki te raarangi `out` .

Hei tauira, ka hangaia `.i18n/htm/main.yml` te whaiaronga `out/main` .

Ko `dev.yml` me `main.yml` nga whirihoranga taunoa.

Ko `dev` te whakapoto o te `development` , e tohu ana i te taiao whanaketanga, e whakamahia ana mo te arokite o te rohe, a ko te konae whirihoranga taunoa hoki.
Ko `ol` te whakapoto o `online` , e tohu ana i te taiao ipurangi, e whakamahia ana mo te tuku mana ko te konae whirihoranga taunoa ka whakamahi i nga tawhā raina whakahau `-n` ki te `npm` ki te tuku.

Ka taea hoki e koe te hanga i etahi atu konae whirihoranga Whakamahia `--htm_conf` i runga i te raina whakahau hei whakau i te ingoa konae whirihoranga hei whakamahi:

hei tauira:
```
i18n.site --htm_conf dist --save
```

I konei ko `--save` e tohu ana i te nama putanga whakahou.

## <a rel=id href="#npm" id="npm"></a> Whakaputa ihirangi ki npmjs.com

Ko te [whakaputa](/i18n.site/feature#ha) ihirangi ki [npmjs.com](//npmjs.com)

### npm Takiuru & Panui

Tāutahia `nodejs` , takiuru me `npm login` .

Whakatikahia `md/.i18n/htm/main.yml` ka huri i te uara o [`md:`](//github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/main.yml#L7) `YOUR_NPM_PACKAGE` hei ingoa moopaki `npm` ka [npmjs.com](//npmjs.com) .

Na ka whakarereke i `md/.i18n/htm/main.package.json`

Whakahaerehia `i18n.site --npm` , `i18n.site -n` ranei ki te raarangi `md` hei whakamaori me te whakaputa.

Mena ka whakamahi koe i te taiao whakauru tonu ki te whakaputa, kaore he take ki te whakauru i `nodejs` Me kape noa nga whakaaetanga whakauru me te whakaputa `~/.npmrc` ki te taiao.

Mena ka whakarereketia e koe te ingoa o te kete `v:` i roto i `main.yml` , **me ata mukua `.i18n/v/main` i te tuatahi** ka whakaputa.

#### Te Tūmau Takawaenga I Whakaputaina E npm

Mena ka raru nga kaiwhakamahi o te tuawhenua o Haina ki nga raru whatunga me te kore e taea te whakaputa i nga kohinga `npm` , ka taea e ratou te tautuhi i te taurangi taiao `https_proxy` hei whirihora i te tūmau takawaenga.

Ki te whakaaro ko to tauranga tūmau takawaenga he `7890` , ka taea e koe te tuhi:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

## Ihirangi Manaaki-Whaiaro

Mena kei te pirangi koe ki te manaaki whaiaro i nga ihirangi, tuatahi whakatika `md/.i18n/htm/main.yml` ka huri i `v: //unpkg.com/i18n.site` ki to mua URL, penei i te `v: //i18n-v.xxx.com` .

Whakauruhia te whaiaronga `md` ka rere

```
i18n.site --htm_conf ol --save
```

whakapoto ranei

```
i18n.site -c ol -s
```

Na, whirihora i te ihirangi i roto i te whaiaronga `md/out/main/v` ki te ara prefix URL kua whakaritea ki `v:` .

Hei whakamutunga, **whirihorahia te wa keteroki o te ara ka mutu i `/.v` ki `1s`** , ki te kore e taea te uru atu ki nga ihirangi hou.

Ko te wa keteroki mo etahi atu ara ka taea te whakarite ki te kotahi tau neke atu ranei hei whakaiti i nga tono kore.

## Kaihautu Ihirangi Ki s3

Ki te ihirangi manaaki-whaiaro, i tua atu i `CDN` whakamahi i to ake kaimau, ko tetahi atu whiringa ko te whakamahi `S3` +

Ka taea e koe te whakamahi i [rclone](https://rclone.org) ki te takiuru ki te tūmau `S3` , ka tirohia me te whakarereke i te tuhinga e whai ake nei, ka kape noa i nga huringa taapiri ki te `S3` mo ia tukunga.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/main/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/main/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/main/v/.v "$s3:/$bucket/"
```

Kia mahara ki te whirihora i `CDN` kia ko te wa keteroki o te ara ka mutu ki `/.v` ko te `1s` , mena kaore e taea te uru atu ki nga ihirangi hou.

## Whakaputa Paetukutuku

Ka taea te tuku i te paetukutuku ki hea, he pai nga [cloudflare page](https://pages.cloudflare.com) [github page](https://pages.github.com)

Na te mea ka whakamahia e te paetukutuku he hoahoanga [tono wharangi kotahi](https://developer.mozilla.org/docs/Glossary/SPA) , mahara ki te tuhi ano i nga ara URL kaore he `. ` ki te `index.html` .

Ko te wharangi urunga paetukutuku me tuku kotahi anake, kaore he take ki te whakahou ano i te wharangi urunga paetukutuku mo nga whakahoutanga ihirangi ka whai ake.

### Tukuna Ki Te Wharangi github

Tuatahi [pawhiria ki github hei hanga whakahaere](https://github.com/account/organizations/new?plan=free) Ko te ingoa whakahaere e whai ake nei ko `i18n-demo` hei tauira.

Na ka hanga whare putunga `i18n-demo.github.io` i raro i tenei whakahaere (whakakapihia `i18n-demo` ki te ingoa whakahaere i hanga e koe):

![](https://p.3ti.site/1721098657.avif)

I te wa e whakaputa ana i nga korero i roto i te tuhinga o mua, kua hangaia `out/main/htm` Tena koa whakaurua tenei raarangi ka whakahaere :

```
ln -s index.html 404.html
```


Na te mea kaore `github page` i te tautoko i te tuhi ara URL, ka whakamahia `404.html` .

Na ka whakahaere i te whakahau e whai ake nei i roto i te whaiaronga `htm` (mahara ki te whakakapi i `i18n-demo/i18n-demo.github.io.git` me to wahitau whare putunga) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

I muri i te pana i te waehere, tatari mo te tukunga o te `github page` kia pai te whakahaere (penei i raro nei) i mua i to uru atu.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Mo te whaarangi whakaatu tirohia koa:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

### Tukuna Ki Te Wharangi cloudflare

[cloudflare page](//pages.cloudflare.com) whakatauritea ki `github page` , he tuhi ano i te ara, he pai ake ki te tuawhenua o Haina me te waatea ake.

Ko te tukunga o te `cloudflare page` i te nuinga o te waa i runga i te whakatakotoranga o te `github page` i runga ake nei.

Waihangahia he kaupapa ka herea te whare putunga `i18n-demo.github.io` i runga ake nei.

Ko te tukanga e whakaatuhia ana i te ahua i raro nei:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Paatohia `Add Account` kia uru atu ki te whakahaere `i18n-demo` .

Mena kua herea e koe te whare putunga o tetahi atu whakahaere, ka hiahia koe ki te paato i `Add Account` kia rua hei whakamana i mua i te whakaaturanga o te whakahaere hou.

![](https://p.3ti.site/1721118306.avif)

Whai muri, tohua te whare putunga `i18n-demo.github.io` , ka paato i `Begin setup` , ka whakamahi i nga uara taunoa mo nga mahi ka whai ake.

![](https://p.3ti.site/1721118490.avif)

I muri i te herenga mo te wa tuatahi, me tatari koe mo etahi meneti ka taea e koe te uru atu.

I muri i te tukunga, ka taea e koe te here i tetahi ingoa rohe ritenga.

![](https://p.3ti.site/1721119459.avif)

Whai muri i te herenga o te ingoa rohe ritenga, haere koa ki te ingoa rohe ki te whirihora i te ara tuhi ano i te tono wharangi kotahi, penei i te whakaaturanga i raro nei:

![](https://p.3ti.site/1721119320.avif)

Ko nga ture kei te pikitia i runga ake nei e whai ake nei Tena koa whakakapia `i18n.site` i te rarangi tuatahi i raro nei me te ingoa rohe kua herea e koe.

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

I tua atu, whirihora koa i nga ture keteroki, penei me te whakaatu i raro nei, ka tautuhi i te roanga keteroki ki te marama kotahi.

![](https://p.3ti.site/1721125111.avif)

Tena koa hurihia te ingoa rohe e rite ana ki te taahiraa tuarua o te pikitia i runga ake nei ki te ingoa rohe kua herea e koe.

### Te Whakapai Ake I Te Tuku Paetukutuku Ki Te Tuawhenua O Haina

Mena kei te pirangi koe kia pai ake te mahi urunga ki te taiao whatunga o te tuawhenua o Haina, tena koa [rehitatia he ingoa rohe](//beian.aliyun.com) i te tuatahi.

Na, whakamahia te rokiroki ahanoa o nga kaihoko kapua i te tuawhenua `CDN` + nga korero e whai ake nei `out/main/htm` .

Ka taea e koe te whakamahi rorohiko mata ki te tuhi ano i te ara ki te urutau ki nga tono wharangi kotahi Hei tauira, ka taea te whirihora [a Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) penei:

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
  // Ka taea e koe te tautuhi i te pane whakautu hei patuiro i te putanga, penei i out.XXX = 'MSG';
})
```

![](https://p.3ti.site/1721121273.avif)

No te mea kaore e taea e te rekoata `MX` me te rekoata `CNAME` te noho tahi, ki te hiahia koe ki te whiwhi imeera ingoa rohe i te wa ano, me mahi [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) koe me te tuhi ki te taumata `CNAME` ki te rekoata `A` .

I tua atu, na te mea he tino utu nga utu hokohoko ki tawahi o nga kaihoko kapua i te tuawhenua o Haina, ki te hiahia koe ki te arotau i nga utu, ka taea e koe te whakamahi i [te whakataunga matawhenua kore DNS a](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) # me te ingoa rohe ritenga a [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (e whakaatuhia ana i raro nei) ki te whakatutuki waka rererangi──Te ararere waka ki te tuawhenua o Haina Baidu Cloud `CDN` , ka haere nga waka o te ao ki cloudflare .

![](https://p.3ti.site/1721119788.avif)

He uaua ake enei otinga arotautanga tukunga, ka whakaurua ki roto i nga upoko motuhake a muri ake nei.

### Ahuringa Ingoa Rohe Whānui

Mena ka whakamahi koe i `i18n.site` ki te whakaputa i tetahi paetukutuku hei paetukutuku matua, me whirihora e koe te hurihanga pan-domain, ara, te whakawhiti i te uru ki te `*.xxx.com` (tae atu ki `www.xxx.com` ) ki te `xxx.com` .

Ka taea te whakatutuki i tenei whakaritenga ma te awhina a Alibaba Cloud `CDN` `EdgeScript` ( [Tuhinga Ingarihi](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Tuhinga Haina](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Tāpirihia te ingoa rohe ki [Alibaba Cloud CDN](https://cdn.console.aliyun.com/domain/list) ka tohuhia te ingoa rohe `*.xxx.com` `CNAME` ki Alibaba Cloud `CDN` .

![](https://p.3ti.site/1721122000.avif)

Hei tauira, ko te whirihoranga hurihanga ingoa rohe-pan o `*.i18n.site` i te pikitia i runga ake nei e whai ake nei:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

### Tukuna Me Te nginx

Tāpirihia he whirihoranga rite ki enei e whai `/root/i18n/md/out/main/htm` nei i te `server` whiti o nginx `out/main/htm`

```
location / {
  root  /root/i18n/md/out/main/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

## I Runga I `github action` Te Whakauru Tonu

Ka taea e koe te korero ki nga mea e whai ake nei hei whirihora i to `github action` :

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

Ka kitea i roto i te whirihoranga, ka puta tenei rerengamahi ina pana ana ki te peka `main` me te peka `dist` .

Ka whakamahia e te rerengamahi te konae whirihora e rite ana ki te ingoa peka hei whakaputa i te tuhinga I konei, ka whakamahia `.i18n/htm/main.yml` me te `.i18n/htm/dist.yml` hei whirihoranga whakaputa.

Ka tūtohu matou ki nga mahi pai e whai ake nei mo te tukanga tuku tuhinga:

Ka panaia nga huringa ki te peka `main` , ka whakakorikoria te tuhinga ki te hanga me te hora ki te teihana arokite (kei te waatea te teihana arokite [github page](//pages.github.com) ).

I muri i te whakapumautanga he tika te tuhinga i runga i te pae arokite, ka hanumi te waehere ka panaia ki te peka `dist` , ka haere te hanga mana me te tukunga ki runga ipurangi.

Ko te tikanga, ko te whakatinana i te mahi i runga ake nei me tuhi etahi atu whirihoranga.

Ka taea e koe te korero ki te kaupapa [github.com/fcdoc/doc](//github.com/fcdoc/doc/blob/main/.github/workflows/i18n.site.yml) mo te tuhi rerengamahi.

`secrets.I18N_SITE_TOKEN` me `secrets.NPM_TOKEN` i roto i te whirihoranga ka hiahia koe ki te whirihora i nga taurangi ngaro i te turanga waehere.

![](//p.3ti.site/1730970199.avif)

`I18N_SITE_TOKEN` [i18n.site/token](//i18n.site/token)

Ko `NPM_TOKEN` te tohu whakaputa o te kete `npm` i te whirihoranga Tirohia [npmjs.com](//npmjs.com)

![](//p.3ti.site/1730969906.avif)


## Te Hanganga Whaiaronga

### `public`

Ko nga konae pateko o te paetukutuku, penei i te `favicon.ico` , `robots.txt` , etc.

Ka taea te hanga i nga konae icon me [realfavicongenerator.net](https://realfavicongenerator.net)

### `.i18n`

Kei raro i te whaiaronga `.i18n` nga konae whirihoranga, keteroki whakamaori, me etahi atu o `i18n.site` Tirohia te upoko ["Whirihoranga"](/i18n.site/conf) mo nga taipitopito.

### `en`

Whaiaronga reo puna, e rite ana ki `en` o `fromTo` i roto i te `.i18n/conf.yml` konae whirihoranga

```yaml
i18n:
  fromTo:
    en: zh
```

Tena tirohia te whirihoranga o te whakamaoritanga [i18](/i18/use)