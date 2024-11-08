# Usambazaji Na Mtandaoni

`i18n.site` inachukua usanifu wa [programu ya ukurasa mmoja](https://developer.mozilla.org/docs/Glossary/SPA) , na ukurasa wa kuingilia wa tovuti na maudhui ya tovuti hutumwa kwa kujitegemea.

Baada ya kutekeleza tafsiri iliyo hapo juu, saraka `htm` na `v` zitatolewa chini ya saraka `md/out/dev` .

Hapa, `dev` inamaanisha kuwa imejengwa kulingana na faili `.i18n/htm/dev.yml` ya usanidi.

saraka `dev` :

Saraka `htm` ni ukurasa wa kuingilia wa tovuti.

Saraka `v` ina maudhui ya tovuti yenye nambari za toleo.

Onyesho la kukagua la ndani halijali nambari ya toleo na litanakili faili zote kwenye saraka `out/dev/v/0.1.0` .

Kwa toleo rasmi, faili zilizobadilishwa zitanakiliwa kwenye saraka ya nambari ya toleo jipya.

## Bainisha Faili Ya Usanidi Na `-c`

Faili tofauti za usanidi zitaunda saraka zinazolingana katika saraka `out` .

Kwa mfano, `.i18n/htm/main.yml` itaunda saraka `out/main` .

`dev.yml` na `main.yml` ni usanidi chaguo-msingi.

`dev` ni ufupisho wa `development` , inayoonyesha mazingira ya uendelezaji, inayotumiwa kwa uhakiki wa ndani, na pia ni faili ya usanidi chaguo-msingi.
`ol` ni kifupi cha `online` , kinachoonyesha mazingira ya mtandaoni, ambayo hutumiwa kwa ajili ya kutolewa rasmi Pia ni faili ya usanidi chaguo-msingi wakati wa kutumia vigezo vya mstari wa amri `-n` hadi `npm` ili kutolewa.

Unaweza pia kuunda faili zingine za usanidi Tumia `--htm_conf` kwenye mstari wa amri ili kutaja jina la faili la usanidi la kutumia:

kwa mfano:
```
i18n.site --htm_conf dist --save
```

Hapa `--save` inawakilisha nambari ya toleo la toleo la sasisho.

## <a rel=id href="#npm" id="npm"></a> Chapisha maudhui kwa npmjs.com

[Kuchapisha](/i18n.site/feature#ha) maudhui kwa [npmjs.com](//npmjs.com)

### npm Ingia & Chapisho

Sakinisha `nodejs` , ingia na `npm login` .

Hariri `md/.i18n/htm/main.yml` na ubadilishe thamani ya [`md:`](//github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/main.yml#L7) `YOUR_NPM_PACKAGE` kama jina lako la kifurushi `npm` ambalo halijashughulikiwa [npmjs.com](//npmjs.com) .

Kisha rekebisha `md/.i18n/htm/main.package.json`

Endesha `i18n.site --npm` au `i18n.site -n` katika saraka `md` ili kutafsiri na kuchapisha.

Ukitumia mazingira ya ujumuishaji unaoendelea kuchapisha, hakuna haja ya kusakinisha `nodejs` Nakili tu ruhusa za kuingia na kuchapisha `~/.npmrc` kwa mazingira.

Ukibadilisha jina la kifurushi cha `v:` kati ya `main.yml` , tafadhali **hakikisha kuwa umefuta `.i18n/v/main` kwanza** kisha uchapishe.

#### Seva Ya Proksi Iliyochapishwa Na npm

Iwapo watumiaji nchini Uchina Bara watakumbana na matatizo ya mtandao na hawawezi kuchapisha vifurushi `npm` , wanaweza kuweka kigezo cha `https_proxy` cha mazingira ili kusanidi seva mbadala.

Kwa kudhani kuwa bandari yako ya seva ya wakala ni `7890` , unaweza kuandika:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

## Maudhui Ya Kujisimamia

Ikiwa ungependa kupangisha maudhui yako mwenyewe, kwanza hariri `md/.i18n/htm/main.yml` na ubadilishe `v: //unpkg.com/i18n.site` hadi kiambishi awali cha URL yako, kama vile `v: //i18n-v.xxx.com` .

Ingiza saraka `md` na uendeshe

```
i18n.site --htm_conf ol --save
```

au ufupisho

```
i18n.site -c ol -s
```

Kisha, sanidi yaliyomo kwenye saraka `md/out/main/v` kwa njia ya kiambishi awali cha URL iliyowekwa `v:` .

Hatimaye, **sanidi muda wa kache wa njia inayoishia `/.v` hadi `1s`** , vinginevyo maudhui mapya hayawezi kufikiwa mara moja.

Muda wa akiba kwa njia zingine unaweza kuwekwa hadi mwaka mmoja au zaidi ili kupunguza maombi yasiyo ya lazima.

## Panga Maudhui Kwa s3

Ili kujipatia maudhui, pamoja na kutumia seva yako mwenyewe, chaguo jingine la `CDN` ni kutumia `S3` +

Unaweza kutumia [rclone](https://rclone.org) kuingia kwenye seva `S3` , kisha urejelee na urekebishe hati ifuatayo, na unakili mabadiliko ya nyongeza hadi `S3` kwa kila toleo.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/main/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/main/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/main/v/.v "$s3:/$bucket/"
```

Kumbuka kusanidi `CDN` ili muda wa kache wa njia inayoishia `/.v` ni `1s` , vinginevyo maudhui mapya hayawezi kufikiwa mara moja.

## Kuchapisha Tovuti

Tovuti inaweza kutumwa popote [github page](https://pages.github.com) na [cloudflare page](https://pages.cloudflare.com) ni chaguo nzuri.

Kwa sababu tovuti hutumia usanifu wa [programu ya ukurasa mmoja](https://developer.mozilla.org/docs/Glossary/SPA) , kumbuka kuandika upya njia za URL ambazo hazina `. ` hadi `index.html` .

Ukurasa wa ingizo la tovuti unahitaji kutumwa mara moja tu, na hakuna haja ya kupeleka upya ukurasa wa ingizo la tovuti kwa masasisho ya maudhui yanayofuata.

### Tumia Kwenye Ukurasa Wa github

Kwanza [bofya hapa ili kuunda github](https://github.com/account/organizations/new?plan=free) Jina lifuatalo la shirika ni `i18n-demo` kama mfano.

Kisha unda ghala `i18n-demo.github.io` chini ya shirika hili (tafadhali badilisha `i18n-demo` na jina la shirika ulilounda):

![](https://p.3ti.site/1721098657.avif)

Wakati wa kuchapisha maudhui katika makala yaliyotangulia, `out/main/htm` imetolewa Tafadhali ingiza saraka hii na uendeshe :

```
ln -s index.html 404.html
```


Kwa sababu `github page` haitumii uandikaji upya wa njia ya URL, `404.html` inatumika badala yake.

Kisha endesha amri ifuatayo kwenye saraka `htm` (kumbuka kubadilisha `i18n-demo/i18n-demo.github.io.git` na anwani yako ya ghala) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Baada ya kusukuma msimbo, subiri utumaji wa `github page` uendeshwe kwa mafanikio (kama inavyoonyeshwa hapa chini) kabla ya kuufikia.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Kwa ukurasa wa onyesho tafadhali tazama:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

### Tumia Kwenye Ukurasa Wa cloudflare

[cloudflare page](//pages.cloudflare.com) Ikilinganishwa na `github page` , inatoa njia ya kuandika upya na ni rafiki zaidi kwa China bara na inapendekezwa kutumia.

Usambazaji wa `cloudflare page` kwa kawaida hutegemea utumaji wa `github page` hapo juu.

Unda mradi na ufunge ghala `i18n-demo.github.io` hapo juu.

Mchakato unaonyeshwa kwenye takwimu hapa chini:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Tafadhali bofya `Add Account` ili kutoa idhini ya kufikia shirika `i18n-demo` .

Ikiwa umefunga ghala la shirika lingine, unaweza kuhitaji kubofya `Add Account` mara mbili ili kuidhinisha mara mbili kabla ya shirika jipya kuonyeshwa.

![](https://p.3ti.site/1721118306.avif)

Ifuatayo, chagua ghala `i18n-demo.github.io` , kisha ubofye `Begin setup` , na utumie maadili chaguo-msingi kwa hatua zinazofuata.

![](https://p.3ti.site/1721118490.avif)

Baada ya kuifunga kwa mara ya kwanza, unahitaji kusubiri dakika chache kabla ya kuifikia.

Baada ya kupelekwa, unaweza kufunga jina la kikoa maalum.

![](https://p.3ti.site/1721119459.avif)

Baada ya kufunga jina maalum la kikoa, tafadhali nenda kwa jina la kikoa ili kusanidi uandikaji upya wa njia ya programu ya ukurasa mmoja, kama inavyoonyeshwa hapa chini:

![](https://p.3ti.site/1721119320.avif)

Sheria katika picha hapo juu ni kama ifuatavyo. Tafadhali badilisha `i18n.site` katika mstari wa kwanza hapa chini na jina la kikoa ulilofunga.

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

Kwa kuongeza, tafadhali sanidi sheria za kache, kama inavyoonyeshwa hapa chini, na weka muda wa kache hadi mwezi mmoja.

![](https://p.3ti.site/1721125111.avif)

Tafadhali badilisha jina la kikoa linalolingana katika hatua ya pili kwenye picha hapo juu hadi jina la kikoa ulilofunga.

### Kuboresha Uwekaji Wa Tovuti Nchini China Bara

Iwapo ungependa kupata utendakazi bora wa ufikivu katika mazingira ya mtandao ya Uchina Bara, tafadhali [sajili jina la kikoa](//beian.aliyun.com) kwanza.

Kisha, tumia hifadhi ya kifaa cha wachuuzi wa wingu nchini + `CDN` Sambaza maudhui yafuatayo `out/main/htm` .

Unaweza kutumia kompyuta makali kuandika upya njia ili kukabiliana na programu za ukurasa mmoja Kwa mfano, [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) inaweza kusanidiwa kama hii:

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
  // Vijajuu vya majibu vinaweza kuwekwa ili kutoa utatuzi, kama vile out.XXX = 'MSG';
})
```

![](https://p.3ti.site/1721121273.avif)

Kwa sababu rekodi `MX` na rekodi `CNAME` haziwezi kuishi pamoja, ikiwa unataka kupokea barua pepe za jina la kikoa kwa wakati mmoja, unahitaji kushirikiana na [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) hadi kiwango cha `CNAME` kuwa rekodi `A` .

Zaidi ya hayo, kwa sababu ada za trafiki za ng'ambo za wachuuzi wa wingu nchini Uchina ni ghali, ikiwa ungependa kuongeza gharama, unaweza kutumia [azimio la kijiografia la DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) na jina maalum la [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) la kikoa (kama inavyoonyeshwa hapa chini) ili kufanikiwa trafiki diversion──Trafiki routing katika bara China Baidu Cloud `CDN` , trafiki kimataifa huenda cloudflare .

![](https://p.3ti.site/1721119788.avif)

Suluhu hizi za utumiaji bora ni ngumu zaidi na zitaanzishwa katika sura tofauti katika siku zijazo.

### Uelekezaji Upya Wa Jina La Kikoa Cha Kawaida

Ikiwa unatumia `i18n.site` kutengeneza tovuti kama tovuti yako kuu, kwa kawaida unahitaji kusanidi uelekezaji upya wa kikoa, yaani, kuelekeza ufikiaji wa `*.xxx.com` (pamoja na `www.xxx.com` ) hadi `xxx.com` .

Sharti hili linaweza kufikiwa kwa usaidizi wa Alibaba Cloud `CDN` `EdgeScript` ( [hati ya Kiingereza](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Hati ya Kichina](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Ongeza jina la kikoa katika [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) na uelekeze jina la kikoa `*.xxx.com` `CNAME` kwenye Alibaba Cloud `CDN` .

![](https://p.3ti.site/1721122000.avif)

Kwa mfano, usanidi wa uelekezaji upya wa jina la kikoa cha `*.i18n.site` kwenye picha hapo juu ni kama ifuatavyo.

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

### Sambaza Na nginx

Tafadhali ongeza usanidi sawa na ufuatao katika aya ya `server` ya nginx Tafadhali badilisha `/root/i18n/md/out/main/htm` hadi njia ya mradi wako `out/main/htm` :

```
location / {
  root  /root/i18n/md/out/main/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

## Kulingana Na Muunganisho `github action` Unaoendelea

Unaweza kurejelea yafuatayo ili kusanidi `github action` yako:

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

Kama inavyoweza kuonekana katika usanidi, mtiririko huu wa kazi huchochewa wakati wa kusukuma hadi tawi `main` na tawi la `dist` .

Mtiririko wa kazi utatumia faili ya usanidi inayolingana na jina la tawi ili kuchapisha hati hapa, `.i18n/htm/main.yml` na `.i18n/htm/dist.yml` zitatumika kama usanidi wa uchapishaji mtawalia.

Tunapendekeza mbinu bora zifuatazo za mchakato wa kutoa hati:

Mabadiliko yanaposukumwa kwenye tawi `main` , hati inachochewa kujengwa na kupelekwa kwenye kituo cha onyesho la kukagua (kituo cha onyesho la kukagua kinapatikana [github page](//pages.github.com) ).

Baada ya kuthibitisha kwamba hati ni sahihi kwenye tovuti ya hakikisho, msimbo utaunganishwa na kusukumwa kwenye tawi `dist` , na ujenzi rasmi na upelekaji utaenda mtandaoni.

Bila shaka, kutekeleza mchakato hapo juu unahitaji kuandika usanidi zaidi.

Unaweza kurejelea mradi [github.com/fcdoc/doc](//github.com/fcdoc/doc/blob/main/.github/workflows/i18n.site.yml) kwa uandishi wa mtiririko wa kazi.

`secrets.I18N_SITE_TOKEN` na `secrets.NPM_TOKEN` katika usanidi zinakuhitaji usanidi vigeu vya siri katika msingi wa msimbo.

![](//p.3ti.site/1730970199.avif)

`I18N_SITE_TOKEN` [i18n.site/token](//i18n.site/token)

`NPM_TOKEN` ni tokeni ya uchapishaji ya kifurushi cha `npm` katika [npmjs.com](//npmjs.com) .

![](//p.3ti.site/1730969906.avif)


## Muundo Wa Saraka

### `public`

Faili tuli za tovuti, kama vile `favicon.ico` , `robots.txt` , nk.

Faili za ikoni hapa zinaweza kutengenezwa na [realfavicongenerator.net](https://realfavicongenerator.net)

### `.i18n`

Chini ya saraka `.i18n` kuna faili za usanidi, akiba ya tafsiri, n.k. ya `i18n.site` Tazama sura inayofuata ["Usanidi"](/i18n.site/conf) kwa maelezo.

### `en`

Saraka ya lugha ya asili, inayolingana na `en` kati ya `fromTo` kati ya faili `.i18n/conf.yml` ya usanidi

```yaml
i18n:
  fromTo:
    en: zh
```

Tafadhali rejelea usanidi wa tafsiri [i18](/i18/use)