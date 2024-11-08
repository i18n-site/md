# Okulongoosa Mu Nkola Y’okunoonya (Seo) .

## Omusingi

`i18n.site` ekwata enzimba y’olupapula olumu etali ya kuzza buggya Okusobola okwanguyiza okuwandiika omuko gw’okunoonya, omuko ogw’enjawulo ogutakyuka ne `sitemap.xml` bijja kukolebwa abaseeyeeya.

Bwe `User-Agent` y'okusaba okuyingira ekozesebwa omukugu mu kunoonya yingini, okusaba kujja kukyusibwa okudda ku lupapula olutakyuka nga kuyita mu `302` .

Ku mpapula ezitakyukakyuka, kozesa `link` okulaga enkolagana n'enkyusa z'ennimi ez'enjawulo ez'olupapula luno, gamba nga :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## Ensengeka Ya nginx Ey'omu Kitundu

Twala fayiro y'okusengeka `.i18n/htm/main.yml` mu pulojekiti ya demo ng'ekyokulabirako

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

Nsaba sooka okyuse omuwendo gwa `host:` waggulu ku linnya lyo erya domain, nga `xxx.com` .

Olwo, `i18n.site -n` , olupapula olutakyukakyuka lujja kukolebwa mu dayirekita `out/main/htm` .

Kya lwatu, osobola n'okusobozesa fayiro endala ez'okusengeka, gamba ng'okusooka okujuliza ensengeka ya `main` okukola `.i18n/htm/dist.package.json` ne `.i18n/htm/dist.yml` .

Oluvannyuma dduka `i18n.site -n -c dist` olwo omuko ogutakyukakyuka gujja kukolebwa okutuuka ku `out/dist/htm` .

`nginx` esobola okuteekebwawo nga ojuliza ensengeka eri wansi.

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# Totereka scripts za server worker okumala ebbanga ddene nnyo
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# Teeka ebiseera ebiwanvu eby'okutereka eby'obugagga ebirala ebitali bikyuka
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# Teeka fayiro ki etakyukakyuka omuseeyeeya gy'ekozesa ng'okuyingira kw'olupapula lw'awaka
location = / {
  # Bwe kiba nga $botLang
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# Ensengeka y'enkola y'olupapula lumu
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## Tegeka Okutereka Ebintu Okuteeka Fayiro Ezitakyukakyuka

Fayiro ezitakyukakyuka zisobola okukolebwa mu kitundu, naye enkola esinga okukozesebwa kwe kuziteeka mu kutereka ebintu.

Kyuusa `out` etegekeddwa waggulu ku :

```
out:
  - s3
```

Olwo, edit `~/.config/i18n.site.yml` era osseeko ensengeka eno wammanga :

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

Mu nsengeka, nsaba okyuse `i18n.site` okudda ku muwendo gwa `host:` mu `.i18n/htm/main.yml` , amaterekero g'ebintu ebingi bisobola okutegekebwa wansi wa `s3` , era ennimiro `region` ya kwesalirawo (amaterekero g'ebintu bingi tebyetaagisa kuteeka nnimiro eno).

Oluvannyuma dduka `i18n.site -n` okuddamu okufulumya pulojekiti.

Bwoba okyusizza `~/.config/i18n.site.yml` era nga oyagala okuddamu okuteeka, nsaba okozese ekiragiro kino wammanga mu project root directory okugogola upload cache :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## Ensengeka Ya cloudflare

Erinnya lya domain erikyazibwa ku [cloudflare](//www.cloudflare.com)

### Amateeka Agafuga Okukyusa

Okwongerako amateeka g'okukyusa nga bwe kiragibwa wansi:

![](//p.3ti.site/1725436822.avif)

Koodi y'amateeka eri bweti, nsaba okyuse koodi "i18n.site" ku linnya lyo erya domain:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Amateeka G’okutereka

Okwongerako amateeka ga cache nga gano wammanga:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Okukyusa Amateeka

Teeka amateeka g'okukyusakyusa nga bwe gali wansi, nsaba okyuse koodi "i18n.site" ku linnya lyo erya domain

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

`URL redirect` Londa dynamic redirection, nsaba okyuse `/en` mu redirection path `concat("/en",http.request.uri.path,".htm")` ku lulimi olusookerwako lw'oyagala emikutu gy'okunoonya okussaamu.

## Baidu Ensengeka y'Ekire Eky'amagezi

Bw’oba weetaaga okuwa obuweereza ku lukalu lwa China, osobola okukozesa [Baidu Smart Cloud](//cloud.baidu.com) .

Data eteekebwa ku Baidu Object Storage era esibiddwa ku Baidu Content Distribution Network.

Oluvannyuma tonda script mu [EdgeJS edge service](//console.bce.baidu.com/cdn/#/cdn/ejs/list) nga bweri

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
  // Emitwe gy'okuddamu giyinza okuteekebwawo okulongoosa ebifulumizibwa, nga out.XXX = 'MSG';
})
```

Nywa ku `Debug` , olwo nyweza Publish to the entire network.

![](//p.3ti.site/1725437754.avif)

## Enkozesa Ey’omulembe: Okugabanya Entambula Okusinziira Ku Nsonga Y’ekitundu

Bwoba oyagala okuwa obuweereza ku lukalu lwa China era nga naawe oyagala `cloudflare` free international traffic, osobola okukozesa `DNS` with regional resolution.

Okugeza `cloudflare` [Huawei Cloud DNS](https://www.huaweicloud.com)

Waliwo emitego mingi mu nsengeka ya `cloudflare` Wano waliwo ensonga ntono z'olina okwetegereza :

### Erinnya Lya Domain Likyazibwa Mu `DNS` Endala , Engeri Y'okukozesaamu `cloudflare`

Sooka osibe erinnya ly’ekifo ery’okwesalirawo ku `cloudflare` , n’oluvannyuma okozese `SSL/TLS` → erinnya ly’ekifo ery’ennono okukwataganya erinnya ly’ekifo ekikulu n’erinnya lino ery’ekifo.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` Tesobola Kutuusibwako Okuyita Mu Linnya Lya Domain Erya Bulijjo

Olw'okuba okutereka ebintu `cloudflare` `R2` tebisobola kuyingizibwa linnya lya domain erirongooseddwa, okutereka ebintu okw'ekibiina eky'okusatu kwetaaga okukozesebwa okuteeka fayiro ezitakyukakyuka.

Wano `cloudflare` [backblaze.com](https://www.backblaze.com)

Tonda ekibbo ku `backblaze.com` , teeka fayiro yonna, nyweza okulambula fayiro, era ofune erinnya lya domain erya `Friendly URL` , nga lino liri `f003.backblazeb2.com` .

![](//p.3ti.site/1725440783.avif)

Kyusa erinnya lya domain okuva ku `CNAME` okudda ku `f003.backblazeb2.com` ku `cloudflare` era osobozesa proxy.

![](//p.3ti.site/1725440896.avif)

Kyuusa `cloudflare` ku `SSL` → engeri y'okusiba, oteeke ku `Full`

![](//p.3ti.site/1725438572.avif)

Gattako etteeka ly’okukyusa nga bwe kiragibwa wansi, lisooke (erisooka lye lisinga okukulembeza wansi):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` londa dynamic era okyuse `your_bucketname` mu `concat("/file/your_bucketname",http.request.uri.path)` ku linnya lyo erya baketi.

Okugatta ku ekyo, mu tteeka ly’okukyusa `cloudflare` waggulu, `index.html` ekyusibwa okudda ku `file/your_bucketname/index.html` , era ensengeka endala zisigala nga bwe ziri.

![](//p.3ti.site/1725441384.avif)