# સર્ચ એન્જિન ઓપ્ટિમાઇઝેશન (SEO)

## સિદ્ધાંત

`i18n.site` નોન-રિફ્રેશ સિંગલ પેજ આર્કિટેક્ચરને અપનાવે છે જેથી શોધ ઈન્ડેક્સીંગને સરળ બનાવવા માટે, ક્રોલર્સ માટે એક અલગ સ્ટેટિક પેજ અને `sitemap.xml` જનરેટ કરવામાં આવશે.

જ્યારે સર્ચ એન્જિન ક્રાઉલર દ્વારા એક્સેસ વિનંતીમાંથી `User-Agent` નો ઉપયોગ કરવામાં આવે છે, ત્યારે વિનંતીને `302` દ્વારા સ્થિર પૃષ્ઠ પર રીડાયરેક્ટ કરવામાં આવશે.

સ્થિર પૃષ્ઠો પર, આ પૃષ્ઠના વિવિધ ભાષા સંસ્કરણોની લિંક્સ સૂચવવા માટે `link` ઉપયોગ કરો, જેમ કે :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## સ્થાનિક nginx રૂપરેખાંકન

ઉદાહરણ તરીકે ડેમો પ્રોજેક્ટમાં `.i18n/htm/main.yml` રૂપરેખાંકન ફાઇલ લો

```yml
host: i18n-demo.github.io
seo: true
out:
  - fs

pkg:
  i: i18n.site
  md: i18n.site

cdn:
  v:
  jsd:
```

કૃપા કરીને પહેલા તમારા ડોમેન નામમાં ઉપરના `host:` નું મૂલ્ય સંશોધિત કરો, જેમ કે `xxx.com` .

પછી, `i18n.site -n` , સ્ટેટિક પેજ `out/main/htm` ડિરેક્ટરીમાં જનરેટ થશે.

અલબત્ત, તમે અન્ય રૂપરેખાંકન ફાઇલોને પણ સક્ષમ કરી શકો છો, જેમ કે પ્રથમ `.i18n/htm/dist.package.json` અને `.i18n/htm/dist.yml` બનાવવા માટે `main` ના રૂપરેખાંકનનો સંદર્ભ લેવો.

પછી `i18n.site -n -c dist` ચલાવો જેથી સ્ટેટિક પેજ `out/dist/htm` પર જનરેટ થશે.

