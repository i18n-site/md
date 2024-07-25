# Install & Deploy

## Configuration Token

`i18n.site` The `i18` translation tool is embedded, please [click here to refer to the `i18` document to configure the access token](/i18/use) .

## Install

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Demo Project

Let's start with a demo project and learn how to use `i18n.site` .

We first clone the demo repository and run the command as follows:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Users in mainland China can:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

`demo.i18n.site` The directory name of the code base clone must be `md` to facilitate local preview with `docker` .

### Translate

First, enter the `md` directory and run `i18n.site` , which will translate `en` to `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

After running, translation and cache files will be generated. Please remember to add them to the repository `git add . ` in the `md` directory.

### Local Preview

Install and start `docker` ( `MAC` recommend using [orbstack](https://orbstack.dev) as the runtime of `docker` ).

Then, enter the `docker` directory and run `./up.sh` , and then visit [https://127.0.0.1](https://127.0.0.1) to preview locally.

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Post Content

`i18n.site` Adopts a [single-page application](https://developer.mozilla.org/docs/Glossary/SPA) architecture, and the website entrance page and website content are deployed independently.

After running the above translation, `htm` and `v` directories will be generated in the `md/out/dev` directory.

Here, `dev` indicates that it is built based on the `.i18n/htm/dev.yml` file.

`dev` Under contents :

`htm` Under the directory is the website entrance page.

`v` The directory contains the website content with version number.

Local preview will copy all files to the `out/dev/v/0.1.0` directory regardless of the version number.

For official release, changed files will be copied to the new version number directory.

#### Use -c to Specify the Configuration File

Different configuration files will create corresponding directories under the `out` directory.

For example, `.i18n/htm/ol.yml` will create a `out/ol` directory.

`dev.yml` and `ol.yml` are the default configurations.

`dev` is the abbreviation of `development` , which represents the development environment, is used for local preview, and is also the default configuration file.
`ol` is the abbreviation of `online` , which represents the online environment, is used for official release, and is also the default configuration file when publishing to `npm` using the command line parameter `-n` .

You can also create other configuration files. Use `--htm_conf` on the command line to specify the configuration file name:

for example:
```
i18n.site --htm_conf yourConfig --save
```

Here `--save` indicates the update release version number.

#### <a rel=id href="#npm" id="npm"></a> Publish content to npmjs.com

Publishing content to [npmjs.com](//npmjs.com) is the recommended default solution (see [Front-end High Availability](/i18n.site/feature#ha) ).

##### npm login & Release

Install `nodejs` use `npm login` to log in.

Edit `md/.i18n/htm/ol.yml` change `i18n.site` in `v: //unpkg.com/i18n.site` to your own `npm` package name.

