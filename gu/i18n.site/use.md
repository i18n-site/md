# સ્થાપિત કરો &

## રૂપરેખાંકન ટોકન

`i18` અનુવાદ સાધન એમ્બેડ કરેલ છે `i18n.site` [ઍક્સેસ ટોકન ગોઠવવા માટે કૃપા કરીને `i18` દસ્તાવેજનો સંદર્ભ લેવા માટે અહીં ક્લિક કરો](/i18/use) .

## ઇન્સ્ટોલ કરો

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## ડેમો પ્રોજેક્ટ

ચાલો ડેમો પ્રોજેક્ટ સાથે પ્રારંભ કરીએ અને તેનો ઉપયોગ કેવી રીતે કરવો તે શીખીએ `i18n.site`

અમે પ્રથમ ડેમો રિપોઝીટરીને ક્લોન કરીએ છીએ અને નીચે પ્રમાણે આદેશ ચલાવીએ છીએ:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

મેઇનલેન્ડ ચાઇનાના વપરાશકર્તાઓ આ કરી શકે છે:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

`docker` સાથે સ્થાનિક પૂર્વાવલોકનને સરળ બનાવવા માટે કોડ બેઝ ક્લોનનું ડિરેક્ટરી નામ `md` હોવું આવશ્યક છે `demo.i18n.site`

### અનુવાદ

પ્રથમ, `md` દાખલ કરો અને `i18n.site` ચલાવો, જે `en` `zh` અનુવાદ કરશે.

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

ચાલ્યા પછી, અનુવાદ અને કેશ ફાઇલો જનરેટ કરવામાં આવશે, કૃપા કરીને તેમને `md` `git add . ` માં ઉમેરવાનું યાદ રાખો.

### સ્થાનિક પૂર્વાવલોકન

