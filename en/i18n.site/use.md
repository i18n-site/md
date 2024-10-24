# Install & Deploy

## Installation

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Configuration Token

`i18n.site` incorporates an embedded `i18` translation tool. Please [refer to the `i18` documentation for instructions on configuring the access token](/i18/use).

## Demo Project

Let's kick off with a demo project to familiarize ourselves with the usage of `i18n.site`.

First, clone the demo repository and execute the following command:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

For users in mainland China:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

Ensure that the cloned directory for the `demo.i18n.site` codebase is named `md`, as this is necessary for local preview with `docker`.

### Translation

Begin by navigating to the `md` directory and running `i18n.site`. This will translate from `en` to `zh`.

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Once executed, translation and cache files will be created. Remember to add them to the repository with `git add .` in the `md` directory.

### Local Preview

Install and start `docker` ( `MAC` user recommends using [orbstack](https://orbstack.dev) as the runtime for `docker` ).

Next, go to the `docker` directory and run `./up.sh`, then visit [https://127.0.0.1](https://127.0.0.1) to preview locally.

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Publishing Content

`i18n.site` utilizes a [single-page application](https://developer.mozilla.org/docs/Glossary/SPA) architecture, with the website entry page and content deployed separately.

After running the translation, you will find `htm` and `v` directories under `md/out/dev`.

Here, `dev` indicates that it is built based on the `.i18n/htm/dev.yml` configuration file.

`dev` Directory:

The `htm` directory contains the website's entry page.

The `v` directory houses the website content with versioning.

For local preview, the version number is irrelevant, as all files will be copied to the `out/dev/v/0.1.0` directory.

For a formal release, modified files will be copied to a new version number directory.

#### Specify the configuration file using `-c`

Different configuration files will generate corresponding directories within the `out` directory.

For instance, `.i18n/htm/ol.yml` will create the `out/ol` directory.

`dev.yml` and `ol.yml` are the default configurations provided.

`dev` is an abbreviation for `development`, signifying the development environment, used for local preview, and is the default configuration file.
`ol` is an abbreviation for `online`, indicating the production environment, used for official releases. It is also the default configuration file when deploying to `npm` using the `-n` command line parameter.

You can also create additional configuration files. Use `--htm_conf` on the command line to specify the configuration file name:

For example:
```
i18n.site --htm_conf yourConfig --save
```

Here, `--save` indicates updating the release version number.

#### <a rel=id href="#npm" id="npm"></a> Publishing Content to npmjs.com

Publishing content to [npmjs.com](//npmjs.com) is the recommended default approach (refer to [Front-end High Availability](/i18n.site/feature#ha)).

##### npm Login & Release

Install `nodejs` and log in using `npm login`.

Please edit `md/.i18n/htm/ol.yml` and replace the value of [`md:`](//github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/ol.yml#L7) `YOUR_NPM_PACKAGE` with the name of your own `npm` package. Any name that is not taken on [npmjs.com](//npmjs.com) is acceptable.

Afterward, make the necessary modifications to `md/.i18n/htm/ol.package.json`

Run `i18n.site --npm` or `i18n.site -n` in the `md` directory to translate and publish.

If you are using a continuous integration environment for publishing, there is no need to install `nodejs`. Simply copy the logged-in and publishing-permission `~/.npmrc` to the environment.

If you modify the package name in `ol.yml` for `v:`, **be sure to delete `.i18n/v/ol` first** before publishing.

##### npm's Proxy Server for Publishing

For users in mainland China who may encounter network issues preventing the publication of `npm` packages, you can set the environment variable `https_proxy` to configure a proxy server.

Assuming your proxy server port is `7890`, you can set it up as follows:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Self-Hosted Content

If you wish to self-host your content, first edit `md/.i18n/htm/ol.yml` and change `v: //unpkg.com/i18n.site` to your URL prefix, such as `v: //i18n-v.xxx.com`.

Navigate to the `md` directory and run:

```
i18n.site --htm_conf ol --save
```

Or use the shorthand

```
i18n.site -c ol -s
```

Next, configure the content in the `md/out/ol/v` directory to the URL prefix set in `v:`.

Finally, **configure the cache time for paths ending in `/.v` to `1s`**. Otherwise, new releases will not be accessible immediately.

You can set the cache time for other paths to one year or more to reduce unnecessary requests.

##### Hosting Content on S3

For self-hosting content, another common option is to use `S3` combined with `CDN`.

You can log in to the `S3` server using [rclone](https://rclone.org) and then refer to and modify the following script to copy only incremental changes to `S3` for each release.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Remember to configure `CDN` to set the cache time for paths ending in `/.v` to `1s`. Otherwise, new releases will not be accessible immediately.

### Publishing the Website

You can deploy the website anywhere, with [github page](https://pages.github.com) and [cloudflare page](https://pages.cloudflare.com) being excellent choices.

Because the website uses a [single-page application](https://developer.mozilla.org/docs/Glossary/SPA) architecture, remember to rewrite URL paths that do not contain `. ` to `index.html` .

The website entry page needs to be deployed only once. For subsequent content updates, there is no need to redeploy the website entry page.

#### Deploying on GitHub Pages

First, [create an organization on GitHub](https://github.com/account/organizations/new?plan=free). For the purpose of this example, let's assume the organization name is `i18n-demo`.

Then, create a repository named `i18n-demo.github.io` under this organization (replace `i18n-demo` with the name of your organization):

![](https://p.3ti.site/1721098657.avif)

As mentioned in the previous section on publishing content, `out/ol/htm` has already been generated. Please navigate to this directory and run:

```
ln -s index.html 404.html
```


Because `github page` does not support URL path rewriting, `404.html` is used as a substitute.

Next, run the following command in the `htm` directory (replace `i18n-demo/i18n-demo.github.io.git` with your own repository address):

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

After pushing the code, wait for the successful deployment of `github page` (as shown in the following image) before accessing it.

<img src="//p.3ti.site/1721116586.avif" width="350px">

For the demo page, please refer to:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Deploying on Cloudflare Pages

Compared to `github page`, the [cloudflare page](//pages.cloudflare.com) offers path rewriting and enhanced accessibility for mainland China, making it a recommended choice.

The deployment of `cloudflare page` typically follows the deployment process of `github page`.

Create a project and bind the `i18n-demo.github.io` repository mentioned above.

The process is illustrated in the following diagram:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Click `Add Account` to grant access to the `i18n-demo` organization.

If you have already bound another organization's repository, you may need to click `Add Account` twice to authorize twice before the new organization will be displayed.

![](https://p.3ti.site/1721118306.avif)

Next, select the `i18n-demo.github.io` repository, then click `Begin setup`, and proceed with the default values for the subsequent steps.

![](https://p.3ti.site/1721118490.avif)

After the first binding, you will need to wait a few minutes before you can access it.

After deployment, you can bind a custom domain name.

![](https://p.3ti.site/1721119459.avif)

After binding the custom domain name, please configure the single-page application path rewriting under the domain, as shown in the following image:

![](https://p.3ti.site/1721119320.avif)

The rules in the image above are as follows. Replace `i18n.site` in the first line below with the domain name you have bound.

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

In addition, please configure the cache rules, as shown in the image below, and set the cache duration to one month.

![](https://p.3ti.site/1721125111.avif)

Please change the domain name matching in the second step of the image above to the domain name you have bound.

#### Optimizing Website Deployment in Mainland China

To achieve better accessibility performance in the network environment of mainland China, please [register your domain name](//beian.aliyun.com) first.

Then, use the object storage and `CDN` provided by mainland Chinese cloud vendors to deploy the content under `out/ol/htm`.

You can use edge computing to rewrite paths to accommodate single-page applications. For example, [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) can be configured as follows:

```js
var uri=r.uri,p=uri.lastIndexOf('.');
if(
  p<0 || !'|avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml|'.includes('|'+uri.slice(p+1)+'|')
){
  r.uri='/index.html'
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
![](https://p.3ti.site/1721121273.avif)

Because `MX` records and `CNAME` records cannot coexist, if you need to receive domain name emails simultaneously, you will need to use the [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) script to flatten `CNAME` into `A` records.

In addition, because the cost of overseas traffic from mainland Chinese cloud vendors is relatively high, to optimize costs, you can use [Huawei Cloud DNS's free geographical resolution](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) and [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas)'s custom domain name (as shown in the image below) to achieve traffic diversion—traffic in mainland China will go through Baidu Cloud `CDN`, while international traffic will go through Cloudflare.

![](https://p.3ti.site/1721119788.avif)

These deployment optimization solutions are more complex and will be covered in a separate chapter in the future.

#### Generic Domain Name Redirection

If you use `i18n.site` to generate a website as your main site, you will typically need to configure generic domain redirection, which involves redirecting traffic from `*.xxx.com` (including `www.xxx.com`) to `xxx.com`.

This requirement can be achieved using Alibaba Cloud `CDN` `EdgeScript` ( [English document](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Chinese document](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Add the domain name in [Alibaba Cloud CDN](https://cdn.console.aliyun.com/domain/list) and point the `*.xxx.com` domain to Alibaba Cloud `CDN`'s `CNAME` record.

![](https://p.3ti.site/1721122000.avif)

For example, the generic domain redirection configuration for `*.i18n.site` in the image above is as follows:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

#### Deploying with nginx

Please add a configuration similar to the following in the `server` block of nginx. Replace `/root/i18n/md/out/ol/htm` with the path to your own `out/ol/htm` directory:

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Directory Structure

#### `public`

Static files of the website, such as `favicon.ico`, `robots.txt`, etc.

You can generate the icon files using [realfavicongenerator.net](https://realfavicongenerator.net).

#### `.i18n`

The `.i18n` directory contains the configuration files and translation cache for `i18n.site`. See the next chapter ["Configuration"](/i18n.site/conf) for more details.

#### `en`

The source language directory corresponds to `en` in the `fromTo` section of the `.i18n/conf.yml` configuration file

```yaml
i18n:
  fromTo:
    en: zh
```

Please refer to the translation configuration in [i18](/i18/use).