# ސަރޗް އިންޖީން އޮޕްޓިމައިޒޭޝަން (އެސްއީއޯ)

## އުސޫލުންނެވެ

`i18n.site` ނޮން ރިފްރެޝް ސިންގަލް ޕޭޖް އަރކިޓެކްޗަރ އެއް އެޑޮޕްޓް ކުރަނީ ސަރޗް އިންޑެކްސް ކުރުމަށް ފަސޭހަ ކުރުމަށްޓަކައި ކްރޯލަރސް ކްރޯލް ކުރުމަށް ވަކި ސްޓޭޓިކް ޕޭޖެއް އަދި `sitemap.xml` އުފެދިގެންދާނެއެވެ.

އެކްސެސް ރިކުއެސްޓްގެ `User-Agent` ސަރޗް އިންޖީން ކްރޯލަރ އިން ބޭނުންކުރާއިރު، ރިކުއެސްޓް `302` މެދުވެރިކޮށް ސްޓޭޓިކް ޕޭޖަށް ރީޑައިރެކްޓް ކުރެވޭނެއެވެ.

ސްޓޭޓިކް ޕޭޖްތަކުގައި، މި ޕޭޖުގެ ތަފާތު ބަހުގެ ވަރޝަންތަކުގެ ލިންކްތައް ދައްކާލުމަށް `link` ބޭނުންކުރާށެވެ، ފަދައިން :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## ލޯކަލް nginx ކޮންފިގްރޭޝަން

މިސާލެއްގެ ގޮތުން ޑެމޯ ޕްރޮޖެކްޓްގައިވާ `.i18n/htm/main.yml` ކޮންފިގްރޭޝަން ފައިލް ނަގާށެވެ

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

ފުރަތަމަ މަތީގައިވާ `host:` ގެ އަގު `xxx.com` ފަދަ ޑޮމެއިން ނަމަށް ބަދަލުކުރައްވާށެވެ.

ދެން، `i18n.site -n` , ސްޓޭޓިކް ޕޭޖް ޖެނެރޭޓް ވާނީ `out/main/htm` ޑައިރެކްޓަރީގައެވެ.

ހަމަގައިމުވެސް، `.i18n/htm/dist.package.json` އަދި `.i18n/htm/dist.yml` އުފެއްދުމަށްޓަކައި ފުރަތަމަ `main` ގެ ކޮންފިގްރޭޝަނަށް ރިފަރ ކުރުން ފަދަ އެހެން ކޮންފިގްރޭޝަން ފައިލްތައް ވެސް އެނެބަލް ކުރެވިދާނެއެވެ.

ދެން `i18n.site -n -c dist` ދުއްވާލުމުން ސްޓޭޓިކް ޕޭޖް `out/dist/htm` އަށް ޖެނެރޭޓް ވާނެއެވެ .

