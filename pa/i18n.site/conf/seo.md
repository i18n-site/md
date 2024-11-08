# ਖੋਜ ਇੰਜਨ ਔਪਟੀਮਾਈਜੇਸ਼ਨ (SEO)

## ਸਿਧਾਂਤ

`i18n.site` ਇੱਕ ਗੈਰ-ਰਿਫ੍ਰੈਸ਼ ਸਿੰਗਲ ਪੇਜ ਆਰਕੀਟੈਕਚਰ ਨੂੰ ਅਪਣਾਉਂਦਾ ਹੈ ਖੋਜ ਇੰਡੈਕਸਿੰਗ ਦੀ ਸਹੂਲਤ ਲਈ, ਇੱਕ ਵੱਖਰਾ ਸਥਿਰ ਪੰਨਾ ਅਤੇ `sitemap.xml` ਕ੍ਰੌਲਰਾਂ ਲਈ ਤਿਆਰ ਕੀਤਾ ਜਾਵੇਗਾ।

ਜਦੋਂ ਖੋਜ ਇੰਜਨ ਕ੍ਰਾਲਰ ਦੁਆਰਾ ਪਹੁੰਚ ਬੇਨਤੀ ਦਾ `User-Agent` ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ, ਤਾਂ ਬੇਨਤੀ ਨੂੰ `302` ਦੁਆਰਾ ਸਥਿਰ ਪੰਨੇ 'ਤੇ ਰੀਡਾਇਰੈਕਟ ਕੀਤਾ ਜਾਵੇਗਾ।

ਸਥਿਰ ਪੰਨਿਆਂ 'ਤੇ, ਇਸ ਪੰਨੇ ਦੇ ਵੱਖ-ਵੱਖ ਭਾਸ਼ਾ ਸੰਸਕਰਣਾਂ ਲਈ ਲਿੰਕ ਦਰਸਾਉਣ ਲਈ `link` ਵਰਤੋਂ ਕਰੋ, ਜਿਵੇਂ ਕਿ :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## ਸਥਾਨਕ nginx ਸੰਰਚਨਾ

ਇੱਕ ਉਦਾਹਰਣ ਦੇ ਤੌਰ 'ਤੇ ਡੈਮੋ ਪ੍ਰੋਜੈਕਟ ਵਿੱਚ `.i18n/htm/main.yml` ਸੰਰਚਨਾ ਫਾਈਲ ਨੂੰ ਲਓ

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

ਕਿਰਪਾ ਕਰਕੇ ਪਹਿਲਾਂ ਆਪਣੇ ਡੋਮੇਨ ਨਾਮ ਦੇ ਉੱਪਰ `host:` ਦੇ ਮੁੱਲ ਨੂੰ ਸੋਧੋ, ਜਿਵੇਂ ਕਿ `xxx.com` ।

ਫਿਰ, `i18n.site -n` , ਸਥਿਰ ਪੰਨਾ `out/main/htm` ਡਾਇਰੈਕਟਰੀ ਵਿੱਚ ਤਿਆਰ ਕੀਤਾ ਜਾਵੇਗਾ।

ਬੇਸ਼ੱਕ, ਤੁਸੀਂ ਹੋਰ ਸੰਰਚਨਾ ਫਾਈਲਾਂ ਨੂੰ ਵੀ ਸਮਰੱਥ ਕਰ ਸਕਦੇ ਹੋ, ਜਿਵੇਂ ਕਿ ਪਹਿਲਾਂ `.i18n/htm/dist.package.json` ਅਤੇ `.i18n/htm/dist.yml` ਬਣਾਉਣ ਲਈ `main` ਦੀ ਸੰਰਚਨਾ ਦਾ ਹਵਾਲਾ ਦੇਣਾ।

ਫਿਰ `i18n.site -n -c dist` ਚਲਾਓ ਤਾਂ ਕਿ ਸਥਿਰ ਪੰਨਾ `out/dist/htm` ਤੱਕ ਤਿਆਰ ਕੀਤਾ ਜਾ ਸਕੇ।

