# Kutumiza Ndi Pa Intaneti

`i18n.site` imatengera kamangidwe [ka tsamba limodzi](https://developer.mozilla.org/docs/Glossary/SPA) , ndipo tsamba lolowera patsamba ndi zomwe zili patsamba zimayikidwa paokha.

Mukatha kumasulira pamwambapa, maupangiri `htm` ndi `v` adzapangidwa pansi pa chikwatu cha `md/out/dev` .

Apa, `dev` amatanthauza kuti idamangidwa kutengera fayilo ya `.i18n/htm/dev.yml` .

`dev` directory :

Chikwatu `htm` ndiye tsamba lolowera patsamba.

Chikwatu cha `v` chili ndi masamba awebusayiti okhala ndi manambala amtundu.

Kuwoneratu kwanuko sikusamala za nambala yamtunduwu ndipo kumatengera mafayilo onse ku `out/dev/v/0.1.0` .

Kuti atulutsidwe mwalamulo, mafayilo osinthidwa adzakopera ku chikwatu cha nambala yatsopano.

## Tchulani Fayilo Yosinthika Ndi `-c`

Mafayilo osinthika osiyanasiyana apanga maulalo ofananira mu chikwatu cha `out` .

Mwachitsanzo, `.i18n/htm/main.yml` ipanga chikwatu `out/main` .

`dev.yml` ndi `main.yml` ndi masinthidwe osasinthika.

`dev` ndi chidule cha `development` , kusonyeza malo otukuka, omwe amagwiritsidwa ntchito poyang'ana m'deralo, komanso ndi fayilo yosasinthika.
`ol` ndi chidule cha `online` , `-n` malo a pa intaneti, omwe amagwiritsidwa ntchito kuti atulutsidwe mwalamulo `npm`

Mutha kupanganso mafayilo ena osinthira Gwiritsani ntchito `--htm_conf` pamzere wolamula kuti mutchule dzina lafayilo yoti mugwiritse ntchito:

Mwachitsanzo:
```
i18n.site --htm_conf dist --save
```

Apa `--save` ikuyimira nambala yosinthidwa yotulutsidwa.

## <a rel=id href="#npm" id="npm"></a> Sindikizani zomwe zili ku npmjs.com

Kusindikiza zomwe zili [ku](/i18n.site/feature#ha) [npmjs.com](//npmjs.com)

### npm Lowani & Post

Ikani `nodejs` , lowani ndi `npm login` .

Sinthani `md/.i18n/htm/main.yml` ndikusintha mtengo wa [`md:`](//github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/main.yml#L7) `YOUR_NPM_PACKAGE` ngati dzina lanu la phukusi `npm` lomwe mulibe [npmjs.com](//npmjs.com)

Kenako sinthani `md/.i18n/htm/main.package.json`

Thamangani `i18n.site --npm` kapena `i18n.site -n` mu chikwatu `md` kuti mumasulire ndi kufalitsa.

Ngati mumagwiritsa ntchito malo ophatikizika mosalekeza kuti musindikize, palibe chifukwa choyikira `nodejs` Ingotengerani zilolezo zolowa ndikusindikiza `~/.npmrc` ku chilengedwe.

Ngati musintha dzina la phukusi la `v:` mu `main.yml` , chonde **onetsetsani kuti mwachotsa `.i18n/v/main` kaye** kenako ndikusindikiza.

#### Seva Ya Proxy Yosindikizidwa Ndi npm

Ngati ogwiritsa ntchito ku China akumakumana ndi zovuta pamanetiweki ndipo akulephera kusindikiza ma phukusi `npm` , atha kuyika kusintha kwa chilengedwe `https_proxy` kuti akonze seva ya proxy.

Pongoganiza kuti doko la seva yanu ya proxy ndi `7890` , mutha kulemba:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

## Zodzipangira Nokha

Ngati mukufuna kudzipangira nokha zomwe zili, choyamba sinthani `md/.i18n/htm/main.yml` ndikusintha `v: //unpkg.com/i18n.site` kukhala prefix yanu ya URL, monga `v: //i18n-v.xxx.com` .

Lowetsani chikwatu `md` ndikuyendetsa

```
i18n.site --htm_conf ol --save
```

kapena chidule

```
i18n.site -c ol -s
```

Kenako, sinthani zomwe zili mu bukhu la `md/out/main/v` kupita ku njira yachiyambi ya URL yokhazikitsidwa mu `v:` .

Pomaliza, **konzekerani nthawi ya cache ya njira yomwe imathera `/.v` mpaka `1s`** , apo ayi zomwe zangotulutsidwa kumene sizingapezeke nthawi yomweyo.

Nthawi ya cache ya njira zina ikhoza kukhazikitsidwa chaka chimodzi kapena kuposerapo kuti muchepetse zopempha zosafunikira.

## Host Zomwe Zili Ku s3

Kudzipangira nokha, kuwonjezera pa kugwiritsa ntchito seva yanu, njira ina `CDN` ndikugwiritsa ntchito `S3` + .

Mutha kugwiritsa ntchito [rclone](https://rclone.org) kuti mulowe ku seva `S3` , kenako tchulani ndikusintha script yotsatirayi, ndikungotengera zosinthazo ku `S3` pakumasulidwa kulikonse.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/main/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/main/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/main/v/.v "$s3:/$bucket/"
```

Kumbukirani kukonza `CDN` kuti nthawi ya cache ya njira yomwe imathera mu `/.v` ndi `1s` , mwinamwake zomwe zangotulutsidwa kumene sizingapezeke mwamsanga.

## Sindikiza Tsamba

Tsambali litha kutumizidwa kulikonse [github page](https://pages.github.com) ndipo [cloudflare page](https://pages.cloudflare.com) ndi zosankha zabwino.

Chifukwa tsambalo limagwiritsa ntchito kapangidwe [ka tsamba limodzi](https://developer.mozilla.org/docs/Glossary/SPA) , kumbukirani kulembanso njira za URL zomwe zilibe `. ` mpaka `index.html` .

Tsamba lolowera patsamba limangofunika kutumizidwa kamodzi, ndipo palibe chifukwa chotumiziranso tsamba lolowera webusayiti kuti lizisinthidwanso.

### Ikani Patsamba La github

Choyamba [dinani github kuti mupange bungwe](https://github.com/account/organizations/new?plan=free) Dzina lotsatirali ndi `i18n-demo` monga chitsanzo.

Kenako pangani nyumba yosungiramo `i18n-demo.github.io` pansi pa bungwe ili (chonde sinthani `i18n-demo` ndi dzina la bungwe lomwe mudapanga):

![](https://p.3ti.site/1721098657.avif)

Mukasindikiza zomwe zili m'nkhani yapitayi, `out/main/htm` yapangidwa :

```
ln -s index.html 404.html
```


Chifukwa `github page` sichigwirizana ndi njira yolemberanso URL, `404.html` imagwiritsidwa ntchito m'malo mwake.

Kenako yendetsani lamulo ili m'ndandanda wa `htm` (kumbukirani kusintha `i18n-demo/i18n-demo.github.io.git` ndi adilesi yanu yosungiramo zinthu) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Mukakankhira kachidindo, dikirani kuti kutumizidwa kwa `github page` kuyende bwino (monga momwe tawonetsera pansipa) musanayipeze.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Patsamba lachiwonetsero chonde onani:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

### Ikani Pa Tsamba La cloudflare

[cloudflare page](//pages.cloudflare.com) ndi `github page` , imapereka njira yolemberanso ndipo ndi yabwino kwambiri ku China ndipo imapezeka mosavuta.

Kutumiza kwa `cloudflare page` nthawi zambiri kumatengera kutumizidwa kwa `github page` pamwambapa.

Pangani projekiti ndikumanga nyumba yosungiramo `i18n-demo.github.io` pamwambapa.

Njirayi ikuwonetsedwa pachithunzi pansipa:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Chonde dinani `Add Account` kuti mupereke mwayi ku bungwe `i18n-demo` .

Ngati mwamanga nyumba yosungiramo katundu ya bungwe lina, mungafunike kudina `Add Account` kawiri kuti muvomereze kawiri bungwe latsopanoli lisanawonetsedwe.

![](https://p.3ti.site/1721118306.avif)

Kenako, sankhani nyumba yosungiramo `i18n-demo.github.io` , kenako dinani `Begin setup` , ndikugwiritsa ntchito zikhalidwe zosasinthika pazotsatira.

![](https://p.3ti.site/1721118490.avif)

Mukamanga kwa nthawi yoyamba, muyenera kudikirira mphindi zingapo musanayipeze.

Pambuyo potumiza, mutha kumangirira dzina lachidziwitso.

![](https://p.3ti.site/1721119459.avif)

Mukamanga dzina lachidziwitso, chonde pitani ku domain name kuti mukonzenso njira yolemberanso tsamba limodzi, monga momwe zilili pansipa:

![](https://p.3ti.site/1721119320.avif)

`i18n.site` omwe ali pachithunzi pamwambapa ali motere.

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

Kuonjezera apo, chonde sungani malamulo a cache, monga momwe tawonetsera pansipa, ndipo ikani nthawi ya cache kwa mwezi umodzi.

![](https://p.3ti.site/1721125111.avif)

Chonde sinthani dzina laling'ono lofananira mu gawo lachiwiri pachithunzi pamwambapa kukhala dzina lamalo omwe mwamanga.

### Kupititsa Patsogolo Kutumizidwa Kwamasamba Ku Mainland China

Ngati mukufuna kukhala ndi mwayi wopezeka bwino pamanetiweki aku China, chonde [lembani dzina la domain](//beian.aliyun.com) kaye.

Kenako, gwiritsani ntchito kusungirako zinthu kwa ogulitsa mitambo ku China + Gwiritsani ntchito zotsatirazi `CDN` `out/main/htm`

Mutha kugwiritsa ntchito komputa yam'mphepete kuti mulembenso njira kuti mugwirizane ndi mapulogalamu atsamba limodzi Mwachitsanzo, [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) ikhoza kukhazikitsidwa motere:

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
  // Mitu yamayankho ikhoza kukhazikitsidwa kuti iwononge zotsatira, monga out.XXX = 'MSG';
})
```

![](https://p.3ti.site/1721121273.avif)

Chifukwa mbiri `MX` ndi mbiri `CNAME` sizingakhalepo, ngati mukufuna kulandira maimelo a mayina amtundu nthawi imodzi, muyenera kugwirizana ndi [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) mpaka `CNAME` kukhala mbiri `A` .

Kuphatikiza apo, chifukwa mtengo wamagalimoto akunja kwa ogulitsa mitambo ku China ndi okwera mtengo, ngati mukufuna kukweza mtengo, mutha kugwiritsa ntchito [DNS Cloud's resolution yaulere](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) ndi dzina lachidziwitso la [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (monga momwe tawonetsera pansipa) kuti mukwaniritse kusokoneza magalimoto──Mayendedwe a magalimoto ku China Baidu Cloud `CDN` , magalimoto apadziko lonse amapita cloudflare .

![](https://p.3ti.site/1721119788.avif)

Mayankho okhathamiritsa awa ndi ovuta kwambiri ndipo adzafotokozedwa m'mitu yosiyana mtsogolo.

### Generic Domain Name Redirection

Ngati mumagwiritsa ntchito `i18n.site` kuti mupange tsamba lanu ngati tsamba lanu lalikulu, nthawi zambiri mumayenera kukonza kuwongolera kwa pan-domain, ndiko kuti, kulozeranso mwayi wopita ku `*.xxx.com` (kuphatikiza `www.xxx.com` ) mpaka `xxx.com` .

Izi zitha kukwaniritsidwa mothandizidwa ndi Alibaba Cloud `CDN` `EdgeScript` ( [Chikalata cha Chingerezi](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Chikalata cha Chitchaina](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Onjezani dzina la domain mu [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) ndikulozera dzina la domain `*.xxx.com` `CNAME` mu Alibaba Cloud `CDN` .

![](https://p.3ti.site/1721122000.avif)

Mwachitsanzo, kasinthidwe ka dzina la pan-domain redirection la `*.i18n.site` pachithunzi pamwambapa ndi motere:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

### Tumizani Ndi nginx

Chonde onjezani masinthidwe ofanana ndi `/root/i18n/md/out/main/htm` mu `out/main/htm` `server` ya nginx

```
location / {
  root  /root/i18n/md/out/main/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

## Kutengera `github action` Kuphatikiza Mosalekeza

Mutha kuloza zotsatirazi kuti mukonze `github action` yanu:

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

Monga momwe zikuwonekera mu kasinthidwe, kayendetsedwe ka ntchito kameneka kamayambitsa kukankhira ku nthambi `main` ndi nthambi `dist` .

Kuyenda kwa ntchito kudzagwiritsa ntchito fayilo yokonzekera yomwe ikugwirizana ndi dzina la nthambi kuti isindikize chikalata Pano, `.i18n/htm/main.yml` ndi `.i18n/htm/dist.yml` idzagwiritsidwa ntchito monga kusindikiza kosindikiza.

Tikupangira njira zabwino zotsatirazi zotulutsira zikalata:

Zosintha zikakankhidwira kunthambi `main` , chikalatacho chimayambika kuti chimangidwe ndikutumizidwa kumalo owoneratu (malo owoneratu alipo [github page](//pages.github.com) ).

Pambuyo potsimikizira kuti chikalatacho ndi cholondola pamalo owoneratu, khodiyo idzaphatikizidwa ndikukankhira kunthambi `dist` , ndipo zomangamanga ndi kutumiza zidzalowa pa intaneti.

Zoonadi, kukhazikitsa ndondomeko yomwe ili pamwambayi kumafuna kulemba masanjidwe ambiri.

Mutha kulozera ku ntchito yeniyeni [github.com/fcdoc/doc](//github.com/fcdoc/doc/blob/main/.github/workflows/i18n.site.yml)

`secrets.I18N_SITE_TOKEN` ndi `secrets.NPM_TOKEN` mu kasinthidwe amafuna kuti musinthe zosintha zachinsinsi pamasinthidwe a code.

![](//p.3ti.site/1730970199.avif)

`I18N_SITE_TOKEN` [i18n.site/token](//i18n.site/token)

`NPM_TOKEN` ndiye chizindikiro chosindikizira cha phukusi `npm` [npmjs.com](//npmjs.com) ndi kupanga chizindikiro chokhala ndi zilolezo zofalitsa (monga momwe zilili pansipa).

![](//p.3ti.site/1730969906.avif)


## Kapangidwe Ka Ndandanda

### `public`

Mafayilo osasunthika awebusayiti, monga `favicon.ico` , `robots.txt` , ndi zina.

Mafayilo azithunzi apa amatha kupangidwa ndi [realfavicongenerator.net](https://realfavicongenerator.net)

### `.i18n`

Pansi pa chikwatu cha `.i18n` pali mafayilo osinthira, kache yomasulira, ndi zina zambiri za `i18n.site` Onani mutu wotsatira ["Kukonzekera"](/i18n.site/conf) kuti mudziwe zambiri.

### `en`

Chikwatu cha chilankhulo chochokera, chofanana ndi `en` mwa `fromTo` mu fayilo yosinthira `.i18n/conf.yml`

```yaml
i18n:
  fromTo:
    en: zh
```

Chonde onani kasinthidwe ka kumasulira [i18](/i18/use)