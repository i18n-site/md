# శోధన ఇంజిన్ ఆప్టిమైజేషన్ (SEO)

## సూత్రం

`i18n.site` నాన్-రిఫ్రెష్ సింగిల్ పేజీ ఆర్కిటెక్చర్ను సెర్చ్ ఇండెక్సింగ్ను సులభతరం చేయడానికి, క్రాలర్లు క్రాల్ చేయడానికి ప్రత్యేక స్టాటిక్ పేజీ మరియు `sitemap.xml` రూపొందించబడతాయి.

శోధన ఇంజిన్ క్రాలర్ ద్వారా యాక్సెస్ అభ్యర్థన యొక్క `User-Agent` ఉపయోగించినప్పుడు, అభ్యర్థన `302` ద్వారా స్టాటిక్ పేజీకి మళ్లించబడుతుంది.

స్టాటిక్ పేజీలలో, ఈ పేజీ యొక్క వివిధ భాషా సంస్కరణలకు లింక్లను సూచించడానికి `link` ఉపయోగించండి, ఉదాహరణకు :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## స్థానిక nginx కాన్ఫిగరేషన్

డెమో ప్రాజెక్ట్లోని `.i18n/htm/main.yml` కాన్ఫిగరేషన్ ఫైల్ను ఉదాహరణగా తీసుకోండి

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

దయచేసి ముందుగా `xxx.com` వంటి మీ డొమైన్ పేరుకు ఎగువ `host:` విలువను సవరించండి.

అప్పుడు, `i18n.site -n` , స్టాటిక్ పేజీ `out/main/htm` డైరెక్టరీలో రూపొందించబడుతుంది.

వాస్తవానికి, మీరు `.i18n/htm/dist.package.json` మరియు `.i18n/htm/dist.yml` ని సృష్టించడానికి `main` యొక్క కాన్ఫిగరేషన్ని మొదట సూచించడం వంటి ఇతర కాన్ఫిగరేషన్ ఫైల్లను కూడా ప్రారంభించవచ్చు.

ఆపై `i18n.site -n -c dist` అమలు చేయండి, తద్వారా స్టాటిక్ పేజీ `out/dist/htm` కి ఉత్పత్తి అవుతుంది.