`nginx` ਹੇਠਾਂ ਦਿੱਤੀ ਸੰਰਚਨਾ ਦਾ ਹਵਾਲਾ ਦੇ ਕੇ ਸੈੱਟ ਕੀਤਾ ਜਾ ਸਕਦਾ ਹੈ।

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# ਸਰਵਰ ਵਰਕਰ ਸਕ੍ਰਿਪਟਾਂ ਨੂੰ ਬਹੁਤ ਲੰਬੇ ਸਮੇਂ ਲਈ ਕੈਸ਼ ਨਾ ਕਰੋ
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# ਹੋਰ ਸਥਿਰ ਸਰੋਤਾਂ ਲਈ ਲੰਬਾ ਕੈਸ਼ ਸਮਾਂ ਸੈੱਟ ਕਰੋ
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# ਸੈੱਟ ਕਰੋ ਕਿ ਕ੍ਰਾਲਰ ਹੋਮਪੇਜ ਐਂਟਰੀ ਵਜੋਂ ਕਿਹੜੀ ਸਥਿਰ ਫ਼ਾਈਲ ਦੀ ਵਰਤੋਂ ਕਰਦਾ ਹੈ
location = / {
  # ਜੇਕਰ $botLang
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# ਸਿੰਗਲ ਪੇਜ ਐਪਲੀਕੇਸ਼ਨ ਕੌਂਫਿਗਰੇਸ਼ਨ
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## ਸਥਿਰ ਫਾਈਲਾਂ ਨੂੰ ਅਪਲੋਡ ਕਰਨ ਲਈ ਆਬਜੈਕਟ ਸਟੋਰੇਜ ਨੂੰ ਕੌਂਫਿਗਰ ਕਰੋ

ਸਥਿਰ ਫਾਈਲਾਂ ਸਥਾਨਕ ਤੌਰ 'ਤੇ ਤਿਆਰ ਕੀਤੀਆਂ ਜਾ ਸਕਦੀਆਂ ਹਨ, ਪਰ ਇੱਕ ਵਧੇਰੇ ਆਮ ਪਹੁੰਚ ਉਹਨਾਂ ਨੂੰ ਆਬਜੈਕਟ ਸਟੋਰੇਜ ਵਿੱਚ ਅਪਲੋਡ ਕਰਨਾ ਹੈ।

ਉੱਪਰ ਸੰਰਚਿਤ `out` ਨੂੰ ਸੰਸ਼ੋਧਿਤ ਕਰੋ :

```
out:
  - s3
```

ਫਿਰ, `~/.config/i18n.site.yml` ਸੋਧੋ ਅਤੇ ਹੇਠ ਦਿੱਤੀ ਸੰਰਚਨਾ ਜੋੜੋ :

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

ਸੰਰਚਨਾ ਵਿੱਚ, ਕਿਰਪਾ ਕਰਕੇ `i18n.site` `.i18n/htm/main.yml` ਵਿੱਚ `host:` ਦੇ ਮੁੱਲ ਵਿੱਚ ਬਦਲੋ, ਮਲਟੀਪਲ ਆਬਜੈਕਟ ਸਟੋਰਾਂ ਨੂੰ `s3` ਦੇ ਹੇਠਾਂ ਸੰਰਚਿਤ ਕੀਤਾ ਜਾ ਸਕਦਾ ਹੈ, ਅਤੇ `region` ਖੇਤਰ ਵਿਕਲਪਿਕ ਹੈ (ਬਹੁਤ ਸਾਰੇ ਆਬਜੈਕਟ ਸਟੋਰਾਂ ਨੂੰ ਇਸ ਖੇਤਰ ਨੂੰ ਸੈੱਟ ਕਰਨ ਦੀ ਲੋੜ ਨਹੀਂ ਹੈ)।

ਫਿਰ ਪ੍ਰੋਜੈਕਟ ਨੂੰ ਮੁੜ ਪ੍ਰਕਾਸ਼ਿਤ ਕਰਨ ਲਈ `i18n.site -n` ਚਲਾਓ।

ਜੇਕਰ ਤੁਸੀਂ `~/.config/i18n.site.yml` ਸੋਧਿਆ ਹੈ ਅਤੇ ਮੁੜ-ਅੱਪਲੋਡ ਕਰਨਾ ਚਾਹੁੰਦੇ ਹੋ, ਤਾਂ ਕਿਰਪਾ ਕਰਕੇ ਅੱਪਲੋਡ ਕੈਸ਼ ਨੂੰ ਸਾਫ਼ ਕਰਨ ਲਈ ਪ੍ਰੋਜੈਕਟ ਰੂਟ ਡਾਇਰੈਕਟਰੀ ਵਿੱਚ ਹੇਠ ਦਿੱਤੀ ਕਮਾਂਡ ਦੀ ਵਰਤੋਂ ਕਰੋ :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## cloudflare ਸੰਰਚਨਾ

ਡੋਮੇਨ ਨਾਮ [cloudflare](//www.cloudflare.com)

### ਪਰਿਵਰਤਨ ਨਿਯਮ

ਹੇਠਾਂ ਦਰਸਾਏ ਅਨੁਸਾਰ ਰੂਪਾਂਤਰਨ ਨਿਯਮ ਸ਼ਾਮਲ ਕਰੋ:

![](//p.3ti.site/1725436822.avif)

ਨਿਯਮ ਕੋਡ ਹੇਠ ਲਿਖੇ ਅਨੁਸਾਰ ਹੈ, ਕਿਰਪਾ ਕਰਕੇ ਕੋਡ "i18n.site" ਨੂੰ ਆਪਣੇ ਡੋਮੇਨ ਨਾਮ ਵਿੱਚ ਸੋਧੋ:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### ਕੈਸ਼ਿੰਗ ਨਿਯਮ

ਹੇਠਾਂ ਦਿੱਤੇ ਕੈਸ਼ ਨਿਯਮ ਸ਼ਾਮਲ ਕਰੋ:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### ਰੀਡਾਇਰੈਕਟ ਨਿਯਮ

ਰੀਡਾਇਰੈਕਸ਼ਨ ਨਿਯਮਾਂ ਨੂੰ ਹੇਠਾਂ ਦਿੱਤੇ ਅਨੁਸਾਰ ਸੈਟ ਕਰੋ, ਕਿਰਪਾ ਕਰਕੇ ਕੋਡ "i18n.site" ਨੂੰ ਆਪਣੇ ਡੋਮੇਨ ਨਾਮ ਵਿੱਚ ਸੋਧੋ

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

`URL redirect` ਗਤੀਸ਼ੀਲ ਰੀਡਾਇਰੈਕਸ਼ਨ ਦੀ ਚੋਣ ਕਰੋ, ਕਿਰਪਾ ਕਰਕੇ ਰੀਡਾਇਰੈਕਸ਼ਨ ਮਾਰਗ `concat("/en",http.request.uri.path,".htm")` ਵਿੱਚ `/en` ਡਿਫੌਲਟ ਭਾਸ਼ਾ ਵਿੱਚ ਸੰਸ਼ੋਧਿਤ ਕਰੋ ਜਿਸਨੂੰ ਤੁਸੀਂ ਖੋਜ ਇੰਜਣ ਸ਼ਾਮਲ ਕਰਨਾ ਚਾਹੁੰਦੇ ਹੋ।

## Baidu ਇੰਟੈਲੀਜੈਂਟ ਕਲਾਊਡ ਕੌਂਫਿਗਰੇਸ਼ਨ

ਜੇਕਰ ਤੁਹਾਨੂੰ ਮੁੱਖ ਭੂਮੀ ਚੀਨ ਨੂੰ ਸੇਵਾਵਾਂ ਪ੍ਰਦਾਨ ਕਰਨ ਦੀ ਲੋੜ ਹੈ, ਤਾਂ ਤੁਸੀਂ [Baidu Smart Cloud ਦੀ](//cloud.baidu.com) ਵਰਤੋਂ ਕਰ ਸਕਦੇ ਹੋ।

ਡਾਟਾ Baidu ਵਸਤੂ ਸਟੋਰੇਜ਼ 'ਤੇ ਅੱਪਲੋਡ ਕੀਤਾ ਜਾਂਦਾ ਹੈ ਅਤੇ Baidu ਸਮੱਗਰੀ ਵੰਡ ਨੈੱਟਵਰਕ ਨਾਲ ਬੰਨ੍ਹਿਆ ਜਾਂਦਾ ਹੈ।

ਫਿਰ ਹੇਠ ਲਿਖੇ ਅਨੁਸਾਰ [EdgeJS ਸੇਵਾ](//console.bce.baidu.com/cdn/#/cdn/ejs/list) ਵਿੱਚ ਸਕ੍ਰਿਪਟ ਬਣਾਓ

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
  // ਤੁਸੀਂ ਆਉਟਪੁੱਟ ਨੂੰ ਡੀਬੱਗ ਕਰਨ ਲਈ ਜਵਾਬ ਸਿਰਲੇਖ ਸੈੱਟ ਕਰ ਸਕਦੇ ਹੋ, ਜਿਵੇਂ ਕਿ out.XXX = 'MSG';
})
```

`Debug` ਤੇ ਕਲਿੱਕ ਕਰੋ, ਫਿਰ ਪੂਰੇ ਨੈੱਟਵਰਕ 'ਤੇ ਪ੍ਰਕਾਸ਼ਿਤ ਕਰੋ 'ਤੇ ਕਲਿੱਕ ਕਰੋ।

![](//p.3ti.site/1725437754.avif)

## ਉੱਨਤ ਵਰਤੋਂ: ਖੇਤਰੀ ਰੈਜ਼ੋਲੂਸ਼ਨ ਦੇ ਅਧਾਰ ਤੇ ਟ੍ਰੈਫਿਕ ਵੰਡੋ

ਜੇਕਰ ਤੁਸੀਂ ਮੁੱਖ ਭੂਮੀ ਚੀਨ ਵਿੱਚ ਸੇਵਾਵਾਂ ਪ੍ਰਦਾਨ ਕਰਨਾ ਚਾਹੁੰਦੇ ਹੋ ਅਤੇ `cloudflare` ਮੁਫ਼ਤ ਅੰਤਰਰਾਸ਼ਟਰੀ ਆਵਾਜਾਈ ਵੀ ਚਾਹੁੰਦੇ ਹੋ, ਤਾਂ ਤੁਸੀਂ ਖੇਤਰੀ ਰੈਜ਼ੋਲਿਊਸ਼ਨ ਦੇ ਨਾਲ `DNS` ਵਰਤੋਂ ਕਰ ਸਕਦੇ ਹੋ।

ਉਦਾਹਰਨ ਲਈ, [ਹੁਆਵੇਈ DNS](https://www.huaweicloud.com) ਮੁਫ਼ਤ ਖੇਤਰੀ ਵਿਸ਼ਲੇਸ਼ਣ ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ, ਜਿਸ ਨਾਲ ਮੁੱਖ ਭੂਮੀ ਚੀਨੀ ਟ੍ਰੈਫਿਕ Baidu ਸਮਾਰਟ ਕਲਾਊਡ ਰਾਹੀਂ ਜਾ ਸਕਦਾ ਹੈ, ਅਤੇ ਅੰਤਰਰਾਸ਼ਟਰੀ ਆਵਾਜਾਈ `cloudflare` ਦੁਆਰਾ ਜਾ ਸਕਦੀ ਹੈ।

`cloudflare` ਦੀ ਸੰਰਚਨਾ ਵਿੱਚ ਬਹੁਤ ਸਾਰੀਆਂ ਕਮੀਆਂ ਹਨ। ਇੱਥੇ ਨੋਟ ਕਰਨ ਲਈ ਕੁਝ ਨੁਕਤੇ ਹਨ :

### ਡੋਮੇਨ ਨਾਮ ਹੋਰ `DNS` ਵਿੱਚ ਹੋਸਟ ਕੀਤਾ ਗਿਆ ਹੈ, `cloudflare` ਵਰਤੋਂ ਕਿਵੇਂ ਕਰੀਏ

ਪਹਿਲਾਂ ਇੱਕ ਆਰਬਿਟਰਰੀ ਡੋਮੇਨ ਨਾਮ ਨੂੰ `cloudflare` ਨਾਲ ਬੰਨ੍ਹੋ, ਅਤੇ ਫਿਰ ਇਸ ਡੋਮੇਨ ਨਾਮ ਨਾਲ ਮੁੱਖ ਡੋਮੇਨ ਨਾਮ ਨੂੰ ਜੋੜਨ ਲਈ `SSL/TLS` → ਕਸਟਮ ਡੋਮੇਨ ਨਾਮ ਦੀ ਵਰਤੋਂ ਕਰੋ।

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` ਇੱਕ ਕਸਟਮ ਡੋਮੇਨ ਨਾਮ ਦੁਆਰਾ ਐਕਸੈਸ ਨਹੀਂ ਕੀਤਾ ਜਾ ਸਕਦਾ ਹੈ

ਕਿਉਂਕਿ ਬਿਲਟ `cloudflare` ਇਨ ਆਬਜੈਕਟ ਸਟੋਰੇਜ `R2` ਇੱਕ ਅਨੁਕੂਲਿਤ ਡੋਮੇਨ ਨਾਮ ਦੁਆਰਾ ਐਕਸੈਸ ਨਹੀਂ ਕੀਤਾ ਜਾ ਸਕਦਾ ਹੈ, ਇੱਕ ਤੀਜੀ-ਧਿਰ ਆਬਜੈਕਟ ਸਟੋਰੇਜ ਨੂੰ ਸਥਿਰ ਫਾਈਲਾਂ ਨੂੰ ਰੱਖਣ ਲਈ ਵਰਤਣ ਦੀ ਲੋੜ ਹੈ।

ਇੱਥੇ ਅਸੀਂ [backblaze.com](https://www.backblaze.com) ਦਰਸਾਉਣ ਲਈ ਇੱਕ ਉਦਾਹਰਣ ਦੇ ਤੌਰ 'ਤੇ ਲੈਂਦੇ ਹਾਂ `cloudflare` 'ਤੇ ਸਟੋਰ ਕੀਤੇ ਜਾਣ ਵਾਲੇ ਥਰਡ-ਪਾਰਟੀ ਆਬਜੈਕਟ ਨੂੰ ਕਿਵੇਂ ਬੰਨ੍ਹਣਾ ਹੈ।

`backblaze.com` ਤੇ ਇੱਕ ਬਾਲਟੀ ਬਣਾਓ, ਕੋਈ ਵੀ ਫ਼ਾਈਲ ਅੱਪਲੋਡ ਕਰੋ, ਫ਼ਾਈਲ ਨੂੰ ਬ੍ਰਾਊਜ਼ ਕਰਨ ਲਈ ਕਲਿੱਕ ਕਰੋ, ਅਤੇ `Friendly URL` ਦਾ ਡੋਮੇਨ ਨਾਮ ਪ੍ਰਾਪਤ ਕਰੋ, ਜੋ ਕਿ ਇੱਥੇ `f003.backblazeb2.com` ਹੈ।

![](//p.3ti.site/1725440783.avif)

ਡੋਮੇਨ ਨਾਮ ਨੂੰ `CNAME` ਤੋਂ `f003.backblazeb2.com` ਤੱਕ `cloudflare` ਤੇ ਬਦਲੋ ਅਤੇ ਪ੍ਰੌਕਸੀ ਨੂੰ ਸਮਰੱਥ ਬਣਾਓ।

![](//p.3ti.site/1725440896.avif)

`SSL` ਵਿੱਚੋਂ `cloudflare` ਸੋਧੋ → ਇਨਕ੍ਰਿਪਸ਼ਨ ਮੋਡ, `Full` ਤੇ ਸੈੱਟ ਕਰੋ

![](//p.3ti.site/1725438572.avif)

ਹੇਠਾਂ ਦਰਸਾਏ ਅਨੁਸਾਰ ਰੂਪਾਂਤਰਨ ਨਿਯਮ ਸ਼ਾਮਲ ਕਰੋ, ਇਸਨੂੰ ਪਹਿਲਾਂ ਰੱਖੋ (ਪਹਿਲੇ ਦੀ ਸਭ ਤੋਂ ਘੱਟ ਤਰਜੀਹ ਹੈ):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` ਡਾਇਨਾਮਿਕ ਚੁਣੋ ਅਤੇ ਆਪਣੇ ਬਾਲਟੀ ਨਾਮ ਵਿੱਚ `concat("/file/your_bucketname",http.request.uri.path)` ਵਿੱਚ `your_bucketname` ਨੂੰ ਸੋਧੋ।

ਇਸ ਤੋਂ ਇਲਾਵਾ, ਉਪਰੋਕਤ `cloudflare` ਪਰਿਵਰਤਨ ਨਿਯਮ ਵਿੱਚ, `index.html` ਨੂੰ `file/your_bucketname/index.html` ਵਿੱਚ ਬਦਲਿਆ ਗਿਆ ਹੈ, ਅਤੇ ਹੋਰ ਸੰਰਚਨਾਵਾਂ ਉਹੀ ਰਹਿੰਦੀਆਂ ਹਨ।

![](//p.3ti.site/1725441384.avif)