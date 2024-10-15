# Search Engine Optimization (SEO)

## Principle

`i18n.site` employs a single-page architecture without page refreshes. To aid search engine indexing, it generates separate static pages and a `sitemap.xml` for crawlers to access.

When the `User-Agent` of an access request is identified as a search engine crawler, the request will be redirected to a static page via a `302` redirect.

On the static pages, use the `link` tag to specify the links to different language versions of the page, for example:

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```

## Configure Object Storage for Uploading Static Files

Static files can be generated locally, but it is more common to upload them to object storage.

Consider the `.i18n/htm/ol.yml` configuration file from the demonstration project as an example

```yml
host:
seo: true
out:
  - s3
v: //unpkg.com/i18n.site
x: 18x
importmap:
  i/: //unpkg.com/@i18n.site/
```

Please first update the value of `host:` to your domain name, for instance, `i18n.site`.

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

In the configuration, replace `i18n.site` with the value of `host:` from `.i18n/htm/ol.yml`. Under `s3`, you can configure multiple object storage options, with the `region` field being optional (many object storage services do not require this field).

Then execute `i18n.site -n` to republish the project.

If you have modified `~/.config/i18n.site.yml` and wish to upload again, clear the upload cache in the project root directory using the following command:

```
rm -rf .i18n/data/seo .i18n/data/public
```

## Cloudflare Configuration

Domain hosted on [Cloudflare](//www.cloudflare.com).

### Conversion Rules

Add the conversion rules as shown in the diagram below:

![](//p.3ti.site/1725436822.avif)

The rule code is as follows; please replace "i18n.site" with your domain name:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Caching Rules

Add the following caching rules:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Redirection Rules

Set the redirection rules as follows; please replace "i18n.site" with your domain name:

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

For `URL redirect`, choose dynamic redirection. Modify the redirection path `concat("/en", http.request.uri.path, ".htm")` by changing `/en` to the default language you want search engines to index.

## Baidu Intelligent Cloud Configuration

If you need to provide services to users in mainland China, you can use [Baidu Intelligent Cloud](//cloud.baidu.com).

Upload data to Baidu Object Storage and bind it to Baidu's Content Delivery Network.

Then, create a script in [EdgeJS Edge Service](//console.bce.baidu.com/cdn/#/cdn/ejs/list) as follows:

```js
var uri=r.uri,p=uri.lastIndexOf('.');

if(
  p<0 || !/html?|css|rss|avif|md|ico|gz|js|json|png|svg|txt|webmanifest|xml/.test(uri.slice(p+1))
){
  const ua = r.headersIn['User-Agent'].toLowerCase();
  if (/facebookexternalhit|slurp|bot|spider|curl/.test(ua)) {
    r.return(302,(/baidu|yisou|sogou|360|byte/.test(ua)?'/zh':'/en')+r.uri+'.htm')
    return
  }
  r.uri = '/index.html'
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

Click `Debug`, then click "Publish to the Entire Network".

![](//p.3ti.site/1725437754.avif)

## Advanced Usage: Distributing Traffic Based on Geographical Resolution

If you wish to offer services in mainland China while also benefiting from `cloudflare`'s free international traffic, you can utilize `DNS` with regional resolution capabilities.

For instance, [Huawei Cloud DNS](https://www.huaweicloud.com) offers free regional resolution services. With it, mainland Chinese traffic can be routed through Baidu Smart Cloud, while international traffic can be directed to `cloudflare`.

There are numerous pitfalls in configuring `cloudflare`; here are some key points to consider:

### How to use `cloudflare` when the domain is hosted on another `DNS`?

First, bind any domain name to `cloudflare`, then under `SSL/TLS` → Custom Domains, link the main domain to this domain.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` cannot be accessed via a custom domain name

Because `cloudflare`'s built-in object storage `R2` does not support custom domain access, a third-party object storage service must be used to host static files.

Taking [backblaze.com](https://www.backblaze.com) as an example, this section demonstrates how to bind a third-party object storage to `cloudflare`.

Create a bucket on `backblaze.com`, upload any file, click to browse the file, and obtain the domain name for the `Friendly URL`, which in this case is `f003.backblazeb2.com`.

![](//p.3ti.site/1725440783.avif)

At `cloudflare`, set the domain to `CNAME` as `f003.backblazeb2.com` and enable the proxy.

![](//p.3ti.site/1725440896.avif)

Adjust the `SSL` → Encryption Mode in `cloudflare` to `Full`

![](//p.3ti.site/1725438572.avif)

Add the conversion rule as shown in the diagram below, placing it at the top (the top rule has the lowest priority)

![](//p.3ti.site/1725443232.avif)

Select `Rewrite to` as dynamic and replace `your_bucketname` in `concat("/file/your_bucketname", http.request.uri.path)` with your actual bucket name.

Moreover, in the previous `cloudflare` rewrite rule, change `index.html` to `file/your_bucketname/index.html`, while keeping the rest of the configurations unchanged.

![](//p.3ti.site/1725441384.avif)