దిగువ కాన్ఫిగరేషన్ను సూచించడం ద్వారా `nginx` సెట్ చేయవచ్చు.

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# సర్వర్ వర్కర్ స్క్రిప్ట్లను ఎక్కువసేపు కాష్ చేయవద్దు
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# ఇతర స్టాటిక్ వనరుల కోసం ఎక్కువ కాష్ సమయాలను సెట్ చేయండి
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# క్రాలర్ ఏ స్టాటిక్ ఫైల్ని హోమ్పేజీ ఎంట్రీగా ఉపయోగిస్తుందో సెట్ చేయండి
location = / {
  # ఒకవేళ $botLang
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# సింగిల్ పేజీ అప్లికేషన్ కాన్ఫిగరేషన్
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## స్టాటిక్ ఫైల్లను అప్లోడ్ చేయడానికి ఆబ్జెక్ట్ స్టోరేజ్ని కాన్ఫిగర్ చేయండి

స్టాటిక్ ఫైల్లను స్థానికంగా రూపొందించవచ్చు, అయితే వాటిని ఆబ్జెక్ట్ స్టోరేజీకి అప్లోడ్ చేయడం మరింత సాధారణ విధానం.

పైన కాన్ఫిగర్ చేసిన `out` మార్చండి :

```
out:
  - s3
```

ఆపై, `~/.config/i18n.site.yml` సవరించి, కింది కాన్ఫిగరేషన్ను జోడించండి :

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

కాన్ఫిగరేషన్లో, దయచేసి `i18n.site` `.i18n/htm/main.yml` లో `host:` విలువకు మార్చండి, బహుళ ఆబ్జెక్ట్ స్టోర్లను `s3` కింద కాన్ఫిగర్ చేయవచ్చు మరియు `region` ఫీల్డ్ ఐచ్ఛికం (చాలా ఆబ్జెక్ట్ స్టోర్లు ఈ ఫీల్డ్ని సెట్ చేయాల్సిన అవసరం లేదు).

ప్రాజెక్ట్ను మళ్లీ ప్రచురించడానికి `i18n.site -n` అమలు చేయండి.

మీరు `~/.config/i18n.site.yml` సవరించి, మళ్లీ అప్లోడ్ చేయాలనుకుంటే, అప్లోడ్ కాష్ను క్లియర్ చేయడానికి దయచేసి ప్రాజెక్ట్ రూట్ డైరెక్టరీలో కింది ఆదేశాన్ని ఉపయోగించండి :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## cloudflare కాన్ఫిగరేషన్

డొమైన్ పేరు హోస్ట్ చేయబడింది [cloudflare](//www.cloudflare.com)

### మార్పిడి నియమాలు

దిగువ చూపిన విధంగా మార్పిడి నియమాలను జోడించండి:

![](//p.3ti.site/1725436822.avif)

రూల్ కోడ్ క్రింది విధంగా ఉంది, దయచేసి "i18n.site" కోడ్ని మీ డొమైన్ పేరుకు సవరించండి:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### కాషింగ్ నియమాలు

కింది విధంగా కాష్ నియమాలను జోడించండి:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### దారి మళ్లింపు నియమాలు

దారి మళ్లింపు నియమాలను ఈ క్రింది విధంగా సెట్ చేయండి, దయచేసి "i18n.site" కోడ్ని మీ డొమైన్ పేరుకు సవరించండి

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

`URL redirect` డైనమిక్ దారి మళ్లింపును ఎంచుకోండి, దయచేసి మళ్లింపు మార్గం `concat("/en",http.request.uri.path,".htm")` లోని `/en` మీరు శోధన ఇంజిన్లు చేర్చాలనుకుంటున్న డిఫాల్ట్ భాషకు సవరించండి.

## Baidu ఇంటెలిజెంట్ క్లౌడ్ కాన్ఫిగరేషన్

మీరు చైనా ప్రధాన భూభాగానికి సేవలను అందించాలనుకుంటే, మీరు [Baidu స్మార్ట్ క్లౌడ్ని](//cloud.baidu.com) ఉపయోగించవచ్చు.

Baidu ఆబ్జెక్ట్ స్టోరేజ్కి డేటా అప్లోడ్ చేయబడింది మరియు Baidu కంటెంట్ డిస్ట్రిబ్యూషన్ నెట్వర్క్కు కట్టుబడి ఉంటుంది.

ఆపై స్క్రిప్ట్ను ఈ క్రింది విధంగా రూపొందించండి [EdgeJS](//console.bce.baidu.com/cdn/#/cdn/ejs/list)

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
  // ప్రతిస్పందన హెడర్లను అవుట్పుట్ డీబగ్ చేయడానికి సెట్ చేయవచ్చు, ఉదాహరణకు అవుట్.XXX = 'MSG';
})
```

`Debug` క్లిక్ చేసి, ఆపై మొత్తం నెట్వర్క్కు ప్రచురించు క్లిక్ చేయండి.

![](//p.3ti.site/1725437754.avif)

## అధునాతన వినియోగం: ప్రాంతీయ రిజల్యూషన్ ఆధారంగా ట్రాఫిక్ను పంపిణీ చేయండి

మీరు చైనా ప్రధాన భూభాగంలో సేవలను అందించాలనుకుంటే మరియు `cloudflare` ఉచిత అంతర్జాతీయ ట్రాఫిక్ కావాలనుకుంటే, మీరు ప్రాంతీయ రిజల్యూషన్తో `DNS` ఉపయోగించవచ్చు.

ఉదాహరణకు `cloudflare` [Huawei క్లౌడ్ DNS](https://www.huaweicloud.com)

`cloudflare` యొక్క కాన్ఫిగరేషన్లో చాలా ఆపదలు ఉన్నాయి. ఇక్కడ గమనించవలసిన కొన్ని పాయింట్లు ఉన్నాయి :

### డొమైన్ పేరు ఇతర `DNS` లో హోస్ట్ చేయబడింది, `cloudflare` ఎలా ఉపయోగించాలి

మొదట ఏకపక్ష డొమైన్ పేరును `cloudflare` కి బంధించండి, ఆపై ఈ డొమైన్ పేరుకు ప్రధాన డొమైన్ పేరును అనుబంధించడానికి `SSL/TLS` → అనుకూల డొమైన్ పేరును ఉపయోగించండి.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` అనుకూల డొమైన్ పేరు ద్వారా యాక్సెస్ చేయబడదు

`cloudflare` ఆబ్జెక్ట్ స్టోరేజ్ `R2` అనుకూలీకరించిన డొమైన్ పేరు ద్వారా యాక్సెస్ చేయబడదు కాబట్టి, స్టాటిక్ ఫైల్లను ఉంచడానికి థర్డ్-పార్టీ ఆబ్జెక్ట్ స్టోరేజ్ని ఉపయోగించాలి.

`cloudflare` వద్ద నిల్వ చేయబడే మూడవ పక్ష వస్తువులను ఎలా బైండ్ చేయాలో ప్రదర్శించడానికి ఇక్కడ మేము ఉదాహరణగా తీసుకుంటాము [backblaze.com](https://www.backblaze.com)

`backblaze.com` వద్ద బకెట్ను సృష్టించండి, ఏదైనా ఫైల్ని అప్లోడ్ చేయండి, `f003.backblazeb2.com` `Friendly URL` పేరును పొందండి.

![](//p.3ti.site/1725440783.avif)

డొమైన్ పేరును `cloudflare` వద్ద `CNAME` నుండి `f003.backblazeb2.com` కి మార్చండి మరియు ప్రాక్సీని ప్రారంభించండి.

![](//p.3ti.site/1725440896.avif)

`cloudflare` లో `SSL` → ఎన్క్రిప్షన్ మోడ్ని సవరించండి, `Full` కి సెట్ చేయండి

![](//p.3ti.site/1725438572.avif)

దిగువ చూపిన విధంగా మార్పిడి నియమాన్ని జోడించి, దానిని ముందుగా ఉంచండి (మొదటిది అతి తక్కువ ప్రాధాన్యతను కలిగి ఉంటుంది):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` డైనమిక్ని ఎంచుకుని, `concat("/file/your_bucketname",http.request.uri.path)` లో `your_bucketname` మీ బకెట్ పేరుకు సవరించండి.

అదనంగా, పైన ఉన్న `cloudflare` మార్పిడి నియమంలో, `index.html` `file/your_bucketname/index.html` కి మార్చబడింది మరియు ఇతర కాన్ఫిగరేషన్లు అలాగే ఉంటాయి.

![](//p.3ti.site/1725441384.avif)