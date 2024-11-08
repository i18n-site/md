# Go Lokiša Entšene Ya Go Nyaka (Seo) .

## Molao-Motheo

`i18n.site` e amogela mohlwaela wa letlakala le tee wo o sa hlabollego E le gore go nolofatšwe go dira ditšhupetšo tša nyakišišo, letlakala la go se fetoge le `sitemap.xml` di tla tšweletšwa gore digagabi di gagaba.

Ge `User-Agent` ya kgopelo ya phihlelelo e šomišwa ke segagabi sa entšene ya go nyaka, kgopelo e tla lebiša lefsa letlakaleng la go se fetoge ka `302` .

Matlakaleng a go se fetoge, šomiša `link` go laetša dikgokagano tša diphetolelo tša maleme a go fapana tša letlakala le, go swana le :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## Peakanyo Ya nginx Ya Selegae

Nka faele ya peakanyo `.i18n/htm/main.yml` ka porojekeng ya demo bjalo ka mohlala

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

Hle thoma ka go fetoša boleng bja `host:` ka godimo go leina la gago la domain, go swana le `xxx.com` .

Ka morago ga moo, `i18n.site -n` , letlakala la go se fetoge le tla tšweletšwa ka gare ga tšhupetšo `out/main/htm` .

Ke nnete, o ka kgontšha gape le difaele tše dingwe tša peakanyo, go swana le go šupa pele go peakanyo ya `main` go hlama `.i18n/htm/dist.package.json` le `.i18n/htm/dist.yml` .

Ke moka o kitimiše `i18n.site -n -c dist` gore letlakala la go se fetoge le tšweletšwe go `out/dist/htm` .

