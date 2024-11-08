# Gelin Iyo Online

`i18n.site` wuxuu qaataa [hal bog oo arji](https://developer.mozilla.org/docs/Glossary/SPA) qaab dhismeedka ah, iyo bogga gelitaanka bogga iyo waxa ku jira mareegaha ayaa si madaxbanaan loo hawlgeliyay.

Kadib socodsiinta tarjumaada sare, hagaha `htm` iyo `v` ayaa lagu soo saari doonaa hagaha `md/out/dev` .

Halkan, `dev` waxay ka dhigan tahay inay ku dhisan tahay faylka qaabeynta `.i18n/htm/dev.yml` .

`dev` :

Hagaha `htm` waa bogga laga soo galo shabakada.

Hagaha `v` waxa uu ka kooban yahay mareegaha mareegaha oo wata lambarada nooca.

Horudhac maxalli ah kama daneeyo nambarka nooca oo wuxuu koobi doonaa dhammaan faylasha tusaha `out/dev/v/0.1.0` .

Siideynta rasmiga ah, faylasha la bedelay waxaa lagu koobiyeynayaa tusaha lambarka nooca cusub.

## Ku Qeex Faylka Qaabeynta Ee Leh `-c`

Faylasha qaabeynta ee kala duwan ayaa ku abuuri doona hagayaal u dhigma tusaha `out` .

Tusaale ahaan, `.i18n/htm/main.yml` ayaa abuuri doonta `out/main` hagaha.

`dev.yml` iyo `main.yml` waa qaabaynta caadiga ah.

`dev` waa soo gaabinta `development` , oo muujinaysa deegaanka horumarinta, loo isticmaalo dib u eegida maxalliga ah, iyo sidoo kale faylka qaabeynta caadiga ah.
`ol` waa soo gaabinta `online` , oo tilmaamaysa deegaanka khadka tooska ah, kaas oo loo isticmaalo siidaynta rasmiga ah sidoo kale waa faylka qaabeynta caadiga ah marka la isticmaalayo cabbirada khadka taliska `-n` ilaa `npm` si loo sii daayo.

Waxaad sidoo kale abuuri kartaa faylal kale oo qaabeynta Isticmaal `--htm_conf` khadka taliska si aad u qeexdo magaca faylka qaabeynta si aad u isticmaasho:

tusaale ahaan:
```
i18n.site --htm_conf dist --save
```

Halkan `--save` waxay ka dhigan tahay lambarka nooca siideynta ee cusboonaysiinta.

## <a rel=id href="#npm" id="npm"></a> Ku daabac macluumaadka npmjs.com

Daabacaada [nuxurka](/i18n.site/feature#ha) [npmjs.com](//npmjs.com)

### Soo npm & Boostada

Ku rakib `nodejs` , gal `npm login` .

Wax ka beddel `md/.i18n/htm/main.yml` oo u beddel qiimaha [`md:`](//github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/main.yml#L7) `YOUR_NPM_PACKAGE` beddel magaca baakidhka `npm` ee adiga kuu gaar [npmjs.com](//npmjs.com) .

Kadibna wax ka beddel `md/.i18n/htm/main.package.json`

Ku socodsii `i18n.site --npm` ama `i18n.site -n` tusaha `md` si aad u turjunto oo u daabacdo.

Haddii aad isticmaasho jawi is-dhexgal joogto ah si aad u daabacdo, looma baahna in lagu rakibo `nodejs` Kaliya nuqul ka samee ogolaanshaha la soo galiyay iyo daabacaadda `~/.npmrc` deegaanka.

Haddii aad wax ka beddesho magaca xirmada `v:` ee `main.yml` , fadlan **hubi inaad marka hore tirtirto `.i18n/v/main`** ka dibna daabac.

#### Server-Ka Wakiilku Waxa Daabacay npm

Haddii isticmaaleyaasha ku nool dhul weynaha Shiinaha ay la kulmaan mashaakil shabkada oo ay awoodi waayaan inay daabacaan `npm` xirmo, waxay dejin karaan doorsoomaha deegaanka `https_proxy` si ay u habeeyaan server-ka wakiilnimada.

Adiga oo u maleynaya in dekedda wakiilkaaga `7890` , waxaad qori kartaa:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

## Waxyaabo Is-Martigeliyay

Haddii aad rabto in aad is-martigeliso waxa ku jira, marka hore wax ka beddel `md/.i18n/htm/main.yml` oo u beddel `v: //unpkg.com/i18n.site` horgalaha URL-kaaga, sida `v: //i18n-v.xxx.com` .

Geli buugga `md` oo orod

```
i18n.site --htm_conf ol --save
```

ama soo gaabinta

```
i18n.site -c ol -s
```

Kadibna, u habbee waxa ku jira tusaha `md/out/main/v` ee dariiqa horgalaha URL ee lagu dejiyay `v:` .

Ugu dambeyntii, **habee wakhtiga kaydinta ee jidka ku dhamaanaya `/.v` ilaa `1s`** , haddii kale waxa cusub ee la sii daayay isla markiiba lama heli karo.

Waqtiga kaydinta ee waddooyinka kale waxaa loo dejin karaa hal sano ama ka badan si loo yareeyo codsiyada aan loo baahnayn.

## Waxyaabaha Martida Loo Yahay s3

Si aad iskiis u martigeliso, marka lagu daro isticmaalka serverkaaga, ikhtiyaar kale oo caadi `CDN` waa isticmaalka `S3` + .

Waxaad isticmaali kartaa [rclone](https://rclone.org) si aad u gasho server-ka `S3` , ka dib tixraac oo aad wax ka bedesho qoraalka soo socda, oo kaliya nuqul ka samee isbeddelada kordhinta `S3` siideyn kasta.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/main/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/main/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/main/v/.v "$s3:/$bucket/"
```

Xusuusnow inaad habayso `CDN` si wakhtiga kaydka ee dariiqa ku dhamaanaya `/.v` uu yahay `1s` , haddii kale waxa cusub ee la sii daayay isla markiiba lama heli karo.

## Daabac Website

Mareegta waxaa la geyn karaa meel kasta, [github page](https://pages.github.com) [cloudflare page](https://pages.cloudflare.com) waa doorashooyin wanaagsan.

Sababtoo ah shabakadu waxay isticmaashaa qaab-dhismeedka [codsiga hal bog](https://developer.mozilla.org/docs/Glossary/SPA) , xasuuso inaad dib u qorto URL-yada waddooyinka aan ku jirin `. ` ilaa `index.html` .

Bogga gelitaanka mareegta waxa kaliya oo loo baahan yahay in la geeyo hal mar, mana jirto baahi loo qabo in dib loo habeeyo bogga gelitaanka mareegta si loo helo xog cusub.

### Geli Bogga github

Marka hore [github guji si aad u abuurto urur](https://github.com/account/organizations/new?plan=free) Magaca soo socdaa waa `i18n-demo` tusaale ahaan.

Kadib samee bakhaarka `i18n-demo.github.io` ee hoos yimaada ururkan (fadlan ku beddel `i18n-demo` magaca ururka aad abuurtay):

![](https://p.3ti.site/1721098657.avif)

Marka la daabacayo waxa ku jira maqaalkii hore, `out/main/htm` ayaa la sameeyay. Fadlan geli buuggan oo socodsii :

```
ln -s index.html 404.html
```


Sababtoo ah `github page` ma taageerayo dib u qorista dariiqa URL, `404.html` ayaa la isticmaalay.

Ka dib ku socodsii amarka soo socda tusaha `htm` (xusuusnow inaad ku bedesho `i18n-demo/i18n-demo.github.io.git` cinwaankaaga bakhaarka) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Ka dib markaad riixdo koodka, sug meelaynta `github page` si ay u socoto si guul leh (sida hoos ku cad) ka hor intaadan helin.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Bogga demo fadlan eeg:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

### Geli Bogga cloudflare

[cloudflare page](//pages.cloudflare.com) la barbardhigo `github page` , waxay bixisaa dariiqa dib-u-qorista waxayna aad u saaxiibtinimo badan tahay dhul-weynaha Shiinaha waxaana lagu talinayaa in la isticmaalo.

Dejinta `cloudflare page` waxay badanaa ku salaysan tahay meelaynta `github page` ee sare.

Abuur mashruuc oo xidh `i18n-demo.github.io` bakhaarka sare.

Habka ayaa lagu muujiyay sawirka hoose:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Fadlan guji `Add Account` si aad u oggolaato gelitaanka ururka `i18n-demo` .

Haddii aad xidhay bakhaarka urur kale, waxa laga yaabaa inaad u baahato inaad gujiso `Add Account` laba jeer si aad u ogolaato laba jeer ka hor inta aan ururka cusub la soo bandhigin.

![](https://p.3ti.site/1721118306.avif)

Marka xigta, dooro bakhaarka `i18n-demo.github.io` , ka dibna dhagsii `Begin setup` , oo isticmaal qiimaha caadiga ah ee tallaabooyinka xiga.

![](https://p.3ti.site/1721118490.avif)

Ka dib markaad xidho markii ugu horeysay, waxaad u baahan tahay inaad sugto dhowr daqiiqo ka hor intaadan helin.

Ka dib markii la geeyo, waxaad xidhi kartaa magac domain gaar ah.

![](https://p.3ti.site/1721119459.avif)

Kadib xidhidhiyaha magaca domainka gaarka ah, fadlan tag magaca domainka si aad u habayso dariiqa dib u qorida codsiga hal bog, sida hoos ku cad:

![](https://p.3ti.site/1721119320.avif)

Xeerarka sawirka kore waa sida soo socota `i18n.site`

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

Intaa waxaa dheer, fadlan habee xeerarka kaydinta, sida hoos ku cad, oo u dhig muddada kaydinta ilaa hal bil.

![](https://p.3ti.site/1721125111.avif)

Fadlan u beddel magaca domainka ee u dhigma tallaabada labaad ee sawirka kore oo u beddel magaca domainka aad xidhay.

### Hagaajinta Dirida Shabakadaha Ee Dhul Weynaha Shiinaha

Haddii aad rabto in aad hesho wax qabad ka wanaagsan oo gelitaan ka ah deegaanka shabakadda ee dhul weynaha Shiinaha, fadlan marka hore [diwaangeli magaca domain](//beian.aliyun.com) .

Kadibna, adeegso kaydinta shayga daruuraha iibiya ee dhul weynaha + `CDN` Geli waxa soo socda `out/main/htm` .

Waxaad isticmaali kartaa xisaabinta cidhifka ah si aad dib ugu qorto dariiqa aad ula qabsato codsiyada hal bog ah Tusaale ahaan, [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) waxa loo habayn karaa sidan:

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
  // Madaxa jawaabaha waxa loo dejin karaa inay wax ka saaraan wax soo saarka, sida out.XXX = 'MSG';
})
```

![](https://p.3ti.site/1721121273.avif)

Sababtoo ah diiwaanka `MX` iyo diiwaanka `CNAME` ma wada noolaan karaan, haddii aad rabto inaad hesho emails magac domain isku mar, waxaad u baahan tahay inaad la [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) qoraalka `CNAME` ilaa heerka `A` .

Intaa waxaa dheer, sababtoo ah khidmadaha taraafikada dibadda ee iibiyaasha daruuraha ee dhul weynaha Shiinaha waa qaali, haddii aad rabto inaad kor u qaaddo kharashyada, waxaad isticmaali kartaa [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) [DNS xallinta juqraafiyeed ee bilaashka ah](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) iyo magaca domainka gaarka ah (sida hoos ku cad) si aad u gaarto leexinta gaadiidka──Hawlgalka taraafikada ee dhul weynaha Shiinaha Baidu Cloud `CDN` , taraafikada caalamiga ah ayaa maraysa cloudflare .

![](https://p.3ti.site/1721119788.avif)

Xalalkan wanaajinta hawlgelinta ayaa aad u adag waxaana lagu soo bandhigi doonaa cutubyo kala duwan mustaqbalka.

### Dib U Habaynta Magaca Domainka Guud

Haddii aad isticmaasho `i18n.site` si aad u abuurto degel sida mareegahaaga ugu muhiimsan, waxaad inta badan u baahan tahay inaad habayso dib u habeynta pan-domain, taas oo ah, u jiheynta gelitaanka `*.xxx.com` (oo ay ku jiraan `www.xxx.com` ) ilaa `xxx.com` .

Shuruuddan waxaa lagu gaari karaa iyadoo la kaashanayo Alibaba Cloud `CDN` `EdgeScript` ( [dukumeenti Ingiriisi](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Dukumeenti Shiinaha ah](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Ku dar magaca domain gudaha [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) oo ku tilmaam magaca domain `*.xxx.com` `CNAME` gudaha Alibaba Cloud `CDN` .

![](https://p.3ti.site/1721122000.avif)

Tusaale ahaan, qaabaynta habaynta magaca pan-domain ee `*.i18n.site` ee sawirka kore waa sida soo socota:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

### Ku Dheji nginx

Fadlan ku dar qaabayn la mid ah kuwan soo socda ee cutubka `server` ee nginx Fadlan u beddel `/root/i18n/md/out/main/htm` jidka mashruucaaga `out/main/htm` :

```
location / {
  root  /root/i18n/md/out/main/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

## Iyada Oo Ku Saleysan `github action` Is Dhexgalka Joogtada Ah

Waxaad tixraaci kartaa kuwan soo socda si aad u habayso `github action` :

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

Sida lagu arki karo qaabeynta, socodka shaqadani wuxuu kiciyaa marka la riixayo laanta `main` iyo laanta `dist` .

Socodka shaqadu wuxuu isticmaali doonaa faylka qaabaynta ee u dhigma magaca laanta si uu u daabaco dukumeentiga halkan, `.i18n/htm/main.yml` iyo `.i18n/htm/dist.yml` ayaa loo isticmaali doonaa qaabaynta daabacaadda siday u kala horreeyaan.

Waxaan kugula talineynaa hababka ugu wanaagsan ee soo socda ee habka siideynta dukumentiga:

Marka isbeddelada lagu riixo laanta `main` , dukumeentigu wuxuu kiciyaa in la dhiso oo la geeyo goobta-fiirinta (goobta hore ayaa diyaar ah [github page](//pages.github.com) ).

Ka dib markii la xaqiijiyo in dukumeentigu sax yahay goobta horudhaca ah, koodhka ayaa la isku dari doonaa oo loo riixayaa laanta `dist` , dhismaha rasmiga ah iyo dejinta ayaa tagi doona online.

Dabcan, hirgelinta habka kor ku xusan waxay u baahan tahay qorista habayn badan.

Waxaad tixraaci kartaa mashruuca dhabta [github.com/fcdoc/doc](//github.com/fcdoc/doc/blob/main/.github/workflows/i18n.site.yml) ee qoraalka socodka shaqada.

`secrets.I18N_SITE_TOKEN` iyo `secrets.NPM_TOKEN` ee qaabaynta waxay kaaga baahan yihiin inaad ku habayso doorsoomayaasha sirta ah ee saldhiga koodhka.

![](//p.3ti.site/1730970199.avif)

`I18N_SITE_TOKEN` [i18n.site/token](//i18n.site/token)

`NPM_TOKEN` waa calaamada daabacaadda xirmada `npm` ee qaabeynta [npmjs.com](//npmjs.com) oo samee calaamad leh ogolaanshaha daabacaadda

![](//p.3ti.site/1730969906.avif)


## Qaab Dhismeedka Hagaha

### `public`

Faylasha joogtada ah ee shabakada, sida `favicon.ico` , `robots.txt` , iwm.

Faylasha astaanta halkan waxaa lagu soo saari karaa [realfavicongenerator.net](https://realfavicongenerator.net)

### `.i18n`

Buugga `.i18n` hoostiisa waxa ku jira faylalka habaynta, kaydka tarjumaada, iwm. ee `i18n.site` Faahfaahinta ka eeg cutubka xiga ["Qaababka"](/i18n.site/conf)

### `en`

Tusaha luqadda isha, oo u dhiganta `en` ee `fromTo` ee `.i18n/conf.yml` faylka qaabaynta

```yaml
i18n:
  fromTo:
    en: zh
```

Fadlan tixraac habaynta tarjumaada [i18](/i18/use)