ઇન્સ્ટોલ કરો અને શરૂ `docker` ( `MAC` `docker` ના રનટાઇમ તરીકે ઉપયોગ [orbstack](https://orbstack.dev) ભલામણ કરે છે).

પછી, `docker` દાખલ કરો અને `./up.sh` ચલાવો, અને પછી સ્થાનિક રીતે પૂર્વાવલોકન કરવા માટે મુલાકાત લો [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### સામગ્રી પોસ્ટ કરો

[એક-પૃષ્ઠ એપ્લિકેશન](https://developer.mozilla.org/docs/Glossary/SPA) આર્કિટેક્ચર અપનાવે છે, અને વેબસાઇટ પ્રવેશ પૃષ્ઠ અને વેબસાઇટ સામગ્રી સ્વતંત્ર રીતે ગોઠવવામાં આવે છે `i18n.site`

ઉપરોક્ત અનુવાદ ચલાવ્યા પછી, `md/out/dev` `htm` અને `v` ડિરેક્ટરીઓ જનરેટ થશે.

અહીં `dev` સૂચવે છે કે તે `.i18n/htm/dev.yml` ફાઇલ પર આધારિત છે.

વિષયવસ્તુ : `dev`

`htm` હેઠળ વેબસાઇટ પ્રવેશ પૃષ્ઠ છે.

`v` વર્ઝન નંબર સાથે વેબસાઇટની સામગ્રી છે.

સ્થાનિક પૂર્વાવલોકન વર્ઝન નંબરને ધ્યાનમાં લીધા વિના `out/dev/v/0.1.0`

અધિકૃત પ્રકાશન માટે, બદલાયેલ ફાઇલોને નવા સંસ્કરણ નંબર નિર્દેશિકામાં કૉપિ કરવામાં આવશે.

#### રૂપરેખાંકન ફાઈલ સ્પષ્ટ કરવા માટે -c નો ઉપયોગ કરો

વિવિધ રૂપરેખાંકન ફાઇલો `out` હેઠળ અનુરૂપ ડિરેક્ટરીઓ બનાવશે.

ઉદાહરણ તરીકે `.i18n/htm/ol.yml` એક `out/ol` ડિરેક્ટરી બનાવશે.

`dev.yml` `ol.yml` મૂળભૂત રૂપરેખાંકનો છે.

`dev` એ `development` નું સંક્ષેપ છે, જે વિકાસ પર્યાવરણનું પ્રતિનિધિત્વ કરે છે, તેનો ઉપયોગ સ્થાનિક પૂર્વાવલોકન માટે થાય છે, અને તે મૂળભૂત રૂપરેખાંકન ફાઇલ પણ છે.
`online` નું સંક્ષેપ `ol` , જે ઓનલાઈન પર્યાવરણનું પ્રતિનિધિત્વ કરે છે, તેનો ઉપયોગ અધિકૃત પ્રકાશન માટે થાય છે, અને તે ડિફોલ્ટ રૂપરેખાંકન ફાઈલ પણ છે જ્યારે `npm` આદેશ વાક્ય પરિમાણ `-n` નો ઉપયોગ કરીને પ્રકાશિત થાય છે.

તમે રૂપરેખાંકન ફાઇલનું નામ સ્પષ્ટ કરવા માટે આદેશ `--htm_conf` પર અન્ય રૂપરેખાંકન ફાઇલો પણ બનાવી શકો છો:

દાખ્લા તરીકે:
```
i18n.site --htm_conf yourConfig --save
```

`--save` અપડેટ રીલીઝ વર્ઝન નંબર દર્શાવે છે.

#### <a rel=id href="#npm" id="npm"></a> npmjs.com પર સામગ્રી પ્રકાશિત કરો

[npmjs.com](//npmjs.com) સામગ્રી પ્રકાશિત કરવી એ ભલામણ કરેલ ડિફોલ્ટ સોલ્યુશન છે (જુઓ [ફ્રન્ટ-એન્ડ હાઇ અવેલેબિલિટી](/i18n.site/feature#ha) ).

##### npm login &

ઇન્સ્ટોલ કરો `nodejs` લોગ ઇન કરવા માટે `npm login` ઉપયોગ કરો.

સંપાદિત કરો `md/.i18n/htm/ol.yml` `i18n.site` માં `v: //unpkg.com/i18n.site` ને તમારા પોતાનામાં બદલો `npm` પેકેજ નામ.

પર ફક્ત અવ્યવસ્થિત પેકેજ નામનો ઉપયોગ કરો [npmjs.com](//npmjs.com)

`npm` પર આધારિત પ્રકાશિત કરતી વખતે, `v:` મૂલ્યના ઉપસર્ગ તરીકે **`//unpkg.com/` ઉપયોગ કરવાનું સુનિશ્ચિત કરો** `i18n.site` આ ઉપસર્ગ પાથ હેઠળ `/.v` નવા પ્રકાશનોને સમયસર જોવાને સક્ષમ કરવા માટે ખાસ ઑપ્ટિમાઇઝ કરવામાં આવ્યું છે.

અનુવાદ અને પ્રકાશિત કરવા માટે `md` `i18n.site --npm` અથવા `i18n.site -n` ચલાવો.

જો તમે પ્રકાશિત કરવા માટે સતત એકીકરણ પર્યાવરણનો ઉપયોગ કરો છો, તો તેને ઇન્સ્ટોલ કરવાની જરૂર નથી `nodejs` ફક્ત લૉગ-ઇન અને પ્રકાશિત પરવાનગી `~/.npmrc` પર્યાવરણમાં કૉપિ કરો.

જો તમે `v:` in `ol.yml` માં પેકેજનું નામ સંશોધિત કરો છો, તો કૃપા કરીને **પહેલા `.i18n/v/ol` કાઢી નાખવાની ખાતરી કરો** અને પછી તેને પ્રકાશિત કરો.

##### npm દ્વારા પ્રકાશિત પ્રોક્સી સર્વર

જો મેઇનલેન્ડ ચાઇનામાં વપરાશકર્તાઓ નેટવર્ક સમસ્યાઓનો સામનો કરે છે અને `npm` પ્રકાશિત કરવામાં અસમર્થ છે, તો તેઓ પ્રોક્સી સર્વરને ગોઠવવા માટે પર્યાવરણ ચલ `https_proxy` સેટ કરી શકે છે.

ધારી રહ્યા છીએ કે તમારું પ્રોક્સી સર્વર પોર્ટ છે `7890` તમે લખી શકો છો:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### સ્વ-હોસ્ટ કરેલ સામગ્રી

જો તમે સામગ્રીને સ્વ-હોસ્ટ કરવા માંગો છો, તો પહેલા સંપાદિત `md/.i18n/htm/ol.yml` અને `v: //unpkg.com/i18n.site` તમારા URL ઉપસર્ગમાં બદલો, જેમ કે `v: //i18n-v.xxx.com` .

`md` દાખલ કરો અને ચલાવો

```
i18n.site --htm_conf ol --save
```

અથવા સંક્ષેપ

```
i18n.site -c ol -s
```

પછી, `md/out/ol/v` સામગ્રીને `v:` માં સેટ કરેલ URL ઉપસર્ગ પર ગોઠવો.

છેલ્લે, **`1s` `/.v` સમાપ્ત થતા પાથનો કેશ સમય રૂપરેખાંકિત કરો** , અન્યથા નવી પ્રકાશિત સામગ્રીને તરત જ એક્સેસ કરી શકાશે નહીં.

બિનજરૂરી વિનંતીઓને ઘટાડવા માટે અન્ય પાથ માટેનો કેશ સમય એક વર્ષ કે તેથી વધુ પર સેટ કરી શકાય છે.

##### s3 પર સામગ્રી હોસ્ટ કરો

સ્વ-યજમાન સામગ્રી માટે + તમારા પોતાના સર્વરનો ઉપયોગ કરવા ઉપરાંત, અન્ય સામાન્ય વિકલ્પ `CDN` `S3`

તમે [rclone](https://rclone.org) `S3` ઉપયોગ કરી શકો છો, પછી નીચેની સ્ક્રિપ્ટનો સંદર્ભ લો અને તેને સંશોધિત કરી શકો છો, અને જ્યારે તમે પ્રકાશિત કરો છો ત્યારે માત્ર `S3` માં વધારાના ફેરફારોની નકલ કરો.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

રૂપરેખાંકિત કરવાનું યાદ રાખો `CDN` જેથી કરીને `/.v` માં સમાપ્ત થતા પાથનો કેશ સમય `1s` છે, અન્યથા તમે તરત જ પ્રકાશિત થયેલ સામગ્રીને ઍક્સેસ કરી શકશો નહીં.

### વેબસાઇટ પ્રકાશિત કરો

વેબસાઇટ ગમે ત્યાં જમાવી શકાય છે [github page](https://pages.github.com) અને [cloudflare page](https://pages.cloudflare.com) સારી પસંદગીઓ છે.

કારણ કે વેબસાઈટ [સિંગલ-પેજ એપ્લિકેશનના](https://developer.mozilla.org/docs/Glossary/SPA) આર્કિટેક્ચરને અપનાવે છે, તે URL પાથને ફરીથી લખવાનું યાદ રાખો જેમાં `index.html` `. `

વેબસાઈટ એન્ટ્રી પેજને માત્ર એક જ વાર જમાવવાની જરૂર છે, અને અનુગામી સામગ્રી અપડેટ્સ માટે વેબસાઈટ એન્ટ્રી પેજને ફરીથી જમાવવાની જરૂર નથી.

#### ગીથબ પૃષ્ઠ પર જમાવટ કરો

[સંસ્થા બનાવવા માટે પ્રથમ અહીં ક્લિક github](https://github.com/account/organizations/new?plan=free) `i18n-demo`

પછી આ `i18n-demo.github.io` હેઠળ વેરહાઉસ બનાવો (કૃપા કરીને `i18n-demo` તમે બનાવેલ સંસ્થાના નામથી બદલો):

<img alt="" src="https://p.3ti.site/1721098657.avif">

અગાઉના લેખમાં સામગ્રી પ્રકાશિત કરતી વખતે, તે જનરેટ કરવામાં આવી છે `out/ol/htm` કૃપા કરીને આ ડિરેક્ટરી દાખલ કરો અને ચલાવો :

```
ln -s index.html 404.html
```


કારણ `github page` URL પાથ પુનઃલેખનને સમર્થન આપતું નથી, તેથી તેના બદલે `404.html` ઉપયોગ થાય છે.

પછી `htm` નીચેનો આદેશ ચલાવો (તમારા પોતાના વેરહાઉસ એડ્રેસ સાથે `i18n-demo/i18n-demo.github.io.git` બદલવાનું યાદ રાખો) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

કોડને પુશ કર્યા પછી, `github page` જમાવટ સફળતાપૂર્વક ચાલે તેની રાહ જુઓ (નીચે બતાવ્યા પ્રમાણે), અને પછી તમે તેને ઍક્સેસ કરી શકો છો.

<img src="//p.3ti.site/1721116586.avif" width="350px">

ડેમો પૃષ્ઠ માટે કૃપા કરીને જુઓ:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### ક્લાઉડફ્લેર પેજ પર જમાવો

[cloudflare page](//pages.cloudflare.com) `github page` તુલનામાં, તે પાથ પુનઃલેખન પ્રદાન કરે છે અને તે મુખ્ય ભૂમિ ચીન માટે વધુ અનુકૂળ છે અને તેનો ઉપયોગ કરવાની ભલામણ કરવામાં આવે છે.

જમાવટ સામાન્ય `cloudflare page` ઉપરના `github page` ની જમાવટ પર આધારિત હોય છે.

એક પ્રોજેક્ટ બનાવો અને `i18n-demo.github.io` વેરહાઉસ બાંધો.

પ્રક્રિયા નીચેની આકૃતિમાં બતાવવામાં આવી છે:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

`i18n-demo` સંસ્થાને ઍક્સેસ આપવા માટે કૃપા કરીને ક્લિક કરો `Add Account`

જો તમે બીજી સંસ્થાના વેરહાઉસને બંધ કરી દીધું હોય, તો નવી સંસ્થા પ્રદર્શિત થાય તે પહેલાં તમારે તેને બે વાર અધિકૃત કરવા માટે બે વાર ક્લિક કરવાની જરૂર પડી શકે છે `Add Account`

<img alt="" src="https://p.3ti.site/1721118306.avif">

આગળ `i18n-demo.github.io` પસંદ કરો, પછી `Begin setup` પર ક્લિક કરો અને અનુગામી પગલાં માટે ડિફોલ્ટ મૂલ્યોનો ઉપયોગ કરો.

<img alt="" src="https://p.3ti.site/1721118490.avif">

પ્રથમ વખત બાંધ્યા પછી, તમે તેને ઍક્સેસ કરી શકો તે પહેલાં તમારે થોડીવાર રાહ જોવી પડશે.

જમાવટ પછી, તમે કસ્ટમ ડોમેન નામ બાંધી શકો છો.

<img alt="" src="https://p.3ti.site/1721119459.avif">

કસ્ટમ ડોમેન નામને બંધનકર્તા કર્યા પછી, કૃપા કરીને નીચે બતાવ્યા પ્રમાણે, સિંગલ-પેજ એપ્લિકેશનના પાથ પુનઃલેખનને ગોઠવવા માટે ડોમેન નામ પર જાઓ:

<img alt="" src="https://p.3ti.site/1721119320.avif">

ઉપરના ચિત્રમાંના નિયમો નીચે મુજબ છે `i18n.site`

```
(http.host in {"i18n.site"}) and not (
ends_with(http.request.uri.path,".html") or
ends_with(http.request.uri.path,".htm") or
ends_with(http.request.uri.path,".ico") or
ends_with(http.request.uri.path,".js") or
ends_with(http.request.uri.path,".avif") or
ends_with(http.request.uri.path,".css") or
ends_with(http.request.uri.path,".json") or
ends_with(http.request.uri.path,".png") or
ends_with(http.request.uri.path,".svg") or
ends_with(http.request.uri.path,".txt") or
ends_with(http.request.uri.path,".webmanifest") or
ends_with(http.request.uri.path,".xml")
)
```

વધુમાં, કૃપા કરીને નીચે બતાવ્યા પ્રમાણે કેશ નિયમોને ગોઠવો અને કેશની અવધિ એક મહિના પર સેટ કરો.

<img alt="" src="https://p.3ti.site/1721125111.avif">

કૃપા કરીને ઉપરના ચિત્રમાં બીજા પગલામાં મેળ ખાતા ડોમેન નામને તમે બંધાયેલા ડોમેન નામમાં બદલો.

#### મેઇનલેન્ડ ચાઇનામાં વેબસાઇટ જમાવટને ઑપ્ટિમાઇઝ કરી રહ્યું છે

જો તમે મેઇનલેન્ડ ચાઇનાના નેટવર્ક વાતાવરણમાં વધુ સારી ઍક્સેસિબિલિટી પ્રદર્શન મેળવવા માંગતા હો, તો કૃપા કરીને પહેલા [ડોમેન નામ રજીસ્ટર કરો](//beian.aliyun.com) .

`out/ol/htm` , મેઇનલેન્ડ ચાઇનામાં ક્લાઉડ વિક્રેતાઓના ઑબ્જેક્ટ સ્ટોરેજનો ઉપયોગ `CDN` +

તમે એજ કમ્પ્યુટિંગનો ઉપયોગ સિંગલ-પેજ એપ્લીકેશનને અનુકૂલિત કરવા માટે પાથને ફરીથી લખવા માટે કરી શકો છો, જેમ કે [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) તેને આ રીતે ગોઠવી શકાય છે:

```js
var uri=r.uri,p=uri.lastIndexOf('.');
if(
  p<0 || !'|avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml|'.includes('|'+uri.slice(p+1)+'|')
){
  r.uri='/index.html'
}
r.respHeader(()=>{
var t = [];
r.rawHeadersOut.forEach((i)=>{
    var out = r.headersOut;
    var key = i[0].toLowerCase();
    if(key.startsWith('x-')||key.startsWith('ohc-')){
        delete out[key]
    }
    out['Cache-Control']='max-age='+9e5;
    ['Content-MD5','Age','Expires','Last-Modified'].forEach((i)=>delete out[i])
})
})
```
<img alt="" src="https://p.3ti.site/1721121273.avif">

કારણ `MX` રેકોર્ડ્સ અને `CNAME` રેકોર્ડ્સ એક સાથે રહી શકતા નથી, જો તમે એક જ સમયે ડોમેન નામ ઇમેઇલ્સ પ્રાપ્ત કરવા માંગો છો, તો તમારે `CNAME` `A` રેકોર્ડમાં ફ્લેટ કરવા માટે [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten)

વધુમાં, કારણ કે મેઇનલેન્ડ ચીનમાં ક્લાઉડ વિક્રેતાઓના વિદેશી ટ્રાફિક શુલ્ક પ્રમાણમાં ખર્ચાળ છે, જો તમે ખર્ચને ઑપ્ટિમાઇઝ કરવા માંગતા હો, તો તમે હાંસલ કરવા માટે [Huawei DNS ના મફત ભૌગોલિક રીઝોલ્યુશન](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) અને [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) નું કસ્ટમ ડોમેન નામ (નીચે બતાવ્યા પ્રમાણે) નો ઉપયોગ કરી શકો છો ટ્રાફિક ડાયવર્ઝન──મેઇનલેન્ડ ચાઇના બાયડુ ક્લાઉડમાં `CDN` આંતરરાષ્ટ્રીય ટ્રાફિક cloudflare જાય છે.

<img alt="" src="https://p.3ti.site/1721119788.avif">

આ ડિપ્લોયમેન્ટ ઓપ્ટિમાઇઝેશન સોલ્યુશન્સ વધુ જટિલ છે અને ભવિષ્યમાં અલગ પ્રકરણોમાં રજૂ કરવામાં આવશે.

#### સામાન્ય ડોમેન નામ રીડાયરેક્શન

જો તમે તમારી મુખ્ય વેબસાઇટ તરીકે વેબસાઇટ જનરેટ કરવા માટે ઉપયોગ કરો `i18n.site` , તો તમારે સામાન્ય રીતે પાન-ડોમેન રીડાયરેક્શનને ગોઠવવાની જરૂર છે, એટલે કે `*.xxx.com` ( `www.xxx.com` સહિત) ની `xxx.com`

આ જરૂરિયાત અલીબાબા ક્લાઉડના `EdgeScript` ( [અંગ્રેજી દસ્તાવેજ](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [ચાઈનીઝ દસ્તાવેજ](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ) ની મદદથી પ્રાપ્ત કરી શકાય છે `CDN`

[અલીબાબા CDN](https://cdn.console.aliyun.com/domain/list) ડોમેન નામ ઉમેરો અને ડોમેન `*.xxx.com` અલીબાબા ક્લાઉડ `CDN` 's `CNAME` પર નિર્દેશિત કરો.

<img alt="" src="https://p.3ti.site/1721122000.avif">

ઉદાહરણ તરીકે, ઉપરના ચિત્રમાં નું પાન-ડોમેન નામ રીડાયરેક્શન રૂપરેખાંકન `*.i18n.site` મુજબ છે:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### nginx સાથે જમાવટ કરો

`server` નીચે આપેલ જેવું રૂપરેખાંકન ઉમેરો nginx જ્યાં `/root/i18n/md/out/ol/htm` કૃપા કરીને તેને તમારા પોતાના પ્રોજેક્ટના પાથમાં બદલો `out/ol/htm` :

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### ડિરેક્ટરી માળખું

#### જાહેર

વેબસાઇટની સ્થિર ફાઇલો, જેમ કે `favicon.ico` `robots.txt` , વગેરે.

અહીં આઇકોન ફાઇલો સાથે જનરેટ કરી શકાય છે [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n

ડિરેક્ટરી હેઠળ `i18n.site` ની રૂપરેખાંકન ફાઇલો, અનુવાદ કેશ વગેરે છે `.i18n` વિગતો માટે આગળનું પ્રકરણ ["કન્ફિગરેશન"](/i18n.site/conf) જુઓ.

#### en

સોર્સ લેંગ્વેજ ડિરેક્ટરી, રૂપરેખાંકન ફાઈલમાં `fromTo` `en` `.i18n/conf.yml` અનુરૂપ

```yaml
i18n:
  fromTo:
    en: zh
```

કૃપા કરીને અનુવાદની ગોઠવણીનો સંદર્ભ લો [i18](/i18/use)