`nginx` e ka bewa ka go šupa peakanyo ye e lego ka mo tlase.

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# Don’t cache server worker scripts nako ye telele kudu
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# Beakanya dinako tše telele tša cache bakeng sa methopo e mengwe ya go se fetoge
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# Beakanya gore ke faele efe ya go se fetoge yeo segagabi e e šomišago bjalo ka tsenyo ya letlakala la gae
location = / {
  # Ge e le gore $botLang
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# Peakanyo ya tirišo ya letlakala le tee
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## Beakanya Polokelo Ya Selo Bakeng Sa Go Tsenya Difaele Tša Go Se Fetoge

Difaele tša go se fetoge di ka tšweletšwa ka mo nageng, eupša mokgwa wo o tlwaelegilego kudu ke go di tsenya polokelong ya selo.

Fetoša `out` yeo e beakantšwego ka mo godimo go :

```
out:
  - s3
```

Ka morago ga moo, rulaganya `~/.config/i18n.site.yml` gomme o tlaleletše peakanyo ye e latelago :

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

Ka peakanyo, hle fetola `i18n.site` go boleng bja `host:` go `.i18n/htm/main.yml` , mabenkele a dilo tše ntši a ka beakanywa ka fase ga `s3` , gomme tšhemo ya `region` ke ya boikgethelo (mabenkele a mantši a dilo ga a hloke go beakanya tšhemo ye).

Ebe matha `i18n.site -n` go phatlalatša gape porojeke.

Ge e le gore o fetošitše `~/.config/i18n.site.yml` gomme o nyaka go tsenya gape, hle šomiša taelo ye e latelago ka go tšhupetšo ya modu wa porojeke go hlatswa cache ya go tsenya :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## Peakanyo Ya cloudflare

Leina la domain le amogetšwego go [cloudflare](//www.cloudflare.com)

### Melawana Ya Phetolelo

Oketša melawana ya phetošo bjalo ka ge go bontšhitšwe ka mo tlase:

![](//p.3ti.site/1725436822.avif)

Khoutu ya molao ke ka tsela e latelang, ka kōpo fetola khoutu ya "i18n.site" ho lebitso la hao la domain name:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Melao Ya Go Boloka Ditaba

Oketša melawana ya cache ka tsela ye e latelago:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Melawana Ya Go Lebiša Lefsa

Beakanya melao ya go lebiša lefsa ka tsela ye e latelago, hle fetoša khoutu ya "i18n.site" go leina la gago la domain

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

`URL redirect` Kgetha go lebiša lefsa ka go fetoga, hle fetoša `/en` tseleng ya go lebiša lefsa `concat("/en",http.request.uri.path,".htm")` go polelo ya go se fetoge yeo o nyakago gore dientšene tša nyakišišo di e akaretše.

## Baidu Bohlale Leru Peakanyo

Ge e ba o swanetše go fana ka ditirelo go naga-kgolo ya China, o ka diriša [Baidu Smart Cloud](//cloud.baidu.com) .

Datha e tsenywa go Polokelo ya Dilo tša Baidu gomme e tlemilwe go Neteweke ya Kabo ya Diteng ya Baidu.

Ebe bopa script ka [EdgeJS edge tšebeletso](//console.bce.baidu.com/cdn/#/cdn/ejs/list) ka tsela e latelang

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
  // Dihlogo tša karabo di ka bewa go lokiša diphošo, go swana le out.XXX = 'MSG';
})
```

Klika `Debug` , ke moka o klike Phatlalatša go netiweke ka moka.

![](//p.3ti.site/1725437754.avif)

## Tšhomišo Ya Maemo a Godimo: Aba Sephethephethe Go Ya Ka Tharollo Ya Selete

Ge o nyaka go fana ka ditirelo nagengkgolo ya China gomme gape o nyaka sephethephethe sa boditšhabatšhaba sa mahala `cloudflare` , o ka šomiša `DNS` ka tharollo ya selete.

Ka mohlala, [Huawei DNS](https://www.huaweicloud.com) e fana ka tshekatsheko ya mahala ya selete, yeo ka yona sephethephethe sa naga-kgolo sa China se ka fetago ka Baidu Smart Cloud, gomme sephethephethe sa boditšhabatšhaba se ka feta ka `cloudflare` .

Go na le melaba e mentši mo peakanyong ya `cloudflare` Ke dintlha tše mmalwa tšeo o swanetšego go di ela hloko :

### Lebitso La Domain Name E Hosted Ka Tse Ling Tse `DNS` , Kamoo Ho Sebelisa `cloudflare`

Sa mathomo tlama leina la domain la boithatelo go `cloudflare` , gomme o šomiše `SSL/TLS` → leina la domain la tlwaelo go tswalanya leina le legolo la domain le leina le la domain.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` E Ka Se Fihlelelwe Ka Leina La Domain La Tlwaelo

Ka lebaka la gore polokelo ya selo `cloudflare` e agetšwego ka gare `R2` e ka se fihlelelwe ka leina la domain leo le rulagantšwego, polokelo ya selo ya motho wa boraro e swanetše go šomišwa go bea difaele tša go se fetoge.

Mo `cloudflare` tšea [backblaze.com](https://www.backblaze.com)

Theha kgamelo ka `backblaze.com` , kenya faele efe kapa efe, tobetsa ho phetla faele, le fumana lebitso la domain name la `Friendly URL` , e leng `f003.backblazeb2.com` mona.

![](//p.3ti.site/1725440783.avif)

Fetoša leina la domain go tšwa `CNAME` go ya go `f003.backblazeb2.com` go `cloudflare` gomme o kgontšhe moemedi.

![](//p.3ti.site/1725440896.avif)

Fetola `cloudflare` ya `SSL` → mokgwa wa encryption, beha ho `Full`

![](//p.3ti.site/1725438572.avif)

Oketša molao wa phetošo bjalo ka ge go bontšhitšwe ka mo tlase, o bee pele (wa pele o na le bohlokwa bja tlase):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` kgetha mafolofolo gomme o fetoše `your_bucketname` go `concat("/file/your_bucketname",http.request.uri.path)` go leina la gago la kgamelo.

Go tlaleletša, ka molaong wa phetošo `cloudflare` ka godimo, `index.html` e fetotšwe go `file/your_bucketname/index.html` , gomme dipeakanyo tše dingwe di dula di swana.

![](//p.3ti.site/1725441384.avif)