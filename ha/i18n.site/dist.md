# Aiwatar Da Kan Layi

`i18n.site` yana ɗaukar tsarin gine-ginen [aikace-aikacen shafi guda ɗaya](https://developer.mozilla.org/docs/Glossary/SPA) , kuma ana tura shafin shiga yanar gizon da abun cikin gidan yanar gizon da kansa.

Bayan gudanar da fassarar da ke sama, za a samar da kundayen adireshi `htm` da `v` a ƙarƙashin kundin adireshi `md/out/dev` .

Anan, `dev` yana nufin an gina shi bisa tsarin daidaitawa `.i18n/htm/dev.yml` .

`dev` directory :

Littafin `htm` shine shafin shiga gidan yanar gizon.

Littafin `v` ya ƙunshi abun ciki na gidan yanar gizo tare da lambobin sigar.

Samfotin gida bai damu da lambar sigar ba kuma zai kwafi duk fayiloli zuwa kundin adireshin `out/dev/v/0.1.0` .

Don fitowar hukuma, za a kwafi fayilolin da aka canza zuwa sabon kundin adireshin lambar sigar.

## Ƙayyade Fayil Ɗin Sanyi Tare Da `-c`

Fayilolin daidaitawa daban-daban za su ƙirƙiri kundayen adireshi masu dacewa a cikin kundin adireshin `out` .

Misali, `.i18n/htm/main.yml` zai ƙirƙiri kundin adireshi `out/main` .

`dev.yml` da `main.yml` sune saitunan tsoho.

`dev` shine taƙaitawar `development` , yana nuna yanayin haɓakawa, ana amfani dashi don samfoti na gida, kuma shine babban fayil ɗin daidaitawa.
`ol` shine gajartawar `online` , yana nuna yanayin kan layi, wanda ake amfani dashi don sakin hukuma Har ila yau, babban fayil ɗin sanyi ne lokacin amfani da sigogin layin umarni `-n` zuwa `npm` don saki.

Hakanan zaka iya ƙirƙirar wasu fayilolin sanyi Yi amfani da `--htm_conf` akan layin umarni don tantance sunan fayil ɗin sanyi don amfani:

misali:
```
i18n.site --htm_conf dist --save
```

Anan `--save` yana wakiltar lambar sigar sabuntawa.

## <a rel=id href="#npm" id="npm"></a> Buga abun ciki zuwa npmjs.com

Buga abun ciki zuwa [npmjs.com](//npmjs.com) shine shawarar da aka ba da shawarar (duba [Babban Samun Gaba-gaba](/i18n.site/feature#ha) ).

### npm & Buga

Shigar `nodejs` , shiga tare da `npm login` .

Shirya `md/.i18n/htm/main.yml` [npmjs.com](//npmjs.com) canza ƙimar [`md:`](//github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/main.yml#L7) `YOUR_NPM_PACKAGE` azaman sunan fakitin ku `npm` .

Sannan canza `md/.i18n/htm/main.package.json`

Gudu `i18n.site --npm` ko `i18n.site -n` a cikin kundin adireshin `md` don fassara da bugawa.

Idan kun yi amfani da yanayin haɗin kai mai ci gaba don bugawa, babu buƙatar shigar da `nodejs` Kawai kwafi izinin shiga da buga izini `~/.npmrc` zuwa yanayin.

Idan kun canza sunan fakitin `v:` a cikin `main.yml` , da **fatan za a fara share `.i18n/v/main`** sannan ku buga shi.

#### Sabar Wakili Ta npm Ta Buga

Idan masu amfani a babban yankin kasar Sin sun gamu da matsalolin hanyar sadarwa kuma ba za su iya buga fakitin `npm` ba, za su iya saita canjin yanayi `https_proxy` don daidaita sabar wakili.

Da ɗauka cewa tashar tashar sabar wakili na `7890` ce, zaku iya rubuta:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

## Abun Ciki Mai Ɗaukar Nauyi

Idan kuna son ɗaukar nauyin abun ciki, fara gyara `md/.i18n/htm/main.yml` kuma canza `v: //unpkg.com/i18n.site` zuwa prefix ɗin URL ɗinku, kamar `v: //i18n-v.xxx.com` .

Shigar da `md` directory kuma gudanar

```
i18n.site --htm_conf ol --save
```

ko gajarta

```
i18n.site -c ol -s
```

Sa'an nan, saita abun ciki a cikin `md/out/main/v` directory zuwa URL prefix hanyar da aka saita a cikin `v:` .

A ƙarshe, **saita lokacin cache na hanyar da ke ƙarewa a `/.v` zuwa `1s`** , in ba haka ba sabon abun ciki da aka saki ba za a iya isa ga nan take ba.

Ana iya saita lokacin cache na sauran hanyoyin zuwa shekara ɗaya ko fiye don rage buƙatun da ba dole ba.

## Mai Watsa Shiri Abun Ciki Zuwa s3

Don abun ciki mai ɗaukar hoto, ban da amfani da uwar garken ku, wani zaɓi `CDN` gama gari shine amfani da `S3` + .

Kuna iya amfani da [rclone](https://rclone.org) don shiga cikin uwar garken `S3` , sannan koma zuwa kuma gyara rubutun mai zuwa, kuma kawai kwafi ƙarin canje-canje zuwa `S3` don kowane saki.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/main/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/main/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/main/v/.v "$s3:/$bucket/"
```

Ka tuna don saita `CDN` domin lokacin cache na hanyar da ke ƙarewa a cikin `/.v` shine `1s` , in ba haka ba sabon abun ciki da aka saki ba za a iya isa ga nan da nan ba.

## Buga Gidan Yanar Gizo

Ana iya tura gidan yanar gizon a ko'ina [github page](https://pages.github.com) kuma [cloudflare page](https://pages.cloudflare.com) zabi ne masu kyau.

Saboda gidan yanar gizon yana amfani da gine-ginen [aikace-aikacen shafi guda ɗaya](https://developer.mozilla.org/docs/Glossary/SPA) , ku tuna don sake rubuta hanyoyin URL waɗanda basu ƙunshi `. ` zuwa `index.html` ba.

Shafin shigarwar gidan yanar gizon yana buƙatar tura sau ɗaya kawai, kuma babu buƙatar sake fasalin shafin shiga yanar gizon don sabuntawar abun ciki na gaba.

### Sanya Kan Shafin github

Da farko [danna github don ƙirƙirar ƙungiya](https://github.com/account/organizations/new?plan=free) Sunan ƙungiyar mai zuwa shine `i18n-demo` a matsayin misali.

Sannan ƙirƙirar sito `i18n-demo.github.io` a ƙarƙashin wannan ƙungiyar (don Allah musanya `i18n-demo` da sunan ƙungiyar da kuka ƙirƙira):

![](https://p.3ti.site/1721098657.avif)

Lokacin buga abun ciki a labarin da ya gabata, an ƙirƙira `out/main/htm` Da fatan za a shigar da wannan kundin adireshi kuma ku gudanar da shi :

```
ln -s index.html 404.html
```


Saboda `github page` baya goyan bayan sake rubuta hanyar URL, ana amfani da `404.html` maimakon.

Sannan gudanar da umarni mai zuwa a cikin `htm` directory (tuna don maye gurbin `i18n-demo/i18n-demo.github.io.git` tare da adireshin sito na ku) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Bayan tura lambar, jira ƙaddamar da `github page` don yin aiki cikin nasara (kamar yadda aka nuna a ƙasa) kafin ka iya samun dama gare ta.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Don shafin demo don Allah duba:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

### Sanya Kan Shafin cloudflare

[cloudflare page](//pages.cloudflare.com) aka kwatanta da `github page` , yana ba da hanyar sake rubutawa kuma yana da abokantaka ga babban yankin kasar Sin kuma ana ba da shawarar yin amfani da shi.

Ƙaddamar da `cloudflare page` yawanci yana dogara ne akan ƙaddamar da `github page` a sama.

Ƙirƙiri aikin kuma ɗaure rumbun `i18n-demo.github.io` na sama.

Ana nuna tsarin a cikin hoton da ke ƙasa:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Da fatan za a danna `Add Account` don ba da damar shiga ƙungiya `i18n-demo` .

Idan kun daure sito na wata ƙungiya, kuna iya buƙatar danna `Add Account` sau biyu don ba da izini sau biyu kafin a nuna sabuwar ƙungiyar.

![](https://p.3ti.site/1721118306.avif)

Na gaba, zaɓi sito `i18n-demo.github.io` , sannan danna `Begin setup` , kuma yi amfani da ƙimar da aka saba don matakai na gaba.

![](https://p.3ti.site/1721118490.avif)

Bayan ɗaure a karon farko, kuna buƙatar jira ƴan mintuna kafin ku sami damar shiga.

Bayan turawa, zaku iya ɗaure sunan yanki na al'ada.

![](https://p.3ti.site/1721119459.avif)

Bayan ɗaure sunan yanki na al'ada, da fatan za a je zuwa sunan yankin don saita hanyar sake rubuta aikace-aikacen shafi guda ɗaya, kamar yadda aka nuna a ƙasa:

![](https://p.3ti.site/1721119320.avif)

Dokokin da ke cikin hoton da ke sama sune kamar `i18n.site` .

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

Bugu da kari, da fatan za a saita ƙa'idodin cache, kamar yadda aka nuna a ƙasa, kuma saita tsawon lokacin cache zuwa wata ɗaya.

![](https://p.3ti.site/1721125111.avif)

Da fatan za a canza sunan yankin da ya dace a mataki na biyu a cikin hoton da ke sama zuwa sunan yankin da kuka ɗaure.

### Inganta Aikin Aika Gidan Yanar Gizo a Babban Yankin Kasar Sin

Idan kana son samun ingantacciyar isar da damar aiki a cikin mahallin cibiyar sadarwa ta kasar Sin, da fatan [za a yi rajista da sunan yankin](//beian.aliyun.com) tukuna.

`CDN` nan, yi amfani da kayan ajiya `out/main/htm` masu sayar da gajimare a cikin babban yankin Sin +

Kuna iya amfani da lissafin gefen don sake rubuta hanyar don dacewa da aikace-aikacen shafi guda ɗaya, misali, [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) ana iya daidaita shi kamar haka:

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
  // Za'a iya saita masu kan martani don gyara kayan aiki, kamar out.XXX = 'MSG';
})
```

![](https://p.3ti.site/1721121273.avif)

Saboda rikodin `MX` da rikodin `CNAME` ba zai iya zama tare ba, idan kuna son `CNAME` imel ɗin sunan yanki a lokaci guda, kuna buƙatar yin aiki tare da `A` [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten)

Bugu da kari, saboda kudaden zirga-zirgar zirga-zirgar tafiye-tafiye na masu siyar da girgije a babban yankin kasar Sin suna da tsada sosai, idan kuna son inganta farashi, zaku iya amfani da ƙudurin yanayi na kyauta na [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) [DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) da sunan yanki na al'ada (kamar yadda aka nuna a ƙasa) don cimma karkatar da ababen hawa──Tsarin zirga-zirgar ababen hawa a babban yankin kasar Sin Baidu Cloud `CDN` , zirga-zirgar ababen hawa na kasa da kasa na tafiya cloudflare .

![](https://p.3ti.site/1721119788.avif)

Waɗannan hanyoyin inganta aikin turawa sun fi rikitarwa kuma za a gabatar da su a cikin surori daban-daban a nan gaba.

### Juyawa Sunan Yankin Gabaɗaya

Idan kuna amfani da `i18n.site` don samar da gidan yanar gizon a matsayin babban gidan yanar gizonku, yawanci kuna buƙatar saita jujjuyawar yanki, wato, tura hanyar shiga `*.xxx.com` (ciki har da `www.xxx.com` ) zuwa `xxx.com` .

Ana iya cimma wannan buƙatu tare da taimakon Alibaba Cloud `CDN` `EdgeScript` ( [daftarin aiki na Turanci](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Daftarin Sinanci](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

`*.xxx.com` sunan `CNAME` `CDN` [Alibaba Cloud CDN](https://cdn.console.aliyun.com/domain/list)

![](https://p.3ti.site/1721122000.avif)

Misali, tsarin jujjuya sunan pan-domain na `*.i18n.site` a hoton da ke sama shine kamar haka:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

### Yi Amfani Da nginx

Da fatan za a ƙara tsari mai kama da mai zuwa a cikin sakin layi na `server` na nginx Da fatan za a canza `/root/i18n/md/out/main/htm` zuwa hanyar aikin ku `out/main/htm` :

```
location / {
  root  /root/i18n/md/out/main/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

## Dangane Da `github action` Ci Gaba Da Haɗin Kai

Kuna iya komawa zuwa waɗannan abubuwan don saita `github action` naku:

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

Kamar yadda ake iya gani a cikin tsari, wannan aikin yana haifar da lokacin da ake turawa zuwa reshe `main` da reshe `dist` .

Gudun aikin zai yi amfani da fayil ɗin daidaitawa wanda ya dace da sunan reshe don buga daftarin aiki a nan, `.i18n/htm/main.yml` da `.i18n/htm/dist.yml` za a yi amfani da su azaman tsarin wallafe-wallafen bi da bi.

Muna ba da shawarar mafi kyawun ayyuka masu zuwa don aiwatar da sakin daftarin aiki:

Lokacin da aka tura canje-canje zuwa reshe na `main` , za a kunna daftarin aiki don ginawa kuma a tura shi zuwa tashar samfoti (ana samun tashar samfoti [github page](//pages.github.com) ).

Bayan tabbatar da cewa takaddun daidai ne akan shafin samfoti, za a haɗa lambar kuma a tura shi zuwa reshe `dist` , kuma ginin hukuma da turawa zai tafi kan layi.

Tabbas, aiwatar da tsarin da ke sama yana buƙatar rubuta ƙarin jeri.

Kuna iya komawa zuwa ainihin [github.com/fcdoc/doc](//github.com/fcdoc/doc/blob/main/.github/workflows/i18n.site.yml) don rubutun tafiyar aiki.

`secrets.I18N_SITE_TOKEN` da `secrets.NPM_TOKEN` a cikin tsarin suna buƙatar ka saita masu canjin sirri a cikin lambar tushe.

![](//p.3ti.site/1730970199.avif)

`I18N_SITE_TOKEN` [i18n.site/token](//i18n.site/token)

`NPM_TOKEN` shine alamar bugu na kunshin `npm` a cikin tsari [npmjs.com](//npmjs.com) kuma ƙirƙirar alama tare da izinin bugawa (kamar yadda aka nuna a ƙasa).

![](//p.3ti.site/1730969906.avif)


## Tsarin Shugabanci

### `public`

Fayilolin gidan yanar gizon a tsaye, kamar `favicon.ico` , `robots.txt` , da sauransu.

Ana iya ƙirƙirar fayilolin gumaka tare da [realfavicongenerator.net](https://realfavicongenerator.net)

### `.i18n`

Ƙarƙashin kundin adireshi `.i18n` akwai fayilolin daidaitawa, cache fassarar, da sauransu na `i18n.site` Duba babi na gaba ["Tsarin"](/i18n.site/conf) don cikakkun bayanai.

### `en`

Jagorar yaren tushen, daidai da `en` na `fromTo` a cikin fayil na `.i18n/conf.yml`

```yaml
i18n:
  fromTo:
    en: zh
```

Da fatan za a koma ga daidaitawar fassarar [i18](/i18/use)