Just use the unoccupied package name on [npmjs.com](//npmjs.com) . Using the website domain name as the package name is a good choice.

When publishing based on the `npm` package, **be sure to use `//unpkg.com/`** as the prefix of the `v:` value. The cache time `i18n.site` under this prefix path `/.v` has been specially optimized to enable timely viewing of new releases.

Run `i18n.site --npm` or `i18n.site -n` in the `md` directory to translate and publish.

If you use a continuous integration environment to publish, there is no need to install it `nodejs` Just copy the logged-in and published permission `~/.npmrc` to the environment.

If you modify the package name in `v:` in `ol.yml` , please **be sure to delete `.i18n/v/ol` first** and then publish it.

##### Proxy Server Published by npm

If users in mainland China encounter network problems and are unable to publish the `npm` package, they can set the environment variable `https_proxy` to configure the proxy server.

Assuming that your proxy server port is `7890` you can write:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Self-Hosted Content

If you want to self-host the content, first, edit `md/.i18n/htm/ol.yml` and change `v: //unpkg.com/i18n.site` to your URL prefix, such as `v: //i18n-v.xxx.com` .

Enter the `md` directory and run

```
i18n.site --htm_conf ol --save
```

or abbreviation

```
i18n.site -c ol -s
```

Then, configure the content in the `md/out/ol/v` directory to the URL prefix path set in `v:` .

Finally, **configure the cache time of the path ending in `/.v` to `1s`** , otherwise the newly released content cannot be accessed immediately.

The cache time for other paths can be set to one year or more to reduce unnecessary requests.

##### Host Content to s3

To self-host content, in addition to using your own server, another common option is to use `S3` + `CDN` .

You can use [rclone](https://rclone.org) Login `S3` server, then refer to and modify the script below, and only copy incremental changes to `S3` each time you publish.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Remember to configure `CDN` so that the cache time of the path ending in `/.v` is `1s` , otherwise you will not be able to access the newly released content immediately.

### Publish Website

The website can be deployed anywhere, [github page](https://pages.github.com) and [cloudflare page](https://pages.cloudflare.com) are good choices.

Because the website adopts the architecture of [a single-page application](https://developer.mozilla.org/docs/Glossary/SPA) , remember to rewrite the URL path that does not contain `. ` to `index.html` .

The website entry page only needs to be deployed once, and there is no need to redeploy the website entry page for subsequent content updates.

#### Deploy on github page

First [click here github to create an organization](https://github.com/account/organizations/new?plan=free) . The following organization name is `i18n-demo` as an example.

Then create a warehouse under this organization `i18n-demo.github.io` (Please replace `i18n-demo` with the organization name you created):

<img alt="" src="https://p.3ti.site/1721098657.avif">

When publishing the content in the previous article, it has been generated `out/ol/htm` Please enter this directory and run :

```
ln -s index.html 404.html
```


Because `github page` does not support URL path rewriting, so `404.html` is used instead.

Then run the following command in the `htm` directory (remember to replace `i18n-demo/i18n-demo.github.io.git` with your own warehouse address) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

After pushing the code, wait for the deployment of `github page` to run successfully (as shown below), and then you can access it.

<img src="//p.3ti.site/1721116586.avif" width="350px">

For demo page please see:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Deploy on cloudflare page

[cloudflare page](//pages.cloudflare.com) Compared with `github page` , it provides path rewriting and is more friendly to mainland China and is more accessible. It is recommended to use.

`cloudflare page` The deployment is usually based on the deployment of `github page` above.

Create a project and bind the above `i18n-demo.github.io` warehouse.

The process is shown in the figure below:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

Please click `Add Account` to grant access to the `i18n-demo` .

If you have bound the warehouse of another organization, you may need to click `Add Account` twice to authorize it twice before the new organization will be displayed.

<img alt="" src="https://p.3ti.site/1721118306.avif">

Next select `i18n-demo.github.io` Warehouse, then click `Begin setup` , and use the default values ​​for subsequent steps.

<img alt="" src="https://p.3ti.site/1721118490.avif">

After binding for the first time, you need to wait a few minutes before you can access it.

After deployment, you can bind a custom domain name.

<img alt="" src="https://p.3ti.site/1721119459.avif">

After binding the custom domain name, please go to the domain name to configure the path rewriting of the single-page application, as shown below:

<img alt="" src="https://p.3ti.site/1721119320.avif">

The rules in the picture above are as follows. Please replace `i18n.site` in the first line below with the domain name bound to you.

```
(http.host in {"i18n.site"}) and not (
ends_with(http.request.uri.path,".html") or
ends_with(http.request.uri.path,".htm") or
ends_with(http.request.uri.path,".ico") or
ends_with(http.request.uri.path,".js") or
ends_with(http.request.uri.path,".avif") or
ends_with(http.request.uri.path,".css") or
ends_with(http.request.uri.path,".json") or
ends_with(http.request.uri.path,".png") or
ends_with(http.request.uri.path,".svg") or
ends_with(http.request.uri.path,".txt") or
ends_with(http.request.uri.path,".webmanifest") or
ends_with(http.request.uri.path,".xml")
)
```

In addition, please configure the cache rules, as shown below, and set the cache duration to one month.

<img alt="" src="https://p.3ti.site/1721125111.avif">

Please change the domain name matching in the second step in the picture above to the domain name you bound.

#### Optimizing Website Deployment in Mainland China

If you want to obtain better accessibility performance in the network environment of mainland China, please [register a domain name](//beian.aliyun.com) first.

Then, use the object storage of cloud vendors in mainland China + `CDN` Deploy `out/ol/htm` following content.

You can use edge computing to rewrite the path to adapt to single-page applications, such as [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) It can be configured like this:

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
<img alt="" src="https://p.3ti.site/1721121273.avif">

Because `MX` records and `CNAME` records cannot coexist, if you want to receive domain name emails at the same time, you need to cooperate with the [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) script to flatten `CNAME` into `A` record.

In addition, because the overseas traffic charges of cloud vendors in mainland China are relatively expensive, if you want to optimize costs, you can use [Huawei Cloud DNS 's free geographical resolution](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) and [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) 's custom domain name (as shown below) to achieve traffic diversion──Traffic in mainland China Baidu Cloud `CDN` international traffic goes cloudflare .

<img alt="" src="https://p.3ti.site/1721119788.avif">

These deployment optimization solutions are more complex and will be introduced in separate chapters in the future.

#### Generic Domain Name Redirection

If you use `i18n.site` to generate a website as your main website, you usually need to configure pan-domain redirection, that is, redirect `*.xxx.com` (including `www.xxx.com` ) access to `xxx.com` .

This requirement can be achieved with the help of Alibaba Cloud `CDN` 's `EdgeScript` ( [English document](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Chinese document](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Add a domain name in [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) and point `*.xxx.com` domain name to Alibaba Cloud `CDN` 's `CNAME` .

<img alt="" src="https://p.3ti.site/1721122000.avif">

For example, the pan-domain name redirection configuration of `*.i18n.site` in the picture above is as follows:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### Deploy With nginx

Please add a configuration similar to the following in `server` nginx where `/root/i18n/md/out/ol/htm` please change it to the path of your own project `out/ol/htm` :

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

#### public

Static files of the website, such as `favicon.ico` `robots.txt` , etc.

The icon files here can be generated with [realfavicongenerator.net](https://realfavicongenerator.net) .

#### .i18n

`.i18n` Under the directory are `i18n.site` 's configuration files, translation cache, etc. See the next chapter ["Configuration"](/i18n.site/conf) for details.

#### en

Source language directory, corresponding `.i18n/conf.yml` `fromTo` `en` in the configuration file

```yaml
i18n:
  fromTo:
    en: zh
```

Please refer to the configuration of translation [i18](/i18/use)