`nginx` ސެޓް ކުރެވޭނީ ތިރީގައިވާ ކޮންފިގްރޭޝަނަށް ރިއާޔަތްކޮށްގެންނެވެ.

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# ސަރވަރ ވޯކަރ ސްކްރިޕްޓްތައް މާގިނައިރު ކެޝް ނުކުރައްވާށެވެ
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# އެހެން ސްޓޭޓިކް ރިސޯސްތަކަށް ދިގު ކެޝް ވަގުތުތައް ސެޓްކުރުން
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# ހޯމްޕޭޖް އެންޓްރީގެ ގޮތުގައި ކްރޯލަރ ބޭނުންކުރާނީ ކޮން ސްޓޭޓިކް ފައިލެއްތޯ ސެޓްކުރުން
location = / {
  # $botLang
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# ސިންގަލް ޕޭޖް އެޕްލިކޭޝަން ކޮންފިގްރޭޝަން
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## ސްޓޭޓިކް ފައިލްތައް އަޕްލޯޑް ކުރުމަށް އޮބްޖެކްޓް ސްޓޯރޭޖް ކޮންފިގްރޭޓް ކުރުން

ސްޓޭޓިކް ފައިލްތައް ލޯކަލް ގޮތުން ޖެނެރޭޓް ކުރެވޭ ނަމަވެސް، މިއަށްވުރެ އާންމު ގޮތަކީ އެ ފައިލްތައް އޮބްޖެކްޓް ސްޓޯރޭޖަށް އަޕްލޯޑް ކުރުމެވެ.

މަތީގައި ކޮންފިގްރޭޓް ކުރެވިފައިވާ `out` އަށް ބަދަލުކުރައްވާ :

```
out:
  - s3
```

ދެން، `~/.config/i18n.site.yml` އެޑިޓްކޮށް ތިރީގައިވާ ކޮންފިގްރޭޝަން އިތުރުކުރުން :

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

ކޮންފިގްރޭޝަންގައި `i18n.site` އިން `.i18n/htm/main.yml` `host:` އަގަށް ބަދަލުކޮށް، `s3` ދަށުން ގިނަ އޮބްޖެކްޓް ސްޓޯރ ކޮންފިގްރޭޓް ކުރެވޭނެ، އަދި `region` ފީލްޑަކީ އިޚްތިޔާރީ ފީލްޑެއް (ގިނަ އޮބްޖެކްޓް ސްޓޯރ ތަކުން މި ފީލްޑް ސެޓް ކުރަން ނުޖެހެއެވެ).

ދެން ޕްރޮޖެކްޓް އަލުން ޝާއިއު ކުރުމަށް `i18n.site -n` ދުއްވާލާށެވެ.

`~/.config/i18n.site.yml` އަށް ބަދަލު ގެނެސް އަލުން އަޕްލޯޑް ކުރަން ބޭނުންނަމަ، އަޕްލޯޑް ކެޝް ސާފުކުރުމަށް ޕްރޮޖެކްޓް ރޫޓް ޑައިރެކްޓަރީގައިވާ ތިރީގައިވާ ކޮމާންޑް ބޭނުން ކުރައްވާ :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## ކްލައުޑްފްލޭއާ ކޮންފިގްރޭޝަން

ޑޮމެއިން ނަން ހޯސްޓް ކޮށްފައިވަނީ [cloudflare](//www.cloudflare.com)

### އިސްލާމްވުމުގެ އުސޫލުތައް

ތިރީގައިވާ ގޮތަށް ބަދަލުކުރުމުގެ އުސޫލުތައް އިތުރުކުރުން:

![](//p.3ti.site/1725436822.avif)

ގަވާއިދު ކޯޑަކީ ތިރީގައިވާ ގޮތަށް، "i18n.site" ކޯޑް ތިޔަބޭފުޅުންގެ ޑޮމެއިން ނަމަށް ބަދަލުކުރައްވާށެވެ:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### ކެޝިންގ އުސޫލުތައް

ތިރީގައިވާ ގޮތަށް ކެޝް އުސޫލުތައް އިތުރުކުރުން.

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### ގަވާއިދުތައް ރީޑައިރެކްޓް ކުރާށެވެ

ރީޑައިރެކްޝަން އުސޫލުތައް ތިރީގައިވާ ގޮތަށް ސެޓްކޮށް، "i18n.site" ކޯޑް ޑޮމެއިން ނަމަށް ބަދަލުކުރައްވާށެވެ

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

`URL redirect` ޑައިނަމިކް ރީޑައިރެކްޝަން ހޮވައި، ރީޑައިރެކްޝަން ޕަތް `concat("/en",http.request.uri.path,".htm")` ގައިވާ `/en` ސަރޗް އިންޖީނުތަކުގައި ހިމަނަން ބޭނުންވާ ޑިފޯލްޓް ބަހަށް ބަދަލުކުރައްވާށެވެ.

## ބައިޑޫ އިންޓެލިޖެންޓް ކްލައުޑް ކޮންފިގްރޭޝަން

ޗައިނާގެ ބިންގަނޑަށް ހިދުމަތް ދޭން ޖެހިއްޖެނަމަ [ބައިޑޫ ސްމާޓް ކްލައުޑް](//cloud.baidu.com) ބޭނުން ކުރެވިދާނެ އެވެ.

ޑޭޓާ ބައިދޫ އޮބްޖެކްޓް ސްޓޯރޭޖަށް އަޕްލޯޑްކޮށް ބައިދޫ ކޮންޓެންޓް ޑިސްޓްރިބިއުޝަން ނެޓްވޯކަށް ބައުންޑް ކުރެވެއެވެ.

ދެން ތިރީގައިވާ ގޮތަށް [EdgeJS އެޖް ސާވިސްގައި](//console.bce.baidu.com/cdn/#/cdn/ejs/list) ސްކްރިޕްޓް އުފައްދާށެވެ

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
  // ރެސްޕޮންސް ހެޑަރސް ޑިބަގް އައުޓްޕުޓް އަށް ސެޓް ކުރެވިދާނެ، out.XXX = 'MSG';
})
```

`Debug` އަށް ފިތާލުމަށްފަހު މުޅި ނެޓްވޯކަށް ޕަބްލިޝް އަށް ކްލިކް ކުރާށެވެ.

![](//p.3ti.site/1725437754.avif)

## އެޑްވާންސްޑް ޔޫސޭޖް: ސަރަހައްދީ ރިޒޮލިއުޝަނަށް ބަލައިގެން ޓްރެފިކް ބެހުމަށް

ޗައިނާގެ ބިންގަނޑުގައި ހިދުމަތް ދޭން ބޭނުންނަމަ އަދި `cloudflare` ހިލޭ ބައިނަލްއަގްވާމީ ޓްރެފިކް ވެސް ބޭނުންނަމަ ސަރަހައްދީ ރިޒޮލިއުޝަން އާއި އެކު `DNS` ބޭނުން ކުރެވިދާނެ އެވެ.

މިސާލަކަށް [ވާވޭ DNS](https://www.huaweicloud.com) `cloudflare`

`cloudflare` ގެ ކޮންފިގްރޭޝަންގައި ގިނަ ވަޅުގަނޑުތަކެއް ހުރެއެވެ.މިއީ ފާހަގަކޮށްލަންޖެހޭ މަދު ނުކުތާތަކެއް :

### ޑޮމެއިން ނަން ހޯސްޓް ކުރެވިފައިވަނީ އެހެން `DNS` ގައި , ބޭނުންކުރާނެ ގޮތް `cloudflare`

ފުރަތަމަ އަމިއްލައަށް ޑޮމެއިން ނަމެއް `cloudflare` އަށް ބައިންޑްކޮށް، ދެން `SSL/TLS` → ކަސްޓަމް ޑޮމެއިން ނަން ބޭނުންކޮށްގެން މައިގަނޑު ޑޮމެއިން ނަން މި ޑޮމެއިން ނަމާއި ގުޅުވައިލާށެވެ.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` ކަސްޓަމް ޑޮމެއިން ނަމެއް މެދުވެރިކޮށް އެކްސެސް ނުކުރެވޭނެއެވެ

ބިލްޓް `cloudflare` އިން އޮބްޖެކްޓް ސްޓޯރޭޖް `R2` ކަސްޓަމައިޒް ކޮށްފައިވާ ޑޮމެއިން ނަމަކުން އެކްސެސް ނުކުރެވޭތީ، ސްޓޭޓިކް ފައިލްތައް ބެހެއްޓުމަށް ތިންވަނަ ފަރާތެއްގެ އޮބްޖެކްޓް ސްޓޯރޭޖެއް ބޭނުން ކުރަން ޖެހެއެވެ.

[backblaze.com](https://www.backblaze.com) އަޅުގަނޑުމެން މިސާލެއްގެ ގޮތުން ނަގަނީ `cloudflare` ގައި ރައްކާކުރަންޖެހޭ ތިންވަނަ ފަރާތެއްގެ ތަކެތި ބައިންޑް ކުރާނެ ގޮތް ދައްކާލުމަށެވެ.

`backblaze.com` ގައި ބާލިދީއެއް އުފައްދައި، ކޮންމެ ފައިލެއް އަޕްލޯޑްކޮށް، ފައިލް ބްރައުޒް ކުރުމަށް ކްލިކްކޮށް، `Friendly URL` ގެ ޑޮމެއިން ނަން ހޯދާ، މިއީ މިތަނުގައި `f003.backblazeb2.com` .

![](//p.3ti.site/1725440783.avif)

ޑޮމެއިން ނަން `cloudflare` ގައި `CNAME` އިން `f003.backblazeb2.com` އަށް ބަދަލުކޮށް ޕްރޮކްސީ އެނެބަލް ކުރުން.

![](//p.3ti.site/1725440896.avif)

`SSL` އިން `cloudflare` ބަދަލުކުރުން → އެންކްރިޕްޝަން މޯޑް، `Full` އަށް ސެޓްކުރުން

![](//p.3ti.site/1725438572.avif)

ތިރީގައިވާ ގޮތަށް ބަދަލުކުރުމުގެ އުސޫލު އިތުރުކޮށް، ފުރަތަމަ ބެހެއްޓުން (ފުރަތަމަ އެއްޗަކަށް އެންމެ އިސްކަންދެނީ):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` ޑައިނަމިކް ހޮވައި `your_bucketname` އިން `concat("/file/your_bucketname",http.request.uri.path)` ތިބާގެ ބާކެޓް ނަމަށް ބަދަލުކުރުން.

މީގެ އިތުރުން މަތީގައިވާ `cloudflare` ބަދަލުކުރުމުގެ އުސޫލުގައި `index.html` `file/your_bucketname/index.html` އަށް ބަދަލުކޮށް، އެހެން ކޮންފިގްރޭޝަންތައް ވެސް އެގޮތުގައި ހުރެއެވެ.

![](//p.3ti.site/1725441384.avif)