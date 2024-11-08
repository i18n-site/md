# ಸರ್ಚ್ ಇಂಜಿನ್ ಆಪ್ಟಿಮೈಸೇಶನ್ (SEO)

## ತತ್ವ

`i18n.site` ರಿಫ್ರೆಶ್ ಮಾಡದ ಸಿಂಗಲ್ ಪೇಜ್ ಆರ್ಕಿಟೆಕ್ಚರ್ ಅನ್ನು ಅಳವಡಿಸಿಕೊಳ್ಳುತ್ತದೆ `sitemap.xml`

ಹುಡುಕಾಟ ಎಂಜಿನ್ ಕ್ರಾಲರ್ ಮೂಲಕ ಪ್ರವೇಶ ವಿನಂತಿಯ `User-Agent` ಬಳಸಿದಾಗ, ವಿನಂತಿಯನ್ನು `302` ಮೂಲಕ ಸ್ಥಿರ ಪುಟಕ್ಕೆ ಮರುನಿರ್ದೇಶಿಸಲಾಗುತ್ತದೆ.

ಸ್ಥಿರ ಪುಟಗಳಲ್ಲಿ, ಈ ಪುಟದ ವಿವಿಧ ಭಾಷೆಯ ಆವೃತ್ತಿಗಳಿಗೆ ಲಿಂಕ್ಗಳನ್ನು ಸೂಚಿಸಲು `link` ಬಳಸಿ, ಉದಾಹರಣೆಗೆ :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## ಸ್ಥಳೀಯ nginx ಕಾನ್ಫಿಗರೇಶನ್

ಡೆಮೊ ಯೋಜನೆಯಲ್ಲಿ `.i18n/htm/main.yml` ಕಾನ್ಫಿಗರೇಶನ್ ಫೈಲ್ ಅನ್ನು ಉದಾಹರಣೆಯಾಗಿ ತೆಗೆದುಕೊಳ್ಳಿ

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

ದಯವಿಟ್ಟು ಮೊದಲು ಮೇಲಿನ `host:` ಮೌಲ್ಯವನ್ನು ನಿಮ್ಮ ಡೊಮೇನ್ ಹೆಸರಿಗೆ ಮಾರ್ಪಡಿಸಿ, ಉದಾಹರಣೆಗೆ `xxx.com` .

ನಂತರ, `i18n.site -n` , ಸ್ಥಿರ ಪುಟವನ್ನು `out/main/htm` ಡೈರೆಕ್ಟರಿಯಲ್ಲಿ ರಚಿಸಲಾಗುತ್ತದೆ.

ಸಹಜವಾಗಿ, ನೀವು ಇತರ ಕಾನ್ಫಿಗರೇಶನ್ ಫೈಲ್ಗಳನ್ನು ಸಹ ಸಕ್ರಿಯಗೊಳಿಸಬಹುದು, ಉದಾಹರಣೆಗೆ `.i18n/htm/dist.package.json` ಮತ್ತು `.i18n/htm/dist.yml` ಅನ್ನು ರಚಿಸಲು `main` ನ ಕಾನ್ಫಿಗರೇಶನ್ ಅನ್ನು ಮೊದಲು ಉಲ್ಲೇಖಿಸುವುದು.

ನಂತರ `i18n.site -n -c dist` ರನ್ ಮಾಡಿ ಇದರಿಂದ ಸ್ಥಿರ ಪುಟವನ್ನು `out/dist/htm` ಗೆ ರಚಿಸಲಾಗುತ್ತದೆ.

