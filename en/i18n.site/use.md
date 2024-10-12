# Install & Deploy

## Configuration Token

`i18n.site` has a built-in `i18` translation tool. Please [click here to refer to the `i18` document to configure the access token](/i18/use).

## Install

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Demo Project

Let's start with a demo project to learn how to use `i18n.site`.

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

The directory name of the `demo.i18n.site` code base clone must be `md` to facilitate local preview with `docker`.

### Translate

First, enter the `md` directory and run `i18n.site`, which will translate `en` to `zh`.

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

After running, translation and cache files will be generated. Please remember to add them to the repository in the `md` directory by running `git add.`.

### Local Preview

Install and start `docker` (for `MAC` users, it is recommended to use [orbstack](https://orbstack.dev) as the runtime for `docker`).

Then, enter the `docker` directory and run `./up.sh`, and then visit [https://127.0.0.1](https://127.0.0.1) to preview locally.

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Post Content

`i18n.site` adopts a [single-page application](https://developer.mozilla.org/docs/Glossary/SPA) architecture, and the website entrance page and website content are deployed independently.

After running the above translation, the directories `htm` and `v` will be generated under the `md/out/dev` directory.

Here, `dev` indicates that it is built based on the `.i18n/htm/dev.yml` configuration file.

In the `dev` directory:

The `htm` directory is the website entrance page.

The `v` directory contains website content with version numbers.

Local preview does not care about the version number and will copy all files to the `out/dev/v/0.1.0` directory.

For official release, changed files will be copied to the new version number directory.

#### Use -c to Specify the Configuration File

Different configuration files will create corresponding directories in the `out` directory.

For example, `.i18n/htm/ol.yml` will create the `out/ol` directory.

`dev.yml` and `ol.yml` are the default configuration files.

`dev` is the abbreviation of `development`, indicating the development environment, used for local preview, and is also the default configuration file.
`ol` is the abbreviation of `online`, indicating the online environment, which is used for official release and is also the default configuration file when using the command line parameter `-n` to release to `npm`.

You can also create other configuration files. Use `--htm_conf` on the command line to specify the configuration file name to use:

For example:
```
i18n.site --htm_conf yourConfig --save
```

Here, `--save` represents the update of the release version number.

#### <a rel=id href="#npm" id="npm"></a> Publish content to npmjs.com

Publishing content to [npmjs.com](//npmjs.com) is the recommended default solution (see [Front-end High Availability](/i18n.site/feature#ha)).

##### npm login & Release

Install `nodejs`, and log in with `npm login`.

Edit `md/.i18n/htm/ol.yml` and change `i18n.site` in `v: //unpkg.com/i18n.site` to your own `npm` package name.

Just use the unoccupied package name on [npmjs.com](//npmjs.com). Using the website domain name as the package name is a good choice.

When publishing based on the `npm` package, **it is imperative to use `//unpkg.com/` as the prefix for the `v:` value**. `i18n.site` has implemented special optimizations for the cache time of the `/.v` under this prefix path, ensuring that new releases are visible in a timely manner.

Run `i18n.site --npm` or `i18n.site -n` in the `md` directory to translate and publish.

If you use a continuous integration environment to publish, there is no need to install `nodejs`. Just copy the logged-in and publishing permission `~/.npmrc` to the environment.

Should you alter the package name of `v:` within the `ol.yml` file, **you must first delete `.i18n/v/ol`** before proceeding with the publication.

##### Npm Package Proxy Server

If users in mainland China encounter network problems and are unable to publish `npm` packages, they can set the environment variable `https_proxy` to configure the proxy server.

Assuming that your proxy server port is `7890`, you can write:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Self-Hosted Content

If you want to self-host the content, first edit `md/.i18n/htm/ol.yml` and change `v: //unpkg.com/i18n.site` to your URL prefix, such as `v: //i18n-v.xxx.com`.

Enter the `md` directory and run

```
i18n.site --htm_conf ol --save
```

Or in short form

```
i18n.site -c ol -s
```

Then, configure the content in the `md/out/ol/v` directory to the URL prefix path set in `v:`.

Lastly, **ensure that the cache time for paths ending with `/.v` is set to `1s`**, as failure to do so will prevent immediate access to new content releases.

The cache time for other paths can be set to one year or more to reduce unnecessary requests.

##### Host the content on S3

To self-host content, in addition to using your own server, another common option is to use `S3` + `CDN`.

You can utilize [rclone](https://rclone.org) to log in to the `S3` server, and then refer to and modify the subsequent script. For each release, only copy the incremental changes to `S3`.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Remember to configure `CDN` such that the cache time for the path ending with `/.v` is `1s`, otherwise, the newly released content cannot be accessed promptly.

### Publish the Website

The website can be deployed anywhere, and both [github page](https://pages.github.com) and [cloudflare page](https://pages.cloudflare.com) are excellent choices.

As the website adopts a [single-page application](https://developer.mozilla.org/docs/Glossary/SPA) architecture, it is necessary to remember to rewrite the URL paths that do not contain `.` to `index.html`.

The website entry page only needs to be deployed once, and there is no need to redeploy the website entry page for subsequent content updates.

#### Deploy on the github page

Firstly, [click here on github to create an organization](https://github.com/account/organizations/new?plan=free). Hereinafter, the organization name is taken as `i18n-demo` as an example.

Then create the repository `i18n-demo.github.io` under this organization (please replace `i18n-demo` with the organization name you created):

![](https://p.3ti.site/1721098657.avif)

When publishing the content in the previous section, `out/ol/htm` has been generated. Please enter this directory and execute:

```
ln -s index.html 404.html
```


Because `github page` does not support URL path rewriting, `404.html` is used instead.

Then run the following command in the `htm` directory (remember to replace `i18n-demo/i18n-demo.github.io.git` with your own repository address):

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

After pushing the code, wait for the deployment of `github page` to succeed (as shown below) before being able to access it.

<img src="//p.3ti.site/1721116586.avif" width="350px">

For the demo page, please refer to:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Deploy on the cloudflare page

[cloudflare page](//pages.cloudflare.com) compared to `github page`, it provides path rewriting and is more friendly and accessible to mainland China, and it is recommended to use.

The deployment of `cloudflare page` is usually based on the deployment of `github page` mentioned above.

Create a project and bind the `i18n-demo.github.io` repository above.

The process is shown in the figure below:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Please click `Add Account` to grant access to the `i18n-demo` organization.

If you have bound the repository of another organization before, you may need to click `Add Account` twice to authorize twice before the new organization will be displayed.

![](https://p.3ti.site/1721118306.avif)

Next, select the repository `i18n-demo.github.io`, then click `Begin setup`, and use the default values for the subsequent steps.

![](https://p.3ti.site/1721118490.avif)

After the first binding, you need to wait a few minutes before being able to access it.

After deployment, you can bind a custom domain name.

![](https://p.3ti.site/1721119459.avif)

After binding the custom domain name, please go to the domain name to configure the path rewriting of the single-page application, as shown below:

![](https://p.3ti.site/1721119320.avif)

The rules in the above picture are as follows. Please replace `i18n.site` in the first line below with the domain name you bound.

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

In addition, please configure the cache rules, as shown below, and set the cache duration to one month.

![](https://p.3ti.site/1721125111.avif)

Please change the domain name matching in the second step in the picture above to the domain name you bound.

#### Optimizing website deployment in mainland China

If you want to obtain better accessibility performance in the network environment of mainland China, please [register the domain name](//beian.aliyun.com) first.

Then, use the object storage of the cloud vendors in mainland China + `CDN` to deploy the following content of `out/ol/htm`.

You can use edge computing to rewrite the path to adapt to single-page applications. For example, [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) can be configured like this:

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

Because the `MX` record and the `CNAME` record cannot coexist, if you want to receive domain name emails at the same time, you need to cooperate with the [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) script to flatten the `CNAME` to the `A` record.

In addition, because the overseas traffic charges of cloud vendors in mainland China are relatively expensive, if you want to optimize the cost, you can use [Huawei Cloud DNS's free geographical resolution](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) and [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas)'s custom domain name (as shown below) to achieve traffic diversion ── the traffic in mainland China goes to Baidu Cloud `CDN`, and the international traffic goes to cloudflare.

![](https://p.3ti.site/1721119788.avif)

These deployment optimization solutions are more complex and will be introduced in separate chapters in the future.

#### Generic domain name redirection

If you use `i18n.site` to generate a website as your main website, you usually need to configure pan-domain name redirection, that is, redirect the access of `*.xxx.com` (including `www.xxx.com`) to `xxx.com`.

This requirement can be achieved with the help of Alibaba Cloud `CDN` `EdgeScript` ( [English document](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Chinese document](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Add a domain name in [Alibaba Cloud's CDN](https://cdn.console.aliyun.com/domain/list) and point the `*.xxx.com` `CNAME` in Alibaba Cloud `CDN`.

![](https://p.3ti.site/1721122000.avif)

For example, the pan-domain name redirection configuration of `*.i18n.site` in the picture above is as follows:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

#### Deploy with nginx

Please add a configuration similar to the following in the `server` paragraph of nginx. Please change `/root/i18n/md/out/ol/htm` to the path of your own project `out/ol/htm` :

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

The static files of the website, such as `favicon.ico`, `robots.txt`, etc.

The icon files here can be generated by using [realfavicongenerator.net](https://realfavicongenerator.net).

#### `.i18n`

Under the `.i18n` directory are the configuration files, translation cache, etc. of `i18n.site`. For details, see the next chapter ["Configuration"](/i18n.site/conf).

#### `en`

The source language directory, corresponding to `en` of `fromTo` in the `.i18n/conf.yml` configuration file

```yaml
i18n:
  fromTo:
    en: zh
```

Please refer to the configuration of translation [i18](/i18/use).