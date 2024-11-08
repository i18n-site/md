# Search Engine Optimization (SEO)

## Principles

`i18n.site` adopts a non-refresh single-page architecture. To facilitate search indexing, it generates separate static pages and a `sitemap.xml` for crawlers to crawl.

When the `User-Agent` of the access request is identified as a search engine crawler, the request is redirected to the static page via a `302` status code.

On static pages, use the `link` tag to indicate the links to different language versions of the page, for example:

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## Local Nginx Configuration

Take the `.i18n/htm/main.yml` configuration file in the demo project as an example

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

Please first modify the value of `host:` above to your domain name, such as `xxx.com`.

Then, run `i18n.site -n`, and the static pages will be generated in the `out/main/htm` directory.

Of course, you can also enable other configuration files, such as first referring to the `main` configuration to create `.i18n/htm/dist.package.json` and `.i18n/htm/dist.yml`.

Then run `i18n.site -n -c dist`, and the static pages will be generated in `out/dist/htm`.

`nginx` can be configured as follows:

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# Do not cache server worker scripts for too long
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# Set longer cache times for other static resources
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# Set which static file the crawler uses as the homepage entry
location = / {
  # If $botLang is not empty, it means crawler access and redirection according to the set language path
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# Single-Page Application Configuration
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## Configure Object Storage for Uploading Static Files

Static files can be generated locally, but a more common approach is to upload them to object storage.

Modify the `out` configuration above to:

```
out:
  - s3
```

Then, edit `~/.config/i18n.site.yml` and add the following configuration:

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

In the configuration, please change `i18n.site` to the value of `host:` in `.i18n/htm/main.yml`. Under `s3`, you can configure multiple object storages, and the `region` field is optional (many object storages do not require this field).

Then run `i18n.site -n` to republish the project.

If you have modified `~/.config/i18n.site.yml` and want to re-upload, please use the following command in the project root directory to clear the upload cache:

```
rm -rf .i18n/data/seo .i18n/data/public
```


## Cloudflare Configuration

Host the domain name to [Cloudflare](//www.cloudflare.com).

### Transformation Rules

Add the transformation rules as shown below:

![](//p.3ti.site/1725436822.avif)

The rule code is as follows. Please modify the code "i18n.site" to your domain name:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Cache Rules

Add cache rules as follows:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Redirection Rules

Set the redirection rules as follows. Please modify the code "i18n.site" to your domain name:

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

For `URL redirect`, select dynamic redirection. Please modify `/en` in the redirection path `concat("/en",http.request.uri.path,".htm")` to the default language you want search engines to include.

## Baidu Intelligent Cloud Configuration

If you need to provide services to mainland China, you can use [Baidu Intelligent Cloud](//cloud.baidu.com).

Data is uploaded to Baidu Object Storage and bound to Baidu Content Delivery Network.

Then create the script in [EdgeJS Edge Service](//console.bce.baidu.com/cdn/#/cdn/ejs/list) as follows:

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
  // Response headers can be set to debug output, such as out.XXX = 'MSG';
})
```

Click `Debug`, then click Publish to the entire network.

![](//p.3ti.site/1725437754.avif)

## Advanced Usage: Distribute Traffic Based on Regional Resolution

If you want to provide services in mainland China and also benefit from `cloudflare`'s free international traffic, you can use `DNS` with regional resolution.

For example, [Huawei Cloud DNS](https://www.huaweicloud.com) provides free regional resolution, which allows mainland Chinese traffic to go through Baidu Smart Cloud and international traffic to go through `cloudflare`.

There are several pitfalls in configuring `cloudflare`. Here are a few points to note:

### If the domain is hosted on another `DNS`, how to use `cloudflare`

First, bind an arbitrary domain to `cloudflare`, then use `SSL/TLS` → custom domain to associate the main domain with this domain.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` cannot be accessed through a custom domain

Since `cloudflare`'s built-in object storage `R2` cannot be accessed via a custom domain, you need to use a third-party object storage to host static files.

Here, we take [backblaze.com](https://www.backblaze.com) as an example to demonstrate how to bind a third-party object storage to `cloudflare`.

Create a bucket on `backblaze.com`, upload any file, click to browse the file, and obtain the domain name from the `Friendly URL`, which is `f003.backblazeb2.com` in this case.

![](//p.3ti.site/1725440783.avif)

In `cloudflare`, set the domain `CNAME` to `f003.backblazeb2.com` and enable the proxy.

![](//p.3ti.site/1725440896.avif)

Modify the `SSL` → encryption mode in `cloudflare` to `Full`

![](//p.3ti.site/1725438572.avif)

Add the transformation rule as shown below, placing it first (the first one has the lowest priority):

![](//p.3ti.site/1725443232.avif)

For `Rewrite to`, select dynamic and modify `your_bucketname` in `concat("/file/your_bucketname",http.request.uri.path)` to your bucket name.

Additionally, in the `cloudflare` transformation rule mentioned above, change `index.html` to `file/your_bucketname/index.html`, and keep other configurations the same.

![](//p.3ti.site/1725441384.avif)