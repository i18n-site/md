# Search Engine Optimization (SEO)

## Principle

`i18n.site` adopts a non-refreshing single-page architecture. In order to facilitate search indexing, a separate static page and `sitemap.xml` will be generated for crawlers to crawl.

When the `User-Agent` of the access request is that of a search engine crawler, the request will be redirected to the static page via `302`.

On static pages, use `link` to indicate the links to different language versions of this page, such as:

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```

## Configure the Object Storage for uploading static files

Static files can be generated locally, but a more common approach is to upload them to the object storage.

Take the `.i18n/htm/ol.yml` configuration file in the demo project as an example

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

Please first modify the value of `host:` above to your domain name, such as `i18n.site`.

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

In the configuration, please change `i18n.site` to the value of `host:` in `.i18n/htm/ol.yml`, multiple object stores can be configured under `s3`, and the `region` field is optional (many object stores do not need to set this field).

Then run `i18n.site -n` to republ

If you have modified `~/.config/i18n.site.yml` and wish to re-upload, please clear the upload cache using the following command in the project's root directory:

```
rm -rf .i18n/data/seo .i18n/data/public
```

## Cloudflare Configuration

Host the domain name at [Cloudflare](//www.cloudflare.com).

### Conversion Rules

Implement the conversion rules depicted in the following image:

![](//p.3ti.site/1725436822.avif)

The rule code is provided below; please replace "i18n.site" with your domain name:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Caching Rules

Include the following cache rules:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Redirect Rules

Configure the redirection rules as indicated below, replacing "i18n.site" with your domain name:

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

`URL redirect` Select dynamic redirection. Please modify `/en` in the redirection path `concat("/en",http.request.uri.path,".htm")` to the default language you want search engines to index.

## Baidu Intelligent Cloud Configuration

For services targeting mainland China, utilize [Baidu Smart Cloud](//cloud.baidu.com).

Upload data to Baidu Object Storage and link it to Baidu Content Distribution Network.

Create the following script in [EdgeJS Edge Service](//console.bce.baidu.com/cdn/#/cdn/ejs/list):

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

Click `Debug`, then click Publish to the entire network.

![](//p.3ti.site/1725437754.avif)

## Advanced Usage: Traffic Distribution Based on Geographical Resolution

If you want to provide services in mainland China and also want `cloudflare`'s free international traffic, you can use `DNS` with regional resolution.

For example, [Huawei Cloud DNS](https://www.huaweicloud.com) offers free regional resolution. This allows mainland Chinese traffic to go through Baidu Smart Cloud, while international traffic goes through `cloudflare`.

There are some potential issues when configuring `cloudflare`. Here are a few points to note:

### Domain Name Hosted on Other `DNS`, How to Use `cloudflare`

First, bind an arbitrary domain name to `cloudflare`, then use `SSL/TLS` → Custom Domain to associate the main domain name with this domain name.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` Cannot Be Accessed via a Custom Domain Name

Because `cloudflare`'s built-in object storage `R2` doesn't support custom domain access, you need to use a third-party object storage to host static files.

Here, we use [backblaze.com](https://www.backblaze.com) as an example to demonstrate how to bind a third-party object storage to `cloudflare`.

Create a bucket at `backblaze.com`, upload any file, click to browse the file, and obtain the domain name of the `Friendly URL`, which is `f003.backblazeb2.com` in this case.

![](//p.3ti.site/1725440783.avif)

In `cloudflare`, change the domain name `CNAME` to `f003.backblazeb2.com` and enable the proxy.

![](//p.3ti.site/1725440896.avif)

Modify `cloudflare`'s `SSL` → Encryption Mode to `Full`

![](//p.3ti.site/1725438572.avif)

Add the conversion rule as shown in the following image, placing it at the top (the first rule has the lowest priority):

![](//p.3ti.site/1725443232.avif)

Select "Dynamic" for `Rewrite to`, and replace `your_bucketname` in `concat("/file/your_bucketname", http.request.uri.path)` with your bucket name.

Additionally, in the `cloudflare` conversion rule mentioned above, change `index.html` to `file/your_bucketname/index.html`, and keep other configurations the same.

![](//p.3ti.site/1725441384.avif)