ಕೆಳಗಿನ ಸಂರಚನೆಯನ್ನು ಉಲ್ಲೇಖಿಸುವ ಮೂಲಕ `nginx` ಹೊಂದಿಸಬಹುದು.

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# ಸರ್ವರ್ ವರ್ಕರ್ ಸ್ಕ್ರಿಪ್ಟ್ಗಳನ್ನು ದೀರ್ಘಕಾಲ ಸಂಗ್ರಹಿಸಬೇಡಿ
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# ಇತರ ಸ್ಥಿರ ಸಂಪನ್ಮೂಲಗಳಿಗಾಗಿ ದೀರ್ಘ ಸಂಗ್ರಹ ಸಮಯವನ್ನು ಹೊಂದಿಸಿ
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# ಕ್ರಾಲರ್ ಯಾವ ಸ್ಥಿರ ಫೈಲ್ ಅನ್ನು ಮುಖಪುಟ ಪ್ರವೇಶವಾಗಿ ಬಳಸುತ್ತದೆ ಎಂಬುದನ್ನು ಹೊಂದಿಸಿ
location = / {
  # ಒಂದು ವೇಳೆ $botLang
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# ಏಕ ಪುಟದ ಅಪ್ಲಿಕೇಶನ್ ಕಾನ್ಫಿಗರೇಶನ್
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## ಸ್ಥಿರ ಫೈಲ್ಗಳನ್ನು ಅಪ್ಲೋಡ್ ಮಾಡಲು ವಸ್ತು ಸಂಗ್ರಹಣೆಯನ್ನು ಕಾನ್ಫಿಗರ್ ಮಾಡಿ

ಸ್ಥಿರ ಫೈಲ್ಗಳನ್ನು ಸ್ಥಳೀಯವಾಗಿ ರಚಿಸಬಹುದು, ಆದರೆ ಅವುಗಳನ್ನು ವಸ್ತು ಸಂಗ್ರಹಣೆಗೆ ಅಪ್ಲೋಡ್ ಮಾಡುವುದು ಹೆಚ್ಚು ಸಾಮಾನ್ಯ ವಿಧಾನವಾಗಿದೆ.

ಮೇಲೆ ಕಾನ್ಫಿಗರ್ ಮಾಡಲಾದ `out` ಮಾರ್ಪಡಿಸಿ :

```
out:
  - s3
```

ನಂತರ, `~/.config/i18n.site.yml` ಸಂಪಾದಿಸಿ ಮತ್ತು ಕೆಳಗಿನ ಸಂರಚನೆಯನ್ನು ಸೇರಿಸಿ :

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

ಕಾನ್ಫಿಗರೇಶನ್ನಲ್ಲಿ, ದಯವಿಟ್ಟು `i18n.site` `.i18n/htm/main.yml` ರಲ್ಲಿ `host:` ರ ಮೌಲ್ಯಕ್ಕೆ ಬದಲಾಯಿಸಿ, ಬಹು ಆಬ್ಜೆಕ್ಟ್ ಸ್ಟೋರ್ಗಳನ್ನು `s3` ಅಡಿಯಲ್ಲಿ ಕಾನ್ಫಿಗರ್ ಮಾಡಬಹುದು ಮತ್ತು `region` ಕ್ಷೇತ್ರವು ಐಚ್ಛಿಕವಾಗಿರುತ್ತದೆ (ಹಲವು ಆಬ್ಜೆಕ್ಟ್ ಸ್ಟೋರ್ಗಳು ಈ ಕ್ಷೇತ್ರವನ್ನು ಹೊಂದಿಸುವ ಅಗತ್ಯವಿಲ್ಲ).

ನಂತರ ಪ್ರಾಜೆಕ್ಟ್ ಅನ್ನು ಮರುಪ್ರಕಟಿಸಲು `i18n.site -n` ರನ್ ಮಾಡಿ.

ನೀವು `~/.config/i18n.site.yml` ಮಾರ್ಪಡಿಸಿದ್ದರೆ ಮತ್ತು ಮರು-ಅಪ್ಲೋಡ್ ಮಾಡಲು ಬಯಸಿದರೆ, ದಯವಿಟ್ಟು ಅಪ್ಲೋಡ್ ಸಂಗ್ರಹವನ್ನು ತೆರವುಗೊಳಿಸಲು ಪ್ರಾಜೆಕ್ಟ್ ರೂಟ್ ಡೈರೆಕ್ಟರಿಯಲ್ಲಿ ಈ ಕೆಳಗಿನ ಆಜ್ಞೆಯನ್ನು ಬಳಸಿ :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## ಕ್ಲೌಡ್ಫ್ಲೇರ್ ಕಾನ್ಫಿಗರೇಶನ್

ಡೊಮೇನ್ ಹೆಸರನ್ನು ಹೋಸ್ಟ್ ಮಾಡಲಾಗಿದೆ [cloudflare](//www.cloudflare.com)

### ಪರಿವರ್ತನೆ ನಿಯಮಗಳು

ಕೆಳಗೆ ತೋರಿಸಿರುವಂತೆ ಪರಿವರ್ತನೆ ನಿಯಮಗಳನ್ನು ಸೇರಿಸಿ:

![](//p.3ti.site/1725436822.avif)

ನಿಯಮ ಕೋಡ್ ಈ ಕೆಳಗಿನಂತಿದೆ, ದಯವಿಟ್ಟು ನಿಮ್ಮ ಡೊಮೇನ್ ಹೆಸರಿಗೆ "i18n.site" ಕೋಡ್ ಅನ್ನು ಮಾರ್ಪಡಿಸಿ:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### ಹಿಡಿದಿಟ್ಟುಕೊಳ್ಳುವ ನಿಯಮಗಳು

ಸಂಗ್ರಹ ನಿಯಮಗಳನ್ನು ಈ ಕೆಳಗಿನಂತೆ ಸೇರಿಸಿ:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### ಮರುನಿರ್ದೇಶನ ನಿಯಮಗಳು

ಮರುನಿರ್ದೇಶನ ನಿಯಮಗಳನ್ನು ಈ ಕೆಳಗಿನಂತೆ ಹೊಂದಿಸಿ, ದಯವಿಟ್ಟು "i18n.site" ಕೋಡ್ ಅನ್ನು ನಿಮ್ಮ ಡೊಮೇನ್ ಹೆಸರಿಗೆ ಮಾರ್ಪಡಿಸಿ

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

`URL redirect` ಡೈನಾಮಿಕ್ ಮರುನಿರ್ದೇಶನವನ್ನು ಆಯ್ಕೆಮಾಡಿ, ಮರುನಿರ್ದೇಶನ ಮಾರ್ಗ `concat("/en",http.request.uri.path,".htm")` ರಲ್ಲಿ `/en` ದಯವಿಟ್ಟು ಸರ್ಚ್ ಇಂಜಿನ್ಗಳನ್ನು ಸೇರಿಸಲು ನೀವು ಬಯಸುವ ಡೀಫಾಲ್ಟ್ ಭಾಷೆಗೆ ಮಾರ್ಪಡಿಸಿ.

## Baidu ಇಂಟೆಲಿಜೆಂಟ್ ಕ್ಲೌಡ್ ಕಾನ್ಫಿಗರೇಶನ್

ನೀವು ಚೀನಾದ ಮುಖ್ಯ ಭೂಭಾಗಕ್ಕೆ ಸೇವೆಗಳನ್ನು ಒದಗಿಸಬೇಕಾದರೆ, ನೀವು [Baidu ಸ್ಮಾರ್ಟ್ ಕ್ಲೌಡ್ ಅನ್ನು](//cloud.baidu.com) ಬಳಸಬಹುದು.

Baidu ಆಬ್ಜೆಕ್ಟ್ ಸಂಗ್ರಹಣೆಗೆ ಡೇಟಾವನ್ನು ಅಪ್ಲೋಡ್ ಮಾಡಲಾಗಿದೆ ಮತ್ತು Baidu ವಿಷಯ ವಿತರಣಾ ನೆಟ್ವರ್ಕ್ಗೆ ಬದ್ಧವಾಗಿದೆ.

ನಂತರ ಸ್ಕ್ರಿಪ್ಟ್ ಅನ್ನು ಈ ಕೆಳಗಿನಂತೆ [EdgeJS ಸೇವೆಯಲ್ಲಿ](//console.bce.baidu.com/cdn/#/cdn/ejs/list) ರಚಿಸಿ

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
  // ಔಟ್ಪುಟ್ನಂತಹ ಡೀಬಗ್ ಔಟ್ಪುಟ್ಗೆ ಪ್ರತಿಕ್ರಿಯೆ ಹೆಡರ್ಗಳನ್ನು ಹೊಂದಿಸಬಹುದು.XXX = 'MSG';
})
```

`Debug` ಕ್ಲಿಕ್ ಮಾಡಿ, ನಂತರ ಸಂಪೂರ್ಣ ನೆಟ್ವರ್ಕ್ಗೆ ಪ್ರಕಟಿಸಿ ಕ್ಲಿಕ್ ಮಾಡಿ.

![](//p.3ti.site/1725437754.avif)

## ಸುಧಾರಿತ ಬಳಕೆ: ಪ್ರಾದೇಶಿಕ ನಿರ್ಣಯದ ಆಧಾರದ ಮೇಲೆ ದಟ್ಟಣೆಯನ್ನು ವಿತರಿಸಿ

ನೀವು ಚೀನಾದ ಮುಖ್ಯ ಭೂಭಾಗದಲ್ಲಿ ಸೇವೆಗಳನ್ನು ಒದಗಿಸಲು ಬಯಸಿದರೆ ಮತ್ತು `cloudflare` ಉಚಿತ ಅಂತರಾಷ್ಟ್ರೀಯ ಸಂಚಾರವನ್ನು ಬಯಸಿದರೆ, ನೀವು ಪ್ರಾದೇಶಿಕ ರೆಸಲ್ಯೂಶನ್ನೊಂದಿಗೆ `DNS` ಬಳಸಬಹುದು.

ಉದಾಹರಣೆಗೆ `cloudflare` [Huawei Cloud DNS](https://www.huaweicloud.com)

`cloudflare` ರ ಸಂರಚನೆಯಲ್ಲಿ ಹಲವು ಮೋಸಗಳಿವೆ. ಇಲ್ಲಿ ಗಮನಿಸಬೇಕಾದ ಕೆಲವು ಅಂಶಗಳಿವೆ :

### ಡೊಮೇನ್ ಹೆಸರನ್ನು ಇತರ `DNS` ನಲ್ಲಿ ಹೋಸ್ಟ್ ಮಾಡಲಾಗಿದೆ, `cloudflare` ಹೇಗೆ ಬಳಸುವುದು

ಮೊದಲು ಅನಿಯಂತ್ರಿತ ಡೊಮೇನ್ ಹೆಸರನ್ನು `cloudflare` ಗೆ ಬಂಧಿಸಿ, ತದನಂತರ ಈ ಡೊಮೇನ್ ಹೆಸರಿಗೆ ಮುಖ್ಯ ಡೊಮೇನ್ ಹೆಸರನ್ನು ಸಂಯೋಜಿಸಲು `SSL/TLS` → ಕಸ್ಟಮ್ ಡೊಮೇನ್ ಹೆಸರನ್ನು ಬಳಸಿ.

![](https://p.3ti.site/1725438658.avif)

### ಕಸ್ಟಮ್ ಡೊಮೇನ್ ಹೆಸರಿನ ಮೂಲಕ `cloudflare R2` ಪ್ರವೇಶಿಸಲಾಗುವುದಿಲ್ಲ

ಏಕೆಂದರೆ `cloudflare` ವಸ್ತು ಸಂಗ್ರಹಣೆ `R2` ಕಸ್ಟಮೈಸ್ ಮಾಡಿದ ಡೊಮೇನ್ ಹೆಸರಿನ ಮೂಲಕ ಪ್ರವೇಶಿಸಲಾಗುವುದಿಲ್ಲ, ಸ್ಥಿರ ಫೈಲ್ಗಳನ್ನು ಇರಿಸಲು ಮೂರನೇ ವ್ಯಕ್ತಿಯ ವಸ್ತು ಸಂಗ್ರಹಣೆಯನ್ನು ಬಳಸಬೇಕಾಗುತ್ತದೆ.

`cloudflare` ನಲ್ಲಿ ಶೇಖರಿಸಬೇಕಾದ ಮೂರನೇ ವ್ಯಕ್ತಿಯ ವಸ್ತುಗಳನ್ನು ಹೇಗೆ ಬಂಧಿಸುವುದು ಎಂಬುದನ್ನು ಪ್ರದರ್ಶಿಸಲು ನಾವು ಇಲ್ಲಿ ಉದಾಹರಣೆಯಾಗಿ ತೆಗೆದುಕೊಳ್ಳುತ್ತೇವೆ [backblaze.com](https://www.backblaze.com)

`backblaze.com` ನಲ್ಲಿ ಬಕೆಟ್ ರಚಿಸಿ, ಯಾವುದೇ ಫೈಲ್ ಅನ್ನು ಅಪ್ಲೋಡ್ ಮಾಡಿ, ಫೈಲ್ ಅನ್ನು ಬ್ರೌಸ್ ಮಾಡಲು ಕ್ಲಿಕ್ ಮಾಡಿ ಮತ್ತು ಇಲ್ಲಿ `f003.backblazeb2.com` ಆಗಿರುವ `Friendly URL` ರ ಡೊಮೇನ್ ಹೆಸರನ್ನು ಪಡೆಯಿರಿ.

![](//p.3ti.site/1725440783.avif)

ಡೊಮೇನ್ ಹೆಸರನ್ನು `CNAME` ರಿಂದ `f003.backblazeb2.com` ಕ್ಕೆ `cloudflare` ಕ್ಕೆ ಬದಲಾಯಿಸಿ ಮತ್ತು ಪ್ರಾಕ್ಸಿಯನ್ನು ಸಕ್ರಿಯಗೊಳಿಸಿ.

![](//p.3ti.site/1725440896.avif)

`cloudflare` ರಲ್ಲಿ `SSL` → ಎನ್ಕ್ರಿಪ್ಶನ್ ಮೋಡ್ ಅನ್ನು ಮಾರ್ಪಡಿಸಿ, `Full` ಗೆ ಹೊಂದಿಸಿ

![](//p.3ti.site/1725438572.avif)

ಕೆಳಗೆ ತೋರಿಸಿರುವಂತೆ ಪರಿವರ್ತನೆ ನಿಯಮವನ್ನು ಸೇರಿಸಿ, ಅದನ್ನು ಮೊದಲು ಇರಿಸಿ (ಮೊದಲನೆಯದು ಕಡಿಮೆ ಆದ್ಯತೆಯನ್ನು ಹೊಂದಿದೆ):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` ಡೈನಾಮಿಕ್ ಅನ್ನು ಆಯ್ಕೆ ಮಾಡಿ ಮತ್ತು `your_bucketname` ರಲ್ಲಿ `concat("/file/your_bucketname",http.request.uri.path)` ಅನ್ನು ನಿಮ್ಮ ಬಕೆಟ್ ಹೆಸರಿಗೆ ಮಾರ್ಪಡಿಸಿ.

ಹೆಚ್ಚುವರಿಯಾಗಿ, ಮೇಲಿನ `cloudflare` ಪರಿವರ್ತನೆ ನಿಯಮದಲ್ಲಿ, `index.html` `file/your_bucketname/index.html` ಗೆ ಬದಲಾಯಿಸಲಾಗಿದೆ ಮತ್ತು ಇತರ ಸಂರಚನೆಗಳು ಒಂದೇ ಆಗಿರುತ್ತವೆ.

![](//p.3ti.site/1725441384.avif)