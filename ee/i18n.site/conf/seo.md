# Mɔ̃wo Didi Ƒe Dɔwɔnu Nyuitɔ (Seo) .

## Gɔmeɖose

`i18n.site` xɔ axa ɖeka ƒe xɔtuɖoɖo si me gbugbɔgawɔ o Be didi ƒe indexing nanɔ bɔbɔe la, woawɔ axa si meʋãna o kple `sitemap.xml` ɖe vovo na crawlers be woatsa.

Ne `User-Agent` si nye mɔɖeɖe ƒe biabiaa zã mɔ̃ si dia mɔ̃a la, woatrɔ biabia la ayi axa si meʋãna o dzi to `302` dzi.

Le axa siwo meʋãna o dzi la, zã `link` nàtsɔ afia kadodo siwo yi axa sia ƒe gbegbɔgblɔ vovovowo ƒe tɔtrɔwo gbɔ, abe :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## Nutoa Me nginx Ƒe Ɖoɖowɔwɔ

Tsɔ `.i18n/htm/main.yml` ƒe ɖoɖowɔɖi faɛl si le wɔwɔfia dɔa me abe kpɔɖeŋu ene

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

Taflatse trɔ asi le `host:` ƒe asixɔxɔ si le etame ŋu gbã wòazu wò domenyiŋusẽfianu ŋkɔ, abe `xxx.com` ene.

Emegbe, `i18n.site -n` , woawɔ axa si meʋãna o la le `out/main/htm` ƒe agbalẽdzraɖoƒea.

Nyateƒee, àte ŋu ana ɖoɖowɔɖi ƒe faɛl bubuwo hã nawɔ dɔ, abe alesi nàƒo nu tso `main` ƒe ɖoɖowɔɖi ŋu gbã be nàwɔ `.i18n/htm/dist.package.json` kple `.i18n/htm/dist.yml` ene.

Emegbe ƒu du `i18n.site -n -c dist` ale be woawɔ axa si meʋãna o la wòazu `out/dist/htm` .