નીચેના રૂપરેખાંકનનો સંદર્ભ લઈને `nginx` સેટ કરી શકાય છે.

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# સર્વર વર્કર સ્ક્રિપ્ટ્સને ખૂબ લાંબા સમય સુધી કેશ કરશો નહીં
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# અન્ય સ્થિર સંસાધનો માટે લાંબા સમય સુધી કેશ સમય સેટ કરો
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# હોમપેજ એન્ટ્રી તરીકે ક્રાઉલર કઈ સ્ટેટિક ફાઇલનો ઉપયોગ કરે છે તે સેટ કરો
location = / {
  # $botLang ખાલી ન હોય, તો તેનો અર્થ સેટ ભાષા પાથ અનુસાર ક્રાઉલર એક્સેસ અને રીડાયરેકશન છે
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# સિંગલ પેજ એપ્લિકેશન કન્ફિગરેશન
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## સ્થિર ફાઇલો અપલોડ કરવા માટે ઑબ્જેક્ટ સ્ટોરેજને ગોઠવો

સ્થિર ફાઇલો સ્થાનિક રીતે જનરેટ કરી શકાય છે, પરંતુ વધુ સામાન્ય અભિગમ તેમને ઑબ્જેક્ટ સ્ટોરેજ પર અપલોડ કરવાનો છે.

ઉપર રૂપરેખાંકિત કરેલ `out` માં ફેરફાર કરો :

```
out:
  - s3
```

પછી, `~/.config/i18n.site.yml` સંપાદિત કરો અને નીચેનું રૂપરેખાંકન ઉમેરો :

```yml
site:
  i18n.site:
    s3:
      - endpoint: s3.eu-central-003.backblazeb2.com
        ak: # access key
        sk: # secret key
        bucket: # bucket name
        # region:
```

રૂપરેખાંકનમાં, કૃપા કરીને `i18n.site` `.i18n/htm/main.yml` માં `host:` ના મૂલ્યમાં બદલો, બહુવિધ ઑબ્જેક્ટ સ્ટોર્સ `s3` હેઠળ ગોઠવી શકાય છે, અને `region` ફીલ્ડ વૈકલ્પિક છે (ઘણા ઑબ્જેક્ટ સ્ટોર્સને આ ક્ષેત્ર સેટ કરવાની જરૂર નથી).

પછી પ્રોજેક્ટ પુનઃપ્રકાશિત કરવા માટે `i18n.site -n` ચલાવો.

જો તમે `~/.config/i18n.site.yml` માં ફેરફાર કર્યો છે અને ફરીથી અપલોડ કરવા માંગો છો, તો કૃપા કરીને અપલોડ કેશ સાફ કરવા માટે પ્રોજેક્ટ રૂટ ડિરેક્ટરીમાં નીચેના આદેશનો ઉપયોગ કરો :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## ક્લાઉડફ્લેર ગોઠવણી

ડોમેન નામ [cloudflare](//www.cloudflare.com)

### રૂપાંતર નિયમો

નીચે બતાવ્યા પ્રમાણે રૂપાંતરણ નિયમો ઉમેરો:

![](//p.3ti.site/1725436822.avif)

નિયમ કોડ નીચે મુજબ છે, કૃપા કરીને તમારા ડોમેન નામમાં કોડ "i18n.site" ને સંશોધિત કરો:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### કેશીંગ નિયમો

નીચે પ્રમાણે કેશ નિયમો ઉમેરો:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### રીડાયરેક્ટ નિયમો

નીચે પ્રમાણે રીડાયરેક્શન નિયમો સેટ કરો, કૃપા કરીને તમારા ડોમેન નામમાં કોડ "i18n.site" ને સંશોધિત કરો

![](//p.3ti.site/1725437096.avif)

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
) and (
http.user_agent wildcard "*bot*" or
http.user_agent wildcard "*spider*" or
http.user_agent wildcard "*facebookexternalhit*" or
http.user_agent wildcard "*slurp*" or
http.user_agent wildcard "curl*" or
http.user_agent wildcard "*InspectionTool*"
)
```

`URL redirect` ડાયનેમિક રીડાયરેક્શન પસંદ કરો, કૃપા કરીને રીડાયરેક્શન પાથ `concat("/en",http.request.uri.path,".htm")` માં `/en` ડિફૉલ્ટ ભાષામાં સંશોધિત કરો જેને તમે શોધ એંજીન શામેલ કરવા માંગો છો.

## Baidu બુદ્ધિશાળી ક્લાઉડ ગોઠવણી

જો તમારે મેઇનલેન્ડ ચીનમાં સેવાઓ પ્રદાન કરવાની જરૂર હોય, તો તમે [Baidu Smart Cloud નો](//cloud.baidu.com) ઉપયોગ કરી શકો છો.

Baidu ઑબ્જેક્ટ સ્ટોરેજ પર ડેટા અપલોડ કરવામાં આવે છે અને Baidu સામગ્રી વિતરણ નેટવર્ક સાથે બંધાયેલ છે.

પછી નીચે પ્રમાણે [EdgeJS સર્વિસમાં](//console.bce.baidu.com/cdn/#/cdn/ejs/list) સ્ક્રિપ્ટ બનાવો

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

`Debug` પર ક્લિક કરો, પછી સમગ્ર નેટવર્ક પર પ્રકાશિત કરો ક્લિક કરો.

![](//p.3ti.site/1725437754.avif)

## અદ્યતન ઉપયોગ: પ્રાદેશિક રીઝોલ્યુશનના આધારે ટ્રાફિકનું વિતરણ કરો

જો તમે મેઇનલેન્ડ ચાઇનામાં સેવાઓ પ્રદાન કરવા માંગતા હો અને `cloudflare` મફત આંતરરાષ્ટ્રીય ટ્રાફિક પણ ઇચ્છતા હો, તો તમે પ્રાદેશિક રીઝોલ્યુશન સાથે `DNS` ઉપયોગ કરી શકો છો.

ઉદાહરણ તરીકે, [Huawei DNS](https://www.huaweicloud.com) મફત પ્રાદેશિક વિશ્લેષણ પ્રદાન કરે છે, જેની સાથે મેઇનલેન્ડ ચાઇનીઝ ટ્રાફિક બાયડુ સ્માર્ટ ક્લાઉડમાંથી પસાર થઈ શકે છે, અને આંતરરાષ્ટ્રીય ટ્રાફિક `cloudflare` થી પસાર થઈ શકે છે.

`cloudflare` ના રૂપરેખાંકનમાં ઘણી મુશ્કેલીઓ છે. અહીં નોંધ લેવા માટેના થોડા મુદ્દા છે :

### ડોમેન નામ અન્ય `DNS` માં હોસ્ટ થયેલ છે, `cloudflare` ઉપયોગ કેવી રીતે કરવો

પહેલા એક મનસ્વી ડોમેન નામને `cloudflare` સાથે જોડો, અને પછી આ ડોમેન નામ સાથે મુખ્ય ડોમેન નામને સાંકળવા માટે `SSL/TLS` → કસ્ટમ ડોમેન નામનો ઉપયોગ કરો.

![](https://p.3ti.site/1725438658.avif)

### કસ્ટમ ડોમેન નામ દ્વારા `cloudflare R2` એક્સેસ કરી શકાતું નથી

કારણ કે બિલ્ટ `cloudflare` ઇન ઑબ્જેક્ટ સ્ટોરેજ `R2` કસ્ટમાઇઝ્ડ ડોમેન નામ દ્વારા ઍક્સેસ કરી શકાતું નથી, સ્થિર ફાઇલો મૂકવા માટે તૃતીય-પક્ષ ઑબ્જેક્ટ સ્ટોરેજનો ઉપયોગ કરવાની જરૂર છે.

`cloudflare` પર સંગ્રહિત થર્ડ-પાર્ટી ઑબ્જેક્ટ્સને કેવી રીતે બાંધવું તે દર્શાવવા માટે અમે અહીં ઉદાહરણ તરીકે લઈએ છીએ [backblaze.com](https://www.backblaze.com)

`backblaze.com` પર બકેટ બનાવો, કોઈપણ ફાઇલ અપલોડ કરો, ફાઇલ બ્રાઉઝ કરવા માટે ક્લિક કરો અને `Friendly URL` નું ડોમેન નામ મેળવો, જે અહીં `f003.backblazeb2.com` છે.

![](//p.3ti.site/1725440783.avif)

ડોમેન નામ `CNAME` થી `f003.backblazeb2.com` થી `cloudflare` પર બદલો અને પ્રોક્સીને સક્ષમ કરો.

![](//p.3ti.site/1725440896.avif)

`SSL` માંથી `cloudflare` સંશોધિત કરો → એન્ક્રિપ્શન મોડ, `Full` પર સેટ કરો

![](//p.3ti.site/1725438572.avif)

નીચે બતાવ્યા પ્રમાણે રૂપાંતરનો નિયમ ઉમેરો, તેને પ્રથમ મૂકો (પ્રથમને સૌથી ઓછી પ્રાથમિકતા છે):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` ડાયનેમિક પસંદ કરો અને તમારા બકેટના નામમાં `your_bucketname` માં `concat("/file/your_bucketname",http.request.uri.path)` ફેરફાર કરો.

વધુમાં, ઉપરના `cloudflare` રૂપાંતરણ નિયમમાં, `index.html` `file/your_bucketname/index.html` માં બદલીને કરવામાં આવે છે, અને અન્ય ગોઠવણીઓ સમાન રહે છે.

![](//p.3ti.site/1725441384.avif)