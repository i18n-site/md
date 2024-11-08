# જમાવટ અને ઓનલાઇન

`i18n.site` [સિંગલ-પેજ એપ્લિકેશન](https://developer.mozilla.org/docs/Glossary/SPA) આર્કિટેક્ચર અપનાવે છે, અને વેબસાઇટ પ્રવેશ પૃષ્ઠ અને વેબસાઇટ સામગ્રી સ્વતંત્ર રીતે જમાવવામાં આવે છે.

ઉપરોક્ત અનુવાદ ચલાવ્યા પછી, ડિરેક્ટરીઓ `htm` અને `v` `md/out/dev` ડિરેક્ટરી હેઠળ જનરેટ થશે.

અહીં, `dev` નો અર્થ છે કે તે `.i18n/htm/dev.yml` રૂપરેખાંકન ફાઇલ પર આધારિત છે.

`dev` ડિરેક્ટરી :

`htm` ડિરેક્ટરી એ વેબસાઇટનું પ્રવેશ પૃષ્ઠ છે.

`v` ડિરેક્ટરીમાં વર્ઝન નંબર સાથે વેબસાઇટની સામગ્રી છે.

સ્થાનિક પૂર્વાવલોકન સંસ્કરણ નંબર વિશે ધ્યાન આપતું નથી અને બધી ફાઇલોને `out/dev/v/0.1.0` ડિરેક્ટરીમાં કૉપિ કરશે.

અધિકૃત પ્રકાશન માટે, બદલાયેલ ફાઇલોને નવા સંસ્કરણ નંબર નિર્દેશિકામાં કૉપિ કરવામાં આવશે.

## `-c` સાથે રૂપરેખાંકન ફાઇલનો ઉલ્લેખ કરો

વિવિધ રૂપરેખાંકન ફાઇલો `out` ડિરેક્ટરીમાં અનુરૂપ ડિરેક્ટરીઓ બનાવશે.

ઉદાહરણ તરીકે, `.i18n/htm/main.yml` `out/main` ડિરેક્ટરી બનાવશે.

`dev.yml` અને `main.yml` એ ડિફોલ્ટ રૂપરેખાંકનો છે.

`dev` `development` નું સંક્ષેપ છે, જે વિકાસ પર્યાવરણ સૂચવે છે, સ્થાનિક પૂર્વાવલોકન માટે વપરાય છે, અને તે ડિફોલ્ટ રૂપરેખાંકન ફાઇલ પણ છે.
`ol` `online` નું સંક્ષેપ છે, જે ઓનલાઈન એન્વાયર્નમેન્ટ દર્શાવે છે, જેનો ઉપયોગ અધિકૃત પ્રકાશન માટે થાય છે જ્યારે તે કમાન્ડ લાઇન પેરામીટર્સ `-n` થી `npm` નો ઉપયોગ કરે છે.

તમે અન્ય રૂપરેખાંકન ફાઇલો પણ બનાવી શકો છો `--htm_conf`

ઉદાહરણ તરીકે:
```
i18n.site --htm_conf dist --save
```

અહીં `--save` અપડેટ રિલીઝ વર્ઝન નંબર રજૂ કરે છે.

## <a rel=id href="#npm" id="npm"></a> npmjs.com પર સામગ્રી પ્રકાશિત કરો

પર સામગ્રી પ્રકાશિત કરવી [npmjs.com](//npmjs.com) ભલામણ કરેલ ડિફોલ્ટ સોલ્યુશન છે (જુઓ [ફ્રન્ટ-એન્ડ હાઇ અવેલેબિલિટી](/i18n.site/feature#ha) ).

### npm & પોસ્ટ

`nodejs` ઇન્સ્ટોલ કરો, `npm login` સાથે લોગ ઇન કરો.

`md/.i18n/htm/main.yml` સંપાદિત કરો અને તમારા પોતાના `npm` પેકેજ નામ [npmjs.com](//npmjs.com) [`md:`](//github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/main.yml#L7) `YOUR_NPM_PACKAGE` ની કિંમત બદલો!

પછી `md/.i18n/htm/main.package.json` સંશોધિત કરો

અનુવાદ અને પ્રકાશિત કરવા માટે `md` ડિરેક્ટરીમાં `i18n.site --npm` અથવા `i18n.site -n` ચલાવો.

જો તમે પ્રકાશિત કરવા માટે સતત એકીકરણ પર્યાવરણનો ઉપયોગ કરો છો, તો `nodejs` ઇન્સ્ટોલ કરવાની જરૂર નથી. ફક્ત લૉગ-ઇન અને પ્રકાશન પરવાનગીઓ `~/.npmrc` પર્યાવરણમાં કૉપિ કરો.

જો તમે `main.yml` માં `v:` ના પેકેજના નામમાં ફેરફાર કરો છો, તો કૃપા કરીને **પહેલા `.i18n/v/main` કાઢી નાખવાની ખાતરી કરો** અને પછી તેને પ્રકાશિત કરો.

#### npm દ્વારા પ્રકાશિત પ્રોક્સી સર્વર

જો મેઇનલેન્ડ ચાઇનામાં વપરાશકર્તાઓ નેટવર્ક સમસ્યાઓનો સામનો કરે છે અને `npm` પેકેજો પ્રકાશિત કરવામાં અસમર્થ છે, તો તેઓ પ્રોક્સી સર્વરને ગોઠવવા માટે પર્યાવરણ ચલ `https_proxy` સેટ કરી શકે છે.

ધારી રહ્યા છીએ કે તમારું પ્રોક્સી સર્વર પોર્ટ `7890` છે, તમે લખી શકો છો:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

## સ્વ-હોસ્ટ કરેલ સામગ્રી

જો તમે સામગ્રીને સ્વ-હોસ્ટ કરવા માંગો છો, તો પહેલા `md/.i18n/htm/main.yml` સંપાદિત કરો અને `v: //unpkg.com/i18n.site` તમારા URL ઉપસર્ગમાં બદલો, જેમ કે `v: //i18n-v.xxx.com` .

`md` ડિરેક્ટરી દાખલ કરો અને ચલાવો

```
i18n.site --htm_conf ol --save
```

અથવા સંક્ષેપ

```
i18n.site -c ol -s
```

પછી, `md/out/main/v` ડિરેક્ટરીમાંની સામગ્રીને `v:` માં સેટ કરેલ URL ઉપસર્ગ પાથ પર ગોઠવો.

છેલ્લે, **`/.v` થી `1s` માં સમાપ્ત થતા પાથના કેશ સમયને ગોઠવો** , અન્યથા નવી પ્રકાશિત સામગ્રીને તરત જ ઍક્સેસ કરી શકાશે નહીં.

બિનજરૂરી વિનંતીઓને ઘટાડવા માટે અન્ય પાથ માટેનો કેશ સમય એક વર્ષ કે તેથી વધુ પર સેટ કરી શકાય છે.

## s3 પર સામગ્રી હોસ્ટ કરો

સ્વ-હોસ્ટ સામગ્રી માટે, તમારા પોતાના સર્વરનો ઉપયોગ કરવા ઉપરાંત, `S3` + `CDN` ઉપયોગ કરવાનો બીજો સામાન્ય વિકલ્પ છે.

[rclone](https://rclone.org) `S3` સર્વરમાં લૉગ ઇન કરવા માટે ઉપયોગ કરી શકો છો, પછી નીચેની સ્ક્રિપ્ટનો સંદર્ભ લો અને તેમાં ફેરફાર કરો, અને દરેક પ્રકાશન માટે માત્ર `S3` માં વધારાના ફેરફારોની નકલ કરો.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/main/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/main/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/main/v/.v "$s3:/$bucket/"
```

`CDN` રૂપરેખાંકિત કરવાનું યાદ રાખો જેથી કરીને `/.v` માં સમાપ્ત થતા પાથનો કેશ સમય `1s` છે, અન્યથા નવી પ્રકાશિત સામગ્રીને તરત જ એક્સેસ કરી શકાશે નહીં.

## વેબસાઇટ પ્રકાશિત કરો

વેબસાઇટ ગમે ત્યાં જમાવી શકાય છે [github page](https://pages.github.com) અને [cloudflare page](https://pages.cloudflare.com) સારી પસંદગીઓ છે.

કારણ કે વેબસાઇટ [સિંગલ-પેજ એપ્લિકેશન](https://developer.mozilla.org/docs/Glossary/SPA) આર્કિટેક્ચરનો ઉપયોગ કરે છે, URL પાથને ફરીથી લખવાનું યાદ રાખો જેમાં `. ` થી `index.html` ન હોય.

વેબસાઈટ એન્ટ્રી પેજને માત્ર એક જ વાર જમાવવાની જરૂર છે, અને અનુગામી સામગ્રી અપડેટ્સ માટે વેબસાઈટ એન્ટ્રી પેજને ફરીથી જમાવવાની જરૂર નથી.

### ગીથબ પૃષ્ઠ પર જમાવટ કરો

સંસ્થા `i18n-demo` [માટે પ્રથમ github ક્લિક કરો](https://github.com/account/organizations/new?plan=free) .

પછી આ સંસ્થા હેઠળ વેરહાઉસ `i18n-demo.github.io` બનાવો (કૃપા કરીને `i18n-demo` તમે બનાવેલ સંસ્થાના નામથી બદલો):

![](https://p.3ti.site/1721098657.avif)

અગાઉના લેખમાં સામગ્રી પ્રકાશિત કરતી વખતે, `out/main/htm` જનરેટ કરવામાં આવ્યું છે, કૃપા કરીને આ ડિરેક્ટરી દાખલ કરો અને ચલાવો :

```
ln -s index.html 404.html
```


કારણ કે `github page` URL પાથ રિરાઇટિંગને સપોર્ટ કરતું નથી, તેના બદલે `404.html` ઉપયોગ થાય છે.

પછી `htm` ડિરેક્ટરીમાં નીચેનો આદેશ ચલાવો (તમારા પોતાના વેરહાઉસ સરનામાં સાથે `i18n-demo/i18n-demo.github.io.git` બદલવાનું યાદ રાખો) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

કોડને પુશ કર્યા પછી, તમે તેને ઍક્સેસ કરી શકો તે પહેલાં `github page` ની જમાવટ સફળતાપૂર્વક ચાલે તેની રાહ જુઓ (નીચે બતાવ્યા પ્રમાણે).

<img src="//p.3ti.site/1721116586.avif" width="350px">

ડેમો પૃષ્ઠ માટે કૃપા કરીને જુઓ:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

### ક્લાઉડફ્લેર પેજ પર જમાવો

[cloudflare page](//pages.cloudflare.com) `github page`

`cloudflare page` ની જમાવટ સામાન્ય રીતે ઉપરના `github page` ની જમાવટ પર આધારિત છે.

એક પ્રોજેક્ટ બનાવો અને ઉપરના `i18n-demo.github.io` વેરહાઉસને બાંધો.

પ્રક્રિયા નીચેની આકૃતિમાં બતાવવામાં આવી છે:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

સંસ્થા `i18n-demo` ને ઍક્સેસ આપવા માટે કૃપા કરીને `Add Account` પર ક્લિક કરો.

જો તમે અન્ય સંસ્થાના વેરહાઉસને બંધાયેલું હોય, તો નવી સંસ્થા પ્રદર્શિત થાય તે પહેલાં તમારે બે વાર અધિકૃત કરવા માટે `Add Account` પર બે વાર ક્લિક કરવાની જરૂર પડી શકે છે.

![](https://p.3ti.site/1721118306.avif)

આગળ, વેરહાઉસ `i18n-demo.github.io` પસંદ કરો, પછી `Begin setup` પર ક્લિક કરો અને અનુગામી પગલાં માટે ડિફોલ્ટ મૂલ્યોનો ઉપયોગ કરો.

![](https://p.3ti.site/1721118490.avif)

પ્રથમ વખત બાંધ્યા પછી, તમે તેને ઍક્સેસ કરી શકો તે પહેલાં તમારે થોડીવાર રાહ જોવી પડશે.

જમાવટ પછી, તમે કસ્ટમ ડોમેન નામ બાંધી શકો છો.

![](https://p.3ti.site/1721119459.avif)

કસ્ટમ ડોમેન નામને બંધનકર્તા કર્યા પછી, કૃપા કરીને નીચે બતાવ્યા પ્રમાણે, સિંગલ-પેજ એપ્લિકેશનના પાથ પુનઃલેખનને ગોઠવવા માટે ડોમેન નામ પર જાઓ:

![](https://p.3ti.site/1721119320.avif)

ઉપરોક્ત ચિત્રમાંના `i18n.site` નીચે મુજબ છે.

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

વધુમાં, કૃપા કરીને નીચે બતાવ્યા પ્રમાણે કેશ નિયમોને ગોઠવો અને કેશની અવધિ એક મહિના પર સેટ કરો.

![](https://p.3ti.site/1721125111.avif)

કૃપા કરીને ઉપરના ચિત્રમાં બીજા પગલામાં મેળ ખાતા ડોમેન નામને તમે બંધાયેલા ડોમેન નામમાં બદલો.

### મેઇનલેન્ડ ચાઇનામાં વેબસાઇટ જમાવટને ઑપ્ટિમાઇઝ કરી રહ્યું છે

જો તમે મેઇનલેન્ડ ચાઇનાના નેટવર્ક વાતાવરણમાં વધુ સારી ઍક્સેસિબિલિટી પ્રદર્શન મેળવવા માંગતા હો, તો કૃપા કરીને પહેલા [ડોમેન નામની નોંધણી કરો](//beian.aliyun.com) .

પછી, મેઇનલેન્ડ + ક્લાઉડ વિક્રેતાઓના ઑબ્જેક્ટ સ્ટોરેજનો ઉપયોગ કરો `CDN` નીચેની સામગ્રીનો ઉપયોગ કરો `out/main/htm` .

તમે સિંગલ-પેજ એપ્લિકેશન્સને અનુકૂલિત કરવા માટે પાથને ફરીથી લખવા માટે એજ કમ્પ્યુટિંગનો ઉપયોગ કરી શકો છો, ઉદાહરણ તરીકે, [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) આ રીતે ગોઠવી શકાય છે:

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
  // તમે આઉટપુટને ડીબગ કરવા માટે પ્રતિભાવ હેડરને સેટ કરી શકો છો, જેમ કે out.XXX = 'MSG';
})
```

![](https://p.3ti.site/1721121273.avif)

કારણ કે રેકોર્ડ `MX` અને રેકોર્ડ `CNAME` એક સાથે રહી શકતા નથી, જો તમે એક જ સમયે ડોમેન નામ ઇમેઇલ્સ પ્રાપ્ત કરવા માંગતા હો, [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) તમારે રેકોર્ડ `A` માં લેવલ `CNAME` માટે સ્ક્રિપ્ટ સાથે સહકાર કરવાની જરૂર છે.

વધુમાં, કારણ કે મેઇનલેન્ડ ચીનમાં ક્લાઉડ વિક્રેતાઓના વિદેશી ટ્રાફિક શુલ્ક પ્રમાણમાં ખર્ચાળ છે, જો તમે ખર્ચને ઑપ્ટિમાઇઝ કરવા માંગતા હો, [DNS તમે હાંસલ કરવા માટે Huawei Cloud ના મફત ભૌગોલિક રીઝોલ્યુશન](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) અને [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) નું કસ્ટમ ડોમેન નામ (નીચે બતાવ્યા પ્રમાણે) નો ઉપયોગ કરી શકો છો ટ્રાફિક ડાયવર્ઝન──મેઇનલેન્ડ ચાઇના બાયડુ ક્લાઉડ `CDN` માં ટ્રાફિક રૂટિંગ , આંતરરાષ્ટ્રીય ટ્રાફિક cloudflare જાય છે.

![](https://p.3ti.site/1721119788.avif)

આ ડિપ્લોયમેન્ટ ઓપ્ટિમાઇઝેશન સોલ્યુશન્સ વધુ જટિલ છે અને ભવિષ્યમાં અલગ પ્રકરણોમાં રજૂ કરવામાં આવશે.

### સામાન્ય ડોમેન નામ રીડાયરેક્શન

જો તમે તમારી મુખ્ય વેબસાઈટ તરીકે વેબસાઈટ જનરેટ કરવા માટે `i18n.site` ઉપયોગ કરો છો, તો તમારે સામાન્ય રીતે પાન-ડોમેન રીડાયરેક્શનને રૂપરેખાંકિત કરવાની જરૂર છે, એટલે કે, `*.xxx.com` ( `www.xxx.com` સહિત) થી `xxx.com` સુધી રીડાયરેક્ટ એક્સેસ.

આ જરૂરિયાત Alibaba Cloud `CDN` `EdgeScript` ( [અંગ્રેજી દસ્તાવેજ](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [ચાઇનીઝ દસ્તાવેજ](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ) ની મદદથી પ્રાપ્ત કરી શકાય છે.

[CDN ક્લાઉડમાં](https://cdn.console.aliyun.com/domain/list) ડોમેન નામ ઉમેરો અને અલીબાબા ક્લાઉડ `CDN` માં ડોમેન નામ `*.xxx.com` `CNAME` દર્શાવો.

![](https://p.3ti.site/1721122000.avif)

ઉદાહરણ તરીકે, ઉપરના ચિત્રમાં `*.i18n.site` નું પાન-ડોમેન નામ રીડાયરેક્શન કન્ફિગરેશન નીચે મુજબ છે:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

### nginx સાથે જમાવટ કરો

કૃપા કરીને તમારા પોતાના પ્રોજેક્ટ `out/main/htm` ના પાથમાં `server` `/root/i18n/md/out/main/htm` બદલો nginx

```
location / {
  root  /root/i18n/md/out/main/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

## `github action` સતત એકીકરણ પર આધારિત

તમે તમારા `github action` ગોઠવવા માટે નીચેનાનો સંદર્ભ લઈ શકો છો:

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

રૂપરેખાંકનમાં જોઈ શકાય છે તેમ, શાખા `main` અને શાખા `dist` પર દબાણ કરતી વખતે આ વર્કફ્લો ટ્રિગર થાય છે.

વર્કફ્લો દસ્તાવેજને પ્રકાશિત કરવા માટે શાખાના નામને અનુરૂપ રૂપરેખાંકન ફાઇલનો ઉપયોગ કરશે, અહીં `.i18n/htm/main.yml` અને `.i18n/htm/dist.yml` ઉપયોગ અનુક્રમે પ્રકાશન ગોઠવણી તરીકે કરવામાં આવશે.

અમે દસ્તાવેજ પ્રકાશન પ્રક્રિયા માટે નીચેની શ્રેષ્ઠ પદ્ધતિઓની ભલામણ કરીએ છીએ:

જ્યારે ફેરફારોને શાખા `main` પર ધકેલવામાં આવે છે, ત્યારે દસ્તાવેજને પૂર્વાવલોકન સ્ટેશન (પૂર્વાવલોકન સ્ટેશન ઉપલબ્ધ છે [github page](//pages.github.com) ) પર બાંધવામાં અને તૈનાત કરવા માટે ટ્રિગર કરવામાં આવે છે.

પૂર્વાવલોકન સાઇટ પર દસ્તાવેજ સાચો છે તેની પુષ્ટિ કર્યા પછી, કોડને મર્જ કરવામાં આવશે અને શાખા `dist` પર ધકેલવામાં આવશે, અને સત્તાવાર બિલ્ડ અને જમાવટ ઓનલાઇન થશે.

અલબત્ત, ઉપરોક્ત પ્રક્રિયાના અમલીકરણ માટે વધુ રૂપરેખાંકનો લખવાની જરૂર છે.

વર્કફ્લો સ્ક્રિપ્ટીંગ માટે તમે વાસ્તવિક પ્રોજેક્ટનો સંદર્ભ લઈ શકો છો [github.com/fcdoc/doc](//github.com/fcdoc/doc/blob/main/.github/workflows/i18n.site.yml)

રૂપરેખાંકનમાં `secrets.I18N_SITE_TOKEN` અને `secrets.NPM_TOKEN` માટે તમારે કોડ બેઝમાં ગુપ્ત ચલોને ગોઠવવાની જરૂર છે.

![](//p.3ti.site/1730970199.avif)

`I18N_SITE_TOKEN` [i18n.site/token](//i18n.site/token)

રૂપરેખાંકનમાં `NPM_TOKEN` એ પબ્લિશિંગ ટોકન `npm` [npmjs.com](//npmjs.com) પ્રકાશિત કરવાની પરવાનગી સાથે ટોકન બનાવો.

![](//p.3ti.site/1730969906.avif)


## ડિરેક્ટરી માળખું

### `public`

વેબસાઇટની સ્થિર ફાઇલો, જેમ કે `favicon.ico` , `robots.txt` , વગેરે.

અહીં આઇકોન ફાઇલો સાથે જનરેટ કરી શકાય છે [realfavicongenerator.net](https://realfavicongenerator.net)

### `.i18n`

`.i18n` ડિરેક્ટરી હેઠળ `i18n.site` ની રૂપરેખાંકન ફાઈલો, અનુવાદ કેશ વગેરે છે. વિગતો માટે આગળનું પ્રકરણ ["કન્ફિગરેશન"](/i18n.site/conf) જુઓ.

### `en`

સ્ત્રોત ભાષા નિર્દેશિકા, `.i18n/conf.yml` રૂપરેખાંકન ફાઇલમાં `fromTo` માંથી `en` ને અનુરૂપ

```yaml
i18n:
  fromTo:
    en: zh
```

કૃપા કરીને અનુવાદની ગોઠવણીનો સંદર્ભ લો [i18](/i18/use)