`nginx` ateŋu aɖo to ŋkuléle ɖe ɖoɖo si le ete ŋu.

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# Mègatsɔ server worker scripts dzra ɖo ɣeyiɣi didi akpa o
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# Ðo cache ɣeyiɣi didiwo na static nunɔamesi bubuwo
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# Ðo static file si crawler la azã abe homepage ƒe nuŋɔŋlɔ ene
location = / {
  # Ne $botLang
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# Axa ɖeka ƒe dɔwɔwɔ ƒe ɖoɖowɔwɔ
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## Trɔ Asi Le Nusiwo Wodzra Ɖo Ŋu Hena Faɛl Siwo Meʋãna O Dada Ɖe Internet Dzi

Woateŋu awɔ faɛl siwo meʋãna o le teƒea, gake mɔnu si bɔ wue nye be woatsɔ wo ade nusiwo wodzra ɖo me.

Trɔ asi le `out` si woɖo ɖe etame la ŋu be :

```
out:
  - s3
```

Emegbe, trɔ asi le `~/.config/i18n.site.yml` ŋu eye nàtsɔ ɖoɖo si gbɔna akpe ɖe eŋu :

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

Le ɖoɖowɔwɔ me la, taflatse trɔ `i18n.site` ɖe asixɔxɔ si nye `host:` le `.i18n/htm/main.yml` me, woateŋu aɖo nudzraɖoƒe geɖewo ɖe `s3` te, eye `region` ƒe akpaa nye tiatia (mehiã be nudzraɖoƒe geɖewo naɖo agble sia o).

Emegbe ƒu du `i18n.site -n` be nàgbugbɔ ata dɔa.

Ne ètrɔ asi le `~/.config/i18n.site.yml` ŋu eye nèdi be yeagakɔe ɖe Internet dzi la, taflatse zã sedede si gbɔna le dɔa ƒe ke ƒe nuŋlɔɖi me nàtsɔ akɔ akɔdada ƒe cache :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## cloudflare Ƒe Ɖoɖowɔwɔ

Domain ŋkɔ si woxɔ ɖe [cloudflare](//www.cloudflare.com)

### Dzimetɔtrɔ Ƒe Sewo

Tsɔ dzimetɔtrɔ ƒe sewo kpee abe alesi woɖee fia le ete ene:

![](//p.3ti.site/1725436822.avif)

Se ƒe kɔda la le ale, taflatse trɔ asi le kɔda "i18n.site" ŋu wòazu wò domenyiŋusẽfianu ŋkɔ:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Se Siwo Ku Ɖe Caching Ŋu

Tsɔ cache ƒe sewo kpee abe alesi gbɔna ene:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Trɔ Mɔ Na Sewo

Ðo mɔɖeɖe ƒe sewo abe alesi gbɔna ene, taflatse trɔ asi le kɔda "i18n.site" ŋu ɖe wò domenyiŋusẽfianu ŋkɔ ŋu

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

`URL redirect` Tia dynamic redirection, taflatse trɔ asi le `/en` le redirection path `concat("/en",http.request.uri.path,".htm")` me ɖe gbegbɔgblɔ si nèdi be mɔ̃ siwo dia nyatakakawo nade eme la ŋu.

## Baidu Nunya Alilikpo Ƒe Ðoɖowɔwɔ

Ne ehiã be nàwɔ dɔ na China-nyigba gã la, àte ŋu azã [Baidu Smart Cloud](//cloud.baidu.com) .

Wotsɔa nyatakakawo dana ɖe Baidu Nudzraɖoƒe eye woblaa wo ɖe Baidu Content Distribution Network.

Emegbe wɔ script la le [EdgeJS edge service](//console.bce.baidu.com/cdn/#/cdn/ejs/list) me abe alesi gbɔna ene

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
  // Woateŋu aɖo ŋuɖoɖo ƒe tanyawo be woawɔ debug output, abe out.XXX = 'MSG';
})
```

Zi `Debug` dzi, emegbe nàzi Publish dzi na network bliboa.

![](//p.3ti.site/1725437754.avif)

## Zãza Deŋgɔ: Ma Ʋuwo Ƒe Zɔzɔ Le Nutome Ƒe Nyametsotso Nu

Ne èdi be yeana subɔsubɔdɔwo le China-nyigba gã dzi eye nèdi hã be `cloudflare` dukɔwo dome ʋuɖoɖo femaxee la, àte ŋu azã `DNS` kple nutome tameɖoɖo kplikpaa.

Le kpɔɖeŋu me `cloudflare` [Huawei Cloud DNS](https://www.huaweicloud.com)

Mɔ̃ geɖe le `cloudflare` ƒe ɖoɖowɔwɔ me.Nya ʋɛ aɖewo siwo wòle be míade dzesii lae nye esi :

### Woxɔ Domenyiŋusẽfianu Ŋkɔa Ɖe `DNS` Bubuwo Me, Alesi Woazã `cloudflare`

Gbã la, bla domenyiŋkɔ si nèdi ɖe `cloudflare` , eye emegbe nàzã `SSL/TLS` → domenyiŋkɔ tɔxɛ atsɔ asɔ kple domenyiŋkɔ vevitɔa kple domenyiŋkɔ sia.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` Mateŋu Akpɔ to Domenyiŋusẽfianu Ƒe Ŋkɔ Tɔxɛ Dzi O

Esi wònye be womateŋu atsɔ domenyiŋkɔ si wowɔ ɖe ɖoɖo nu akpɔ nudzraɖoƒe `R2` si wotu ɖe eme `cloudflare` ta la, ehiã be woazã nudzraɖoƒe si nye ame etɔ̃lia atsɔ aɖo faɛl siwo meʋãna o.

Afisiae `cloudflare` [backblaze.com](https://www.backblaze.com)

Wɔ bucket le `backblaze.com` , tsɔ faɛl ɖesiaɖe da ɖe edzi, zi edzi be nàdzro faɛl la me, eye nàxɔ domenyiŋkɔ si nye `Friendly URL` , si nye `f003.backblazeb2.com` le afisia.

![](//p.3ti.site/1725440783.avif)

Trɔ domenyiŋkɔa tso `CNAME` va ɖo `f003.backblazeb2.com` le `cloudflare` eye nàna teƒenɔla la nawɔ dɔ.

![](//p.3ti.site/1725440896.avif)

Trɔ asi le `cloudflare` le `SSL` me → nya ɣaɣla ƒe nɔnɔme, ɖoe ɖe `Full`

![](//p.3ti.site/1725438572.avif)

Tsɔ dzimetɔtrɔ ƒe sea kpee abe alesi woɖee fia le ete ene, tsɔe ɖo nɔƒe gbãtɔ (gbãtɔae nye esi le vevie wu):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` tia dynamic eye nàtrɔ asi le `your_bucketname` le `concat("/file/your_bucketname",http.request.uri.path)` me ɖe wò bucket ŋkɔ ŋu.

Tsɔ kpe ɖe eŋu la, le `cloudflare` ƒe tɔtrɔ ƒe se si le etame me la, wotrɔ `index.html` wòzu `file/your_bucketname/index.html` , eye ɖoɖo bubuwo gakpɔtɔ le nenema.

![](//p.3ti.site/1725441384.avif)